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

export class UserApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the executeAction operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute an action for a specific user
     * Typical action is updating/reset password
     * @param {Integer} userId userId
     * @param {module:model/UserActionRepresentation} actionRequest actionRequest
     */
    executeAction(userId, actionRequest) {
        let postBody = actionRequest;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in executeAction";
        }

        // verify the required parameter 'actionRequest' is set
        if (actionRequest === undefined || actionRequest === null) {
            throw "Missing param 'actionRequest' in executeAction";
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
            '/api/enterprise/users/{userId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProfilePicture operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user profile picture
     * @param {Integer} userId userId
     */
    getProfilePicture(userId) {
        let postBody = null;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in getProfilePicture";
        }


        let pathParams = {
            'userId': userId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;
        let contextRoot = null;
        let responseType = 'blob';

        return this.apiClient.callApi(
            '/api/enterprise/users/{userId}/picture', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType, contextRoot, responseType
        );
    }

    getUserProfilePictureUrl(userId) {
        return this.apiClient.basePath + '/app/rest/users/' + userId + '/picture';
    }

    /**
     * Function to receive the result of the getUser operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     * @param {Integer} userId userId
     */
    getUser(userId) {
        let postBody = null;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in getUser";
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
            '/api/enterprise/users/{userId}', 'GET',
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
     * List users
     * A common use case is that a user wants to select another user (eg. when assigning a task) or group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.email email
     * @param {String} opts.externalId externalId
     * @param {String} opts.externalIdCaseInsensitive externalIdCaseInsensitive
     * @param {String} opts.excludeTaskId excludeTaskId
     * @param {String} opts.excludeProcessId excludeProcessId
     * @param {Integer} opts.groupId groupId
     * @param {Integer} opts.tenantId tenantId
     */
    getUsers(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'filter': opts['filter'],
            'email': opts['email'],
            'externalId': opts['externalId'],
            'externalIdCaseInsensitive': opts['externalIdCaseInsensitive'],
            'excludeTaskId': opts['excludeTaskId'],
            'excludeProcessId': opts['excludeProcessId'],
            'groupId': opts['groupId'],
            'tenantId': opts['tenantId']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the requestPasswordReset operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request password reset
     * @param {module:model/ResetPasswordRepresentation} resetPassword resetPassword
     */
    requestPasswordReset(resetPassword) {
        let postBody = resetPassword;

        // verify the required parameter 'resetPassword' is set
        if (resetPassword === undefined || resetPassword === null) {
            throw "Missing param 'resetPassword' in requestPasswordReset";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/idm/passwords', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateUser operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user information
     * @param {Integer} userId userId
     * @param {module:model/UserRepresentation} userRequest userRequest
     */
    updateUser(userId, userRequest) {
        let postBody = userRequest;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in updateUser";
        }

        // verify the required parameter 'userRequest' is set
        if (userRequest === undefined || userRequest === null) {
            throw "Missing param 'userRequest' in updateUser";
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
            '/api/enterprise/users/{userId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
