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
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example //  | filter
  'groupId': 789 //  | groupId
  'externalId': externalId_example //  | externalId
  'externalIdCaseInsensitive': externalIdCaseInsensitive_example //  | externalIdCaseInsensitive
  'tenantId': 789 //  | tenantId
};

groupsApi.getGroupsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="getUsersForGroupUsingGET"></a>
# **getUsersForGroupUsingGET**
> ResultListDataRepresentationLightUserRepresentation getUsersForGroupUsingGET(groupId)

List members of a group

### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);


groupsApi.getUsersForGroupUsingGET(groupId).then((data) => {
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

[**ResultListDataRepresentationLightUserRepresentation**](ResultListDataRepresentationLightUserRepresentation.md)

