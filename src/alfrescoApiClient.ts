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
import { LegacyHttpClient, RequestOptions } from './api-clients/http-client.interface';

declare const Buffer: any;

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

export class AlfrescoApiClient implements ee.Emitter, LegacyHttpClient {
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

    httpClient: LegacyHttpClient;

    constructor(host?: string, httpClient?: LegacyHttpClient) {
        this.host = host;

        // fallback for backward compatibility
        this.httpClient = httpClient || new SuperagentHttpClient(host);

        ee(this);
    }
    request<T = any>(options: RequestOptions): Promise<T> {
        return this.httpClient.request(options);
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
        return this.httpClient.callApi(
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
            url
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
        return this.httpClient.callCustomApi(
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
            responseType
        );
    }

    post<T = any>(options: RequestOptions): Promise<T> {
        return this.httpClient.post<T>(options);
    }

    put<T = any>(options: RequestOptions): Promise<T> {
        return this.httpClient.put<T>(options);
    }

    get<T = any>(options: RequestOptions): Promise<T> {
        return this.httpClient.get<T>(options);
    }

    delete<T = void>(options: RequestOptions): Promise<T> {
        return this.httpClient.delete(options);
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
        if (this.config) {
            return this.config.withCredentials;
        } else {
            return false;
        }
    }

    getAlfTicket(ticket: string): string {
        let alfTicketFragment = '';
        const ticketParam = this.isWithCredentials() ? '&ticket=' : '&alf_ticket=';

        if (ticket) {
            alfTicketFragment = ticketParam + ticket;
        } else if (this.config.ticketEcm) {
            alfTicketFragment = ticketParam + this.config.ticketEcm;
        }

        return alfTicketFragment;
    }
}
