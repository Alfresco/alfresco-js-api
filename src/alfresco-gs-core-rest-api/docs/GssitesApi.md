# AlfrescoGovernanceServicesRestApi.GssitesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRMSite**](GssitesApi.md#createRMSite) | **POST** /gs-sites | Create the Records Management (RM) site
[**deleteRMSite**](GssitesApi.md#deleteRMSite) | **DELETE** /gs-sites/rm | Delete the Records Management (RM) site
[**getRMSite**](GssitesApi.md#getRMSite) | **GET** /gs-sites/rm | Get the Records Management (RM) site
[**updateRMSite**](GssitesApi.md#updateRMSite) | **PUT** /gs-sites/rm | Update the Records Management (RM) site


<a name="createRMSite"></a>
# **createRMSite**
> RMSiteEntry createRMSite(siteBodyCreate, opts)

Create the Records Management (RM) site

\nCreates the RM site with the given details.\n\n**Note:** The default site id is rm and the default site name is Records Management. The id of a site cannot be updated once the site has been created.\n\nFor example, to create an RM site named \&quot;Records Management\&quot; with \&quot;Records Management Description\&quot; as description, the following body could be used:\n```JSON\n{\n  \&quot;title\&quot;: \&quot;Records Management\&quot;,\n  \&quot;description\&quot;: \&quot;Records Management Description\&quot;\n}\n```\n\nThe creator will be added as a member with Site Manager role.\n\nWhen you create the RM site, the **filePlan** structure is also created including special containers, such as containers for transfers, holds and, unfiled records.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.GssitesApi()

var siteBodyCreate = new AlfrescoGovernanceServicesRestApi.RMSiteBodyCreate(); // {RMSiteBodyCreate} The site details

var opts = { 
  'skipAddToFavorites': false // {Boolean} Flag to indicate whether the RM site should not be added to the user's site favorites.
};
apiInstance.createRMSite(siteBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteBodyCreate** | [**RMSiteBodyCreate**](RMSiteBodyCreate.md)| The site details | 
 **skipAddToFavorites** | **Boolean**| Flag to indicate whether the RM site should not be added to the user&#39;s site favorites. | [optional] [default to false]

### Return type

[**RMSiteEntry**](RMSiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRMSite"></a>
# **deleteRMSite**
> deleteRMSite

Delete the Records Management (RM) site

\nDeletes the RM site.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.GssitesApi()
apiInstance.deleteRMSite().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRMSite"></a>
# **getRMSite**
> RMSiteEntry getRMSite(opts)

Get the Records Management (RM) site

\nGets information for RM site.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.GssitesApi()

var opts = { 
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getRMSite(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RMSiteEntry**](RMSiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRMSite"></a>
# **updateRMSite**
> RMSiteEntry updateRMSite(siteBodyUpdate, opts)

Update the Records Management (RM) site

\nUpdate the details for the RM site. Site Manager or other (site) admin can update title or description.\n\n**Note**: the id, site visibility, or compliance of the RM site cannot be updated once the site has been created.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.GssitesApi()

var siteBodyUpdate = new AlfrescoGovernanceServicesRestApi.RMSiteBodyUpdate(); // {RMSiteBodyUpdate} The RM site information to update.

var opts = { 
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateRMSite(siteBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteBodyUpdate** | [**RMSiteBodyUpdate**](RMSiteBodyUpdate.md)| The RM site information to update. | 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RMSiteEntry**](RMSiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

