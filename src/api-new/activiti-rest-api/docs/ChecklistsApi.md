# .ChecklistsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubtaskUsingPOST**](ChecklistsApi.md#addSubtaskUsingPOST) | **POST** /enterprise/tasks/{taskId}/checklist | Create a task checklist
[**getChecklistUsingGET**](ChecklistsApi.md#getChecklistUsingGET) | **GET** /enterprise/tasks/{taskId}/checklist | Get checklist for a task
[**orderChecklistUsingPUT**](ChecklistsApi.md#orderChecklistUsingPUT) | **PUT** /enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist


<a name="addSubtaskUsingPOST"></a>
# **addSubtaskUsingPOST**
> TaskRepresentation addSubtaskUsingPOST(taskIdtaskRepresentation)

Create a task checklist

### Example
```javascript
import ChecklistsApi from 'ChecklistsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let checklistsApi = new ChecklistsApi(this.alfrescoApi);


checklistsApi.addSubtaskUsingPOST(taskIdtaskRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **taskRepresentation** | [**TaskRepresentation**](TaskRepresentation.md)| taskRepresentation | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

<a name="getChecklistUsingGET"></a>
# **getChecklistUsingGET**
> ResultListDataRepresentationTaskRepresentation getChecklistUsingGET(taskId)

Get checklist for a task

### Example
```javascript
import ChecklistsApi from 'ChecklistsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let checklistsApi = new ChecklistsApi(this.alfrescoApi);


checklistsApi.getChecklistUsingGET(taskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

<a name="orderChecklistUsingPUT"></a>
# **orderChecklistUsingPUT**
> orderChecklistUsingPUT(taskIdorderRepresentation)

Change the order of items on a checklist

### Example
```javascript
import ChecklistsApi from 'ChecklistsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let checklistsApi = new ChecklistsApi(this.alfrescoApi);


checklistsApi.orderChecklistUsingPUT(taskIdorderRepresentation).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **orderRepresentation** | [**ChecklistOrderRepresentation**](ChecklistOrderRepresentation.md)| orderRepresentation | 

### Return type

null (empty response body)

