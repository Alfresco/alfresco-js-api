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

import { CompleteFormRepresentation } from '../model/completeFormRepresentation';
import { FormDefinitionRepresentation } from '../model/formDefinitionRepresentation';
import { FormValueRepresentation } from '../model/formValueRepresentation';
import { ProcessInstanceVariableRepresentation } from '../model/processInstanceVariableRepresentation';
import { SaveFormRepresentation } from '../model/saveFormRepresentation';
import { BaseApi } from './base.api';

/**
* Taskforms service.
* @module TaskformsApi
*/
export class TaskFormsApi extends BaseApi {
    /**
    * Complete a task form
    *
    *
    *
    * @param taskId taskId
    * @param completeTaskFormRepresentation completeTaskFormRepresentation
    * @return Promise<{}>
    */
    completeTaskForm(taskId: string, completeTaskFormRepresentation: CompleteFormRepresentation): Promise<any> {

        let postBody = completeTaskFormRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in completeTaskForm");
        }

        if (completeTaskFormRepresentation === undefined || completeTaskFormRepresentation === null) {
            throw new Error("Required param 'completeTaskFormRepresentation' in completeTaskForm");
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
            '/api/enterprise/task-forms/{taskId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get task variables
        *
        *
        *
        * @param taskId taskId
        * @return Promise<ProcessInstanceVariableRepresentation>
        */
    getProcessInstanceVariables(taskId: string): Promise<ProcessInstanceVariableRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getProcessInstanceVariables");
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
            '/api/enterprise/task-forms/{taskId}/variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

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
        * Retrieve populated field values
        *
        * Form field values that are populated through a REST backend, can be retrieved via this service
        *
        * @param taskId taskId
        * @param field field
        * @return Promise<FormValueRepresentation>
        */
    getRestFieldValues(taskId: string, field: string): Promise<FormValueRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getRestFieldValues");
        }

        if (field === undefined || field === null) {
            throw new Error("Required param 'field' in getRestFieldValues");
        }

        let pathParams = {
            'taskId': taskId, 'field': field
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
            '/api/enterprise/task-forms/{taskId}/form-values/{field}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a task form
        *
        *
        *
        * @param taskId taskId
        * @return Promise<FormDefinitionRepresentation>
        */
    getTaskForm(taskId: string): Promise<FormDefinitionRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskForm");
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
            '/api/enterprise/task-forms/{taskId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Save a task form
        *
        *
        *
        * @param taskId taskId
        * @param saveTaskFormRepresentation saveTaskFormRepresentation
        * @return Promise<{}>
        */
    saveTaskForm(taskId: string, saveTaskFormRepresentation: SaveFormRepresentation): Promise<any> {

        let postBody = saveTaskFormRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in saveTaskForm");
        }

        if (saveTaskFormRepresentation === undefined || saveTaskFormRepresentation === null) {
            throw new Error("Required param 'saveTaskFormRepresentation' in saveTaskForm");
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
            '/api/enterprise/task-forms/{taskId}/save-form', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

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


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/task-forms/{taskId}/variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }



}
