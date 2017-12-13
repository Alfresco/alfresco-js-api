# AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClassificationReason**](ClassificationreasonsApi.md#createClassificationReason) | **POST** /classification-reasons | Create a classification reason
[**deleteClassificationReason**](ClassificationreasonsApi.md#deleteClassificationReason) | **DELETE** /classification-reasons/{classificationReasonId} | Delete a classification reason
[**listClassificationReasons**](ClassificationreasonsApi.md#listClassificationReasons) | **GET** /classification-reasons | List all classification reasons
[**showClassificationReasonById**](ClassificationreasonsApi.md#showClassificationReasonById) | **GET** /classification-reasons/{classificationReasonId} | Get classification reason information
[**updateClassificationReason**](ClassificationreasonsApi.md#updateClassificationReason) | **PUT** /classification-reasons/{classificationReasonId} | Update a classification reason


<a name="createClassificationReason"></a>
# **createClassificationReason**
> ClassificationReasonEntry createClassificationReason(classificationReason)

Create a classification reason

Creates a new classification reason.\n\n**Note:** You can create more than one reason by specifying a list of reasons in the JSON body.\nFor example, the following JSON body creates two classification reasons:\n```JSON\n[\n  {\n    \&quot;code\&quot;:\&quot;My Code1\&quot;,\n    \&quot;description\&quot;:\&quot;My Description1\&quot;\n  },\n  {\n    \&quot;code\&quot;:\&quot;My Code2\&quot;,\n    \&quot;description\&quot;:\&quot;My Description2\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi()

var classificationReason = new AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody(); // {ClassificationReasonBody} Classification reason

apiInstance.createClassificationReason(classificationReason).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationReason** | [**ClassificationReasonBody**](ClassificationReasonBody.md)| Classification reason | 

### Return type

[**ClassificationReasonEntry**](ClassificationReasonEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClassificationReason"></a>
# **deleteClassificationReason**
> deleteClassificationReason(classificationReasonId)

Delete a classification reason

Deletes the classification reason  **classificationReasonId**. You can&#39;t delete a classification reason that is being used to classify content. There must be at least one classification reason.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi()

var classificationReasonId = "classificationReasonId_example"; // {String} The identifier for the classification reason

apiInstance.deleteClassificationReason(classificationReasonId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationReasonId** | **String**| The identifier for the classification reason | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listClassificationReasons"></a>
# **listClassificationReasons**
> ClassificationReasonsPaging listClassificationReasons(opts)

List all classification reasons

Gets all classification reasons.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi()

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listClassificationReasons(opts).then(function(data) {
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
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**ClassificationReasonsPaging**](ClassificationReasonsPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showClassificationReasonById"></a>
# **showClassificationReasonById**
> ClassificationReasonEntry showClassificationReasonById(classificationReasonId)

Get classification reason information

Gets the classification reason  **classificationReasonId**.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi()

var classificationReasonId = "classificationReasonId_example"; // {String} The identifier for the classification reason

apiInstance.showClassificationReasonById(classificationReasonId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationReasonId** | **String**| The identifier for the classification reason | 

### Return type

[**ClassificationReasonEntry**](ClassificationReasonEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClassificationReason"></a>
# **updateClassificationReason**
> ClassificationReasonEntry updateClassificationReason(classificationReasonIdclassificationReason)

Update a classification reason

Updates the classification reason with id **classificationReasonId**. For example, you can change a classification reason code or description.

### Example
```javascript
var AlfrescoGovernanceServicesSecurityControls = require('alfresco-governance-services-security-controls');
var defaultClient = AlfrescoGovernanceServicesSecurityControls.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi()

var classificationReasonId = "classificationReasonId_example"; // {String} The identifier for the classification reason

var classificationReason = new AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody(); // {ClassificationReasonBody} Classification reason

apiInstance.updateClassificationReason(classificationReasonIdclassificationReason).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationReasonId** | **String**| The identifier for the classification reason | 
 **classificationReason** | [**ClassificationReasonBody**](ClassificationReasonBody.md)| Classification reason | 

### Return type

[**ClassificationReasonEntry**](ClassificationReasonEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

