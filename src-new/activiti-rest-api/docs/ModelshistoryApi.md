# .ModelshistoryApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModelHistoryCollectionUsingGET**](ModelshistoryApi.md#getModelHistoryCollectionUsingGET) | **GET** /enterprise/models/{modelId}/history | List a model&#39;s historic versions
[**getProcessModelHistoryUsingGET**](ModelshistoryApi.md#getProcessModelHistoryUsingGET) | **GET** /enterprise/models/{modelId}/history/{modelHistoryId} | Get a historic version of a model


<a name="getModelHistoryCollectionUsingGET"></a>
# **getModelHistoryCollectionUsingGET**
> ResultListDataRepresentationModelRepresentation getModelHistoryCollectionUsingGET(modelIdopts)

List a model&#39;s historic versions

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelshistoryApi();

var opts = { 
  'includeLatestVersion': true // boolean | includeLatestVersion
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelHistoryCollectionUsingGET(modelIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **includeLatestVersion** | **boolean**| includeLatestVersion | [optional] 

### Return type

[**ResultListDataRepresentationModelRepresentation**](ResultListDataRepresentationModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessModelHistoryUsingGET"></a>
# **getProcessModelHistoryUsingGET**
> ModelRepresentation getProcessModelHistoryUsingGET(modelIdmodelHistoryId)

Get a historic version of a model

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelshistoryApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessModelHistoryUsingGET(modelIdmodelHistoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **modelHistoryId** | **number**| modelHistoryId | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

