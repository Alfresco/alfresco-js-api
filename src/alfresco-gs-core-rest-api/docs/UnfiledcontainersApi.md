# AlfrescoGovernanceServicesRestApi.UnfiledcontainersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnfiledContainerChildren**](UnfiledcontainersApi.md#createUnfiledContainerChildren) | **POST** /unfiled-containers/{unfiledContainerId}/children | Create a record or an unfiled record folder
[**getUnfiledContainer**](UnfiledcontainersApi.md#getUnfiledContainer) | **GET** /unfiled-containers/{unfiledContainerId} | Get the unfiled records container
[**listUnfiledContainerChildren**](UnfiledcontainersApi.md#listUnfiledContainerChildren) | **GET** /unfiled-containers/{unfiledContainerId}/children | List unfiled record container&#39;s children
[**updateUnfiledContainer**](UnfiledcontainersApi.md#updateUnfiledContainer) | **PUT** /unfiled-containers/{unfiledContainerId} | Update an unfiled record container


<a name="createUnfiledContainerChildren"></a>
# **createUnfiledContainerChildren**
> UnfiledContainerAssociationPaging createUnfiledContainerChildren(unfiledContainerId, nodeBodyCreate, opts)

Create a record or an unfiled record folder

Creates a record or an unfiled record folder as a primary child of **unfiledContainerId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create a unique name using an integer suffix.\n\nThis endpoint supports both JSON and multipart/form-data (file upload).\n\n**Using multipart/form-data**\n\nUse the **filedata** field to represent the content to upload, for example, the following curl command will\ncreate a node with the contents of test.txt in the test user&#39;s home folder.\n\n```curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-containers/{unfiledContainerId}/children -F filedata=@test.txt```\n\nThis API method also supports record and unfiled record folder creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\nYou can create a non-electronic record like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,\n      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,\n      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,\n      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,\n      \&quot;rma:numberOfCopies\&quot;:1,\n      \&quot;rma:physicalSize\&quot;:30,\n      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,\n      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;\n    }\n}\n```\n\nYou can create an empty electronic record:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n}\n```\n\nYou can create an unfiled record folder like this:\n```JSON\n{\n  \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,\n  \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record and an unfiled record folder inside the specified **unfiledContainerId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;My Record\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledcontainersApi()

var unfiledContainerId = "unfiledContainerId_example"; // {String} The identifier of an unfiled records container. You can use the **-unfiled-** alias.

var nodeBodyCreate = new AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate(); // {RMNodeBodyCreate} The node information to create.

var opts = { 
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.createUnfiledContainerChildren(unfiledContainerId, nodeBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **String**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **nodeBodyCreate** | [**RMNodeBodyCreate**](RMNodeBodyCreate.md)| The node information to create. | 
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledContainerAssociationPaging**](UnfiledContainerAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getUnfiledContainer"></a>
# **getUnfiledContainer**
> UnfiledContainerEntry getUnfiledContainer(unfiledContainerId, , opts)

Get the unfiled records container

Gets information for unfiled records container **unfiledContainerId**\n\nMandatory fields and the unfiled records container&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledcontainersApi()

var unfiledContainerId = "unfiledContainerId_example"; // {String} The identifier of an unfiled records container. You can use the **-unfiled-** alias.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getUnfiledContainer(unfiledContainerId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **String**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledContainerEntry**](UnfiledContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUnfiledContainerChildren"></a>
# **listUnfiledContainerChildren**
> UnfiledContainerAssociationPaging listUnfiledContainerChildren(unfiledContainerId, , opts)

List unfiled record container&#39;s children

Returns a list of records or unfiled record folders.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledcontainersApi()

var unfiledContainerId = "unfiledContainerId_example"; // {String} The identifier of an unfiled records container. You can use the **-unfiled-** alias.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'where': "where_example", // {String} Optionally filter the list. Here are some examples:\n\n*   ```where=(isRecord=true)```\n\n*   ```where=(isUnfiledRecordFolder=false)```\n\n*   ```where=(nodeType='cm:content INCLUDESUBTYPES')```\n
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* path\n* properties\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 the specified parent **unfiledContainerId**
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listUnfiledContainerChildren(unfiledContainerId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **String**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:\n\n*   ```where=(isRecord=true)```\n\n*   ```where=(isUnfiledRecordFolder=false)```\n\n*   ```where=(nodeType=&#39;cm:content INCLUDESUBTYPES&#39;)```\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* path\n* properties\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 the specified parent **unfiledContainerId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledContainerAssociationPaging**](UnfiledContainerAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUnfiledContainer"></a>
# **updateUnfiledContainer**
> UnfiledContainerEntry updateUnfiledContainer(unfiledContainerId, unfiledContainerBodyUpdate, opts)

Update an unfiled record container

Updates unfiled record container **unfiledContainerId**. For example, you can rename an unfiled record container:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update description and title properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,\n       \&quot;cm:title\&quot;:\&quot;New Title\&quot;\n    }\n}\n```\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledcontainersApi()

var unfiledContainerId = "unfiledContainerId_example"; // {String} The identifier of an unfiled records container. You can use the **-unfiled-** alias.

var unfiledContainerBodyUpdate = new AlfrescoGovernanceServicesRestApi.UnfiledRecordContainerBodyUpdate(); // {UnfiledRecordContainerBodyUpdate} The unfiled record container information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateUnfiledContainer(unfiledContainerId, unfiledContainerBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **String**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **unfiledContainerBodyUpdate** | [**UnfiledRecordContainerBodyUpdate**](UnfiledRecordContainerBodyUpdate.md)| The unfiled record container information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledContainerEntry**](UnfiledContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

