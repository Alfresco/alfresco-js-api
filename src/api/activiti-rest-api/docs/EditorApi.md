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

var formId = 789; // Integer | formId

var formHistoryId = 789; // Integer | formHistoryId

this.alfrescoJsApi.activiti.editorApi.getFormHistory(formId, formHistoryId);
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

var formId = 789; // Integer | formId

this.alfrescoJsApi.activiti.editorApi.getForm(formId);
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

this.alfrescoJsApi.activiti.editorApi.getForms();
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

var formId = 789; // Integer | formId

var saveRepresentation = new this.alfrescoJsApi.activiti.FormSaveRepresentation(); // FormSaveRepresentation | saveRepresentation

this.alfrescoJsApi.activiti.editorApi.saveForm(formId, saveRepresentation);
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

var formId = 789; // Integer | formId

var saveRepresentation = new this.alfrescoJsApi.activiti.FormSaveRepresentation(); // FormSaveRepresentation | saveRepresentation

this.alfrescoJsApi.activiti.editorApi.validateModel(formId, saveRepresentation);
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

