# ScriptfilesApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getControllers**](ScriptfilesApi.md#getControllers) | **GET** /enterprise/script-files/controllers | getControllers
[**getLibraries**](ScriptfilesApi.md#getLibraries) | **GET** /enterprise/script-files/libraries | getLibraries


<a name="getControllers"></a>
# **getControllers**
> string getControllers()

getControllers

### Example
```javascript
import ScriptfilesApi from 'ScriptfilesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let scriptfilesApi = new ScriptfilesApi(this.alfrescoApi);

scriptfilesApi.getControllers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

<a name="getLibraries"></a>
# **getLibraries**
> string getLibraries()

getLibraries

### Example
```javascript
import ScriptfilesApi from 'ScriptfilesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let scriptfilesApi = new ScriptfilesApi(this.alfrescoApi);

scriptfilesApi.getLibraries().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

