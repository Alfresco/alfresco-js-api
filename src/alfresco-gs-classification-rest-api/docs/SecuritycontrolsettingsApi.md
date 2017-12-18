# AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurityControlSetting**](SecurityControlSettingsApi.md#getSecurityControlSetting) | **GET** /security-control-settings/{securityControlSettingKey} | Get security control setting value
[**updateSecurityControlSetting**](SecurityControlSettingsApi.md#updateSecurityControlSetting) | **PUT** /security-control-settings/{securityControlSettingKey} | Update security control setting value


<a name="getSecurityControlSetting"></a>
# **getSecurityControlSetting**
> SecurityControlSettingEntry getSecurityControlSetting(securityControlSettingKey, )

Get security control setting value

Gets the value for a selected **securityControlSettingKey**.

### Example
```javascript


this.alfrescoJsApi.gsClassification.securityControlSettingsApi.getSecurityControlSetting(securityControlSettingKey, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityControlSettingKey** | **String**| The key for the security control setting. You can use one of the following settings: * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file  | 

### Return type

[**SecurityControlSettingEntry**](SecurityControlSettingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSecurityControlSetting"></a>
# **updateSecurityControlSetting**
> SecurityControlSettingEntry updateSecurityControlSetting(securityControlSettingKey, securityControlSettingValue)

Update security control setting value

Updates the value of a selected **securityControlSettingKey**.

### Example
```javascript



var securityControlSettingValue = new AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingBody(); // SecurityControlSettingBody | The new value for the security control setting. This can be a string or number, depending on the setting key.

this.alfrescoJsApi.gsClassification.securityControlSettingsApi.updateSecurityControlSetting(securityControlSettingKey, securityControlSettingValue).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityControlSettingKey** | **String**| The key for the security control setting. You can use one of the following settings: * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file  | 
 **securityControlSettingValue** | [**SecurityControlSettingBody**](SecurityControlSettingBody.md)| The new value for the security control setting. This can be a string or number, depending on the setting key. | 

### Return type

[**SecurityControlSettingEntry**](SecurityControlSettingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

