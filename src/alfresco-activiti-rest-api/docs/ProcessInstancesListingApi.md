# ActivitiPublicRestApi.ProcessInstancesListingApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterProcessInstances**](ProcessInstancesListingApi.md#filterProcessInstances) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
[**getProcessInstances**](ProcessInstancesListingApi.md#getProcessInstances) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances


<a name="filterProcessInstances"></a>
# **filterProcessInstances**
> ResultListDataRepresentation filterProcessInstances(filterRequest)

Filter a list of process instances

### Example
```javascript

var filterRequest = new this.alfrescoJsApi.activiti.ProcessInstanceFilterRequestRepresentation(); // ProcessInstanceFilterRequestRepresentation | filterRequest

this.alfrescoJsApi.activiti.processInstancesListingApi.filterProcessInstances(filterRequest);
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

<a name="getProcessInstances"></a>
# **getProcessInstances**
> ResultListDataRepresentation getProcessInstances(requestNode)

Retrieve a list of process instances

### Example
```javascript
var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode

this.alfrescoJsApi.activiti.processInstancesListingApi.getProcessInstances(requestNode);
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

