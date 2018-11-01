# .DatasourcesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataSourcesUsingGET**](DatasourcesApi.md#getDataSourcesUsingGET) | **GET** /enterprise/editor/data-sources | Get data sources


<a name="getDataSourcesUsingGET"></a>
# **getDataSourcesUsingGET**
> ResultListDataRepresentationDataSourceRepresentation getDataSourcesUsingGET(opts)

Get data sources

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DatasourcesApi();

var opts = { 
  'tenantId': 789 // number | tenantId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataSourcesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | [optional] 

### Return type

[**ResultListDataRepresentationDataSourceRepresentation**](ResultListDataRepresentationDataSourceRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

