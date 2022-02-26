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

import { AlfrescoApi } from '../../../alfrescoApi';
import { ApiClient } from '../../../api-clients/api-client';
import { HttpClient, RequestOptions } from '../../../api-clients/http-client.interface';

export interface LegacyTicketApi {
    getAlfTicket(ticket: string): string
}
export abstract class BaseApi extends ApiClient {

    protected httpClient: HttpClient & LegacyTicketApi;

    /** @deprecated */
    constructor(legacyApi?: AlfrescoApi);
    constructor(httpClient: HttpClient & LegacyTicketApi );
    constructor(httpClient?: AlfrescoApi | (HttpClient & LegacyTicketApi)) {
        super(httpClient as AlfrescoApi);
    }

    // TODO: Find a way to remove this hack from the legacy version :/
    get apiClientPrivate(): HttpClient & LegacyTicketApi {
        return this.httpClient ?? this.alfrescoApi.contentPrivateClient;
    }

    override get apiClient(): HttpClient & LegacyTicketApi {
        return this.httpClient ?? this.alfrescoApi.contentClient;
    }

    override post<T = any>(options: RequestOptions): Promise<T> {
        return this.apiClientPrivate.post<T>(options);
    }

    override put<T = any>(options: RequestOptions): Promise<T> {
        return this.apiClientPrivate.put<T>(options);
    }

    override get<T = any>(options: RequestOptions): Promise<T> {
        return this.apiClientPrivate.get<T>(options);
    }

    override delete<T = void>(options: RequestOptions): Promise<T> {
        return this.apiClientPrivate.delete(options);
    }
}
