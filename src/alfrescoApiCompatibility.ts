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

const AlfrescoCoreRestApi = require('./api/content-rest-api/src/index');

// import { APS_APIS  } from './api-new/activiti-rest-api/api/api';
import { Core } from './api/content-rest-api/src/core';
import { DISCOVERY_APIS } from './api-new/discovery-rest-api/api';
import { GS_CLASSIFICATION_APIS } from './api-new/gs-classification-rest-api/api';
import { GS_CORE_APIS } from './api-new/gs-core-rest-api/api';
import { SEARCH_APIS } from './api-new/search-rest-api/api';
import { AUTH_APIS } from './api-new/auth-rest-api/api';

import { ContentApi } from './contentApi';
import { AlfrescoNode } from './api/alfrescoNode';
import { AlfrescoUpload } from './api/alfrescoUpload';

export class AlfrescoApiCompatibility extends AlfrescoApi {

    core: Core = <Core> {};
    coreStore: any;

    auth: any = {};
    search: any = {};
    gsCore: any = {};
    gsClassification: any = {};
    discovery: any = {};
    activiti: any = {};

    content: ContentApi;
    node: AlfrescoNode;
    nodes: AlfrescoNode;
    upload: AlfrescoUpload;

    constructor(config: AlfrescoApiConfig) {
        super();

        this.setConfig(config);
        this.initObjects();
    }

    configureJsApi(config) {
        this.setConfig(config);
    }

    initObjects() {
        //BPM
        //AlfrescoActivitiApi.ApiClient.instance = this.bpmClient;
        // this.activiti = {};
        // this.activitiStore = AlfrescoActivitiApi;
        // this._instantiateObjects(this.activitiStore, this.activiti);

        //ECM
        this.coreStore = AlfrescoCoreRestApi.CONTENT_APIS;

        this._instantiateOldObjects(this.coreStore, this.core);
        this._instantiateNewObjects(AUTH_APIS, this.auth);
        this._instantiateNewObjects(SEARCH_APIS, this.search);
        this._instantiateNewObjects(DISCOVERY_APIS, this.discovery);
        this._instantiateNewObjects(GS_CORE_APIS, this.gsCore);
        this._instantiateNewObjects(GS_CLASSIFICATION_APIS, this.gsClassification);

        this.nodes = this.node = new AlfrescoNode(this);
        this.content = new ContentApi(this.ecmAuth, this.ecmClient);
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
            // moduleCopy[nameObj].init(this);
        });
    }

    _lowerFirst(text: string) {
        return text.charAt(0).toLowerCase() + text.slice(1);
    }

    _stringToObject(nameClass, module) {
        try {
            if (typeof module[nameClass] === 'function') {
                return new module[nameClass]();
            }
        } catch (error) {
            console.log(nameClass + '  ' + error);
        }
    }
}
