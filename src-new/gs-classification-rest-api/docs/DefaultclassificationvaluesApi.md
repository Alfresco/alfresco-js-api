# .DefaultclassificationvaluesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculateDefaultDeclassificationDate**](DefaultclassificationvaluesApi.md#calculateDefaultDeclassificationDate) | **POST** /default-classification-values/{nodeId}/calculate-declassification-date | Calculate the default declassification date


<a name="calculateDefaultDeclassificationDate"></a>
# **calculateDefaultDeclassificationDate**
> DeclassificationDate calculateDefaultDeclassificationDate(nodeId)

Calculate the default declassification date

Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DefaultclassificationvaluesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.calculateDefaultDeclassificationDate(nodeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 

### Return type

[**DeclassificationDate**](DeclassificationDate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

