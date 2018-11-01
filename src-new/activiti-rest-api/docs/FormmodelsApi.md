# .FormmodelsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormEditorJsonUsingGET**](FormmodelsApi.md#getFormEditorJsonUsingGET) | **GET** /enterprise/forms/{formId}/editorJson | Get form content
[**getFormHistoryUsingGET**](FormmodelsApi.md#getFormHistoryUsingGET) | **GET** /enterprise/editor/form-models/{formId}/history/{formHistoryId} | Get form history
[**getFormUsingGET**](FormmodelsApi.md#getFormUsingGET) | **GET** /enterprise/editor/form-models/{formId} | Get a form model
[**getFormUsingGET1**](FormmodelsApi.md#getFormUsingGET1) | **GET** /enterprise/forms/{formId} | Get a form
[**getFormsUsingGET**](FormmodelsApi.md#getFormsUsingGET) | **GET** /enterprise/editor/form-models/values | Get forms
[**getFormsUsingGET1**](FormmodelsApi.md#getFormsUsingGET1) | **GET** /enterprise/editor/form-models | List form models
[**getFormsUsingGET2**](FormmodelsApi.md#getFormsUsingGET2) | **GET** /enterprise/forms | Query forms
[**saveFormUsingPUT**](FormmodelsApi.md#saveFormUsingPUT) | **PUT** /enterprise/editor/form-models/{formId} | Update form model content
[**validateModelUsingPUT**](FormmodelsApi.md#validateModelUsingPUT) | **PUT** /enterprise/editor/form-models/{formId}/validate | Validate form model content


<a name="getFormEditorJsonUsingGET"></a>
# **getFormEditorJsonUsingGET**
> FormDefinitionRepresentation getFormEditorJsonUsingGET(formId)

Get form content

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormEditorJsonUsingGET(formId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFormHistoryUsingGET"></a>
# **getFormHistoryUsingGET**
> FormRepresentation getFormHistoryUsingGET(formIdformHistoryId)

Get form history

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormHistoryUsingGET(formIdformHistoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 
 **formHistoryId** | **number**| formHistoryId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFormUsingGET"></a>
# **getFormUsingGET**
> FormRepresentation getFormUsingGET(formId)

Get a form model

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormUsingGET(formId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFormUsingGET1"></a>
# **getFormUsingGET1**
> RuntimeFormRepresentation getFormUsingGET1(formId)

Get a form

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormUsingGET1(formId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 

### Return type

[**RuntimeFormRepresentation**](RuntimeFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFormsUsingGET"></a>
# **getFormsUsingGET**
> any getFormsUsingGET(formId)

Get forms

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormsUsingGET(formId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | [**any**](string.md)| formId | 

### Return type

[**any**](FormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFormsUsingGET1"></a>
# **getFormsUsingGET1**
> ResultListDataRepresentationFormRepresentation getFormsUsingGET1()

List form models

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormsUsingGET1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationFormRepresentation**](ResultListDataRepresentationFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFormsUsingGET2"></a>
# **getFormsUsingGET2**
> ResultListDataRepresentationRuntimeFormRepresentation getFormsUsingGET2(opts)

Query forms

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();

var opts = { 
  'nameLike': nameLike_example // string | nameLike
  'appId': 789 // number | appId
  'tenantId': 789 // number | tenantId
  'start': 56 // number | start
  'sort': sort_example // string | sort
  'order': order_example // string | order
  'size': 56 // number | size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormsUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameLike** | **string**| nameLike | [optional] 
 **appId** | **number**| appId | [optional] 
 **tenantId** | **number**| tenantId | [optional] 
 **start** | **number**| start | [optional] 
 **sort** | **string**| sort | [optional] 
 **order** | **string**| order | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**ResultListDataRepresentationRuntimeFormRepresentation**](ResultListDataRepresentationRuntimeFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveFormUsingPUT"></a>
# **saveFormUsingPUT**
> FormRepresentation saveFormUsingPUT(formIdsaveRepresentation)

Update form model content

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveFormUsingPUT(formIdsaveRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| ID of the form to update | 
 **saveRepresentation** | [**FormSaveRepresentation**](FormSaveRepresentation.md)| saveRepresentation | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateModelUsingPUT"></a>
# **validateModelUsingPUT**
> any validateModelUsingPUT(formIdsaveRepresentation)

Validate form model content

The model content to be validated must be specified in the POST body

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .FormmodelsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateModelUsingPUT(formIdsaveRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 
 **saveRepresentation** | [**FormSaveRepresentation**](FormSaveRepresentation.md)| saveRepresentation | 

### Return type

[**any**](ValidationErrorRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

