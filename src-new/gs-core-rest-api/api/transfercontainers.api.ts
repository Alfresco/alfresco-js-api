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

import { ModelError } from '../model/modelError';
import { TransferContainerAssociationPaging } from '../model/transferContainerAssociationPaging';
import { TransferContainerBodyUpdate } from '../model/transferContainerBodyUpdate';
import { TransferContainerEntry } from '../model/transferContainerEntry';
import { BaseApi } from './base.api';

/**
* Transfercontainers service.
* @module TransfercontainersApi
*/
export class TransfercontainersApi extends BaseApi {
    /**
    * Get a transfer container
    * 
    * Gets information for transfer container **transferContainerId**

Mandatory fields and the transfer container's aspects and properties are returned by default.

You can use the **include** parameter (include=allowableOperations) to return additional information.

    * @param transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
    * @param include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

    * @param fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    */
    getTransferContainer(transferContainerId: string, opts: any): Promise<TransferContainerEntry> {
        opts = opts || {};
        let postBody = null;

        if (transferContainerId === undefined || transferContainerId === null) {
            throw new Error("Required param 'transferContainerId' in getTransferContainer");
        }

        let pathParams = {
            'transferContainerId': transferContainerId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            },
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/transfer-containers/{transferContainerId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List transfer container's children
        * 
        * Returns a list of transfers.
    
    Minimal information for each child is returned by default.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
        * @param transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
        * @param skipCount The number of entities that exist in the collection before those included in this list.
        * @param maxItems The maximum number of items to return in the list.
        * @param include Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * properties
    * transferPDFIndicator
    * transferLocation
    * transferAccessionIndicator
    
        * @param includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    listTransfers(transferContainerId: string, opts: any): Promise<TransferContainerAssociationPaging> {
        opts = opts || {};
        let postBody = null;

        if (transferContainerId === undefined || transferContainerId === null) {
            throw new Error("Required param 'transferContainerId' in listTransfers");
        }

        let pathParams = {
            'transferContainerId': transferContainerId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'includeSource': opts['includeSource'],
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            },
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/transfer-containers/{transferContainerId}/transfers', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    
        * @param transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
        * @param nodeBodyUpdate The node information to update.
        * @param include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * path
    
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    updateTransferContainer(transferContainerId: string, nodeBodyUpdate: TransferContainerBodyUpdate, opts: any): Promise<TransferContainerEntry> {
        opts = opts || {};
        let postBody = nodeBodyUpdate;

        if (transferContainerId === undefined || transferContainerId === null) {
            throw new Error("Required param 'transferContainerId' in updateTransferContainer");
        }

        if (nodeBodyUpdate === undefined || nodeBodyUpdate === null) {
            throw new Error("Required param 'nodeBodyUpdate' in updateTransferContainer");
        }

        let pathParams = {
            'transferContainerId': transferContainerId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            },
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/transfer-containers/{transferContainerId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
