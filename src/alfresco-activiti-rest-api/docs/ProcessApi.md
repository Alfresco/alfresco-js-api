# ActivitiPublicRestApi.ProcessApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProcessInstanceUsingDELETE**](ProcessApi.md#deleteProcessInstanceUsingDELETE) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
[**filterProcessInstancesUsingPOST**](ProcessApi.md#filterProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
[**getProcessDefinitionStartFormUsingGET**](ProcessApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
[**getProcessDefinitionsUsingGET**](ProcessApi.md#getProcessDefinitionsUsingGET) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions
[**getProcessInstanceContentUsingGET**](ProcessApi.md#getProcessInstanceContentUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
[**getProcessInstanceStartFormUsingGET**](ProcessApi.md#getProcessInstanceStartFormUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
[**getProcessInstanceUsingGET**](ProcessApi.md#getProcessInstanceUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information
[**getProcessInstancesUsingPOST**](ProcessApi.md#getProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances
[**getRestFieldValuesUsingGET**](ProcessApi.md#getRestFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
[**getRestTableFieldValuesUsingGET**](ProcessApi.md#getRestTableFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
[**startNewProcessInstanceUsingPOST**](ProcessApi.md#startNewProcessInstanceUsingPOST) | **POST** /api/enterprise/process-instances | Start a process instance


<a name="deleteProcessInstanceUsingDELETE"></a>
# **deleteProcessInstanceUsingDELETE**
> deleteProcessInstanceUsingDELETE(processInstanceId)

Delete a process instance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProcessInstanceUsingDELETE(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterProcessInstancesUsingPOST"></a>
# **filterProcessInstancesUsingPOST**
> ResultListDataRepresentation filterProcessInstancesUsingPOST(filterRequest)

Filter a list of process instances

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var filterRequest = new ActivitiPublicRestApi.ProcessInstanceFilterRequestRepresentation(); // ProcessInstanceFilterRequestRepresentation | filterRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterProcessInstancesUsingPOST(filterRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRequest** | [**ProcessInstanceFilterRequestRepresentation**](ProcessInstanceFilterRequestRepresentation.md)| filterRequest | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessDefinitionStartFormUsingGET"></a>
# **getProcessDefinitionStartFormUsingGET**
> FormDefinitionRepresentation getProcessDefinitionStartFormUsingGET()

Retrieve the start form for a process definition

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

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

<a name="getProcessDefinitionsUsingGET"></a>
# **getProcessDefinitionsUsingGET**
> ResultListDataRepresentation getProcessDefinitionsUsingGET(opts)

Retrieve a list of process definitions

Get a list of process definitions (visible within the tenant of the user)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var opts = { 
  'latest': true, // Boolean | latest
  'appDefinitionId': 789 // Integer | appDefinitionId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessDefinitionsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latest** | **Boolean**| latest | [optional] 
 **appDefinitionId** | **Integer**| appDefinitionId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceContentUsingGET"></a>
# **getProcessInstanceContentUsingGET**
> ResultListDataRepresentation getProcessInstanceContentUsingGET(processInstanceId)

Retrieve content attached to process instance fields

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceContentUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceStartFormUsingGET"></a>
# **getProcessInstanceStartFormUsingGET**
> FormDefinitionRepresentation getProcessInstanceStartFormUsingGET(processInstanceId)

Get process start form

When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceStartFormUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceUsingGET"></a>
# **getProcessInstanceUsingGET**
> ProcessInstanceRepresentation getProcessInstanceUsingGET(processInstanceId)

Retrieve a process instance information

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstancesUsingPOST"></a>
# **getProcessInstancesUsingPOST**
> ResultListDataRepresentation getProcessInstancesUsingPOST(requestNode)

Retrieve a list of process instances

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstancesUsingPOST(requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

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

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

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

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

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

<a name="startNewProcessInstanceUsingPOST"></a>
# **startNewProcessInstanceUsingPOST**
> ProcessInstanceRepresentation startNewProcessInstanceUsingPOST(startRequest)

Start a process instance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessApi();

var startRequest = new ActivitiPublicRestApi.CreateProcessInstanceRepresentation(); // CreateProcessInstanceRepresentation | startRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startNewProcessInstanceUsingPOST(startRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startRequest** | [**CreateProcessInstanceRepresentation**](CreateProcessInstanceRepresentation.md)| startRequest | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

