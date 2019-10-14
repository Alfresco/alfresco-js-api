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
import { ProcessInstancesApi } from '../../../../api/activiti-rest-api/api/processInstances.api';
import { ProcessInstanceFilterRequestRepresentation } from '../../../../api/activiti-rest-api/model/processInstanceFilterRequestRepresentation';
import { ResultListDataRepresentationProcessInstanceRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationProcessInstanceRepresentation';
import { ProcessDefinitionsApi } from '../../../../api/activiti-rest-api/api/processDefinitions.api';
import { FormDefinitionRepresentation } from '../../../../api/activiti-rest-api/model/formDefinitionRepresentation';
import { ResultListDataRepresentationProcessDefinitionRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationProcessDefinitionRepresentation';
import { ResultListDataRepresentationProcessContentRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationProcessContentRepresentation';
import { ProcessInstanceRepresentation } from '../../../../api/activiti-rest-api/model/processInstanceRepresentation';
import { ProcessInstanceQueryRepresentation } from '../../../../api/activiti-rest-api/model/processInstanceQueryRepresentation';
import { FormValueRepresentation } from '../../../../api/activiti-rest-api/model/formValueRepresentation';
import { CreateProcessInstanceRepresentation } from '../../../../api/activiti-rest-api/model/createProcessInstanceRepresentation';
import { ProcessInstanceAuditInfoRepresentation } from '../../../../api/activiti-rest-api/model/processInstanceAuditInfoRepresentation';

/**
 * @deprecated 3.0.0
 */
export class ProcessApi {

    private processInstancesApi: ProcessInstancesApi;
    private processDefinitionsApi: ProcessDefinitionsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.processInstancesApi = new ProcessInstancesApi(alfrescoApi);
        this.processDefinitionsApi = new ProcessDefinitionsApi(alfrescoApi);
    }

    deleteProcessInstance(processInstanceId: string): Promise<any> {
        return this.processInstancesApi.deleteProcessInstance(processInstanceId);
    }

    filterProcessInstances(filterRequest: ProcessInstanceFilterRequestRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {
        return this.processInstancesApi.filterProcessInstances(filterRequest);
    }

    getProcessDefinitionStartForm(processDefinitionId: string): Promise<FormDefinitionRepresentation> {
        return this.processDefinitionsApi.getProcessDefinitionStartForm(processDefinitionId);

    }

    getProcessDefinitions(opts?: any): Promise<ResultListDataRepresentationProcessDefinitionRepresentation> {
        return this.processDefinitionsApi.getProcessDefinitions(opts);
    }

    getProcessInstanceContent(processInstanceId: string): Promise<ResultListDataRepresentationProcessContentRepresentation> {
        return this.processInstancesApi.getProcessInstanceContent(processInstanceId);
    }

    getProcessInstanceStartForm(processInstanceId: string): Promise<FormDefinitionRepresentation> {
        return this.processInstancesApi.getProcessInstanceStartForm(processInstanceId);
    }

    getProcessInstance(processInstanceId: string): Promise<ProcessInstanceRepresentation> {
        return this.processInstancesApi.getProcessInstance(processInstanceId);
    }

    getProcessInstances(processInstancesQuery: ProcessInstanceQueryRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {
        return this.processInstancesApi.getProcessInstances(processInstancesQuery);
    }

    getProcessAuditJson(processInstanceId: string): Promise<ProcessInstanceAuditInfoRepresentation> {
        return this.processInstancesApi.getTaskAuditLog(processInstanceId);
    }

    getProcessAuditPdf(processInstanceId: string): Promise<any> {
        return this.processInstancesApi.getProcessAuditPdf(processInstanceId);
    }

    getRestFieldValues(processDefinitionId: string, field: string): Promise<FormValueRepresentation []> {
        return this.processDefinitionsApi.getRestFieldValues(processDefinitionId, field);
    }

    getRestTableFieldValues(processDefinitionId: string, field: string, column: string): Promise<FormValueRepresentation []> {
        return this.processDefinitionsApi.getRestTableFieldValues(processDefinitionId, field, column);
    }

    startNewProcessInstance(startRequest: CreateProcessInstanceRepresentation): Promise<ProcessInstanceRepresentation> {
        return this.processInstancesApi.startNewProcessInstance(startRequest);
    }
}
