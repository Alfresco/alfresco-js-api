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
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.activateUsingPOST(groupId).then(function() {
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

<a name="addAllUsersToGroupUsingPOST"></a>
# **addAllUsersToGroupUsingPOST**
> addAllUsersToGroupUsingPOST(groupId)

Add users to a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addAllUsersToGroupUsingPOST(groupId).then(function() {
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

<a name="addGroupCapabilitiesUsingPOST"></a>
# **addGroupCapabilitiesUsingPOST**
> addGroupCapabilitiesUsingPOST(groupIdaddGroupCapabilitiesRepresentation)

Add capabilities to a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addGroupCapabilitiesUsingPOST(groupIdaddGroupCapabilitiesRepresentation).then(function() {
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

<a name="addGroupMemberUsingPOST"></a>
# **addGroupMemberUsingPOST**
> addGroupMemberUsingPOST(groupIduserId)

Add a user to a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addGroupMemberUsingPOST(groupIduserId).then(function() {
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

<a name="addRelatedGroupUsingPOST"></a>
# **addRelatedGroupUsingPOST**
> addRelatedGroupUsingPOST(groupIdrelatedGroupIdtype)

Get a related group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.addRelatedGroupUsingPOST(groupIdrelatedGroupIdtype).then(function() {
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

<a name="createNewGroupUsingPOST"></a>
# **createNewGroupUsingPOST**
> GroupRepresentation createNewGroupUsingPOST(groupRepresentation)

Create a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.createNewGroupUsingPOST(groupRepresentation).then(function(data) {
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

<a name="deleteGroupCapabilityUsingDELETE"></a>
# **deleteGroupCapabilityUsingDELETE**
> deleteGroupCapabilityUsingDELETE(groupIdgroupCapabilityId)

Remove a capability from a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteGroupCapabilityUsingDELETE(groupIdgroupCapabilityId).then(function() {
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

<a name="deleteGroupMemberUsingDELETE"></a>
# **deleteGroupMemberUsingDELETE**
> deleteGroupMemberUsingDELETE(groupIduserId)

Delete a member from a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteGroupMemberUsingDELETE(groupIduserId).then(function() {
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

<a name="deleteGroupUsingDELETE"></a>
# **deleteGroupUsingDELETE**
> deleteGroupUsingDELETE(groupId)

Delete a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteGroupUsingDELETE(groupId).then(function() {
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

<a name="deleteRelatedGroupUsingDELETE"></a>
# **deleteRelatedGroupUsingDELETE**
> deleteRelatedGroupUsingDELETE(groupIdrelatedGroupId)

Delete a related group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.deleteRelatedGroupUsingDELETE(groupIdrelatedGroupId).then(function() {
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

<a name="getCapabilitiesUsingGET"></a>
# **getCapabilitiesUsingGET**
> Array<string> getCapabilitiesUsingGET(groupId)

List group capabilities

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.getCapabilitiesUsingGET(groupId).then(function(data) {
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

**Array<string>**

<a name="getGroupUsersUsingGET"></a>
# **getGroupUsersUsingGET**
> ResultListDataRepresentationLightUserRepresentation getGroupUsersUsingGET(groupIdopts)

Get group members

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example // string | filter
  'page': 56 // number | page
  'pageSize': 56 // number | pageSize
};

admingroupsApi.getGroupUsersUsingGET(groupIdopts).then(function(data) {
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

<a name="getGroupUsingGET"></a>
# **getGroupUsingGET**
> AbstractGroupRepresentation getGroupUsingGET(groupIdopts)

Get a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);

let opts = { 
  'includeAllUsers': true // boolean | includeAllUsers
  'summary': true // boolean | summary
};

admingroupsApi.getGroupUsingGET(groupIdopts).then(function(data) {
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

<a name="getGroupsUsingGET1"></a>
# **getGroupsUsingGET1**
> Array<LightGroupRepresentation> getGroupsUsingGET1(opts)

Query groups

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);

let opts = { 
  'tenantId': 789 // number | tenantId
  'functional': true // boolean | functional
  'summary': true // boolean | summary
};

admingroupsApi.getGroupsUsingGET1(opts).then(function(data) {
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

[**Array&lt;LightGroupRepresentation&gt;**](LightGroupRepresentation.md)

<a name="getRelatedGroupsUsingGET"></a>
# **getRelatedGroupsUsingGET**
> Array<LightGroupRepresentation> getRelatedGroupsUsingGET(groupId)

Get related groups

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.getRelatedGroupsUsingGET(groupId).then(function(data) {
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

[**Array&lt;LightGroupRepresentation&gt;**](LightGroupRepresentation.md)

<a name="updateGroupUsingPUT"></a>
# **updateGroupUsingPUT**
> GroupRepresentation updateGroupUsingPUT(groupIdgroupRepresentation)

Update a group

### Example
```javascript
import AdmingroupsApi from 'AdmingroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admingroupsApi = new AdmingroupsApi(this.alfrescoApi);


admingroupsApi.updateGroupUsingPUT(groupIdgroupRepresentation).then(function(data) {
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

