# .RecordfoldersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecordFolderChild**](RecordfoldersApi.md#createRecordFolderChild) | **POST** /record-folders/{recordFolderId}/records | Create a record
[**deleteRecordFolder**](RecordfoldersApi.md#deleteRecordFolder) | **DELETE** /record-folders/{recordFolderId} | Delete a record folder
[**getRecordFolder**](RecordfoldersApi.md#getRecordFolder) | **GET** /record-folders/{recordFolderId} | Get a record folder
[**listRecordFolderChildren**](RecordfoldersApi.md#listRecordFolderChildren) | **GET** /record-folders/{recordFolderId}/records | List records
[**updateRecordFolder**](RecordfoldersApi.md#updateRecordFolder) | **PUT** /record-folders/{recordFolderId} | Update a record folder


<a name="createRecordFolderChild"></a>
# **createRecordFolderChild**
> RecordEntry createRecordFolderChild(recordFolderIdrecordBodyCreateopts)

Create a record

Create a record as a primary child of **recordFolderId**.

This endpoint supports both JSON and multipart/form-data (file upload).

**Using multipart/form-data**

Use the **filedata** field to represent the content to upload, for example, the following curl command will
create a node with the contents of test.txt in the test user&#39;s home folder.

curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/record-folders/{recordFolderId}/records -F filedata&#x3D;@test.txt

This API method also supports record creation using application/json.

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


You can create an empty electronic record:
JSON
{
  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,
  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
}


Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record category and a record folder inside the specified **categoryId**:
JSON
[
  {
    \&quot;name\&quot;:\&quot;Record 1\&quot;,
    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
  },
  {
    \&quot;name\&quot;:\&quot;Record 2\&quot;,
    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
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
import RecordfoldersApi from 'RecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let recordfoldersApi = new RecordfoldersApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the record. Any optional field from the response model can be requested. For example:
* allowableOperations
* content
* isCompleted
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

recordfoldersApi.createRecordFolderChild(recordFolderIdrecordBodyCreateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **string**| The identifier of a record folder. | 
 **recordBodyCreate** | [**RMNodeBodyCreate**](RMNodeBodyCreate.md)| The record information to create.

This field is ignored for multipart/form-data content uploads.
 | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example:
* allowableOperations
* content
* isCompleted
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

[**RecordEntry**](RecordEntry.md)

<a name="deleteRecordFolder"></a>
# **deleteRecordFolder**
> deleteRecordFolder(recordFolderId)

Delete a record folder

Deletes record folder **recordFolderId**. Deleted file plan components cannot be recovered, they are deleted permanently.


### Example
```javascript
import RecordfoldersApi from 'RecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let recordfoldersApi = new RecordfoldersApi(this.alfrescoApi);


recordfoldersApi.deleteRecordFolder(recordFolderId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **string**| The identifier of a record folder. | 

### Return type

null (empty response body)

<a name="getRecordFolder"></a>
# **getRecordFolder**
> RecordFolderEntry getRecordFolder(recordFolderIdopts)

Get a record folder

Gets information for record folder **recordFolderId**

Mandatory fields and the record folder&#39;s aspects and properties are returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import RecordfoldersApi from 'RecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let recordfoldersApi = new RecordfoldersApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the record folders. Any optional field from the response model can be requested. For example:
* allowableOperations
* isClosed
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

recordfoldersApi.getRecordFolder(recordFolderIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **string**| The identifier of a record folder. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the record folders. Any optional field from the response model can be requested. For example:
* allowableOperations
* isClosed
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

[**RecordFolderEntry**](RecordFolderEntry.md)

<a name="listRecordFolderChildren"></a>
# **listRecordFolderChildren**
> RecordFolderAssociationPaging listRecordFolderChildren(recordFolderIdopts)

List records

Gets a list of records.

Minimal information for each record is returned by default.

The list of records includes primary children and secondary children, if there are any.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import RecordfoldersApi from 'RecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let recordfoldersApi = new RecordfoldersApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'where': where_example // string | Optionally filter the list. Here are some examples:

*   where=(nodeType='my:specialNodeType')

*   where=(nodeType='my:specialNodeType INCLUDESUBTYPES')

*   where=(isPrimary=true)

  'include':  // Array<string> | Returns additional information about the records. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* association
* content
* isCompleted
* path
* properties

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with record information on the parent folder – the specified parent **recordFolderId**
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

recordfoldersApi.listRecordFolderChildren(recordFolderIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **string**| The identifier of a record folder. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where&#x3D;(nodeType&#x3D;&#39;my:specialNodeType&#39;)

*   where&#x3D;(nodeType&#x3D;&#39;my:specialNodeType INCLUDESUBTYPES&#39;)

*   where&#x3D;(isPrimary&#x3D;true)
 | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the records. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* association
* content
* isCompleted
* path
* properties
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with record information on the parent folder – the specified parent **recordFolderId** | [optional] 
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

[**RecordFolderAssociationPaging**](RecordFolderAssociationPaging.md)

<a name="updateRecordFolder"></a>
# **updateRecordFolder**
> RecordFolderEntry updateRecordFolder(recordFolderIdrecordFolderBodyUpdateopts)

Update a record folder

Updates record folder **recordFolderId**. For example, you can rename a record folder:
JSON
{
  \&quot;name\&quot;:\&quot;My new name\&quot;
}

You can also set or update one or more properties:
JSON
{
  \&quot;properties\&quot;:
    {
       \&quot;rma:vitalRecordIndicator\&quot;: true,
       \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;
    }
}

**Note:** if you want to add or remove aspects, then you must use **GET /record-folders/{recordFolderId}** first to get the complete set of *aspectNames*.

**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.


### Example
```javascript
import RecordfoldersApi from 'RecordfoldersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let recordfoldersApi = new RecordfoldersApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the record folders. Any optional field from the response model can be requested. For example:
* allowableOperations
* isClosed
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

recordfoldersApi.updateRecordFolder(recordFolderIdrecordFolderBodyUpdateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **string**| The identifier of a record folder. | 
 **recordFolderBodyUpdate** | [**FilePlanComponentBodyUpdate**](FilePlanComponentBodyUpdate.md)| The record folder information to update. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the record folders. Any optional field from the response model can be requested. For example:
* allowableOperations
* isClosed
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

[**RecordFolderEntry**](RecordFolderEntry.md)

