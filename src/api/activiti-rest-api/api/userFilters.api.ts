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

import { ResultListDataRepresentationUserProcessInstanceFilterRepresentation } from '../model/resultListDataRepresentationUserProcessInstanceFilterRepresentation';
import { ResultListDataRepresentationUserTaskFilterRepresentation } from '../model/resultListDataRepresentationUserTaskFilterRepresentation';
import { UserFilterOrderRepresentation } from '../model/userFilterOrderRepresentation';
import { UserProcessInstanceFilterRepresentation } from '../model/userProcessInstanceFilterRepresentation';
import { UserTaskFilterRepresentation } from '../model/userTaskFilterRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Userfilters service.
* @module UserfiltersApi
*/
export class UserFiltersApi extends BaseApi {
    /**
    * Create a process instance filter
    *
    *
    *
    * @param userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
    * @return Promise<UserProcessInstanceFilterRepresentation>
    */
    createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation> {
        throwIfNotDefined(userProcessInstanceFilterRepresentation, 'userProcessInstanceFilterRepresentation');

        let postBody = userProcessInstanceFilterRepresentation;

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
            '/api/enterprise/filters/processes', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserProcessInstanceFilterRepresentation);
    }
    /**
        * Create a task filter
        *
        *
        *
        * @param userTaskFilterRepresentation userTaskFilterRepresentation
        * @return Promise<UserTaskFilterRepresentation>
        */
    createUserTaskFilter(userTaskFilterRepresentation: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation> {
        throwIfNotDefined(userTaskFilterRepresentation, 'userTaskFilterRepresentation');

        let postBody = userTaskFilterRepresentation;

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
            '/api/enterprise/filters/tasks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserTaskFilterRepresentation);
    }
    /**
        * Delete a process instance filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @return Promise<{}>
        */
    deleteUserProcessInstanceFilter(userFilterId: number): Promise<any> {
        throwIfNotDefined(userFilterId, 'userFilterId');

        let postBody = null;

        let pathParams = {
            'userFilterId': userFilterId
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
            '/api/enterprise/filters/processes/{userFilterId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a task filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @return Promise<{}>
        */
    deleteUserTaskFilter(userFilterId: number): Promise<any> {
        throwIfNotDefined(userFilterId, 'userFilterId');

        let postBody = null;

        let pathParams = {
            'userFilterId': userFilterId
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
            '/api/enterprise/filters/tasks/{userFilterId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a process instance filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @return Promise<UserProcessInstanceFilterRepresentation>
        */
    getUserProcessInstanceFilter(userFilterId: number): Promise<UserProcessInstanceFilterRepresentation> {
        throwIfNotDefined(userFilterId, 'userFilterId');

        let postBody = null;

        let pathParams = {
            'userFilterId': userFilterId
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
            '/api/enterprise/filters/processes/{userFilterId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserProcessInstanceFilterRepresentation);
    }
    /**
        * List process instance filters
        *
        * Returns filters for the current user, optionally filtered by *appId*.
        *
        * @param opts Optional parameters
        * @param opts.appId appId
        * @return Promise<ResultListDataRepresentationUserProcessInstanceFilterRepresentation>
        */
    getUserProcessInstanceFilters(opts?: any): Promise<ResultListDataRepresentationUserProcessInstanceFilterRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'appId': opts['appId']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/filters/processes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationUserProcessInstanceFilterRepresentation);
    }
    /**
        * Get a task filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @return Promise<UserTaskFilterRepresentation>
        */
    getUserTaskFilter(userFilterId: number): Promise<UserTaskFilterRepresentation> {
        throwIfNotDefined(userFilterId, 'userFilterId');

        let postBody = null;

        let pathParams = {
            'userFilterId': userFilterId
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
            '/api/enterprise/filters/tasks/{userFilterId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserTaskFilterRepresentation);
    }
    /**
        * List task filters
        *
        * Returns filters for the current user, optionally filtered by *appId*.
        *
        * @param opts Optional parameters
        * @param opts.appId appId
        * @return Promise<ResultListDataRepresentationUserTaskFilterRepresentation>
        */
    getUserTaskFilters(opts?: any): Promise<ResultListDataRepresentationUserTaskFilterRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'appId': opts['appId']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/filters/tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationUserTaskFilterRepresentation);
    }
    /**
        * Re-order the list of user process instance filters
        *
        *
        *
        * @param filterOrderRepresentation filterOrderRepresentation
        * @return Promise<{}>
        */
    orderUserProcessInstanceFilters(filterOrderRepresentation: UserFilterOrderRepresentation): Promise<any> {
        throwIfNotDefined(filterOrderRepresentation, 'filterOrderRepresentation');

        let postBody = filterOrderRepresentation;

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
            '/api/enterprise/filters/processes', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Re-order the list of user task filters
        *
        *
        *
        * @param filterOrderRepresentation filterOrderRepresentation
        * @return Promise<{}>
        */
    orderUserTaskFilters(filterOrderRepresentation: UserFilterOrderRepresentation): Promise<any> {
        throwIfNotDefined(filterOrderRepresentation, 'filterOrderRepresentation');

        let postBody = filterOrderRepresentation;

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
            '/api/enterprise/filters/tasks', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update a process instance filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @param userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
        * @return Promise<UserProcessInstanceFilterRepresentation>
        */
    updateUserProcessInstanceFilter(userFilterId: number, userProcessInstanceFilterRepresentation: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation> {
        throwIfNotDefined(userFilterId, 'userFilterId');
        throwIfNotDefined(userProcessInstanceFilterRepresentation, 'userProcessInstanceFilterRepresentation');

        let postBody = userProcessInstanceFilterRepresentation;

        let pathParams = {
            'userFilterId': userFilterId
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
            '/api/enterprise/filters/processes/{userFilterId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserProcessInstanceFilterRepresentation);
    }
    /**
        * Update a task filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @param userTaskFilterRepresentation userTaskFilterRepresentation
        * @return Promise<UserTaskFilterRepresentation>
        */
    updateUserTaskFilter(userFilterId: number, userTaskFilterRepresentation: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation> {
        throwIfNotDefined(userFilterId, 'userFilterId');
        throwIfNotDefined(userTaskFilterRepresentation, 'userTaskFilterRepresentation');

        let postBody = userTaskFilterRepresentation;

        let pathParams = {
            'userFilterId': userFilterId
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
            '/api/enterprise/filters/tasks/{userFilterId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserTaskFilterRepresentation);
    }

}
