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
import { ProcessDefinitionsApi } from '../../../../api/activiti-rest-api/api/processDefinitions.api';
import { FormDefinitionRepresentation } from '../../../../api/activiti-rest-api/model/formDefinitionRepresentation';
import { FormValueRepresentation } from '../../../../api/activiti-rest-api/model/formValueRepresentation';

/**
 * @deprecated 3.0.0
 */
export class ProcessDefinitionsFormApi {

    private processDefinitionsApi: ProcessDefinitionsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.processDefinitionsApi = new ProcessDefinitionsApi(alfrescoApi);
    }

    getProcessDefinitionStartForm(processDefinitionId: string): Promise<FormDefinitionRepresentation> {
        return this.processDefinitionsApi.getProcessDefinitionStartForm(processDefinitionId);
    }

    getRestFieldValues(processDefinitionId: string, field: string): Promise<FormValueRepresentation []> {
        return this.processDefinitionsApi.getRestFieldValues(processDefinitionId, field);
    }

    getRestTableFieldValues(processDefinitionId: string, field: string, column: string): Promise<FormValueRepresentation []> {
        return this.processDefinitionsApi.getRestTableFieldValues(processDefinitionId, field, column);
    }
}
