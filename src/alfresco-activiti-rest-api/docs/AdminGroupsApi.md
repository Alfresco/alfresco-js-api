# ActivitiPublicRestApi.AdminGroupsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUsingPOST1**](AdminGroupsApi.md#activateUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/action/activate | activate
[**addAllUsersToGroupUsingPOST1**](AdminGroupsApi.md#addAllUsersToGroupUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/add-all-users | addAllUsersToGroup
[**addGroupCapabilitiesUsingPOST1**](AdminGroupsApi.md#addGroupCapabilitiesUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/capabilities | addGroupCapabilities
[**addGroupMemberUsingPOST1**](AdminGroupsApi.md#addGroupMemberUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/members/{userId} | addGroupMember
[**addRelatedGroupUsingPOST1**](AdminGroupsApi.md#addRelatedGroupUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | addRelatedGroup
[**createNewGroupUsingPOST1**](AdminGroupsApi.md#createNewGroupUsingPOST1) | **POST** /api/enterprise/admin/groups | createNewGroup
[**deleteGroupCapabilityUsingDELETE1**](AdminGroupsApi.md#deleteGroupCapabilityUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | deleteGroupCapability
[**deleteGroupMemberUsingDELETE1**](AdminGroupsApi.md#deleteGroupMemberUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId}/members/{userId} | deleteGroupMember
[**deleteGroupUsingDELETE1**](AdminGroupsApi.md#deleteGroupUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId} | deleteGroup
[**deleteRelatedGroupUsingDELETE1**](AdminGroupsApi.md#deleteRelatedGroupUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | deleteRelatedGroup
[**getCapabilitiesUsingGET1**](AdminGroupsApi.md#getCapabilitiesUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId}/potential-capabilities | getCapabilities
[**getGroupUsersUsingGET1**](AdminGroupsApi.md#getGroupUsersUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId}/users | getGroupUsers
[**getGroupUsingGET1**](AdminGroupsApi.md#getGroupUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId} | getGroup
[**getGroupsUsingGET2**](AdminGroupsApi.md#getGroupsUsingGET2) | **GET** /api/enterprise/admin/groups | getGroups
[**getRelatedGroupsUsingGET1**](AdminGroupsApi.md#getRelatedGroupsUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId}/related-groups | getRelatedGroups
[**updateGroupUsingPUT1**](AdminGroupsApi.md#updateGroupUsingPUT1) | **PUT** /api/enterprise/admin/groups/{groupId} | updateGroup


<a name="activateUsingPOST1"></a>
# **activateUsingPOST1**
> activateUsingPOST1(groupId)

activate

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.activateUsingPOST1(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addAllUsersToGroupUsingPOST1"></a>
# **addAllUsersToGroupUsingPOST1**
> addAllUsersToGroupUsingPOST1(groupId)

addAllUsersToGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addAllUsersToGroupUsingPOST1(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGroupCapabilitiesUsingPOST1"></a>
# **addGroupCapabilitiesUsingPOST1**
> addGroupCapabilitiesUsingPOST1(groupId, addGroupCapabilitiesRepresentation)

addGroupCapabilities

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var addGroupCapabilitiesRepresentation = new ActivitiPublicRestApi.AddGroupCapabilitiesRepresentation(); // AddGroupCapabilitiesRepresentation | addGroupCapabilitiesRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGroupCapabilitiesUsingPOST1(groupId, addGroupCapabilitiesRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **addGroupCapabilitiesRepresentation** | [**AddGroupCapabilitiesRepresentation**](AddGroupCapabilitiesRepresentation.md)| addGroupCapabilitiesRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGroupMemberUsingPOST1"></a>
# **addGroupMemberUsingPOST1**
> addGroupMemberUsingPOST1(groupId, userId)

addGroupMember

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGroupMemberUsingPOST1(groupId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **userId** | **Integer**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addRelatedGroupUsingPOST1"></a>
# **addRelatedGroupUsingPOST1**
> addRelatedGroupUsingPOST1(groupId, relatedGroupId, type)

addRelatedGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var relatedGroupId = 789; // Integer | relatedGroupId

var type = "type_example"; // String | type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addRelatedGroupUsingPOST1(groupId, relatedGroupId, type, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **relatedGroupId** | **Integer**| relatedGroupId | 
 **type** | **String**| type | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNewGroupUsingPOST1"></a>
# **createNewGroupUsingPOST1**
> GroupRepresentation createNewGroupUsingPOST1(groupRepresentation)

createNewGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupRepresentation = new ActivitiPublicRestApi.GroupRepresentation(); // GroupRepresentation | groupRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewGroupUsingPOST1(groupRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)| groupRepresentation | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupCapabilityUsingDELETE1"></a>
# **deleteGroupCapabilityUsingDELETE1**
> deleteGroupCapabilityUsingDELETE1(groupId, groupCapabilityId)

deleteGroupCapability

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var groupCapabilityId = 789; // Integer | groupCapabilityId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroupCapabilityUsingDELETE1(groupId, groupCapabilityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **groupCapabilityId** | **Integer**| groupCapabilityId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupMemberUsingDELETE1"></a>
# **deleteGroupMemberUsingDELETE1**
> deleteGroupMemberUsingDELETE1(groupId, userId)

deleteGroupMember

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroupMemberUsingDELETE1(groupId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **userId** | **Integer**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupUsingDELETE1"></a>
# **deleteGroupUsingDELETE1**
> deleteGroupUsingDELETE1(groupId)

deleteGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroupUsingDELETE1(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRelatedGroupUsingDELETE1"></a>
# **deleteRelatedGroupUsingDELETE1**
> deleteRelatedGroupUsingDELETE1(groupId, relatedGroupId)

deleteRelatedGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var relatedGroupId = 789; // Integer | relatedGroupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRelatedGroupUsingDELETE1(groupId, relatedGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **relatedGroupId** | **Integer**| relatedGroupId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCapabilitiesUsingGET1"></a>
# **getCapabilitiesUsingGET1**
> [&#39;String&#39;] getCapabilitiesUsingGET1(groupId)

getCapabilities

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCapabilitiesUsingGET1(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupUsersUsingGET1"></a>
# **getGroupUsersUsingGET1**
> ResultListDataRepresentation getGroupUsersUsingGET1(groupId, opts)

getGroupUsers

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var opts = { 
  'filter': "filter_example", // String | filter
  'page': 56, // Integer | page
  'pageSize': 56 // Integer | pageSize
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupUsersUsingGET1(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **filter** | **String**| filter | [optional] 
 **page** | **Integer**| page | [optional] 
 **pageSize** | **Integer**| pageSize | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupUsingGET1"></a>
# **getGroupUsingGET1**
> AbstractGroupRepresentation getGroupUsingGET1(groupId, opts)

getGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var opts = { 
  'includeAllUsers': true, // Boolean | includeAllUsers
  'summary': true // Boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupUsingGET1(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **includeAllUsers** | **Boolean**| includeAllUsers | [optional] 
 **summary** | **Boolean**| summary | [optional] 

### Return type

[**AbstractGroupRepresentation**](AbstractGroupRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupsUsingGET2"></a>
# **getGroupsUsingGET2**
> [LightGroupRepresentation] getGroupsUsingGET2(opts)

getGroups

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var opts = { 
  'tenantId': 789, // Integer | tenantId
  'functional': true, // Boolean | functional
  'summary': true // Boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupsUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | [optional] 
 **functional** | **Boolean**| functional | [optional] 
 **summary** | **Boolean**| summary | [optional] 

### Return type

[**[LightGroupRepresentation]**](LightGroupRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedGroupsUsingGET1"></a>
# **getRelatedGroupsUsingGET1**
> [LightGroupRepresentation] getRelatedGroupsUsingGET1(groupId)

getRelatedGroups

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedGroupsUsingGET1(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 

### Return type

[**[LightGroupRepresentation]**](LightGroupRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroupUsingPUT1"></a>
# **updateGroupUsingPUT1**
> GroupRepresentation updateGroupUsingPUT1(groupId, groupRepresentation)

updateGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var groupRepresentation = new ActivitiPublicRestApi.GroupRepresentation(); // GroupRepresentation | groupRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroupUsingPUT1(groupId, groupRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)| groupRepresentation | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

