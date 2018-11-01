# .DiscoveryApi

All URIs are relative to *https://localhost/alfresco/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRepositoryInformation**](DiscoveryApi.md#getRepositoryInformation) | **GET** /discovery | Get repository information


<a name="getRepositoryInformation"></a>
# **getRepositoryInformation**
> DiscoveryEntry getRepositoryInformation()

Get repository information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Retrieves the capabilities and detailed version information from the repository.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DiscoveryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRepositoryInformation(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DiscoveryEntry**](DiscoveryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

