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

export class ProcessInstancesApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the addProcessInstanceComment operation.
     * @param {String} error Error message, if any.
     * @param {module:model/CommentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a Process
     * @param {module:model/CommentRepresentation} commentRequest commentRequest
     * @param {String} processInstanceId processInstanceId
     */
    addProcessInstanceComment(commentRequest, processInstanceId) {
        let postBody = commentRequest;

        // verify the required parameter 'commentRequest' is set
        if (commentRequest === undefined || commentRequest === null) {
            throw "Missing param 'commentRequest' in addProcessInstanceComment";
        }

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in addProcessInstanceComment";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/comments', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the deleteProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a process instance
     * @param {String} processInstanceId processInstanceId
     */
    deleteProcessInstance(processInstanceId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in deleteProcessInstance";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessInstanceComments operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Comment list added to Process
     * @param {String} processInstanceId processInstanceId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestFirst latestFirst
     */
    getProcessInstanceComments(processInstanceId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstanceComments";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {
            'latestFirst': opts['latestFirst']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/comments', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessInstanceStartForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get process start form
     * When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved
     * @param {String} processInstanceId processInstanceId
     */
    getProcessInstanceStartForm(processInstanceId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstanceStartForm";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/start-form', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a process instance information
     * @param {String} processInstanceId processInstanceId
     */
    getProcessInstance(processInstanceId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstance";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
