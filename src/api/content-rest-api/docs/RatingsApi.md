# RatingsApi

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
import RatingsApi from 'RatingsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let ratingsApi = new RatingsApi(this.alfrescoApi);

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

ratingsApi.createRating(nodeIdratingBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **ratingBodyCreate** | [**RatingBody**](RatingBody.md)| For \"myRating\" the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.

For example, to \"like\" a file the following body would be used:

JSON
  {
    \"id\": \"likes\",
    \"myRating\": true
  }

 | 
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

[**RatingEntry**](RatingEntry.md)

<a name="deleteRating"></a>
# **deleteRating**
> deleteRating(nodeIdratingId)

Delete a rating

Deletes rating **ratingId** from node **nodeId**.

### Example
```javascript
import RatingsApi from 'RatingsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let ratingsApi = new RatingsApi(this.alfrescoApi);


ratingsApi.deleteRating(nodeIdratingId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **ratingId** | **string**| The identifier of a rating. | 

### Return type

null (empty response body)

<a name="getRating"></a>
# **getRating**
> RatingEntry getRating(nodeIdratingIdopts)

Get a rating

Get the specific rating **ratingId** on node **nodeId**.

### Example
```javascript
import RatingsApi from 'RatingsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let ratingsApi = new RatingsApi(this.alfrescoApi);

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

ratingsApi.getRating(nodeIdratingIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **ratingId** | **string**| The identifier of a rating. | 
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

[**RatingEntry**](RatingEntry.md)

<a name="listRatings"></a>
# **listRatings**
> RatingPaging listRatings(nodeIdopts)

List ratings

Gets a list of ratings for node **nodeId**.

### Example
```javascript
import RatingsApi from 'RatingsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let ratingsApi = new RatingsApi(this.alfrescoApi);

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

ratingsApi.listRatings(nodeIdopts).then((data) => {
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

[**RatingPaging**](RatingPaging.md)

