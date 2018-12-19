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
import { ProcessClient } from '../../../../processClient';

export class ProcessInstanceVariablesApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the getProcessInstanceContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve variables set on a process instance
     * @param {String} processInstanceId processInstanceId
     */
    getProcessInstanceVariables(processInstanceId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstanceVariables";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Create new process instance variables
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RestVariable} restVariables restVariables
     */
    createProcessInstanceVariables(processInstanceId, restVariables) {
        let postBody = restVariables;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in createProcessInstanceVariables";
        }

        // verify the required parameter 'restVariables' is set
        if (restVariables === undefined || restVariables === null) {
            throw "Missing param 'restVariables' in createProcessInstanceVariables";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/variables', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Create new process variables or update existing variables
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RestVariable} restVariables restVariables
     */
    createOrUpdateProcessInstanceVariables(processInstanceId, restVariables) {
        let postBody = restVariables;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in createOrUpdateProcessInstanceVariables";
        }

        // verify the required parameter 'restVariables' is set
        if (restVariables === undefined || restVariables === null) {
            throw "Missing param 'restVariables' in createOrUpdateProcessInstanceVariables";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/variables', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get an existing process instance variable
     * @param {String} processInstanceId processInstanceId
     * @param {String} variableName variableName
     */
    getProcessInstanceVariable(processInstanceId, variableName) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstanceVariable";
        }

        // verify the required parameter 'variableName' is set
        if (variableName === undefined || variableName === null) {
            throw "Missing param 'variableName' in getProcessInstanceVariable";
        }


        let pathParams = {
            'processInstanceId': processInstanceId,
            'variableName': variableName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Update an existing process instance variable
     * @param {String} processInstanceId processInstanceId
     * @param {String} variableName variableName
     * @param {module:model/RestVariable} restVariable restVariable
     */
    updateProcessInstanceVariable(processInstanceId, variableName, restVariable) {
        let postBody = restVariable;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in updateProcessInstanceVariable";
        }

        // verify the required parameter 'variableName' is set
        if (variableName === undefined || variableName === null) {
            throw "Missing param 'variableName' in updateProcessInstanceVariable";
        }


        let pathParams = {
            'processInstanceId': processInstanceId,
            'variableName': variableName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Delete an existing process instance variable
     * @param {String} processInstanceId processInstanceId
     * @param {String} variableName variableName
     */
    deleteProcessInstanceVariable(processInstanceId, variableName) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in deleteProcessInstanceVariable";
        }

        // verify the required parameter 'variableName' is set
        if (variableName === undefined || variableName === null) {
            throw "Missing param 'variableName' in deleteProcessInstanceVariable";
        }


        let pathParams = {
            'processInstanceId': processInstanceId,
            'variableName': variableName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
