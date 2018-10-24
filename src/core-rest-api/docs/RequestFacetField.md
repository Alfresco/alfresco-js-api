# AlfrescoContentServicesRestApi.RequestFacetField

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | The facet field | [optional] 
**label** | **String** | A label to include in place of the facet field | [optional] 
**prefix** | **String** | Restricts the possible constraints to only indexed values with a specified prefix. | [optional] 
**sort** | **String** |  | [optional] 
**method** | **String** |  | [optional] 
**missing** | **Boolean** | When true, count results that match the query but which have no facet value for the field (in addition to the Term-based constraints). | [optional] [default to false]
**limit** | **Number** |  | [optional] 
**offset** | **Number** |  | [optional] 
**mincount** | **Number** | The minimum count required for a facet field to be included in the response. | [optional] 
**facetEnumCacheMinDf** | **Number** |  | [optional] 
**excludeFilters** | **[String]** | Filter Queries with tags listed here will not be included in facet counts. This is used for multi-select facetting.  | [optional] 


<a name="SortEnum"></a>
## Enum: SortEnum


* `COUNT` (value: `"COUNT"`)

* `INDEX` (value: `"INDEX"`)




<a name="MethodEnum"></a>
## Enum: MethodEnum


* `ENUM` (value: `"ENUM"`)

* `FC` (value: `"FC"`)




