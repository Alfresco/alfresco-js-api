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

import { ChecklistOrderRepresentation } from '../model/checklistOrderRepresentation';
import { ResultListDataRepresentationTaskRepresentation } from '../model/resultListDataRepresentationTaskRepresentation';
import { TaskRepresentation } from '../model/taskRepresentation';
import { BaseApi } from './base.api';

/**
* Checklists service.
* @module ChecklistsApi
*/
export class ChecklistsApi extends BaseApi {
    /**
    * Create a task checklist
    *
    *
    *
    * @param taskId taskId
    * @param taskRepresentation taskRepresentation
    * @return Promise<TaskRepresentation>
    */
    addSubtask(taskId: string, taskRepresentation: TaskRepresentation): Promise<TaskRepresentation> {

        let postBody = taskRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in addSubtask");
        }

        if (taskRepresentation === undefined || taskRepresentation === null) {
            throw new Error("Required param 'taskRepresentation' in addSubtask");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/checklist', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get checklist for a task
        *
        *
        *
        * @param taskId taskId
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    getChecklist(taskId: string): Promise<ResultListDataRepresentationTaskRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getChecklist");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/checklist', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Change the order of items on a checklist
        *
        *
        *
        * @param taskId taskId
        * @param orderRepresentation orderRepresentation
        * @return Promise<{}>
        */
    orderChecklist(taskId: string, orderRepresentation: ChecklistOrderRepresentation): Promise<any> {

        let postBody = orderRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in orderChecklist");
        }

        if (orderRepresentation === undefined || orderRepresentation === null) {
            throw new Error("Required param 'orderRepresentation' in orderChecklist");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/checklist', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
