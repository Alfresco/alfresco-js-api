# ActivitiPublicRestApi.IntegrationAccountApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccounts**](IntegrationAccountApi.md#getAccounts) | **GET** /api/enterprise/account/integration | Retrieve Alfresco account information


<a name="getAccounts"></a>
# **getAccounts**
> ResultListDataRepresentation getAccounts()

Retrieve Alfresco account information

Ideal to map accounts &amp; integrate with 3rd party app/client

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAccountApi();

apiInstance.getAccounts();
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

