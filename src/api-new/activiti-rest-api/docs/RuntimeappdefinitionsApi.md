# .RuntimeappdefinitionsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAppDefinitionsUsingPOST**](RuntimeappdefinitionsApi.md#deployAppDefinitionsUsingPOST) | **POST** /enterprise/runtime-app-definitions | Deploy a published app
[**getAppDefinitionUsingGET1**](RuntimeappdefinitionsApi.md#getAppDefinitionUsingGET1) | **GET** /enterprise/runtime-app-definitions/{appDefinitionId} | Get a runtime app
[**getAppDefinitionsUsingGET**](RuntimeappdefinitionsApi.md#getAppDefinitionsUsingGET) | **GET** /enterprise/runtime-app-definitions | List runtime apps


<a name="deployAppDefinitionsUsingPOST"></a>
# **deployAppDefinitionsUsingPOST**
> deployAppDefinitionsUsingPOST(saveObject)

Deploy a published app

Deploying an app allows the user to see it on his/her landing page. Apps must be published before they can be deployed.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdefinitionsApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDefinitionUsingGET1"></a>
# **getAppDefinitionUsingGET1**
> AppDefinitionRepresentation getAppDefinitionUsingGET1(appDefinitionId)

Get a runtime app

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdefinitionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppDefinitionUsingGET1(appDefinitionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDefinitionId** | **number**| appDefinitionId | 

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDefinitionsUsingGET"></a>
# **getAppDefinitionsUsingGET**
> ResultListDataRepresentationAppDefinitionRepresentation getAppDefinitionsUsingGET()

List runtime apps

When a user logs in into Alfresco Process Services Suite, a landing page is displayed containing all the apps that the user is allowed to see and use. These are referred to as runtime apps.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdefinitionsApi();

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

[**ResultListDataRepresentationAppDefinitionRepresentation**](ResultListDataRepresentationAppDefinitionRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

