# ActivitiPublicRestApi.ModelsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModelUsingPOST**](ModelsApi.md#createModelUsingPOST) | **POST** /api/enterprise/models | To create a new model
[**deleteModelUsingDELETE**](ModelsApi.md#deleteModelUsingDELETE) | **DELETE** /api/enterprise/models/{modelId} | Delete a model
[**duplicateModelUsingPOST**](ModelsApi.md#duplicateModelUsingPOST) | **POST** /api/enterprise/models/{modelId}/clone | To duplicate an existing model
[**getModelJSONUsingGET**](ModelsApi.md#getModelJSONUsingGET) | **GET** /api/enterprise/models/{modelId}/editor/json | Get the JSON model
[**getModelThumbnailUsingGET**](ModelsApi.md#getModelThumbnailUsingGET) | **GET** /api/enterprise/models/{modelId}/thumbnail | Get Model thumbnail
[**getModelUsingGET**](ModelsApi.md#getModelUsingGET) | **GET** /api/enterprise/models/{modelId} | To retrieve details about a particular model (process, form, decision rule or app)
[**getModelsToIncludeInAppDefinitionUsingGET**](ModelsApi.md#getModelsToIncludeInAppDefinitionUsingGET) | **GET** /api/enterprise/models-for-app-definition | TODO
[**getModelsUsingGET**](ModelsApi.md#getModelsUsingGET) | **GET** /api/enterprise/models | List models (process, form, decision rule or app)
[**importNewVersionUsingPOST**](ModelsApi.md#importNewVersionUsingPOST) | **POST** /api/enterprise/models/{modelId}/newversion | Create a new model version
[**importProcessModelUsingPOST**](ModelsApi.md#importProcessModelUsingPOST) | **POST** /api/enterprise/process-models/import | To import a BPMN 2.0 xml file
[**saveModelUsingPOST**](ModelsApi.md#saveModelUsingPOST) | **POST** /api/enterprise/models/{modelId}/editor/json | Save the JSON model
[**updateModelUsingPUT**](ModelsApi.md#updateModelUsingPUT) | **PUT** /api/enterprise/models/{modelId} | Edit a specific model
[**validateModelUsingPOST**](ModelsApi.md#validateModelUsingPOST) | **POST** /api/enterprise/models/{modelId}/editor/validate | Validate the JSON model


<a name="createModelUsingPOST"></a>
# **createModelUsingPOST**
> ModelRepresentation createModelUsingPOST(modelRepresentation)

To create a new model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelRepresentation = new ActivitiPublicRestApi.ModelRepresentation(); // ModelRepresentation | modelRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createModelUsingPOST(modelRepresentation, callback);
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

<a name="deleteModelUsingDELETE"></a>
# **deleteModelUsingDELETE**
> deleteModelUsingDELETE(modelId, opts)

Delete a model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var opts = { 
  'cascade': true, // Boolean | cascade
  'deleteRuntimeApp': true // Boolean | deleteRuntimeApp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteModelUsingDELETE(modelId, opts, callback);
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

<a name="duplicateModelUsingPOST"></a>
# **duplicateModelUsingPOST**
> ModelRepresentation duplicateModelUsingPOST(modelId, modelRepresentation)

To duplicate an existing model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var modelRepresentation = new ActivitiPublicRestApi.ModelRepresentation(); // ModelRepresentation | modelRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.duplicateModelUsingPOST(modelId, modelRepresentation, callback);
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

<a name="getModelJSONUsingGET"></a>
# **getModelJSONUsingGET**
> ObjectNode getModelJSONUsingGET(modelId)

Get the JSON model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelJSONUsingGET(modelId, callback);
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

<a name="getModelThumbnailUsingGET"></a>
# **getModelThumbnailUsingGET**
> [&#39;String&#39;] getModelThumbnailUsingGET(modelId)

Get Model thumbnail

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelThumbnailUsingGET(modelId, callback);
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

<a name="getModelUsingGET"></a>
# **getModelUsingGET**
> ModelRepresentation getModelUsingGET(modelId, opts)

To retrieve details about a particular model (process, form, decision rule or app)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var opts = { 
  'includePermissions': true // Boolean | includePermissions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelUsingGET(modelId, opts, callback);
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

<a name="getModelsToIncludeInAppDefinitionUsingGET"></a>
# **getModelsToIncludeInAppDefinitionUsingGET**
> ResultListDataRepresentation getModelsToIncludeInAppDefinitionUsingGET()

TODO

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelsToIncludeInAppDefinitionUsingGET(callback);
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

<a name="getModelsUsingGET"></a>
# **getModelsUsingGET**
> ResultListDataRepresentation getModelsUsingGET(opts)

List models (process, form, decision rule or app)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var opts = { 
  'filter': "filter_example", // String | filter
  'sort': "sort_example", // String | sort
  'modelType': 56, // Integer | modelType
  'referenceId': 789 // Integer | referenceId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelsUsingGET(opts, callback);
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

<a name="importNewVersionUsingPOST"></a>
# **importNewVersionUsingPOST**
> ModelRepresentation importNewVersionUsingPOST(modelId, file)

Create a new model version

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importNewVersionUsingPOST(modelId, file, callback);
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

<a name="importProcessModelUsingPOST"></a>
# **importProcessModelUsingPOST**
> ModelRepresentation importProcessModelUsingPOST(file)

To import a BPMN 2.0 xml file

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importProcessModelUsingPOST(file, callback);
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

<a name="saveModelUsingPOST"></a>
# **saveModelUsingPOST**
> ModelRepresentation saveModelUsingPOST(modelId, values)

Save the JSON model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var values = null; // Object | values


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveModelUsingPOST(modelId, values, callback);
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

<a name="updateModelUsingPUT"></a>
# **updateModelUsingPUT**
> ModelRepresentation updateModelUsingPUT(modelId, updatedModel)

Edit a specific model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var updatedModel = new ActivitiPublicRestApi.ModelRepresentation(); // ModelRepresentation | updatedModel


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateModelUsingPUT(modelId, updatedModel, callback);
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

<a name="validateModelUsingPOST"></a>
# **validateModelUsingPOST**
> [ValidationErrorRepresentation] validateModelUsingPOST(modelId, opts)

Validate the JSON model

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelsApi();

var modelId = 789; // Integer | modelId

var opts = { 
  'values': null // Object | values
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateModelUsingPOST(modelId, opts, callback);
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

