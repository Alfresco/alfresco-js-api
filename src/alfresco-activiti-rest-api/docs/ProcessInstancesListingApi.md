# ActivitiPublicRestApi.ProcessInstancesListingApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterProcessInstancesUsingPOST**](ProcessInstancesListingApi.md#filterProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
[**getProcessInstancesUsingPOST**](ProcessInstancesListingApi.md#getProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances


<a name="filterProcessInstancesUsingPOST"></a>
# **filterProcessInstancesUsingPOST**
> ResultListDataRepresentation filterProcessInstancesUsingPOST(filterRequest)

Filter a list of process instances

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesListingApi();

var filterRequest = new ActivitiPublicRestApi.ProcessInstanceFilterRequestRepresentation(); // ProcessInstanceFilterRequestRepresentation | filterRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterProcessInstancesUsingPOST(filterRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRequest** | [**ProcessInstanceFilterRequestRepresentation**](ProcessInstanceFilterRequestRepresentation.md)| filterRequest | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstancesUsingPOST"></a>
# **getProcessInstancesUsingPOST**
> ResultListDataRepresentation getProcessInstancesUsingPOST(requestNode)

Retrieve a list of process instances

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesListingApi();

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstancesUsingPOST(requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

