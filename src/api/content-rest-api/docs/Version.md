# Version

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to null]
**versionComment** | **string** |  | [optional] [default to null]
**name** | **string** | The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
The character . must not be used at the end of the name.
 | [default to null]
**nodeType** | **string** |  | [default to null]
**isFolder** | **boolean** |  | [default to null]
**isFile** | **boolean** |  | [default to null]
**modifiedAt** | [**Date**](Date.md) |  | [default to null]
**modifiedByUser** | [**UserInfo**](UserInfo.md) |  | [default to null]
**content** | [**ContentInfo**](ContentInfo.md) |  | [optional] [default to null]
**aspectNames** | **string[]** |  | [optional] [default to null]
**properties** | **{ [key: string]: string; }** |  | [optional] [default to null]


