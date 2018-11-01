# AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculateDefaultDeclassificationDate**](DeclassificationExemptionsApi.md#calculateDefaultDeclassificationDate) | **POST** /default-classification-values/{nodeId}/calculate-declassification-date | Calculate the default declassification date


<a name="calculateDefaultDeclassificationDate"></a>
# **calculateDefaultDeclassificationDate**
> DeclassificationDate calculateDefaultDeclassificationDate(nodeId)

Calculate the default declassification date

Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.

### Example
```javascript

this.alfrescoJsApi.gsClassification.declassificationExemptionsApi.calculateDefaultDeclassificationDate(nodeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 

### Return type

[**DeclassificationDate**](DeclassificationDate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

