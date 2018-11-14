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


import { AlfrescoApi } from './AlfrescoApi';
import { AlfrescoApiConfig } from './alfrescoApiConfig';

import { AlfrescoContent } from './alfrescoContent';
import { AlfrescoUpload } from './alfrescoUpload';

const AlfrescoCoreRestApi  = require( './api/content-rest-api/src/index');
// let AlfrescoPrivateRestApi = require('./alfresco-private-rest-api/src/index.js');
// let AlfrescoSearchRestApi = require('./alfresco-search-rest-api/src/index.js');
// let AlfrescoDiscoveryRestApi = require('./alfresco-discovery-rest-api/src/index.js');
// let AlfrescoGsClassificationRestApi = require('./alfresco-gs-classification-rest-api/src/index.js');
// let AlfrescoGsCoreRestApi = require('./alfresco-gs-core-rest-api/src/index.js');
// let AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
// let AlfrescoActivitiApi = require('./alfresco-activiti-rest-api/src/index');
//
// import { APS_APIS  } from './api-new/activiti-rest-api/api/api';
// import { AUTH_APIS  } from './api-new/auth-rest-api/api/api';
// import { CONTENT_APIS  } from './api-new/content-rest-api/api/api';
// import { DISCOVERY_APIS  } from './api-new/discovery-rest-api/api/api';
// import { GS_CLASSIFICATION_APIS  } from './api-new/gs-classification-rest-api/api/api';
// import { GS_CORE_APIS  } from './api-new/gs-core-rest-api/api/api';
// import { SEARCH_APIS  } from './api-new/search-rest-api/api/api';

export class AlfrescoApiCompatibility extends AlfrescoApi {

    core: any;
    coreStore: any;

    constructor(config: AlfrescoApiConfig) {
        super();

        this.setConfig(config);
        this.initObjects();
    }

    initObjects() {
        //BPM
        //AlfrescoActivitiApi.ApiClient.instance = this.bpmClient;
        // this.activiti = {};
        // this.activitiStore = AlfrescoActivitiApi;
        // this._instantiateObjects(this.activitiStore, this.activiti);

        //ECM
        //AlfrescoCoreRestApi.ApiClient.instance = this.ecmClient;
        this.core = {};
        this.coreStore = AlfrescoCoreRestApi.CONTENT_APIS;

        this._instantiateObjects(this.coreStore, this.core);

        console.log('====== peopleApi ' + this.core.peopleApi);
        // //ECM-Private
        // //AlfrescoPrivateRestApi.ApiClient.instance = this.ecmPrivateClient;
        // this.corePrivateStore = AlfrescoPrivateRestApi;
        // this._instantiateObjects(this.corePrivateStore, this.core);
        //
        // //SEARCH
        // this.search = {};
        // //AlfrescoSearchRestApi.ApiClient.instance = this.searchClient;
        // this.searchStore = AlfrescoSearchRestApi;
        // this._instantiateObjects(this.searchStore, this.search);
        //
        // //Discovery
        // this.discovery = {};
        // //AlfrescoDiscoveryRestApi.ApiClient.instance = this.discoveryClient;
        // this.discoveryStore = AlfrescoDiscoveryRestApi;
        // this._instantiateObjects(this.discoveryStore, this.discovery);
        //
        // //Governance CORE
        // this.gsCore = {};
        // //AlfrescoGsCoreRestApi.ApiClient.instance = this.gsClient;
        // this.gsCoreStore = AlfrescoGsCoreRestApi;
        // this._instantiateObjects(this.gsCoreStore, this.gsCore);
        //
        // //Governance Classification
        // this.gsClassification = {};
        // //AlfrescoGsClassificationRestApi.ApiClient.instance = this.gsClient;
        // this.gsClassificationStore = AlfrescoGsClassificationRestApi;
        // this._instantiateObjects(this.gsClassificationStore, this.gsClassification);

       // this.nodes = this.node = new AlfrescoNode();
        //this.content = new AlfrescoContent(this.ecmAuth, this.ecmClient);
        //this.upload = new AlfrescoUpload();
        //this.webScript = this.core.webscriptApi;
    }

    _instantiateObjects(module, moduleCopy) {

        module.forEach((currentClass) => {
           // moduleCopy[currentClass] = module[currentClass];
            //let obj = this._stringToObject(currentClass, module);
            let nameObj = this._lowerFirst(currentClass.name);

            console.log('currentClass '+  currentClass.name);

            moduleCopy[nameObj] = new currentClass();
            moduleCopy[nameObj].init(this);
           // / console.log('obj '+obj);
           //
           //  if(obj) {
           //      moduleCopy[nameObj] = obj.init(this);
           //
           //      console.log(' moduleCopy[nameObj]  '+ moduleCopy[nameObj] );
           //
           //  }
           //
           //  moduleCopy[nameObj] = obj;
        });
    }

    _lowerFirst(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
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
