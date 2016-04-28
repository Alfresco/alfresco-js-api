# AlfrescoCoreRestApi.ChangesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNode**](ChangesApi.md#addNode) | **POST** /nodes/{nodeId}/children | Create a node
[**addSharedLink**](ChangesApi.md#addSharedLink) | **POST** /shared-links | Create a shared link to a file
[**copyNode**](ChangesApi.md#copyNode) | **POST** /nodes/{nodeId}/copy | Copy a node
[**createRendition**](ChangesApi.md#createRendition) | **POST** /nodes/{nodeId}/renditions | Create rendition
[**createSite**](ChangesApi.md#createSite) | **POST** /sites | Create a site
[**deleteNode**](ChangesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
[**deleteSharedLink**](ChangesApi.md#deleteSharedLink) | **DELETE** /shared-links/{sharedId} | Deletes a shared link
[**deleteSite**](ChangesApi.md#deleteSite) | **DELETE** /sites/{siteId} | Delete a site
[**emailSharedLink**](ChangesApi.md#emailSharedLink) | **POST** /shared-links/{sharedId}/email | Email shared link
[**findSharedLinks**](ChangesApi.md#findSharedLinks) | **GET** /shared-links | Find shared links
[**getDeletedNode**](ChangesApi.md#getDeletedNode) | **GET** /deleted-nodes/{nodeId} | Get a deleted node
[**getDeletedNodes**](ChangesApi.md#getDeletedNodes) | **GET** /deleted-nodes | Get deleted nodes
[**getFileContent**](ChangesApi.md#getFileContent) | **GET** /nodes/{nodeId}/content | Get file content
[**getNode**](ChangesApi.md#getNode) | **GET** /nodes/{nodeId} | Get a node
[**getNodeChildren**](ChangesApi.md#getNodeChildren) | **GET** /nodes/{nodeId}/children | Get node children
[**getRendition**](ChangesApi.md#getRendition) | **GET** /nodes/{nodeId}/renditions/{renditionId} | Get rendition information
[**getRenditionContent**](ChangesApi.md#getRenditionContent) | **GET** /nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content
[**getRenditions**](ChangesApi.md#getRenditions) | **GET** /nodes/{nodeId}/renditions | List information for renditions
[**getSharedLink**](ChangesApi.md#getSharedLink) | **GET** /shared-links/{sharedId} | Get a shared link
[**getSharedLinkContent**](ChangesApi.md#getSharedLinkContent) | **GET** /shared-links/{sharedId}/content | Get file content
[**getSharedLinkRenditionContent**](ChangesApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content
[**liveSearchNodes**](ChangesApi.md#liveSearchNodes) | **GET** /queries/live-search-nodes | Live search for nodes
[**moveNode**](ChangesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
[**purgeDeletedNode**](ChangesApi.md#purgeDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Purge a deleted node
[**restoreNode**](ChangesApi.md#restoreNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node
[**updateFileContent**](ChangesApi.md#updateFileContent) | **PUT** /nodes/{nodeId}/content | Update file content
[**updateNode**](ChangesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node


<a name="addNode"></a>
# **addNode**
> NodeEntry addNode(nodeId, nodeBody, opts)

Create a node

Creates a node as a child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var nodeBody = new AlfrescoCoreRestApi.NodeBody1(); // {NodeBody1} The node information to create.

var opts = { 
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addNode(nodeId, nodeBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **nodeBody** | [**NodeBody1**](NodeBody1.md)| The node information to create. | 
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="addSharedLink"></a>
# **addSharedLink**
> NodeSharedLinkEntry addSharedLink(sharedLinkBody, opts)

Create a shared link to a file

Create shared link to specfied file identified by **nodeId** in request body.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var sharedLinkBody = new AlfrescoCoreRestApi.SharedLinkBody(); // {SharedLinkBody} The nodeId to create a shared link for.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addSharedLink(sharedLinkBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedLinkBody** | [**SharedLinkBody**](SharedLinkBody.md)| The nodeId to create a shared link for. | 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyNode"></a>
# **copyNode**
> NodeEntry copyNode(nodeId, copyBody, opts)

Copy a node

Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.\n\nThe new node has the same name as the source node unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also copied.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var copyBody = new AlfrescoCoreRestApi.CopyBody(); // {CopyBody} The targetParentId and, optionally, a new name.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.copyNode(nodeId, copyBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **copyBody** | [**CopyBody**](CopyBody.md)| The targetParentId and, optionally, a new name. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRendition"></a>
# **createRendition**
> createRendition(nodeId, renditionBody)

Create rendition

Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var renditionBody = new AlfrescoCoreRestApi.RenditionBody(); // {RenditionBody} The rendition \"id\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.createRendition(nodeId, renditionBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **renditionBody** | [**RenditionBody**](RenditionBody.md)| The rendition \&quot;id\&quot;. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSite"></a>
# **createSite**
> SiteEntry createSite(siteBody, opts)

Create a site

Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var siteBody = new AlfrescoCoreRestApi.SiteBody(); // {SiteBody} The site details

var opts = { 
  'skipConfiguration': false, // {Boolean} Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created.
  'skipAddToFavorites': false // {Boolean} Flag to indicate whether the site should not be added to the user's site favorites.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSite(siteBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteBody** | [**SiteBody**](SiteBody.md)| The site details | 
 **skipConfiguration** | **Boolean**| Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. | [optional] [default to false]
 **skipAddToFavorites** | **Boolean**| Flag to indicate whether the site should not be added to the user&#39;s site favorites. | [optional] [default to false]

### Return type

[**SiteEntry**](SiteEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNode"></a>
# **deleteNode**
> deleteNode(nodeId, , opts)

Delete a node

Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'permanent': false // {Boolean} If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteNode(nodeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **permanent** | **Boolean**| If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSharedLink"></a>
# **deleteSharedLink**
> deleteSharedLink(sharedId, )

Deletes a shared link

Deletes the shared link with identifier **sharedId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteSharedLink(sharedId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSite"></a>
# **deleteSite**
> deleteSite(siteId, , opts)

Delete a site

Deletes the site with **siteId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var opts = { 
  'permanent': false // {Boolean} Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteSite(siteId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The identifier of a site. | 
 **permanent** | **Boolean**| Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailSharedLink"></a>
# **emailSharedLink**
> emailSharedLink(sharedId, emailSharedLinkBody)

Email shared link

Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var emailSharedLinkBody = new AlfrescoCoreRestApi.EmailSharedLinkBody(); // {EmailSharedLinkBody} The shared link email to send.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.emailSharedLink(sharedId, emailSharedLinkBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **emailSharedLinkBody** | [**EmailSharedLinkBody**](EmailSharedLinkBody.md)| The shared link email to send. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findSharedLinks"></a>
# **findSharedLinks**
> NodeSharedLinkEntry findSharedLinks(opts)

Find shared links

Find (search for) links that current user has read permission on source node.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var opts = { 
  'where': "where_example", // {String} Optionally filter the list by \"sharedByUser\" userid of person who shared the link (can also use -me-)\n*   where=(sharedByUser='jbloggs')\n*   where=(sharedByUser='-me-')
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.findSharedLinks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;) | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNode"></a>
# **getDeletedNode**
> DeletedNodeEntry getDeletedNode(nodeId, , opts)

Get a deleted node

Returns a specific deleted node identified by **nodeId**.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDeletedNode(nodeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 

### Return type

[**DeletedNodeEntry**](DeletedNodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNodes"></a>
# **getDeletedNodes**
> DeletedNodesPaging getDeletedNodes(opts)

Get deleted nodes

Returns a list of deleted nodes for the current user.\nIf the current user is an administrator deleted nodes\nfor all users will be returned.\nThe list of deleted nodes will be ordered with the most recently deleted node at the top of the list.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDeletedNodes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n | [optional] 

### Return type

[**DeletedNodesPaging**](DeletedNodesPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileContent"></a>
# **getFileContent**
> getFileContent(nodeId, , opts)

Get file content

Returns the file content of the node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getFileContent(nodeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> NodeEntry getNode(nodeId, , opts)

Get a node

Get information for the node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'relativePath': "relativePath_example", // {String} If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getNode(nodeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **relativePath** | **String**| If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodeChildren"></a>
# **getNodeChildren**
> NodePaging getNodeChildren(nodeId, , opts)

Get node children

Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", // {String} If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \"orderBy=isFolder DESC,name ASC\".\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy=name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
  'where': "where_example", // {String} Optionally filter the list. Here are some examples:\n\n*   where=(isFolder=true)\n\n*   where=(isFile=true)\n\n*   where=(nodeType='my:specialtype')\n\n*   where=(nodeType='my:specialtype' INCLUDESUBTYPES)\n
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n
  'relativePath': "relativePath_example", // {String} Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
  'includeSource': true, // {Boolean} Also include \"source\" (in addition to \"entries\") with folder information on parent node (either the specified parent \"nodeId\" or as resolved by \"relativePath\")
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getNodeChildren(nodeId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | **String**| If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **relativePath** | **String**| Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder) | [optional] 
 **includeSource** | **Boolean**| Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;) | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRendition"></a>
# **getRendition**
> RenditionEntry getRendition(nodeId, renditionId)

Get rendition information

Returns the rendition information for file node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRendition(nodeId, renditionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

### Return type

[**RenditionEntry**](RenditionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRenditionContent"></a>
# **getRenditionContent**
> getRenditionContent(nodeId, renditionId, opts)

Get rendition content

Returns the rendition content for file node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getRenditionContent(nodeId, renditionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRenditions"></a>
# **getRenditions**
> RenditionPaging getRenditions(nodeId, )

List information for renditions

Returns the rendition information for the file node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRenditions(nodeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 

### Return type

[**RenditionPaging**](RenditionPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLink"></a>
# **getSharedLink**
> NodeSharedLinkEntry getSharedLink(sharedId, , opts)

Get a shared link

Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSharedLink(sharedId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkContent"></a>
# **getSharedLinkContent**
> getSharedLinkContent(sharedId, , opts)

Get file content

Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getSharedLinkContent(sharedId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditionContent"></a>
# **getSharedLinkRenditionContent**
> getSharedLinkRenditionContent(sharedId, renditionId, opts)

Get shared link rendition content

Returns the rendition content for file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getSharedLinkRenditionContent(sharedId, renditionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="liveSearchNodes"></a>
# **liveSearchNodes**
> NodePaging liveSearchNodes(term, opts)

Live search for nodes

Returns a list of nodes that match the given search criteria.\n\nThe search term is used to look for nodes that match against name, title, description, full text content and tags.\n\nThe search term\n- must contain a minimum of 3 alphanumeric characters\n- allows \&quot;quoted term\&quot;\n- can optionally use &#39;*&#39; for wildcard matching\n\nBy default, file and folder types will be searched unless a specific type is provided as a query parameter.\n\nBy default, the search will be across the repository unless a specific root node id is provided to start the search from.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var term = "term_example"; // {String} The term to search for.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'rootNodeId': "rootNodeId_example", // {String} The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n
  'nodeType': "nodeType_example", // {String} Restrict the returned results to only those of the given node type and it's sub-types
  'include': "include_example", // {String} Return additional info, eg. aspectNames, properties, path, isLink
  'orderBy': "orderBy_example", // {String} The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.liveSearchNodes(term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The term to search for. | 
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **rootNodeId** | **String**| The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n | [optional] 
 **nodeType** | **String**| Restrict the returned results to only those of the given node type and it&#39;s sub-types | [optional] 
 **include** | **String**| Return additional info, eg. aspectNames, properties, path, isLink | [optional] 
 **orderBy** | **String**| The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveNode"></a>
# **moveNode**
> NodeEntry moveNode(nodeId, moveBody, opts)

Move a node

Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var moveBody = new AlfrescoCoreRestApi.MoveBody(); // {MoveBody} The targetParentId and, optionally, a new name.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.moveNode(nodeId, moveBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **moveBody** | [**MoveBody**](MoveBody.md)| The targetParentId and, optionally, a new name. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purgeDeletedNode"></a>
# **purgeDeletedNode**
> purgeDeletedNode(nodeId, )

Purge a deleted node

Permanently removes the deleted node identified by **nodeId**.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.purgeDeletedNode(nodeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="restoreNode"></a>
# **restoreNode**
> NodeEntry restoreNode(nodeId, )

Restore a deleted node

Attempts to restore the deleted node identified by **nodeId** to its original location.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.restoreNode(nodeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFileContent"></a>
# **updateFileContent**
> NodeEntry updateFileContent(nodeId, contentBody, opts)

Update file content

Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitary file.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var contentBody = "B"; // {String} The binary content

var opts = { 
  'majorVersion': false, // {Boolean} If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
  'comment': "comment_example", // {String} Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateFileContent(nodeId, contentBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **contentBody** | **String**| The binary content | 
 **majorVersion** | **Boolean**| If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n | [optional] [default to false]
 **comment** | **String**| Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="updateNode"></a>
# **updateNode**
> NodeEntry updateNode(nodeId, nodeBody, opts)

Update a node

Updates the node with identifier **nodeId**. For example, you can rename a file or folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;,\n}\n&#x60;&#x60;&#x60;\nYou can also set or update one or more properties:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\n**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var nodeBody = new AlfrescoCoreRestApi.NodeBody(); // {NodeBody} The node information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateNode(nodeId, nodeBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **nodeBody** | [**NodeBody**](NodeBody.md)| The node information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

