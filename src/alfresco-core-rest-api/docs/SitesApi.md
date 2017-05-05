# AlfrescoCoreRestApi.SitesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSite**](SitesApi.md#createSite) | **POST** /sites | Create a site
[**createSiteMembership**](SitesApi.md#createSiteMembership) | **POST** /sites/{siteId}/members | Create a site membership
[**createSiteMembershipRequestForPerson**](SitesApi.md#createSiteMembershipRequestForPerson) | **POST** /people/{personId}/site-membership-requests | Create a site membership request
[**deleteSite**](SitesApi.md#deleteSite) | **DELETE** /sites/{siteId} | Delete a site
[**deleteSiteMembership**](SitesApi.md#deleteSiteMembership) | **DELETE** /sites/{siteId}/members/{personId} | Delete a site membership
[**deleteSiteMembershipForPerson**](SitesApi.md#deleteSiteMembershipForPerson) | **DELETE** /people/{personId}/sites/{siteId} | Delete a site membership
[**deleteSiteMembershipRequestForPerson**](SitesApi.md#deleteSiteMembershipRequestForPerson) | **DELETE** /people/{personId}/site-membership-requests/{siteId} | Delete a site membership request
[**getSite**](SitesApi.md#getSite) | **GET** /sites/{siteId} | Get a site
[**getSiteContainer**](SitesApi.md#getSiteContainer) | **GET** /sites/{siteId}/containers/{containerId} | Get a site container
[**getSiteMembership**](SitesApi.md#getSiteMembership) | **GET** /sites/{siteId}/members/{personId} | Get a site membership
[**getSiteMembershipForPerson**](SitesApi.md#getSiteMembershipForPerson) | **GET** /people/{personId}/sites/{siteId} | Get a site membership
[**getSiteMembershipRequestForPerson**](SitesApi.md#getSiteMembershipRequestForPerson) | **GET** /people/{personId}/site-membership-requests/{siteId} | Get a site membership request
[**listSiteContainers**](SitesApi.md#listSiteContainers) | **GET** /sites/{siteId}/containers | List site containers
[**listSiteMembershipRequestsForPerson**](SitesApi.md#listSiteMembershipRequestsForPerson) | **GET** /people/{personId}/site-membership-requests | List site membership requests
[**listSiteMemberships**](SitesApi.md#listSiteMemberships) | **GET** /sites/{siteId}/members | List site memberships
[**listSiteMembershipsForPerson**](SitesApi.md#listSiteMembershipsForPerson) | **GET** /people/{personId}/sites | List site memberships
[**listSites**](SitesApi.md#listSites) | **GET** /sites | List sites
[**updateSite**](SitesApi.md#updateSite) | **PUT** /sites/{siteId} | Update a site
[**updateSiteMembership**](SitesApi.md#updateSiteMembership) | **PUT** /sites/{siteId}/members/{personId} | Update a site membership
[**updateSiteMembershipRequestForPerson**](SitesApi.md#updateSiteMembershipRequestForPerson) | **PUT** /people/{personId}/site-membership-requests/{siteId} | Update a site membership request


<a name="createSite"></a>
# **createSite**
> SiteEntry createSite(siteBodyCreate, opts)

Create a site

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash characters.  Note: the id of a site cannot be updated once the site has been created.  For example, to create a public site called \&quot;Marketing\&quot; the following body could be used: &#x60;&#x60;&#x60;JSON {   \&quot;title\&quot;: \&quot;Marketing\&quot;,   \&quot;visibility\&quot;: \&quot;PUBLIC\&quot; } &#x60;&#x60;&#x60;  The creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.  **Note:** if skipped then such a site will **not** work within Share.  The addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.  The creator will be added as a member with Site Manager role.  When you create a site, a container called **documentLibrary** is created for you in the new site.  This container is the root folder for content stored in the site. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteBodyCreate = new AlfrescoCoreRestApi.SiteBodyCreate(); // SiteBodyCreate | The site details

var opts = { 
  'skipConfiguration': false, // Boolean | Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created.
  'skipAddToFavorites': false, // Boolean | Flag to indicate whether the site should not be added to the user's site favorites.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.createSite(siteBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteBodyCreate** | [**SiteBodyCreate**](SiteBodyCreate.md)| The site details | 
 **skipConfiguration** | **Boolean**| Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. | [optional] [default to false]
 **skipAddToFavorites** | **Boolean**| Flag to indicate whether the site should not be added to the user&#39;s site favorites. | [optional] [default to false]
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSiteMembership"></a>
# **createSiteMembership**
> SiteMemberEntry createSiteMembership(siteId, siteMembershipBodyCreate, opts)

Create a site membership

Creates a site membership for person **personId** on site **siteId**.  You can set the **role** to one of four types:  * SiteConsumer * SiteCollaborator * SiteContributor * SiteManager  **Note:** You can create more than one site membership by  specifying a list of people in the JSON body like this:  &#x60;&#x60;&#x60;JSON [   {     \&quot;role\&quot;: \&quot;SiteConsumer\&quot;,     \&quot;id\&quot;: \&quot;joe\&quot;   },   {     \&quot;role\&quot;: \&quot;SiteConsumer\&quot;,     \&quot;id\&quot;: \&quot;fred\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var siteMembershipBodyCreate = new AlfrescoCoreRestApi.SiteMembershipBodyCreate(); // SiteMembershipBodyCreate | The person to add and their role

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.createSiteMembership(siteId, siteMembershipBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. | 
 **siteMembershipBodyCreate** | [**SiteMembershipBodyCreate**](SiteMembershipBodyCreate.md)| The person to add and their role | 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMemberEntry**](SiteMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSiteMembershipRequestForPerson"></a>
# **createSiteMembershipRequestForPerson**
> SiteMembershipRequestEntry createSiteMembershipRequestForPerson(personIdsiteMembershipRequestBodyCreate, opts)

Create a site membership request

Create a site membership request for yourself on the site with the identifier of **id**, specified in the JSON body.  The result of the request differs depending on the type of site.  * For a **public** site, you join the site immediately as a SiteConsumer. * For a **moderated** site, your request is added to the site membership request list. The request waits for approval from the Site Manager. * You cannot request membership of a **private** site. Members are invited by the site administrator.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.   **Note:** You can create site membership requests for more than one site by  specifying a list of sites in the JSON body like this:  &#x60;&#x60;&#x60;JSON [   {     \&quot;message\&quot;: \&quot;Please can you add me\&quot;,     \&quot;id\&quot;: \&quot;test-site-1\&quot;,     \&quot;title\&quot;: \&quot;Request for test site 1\&quot;,   },   {     \&quot;message\&quot;: \&quot;Please can you add me\&quot;,     \&quot;id\&quot;: \&quot;test-site-2\&quot;,     \&quot;title\&quot;: \&quot;Request for test site 2\&quot;,   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var siteMembershipRequestBodyCreate = new AlfrescoCoreRestApi.SiteMembershipRequestBodyCreate(); // SiteMembershipRequestBodyCreate | Site membership request details

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.createSiteMembershipRequestForPerson(personIdsiteMembershipRequestBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **siteMembershipRequestBodyCreate** | [**SiteMembershipRequestBodyCreate**](SiteMembershipRequestBodyCreate.md)| Site membership request details | 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSite"></a>
# **deleteSite**
> deleteSite(siteId, , opts)

Delete a site

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Deletes the site with **siteId**. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var opts = { 
  'permanent': false // Boolean | Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan.
};
apiInstance.deleteSite(siteId, , opts).then(function() {
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

<a name="deleteSiteMembership"></a>
# **deleteSiteMembership**
> deleteSiteMembership(siteId, personId)

Delete a site membership

Deletes person **personId** as a member of site **siteId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var personId = "personId_example"; // String | The identifier of a person.

apiInstance.deleteSiteMembership(siteId, personId).then(function() {
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

<a name="deleteSiteMembershipForPerson"></a>
# **deleteSiteMembershipForPerson**
> deleteSiteMembershipForPerson(personIdsiteId, )

Delete a site membership

Deletes person **personId** as a member of site **siteId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var siteId = "siteId_example"; // String | The identifier of a site.

apiInstance.deleteSiteMembershipForPerson(personIdsiteId, ).then(function() {
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

<a name="deleteSiteMembershipRequestForPerson"></a>
# **deleteSiteMembershipRequestForPerson**
> deleteSiteMembershipRequestForPerson(personIdsiteId, )

Delete a site membership request

Deletes the site membership request to site **siteId** for person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var siteId = "siteId_example"; // String | The identifier of a site.

apiInstance.deleteSiteMembershipRequestForPerson(personIdsiteId, ).then(function() {
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

<a name="getSite"></a>
# **getSite**
> SiteEntry getSite(siteId, , opts)

Get a site

Gets information for site **siteId**.  You can use the **relations** parameter to include one or more related entities in a single response and so reduce network traffic.  The entity types in Alfresco are organized in a tree structure. The **sites** entity has two children, **containers** and **members**. The following relations parameter returns all the container and member objects related to the site **siteId**:  &#x60;&#x60;&#x60; containers,members &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var opts = { 
  'relations': ["relations_example"], // [String] | Use the relations parameter to include one or more related entities in a single response.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.getSite(siteId, , opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

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

Get a site container

Gets information on the container **containerId** in site **siteId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var containerId = "containerId_example"; // String | The unique identifier of a site container.

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.getSiteContainer(siteId, containerId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteContainerEntry**](SiteContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembership"></a>
# **getSiteMembership**
> SiteMemberEntry getSiteMembership(siteId, personId, opts)

Get a site membership

Gets site membership information for person **personId** on site **siteId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var personId = "personId_example"; // String | The identifier of a person.

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.getSiteMembership(siteId, personId, opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMemberEntry**](SiteMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembershipForPerson"></a>
# **getSiteMembershipForPerson**
> SiteRoleEntry getSiteMembershipForPerson(personIdsiteId, )

Get a site membership

Gets site membership information for person **personId** on site **siteId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var siteId = "siteId_example"; // String | The identifier of a site.

apiInstance.getSiteMembershipForPerson(personIdsiteId, ).then(function(data) {
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

### Return type

[**SiteRoleEntry**](SiteRoleEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSiteMembershipRequestForPerson"></a>
# **getSiteMembershipRequestForPerson**
> SiteMembershipRequestEntry getSiteMembershipRequestForPerson(personIdsiteId, , opts)

Get a site membership request

Gets the site membership request for site **siteId** for person **personId**, if one exists.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var siteId = "siteId_example"; // String | The identifier of a site.

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.getSiteMembershipRequestForPerson(personIdsiteId, , opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSiteContainers"></a>
# **listSiteContainers**
> SiteContainerPaging listSiteContainers(siteId, , opts)

List site containers

Gets a list of containers for the site **siteId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.listSiteContainers(siteId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteContainerPaging**](SiteContainerPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSiteMembershipRequestsForPerson"></a>
# **listSiteMembershipRequestsForPerson**
> SiteMembershipRequestPaging listSiteMembershipRequestsForPerson(personId, opts)

List site membership requests

Gets a list of the current site membership requests for person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.listSiteMembershipRequestsForPerson(personId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMembershipRequestPaging**](SiteMembershipRequestPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSiteMemberships"></a>
# **listSiteMemberships**
> SiteMemberPaging listSiteMemberships(siteId, , opts)

List site memberships

Gets a list of site memberships for site **siteId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.listSiteMemberships(siteId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMemberPaging**](SiteMemberPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSiteMembershipsForPerson"></a>
# **listSiteMembershipsForPerson**
> SiteRolePaging listSiteMembershipsForPerson(personId, opts)

List site memberships

Gets a list of site membership information for person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.  You can use the **where** parameter to filter the returned sites by **visibility** or site **preset**.  Example to filter by **visibility**, use any one of:  &#x60;&#x60;&#x60; (visibility&#x3D;&#39;PRIVATE&#39;) (visibility&#x3D;&#39;PUBLIC&#39;) (visibility&#x3D;&#39;MODERATED&#39;) &#x60;&#x60;&#x60;  Example to filter by site **preset**:  &#x60;&#x60;&#x60; (preset&#x3D;&#39;site-dashboard&#39;) &#x60;&#x60;&#x60;  The default sort order for the returned list is for sites to be sorted by ascending title. You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter: * id * title * role 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'orderBy': ["orderBy_example"] // [String] | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field. 
  'relations': ["relations_example"], // [String] | Use the relations parameter to include one or more related entities in a single response.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
  'where': "where_example" // String | A string to restrict the returned objects by using a predicate.
};
apiInstance.listSiteMembershipsForPerson(personId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **String**| The identifier of a person. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**[String]**](String.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.  | [optional] 
 **relations** | [**[String]**](String.md)| Use the relations parameter to include one or more related entities in a single response. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 
 **where** | **String**| A string to restrict the returned objects by using a predicate. | [optional] 

### Return type

[**SiteRolePaging**](SiteRolePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSites"></a>
# **listSites**
> SitePaging listSites(opts)

List sites

Gets a list of sites in this repository.  You can use the **where** parameter to filter the returned sites by **visibility** or site **preset**.  Example to filter by **visibility**, use any one of:  &#x60;&#x60;&#x60; (visibility&#x3D;&#39;PRIVATE&#39;) (visibility&#x3D;&#39;PUBLIC&#39;) (visibility&#x3D;&#39;MODERATED&#39;) &#x60;&#x60;&#x60;  Example to filter by site **preset**:  &#x60;&#x60;&#x60; (preset&#x3D;&#39;site-dashboard&#39;) &#x60;&#x60;&#x60;  The default sort order for the returned list is for sites to be sorted by ascending title. You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter: * id * title * description  You can use the **relations** parameter to include one or more related entities in a single response and so reduce network traffic.  The entity types in Alfresco are organized in a tree structure. The **sites** entity has two children, **containers** and **members**. The following relations parameter returns all the container and member objects related to each site:  &#x60;&#x60;&#x60; containers,members &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'orderBy': ["orderBy_example"] // [String] | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field. 
  'relations': ["relations_example"], // [String] | Use the relations parameter to include one or more related entities in a single response.
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
  'where': "where_example" // String | A string to restrict the returned objects by using a predicate.
};
apiInstance.listSites(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**[String]**](String.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally ascending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.  | [optional] 
 **relations** | [**[String]**](String.md)| Use the relations parameter to include one or more related entities in a single response. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 
 **where** | **String**| A string to restrict the returned objects by using a predicate. | [optional] 

### Return type

[**SitePaging**](SitePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSite"></a>
# **updateSite**
> SiteEntry updateSite(siteId, siteBodyUpdate, opts)

Update a site

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Update the details for the given site **siteId**. Site Manager or otherwise a  (site) admin can update title, description or visibility.  Note: the id of a site cannot be updated once the site has been created. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var siteBodyUpdate = new AlfrescoCoreRestApi.SiteBodyUpdate(); // SiteBodyUpdate | The site information to update.

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.updateSite(siteId, siteBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. | 
 **siteBodyUpdate** | [**SiteBodyUpdate**](SiteBodyUpdate.md)| The site information to update. | 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSiteMembership"></a>
# **updateSiteMembership**
> SiteMemberEntry updateSiteMembership(siteId, personIdsiteMembershipBodyUpdate, opts)

Update a site membership

Update the membership of person **personId** in site **siteId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.  You can set the **role** to one of four types:  * SiteConsumer * SiteCollaborator * SiteContributor * SiteManager 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var siteId = "siteId_example"; // String | The identifier of a site.

var personId = "personId_example"; // String | The identifier of a person.

var siteMembershipBodyUpdate = new AlfrescoCoreRestApi.SiteMembershipBodyUpdate(); // SiteMembershipBodyUpdate | The persons new role

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.updateSiteMembership(siteId, personIdsiteMembershipBodyUpdate, opts).then(function(data) {
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
 **siteMembershipBodyUpdate** | [**SiteMembershipBodyUpdate**](SiteMembershipBodyUpdate.md)| The persons new role | 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMemberEntry**](SiteMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSiteMembershipRequestForPerson"></a>
# **updateSiteMembershipRequestForPerson**
> SiteMembershipRequestEntry updateSiteMembershipRequestForPerson(personIdsiteId, siteMembershipRequestBodyUpdate, opts)

Update a site membership request

Updates the message for the site membership request to site **siteId** for person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SitesApi();

var personId = "personId_example"; // String | The identifier of a person.

var siteId = "siteId_example"; // String | The identifier of a site.

var siteMembershipRequestBodyUpdate = new AlfrescoCoreRestApi.SiteMembershipRequestBodyUpdate(); // SiteMembershipRequestBodyUpdate | The new message to display

var opts = { 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.updateSiteMembershipRequestForPerson(personIdsiteId, siteMembershipRequestBodyUpdate, opts).then(function(data) {
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
 **siteMembershipRequestBodyUpdate** | [**SiteMembershipRequestBodyUpdate**](SiteMembershipRequestBodyUpdate.md)| The new message to display | 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

