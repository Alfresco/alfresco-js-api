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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DecisionauditsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditTrailUsingGET(auditTrailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditTrailId** | **number**| auditTrailId | 

### Return type

[**DecisionAuditRepresentation**](DecisionAuditRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAuditTrailsUsingGET"></a>
# **getAuditTrailsUsingGET**
> ResultListDataRepresentationDecisionAuditRepresentation getAuditTrailsUsingGET(decisionKeydmnDeploymentId)

Query decision table audit trails

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DecisionauditsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuditTrailsUsingGET(decisionKeydmnDeploymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decisionKey** | **string**| decisionKey | 
 **dmnDeploymentId** | **number**| dmnDeploymentId | 

### Return type

[**ResultListDataRepresentationDecisionAuditRepresentation**](ResultListDataRepresentationDecisionAuditRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

