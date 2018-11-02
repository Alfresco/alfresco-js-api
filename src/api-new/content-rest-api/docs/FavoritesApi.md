# .FavoritesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFavorite**](FavoritesApi.md#createFavorite) | **POST** /people/{personId}/favorites | Create a favorite
[**createSiteFavorite**](FavoritesApi.md#createSiteFavorite) | **POST** /people/{personId}/favorite-sites | Create a site favorite
[**deleteFavorite**](FavoritesApi.md#deleteFavorite) | **DELETE** /people/{personId}/favorites/{favoriteId} | Delete a favorite
[**deleteSiteFavorite**](FavoritesApi.md#deleteSiteFavorite) | **DELETE** /people/{personId}/favorite-sites/{siteId} | Delete a site favorite
[**getFavorite**](FavoritesApi.md#getFavorite) | **GET** /people/{personId}/favorites/{favoriteId} | Get a favorite
[**getFavoriteSite**](FavoritesApi.md#getFavoriteSite) | **GET** /people/{personId}/favorite-sites/{siteId} | Get a favorite site
[**listFavoriteSitesForPerson**](FavoritesApi.md#listFavoriteSitesForPerson) | **GET** /people/{personId}/favorite-sites | List favorite sites
[**listFavorites**](FavoritesApi.md#listFavorites) | **GET** /people/{personId}/favorites | List favorites


<a name="createFavorite"></a>
# **createFavorite**
> FavoriteEntry createFavorite(personIdfavoriteBodyCreateopts)

Create a favorite

Favorite a **site**, **file**, or **folder** in the repository.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.

**Note:** You can favorite more than one entity by
specifying a list of objects in the JSON body like this:

JSON
[
  {
       \&quot;target\&quot;: {
          \&quot;file\&quot;: {
             \&quot;guid\&quot;: \&quot;abcde-01234-....\&quot;
          }
       }
   },
   {
       \&quot;target\&quot;: {
          \&quot;file\&quot;: {
             \&quot;guid\&quot;: \&quot;abcde-09863-....\&quot;
          }
       }
   },
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
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

favoritesApi.createFavorite(personIdfavoriteBodyCreateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **favoriteBodyCreate** | [**FavoriteBodyCreate**](FavoriteBodyCreate.md)| An object identifying the entity to be favorited.

The object consists of a single property which is an object with the name site, file, or folder.
The content of that object is the guid of the target entity.

For example, to favorite a file the following body would be used:

JSON
{
   \&quot;target\&quot;: {
      \&quot;file\&quot;: {
         \&quot;guid\&quot;: \&quot;abcde-01234-....\&quot;
      }
   }
}

 | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)
 | [optional] 
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

[**FavoriteEntry**](FavoriteEntry.md)

<a name="createSiteFavorite"></a>
# **createSiteFavorite**
> FavoriteSiteEntry createSiteFavorite(personIdfavoriteSiteBodyCreateopts)

Create a site favorite

**Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
Use /people/{personId}/favorites instead.

Create a site favorite for person **personId**.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.

 **Note:** You can favorite more than one site by
specifying a list of sites in the JSON body like this:

JSON
[
  {
    \&quot;id\&quot;: \&quot;test-site-1\&quot;
  },
  {
    \&quot;id\&quot;: \&quot;test-site-2\&quot;
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
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);

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

favoritesApi.createSiteFavorite(personIdfavoriteSiteBodyCreateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **favoriteSiteBodyCreate** | [**FavoriteSiteBodyCreate**](FavoriteSiteBodyCreate.md)| The id of the site to favorite. | 
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

[**FavoriteSiteEntry**](FavoriteSiteEntry.md)

<a name="deleteFavorite"></a>
# **deleteFavorite**
> deleteFavorite(personIdfavoriteId)

Delete a favorite

Deletes **favoriteId** as a favorite of person **personId**.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.


### Example
```javascript
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);


favoritesApi.deleteFavorite(personIdfavoriteId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **favoriteId** | **string**| The identifier of a favorite. | 

### Return type

null (empty response body)

<a name="deleteSiteFavorite"></a>
# **deleteSiteFavorite**
> deleteSiteFavorite(personIdsiteId)

Delete a site favorite

**Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
Use /people/{personId}/favorites/{favoriteId} instead.

Deletes site **siteId** from the favorite site list of person **personId**.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.


### Example
```javascript
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);


favoritesApi.deleteSiteFavorite(personIdsiteId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **siteId** | **string**| The identifier of a site. | 

### Return type

null (empty response body)

<a name="getFavorite"></a>
# **getFavorite**
> FavoriteEntry getFavorite(personIdfavoriteIdopts)

Get a favorite

Gets favorite **favoriteId** for person **personId**.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.


### Example
```javascript
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

favoritesApi.getFavorite(personIdfavoriteIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **favoriteId** | **string**| The identifier of a favorite. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)
 | [optional] 
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

[**FavoriteEntry**](FavoriteEntry.md)

<a name="getFavoriteSite"></a>
# **getFavoriteSite**
> SiteEntry getFavoriteSite(personIdsiteIdopts)

Get a favorite site

**Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
Use /people/{personId}/favorites/{favoriteId} instead.

Gets information on favorite site **siteId** of person **personId**.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.


### Example
```javascript
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);

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

favoritesApi.getFavoriteSite(personIdsiteIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **siteId** | **string**| The identifier of a site. | 
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

[**SiteEntry**](SiteEntry.md)

<a name="listFavoriteSitesForPerson"></a>
# **listFavoriteSitesForPerson**
> SitePaging listFavoriteSitesForPerson(personIdopts)

List favorite sites

**Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
Use /people/{personId}/favorites instead.

Gets a list of a person&#39;s favorite sites.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.


### Example
```javascript
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);

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

favoritesApi.listFavoriteSitesForPerson(personIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
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

[**SitePaging**](SitePaging.md)

<a name="listFavorites"></a>
# **listFavorites**
> FavoritePaging listFavorites(personIdopts)

List favorites

Gets a list of favorites for person **personId**.

You can use the -me- string in place of &lt;personId&gt; to specify the currently authenticated user.

You can use the **where** parameter to restrict the list in the response
to entries of a specific kind. The **where** parameter takes a value.
The value is a single predicate that can include one or more **EXISTS**
conditions. The **EXISTS** condition uses a single operand to limit the
list to include entries that include that one property. The property values are:

*   target/file
*   target/folder
*   target/site

For example, the following **where** parameter restricts the returned list to the file favorites for a person:

SQL
(EXISTS(target/file))

You can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.


For example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:

SQL
(EXISTS(target/file) OR EXISTS(target/folder))



### Example
```javascript
import FavoritesApi from 'FavoritesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let favoritesApi = new FavoritesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'where': where_example // string | A string to restrict the returned objects by using a predicate.
  'include':  // Array<string> | Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

favoritesApi.listFavorites(personIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)
 | [optional] 
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

[**FavoritePaging**](FavoritePaging.md)

