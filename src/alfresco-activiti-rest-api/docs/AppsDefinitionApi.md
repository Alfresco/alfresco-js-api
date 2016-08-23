# ActivitiPublicRestApi.AppsDefinitionApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportAppDefinition**](AppsDefinitionApi.md#exportAppDefinition) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
[**importAppDefinition**](AppsDefinitionApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/import | Import App Definition
[**importAppDefinition**](AppsDefinitionApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
[**publishAppDefinition**](AppsDefinitionApi.md#publishAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App


<a name="exportAppDefinition"></a>
# **exportAppDefinition**
> exportAppDefinition(modelId)

Export App Definition

This will return a zip file containing the app definition model and all related models (process definitions and forms).

### Example
```javascript

var modelId = 789; // Integer | modelId from a runtime app or the id of an app definition model

this.alfrescoJsApi.activiti.appsDefinitionApi.exportAppDefinition(modelId);
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

<a name="importAppDefinition"></a>
# **importAppDefinition**
> AppDefinitionRepresentation importAppDefinition(file)

Import App Definition

This is useful to bootstrap an environment (for users or continous integration).

### Example
```javascript

var file = "/path/to/file.txt"; // File | file

this.alfrescoJsApi.activiti.appsDefinitionApi.importAppDefinition(file);
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

this.alfrescoJsApi.activiti.appsDefinitionApi.importAppDefinition(modelId, file);
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

this.alfrescoJsApi.activiti.appsDefinitionApi.publishAppDefinition(modelId, publishModel);
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

