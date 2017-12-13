# AlfrescoGovernanceServicesRestApi.TransfercontainersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransferContainer**](TransfercontainersApi.md#getTransferContainer) | **GET** /transfer-containers/{transferContainerId} | Get a transfer container
[**listTransfers**](TransfercontainersApi.md#listTransfers) | **GET** /transfer-containers/{transferContainerId}/transfers | List transfer container&#39;s children
[**updateTransferContainer**](TransfercontainersApi.md#updateTransferContainer) | **PUT** /transfer-containers/{transferContainerId} | Update transfer container


<a name="getTransferContainer"></a>
# **getTransferContainer**
> TransferContainerEntry getTransferContainer(transferContainerId, opts)

Get a transfer container

Gets information for transfer container **transferContainerId**\n\nMandatory fields and the transfer container&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.TransfercontainersApi()

var transferContainerId = "transferContainerId_example"; // {String} The identifier of a transfer container. You can also use the -transfers- alias.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getTransferContainer(transferContainerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferContainerId** | **String**| The identifier of a transfer container. You can also use the -transfers- alias. | 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**TransferContainerEntry**](TransferContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTransfers"></a>
# **listTransfers**
> TransferContainerAssociationPaging listTransfers(transferContainerId, opts)

List transfer container&#39;s children

Returns a list of transfers.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.TransfercontainersApi()

var transferContainerId = "transferContainerId_example"; // {String} The identifier of a transfer container. You can also use the -transfers- alias.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], // {[String]} Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* properties\n* transferPDFIndicator\n* transferLocation\n* transferAccessionIndicator\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listTransfers(transferContainerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferContainerId** | **String**| The identifier of a transfer container. You can also use the -transfers- alias. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* properties\n* transferPDFIndicator\n* transferLocation\n* transferAccessionIndicator\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**TransferContainerAssociationPaging**](TransferContainerAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTransferContainer"></a>
# **updateTransferContainer**
> TransferContainerEntry updateTransferContainer(transferContainerIdnodeBodyUpdate, opts)

Update transfer container

Updates the transfer container **transferContainerId**. For example, you can rename transfer container:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update description and title properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,\n       \&quot;cm:title\&quot;:\&quot;New Title\&quot;\n    }\n}\n```\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.TransfercontainersApi()

var transferContainerId = "transferContainerId_example"; // {String} The identifier of a transfer container. You can also use the -transfers- alias.

var nodeBodyUpdate = new AlfrescoGovernanceServicesRestApi.TransferContainerBodyUpdate(); // {TransferContainerBodyUpdate} The node information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateTransferContainer(transferContainerIdnodeBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferContainerId** | **String**| The identifier of a transfer container. You can also use the -transfers- alias. | 
 **nodeBodyUpdate** | [**TransferContainerBodyUpdate**](TransferContainerBodyUpdate.md)| The node information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**TransferContainerEntry**](TransferContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

