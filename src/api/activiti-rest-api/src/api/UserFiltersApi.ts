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

/**
 * @deprecated 3.0.0
 */
export class UserFiltersApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the createUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user process instance task filter
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation) {
        let postBody = userProcessInstanceFilterRepresentation;

        // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
        if (userProcessInstanceFilterRepresentation === undefined || userProcessInstanceFilterRepresentation === null) {
            throw "Missing param 'userProcessInstanceFilterRepresentation' in createUserProcessInstanceFilter";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new task filter
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    createUserTaskFilter(userTaskFilterRepresentation) {
        let postBody = userTaskFilterRepresentation;

        // verify the required parameter 'userTaskFilterRepresentation' is set
        if (userTaskFilterRepresentation === undefined || userTaskFilterRepresentation === null) {
            throw "Missing param 'userTaskFilterRepresentation' in createUserTaskFilter";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the deleteUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     */
    deleteUserProcessInstanceFilter(userFilterId) {
        let postBody = null;

        // verify the required parameter 'userFilterId' is set
        if (userFilterId === undefined || userFilterId === null) {
            throw "Missing param 'userFilterId' in deleteUserProcessInstanceFilter";
        }


        let pathParams = {
            'userFilterId': userFilterId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes/{userFilterId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the deleteUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a task filter
     * @param {Integer} userFilterId userFilterId
     */
    deleteUserTaskFilter(userFilterId) {
        let postBody = null;

        // verify the required parameter 'userFilterId' is set
        if (userFilterId === undefined || userFilterId === null) {
            throw "Missing param 'userFilterId' in deleteUserTaskFilter";
        }


        let pathParams = {
            'userFilterId': userFilterId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks/{userFilterId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    getUserProcessInstanceFilter(userFilterId) {
        let postBody = null;

        // verify the required parameter 'userFilterId' is set
        if (userFilterId === undefined || userFilterId === null) {
            throw "Missing param 'userFilterId' in getUserProcessInstanceFilter";
        }


        let pathParams = {
            'userFilterId': userFilterId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes/{userFilterId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getUserProcessInstanceFilters operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of taks filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getUserProcessInstanceFilters(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'appId': opts['appId']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific task filter
     * @param {Integer} userFilterId userFilterId
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    getUserTaskFilter(userFilterId) {
        let postBody = null;

        // verify the required parameter 'userFilterId' is set
        if (userFilterId === undefined || userFilterId === null) {
            throw "Missing param 'userFilterId' in getUserTaskFilter";
        }


        let pathParams = {
            'userFilterId': userFilterId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks/{userFilterId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getUserTaskFilters operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of task filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getUserTaskFilters(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'appId': opts['appId']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the orderUserProcessInstanceFilters operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user process instance filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     */
    orderUserProcessInstanceFilters(filterOrderRepresentation) {
        let postBody = filterOrderRepresentation;

        // verify the required parameter 'filterOrderRepresentation' is set
        if (filterOrderRepresentation === undefined || filterOrderRepresentation === null) {
            throw "Missing param 'filterOrderRepresentation' in orderUserProcessInstanceFilters";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the orderUserTaskFilters operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user task filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     */
    orderUserTaskFilters(filterOrderRepresentation) {
        let postBody = filterOrderRepresentation;

        // verify the required parameter 'filterOrderRepresentation' is set
        if (filterOrderRepresentation === undefined || filterOrderRepresentation === null) {
            throw "Missing param 'filterOrderRepresentation' in orderUserTaskFilters";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    updateUserProcessInstanceFilter(userFilterId, userProcessInstanceFilterRepresentation) {
        let postBody = userProcessInstanceFilterRepresentation;

        // verify the required parameter 'userFilterId' is set
        if (userFilterId === undefined || userFilterId === null) {
            throw "Missing param 'userFilterId' in updateUserProcessInstanceFilter";
        }

        // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
        if (userProcessInstanceFilterRepresentation === undefined || userProcessInstanceFilterRepresentation === null) {
            throw "Missing param 'userProcessInstanceFilterRepresentation' in updateUserProcessInstanceFilter";
        }


        let pathParams = {
            'userFilterId': userFilterId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes/{userFilterId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    updateUserTaskFilter(userFilterId, userTaskFilterRepresentation) {
        let postBody = userTaskFilterRepresentation;

        // verify the required parameter 'userFilterId' is set
        if (userFilterId === undefined || userFilterId === null) {
            throw "Missing param 'userFilterId' in updateUserTaskFilter";
        }

        // verify the required parameter 'userTaskFilterRepresentation' is set
        if (userTaskFilterRepresentation === undefined || userTaskFilterRepresentation === null) {
            throw "Missing param 'userTaskFilterRepresentation' in updateUserTaskFilter";
        }


        let pathParams = {
            'userFilterId': userFilterId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks/{userFilterId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
