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

/**
* Userfilters service.
* @module UserfiltersApi
*/
export class UserfiltersApi extends BaseApi {
    /**
    * Create a process instance filter
    *
    *
    *
    * @param userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
    * @return Promise<UserProcessInstanceFilterRepresentation>
    */
    createUserProcessInstanceFilterUsingPOST(userProcessInstanceFilterRepresentation: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation> {

        let postBody = userProcessInstanceFilterRepresentation;

        if (userProcessInstanceFilterRepresentation === undefined || userProcessInstanceFilterRepresentation === null) {
            throw new Error("Required param 'userProcessInstanceFilterRepresentation' in createUserProcessInstanceFilterUsingPOST");
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
            '/enterprise/filters/processes', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Create a task filter
        *
        *
        *
        * @param userTaskFilterRepresentation userTaskFilterRepresentation
        * @return Promise<UserTaskFilterRepresentation>
        */
    createUserTaskFilterUsingPOST(userTaskFilterRepresentation: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation> {

        let postBody = userTaskFilterRepresentation;

        if (userTaskFilterRepresentation === undefined || userTaskFilterRepresentation === null) {
            throw new Error("Required param 'userTaskFilterRepresentation' in createUserTaskFilterUsingPOST");
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
            '/enterprise/filters/tasks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a process instance filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @return Promise<{}>
        */
    deleteUserProcessInstanceFilterUsingDELETE(userFilterId: number): Promise<any> {

        let postBody = null;

        if (userFilterId === undefined || userFilterId === null) {
            throw new Error("Required param 'userFilterId' in deleteUserProcessInstanceFilterUsingDELETE");
        }

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
            '/enterprise/filters/processes/{userFilterId}', 'DELETE',
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
    deleteUserTaskFilterUsingDELETE(userFilterId: number): Promise<any> {

        let postBody = null;

        if (userFilterId === undefined || userFilterId === null) {
            throw new Error("Required param 'userFilterId' in deleteUserTaskFilterUsingDELETE");
        }

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
            '/enterprise/filters/tasks/{userFilterId}', 'DELETE',
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
    getUserProcessInstanceFilterUsingGET(userFilterId: number): Promise<UserProcessInstanceFilterRepresentation> {

        let postBody = null;

        if (userFilterId === undefined || userFilterId === null) {
            throw new Error("Required param 'userFilterId' in getUserProcessInstanceFilterUsingGET");
        }

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
            '/enterprise/filters/processes/{userFilterId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
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
    getUserProcessInstanceFiltersUsingGET(opts?: any): Promise<ResultListDataRepresentationUserProcessInstanceFilterRepresentation> {
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
            '/enterprise/filters/processes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a task filter
        *
        *
        *
        * @param userFilterId userFilterId
        * @return Promise<UserTaskFilterRepresentation>
        */
    getUserTaskFilterUsingGET(userFilterId: number): Promise<UserTaskFilterRepresentation> {

        let postBody = null;

        if (userFilterId === undefined || userFilterId === null) {
            throw new Error("Required param 'userFilterId' in getUserTaskFilterUsingGET");
        }

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
            '/enterprise/filters/tasks/{userFilterId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
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
    getUserTaskFiltersUsingGET(opts?: any): Promise<ResultListDataRepresentationUserTaskFilterRepresentation> {
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
            '/enterprise/filters/tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Re-order the list of user process instance filters
        *
        *
        *
        * @param filterOrderRepresentation filterOrderRepresentation
        * @return Promise<{}>
        */
    orderUserProcessInstanceFiltersUsingPUT(filterOrderRepresentation: UserFilterOrderRepresentation): Promise<any> {

        let postBody = filterOrderRepresentation;

        if (filterOrderRepresentation === undefined || filterOrderRepresentation === null) {
            throw new Error("Required param 'filterOrderRepresentation' in orderUserProcessInstanceFiltersUsingPUT");
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
            '/enterprise/filters/processes', 'PUT',
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
    orderUserTaskFiltersUsingPUT(filterOrderRepresentation: UserFilterOrderRepresentation): Promise<any> {

        let postBody = filterOrderRepresentation;

        if (filterOrderRepresentation === undefined || filterOrderRepresentation === null) {
            throw new Error("Required param 'filterOrderRepresentation' in orderUserTaskFiltersUsingPUT");
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
            '/enterprise/filters/tasks', 'PUT',
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
    updateUserProcessInstanceFilterUsingPUT(userFilterId: number, userProcessInstanceFilterRepresentation: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation> {

        let postBody = userProcessInstanceFilterRepresentation;

        if (userFilterId === undefined || userFilterId === null) {
            throw new Error("Required param 'userFilterId' in updateUserProcessInstanceFilterUsingPUT");
        }

        if (userProcessInstanceFilterRepresentation === undefined || userProcessInstanceFilterRepresentation === null) {
            throw new Error("Required param 'userProcessInstanceFilterRepresentation' in updateUserProcessInstanceFilterUsingPUT");
        }

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
            '/enterprise/filters/processes/{userFilterId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
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
    updateUserTaskFilterUsingPUT(userFilterId: number, userTaskFilterRepresentation: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation> {

        let postBody = userTaskFilterRepresentation;

        if (userFilterId === undefined || userFilterId === null) {
            throw new Error("Required param 'userFilterId' in updateUserTaskFilterUsingPUT");
        }

        if (userTaskFilterRepresentation === undefined || userTaskFilterRepresentation === null) {
            throw new Error("Required param 'userTaskFilterRepresentation' in updateUserTaskFilterUsingPUT");
        }

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
            '/enterprise/filters/tasks/{userFilterId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
