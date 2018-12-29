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

import { AlfrescoApi } from './alfrescoApi';
import { AlfrescoApiConfig } from './alfrescoApiConfig';


import { Legacy } from './api/legacy';
import { CONTENT_LEGACY_APIS } from './api/content-rest-api/src';
import { APS_LEGACY_APIS } from './api/activiti-rest-api/src';
import { DISCOVERY_APIS } from './api-new/discovery-rest-api/api';
import { GS_CLASSIFICATION_APIS } from './api-new/gs-classification-rest-api/api';
import { GS_CORE_APIS } from './api-new/gs-core-rest-api/api';
import { SEARCH_APIS } from './api-new/search-rest-api/api';
import { AUTH_APIS } from './api-new/auth-rest-api/api';

import { ContentApi } from './contentApi';
import { WebscriptApi } from './api-new/content-rest-api/api/webscript.api';
import { AlfrescoUpload } from './api/alfrescoUpload';
import { NodesApi } from './api/content-rest-api/src/api/nodesApi';

/**
 * @deprecated 3.0.0
 */
export class AlfrescoApiCompatibility extends AlfrescoApi {
    /**
     * @deprecated 3.0.0
     */
    core: Legacy.Core = <Legacy.Core> {};

    /**
     * @deprecated 3.0.0
     */
    activiti: Legacy.Activiti = <Legacy.Activiti> {};
    auth: any = {};

    /**
     * @deprecated 3.0.0
     */
    search: any = {};

    /**
     * @deprecated 3.0.0
     */
    gsCore: any = {};

    /**
     * @deprecated 3.0.0
     */
    gsClassification: any = {};

    /**
     * @deprecated 3.0.0
     */
    discovery: any = {};

    /**
     * @deprecated 3.0.0
     */
    content: ContentApi;

    /**
     * @deprecated 3.0.0
     */
    node: NodesApi;

    /**
     * @deprecated 3.0.0
     */
    nodes: NodesApi;

    /**
     * @deprecated 3.0.0
     */
    upload: AlfrescoUpload;

    /**
     * @deprecated 3.0.0
     */
    webScript: WebscriptApi;

    constructor(config: AlfrescoApiConfig) {
        super();

        this.setConfig(config);
        this.initObjects();
    }

    configureJsApi(config) {
        this.setConfig(config);
    }

    initObjects() {
        this._instantiateOldObjects(CONTENT_LEGACY_APIS, this.core);
        this._instantiateOldObjects(APS_LEGACY_APIS, this.activiti);
        this._instantiateNewObjects(AUTH_APIS, this.auth);
        this._instantiateNewObjects(SEARCH_APIS, this.search);
        this._instantiateNewObjects(DISCOVERY_APIS, this.discovery);
        this._instantiateNewObjects(GS_CORE_APIS, this.gsCore);
        this._instantiateNewObjects(GS_CLASSIFICATION_APIS, this.gsClassification);

        this.nodes = this.node = this.core.nodesApi;

        this.content = new ContentApi(this.contentAuth, this.contentClient);
        this.upload = new AlfrescoUpload(this);
        this.webScript = this.core.webscriptApi;
    }

    _instantiateOldObjects(module, moduleCopy) {

        module.forEach((currentClass) => {
            let nameObj = this._lowerFirst(currentClass.name);

            moduleCopy[nameObj] = new currentClass();
            moduleCopy[nameObj].init(this);
        });
    }

    _instantiateNewObjects(module, moduleCopy) {

        module.forEach((currentClass) => {
            let nameObj = this._lowerFirst(currentClass.name);

            moduleCopy[nameObj] = new currentClass(this);
        });
    }

    _lowerFirst(text: string) {
        return text.charAt(0).toLowerCase() + text.slice(1);
    }

}
