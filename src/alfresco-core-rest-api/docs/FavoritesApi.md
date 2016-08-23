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
var personId = "personId_example"; // {String} The identifier of a person.

var favoriteBody = new this.alfrescoJsApi.core.FavoriteBody(); // {FavoriteBody} An object identifying the entity to be favorited. The object consists of a single property which is an object with the name `site`, `file`, or `folder`. The content of that object is the `guid` of the target entity. For example, to favorite a file the following body would be used:

```JSON
{
   "target": {
      "file": {
         "guid": "abcde-01234"
      }
   }
}
```

this.alfrescoJsApi.core.favoritesApi.addFavorite(personIdfavoriteBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **favoriteBody** | [**FavoriteBody**](FavoriteBody.md)| An object identifying the entity to be favorited.

The object consists of a single property which is an object with the name `site`, `file`, or `folder`.
The content of that object is the `guid` of the target entity.

For example, to favorite a file the following body would be used:

```JSON
{
   "target": {
      "file": {
         "guid": "abcde-01234"
      }
   }
}
```
 |

### Return type

[**FavoriteEntry**](FavoriteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavorite"></a>
# **getFavorite**
> FavoriteEntry getFavorite(personIdfavoriteId, opts)

Get a favorite

Returns favorite **favoriteId** for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var favoriteId = "favoriteId_example"; // {String} The identifier of a favorite.

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
this.alfrescoJsApi.core.favoritesApi.getFavorite(personIdfavoriteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **favoriteId** | **String**| The identifier of a favorite. |
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

[**FavoriteEntry**](FavoriteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavorites"></a>
# **getFavorites**
> FavoritePaging getFavorites(personId, opts)

Get favorites

Returns a list of favorites for person **personId**.

You can us the `-me-` string in place of `&lt;personId&gt;` to get the favorites of the currently authenticated user.

You can use the **where** parameter to restrict the list in the response
to entries of a specific kind. The **where** parameter takes a value.
The value is a single predicate that can include one or more **EXISTS**
conditions. The **EXISTS** condition uses a single operand to limit the
list to include entries that include that one property. The property values are:

*   `target/file`
*   `target/folder`
*   `target/site`

For example, the following **where** parameter restricts the returned list to the file favorites for a person:

```SQL
(EXISTS(target/file))
```
You can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.


For example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:

```SQL
(EXISTS(target/file) OR EXISTS(target/folder))
```


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'where': "where_example", // {String} A string to restrict the returned objects by using a predicate.
  'fields': ["fields_example"] /* {[String]} A list of field names.

                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.favoritesApi.getFavorites(personId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **where** | **String**| A string to restrict the returned objects by using a predicate. | [optional]
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
var personId = "personId_example"; // {String} The identifier of a person.

var favoriteId = "favoriteId_example"; // {String} The identifier of a favorite.

this.alfrescoJsApi.core.favoritesApi.removeFavoriteSite(personIdfavoriteId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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

