# ActivitiPublicRestApi.AppsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAppDefinitions**](AppsApi.md#deployAppDefinitions) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
[**exportAppDefinition**](AppsApi.md#exportAppDefinition) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
[**getAppDefinitions**](AppsApi.md#getAppDefinitions) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps
[**importAppDefinition**](AppsApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/import | Import App Definition
[**importAppDefinition**](AppsApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
[**publishAppDefinition**](AppsApi.md#publishAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App


<a name="deployAppDefinitions"></a>
# **deployAppDefinitions**
> deployAppDefinitions(saveObject)

Deploy published app

After creating and puclished an app the user can add it to his/her landing page.

### Example
```javascript

var saveObject = new this.alfrescoJsApi.activiti.RuntimeAppDefinitionSaveRepresentation(); // RuntimeAppDefinitionSaveRepresentation | saveObject

this.alfrescoJsApi.activiti.appsApi.deployAppDefinitions(saveObject);
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

<a name="exportAppDefinition"></a>
# **exportAppDefinition**
> exportAppDefinition(modelId)

Export App Definition

This will return a zip file containing the app definition model and all related models (process definitions and forms).

### Example
```javascript

var modelId = 789; // Integer | modelId from a runtime app or the id of an app definition model

this.alfrescoJsApi.activiti.appsApi.exportAppDefinition(modelId);
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

<a name="getAppDefinitions"></a>
# **getAppDefinitions**
> ResultListDataRepresentation getAppDefinitions()

List runtime apps

When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.

### Example
```javascript

this.alfrescoJsApi.activiti.appsApi.getAppDefinitions();
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

<a name="importAppDefinition"></a>
# **importAppDefinition**
> AppDefinitionRepresentation importAppDefinition(file)

Import App Definition

This is useful to bootstrap an environment (for users or continous integration).

### Example
```javascript

var file = "/path/to/file.txt"; // File | file

this.alfrescoJsApi.activiti.appsApi.importAppDefinition(file);
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

<a name="importAppDefinition"></a>
# **importAppDefinition**
> AppDefinitionRepresentation importAppDefinition(modelId, file)

Import App

To import an app to an existing app definition to create a new version instead of importing a new app definition.

### Example
```javascript

var modelId = 789; // Integer | modelId

var file = "/path/to/file.txt"; // File | file

this.alfrescoJsApi.activiti.appsApi.importAppDefinition(modelId, file);
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

<a name="publishAppDefinition"></a>
# **publishAppDefinition**
> AppDefinitionUpdateResultRepresentation publishAppDefinition(modelId, publishModel)

Publish App

Before an app model can be used, it need to be published

### Example
```javascript

var modelId = 789; // Integer | modelId

var publishModel = new this.alfrescoJsApi.activiti.AppDefinitionPublishRepresentation(); // AppDefinitionPublishRepresentation | publishModel

this.alfrescoJsApi.activiti.appsApi.publishAppDefinition(modelId, publishModel);
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

