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

import { ResetPasswordRepresentation } from '../model/resetPasswordRepresentation';
import { ResultListDataRepresentationLightUserRepresentation } from '../model/resultListDataRepresentationLightUserRepresentation';
import { UserActionRepresentation } from '../model/userActionRepresentation';
import { UserRepresentation } from '../model/userRepresentation';
import { BaseApi } from './base.api';

/**
* Users service.
* @module UsersApi
*/
export class UsersApi extends BaseApi {
    /**
    * Execute an action for a specific user
    *
    * Typical action is updating/reset password
    *
    * @param userId userId
    * @param actionRequest actionRequest
    * @return Promise<{}>
    */
    executeAction(userId: number, actionRequest: UserActionRepresentation): Promise<any> {

        let postBody = actionRequest;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in executeAction");
        }

        if (actionRequest === undefined || actionRequest === null) {
            throw new Error("Required param 'actionRequest' in executeAction");
        }

        let pathParams = {
            'userId': userId
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
            '/api/enterprise/users/{userId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Stream user profile picture
        *
        *
        *
        * @param userId userId
        * @return Promise<{}>
        */
    getUserProfilePictureUrl(userId) {
        return this.apiClient.basePath + '/app/rest/users/' + userId + '/picture';
    }

    /**
        * Get a user
        *
        *
        *
        * @param userId userId
        * @return Promise<UserRepresentation>
        */
    getUser(userId: number): Promise<UserRepresentation> {

        let postBody = null;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in getUser");
        }

        let pathParams = {
            'userId': userId
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
            '/api/enterprise/users/{userId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query users
        *
        * A common use case is that a user wants to select another user (eg. when assigning a task) or group.
        *
        * @param opts Optional parameters
        * @param opts.filter filter
        * @param opts.email email
        * @param opts.externalId externalId
        * @param opts.externalIdCaseInsensitive externalIdCaseInsensitive
        * @param opts.excludeTaskId excludeTaskId
        * @param opts.excludeProcessId excludeProcessId
        * @param opts.groupId groupId
        * @param opts.tenantId tenantId
        * @return Promise<ResultListDataRepresentationLightUserRepresentation>
        */
    getUsers(opts?: any): Promise<ResultListDataRepresentationLightUserRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

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

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Request a password reset
        *
        *
        *
        * @param resetPassword resetPassword
        * @return Promise<{}>
        */
    requestPasswordReset(resetPassword: ResetPasswordRepresentation): Promise<any> {

        let postBody = resetPassword;

        if (resetPassword === undefined || resetPassword === null) {
            throw new Error("Required param 'resetPassword' in requestPasswordReset");
        }

        let pathParams = {

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
            '/api/enterprise/idm/passwords', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a user
        *
        *
        *
        * @param userId userId
        * @param userRequest userRequest
        * @return Promise<UserRepresentation>
        */
    updateUser(userId: number, userRequest: UserRepresentation): Promise<UserRepresentation> {

        let postBody = userRequest;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in updateUser");
        }

        if (userRequest === undefined || userRequest === null) {
            throw new Error("Required param 'userRequest' in updateUser");
        }

        let pathParams = {
            'userId': userId
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
            '/api/enterprise/users/{userId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
