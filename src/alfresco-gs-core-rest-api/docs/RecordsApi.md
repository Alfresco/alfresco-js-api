# AlfrescoGovernanceServicesRestApi.RecordsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeRecord**](RecordsApi.md#completeRecord) | **POST** /records/{recordId}/complete | Complete a record
[**deleteRecord**](RecordsApi.md#deleteRecord) | **DELETE** /records/{recordId} | Delete a record
[**fileRecord**](RecordsApi.md#fileRecord) | **POST** /records/{recordId}/file | File a record
[**getRecord**](RecordsApi.md#getRecord) | **GET** /records/{recordId} | Get a record
[**getRecordContent**](RecordsApi.md#getRecordContent) | **GET** /records/{recordId}/content | Get record content
[**updateRecord**](RecordsApi.md#updateRecord) | **PUT** /records/{recordId} | Update record


<a name="completeRecord"></a>
# **completeRecord**
> RecordEntry completeRecord(recordId, opts)

Complete a record

Completes the record **recordId**. 

### Example
```javascript

var recordId = "recordId_example"; // String | The identifier of a record.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordsApi.completeRecord(recordId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | **String**| The identifier of a record. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRecord"></a>
# **deleteRecord**
> deleteRecord(recordId)

Delete a record

Deletes the record **recordId**. Deleted file plan components cannot be recovered, they are deleted permanently. 

### Example
```javascript

var recordId = "recordId_example"; // String | The identifier of a record.

this.alfrescoJsApi.gsCore.recordsApi.deleteRecord(recordId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | **String**| The identifier of a record. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileRecord"></a>
# **fileRecord**
> RecordEntry fileRecord(recordIdnodeBodyFile, opts)

File a record

Files the record **recordId** in the target record folder.  You need to specify the target record folder by providing its id **targetParentId**  If the record is already filed, a link to the target record folder is created.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var recordId = "recordId_example"; // String | The identifier of a record.

var nodeBodyFile = new AlfrescoGovernanceServicesRestApi.RequestBodyFile(); // RequestBodyFile | The target record folder id

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordsApi.fileRecord(recordIdnodeBodyFile, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | **String**| The identifier of a record. | 
 **nodeBodyFile** | [**RequestBodyFile**](RequestBodyFile.md)| The target record folder id | 
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecord"></a>
# **getRecord**
> RecordEntry getRecord(recordId, opts)

Get a record

Gets information for record **recordId**  Mandatory fields and the record&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var recordId = "recordId_example"; // String | The identifier of a record.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordsApi.getRecord(recordId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | **String**| The identifier of a record. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecordContent"></a>
# **getRecordContent**
> getRecordContent(recordId, opts)

Get record content

 Gets the content of the record with identifier **recordId**. 

### Example
```javascript

var recordId = "recordId_example"; // String | The identifier of a record.

var opts = { 
  'attachment': true, // Boolean | **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. 
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. 
};
this.alfrescoJsApi.gsCore.recordsApi.getRecordContent(recordId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | **String**| The identifier of a record. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRecord"></a>
# **updateRecord**
> RecordEntry updateRecord(recordIdrecordBodyUpdate, opts)

Update record

Updates the record **recordId**. For example, you can rename a record: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:title\&quot;:\&quot;New title\&quot;,        \&quot;cm:description\&quot;:\&quot;New description\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /records/{recordId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order. 

### Example
```javascript

var recordId = "recordId_example"; // String | The identifier of a record.

var recordBodyUpdate = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate(); // FilePlanComponentBodyUpdate | The record information to update.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordsApi.updateRecord(recordIdrecordBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | **String**| The identifier of a record. | 
 **recordBodyUpdate** | [**FilePlanComponentBodyUpdate**](FilePlanComponentBodyUpdate.md)| The record information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

