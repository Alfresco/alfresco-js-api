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
import { ProcessInstancesApi as NewProcessInstancesApi } from '../../../../api/activiti-rest-api/api';
import { ActivitiCommentsApi } from '../../../../api/activiti-rest-api/api/comments.api';
import { CommentRepresentation } from '../../../../api/activiti-rest-api/model/commentRepresentation';
import { ResultListDataRepresentationCommentRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationCommentRepresentation';
import { FormDefinitionRepresentation } from '../../../../api/activiti-rest-api/model/formDefinitionRepresentation';
import { ProcessInstanceRepresentation } from '../../../../api/activiti-rest-api/model/processInstanceRepresentation';

/**
 * @deprecated 3.0.0
 */
export class ProcessInstancesApi {

    private processInstancesApi: NewProcessInstancesApi;
    private activitiCommentsApi: ActivitiCommentsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.processInstancesApi = new NewProcessInstancesApi(alfrescoApi);
        this.activitiCommentsApi = new ActivitiCommentsApi(alfrescoApi);
    }

    addProcessInstanceComment(commentRequest: CommentRepresentation, processInstanceId: string): Promise<CommentRepresentation> {
        return this.activitiCommentsApi.addProcessInstanceComment(commentRequest, processInstanceId);
    }

    deleteProcessInstance(processInstanceId: string): Promise<any> {
        return this.processInstancesApi.deleteProcessInstance(processInstanceId);
    }

    getProcessInstanceComments(processInstanceId: string, opts?: any): Promise<ResultListDataRepresentationCommentRepresentation> {
        return this.activitiCommentsApi.getProcessInstanceComments(processInstanceId, opts);
    }

    getProcessInstanceStartForm(processInstanceId: string): Promise<FormDefinitionRepresentation> {
        return this.processInstancesApi.getProcessInstanceStartForm(processInstanceId);
    }

    getProcessInstance(processInstanceId: string): Promise<ProcessInstanceRepresentation> {
        return this.processInstancesApi.getProcessInstance(processInstanceId);
    }
}
