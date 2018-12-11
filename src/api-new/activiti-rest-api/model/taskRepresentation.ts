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
import { LightGroupRepresentation } from './lightGroupRepresentation';
import { LightUserRepresentation } from './lightUserRepresentation';
import { RestVariable } from './restVariable';

export class TaskRepresentation {
    adhocTaskCanBeReassigned?: boolean;
    assignee?: LightUserRepresentation;
    category?: string;
    created?: DateAlfresco;
    description?: string;
    dueDate?: DateAlfresco;
    duration?: number;
    endDate?: DateAlfresco;
    executionId?: string;
    formKey?: string;
    id?: string;
    initiatorCanCompleteTask?: boolean;
    involvedGroups?: Array<LightGroupRepresentation>;
    involvedPeople?: Array<LightUserRepresentation>;
    managerOfCandidateGroup?: boolean;
    memberOfCandidateGroup?: boolean;
    memberOfCandidateUsers?: boolean;
    name?: string;
    parentTaskId?: string;
    parentTaskName?: string;
    priority?: number;
    processDefinitionCategory?: string;
    processDefinitionDeploymentId?: string;
    processDefinitionDescription?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionName?: string;
    processDefinitionVersion?: number;
    processInstanceId?: string;
    processInstanceName?: string;
    processInstanceStartUserId?: string;
    taskDefinitionKey?: string;
    variables?: Array<RestVariable>;

    constructor(input?: any) {

        Object.assign(this, input);
        this.assignee = new LightUserRepresentation(input.assignee);
        this.created = new DateAlfresco(input.created);
        this.dueDate = new DateAlfresco(input.dueDate);
        this.endDate = new DateAlfresco(input.endDate);
        this.involvedGroups = input.involvedGroups.map((item: any) => {
            return new Array<LightGroupRepresentation>(item);
        });
        this.involvedPeople = input.involvedPeople.map((item: any) => {
            return new Array<LightUserRepresentation>(item);
        });
        this.variables = input.variables.map((item: any) => {
            return new Array<RestVariable>(item);
        });
    }

}
