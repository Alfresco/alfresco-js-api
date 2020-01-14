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

import { TransferContainerAssociationPaging } from '../model/transferContainerAssociationPaging';
import { TransferContainerBodyUpdate } from '../model/transferContainerBodyUpdate';
import { TransferContainerEntry } from '../model/transferContainerEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Transfercontainers service.
* @module TransferContainersApi
*/
export class TransferContainersApi extends BaseApi {
    /**
    * Get a transfer container
    *
    * Gets information for transfer container **transferContainerId**

Mandatory fields and the transfer container's aspects and properties are returned by default.

You can use the **include** parameter (include=allowableOperations) to return additional information.

    *
    * @param transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<TransferContainerEntry>
    */
    getTransferContainer(transferContainerId: string, opts?: any): Promise<TransferContainerEntry> {
        throwIfNotDefined(transferContainerId, 'transferContainerId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'transferContainerId': transferContainerId
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
            '/transfer-containers/{transferContainerId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TransferContainerEntry);
    }
    /**
        * List transfer container's children
        *
        * Returns a list of transfers.

    Minimal information for each child is returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.include Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * properties
    * transferPDFIndicator
    * transferLocation
    * transferAccessionIndicator

        * @param opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<TransferContainerAssociationPaging>
        */
    listTransfers(transferContainerId: string, opts?: any): Promise<TransferContainerAssociationPaging> {
        throwIfNotDefined(transferContainerId, 'transferContainerId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'transferContainerId': transferContainerId
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
            '/transfer-containers/{transferContainerId}/transfers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TransferContainerAssociationPaging);
    }
    /**
        * Update transfer container
        *
        * Updates the transfer container **transferContainerId**. For example, you can rename transfer container:
    JSON
    {
      \"name\":\"My new name\"
    }

    You can also set or update description and title properties:
    JSON
    {
      \"properties\":
        {
           \"cm:description\": \"New Description\",
           \"cm:title\":\"New Title\"
        }
    }

    **Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.

        *
        * @param transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
        * @param nodeBodyUpdate The node information to update.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * path

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<TransferContainerEntry>
        */
    updateTransferContainer(transferContainerId: string, nodeBodyUpdate: TransferContainerBodyUpdate, opts?: any): Promise<TransferContainerEntry> {
        throwIfNotDefined(transferContainerId, 'transferContainerId');
        throwIfNotDefined(nodeBodyUpdate, 'nodeBodyUpdate');

        opts = opts || {};
        let postBody = nodeBodyUpdate;

        let pathParams = {
            'transferContainerId': transferContainerId
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
            '/transfer-containers/{transferContainerId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TransferContainerEntry);
    }

}
