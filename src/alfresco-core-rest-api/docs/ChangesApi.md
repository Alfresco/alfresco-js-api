# AlfrescoCoreRestApi.ChangesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssoc**](ChangesApi.md#addAssoc) | **POST** /nodes/{sourceId}/targets | Add node association
[**addNode**](ChangesApi.md#addNode) | **POST** /nodes/{nodeId}/children | Create a node
[**addSecondaryChildAssoc**](ChangesApi.md#addSecondaryChildAssoc) | **POST** /nodes/{parentId}/secondary-children | Add secondary child
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
[**getSharedLinkRenditions**](ChangesApi.md#getSharedLinkRenditions) | **GET** /shared-links/{sharedId}/renditions | List information for created renditions
[**listParents**](ChangesApi.md#listParents) | **GET** /nodes/{childId}/parents | List parents
[**listSecondaryChildAssociations**](ChangesApi.md#listSecondaryChildAssociations) | **GET** /nodes/{parentId}/secondary-children | List secondary children
[**listSourceNodeAssociations**](ChangesApi.md#listSourceNodeAssociations) | **GET** /nodes/{targetId}/sources | List node associations
[**listTargetAssociations**](ChangesApi.md#listTargetAssociations) | **GET** /nodes/{sourceId}/targets | List node associations
[**liveSearchNodes**](ChangesApi.md#liveSearchNodes) | **GET** /queries/live-search-nodes | Live search for nodes
[**moveNode**](ChangesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
[**purgeDeletedNode**](ChangesApi.md#purgeDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Purge a deleted node
[**removeAssoc**](ChangesApi.md#removeAssoc) | **DELETE** /nodes/{sourceId}/targets/{targetId} | Remove node association(s)
[**removeSecondaryChildAssoc**](ChangesApi.md#removeSecondaryChildAssoc) | **DELETE** /nodes/{parentId}/secondary-children/{childId} | Remove secondary child (or children)
[**restoreNode**](ChangesApi.md#restoreNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node
[**updateFileContent**](ChangesApi.md#updateFileContent) | **PUT** /nodes/{nodeId}/content | Update file content
[**updateNode**](ChangesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node


<a name="addAssoc"></a>
# **addAssoc**
> addAssoc(sourceId, assocTargetBody)

Add node association

Add association, with given association type, between source and target node.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var assocTargetBody = new this.alfrescoJsApi.core.AssocTargetBody(); // {AssocTargetBody} The target node id and assoc type.

apiInstance.addAssoc(sourceId, assocTargetBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. |
 **assocTargetBody** | [**AssocTargetBody**](AssocTargetBody.md)| The target node id and assoc type. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNode"></a>
# **addNode**
> NodeEntry addNode(nodeId, nodeBody, opts)

Create a node

Creates a node as a (primary) child of the node with identifier **nodeId**.

You must specify at least a **name** and **nodeType**. For example, to create a folder:
```JSON
{
  "name":"My Folder",
  "nodeType":"cm:folder"
}
```

You can create an empty file like this:
```JSON
{
  "name":"My text file.txt",
  "nodeType":"cm:content",
  "content":
   {
     "mimeType":"text/plain"
   }
}
```
You can update binary content using the ```PUT /nodes/{nodeId}``` API method.

You can create a folder, or other node, inside a folder hierarchy:
```JSON
{
  "name":"My Special Folder",
  "nodeType":"cm:folder",
  "relativePath":"X/Y/Z"
}
```
The **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the
**relativePath** that do not exist are created before the node is created.

You can set properties when you create a new node:
```JSON
{
  "name":"My Other Folder",
  "nodeType":"cm:folder",
  "properties":
    {
      "cm:title":"Folder title",
      "cm:description":"This is an important folder"
    }
}
```
Any missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects
explicitly set, if needed, using an **aspectNames** field.

This API method also supports file upload using multipart/form-data.

Use the **filedata** field to represent the content to upload.
You can use a **filename** field to give an alternative name for the new file.

Use **overwrite** to overwrite an existing file, matched by name. If the file is versionable,
the existing content is replaced.

When you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version
should be created. The default for **majorVersion** is **false**.
Setting  **majorVersion** enables versioning of the node, if it is not already versioned.

When you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the
version history. This also enables versioning of this node, if it is not already versioned.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create
a unique name using an integer suffix.

Any field in the JSON body defined below can also be passed as a form-data field.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: -my- , -shared- , -root-

var nodeBody = new this.alfrescoJsApi.core.NodeBody1(); // {NodeBody1} The node information to create.

var opts = {
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};
apiInstance.addNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  |
 **nodeBody** | [**NodeBody1**](NodeBody1.md)| The node information to create. |
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="addSecondaryChildAssoc"></a>
# **addSecondaryChildAssoc**
> addSecondaryChildAssoc(parentId, assocChildBody)

Add secondary child

Add secondary child association, with given association type, between parent and child node.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var parentId = "parentId_example"; // {String} The identifier of a node.

var assocChildBody = new this.alfrescoJsApi.core.AssocChildBody(); // {AssocChildBody} The child node id and assoc type.

apiInstance.addSecondaryChildAssoc(parentId, assocChildBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| The identifier of a node. |
 **assocChildBody** | [**AssocChildBody**](AssocChildBody.md)| The child node id and assoc type. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedLinkBody = new this.alfrescoJsApi.core.SharedLinkBody(); // {SharedLinkBody} The nodeId to create a shared link for.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};
apiInstance.addSharedLink(sharedLinkBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedLinkBody** | [**SharedLinkBody**](SharedLinkBody.md)| The nodeId to create a shared link for. |
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyNode"></a>
# **copyNode**
> NodeEntry copyNode(nodeId, copyBody, opts)

Copy a node

Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.

The new node has the same name as the source node unless you specify a new **name** in the request body.

If the source **nodeId** is a folder, then all of its children are also copied.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:  -my- , -shared- , -root-

var copyBody = new this.alfrescoJsApi.core.CopyBody(); // {CopyBody} The targetParentId and, optionally, a new name.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:  path , isLink , allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.copyNode(nodeId, copyBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **copyBody** | [**CopyBody**](CopyBody.md)| The targetParentId and, optionally, a new name. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRendition"></a>
# **createRendition**
> createRendition(nodeId, renditionBody)

Create rendition

Async request to create a rendition for file with identifier
**nodeId**. The rendition is specified by name "id" in the request body:
```JSON
{
  "id":"doclib"
}
```


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:  -my- , -shared- , -root-

var renditionBody = new this.alfrescoJsApi.core.RenditionBody(); // {RenditionBody} The rendition "id".

apiInstance.createRendition(nodeId, renditionBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  |
 **renditionBody** | [**RenditionBody**](RenditionBody.md)| The rendition "id". |

### Return type

null (empty response body)

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
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var siteBody = new this.alfrescoJsApi.core.SiteBody(); // {SiteBody} The site details

var opts = {
  'skipConfiguration': false, // {Boolean} Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created.
  'skipAddToFavorites': false // {Boolean} Flag to indicate whether the site should not be added to the user's site favorites.
};
apiInstance.createSite(siteBody, opts).then(function(data) {
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

<a name="deleteNode"></a>
# **deleteNode**
> deleteNode(nodeId, opts)

Delete a node

Deletes the node with identifier **nodeId**.
If the **nodeId** is a folder, then its children are also deleted.
Deleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.

Deleting a node removes the child associations, ie. both primary and also secondary, if any.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'permanent': false // {Boolean} If **true** then the node is deleted permanently, without it moving to the trashcan. You must be the owner or an admin to permanently delete the node.
};
apiInstance.deleteNode(nodeId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **permanent** | **Boolean**| If **true** then the node is deleted permanently, without it moving to the trashcan. You must be the owner or an admin to permanently delete the node. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

apiInstance.deleteSharedLink(sharedId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |

### Return type

null (empty response body)

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
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var siteId = "siteId_example"; // {String} The identifier of a site.

var opts = {
  'permanent': false // {Boolean} Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan.
};
apiInstance.deleteSite(siteId, opts).then(function() {
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

<a name="emailSharedLink"></a>
# **emailSharedLink**
> emailSharedLink(sharedId, emailSharedLinkBody)

Email shared link

Sends email with app-specific url including identifier **sharedId**.

The client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:
```JSON
{
    "client": "myClient",
    "recipientEmails": ["john.doe@acme.com", joe.bloggs@acme.com]
}
```
A plain text message property can be optionally provided in the request body to customise the sent email.
Also, a locale property can be optionally provided in the request body to send the emails in a particular language.
For example, to email a shared link with a messages and a locale:
```JSON
{
    "client": "myClient",
    "recipientEmails": ["john.doe@acme.com", joe.bloggs@acme.com],
    "message": "myMessage",
    "locale":"en-GB"
}
```
**Note:** The client must be registered before you can send a shared link email. See [server documentation]


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var emailSharedLinkBody = new this.alfrescoJsApi.core.EmailSharedLinkBody(); // {EmailSharedLinkBody} The shared link email to send.

apiInstance.emailSharedLink(sharedId, emailSharedLinkBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |
 **emailSharedLinkBody** | [**EmailSharedLinkBody**](EmailSharedLinkBody.md)| The shared link email to send. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findSharedLinks"></a>
# **findSharedLinks**
> NodeSharedLinkPaging findSharedLinks(opts)

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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var opts = {
  'where': "where_example", // {String} Optionally filter the list by "sharedByUser" userid of person who shared the link (can also use -me-) *   where=(sharedByUser='jbloggs') *   where=(sharedByUser='-me-')
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.findSharedLinks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Optionally filter the list by "sharedByUser" userid of person who shared the link (can also use -me-) *   where=(sharedByUser='jbloggs') *   where=(sharedByUser='-me-') | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeSharedLinkPaging**](NodeSharedLinkPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNode"></a>
# **getDeletedNode**
> DeletedNodeEntry getDeletedNode(nodeId, opts)

Get a deleted node

Returns a specific deleted node identified by **nodeId**.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:  path , isLink , allowableOperations
};
apiInstance.getDeletedNode(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]

### Return type

[**DeletedNodeEntry**](DeletedNodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNodes"></a>
# **getDeletedNodes**
> DeletedNodesPaging getDeletedNodes(opts)

Get deleted nodes

Returns a list of deleted nodes for the current user.
If the current user is an administrator deleted nodes
for all users will be returned.
The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames * path * isLink * allowableOperations * association
};
apiInstance.getDeletedNodes(opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames * path * isLink * allowableOperations * association  | [optional]

### Return type

[**DeletedNodesPaging**](DeletedNodesPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileContent"></a>
# **getFileContent**
> getFileContent(nodeId, opts)

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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.
                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.
                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response. */
    'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") /* {Date} Only returns the content if it has been modified since the date provided.
                        Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.*/

};
apiInstance.getFileContent(nodeId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files. If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> NodeEntry getNode(nodeId, opts)

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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: *-my-*-shared-*-root-

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};
apiInstance.getNode(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **relativePath** | **String**| If specified, returns information on the node resolved by this path. The path is relative to the specified **nodeId** | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodeChildren"></a>
# **getNodeChildren**
> NodePaging getNodeChildren(nodeId, opts)

Get node children

Returns the children of the node with identifier **nodeId**.
Minimal information for each child is returned by default.
You can use the **include** parameter to return addtional information.

The list of child nodes includes primary children and also secondary children, if any.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: -my- , -shared- , -root-

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", /* {String} If not specified then default sort is for folders to be sorted before files, and by ascending name
                                i.e. "orderBy=isFolder DESC,name ASC".
                                This default can be completely overridden by specifying a specific orderBy consisting of one, two or
                                three comma-separated list of properties (with optional ASCending or DESCending), for example,
                                specifying “CorderBy=name DESC“D would return a mixed folder/file list.
                                The following properties can be used to order the results:
                                * isFolder
                                * name
                                * mimeType
                                * nodeType
                                * sizeInBytes
                                * modifiedAt
                                * createdAt
                                * modifiedByUser
                                * createdByUser */

'where': "where_example", /* {String} Optionally filter the list. Here are some examples:
                                *   where=(isFolder=true)
                                *   where=(isFile=true)
                                *   where=(nodeType='my:specialtype')
                                *   where=(nodeType='my:specialtype' INCLUDESUBTYPES) */

'include': ["include_example"], /* {[String]} Returns additional information about the node. The following optional fields can be requested:
                                * properties
                                * aspectNames
                                * path
                                * isLink
                                * allowableOperations
                                * association */
  'relativePath': "relativePath_example", // {String} Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
  'includeSource': true, // {Boolean} Also include "source" (in addition to "entries") with folder information on parent node (either the specified parent "nodeId" or as resolved by "relativePath")
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.getNodeChildren(nodeId, opts).then(function(data) {
 console.log('API called successfully. Returned data: ' + data);
}, function(error) {
 console.error(error);
});*/

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **orderBy** | **String**| If not specified then default sort is for folders to be sorted before files, and by ascending name i.e. "orderBy=isFolder DESC,name ASC". This default can be completely overridden by specifying a specific orderBy consisting of one, two or three comma-separated list of properties (with optional ASCending or DESCending), for example, specifying “CorderBy=name DESC“D would return a mixed folder/file list. The following properties can be used to order the results: * isFolder * name * mimeType * nodeType * sizeInBytes * modifiedAt * createdAt * modifiedByUser * createdByUser  | [optional]
 **where** | **String**| Optionally filter the list. Here are some examples: *   where=(isFolder=true) *   where=(isFile=true) *   where=(nodeType='my:specialtype') *   where=(nodeType='my:specialtype' INCLUDESUBTYPES)  | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames * path * isLink * allowableOperations * association | [optional]
 **relativePath** | **String**| Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder) | [optional]
 **includeSource** | **Boolean**| Also include "source" (in addition to "entries") with folder information on parent node (either the specified parent "nodeId" or as resolved by "relativePath") | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

apiInstance.getRendition(nodeId, renditionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. |

### Return type

[**RenditionEntry**](RenditionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not
                        download the file.

                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.

                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response. */

'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.  Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`./*

};
apiInstance.getRenditionContent(nodeId, renditionId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files. If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRenditions"></a>
# **getRenditions**
> RenditionPaging getRenditions(nodeId, )

List information for renditions

Returns the rendition information for the file node with identifier **nodeId**.
This will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

apiInstance.getRenditions(nodeId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |

### Return type

[**RenditionPaging**](RenditionPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLink"></a>
# **getSharedLink**
> NodeSharedLinkEntry getSharedLink(sharedId, opts)

Get a shared link

Returns minimal information for the file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.getSharedLink(sharedId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperation | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkContent"></a>
# **getSharedLinkContent**
> getSharedLinkContent(sharedId, opts)

Get file content

Returns the content of the file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment.
                        **false** means a web browser may preview the file in a new tab or window, but not
                        download the file.

                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.

                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response. */

    'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") /*{Date} Only returns the content if it has been modified since the date provided.
                        Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.*/

};
apiInstance.getSharedLinkContent(sharedId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files. If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditionContent"></a>
# **getSharedLinkRenditionContent**
> getSharedLinkRenditionContent(sharedId, renditionId, opts)

Get shared link rendition content

Returns the rendition content for file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment.
                        **false** means a web browser may preview the file in a new tab or window, but not
                        download the file.

                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.

                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response.*/
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") /* {Date} Only returns the content if it has been modified since the date provided.
                        Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. */

};
apiInstance.getSharedLinkRenditionContent(sharedId, renditionId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditions"></a>
# **getSharedLinkRenditions**
> RenditionPaging getSharedLinkRenditions(sharedId, )

List information for created renditions

Returns the rendition information for the file with shared link identifier **sharedId**.

This will only return rendition information, including the rendition id, for each rendition
where the rendition status is CREATED (ie. available\u00A0to view/download).

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

apiInstance.getSharedLinkRenditions(sharedId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |

### Return type

[**RenditionPaging**](RenditionPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listParents"></a>
# **listParents**
> NodeAssocPaging listParents(childId, opts)

List parents

Returns a list of parent nodes that point to (ie. are associated with) the current child node.

This inclues both the primary parent and also secondary parents, if any.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var childId = "childId_example"; // {String} The identifier of a node.

var opts = {
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:*   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};
apiInstance.listParents(childId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **String**| The identifier of a node. |
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeAssocPaging**](NodeAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSecondaryChildAssociations"></a>
# **listSecondaryChildAssociations**
> NodeChildAssocPaging listSecondaryChildAssociations(parentId, opts)

List secondary children

Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var parentId = "parentId_example"; // {String} The identifier of a node.

var opts = {
  'assocType': "assocType_example", // {String} Restrict the returned results to only those of the given association type
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:*   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.listSecondaryChildAssociations(parentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| The identifier of a node. |
 **assocType** | **String**| Restrict the returned results to only those of the given association type | [optional]
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeChildAssocPaging**](NodeChildAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSourceNodeAssociations"></a>
# **listSourceNodeAssociations**
> NodeAssocPaging listSourceNodeAssociations(targetId, opts)

List node associations

Returns a list of source nodes that point to (ie. are associated with) the current target node.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var targetId = "targetId_example"; // {String} The identifier of a node.

var opts = {
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:*   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.listSourceNodeAssociations(targetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetId** | **String**| The identifier of a node. |
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeAssocPaging**](NodeAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTargetAssociations"></a>
# **listTargetAssociations**
> NodeAssocPaging listTargetAssociations(sourceId, opts)

List node associations

Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var opts = {
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:*   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.listTargetAssociations(sourceId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. |
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeAssocPaging**](NodeAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="liveSearchNodes"></a>
# **liveSearchNodes**
> NodePaging liveSearchNodes(term, opts)

Live search for nodes

Returns a list of nodes that match the given search criteria.

The search term is used to look for nodes that match against name, title, description, full text content and tags.

The search term
- must contain a minimum of 3 alphanumeric characters
- allows "quoted term"
- can optionally use '*' for wildcard matching

By default, file and folder types will be searched unless a specific type is provided as a query parameter.

By default, the search will be across the repository unless a specific root node id is provided to start the search from.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var term = "term_example"; // {String} The term to search for.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'rootNodeId': "rootNodeId_example", // {String} The id of the node to start the search from. Supports the aliases -my-, -root- and -shared-.
  'nodeType': "nodeType_example", // {String} Restrict the returned results to only those of the given node type and it's sub-types
  'include': "include_example", // {String} Return additional info, eg. aspectNames, properties, path, isLink
  'orderBy': "orderBy_example", // {String} The list of results can be ordered by the following: * name * modifiedAt * createdAt
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.liveSearchNodes(term, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| The term to search for. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **rootNodeId** | **String**| The id of the node to start the search from. Supports the aliases -my-, -root- and -shared-. | [optional]
 **nodeType** | **String**| Restrict the returned results to only those of the given node type and it's sub-types | [optional]
 **include** | **String**| Return additional info, eg. aspectNames, properties, path, isLink | [optional]
 **orderBy** | **String**| The list of results can be ordered by the following: * name * modifiedAt * createdAt | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveNode"></a>
# **moveNode**
> NodeEntry moveNode(nodeId, moveBody, opts)

Move a node

Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.
The **targetParentId** is specified in the in request body.

The moved node retains its name unless you specify a new **name** in the request body.

If the source **nodeId** is a folder, then all of its children are also moved.

The move will effectively change the primary parent


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: * -my-*-shared-*-root-

var moveBody = new this.alfrescoJsApi.core.MoveBody(); // {MoveBody} The targetParentId and, optionally, a new name.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.moveNode(nodeId, moveBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **moveBody** | [**MoveBody**](MoveBody.md)| The targetParentId and, optionally, a new name. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purgeDeletedNode"></a>
# **purgeDeletedNode**
> purgeDeletedNode(nodeId, )

Purge a deleted node

Permanently removes the deleted node identified by **nodeId**.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

apiInstance.purgeDeletedNode(nodeId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeAssoc"></a>
# **removeAssoc**
> removeAssoc(sourceId, targetId, opts)

Remove node association(s)

Remove association(s) between source and target node for given association type.

If association type is not specified then all associations between source and target are removed.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var sourceId = "sourceId_example"; // {String} The identifier of a node.

var targetId = "targetId_example"; // {String} The identifier of a node.

var opts = {
  'assocType': "assocType_example" // {String} Restrict the delete to only those of the given association type
};
apiInstance.removeAssoc(sourceId, targetId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceId** | **String**| The identifier of a node. |
 **targetId** | **String**| The identifier of a node. |
 **assocType** | **String**| Restrict the delete to only those of the given association type | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSecondaryChildAssoc"></a>
# **removeSecondaryChildAssoc**
> removeSecondaryChildAssoc(parentId, childId, opts)

Remove secondary child (or children)

Remove secondary child association(s) between parent and child node for given association type.

If association type is not specified then all secondary child associations between parent and child are removed.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var parentId = "parentId_example"; // {String} The identifier of a node.

var childId = "childId_example"; // {String} The identifier of a node.

var opts = {
  'assocType': "assocType_example" // {String} Restrict the delete to only those of the given association type
};
apiInstance.removeSecondaryChildAssoc(parentId, childId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| The identifier of a node. |
 **childId** | **String**| The identifier of a node. |
 **assocType** | **String**| Restrict the delete to only those of the given association type | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="restoreNode"></a>
# **restoreNode**
> NodeEntry restoreNode(nodeId, )

Restore a deleted node

Attempts to restore the deleted node identified by **nodeId** to its original location.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

apiInstance.restoreNode(nodeId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFileContent"></a>
# **updateFileContent**
> NodeEntry updateFileContent(nodeId, contentBody, opts)

Update file content

Updates the content of the node with identifier **nodeId**.

The request body for this endpoint can be any text or binary stream. The Content-Type header should be set
correctly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.

The **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,
a new minor version is created by default.

**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.
This is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for
tooling to accept an arbitary file.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var contentBody = "B"; // {String} The binary content

var opts = {
  'majorVersion': false, // {Boolean} If **true**, create a major version. Setting this parameter also enables versioning of this node, if it is not already versioned.
  'comment': "comment_example", // {String} Add a version comment which will appear in version history. Setting this parameter also enables versioning of this node, if it is not already versioned.
  'include': ["include_example"], /* {[String]} Returns additional information about the node. The following optional fields can be requested:
                                    * path
                                    * isLink
                                    * allowableOperations */
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.updateFileContent(nodeId, contentBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **contentBody** | **String**| The binary content |
 **majorVersion** | **Boolean**| If **true**, create a major version. Setting this parameter also enables versioning of this node, if it is not already versioned.  | [optional] [default to false]
 **comment** | **String**| Add a version comment which will appear in version history. Setting this parameter also enables versioning of this node, if it is not already versioned.  | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="updateNode"></a>
# **updateNode**
> NodeEntry updateNode(nodeId, nodeBody, opts)

Update a node

Updates the node with identifier **nodeId**. For example, you can rename a file or folder:
```JSON
{
  "name":"My new name",
}
```
You can also set or update one or more properties:
```JSON
{
  "properties":
    {
      "cm:title":"Folder title"
    }
}
```
**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.

**Note:** Currently there is no optimistic locking for updates, so they are applied in "last one wins" order.


### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new this.alfrescoJsApi.core.ChangesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:
 -my- , -shared- , -root-

var nodeBody = new this.alfrescoJsApi.core.NodeBody(); // {NodeBody} The node information to update.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
apiInstance.updateNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  |
 **nodeBody** | [**NodeBody**](NodeBody.md)| The node information to update. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

