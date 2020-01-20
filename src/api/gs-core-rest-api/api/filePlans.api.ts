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

import { FilePlanBodyUpdate } from '../model/filePlanBodyUpdate';
import { FilePlanEntry } from '../model/filePlanEntry';
import { RecordCategoryEntry } from '../model/recordCategoryEntry';
import { RecordCategoryPaging } from '../model/recordCategoryPaging';
import { RootCategoryBodyCreate } from '../model/rootCategoryBodyCreate';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Fileplans service.
* @module FilePlansApi
*/
export class FilePlansApi extends BaseApi {
    /**
    * Create record categories for a file plan
    *
    * Creates a record category as a primary child of **filePlanId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create
a unique name using an integer suffix.

This API method also supports record category creation using application/json.

You must specify at least a **name**.

You can create a category like this:
JSON
{
  \"name\":\"My Record Category\"
}

You can set properties when creating a record category:
JSON
{
  \"name\":\"My Record Category\",
  \"properties\":
  {
    \"rma:vitalRecordIndicator\":\"true\",
    \"rma:reviewPeriod\":\"month|1\"
  }
}

Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}

    *
    * @param filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
    * @param nodeBodyCreate The node information to create.
    * @param opts Optional parameters
    * @param opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

    * @param opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<RecordCategoryEntry>
    */
    createFilePlanCategories(filePlanId: string, nodeBodyCreate: RootCategoryBodyCreate, opts?: any): Promise<RecordCategoryEntry> {
        throwIfNotDefined(filePlanId, 'filePlanId');
        throwIfNotDefined(nodeBodyCreate, 'nodeBodyCreate');

        opts = opts || {};
        let postBody = nodeBodyCreate;

        let pathParams = {
            'filePlanId': filePlanId
        };

        let queryParams = {
            'autoRename': opts['autoRename'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json', 'multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/file-plans/{filePlanId}/categories', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordCategoryEntry);
    }
    /**
        * Get a file plan
        *
        * Gets information for file plan **filePlanId**

    Mandatory fields and the file plan's aspects and properties are returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the file plan. Any optional field from the response model can be requested. For example:
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

        * @return Promise<FilePlanEntry>
        */
    getFilePlan(filePlanId: string, opts?: any): Promise<FilePlanEntry> {
        throwIfNotDefined(filePlanId, 'filePlanId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'filePlanId': filePlanId
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
            '/file-plans/{filePlanId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FilePlanEntry);
    }
    /**
        * List file plans's children
        *
        * Returns a list of record categories.

    Minimal information for each child is returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * hasRetentionSchedule
    * path
    * properties

        * @param opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **filePlanId**
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RecordCategoryPaging>
        */
    getFilePlanCategories(filePlanId: string, opts?: any): Promise<RecordCategoryPaging> {
        throwIfNotDefined(filePlanId, 'filePlanId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'filePlanId': filePlanId
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
            '/file-plans/{filePlanId}/categories', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordCategoryPaging);
    }
    /**
        * Update a file plan
        *
        * Updates file plan **filePlanId**.
    You can only set or update description and title properties:
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
        * @param filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
        * @param filePlanBodyUpdate The file plan information to update.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the file plan. Any optional field from the response model can be requested. For example:
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

        * @return Promise<FilePlanEntry>
        */
    updateFilePlan(filePlanId: string, filePlanBodyUpdate: FilePlanBodyUpdate, opts?: any): Promise<FilePlanEntry> {
        throwIfNotDefined(filePlanId, 'filePlanId');
        throwIfNotDefined(filePlanBodyUpdate, 'filePlanBodyUpdate');

        opts = opts || {};
        let postBody = filePlanBodyUpdate;

        let pathParams = {
            'filePlanId': filePlanId
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
            '/file-plans/{filePlanId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FilePlanEntry);
    }

}
