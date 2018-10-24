# AlfrescoGovernanceServicesRestApi.TransfersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransfer**](TransfersApi.md#getTransfer) | **GET** /transfers/{transferId} | Get a transfer
[**listTransfersChildren**](TransfersApi.md#listTransfersChildren) | **GET** /transfers/{transferId}/children | List transfer&#39;s children


<a name="getTransfer"></a>
# **getTransfer**
> TransferEntry getTransfer(transferId, opts)

Get a transfer

Gets information for transfer **transferId**  Mandatory fields and the transfer&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var transferId = "transferId_example"; // String | The identifier of a transfer.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example: * allowableOperations * transferPDFIndicator * transferLocation * transferAccessionIndicator 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.transfersApi.getTransfer(transferId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | **String**| The identifier of a transfer. | 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example: * allowableOperations * transferPDFIndicator * transferLocation * transferAccessionIndicator  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**TransferEntry**](TransferEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTransfersChildren"></a>
# **listTransfersChildren**
> TransferAssociationPaging listTransfersChildren(transferId, opts)

List transfer&#39;s children

Gets a list of transfer&#39;s children.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var transferId = "transferId_example"; // String | The identifier of a transfer.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'include': ["include_example"], // [String] | Returns additional information about the transfer's child. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * isClosed * isRecord * isRecordFolder * path * properties 
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.transfersApi.listTransfersChildren(transferId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | **String**| The identifier of a transfer. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer&#39;s child. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * isClosed * isRecord * isRecordFolder * path * properties  | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**TransferAssociationPaging**](TransferAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

