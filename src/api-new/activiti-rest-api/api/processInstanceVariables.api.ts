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

        let postBody = restVariables;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createOrUpdateProcessInstanceVariables");
        }

        if (restVariables === undefined || restVariables === null) {
            throw new Error("Required param 'restVariables' in createOrUpdateProcessInstanceVariables");
        }

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
            contentTypes, accepts)
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

        let postBody = restVariables;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createProcessInstanceVariables");
        }

        if (restVariables === undefined || restVariables === null) {
            throw new Error("Required param 'restVariables' in createProcessInstanceVariables");
        }

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
            contentTypes, accepts)
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

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in deleteProcessInstanceVariable");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in deleteProcessInstanceVariable");
        }

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
            contentTypes, accepts)
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

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceVariable");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in getProcessInstanceVariable");
        }

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
            contentTypes, accepts, RestVariable)
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

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceVariables");
        }

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
            contentTypes, accepts)
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

        let postBody = restVariable;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in updateProcessInstanceVariable");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in updateProcessInstanceVariable");
        }

        if (restVariable === undefined || restVariable === null) {
            throw new Error("Required param 'restVariable' in updateProcessInstanceVariable");
        }

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
            contentTypes, accepts, RestVariable)
    }

}
