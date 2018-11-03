# .ResultSetContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistency** | [**ResponseConsistency**](ResponseConsistency.md) |  | [optional] [default to null]
**request** | [**SearchRequest**](SearchRequest.md) |  | [optional] [default to null]
**facetQueries** | [**Array<ResultSetContextFacetQueries>**](ResultSetContextFacetQueries.md) | The counts from facet queries | [optional] [default to null]
**facetsFields** | [**Array<ResultBuckets>**](ResultBuckets.md) | The counts from field facets | [optional] [default to null]
**facets** | [**Array<GenericFacetResponse>**](GenericFacetResponse.md) | The faceted response | [optional] [default to null]
**spellcheck** | [**Array<ResultSetContextSpellcheck>**](ResultSetContextSpellcheck.md) | Suggested corrections

If zero results were found for the original query then a single entry of type \"searchInsteadFor\" will be returned.
If alternatives were found that return more results than the original query they are returned as \"didYouMean\" options.
The highest quality suggestion is first.
 | [optional] [default to null]


