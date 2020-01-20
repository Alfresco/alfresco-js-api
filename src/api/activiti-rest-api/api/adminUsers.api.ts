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

import { AbstractUserRepresentation } from '../model/abstractUserRepresentation';
import { BulkUserUpdateRepresentation } from '../model/bulkUserUpdateRepresentation';
import { ResultListDataRepresentationAbstractUserRepresentation } from '../model/resultListDataRepresentationAbstractUserRepresentation';
import { UserRepresentation } from '../model/userRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Adminusers service.
* @module AdminusersApi
*/
export class AdminUsersApi extends BaseApi {
    /**
    * Bulk update a list of users
    *
    *
    *
    * @param update update
    * @return Promise<{}>
    */
    bulkUpdateUsers(update: BulkUserUpdateRepresentation): Promise<any> {
        throwIfNotDefined(update, 'update');

        let postBody = update;

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
            '/api/enterprise/admin/users', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Create a user
        *
        *
        *
        * @param userRepresentation userRepresentation
        * @return Promise<UserRepresentation>
        */
    createNewUser(userRepresentation: UserRepresentation): Promise<UserRepresentation> {
        throwIfNotDefined(userRepresentation, 'userRepresentation');

        let postBody = userRepresentation;

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
            '/api/enterprise/admin/users', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserRepresentation);
    }
    /**
        * Get a user
        *
        *
        *
        * @param userId userId
        * @param opts Optional parameters
        * @param opts.summary summary
        * @return Promise<AbstractUserRepresentation>
        */
    getUser(userId: number, opts?: any): Promise<AbstractUserRepresentation> {
        throwIfNotDefined(userId, 'userId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'userId': userId
        };

        let queryParams = {
            'summary': opts['summary']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/users/{userId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AbstractUserRepresentation);
    }
    /**
        * Query users
        *
        *
        *
        * @param opts Optional parameters
        * @param opts.filter filter
        * @param opts.status status
        * @param opts.accountType accountType
        * @param opts.sort sort
        * @param opts.company company
        * @param opts.start start
        * @param opts.page page
        * @param opts.size size
        * @param opts.groupId groupId
        * @param opts.tenantId tenantId
        * @param opts.summary summary
        * @return Promise<ResultListDataRepresentationAbstractUserRepresentation>
        */
    getUsers(opts?: any): Promise<ResultListDataRepresentationAbstractUserRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

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

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAbstractUserRepresentation);
    }
    /**
        * Update a user
        *
        *
        *
        * @param userId userId
        * @param userRepresentation userRepresentation
        * @return Promise<{}>
        */
    updateUserDetails(userId: number, userRepresentation: UserRepresentation): Promise<any> {
        throwIfNotDefined(userId, 'userId');
        throwIfNotDefined(userRepresentation, 'userRepresentation');

        let postBody = userRepresentation;

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
            '/api/enterprise/admin/users/{userId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
