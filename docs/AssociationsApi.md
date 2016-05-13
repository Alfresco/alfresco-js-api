# AlfrescoCoreRestApi.AssociationsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssoc**](AssociationsApi.md#addAssoc) | **POST** /nodes/{sourceId}/targets | Add node association
[**listSourceNodeAssociations**](AssociationsApi.md#listSourceNodeAssociations) | **GET** /nodes/{targetId}/sources | List node associations
[**listTargetAssociations**](AssociationsApi.md#listTargetAssociations) | **GET** /nodes/{sourceId}/targets | List node associations
[**removeAssoc**](AssociationsApi.md#removeAssoc) | **DELETE** /nodes/{sourceId}/targets/{targetId} | Remove node association(s)


<a name="addAssoc"></a>
# **addAssoc**
> addAssoc(sourceId, assocTargetBody)

Add node association

Add association, with given association type, between source and target node.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.AssociationsApi()

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var assocTargetBody = new AlfrescoCoreRestApi.AssocTargetBody(); // {AssocTargetBody} The target node id and assoc type.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addAssoc(sourceId, assocTargetBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. | 
 **assocTargetBody** | [**AssocTargetBody**](AssocTargetBody.md)| The target node id and assoc type. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSourceNodeAssociations"></a>
# **listSourceNodeAssociations**
> NodeAssocPaging listSourceNodeAssociations(targetId, opts)

List node associations

Returns a list of source nodes that point to (ie. are associated with) the current target node.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.AssociationsApi()

var targetId = "targetId_example"; // {String} The identifier of a node.

var opts = { 
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:\n\n*   where=(assocType='my:assoctype')\n
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listSourceNodeAssociations(targetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetId** | **String**| The identifier of a node. | 
 **where** | **String**| Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n | [optional] 
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeAssocPaging**](NodeAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTargetAssociations"></a>
# **listTargetAssociations**
> NodeAssocPaging listTargetAssociations(sourceId, opts)

List node associations

Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.AssociationsApi()

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var opts = { 
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:\n\n*   where=(assocType='my:assoctype')\n
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listTargetAssociations(sourceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. | 
 **where** | **String**| Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n | [optional] 
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeAssocPaging**](NodeAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeAssoc"></a>
# **removeAssoc**
> removeAssoc(sourceId, targetId, opts)

Remove node association(s)

Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.AssociationsApi()

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var targetId = "targetId_example"; // {String} The identifier of a node.

var opts = { 
  'assocType': "assocType_example" // {String} Restrict the delete to only those of the given association type
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.removeAssoc(sourceId, targetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. | 
 **targetId** | **String**| The identifier of a node. | 
 **assocType** | **String**| Restrict the delete to only those of the given association type | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

