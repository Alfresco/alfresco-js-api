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

export class AdminUsersApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the bulkUpdateUsers operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk Update a list of users
     * @param {module:model/BulkUserUpdateRepresentation} update update
     */
    bulkUpdateUsers(update) {
        let postBody = update;

        // verify the required parameter 'update' is set
        if (update === undefined || update === null) {
            throw "Missing param 'update' in bulkUpdateUsers";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/users', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createNewUser operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     * data is of type: {module:model/UserRepresentation}
     */
    createNewUser(userRepresentation) {
        let postBody = userRepresentation;

        // verify the required parameter 'userRepresentation' is set
        if (userRepresentation === undefined || userRepresentation === null) {
            throw "Missing param 'userRepresentation' in createNewUser";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/users', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getUser operation.
     * @param {String} error Error message, if any.
     * @param {module:model/AbstractUserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     * @param {Integer} userId userId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.summary summary
     * data is of type: {module:model/AbstractUserRepresentation}
     */
    getUser(userId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in getUser";
        }


        let pathParams = {
            'userId': userId
        };
        let queryParams = {
            'summary': opts['summary']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/users/{userId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getUsers operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of users
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.status status
     * @param {String} opts.accountType accountType
     * @param {String} opts.sort sort
     * @param {String} opts.company company
     * @param {Integer} opts.start start
     * @param {Integer} opts.page page
     * @param {Integer} opts.size size
     * @param {Integer} opts.groupId groupId
     * @param {Integer} opts.tenantId tenantId
     * @param {Boolean} opts.summary summary
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getUsers(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'filter': opts['filter'],
            'status': opts['status'],
            'accountType': opts['accountType'],
            'sort': opts['sort'],
            'company': opts['company'],
            'start': opts['start'],
            'page': opts['page'],
            'size': opts['size'],
            'groupId': opts['groupId'],
            'tenantId': opts['tenantId'],
            'summary': opts['summary']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateUserDetails operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user details
     * @param {Integer} userId userId
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     */
    updateUserDetails(userId, userRepresentation) {
        let postBody = userRepresentation;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in updateUserDetails";
        }

        // verify the required parameter 'userRepresentation' is set
        if (userRepresentation === undefined || userRepresentation === null) {
            throw "Missing param 'userRepresentation' in updateUserDetails";
        }


        let pathParams = {
            'userId': userId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/users/{userId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
