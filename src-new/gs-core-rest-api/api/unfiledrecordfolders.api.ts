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
import { RMNodeBodyCreateWithRelativePath } from '../model/rMNodeBodyCreateWithRelativePath';
import { UnfiledRecordFolderAssociationPaging } from '../model/unfiledRecordFolderAssociationPaging';
import { UnfiledRecordFolderBodyUpdate } from '../model/unfiledRecordFolderBodyUpdate';
import { UnfiledRecordFolderEntry } from '../model/unfiledRecordFolderEntry';
import { BaseApi } from './base.api';

/**
* Unfiledrecordfolders service.
* @module UnfiledrecordfoldersApi
*/
export class UnfiledrecordfoldersApi extends BaseApi {
    /**
    * Create a record or an unfiled record folder
    * 
    * Create a record or an unfiled record folder as a primary child of **unfiledRecordFolderId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create a unique name using an integer suffix.

This endpoint supports both JSON and multipart/form-data (file upload).

**Using multipart/form-data**

Use the **filedata** field to represent the content to upload, for example, the following curl command will
create a node with the contents of test.txt in the test user's home folder.

curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-record-folders/{unfiledRecordFolderId}/children -F filedata=@test.txt

This API method also supports record and unfiled record folder creation using application/json.

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

You can create an empty electronic record like this:
JSON
{
  \"name\":\"My Electronic Record\",
  \"nodeType\":\"cm:content\"
}

You can create an unfiled record folder like this:
JSON
{
  \"name\": \"My Unfiled Record Folder\",
  \"nodeType\": \"rma:unfiledRecordFolder\",
  \"properties\":
  {
    \"cm:title\": \"My Unfiled Record Folder Title\"
  }
}

Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record and an unfiled record folder inside the specified **unfiledRecordFolderId**:
JSON
[
  {
    \"name\":\"My Record\",
    \"nodeType\":\"cm:content\"
  },
  {
    \"name\":\"My Unfiled Record Folder\",
    \"nodeType\":\"rma:unfiledRecordFolder\"
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

    * @param unfiledRecordFolderId The identifier of an unfiled record folder.
    * @param nodeBodyCreate The node information to create.
    * @param autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

    * @param include Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
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
    createUnfiledRecordFolderChildren(unfiledRecordFolderId: string, nodeBodyCreate: RMNodeBodyCreateWithRelativePath, opts: any): Promise<UnfiledRecordFolderAssociationPaging> {
        opts = opts || {};
        let postBody = nodeBodyCreate;

        if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
            throw new Error("Required param 'unfiledRecordFolderId' in createUnfiledRecordFolderChildren");
        }

        if (nodeBodyCreate === undefined || nodeBodyCreate === null) {
            throw new Error("Required param 'nodeBodyCreate' in createUnfiledRecordFolderChildren");
        }

        let pathParams = {
            'unfiledRecordFolderId': unfiledRecordFolderId
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
            '/unfiled-record-folders/{unfiledRecordFolderId}/children', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.
        * 
        * Deletes the unfiled record folder **unfiledRecordFolderId**.
    
        * @param unfiledRecordFolderId The identifier of an unfiled record folder.
        */
    deleteUnfiledRecordFolder(unfiledRecordFolderId: string): Promise<{}> {

        let postBody = null;

        if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
            throw new Error("Required param 'unfiledRecordFolderId' in deleteUnfiledRecordFolder");
        }

        let pathParams = {
            'unfiledRecordFolderId': unfiledRecordFolderId
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
            '/unfiled-record-folders/{unfiledRecordFolderId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get the unfiled record folder
        * 
        * Gets information for unfiled record folder id **unfiledRecordFolderId**
    
    Mandatory fields and the unfiled record folder's aspects and properties are returned by default.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
        * @param unfiledRecordFolderId The identifier of an unfiled record folder.
        * @param include Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * path
    
        * @param relativePath Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.
    
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    getUnfiledRecordFolder(unfiledRecordFolderId: string, opts: any): Promise<UnfiledRecordFolderEntry> {
        opts = opts || {};
        let postBody = null;

        if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
            throw new Error("Required param 'unfiledRecordFolderId' in getUnfiledRecordFolder");
        }

        let pathParams = {
            'unfiledRecordFolderId': unfiledRecordFolderId
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
            '/unfiled-record-folders/{unfiledRecordFolderId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List unfiled record folder's children
        * 
        * Returns a list of records or unfiled record folders.
    
    Minimal information for each child is returned by default.
    
    You can use the **include** parameter (include=allowableOperations) to return additional information.
    
        * @param unfiledRecordFolderId The identifier of an unfiled record folder.
        * @param skipCount The number of entities that exist in the collection before those included in this list.
        * @param maxItems The maximum number of items to return in the list.
        * @param where Optionally filter the list. Here are some examples:
    
    *   where=(isRecord=true)
    
    *   where=(isUnfiledRecordFolder=false)
    
    *   where=(nodeType='cm:content INCLUDESUBTYPES')
    
        * @param include Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * aspectNames
    * association
    * path
    * properties
    
        * @param relativePath Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.
    
        * @param includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    listUnfiledRecordFolderChildren(unfiledRecordFolderId: string, opts: any): Promise<UnfiledRecordFolderAssociationPaging> {
        opts = opts || {};
        let postBody = null;

        if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
            throw new Error("Required param 'unfiledRecordFolderId' in listUnfiledRecordFolderChildren");
        }

        let pathParams = {
            'unfiledRecordFolderId': unfiledRecordFolderId
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
            '/unfiled-record-folders/{unfiledRecordFolderId}/children', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update an unfiled record folder
        * 
        * Updates unfiled record folder **unfiledRecordFolderId**. For example, you can rename a record folder:
    JSON
    {
      \"name\":\"My new name\"
    }
    
    You can also set or update one or more properties:
    JSON
    {
      \"properties\":
        {
           \"cm:title\":\"New title\",
           \"cm:description\":\"New description\"
        }
    }
    
    **Note:** if you want to add or remove aspects, then you must use **GET /unfiled-record-folders/{unfiledRecordFolderId}** first to get the complete set of *aspectNames*.
    
    **Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.
    
        * @param unfiledRecordFolderId The identifier of an unfiled record folder.
        * @param unfiledRecordFolderBodyUpdate The record folder information to update.
        * @param include Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
    * allowableOperations
    * path
    
        * @param includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    updateUnfiledRecordFolder(unfiledRecordFolderId: string, unfiledRecordFolderBodyUpdate: UnfiledRecordFolderBodyUpdate, opts: any): Promise<UnfiledRecordFolderEntry> {
        opts = opts || {};
        let postBody = unfiledRecordFolderBodyUpdate;

        if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
            throw new Error("Required param 'unfiledRecordFolderId' in updateUnfiledRecordFolder");
        }

        if (unfiledRecordFolderBodyUpdate === undefined || unfiledRecordFolderBodyUpdate === null) {
            throw new Error("Required param 'unfiledRecordFolderBodyUpdate' in updateUnfiledRecordFolder");
        }

        let pathParams = {
            'unfiledRecordFolderId': unfiledRecordFolderId
        };
        let queryParams = {
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
            '/unfiled-record-folders/{unfiledRecordFolderId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
