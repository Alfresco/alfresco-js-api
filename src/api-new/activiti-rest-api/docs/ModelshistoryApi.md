# .ModelshistoryApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModelHistoryCollectionUsingGET**](ModelshistoryApi.md#getModelHistoryCollectionUsingGET) | **GET** /enterprise/models/{modelId}/history | List a model's historic versions
[**getProcessModelHistoryUsingGET**](ModelshistoryApi.md#getProcessModelHistoryUsingGET) | **GET** /enterprise/models/{modelId}/history/{modelHistoryId} | Get a historic version of a model


<a name="getModelHistoryCollectionUsingGET"></a>
# **getModelHistoryCollectionUsingGET**
> ResultListDataRepresentationModelRepresentation getModelHistoryCollectionUsingGET(modelIdopts)

List a model's historic versions

### Example
```javascript
import ModelshistoryApi from 'ModelshistoryApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelshistoryApi = new ModelshistoryApi(this.alfrescoApi);

let opts = { 
  'includeLatestVersion': true //  | includeLatestVersion
};

modelshistoryApi.getModelHistoryCollectionUsingGET(modelIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **includeLatestVersion** | **boolean**| includeLatestVersion | [optional] 

### Return type

[**ResultListDataRepresentationModelRepresentation**](ResultListDataRepresentationModelRepresentation.md)

<a name="getProcessModelHistoryUsingGET"></a>
# **getProcessModelHistoryUsingGET**
> ModelRepresentation getProcessModelHistoryUsingGET(modelIdmodelHistoryId)

Get a historic version of a model

### Example
```javascript
import ModelshistoryApi from 'ModelshistoryApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelshistoryApi = new ModelshistoryApi(this.alfrescoApi);


modelshistoryApi.getProcessModelHistoryUsingGET(modelIdmodelHistoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **modelHistoryId** | **number**| modelHistoryId | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

