# DiscoveryApi

All URIs are relative to *https://localhost/alfresco/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRepositoryInformation**](DiscoveryApi.md#getRepositoryInformation) | **GET** /discovery | Get repository information


<a name="getRepositoryInformation"></a>
# **getRepositoryInformation**
> DiscoveryEntry getRepositoryInformation()

Get repository information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Retrieves the capabilities and detailed version information from the repository.


### Example
```javascript
import DiscoveryApi from 'DiscoveryApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let discoveryApi = new DiscoveryApi(this.alfrescoApi);

discoveryApi.getRepositoryInformation().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DiscoveryEntry**](DiscoveryEntry.md)

