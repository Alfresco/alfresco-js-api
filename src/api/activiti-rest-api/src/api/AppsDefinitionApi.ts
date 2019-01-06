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
import { RuntimeAppDefinitionsApi } from '../../../../api-new/activiti-rest-api/api/runtimeAppDefinitions.api';
import { AppDefinitionsApi } from '../../../../api-new/activiti-rest-api/api/appDefinitions.api';
import { AppDefinitionRepresentation } from '../../../../api-new/activiti-rest-api/model/appDefinitionRepresentation';
import { AppDefinitionPublishRepresentation } from '../../../../api-new/activiti-rest-api/model/appDefinitionPublishRepresentation';
import { AppDefinitionUpdateResultRepresentation } from '../../../../api-new/activiti-rest-api/model/appDefinitionUpdateResultRepresentation';

/**
 * @deprecated 3.0.0
 */
export class AppsDefinitionApi {

    runtimeAppDefinitionsApi: RuntimeAppDefinitionsApi;
    appDefinitionsApi: AppDefinitionsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.runtimeAppDefinitionsApi = new RuntimeAppDefinitionsApi(alfrescoApi);
        this.appDefinitionsApi = new AppDefinitionsApi(alfrescoApi);
    }

    exportAppDefinition(modelId: number): Promise<any> {
        return this.appDefinitionsApi.exportAppDefinition(modelId);
    }

    importAppDefinition(file: Blob, opts?: any): Promise<AppDefinitionRepresentation> {
        return this.appDefinitionsApi.importAppDefinition(file, opts);
    }

    importNewAppDefinition(modelId: number, file: Blob): Promise<AppDefinitionRepresentation> {
        return this.appDefinitionsApi.updateAppDefinition(modelId, file);
    }

    publishAppDefinition(modelId: number, publishModel: AppDefinitionPublishRepresentation): Promise<AppDefinitionUpdateResultRepresentation> {
        return this.appDefinitionsApi.publishAppDefinition(modelId, publishModel);
    }
}
