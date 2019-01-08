# ActivitiPublicRestApi.AboutApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppVersion**](AboutApi.md#getAppVersion) | **GET** /api/enterprise/app-version | Server Information


<a name="getAppVersion"></a>
# **getAppVersion**
> {&#39;String&#39;: &#39;String&#39;} getAppVersion()

Server Information

Retrieve information about the Activiti BPM Suite version

### Example
```javascript

this.alfrescoJsApi.activiti.aboutApi.getAppVersion();
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

