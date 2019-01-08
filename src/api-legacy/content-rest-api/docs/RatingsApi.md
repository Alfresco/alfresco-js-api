# AlfrescoCoreRestApi.RatingsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRating**](RatingsApi.md#getRating) | **GET** /nodes/{nodeId}/ratings/{ratingId} | Get a rating
[**getRatings**](RatingsApi.md#getRatings) | **GET** /nodes/{nodeId}/ratings | Get ratings
[**rate**](RatingsApi.md#rate) | **POST** /nodes/{nodeId}/ratings | Rate
[**removeRating**](RatingsApi.md#removeRating) | **DELETE** /nodes/{nodeId}/ratings/{ratingId} | Delete a rating


<a name="getRating"></a>
# **getRating**
> RatingEntry getRating(nodeId, ratingId, opts)

Get a rating

Get the specific rating **ratingId** on node **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var ratingId = "ratingId_example"; // {String} The identifier of a rating.

var opts = {
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.ratingsApi.getRating(nodeId, ratingId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **ratingId** | **String**| The identifier of a rating. |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include* parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**RatingEntry**](RatingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRatings"></a>
# **getRatings**
> RatingPaging getRatings(nodeId, opts)

Get ratings

Get the ratings for node **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.ratingsApi.getRatings(nodeId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**RatingPaging**](RatingPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rate"></a>
# **rate**
> RatingEntry rate(nodeId, ratingBody)

Rate

Rate the node with identifier **nodeId**

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var ratingBody = new this.alfrescoJsApi.core.RatingBody(); // {RatingBody} For "myRating" the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar. For example, to "like" a file the following body would be used:

  ```JSON
    {
      "id": "likes",
      "myRating": true
    }
  ```


this.alfrescoJsApi.core.ratingsApi.rate(nodeId, ratingBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **ratingBody** | [**RatingBody**](RatingBody.md)| For "myRating" the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.

For example, to "like" a file the following body would be used:

  ```JSON
    {
      "id": "likes",
      "myRating": true
    }
  ```
 |

### Return type

[**RatingEntry**](RatingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeRating"></a>
# **removeRating**
> removeRating(nodeId, ratingId)

Delete a rating

Removes rating **ratingId** from node **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var ratingId = "ratingId_example"; // {String} The identifier of a rating.

this.alfrescoJsApi.core.ratingsApi.removeRating(nodeId, ratingId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **ratingId** | **String**| The identifier of a rating. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

