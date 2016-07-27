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

apiInstance.getControllers();
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

apiInstance.getLibraries();
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

