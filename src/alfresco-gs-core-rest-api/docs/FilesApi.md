# AlfrescoGovernanceServicesRestApi.FilesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**declareRecord**](FilesApi.md#declareRecord) | **POST** /files/{fileId}/declare | Declare as record


<a name="declareRecord"></a>
# **declareRecord**
> RecordEntry declareRecord(fileId, opts)

Declare as record

Declares the file **fileId** in the unfiled records container. The original file is moved to the Records Management site and a secondary parent association is created in the file&#39;s original site.

### Example
```javascript

var fileId = "fileId_example"; // String | The identifier of a non-record file.

var opts = { 
  'hideRecord': false, // Boolean | Flag to indicate whether the record should be hidden from the current parent folder.
  'include': ["include_example"], // [String] | Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.filesApi.declareRecord(fileId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| The identifier of a non-record file. | 
 **hideRecord** | **Boolean**| Flag to indicate whether the record should be hidden from the current parent folder. | [optional] [default to false]
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

