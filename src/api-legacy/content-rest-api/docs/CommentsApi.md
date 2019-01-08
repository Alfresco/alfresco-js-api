# AlfrescoCoreRestApi.CommentsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addComment**](CommentsApi.md#addComment) | **POST** /nodes/{nodeId}/comments | Add a comment
[**getComments**](CommentsApi.md#getComments) | **GET** /nodes/{nodeId}/comments | Get comments
[**removeComment**](CommentsApi.md#removeComment) | **DELETE** /nodes/{nodeId}/comments/{commentId} | Delete a comment
[**updateComment**](CommentsApi.md#updateComment) | **PUT** /nodes/{nodeId}/comments/{commentId} | Update a comment


<a name="addComment"></a>
# **addComment**
> CommentEntry addComment(nodeId, commentBody)

Add a comment

Creates one or more comments on node **nodeId**. You can create more than one comment by
specifying a list of comments in the JSON body like this:

```JSON
[
  {
    "content": "This is a comment"
  },
  {
    "content": "This is another comment"
  }
]
```


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var commentBody = new this.alfrescoJsApi.core.CommentBody(); // {CommentBody} The comment text. Note that you can provide an array of comments.

this.alfrescoJsApi.core.commentsApi.addComment(nodeId, commentBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **commentBody** | [**CommentBody**](CommentBody.md)| The comment text. Note that you can provide an array of comments. |

### Return type

[**CommentEntry**](CommentEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getComments"></a>
# **getComments**
> CommentPaging getComments(nodeId, opts)

Get comments

Returns a list of comments for the node identified by **nodeId**, sorted chronologically with the newest comment first.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.commentsApi.getComments(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
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

[**CommentPaging**](CommentPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeComment"></a>
# **removeComment**
> removeComment(nodeId, commentId)

Delete a comment

Removes the comment **commentId** from node **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var commentId = "commentId_example"; // {String} The identifier of a comment.

this.alfrescoJsApi.core.commentsApi.removeComment(nodeId, commentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **commentId** | **String**| The identifier of a comment. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateComment"></a>
# **updateComment**
> CommentEntry updateComment(nodeId, commentIdcommentBody, opts)

Update a comment

Updates an existing comment **commentId** on node **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var commentId = "commentId_example"; // {String} The identifier of a comment.

var commentBody = new this.alfrescoJsApi.core.CommentBody1(); // {CommentBody1} The JSON representing the comment to be updated.

var opts = {
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.commentsApi.updateComment(nodeId, commentIdcommentBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **commentId** | **String**| The identifier of a comment. |
 **commentBody** | [**CommentBody1**](CommentBody1.md)| The JSON representing the comment to be updated. |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**CommentEntry**](CommentEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

