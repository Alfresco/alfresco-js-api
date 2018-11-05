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
* Processinstancevariables service.
* @module ProcessinstancevariablesApi
*/
export class ProcessinstancevariablesApi extends BaseApi {
    /**
    * Create or update variables
    * 
    * 
    * 
    * @param processInstanceId Process instance ID
    * @param restVariables restVariables
    * @return Promise<Array<RestVariable>>
    */
    createOrUpdateProcessInstanceVariablesUsingPUT(processInstanceId: string, restVariables: Array<RestVariable>): Promise<Array<RestVariable>> {

        let postBody = restVariables;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createOrUpdateProcessInstanceVariablesUsingPUT");
        }

        if (restVariables === undefined || restVariables === null) {
            throw new Error("Required param 'restVariables' in createOrUpdateProcessInstanceVariablesUsingPUT");
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
            '/enterprise/process-instances/{processInstanceId}/variables', 'PUT',
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
        * @return Promise<Array<RestVariable>>
        */
    createProcessInstanceVariablesUsingPOST(processInstanceId: string, restVariables: Array<RestVariable>): Promise<Array<RestVariable>> {

        let postBody = restVariables;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createProcessInstanceVariablesUsingPOST");
        }

        if (restVariables === undefined || restVariables === null) {
            throw new Error("Required param 'restVariables' in createProcessInstanceVariablesUsingPOST");
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
            '/enterprise/process-instances/{processInstanceId}/variables', 'POST',
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
    deleteProcessInstanceVariableUsingDELETE(processInstanceId: string, variableName: string): Promise<{}> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in deleteProcessInstanceVariableUsingDELETE");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in deleteProcessInstanceVariableUsingDELETE");
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
            '/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'DELETE',
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
    getProcessInstanceVariableUsingGET(processInstanceId: string, variableName: string): Promise<RestVariable> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceVariableUsingGET");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in getProcessInstanceVariableUsingGET");
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
            '/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List variables
        * 
        * 
        * 
        * @param processInstanceId Process instance ID
        * @return Promise<Array<RestVariable>>
        */
    getProcessInstanceVariablesUsingGET(processInstanceId: string): Promise<Array<RestVariable>> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceVariablesUsingGET");
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
            '/enterprise/process-instances/{processInstanceId}/variables', 'GET',
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
    updateProcessInstanceVariableUsingPUT(processInstanceId: string, variableName: string, restVariable: RestVariable): Promise<RestVariable> {

        let postBody = restVariable;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in updateProcessInstanceVariableUsingPUT");
        }

        if (variableName === undefined || variableName === null) {
            throw new Error("Required param 'variableName' in updateProcessInstanceVariableUsingPUT");
        }

        if (restVariable === undefined || restVariable === null) {
            throw new Error("Required param 'restVariable' in updateProcessInstanceVariableUsingPUT");
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
            '/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
