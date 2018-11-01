# .ResultSetContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistency** | [**ResponseConsistency**](ResponseConsistency.md) |  | [optional] [default to null]
**request** | [**SearchRequest**](SearchRequest.md) |  | [optional] [default to null]
**facetQueries** | [**any**](ResultSetContextFacetQueries.md) | The counts from facet queries | [optional] [default to null]
**facetsFields** | [**any**](ResultBuckets.md) | The counts from field facets | [optional] [default to null]
**facets** | [**any**](GenericFacetResponse.md) | The faceted response | [optional] [default to null]
**spellcheck** | [**any**](ResultSetContextSpellcheck.md) | Suggested corrections

If zero results were found for the original query then a single entry of type \&quot;searchInsteadFor\&quot; will be returned.
If alternatives were found that return more results than the original query they are returned as \&quot;didYouMean\&quot; options.
The highest quality suggestion is first.
 | [optional] [default to null]


