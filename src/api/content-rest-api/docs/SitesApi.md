# SitesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveSiteMembershipRequest**](SitesApi.md#approveSiteMembershipRequest) | **POST** /sites/{siteId}/site-membership-requests/{inviteeId}/approve | Approve a site membership request
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
[**getSiteMembershipRequests**](SitesApi.md#getSiteMembershipRequests) | **GET** /site-membership-requests | Get site membership requests
[**listSiteContainers**](SitesApi.md#listSiteContainers) | **GET** /sites/{siteId}/containers | List site containers
[**listSiteMembershipRequestsForPerson**](SitesApi.md#listSiteMembershipRequestsForPerson) | **GET** /people/{personId}/site-membership-requests | List site membership requests
[**listSiteMemberships**](SitesApi.md#listSiteMemberships) | **GET** /sites/{siteId}/members | List site memberships
[**listSiteMembershipsForPerson**](SitesApi.md#listSiteMembershipsForPerson) | **GET** /people/{personId}/sites | List site memberships
[**listSites**](SitesApi.md#listSites) | **GET** /sites | List sites
[**rejectSiteMembershipRequest**](SitesApi.md#rejectSiteMembershipRequest) | **POST** /sites/{siteId}/site-membership-requests/{inviteeId}/reject | Reject a site membership request
[**updateSite**](SitesApi.md#updateSite) | **PUT** /sites/{siteId} | Update a site
[**updateSiteMembership**](SitesApi.md#updateSiteMembership) | **PUT** /sites/{siteId}/members/{personId} | Update a site membership
[**updateSiteMembershipRequestForPerson**](SitesApi.md#updateSiteMembershipRequestForPerson) | **PUT** /people/{personId}/site-membership-requests/{siteId} | Update a site membership request


<a name="approveSiteMembershipRequest"></a>
# **approveSiteMembershipRequest**
> approveSiteMembershipRequest(siteIdinviteeIdopts)

Approve a site membership request

Approve a site membership request.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'siteMembershipApprovalBody':  //  | Accepting a request to join, optionally, allows assignment of a role to the user.

};

sitesApi.approveSiteMembershipRequest(siteIdinviteeIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **inviteeId** | **string**| The invitee user name. | 
 **siteMembershipApprovalBody** | [**SiteMembershipApprovalBody**](SiteMembershipApprovalBody.md)| Accepting a request to join, optionally, allows assignment of a role to the user.
 | [optional] 

### Return type

null (empty response body)

<a name="createSite"></a>
# **createSite**
> SiteEntry createSite(siteBodyCreateopts)

Create a site

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Creates a default site with the given details.  Unless explicitly specified, the site id will be generated
from the site title. The site id must be unique and only contain alphanumeric and/or dash characters.

Note: the id of a site cannot be updated once the site has been created.

For example, to create a public site called \"Marketing\" the following body could be used:
JSON
{
  \"title\": \"Marketing\",
  \"visibility\": \"PUBLIC\"
}


The creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.

**Note:** if skipped then such a site will **not** work within Share.

The addition of the site to the user's site favorites can be skipped via the **skipAddToFavorites** query parameter.

The creator will be added as a member with Site Manager role.

When you create a site, a container called **documentLibrary** is created for you in the new site.
This container is the root folder for content stored in the site.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'skipConfiguration': true //  | Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created.
  'skipAddToFavorites': true //  | Flag to indicate whether the site should not be added to the user's site favorites.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

sitesApi.createSite(siteBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteBodyCreate** | [**SiteBodyCreate**](SiteBodyCreate.md)| The site details | 
 **skipConfiguration** | **boolean**| Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. | [optional] [default to false]
 **skipAddToFavorites** | **boolean**| Flag to indicate whether the site should not be added to the user's site favorites. | [optional] [default to false]
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

[**SiteEntry**](SiteEntry.md)

<a name="createSiteMembership"></a>
# **createSiteMembership**
> SiteMemberEntry createSiteMembership(siteIdsiteMembershipBodyCreateopts)

Create a site membership

Creates a site membership for person **personId** on site **siteId**.

You can set the **role** to one of four types:

* SiteConsumer
* SiteCollaborator
* SiteContributor
* SiteManager

**Note:** You can create more than one site membership by
specifying a list of people in the JSON body like this:

JSON
[
  {
    \"role\": \"SiteConsumer\",
    \"id\": \"joe\"
  },
  {
    \"role\": \"SiteConsumer\",
    \"id\": \"fred\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.createSiteMembership(siteIdsiteMembershipBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **siteMembershipBodyCreate** | [**SiteMembershipBodyCreate**](SiteMembershipBodyCreate.md)| The person to add and their role | 
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

[**SiteMemberEntry**](SiteMemberEntry.md)

<a name="createSiteMembershipRequestForPerson"></a>
# **createSiteMembershipRequestForPerson**
> SiteMembershipRequestEntry createSiteMembershipRequestForPerson(personIdsiteMembershipRequestBodyCreateopts)

Create a site membership request

Create a site membership request for yourself on the site with the identifier of **id**, specified in the JSON body.
The result of the request differs depending on the type of site.

* For a **public** site, you join the site immediately as a SiteConsumer.
* For a **moderated** site, your request is added to the site membership request list. The request waits for approval from the Site Manager.
* You cannot request membership of a **private** site. Members are invited by the site administrator.

You can use the -me- string in place of <personId> to specify the currently authenticated user.

 **Note:** You can create site membership requests for more than one site by
specifying a list of sites in the JSON body like this:

JSON
[
  {
    \"message\": \"Please can you add me\",
    \"id\": \"test-site-1\",
    \"title\": \"Request for test site 1\",
  },
  {
    \"message\": \"Please can you add me\",
    \"id\": \"test-site-2\",
    \"title\": \"Request for test site 2\",
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.createSiteMembershipRequestForPerson(personIdsiteMembershipRequestBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **siteMembershipRequestBodyCreate** | [**SiteMembershipRequestBodyCreate**](SiteMembershipRequestBodyCreate.md)| Site membership request details | 
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

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

<a name="deleteSite"></a>
# **deleteSite**
> deleteSite(siteIdopts)

Delete a site

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Deletes the site with **siteId**.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'permanent': true //  | Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan.
};

sitesApi.deleteSite(siteIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **permanent** | **boolean**| Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. | [optional] [default to false]

### Return type

null (empty response body)

<a name="deleteSiteMembership"></a>
# **deleteSiteMembership**
> deleteSiteMembership(siteIdpersonId)

Delete a site membership

Deletes person **personId** as a member of site **siteId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);


sitesApi.deleteSiteMembership(siteIdpersonId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **personId** | **string**| The identifier of a person. | 

### Return type

null (empty response body)

<a name="deleteSiteMembershipForPerson"></a>
# **deleteSiteMembershipForPerson**
> deleteSiteMembershipForPerson(personIdsiteId)

Delete a site membership

Deletes person **personId** as a member of site **siteId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);


sitesApi.deleteSiteMembershipForPerson(personIdsiteId).then(() => {
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

<a name="deleteSiteMembershipRequestForPerson"></a>
# **deleteSiteMembershipRequestForPerson**
> deleteSiteMembershipRequestForPerson(personIdsiteId)

Delete a site membership request

Deletes the site membership request to site **siteId** for person **personId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);


sitesApi.deleteSiteMembershipRequestForPerson(personIdsiteId).then(() => {
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

<a name="getSite"></a>
# **getSite**
> SiteEntry getSite(siteIdopts)

Get a site

Gets information for site **siteId**.

You can use the **relations** parameter to include one or more related
entities in a single response and so reduce network traffic.

The entity types in Alfresco are organized in a tree structure.
The **sites** entity has two children, **containers** and **members**.
The following relations parameter returns all the container and member
objects related to the site **siteId**:


containers,members



### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'relations':  //  | Use the relations parameter to include one or more related entities in a single response.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

sitesApi.getSite(siteIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **relations** | [**string**](string.md)| Use the relations parameter to include one or more related entities in a single response. | [optional] 
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

[**SiteEntry**](SiteEntry.md)

<a name="getSiteContainer"></a>
# **getSiteContainer**
> SiteContainerEntry getSiteContainer(siteIdcontainerIdopts)

Get a site container

Gets information on the container **containerId** in site **siteId**.

### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.getSiteContainer(siteIdcontainerIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **containerId** | **string**| The unique identifier of a site container. | 
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

[**SiteContainerEntry**](SiteContainerEntry.md)

<a name="getSiteMembership"></a>
# **getSiteMembership**
> SiteMemberEntry getSiteMembership(siteIdpersonIdopts)

Get a site membership

Gets site membership information for person **personId** on site **siteId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.getSiteMembership(siteIdpersonIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **personId** | **string**| The identifier of a person. | 
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

[**SiteMemberEntry**](SiteMemberEntry.md)

<a name="getSiteMembershipForPerson"></a>
# **getSiteMembershipForPerson**
> SiteRoleEntry getSiteMembershipForPerson(personIdsiteId)

Get a site membership

Gets site membership information for person **personId** on site **siteId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);


sitesApi.getSiteMembershipForPerson(personIdsiteId).then((data) => {
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

### Return type

[**SiteRoleEntry**](SiteRoleEntry.md)

<a name="getSiteMembershipRequestForPerson"></a>
# **getSiteMembershipRequestForPerson**
> SiteMembershipRequestEntry getSiteMembershipRequestForPerson(personIdsiteIdopts)

Get a site membership request

Gets the site membership request for site **siteId** for person **personId**, if one exists.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.getSiteMembershipRequestForPerson(personIdsiteIdopts).then((data) => {
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

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

<a name="getSiteMembershipRequests"></a>
# **getSiteMembershipRequests**
> SiteMembershipRequestWithPersonPaging getSiteMembershipRequests(opts)

Get site membership requests

Get the list of site membership requests the user can action.

You can use the **where** parameter to filter the returned site membership requests by **siteId**. For example:


(siteId=mySite)


The **where** parameter can also be used to filter by ***personId***. For example:


where=(personId=person)


This may be combined with the siteId filter, as shown below:


where=(siteId=mySite AND personId=person))



### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'where': where_example //  | A string to restrict the returned objects by using a predicate.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

sitesApi.getSiteMembershipRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 
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

[**SiteMembershipRequestWithPersonPaging**](SiteMembershipRequestWithPersonPaging.md)

<a name="listSiteContainers"></a>
# **listSiteContainers**
> SiteContainerPaging listSiteContainers(siteIdopts)

List site containers

Gets a list of containers for the site **siteId**.

### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.listSiteContainers(siteIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
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

[**SiteContainerPaging**](SiteContainerPaging.md)

<a name="listSiteMembershipRequestsForPerson"></a>
# **listSiteMembershipRequestsForPerson**
> SiteMembershipRequestPaging listSiteMembershipRequestsForPerson(personIdopts)

List site membership requests

Gets a list of the current site membership requests for person **personId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.listSiteMembershipRequestsForPerson(personIdopts).then((data) => {
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

[**SiteMembershipRequestPaging**](SiteMembershipRequestPaging.md)

<a name="listSiteMemberships"></a>
# **listSiteMemberships**
> SiteMemberPaging listSiteMemberships(siteIdopts)

List site memberships

Gets a list of site memberships for site **siteId**.

### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.listSiteMemberships(siteIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
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

[**SiteMemberPaging**](SiteMemberPaging.md)

<a name="listSiteMembershipsForPerson"></a>
# **listSiteMembershipsForPerson**
> SiteRolePaging listSiteMembershipsForPerson(personIdopts)

List site memberships

Gets a list of site membership information for person **personId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.

You can use the **where** parameter to filter the returned sites by **visibility** or site **preset**.

Example to filter by **visibility**, use any one of:


(visibility='PRIVATE')
(visibility='PUBLIC')
(visibility='MODERATED')


Example to filter by site **preset**:


(preset='site-dashboard')


The default sort order for the returned list is for sites to be sorted by ascending title.
You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
* id
* title
* role


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'relations':  //  | Use the relations parameter to include one or more related entities in a single response.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

  'where': where_example //  | A string to restrict the returned objects by using a predicate.
};

sitesApi.listSiteMembershipsForPerson(personIdopts).then((data) => {
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
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **relations** | [**string**](string.md)| Use the relations parameter to include one or more related entities in a single response. | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 

### Return type

[**SiteRolePaging**](SiteRolePaging.md)

<a name="listSites"></a>
# **listSites**
> SitePaging listSites(opts)

List sites

Gets a list of sites in this repository.

You can use the **where** parameter to filter the returned sites by **visibility** or site **preset**.

Example to filter by **visibility**, use any one of:


(visibility='PRIVATE')
(visibility='PUBLIC')
(visibility='MODERATED')


Example to filter by site **preset**:


(preset='site-dashboard')


The default sort order for the returned list is for sites to be sorted by ascending title.
You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
* id
* title
* description

You can use the **relations** parameter to include one or more related
entities in a single response and so reduce network traffic.

The entity types in Alfresco are organized in a tree structure.
The **sites** entity has two children, **containers** and **members**.
The following relations parameter returns all the container and member
objects related to each site:


containers,members



### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'relations':  //  | Use the relations parameter to include one or more related entities in a single response.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

  'where': where_example //  | A string to restrict the returned objects by using a predicate.
};

sitesApi.listSites(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **relations** | [**string**](string.md)| Use the relations parameter to include one or more related entities in a single response. | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 

### Return type

[**SitePaging**](SitePaging.md)

<a name="rejectSiteMembershipRequest"></a>
# **rejectSiteMembershipRequest**
> rejectSiteMembershipRequest(siteIdinviteeIdopts)

Reject a site membership request

Reject a site membership request.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

let opts = { 
  'siteMembershipRejectionBody':  //  | Rejecting a request to join, optionally, allows the inclusion of comment.

};

sitesApi.rejectSiteMembershipRequest(siteIdinviteeIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **inviteeId** | **string**| The invitee user name. | 
 **siteMembershipRejectionBody** | [**SiteMembershipRejectionBody**](SiteMembershipRejectionBody.md)| Rejecting a request to join, optionally, allows the inclusion of comment.
 | [optional] 

### Return type

null (empty response body)

<a name="updateSite"></a>
# **updateSite**
> SiteEntry updateSite(siteIdsiteBodyUpdateopts)

Update a site

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Update the details for the given site **siteId**. Site Manager or otherwise a
(site) admin can update title, description or visibility.

Note: the id of a site cannot be updated once the site has been created.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.updateSite(siteIdsiteBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **siteBodyUpdate** | [**SiteBodyUpdate**](SiteBodyUpdate.md)| The site information to update. | 
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

[**SiteEntry**](SiteEntry.md)

<a name="updateSiteMembership"></a>
# **updateSiteMembership**
> SiteMemberEntry updateSiteMembership(siteIdpersonIdsiteMembershipBodyUpdateopts)

Update a site membership

Update the membership of person **personId** in site **siteId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.

You can set the **role** to one of four types:

* SiteConsumer
* SiteCollaborator
* SiteContributor
* SiteManager


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.updateSiteMembership(siteIdpersonIdsiteMembershipBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **string**| The identifier of a site. | 
 **personId** | **string**| The identifier of a person. | 
 **siteMembershipBodyUpdate** | [**SiteMembershipBodyUpdate**](SiteMembershipBodyUpdate.md)| The persons new role | 
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

[**SiteMemberEntry**](SiteMemberEntry.md)

<a name="updateSiteMembershipRequestForPerson"></a>
# **updateSiteMembershipRequestForPerson**
> SiteMembershipRequestEntry updateSiteMembershipRequestForPerson(personIdsiteIdsiteMembershipRequestBodyUpdateopts)

Update a site membership request

Updates the message for the site membership request to site **siteId** for person **personId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.


### Example
```javascript
import SitesApi from 'SitesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sitesApi = new SitesApi(this.alfrescoApi);

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

sitesApi.updateSiteMembershipRequestForPerson(personIdsiteIdsiteMembershipRequestBodyUpdateopts).then((data) => {
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
 **siteMembershipRequestBodyUpdate** | [**SiteMembershipRequestBodyUpdate**](SiteMembershipRequestBodyUpdate.md)| The new message to display | 
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

[**SiteMembershipRequestEntry**](SiteMembershipRequestEntry.md)

