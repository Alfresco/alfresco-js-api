# .ModelsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModelUsingPOST**](ModelsApi.md#createModelUsingPOST) | **POST** /enterprise/models | Create a new model
[**deleteModelUsingDELETE**](ModelsApi.md#deleteModelUsingDELETE) | **DELETE** /enterprise/models/{modelId} | Delete a model
[**duplicateModelUsingPOST**](ModelsApi.md#duplicateModelUsingPOST) | **POST** /enterprise/models/{modelId}/clone | Duplicate an existing model
[**getModelJSONUsingGET**](ModelsApi.md#getModelJSONUsingGET) | **GET** /enterprise/models/{modelId}/editor/json | Get model content
[**getModelThumbnailUsingGET**](ModelsApi.md#getModelThumbnailUsingGET) | **GET** /enterprise/models/{modelId}/thumbnail | Get a model&#39;s thumbnail image
[**getModelUsingGET**](ModelsApi.md#getModelUsingGET) | **GET** /enterprise/models/{modelId} | Get a model
[**getModelsToIncludeInAppDefinitionUsingGET**](ModelsApi.md#getModelsToIncludeInAppDefinitionUsingGET) | **GET** /enterprise/models-for-app-definition | List process definition models shared with the current user
[**getModelsUsingGET**](ModelsApi.md#getModelsUsingGET) | **GET** /enterprise/models | List models (process, form, decision rule or app)
[**importNewVersionUsingPOST**](ModelsApi.md#importNewVersionUsingPOST) | **POST** /enterprise/models/{modelId}/newversion | Create a new version of a model
[**importProcessModelUsingPOST**](ModelsApi.md#importProcessModelUsingPOST) | **POST** /enterprise/process-models/import | Import a BPMN 2.0 XML file
[**saveModelUsingPOST**](ModelsApi.md#saveModelUsingPOST) | **POST** /enterprise/models/{modelId}/editor/json | Update model content
[**updateModelUsingPUT**](ModelsApi.md#updateModelUsingPUT) | **PUT** /enterprise/models/{modelId} | Update a model
[**validateModelUsingPOST**](ModelsApi.md#validateModelUsingPOST) | **POST** /enterprise/models/{modelId}/editor/validate | Validate model content


<a name="createModelUsingPOST"></a>
# **createModelUsingPOST**
> ModelRepresentation createModelUsingPOST(modelRepresentation)

Create a new model

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteModelUsingDELETE"></a>
# **deleteModelUsingDELETE**
> deleteModelUsingDELETE(modelIdopts)

Delete a model

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();

var opts = { 
  'cascade': true // boolean | cascade
  'deleteRuntimeApp': true // boolean | deleteRuntimeApp
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteModelUsingDELETE(modelIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **cascade** | **boolean**| cascade | [optional] 
 **deleteRuntimeApp** | **boolean**| deleteRuntimeApp | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="duplicateModelUsingPOST"></a>
# **duplicateModelUsingPOST**
> ModelRepresentation duplicateModelUsingPOST(modelIdmodelRepresentation)

Duplicate an existing model

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.duplicateModelUsingPOST(modelIdmodelRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **modelRepresentation** | [**ModelRepresentation**](ModelRepresentation.md)| modelRepresentation | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelJSONUsingGET"></a>
# **getModelJSONUsingGET**
> ObjectNode getModelJSONUsingGET(modelId)

Get model content

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


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
 **modelId** | **number**| modelId | 

### Return type

[**ObjectNode**](ObjectNode.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelThumbnailUsingGET"></a>
# **getModelThumbnailUsingGET**
> any getModelThumbnailUsingGET(modelId)

Get a model&#39;s thumbnail image

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


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
 **modelId** | **number**| modelId | 

### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png

<a name="getModelUsingGET"></a>
# **getModelUsingGET**
> ModelRepresentation getModelUsingGET(modelIdopts)

Get a model

Models act as containers for process, form, decision table and app definitions

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();

var opts = { 
  'includePermissions': true // boolean | includePermissions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModelUsingGET(modelIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **includePermissions** | **boolean**| includePermissions | [optional] 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelsToIncludeInAppDefinitionUsingGET"></a>
# **getModelsToIncludeInAppDefinitionUsingGET**
> ResultListDataRepresentationModelRepresentation getModelsToIncludeInAppDefinitionUsingGET()

List process definition models shared with the current user

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();

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

[**ResultListDataRepresentationModelRepresentation**](ResultListDataRepresentationModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelsUsingGET"></a>
# **getModelsUsingGET**
> ResultListDataRepresentationModelRepresentation getModelsUsingGET(opts)

List models (process, form, decision rule or app)

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();

var opts = { 
  'filter': filter_example // string | filter
  'sort': sort_example // string | sort
  'modelType': 56 // number | modelType
  'referenceId': 789 // number | referenceId
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
 **filter** | **string**| filter | [optional] 
 **sort** | **string**| sort | [optional] 
 **modelType** | **number**| modelType | [optional] 
 **referenceId** | **number**| referenceId | [optional] 

### Return type

[**ResultListDataRepresentationModelRepresentation**](ResultListDataRepresentationModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importNewVersionUsingPOST"></a>
# **importNewVersionUsingPOST**
> ModelRepresentation importNewVersionUsingPOST(modelIdfile)

Create a new version of a model

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importNewVersionUsingPOST(modelIdfile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **file** | **Blob**| file | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="importProcessModelUsingPOST"></a>
# **importProcessModelUsingPOST**
> ModelRepresentation importProcessModelUsingPOST(file)

Import a BPMN 2.0 XML file

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


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
 **file** | **Blob**| file | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="saveModelUsingPOST"></a>
# **saveModelUsingPOST**
> ModelRepresentation saveModelUsingPOST(modelIdvalues)

Update model content

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveModelUsingPOST(modelIdvalues, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **values** | **any**| values | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateModelUsingPUT"></a>
# **updateModelUsingPUT**
> ModelRepresentation updateModelUsingPUT(modelIdupdatedModel)

Update a model

This method allows you to update the metadata of a model. In order to update the content of the model you will need to call the specific endpoint for that model type.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateModelUsingPUT(modelIdupdatedModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **updatedModel** | [**ModelRepresentation**](ModelRepresentation.md)| updatedModel | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateModelUsingPOST"></a>
# **validateModelUsingPOST**
> any validateModelUsingPOST(modelIdopts)

Validate model content

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsApi();

var opts = { 
  'values':  // any | values
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateModelUsingPOST(modelIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **values** | **any**| values | [optional] 

### Return type

[**any**](ValidationErrorRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

