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

import { AlfrescoApiClient } from '../../../../alfrescoApiClient';
import { Error } from '../model/Error';
import { TransferAssociationPaging } from '../model/TransferAssociationPaging';
import { TransferEntry } from '../model/TransferEntry';

/**
 * Transfers service.
 * @module api/TransfersApi
 * @version 0.1.0
 */

/**
 * Constructs a new TransfersApi.
 * @alias :api/TransfersApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class TransfersApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Get a transfer
     * Gets information for transfer **transferId**  Mandatory fields and the transfer&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferId The identifier of a transfer.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example: * allowableOperations * transferPDFIndicator * transferLocation * transferAccessionIndicator
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferEntry} and HTTP response
     */
    getTransfer = function(transferId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'transferId' is set
        if (transferId === undefined || transferId === null) {
            throw new Error("Missing param 'transferId' in getTransfer");
        }

        let pathParams = {
            'transferId': transferId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TransferEntry;

        return this.apiClient.callApi(
            '/transfers/{transferId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * List transfer&#39;s children
     * Gets a list of transfer&#39;s children.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferId The identifier of a transfer.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the transfer&#39;s child. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * isClosed * isRecord * isRecordFolder * path * properties
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferAssociationPaging} and HTTP response
     */
    listTransfersChildren = function(transferId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'transferId' is set
        if (transferId === undefined || transferId === null) {
            throw new Error("Missing param 'transferId' in listTransfersChildren");
        }

        let pathParams = {
            'transferId': transferId
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
        let returnType = TransferAssociationPaging;

        return this.apiClient.callApi(
            '/transfers/{transferId}/children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

}
