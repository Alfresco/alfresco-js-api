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

import { RecordEntry } from '../model/recordEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Files service.
* @module FilesApi
*/
export class FilesApi extends BaseApi {
    /**
    * Declare as record
    *
    * Declares the file **fileId** in the unfiled records container. The original file is moved to the Records Management site and a secondary parent association is created in the file's original site.
    *
    * @param fileId The identifier of a non-record file.
    * @param opts Optional parameters
    * @param opts.hideRecord Flag to indicate whether the record should be hidden from the current parent folder. (default to false)
    * @param opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:
* allowableOperations
* content
* isCompleted
* path

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<RecordEntry>
    */
    declareRecord(fileId: string, opts?: any): Promise<RecordEntry> {
        throwIfNotDefined(fileId, 'fileId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'fileId': fileId
        };

        let queryParams = {
            'hideRecord': opts['hideRecord'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/files/{fileId}/declare', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordEntry);
    }

}
