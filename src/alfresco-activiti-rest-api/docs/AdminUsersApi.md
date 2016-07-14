# ActivitiPublicRestApi.AdminUsersApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateUsersUsingPUT1**](AdminUsersApi.md#bulkUpdateUsersUsingPUT1) | **PUT** /api/enterprise/admin/users | Bulk Update a list of users
[**createNewUserUsingPOST1**](AdminUsersApi.md#createNewUserUsingPOST1) | **POST** /api/enterprise/admin/users | Create a new user
[**getUserUsingGET1**](AdminUsersApi.md#getUserUsingGET1) | **GET** /api/enterprise/admin/users/{userId} | Retrieve user information
[**getUsersUsingGET1**](AdminUsersApi.md#getUsersUsingGET1) | **GET** /api/enterprise/admin/users | Get a list of users
[**updateUserDetailsUsingPUT1**](AdminUsersApi.md#updateUserDetailsUsingPUT1) | **PUT** /api/enterprise/admin/users/{userId} | Update user details


<a name="bulkUpdateUsersUsingPUT1"></a>
# **bulkUpdateUsersUsingPUT1**
> bulkUpdateUsersUsingPUT1(update)

Bulk Update a list of users

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminUsersApi();

var update = new ActivitiPublicRestApi.BulkUserUpdateRepresentation(); // BulkUserUpdateRepresentation | update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkUpdateUsersUsingPUT1(update, callback);
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

<a name="createNewUserUsingPOST1"></a>
# **createNewUserUsingPOST1**
> UserRepresentation createNewUserUsingPOST1(userRepresentation)

Create a new user

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminUsersApi();

var userRepresentation = new ActivitiPublicRestApi.UserRepresentation(); // UserRepresentation | userRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewUserUsingPOST1(userRepresentation, callback);
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

<a name="getUserUsingGET1"></a>
# **getUserUsingGET1**
> AbstractUserRepresentation getUserUsingGET1(userId, opts)

Retrieve user information

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminUsersApi();

var userId = 789; // Integer | userId

var opts = { 
  'summary': true // Boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET1(userId, opts, callback);
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

<a name="getUsersUsingGET1"></a>
# **getUsersUsingGET1**
> ResultListDataRepresentation getUsersUsingGET1(opts)

Get a list of users

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminUsersApi();

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET1(opts, callback);
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

<a name="updateUserDetailsUsingPUT1"></a>
# **updateUserDetailsUsingPUT1**
> updateUserDetailsUsingPUT1(userId, userRepresentation)

Update user details

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminUsersApi();

var userId = 789; // Integer | userId

var userRepresentation = new ActivitiPublicRestApi.UserRepresentation(); // UserRepresentation | userRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserDetailsUsingPUT1(userId, userRepresentation, callback);
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

