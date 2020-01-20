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
* Processinstancevariables service.
* @module ProcessinstancevariablesApi
*/
export class ProcessInstanceVariablesApi extends BaseApi {
    /**
    * Create or update variables
    *
    *
    *
    * @param processInstanceId Process instance ID
    * @param restVariables restVariables
    * @return Promise<RestVariable>
    */
    createOrUpdateProcessInstanceVariables(processInstanceId: string, restVariables: RestVariable[]): Promise<RestVariable[]> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(restVariables, 'restVariables');

        let postBody = restVariables;

        let pathParams = {
            'processInstanceId': processInstanceId
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
            '/api/enterprise/process-instances/{processInstanceId}/variables', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Create variables
        *
        *
        *
        * @param processInstanceId Process instance ID
        * @param restVariables restVariables
        * @return Promise<RestVariable>
        */
    createProcessInstanceVariables(processInstanceId: string, restVariables: RestVariable[]): Promise<RestVariable[]> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(restVariables, 'restVariables');

        let postBody = restVariables;

        let pathParams = {
            'processInstanceId': processInstanceId
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
            '/api/enterprise/process-instances/{processInstanceId}/variables', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a variable
        *
        *
        *
        * @param processInstanceId processInstanceId
        * @param variableName variableName
        * @return Promise<{}>
        */
    deleteProcessInstanceVariable(processInstanceId: string, variableName: string): Promise<any> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(variableName, 'variableName');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId, 'variableName': variableName
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
            '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a variable
        *
        *
        *
        * @param processInstanceId processInstanceId
        * @param variableName variableName
        * @return Promise<RestVariable>
        */
    getProcessInstanceVariable(processInstanceId: string, variableName: string): Promise<RestVariable> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(variableName, 'variableName');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId, 'variableName': variableName
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
            '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RestVariable);
    }
    /**
        * List variables
        *
        *
        *
        * @param processInstanceId Process instance ID
        * @return Promise<RestVariable>
        */
    getProcessInstanceVariables(processInstanceId: string): Promise<RestVariable[]> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;
        let pathParams = {
            'processInstanceId': processInstanceId
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
            '/api/enterprise/process-instances/{processInstanceId}/variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update a variable
        *
        *
        *
        * @param processInstanceId processInstanceId
        * @param variableName variableName
        * @param restVariable restVariable
        * @return Promise<RestVariable>
        */
    updateProcessInstanceVariable(processInstanceId: string, variableName: string, restVariable: RestVariable): Promise<RestVariable> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(variableName, 'variableName');
        throwIfNotDefined(restVariable, 'restVariable');

        let postBody = restVariable;

        let pathParams = {
            'processInstanceId': processInstanceId, 'variableName': variableName
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
            '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RestVariable);
    }

}
