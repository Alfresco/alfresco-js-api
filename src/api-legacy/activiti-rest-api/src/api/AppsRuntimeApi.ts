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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { RuntimeAppDefinitionsApi } from '../../../../api/activiti-rest-api/api/runtimeAppDefinitions.api';
import { RuntimeAppDefinitionSaveRepresentation } from '../../../../api/activiti-rest-api/model/runtimeAppDefinitionSaveRepresentation';

/**
 * @deprecated 3.0.0
 */
export class AppsRuntimeApi {

    private runtimeAppDefinitionsApi: RuntimeAppDefinitionsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.runtimeAppDefinitionsApi = new RuntimeAppDefinitionsApi(alfrescoApi);
    }

    deployAppDefinitions(saveObject: RuntimeAppDefinitionSaveRepresentation): Promise<any> {
        return this.runtimeAppDefinitionsApi.deployAppDefinitions(saveObject);
    }

    getAppDefinitions() {
        return this.runtimeAppDefinitionsApi.getAppDefinitions();
    }
}
