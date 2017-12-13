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

Gets information for transfer **transferId**\n\nMandatory fields and the transfer&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.TransfersApi()

var transferId = "transferId_example"; // {String} The identifier of a transfer.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* transferPDFIndicator\n* transferLocation\n* transferAccessionIndicator\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getTransfer(transferId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | **String**| The identifier of a transfer. | 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* transferPDFIndicator\n* transferLocation\n* transferAccessionIndicator\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**TransferEntry**](TransferEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTransfersChildren"></a>
# **listTransfersChildren**
> TransferAssociationPaging listTransfersChildren(transferId, opts)

List transfer&#39;s children

Gets a list of transfer&#39;s children.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.TransfersApi()

var transferId = "transferId_example"; // {String} The identifier of a transfer.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], // {[String]} Returns additional information about the transfer's child. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* isClosed\n* isRecord\n* isRecordFolder\n* path\n* properties\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listTransfersChildren(transferId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | **String**| The identifier of a transfer. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the transfer&#39;s child. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* isClosed\n* isRecord\n* isRecordFolder\n* path\n* properties\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**TransferAssociationPaging**](TransferAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

