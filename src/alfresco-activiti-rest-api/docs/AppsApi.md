# ActivitiPublicRestApi.AppsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAppDefinitionsUsingPOST**](AppsApi.md#deployAppDefinitionsUsingPOST) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
[**exportAppDefinitionUsingGET**](AppsApi.md#exportAppDefinitionUsingGET) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
[**getAppDefinitionsUsingGET**](AppsApi.md#getAppDefinitionsUsingGET) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps
[**importAppDefinitionUsingPOST**](AppsApi.md#importAppDefinitionUsingPOST) | **POST** /api/enterprise/app-definitions/import | Import App Definition
[**importAppDefinitionUsingPOST1**](AppsApi.md#importAppDefinitionUsingPOST1) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
[**publishAppDefinitionUsingPOST**](AppsApi.md#publishAppDefinitionUsingPOST) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App


<a name="deployAppDefinitionsUsingPOST"></a>
# **deployAppDefinitionsUsingPOST**
> deployAppDefinitionsUsingPOST(saveObject)

Deploy published app

After creating and puclished an app the user can add it to his/her landing page.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsApi();

var saveObject = new ActivitiPublicRestApi.RuntimeAppDefinitionSaveRepresentation(); // RuntimeAppDefinitionSaveRepresentation | saveObject


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deployAppDefinitionsUsingPOST(saveObject, callback);
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

<a name="exportAppDefinitionUsingGET"></a>
# **exportAppDefinitionUsingGET**
> exportAppDefinitionUsingGET(modelId)

Export App Definition

This will return a zip file containing the app definition model and all related models (process definitions and forms).

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsApi();

var modelId = 789; // Integer | modelId from a runtime app or the id of an app definition model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.exportAppDefinitionUsingGET(modelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId from a runtime app or the id of an app definition model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDefinitionsUsingGET"></a>
# **getAppDefinitionsUsingGET**
> ResultListDataRepresentation getAppDefinitionsUsingGET()

List runtime apps

When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppDefinitionsUsingGET(callback);
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

<a name="importAppDefinitionUsingPOST"></a>
# **importAppDefinitionUsingPOST**
> AppDefinitionRepresentation importAppDefinitionUsingPOST(file)

Import App Definition

This is useful to bootstrap an environment (for users or continous integration).

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsApi();

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importAppDefinitionUsingPOST(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| file | 

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="importAppDefinitionUsingPOST1"></a>
# **importAppDefinitionUsingPOST1**
> AppDefinitionRepresentation importAppDefinitionUsingPOST1(modelId, file)

Import App

To import an app to an existing app definition to create a new version instead of importing a new app definition.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsApi();

var modelId = 789; // Integer | modelId

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importAppDefinitionUsingPOST1(modelId, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **file** | **File**| file | 

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="publishAppDefinitionUsingPOST"></a>
# **publishAppDefinitionUsingPOST**
> AppDefinitionUpdateResultRepresentation publishAppDefinitionUsingPOST(modelId, publishModel)

Publish App

Before an app model can be used, it need to be published

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsApi();

var modelId = 789; // Integer | modelId

var publishModel = new ActivitiPublicRestApi.AppDefinitionPublishRepresentation(); // AppDefinitionPublishRepresentation | publishModel


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publishAppDefinitionUsingPOST(modelId, publishModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **publishModel** | [**AppDefinitionPublishRepresentation**](AppDefinitionPublishRepresentation.md)| publishModel | 

### Return type

[**AppDefinitionUpdateResultRepresentation**](AppDefinitionUpdateResultRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

