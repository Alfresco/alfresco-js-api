# ActivitiPublicRestApi.IntegrationBoxApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisation**](IntegrationBoxApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
[**createRepositoryAccount**](IntegrationBoxApi.md#createRepositoryAccount) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
[**deleteRepositoryAccount**](IntegrationBoxApi.md#deleteRepositoryAccount) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
[**getBoxPluginStatus**](IntegrationBoxApi.md#getBoxPluginStatus) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
[**getFiles**](IntegrationBoxApi.md#getFiles) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
[**getRepositoryAccount**](IntegrationBoxApi.md#getRepositoryAccount) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
[**updateRepositoryAccount**](IntegrationBoxApi.md#updateRepositoryAccount) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account


<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Box Authorization

Returns Box Oauth HTML Page

### Example
```javascript

var code = "code_example"; // String | code

this.alfrescoJsApi.activiti.integrationBoxApi.confirmAuthorisation(code);
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

<a name="createRepositoryAccount"></a>
# **createRepositoryAccount**
> createRepositoryAccount(userId, credentials)

Create Box account

### Example
```javascript

var userId = 789; // Integer | userId

var credentials = new this.alfrescoJsApi.activiti.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials

this.alfrescoJsApi.activiti.integrationBoxApi.createRepositoryAccount(userId, credentials);
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

<a name="deleteRepositoryAccount"></a>
# **deleteRepositoryAccount**
> deleteRepositoryAccount(userId)

Delete Box account

### Example
```javascript

var userId = 789; // Integer | userId

this.alfrescoJsApi.activiti.integrationBoxApi.deleteRepositoryAccount(userId);
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

<a name="getBoxPluginStatus"></a>
# **getBoxPluginStatus**
> &#39;Boolean&#39; getBoxPluginStatus()

Retrieve if Box Integration is enabled

### Example
```javascript

this.alfrescoJsApi.activiti.integrationBoxApi.getBoxPluginStatus();
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

<a name="getFiles"></a>
# **getFiles**
> ResultListDataRepresentation getFiles(opts)

List file &amp; folders

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example" // String | parent
};

this.alfrescoJsApi.activiti.integrationBoxApi.getFiles(opts);
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

<a name="getRepositoryAccount"></a>
# **getRepositoryAccount**
> BoxUserAccountCredentialsRepresentation getRepositoryAccount(userId)

List Box Account

### Example
```javascript

var userId = 789; // Integer | userId

this.alfrescoJsApi.activiti.integrationBoxApi.getRepositoryAccount(userId);
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

<a name="updateRepositoryAccount"></a>
# **updateRepositoryAccount**
> updateRepositoryAccount(userId, credentials)

Update Box account

### Example
```javascript

var userId = 789; // Integer | userId

var credentials = new this.alfrescoJsApi.activiti.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials

this.alfrescoJsApi.activiti.integrationBoxApi.updateRepositoryAccount(userId, credentials);
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

