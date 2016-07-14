# ActivitiPublicRestApi.ModelsHistoryApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModelHistoryCollectionUsingGET**](ModelsHistoryApi.md#getModelHistoryCollectionUsingGET) | **GET** /api/enterprise/models/{modelId}/history | To get the version information for a model
[**getProcessModelHistoryUsingGET**](ModelsHistoryApi.md#getProcessModelHistoryUsingGET) | **GET** /api/enterprise/models/{modelId}/history/{modelHistoryId} | To get a particular older version of a model


<a name="getModelHistoryCollectionUsingGET"></a>
# **getModelHistoryCollectionUsingGET**
> ResultListDataRepresentation getModelHistoryCollectionUsingGET(modelId, opts)

To get the version information for a model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsHistoryApi();

var modelId = 789; // Integer | modelId

var opts = { 
  'includeLatestVersion': true // Boolean | includeLatestVersion
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelHistoryCollectionUsingGET(modelId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **includeLatestVersion** | **Boolean**| includeLatestVersion | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessModelHistoryUsingGET"></a>
# **getProcessModelHistoryUsingGET**
> ModelRepresentation getProcessModelHistoryUsingGET(modelId, modelHistoryId)

To get a particular older version of a model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsHistoryApi();

var modelId = 789; // Integer | modelId

var modelHistoryId = 789; // Integer | modelHistoryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessModelHistoryUsingGET(modelId, modelHistoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **modelHistoryId** | **Integer**| modelHistoryId | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

