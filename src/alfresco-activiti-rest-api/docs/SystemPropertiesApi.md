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

this.alfrescoJsApi.activiti.systemPropertiesApi.getProperties();
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

