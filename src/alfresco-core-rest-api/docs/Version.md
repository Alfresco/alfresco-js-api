# AlfrescoCoreRestApi.Version

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**versionComment** | **String** |  | [optional] 
**name** | **String** | The name must not contain spaces or the following special characters: * \&quot; &lt; &gt; \\ / ? : and |.  The character . must not be used at the end of the name.  | 
**nodeType** | **String** |  | 
**isFolder** | **Boolean** |  | 
**isFile** | **Boolean** |  | 
**modifiedAt** | **Date** |  | 
**modifiedByUser** | [**UserInfo**](UserInfo.md) |  | 
**content** | [**ContentInfo**](ContentInfo.md) |  | [optional] 
**aspectNames** | **[String]** |  | [optional] 
**properties** | **{String: String}** |  | [optional] 


