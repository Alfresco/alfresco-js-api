# ActivitiPublicRestApi.IDMSyncApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogFile**](IDMSyncApi.md#getLogFile) | **GET** /api/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | getLogFile
[**getSyncLogEntries**](IDMSyncApi.md#getSyncLogEntries) | **GET** /api/enterprise/idm-sync-log-entries | getSyncLogEntries


<a name="getLogFile"></a>
# **getLogFile**
> getLogFile(syncLogEntryId)

getLogFile

### Example
```javascript

var syncLogEntryId = 789; // Integer | syncLogEntryId

this.alfrescoJsApi.activiti.iDMSyncApi.getLogFile(syncLogEntryId);
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

<a name="getSyncLogEntries"></a>
# **getSyncLogEntries**
> [SyncLogEntryRepresentation] getSyncLogEntries(opts)

getSyncLogEntries

### Example
```javascript

var opts = { 
  'tenantId': 789, // Integer | tenantId
  'page': 56, // Integer | page
  'size': 56 // Integer | size
};

this.alfrescoJsApi.activiti.iDMSyncApi.getSyncLogEntries(opts);
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

