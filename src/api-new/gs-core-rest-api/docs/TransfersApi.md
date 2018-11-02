# .TransfersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransfer**](TransfersApi.md#getTransfer) | **GET** /transfers/{transferId} | Get a transfer
[**listTransfersChildren**](TransfersApi.md#listTransfersChildren) | **GET** /transfers/{transferId}/children | List transfer&#39;s children


<a name="getTransfer"></a>
# **getTransfer**
> TransferEntry getTransfer(transferIdopts)

Get a transfer

Gets information for transfer **transferId**

Mandatory fields and the transfer&#39;s aspects and properties are returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import TransfersApi from 'TransfersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let transfersApi = new TransfersApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example:
* allowableOperations
* transferPDFIndicator
* transferLocation
* transferAccessionIndicator

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

transfersApi.getTransfer(transferIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | **string**| The identifier of a transfer. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example:
* allowableOperations
* transferPDFIndicator
* transferLocation
* transferAccessionIndicator
 | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**TransferEntry**](TransferEntry.md)

<a name="listTransfersChildren"></a>
# **listTransfersChildren**
> TransferAssociationPaging listTransfersChildren(transferIdopts)

List transfer&#39;s children

Gets a list of transfer&#39;s children.

Minimal information for each child is returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import TransfersApi from 'TransfersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let transfersApi = new TransfersApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'include':  // Array<string> | Returns additional information about the transfer's child. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* isClosed
* isRecord
* isRecordFolder
* path
* properties

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

transfersApi.listTransfersChildren(transferIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferId** | **string**| The identifier of a transfer. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the transfer&#39;s child. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* isClosed
* isRecord
* isRecordFolder
* path
* properties
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**. | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**TransferAssociationPaging**](TransferAssociationPaging.md)

