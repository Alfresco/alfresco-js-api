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

import { TransferAssociationPaging } from '../model/transferAssociationPaging';
import { TransferEntry } from '../model/transferEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Transfers service.
* @module TransfersApi
*/
export class TransfersApi extends BaseApi {
    /**
    * Get a transfer
    *
    * Gets information for transfer **transferId**

Mandatory fields and the transfer's aspects and properties are returned by default.

You can use the **include** parameter (include=allowableOperations) to return additional information.

    *
    * @param transferId The identifier of a transfer.
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example:
* allowableOperations
* transferPDFIndicator
* transferLocation
* transferAccessionIndicator

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<TransferEntry>
    */
    getTransfer(transferId: string, opts?: any): Promise<TransferEntry> {
        throwIfNotDefined(transferId, 'transferId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'transferId': transferId
        };

        let queryParams = {
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
            '/transfers/{transferId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TransferEntry);
    }
    /**
        * List transfer's children
        *
        * Gets a list of transfer's children.

    Minimal information for each child is returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param transferId The identifier of a transfer.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.include Returns additional information about the transfer's child. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * isClosed
    * isRecord
    * isRecordFolder
    * path
    * properties

        * @param opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<TransferAssociationPaging>
        */
    listTransfersChildren(transferId: string, opts?: any): Promise<TransferAssociationPaging> {
        throwIfNotDefined(transferId, 'transferId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'transferId': transferId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'includeSource': opts['includeSource'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/transfers/{transferId}/children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TransferAssociationPaging);
    }

}
