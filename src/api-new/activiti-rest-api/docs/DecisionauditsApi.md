# .DecisionauditsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditTrailUsingGET**](DecisionauditsApi.md#getAuditTrailUsingGET) | **GET** /enterprise/decisions/audits/{auditTrailId} | Get an audit trail
[**getAuditTrailsUsingGET**](DecisionauditsApi.md#getAuditTrailsUsingGET) | **GET** /enterprise/decisions/audits | Query decision table audit trails


<a name="getAuditTrailUsingGET"></a>
# **getAuditTrailUsingGET**
> DecisionAuditRepresentation getAuditTrailUsingGET(auditTrailId)

Get an audit trail

### Example
```javascript
import DecisionauditsApi from 'DecisionauditsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisionauditsApi = new DecisionauditsApi(this.alfrescoApi);


decisionauditsApi.getAuditTrailUsingGET(auditTrailId).then(function(data) {
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

<a name="getAuditTrailsUsingGET"></a>
# **getAuditTrailsUsingGET**
> ResultListDataRepresentationDecisionAuditRepresentation getAuditTrailsUsingGET(decisionKeydmnDeploymentId)

Query decision table audit trails

### Example
```javascript
import DecisionauditsApi from 'DecisionauditsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let decisionauditsApi = new DecisionauditsApi(this.alfrescoApi);


decisionauditsApi.getAuditTrailsUsingGET(decisionKeydmnDeploymentId).then(function(data) {
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

