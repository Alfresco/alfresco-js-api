# ActivitiPublicRestApi.SystemPropertiesApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProperties**](SystemPropertiesApi.md#getProperties) | **GET** /api/enterprise/system/properties | Retrieve System Properties


<a name="getProperties"></a>
# **getProperties**
> SystemPropertiesRepresentation getProperties()

Retrieve System Properties

Typical value is AllowInvolveByEmail

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.SystemPropertiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProperties(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemPropertiesRepresentation**](SystemPropertiesRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

