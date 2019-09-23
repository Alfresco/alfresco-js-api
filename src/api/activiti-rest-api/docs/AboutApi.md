# AboutApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppVersion**](AboutApi.md#getAppVersion) | **GET** /enterprise/app-version | Get server type and version


<a name="getAppVersion"></a>
# **getAppVersion**
> { [key: string]: string; } getAppVersion()

Get server type and version

Provides information about the running Alfresco Process Services Suite. The response payload object has the properties type, majorVersion, minorVersion, revisionVersion and edition.

### Example
```javascript
import AboutApi from 'AboutApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let aboutApi = new AboutApi(this.alfrescoApi);

aboutApi.getAppVersion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**{ [key: string]: string; }**](Map.md)

