# ActivitiPublicRestApi.IDMSyncApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogFileUsingGET**](IDMSyncApi.md#getLogFileUsingGET) | **GET** /api/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | getLogFile
[**getSyncLogEntriesUsingGET**](IDMSyncApi.md#getSyncLogEntriesUsingGET) | **GET** /api/enterprise/idm-sync-log-entries | getSyncLogEntries


<a name="getLogFileUsingGET"></a>
# **getLogFileUsingGET**
> getLogFileUsingGET(syncLogEntryId)

getLogFile

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IDMSyncApi();

var syncLogEntryId = 789; // Integer | syncLogEntryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getLogFileUsingGET(syncLogEntryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncLogEntryId** | **Integer**| syncLogEntryId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSyncLogEntriesUsingGET"></a>
# **getSyncLogEntriesUsingGET**
> [SyncLogEntryRepresentation] getSyncLogEntriesUsingGET(opts)

getSyncLogEntries

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IDMSyncApi();

var opts = { 
  'tenantId': 789, // Integer | tenantId
  'page': 56, // Integer | page
  'size': 56 // Integer | size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSyncLogEntriesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | [optional] 
 **page** | **Integer**| page | [optional] 
 **size** | **Integer**| size | [optional] 

### Return type

[**[SyncLogEntryRepresentation]**](SyncLogEntryRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

