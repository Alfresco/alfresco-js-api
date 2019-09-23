# AccountintegrationApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccounts**](AccountintegrationApi.md#getAccounts) | **GET** /enterprise/account/integration | Retrieve external account information


<a name="getAccounts"></a>
# **getAccounts**
> ResultListDataRepresentationAccountRepresentation getAccounts()

Retrieve external account information

Accounts are used to integrate with third party apps and clients

### Example
```javascript
import AccountintegrationApi from 'AccountintegrationApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let accountintegrationApi = new AccountintegrationApi(this.alfrescoApi);

accountintegrationApi.getAccounts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationAccountRepresentation**](ResultListDataRepresentationAccountRepresentation.md)

