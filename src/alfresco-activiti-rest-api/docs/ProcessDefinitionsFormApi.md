# ActivitiPublicRestApi.ProcessDefinitionsFormApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessDefinitionStartForm**](ProcessDefinitionsFormApi.md#getProcessDefinitionStartForm) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
[**getRestFieldValues**](ProcessDefinitionsFormApi.md#getRestFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
[**getRestTableFieldValues**](ProcessDefinitionsFormApi.md#getRestTableFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)


<a name="getProcessDefinitionStartForm"></a>
# **getProcessDefinitionStartForm**
> FormDefinitionRepresentation getProcessDefinitionStartForm()

Retrieve the start form for a process definition

### Example
```javascript
var processDefinitionId = "processDefinitionId"; // String | processDefinitionId

this.alfrescoJsApi.activiti.processDefinitionsFormApi.getProcessDefinitionStartForm(processDefinitionId);
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **String**| processDefinitionId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRestFieldValues"></a>
# **getRestFieldValues**
> [FormValueRepresentation] getRestFieldValues()

Retrieve field values (eg. the typeahead field)

### Example
```javascript
var processDefinitionId = "processDefinitionId"; // String | processDefinitionId
var field = "field"; // String | field

this.alfrescoJsApi.activiti.processDefinitionsFormApi.getRestFieldValues(processDefinitionId, field);
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **String**| processDefinitionId | 
 **field** | **String**| field | 


### Return type

[**[FormValueRepresentation]**](FormValueRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRestTableFieldValues"></a>
# **getRestTableFieldValues**
> [FormValueRepresentation] getRestTableFieldValues()

Retrieve field values (eg. the table field)

### Example
```javascript
var processDefinitionId = "processDefinitionId"; // String | processDefinitionId
var field = "field"; // String | field
var column = "column"; // String | column

this.alfrescoJsApi.activiti.processDefinitionsFormApi.getRestTableFieldValues(processDefinitionId, field, column);
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **String**| processDefinitionId | 
 **field** | **String**| field | 
 **column** | **String**| column | 

### Return type

[**[FormValueRepresentation]**](FormValueRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

