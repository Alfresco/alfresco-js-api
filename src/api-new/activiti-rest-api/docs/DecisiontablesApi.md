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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DecisiontablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDecisionTableEditorJsonUsingGET(decisionTableId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decisionTableId** | **number**| decisionTableId | 

### Return type

[**JsonNode**](JsonNode.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDecisionTableUsingGET"></a>
# **getDecisionTableUsingGET**
> RuntimeDecisionTableRepresentation getDecisionTableUsingGET(decisionTableId)

Get a decision table

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DecisiontablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDecisionTableUsingGET(decisionTableId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decisionTableId** | **number**| decisionTableId | 

### Return type

[**RuntimeDecisionTableRepresentation**](RuntimeDecisionTableRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDecisionTablesUsingGET"></a>
# **getDecisionTablesUsingGET**
> ResultListDataRepresentationRuntimeDecisionTableRepresentation getDecisionTablesUsingGET(opts)

Query decision tables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DecisiontablesApi();

var opts = { 
  'nameLike': nameLike_example // string | nameLike
  'keyLike': keyLike_example // string | keyLike
  'tenantIdLike': tenantIdLike_example // string | tenantIdLike
  'deploymentId': 789 // number | deploymentId
  'sort': sort_example // string | sort
  'order': order_example // string | order
  'start': 56 // number | start
  'size': 56 // number | size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDecisionTablesUsingGET(opts, callback);
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

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

