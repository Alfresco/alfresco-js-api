# AlfrescoCoreRestApi.FavoritesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFavorite**](FavoritesApi.md#addFavorite) | **POST** /people/{personId}/favorites | Add a favorite
[**getFavorite**](FavoritesApi.md#getFavorite) | **GET** /people/{personId}/favorites/{favoriteId} | Get a favorite
[**getFavorites**](FavoritesApi.md#getFavorites) | **GET** /people/{personId}/favorites | Get favorites
[**removeFavoriteSite**](FavoritesApi.md#removeFavoriteSite) | **DELETE** /people/{personId}/favorites/{favoriteId} | Delete a favorite


<a name="addFavorite"></a>
# **addFavorite**
> FavoriteEntry addFavorite(personIdfavoriteBody)

Add a favorite

Favorite a **site**, **file**, or **folder** in the repository.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.FavoritesApi()

var personId = "personId_example"; // {String} The identifier of a person.

var favoriteBody = new AlfrescoCoreRestApi.FavoriteBody(); // {FavoriteBody} An object identifying the entity to be favorited. \nThe object consists of a single property which is an object with the name `site`, `file`, or `folder`. \nThe content of that object is the `guid` of the target entity.\n


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addFavorite(personIdfavoriteBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **favoriteBody** | [**FavoriteBody**](FavoriteBody.md)| An object identifying the entity to be favorited. \nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n | 

### Return type

[**FavoriteEntry**](FavoriteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavorite"></a>
# **getFavorite**
> Favorite getFavorite(personIdfavoriteId, opts)

Get a favorite

Returns favorite **favoriteId** for person **personId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.FavoritesApi()

var personId = "personId_example"; // {String} The identifier of a person.

var favoriteId = "favoriteId_example"; // {String} The identifier of a favorite.

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
api.getFavorite(personIdfavoriteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **favoriteId** | **String**| The identifier of a favorite. | 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**Favorite**](Favorite.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavorites"></a>
# **getFavorites**
> FavoritePaging getFavorites(personId, opts)

Get favorites

Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.        \n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS** \nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.FavoritesApi()

var personId = "personId_example"; // {String} The identifier of a person.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'where': "where_example", // {String} A string to restrict the returned objects by using a predicate.
  'fields': ["fields_example"] // {[String]} A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getFavorites(personId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| A string to restrict the returned objects by using a predicate. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**FavoritePaging**](FavoritePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeFavoriteSite"></a>
# **removeFavoriteSite**
> removeFavoriteSite(personIdfavoriteId)

Delete a favorite

Removes **favoriteId** as a favorite of person **personId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.FavoritesApi()

var personId = "personId_example"; // {String} The identifier of a person.

var favoriteId = "favoriteId_example"; // {String} The identifier of a favorite.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.removeFavoriteSite(personIdfavoriteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **favoriteId** | **String**| The identifier of a favorite. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

