# AlfrescoContentServicesRestApi.DiscoveryApi

All URIs are relative to *https://localhost/alfresco/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRepositoryInformation**](DiscoveryApi.md#getRepositoryInformation) | **GET** /discovery | Get repository information


<a name="getRepositoryInformation"></a>
# **getRepositoryInformation**
> DiscoveryEntry getRepositoryInformation

Get repository information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.\n\nRetrieves the capabilities and detailed version information from the repository.\n

### Example
```javascript


this.alfrescoJsApi.discovery.discoveryApi.getRepositoryInformation().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DiscoveryEntry**](DiscoveryEntry.md)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

