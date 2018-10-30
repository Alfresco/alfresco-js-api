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
import { TransferContainerAssociationPaging } from '../model/TransferContainerAssociationPaging';
import { TransferContainerBodyUpdate } from '../model/TransferContainerBodyUpdate';
import { TransferContainerEntry } from '../model/TransferContainerEntry';

/**
 * Transfercontainers service.
 * @module api/TransferContainersApi
 * @version 0.1.0
 */

/**
 * Constructs a new TransferContainersApi.
 * @alias :api/TransferContainersApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class TransferContainersApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Get a transfer container
     * Gets information for transfer container **transferContainerId**  Mandatory fields and the transfer container&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferContainerEntry} and HTTP response
     */
    getTransferContainer = function (transferContainerId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'transferContainerId' is set
        if (transferContainerId === undefined || transferContainerId === null) {
            throw new Error("Missing param 'transferContainerId' in getTransferContainer");
        }


        let pathParams = {
            'transferContainerId': transferContainerId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TransferContainerEntry;

        return this.apiClient.callApi(
            '/transfer-containers/{transferContainerId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }


    /**
     * List transfer container&#39;s children
     * Returns a list of transfers.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * properties * transferPDFIndicator * transferLocation * transferAccessionIndicator
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferContainerAssociationPaging} and HTTP response
     */
    listTransfers = function (transferContainerId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'transferContainerId' is set
        if (transferContainerId === undefined || transferContainerId === null) {
            throw new Error("Missing param 'transferContainerId' in listTransfers");
        }


        let pathParams = {
            'transferContainerId': transferContainerId
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


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TransferContainerAssociationPaging;

        return this.apiClient.callApi(
            '/transfer-containers/{transferContainerId}/transfers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

    /**
     * Update transfer container
     * Updates the transfer container **transferContainerId**. For example, you can rename transfer container: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update description and title properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:description\&quot;: \&quot;New Description\&quot;,        \&quot;cm:title\&quot;:\&quot;New Title\&quot;     } } &#x60;&#x60;&#x60; **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {TransferContainerBodyUpdate} nodeBodyUpdate The node information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferContainerEntry} and HTTP response
     */
    updateTransferContainer = function (transferContainerId, nodeBodyUpdate, opts) {
        opts = opts || {};
        let postBody = nodeBodyUpdate;

        // verify the required parameter 'transferContainerId' is set
        if (transferContainerId === undefined || transferContainerId === null) {
            throw new Error("Missing param 'transferContainerId' in updateTransferContainer");
        }

        // verify the required parameter 'nodeBodyUpdate' is set
        if (nodeBodyUpdate === undefined || nodeBodyUpdate === null) {
            throw new Error("Missing param 'nodeBodyUpdate' in updateTransferContainer");
        }


        let pathParams = {
            'transferContainerId': transferContainerId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TransferContainerEntry;

        return this.apiClient.callApi(
            '/transfer-containers/{transferContainerId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }

}
