# .TransferContainerChild

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to null]
**parentId** | **string** |  | [default to null]
**name** | **string** | The name must not contain spaces or the following special characters: * \&quot; &lt; &gt; \\ / ? : and |.
The character . must not be used at the end of the name.
 | [default to null]
**nodeType** | **string** |  | [default to null]
**createdAt** | **Date** |  | [default to null]
**createdByUser** | [**UserInfo**](UserInfo.md) |  | [default to null]
**transferPDFIndicator** | **boolean** | Present only for transfer nodes. | [optional] [default to null]
**transferLocation** | **string** | Present only for transfer nodes. | [optional] [default to null]
**transferAccessionIndicator** | **boolean** | Present only for transfer nodes. | [optional] [default to null]
**aspectNames** | **Array<string>** |  | [optional] [default to null]
**properties** | **any** |  | [optional] [default to null]
**allowableOperations** | **Array<string>** |  | [optional] [default to null]


