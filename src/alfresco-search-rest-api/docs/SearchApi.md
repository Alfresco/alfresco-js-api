# AlfrescoContentServicesRestApi.SearchApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/search/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **POST** /search | Searches Alfresco


<a name="search"></a>
# **search**
> ResultSetPaging search(queryBody)

Searches Alfresco


### Example
```javascript
var AlfrescoContentServicesRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoContentServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoContentServicesRestApi.SearchApi();

var queryBody = new AlfrescoContentServicesRestApi.QueryBody(); // QueryBody | Generic query API 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.search(queryBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryBody** | [**QueryBody**](QueryBody.md)| Generic query API  | 

### Return type

[**ResultSetPaging**](ResultSetPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

