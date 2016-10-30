# AlfrescoCoreRestApi.QueriesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findNodes**](SearchApi.md#findNodes) | **GET** /queries/nodes | Live search for nodes


<a name="findNodes"></a>
# **findNodes**
> NodePaging nodes(term, opts)

Find nodes

Gets a list of nodes that match the given search criteria.

The search term is used to look for nodes that match against name, title, description, full text content or tags.

The search term
- must contain a minimum of 3 alphanumeric characters
- allows "quoted term"
- can optionally use '*' for wildcard matching

By default, file and folder types will be searched unless a specific type is provided as a query parameter.

By default, the search will be across the repository unless a specific root node id is provided to start the search from.

You can sort the result list using the orderBy parameter. You can specify one or more of the following fields in the orderBy parameter:
- name
- modifiedAt
- createdAt


### Example
```javascript
var term = "term_example"; // {String} The term to search for.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'rootNodeId': "rootNodeId_example", // {String} The id of the node to start the search from. Supports the aliases -my-, -root- and -shared-.
  'nodeType': "nodeType_example", // {String} Restrict the returned results to only those of the given node type and it's sub-types
  'include': "include_example", // {String} Return additional info, eg. aspectNames, properties, path, isLink
  'orderBy': "orderBy_example", // {String} The list of results can be ordered by the following:  name , modifiedAt , createdAt
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};

this.alfrescoJsApi.core.queriesApi.findNodes(term, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The term to search for. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **rootNodeId** | **String**| The id of the node to start the search from. Supports the aliases -my-, -root- and -shared-. | [optional]
 **nodeType** | **String**| Restrict the returned results to only those of the given node type and it's sub-types | [optional]
 **include** | **String**| Return additional info, eg. aspectNames, properties, path, isLink | [optional]
 **orderBy** | **String**| The list of results can be ordered by the following: * name * modifiedAt * createdAt  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional]

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

