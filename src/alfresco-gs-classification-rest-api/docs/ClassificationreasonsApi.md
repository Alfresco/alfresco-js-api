# AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClassificationReason**](ClassificationReasonsApi.md#createClassificationReason) | **POST** /classification-reasons | Create a classification reason
[**deleteClassificationReason**](ClassificationReasonsApi.md#deleteClassificationReason) | **DELETE** /classification-reasons/{classificationReasonId} | Delete a classification reason
[**listClassificationReasons**](ClassificationReasonsApi.md#listClassificationReasons) | **GET** /classification-reasons | List all classification reasons
[**showClassificationReasonById**](ClassificationReasonsApi.md#showClassificationReasonById) | **GET** /classification-reasons/{classificationReasonId} | Get classification reason information
[**updateClassificationReason**](ClassificationReasonsApi.md#updateClassificationReason) | **PUT** /classification-reasons/{classificationReasonId} | Update a classification reason


<a name="createClassificationReason"></a>
# **createClassificationReason**
> ClassificationReasonEntry createClassificationReason(classificationReason)

Create a classification reason

Creates a new classification reason.  **Note:** You can create more than one reason by specifying a list of reasons in the JSON body. For example, the following JSON body creates two classification reasons: &#x60;&#x60;&#x60;JSON [   {     \&quot;code\&quot;:\&quot;My Code1\&quot;,     \&quot;description\&quot;:\&quot;My Description1\&quot;   },   {     \&quot;code\&quot;:\&quot;My Code2\&quot;,     \&quot;description\&quot;:\&quot;My Description2\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript
this.alfrescoJsApi.gsClassification.classificationReasonsApi.createClassificationReason(classificationReason).then(function(data) {
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClassificationReason"></a>
# **deleteClassificationReason**
> deleteClassificationReason(classificationReasonId)

Delete a classification reason

Deletes the classification reason  **classificationReasonId**. You can&#39;t delete a classification reason that is being used to classify content. There must be at least one classification reason.

### Example
```javascript

this.alfrescoJsApi.gsClassification.classificationReasonsApi.deleteClassificationReason(classificationReasonId).then(function() {
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listClassificationReasons"></a>
# **listClassificationReasons**
> ClassificationReasonsPaging listClassificationReasons(opts)

List all classification reasons

Gets all classification reasons.

### Example
```javascript

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // Number | The maximum number of items to return in the list.
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsClassification.classificationReasonsApi.listClassificationReasons(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**ClassificationReasonsPaging**](ClassificationReasonsPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showClassificationReasonById"></a>
# **showClassificationReasonById**
> ClassificationReasonEntry showClassificationReasonById(classificationReasonId)

Get classification reason information

Gets the classification reason  **classificationReasonId**.

### Example
```javascript

this.alfrescoJsApi.gsClassification.classificationReasonsApi.showClassificationReasonById(classificationReasonId).then(function(data) {
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClassificationReason"></a>
# **updateClassificationReason**
> ClassificationReasonEntry updateClassificationReason(classificationReasonIdclassificationReason)

Update a classification reason

Updates the classification reason with id **classificationReasonId**. For example, you can change a classification reason code or description.

### Example
```javascript

var classificationReason = new AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody(); // ClassificationReasonBody | Classification reason

this.alfrescoJsApi.gsClassification.classificationReasonsApi.updateClassificationReason(classificationReasonIdclassificationReason).then(function(data) {
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

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

