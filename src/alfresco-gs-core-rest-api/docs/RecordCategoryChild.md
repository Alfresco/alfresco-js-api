# AlfrescoGovernanceServicesRestApi.RecordCategoryChild

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**parentId** | **String** |  | 
**name** | **String** | The name must not contain spaces or the following special characters: * \&quot; &lt; &gt; \\ / ? : and |. The character . must not be used at the end of the name.  | 
**nodeType** | **String** |  | 
**hasRetentionSchedule** | **Boolean** | Indicates if the record category has a retention schedule defined | [optional] [default to false]
**isClosed** | **Boolean** | Indicates if the record folder is closed | [optional] [default to false]
**isRecordCategory** | **Boolean** |  | [optional] 
**isRecordFolder** | **Boolean** |  | [optional] [default to false]
**modifiedAt** | **Date** |  | 
**modifiedByUser** | [**UserInfo**](UserInfo.md) |  | 
**createdAt** | **Date** |  | 
**createdByUser** | [**UserInfo**](UserInfo.md) |  | 
**aspectNames** | **[String]** |  | [optional] 
**properties** | **Object** |  | [optional] 
**allowableOperations** | **[String]** |  | [optional] 
**path** | [**PathInfo**](PathInfo.md) |  | [optional] 


