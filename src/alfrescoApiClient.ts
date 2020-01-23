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

import * as ee from 'event-emitter';
import { AlfrescoApiConfig } from './alfrescoApiConfig';

import * as  superagent_ from 'superagent';
import { Authentication } from './authentication/authentication';
import { BasicAuth } from './authentication/basicAuth';
import { Oauth2 } from './authentication/oauth2';
import { Response } from 'superagent';

const EventEmitter = ee;
const superagent = superagent_;
const process: any = {};

declare const Buffer: any;
declare const Blob: any;

export interface RequestOptions {
    path: string;
    httpMethod?: string;
    pathParams?: any;
    queryParams?: any;
    headerParams?: any;
    formParams?: any;
    bodyParam?: any;
    contentTypes?: string[];
    accepts?: string[];
    returnType?: any;
    contextRoot?: string;
    responseType?: string;
}

/**
 * Returns a string representation for an actual parameter.
 * @param param The actual parameter.
 * @returns The string representation of <code>param</code>.
 */
export function paramToString(param: any): string {
    if (param === undefined || param === null) {
        return '';
    }
    if (param instanceof Date) {
        return param.toJSON();
    }
    return param.toString();
}

/**
 * Builds a string representation of an array-type actual parameter, according to the given collection format.
 * @param {Array} param An array parameter.
 * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
 * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
 * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
 */
export function buildCollectionParam(param: string[], collectionFormat: string): string | any[] {
    if (!param) {
        return null;
    }

    switch (collectionFormat) {
        case 'csv':
            return param.map(paramToString).join(',');
        case 'ssv':
            return param.map(paramToString).join(' ');
        case 'tsv':
            return param.map(paramToString).join('\t');
        case 'pipes':
            return param.map(paramToString).join('|');
        case 'multi':
            // return the array directly as SuperAgent will handle it as expected
            return param.map(paramToString);
        default:
            throw new Error('Unknown collection format: ' + collectionFormat);
    }
}

export class AlfrescoApiClient implements ee.Emitter {

    on: ee.EmitterMethod;
    off: ee.EmitterMethod;
    once: ee.EmitterMethod;
    emit: (type: string, ...args: any[]) => void;

    host: string;
    className: string;
    config: AlfrescoApiConfig;
    url: string;
    /**
     * The base URL against which to resolve every API call's (relative) path.
     */
    basePath: string = '';

    /**
     * The authentication methods to be included for all API calls.
     */
    authentications: Authentication = {
        basicAuth: {
            ticket: ''
        },
        type: 'basic'
    };
    /**
     * The default HTTP headers to be included for all API calls.
     */
    defaultHeaders = {
    };

    /**
     * The default HTTP timeout for all API calls.
     */
    timeout: number | { deadline?: number, response?: number } = undefined;

    contentTypes = {
        JSON: ['application/json']
    };

    constructor(host?: string) {
        this.host = host;

        EventEmitter(this);
    }

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param  path The path to append to the base URL.
     * @param  pathParams The parameter values to append.
     * @returns  The encoded path with parameter values substituted.
     */
    buildUrl(path: string, pathParams: any): string {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        let url = this.basePath + path;

        url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            let value;
            if (pathParams.hasOwnProperty(key)) {
                value = paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
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
    isJsonMime(contentType: string): boolean {
        return Boolean(contentType !== null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param contentTypes
     * @returns  The chosen content type, preferring JSON.
     */
    jsonPreferredMime(contentTypes: string[]): string {
        for (let i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }
        return contentTypes[0];
    }

    /**
     * Checks whether the given parameter value represents file-like content.
     * @param param The parameter to check.
     * @returns <code>true</code> if <code>param</code> represents a file.
     */
    isFileParam(param: any): boolean {
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
    normalizeParams(params: { [key: string]: any; }): { [key: string]: any; } {
        const newParams: { [key: string]: any; } = {};

        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
                const value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = paramToString(value);
                }
            }
        }
        return newParams;
    }

    isWithCredentials(): boolean {
        if (this.config) {
            return this.config.withCredentials;
        } else {
            return false;
        }
    }

    /**
     * Applies authentication headers to the request.
     * @param {Object} request The request object created by a <code>superagent()</code> call.
     */
    applyAuthToRequest(request: any) {
        if (this.authentications) {
            switch (this.authentications.type) {
                case 'basic':
                    const basicAuth: BasicAuth = this.authentications.basicAuth;
                    if (basicAuth.username || basicAuth.password) {
                        request.auth(
                            basicAuth.username ? encodeURI(basicAuth.username) : '',
                            basicAuth.password ? encodeURI(basicAuth.password) : ''
                        );
                    }
                    break;
                case 'activiti':
                    if (this.authentications.basicAuth.ticket) {
                        request.set({ 'Authorization': this.authentications.basicAuth.ticket });
                    }
                    break;
                case 'oauth2':
                    const oauth2: Oauth2 = this.authentications.oauth2;
                    if (oauth2.accessToken) {
                        request.set({ 'Authorization': 'Bearer ' + oauth2.accessToken });
                    }
                    break;
                default:
                    throw new Error('Unknown authentication type: ' + this.authentications.type);
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
    deserialize(response: any, returnType?: any): any {
        if (response === null) {
            return null;
        }

        let data = response.body;

        if (data === null) {
            data = response.text;
        }

        if (returnType) {
            if (returnType === 'blob') {
                data = new Blob([data], { type : response.header['content-type']});
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

    basicAuth(username: string, password: string): string {
        const str: any = username + ':' + password;

        let base64;

        if (typeof Buffer === 'function') {
            base64 = Buffer.from(str.toString(), 'binary').toString('base64');
        } else {
            base64 = btoa(str);
        }

        return 'Basic ' + base64;
    }

    /**
     * Invokes the REST service using the supplied settings and parameters.
     *
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {String[]} contentTypes An array of request MIME types.
     * @param {String[]} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * @param {(String)} responseType  is an enumerated value that returns the type of the response.
     *                                  It also lets the author change the response type to one "arraybuffer", "blob", "document",
     *                                  "json", or "text".
     *                                   If an empty string is set as the value of responseType, it is assumed as type "text".
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callApi(path: string, httpMethod: string, pathParams?: any, queryParams?: any, headerParams?: any, formParams?: any, bodyParam?: any,
            contentTypes?: string[], accepts?: string[], returnType?: any, contextRoot?: string, responseType?: string): Promise<any> {

        let url;

        if (contextRoot) {
            const basePath = `${this.host}/${contextRoot}`;
            url = this.buildUrlCustomBasePath(basePath, path, pathParams);
        } else {
            url = this.buildUrl(path, pathParams);
        }
        return this.callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam,
            contentTypes, accepts, returnType, contextRoot, responseType, url);
    }

    request<T = any>(options: RequestOptions): Promise<T> {
        return this.callApi(
            options.path,
            options.httpMethod,
            options.pathParams,
            options.queryParams,
            options.headerParams,
            options.formParams,
            options.bodyParam,
            options.contentTypes,
            options.accepts,
            options.returnType,
            options.contextRoot,
            options.responseType
        );
    }

    post<T = any>(options: RequestOptions): Promise<T> {
        return this.request<T>({
            ...options,
            httpMethod: 'POST',
            contentTypes: options.contentTypes || this.contentTypes.JSON,
            accepts: options.accepts || this.contentTypes.JSON
        });
    }

    put<T = any>(options: RequestOptions): Promise<T> {
        return this.request<T>({
            ...options,
            httpMethod: 'PUT',
            contentTypes: options.contentTypes || this.contentTypes.JSON,
            accepts: options.accepts || this.contentTypes.JSON
        });
    }

    get<T = any>(options: RequestOptions): Promise<T> {
        return this.request<T>({
            ...options,
            httpMethod: 'GET',
            contentTypes: options.contentTypes || this.contentTypes.JSON,
            accepts: options.accepts || this.contentTypes.JSON
        });
    }

    delete<T = void>(options: RequestOptions): Promise<T> {
        return this.request<T>({
            ...options,
            httpMethod: 'DELETE',
            contentTypes: options.contentTypes || this.contentTypes.JSON,
            accepts: options.accepts || this.contentTypes.JSON
        });
    }

    /**
     * Invokes the REST service using the supplied settings and parameters but not the basepath.
     *
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {String[]} contentTypes An array of request MIME types.
     * @param {String[]} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * @param {(String)} responseType  is an enumerated value that returns the type of the response.
     *                                  It also lets the author change the response type to one "arraybuffer", "blob", "document",
     *                                  "json", or "text".
     *                                   If an empty string is set as the value of responseType, it is assumed as type "text".
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callCustomApi(path: string, httpMethod: string, pathParams?: any, queryParams?: any, headerParams?: any, formParams?: any, bodyParam?: any,
                  contentTypes?: string[], accepts?: string[], returnType?: any, contextRoot?: string, responseType?: string): Promise<any> {
        const url = this.buildUrlCustomBasePath(path, '', pathParams);

        return this.callHostApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam,
            contentTypes, accepts, returnType, contextRoot, responseType, url);
    }

    /**
     * Invokes the REST service using the supplied settings and parameters.
     *
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {String[]} contentTypes An array of request MIME types.
     * @param {String[]} accepts An array of acceptable response MIME types.
     * @param {(String|Array|any)} returnType The required type to return; can be a string for simple types or the
     * @param {(String)} contextRoot alternative contextRoot
     * @param {(String)} responseType  is an enumerated value that returns the type of the response.
     *                                  It also lets the author change the response type to one "arraybuffer", "blob", "document",
     *                                  "json", or "text".
     *                                   If an empty string is set as the value of responseType, it is assumed as type "text".
     * constructor for a complex type.   * @returns {Promise} A Promise object.
     */
    callHostApi(
        // @ts-ignore
        path: string,
        httpMethod: string,
        // @ts-ignore
        pathParams?: any,
        queryParams?: any, headerParams?: any, formParams?: any, bodyParam?: any,
        contentTypes?: string[], accepts?: string[], returnType?: any,
        // @ts-ignore
        contextRoot?: string,
        responseType?: string, url?: string): Promise<any> {

        const eventEmitter: any = EventEmitter({});

        let request = this.buildRequest(httpMethod, url, queryParams, headerParams, formParams, bodyParam,
            contentTypes, accepts, responseType, eventEmitter, returnType);

        if (returnType === 'Binary') {
            request = request.buffer(true).parse(superagent.parse['application/octet-stream']);
        }

        const promise: any = new Promise((resolve, reject) => {
            request.on('abort', () => {
                eventEmitter.emit('abort');
            });
            request.end((error: any, response: Response) => {
                if (error) {

                    this.emit('error', error);
                    eventEmitter.emit('error', error);

                    if (error.status === 401) {
                        this.emit('unauthorized');
                        eventEmitter.emit('unauthorized');
                    }

                    if (response && response.text) {
                        error = error || {};
                        reject(Object.assign(error, { message: response.text }));
                    } else {
                        reject({ error: error });
                    }

                } else {
                    if (this.isBpmRequest()) {
                        if (response.header && response.header.hasOwnProperty('set-cookie')) {
                            this.authentications.cookie = response.header['set-cookie'][0];
                        }
                    }
                    let data = {};
                    if (response.type === 'text/html') {
                        data = this.deserialize(response);
                    } else {
                        data = this.deserialize(response, returnType);
                    }

                    eventEmitter.emit('success', data);
                    resolve(data);
                }
            });
        });

        promise.on = function () {
            eventEmitter.on.apply(eventEmitter, arguments);
            return this;
        };

        promise.once = function () {
            eventEmitter.once.apply(eventEmitter, arguments);
            return this;
        };

        promise.emit = function () {
            eventEmitter.emit.apply(eventEmitter, arguments);
            return this;
        };

        promise.off = function () {
            eventEmitter.off.apply(eventEmitter, arguments);
            return this;
        };

        promise.abort = function () {
            request.abort();
            return this;
        };

        return promise;
    }

    isBpmRequest(): boolean {
        return this.className === 'ProcessAuth' || this.className === 'ProcessClient';
    }

    isCsrfEnabled(): boolean {
        if (this.config) {
            return !this.config.disableCsrf;
        } else {
            return true;
        }
    }

    setCsrfToken(request: any) {
        const token = this.createCSRFToken();
        request.set('X-CSRF-TOKEN', token);

        if (!this.isBrowser()) {
            request.set('Cookie', 'CSRF-TOKEN=' + token + ';path=/');
        }

        try {
            document.cookie = 'CSRF-TOKEN=' + token + ';path=/';
        } catch (err) {
        }
    }

    isNodeEnv(): boolean {
        return (typeof process !== 'undefined') && (process.release && process.release.name === 'node');
    }

     isBrowser(): boolean {
         return ( typeof window !== 'undefined' && typeof window.document !== 'undefined');
     }


    createCSRFToken(a?: any): string {
        return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e16] + (1e16).toString()).replace(/[01]/g, this.createCSRFToken);
    }

    progress(event: any, eventEmitter: ee.Emitter) {
        if (event.lengthComputable) {
            const percent = Math.round(event.loaded / event.total * 100);

            eventEmitter.emit('progress', {
                total: event.total,
                loaded: event.loaded,
                percent: percent
            });
        }
    }

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders
     * with parameter values
     */
    buildUrlCustomBasePath(basePath: string, path: string, pathParams: any): string {
        if (path && path !== '' && !path.match(/^\//)) {
            path = '/' + path;
        }
        let url = basePath + path;

        url = url.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            let value;
            if (pathParams.hasOwnProperty(key)) {
                value = paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    }

    buildRequest(
        httpMethod: string,
        url: string,
        queryParams: { [key: string]: any },
        headerParams: { [key: string]: any },
        formParams: { [key: string]: any },
        bodyParam: string | Object,
        contentTypes: string[],
        accepts: string[],
        responseType: string,
        eventEmitter: ee.Emitter,
        returnType: string) {
        const request: any = superagent(httpMethod, url);

        // apply authentications
        this.applyAuthToRequest(request);

        // set query parameters
        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        if (this.isBpmRequest() && this.isCsrfEnabled()) {
            this.setCsrfToken(request);
        }

        if (this.isWithCredentials()) {
            request.withCredentials();
        }

        // add cookie for activiti
        if (this.isBpmRequest()) {
            request.withCredentials();
            if (this.authentications.cookie) {
                if (!this.isBrowser()) {
                    request.set('Cookie', this.authentications.cookie);
                }
            }
        }

        // set request timeout
        request.timeout(this.timeout);

        const contentType = this.jsonPreferredMime(contentTypes);

        if (contentType && contentType !== 'multipart/form-data') {
            request.type(contentType);
        } else if (!request.header['Content-Type'] && contentType !== 'multipart/form-data') {
            request.type('application/json');
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(this.normalizeParams(formParams)).on('progress', (event: any) => {
                this.progress(event, eventEmitter);
            });
        } else if (contentType === 'multipart/form-data') {
            const _formParams = this.normalizeParams(formParams);
            for (const key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        // file field
                        request.attach(key, _formParams[key]).on('progress', (event: superagent_.ProgressEvent) => {// jshint ignore:line
                            this.progress(event, eventEmitter);
                        });
                    } else {
                        request.field(key, _formParams[key]).on('progress', (event: superagent_.ProgressEvent) => {// jshint ignore:line
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

        const accept = this.jsonPreferredMime(accepts);
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

    getAlfTicket(ticket: string): string {
        let alfTicketFragment = '';
        if (ticket) {
            alfTicketFragment = '&alf_ticket=' + ticket;
        } else if (this.config.ticketEcm) {
            alfTicketFragment = '&alf_ticket=' + this.config.ticketEcm;
        }

        return alfTicketFragment;
    }
}
