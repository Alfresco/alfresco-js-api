# AlfrescoGovernanceServicesRestApi.TransferContainerChild

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**parentId** | **String** |  | 
**name** | **String** | The name must not contain spaces or the following special characters: * \&quot; &lt; &gt; \\ / ? : and |. The character . must not be used at the end of the name.  | 
**nodeType** | **String** |  | 
**createdAt** | **Date** |  | 
**createdByUser** | [**UserInfo**](UserInfo.md) |  | 
**transferPDFIndicator** | **Boolean** | Present only for transfer nodes. | [optional] [default to false]
**transferLocation** | **String** | Present only for transfer nodes. | [optional] 
**transferAccessionIndicator** | **Boolean** | Present only for transfer nodes. | [optional] [default to false]
**aspectNames** | **[String]** |  | [optional] 
**properties** | **Object** |  | [optional] 
**allowableOperations** | **[String]** |  | [optional] 


