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

Add association, with given association type, between source and target node.


### Example
```javascript
var sourceId = "sourceId_example"; // {String} The identifier of a node.

var assocTargetBody = new this.alfrescoJsApi.core.AssocTargetBody(); // {AssocTargetBody} The target node id and assoc type.

this.alfrescoJsApi.core.associationsApi.addAssoc(sourceId, assocTargetBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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

Returns a list of source nodes that point to (ie. are associated with) the current target node.


### Example
```javascript

var targetId = "targetId_example"; // {String} The identifier of a node.

var opts = {
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"] // {[String]} A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
};
this.alfrescoJsApi.core.associationsApi.listSourceNodeAssociations(targetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetId** | **String**| The identifier of a node. |
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype') | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

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

Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.


### Example
```javascript

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var opts = {
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"] /* {[String]} A list of field names. You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.
                                The list applies to a returned individual entity or entries within a collection.
                                If the API method also supports the **include**  parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.*/
};
this.alfrescoJsApi.core.associationsApi.listTargetAssociations(sourceId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. |
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

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

Remove association(s) between source and target node for given association type.

If association type is not specified then all associations between source and target are removed.


### Example
```javascript

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var targetId = "targetId_example"; // {String} The identifier of a node.

var opts = {
  'assocType': "assocType_example" // {String} Restrict the delete to only those of the given association type
};
this.alfrescoJsApi.core.associationsApi.removeAssoc(sourceId, targetId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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

