# .SecuritycontrolsettingsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurityControlSetting**](SecuritycontrolsettingsApi.md#getSecurityControlSetting) | **GET** /security-control-settings/{securityControlSettingKey} | Get security control setting value
[**updateSecurityControlSetting**](SecuritycontrolsettingsApi.md#updateSecurityControlSetting) | **PUT** /security-control-settings/{securityControlSettingKey} | Update security control setting value


<a name="getSecurityControlSetting"></a>
# **getSecurityControlSetting**
> SecurityControlSettingEntry getSecurityControlSetting(securityControlSettingKey)

Get security control setting value

Gets the value for a selected **securityControlSettingKey**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SecuritycontrolsettingsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSecurityControlSetting(securityControlSettingKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityControlSettingKey** | **string**| The key for the security control setting. You can use one of the following settings:
* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file
 | 

### Return type

[**SecurityControlSettingEntry**](SecurityControlSettingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSecurityControlSetting"></a>
# **updateSecurityControlSetting**
> SecurityControlSettingEntry updateSecurityControlSetting(securityControlSettingKeysecurityControlSettingValue)

Update security control setting value

Updates the value of a selected **securityControlSettingKey**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SecuritycontrolsettingsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSecurityControlSetting(securityControlSettingKeysecurityControlSettingValue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityControlSettingKey** | **string**| The key for the security control setting. You can use one of the following settings:
* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file
 | 
 **securityControlSettingValue** | [**SecurityControlSettingBody**](SecurityControlSettingBody.md)| The new value for the security control setting. This can be a string or number, depending on the setting key. | 

### Return type

[**SecurityControlSettingEntry**](SecurityControlSettingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

