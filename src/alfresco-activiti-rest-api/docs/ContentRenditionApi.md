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

var contentId = 789; // Integer | contentId

var renditionType = "renditionType_example"; // String | renditionType

this.alfrescoJsApi.activiti.contentRenditionApi.getRawContent(contentId, renditionType);
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

