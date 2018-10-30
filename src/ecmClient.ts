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

import { AlfrescoApiClient } from './alfrescoApiClient';
import { AlfrescoApiConfig } from './alfrescoApiConfig';

export class EcmClient extends AlfrescoApiClient {

    config: AlfrescoApiConfig;
    className = 'EcmClient';
    servicePath: string;
    host: string;
    basePath: string;
    authentications: any;

    /**
     * @param {Object} config
     */
    constructor(config: AlfrescoApiConfig, servicePath: string) {
        super();

        this.config = config;
        this.servicePath = servicePath;

        this.changeHost();
    }

    changeHost() {
        this.host = this.config.hostEcm;

        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + this.servicePath;
    }

    /**
     * set the Authentications
     *
     * @param {Object} authentications
     * */
    setAuthentications(authentications): any {
        this.authentications = authentications;
    }

}
