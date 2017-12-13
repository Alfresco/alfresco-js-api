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
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.FilesApi()

var fileId = "fileId_example"; // {String} The identifier of a non-record file.

var opts = { 
  'hideRecord': false, // {Boolean} Flag to indicate whether the record should be hidden from the current parent folder.
  'include': ["include_example"], // {[String]} Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.declareRecord(fileId, opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

