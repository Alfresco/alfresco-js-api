# AlfrescoContentServicesRestApi.RequestStats

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | The stats field | [optional] 
**label** | **String** | A label to include for reference the stats field | [optional] 
**min** | **Boolean** | The minimum value of the field | [optional] [default to true]
**max** | **Boolean** | The maximum value of the field | [optional] [default to true]
**sum** | **Boolean** | The sum of all values of the field | [optional] [default to true]
**countValues** | **Boolean** | The number which have a value for this field | [optional] [default to true]
**missing** | **Boolean** | The number which do not have a value for this field | [optional] [default to true]
**mean** | **Boolean** | The average | [optional] [default to true]
**stddev** | **Boolean** | Standard deviation | [optional] [default to true]
**sumOfSquares** | **Boolean** | Sum of all values squared | [optional] [default to true]
**distinctValues** | **Boolean** | The set of all distinct values for the field (This can be very expensive to calculate) | [optional] [default to false]
**countDistinct** | **Boolean** | The number of distinct values  (This can be very expensive to calculate) | [optional] [default to false]
**cardinality** | **Boolean** | A statistical approximation of the number of distinct values | [optional] [default to false]
**cardinalityAccuracy** | **Number** | Number between 0.0 and 1.0 indicating how aggressively the algorithm should try to be accurate. Used with boolean cardinality flag. | [optional] [default to 0.3]
**excludeFilters** | **[String]** | A list of filters to exclude | [optional] 
**percentiles** | **[Number]** | A list of percentile values, e.g. \&quot;1,99,99.9\&quot; | [optional] 


