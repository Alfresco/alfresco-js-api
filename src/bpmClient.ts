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
import { AlfrescoApiClient } from './alfrescoApiClient';

export class BpmClient extends AlfrescoApiClient {

    config: AlfrescoApiConfig;
    className = 'BpmClient';
    authentications: any;
    host: string;
    basePath: string;

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();

        this.config = config;

        this.changeHost();
    }

    changeHost() {
        this.host = this.config.hostBpm;
        this.basePath = this.config.hostBpm + '/' + this.config.contextRootBpm;
    }

    /**
     * set the authentications
     *
     * @param {Object} authentications
     * */
    setAuthentications(authentications) {
        this.authentications = authentications;
    }

}
