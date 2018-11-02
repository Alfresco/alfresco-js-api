# .UnfiledrecordfoldersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnfiledRecordFolderChildren**](UnfiledrecordfoldersApi.md#createUnfiledRecordFolderChildren) | **POST** /unfiled-record-folders/{unfiledRecordFolderId}/children | Create a record or an unfiled record folder
[**deleteUnfiledRecordFolder**](UnfiledrecordfoldersApi.md#deleteUnfiledRecordFolder) | **DELETE** /unfiled-record-folders/{unfiledRecordFolderId} | Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.
[**getUnfiledRecordFolder**](UnfiledrecordfoldersApi.md#getUnfiledRecordFolder) | **GET** /unfiled-record-folders/{unfiledRecordFolderId} | Get the unfiled record folder
[**listUnfiledRecordFolderChildren**](UnfiledrecordfoldersApi.md#listUnfiledRecordFolderChildren) | **GET** /unfiled-record-folders/{unfiledRecordFolderId}/children | List unfiled record folder&#39;s children
[**updateUnfiledRecordFolder**](UnfiledrecordfoldersApi.md#updateUnfiledRecordFolder) | **PUT** /unfiled-record-folders/{unfiledRecordFolderId} | Update an unfiled record folder


<a name="createUnfiledRecordFolderChildren"></a>
# **createUnfiledRecordFolderChildren**
> UnfiledRecordFolderAssociationPaging createUnfiledRecordFolderChildren(unfiledRecordFolderIdnodeBodyCreateopts)

Create a record or an unfiled record folder

Create a record or an unfiled record folder as a primary child of **unfiledRecordFolderId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create a unique name using an integer suffix.

This endpoint supports both JSON and multipart/form-data (file upload).

**Using multipart/form-data**

Use the **filedata** field to represent the content to upload, for example, the following curl command will
create a node with the contents of test.txt in the test user&#39;s home folder.

curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-record-folders/{unfiledRecordFolderId}/children -F filedata&#x3D;@test.txt

This API method also supports record and unfiled record folder creation using application/json.

You must specify at least a **name** and **nodeType**.

You can create a non-electronic record like this:
JSON
{
  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,
  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,
  \&quot;properties\&quot;:
    {
      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,
      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,
      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,
      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,
      \&quot;rma:numberOfCopies\&quot;:1,
      \&quot;rma:physicalSize\&quot;:30,
      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,
      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;
    }
}


You can create an empty electronic record like this:
JSON
{
  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,
  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
}


You can create an unfiled record folder like this:
JSON
{
  \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,
  \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,
  \&quot;properties\&quot;:
  {
    \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;
  }
}


Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record and an unfiled record folder inside the specified **unfiledRecordFolderId**:
JSON
[
  {
    \&quot;name\&quot;:\&quot;My Record\&quot;,
    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
  },
  {
    \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,
    \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \&quot;list\&quot;: {
    \&quot;pagination\&quot;: {
      \&quot;count\&quot;: 2,
      \&quot;hasMoreItems\&quot;: false,
      \&quot;totalItems\&quot;: 2,
      \&quot;skipCount\&quot;: 0,
      \&quot;maxItems\&quot;: 100
    },
    \&quot;entries\&quot;: [
      {
        \&quot;entry\&quot;: {
          ...
        }
      },
      {
        \&quot;entry\&quot;: {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import UnfiledrecordfoldersApi from 'UnfiledrecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let unfiledrecordfoldersApi = new UnfiledrecordfoldersApi(this.alfrescoApi);

let opts = { 
  'autoRename': true // boolean | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

  'include':  // Array<string> | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

unfiledrecordfoldersApi.createUnfiledRecordFolderChildren(unfiledRecordFolderIdnodeBodyCreateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **string**| The identifier of an unfiled record folder. | 
 **nodeBodyCreate** | [**RMNodeBodyCreateWithRelativePath**](RMNodeBodyCreateWithRelativePath.md)| The node information to create. | 
 **autoRename** | **boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
 | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
* path
 | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**UnfiledRecordFolderAssociationPaging**](UnfiledRecordFolderAssociationPaging.md)

<a name="deleteUnfiledRecordFolder"></a>
# **deleteUnfiledRecordFolder**
> deleteUnfiledRecordFolder(unfiledRecordFolderId)

Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.

Deletes the unfiled record folder **unfiledRecordFolderId**.


### Example
```javascript
import UnfiledrecordfoldersApi from 'UnfiledrecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let unfiledrecordfoldersApi = new UnfiledrecordfoldersApi(this.alfrescoApi);


unfiledrecordfoldersApi.deleteUnfiledRecordFolder(unfiledRecordFolderId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **string**| The identifier of an unfiled record folder. | 

### Return type

null (empty response body)

<a name="getUnfiledRecordFolder"></a>
# **getUnfiledRecordFolder**
> UnfiledRecordFolderEntry getUnfiledRecordFolder(unfiledRecordFolderIdopts)

Get the unfiled record folder

Gets information for unfiled record folder id **unfiledRecordFolderId**

Mandatory fields and the unfiled record folder&#39;s aspects and properties are returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import UnfiledrecordfoldersApi from 'UnfiledrecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let unfiledrecordfoldersApi = new UnfiledrecordfoldersApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

  'relativePath': relativePath_example // string | Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

unfiledrecordfoldersApi.getUnfiledRecordFolder(unfiledRecordFolderIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **string**| The identifier of an unfiled record folder. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
* path
 | [optional] 
 **relativePath** | **string**| Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.
 | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**UnfiledRecordFolderEntry**](UnfiledRecordFolderEntry.md)

<a name="listUnfiledRecordFolderChildren"></a>
# **listUnfiledRecordFolderChildren**
> UnfiledRecordFolderAssociationPaging listUnfiledRecordFolderChildren(unfiledRecordFolderIdopts)

List unfiled record folder&#39;s children

Returns a list of records or unfiled record folders.

Minimal information for each child is returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import UnfiledrecordfoldersApi from 'UnfiledrecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let unfiledrecordfoldersApi = new UnfiledrecordfoldersApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'where': where_example // string | Optionally filter the list. Here are some examples:

*   where=(isRecord=true)

*   where=(isUnfiledRecordFolder=false)

*   where=(nodeType='cm:content INCLUDESUBTYPES')

  'include':  // Array<string> | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* association
* path
* properties

  'relativePath': relativePath_example // string | Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

unfiledrecordfoldersApi.listUnfiledRecordFolderChildren(unfiledRecordFolderIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **string**| The identifier of an unfiled record folder. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where&#x3D;(isRecord&#x3D;true)

*   where&#x3D;(isUnfiledRecordFolder&#x3D;false)

*   where&#x3D;(nodeType&#x3D;&#39;cm:content INCLUDESUBTYPES&#39;)
 | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* association
* path
* properties
 | [optional] 
 **relativePath** | **string**| Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**UnfiledRecordFolderAssociationPaging**](UnfiledRecordFolderAssociationPaging.md)

<a name="updateUnfiledRecordFolder"></a>
# **updateUnfiledRecordFolder**
> UnfiledRecordFolderEntry updateUnfiledRecordFolder(unfiledRecordFolderIdunfiledRecordFolderBodyUpdateopts)

Update an unfiled record folder

Updates unfiled record folder **unfiledRecordFolderId**. For example, you can rename a record folder:
JSON
{
  \&quot;name\&quot;:\&quot;My new name\&quot;
}

You can also set or update one or more properties:
JSON
{
  \&quot;properties\&quot;:
    {
       \&quot;cm:title\&quot;:\&quot;New title\&quot;,
       \&quot;cm:description\&quot;:\&quot;New description\&quot;
    }
}

**Note:** if you want to add or remove aspects, then you must use **GET /unfiled-record-folders/{unfiledRecordFolderId}** first to get the complete set of *aspectNames*.

**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.


### Example
```javascript
import UnfiledrecordfoldersApi from 'UnfiledrecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let unfiledrecordfoldersApi = new UnfiledrecordfoldersApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

unfiledrecordfoldersApi.updateUnfiledRecordFolder(unfiledRecordFolderIdunfiledRecordFolderBodyUpdateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **string**| The identifier of an unfiled record folder. | 
 **unfiledRecordFolderBodyUpdate** | [**UnfiledRecordFolderBodyUpdate**](UnfiledRecordFolderBodyUpdate.md)| The record folder information to update. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
* path
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**UnfiledRecordFolderEntry**](UnfiledRecordFolderEntry.md)

