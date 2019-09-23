# DecisiontablesApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDecisionTableEditorJson**](DecisiontablesApi.md#getDecisionTableEditorJson) | **GET** /enterprise/decisions/decision-tables/{decisionTableId}/editorJson | Get definition for a decision table
[**getDecisionTable**](DecisiontablesApi.md#getDecisionTable) | **GET** /enterprise/decisions/decision-tables/{decisionTableId} | Get a decision table
[**getDecisionTables**](DecisiontablesApi.md#getDecisionTables) | **GET** /enterprise/decisions/decision-tables | Query decision tables


<a name="getDecisionTableEditorJson"></a>
# **getDecisionTableEditorJson**
> JsonNode getDecisionTableEditorJson(decisionTableId)

Get definition for a decision table

### Example
```javascript
import DecisiontablesApi from 'DecisiontablesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisiontablesApi = new DecisiontablesApi(this.alfrescoApi);


decisiontablesApi.getDecisionTableEditorJson(decisionTableId).then((data) => {
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

<a name="getDecisionTable"></a>
# **getDecisionTable**
> RuntimeDecisionTableRepresentation getDecisionTable(decisionTableId)

Get a decision table

### Example
```javascript
import DecisiontablesApi from 'DecisiontablesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisiontablesApi = new DecisiontablesApi(this.alfrescoApi);


decisiontablesApi.getDecisionTable(decisionTableId).then((data) => {
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

<a name="getDecisionTables"></a>
# **getDecisionTables**
> ResultListDataRepresentationRuntimeDecisionTableRepresentation getDecisionTables(opts)

Query decision tables

### Example
```javascript
import DecisiontablesApi from 'DecisiontablesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisiontablesApi = new DecisiontablesApi(this.alfrescoApi);

let opts = { 
  'nameLike': nameLike_example //  | nameLike
  'keyLike': keyLike_example //  | keyLike
  'tenantIdLike': tenantIdLike_example //  | tenantIdLike
  'deploymentId': 789 //  | deploymentId
  'sort': sort_example //  | sort
  'order': order_example //  | order
  'start': 56 //  | start
  'size': 56 //  | size
};

decisiontablesApi.getDecisionTables(opts).then((data) => {
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

