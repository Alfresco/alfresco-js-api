# AlfrescoCoreRestApi.SitesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSiteMember**](SitesApi.md#addSiteMember) | **POST** /sites/{siteId}/members | Add a person
[**createSite**](SitesApi.md#createSite) | **POST** /sites | Create a site
[**deleteSite**](SitesApi.md#deleteSite) | **DELETE** /sites/{siteId} | Delete a site
[**getSite**](SitesApi.md#getSite) | **GET** /sites/{siteId} | Get a site
[**getSiteContainer**](SitesApi.md#getSiteContainer) | **GET** /sites/{siteId}/containers/{containerId} | Get a container
[**getSiteContainers**](SitesApi.md#getSiteContainers) | **GET** /sites/{siteId}/containers | Get containers
[**getSiteMember**](SitesApi.md#getSiteMember) | **GET** /sites/{siteId}/members/{personId} | Get a site member
[**getSiteMembers**](SitesApi.md#getSiteMembers) | **GET** /sites/{siteId}/members | Get members
[**getSites**](SitesApi.md#getSites) | **GET** /sites | Get sites
[**removeSiteMember**](SitesApi.md#removeSiteMember) | **DELETE** /sites/{siteId}/members/{personId} | Delete a site member
[**updateSiteMember**](SitesApi.md#updateSiteMember) | **PUT** /sites/{siteId}/members/{personId} | Update a site member


<a name="addSiteMember"></a>
# **addSiteMember**
> SiteMemberEntry addSiteMember(siteId, siteMemberBody)

Add a person

Adds person **personId** as a member of site **siteId**.

You can set the **role** to one of four types:

* SiteConsumer
* SiteCollaborator
* SiteContributor
* SiteManager


### Example
```javascript
var siteId = "siteId_example"; // {String} The identifier of a site.

var siteMemberBody = new this.alfrescoJsApi.core.SiteMemberBody(); // {SiteMemberBody} The person to add and their role

this.alfrescoJsApi.core.sitesApi.addSiteMember(siteId, siteMemberBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **siteMemberBody** | [**SiteMemberBody**](SiteMemberBody.md)| The person to add and their role |

### Return type

[**SiteMemberEntry**](SiteMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSite"></a>
# **createSite**
> SiteEntry createSite(siteBody, opts)

Create a site

Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash
characters.

For example, to create a public site called "Marketing" the following body could be used:
```JSON
{
  "title": "Marketing",
  "visibility": "PUBLIC"
}
```

The creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.

**Please note: if skipped then such a site will *not* work within Share.**

The addition of the site to the user's site favorites can be skipped via the **skipAddToFavorites** query parameter.

The creator will be added as a member with Site Manager role.


### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteBody = new this.alfrescoJsApi.core.SiteBody(); // {SiteBody} The site details

var opts = {
  'skipConfiguration': false, // {Boolean} Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created.
  'skipAddToFavorites': false // {Boolean} Flag to indicate whether the site should not be added to the user's site favorites.
};
this.alfrescoJsApi.core.sitesApi.createSite(siteBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteBody** | [**SiteBody**](SiteBody.md)| The site details |
 **skipConfiguration** | **Boolean**| Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. | [optional] [default to false]
 **skipAddToFavorites** | **Boolean**| Flag to indicate whether the site should not be added to the user's site favorites. | [optional] [default to false]

### Return type

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


<a name="updateSite"></a>
# **updateSite**
> SiteEntry updateSite(siteId, siteBody, opts)

Update a site

Update the details for the given site siteId. Site Manager or otherwise a (site) admin can update title, description or visibility.
Note: the id of a site cannot be updated once the site has been created.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteBody = new this.alfrescoJsApi.core.SiteBody(); // {SiteBody} The site details
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
this.alfrescoJsApi.core.sitesApi.updateSite(siteId, siteBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **siteBody** | [**SiteBody**](SiteBody.md)| The site details |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSite"></a>
# **deleteSite**
> deleteSite(siteId, opts)

Delete a site

Deletes the site with **siteId**.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var opts = {
  'permanent': false // {Boolean} Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan.
};
this.alfrescoJsApi.core.sitesApi.deleteSite(siteId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **permanent** | **Boolean**| Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSite"></a>
# **getSite**
> SiteEntry getSite(siteId, opts)

Get a site

Returns information for site **siteId**.

You can use the **relations** parameter to include one or more related
entities in a single response and so reduce network traffic.

The entity types in Alfresco are organized in a tree structure.
The **sites** entity has two children, **containers** and **members**.
The following relations parameter returns all the container and member
objects related to the site **siteId**:

```
containers,members
```


### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var opts = {
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
this.alfrescoJsApi.core.sitesApi.getSite(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **relations** | [**[String]**](String.md)| Use the relations parameter to include one or more related entities in a single response. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteContainer"></a>
# **getSiteContainer**
> SiteContainerEntry getSiteContainer(siteId, containerId, opts)

Get a container

Returns information on the container **containerId** in site **siteId**.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var containerId = "containerId_example"; // {String} The unique identifier of a site container.

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
this.alfrescoJsApi.core.sitesApi.getSiteContainer(siteId, containerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **containerId** | **String**| The unique identifier of a site container. |
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

[**SiteContainerEntry**](SiteContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteContainers"></a>
# **getSiteContainers**
> SiteContainerPaging getSiteContainers(siteId, opts)

Get containers

Returns a list of containers information for site identified by **siteId**.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

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
this.alfrescoJsApi.core.sitesApi.getSiteContainers(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individualentity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteContainerPaging**](SiteContainerPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMember"></a>
# **getSiteMember**
> SiteMemberEntry getSiteMember(siteId, personId, opts)

Get a site member

Returns site membership information for person **personId** on site **siteId**.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

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
this.alfrescoJsApi.core.sitesApi.getSiteMember(siteId, personId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **personId** | **String**| The identifier of a person. |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteMemberEntry**](SiteMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembers"></a>
# **getSiteMembers**
> SiteMemberPaging getSiteMembers(siteId, opts)

Get members

Returns a list of site memberships for site **siteId**.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

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
this.alfrescoJsApi.core.sitesApi.getSiteMembers(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SiteMemberPaging**](SiteMemberPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSites"></a>
# **getSites**
> SitePaging getSites(opts)

Get sites

Returns a list of sites in this repository. You can sort the list if sites using the **orderBy** parameter.
**orderBy** specifies the name of one or more
comma separated properties.
For each property you can optionally specify the order direction.
Both of the these **orderBy** examples retrieve sites ordered by ascending name:

```
name
name ASC
```

You can use the **relations** parameter to include one or more related
entities in a single response and so reduce network traffic.

The entity types in Alfresco are organized in a tree structure.
The **sites** entity has two children, **containers** and **members**.
The following relations parameter returns all the container and member
objects related to each site:

```
containers,members
```


### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

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
this.alfrescoJsApi.core.sitesApi.getSites(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **orderBy** | **String**| A string to control the order of the entities returned. | [optional]
 **relations** | [**[String]**](String.md)| Use the relations parameter to include one or more related entities in a single response. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**SitePaging**](SitePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSiteMember"></a>
# **removeSiteMember**
> removeSiteMember(siteId, personId)

Delete a site member

Removes person **personId** as a member of site **siteId**.

### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var personId = "personId_example"; // {String} The identifier of a person.

this.alfrescoJsApi.core.sitesApi.removeSiteMember(siteId, personId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **personId** | **String**| The identifier of a person. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSiteMember"></a>
# **updateSiteMember**
> SiteMemberEntry updateSiteMember(siteId, personIdsiteMemberRoleBody)

Update a site member

Update the membership of person **personId** in site **siteId**.

You can set the **role** to one of four types:

* SiteConsumer
* SiteCollaborator
* SiteContributor
* SiteManager


### Example
```javascript

this.alfrescoJsApi.core.sitesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var personId = "personId_example"; // {String} The identifier of a person.

var siteMemberRoleBody = new this.alfrescoJsApi.core.SiteMemberRoleBody(); // {SiteMemberRoleBody} The persons new role

this.alfrescoJsApi.core.sitesApi.updateSiteMember(siteId, personIdsiteMemberRoleBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. |
 **personId** | **String**| The identifier of a person. |
 **siteMemberRoleBody** | [**SiteMemberRoleBody**](SiteMemberRoleBody.md)| The persons new role |

### Return type

[**SiteMemberEntry**](SiteMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

