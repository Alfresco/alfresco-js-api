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


import { Legacy } from './api-legacy/legacy';
import { CONTENT_LEGACY_APIS } from './api-legacy/content-rest-api/src';
import { APS_LEGACY_APIS } from './api-legacy/activiti-rest-api/src';
import { DISCOVERY_APIS } from './api/discovery-rest-api/api';
import { GS_CLASSIFICATION_APIS } from './api/gs-classification-rest-api/api';
import { GS_CORE_APIS } from './api/gs-core-rest-api/api';
import { SEARCH_APIS } from './api/search-rest-api/api';
import { AUTH_APIS } from './api/auth-rest-api/api';

import { ContentApi } from './api/content-rest-api/api/content.api';
import { WebscriptApi } from './api/content-rest-api/api/webscript.api';
import { AlfrescoUpload } from './api-legacy/alfrescoUpload';
import { NodesApi } from './api-legacy/content-rest-api/src/api/nodesApi';
import { ProcessClient } from './processClient';
import { ContentClient } from './contentClient';

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

    /**
     * @deprecated 3.0.0
     */
    auth: Legacy.Auth = <Legacy.Auth> {};

    /**
     * @deprecated 3.0.0
     */
    search: Legacy.Search = <Legacy.Search> {};

    /**
     * @deprecated 3.0.0
     */
    gsCore: Legacy.GsCore = <Legacy.GsCore> {};

    /**
     * @deprecated 3.0.0
     */
    gsClassification: Legacy.GsClassification = <Legacy.GsClassification> {};

    /**
     * @deprecated 3.0.0
     */
    discovery: Legacy.Discovery = <Legacy.Discovery> {};

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
    /**
     * @deprecated 3.0.0
     */
    bpmClient: ProcessClient;
    /**
     * @deprecated 3.0.0
     */
    ecmClient: ContentClient;

    constructor(config: AlfrescoApiConfig) {
        super(config);

        this.initObjects();
    }

    configureJsApi(config: AlfrescoApiConfig) {
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

        this.content = new ContentApi(this);
        this.upload = new AlfrescoUpload(this);
        this.webScript = this.core.webscriptApi;
        this.bpmClient = this.processClient;
        this.ecmClient = this.contentClient;
    }

    _instantiateOldObjects(module: any, moduleCopy: any) {
        let classArray = Object.keys(module);

        classArray.forEach((currentClass) => {
            moduleCopy[currentClass] = module[currentClass];
            let obj = this._stringToObject(currentClass, module);
            let nameObj = this._lowerFirst(currentClass);
            obj.init(this);
            moduleCopy[nameObj] = obj;
        });
    }

    _stringToObject(nameClass: string, module: any) {
        try {
            if (typeof module[nameClass] === 'function') {
                return new module[nameClass]();
            }
        } catch (error) {
            console.log(nameClass + '  ' + error);
        }
    }

    _instantiateNewObjects(module: any, moduleCopy: any) {
        let classArray = Object.keys(module);

        classArray.forEach((currentClass: any) => {
            moduleCopy[currentClass] = module[currentClass];
            let nameObj = this._lowerFirst(currentClass);
            moduleCopy[nameObj] = new module[currentClass](this);
        });
    }

    _lowerFirst(text: string) {
        return text.charAt(0).toLowerCase() + text.slice(1);
    }

}
