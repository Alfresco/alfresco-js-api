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

import { FilePlanComponentBodyUpdate } from '../model/filePlanComponentBodyUpdate';
import { RMNodeBodyCreateWithRelativePath } from '../model/rMNodeBodyCreateWithRelativePath';
import { RecordCategoryChildEntry } from '../model/recordCategoryChildEntry';
import { RecordCategoryChildPaging } from '../model/recordCategoryChildPaging';
import { RecordCategoryEntry } from '../model/recordCategoryEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Recordcategories service.
* @module RecordCategoriesApi
*/
export class RecordCategoriesApi extends BaseApi {
    /**
    * Create a record category or a record folder
    *
    * Create a record category or a record folder as a primary child of **recordCategoryId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create
a unique name using an integer suffix.

This API method also supports record category or record folder creation using application/json.

You must specify at least a **name** and **nodeType**.

You can create a category like this:
JSON
{
  \"name\":\"My Record Category\",
  \"nodeType\":\"rma:recordCategory\"
}

You can create a record folder like this:
JSON
{
  \"name\":\"My Record Folder\",
  \"nodeType\":\"rma:recordFolder\"
}

You can create a record folder inside a container hierarchy (applies to record categories as well):
JSON
{
  \"name\":\"My Fileplan Component\",
  \"nodeType\":\"rma:recordFolder\",
  \"relativePath\":\"X/Y/Z\"
}

The **relativePath** specifies the container structure to create relative to the node (record category or record folder). Containers in the
**relativePath** that do not exist are created before the node is created. The container type is decided considering
the type of the parent container and the type of the node to be created.

You can set properties when creating a record category (applies to record folders as well):
JSON
{
  \"name\":\"My Record Category\",
  \"nodeType\":\"rma:recordCategory\",
  \"properties\":
  {
    \"rma:vitalRecordIndicator\":\"true\",
    \"rma:reviewPeriod\":\"month|1\"
  }
}

Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record category and a record folder inside the specified **categoryId**:
JSON
[
  {
    \"name\":\"My Record Category\",
    \"nodeType\":\"rma:recordCategory\"
  },
  {
    \"name\":\"My Record Folder\",
    \"nodeType\":\"rma:recordFolder\"
  }
]

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
    * @param recordCategoryId The identifier of a record category.
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

    * @return Promise<RecordCategoryChildEntry>
    */
    createRecordCategoryChild(recordCategoryId: string, nodeBodyCreate: RMNodeBodyCreateWithRelativePath, opts?: any): Promise<RecordCategoryChildEntry> {
        throwIfNotDefined(recordCategoryId, 'recordCategoryId');
        throwIfNotDefined(nodeBodyCreate, 'nodeBodyCreate');

        opts = opts || {};
        let postBody = nodeBodyCreate;

        let pathParams = {
            'recordCategoryId': recordCategoryId
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
            '/record-categories/{recordCategoryId}/children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordCategoryChildEntry);
    }
    /**
        * Delete a record category
        *
        * Deletes record category **recordCategoryId**.

        *
        * @param recordCategoryId The identifier of a record category.
        * @return Promise<{}>
        */
    deleteRecordCategory(recordCategoryId: string): Promise<any> {
        throwIfNotDefined(recordCategoryId, 'recordCategoryId');

        let postBody = null;

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a record category
        *
        * Gets information for record category **recordCategoryId**

    Mandatory fields and the record category's aspects and properties are returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param recordCategoryId The identifier of a record category.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * hasRetentionSchedule
    * path

        * @param opts.relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.

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
    getRecordCategory(recordCategoryId: string, opts?: any): Promise<RecordCategoryEntry> {
        throwIfNotDefined(recordCategoryId, 'recordCategoryId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordCategoryEntry);
    }
    /**
        * List record category's children
        *
        * Returns a list of record categories and/or record folders.

    Minimal information for each child is returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

    The list of child nodes includes primary children and secondary children, if there are any.

        *
        * @param recordCategoryId The identifier of a record category.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.where Optionally filter the list. Here are some examples:

    *   where=(nodeType='rma:recordFolder')

    *   where=(nodeType='rma:recordCategory')

    *   where=(isRecordFolder=true AND isClosed=false)

        * @param opts.include Returns additional information about the record category child. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * hasRetentionSchedule
    * isClosed
    * isRecordCategory
    * isRecordFolder
    * path
    * properties

        * @param opts.relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.

        * @param opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **recordCategoryId**, or as resolved by **relativePath**.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RecordCategoryChildPaging>
        */
    listRecordCategoryChildren(recordCategoryId: string, opts?: any): Promise<RecordCategoryChildPaging> {
        throwIfNotDefined(recordCategoryId, 'recordCategoryId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
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
            '/record-categories/{recordCategoryId}/children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordCategoryChildPaging);
    }
    /**
        * Update a record category
        *
        * Updates record category **recordCategoryId**. For example, you can rename a record category:
    JSON
    {
      \"name\":\"My new name\"
    }

    You can also set or update one or more properties:
    JSON
    {
      \"properties\":
        {
           \"rma:vitalRecordIndicator\": true,
           \"rma:reviewPeriod\":\"month|6\"
        }
    }

    **Note:** If you want to add or remove aspects, then you must use **GET /record-categories/{recordCategoryId}** first to get the complete set of *aspectNames*.

    **Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.

        *
        * @param recordCategoryId The identifier of a record category.
        * @param recordCategoryBodyUpdate The record category information to update.
        * @param opts Optional parameters
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
    updateRecordCategory(recordCategoryId: string, recordCategoryBodyUpdate: FilePlanComponentBodyUpdate, opts?: any): Promise<RecordCategoryEntry> {
        throwIfNotDefined(recordCategoryId, 'recordCategoryId');
        throwIfNotDefined(recordCategoryBodyUpdate, 'recordCategoryBodyUpdate');

        opts = opts || {};
        let postBody = recordCategoryBodyUpdate;

        let pathParams = {
            'recordCategoryId': recordCategoryId
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
            '/record-categories/{recordCategoryId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordCategoryEntry);
    }

}
