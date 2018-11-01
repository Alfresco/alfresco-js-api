# .DeclassificationexemptionsApi

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

Creates a new declassification exemption.

**Note:** You can create more than one exemption by specifying a list of exemptions in the JSON body.
For example, the following JSON body creates two declassification exemptions:
JSON
[
  {
    \&quot;code\&quot;:\&quot;My Code1\&quot;,
    \&quot;description\&quot;:\&quot;My Description1\&quot;
  },
  {
    \&quot;code\&quot;:\&quot;My Code2\&quot;,
    \&quot;description\&quot;:\&quot;My Description2\&quot;
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \&quot;list\&quot;: {
    \&quot;pagination\&quot;: {
      \&quot;count\&quot;: 2,
      \&quot;hasMoreItems\&quot;: false,
      \&quot;totalItems\&quot;: 2,
      \&quot;skipCount\&quot;: 0,
      \&quot;maxItems\&quot;: 100
    },
    \&quot;entries\&quot;: [
      {
        \&quot;entry\&quot;: {
          ...
        }
      },
      {
        \&quot;entry\&quot;: {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DeclassificationexemptionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDeclassificationExemption(declassificationExemption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemption** | [**DeclassificationExemptionBody**](DeclassificationExemptionBody.md)| Declassification exemption | 

### Return type

[**DeclassificationExemptionEntry**](DeclassificationExemptionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDeclassificationExemption"></a>
# **deleteDeclassificationExemption**
> deleteDeclassificationExemption(declassificationExemptionId)

Delete a declassification exemption

Deletes the declassification exemption with id **declassificationExemptionId**. You can&#39;t delete a classification exemption that is being used to classify content.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DeclassificationexemptionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDeclassificationExemption(declassificationExemptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemptionId** | **string**| The identifier for the declassification exemption | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDeclassificationExemptions"></a>
# **listDeclassificationExemptions**
> DeclassificationExemptionsPaging listDeclassificationExemptions(opts)

List all declassification exemptions

Gets all declassification exemptions.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DeclassificationexemptionsApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listDeclassificationExemptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 

### Return type

[**DeclassificationExemptionsPaging**](DeclassificationExemptionsPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showDeclassificationExemptionById"></a>
# **showDeclassificationExemptionById**
> DeclassificationExemptionEntry showDeclassificationExemptionById(declassificationExemptionId)

Get declassification exemption information

Gets the declassification exemption with id **declassificationExemptionId**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DeclassificationexemptionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.showDeclassificationExemptionById(declassificationExemptionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemptionId** | **string**| The identifier for the declassification exemption | 

### Return type

[**DeclassificationExemptionEntry**](DeclassificationExemptionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeclassificationExemption"></a>
# **updateDeclassificationExemption**
> DeclassificationExemptionEntry updateDeclassificationExemption(declassificationExemptionIddeclassificationExemption)

Update a declassification exemption

Updates the declassification exemption with id **declassificationExemptionId**. For example, you can rename a declassification exemption.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .DeclassificationexemptionsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeclassificationExemption(declassificationExemptionIddeclassificationExemption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **declassificationExemptionId** | **string**| The identifier for the declassification exemption | 
 **declassificationExemption** | [**DeclassificationExemptionBody**](DeclassificationExemptionBody.md)| Declassification exemption | 

### Return type

[**DeclassificationExemptionEntry**](DeclassificationExemptionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

