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
export class TaskformsApi extends BaseApi {
    /**
    * Complete a task form
    * 
    * 
    * @param taskId taskId
    * @param completeTaskFormRepresentation completeTaskFormRepresentation
    */
    completeTaskFormUsingPOST(taskId: string, completeTaskFormRepresentation: CompleteFormRepresentation): Promise<{}> {

        let postBody = completeTaskFormRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in completeTaskFormUsingPOST");
        }

        if (completeTaskFormRepresentation === undefined || completeTaskFormRepresentation === null) {
            throw new Error("Required param 'completeTaskFormRepresentation' in completeTaskFormUsingPOST");
        }

        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/task-forms/{taskId}', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get task variables
        * 
        * 
        * @param taskId taskId
        */
    getProcessInstanceVariablesUsingGET1(taskId: string): Promise<any> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getProcessInstanceVariablesUsingGET1");
        }

        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/task-forms/{taskId}/variables', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve column field values
        * 
        * Specific case to retrieve information on a specific column
        * @param taskId taskId
        * @param field field
        * @param column column
        */
    getRestFieldValuesUsingGET1(taskId: string, field: string, column: string): Promise<any> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getRestFieldValuesUsingGET1");
        }

        if (field === undefined || field === null) {
            throw new Error("Required param 'field' in getRestFieldValuesUsingGET1");
        }

        if (column === undefined || column === null) {
            throw new Error("Required param 'column' in getRestFieldValuesUsingGET1");
        }

        let pathParams = {
            'taskId': taskId, 'field': field, 'column': column
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/task-forms/{taskId}/form-values/{field}/{column}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve populated field values
        * 
        * Form field values that are populated through a REST backend, can be retrieved via this service
        * @param taskId taskId
        * @param field field
        */
    getRestFieldValuesUsingGET2(taskId: string, field: string): Promise<any> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getRestFieldValuesUsingGET2");
        }

        if (field === undefined || field === null) {
            throw new Error("Required param 'field' in getRestFieldValuesUsingGET2");
        }

        let pathParams = {
            'taskId': taskId, 'field': field
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/task-forms/{taskId}/form-values/{field}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a task form
        * 
        * 
        * @param taskId taskId
        */
    getTaskFormUsingGET(taskId: string): Promise<FormDefinitionRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskFormUsingGET");
        }

        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/task-forms/{taskId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Save a task form
        * 
        * 
        * @param taskId taskId
        * @param saveTaskFormRepresentation saveTaskFormRepresentation
        */
    saveTaskFormUsingPOST(taskId: string, saveTaskFormRepresentation: SaveFormRepresentation): Promise<{}> {

        let postBody = saveTaskFormRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in saveTaskFormUsingPOST");
        }

        if (saveTaskFormRepresentation === undefined || saveTaskFormRepresentation === null) {
            throw new Error("Required param 'saveTaskFormRepresentation' in saveTaskFormUsingPOST");
        }

        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/task-forms/{taskId}/save-form', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
