# CommentsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](CommentsApi.md#createComment) | **POST** /nodes/{nodeId}/comments | Create a comment
[**deleteComment**](CommentsApi.md#deleteComment) | **DELETE** /nodes/{nodeId}/comments/{commentId} | Delete a comment
[**listComments**](CommentsApi.md#listComments) | **GET** /nodes/{nodeId}/comments | List comments
[**updateComment**](CommentsApi.md#updateComment) | **PUT** /nodes/{nodeId}/comments/{commentId} | Update a comment


<a name="createComment"></a>
# **createComment**
> CommentEntry createComment(nodeIdcommentBodyCreateopts)

Create a comment

Creates a comment on node **nodeId**. You specify the comment in a JSON body like this:

JSON
{
  \"content\": \"This is a comment\"
}


**Note:** You can create more than one comment by
specifying a list of comments in the JSON body like this:

JSON
[
  {
    \"content\": \"This is a comment\"
  },
  {
    \"content\": \"This is another comment\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

commentsApi.createComment(nodeIdcommentBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **commentBodyCreate** | [**CommentBody**](CommentBody.md)| The comment text. Note that you can also provide a list of comments. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**CommentEntry**](CommentEntry.md)

<a name="deleteComment"></a>
# **deleteComment**
> deleteComment(nodeIdcommentId)

Delete a comment

Deletes the comment **commentId** from node **nodeId**.

### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);


commentsApi.deleteComment(nodeIdcommentId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **commentId** | **string**| The identifier of a comment. | 

### Return type

null (empty response body)

<a name="listComments"></a>
# **listComments**
> CommentPaging listComments(nodeIdopts)

List comments

Gets a list of comments for the node **nodeId**, sorted chronologically with the newest comment first.

### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

commentsApi.listComments(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **fields** | [**string**](string.md)| A list of field names.

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

<a name="updateComment"></a>
# **updateComment**
> CommentEntry updateComment(nodeIdcommentIdcommentBodyUpdateopts)

Update a comment

Updates an existing comment **commentId** on node **nodeId**.

### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

commentsApi.updateComment(nodeIdcommentIdcommentBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **commentId** | **string**| The identifier of a comment. | 
 **commentBodyUpdate** | [**CommentBody**](CommentBody.md)| The JSON representing the comment to be updated. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**CommentEntry**](CommentEntry.md)

