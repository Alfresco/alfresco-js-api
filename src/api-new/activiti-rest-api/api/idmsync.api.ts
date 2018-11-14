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

import { SyncLogEntryRepresentation } from '../model/syncLogEntryRepresentation';
import { BaseApi } from './base.api';

/**
* Idmsync service.
* @module IdmsyncApi
*/
export class IdmsyncApi extends BaseApi {
    /**
    * Get log file for a sync log entry
    *
    *
    *
    * @param syncLogEntryId syncLogEntryId
    * @return Promise<{}>
    */
    getLogFileUsingGET(syncLogEntryId: number): Promise<{}> {

        let postBody = null;

        if (syncLogEntryId === undefined || syncLogEntryId === null) {
            throw new Error("Required param 'syncLogEntryId' in getLogFileUsingGET");
        }

        let pathParams = {
            'syncLogEntryId': syncLogEntryId
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
            '/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List sync log entries
        *
        *
        *
        * @param opts Optional parameters
        * @param opts.tenantId tenantId
        * @param opts.page page
        * @param opts.start start
        * @param opts.size size
        * @return Promise<Array<SyncLogEntryRepresentation>>
        */
    getSyncLogEntriesUsingGET(opts?: any): Promise<Array<SyncLogEntryRepresentation>> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'tenantId': opts['tenantId'],
            'page': opts['page'],
            'start': opts['start'],
            'size': opts['size']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/idm-sync-log-entries', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
