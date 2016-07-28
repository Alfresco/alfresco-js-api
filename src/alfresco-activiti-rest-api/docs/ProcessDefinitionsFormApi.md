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

this.alfrescoJsApi.activiti.processDefinitionsFormApi.getProcessDefinitionStartForm();
```

### Parameters
This endpoint does not need any parameter.

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

this.alfrescoJsApi.activiti.processDefinitionsFormApi.getRestFieldValues();
```

### Parameters
This endpoint does not need any parameter.

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

this.alfrescoJsApi.activiti.processDefinitionsFormApi.getRestTableFieldValues();
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[FormValueRepresentation]**](FormValueRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

