# ActivitiPublicRestApi.AppsRuntimeApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAppDefinitionsUsingPOST**](AppsRuntimeApi.md#deployAppDefinitionsUsingPOST) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
[**getAppDefinitionsUsingGET**](AppsRuntimeApi.md#getAppDefinitionsUsingGET) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps


<a name="deployAppDefinitionsUsingPOST"></a>
# **deployAppDefinitionsUsingPOST**
> deployAppDefinitionsUsingPOST(saveObject)

Deploy published app

After creating and puclished an app the user can add it to his/her landing page.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsRuntimeApi();

var saveObject = new ActivitiPublicRestApi.RuntimeAppDefinitionSaveRepresentation(); // RuntimeAppDefinitionSaveRepresentation | saveObject


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deployAppDefinitionsUsingPOST(saveObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveObject** | [**RuntimeAppDefinitionSaveRepresentation**](RuntimeAppDefinitionSaveRepresentation.md)| saveObject | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDefinitionsUsingGET"></a>
# **getAppDefinitionsUsingGET**
> ResultListDataRepresentation getAppDefinitionsUsingGET()

List runtime apps

When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AppsRuntimeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppDefinitionsUsingGET(callback);
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

