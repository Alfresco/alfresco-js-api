# AlfrescoCoreRestApi.SearchApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**liveSearchNodes**](SearchApi.md#liveSearchNodes) | **GET** /queries/live-search-nodes | Live search for nodes


<a name="liveSearchNodes"></a>
# **liveSearchNodes**
> NodePaging liveSearchNodes(term, opts)

Live search for nodes

Returns a list of nodes that match the given search criteria.\n\nThe search term is used to look for nodes that match against name, title, description, full text content and tags.\n\nThe search term\n- must contain a minimum of 3 alphanumeric characters\n- allows \&quot;quoted term\&quot;\n- can optionally use &#39;*&#39; for wildcard matching\n\nBy default, file and folder types will be searched unless a specific type is provided as a query parameter.\n\nBy default, the search will be across the repository unless a specific root node id is provided to start the search from.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SearchApi()

var term = "term_example"; // {String} The term to search for.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'rootNodeId': "rootNodeId_example", // {String} The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n
  'nodeType': "nodeType_example", // {String} Restrict the returned results to only those of the given node type and it's sub-types
  'include': "include_example", // {String} Return additional info, eg. aspectNames, properties, path, isLink
  'orderBy': "orderBy_example", // {String} The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.liveSearchNodes(term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The term to search for. | 
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **rootNodeId** | **String**| The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n | [optional] 
 **nodeType** | **String**| Restrict the returned results to only those of the given node type and it&#39;s sub-types | [optional] 
 **include** | **String**| Return additional info, eg. aspectNames, properties, path, isLink | [optional] 
 **orderBy** | **String**| The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

