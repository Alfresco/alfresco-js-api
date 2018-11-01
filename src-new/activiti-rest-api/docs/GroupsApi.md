# .GroupsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroupsUsingGET**](GroupsApi.md#getGroupsUsingGET) | **GET** /enterprise/groups | Query groups
[**getUsersForGroupUsingGET**](GroupsApi.md#getUsersForGroupUsingGET) | **GET** /enterprise/groups/{groupId}/users | List members of a group


<a name="getGroupsUsingGET"></a>
# **getGroupsUsingGET**
> ResultListDataRepresentationLightGroupRepresentation getGroupsUsingGET(opts)

Query groups

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .GroupsApi();

var opts = { 
  'filter': filter_example // string | filter
  'groupId': 789 // number | groupId
  'externalId': externalId_example // string | externalId
  'externalIdCaseInsensitive': externalIdCaseInsensitive_example // string | externalIdCaseInsensitive
  'tenantId': 789 // number | tenantId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupsUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **groupId** | **number**| groupId | [optional] 
 **externalId** | **string**| externalId | [optional] 
 **externalIdCaseInsensitive** | **string**| externalIdCaseInsensitive | [optional] 
 **tenantId** | **number**| tenantId | [optional] 

### Return type

[**ResultListDataRepresentationLightGroupRepresentation**](ResultListDataRepresentationLightGroupRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersForGroupUsingGET"></a>
# **getUsersForGroupUsingGET**
> ResultListDataRepresentationLightUserRepresentation getUsersForGroupUsingGET(groupId)

List members of a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .GroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersForGroupUsingGET(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

[**ResultListDataRepresentationLightUserRepresentation**](ResultListDataRepresentationLightUserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

