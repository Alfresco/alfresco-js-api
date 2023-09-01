# ProbesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

| Method                                 | HTTP request | Description |
|----------------------------------------| ------------- | ------------- |
|  [getProbe](#getProbe) | **GET** /probes/{probeId} | Check readiness and liveness of the repository |


## getProbe

Check readiness and liveness of the repository

> No authentication is required to call this endpoint.
> This endpoint is available in Alfresco 6.0 and newer versions.

Returns a status of 200 to indicate success and 503 for failure.

The readiness probe is normally only used to check repository startup.

The liveness probe should then be used to check the repository is still responding to requests.

**Example**

```javascript
import { AlfrescoApi, ProbesApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const probesApi = new ProbesApi(alfrescoApi);

probesApi.getProbe(probeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
});
```

**Parameters**

| Name        | Type       | Description                                |
|-------------|------------|--------------------------------------------|
| **probeId** | **string** | The name of the probe: `-ready-`, `-live-` | 

**Return type**: [**ProbeEntry**](ProbeEntry.md)

