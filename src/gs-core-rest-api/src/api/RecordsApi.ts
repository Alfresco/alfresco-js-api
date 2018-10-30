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
import { FilePlanComponentBodyUpdate } from '../model/FilePlanComponentBodyUpdate';
import { RecordEntry } from '../model/RecordEntry';
import { RequestBodyFile } from '../model/RequestBodyFile';


/**
 * Records service.
 * @module api/RecordsApi
 * @version 0.1.0
 */

/**
 * Constructs a new RecordsApi.
 * @alias :api/RecordsApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */

export class RecordsApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Complete a record
     * Completes the record **recordId**.
     * @param {string} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    completeRecord = function (recordId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'recordId' is set
        if (recordId === undefined || recordId === null) {
            throw new Error("Missing param 'recordId' in completeRecord");
        }


        let pathParams = {
            'recordId': recordId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordEntry;

        return this.apiClient.callApi(
            '/records/{recordId}/complete', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

    /**
     * Delete a record
     * Deletes the record **recordId**. Deleted file plan components cannot be recovered, they are deleted permanently.
     * @param {string} recordId The identifier of a record.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRecord = function (recordId) {
        let postBody = null;

        // verify the required parameter 'recordId' is set
        if (recordId === undefined || recordId === null) {
            throw new Error("Missing param 'recordId' in deleteRecord");
        }


        let pathParams = {
            'recordId': recordId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/records/{recordId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

    /**
     * File a record
     * Files the record **recordId** in the target record folder.  You need to specify the target record folder by providing its id **targetParentId**  If the record is already filed, a link to the target record folder is created.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordId The identifier of a record.
     * @param {RequestBodyFile} nodeBodyFile The target record folder id
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    fileRecord = function (recordId, nodeBodyFile, opts) {
        opts = opts || {};
        let postBody = nodeBodyFile;

        // verify the required parameter 'recordId' is set
        if (recordId === undefined || recordId === null) {
            throw new Error("Missing param 'recordId' in fileRecord");
        }

        // verify the required parameter 'nodeBodyFile' is set
        if (nodeBodyFile === undefined || nodeBodyFile === null) {
            throw new Error("Missing param 'nodeBodyFile' in fileRecord");
        }


        let pathParams = {
            'recordId': recordId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordEntry;

        return this.apiClient.callApi(
            '/records/{recordId}/file', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

    /**
     * Get a record
     * Gets information for record **recordId**  Mandatory fields and the record&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    getRecord = function (recordId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'recordId' is set
        if (recordId === undefined || recordId === null) {
            throw new Error("Missing param 'recordId' in getRecord");
        }


        let pathParams = {
            'recordId': recordId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordEntry;

        return this.apiClient.callApi(
            '/records/{recordId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

    /**
     * Get record content
     *  Gets the content of the record with identifier **recordId**.
     * @param {string} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.attachment **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    getRecordContent = function (recordId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'recordId' is set
        if (recordId === undefined || recordId === null) {
            throw new Error("Missing param 'recordId' in getRecordContent");
        }


        let pathParams = {
            'recordId': recordId
        };
        let queryParams = {
            'attachment': opts['attachment']
        };
        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince']
        };
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/records/{recordId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

    /**
     * Update record
     * Updates the record **recordId**. For example, you can rename a record: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:title\&quot;:\&quot;New title\&quot;,        \&quot;cm:description\&quot;:\&quot;New description\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /records/{recordId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} recordId The identifier of a record.
     * @param {FilePlanComponentBodyUpdate} recordBodyUpdate The record information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    updateRecord = function (recordId, recordBodyUpdate, opts) {
        opts = opts || {};
        let postBody = recordBodyUpdate;

        // verify the required parameter 'recordId' is set
        if (recordId === undefined || recordId === null) {
            throw new Error("Missing param 'recordId' in updateRecord");
        }

        // verify the required parameter 'recordBodyUpdate' is set
        if (recordBodyUpdate === undefined || recordBodyUpdate === null) {
            throw new Error("Missing param 'recordBodyUpdate' in updateRecord");
        }


        let pathParams = {
            'recordId': recordId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordEntry;

        return this.apiClient.callApi(
            '/records/{recordId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

}
