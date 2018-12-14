# .IdmsyncApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogFileUsingGET**](IdmsyncApi.md#getLogFileUsingGET) | **GET** /enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | Get log file for a sync log entry
[**getSyncLogEntriesUsingGET**](IdmsyncApi.md#getSyncLogEntriesUsingGET) | **GET** /enterprise/idm-sync-log-entries | List sync log entries


<a name="getLogFileUsingGET"></a>
# **getLogFileUsingGET**
> getLogFileUsingGET(syncLogEntryId)

Get log file for a sync log entry

### Example
```javascript
import IdmsyncApi from 'IdmsyncApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let idmsyncApi = new IdmsyncApi(this.alfrescoApi);


idmsyncApi.getLogFileUsingGET(syncLogEntryId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncLogEntryId** | **number**| syncLogEntryId | 

### Return type

null (empty response body)

<a name="getSyncLogEntriesUsingGET"></a>
# **getSyncLogEntriesUsingGET**
> SyncLogEntryRepresentation getSyncLogEntriesUsingGET(opts)

List sync log entries

### Example
```javascript
import IdmsyncApi from 'IdmsyncApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let idmsyncApi = new IdmsyncApi(this.alfrescoApi);

let opts = { 
  'tenantId': 789 //  | tenantId
  'page': 56 //  | page
  'start': 56 //  | start
  'size': 56 //  | size
};

idmsyncApi.getSyncLogEntriesUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | [optional] 
 **page** | **number**| page | [optional] 
 **start** | **number**| start | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**SyncLogEntryRepresentation**](SyncLogEntryRepresentation.md)

