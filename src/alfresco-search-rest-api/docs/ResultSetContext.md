# AlfrescoContentServicesRestApi.ResultSetContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistency** | [**ResponseConsistency**](ResponseConsistency.md) |  | [optional] 
**facetQueries** | [**[ResultSetContextFacetQueries]**](ResultSetContextFacetQueries.md) | The counts from facet queries | [optional] 
**facetFields** | [**[ResultSetContextFacetFields]**](ResultSetContextFacetFields.md) | The counts from field facets | [optional] 
**spellcheck** | [**[ResultSetContextSpellcheck]**](ResultSetContextSpellcheck.md) | Suggested corrections  If zero results were found for the original query then a single entry of type \&quot;searchInsteadFor\&quot; will be returned. If alternatives were found that return more results than the original query they are returned as \&quot;didYouMean\&quot; options. The highest quality suggestion is first.  | [optional] 


