# ActivitiPublicRestApi.ContentRenditionApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRawContent**](ContentRenditionApi.md#getRawContent) | **GET** /api/enterprise/content/{contentId}/rendition/{renditionType} | Retrieve Raw Content


<a name="getRawContent"></a>
# **getRawContent**
> getRawContent(contentId, renditionType)

Retrieve Raw Content

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ContentRenditionApi();

var contentId = 789; // Integer | contentId

var renditionType = "renditionType_example"; // String | renditionType


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRawContent(contentId, renditionType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Integer**| contentId | 
 **renditionType** | **String**| renditionType | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

