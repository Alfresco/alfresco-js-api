# AlfrescoContentServicesRestApi.Pagination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of objects in the entries array.  | 
**hasMoreItems** | **Boolean** | A boolean value which is **true** if there are more entities in the collection beyond those in this response. A true value means a request with a larger value for the **skipCount** or the **maxItems** parameter will return more entities.  | 
**totalItems** | **Number** | An integer describing the total number of entities in the collection. The API might not be able to determine this value, in which case this property will not be present.  | [optional] 
**skipCount** | **Number** | An integer describing how many entities exist in the collection before those included in this list.  | 
**maxItems** | **Number** | The value of the **maxItems** parameter used to generate this list, or if there was no **maxItems** parameter the default value is 100  | 


