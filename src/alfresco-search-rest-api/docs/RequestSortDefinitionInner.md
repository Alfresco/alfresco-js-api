# AlfrescoContentServicesRestApi.RequestSortDefinitionInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | How to order - using a field, when position of the document in the index, score/relevence. | [optional] [default to &#39;FIELD&#39;]
**field** | **String** | The name of the field | [optional] 
**ascending** | **Boolean** | The sort order. (The ordering of nulls is determined by the SOLR configuration) | [optional] [default to false]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `FIELD` (value: `"FIELD"`)

* `DOCUMENT` (value: `"DOCUMENT"`)

* `SCORE` (value: `"SCORE"`)




