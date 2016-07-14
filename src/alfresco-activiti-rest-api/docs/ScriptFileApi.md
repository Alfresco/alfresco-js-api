# ActivitiPublicRestApi.ScriptFileApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getControllersUsingGET**](ScriptFileApi.md#getControllersUsingGET) | **GET** /api/enterprise/script-files/controllers | getControllers
[**getLibrariesUsingGET**](ScriptFileApi.md#getLibrariesUsingGET) | **GET** /api/enterprise/script-files/libraries | getLibraries


<a name="getControllersUsingGET"></a>
# **getControllersUsingGET**
> &#39;String&#39; getControllersUsingGET()

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
apiInstance.getControllersUsingGET(callback);
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

<a name="getLibrariesUsingGET"></a>
# **getLibrariesUsingGET**
> &#39;String&#39; getLibrariesUsingGET()

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
apiInstance.getLibrariesUsingGET(callback);
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

