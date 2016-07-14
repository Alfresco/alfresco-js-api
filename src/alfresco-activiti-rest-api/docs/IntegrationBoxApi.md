# ActivitiPublicRestApi.IntegrationBoxApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET1**](IntegrationBoxApi.md#confirmAuthorisationUsingGET1) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
[**createRepositoryAccountUsingPOST**](IntegrationBoxApi.md#createRepositoryAccountUsingPOST) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
[**deleteRepositoryAccountUsingDELETE**](IntegrationBoxApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
[**getBoxPluginStatusUsingGET**](IntegrationBoxApi.md#getBoxPluginStatusUsingGET) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
[**getFilesUsingGET**](IntegrationBoxApi.md#getFilesUsingGET) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
[**getRepositoryAccountUsingGET**](IntegrationBoxApi.md#getRepositoryAccountUsingGET) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
[**updateRepositoryAccountUsingPUT**](IntegrationBoxApi.md#updateRepositoryAccountUsingPUT) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account


<a name="confirmAuthorisationUsingGET1"></a>
# **confirmAuthorisationUsingGET1**
> confirmAuthorisationUsingGET1(code)

Box Authorization

Returns Box Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

var code = "code_example"; // String | code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET1(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| code | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html, application/json

<a name="createRepositoryAccountUsingPOST"></a>
# **createRepositoryAccountUsingPOST**
> createRepositoryAccountUsingPOST(userId, credentials)

Create Box account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

var userId = 789; // Integer | userId

var credentials = new ActivitiPublicRestApi.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRepositoryAccountUsingPOST(userId, credentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRepositoryAccountUsingDELETE"></a>
# **deleteRepositoryAccountUsingDELETE**
> deleteRepositoryAccountUsingDELETE(userId)

Delete Box account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

var userId = 789; // Integer | userId


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
 **userId** | **Integer**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBoxPluginStatusUsingGET"></a>
# **getBoxPluginStatusUsingGET**
> &#39;Boolean&#39; getBoxPluginStatusUsingGET()

Retrieve if Box Integration is enabled

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

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

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFilesUsingGET"></a>
# **getFilesUsingGET**
> ResultListDataRepresentation getFilesUsingGET(opts)

List file &amp; folders

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example" // String | parent
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
 **filter** | **String**| filter | [optional] 
 **parent** | **String**| parent | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRepositoryAccountUsingGET"></a>
# **getRepositoryAccountUsingGET**
> BoxUserAccountCredentialsRepresentation getRepositoryAccountUsingGET(userId)

List Box Account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRepositoryAccountUsingGET(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 

### Return type

[**BoxUserAccountCredentialsRepresentation**](BoxUserAccountCredentialsRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRepositoryAccountUsingPUT"></a>
# **updateRepositoryAccountUsingPUT**
> updateRepositoryAccountUsingPUT(userId, credentials)

Update Box account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationBoxApi();

var userId = 789; // Integer | userId

var credentials = new ActivitiPublicRestApi.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRepositoryAccountUsingPUT(userId, credentials, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

