# .TagsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTagForNode**](TagsApi.md#createTagForNode) | **POST** /nodes/{nodeId}/tags | Create a tag for a node
[**deleteTagFromNode**](TagsApi.md#deleteTagFromNode) | **DELETE** /nodes/{nodeId}/tags/{tagId} | Delete a tag from a node
[**getTag**](TagsApi.md#getTag) | **GET** /tags/{tagId} | Get a tag
[**listTags**](TagsApi.md#listTags) | **GET** /tags | List tags
[**listTagsForNode**](TagsApi.md#listTagsForNode) | **GET** /nodes/{nodeId}/tags | List tags for a node
[**updateTag**](TagsApi.md#updateTag) | **PUT** /tags/{tagId} | Update a tag


<a name="createTagForNode"></a>
# **createTagForNode**
> TagEntry createTagForNode(nodeIdtagBodyCreateopts)

Create a tag for a node

Creates a tag on the node **nodeId**. You specify the tag in a JSON body like this:

JSON
{
  \&quot;tag\&quot;:\&quot;test-tag-1\&quot;
}


**Note:** You can create more than one tag by
specifying a list of tags in the JSON body like this:

JSON
[
  {
    \&quot;tag\&quot;:\&quot;test-tag-1\&quot;
  },
  {
    \&quot;tag\&quot;:\&quot;test-tag-2\&quot;
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \&quot;list\&quot;: {
    \&quot;pagination\&quot;: {
      \&quot;count\&quot;: 2,
      \&quot;hasMoreItems\&quot;: false,
      \&quot;totalItems\&quot;: 2,
      \&quot;skipCount\&quot;: 0,
      \&quot;maxItems\&quot;: 100
    },
    \&quot;entries\&quot;: [
      {
        \&quot;entry\&quot;: {
          ...
        }
      },
      {
        \&quot;entry\&quot;: {
         ...
        }
      }
    ]
  }
}



### Example
```javascript
import TagsApi from 'TagsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tagsApi = new TagsApi(this.alfrescoApi);

let opts = { 
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

tagsApi.createTagForNode(nodeIdtagBodyCreateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **tagBodyCreate** | [**TagBody**](TagBody.md)| The new tag | 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**TagEntry**](TagEntry.md)

<a name="deleteTagFromNode"></a>
# **deleteTagFromNode**
> deleteTagFromNode(nodeIdtagId)

Delete a tag from a node

Deletes tag **tagId** from node **nodeId**.

### Example
```javascript
import TagsApi from 'TagsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tagsApi = new TagsApi(this.alfrescoApi);


tagsApi.deleteTagFromNode(nodeIdtagId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **tagId** | **string**| The identifier of a tag. | 

### Return type

null (empty response body)

<a name="getTag"></a>
# **getTag**
> TagEntry getTag(tagIdopts)

Get a tag

Get a specific tag with **tagId**.

### Example
```javascript
import TagsApi from 'TagsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tagsApi = new TagsApi(this.alfrescoApi);

let opts = { 
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

tagsApi.getTag(tagIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **string**| The identifier of a tag. | 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**TagEntry**](TagEntry.md)

<a name="listTags"></a>
# **listTags**
> TagPaging listTags(opts)

List tags

Gets a list of tags in this repository.

You can use the **include** parameter to return additional **values** information.


### Example
```javascript
import TagsApi from 'TagsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tagsApi = new TagsApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

  'include':  // Array<string> | Returns additional information about the tag. The following optional fields can be requested:
* count

};

tagsApi.listTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the tag. The following optional fields can be requested:
* count
 | [optional] 

### Return type

[**TagPaging**](TagPaging.md)

<a name="listTagsForNode"></a>
# **listTagsForNode**
> TagPaging listTagsForNode(nodeIdopts)

List tags for a node

Gets a list of tags for node **nodeId**.

### Example
```javascript
import TagsApi from 'TagsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tagsApi = new TagsApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

tagsApi.listTagsForNode(nodeIdopts).then(function(data) {
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
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**TagPaging**](TagPaging.md)

<a name="updateTag"></a>
# **updateTag**
> TagEntry updateTag(tagIdtagBodyUpdateopts)

Update a tag

Updates the tag **tagId**.

### Example
```javascript
import TagsApi from 'TagsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tagsApi = new TagsApi(this.alfrescoApi);

let opts = { 
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

tagsApi.updateTag(tagIdtagBodyUpdateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **string**| The identifier of a tag. | 
 **tagBodyUpdate** | [**TagBody**](TagBody.md)| The updated tag | 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**TagEntry**](TagEntry.md)

