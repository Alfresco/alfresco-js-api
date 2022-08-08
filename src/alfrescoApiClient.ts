/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { HttpClient, LegacyHttpClient, RequestOptions, SecurityOptions } from './api-clients/http-client.interface';
import { paramToString } from './utils/helpers';

declare const Buffer: any;

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
    /**
     * The base URL against which to resolve every API call's (relative) path.
     */
    basePath = '';

    /**
     * The authentication methods to be included for all API calls.
     */
    authentications: Authentication = {
        basicAuth: {
            ticket: '',
        },
        type: 'basic',
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

    request<T = any>(options: RequestOptions): Promise<T> {
        const security = this.getSecurityOptions();
        return this.httpClient.request(this.basePath, options, security, this.emitter);
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
    ): Promise<any> {
        const security = this.getSecurityOptions();

        const callApiUrl = url ?? this.getCallApiUrl({ contextRoot, path, pathParams });

        return this.httpClient.request(
            callApiUrl,
            {
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
            },
            security,
            this.emitter
        );
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
    ): Promise<any> {
        const security = this.getSecurityOptions();

        const customApiUrl = AlfrescoApiClient.buildUrl(path, '', pathParams);

        return this.httpClient.request(
            customApiUrl,
            {
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
            },
            security,
            this.emitter
        );
    }

    post<T = any>(options: RequestOptions): Promise<T> {
        const security = this.getSecurityOptions();
        const url = this.getCallApiUrl(options);
        return this.httpClient.post<T>(url, options, security, this.emitter);
    }

    put<T = any>(options: RequestOptions): Promise<T> {
        const security = this.getSecurityOptions();
        const url = this.getCallApiUrl(options);
        return this.httpClient.put<T>(url, options, security, this.emitter);
    }

    get<T = any>(options: RequestOptions): Promise<T> {
        const security = this.getSecurityOptions();
        const url = this.getCallApiUrl(options);
        return this.httpClient.get<T>(url, options, security, this.emitter);
    }

    delete<T = void>(options: RequestOptions): Promise<T> {
        const security = this.getSecurityOptions();
        return this.httpClient.delete(this.basePath, options, security, this.emitter);
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
}
