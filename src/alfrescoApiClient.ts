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

import ee from 'event-emitter';
import { AlfrescoApiConfig } from './alfrescoApiConfig';
import { Authentication } from './authentication/authentication';
import { SuperagentHttpClient } from './superagentHttpClient';
import { Emitters, HttpClient, HttpRequestOptions, LegacyHttpClient, RequestOptions, SecurityOptions } from './api-clients/http-client.interface';
import { paramToString } from './utils/helpers';

declare const Buffer: any;

type AlfrescoApiClientPromise<T = any> = Promise<T> & {
    on: ee.EmitterMethod;
    off: ee.EmitterMethod;
    once: ee.EmitterMethod;
    emit: (type: string, ...args: any[]) => void;
    abort?: () => void;
};

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

export class AlfrescoApiClient implements ee.Emitter, LegacyHttpClient {
    on: ee.EmitterMethod;
    off: ee.EmitterMethod;
    once: ee.EmitterMethod;
    emit: (type: string, ...args: any[]) => void;

    emitter: ee.Emitter;

    host: string;
    className: string;
    config: AlfrescoApiConfig;
    url: string;

    static contentTypes = {
        JSON: 'application/json'
    };

    /**
     * The base URL against which to resolve every API call's (relative) path.
     */
    basePath = '';

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
    defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     */
    timeout: number | { deadline?: number; response?: number } = undefined;

    httpClient: HttpClient;

    constructor(host?: string, httpClient?: HttpClient) {
        this.host = host;

        // fallback for backward compatibility
        this.httpClient = httpClient || new SuperagentHttpClient();

        ee(this);

        this.emitter = {
            on: this.on.bind(this),
            off: this.off.bind(this),
            once: this.once.bind(this),
            emit: this.emit.bind(this),
        };
    }

    getSecurityOptions(): SecurityOptions {
        return {
            isBpmRequest: this.isBpmRequest(),
            enableCsrf: this.isCsrfEnabled(),
            withCredentials: this.isWithCredentials(),
            authentications: this.authentications,
            defaultHeaders: this.defaultHeaders,
        };
    }

    isCsrfEnabled(): boolean {
        if (this.config) {
            return !this.config.disableCsrf;
        } else {
            return true;
        }
    }

    isBpmRequest(): boolean {
        return this.className === 'ProcessAuth' || this.className === 'ProcessClient';
    }

    private getCallApiUrl({ contextRoot, path, pathParams }: { contextRoot?: string; path: string; pathParams?: any }): string {
        const basePath = contextRoot ? `${this.host}/${contextRoot}` : this.basePath;

        return AlfrescoApiClient.buildUrl(basePath, path, pathParams);
    }

    callApi(
        path: string,
        httpMethod: string,
        pathParams?: any,
        queryParams?: any,
        headerParams?: any,
        formParams?: any,
        bodyParam?: any,
        contentTypes?: string[],
        accepts?: string[],
        returnType?: any,
        contextRoot?: string,
        responseType?: string,
        url?: string
    ): AlfrescoApiClientPromise<any> {
        const security = this.getSecurityOptions();
        const callApiUrl = url ?? this.getCallApiUrl({ contextRoot, path, pathParams });
        const emitters = this.getEventEmitters();

        const options: RequestOptions = {
            path,
            httpMethod,
            pathParams,
            queryParams,
            headerParams,
            formParams,
            bodyParam,
            contentTypes,
            accepts,
            returnType,
            contextRoot,
            responseType,
            url,
        };

        const httpRequestOptions = this.getHttpRequestOptions(options);

        const promise = this.httpClient.request(
            callApiUrl,
            httpRequestOptions,
            security,
            emitters
        );

        return this.addPromiseListeners(promise, emitters.eventEmitter);
    }

    callCustomApi(
        path: string,
        httpMethod: string,
        pathParams?: any,
        queryParams?: any,
        headerParams?: any,
        formParams?: any,
        bodyParam?: any,
        contentTypes?: string[],
        accepts?: string[],
        returnType?: any,
        contextRoot?: string,
        responseType?: string
    ): AlfrescoApiClientPromise<any> {
        const security = this.getSecurityOptions();
        const customApiUrl = AlfrescoApiClient.buildUrl(path, '', pathParams);
        const emitters = this.getEventEmitters();

        const options: RequestOptions = {
            path,
            httpMethod,
            pathParams,
            queryParams,
            headerParams,
            formParams,
            bodyParam,
            contentTypes,
            accepts,
            returnType,
            contextRoot,
            responseType,
        };

        const httpRequestOptions = this.getHttpRequestOptions(options);

        const promise = this.httpClient.request(
            customApiUrl,
            httpRequestOptions,
            security,
            emitters
        );

        return this.addPromiseListeners(promise, emitters.eventEmitter);
    }

    private getEventEmitters(): Emitters {
        return {
            errorEmitter: this.emitter,
            eventEmitter: ee({}),
        }
    }

    private getHttpRequestOptions(options: RequestOptions): HttpRequestOptions {
        const contentType = AlfrescoApiClient.jsonPreferredMime(options.contentTypes);
        const accept = AlfrescoApiClient.jsonPreferredMime(options.accepts);

        return {
            ...options,
            contentType,
            accept
        }
    }

    request<T = any>(options: RequestOptions): Promise<T> {
        const security = this.getSecurityOptions();
        const emitters = this.getEventEmitters();
        const httpRequestOptions = this.getHttpRequestOptions(options);
        const promise = this.httpClient.request(this.basePath, httpRequestOptions, security, emitters);

        return this.addPromiseListeners(promise, emitters.eventEmitter);
    }

    post<T = any>(options: RequestOptions): AlfrescoApiClientPromise<T> {
        const url = this.getCallApiUrl(options);
        const security = this.getSecurityOptions();
        const emitters = this.getEventEmitters();
        const httpRequestOptions = this.getHttpRequestOptions(options);
        const promise = this.httpClient.post<T>(url, httpRequestOptions, security, emitters);

        return this.addPromiseListeners(promise, emitters.eventEmitter);
    }

    put<T = any>(options: RequestOptions): AlfrescoApiClientPromise<T> {
        const url = this.getCallApiUrl(options);
        const security = this.getSecurityOptions();
        const emitters = this.getEventEmitters();
        const httpRequestOptions = this.getHttpRequestOptions(options);
        const promise = this.httpClient.put<T>(url, httpRequestOptions, security, emitters);

        return this.addPromiseListeners(promise, emitters.eventEmitter);
    }

    get<T = any>(options: RequestOptions): AlfrescoApiClientPromise<T> {
        const url = this.getCallApiUrl(options);
        const security = this.getSecurityOptions();
        const emitters = this.getEventEmitters();
        const httpRequestOptions = this.getHttpRequestOptions(options);
        const promise = this.httpClient.get<T>(url, httpRequestOptions, security, emitters);

        return this.addPromiseListeners(promise, emitters.eventEmitter);
    }

    delete<T = void>(options: RequestOptions): AlfrescoApiClientPromise<T> {
        const security = this.getSecurityOptions();
        const emitters = this.getEventEmitters();
        const httpRequestOptions = this.getHttpRequestOptions(options);
        const promise = this.httpClient.delete<T>(this.basePath, httpRequestOptions, security, emitters);

        return this.addPromiseListeners(promise, emitters.eventEmitter);
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

    isWithCredentials(): boolean {
        return !!this.config?.withCredentials;
    }

    getAlfTicket(ticket: string): string {
        const ticketParam = this.isWithCredentials() ? '&ticket=' : '&alf_ticket=';

        if (ticket) {
            return ticketParam + ticket;
        } else if (this.config.ticketEcm) {
            return ticketParam + this.config.ticketEcm;
        }

        return '';
    }

    isBrowser(): boolean {
        return (typeof window !== 'undefined' && typeof window.document !== 'undefined');
    }

    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders
     * with parameter values
     */
    private static buildUrl(basePath: string, path: string, pathParams: any): string {
        if (path && path !== '' && !path.match(/^\//)) {
            path = '/' + path;
        }
        const url = basePath + path;

        return AlfrescoApiClient.addParamsToUrl(url, pathParams);
    }

    private static addParamsToUrl(path: string, pathParams: any) {
        return path.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
            let value;
            if (pathParams.hasOwnProperty(key)) {
                value = paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
    }

    /**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param contentTypes
     * @returns  The chosen content type, preferring JSON.
     */
    private static jsonPreferredMime(contentTypes: readonly string[]): string {

        if (!contentTypes || !contentTypes.length) {
            return AlfrescoApiClient.contentTypes.JSON;
        }

        for (let i = 0; i < contentTypes.length; i++) {
            if (AlfrescoApiClient.isJsonMime(contentTypes[i])) {
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
    

    private addPromiseListeners<T = any>(promise: Promise<T>, eventEmitter: ee.Emitter): AlfrescoApiClientPromise<T> {

        const alfrescoPromise: AlfrescoApiClientPromise<T> = Object.assign(promise, {
            on: function () {
                eventEmitter.once.apply(eventEmitter, arguments);
                return this;
            },
            once: function () {
                eventEmitter.once.apply(eventEmitter, arguments);
                return this;
            },
            emit: function () {
                eventEmitter.emit.apply(eventEmitter, arguments);
                return this;
            },
            off: function () {
                eventEmitter.off.apply(eventEmitter, arguments);
                return this;
            }
        });

        return alfrescoPromise;
    }
}
