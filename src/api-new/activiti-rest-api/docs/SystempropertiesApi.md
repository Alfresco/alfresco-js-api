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
import SystempropertiesApi from 'SystempropertiesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let systempropertiesApi = new SystempropertiesApi(this.alfrescoApi);


systempropertiesApi.getGlobalDateFormatUsingGET(tenantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**GlobalDateFormatRepresentation**](GlobalDateFormatRepresentation.md)

<a name="getPasswordValidationConstraintsUsingGET"></a>
# **getPasswordValidationConstraintsUsingGET**
> PasswordValidationConstraints getPasswordValidationConstraintsUsingGET(tenantId)

Get password validation constraints

### Example
```javascript
import SystempropertiesApi from 'SystempropertiesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let systempropertiesApi = new SystempropertiesApi(this.alfrescoApi);


systempropertiesApi.getPasswordValidationConstraintsUsingGET(tenantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**PasswordValidationConstraints**](PasswordValidationConstraints.md)

<a name="getPropertiesUsingGET"></a>
# **getPropertiesUsingGET**
> SystemPropertiesRepresentation getPropertiesUsingGET()

Retrieve system properties

Typical value is AllowInvolveByEmail

### Example
```javascript
import SystempropertiesApi from 'SystempropertiesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let systempropertiesApi = new SystempropertiesApi(this.alfrescoApi);

systempropertiesApi.getPropertiesUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemPropertiesRepresentation**](SystemPropertiesRepresentation.md)

<a name="involvedUsersCanEditFormsUsingGET"></a>
# **involvedUsersCanEditFormsUsingGET**
> boolean involvedUsersCanEditFormsUsingGET(tenantId)

Get involved users who can edit forms

### Example
```javascript
import SystempropertiesApi from 'SystempropertiesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let systempropertiesApi = new SystempropertiesApi(this.alfrescoApi);


systempropertiesApi.involvedUsersCanEditFormsUsingGET(tenantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

**boolean**

