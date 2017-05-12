# AlfrescoAuthRestApi.AuthenticationApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/authentication/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTicket**](AuthenticationApi.md#createTicket) | **POST** /tickets | Create ticket (login)
[**deleteTicket**](AuthenticationApi.md#deleteTicket) | **DELETE** /tickets/-me- | Delete ticket (logout)
[**validateTicket**](AuthenticationApi.md#validateTicket) | **GET** /tickets/-me- | Validate ticket


<a name="createTicket"></a>
# **createTicket**
> TicketEntry createTicket(ticketBodyCreate)

Create ticket (login)

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Logs in and returns the new authentication ticket.  The userId and password properties are mandatory in the request body. For example: &#x60;&#x60;&#x60;JSON {     \&quot;userId\&quot;: \&quot;jbloggs\&quot;,     \&quot;password\&quot;: \&quot;password\&quot; } &#x60;&#x60;&#x60; To use the ticket in future requests you should pass it in the request header. For example using Javascript:   &#x60;&#x60;&#x60;Javascript     request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));   &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoAuthRestApi = require('alfresco-auth-rest-api');
var defaultClient = AlfrescoAuthRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi();

var ticketBodyCreate = new AlfrescoAuthRestApi.TicketBody(); // TicketBody | The user credential.

apiInstance.createTicket(ticketBodyCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketBodyCreate** | [**TicketBody**](TicketBody.md)| The user credential. | 

### Return type

[**TicketEntry**](TicketEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicket"></a>
# **deleteTicket**
> deleteTicket()

Delete ticket (logout)

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Deletes logged in ticket (logout). 

### Example
```javascript
var AlfrescoAuthRestApi = require('alfresco-auth-rest-api');
var defaultClient = AlfrescoAuthRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi();
apiInstance.deleteTicket().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateTicket"></a>
# **validateTicket**
> ValidTicketEntry validateTicket()

Validate ticket

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Validates the specified ticket (derived from Authorization header) is still valid.  For example, you can pass the Authorization request header using Javascript:   &#x60;&#x60;&#x60;Javascript     request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));   &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoAuthRestApi = require('alfresco-auth-rest-api');
var defaultClient = AlfrescoAuthRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi();
apiInstance.validateTicket().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ValidTicketEntry**](ValidTicketEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

