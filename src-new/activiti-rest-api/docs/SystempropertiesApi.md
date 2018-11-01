# .SystempropertiesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGlobalDateFormatUsingGET**](SystempropertiesApi.md#getGlobalDateFormatUsingGET) | **GET** /enterprise/system/properties/global-date-format/{tenantId} | Get global date format
[**getPasswordValidationConstraintsUsingGET**](SystempropertiesApi.md#getPasswordValidationConstraintsUsingGET) | **GET** /enterprise/system/properties/password-validation-constraints/{tenantId} | Get password validation constraints
[**getPropertiesUsingGET**](SystempropertiesApi.md#getPropertiesUsingGET) | **GET** /enterprise/system/properties | Retrieve system properties
[**involvedUsersCanEditFormsUsingGET**](SystempropertiesApi.md#involvedUsersCanEditFormsUsingGET) | **GET** /enterprise/system/properties/involved-users-can-edit-forms/{tenantId} | Get involved users who can edit forms


<a name="getGlobalDateFormatUsingGET"></a>
# **getGlobalDateFormatUsingGET**
> GlobalDateFormatRepresentation getGlobalDateFormatUsingGET(tenantId)

Get global date format

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SystempropertiesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGlobalDateFormatUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**GlobalDateFormatRepresentation**](GlobalDateFormatRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPasswordValidationConstraintsUsingGET"></a>
# **getPasswordValidationConstraintsUsingGET**
> PasswordValidationConstraints getPasswordValidationConstraintsUsingGET(tenantId)

Get password validation constraints

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SystempropertiesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPasswordValidationConstraintsUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**PasswordValidationConstraints**](PasswordValidationConstraints.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPropertiesUsingGET"></a>
# **getPropertiesUsingGET**
> SystemPropertiesRepresentation getPropertiesUsingGET()

Retrieve system properties

Typical value is AllowInvolveByEmail

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SystempropertiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPropertiesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemPropertiesRepresentation**](SystemPropertiesRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="involvedUsersCanEditFormsUsingGET"></a>
# **involvedUsersCanEditFormsUsingGET**
> boolean involvedUsersCanEditFormsUsingGET(tenantId)

Get involved users who can edit forms

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SystempropertiesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.involvedUsersCanEditFormsUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

**boolean**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

