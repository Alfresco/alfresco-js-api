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

import { AlfrescoApiConfig } from './alfrescoApiConfig';
import { BaseAlfrescoApiClient } from './BaseAlfrescoApi';
import { Authentication } from './authentication/authentication';
import { HttpClient } from './api-clients/http-client.interface';
import { LegacyAlfrescoHttpClient } from './alfrescoApiClient';

export class ProcessClient extends BaseAlfrescoApiClient {

    className = 'ProcessClient';

    constructor(config: AlfrescoApiConfig, httpClient: HttpClient = new LegacyAlfrescoHttpClient()) {
        super(httpClient);

        this.setConfig(config);
    }

    setConfig(config: AlfrescoApiConfig): void {
        this.config = config;

        this.changeHost();
    }

    changeHost(): void {
        this.host = this.config.hostBpm;
        this.basePath = `${this.config.hostBpm}/${this.config.contextRootBpm}`;
    }

    /**
     * set the authentications
     *
     * @param {Object} authentications
     * */
    setAuthentications(authentications: Authentication): void {
        this.authentications = authentications;
    }

}
