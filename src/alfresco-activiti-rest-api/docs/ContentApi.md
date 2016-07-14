# ActivitiPublicRestApi.ContentApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRelatedContentOnProcessInstanceUsingPOST**](ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST) | **POST** /api/enterprise/process-instances/{processInstanceId}/content | createRelatedContentOnProcessInstance
[**createRelatedContentOnProcessInstanceUsingPOST1**](ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST1) | **POST** /api/enterprise/process-instances/{processInstanceId}/raw-content | createRelatedContentOnProcessInstance
[**createRelatedContentOnTaskUsingPOST**](ContentApi.md#createRelatedContentOnTaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
[**createRelatedContentOnTaskUsingPOST1**](ContentApi.md#createRelatedContentOnTaskUsingPOST1) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
[**createTemporaryRawRelatedContentUsingPOST1**](ContentApi.md#createTemporaryRawRelatedContentUsingPOST1) | **POST** /api/enterprise/content/raw | createTemporaryRawRelatedContent
[**createTemporaryRelatedContentUsingPOST**](ContentApi.md#createTemporaryRelatedContentUsingPOST) | **POST** /api/enterprise/content | createTemporaryRelatedContent
[**deleteContentUsingDELETE1**](ContentApi.md#deleteContentUsingDELETE1) | **DELETE** /api/enterprise/content/{contentId} | deleteContent
[**getContentUsingGET1**](ContentApi.md#getContentUsingGET1) | **GET** /api/enterprise/content/{contentId} | getContent
[**getProcessInstanceContentUsingGET**](ContentApi.md#getProcessInstanceContentUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
[**getRawContentUsingGET3**](ContentApi.md#getRawContentUsingGET3) | **GET** /api/enterprise/content/{contentId}/raw | getRawContent
[**getRelatedContentForProcessInstanceUsingGET**](ContentApi.md#getRelatedContentForProcessInstanceUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/content | getRelatedContentForProcessInstance
[**getRelatedContentForTaskUsingGET**](ContentApi.md#getRelatedContentForTaskUsingGET) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task


<a name="createRelatedContentOnProcessInstanceUsingPOST"></a>
# **createRelatedContentOnProcessInstanceUsingPOST**
> RelatedContentRepresentation createRelatedContentOnProcessInstanceUsingPOST(processInstanceId, relatedContent)

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
apiInstance.createRelatedContentOnProcessInstanceUsingPOST(processInstanceId, relatedContent, callback);
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

<a name="createRelatedContentOnProcessInstanceUsingPOST1"></a>
# **createRelatedContentOnProcessInstanceUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnProcessInstanceUsingPOST1(processInstanceId, file)

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
apiInstance.createRelatedContentOnProcessInstanceUsingPOST1(processInstanceId, file, callback);
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

<a name="createRelatedContentOnTaskUsingPOST"></a>
# **createRelatedContentOnTaskUsingPOST**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST(taskId, relatedContent, opts)

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
apiInstance.createRelatedContentOnTaskUsingPOST(taskId, relatedContent, opts, callback);
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

<a name="createRelatedContentOnTaskUsingPOST1"></a>
# **createRelatedContentOnTaskUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST1(taskId, file, opts)

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
apiInstance.createRelatedContentOnTaskUsingPOST1(taskId, file, opts, callback);
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

<a name="createTemporaryRawRelatedContentUsingPOST1"></a>
# **createTemporaryRawRelatedContentUsingPOST1**
> RelatedContentRepresentation createTemporaryRawRelatedContentUsingPOST1(file)

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
apiInstance.createTemporaryRawRelatedContentUsingPOST1(file, callback);
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

<a name="createTemporaryRelatedContentUsingPOST"></a>
# **createTemporaryRelatedContentUsingPOST**
> RelatedContentRepresentation createTemporaryRelatedContentUsingPOST(relatedContent)

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
apiInstance.createTemporaryRelatedContentUsingPOST(relatedContent, callback);
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

<a name="deleteContentUsingDELETE1"></a>
# **deleteContentUsingDELETE1**
> deleteContentUsingDELETE1(contentId)

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
apiInstance.deleteContentUsingDELETE1(contentId, callback);
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

<a name="getContentUsingGET1"></a>
# **getContentUsingGET1**
> RelatedContentRepresentation getContentUsingGET1(contentId)

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
apiInstance.getContentUsingGET1(contentId, callback);
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

<a name="getProcessInstanceContentUsingGET"></a>
# **getProcessInstanceContentUsingGET**
> ResultListDataRepresentation getProcessInstanceContentUsingGET(processInstanceId)

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

<a name="getRawContentUsingGET3"></a>
# **getRawContentUsingGET3**
> getRawContentUsingGET3(contentId)

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
apiInstance.getRawContentUsingGET3(contentId, callback);
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

<a name="getRelatedContentForProcessInstanceUsingGET"></a>
# **getRelatedContentForProcessInstanceUsingGET**
> ResultListDataRepresentation getRelatedContentForProcessInstanceUsingGET(processInstanceId)

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
apiInstance.getRelatedContentForProcessInstanceUsingGET(processInstanceId, callback);
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

<a name="getRelatedContentForTaskUsingGET"></a>
# **getRelatedContentForTaskUsingGET**
> ResultListDataRepresentation getRelatedContentForTaskUsingGET(taskId)

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
apiInstance.getRelatedContentForTaskUsingGET(taskId, callback);
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

