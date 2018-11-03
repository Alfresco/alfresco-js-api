# .ScriptfilesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getControllersUsingGET**](ScriptfilesApi.md#getControllersUsingGET) | **GET** /enterprise/script-files/controllers | getControllers
[**getLibrariesUsingGET**](ScriptfilesApi.md#getLibrariesUsingGET) | **GET** /enterprise/script-files/libraries | getLibraries


<a name="getControllersUsingGET"></a>
# **getControllersUsingGET**
> string getControllersUsingGET()

getControllers

### Example
```javascript
import ScriptfilesApi from 'ScriptfilesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let scriptfilesApi = new ScriptfilesApi(this.alfrescoApi);

scriptfilesApi.getControllersUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

<a name="getLibrariesUsingGET"></a>
# **getLibrariesUsingGET**
> string getLibrariesUsingGET()

getLibraries

### Example
```javascript
import ScriptfilesApi from 'ScriptfilesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let scriptfilesApi = new ScriptfilesApi(this.alfrescoApi);

scriptfilesApi.getLibrariesUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

