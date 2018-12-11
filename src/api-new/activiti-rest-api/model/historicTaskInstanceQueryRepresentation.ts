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

import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';
import { QueryVariable } from './queryVariable';

export class HistoricTaskInstanceQueryRepresentation {
    dueDate?: DateAlfresco;
    dueDateAfter?: DateAlfresco;
    dueDateBefore?: DateAlfresco;
    executionId?: string;
    finished?: boolean;
    includeProcessVariables?: boolean;
    includeTaskLocalVariables?: boolean;
    order?: string;
    parentTaskId?: string;
    processBusinessKey?: string;
    processBusinessKeyLike?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionKeyLike?: string;
    processDefinitionName?: string;
    processDefinitionNameLike?: string;
    processFinished?: boolean;
    processInstanceId?: string;
    processVariables?: Array<QueryVariable>;
    size?: number;
    sort?: string;
    start?: number;
    taskAssignee?: string;
    taskAssigneeLike?: string;
    taskCandidateGroup?: string;
    taskCompletedAfter?: DateAlfresco;
    taskCompletedBefore?: DateAlfresco;
    taskCompletedOn?: DateAlfresco;
    taskCreatedAfter?: DateAlfresco;
    taskCreatedBefore?: DateAlfresco;
    taskCreatedOn?: DateAlfresco;
    taskDefinitionKey?: string;
    taskDefinitionKeyLike?: string;
    taskDeleteReason?: string;
    taskDeleteReasonLike?: string;
    taskDescription?: string;
    taskDescriptionLike?: string;
    taskId?: string;
    taskInvolvedUser?: string;
    taskMaxPriority?: number;
    taskMinPriority?: number;
    taskName?: string;
    taskNameLike?: string;
    taskOwner?: string;
    taskOwnerLike?: string;
    taskPriority?: number;
    taskVariables?: Array<QueryVariable>;
    tenantId?: string;
    tenantIdLike?: string;
    withoutDueDate?: boolean;
    withoutTenantId?: boolean;

    constructor(input?: any) {

        Object.assign(this, input);
        this.dueDate = new DateAlfresco(input.dueDate);
        this.dueDateAfter = new DateAlfresco(input.dueDateAfter);
        this.dueDateBefore = new DateAlfresco(input.dueDateBefore);
        this.processVariables = input.processVariables.map((item: any) => {
            return new Array<QueryVariable>(item);
        });
        this.taskCompletedAfter = new DateAlfresco(input.taskCompletedAfter);
        this.taskCompletedBefore = new DateAlfresco(input.taskCompletedBefore);
        this.taskCompletedOn = new DateAlfresco(input.taskCompletedOn);
        this.taskCreatedAfter = new DateAlfresco(input.taskCreatedAfter);
        this.taskCreatedBefore = new DateAlfresco(input.taskCreatedBefore);
        this.taskCreatedOn = new DateAlfresco(input.taskCreatedOn);
        this.taskVariables = input.taskVariables.map((item: any) => {
            return new Array<QueryVariable>(item);
        });
    }

}
