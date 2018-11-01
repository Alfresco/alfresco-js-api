# .IntegrationboxApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET1**](IntegrationboxApi.md#confirmAuthorisationUsingGET1) | **GET** /enterprise/integration/box/confirm-auth-request | Box Authorization
[**createRepositoryAccountUsingPOST**](IntegrationboxApi.md#createRepositoryAccountUsingPOST) | **POST** /enterprise/integration/box/{userId}/account | Add Box account
[**deleteRepositoryAccountUsingDELETE**](IntegrationboxApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /enterprise/integration/box/{userId}/account | Delete account information
[**getBoxPluginStatusUsingGET**](IntegrationboxApi.md#getBoxPluginStatusUsingGET) | **GET** /enterprise/integration/box/status | Get status information
[**getFilesUsingGET**](IntegrationboxApi.md#getFilesUsingGET) | **GET** /enterprise/integration/box/files | List file and folders
[**getRepositoryAccountUsingGET**](IntegrationboxApi.md#getRepositoryAccountUsingGET) | **GET** /enterprise/integration/box/{userId}/account | Get account information
[**updateRepositoryAccountUsingPUT**](IntegrationboxApi.md#updateRepositoryAccountUsingPUT) | **PUT** /enterprise/integration/box/{userId}/account | Update account information


<a name="confirmAuthorisationUsingGET1"></a>
# **confirmAuthorisationUsingGET1**
> confirmAuthorisationUsingGET1()

Box Authorization

Returns Box OAuth HTML Page

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

<a name="createRepositoryAccountUsingPOST"></a>
# **createRepositoryAccountUsingPOST**
> createRepositoryAccountUsingPOST(userIdcredentials)

Add Box account

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRepositoryAccountUsingPOST(userIdcredentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteRepositoryAccountUsingDELETE"></a>
# **deleteRepositoryAccountUsingDELETE**
> deleteRepositoryAccountUsingDELETE(userId)

Delete account information

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRepositoryAccountUsingDELETE(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getBoxPluginStatusUsingGET"></a>
# **getBoxPluginStatusUsingGET**
> boolean getBoxPluginStatusUsingGET()

Get status information

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBoxPluginStatusUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**boolean**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getFilesUsingGET"></a>
# **getFilesUsingGET**
> ResultListDataRepresentationBoxContent getFilesUsingGET(opts)

List file and folders

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();

var opts = { 
  'filter': filter_example // string | filter
  'parent': parent_example // string | parent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **parent** | **string**| parent | [optional] 

### Return type

[**ResultListDataRepresentationBoxContent**](ResultListDataRepresentationBoxContent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getRepositoryAccountUsingGET"></a>
# **getRepositoryAccountUsingGET**
> getRepositoryAccountUsingGET(userId)

Get account information

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRepositoryAccountUsingGET(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateRepositoryAccountUsingPUT"></a>
# **updateRepositoryAccountUsingPUT**
> updateRepositoryAccountUsingPUT(userIdcredentials)

Update account information

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationboxApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRepositoryAccountUsingPUT(userIdcredentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

