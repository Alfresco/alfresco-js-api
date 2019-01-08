# ActivitiPublicRestApi.ModelsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModel**](ModelsApi.md#createModel) | **POST** /api/enterprise/models | To create a new model
[**deleteModel**](ModelsApi.md#deleteModel) | **DELETE** /api/enterprise/models/{modelId} | Delete a model
[**duplicateModel**](ModelsApi.md#duplicateModel) | **POST** /api/enterprise/models/{modelId}/clone | To duplicate an existing model
[**getModelJSON**](ModelsApi.md#getModelJSON) | **GET** /api/enterprise/models/{modelId}/editor/json | Get the JSON model
[**getModelThumbnail**](ModelsApi.md#getModelThumbnail) | **GET** /api/enterprise/models/{modelId}/thumbnail | Get Model thumbnail
[**getModel**](ModelsApi.md#getModel) | **GET** /api/enterprise/models/{modelId} | To retrieve details about a particular model (process, form, decision rule or app)
[**getModelsToIncludeInAppDefinition**](ModelsApi.md#getModelsToIncludeInAppDefinition) | **GET** /api/enterprise/models-for-app-definition | TODO
[**getModels**](ModelsApi.md#getModels) | **GET** /api/enterprise/models | List models (process, form, decision rule or app)
[**importNewVersion**](ModelsApi.md#importNewVersion) | **POST** /api/enterprise/models/{modelId}/newversion | Create a new model version
[**importProcessModel**](ModelsApi.md#importProcessModel) | **POST** /api/enterprise/process-models/import | To import a BPMN 2.0 xml file
[**saveModel**](ModelsApi.md#saveModel) | **POST** /api/enterprise/models/{modelId}/editor/json | Save the JSON model
[**updateModel**](ModelsApi.md#updateModel) | **PUT** /api/enterprise/models/{modelId} | Edit a specific model
[**validateModel**](ModelsApi.md#validateModel) | **POST** /api/enterprise/models/{modelId}/editor/validate | Validate the JSON model


<a name="createModel"></a>
# **createModel**
> ModelRepresentation createModel(modelRepresentation)

To create a new model

### Example
```javascript

var modelRepresentation = new this.alfrescoJsApi.activiti.ModelRepresentation(); // ModelRepresentation | modelRepresentation

this.alfrescoJsApi.activiti.modelsApi.createModel(modelRepresentation);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelRepresentation** | [**ModelRepresentation**](ModelRepresentation.md)| modelRepresentation | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteModel"></a>
# **deleteModel**
> deleteModel(modelId, opts)

Delete a model

### Example
```javascript

var modelId = 789; // Integer | modelId

var opts = { 
  'cascade': true, // Boolean | cascade
  'deleteRuntimeApp': true // Boolean | deleteRuntimeApp
};

this.alfrescoJsApi.activiti.modelsApi.deleteModel(modelId, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **cascade** | **Boolean**| cascade | [optional] 
 **deleteRuntimeApp** | **Boolean**| deleteRuntimeApp | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="duplicateModel"></a>
# **duplicateModel**
> ModelRepresentation duplicateModel(modelId, modelRepresentation)

To duplicate an existing model

### Example
```javascript

var modelId = 789; // Integer | modelId

var modelRepresentation = new this.alfrescoJsApi.activiti.ModelRepresentation(); // ModelRepresentation | modelRepresentation


this.alfrescoJsApi.activiti.modelsApi.duplicateModel(modelId, modelRepresentation);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **modelRepresentation** | [**ModelRepresentation**](ModelRepresentation.md)| modelRepresentation | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelJSON"></a>
# **getModelJSON**
> ObjectNode getModelJSON(modelId)

Get the JSON model

### Example
```javascript

var modelId = 789; // Integer | modelId


this.alfrescoJsApi.activiti.modelsApi.getModelJSON(modelId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 

### Return type

[**ObjectNode**](ObjectNode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelThumbnail"></a>
# **getModelThumbnail**
> [&#39;String&#39;] getModelThumbnail(modelId)

Get Model thumbnail

### Example
```javascript

var modelId = 789; // Integer | modelId

this.alfrescoJsApi.activiti.modelsApi.getModelThumbnail(modelId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png, application/json

<a name="getModel"></a>
# **getModel**
> ModelRepresentation getModel(modelId, opts)

To retrieve details about a particular model (process, form, decision rule or app)

### Example
```javascript

var modelId = 789; // Integer | modelId

var opts = { 
  'includePermissions': true // Boolean | includePermissions
};

this.alfrescoJsApi.activiti.modelsApi.getModel(modelId, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **includePermissions** | **Boolean**| includePermissions | [optional] 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelsToIncludeInAppDefinition"></a>
# **getModelsToIncludeInAppDefinition**
> ResultListDataRepresentation getModelsToIncludeInAppDefinition()

TODO

### Example
```javascript

this.alfrescoJsApi.activiti.modelsApi.getModelsToIncludeInAppDefinition();
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

<a name="getModels"></a>
# **getModels**
> ResultListDataRepresentation getModels(opts)

List models (process, form, decision rule or app)

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'filterText': "filterText", // String | filterText
  'sort': "sort_example", // String | sort
  'modelType': 56, // Integer | modelType
  'referenceId': 789 // Integer | referenceId
};

this.alfrescoJsApi.activiti.modelsApi.getModels(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **sort** | **String**| sort | [optional] 
 **modelType** | **Integer**| modelType | [optional] 
 **referenceId** | **Integer**| referenceId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importNewVersion"></a>
# **importNewVersion**
> ModelRepresentation importNewVersion(modelId, file)

Create a new model version

### Example
```javascript

var modelId = 789; // Integer | modelId

var file = "/path/to/file.txt"; // File | file

this.alfrescoJsApi.activiti.modelsApi.importNewVersion(modelId, file);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **file** | **File**| file | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="importProcessModel"></a>
# **importProcessModel**
> ModelRepresentation importProcessModel(file)

To import a BPMN 2.0 xml file

### Example
```javascript

var file = "/path/to/file.txt"; // File | file

this.alfrescoJsApi.activiti.modelsApi.importProcessModel(file);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| file | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="saveModel"></a>
# **saveModel**
> ModelRepresentation saveModel(modelId, values)

Save the JSON model

### Example
```javascript

var modelId = 789; // Integer | modelId

var values = null; // Object | values

this.alfrescoJsApi.activiti.modelsApi.saveModel(modelId, values);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **values** | **Object**| values | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateModel"></a>
# **updateModel**
> ModelRepresentation updateModel(modelId, updatedModel)

Edit a specific model

### Example
```javascript

var modelId = 789; // Integer | modelId

var updatedModel = new this.alfrescoJsApi.activiti.ModelRepresentation(); // ModelRepresentation | updatedModel

this.alfrescoJsApi.activiti.modelsApi.updateModel(modelId, updatedModel);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **updatedModel** | [**ModelRepresentation**](ModelRepresentation.md)| updatedModel | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateModel"></a>
# **validateModel**
> [ValidationErrorRepresentation] validateModel(modelId, opts)

Validate the JSON model

### Example
```javascript

var modelId = 789; // Integer | modelId

var opts = { 
  'values': null // Object | values
};

this.alfrescoJsApi.activiti.modelsApi.validateModel(modelId, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **values** | **Object**| values | [optional] 

### Return type

[**[ValidationErrorRepresentation]**](ValidationErrorRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

