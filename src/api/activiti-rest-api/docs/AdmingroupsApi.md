# AdmingroupsApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate**](AdmingroupsApi.md#activate) | **POST** /enterprise/admin/groups/{groupId}/action/activate | Activate a group
[**addAllUsersToGroup**](AdmingroupsApi.md#addAllUsersToGroup) | **POST** /enterprise/admin/groups/{groupId}/add-all-users | Add users to a group
[**addGroupCapabilities**](AdmingroupsApi.md#addGroupCapabilities) | **POST** /enterprise/admin/groups/{groupId}/capabilities | Add capabilities to a group
[**addGroupMember**](AdmingroupsApi.md#addGroupMember) | **POST** /enterprise/admin/groups/{groupId}/members/{userId} | Add a user to a group
[**addRelatedGroup**](AdmingroupsApi.md#addRelatedGroup) | **POST** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Get a related group
[**createNewGroup**](AdmingroupsApi.md#createNewGroup) | **POST** /enterprise/admin/groups | Create a group
[**deleteGroupCapability**](AdmingroupsApi.md#deleteGroupCapability) | **DELETE** /enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | Remove a capability from a group
[**deleteGroupMember**](AdmingroupsApi.md#deleteGroupMember) | **DELETE** /enterprise/admin/groups/{groupId}/members/{userId} | Delete a member from a group
[**deleteGroup**](AdmingroupsApi.md#deleteGroup) | **DELETE** /enterprise/admin/groups/{groupId} | Delete a group
[**deleteRelatedGroup**](AdmingroupsApi.md#deleteRelatedGroup) | **DELETE** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Delete a related group
[**getCapabilities**](AdmingroupsApi.md#getCapabilities) | **GET** /enterprise/admin/groups/{groupId}/potential-capabilities | List group capabilities
[**getGroupUsers**](AdmingroupsApi.md#getGroupUsers) | **GET** /enterprise/admin/groups/{groupId}/users | Get group members
[**getGroup**](AdmingroupsApi.md#getGroup) | **GET** /enterprise/admin/groups/{groupId} | Get a group
[**getGroups**](AdmingroupsApi.md#getGroups) | **GET** /enterprise/admin/groups | Query groups
[**getRelatedGroups**](AdmingroupsApi.md#getRelatedGroups) | **GET** /enterprise/admin/groups/{groupId}/related-groups | Get related groups
[**updateGroup**](AdmingroupsApi.md#updateGroup) | **PUT** /enterprise/admin/groups/{groupId} | Update a group


<a name="activate"></a>
# **activate**
> activate(groupId)

Activate a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.activate(groupId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

null (empty response body)

<a name="addAllUsersToGroup"></a>
# **addAllUsersToGroup**
> addAllUsersToGroup(groupId)

Add users to a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addAllUsersToGroup(groupId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

null (empty response body)

<a name="addGroupCapabilities"></a>
# **addGroupCapabilities**
> addGroupCapabilities(groupIdaddGroupCapabilitiesRepresentation)

Add capabilities to a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addGroupCapabilities(groupIdaddGroupCapabilitiesRepresentation).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **addGroupCapabilitiesRepresentation** | [**AddGroupCapabilitiesRepresentation**](AddGroupCapabilitiesRepresentation.md)| addGroupCapabilitiesRepresentation | 

### Return type

null (empty response body)

<a name="addGroupMember"></a>
# **addGroupMember**
> addGroupMember(groupIduserId)

Add a user to a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addGroupMember(groupIduserId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **userId** | **number**| userId | 

### Return type

null (empty response body)

<a name="addRelatedGroup"></a>
# **addRelatedGroup**
> addRelatedGroup(groupIdrelatedGroupIdtype)

Get a related group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addRelatedGroup(groupIdrelatedGroupIdtype).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **relatedGroupId** | **number**| relatedGroupId | 
 **type** | **string**| type | 

### Return type

null (empty response body)

<a name="createNewGroup"></a>
# **createNewGroup**
> GroupRepresentation createNewGroup(groupRepresentation)

Create a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.createNewGroup(groupRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)| groupRepresentation | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

<a name="deleteGroupCapability"></a>
# **deleteGroupCapability**
> deleteGroupCapability(groupIdgroupCapabilityId)

Remove a capability from a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteGroupCapability(groupIdgroupCapabilityId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **groupCapabilityId** | **number**| groupCapabilityId | 

### Return type

null (empty response body)

<a name="deleteGroupMember"></a>
# **deleteGroupMember**
> deleteGroupMember(groupIduserId)

Delete a member from a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteGroupMember(groupIduserId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **userId** | **number**| userId | 

### Return type

null (empty response body)

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupId)

Delete a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteGroup(groupId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

null (empty response body)

<a name="deleteRelatedGroup"></a>
# **deleteRelatedGroup**
> deleteRelatedGroup(groupIdrelatedGroupId)

Delete a related group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteRelatedGroup(groupIdrelatedGroupId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **relatedGroupId** | **number**| relatedGroupId | 

### Return type

null (empty response body)

<a name="getCapabilities"></a>
# **getCapabilities**
> string getCapabilities(groupId)

List group capabilities

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.getCapabilities(groupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

**string**

<a name="getGroupUsers"></a>
# **getGroupUsers**
> ResultListDataRepresentationLightUserRepresentation getGroupUsers(groupIdopts)

Get group members

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example //  | filter
  'page': 56 //  | page
  'pageSize': 56 //  | pageSize
};

admingroupsApi.getGroupUsers(groupIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="getGroup"></a>
# **getGroup**
> AbstractGroupRepresentation getGroup(groupIdopts)

Get a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);

let opts = { 
  'includeAllUsers': true //  | includeAllUsers
  'summary': true //  | summary
};

admingroupsApi.getGroup(groupIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **includeAllUsers** | **boolean**| includeAllUsers | [optional] 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**AbstractGroupRepresentation**](AbstractGroupRepresentation.md)

<a name="getGroups"></a>
# **getGroups**
> LightGroupRepresentation getGroups(opts)

Query groups

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);

let opts = { 
  'tenantId': 789 //  | tenantId
  'functional': true //  | functional
  'summary': true //  | summary
};

admingroupsApi.getGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | [optional] 
 **functional** | **boolean**| functional | [optional] 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**LightGroupRepresentation**](LightGroupRepresentation.md)

<a name="getRelatedGroups"></a>
# **getRelatedGroups**
> LightGroupRepresentation getRelatedGroups(groupId)

Get related groups

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.getRelatedGroups(groupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 

### Return type

[**LightGroupRepresentation**](LightGroupRepresentation.md)

<a name="updateGroup"></a>
# **updateGroup**
> GroupRepresentation updateGroup(groupIdgroupRepresentation)

Update a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.updateGroup(groupIdgroupRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **number**| groupId | 
 **groupRepresentation** | [**GroupRepresentation**](GroupRepresentation.md)| groupRepresentation | 

### Return type

[**GroupRepresentation**](GroupRepresentation.md)

