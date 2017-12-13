# AlfrescoGovernanceServicesRestApi.FileplansApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFilePlanCategories**](FileplansApi.md#createFilePlanCategories) | **POST** /file-plans/{filePlanId}/categories | Create record categories for a file plan
[**getFilePlan**](FileplansApi.md#getFilePlan) | **GET** /file-plans/{filePlanId} | Get a file plan
[**getFilePlanCategories**](FileplansApi.md#getFilePlanCategories) | **GET** /file-plans/{filePlanId}/categories | List file plans&#39;s children
[**updateFilePlan**](FileplansApi.md#updateFilePlan) | **PUT** /file-plans/{filePlanId} | Update a file plan


<a name="createFilePlanCategories"></a>
# **createFilePlanCategories**
> RecordCategoryEntry createFilePlanCategories(filePlanId, nodeBodyCreate, opts)

Create record categories for a file plan

Creates a record category as a primary child of **filePlanId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nThis API method also supports record category creation using application/json.\n\nYou must specify at least a **name**.\n\nYou can create a category like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;\n}\n```\nYou can set properties when creating a record category:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,\n    \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.FileplansApi()

var filePlanId = "filePlanId_example"; // {String} The identifier of a file plan. You can also use the -filePlan- alias.

var nodeBodyCreate = new AlfrescoGovernanceServicesRestApi.RootCategoryBodyCreate(); // {RootCategoryBodyCreate} The node information to create.

var opts = { 
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
  'include': ["include_example"], // {[String]} Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.createFilePlanCategories(filePlanId, nodeBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **String**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **nodeBodyCreate** | [**RootCategoryBodyCreate**](RootCategoryBodyCreate.md)| The node information to create. | 
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordCategoryEntry**](RecordCategoryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getFilePlan"></a>
# **getFilePlan**
> FilePlanEntry getFilePlan(filePlanId, , opts)

Get a file plan

Gets information for file plan **filePlanId**\n\nMandatory fields and the file plan&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.FileplansApi()

var filePlanId = "filePlanId_example"; // {String} The identifier of a file plan. You can also use the -filePlan- alias.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the file plan. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getFilePlan(filePlanId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **String**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **include** | [**[String]**](String.md)| Returns additional information about the file plan. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**FilePlanEntry**](FilePlanEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFilePlanCategories"></a>
# **getFilePlanCategories**
> RecordCategoryPaging getFilePlanCategories(filePlanId, , opts)

List file plans&#39;s children

Returns a list of record categories.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.FileplansApi()

var filePlanId = "filePlanId_example"; // {String} The identifier of a file plan. You can also use the -filePlan- alias.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], // {[String]} Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* hasRetentionSchedule\n* path\n* properties\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 the specified parent **filePlanId**
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getFilePlanCategories(filePlanId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **String**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* hasRetentionSchedule\n* path\n* properties\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 the specified parent **filePlanId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordCategoryPaging**](RecordCategoryPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFilePlan"></a>
# **updateFilePlan**
> FilePlanEntry updateFilePlan(filePlanId, filePlanBodyUpdate, opts)

Update a file plan

Updates file plan **filePlanId**.\nYou can only set or update description and title properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,\n       \&quot;cm:title\&quot;:\&quot;New Title\&quot;\n    }\n}\n```\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.FileplansApi()

var filePlanId = "filePlanId_example"; // {String} The identifier of a file plan. You can also use the -filePlan- alias.

var filePlanBodyUpdate = new AlfrescoGovernanceServicesRestApi.FilePlanBodyUpdate(); // {FilePlanBodyUpdate} The file plan information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the file plan. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateFilePlan(filePlanId, filePlanBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **String**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **filePlanBodyUpdate** | [**FilePlanBodyUpdate**](FilePlanBodyUpdate.md)| The file plan information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the file plan. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**FilePlanEntry**](FilePlanEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

