# .AdmingroupsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUsingPOST**](AdmingroupsApi.md#activateUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/action/activate | Activate a group
[**addAllUsersToGroupUsingPOST**](AdmingroupsApi.md#addAllUsersToGroupUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/add-all-users | Add users to a group
[**addGroupCapabilitiesUsingPOST**](AdmingroupsApi.md#addGroupCapabilitiesUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/capabilities | Add capabilities to a group
[**addGroupMemberUsingPOST**](AdmingroupsApi.md#addGroupMemberUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/members/{userId} | Add a user to a group
[**addRelatedGroupUsingPOST**](AdmingroupsApi.md#addRelatedGroupUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Get a related group
[**createNewGroupUsingPOST**](AdmingroupsApi.md#createNewGroupUsingPOST) | **POST** /enterprise/admin/groups | Create a group
[**deleteGroupCapabilityUsingDELETE**](AdmingroupsApi.md#deleteGroupCapabilityUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | Remove a capability from a group
[**deleteGroupMemberUsingDELETE**](AdmingroupsApi.md#deleteGroupMemberUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId}/members/{userId} | Delete a member from a group
[**deleteGroupUsingDELETE**](AdmingroupsApi.md#deleteGroupUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId} | Delete a group
[**deleteRelatedGroupUsingDELETE**](AdmingroupsApi.md#deleteRelatedGroupUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Delete a related group
[**getCapabilitiesUsingGET**](AdmingroupsApi.md#getCapabilitiesUsingGET) | **GET** /enterprise/admin/groups/{groupId}/potential-capabilities | List group capabilities
[**getGroupUsersUsingGET**](AdmingroupsApi.md#getGroupUsersUsingGET) | **GET** /enterprise/admin/groups/{groupId}/users | Get group members
[**getGroupUsingGET**](AdmingroupsApi.md#getGroupUsingGET) | **GET** /enterprise/admin/groups/{groupId} | Get a group
[**getGroupsUsingGET1**](AdmingroupsApi.md#getGroupsUsingGET1) | **GET** /enterprise/admin/groups | Query groups
[**getRelatedGroupsUsingGET**](AdmingroupsApi.md#getRelatedGroupsUsingGET) | **GET** /enterprise/admin/groups/{groupId}/related-groups | Get related groups
[**updateGroupUsingPUT**](AdmingroupsApi.md#updateGroupUsingPUT) | **PUT** /enterprise/admin/groups/{groupId} | Update a group


<a name="activateUsingPOST"></a>
# **activateUsingPOST**
> activateUsingPOST(groupId)

Activate a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.activateUsingPOST(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addAllUsersToGroupUsingPOST"></a>
# **addAllUsersToGroupUsingPOST**
> addAllUsersToGroupUsingPOST(groupId)

Add users to a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addAllUsersToGroupUsingPOST(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGroupCapabilitiesUsingPOST"></a>
# **addGroupCapabilitiesUsingPOST**
> addGroupCapabilitiesUsingPOST(groupIdaddGroupCapabilitiesRepresentation)

Add capabilities to a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGroupCapabilitiesUsingPOST(groupIdaddGroupCapabilitiesRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **addGroupCapabilitiesRepresentation** | [**AddGroupCapabilitiesRepresentation**](AddGroupCapabilitiesRepresentation.md)| addGroupCapabilitiesRepresentation | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGroupMemberUsingPOST"></a>
# **addGroupMemberUsingPOST**
> addGroupMemberUsingPOST(groupIduserId)

Add a user to a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGroupMemberUsingPOST(groupIduserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **userId** | **number**| userId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRelatedGroupUsingPOST"></a>
# **addRelatedGroupUsingPOST**
> addRelatedGroupUsingPOST(groupIdrelatedGroupIdtype)

Get a related group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addRelatedGroupUsingPOST(groupIdrelatedGroupIdtype, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **relatedGroupId** | **number**| relatedGroupId | 
 **type** | **string**| type | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNewGroupUsingPOST"></a>
# **createNewGroupUsingPOST**
> GroupRepresentation createNewGroupUsingPOST(groupRepresentation)

Create a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewGroupUsingPOST(groupRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)| groupRepresentation | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupCapabilityUsingDELETE"></a>
# **deleteGroupCapabilityUsingDELETE**
> deleteGroupCapabilityUsingDELETE(groupIdgroupCapabilityId)

Remove a capability from a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroupCapabilityUsingDELETE(groupIdgroupCapabilityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **groupCapabilityId** | **number**| groupCapabilityId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupMemberUsingDELETE"></a>
# **deleteGroupMemberUsingDELETE**
> deleteGroupMemberUsingDELETE(groupIduserId)

Delete a member from a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroupMemberUsingDELETE(groupIduserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **userId** | **number**| userId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupUsingDELETE"></a>
# **deleteGroupUsingDELETE**
> deleteGroupUsingDELETE(groupId)

Delete a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroupUsingDELETE(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRelatedGroupUsingDELETE"></a>
# **deleteRelatedGroupUsingDELETE**
> deleteRelatedGroupUsingDELETE(groupIdrelatedGroupId)

Delete a related group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRelatedGroupUsingDELETE(groupIdrelatedGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **relatedGroupId** | **number**| relatedGroupId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCapabilitiesUsingGET"></a>
# **getCapabilitiesUsingGET**
> any getCapabilitiesUsingGET(groupId)

List group capabilities

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCapabilitiesUsingGET(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupUsersUsingGET"></a>
# **getGroupUsersUsingGET**
> ResultListDataRepresentationLightUserRepresentation getGroupUsersUsingGET(groupIdopts)

Get group members

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();

var opts = { 
  'filter': filter_example // string | filter
  'page': 56 // number | page
  'pageSize': 56 // number | pageSize
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupUsersUsingGET(groupIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **filter** | **string**| filter | [optional] 
 **page** | **number**| page | [optional] 
 **pageSize** | **number**| pageSize | [optional] 

### Return type

[**ResultListDataRepresentationLightUserRepresentation**](ResultListDataRepresentationLightUserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupUsingGET"></a>
# **getGroupUsingGET**
> AbstractGroupRepresentation getGroupUsingGET(groupIdopts)

Get a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();

var opts = { 
  'includeAllUsers': true // boolean | includeAllUsers
  'summary': true // boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupUsingGET(groupIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **includeAllUsers** | **boolean**| includeAllUsers | [optional] 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**AbstractGroupRepresentation**](AbstractGroupRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupsUsingGET1"></a>
# **getGroupsUsingGET1**
> any getGroupsUsingGET1(opts)

Query groups

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();

var opts = { 
  'tenantId': 789 // number | tenantId
  'functional': true // boolean | functional
  'summary': true // boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupsUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | [optional] 
 **functional** | **boolean**| functional | [optional] 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**any**](LightGroupRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedGroupsUsingGET"></a>
# **getRelatedGroupsUsingGET**
> any getRelatedGroupsUsingGET(groupId)

Get related groups

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedGroupsUsingGET(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

[**any**](LightGroupRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroupUsingPUT"></a>
# **updateGroupUsingPUT**
> GroupRepresentation updateGroupUsingPUT(groupIdgroupRepresentation)

Update a group

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmingroupsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroupUsingPUT(groupIdgroupRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)| groupRepresentation | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

