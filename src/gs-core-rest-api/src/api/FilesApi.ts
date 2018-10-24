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

import { AlfrescoApiClient } from '../../../alfrescoApiClient';
import { Error } from '../model/Error';
import { RecordEntry } from '../model/RecordEntry';


/**
 * Files service.
 * @module api/FilesApi
 * @version 0.1.0
 */

/**
 * Constructs a new FilesApi.
 * @alias :api/FilesApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class FilesApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Declare as record
     * Declares the file **fileId** in the unfiled records container. The original file is moved to the Records Management site and a secondary parent association is created in the file&#39;s original site.
     * @param {string} fileId The identifier of a non-record file.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.hideRecord Flag to indicate whether the record should be hidden from the current parent folder. (default to false)
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    declareRecord = function (fileId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'fileId' is set
        if (fileId === undefined || fileId === null) {
            throw new Error("Missing param 'fileId' in declareRecord");
        }


        let pathParams = {
            'fileId': fileId
        };
        let queryParams = {
            'hideRecord': opts['hideRecord'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordEntry;

        return this.apiClient.callApi(
            '/files/{fileId}/declare', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}
