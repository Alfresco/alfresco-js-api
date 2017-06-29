# AlfrescoCoreRestApi.Node

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** | The name must not contain spaces or the following special characters: * \&quot; &lt; &gt; \\ / ? : and |. The character . must not be used at the end of the name.  | 
**nodeType** | **String** |  | 
**isFolder** | **Boolean** |  | 
**isFile** | **Boolean** |  | 
**isLocked** | **Boolean** |  | [optional] [default to false]
**modifiedAt** | **Date** |  | 
**modifiedByUser** | [**UserInfo**](UserInfo.md) |  | 
**createdAt** | **Date** |  | 
**createdByUser** | [**UserInfo**](UserInfo.md) |  | 
**parentId** | **String** |  | [optional] 
**isLink** | **Boolean** |  | [optional] 
**content** | [**ContentInfo**](ContentInfo.md) |  | [optional] 
**aspectNames** | **[String]** |  | [optional] 
**properties** | **Object** |  | [optional] 
**allowableOperations** | **[String]** |  | [optional] 
**path** | [**PathInfo**](PathInfo.md) |  | [optional] 
**permissions** | [**PermissionsInfo**](PermissionsInfo.md) |  | [optional] 


