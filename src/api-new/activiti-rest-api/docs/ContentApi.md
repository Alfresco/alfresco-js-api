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
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);

let opts = { 
  'isRelatedContent': true //  | isRelatedContent
};

contentApi.createRelatedContentOnProcessInstanceUsingPOST(processInstanceIdrelatedContentopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="createRelatedContentOnProcessInstanceUsingPOST1"></a>
# **createRelatedContentOnProcessInstanceUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnProcessInstanceUsingPOST1(processInstanceIdfileopts)

Upload content and attach to a process instance

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);

let opts = { 
  'isRelatedContent': true //  | isRelatedContent
};

contentApi.createRelatedContentOnProcessInstanceUsingPOST1(processInstanceIdfileopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **file** | **Blob**| file | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="createRelatedContentOnTaskUsingPOST"></a>
# **createRelatedContentOnTaskUsingPOST**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST(taskIdrelatedContentopts)

Attach existing content to a task

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);

let opts = { 
  'isRelatedContent': true //  | isRelatedContent
};

contentApi.createRelatedContentOnTaskUsingPOST(taskIdrelatedContentopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="createRelatedContentOnTaskUsingPOST1"></a>
# **createRelatedContentOnTaskUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST1(taskIdfileopts)

Upload content and attach to a task

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);

let opts = { 
  'isRelatedContent': true //  | isRelatedContent
};

contentApi.createRelatedContentOnTaskUsingPOST1(taskIdfileopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **file** | **Blob**| file | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="createTemporaryRawRelatedContentUsingPOST"></a>
# **createTemporaryRawRelatedContentUsingPOST**
> RelatedContentRepresentation createTemporaryRawRelatedContentUsingPOST(file)

Upload content and create a local representation

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);


contentApi.createTemporaryRawRelatedContentUsingPOST(file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Blob**| file | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="createTemporaryRelatedContentUsingPOST"></a>
# **createTemporaryRelatedContentUsingPOST**
> RelatedContentRepresentation createTemporaryRelatedContentUsingPOST(relatedContent)

Create a local representation of content from a remote repository

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);


contentApi.createTemporaryRelatedContentUsingPOST(relatedContent).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="deleteContentUsingDELETE"></a>
# **deleteContentUsingDELETE**
> deleteContentUsingDELETE(contentId)

Remove a local content representation

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);


contentApi.deleteContentUsingDELETE(contentId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 

### Return type

null (empty response body)

<a name="getContentUsingGET"></a>
# **getContentUsingGET**
> RelatedContentRepresentation getContentUsingGET(contentId)

Get a local content representation

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);


contentApi.getContentUsingGET(contentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

<a name="getRawContentUsingGET"></a>
# **getRawContentUsingGET**
> getRawContentUsingGET(contentIdrenditionType)

Stream content rendition

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);


contentApi.getRawContentUsingGET(contentIdrenditionType).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 
 **renditionType** | **string**| renditionType | 

### Return type

null (empty response body)

<a name="getRawContentUsingGET1"></a>
# **getRawContentUsingGET1**
> getRawContentUsingGET1(contentId)

Stream content from a local content representation

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);


contentApi.getRawContentUsingGET1(contentId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **number**| contentId | 

### Return type

null (empty response body)

<a name="getRelatedContentForProcessInstanceUsingGET"></a>
# **getRelatedContentForProcessInstanceUsingGET**
> ResultListDataRepresentationRelatedContentRepresentation getRelatedContentForProcessInstanceUsingGET(processInstanceIdopts)

List content attached to a process instance

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);

let opts = { 
  'isRelatedContent': true //  | isRelatedContent
};

contentApi.getRelatedContentForProcessInstanceUsingGET(processInstanceIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**ResultListDataRepresentationRelatedContentRepresentation**](ResultListDataRepresentationRelatedContentRepresentation.md)

<a name="getRelatedContentForTaskUsingGET"></a>
# **getRelatedContentForTaskUsingGET**
> ResultListDataRepresentationRelatedContentRepresentation getRelatedContentForTaskUsingGET(taskIdopts)

List content attached to a task

### Example
```javascript
import ContentApi from 'ContentApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let contentApi = new ContentApi(this.alfrescoApi);

let opts = { 
  'isRelatedContent': true //  | isRelatedContent
};

contentApi.getRelatedContentForTaskUsingGET(taskIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **isRelatedContent** | **boolean**| isRelatedContent | [optional] 

### Return type

[**ResultListDataRepresentationRelatedContentRepresentation**](ResultListDataRepresentationRelatedContentRepresentation.md)

