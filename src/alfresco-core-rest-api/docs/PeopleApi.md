# AlfrescoCoreRestApi.PeopleApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFavorite**](PeopleApi.md#addFavorite) | **POST** /people/{personId}/favorites | Add a favorite
[**addSiteMembershipRequest**](PeopleApi.md#addSiteMembershipRequest) | **POST** /people/{personId}/site-membership-requests | Create a site membership request
[**deleteFavoriteSite**](PeopleApi.md#deleteFavoriteSite) | **DELETE** /people/{personId}/favorite-sites/{siteId} | Delete favorite site
[**favoriteSite**](PeopleApi.md#favoriteSite) | **POST** /people/{personId}/favorite-sites | Favorite a site
[**getActivities**](PeopleApi.md#getActivities) | **GET** /people/{personId}/activities | Get activities
[**getFavorite**](PeopleApi.md#getFavorite) | **GET** /people/{personId}/favorites/{favoriteId} | Get a favorite
[**getFavoriteSite**](PeopleApi.md#getFavoriteSite) | **GET** /people/{personId}/favorite-sites/{siteId} | Get a favorite site
[**getFavoriteSites**](PeopleApi.md#getFavoriteSites) | **GET** /people/{personId}/favorite-sites | Get favorite sites
[**getFavorites**](PeopleApi.md#getFavorites) | **GET** /people/{personId}/favorites | Get favorites
[**addPerson**](PeopleApi.md#addPerson) | **POST** /people | create a person
[**updatePerson**](PeopleApi.md#updatePerson) | **PUT** /people/{personId} | update a person
[**getPerson**](PeopleApi.md#getPerson) | **GET** /people/{personId} | Get a person
[**getPersons**](PeopleApi.md#getPersons) | **GET** /people/| List people
[**getPersonNetwork**](PeopleApi.md#getPersonNetwork) | **GET** /people/{personId}/networks/{networkId} | Get network information
[**getPersonNetworks**](PeopleApi.md#getPersonNetworks) | **GET** /people/{personId}/networks | Get network membership for a person
[**getPreference**](PeopleApi.md#getPreference) | **GET** /people/{personId}/preferences/{preferenceName} | Get a preference
[**getPreferences**](PeopleApi.md#getPreferences) | **GET** /people/{personId}/preferences | Get preferences
[**getSiteMembership**](PeopleApi.md#getSiteMembership) | **GET** /people/{personId}/sites | Get site membership information
[**getSiteMembershipRequest**](PeopleApi.md#getSiteMembershipRequest) | **GET** /people/{personId}/site-membership-requests/{siteId} | Get a site membership request
[**getSiteMembershipRequests**](PeopleApi.md#getSiteMembershipRequests) | **GET** /people/{personId}/site-membership-requests | Get site membership requests
[**removeFavoriteSite**](PeopleApi.md#removeFavoriteSite) | **DELETE** /people/{personId}/favorites/{favoriteId} | Delete a favorite
[**removeSiteMembershipRequest**](PeopleApi.md#removeSiteMembershipRequest) | **DELETE** /people/{personId}/site-membership-requests/{siteId} | Cancel a site membership
[**updateSiteMembershipRequest**](PeopleApi.md#updateSiteMembershipRequest) | **PUT** /people/{personId}/site-membership-requests/{siteId} | Update a site membership request
[**getGroupsMembership**](PeopleApi.md#getGroupsMembership) | **GET** /people/{personId}/groups | Get all groups for people

<a name="addFavorite"></a>
# **addFavorite**
> FavoriteEntry addFavorite(personIdfavoriteBody)

Add a favorite

Favorite a **site**, **file**, or **folder** in the repository.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var favoriteBody = new this.alfrescoJsApi.core.FavoriteBody(); /* {FavoriteBody} An object identifying the entity to be favorited.

                                    The object consists of a single property which is an object with the name `site`, `file`, or `folder`.
                                    The content of that object is the `guid` of the target entity.

                                    For example, to favorite a file the following body would be used: */

                                    ```JSON
                                    {
                                       "target": {
                                          "file": {
                                             "guid": "abcde-01234"
                                          }
                                       }
                                    }
                                    ```


this.alfrescoJsApi.core.peopleApi.addFavorite(personIdfavoriteBody).then(function(data) {
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

<a name="addSiteMembershipRequest"></a>
# **addSiteMembershipRequest**
> SiteMembershipRequestEntry addSiteMembershipRequest(personIdsiteMembershipBody)

Create a site membership request

Create a site membership request for **personId** and **siteId**. The **personId** will be invited to the site as a SiteConsumer.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var siteMembershipBody = new this.alfrescoJsApi.core.SiteMembershipBody(); // {SiteMembershipBody} Site membership request details

this.alfrescoJsApi.core.peopleApi.addSiteMembershipRequest(personIdsiteMembershipBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **siteMembershipBody** | [**SiteMembershipBody**](SiteMembershipBody.md)| Site membership request details |

### Return type

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFavoriteSite"></a>
# **deleteFavoriteSite**
> deleteFavoriteSite(personIdsiteId)

Delete favorite site

Removes site **siteId** from the favorite site list of person **personId**.

**Note This method is deprecated and will be removed in the future.**
Use `/people/{personId}/favorites/{favoriteId}` instead.


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var siteId = "siteId_example"; // {String} The identifier of a site.

this.alfrescoJsApi.core.peopleApi.deleteFavoriteSite(personIdsiteId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **siteId** | **String**| The identifier of a site. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="favoriteSite"></a>
# **favoriteSite**
> InlineResponse201 favoriteSite(personIdfavoriteSiteBody)

Favorite a site

Add a favorite site for person **personId**.

**Note: that this method is deprecated and will be removed in the future**.
Use `/people/{personId}/favorites` instead.


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var favoriteSiteBody = new this.alfrescoJsApi.core.FavoriteSiteBody(); // {FavoriteSiteBody} The id of the site to favorite.

this.alfrescoJsApi.core.peopleApi.favoriteSite(personIdfavoriteSiteBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **favoriteSiteBody** | [**FavoriteSiteBody**](FavoriteSiteBody.md)| The id of the site to favorite. |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivities"></a>
# **getActivities**
> ActivityPaging getActivities(personId, opts)

Get activities

Returns a list of activities for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'who': "who_example", // {String} A filter to include the user's activities only `-me-`, other user's activities only `-others-`'

  'siteId': "siteId_example", // {String} Include only activity feed entries relating to this site.
  'fields': ["fields_example"] // {[String]} A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};
this.alfrescoJsApi.core.peopleApi.getActivities(personId, opts).then(function(data) {
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
 **who** | **String**| A filter to include the user's activities only `-me-`, other user's activities only `-others-`' | [optional]
 **siteId** | **String**| Include only activity feed entries relating to this site. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individua entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**ActivityPaging**](ActivityPaging.md)

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
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.peopleApi.getFavorite(personIdfavoriteId, opts).then(function(data) {
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

<a name="getFavoriteSite"></a>
# **getFavoriteSite**
> SiteEntry getFavoriteSite(personIdsiteId, opts)

Get a favorite site

Returns information on favorite site **siteId** of person **personId**.

**Note: This method is deprecated and will be removed in the future.**
Use `/people/{personId}/favorites/{favoriteId}` instead.


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var siteId = "siteId_example"; // {String} The identifier of a site.

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
this.alfrescoJsApi.core.peopleApi.getFavoriteSite(personIdsiteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **siteId** | **String**| The identifier of a site. |
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

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavoriteSites"></a>
# **getFavoriteSites**
> SitePaging getFavoriteSites(personId, opts)

Get favorite sites

Get a person's favorite sites.

**Note: This method is deprecated and will be removed in the future**.
Use `/people/{personId}/favorites` instead.


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'fields': ["fields_example"] // {[String]} A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};
this.alfrescoJsApi.core.peopleApi.getFavoriteSites(personId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**SitePaging**](SitePaging.md)

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
this.alfrescoJsApi.core.peopleApi.getFavorites(personId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include* parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**FavoritePaging**](FavoritePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPersons"></a>
# **getPersons**
> PersonEntry getPersons(opts)

List people
 
Gets information for the persons

### Example
```javascript

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
this.alfrescoJsApi.core.peopleApi.getPersons(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
| [optional]

<a name="getPerson"></a>
# **getPerson**
> PersonEntry getPerson(personId, opts)

Get a person

Gets information for the person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

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
this.alfrescoJsApi.core.peopleApi.getPerson(personId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
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

[**PersonEntry**](PersonEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json<a name="getPerson"></a>

# **addPerson**
> PersonEntry addPerson(person, opts)

Add a person

Create a person.
If applicable, the given person's login access can also be optionally disabled.
You must have admin rights to create a person.
You can set custom properties when you create a person:

### Example
```javascript

var personBodyCreate = new this.alfrescoJsApi.core.PersonBodyCreate();

personBodyCreate.id = 'chewbe';
personBodyCreate.email = 'chewbe@millenniumfalcon.com';
personBodyCreate.lastName = 'Chewbe';
personBodyCreate.firstName = 'chewbacca';
personBodyCreate.password = 'Rrrrrrrghghghghgh';

this.alfrescoJsApi.core.peopleApi.addPerson(personBodyCreate).then(function () {
    console.log('Person created');
}, function (error) {
    console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | [**[PersonBodyCreate]**](PersonBodyCreate.md)  The person object that you want create |


### Return type

[**PersonEntry**](PersonEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

# **updatePerson**
> PersonEntry updatePerson(personId, personBodyUpdate, opts)

Update a person

Update the given person's details.
You can use the -me- string in place of <personid> to specify the currently authenticated user.
If applicable, the given person's login access can also be optionally disabled or re-enabled.
You must have admin rights to update a person — unless updating your own details.
If you are changing your password, as a non-admin user, then the existing password must also be supplied (using the oldPassword field in addition to the new password value).
Admin users cannot be disabled by setting enabled to false.
Non-admin users may not disable themselves.
You can set custom properties when you update a person:

### Example
```javascript

this.alfrescoJsApi.core.peopleApi()

var personBodyUpdate = new this.alfrescoJsApi.core.PersonBodyUpdate(); // {personBody} The person details

personBodyUpdate.email = 'chewbe@millenniumfalcon.com';
personBodyUpdate.lastName = 'Chewbe';
personBodyUpdate.firstName = 'chewbacca';
personBodyUpdate.password = 'new password';

this.alfrescoJsApi.core.peopleApi.updatePerson(personId, personBodyUpdate).then(function (data) {
    console.log('API called successfully. Returned data: ' + data);
}, function (error) {
    console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **personBodyUpdate** | [**PersonBodyUpdate**](PersonBodyUpdate.md)| The person details |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**PersonEntry**](PersonEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



<a name="getPersonNetwork"></a>
# **getPersonNetwork**
> PersonNetworkEntry getPersonNetwork(personIdnetworkId, opts)

Get network information

Returns network information on a single network specified by **networkId** for **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var networkId = "networkId_example"; // {String} The identifier of a network.

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
this.alfrescoJsApi.core.peopleApi.getPersonNetwork(personIdnetworkId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **networkId** | **String**| The identifier of a network. |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**PersonNetworkEntry**](PersonNetworkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPersonNetworks"></a>
# **getPersonNetworks**
> PersonNetworkPaging getPersonNetworks(personId, opts)

Get network membership for a person

Gets a list of network memberships for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

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
this.alfrescoJsApi.core.peopleApi.getPersonNetworks(personId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**PersonNetworkPaging**](PersonNetworkPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPreference"></a>
# **getPreference**
> PreferenceEntry getPreference(personIdpreferenceName, opts)

Get a preference

Returns a specific preference for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var preferenceName = "preferenceName_example"; // {String} The name of the preference.

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
this.alfrescoJsApi.core.peopleApi.getPreference(personIdpreferenceName, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **preferenceName** | **String**| The name of the preference. |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**PreferenceEntry**](PreferenceEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPreferences"></a>
# **getPreferences**
> PreferencePaging getPreferences(personId, opts)

Get preferences

Returns a list of preferences for person **personId**.

Each preference consists of an **id** and a **value**.
The **value** can be of any JSON type.


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

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
this.alfrescoJsApi.core.peopleApi.getPreferences(personId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**PreferencePaging**](PreferencePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembership"></a>
# **getSiteMembership**
> SitePaging getSiteMembership(personId, opts)

Get site membership information

Returns a list of site membership information for person **personId**.
You can sort the list of sites using the **orderBy** parameter.

**orderBy** specifies the name of one or more
comma separated properties.
For each property you can optionally specify the order direction.
Both of the these **orderBy** examples retrieve sites ordered by ascending name:

```
name
name ASC
```


### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", // {String} A string to control the order of the entities returned.
  'relations': ["relations_example"], // {[String]} Use the relations parameter to include one or more related entities in a single response.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.peopleApi.getSiteMembership(personId, opts).then(function(data) {
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
 **orderBy** | **String**| A string to control the order of the entities returned. | [optional]
 **relations** | [**[String]**](String.md)| Use the relations parameter to include one or more related entities in a single response. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**SitePaging**](SitePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembershipRequest"></a>
# **getSiteMembershipRequest**
> SiteMembershipRequestEntry getSiteMembershipRequest(personIdsiteId, opts)

Get a site membership request

Returns the site membership request for site **siteId** for person **personId**, if one exists.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var siteId = "siteId_example"; // {String} The identifier of a site.

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
this.alfrescoJsApi.core.peopleApi.getSiteMembershipRequest(personIdsiteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **siteId** | **String**| The identifier of a site. |
 **fields** | [**[String]**](String.md)| A list of field names You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembershipRequests"></a>
# **getSiteMembershipRequests**
> SiteMembershipRequestPaging getSiteMembershipRequests(personId, opts)

Get site membership requests

Returns the current site membership requests for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

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
this.alfrescoJsApi.core.peopleApi.getSiteMembershipRequests(personId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteMembershipRequestPaging**](SiteMembershipRequestPaging.md)

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

this.alfrescoJsApi.core.peopleApi.removeFavoriteSite(personIdfavoriteId).then(function() {
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

<a name="removeSiteMembershipRequest"></a>
# **removeSiteMembershipRequest**
> removeSiteMembershipRequest(personIdsiteId)

Cancel a site membership

Cancels the site membership request to site **siteId** for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var siteId = "siteId_example"; // {String} The identifier of a site.

this.alfrescoJsApi.core.peopleApi.removeSiteMembershipRequest(personIdsiteId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **siteId** | **String**| The identifier of a site. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSiteMembershipRequest"></a>
# **updateSiteMembershipRequest**
> updateSiteMembershipRequest(personIdsiteId, siteMembershipBody)

Update a site membership request

Updates the message for the site membership request to site **siteId** for person **personId**.

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var siteId = "siteId_example"; // {String} The identifier of a site.

var siteMembershipBody = new this.alfrescoJsApi.core.SiteMembershipBody1(); // {SiteMembershipBody1} The new message to display

this.alfrescoJsApi.core.peopleApi.updateSiteMembershipRequest(personIdsiteId, siteMembershipBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. |
 **siteId** | **String**| The identifier of a site. |
 **siteMembershipBody** | [**SiteMembershipBody1**](SiteMembershipBody1.md)| The new message to display |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupsMembership"></a>
# **getGroupsMembership**
> getGroupsMembership(personId, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Gets a list of group membership information for person **personId**.

You can use the `-me-` string in place of <personid> to specify the currently authenticated user.

You can use the **include** parameter to return additional information.

You can use the **where** parameter to filter the returned groups by **isRoot**. For example, the following **where** clause will return just the root groups:
```HTML
    (isRoot=true)
```
The **where** parameter can also be used to filter by **zone**. This may be combined with isRoot to narrow a result set even further. For example, the following where clause will only return groups belonging to the `MY.ZONE` zone.
```HTML
    where=(zones in ('MY.ZONE'))
``` 
This may be combined with the isRoot filter, as shown below:
```HTML
    where=(isRoot=false AND zones in ('MY.ZONE'))
```
**Note**: restrictions include

* AND is the only supported operator when combining isRoot and zones filters
* Only one zone is supported by the filter
* The quoted zone name must be placed in parenthesis — a 400 error will result if these are omitted.
The default sort order for the returned list is for groups to be sorted by ascending displayName. You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:

        * id
        * displayName

### Example
```javascript
var personId = "personId_example"; // {String} The identifier of a person.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", // {String} A string to control the order of the entities returned.
  'include': [String], // {[String]} Returns additional information about the group. The following optional fields can be requested: parentIds and zones.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */,
   'where': '(isRoot=true)' // A string to restrict the returned objects by using a predicate.
};

this.alfrescoJsApi.core.peopleApi.getGroupsMembership(personId, opts).then(function() {
  console.log('API called successfully.');
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
 **orderBy** | **String**| A string to control the order of the entities returned. | [optional]
 **where** | **String** | A string to restrict the returned objects by using a predicate. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the group. The following optional fields can be requested: parentIds and zones. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupsPaging**](GroupsPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
