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
import { BpmClient } from '../../../../bpmClient';

export class IDMSyncApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the getLogFile operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getLogFile
     * @param {Integer} syncLogEntryId syncLogEntryId
     */
    getLogFile(syncLogEntryId) {
        let postBody = null;

        // verify the required parameter 'syncLogEntryId' is set
        if (syncLogEntryId === undefined || syncLogEntryId === null) {
            throw "Missing param 'syncLogEntryId' in getLogFile";
        }


        let pathParams = {
            'syncLogEntryId': syncLogEntryId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getSyncLogEntries operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SyncLogEntryRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getSyncLogEntries
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.tenantId tenantId
     * @param {Integer} opts.page page
     * @param {Integer} opts.size size
     */
    getSyncLogEntries(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'tenantId': opts['tenantId'],
            'page': opts['page'],
            'size': opts['size']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/idm-sync-log-entries', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
