# .ContentApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRelatedContentOnProcessInstanceUsingPOST**](ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/content | Attach existing content to a process instance
[**createRelatedContentOnProcessInstanceUsingPOST1**](ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST1) | **POST** /enterprise/process-instances/{processInstanceId}/raw-content | Upload content and attach to a process instance
[**createRelatedContentOnTaskUsingPOST**](ContentApi.md#createRelatedContentOnTaskUsingPOST) | **POST** /enterprise/tasks/{taskId}/content | Attach existing content to a task
[**createRelatedContentOnTaskUsingPOST1**](ContentApi.md#createRelatedContentOnTaskUsingPOST1) | **POST** /enterprise/tasks/{taskId}/raw-content | Upload content and attach to a task
[**createTemporaryRawRelatedContentUsingPOST**](ContentApi.md#createTemporaryRawRelatedContentUsingPOST) | **POST** /enterprise/content/raw | Upload content and create a local representation
[**createTemporaryRelatedContentUsingPOST**](ContentApi.md#createTemporaryRelatedContentUsingPOST) | **POST** /enterprise/content | Create a local representation of content from a remote repository
[**deleteContentUsingDELETE**](ContentApi.md#deleteContentUsingDELETE) | **DELETE** /enterprise/content/{contentId} | Remove a local content representation
[**getContentUsingGET**](ContentApi.md#getContentUsingGET) | **GET** /enterprise/content/{contentId} | Get a local content representation
[**getRawContentUsingGET**](ContentApi.md#getRawContentUsingGET) | **GET** /enterprise/content/{contentId}/rendition/{renditionType} | Stream content rendition
[**getRawContentUsingGET1**](ContentApi.md#getRawContentUsingGET1) | **GET** /enterprise/content/{contentId}/raw | Stream content from a local content representation
[**getRelatedContentForProcessInstanceUsingGET**](ContentApi.md#getRelatedContentForProcessInstanceUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/content | List content attached to a process instance
[**getRelatedContentForTaskUsingGET**](ContentApi.md#getRelatedContentForTaskUsingGET) | **GET** /enterprise/tasks/{taskId}/content | List content attached to a task


<a name="createRelatedContentOnProcessInstanceUsingPOST"></a>
# **createRelatedContentOnProcessInstanceUsingPOST**
> RelatedContentRepresentation createRelatedContentOnProcessInstanceUsingPOST(processInstanceIdrelatedContentopts)

Attach existing content to a process instance

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();

var opts = { 
  'isRelatedContent': true // boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnProcessInstanceUsingPOST(processInstanceIdrelatedContentopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedContentOnProcessInstanceUsingPOST1"></a>
# **createRelatedContentOnProcessInstanceUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnProcessInstanceUsingPOST1(processInstanceIdfileopts)

Upload content and attach to a process instance

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();

var opts = { 
  'isRelatedContent': true // boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnProcessInstanceUsingPOST1(processInstanceIdfileopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **file** | **Blob**| file | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createRelatedContentOnTaskUsingPOST"></a>
# **createRelatedContentOnTaskUsingPOST**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST(taskIdrelatedContentopts)

Attach existing content to a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();

var opts = { 
  'isRelatedContent': true // boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnTaskUsingPOST(taskIdrelatedContentopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedContentOnTaskUsingPOST1"></a>
# **createRelatedContentOnTaskUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST1(taskIdfileopts)

Upload content and attach to a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();

var opts = { 
  'isRelatedContent': true // boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnTaskUsingPOST1(taskIdfileopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **file** | **Blob**| file | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createTemporaryRawRelatedContentUsingPOST"></a>
# **createTemporaryRawRelatedContentUsingPOST**
> RelatedContentRepresentation createTemporaryRawRelatedContentUsingPOST(file)

Upload content and create a local representation

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemporaryRawRelatedContentUsingPOST(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Blob**| file | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createTemporaryRelatedContentUsingPOST"></a>
# **createTemporaryRelatedContentUsingPOST**
> RelatedContentRepresentation createTemporaryRelatedContentUsingPOST(relatedContent)

Create a local representation of content from a remote repository

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentUsingDELETE"></a>
# **deleteContentUsingDELETE**
> deleteContentUsingDELETE(contentId)

Remove a local content representation

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContentUsingDELETE(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentUsingGET"></a>
# **getContentUsingGET**
> RelatedContentRepresentation getContentUsingGET(contentId)

Get a local content representation

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentUsingGET(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRawContentUsingGET"></a>
# **getRawContentUsingGET**
> getRawContentUsingGET(contentIdrenditionType)

Stream content rendition

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRawContentUsingGET(contentIdrenditionType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 
 **renditionType** | **string**| renditionType | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getRawContentUsingGET1"></a>
# **getRawContentUsingGET1**
> getRawContentUsingGET1(contentId)

Stream content from a local content representation

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRawContentUsingGET1(contentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

<a name="getRelatedContentForProcessInstanceUsingGET"></a>
# **getRelatedContentForProcessInstanceUsingGET**
> ResultListDataRepresentationRelatedContentRepresentation getRelatedContentForProcessInstanceUsingGET(processInstanceIdopts)

List content attached to a process instance

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();

var opts = { 
  'isRelatedContent': true // boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedContentForProcessInstanceUsingGET(processInstanceIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**ResultListDataRepresentationRelatedContentRepresentation**](ResultListDataRepresentationRelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedContentForTaskUsingGET"></a>
# **getRelatedContentForTaskUsingGET**
> ResultListDataRepresentationRelatedContentRepresentation getRelatedContentForTaskUsingGET(taskIdopts)

List content attached to a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ContentApi();

var opts = { 
  'isRelatedContent': true // boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedContentForTaskUsingGET(taskIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**ResultListDataRepresentationRelatedContentRepresentation**](ResultListDataRepresentationRelatedContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

