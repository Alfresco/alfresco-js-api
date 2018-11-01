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
import { ModelError } from '../model/modelError';
import { RMNodeBodyCreateWithRelativePath } from '../model/rMNodeBodyCreateWithRelativePath';
import { RecordCategoryChildEntry } from '../model/recordCategoryChildEntry';
import { RecordCategoryChildPaging } from '../model/recordCategoryChildPaging';
import { RecordCategoryEntry } from '../model/recordCategoryEntry';
import { BaseApi } from './base.api';

/**
* Recordcategories service.
* @module RecordcategoriesApi
*/
export class RecordcategoriesApi extends BaseApi {
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

    * @param recordCategoryId The identifier of a record category.
    * @param nodeBodyCreate The node information to create.

    * @param autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

    * @param include Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
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
    createRecordCategoryChild(recordCategoryId: string, nodeBodyCreate: RMNodeBodyCreateWithRelativePath, opts: any): Promise<RecordCategoryChildEntry> {
        opts = opts || {};
        let postBody = nodeBodyCreate;

        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Required param 'recordCategoryId' in createRecordCategoryChild");
        }

        if (nodeBodyCreate === undefined || nodeBodyCreate === null) {
            throw new Error("Required param 'nodeBodyCreate' in createRecordCategoryChild");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'autoRename': opts['autoRename'],
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

        let contentTypes = ['application/json', 'multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}/children', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a record category
        * 
        * Deletes record category **recordCategoryId**.
    
        * @param recordCategoryId The identifier of a record category.
        */
    deleteRecordCategory(recordCategoryId: string): Promise<{}> {

        let postBody = null;

        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Required param 'recordCategoryId' in deleteRecordCategory");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a record category
        * 
        * Gets information for record category **recordCategoryId**
    
    Mandatory fields and the record category's aspects and properties are returned by default.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
        * @param recordCategoryId The identifier of a record category.
        * @param include Returns additional information about the record category. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * hasRetentionSchedule
    * path
    
        * @param relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.
    
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    getRecordCategory(recordCategoryId: string, opts: any): Promise<RecordCategoryEntry> {
        opts = opts || {};
        let postBody = null;

        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Required param 'recordCategoryId' in getRecordCategory");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'relativePath': opts['relativePath'],
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
            '/record-categories/{recordCategoryId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List record category's children
        * 
        * Returns a list of record categories and/or record folders.
    
    Minimal information for each child is returned by default.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
    The list of child nodes includes primary children and secondary children, if there are any.
    
        * @param recordCategoryId The identifier of a record category.
        * @param skipCount The number of entities that exist in the collection before those included in this list.
        * @param maxItems The maximum number of items to return in the list.
        * @param where Optionally filter the list. Here are some examples:
    
    *   where=(nodeType='rma:recordFolder')
    
    *   where=(nodeType='rma:recordCategory')
    
    *   where=(isRecordFolder=true AND isClosed=false)
    
        * @param include Returns additional information about the record category child. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * hasRetentionSchedule
    * isClosed
    * isRecordCategory
    * isRecordFolder
    * path
    * properties
    
        * @param relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.
    
        * @param includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **recordCategoryId**, or as resolved by **relativePath**.
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    listRecordCategoryChildren(recordCategoryId: string, opts: any): Promise<RecordCategoryChildPaging> {
        opts = opts || {};
        let postBody = null;

        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Required param 'recordCategoryId' in listRecordCategoryChildren");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'relativePath': opts['relativePath'],
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
            '/record-categories/{recordCategoryId}/children', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    
        * @param recordCategoryId The identifier of a record category.
        * @param recordCategoryBodyUpdate The record category information to update.
        * @param include Returns additional information about the record category. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * hasRetentionSchedule
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
    updateRecordCategory(recordCategoryId: string, recordCategoryBodyUpdate: FilePlanComponentBodyUpdate, opts: any): Promise<RecordCategoryEntry> {
        opts = opts || {};
        let postBody = recordCategoryBodyUpdate;

        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Required param 'recordCategoryId' in updateRecordCategory");
        }

        if (recordCategoryBodyUpdate === undefined || recordCategoryBodyUpdate === null) {
            throw new Error("Required param 'recordCategoryBodyUpdate' in updateRecordCategory");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
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
            '/record-categories/{recordCategoryId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
