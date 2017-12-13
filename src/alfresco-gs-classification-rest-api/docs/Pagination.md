# AlfrescoGovernanceServicesSecurityControls.Pagination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Integer** | The number of objects in the entries array.\n | 
**hasMoreItems** | **Boolean** | A boolean value which is **true** if there are more entities in the collection\nbeyond those in this response. A true value means a request with a larger value\nfor the **skipCount** or the **maxItems** parameter will return more entities.\n | 
**totalItems** | **Integer** | An integer describing the total number of entities in the collection.\nThe API might not be able to determine this value,\nin which case this property will not be present.\n | [optional] 
**skipCount** | **Integer** | An integer describing how many entities exist in the collection before\nthose included in this list.\n | 
**maxItems** | **Integer** | The value of the **maxItems** parameter used to generate this list,\nor if there was no **maxItems** parameter the default value is 100\n | 


