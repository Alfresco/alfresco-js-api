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
import { BpmClient } from '../../../../bpmClient';

export class TaskCheckListApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the addSubtask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a task checklist
     * @param {String} taskId taskId
     * @param {module:model/TaskRepresentation} taskRepresentation taskRepresentation
     */
    addSubtask(taskId, taskRepresentation) {
        let postBody = taskRepresentation;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in addSubtask";
        }

        // verify the required parameter 'taskRepresentation' is set
        if (taskRepresentation === undefined || taskRepresentation === null) {
            throw "Missing param 'taskRepresentation' in addSubtask";
        }


        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/checklist', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getChecklist operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Checklist added to a task
     * @param {String} taskId taskId
     */
    getChecklist(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in getChecklist";
        }


        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/checklist', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the orderChecklist operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the order of items on a checklist
     * @param {String} taskId taskId
     * @param {module:model/ChecklistOrderRepresentation} orderRepresentation orderRepresentation
     */
    orderChecklist(taskId, orderRepresentation) {
        let postBody = orderRepresentation;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in orderChecklist";
        }

        // verify the required parameter 'orderRepresentation' is set
        if (orderRepresentation === undefined || orderRepresentation === null) {
            throw "Missing param 'orderRepresentation' in orderChecklist";
        }


        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/checklist', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
