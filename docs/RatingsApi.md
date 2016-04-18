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
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.RatingsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var ratingId = "ratingId_example"; // {String} The identifier of a rating.

var opts = { 
  'fields': ["fields_example"] // {[String]} A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRating(nodeId, ratingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **ratingId** | **String**| The identifier of a rating. | 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RatingEntry**](RatingEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRatings"></a>
# **getRatings**
> RatingPaging getRatings(nodeId, , opts)

Get ratings

Get the ratings for node **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.RatingsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'fields': ["fields_example"] // {[String]} A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRatings(nodeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

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

Rate the node **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.RatingsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var ratingBody = new AlfrescoCoreRestApi.RatingBody(); // {RatingBody} Rating details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.rate(nodeId, ratingBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **ratingBody** | [**RatingBody**](RatingBody.md)| Rating details | 

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
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.RatingsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var ratingId = "ratingId_example"; // {String} The identifier of a rating.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.removeRating(nodeId, ratingId, callback);
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

