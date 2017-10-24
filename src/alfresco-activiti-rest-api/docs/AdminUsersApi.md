# ActivitiPublicRestApi.AdminUsersApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateUsers**](AdminUsersApi.md#bulkUpdateUsers) | **PUT** /api/enterprise/admin/users | Bulk Update a list of users
[**createNewUser**](AdminUsersApi.md#createNewUser) | **POST** /api/enterprise/admin/users | Create a new user
[**getUser**](AdminUsersApi.md#getUser) | **GET** /api/enterprise/admin/users/{userId} | Retrieve user information
[**getUsers**](AdminUsersApi.md#getUsers) | **GET** /api/enterprise/admin/users | Get a list of users
[**updateUserDetails**](AdminUsersApi.md#updateUserDetails) | **PUT** /api/enterprise/admin/users/{userId} | Update user details


<a name="bulkUpdateUsers"></a>
# **bulkUpdateUsers**
> bulkUpdateUsers(update)

Bulk Update a list of users

### Example
```javascript

var update = new this.alfrescoJsApi.activiti.BulkUserUpdateRepresentation(); // BulkUserUpdateRepresentation | update

this.alfrescoJsApi.activiti.adminUsersApi.bulkUpdateUsers(update);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update** | [**BulkUserUpdateRepresentation**](BulkUserUpdateRepresentation.md)| update | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNewUser"></a>
# **createNewUser**
> UserRepresentation createNewUser(userRepresentation)

Create a new user

### Example
```javascript

var userRepresentation = new this.alfrescoJsApi.activiti.UserRepresentation(); // UserRepresentation | userRepresentation

this.alfrescoJsApi.activiti.adminUsersApi.createNewUser(userRepresentation);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> AbstractUserRepresentation getUser(userId, opts)

Retrieve user information

### Example
```javascript

var userId = 789; // Integer | userId

var opts = { 
  'summary': true // Boolean | summary
};

this.alfrescoJsApi.activiti.adminUsersApi.getUser(userId, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **summary** | **Boolean**| summary | [optional] 

### Return type

[**AbstractUserRepresentation**](AbstractUserRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> ResultListDataRepresentation getUsers(opts)

Get a list of users

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'status': "status_example", // String | status
  'accountType': "accountType_example", // String | accountType
  'sort': "sort_example", // String | sort
  'company': "company_example", // String | company
  'start': 56, // Integer | start
  'page': 56, // Integer | page
  'size': 56, // Integer | size
  'groupId': 789, // Integer | groupId
  'tenantId': 789, // Integer | tenantId
  'summary': true // Boolean | summary
};

this.alfrescoJsApi.activiti.adminUsersApi.getUsers(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **status** | **String**| status | [optional] 
 **accountType** | **String**| accountType | [optional] 
 **sort** | **String**| sort | [optional] 
 **company** | **String**| company | [optional] 
 **start** | **Integer**| start | [optional] 
 **page** | **Integer**| page | [optional] 
 **size** | **Integer**| size | [optional] 
 **groupId** | **Integer**| groupId | [optional] 
 **tenantId** | **Integer**| tenantId | [optional] 
 **summary** | **Boolean**| summary | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserDetails"></a>
# **updateUserDetails**
> updateUserDetails(userId, userRepresentation)

Update user details

### Example
```javascript

var userId = 789; // Integer | userId

var userRepresentation = new this.alfrescoJsApi.activiti.UserRepresentation(); // UserRepresentation | userRepresentation

this.alfrescoJsApi.activiti.adminUsersApi.updateUserDetails(userId, userRepresentation);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

