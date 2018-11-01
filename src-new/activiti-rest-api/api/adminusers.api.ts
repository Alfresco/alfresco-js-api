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

/**
* Adminusers service.
* @module AdminusersApi
*/
export class AdminusersApi extends BaseApi {
    /**
    * Bulk update a list of users
    * 
    * 
    * @param update update
    */
    bulkUpdateUsersUsingPUT(update: BulkUserUpdateRepresentation): Promise<{}> {

        let postBody = update;

        if (update === undefined || update === null) {
            throw new Error("Required param 'update' in bulkUpdateUsersUsingPUT");
        }

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/users', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a user
        * 
        * 
        * @param userRepresentation userRepresentation
        */
    createNewUserUsingPOST(userRepresentation: UserRepresentation): Promise<UserRepresentation> {

        let postBody = userRepresentation;

        if (userRepresentation === undefined || userRepresentation === null) {
            throw new Error("Required param 'userRepresentation' in createNewUserUsingPOST");
        }

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/users', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a user
        * 
        * 
        * @param userId userId
        * @param summary summary
        */
    getUserUsingGET(userId: number, opts: any): Promise<AbstractUserRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in getUserUsingGET");
        }

        let pathParams = {
            'userId': userId
        };
        let queryParams = {
            'summary': opts['summary'],
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/users/{userId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query users
        * 
        * 
        * @param filter filter
        * @param status status
        * @param accountType accountType
        * @param sort sort
        * @param company company
        * @param start start
        * @param page page
        * @param size size
        * @param groupId groupId
        * @param tenantId tenantId
        * @param summary summary
        */
    getUsersUsingGET(opts: any): Promise<ResultListDataRepresentationAbstractUserRepresentation> {
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
            'summary': opts['summary'],
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/users', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a user
        * 
        * 
        * @param userId userId
        * @param userRepresentation userRepresentation
        */
    updateUserDetailsUsingPUT(userId: number, userRepresentation: UserRepresentation): Promise<{}> {

        let postBody = userRepresentation;

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in updateUserDetailsUsingPUT");
        }

        if (userRepresentation === undefined || userRepresentation === null) {
            throw new Error("Required param 'userRepresentation' in updateUserDetailsUsingPUT");
        }

        let pathParams = {
            'userId': userId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/users/{userId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
