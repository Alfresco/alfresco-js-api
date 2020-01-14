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
import { RMNodeBodyCreate } from '../model/rMNodeBodyCreate';
import { RecordEntry } from '../model/recordEntry';
import { RecordFolderAssociationPaging } from '../model/recordFolderAssociationPaging';
import { RecordFolderEntry } from '../model/recordFolderEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Recordfolders service.
* @module RecordFoldersApi
*/
export class RecordFoldersApi extends BaseApi {
    /**
    * Create a record
    *
    * Create a record as a primary child of **recordFolderId**.

This endpoint supports both JSON and multipart/form-data (file upload).

**Using multipart/form-data**

Use the **filedata** field to represent the content to upload, for example, the following curl command will
create a node with the contents of test.txt in the test user's home folder.

curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/record-folders/{recordFolderId}/records -F filedata=@test.txt

This API method also supports record creation using application/json.

You must specify at least a **name** and **nodeType**.

You can create a non-electronic record like this:
JSON
{
  \"name\":\"My Non-electronic Record\",
  \"nodeType\":\"rma:nonElectronicDocument\",
  \"properties\":
    {
      \"cm:description\":\"My Non-electronic Record Description\",
      \"cm:title\":\"My Non-electronic Record Title\",
      \"rma:box\":\"My Non-electronic Record Box\",
      \"rma:file\":\"My Non-electronic Record File\",
      \"rma:numberOfCopies\":1,
      \"rma:physicalSize\":30,
      \"rma:shelf\":\"My Non-electronic Record Shelf\",
      \"rma:storageLocation\":\"My Non-electronic Record Location\"
    }
}

You can create an empty electronic record:
JSON
{
  \"name\":\"My Electronic Record\",
  \"nodeType\":\"cm:content\"
}

Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record category and a record folder inside the specified **categoryId**:
JSON
[
  {
    \"name\":\"Record 1\",
    \"nodeType\":\"cm:content\"
  },
  {
    \"name\":\"Record 2\",
    \"nodeType\":\"cm:content\"
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
    * @param recordFolderId The identifier of a record folder.
    * @param recordBodyCreate The record information to create.

This field is ignored for multipart/form-data content uploads.

    * @param opts Optional parameters
    * @param opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:
* allowableOperations
* content
* isCompleted
* path

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<RecordEntry>
    */
    createRecordFolderChild(recordFolderId: string, recordBodyCreate: RMNodeBodyCreate, opts?: any): Promise<RecordEntry> {
        throwIfNotDefined(recordFolderId, 'recordFolderId');
        throwIfNotDefined(recordBodyCreate, 'recordBodyCreate');

        opts = opts || {};
        let postBody = recordBodyCreate;

        let pathParams = {
            'recordFolderId': recordFolderId
        };

        let queryParams = {
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
            '/record-folders/{recordFolderId}/records', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts );
    }
    /**
        * Delete a record folder
        *
        * Deletes record folder **recordFolderId**. Deleted file plan components cannot be recovered, they are deleted permanently.

        *
        * @param recordFolderId The identifier of a record folder.
        * @return Promise<{}>
        */
    deleteRecordFolder(recordFolderId: string): Promise<any> {
        throwIfNotDefined(recordFolderId, 'recordFolderId');

        let postBody = null;

        let pathParams = {
            'recordFolderId': recordFolderId
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
            '/record-folders/{recordFolderId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a record folder
        *
        * Gets information for record folder **recordFolderId**

    Mandatory fields and the record folder's aspects and properties are returned by default.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param recordFolderId The identifier of a record folder.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the record folders. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * isClosed
    * path

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RecordFolderEntry>
        */
    getRecordFolder(recordFolderId: string, opts?: any): Promise<RecordFolderEntry> {
        throwIfNotDefined(recordFolderId, 'recordFolderId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'recordFolderId': recordFolderId
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
            '/record-folders/{recordFolderId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordFolderEntry);
    }
    /**
        * List records
        *
        * Gets a list of records.

    Minimal information for each record is returned by default.

    The list of records includes primary children and secondary children, if there are any.

    You can use the **include** parameter (include=allowableOperations) to return additional information.

        *
        * @param recordFolderId The identifier of a record folder.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.where Optionally filter the list. Here are some examples:

    *   where=(nodeType='my:specialNodeType')

    *   where=(nodeType='my:specialNodeType INCLUDESUBTYPES')

    *   where=(isPrimary=true)

        * @param opts.include Returns additional information about the records. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * association
    * content
    * isCompleted
    * path
    * properties

        * @param opts.includeSource Also include **source** (in addition to **entries**) with record information on the parent folder – the specified parent **recordFolderId**
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RecordFolderAssociationPaging>
        */
    listRecordFolderChildren(recordFolderId: string, opts?: any): Promise<RecordFolderAssociationPaging> {
        throwIfNotDefined(recordFolderId, 'recordFolderId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'recordFolderId': recordFolderId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
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
            '/record-folders/{recordFolderId}/records', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordFolderAssociationPaging);
    }
    /**
        * Update a record folder
        *
        * Updates record folder **recordFolderId**. For example, you can rename a record folder:
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

    **Note:** if you want to add or remove aspects, then you must use **GET /record-folders/{recordFolderId}** first to get the complete set of *aspectNames*.

    **Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.

        *
        * @param recordFolderId The identifier of a record folder.
        * @param recordFolderBodyUpdate The record folder information to update.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the record folders. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * isClosed
    * path

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RecordFolderEntry>
        */
    updateRecordFolder(recordFolderId: string, recordFolderBodyUpdate: FilePlanComponentBodyUpdate, opts?: any): Promise<RecordFolderEntry> {
        throwIfNotDefined(recordFolderId, 'recordFolderId');
        throwIfNotDefined(recordFolderBodyUpdate, 'recordFolderBodyUpdate');

        opts = opts || {};
        let postBody = recordFolderBodyUpdate;

        let pathParams = {
            'recordFolderId': recordFolderId
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
            '/record-folders/{recordFolderId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RecordFolderEntry);
    }

}
