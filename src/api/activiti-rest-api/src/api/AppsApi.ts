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
import { AppDefinitionsApi } from '../../../../api-new/activiti-rest-api/api/appDefinitions.api';
import { RuntimeAppDefinitionsApi } from '../../../../api-new/activiti-rest-api/api/runtimeAppDefinitions.api';
import { RuntimeAppDefinitionSaveRepresentation } from '../../../../api-new/activiti-rest-api/model/runtimeAppDefinitionSaveRepresentation';
import { ResultListDataRepresentationAppDefinitionRepresentation } from '../../../../api-new/activiti-rest-api/model/resultListDataRepresentationAppDefinitionRepresentation';
import { AppDefinitionSaveRepresentation } from '../../../../api-new/activiti-rest-api/model/appDefinitionSaveRepresentation';
import { AppDefinitionUpdateResultRepresentation } from '../../../../api-new/activiti-rest-api/model/appDefinitionUpdateResultRepresentation';
import { AppDefinitionPublishRepresentation } from '../../../../api-new/activiti-rest-api/model/appDefinitionPublishRepresentation';

/**
 * @deprecated 3.0.0
 */
export class AppsApi {

    runtimeAppDefinitionsApi: RuntimeAppDefinitionsApi;
    appDefinitionsApi: AppDefinitionsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.runtimeAppDefinitionsApi = new RuntimeAppDefinitionsApi(alfrescoApi);
        this.appDefinitionsApi = new AppDefinitionsApi(alfrescoApi);
    }

    deployAppDefinitions(saveObject: RuntimeAppDefinitionSaveRepresentation): Promise<any> {
        return this.runtimeAppDefinitionsApi.deployAppDefinitions(saveObject);
    }

    exportAppDefinition(modelId: number): Promise<any> {
        return this.appDefinitionsApi.exportAppDefinition(modelId);
    }

    getAppDefinitions(): Promise<ResultListDataRepresentationAppDefinitionRepresentation> {
        return this.runtimeAppDefinitionsApi.getAppDefinitions();
    }

    importAppDefinition(file) {
        return this.appDefinitionsApi.importAppDefinition(file)
    }

    importNewAppDefinition(modelId: number, file: Blob): Promise<any> {
        return this.appDefinitionsApi.updateAppDefinition(modelId, file)
    }

    publishAppDefinition(modelId: number, publishModel: AppDefinitionPublishRepresentation): Promise<AppDefinitionUpdateResultRepresentation> {
        return this.appDefinitionsApi.publishAppDefinition(modelId, publishModel)
    }

    updateAppDefinition(modelId: number, updatedModel: AppDefinitionSaveRepresentation): Promise<any> {
        return this.appDefinitionsApi.updateAppDefinition(modelId, updatedModel)
    }
}
