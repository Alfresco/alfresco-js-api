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

export class UsersWorkflowApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
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
     * data is of type: {module:model/ResultListDataRepresentation}
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
}
