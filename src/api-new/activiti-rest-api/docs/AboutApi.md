# .AboutApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppVersionUsingGET**](AboutApi.md#getAppVersionUsingGET) | **GET** /enterprise/app-version | Get server type and version


<a name="getAppVersionUsingGET"></a>
# **getAppVersionUsingGET**
> { [key: string]: string; } getAppVersionUsingGET()

Get server type and version

Provides information about the running Alfresco Process Services Suite. The response payload object has the properties type, majorVersion, minorVersion, revisionVersion and edition.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AboutApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppVersionUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**{ [key: string]: string; }**](Map.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

