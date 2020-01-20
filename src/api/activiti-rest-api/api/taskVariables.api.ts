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

import { } from '../model/';
import { RestVariable } from '../model/restVariable';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Taskvariables service.
* @module TaskvariablesApi
*/
export class TaskVariablesApi extends BaseApi {
    /**
    * Create variables
    *
    *
    *
    * @param taskId taskId
    * @param restVariables restVariables
    * @return Promise<RestVariable>
    */
    createTaskVariable(taskId: string, restVariables: RestVariable): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(restVariables, 'restVariables');

        let postBody = restVariables;

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
            '/api/enterprise/tasks/{taskId}/variables', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RestVariable);
    }
    /**
        * Create or update variables
        *
        *
        *
        * @param taskId taskId
        * @return Promise<{}>
        */
    deleteAllLocalTaskVariables(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

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
            '/api/enterprise/tasks/{taskId}/variables', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a variable
        *
        *
        *
        * @param taskId taskId
        * @param variableName variableName
        * @param opts Optional parameters
        * @param opts.scope scope
        * @return Promise<{}>
        */
    deleteVariable(taskId: string, variableName: string, opts?: any): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(variableName, 'variableName');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'taskId': taskId, 'variableName': variableName
        };

        let queryParams = {
            'scope': opts['scope']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/variables/{variableName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a variable
        *
        *
        *
        * @param taskId taskId
        * @param variableName variableName
        * @param opts Optional parameters
        * @param opts.scope scope
        * @return Promise<RestVariable>
        */
    getVariable(taskId: string, variableName: string, opts?: any): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(variableName, 'variableName');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'taskId': taskId, 'variableName': variableName
        };

        let queryParams = {
            'scope': opts['scope']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/variables/{variableName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RestVariable);
    }
    /**
        * List variables
        *
        *
        *
        * @param taskId taskId
        * @param opts Optional parameters
        * @param opts.scope scope
        * @return Promise<RestVariable>
        */
    getVariables(taskId: string, opts?: any): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'scope': opts['scope']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RestVariable);
    }
    /**
        * Update a variable
        *
        *
        *
        * @param taskId taskId
        * @param variableName variableName
        * @param restVariable restVariable
        * @return Promise<RestVariable>
        */
    updateVariable(taskId: string, variableName: string, restVariable: RestVariable): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(variableName, 'variableName');
        throwIfNotDefined(restVariable, 'restVariable');

        let postBody = restVariable;

        let pathParams = {
            'taskId': taskId, 'variableName': variableName
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
            '/api/enterprise/tasks/{taskId}/variables/{variableName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RestVariable);
    }

}
