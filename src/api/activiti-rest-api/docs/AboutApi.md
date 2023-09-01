# AboutApi

All URIs are relative to */activiti-app/api*

| Method                                         | HTTP request                    | Description                 |
|------------------------------------------------|---------------------------------|-----------------------------|
| [**getAppVersion**](AboutApi.md#getAppVersion) | **GET** /enterprise/app-version | Get server type and version |


<a name="getAppVersion"></a>
# **getAppVersion**
> { [key: string]: string; } getAppVersion()

Get server type and version

Provides information about the running Alfresco Process Services Suite. The response payload object has the properties type, majorVersion, minorVersion, revisionVersion and edition.

**Example**

```javascript
import AboutApi from 'AboutApi';
import { AlfrescoApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const aboutApi = new AboutApi(this.alfrescoApi);

aboutApi.getAppVersion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```


**Return type**: **Map<string, string>**

