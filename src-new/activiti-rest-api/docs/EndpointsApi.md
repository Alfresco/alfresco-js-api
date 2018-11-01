# .EndpointsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEndpointConfigurationUsingGET**](EndpointsApi.md#getEndpointConfigurationUsingGET) | **GET** /enterprise/editor/endpoints/{endpointConfigurationId} | Get an endpoint configuration
[**getEndpointConfigurationsUsingGET**](EndpointsApi.md#getEndpointConfigurationsUsingGET) | **GET** /enterprise/editor/endpoints | List endpoint configurations


<a name="getEndpointConfigurationUsingGET"></a>
# **getEndpointConfigurationUsingGET**
> EndpointConfigurationRepresentation getEndpointConfigurationUsingGET(endpointConfigurationId)

Get an endpoint configuration

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .EndpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointConfigurationUsingGET(endpointConfigurationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEndpointConfigurationsUsingGET"></a>
# **getEndpointConfigurationsUsingGET**
> any getEndpointConfigurationsUsingGET()

List endpoint configurations

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .EndpointsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointConfigurationsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**any**](EndpointConfigurationRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

