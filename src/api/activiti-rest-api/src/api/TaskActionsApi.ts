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

export class TaskActionsApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the assignTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a task to a user
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    assignTask(taskId, requestNode) {
        let postBody = requestNode;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in assignTask";
        }

        // verify the required parameter 'requestNode' is set
        if (requestNode === undefined || requestNode === null) {
            throw "Missing param 'requestNode' in assignTask";
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
            '/api/enterprise/tasks/{taskId}/action/assign', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the attachForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a form to a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    attachForm(taskId, requestNode) {
        let postBody = requestNode;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in attachForm";
        }

        // verify the required parameter 'requestNode' is set
        if (requestNode === undefined || requestNode === null) {
            throw "Missing param 'requestNode' in attachForm";
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
            '/api/enterprise/tasks/{taskId}/action/attach-form', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the claimTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Claim a task
     * To claim a task (in case the task is assigned to a group)
     * @param {String} taskId taskId
     */
    claimTask(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in claimTask";
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
            '/api/enterprise/tasks/{taskId}/action/claim', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the completeTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete Task
     * To complete a task (standalone or without a task form)
     * @param {String} taskId taskId
     */
    completeTask(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in completeTask";
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
            '/api/enterprise/tasks/{taskId}/action/complete', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the involveUser operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To involve a user with a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    involveUser(taskId, requestNode) {
        let postBody = requestNode;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in involveUser";
        }

        // verify the required parameter 'requestNode' is set
        if (requestNode === undefined || requestNode === null) {
            throw "Missing param 'requestNode' in involveUser";
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
            '/api/enterprise/tasks/{taskId}/action/involve', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the removeForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a form to a task
     * @param {String} taskId taskId
     */
    removeForm(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in removeForm";
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
            '/api/enterprise/tasks/{taskId}/action/remove-form', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the removeInvolvedUser operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an involved user from a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    removeInvolvedUser(taskId, requestNode) {
        let postBody = requestNode;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in removeInvolvedUser";
        }

        // verify the required parameter 'requestNode' is set
        if (requestNode === undefined || requestNode === null) {
            throw "Missing param 'requestNode' in removeInvolvedUser";
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
            '/api/enterprise/tasks/{taskId}/action/remove-involved', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the unclaimTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unclaim a task
     * To unclaim a task (in case the task was assigned to a group)
     * @param {String} taskId taskId
     */
    unclaimTask(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in unclaimTask";
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
            '/api/enterprise/tasks/{taskId}/action/unclaim', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
