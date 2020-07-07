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
import { AlfrescoApiClient, RequestOptions } from '../../../alfrescoApiClient';

export class BaseApi {

    apiClient: AlfrescoApiClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        if (alfrescoApi) {
            this.apiClient = alfrescoApi.contentClient;
        }
    }

    post<T = any>(options: RequestOptions): Promise<T> {
        return this.apiClient.post<T>(options);
    }

    put<T = any>(options: RequestOptions): Promise<T> {
        return this.apiClient.put<T>(options);
    }

    get<T = any>(options: RequestOptions): Promise<T> {
        return this.apiClient.get<T>(options);
    }

    delete<T = void>(options: RequestOptions): Promise<T> {
        return this.apiClient.delete(options);
    }

    errorMessage(param: string, methodName: string) {
        return `Missing param ${param} in ${methodName}`;
    }
}
