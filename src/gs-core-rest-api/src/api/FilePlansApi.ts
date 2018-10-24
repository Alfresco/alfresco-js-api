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
import { FilePlanBodyUpdate } from '../model/FilePlanBodyUpdate';
import { FilePlanEntry } from '../model/FilePlanEntry';
import { RecordCategoryEntry } from '../model/RecordCategoryEntry';
import { RecordCategoryPaging } from '../model/RecordCategoryPaging';
import { RootCategoryBodyCreate } from '../model/RootCategoryBodyCreate';

/**
 * Fileplans service.
 * @module api/FilePlansApi
 * @version 0.1.0
 */

/**
 * Constructs a new FilePlansApi.
 * @alias :api/FilePlansApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class FilePlansApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Create record categories for a file plan
     * Creates a record category as a primary child of **filePlanId**.  You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then the API method tries to create a unique name using an integer suffix.  This API method also supports record category creation using application/json.  You must specify at least a **name**.  You can create a category like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Category\&quot; } &#x60;&#x60;&#x60; You can set properties when creating a record category: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Category\&quot;,   \&quot;properties\&quot;:   {     \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,     \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;   } } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {string} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {RootCategoryBodyCreate} nodeBodyCreate The node information to create.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * hasRetentionSchedule * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordCategoryEntry} and HTTP response
     */
    createFilePlanCategories = function (filePlanId, nodeBodyCreate, opts) {
        opts = opts || {};
        let postBody = nodeBodyCreate;

        // verify the required parameter 'filePlanId' is set
        if (filePlanId === undefined || filePlanId === null) {
            throw new Error("Missing param 'filePlanId' in createFilePlanCategories");
        }

        // verify the required parameter 'nodeBodyCreate' is set
        if (nodeBodyCreate === undefined || nodeBodyCreate === null) {
            throw new Error("Missing param 'nodeBodyCreate' in createFilePlanCategories");
        }


        let pathParams = {
            'filePlanId': filePlanId
        };
        let queryParams = {
            'autoRename': opts['autoRename'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json', 'multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = RecordCategoryEntry;

        return this.apiClient.callApi(
            '/file-plans/{filePlanId}/categories', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get a file plan
     * Gets information for file plan **filePlanId**  Mandatory fields and the file plan&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the file plan. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleFilePlanEntry} and HTTP response
     */
    getFilePlan = function (filePlanId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'filePlanId' is set
        if (filePlanId === undefined || filePlanId === null) {
            throw new Error("Missing param 'filePlanId' in getFilePlan");
        }


        let pathParams = {
            'filePlanId': filePlanId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = FilePlanEntry;

        return this.apiClient.callApi(
            '/file-plans/{filePlanId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * List file plans&#39;s children
     * Returns a list of record categories.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * hasRetentionSchedule * path * properties
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **filePlanId**
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordCategoryPaging} and HTTP response
     */
    getFilePlanCategories = function (filePlanId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'filePlanId' is set
        if (filePlanId === undefined || filePlanId === null) {
            throw new Error("Missing param 'filePlanId' in getFilePlanCategories");
        }


        let pathParams = {
            'filePlanId': filePlanId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'includeSource': opts['includeSource'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordCategoryPaging;

        return this.apiClient.callApi(
            '/file-plans/{filePlanId}/categories', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a file plan
     * Updates file plan **filePlanId**. You can only set or update description and title properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:description\&quot;: \&quot;New Description\&quot;,        \&quot;cm:title\&quot;:\&quot;New Title\&quot;     } } &#x60;&#x60;&#x60;  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {FilePlanBodyUpdate} filePlanBodyUpdate The file plan information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the file plan. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleFilePlanEntry} and HTTP response
     */
    updateFilePlan = function (filePlanId, filePlanBodyUpdate, opts) {
        opts = opts || {};
        let postBody = filePlanBodyUpdate;

        // verify the required parameter 'filePlanId' is set
        if (filePlanId === undefined || filePlanId === null) {
            throw new Error("Missing param 'filePlanId' in updateFilePlan");
        }

        // verify the required parameter 'filePlanBodyUpdate' is set
        if (filePlanBodyUpdate === undefined || filePlanBodyUpdate === null) {
            throw new Error("Missing param 'filePlanBodyUpdate' in updateFilePlan");
        }


        let pathParams = {
            'filePlanId': filePlanId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = FilePlanEntry;

        return this.apiClient.callApi(
            '/file-plans/{filePlanId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}
