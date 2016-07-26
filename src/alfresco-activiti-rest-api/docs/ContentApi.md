# ActivitiPublicRestApi.ContentApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRelatedContentOnProcessInstance**](ContentApi.md#createRelatedContentOnProcessInstance) | **POST** /api/enterprise/process-instances/{processInstanceId}/content | createRelatedContentOnProcessInstance
[**createRelatedContentOnProcessInstance**](ContentApi.md#createRelatedContentOnProcessInstance) | **POST** /api/enterprise/process-instances/{processInstanceId}/raw-content | createRelatedContentOnProcessInstance
[**createRelatedContentOnTask**](ContentApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
[**createRelatedContentOnTask**](ContentApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
[**createTemporaryRawRelatedContent**](ContentApi.md#createTemporaryRawRelatedContent) | **POST** /api/enterprise/content/raw | createTemporaryRawRelatedContent
[**createTemporaryRelatedContent**](ContentApi.md#createTemporaryRelatedContent) | **POST** /api/enterprise/content | createTemporaryRelatedContent
[**deleteContent**](ContentApi.md#deleteContent) | **DELETE** /api/enterprise/content/{contentId} | deleteContent
[**getContent**](ContentApi.md#getContent) | **GET** /api/enterprise/content/{contentId} | getContent
[**getProcessInstanceContent**](ContentApi.md#getProcessInstanceContent) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
[**getRawContent3**](ContentApi.md#getRawContent3) | **GET** /api/enterprise/content/{contentId}/raw | getRawContent
[**getRelatedContentForProcessInstance**](ContentApi.md#getRelatedContentForProcessInstance) | **GET** /api/enterprise/process-instances/{processInstanceId}/content | getRelatedContentForProcessInstance
[**getRelatedContentForTask**](ContentApi.md#getRelatedContentForTask) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task


<a name="createRelatedContentOnProcessInstance"></a>
# **createRelatedContentOnProcessInstance**
> RelatedContentRepresentation createRelatedContentOnProcessInstance(processInstanceId, relatedContent)

createRelatedContentOnProcessInstance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

var relatedContent = new ActivitiPublicRestApi.RelatedContentRepresentation(); // RelatedContentRepresentation | relatedContent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnProcessInstance(processInstanceId, relatedContent, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedContentOnProcessInstance"></a>
# **createRelatedContentOnProcessInstance**
> RelatedContentRepresentation createRelatedContentOnProcessInstance(processInstanceId, file)

createRelatedContentOnProcessInstance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnProcessInstance(processInstanceId, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 
 **file** | **File**| file | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createRelatedContentOnTask"></a>
# **createRelatedContentOnTask**
> RelatedContentRepresentation createRelatedContentOnTask(taskId, relatedContent, opts)

To relate content (eg from Alfresco) to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var taskId = "taskId_example"; // String | taskId

var relatedContent = new ActivitiPublicRestApi.RelatedContentRepresentation(); // RelatedContentRepresentation | relatedContent

var opts = { 
  'isRelatedContent': true // Boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnTask(taskId, relatedContent, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 
 **isRelatedContent** | **Boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedContentOnTask"></a>
# **createRelatedContentOnTask**
> RelatedContentRepresentation createRelatedContentOnTask(taskId, file, opts)

Upload content to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var taskId = "taskId_example"; // String | taskId

var file = "/path/to/file.txt"; // File | file

var opts = { 
  'isRelatedContent': true // Boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnTask(taskId, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **file** | **File**| file | 
 **isRelatedContent** | **Boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createTemporaryRawRelatedContent"></a>
# **createTemporaryRawRelatedContent**
> RelatedContentRepresentation createTemporaryRawRelatedContent(file)

createTemporaryRawRelatedContent

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemporaryRawRelatedContent(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| file | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createTemporaryRelatedContent"></a>
# **createTemporaryRelatedContent**
> RelatedContentRepresentation createTemporaryRelatedContent(relatedContent)

createTemporaryRelatedContent

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var relatedContent = new ActivitiPublicRestApi.RelatedContentRepresentation(); // RelatedContentRepresentation | relatedContent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemporaryRelatedContent(relatedContent, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContent"></a>
# **deleteContent**
> deleteContent(contentId)

deleteContent

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var contentId = 789; // Integer | contentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContent(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Integer**| contentId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContent"></a>
# **getContent**
> RelatedContentRepresentation getContent(contentId)

getContent

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var contentId = 789; // Integer | contentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContent(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Integer**| contentId | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

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
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceContent(processInstanceId, callback);
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

<a name="getRawContent3"></a>
# **getRawContent3**
> getRawContent3(contentId)

getRawContent

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var contentId = 789; // Integer | contentId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRawContent3(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Integer**| contentId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedContentForProcessInstance"></a>
# **getRelatedContentForProcessInstance**
> ResultListDataRepresentation getRelatedContentForProcessInstance(processInstanceId)

getRelatedContentForProcessInstance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedContentForProcessInstance(processInstanceId, callback);
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

<a name="getRelatedContentForTask"></a>
# **getRelatedContentForTask**
> ResultListDataRepresentation getRelatedContentForTask(taskId)

Retrieve which content is attached to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedContentForTask(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

