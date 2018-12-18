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

export class ProcessApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
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
     * Function to receive the result of the filterProcessInstances operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter a list of process instances
     * @param {module:model/ProcessInstanceFilterRequestRepresentation} filterRequest filterRequest
     */
    filterProcessInstances(filterRequest) {
        let postBody = filterRequest;

        // verify the required parameter 'filterRequest' is set
        if (filterRequest === undefined || filterRequest === null) {
            throw "Missing param 'filterRequest' in filterProcessInstances";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/filter', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessDefinitionStartForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the start form for a process definition
     * @param {String} processDefinitionId processDefinitionId
     */
    getProcessDefinitionStartForm(processDefinitionId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw "Missing param 'processDefinitionId' in getProcessInstanceContent";
        }


        let pathParams = {
            'processDefinitionId': processDefinitionId
        };

        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/start-form', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessDefinitions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of process definitions
     * Get a list of process definitions (visible within the tenant of the user)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latest latest
     * @param {Integer} opts.appDefinitionId appDefinitionId
     */
    getProcessDefinitions(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'latest': opts['latest'],
            'appDefinitionId': opts['appDefinitionId']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessInstanceContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
     */
    getProcessInstanceContent(processInstanceId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstanceContent";
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
            '/api/enterprise/process-instances/{processInstanceId}/field-content', 'GET',
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

    /**
     * Function to receive the result of the getProcessInstances operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of process instances
     * @param {module:model/ProcessFilterRequestRepresentation} requestNode requestNode
     */
    getProcessInstances(requestNode) {
        let postBody = requestNode;

        // verify the required parameter 'requestNode' is set
        if (requestNode === undefined || requestNode === null) {
            throw "Missing param 'requestNode' in getProcessInstances";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Retrieve the process audit in the JSON format
     * @param {String} processId processId
     */
    getProcessAuditJson(processId) {
        let postBody = null;

        // verify the required parameter 'processId' is set
        if (processId === undefined || processId === null) {
            throw "Missing param 'processId' in getProcessAuditJson";
        }

        let pathParams = {
            'processId': processId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processId}/audit-log', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Retrieve the process audit in the JSON format
     * @param {String} processId processId
     */
    getProcessAuditPdf(processId) {
        let postBody = null;

        // verify the required parameter 'processId' is set
        if (processId === undefined || processId === null) {
            throw "Missing param 'processId' in getProcessAuditPdf";
        }

        let pathParams = {
            'processId': processId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;
        let contextRoot = null;
        let responseType = null;

        return this.apiClient.callApi(
            '/app/rest/process-instances/{processId}/audit', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType, contextRoot, responseType
        );
    }

    /**
     * Function to receive the result of the getRestFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the typeahead field)
     *  @param {String} processDefinitionId
     *  @param {String} field
     */
    getRestFieldValues(processDefinitionId, field) {
        let postBody = null;


        let pathParams = {
            'processDefinitionId': processDefinitionId,
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
            '/api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getRestTableFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the table field)
     *  @param {String} processDefinitionId
     *  @param {String} field
     *  @param {String} column
     */
    getRestTableFieldValues(processDefinitionId, field, column) {
        let postBody = null;


        let pathParams = {
            'processDefinitionId': processDefinitionId,
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
            '/api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the startNewProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a process instance
     * @param {module:model/CreateProcessInstanceRepresentation} startRequest startRequest
     */
    startNewProcessInstance(startRequest) {
        let postBody = startRequest;

        // verify the required parameter 'startRequest' is set
        if (startRequest === undefined || startRequest === null) {
            throw "Missing param 'startRequest' in startNewProcessInstance";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
