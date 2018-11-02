# .DecisiontablesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDecisionTableEditorJsonUsingGET**](DecisiontablesApi.md#getDecisionTableEditorJsonUsingGET) | **GET** /enterprise/decisions/decision-tables/{decisionTableId}/editorJson | Get definition for a decision table
[**getDecisionTableUsingGET**](DecisiontablesApi.md#getDecisionTableUsingGET) | **GET** /enterprise/decisions/decision-tables/{decisionTableId} | Get a decision table
[**getDecisionTablesUsingGET**](DecisiontablesApi.md#getDecisionTablesUsingGET) | **GET** /enterprise/decisions/decision-tables | Query decision tables


<a name="getDecisionTableEditorJsonUsingGET"></a>
# **getDecisionTableEditorJsonUsingGET**
> JsonNode getDecisionTableEditorJsonUsingGET(decisionTableId)

Get definition for a decision table

### Example
```javascript
import DecisiontablesApi from 'DecisiontablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisiontablesApi = new DecisiontablesApi(this.alfrescoApi);


decisiontablesApi.getDecisionTableEditorJsonUsingGET(decisionTableId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decisionTableId** | **number**| decisionTableId | 

### Return type

[**JsonNode**](JsonNode.md)

<a name="getDecisionTableUsingGET"></a>
# **getDecisionTableUsingGET**
> RuntimeDecisionTableRepresentation getDecisionTableUsingGET(decisionTableId)

Get a decision table

### Example
```javascript
import DecisiontablesApi from 'DecisiontablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisiontablesApi = new DecisiontablesApi(this.alfrescoApi);


decisiontablesApi.getDecisionTableUsingGET(decisionTableId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decisionTableId** | **number**| decisionTableId | 

### Return type

[**RuntimeDecisionTableRepresentation**](RuntimeDecisionTableRepresentation.md)

<a name="getDecisionTablesUsingGET"></a>
# **getDecisionTablesUsingGET**
> ResultListDataRepresentationRuntimeDecisionTableRepresentation getDecisionTablesUsingGET(opts)

Query decision tables

### Example
```javascript
import DecisiontablesApi from 'DecisiontablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisiontablesApi = new DecisiontablesApi(this.alfrescoApi);

let opts = { 
  'nameLike': nameLike_example // string | nameLike
  'keyLike': keyLike_example // string | keyLike
  'tenantIdLike': tenantIdLike_example // string | tenantIdLike
  'deploymentId': 789 // number | deploymentId
  'sort': sort_example // string | sort
  'order': order_example // string | order
  'start': 56 // number | start
  'size': 56 // number | size
};

decisiontablesApi.getDecisionTablesUsingGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameLike** | **string**| nameLike | [optional] 
 **keyLike** | **string**| keyLike | [optional] 
 **tenantIdLike** | **string**| tenantIdLike | [optional] 
 **deploymentId** | **number**| deploymentId | [optional] 
 **sort** | **string**| sort | [optional] 
 **order** | **string**| order | [optional] 
 **start** | **number**| start | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**ResultListDataRepresentationRuntimeDecisionTableRepresentation**](ResultListDataRepresentationRuntimeDecisionTableRepresentation.md)

