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

export class TaskFormsApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the completeTaskForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete a Task Form
     * @param {String} taskId taskId
     * @param {module:model/CompleteFormRepresentation} completeTaskFormRepresentation completeTaskFormRepresentation
     */
    completeTaskForm(taskId, completeTaskFormRepresentation) {
        let postBody = completeTaskFormRepresentation;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in completeTaskForm";
        }

        // verify the required parameter 'completeTaskFormRepresentation' is set
        if (completeTaskFormRepresentation === undefined || completeTaskFormRepresentation === null) {
            throw "Missing param 'completeTaskFormRepresentation' in completeTaskForm";
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
            '/api/enterprise/task-forms/{taskId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getRestFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Column Field Values
     * Specific case to retrieve information on a specific column
     * @param {String} taskId taskId
     * @param {String} field field
     * @param {String} column column
     */
    getRestFieldColumnValues(taskId, field, column) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in getRestFieldValues";
        }

        // verify the required parameter 'field' is set
        if (field === undefined || field === null) {
            throw "Missing param 'field' in getRestFieldValues";
        }

        // verify the required parameter 'column' is set
        if (column === undefined || column === null) {
            throw "Missing param 'column' in getRestFieldValues";
        }


        let pathParams = {
            'taskId': taskId,
            'field': field,
            'column': column
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/task-forms/{taskId}/form-values/{field}/{column}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getRestFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Populated Field Values
     * Form field values that are populated through a REST backend, can be retrieved via this service
     * @param {String} taskId taskId
     * @param {String} field field
     */
    getRestFieldValues(taskId, field) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in getRestFieldValues";
        }

        // verify the required parameter 'field' is set
        if (field === undefined || field === null) {
            throw "Missing param 'field' in getRestFieldValues";
        }


        let pathParams = {
            'taskId': taskId,
            'field': field
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/task-forms/{taskId}/form-values/{field}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getTaskForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Task Form
     * @param {String} taskId taskId
     */
    getTaskForm(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in getTaskForm";
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
            '/api/enterprise/task-forms/{taskId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getTaskFormVariables operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Task Form Variables
     * @param {String} taskId taskId
     */
    getTaskFormVariables(taskId) {
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in getTaskFormVariables";
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
            '/api/enterprise/task-forms/{taskId}/variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the saveTaskForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save Task Form
     * @param {String} taskId taskId
     * @param {module:model/SaveFormRepresentation} saveTaskFormRepresentation saveTaskFormRepresentation
     */
    saveTaskForm(taskId, saveTaskFormRepresentation) {
        let postBody = saveTaskFormRepresentation;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in saveTaskForm";
        }

        // verify the required parameter 'saveTaskFormRepresentation' is set
        if (saveTaskFormRepresentation === undefined || saveTaskFormRepresentation === null) {
            throw "Missing param 'saveTaskFormRepresentation' in saveTaskForm";
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
            '/api/enterprise/task-forms/{taskId}/save-form', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
