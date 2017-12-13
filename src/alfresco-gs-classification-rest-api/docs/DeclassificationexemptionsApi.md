# AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeclassificationExemption**](DeclassificationexemptionsApi.md#createDeclassificationExemption) | **POST** /declassification-exemptions | Create a declassification exemption
[**deleteDeclassificationExemption**](DeclassificationexemptionsApi.md#deleteDeclassificationExemption) | **DELETE** /declassification-exemptions/{declassificationExemptionId} | Delete a declassification exemption
[**listDeclassificationExemptions**](DeclassificationexemptionsApi.md#listDeclassificationExemptions) | **GET** /declassification-exemptions | List all declassification exemptions
[**showDeclassificationExemptionById**](DeclassificationexemptionsApi.md#showDeclassificationExemptionById) | **GET** /declassification-exemptions/{declassificationExemptionId} | Get declassification exemption information
[**updateDeclassificationExemption**](DeclassificationexemptionsApi.md#updateDeclassificationExemption) | **PUT** /declassification-exemptions/{declassificationExemptionId} | Update a declassification exemption


<a name="createDeclassificationExemption"></a>
# **createDeclassificationExemption**
> DeclassificationExemptionEntry createDeclassificationExemption(declassificationExemption)

Create a declassification exemption

Creates a new declassification exemption.\n\n**Note:** You can create more than one exemption by specifying a list of exemptions in the JSON body.\nFor example, the following JSON body creates two declassification exemptions:\n```JSON\n[\n  {\n    \&quot;code\&quot;:\&quot;My Code1\&quot;,\n    \&quot;description\&quot;:\&quot;My Description1\&quot;\n  },\n  {\n    \&quot;code\&quot;:\&quot;My Code2\&quot;,\n    \&quot;description\&quot;:\&quot;My Description2\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi()

var declassificationExemption = new AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionBody(); // {DeclassificationExemptionBody} Declassification exemption

apiInstance.createDeclassificationExemption(declassificationExemption).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemption** | [**DeclassificationExemptionBody**](DeclassificationExemptionBody.md)| Declassification exemption | 

### Return type

[**DeclassificationExemptionEntry**](DeclassificationExemptionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeclassificationExemption"></a>
# **deleteDeclassificationExemption**
> deleteDeclassificationExemption(declassificationExemptionId)

Delete a declassification exemption

Deletes the declassification exemption with id **declassificationExemptionId**. You can&#39;t delete a classification exemption that is being used to classify content.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi()

var declassificationExemptionId = "declassificationExemptionId_example"; // {String} The identifier for the declassification exemption

apiInstance.deleteDeclassificationExemption(declassificationExemptionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemptionId** | **String**| The identifier for the declassification exemption | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDeclassificationExemptions"></a>
# **listDeclassificationExemptions**
> DeclassificationExemptionsPaging listDeclassificationExemptions(opts)

List all declassification exemptions

Gets all declassification exemptions.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi()

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
};
apiInstance.listDeclassificationExemptions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 

### Return type

[**DeclassificationExemptionsPaging**](DeclassificationExemptionsPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showDeclassificationExemptionById"></a>
# **showDeclassificationExemptionById**
> DeclassificationExemptionEntry showDeclassificationExemptionById(declassificationExemptionId)

Get declassification exemption information

Gets the declassification exemption with id **declassificationExemptionId**.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi()

var declassificationExemptionId = "declassificationExemptionId_example"; // {String} The identifier for the declassification exemption

apiInstance.showDeclassificationExemptionById(declassificationExemptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemptionId** | **String**| The identifier for the declassification exemption | 

### Return type

[**DeclassificationExemptionEntry**](DeclassificationExemptionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeclassificationExemption"></a>
# **updateDeclassificationExemption**
> DeclassificationExemptionEntry updateDeclassificationExemption(declassificationExemptionIddeclassificationExemption)

Update a declassification exemption

Updates the declassification exemption with id **declassificationExemptionId**. For example, you can rename a declassification exemption.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi()

var declassificationExemptionId = "declassificationExemptionId_example"; // {String} The identifier for the declassification exemption

var declassificationExemption = new AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionBody(); // {DeclassificationExemptionBody} Declassification exemption

apiInstance.updateDeclassificationExemption(declassificationExemptionIddeclassificationExemption).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemptionId** | **String**| The identifier for the declassification exemption | 
 **declassificationExemption** | [**DeclassificationExemptionBody**](DeclassificationExemptionBody.md)| Declassification exemption | 

### Return type

[**DeclassificationExemptionEntry**](DeclassificationExemptionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

