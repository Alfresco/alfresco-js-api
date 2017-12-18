# AlfrescoGovernanceServicesRestApi.FilePlansApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFilePlanCategories**](FilePlansApi.md#createFilePlanCategories) | **POST** /file-plans/{filePlanId}/categories | Create record categories for a file plan
[**getFilePlan**](FilePlansApi.md#getFilePlan) | **GET** /file-plans/{filePlanId} | Get a file plan
[**getFilePlanCategories**](FilePlansApi.md#getFilePlanCategories) | **GET** /file-plans/{filePlanId}/categories | List file plans&#39;s children
[**updateFilePlan**](FilePlansApi.md#updateFilePlan) | **PUT** /file-plans/{filePlanId} | Update a file plan


<a name="createFilePlanCategories"></a>
# **createFilePlanCategories**
> RecordCategoryEntry createFilePlanCategories(filePlanId, nodeBodyCreate, opts)

Create record categories for a file plan

Creates a record category as a primary child of **filePlanId**.  You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then the API method tries to create a unique name using an integer suffix.  This API method also supports record category creation using application/json.  You must specify at least a **name**.  You can create a category like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Category\&quot; } &#x60;&#x60;&#x60; You can set properties when creating a record category: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Category\&quot;,   \&quot;properties\&quot;:   {     \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,     \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;   } } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var filePlanId = "filePlanId_example"; // String | The identifier of a file plan. You can also use the -filePlan- alias.

var nodeBodyCreate = new AlfrescoGovernanceServicesRestApi.RootCategoryBodyCreate(); // RootCategoryBodyCreate | The node information to create.

var opts = { 
  'autoRename': true, // Boolean | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. 
  'include': ["include_example"], // [String] | Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * hasRetentionSchedule * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.filePlansApi.createFilePlanCategories(filePlanId, nodeBodyCreate, opts).then(function(data) {
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
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * hasRetentionSchedule * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordCategoryEntry**](RecordCategoryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getFilePlan"></a>
# **getFilePlan**
> FilePlanEntry getFilePlan(filePlanId, , opts)

Get a file plan

Gets information for file plan **filePlanId**  Mandatory fields and the file plan&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript
var filePlanId = "filePlanId_example"; // String | The identifier of a file plan. You can also use the -filePlan- alias.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the file plan. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.filePlansApi.getFilePlan(filePlanId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **String**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **include** | [**[String]**](String.md)| Returns additional information about the file plan. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**FilePlanEntry**](FilePlanEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFilePlanCategories"></a>
# **getFilePlanCategories**
> RecordCategoryPaging getFilePlanCategories(filePlanId, , opts)

List file plans&#39;s children

Returns a list of record categories.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript
var filePlanId = "filePlanId_example"; // String | The identifier of a file plan. You can also use the -filePlan- alias.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'include': ["include_example"], // [String] | Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * hasRetentionSchedule * path * properties 
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **filePlanId**
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.filePlansApi.getFilePlanCategories(filePlanId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **String**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * hasRetentionSchedule * path * properties  | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **filePlanId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordCategoryPaging**](RecordCategoryPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFilePlan"></a>
# **updateFilePlan**
> FilePlanEntry updateFilePlan(filePlanId, filePlanBodyUpdate, opts)

Update a file plan

Updates file plan **filePlanId**. You can only set or update description and title properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:description\&quot;: \&quot;New Description\&quot;,        \&quot;cm:title\&quot;:\&quot;New Title\&quot;     } } &#x60;&#x60;&#x60;  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order. 

### Example
```javascript
var filePlanId = "filePlanId_example"; // String | The identifier of a file plan. You can also use the -filePlan- alias.

var filePlanBodyUpdate = new AlfrescoGovernanceServicesRestApi.FilePlanBodyUpdate(); // FilePlanBodyUpdate | The file plan information to update.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the file plan. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.filePlansApi.updateFilePlan(filePlanId, filePlanBodyUpdate, opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the file plan. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**FilePlanEntry**](FilePlanEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

