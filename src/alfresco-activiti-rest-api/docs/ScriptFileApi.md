# ActivitiPublicRestApi.ScriptFileApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getControllers**](ScriptFileApi.md#getControllers) | **GET** /api/enterprise/script-files/controllers | getControllers
[**getLibraries**](ScriptFileApi.md#getLibraries) | **GET** /api/enterprise/script-files/libraries | getLibraries


<a name="getControllers"></a>
# **getControllers**
> &#39;String&#39; getControllers()

getControllers

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ScriptFileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getControllers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/javascript

<a name="getLibraries"></a>
# **getLibraries**
> &#39;String&#39; getLibraries()

getLibraries

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ScriptFileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLibraries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/javascript

