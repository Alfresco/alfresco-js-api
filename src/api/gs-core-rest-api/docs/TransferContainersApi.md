# AlfrescoGovernanceServicesRestApi.TransferContainersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransferContainer**](TransferContainersApi.md#getTransferContainer) | **GET** /transfer-containers/{transferContainerId} | Get a transfer container
[**listTransfers**](TransferContainersApi.md#listTransfers) | **GET** /transfer-containers/{transferContainerId}/transfers | List transfer container&#39;s children
[**updateTransferContainer**](TransferContainersApi.md#updateTransferContainer) | **PUT** /transfer-containers/{transferContainerId} | Update transfer container


<a name="getTransferContainer"></a>
# **getTransferContainer**
> TransferContainerEntry getTransferContainer(transferContainerId, opts)

Get a transfer container

Gets information for transfer container **transferContainerId**  Mandatory fields and the transfer container&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var transferContainerId = "transferContainerId_example"; // String | The identifier of a transfer container. You can also use the -transfers- alias.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.transferContainersApi.getTransferContainer(transferContainerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferContainerId** | **String**| The identifier of a transfer container. You can also use the -transfers- alias. | 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**TransferContainerEntry**](TransferContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTransfers"></a>
# **listTransfers**
> TransferContainerAssociationPaging listTransfers(transferContainerId, opts)

List transfer container&#39;s children

Returns a list of transfers.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var transferContainerId = "transferContainerId_example"; // String | The identifier of a transfer container. You can also use the -transfers- alias.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'include': ["include_example"], // [String] | Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * properties * transferPDFIndicator * transferLocation * transferAccessionIndicator 
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.transferContainersApi.listTransfers(transferContainerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferContainerId** | **String**| The identifier of a transfer container. You can also use the -transfers- alias. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * properties * transferPDFIndicator * transferLocation * transferAccessionIndicator  | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**TransferContainerAssociationPaging**](TransferContainerAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTransferContainer"></a>
# **updateTransferContainer**
> TransferContainerEntry updateTransferContainer(transferContainerIdnodeBodyUpdate, opts)

Update transfer container

Updates the transfer container **transferContainerId**. For example, you can rename transfer container: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update description and title properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:description\&quot;: \&quot;New Description\&quot;,        \&quot;cm:title\&quot;:\&quot;New Title\&quot;     } } &#x60;&#x60;&#x60; **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order. 

### Example
```javascript

var transferContainerId = "transferContainerId_example"; // String | The identifier of a transfer container. You can also use the -transfers- alias.

var nodeBodyUpdate = new AlfrescoGovernanceServicesRestApi.TransferContainerBodyUpdate(); // TransferContainerBodyUpdate | The node information to update.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.transferContainersApi.updateTransferContainer(transferContainerIdnodeBodyUpdate, opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**TransferContainerEntry**](TransferContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

