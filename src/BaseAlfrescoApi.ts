import ee from 'event-emitter';
import { paramToString } from './alfrescoApiClient';
import { AlfrescoApiConfig } from './alfrescoApiConfig';
import { HttpClient, RequestOptions } from './api-clients/http-client.interface';
import { Authentication } from './authentication/authentication';

export type Constructor<T> = new (...args: any[]) => T;


export class BaseAlfrescoApiClient implements ee.Emitter, HttpClient  {
    on: ee.EmitterMethod;
    off: ee.EmitterMethod;
    once: ee.EmitterMethod;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    emit: (type: string, ...args: any[]) => void;

    httpClient!: HttpClient;

    host: string;
    className: string;
    defaultHeaders = {}
    authentications: Authentication = {
        basicAuth: {
            ticket: ''
        },
        type: 'basic'
    };

    basePath: string;
    config: AlfrescoApiConfig;

    request: <T = any>(options: RequestOptions) => Promise<T>;
    post: <T = any>(options: RequestOptions) => Promise<T>;
    put: <T = any>(options: RequestOptions) => Promise<T>;
    get: <T = any>(options: RequestOptions) => Promise<T>;
    delete: <T = void>(options: RequestOptions) => Promise<T>;
    callApi: (path: string, httpMethod: string, pathParams?: any, queryParams?: any, headerParams?: any, formParams?: any, bodyParam?: any, contentTypes?: string[], accepts?: string[], returnType?: any, contextRoot?: string, responseType?: string, url?: string) => Promise<any>;
    callCustomApi: (path: string, httpMethod: string, pathParams?: any, queryParams?: any, headerParams?: any, formParams?: any, bodyParam?: any, contentTypes?: string[], accepts?: string[], returnType?: any, contextRoot?: string, responseType?: string) => Promise<any>;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(_httpClient: HttpClient) {
        ee(this);

        this.httpClient = _httpClient;

        this.basePath = _httpClient.basePath
        this.config = _httpClient.config;
        this.request = _httpClient.request;
        this.post = _httpClient.post;
        this.put = _httpClient.put;
        this.get = _httpClient.get;
        this.delete = _httpClient.delete;
        this.callApi = _httpClient.callApi;
        this.callCustomApi = _httpClient.callCustomApi;
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

    getResponseType(options: RequestOptions): string {
        let responseType = null;

        if (options.returnType?.toString().toLowerCase() === 'blob' || options.responseType?.toString().toLowerCase() === 'blob') {
            responseType = 'blob';
        } else if (options.returnType === 'String') {
            responseType = 'text';
        }

        return responseType;
    }

    removeUndefinedValues(obj: { [key: string]: any }) {
        const newObj: any = {};
        Object.keys(obj).forEach((key) => {
            if (obj[key] === Object(obj[key])) {
                newObj[key] = this.removeUndefinedValues(obj[key]);
            } else if (obj[key] !== undefined && obj[key] !== null) {
                newObj[key] = obj[key];
            }
        });
        return newObj;
    }
}
