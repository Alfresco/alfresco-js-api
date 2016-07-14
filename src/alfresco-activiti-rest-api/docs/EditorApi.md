# ActivitiPublicRestApi.EditorApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormHistoryUsingGET**](EditorApi.md#getFormHistoryUsingGET) | **GET** /api/enterprise/editor/form-models/{formId}/history/{formHistoryId} | getFormHistory
[**getFormUsingGET**](EditorApi.md#getFormUsingGET) | **GET** /api/enterprise/editor/form-models/{formId} | getForm
[**getFormsUsingGET**](EditorApi.md#getFormsUsingGET) | **GET** /api/enterprise/editor/form-models/values | getForms
[**saveFormUsingPUT**](EditorApi.md#saveFormUsingPUT) | **PUT** /api/enterprise/editor/form-models/{formId} | saveForm
[**validateModelUsingPUT**](EditorApi.md#validateModelUsingPUT) | **PUT** /api/enterprise/editor/form-models/{formId}/validate | validateModel


<a name="getFormHistoryUsingGET"></a>
# **getFormHistoryUsingGET**
> FormRepresentation getFormHistoryUsingGET(formId, formHistoryId)

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
apiInstance.getFormHistoryUsingGET(formId, formHistoryId, callback);
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

<a name="getFormUsingGET"></a>
# **getFormUsingGET**
> FormRepresentation getFormUsingGET(formId)

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
apiInstance.getFormUsingGET(formId, callback);
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

<a name="getFormsUsingGET"></a>
# **getFormsUsingGET**
> [FormRepresentation] getFormsUsingGET()

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
apiInstance.getFormsUsingGET(callback);
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

<a name="saveFormUsingPUT"></a>
# **saveFormUsingPUT**
> FormRepresentation saveFormUsingPUT(formId, saveRepresentation)

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
apiInstance.saveFormUsingPUT(formId, saveRepresentation, callback);
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

<a name="validateModelUsingPUT"></a>
# **validateModelUsingPUT**
> [ValidationErrorRepresentation] validateModelUsingPUT(formId, saveRepresentation)

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
apiInstance.validateModelUsingPUT(formId, saveRepresentation, callback);
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

