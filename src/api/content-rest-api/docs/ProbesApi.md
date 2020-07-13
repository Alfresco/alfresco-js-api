# ProbesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProbe**](ProbesApi.md#getProbe) | **GET** /probes/{probeId} | Check readiness and liveness of the repository


<a name="getProbe"></a>
## getProbe
> ProbeEntry getProbe(probeId)

Check readiness and liveness of the repository

**Note:** this endpoint is available in Alfresco 6.0 and newer versions.

Returns a status of 200 to indicate success and 503 for failure.

The readiness probe is normally only used to check repository startup.

The liveness probe should then be used to check the repository is still responding to requests.

**Note:** No authentication is required to call this endpoint.


### Example

```javascript
import { AlfrescoApi, ProbesApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const probesApi = new ProbesApi(alfrescoApi);


probesApi.getProbe(probeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **probeId** | **string**| The name of the probe:
* -ready-
* -live-
 | 

### Return type

[**ProbeEntry**](ProbeEntry.md)

