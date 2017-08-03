# AlfrescoCoreRestApi.Download

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filesAdded** | **Number** | number of files added so far in the zip | [optional] 
**bytesAdded** | **Number** | number of bytes added so far in the zip | [optional] 
**id** | **String** | the id of the download node | [optional] 
**totalFiles** | **Number** | the total number of files to be added in the zip | [optional] 
**totalBytes** | **Number** | the total number of bytes to be added in the zip | [optional] 
**status** | **String** | the current status of the download node creation | [optional] [default to &#39;PENDING&#39;]


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `DONE` (value: `"DONE"`)

* `MAX_CONTENT_SIZE_EXCEEDED` (value: `"MAX_CONTENT_SIZE_EXCEEDED"`)




