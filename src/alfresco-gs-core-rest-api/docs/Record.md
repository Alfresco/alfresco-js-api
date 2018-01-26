# AlfrescoGovernanceServicesRestApi.Record

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**parentId** | **String** |  | 
**name** | **String** | The name must not contain spaces or the following special characters: * \&quot; &lt; &gt; \\ / ? : and |. The character . must not be used at the end of the name.  | 
**nodeType** | **String** |  | 
**isCompleted** | **Boolean** | Present only for record nodes. Indicates if the record is completed | [optional] [default to false]
**modifiedAt** | **Date** |  | 
**modifiedByUser** | [**UserInfo**](UserInfo.md) |  | 
**createdAt** | **Date** |  | 
**createdByUser** | [**UserInfo**](UserInfo.md) |  | 
**aspectNames** | **[String]** |  | [optional] 
**properties** | **Object** |  | [optional] 
**allowableOperations** | **[String]** |  | [optional] 
**content** | [**ContentInfo**](ContentInfo.md) |  | [optional] 
**path** | [**PathInfo**](PathInfo.md) |  | [optional] 


