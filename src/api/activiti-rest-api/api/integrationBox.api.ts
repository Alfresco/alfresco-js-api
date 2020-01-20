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

import { ResultListDataRepresentationBoxContent } from '../model/resultListDataRepresentationBoxContent';
import { UserAccountCredentialsRepresentation } from '../model/userAccountCredentialsRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Integrationbox service.
* @module IntegrationboxApi
*/
export class IntegrationBoxApi extends BaseApi {
    /**
    * Box Authorization
    *
    * Returns Box OAuth HTML Page
    *
    * @return Promise<{}>
    */
    confirmAuthorisation(): Promise<any> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['text/html'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/confirm-auth-request', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Add Box account
        *
        *
        *
        * @param userId userId
        * @param credentials credentials
        * @return Promise<{}>
        */
    createRepositoryAccount(userId: number, credentials: UserAccountCredentialsRepresentation): Promise<any> {
        throwIfNotDefined(userId, 'userId');
        throwIfNotDefined(credentials, 'credentials');

        let postBody = credentials;

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
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/{userId}/account', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete account information
        *
        *
        *
        * @param userId userId
        * @return Promise<{}>
        */
    deleteRepositoryAccount(userId: number): Promise<any> {
        throwIfNotDefined(userId, 'userId');

        let postBody = null;

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
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/{userId}/account', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get status information
        *
        *
        *
        * @return Promise<boolean>
        */
    getBoxPluginStatus(): Promise<boolean> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/status', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List file and folders
        *
        *
        *
        * @param opts Optional parameters
        * @param opts.filter filter
        * @param opts.parent parent
        * @return Promise<ResultListDataRepresentationBoxContent>
        */
    getFiles(opts?: any): Promise<ResultListDataRepresentationBoxContent> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'filter': opts['filter'],
            'parent': opts['parent']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/files', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationBoxContent);
    }
    /**
        * Get account information
        *
        *
        *
        * @param userId userId
        * @return Promise<{}>
        */
    getRepositoryAccount(userId: number): Promise<any> {
        throwIfNotDefined(userId, 'userId');

        let postBody = null;

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
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/{userId}/account', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update account information
        *
        *
        *
        * @param userId userId
        * @param credentials credentials
        * @return Promise<{}>
        */
    updateRepositoryAccount(userId: number, credentials: UserAccountCredentialsRepresentation): Promise<any> {
        throwIfNotDefined(userId, 'userId');
        throwIfNotDefined(credentials, 'credentials');

        let postBody = credentials;

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
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/box/{userId}/account', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
