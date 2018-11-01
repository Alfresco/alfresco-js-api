# .RatingsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRating**](RatingsApi.md#createRating) | **POST** /nodes/{nodeId}/ratings | Create a rating
[**deleteRating**](RatingsApi.md#deleteRating) | **DELETE** /nodes/{nodeId}/ratings/{ratingId} | Delete a rating
[**getRating**](RatingsApi.md#getRating) | **GET** /nodes/{nodeId}/ratings/{ratingId} | Get a rating
[**listRatings**](RatingsApi.md#listRatings) | **GET** /nodes/{nodeId}/ratings | List ratings


<a name="createRating"></a>
# **createRating**
> RatingEntry createRating(nodeIdratingBodyCreateopts)

Create a rating

Create a rating for the node with identifier **nodeId**

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RatingsApi();

var opts = { 
  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRating(nodeIdratingBodyCreateopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **ratingBodyCreate** | [**RatingBody**](RatingBody.md)| For \&quot;myRating\&quot; the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.

For example, to \&quot;like\&quot; a file the following body would be used:

JSON
  {
    \&quot;id\&quot;: \&quot;likes\&quot;,
    \&quot;myRating\&quot;: true
  }

 | 
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RatingEntry**](RatingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRating"></a>
# **deleteRating**
> deleteRating(nodeIdratingId)

Delete a rating

Deletes rating **ratingId** from node **nodeId**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RatingsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRating(nodeIdratingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **ratingId** | **string**| The identifier of a rating. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRating"></a>
# **getRating**
> RatingEntry getRating(nodeIdratingIdopts)

Get a rating

Get the specific rating **ratingId** on node **nodeId**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RatingsApi();

var opts = { 
  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRating(nodeIdratingIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **ratingId** | **string**| The identifier of a rating. | 
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RatingEntry**](RatingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRatings"></a>
# **listRatings**
> RatingPaging listRatings(nodeIdopts)

List ratings

Gets a list of ratings for node **nodeId**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RatingsApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRatings(nodeIdopts, callback);
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
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RatingPaging**](RatingPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

