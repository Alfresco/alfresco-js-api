# ActivitiPublicRestApi.TemporaryApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTasksUsingGET**](TemporaryApi.md#completeTasksUsingGET) | **GET** /api/enterprise/temporary/generate-report-data/complete-tasks | completeTasks
[**generateDataUsingGET**](TemporaryApi.md#generateDataUsingGET) | **GET** /api/enterprise/temporary/generate-report-data/start-process | generateData
[**getHeadersUsingGET**](TemporaryApi.md#getHeadersUsingGET) | **GET** /api/enterprise/temporary/example-headers | getHeaders
[**getOptionsUsingGET**](TemporaryApi.md#getOptionsUsingGET) | **GET** /api/enterprise/temporary/example-options | getOptions


<a name="completeTasksUsingGET"></a>
# **completeTasksUsingGET**
> completeTasksUsingGET(userId, processDefinitionKey)

completeTasks

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TemporaryApi();

var userId = 789; // Integer | userId

var processDefinitionKey = "processDefinitionKey_example"; // String | processDefinitionKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.completeTasksUsingGET(userId, processDefinitionKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **processDefinitionKey** | **String**| processDefinitionKey | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateDataUsingGET"></a>
# **generateDataUsingGET**
> generateDataUsingGET(userId, processDefinitionKey)

generateData

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TemporaryApi();

var userId = 789; // Integer | userId

var processDefinitionKey = "processDefinitionKey_example"; // String | processDefinitionKey


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.generateDataUsingGET(userId, processDefinitionKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **processDefinitionKey** | **String**| processDefinitionKey | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHeadersUsingGET"></a>
# **getHeadersUsingGET**
> ArrayNode getHeadersUsingGET()

getHeaders

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TemporaryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHeadersUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayNode**](ArrayNode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOptionsUsingGET"></a>
# **getOptionsUsingGET**
> ArrayNode getOptionsUsingGET()

getOptions

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TemporaryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOptionsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArrayNode**](ArrayNode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

