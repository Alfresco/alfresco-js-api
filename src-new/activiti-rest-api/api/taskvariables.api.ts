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

import { RestVariable } from '../model/restVariable';
import { BaseApi } from './base.api';

/**
* Taskvariables service.
* @module TaskvariablesApi
*/
export class TaskvariablesApi extends BaseApi {
    /**
    * Create variables
    * 
    * 
    * @param taskId taskId
    * @param restVariables restVariables
    */
    createTaskVariableUsingPOST(taskId: string, restVariables: any): Promise<any> {

        let postBody = restVariables;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in createTaskVariableUsingPOST");
        }

        if (restVariables === undefined || restVariables === null) {
            throw new Error("Required param 'restVariables' in createTaskVariableUsingPOST");
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
            '/enterprise/tasks/{taskId}/variables', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create or update variables
        * 
        * 
        * @param taskId taskId
        */
    deleteAllLocalTaskVariablesUsingDELETE(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in deleteAllLocalTaskVariablesUsingDELETE");
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
            '/enterprise/tasks/{taskId}/variables', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a variable
        * 
        * 
        * @param taskId taskId
        * @param variableName variableName
        * @param scope scope
        */
    deleteVariableUsingDELETE(taskId: string, variableName: string, opts: any): Promise<{}> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in deleteVariableUsingDELETE");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in deleteVariableUsingDELETE");
        }

        let pathParams = {
            'taskId': taskId, 'variableName': variableName
        };
        let queryParams = {
            'scope': opts['scope'],
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
            '/enterprise/tasks/{taskId}/variables/{variableName}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a variable
        * 
        * 
        * @param taskId taskId
        * @param variableName variableName
        * @param scope scope
        */
    getVariableUsingGET(taskId: string, variableName: string, opts: any): Promise<RestVariable> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getVariableUsingGET");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in getVariableUsingGET");
        }

        let pathParams = {
            'taskId': taskId, 'variableName': variableName
        };
        let queryParams = {
            'scope': opts['scope'],
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
            '/enterprise/tasks/{taskId}/variables/{variableName}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List variables
        * 
        * 
        * @param taskId taskId
        * @param scope scope
        */
    getVariablesUsingGET(taskId: string, opts: any): Promise<any> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getVariablesUsingGET");
        }

        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
            'scope': opts['scope'],
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
            '/enterprise/tasks/{taskId}/variables', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a variable
        * 
        * 
        * @param taskId taskId
        * @param variableName variableName
        * @param restVariable restVariable
        */
    updateVariableUsingPUT(taskId: string, variableName: string, restVariable: RestVariable): Promise<RestVariable> {

        let postBody = restVariable;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in updateVariableUsingPUT");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in updateVariableUsingPUT");
        }

        if (restVariable === undefined || restVariable === null) {
            throw new Error("Required param 'restVariable' in updateVariableUsingPUT");
        }

        let pathParams = {
            'taskId': taskId, 'variableName': variableName
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
            '/enterprise/tasks/{taskId}/variables/{variableName}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
