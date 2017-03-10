# AlfrescoContentServicesRestApi.RequestDefaults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**textAttributes** | **[String]** | A list of query fields/properties used to expand TEXT: queries. The default is cm:content. You could include all content properties using d:content or list all individual content properties or types. As more terms are included the query size, complexity, memory impact and query time will increase.  | [optional] 
**defaultFTSOperator** | **String** | The default way to combine query parts when AND or OR is not explicitly stated - includes ! - + one two three (one two three)  | [optional] [default to &#39;AND&#39;]
**defaultFTSFieldOperator** | **String** | The default way to combine query parts in field query groups when AND or OR is not explicitly stated - includes ! - + FIELD:(one two three)  | [optional] [default to &#39;AND&#39;]
**namespace** | **String** | The default name space to use if one is not provided | [optional] [default to &#39;cm&#39;]
**defaultFieldName** | **String** |  | [optional] [default to &#39;TEXT&#39;]


<a name="DefaultFTSOperatorEnum"></a>
## Enum: DefaultFTSOperatorEnum


* `AND` (value: `"AND"`)

* `OR` (value: `"OR"`)




<a name="DefaultFTSFieldOperatorEnum"></a>
## Enum: DefaultFTSFieldOperatorEnum


* `AND` (value: `"AND"`)

* `OR` (value: `"OR"`)




