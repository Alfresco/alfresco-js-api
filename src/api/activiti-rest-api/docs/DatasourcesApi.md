# DatasourcesApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDataSources**](DatasourcesApi.md#getDataSources) | **GET** /enterprise/editor/data-sources | Get data sources


<a name="getDataSources"></a>
# **getDataSources**
> ResultListDataRepresentationDataSourceRepresentation getDataSources(opts)

Get data sources

### Example
```javascript
import DatasourcesApi from 'DatasourcesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let datasourcesApi = new DatasourcesApi(this.alfrescoApi);

let opts = { 
  'tenantId': 789 //  | tenantId
};

datasourcesApi.getDataSources(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | [optional] 

### Return type

[**ResultListDataRepresentationDataSourceRepresentation**](ResultListDataRepresentationDataSourceRepresentation.md)

