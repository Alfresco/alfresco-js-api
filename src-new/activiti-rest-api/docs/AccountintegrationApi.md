# .AccountintegrationApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsUsingGET**](AccountintegrationApi.md#getAccountsUsingGET) | **GET** /enterprise/account/integration | Retrieve external account information


<a name="getAccountsUsingGET"></a>
# **getAccountsUsingGET**
> ResultListDataRepresentationAccountRepresentation getAccountsUsingGET()

Retrieve external account information

Accounts are used to integrate with third party apps and clients

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AccountintegrationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationAccountRepresentation**](ResultListDataRepresentationAccountRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

