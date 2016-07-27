# ActivitiPublicRestApi.AdminGroupsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate**](AdminGroupsApi.md#activate) | **POST** /api/enterprise/admin/groups/{groupId}/action/activate | activate
[**addAllUsersToGroup**](AdminGroupsApi.md#addAllUsersToGroup) | **POST** /api/enterprise/admin/groups/{groupId}/add-all-users | addAllUsersToGroup
[**addGroupCapabilities**](AdminGroupsApi.md#addGroupCapabilities) | **POST** /api/enterprise/admin/groups/{groupId}/capabilities | addGroupCapabilities
[**addGroupMember**](AdminGroupsApi.md#addGroupMember) | **POST** /api/enterprise/admin/groups/{groupId}/members/{userId} | addGroupMember
[**addRelatedGroup**](AdminGroupsApi.md#addRelatedGroup) | **POST** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | addRelatedGroup
[**createNewGroup**](AdminGroupsApi.md#createNewGroup) | **POST** /api/enterprise/admin/groups | createNewGroup
[**deleteGroupCapability**](AdminGroupsApi.md#deleteGroupCapability) | **DELETE** /api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | deleteGroupCapability
[**deleteGroupMember**](AdminGroupsApi.md#deleteGroupMember) | **DELETE** /api/enterprise/admin/groups/{groupId}/members/{userId} | deleteGroupMember
[**deleteGroup**](AdminGroupsApi.md#deleteGroup) | **DELETE** /api/enterprise/admin/groups/{groupId} | deleteGroup
[**deleteRelatedGroup**](AdminGroupsApi.md#deleteRelatedGroup) | **DELETE** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | deleteRelatedGroup
[**getCapabilities**](AdminGroupsApi.md#getCapabilities) | **GET** /api/enterprise/admin/groups/{groupId}/potential-capabilities | getCapabilities
[**getGroupUsers**](AdminGroupsApi.md#getGroupUsers) | **GET** /api/enterprise/admin/groups/{groupId}/users | getGroupUsers
[**getGroup**](AdminGroupsApi.md#getGroup) | **GET** /api/enterprise/admin/groups/{groupId} | getGroup
[**getGroups**](AdminGroupsApi.md#getGroups) | **GET** /api/enterprise/admin/groups | getGroups
[**getRelatedGroups**](AdminGroupsApi.md#getRelatedGroups) | **GET** /api/enterprise/admin/groups/{groupId}/related-groups | getRelatedGroups
[**updateGroup**](AdminGroupsApi.md#updateGroup) | **PUT** /api/enterprise/admin/groups/{groupId} | updateGroup


<a name="activate"></a>
# **activate**
> activate(groupId)

activate

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


apiInstance.activate(groupId);
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

<a name="addAllUsersToGroup"></a>
# **addAllUsersToGroup**
> addAllUsersToGroup(groupId)

addAllUsersToGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


apiInstance.addAllUsersToGroup(groupId);
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

<a name="addGroupCapabilities"></a>
# **addGroupCapabilities**
> addGroupCapabilities(groupId, addGroupCapabilitiesRepresentation)

addGroupCapabilities

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var addGroupCapabilitiesRepresentation = new ActivitiPublicRestApi.AddGroupCapabilitiesRepresentation(); // AddGroupCapabilitiesRepresentation | addGroupCapabilitiesRepresentation


apiInstance.addGroupCapabilities(groupId, addGroupCapabilitiesRepresentation);
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

<a name="addGroupMember"></a>
# **addGroupMember**
> addGroupMember(groupId, userId)

addGroupMember

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var userId = 789; // Integer | userId

apiInstance.addGroupMember(groupId, userId);
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

<a name="addRelatedGroup"></a>
# **addRelatedGroup**
> addRelatedGroup(groupId, relatedGroupId, type)

addRelatedGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var relatedGroupId = 789; // Integer | relatedGroupId

var type = "type_example"; // String | type


apiInstance.addRelatedGroup(groupId, relatedGroupId, type);
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

<a name="createNewGroup"></a>
# **createNewGroup**
> GroupRepresentation createNewGroup(groupRepresentation)

createNewGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupRepresentation = new ActivitiPublicRestApi.GroupRepresentation(); // GroupRepresentation | groupRepresentation

apiInstance.createNewGroup(groupRepresentation);
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

<a name="deleteGroupCapability"></a>
# **deleteGroupCapability**
> deleteGroupCapability(groupId, groupCapabilityId)

deleteGroupCapability

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var groupCapabilityId = 789; // Integer | groupCapabilityId

apiInstance.deleteGroupCapability(groupId, groupCapabilityId);
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

<a name="deleteGroupMember"></a>
# **deleteGroupMember**
> deleteGroupMember(groupId, userId)

deleteGroupMember

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var userId = 789; // Integer | userId

apiInstance.deleteGroupMember(groupId, userId);
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

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupId)

deleteGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

apiInstance.deleteGroup(groupId);
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

<a name="deleteRelatedGroup"></a>
# **deleteRelatedGroup**
> deleteRelatedGroup(groupId, relatedGroupId)

deleteRelatedGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var relatedGroupId = 789; // Integer | relatedGroupId

apiInstance.deleteRelatedGroup(groupId, relatedGroupId);
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

<a name="getCapabilities"></a>
# **getCapabilities**
> [&#39;String&#39;] getCapabilities(groupId)

getCapabilities

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId


apiInstance.getCapabilities(groupId);
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

<a name="getGroupUsers"></a>
# **getGroupUsers**
> ResultListDataRepresentation getGroupUsers(groupId, opts)

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

apiInstance.getGroupUsers(groupId, opts);
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

<a name="getGroup"></a>
# **getGroup**
> AbstractGroupRepresentation getGroup(groupId, opts)

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

apiInstance.getGroup(groupId, opts);
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

<a name="getGroups"></a>
# **getGroups**
> [LightGroupRepresentation] getGroups(opts)

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

apiInstance.getGroups(opts);
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

<a name="getRelatedGroups"></a>
# **getRelatedGroups**
> [LightGroupRepresentation] getRelatedGroups(groupId)

getRelatedGroups

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

apiInstance.getRelatedGroups(groupId);
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

<a name="updateGroup"></a>
# **updateGroup**
> GroupRepresentation updateGroup(groupId, groupRepresentation)

updateGroup

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminGroupsApi();

var groupId = 789; // Integer | groupId

var groupRepresentation = new ActivitiPublicRestApi.GroupRepresentation(); // GroupRepresentation | groupRepresentation

apiInstance.updateGroup(groupId, groupRepresentation);
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

