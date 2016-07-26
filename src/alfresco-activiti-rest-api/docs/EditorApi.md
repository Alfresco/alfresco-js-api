# ActivitiPublicRestApi.EditorApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormHistory**](EditorApi.md#getFormHistory) | **GET** /api/enterprise/editor/form-models/{formId}/history/{formHistoryId} | getFormHistory
[**getForm**](EditorApi.md#getForm) | **GET** /api/enterprise/editor/form-models/{formId} | getForm
[**getForms**](EditorApi.md#getForms) | **GET** /api/enterprise/editor/form-models/values | getForms
[**saveForm**](EditorApi.md#saveForm) | **PUT** /api/enterprise/editor/form-models/{formId} | saveForm
[**validateModel**](EditorApi.md#validateModel) | **PUT** /api/enterprise/editor/form-models/{formId}/validate | validateModel


<a name="getFormHistory"></a>
# **getFormHistory**
> FormRepresentation getFormHistory(formId, formHistoryId)

getFormHistory

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.EditorApi();

var formId = 789; // Integer | formId

var formHistoryId = 789; // Integer | formHistoryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormHistory(formId, formHistoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **Integer**| formId | 
 **formHistoryId** | **Integer**| formHistoryId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getForm"></a>
# **getForm**
> FormRepresentation getForm(formId)

getForm

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.EditorApi();

var formId = 789; // Integer | formId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getForm(formId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **Integer**| formId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getForms"></a>
# **getForms**
> [FormRepresentation] getForms()

getForms

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.EditorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getForms(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[FormRepresentation]**](FormRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveForm"></a>
# **saveForm**
> FormRepresentation saveForm(formId, saveRepresentation)

saveForm

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.EditorApi();

var formId = 789; // Integer | formId

var saveRepresentation = new ActivitiPublicRestApi.FormSaveRepresentation(); // FormSaveRepresentation | saveRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveForm(formId, saveRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **Integer**| formId | 
 **saveRepresentation** | [**FormSaveRepresentation**](FormSaveRepresentation.md)| saveRepresentation | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateModel"></a>
# **validateModel**
> [ValidationErrorRepresentation] validateModel(formId, saveRepresentation)

validateModel

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.EditorApi();

var formId = 789; // Integer | formId

var saveRepresentation = new ActivitiPublicRestApi.FormSaveRepresentation(); // FormSaveRepresentation | saveRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateModel(formId, saveRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **Integer**| formId | 
 **saveRepresentation** | [**FormSaveRepresentation**](FormSaveRepresentation.md)| saveRepresentation | 

### Return type

[**[ValidationErrorRepresentation]**](ValidationErrorRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

