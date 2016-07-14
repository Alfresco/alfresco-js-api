# ActivitiPublicRestApi.ContentRenditionApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRawContentUsingGET2**](ContentRenditionApi.md#getRawContentUsingGET2) | **GET** /api/enterprise/content/{contentId}/rendition/{renditionType} | Retrieve Raw Content


<a name="getRawContentUsingGET2"></a>
# **getRawContentUsingGET2**
> getRawContentUsingGET2(contentId, renditionType)

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
apiInstance.getRawContentUsingGET2(contentId, renditionType, callback);
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

