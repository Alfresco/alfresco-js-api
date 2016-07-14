# ActivitiPublicRestApi.AboutApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppVersionUsingGET**](AboutApi.md#getAppVersionUsingGET) | **GET** /api/enterprise/app-version | Server Information


<a name="getAppVersionUsingGET"></a>
# **getAppVersionUsingGET**
> {&#39;String&#39;: &#39;String&#39;} getAppVersionUsingGET()

Server Information

Retrieve information about the Activiti BPM Suite version

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AboutApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppVersionUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

