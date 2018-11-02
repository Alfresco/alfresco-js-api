# .EndpointsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEndpointConfigurationUsingGET**](EndpointsApi.md#getEndpointConfigurationUsingGET) | **GET** /enterprise/editor/endpoints/{endpointConfigurationId} | Get an endpoint configuration
[**getEndpointConfigurationsUsingGET**](EndpointsApi.md#getEndpointConfigurationsUsingGET) | **GET** /enterprise/editor/endpoints | List endpoint configurations


<a name="getEndpointConfigurationUsingGET"></a>
# **getEndpointConfigurationUsingGET**
> EndpointConfigurationRepresentation getEndpointConfigurationUsingGET(endpointConfigurationId)

Get an endpoint configuration

### Example
```javascript
import EndpointsApi from 'EndpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let endpointsApi = new EndpointsApi(this.alfrescoApi);


endpointsApi.getEndpointConfigurationUsingGET(endpointConfigurationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

<a name="getEndpointConfigurationsUsingGET"></a>
# **getEndpointConfigurationsUsingGET**
> Array<EndpointConfigurationRepresentation> getEndpointConfigurationsUsingGET()

List endpoint configurations

### Example
```javascript
import EndpointsApi from 'EndpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let endpointsApi = new EndpointsApi(this.alfrescoApi);

endpointsApi.getEndpointConfigurationsUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;EndpointConfigurationRepresentation&gt;**](EndpointConfigurationRepresentation.md)

