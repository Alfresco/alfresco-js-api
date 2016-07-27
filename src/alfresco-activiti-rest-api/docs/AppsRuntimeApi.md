# ActivitiPublicRestApi.AppsRuntimeApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAppDefinitions**](AppsRuntimeApi.md#deployAppDefinitions) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
[**getAppDefinitions**](AppsRuntimeApi.md#getAppDefinitions) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps


<a name="deployAppDefinitions"></a>
# **deployAppDefinitions**
> deployAppDefinitions(saveObject)

Deploy published app

After creating and puclished an app the user can add it to his/her landing page.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsRuntimeApi();

var saveObject = new ActivitiPublicRestApi.RuntimeAppDefinitionSaveRepresentation(); // RuntimeAppDefinitionSaveRepresentation | saveObject

apiInstance.deployAppDefinitions(saveObject);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveObject** | [**RuntimeAppDefinitionSaveRepresentation**](RuntimeAppDefinitionSaveRepresentation.md)| saveObject | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDefinitions"></a>
# **getAppDefinitions**
> ResultListDataRepresentation getAppDefinitions()

List runtime apps

When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsRuntimeApi();

apiInstance.getAppDefinitions();
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

