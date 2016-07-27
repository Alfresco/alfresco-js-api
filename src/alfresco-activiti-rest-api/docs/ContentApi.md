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

apiInstance.createRelatedContentOnProcessInstance(processInstanceId, relatedContent);
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

apiInstance.createRelatedContentOnProcessInstance(processInstanceId, file);
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

apiInstance.createRelatedContentOnTask(taskId, relatedContent, opts);
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

apiInstance.createRelatedContentOnTask(taskId, file, opts);
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

apiInstance.createTemporaryRawRelatedContent(file);
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

apiInstance.createTemporaryRelatedContent(relatedContent);
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

apiInstance.deleteContent(contentId);
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

apiInstance.getContent(contentId);
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

apiInstance.getProcessInstanceContent(processInstanceId);
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

apiInstance.getRawContent3(contentId);
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

apiInstance.getRelatedContentForProcessInstance(processInstanceId);
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

apiInstance.getRelatedContentForTask(taskId);
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

