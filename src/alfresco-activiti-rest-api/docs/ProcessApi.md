# ActivitiPublicRestApi.ProcessApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProcessInstance**](ProcessApi.md#deleteProcessInstance) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
[**filterProcessInstances**](ProcessApi.md#filterProcessInstances) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
[**getProcessDefinitionStartForm**](ProcessApi.md#getProcessDefinitionStartForm) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
[**getProcessDefinitions**](ProcessApi.md#getProcessDefinitions) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions
[**getProcessInstanceContent**](ProcessApi.md#getProcessInstanceContent) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
[**getProcessAuditJson**](ProcessApi.md#getProcessAuditJson) | **GET** /api/enterprise/process-instances/{processId}/audit-log | Retrieve process audit infromation in json format
[**getProcessAuditPdf**](ProcessApi.md#getProcessAuditPdf) | **GET** /app/rest/process-instances/{processId}/audit | Retrieve the process audit infromation in pdf format
[**getProcessInstanceStartForm**](ProcessApi.md#getProcessInstanceStartForm) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
[**getProcessInstance**](ProcessApi.md#getProcessInstance) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information
[**getProcessInstances**](ProcessApi.md#getProcessInstances) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances
[**getRestFieldValues**](ProcessApi.md#getRestFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
[**getRestTableFieldValues**](ProcessApi.md#getRestTableFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
[**startNewProcessInstance**](ProcessApi.md#startNewProcessInstance) | **POST** /api/enterprise/process-instances | Start a process instance


<a name="deleteProcessInstance"></a>
# **deleteProcessInstance**
> deleteProcessInstance(processInstanceId)

Delete a process instance

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processApi.deleteProcessInstance(processInstanceId);
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

<a name="filterProcessInstances"></a>
# **filterProcessInstances**
> ResultListDataRepresentation filterProcessInstances(filterRequest)

Filter a list of process instances

### Example
```javascript

var filterRequest = new this.alfrescoJsApi.activiti.ProcessInstanceFilterRequestRepresentation(); // ProcessInstanceFilterRequestRepresentation | filterRequest

this.alfrescoJsApi.activiti.processApi.filterProcessInstances(filterRequest);
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

<a name="getProcessDefinitionStartForm"></a>
# **getProcessDefinitionStartForm**
> FormDefinitionRepresentation getProcessDefinitionStartForm()

Retrieve the start form for a process definition

### Example
```javascript

var processDefinitionId = "pprocessDefinitionId_example"; // String | processDefinitionId

this.alfrescoJsApi.activiti.processApi.getProcessDefinitionStartForm(processDefinitionId);
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

<a name="getProcessDefinitions"></a>
# **getProcessDefinitions**
> ResultListDataRepresentation getProcessDefinitions(opts)

Retrieve a list of process definitions

Get a list of process definitions (visible within the tenant of the user)

### Example
```javascript

var opts = { 
  'latest': true, // Boolean | latest
  'appDefinitionId': 789 // Integer | appDefinitionId
};

this.alfrescoJsApi.activiti.processApi.getProcessDefinitions(opts);
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

<a name="getProcessInstanceContent"></a>
# **getProcessInstanceContent**
> ResultListDataRepresentation getProcessInstanceContent(processInstanceId)

Retrieve content attached to process instance fields

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processApi.getProcessInstanceContent(processInstanceId);
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

<a name="getProcessAuditJson"></a>
# **getProcessAuditJson**
> ProcessInstanceAuditRepresentation getProcessAuditJson(processId)

Retrieve process audit infromation in json format

### Example
```javascript

var processId = "processId_example"; // String | processId


this.alfrescoJsApi.activiti.processApi.getProcessAuditJson(processId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| processId | 

### Return type

[**ProcessInstanceAuditRepresentation**](ProcessInstanceAuditRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessAuditPdf"></a>
# **getProcessAuditPdf**
> Blob getProcessAuditPdf(processId)

Retrieve process audit infromation in pdf format

### Example
```javascript

var processId = "processId_example"; // String | processId

this.alfrescoJsApi.activiti.processApi.getProcessAuditPdf(processId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| processId | 

### Return type

[Blob]

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceStartForm"></a>
# **getProcessInstanceStartForm**
> FormDefinitionRepresentation getProcessInstanceStartForm(processInstanceId)

Get process start form

When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processApi.getProcessInstanceStartForm(processInstanceId);
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

<a name="getProcessInstance"></a>
# **getProcessInstance**
> ProcessInstanceRepresentation getProcessInstance(processInstanceId)

Retrieve a process instance information

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processApi.getProcessInstance(processInstanceId);
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

<a name="getProcessInstances"></a>
# **getProcessInstances**
> ResultListDataRepresentation getProcessInstances(requestNode)

Retrieve a list of process instances

### Example
```javascript

var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**ProcessFilterRequestRepresentation**](ProcessFilterRequestRepresentation.md)| requestNode | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

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

this.alfrescoJsApi.activiti.processApi.getRestFieldValues(processDefinitionId, field);
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

this.alfrescoJsApi.activiti.processApi.getRestTableFieldValues(processDefinitionId, field, column);
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

<a name="startNewProcessInstance"></a>
# **startNewProcessInstance**
> ProcessInstanceRepresentation startNewProcessInstance(startRequest)

Start a process instance

### Example
```javascript

var startRequest = new this.alfrescoJsApi.activiti.CreateProcessInstanceRepresentation(); // CreateProcessInstanceRepresentation | startRequest


this.alfrescoJsApi.activiti.processApi.startNewProcessInstance(startRequest);
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

