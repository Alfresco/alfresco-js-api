# AlfrescoContentServicesRestApi.ResultSetContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistency** | [**ResponseConsistency**](ResponseConsistency.md) |  | [optional] 
**request** | [**SearchRequest**](SearchRequest.md) |  | [optional] 
**facetQueries** | [**[ResultSetContextFacetQueries]**](ResultSetContextFacetQueries.md) | The counts from facet queries | [optional] 
**facetsFields** | [**[ResultBuckets]**](ResultBuckets.md) | The counts from field facets | [optional] 
**facets** | [**[GenericFacetResponse]**](GenericFacetResponse.md) | The faceted response | [optional] 
**spellcheck** | [**[ResultSetContextSpellcheck]**](ResultSetContextSpellcheck.md) | Suggested corrections  If zero results were found for the original query then a single entry of type \&quot;searchInsteadFor\&quot; will be returned. If alternatives were found that return more results than the original query they are returned as \&quot;didYouMean\&quot; options. The highest quality suggestion is first.  | [optional] 


