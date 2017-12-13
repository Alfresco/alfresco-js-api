# AlfrescoGovernanceServicesSecurityControls.SecuritycontrolsettingsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurityControlSetting**](SecuritycontrolsettingsApi.md#getSecurityControlSetting) | **GET** /security-control-settings/{securityControlSettingKey} | Get security control setting value
[**updateSecurityControlSetting**](SecuritycontrolsettingsApi.md#updateSecurityControlSetting) | **PUT** /security-control-settings/{securityControlSettingKey} | Update security control setting value


<a name="getSecurityControlSetting"></a>
# **getSecurityControlSetting**
> SecurityControlSettingEntry getSecurityControlSetting(securityControlSettingKey, )

Get security control setting value

Gets the value for a selected **securityControlSettingKey**.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.SecuritycontrolsettingsApi()

var securityControlSettingKey = "securityControlSettingKey_example"; // {String} The key for the security control setting. You can use one of the following settings:\n* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file\n

apiInstance.getSecurityControlSetting(securityControlSettingKey, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityControlSettingKey** | **String**| The key for the security control setting. You can use one of the following settings:\n* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file\n | 

### Return type

[**SecurityControlSettingEntry**](SecurityControlSettingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSecurityControlSetting"></a>
# **updateSecurityControlSetting**
> SecurityControlSettingEntry updateSecurityControlSetting(securityControlSettingKey, securityControlSettingValue)

Update security control setting value

Updates the value of a selected **securityControlSettingKey**.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.SecuritycontrolsettingsApi()

var securityControlSettingKey = "securityControlSettingKey_example"; // {String} The key for the security control setting. You can use one of the following settings:\n* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file\n

var securityControlSettingValue = new AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingBody(); // {SecurityControlSettingBody} The new value for the security control setting. This can be a string or number, depending on the setting key.

apiInstance.updateSecurityControlSetting(securityControlSettingKey, securityControlSettingValue).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityControlSettingKey** | **String**| The key for the security control setting. You can use one of the following settings:\n* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file\n | 
 **securityControlSettingValue** | [**SecurityControlSettingBody**](SecurityControlSettingBody.md)| The new value for the security control setting. This can be a string or number, depending on the setting key. | 

### Return type

[**SecurityControlSettingEntry**](SecurityControlSettingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

