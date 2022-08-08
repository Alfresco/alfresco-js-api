/*!
 * @license
 * Copyright 2018 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ee, { Emitter } from 'event-emitter';
import superagent, { Response } from 'superagent';
import { Authentication } from './authentication/authentication';
import { RequestOptions, HttpClient, SecurityOptions } from './api-clients/http-client.interface';
import { Oauth2 } from './authentication/oauth2';
import { BasicAuth } from './authentication/basicAuth';
import { isBrowser, paramToString } from './utils/helpers';

declare const Blob: any;
declare const Buffer: any;

const isProgressEvent = (event: ProgressEvent | unknown): event is ProgressEvent => Object.prototype.hasOwnProperty.call(event, 'lengthComputable');

export class SuperagentHttpClient implements HttpClient {
    contentTypes = {
        JSON: ['application/json'],
    };

    /**
     * The default HTTP timeout for all API calls.
     */
    timeout: number | { deadline?: number; response?: number } = undefined;

    authCookie: string;

    post<T = any>(url: string, options: RequestOptions, securityOptions: SecurityOptions, emitter: Emitter, globalEmitter: Emitter): Promise<T> {
        return this.request<T>(
            url,
            {
                ...options,
                httpMethod: 'POST',
                contentTypes: options.contentTypes || this.contentTypes.JSON,
                accepts: options.accepts || this.contentTypes.JSON,
            },
            securityOptions,
            emitter,
            globalEmitter
        );
    }

    put<T = any>(url: string, options: RequestOptions, securityOptions: SecurityOptions, emitter: Emitter, globalEmitter: Emitter): Promise<T> {
        return this.request<T>(
            url,
            {
                ...options,
                httpMethod: 'PUT',
                contentTypes: options.contentTypes || this.contentTypes.JSON,
                accepts: options.accepts || this.contentTypes.JSON,
            },
            securityOptions,
            emitter,
            globalEmitter
        );
    }

    get<T = any>(url: string, options: RequestOptions, securityOptions: SecurityOptions, emitter: Emitter, globalEmitter: Emitter): Promise<T> {
        return this.request<T>(
            url,
            {
                ...options,
                httpMethod: 'GET',
                contentTypes: options.contentTypes || this.contentTypes.JSON,
                accepts: options.accepts || this.contentTypes.JSON,
            },
            securityOptions,
            emitter,
            globalEmitter
        );
    }

    delete<T = void>(url: string, options: RequestOptions, securityOptions: SecurityOptions, emitter: Emitter, globalEmitter: Emitter): Promise<T> {
        return this.request<T>(
            url,
            {
                ...options,
                httpMethod: 'DELETE',
                contentTypes: options.contentTypes || this.contentTypes.JSON,
                accepts: options.accepts || this.contentTypes.JSON,
            },
            securityOptions,
            emitter,
            globalEmitter
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    request<T = any>(url: string, options: RequestOptions, securityOptions: SecurityOptions, eventEmitter: Emitter, globalEmitter: Emitter): Promise<T> {
        const { httpMethod, queryParams, headerParams, formParams, bodyParam, contentTypes, accepts, responseType, returnType } = options;

        let request = this.buildRequest(
            httpMethod,
            url,
            queryParams,
            headerParams,
            formParams,
            bodyParam,
            contentTypes,
            accepts,
            responseType,
            eventEmitter,
            returnType,
            securityOptions
        );

        if (returnType === 'Binary') {
            request = request.buffer(true).parse(superagent.parse['application/octet-stream']);
        }

        const promise: any = new Promise((resolve, reject) => {
            request.on('abort', () => {
                eventEmitter.emit('abort');
            });
            request.end((error: any, response: Response) => {
                if (error) {
                    globalEmitter.emit('error', error);
                    eventEmitter.emit('error', error);

                    if (error.status === 401) {
                        globalEmitter.emit('unauthorized');
                        eventEmitter.emit('unauthorized');
                    }

                    if (response && response.text) {
                        error = error || {};
                        reject(Object.assign(error, { message: response.text }));
                    } else {
                        reject({ error: error });
                    }
                } else {
                    if (securityOptions.isBpmRequest) {
                        if (response.header && response.header.hasOwnProperty('set-cookie')) {
                            this.authCookie = response.header['set-cookie'][0];
                        }
                    }
                    let data = {};
                    if (response.type === 'text/html') {
                        data = SuperagentHttpClient.deserialize(response);
                    } else {
                        data = SuperagentHttpClient.deserialize(response, returnType);
                    }

                    eventEmitter.emit('success', data);
                    resolve(data);
                }
            });
        });

        promise.abort = function () {
            request.abort();
            return this;
        };

        return promise;
    }

    private buildRequest(
        httpMethod: string,
        url: string,
        queryParams: { [key: string]: any },
        headerParams: { [key: string]: any },
        formParams: { [key: string]: any },
        // eslint-disable-next-line @typescript-eslint/ban-types
        bodyParam: string | Object,
        contentTypes: string[],
        accepts: string[],
        responseType: string,
        eventEmitter: ee.Emitter,
        returnType: string,
        securityOptions: SecurityOptions
    ) {
        const request = superagent(httpMethod, url);

        const { isBpmRequest, authentications, defaultHeaders = {}, enableCsrf, withCredentials = false } = securityOptions;

        // apply authentications
        this.applyAuthToRequest(request, authentications);

        // set query parameters
        request.query(SuperagentHttpClient.normalizeParams(queryParams));

        // set header parameters
        request.set(defaultHeaders).set(SuperagentHttpClient.normalizeParams(headerParams));

        if (isBpmRequest && enableCsrf) {
            this.setCsrfToken(request);
        }

        if (withCredentials) {
            request.withCredentials();
        }

        // add cookie for activiti
        if (isBpmRequest) {
            request.withCredentials();
            if (this.authCookie) {
                if (!isBrowser()) {
                    request.set('Cookie', this.authCookie);
                }
            }
        }

        // set request timeout
        request.timeout(this.timeout);

        const contentType = SuperagentHttpClient.jsonPreferredMime(contentTypes);

        if (contentType && contentType !== 'multipart/form-data') {
            request.type(contentType);
        } else if (!(request as any).header['Content-Type'] && contentType !== 'multipart/form-data') {
            request.type('application/json');
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(SuperagentHttpClient.normalizeParams(formParams)).on('progress', (event: any) => {
                this.progress(event, eventEmitter);
            });
        } else if (contentType === 'multipart/form-data') {
            const _formParams = SuperagentHttpClient.normalizeParams(formParams);
            for (const key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (SuperagentHttpClient.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]).on('progress', (event: ProgressEvent) => {
                            // jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    } else {
                        request.field(key, _formParams[key]).on('progress', (event: ProgressEvent) => {
                            // jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    }
                }
            }
        } else if (bodyParam) {
            request.send(bodyParam).on('progress', (event: any) => {
                this.progress(event, eventEmitter);
            });
        }

        const accept = SuperagentHttpClient.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'blob' || returnType === 'Blob' || responseType === 'blob' || responseType === 'Blob') {
            request.responseType('blob');
        } else if (returnType === 'String') {
            request.responseType('string');
        }

        return request;
    }

    setCsrfToken(request: any): void {
        const token = SuperagentHttpClient.createCSRFToken();
        request.set('X-CSRF-TOKEN', token);

        if (!isBrowser()) {
            request.set('Cookie', 'CSRF-TOKEN=' + token + ';path=/');
        }

        try {
            document.cookie = 'CSRF-TOKEN=' + token + ';path=/';
        } catch (err) {
            /* continue regardless of error */
        }
    }

    private static createCSRFToken(a?: any): string {
        return a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e16] + (1e16).toString()).replace(/[01]/g, SuperagentHttpClient.createCSRFToken);
    }

    /**
     * Applies authentication headers to the request.
     * @param {Object} request The request object created by a <code>superagent()</code> call.
     */
    private applyAuthToRequest(request: any, authentications: Authentication) {
        if (authentications) {
            switch (authentications.type) {
                case 'basic': {
                    const basicAuth: BasicAuth = authentications.basicAuth;
                    if (basicAuth.username || basicAuth.password) {
                        request.auth(basicAuth.username ? encodeURI(basicAuth.username) : '', basicAuth.password ? encodeURI(basicAuth.password) : '');
                    }
                    break;
                }
                case 'activiti': {
                    if (authentications.basicAuth.ticket) {
                        request.set({ Authorization: authentications.basicAuth.ticket });
                    }
                    break;
                }
                case 'oauth2': {
                    const oauth2: Oauth2 = authentications.oauth2;
                    if (oauth2.accessToken) {
                        request.set({ Authorization: 'Bearer ' + oauth2.accessToken });
                    }
                    break;
                }
                default:
                    throw new Error('Unknown authentication type: ' + authentications.type);
            }
        }
    }

    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|string[]|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns A value of the specified type.
     */
    private static deserialize(response: any, returnType?: any): any {
        if (response === null) {
            return null;
        }

        let data = response.body;

        if (data === null) {
            data = response.text;
        }

        if (returnType) {
            if (returnType === 'blob' && isBrowser()) {
                data = new Blob([data], { type: response.header['content-type'] });
            } else if (returnType === 'blob' && !isBrowser()) {
                data = new Buffer.from(data, 'binary');
            } else if (Array.isArray(data)) {
                data = data.map((element) => {
                    return new returnType(element);
                });
            } else {
                data = new returnType(data);
            }
        }

        return data;
    }

    progress(event: ProgressEvent | unknown, eventEmitter: Emitter): void {
        if (isProgressEvent(event)) {
            const percent = Math.round((event.loaded / event.total) * 100);

            const progress = {
                total: event.total,
                loaded: event.loaded,
                percent: percent,
            };

            eventEmitter.emit('progress', progress);
        }
    }

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param contentTypes
     * @returns  The chosen content type, preferring JSON.
     */
    private static jsonPreferredMime(contentTypes: string[]): string {
        for (let i = 0; i < contentTypes.length; i++) {
            if (SuperagentHttpClient.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }
        return contentTypes[0];
    }
    /**
     * Checks whether the given content type represents JSON.<br>
     * JSON content type examples:<br>
     * <ul>
     * <li>application/json</li>
     * <li>application/json; charset=UTF8</li>
     * <li>APPLICATION/JSON</li>
     * </ul>
     * @param contentType The MIME content type to check.
     * @returns <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
     */
    private static isJsonMime(contentType: string): boolean {
        return Boolean(contentType !== null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
     * Normalizes parameter values:
     * <ul>
     * <li>remove nils</li>
     * <li>keep files and arrays</li>
     * <li>format to string with `paramToString` for other cases</li>
     * </ul>
     * @param {Object.<String, Object>} params The parameters as object properties.
     * @returns {Object.<String, Object>} normalized parameters.
     */
    private static normalizeParams(params: { [key: string]: any }): { [key: string]: any } {
        const newParams: { [key: string]: any } = {};

        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
                const value = params[key];
                if (SuperagentHttpClient.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = paramToString(value);
                }
            }
        }
        return newParams;
    }

    /**
     * Checks whether the given parameter value represents file-like content.
     * @param param The parameter to check.
     * @returns <code>true</code> if <code>param</code> represents a file.
     */
    private static isFileParam(param: any): boolean {
        // Buffer in Node.js
        if (typeof Buffer === 'function' && (param instanceof Buffer || param.path)) {
            return true;
        }
        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }
        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }
        // Safari fix
        if (typeof File === 'object' && param instanceof File) {
            return true;
        }

        return false;
    }
}
