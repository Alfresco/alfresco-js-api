# DecisionauditsApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditTrail**](DecisionauditsApi.md#getAuditTrail) | **GET** /enterprise/decisions/audits/{auditTrailId} | Get an audit trail
[**getAuditTrails**](DecisionauditsApi.md#getAuditTrails) | **GET** /enterprise/decisions/audits | Query decision table audit trails


<a name="getAuditTrail"></a>
# **getAuditTrail**
> DecisionAuditRepresentation getAuditTrail(auditTrailId)

Get an audit trail

### Example
```javascript
import DecisionauditsApi from 'DecisionauditsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisionauditsApi = new DecisionauditsApi(this.alfrescoApi);


decisionauditsApi.getAuditTrail(auditTrailId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditTrailId** | **number**| auditTrailId | 

### Return type

[**DecisionAuditRepresentation**](DecisionAuditRepresentation.md)

<a name="getAuditTrails"></a>
# **getAuditTrails**
> ResultListDataRepresentationDecisionAuditRepresentation getAuditTrails(decisionKeydmnDeploymentId)

Query decision table audit trails

### Example
```javascript
import DecisionauditsApi from 'DecisionauditsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisionauditsApi = new DecisionauditsApi(this.alfrescoApi);


decisionauditsApi.getAuditTrails(decisionKeydmnDeploymentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decisionKey** | **string**| decisionKey | 
 **dmnDeploymentId** | **number**| dmnDeploymentId | 

### Return type

[**ResultListDataRepresentationDecisionAuditRepresentation**](ResultListDataRepresentationDecisionAuditRepresentation.md)

