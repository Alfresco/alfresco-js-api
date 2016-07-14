# ActivitiPublicRestApi.ProcessDefinitionsFormApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessDefinitionStartFormUsingGET**](ProcessDefinitionsFormApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
[**getRestFieldValuesUsingGET**](ProcessDefinitionsFormApi.md#getRestFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
[**getRestTableFieldValuesUsingGET**](ProcessDefinitionsFormApi.md#getRestTableFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)


<a name="getProcessDefinitionStartFormUsingGET"></a>
# **getProcessDefinitionStartFormUsingGET**
> FormDefinitionRepresentation getProcessDefinitionStartFormUsingGET()

Retrieve the start form for a process definition

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessDefinitionsFormApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessDefinitionStartFormUsingGET(callback);
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

<a name="getRestFieldValuesUsingGET"></a>
# **getRestFieldValuesUsingGET**
> [FormValueRepresentation] getRestFieldValuesUsingGET()

Retrieve field values (eg. the typeahead field)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessDefinitionsFormApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRestFieldValuesUsingGET(callback);
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

<a name="getRestTableFieldValuesUsingGET"></a>
# **getRestTableFieldValuesUsingGET**
> [FormValueRepresentation] getRestTableFieldValuesUsingGET()

Retrieve field values (eg. the table field)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessDefinitionsFormApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRestTableFieldValuesUsingGET(callback);
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

