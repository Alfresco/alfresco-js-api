# .RecordcategoriesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecordCategoryChild**](RecordcategoriesApi.md#createRecordCategoryChild) | **POST** /record-categories/{recordCategoryId}/children | Create a record category or a record folder
[**deleteRecordCategory**](RecordcategoriesApi.md#deleteRecordCategory) | **DELETE** /record-categories/{recordCategoryId} | Delete a record category
[**getRecordCategory**](RecordcategoriesApi.md#getRecordCategory) | **GET** /record-categories/{recordCategoryId} | Get a record category
[**listRecordCategoryChildren**](RecordcategoriesApi.md#listRecordCategoryChildren) | **GET** /record-categories/{recordCategoryId}/children | List record category&#39;s children
[**updateRecordCategory**](RecordcategoriesApi.md#updateRecordCategory) | **PUT** /record-categories/{recordCategoryId} | Update a record category


<a name="createRecordCategoryChild"></a>
# **createRecordCategoryChild**
> RecordCategoryChildEntry createRecordCategoryChild(recordCategoryIdnodeBodyCreateopts)

Create a record category or a record folder

Create a record category or a record folder as a primary child of **recordCategoryId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create
a unique name using an integer suffix.

This API method also supports record category or record folder creation using application/json.

You must specify at least a **name** and **nodeType**.

You can create a category like this:
JSON
{
  \&quot;name\&quot;:\&quot;My Record Category\&quot;,
  \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;
}


You can create a record folder like this:
JSON
{
  \&quot;name\&quot;:\&quot;My Record Folder\&quot;,
  \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;
}


You can create a record folder inside a container hierarchy (applies to record categories as well):
JSON
{
  \&quot;name\&quot;:\&quot;My Fileplan Component\&quot;,
  \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;,
  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;
}

The **relativePath** specifies the container structure to create relative to the node (record category or record folder). Containers in the
**relativePath** that do not exist are created before the node is created. The container type is decided considering
the type of the parent container and the type of the node to be created.

You can set properties when creating a record category (applies to record folders as well):
JSON
{
  \&quot;name\&quot;:\&quot;My Record Category\&quot;,
  \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;,
  \&quot;properties\&quot;:
  {
    \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,
    \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;
  }
}


Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record category and a record folder inside the specified **categoryId**:
JSON
[
  {
    \&quot;name\&quot;:\&quot;My Record Category\&quot;,
    \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;
  },
  {
    \&quot;name\&quot;:\&quot;My Record Folder\&quot;,
    \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;
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

var apiInstance = new .RecordcategoriesApi();

var opts = { 
  'autoRename': true // boolean | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

  'include':  // any | Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path

  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRecordCategoryChild(recordCategoryIdnodeBodyCreateopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **string**| The identifier of a record category. | 
 **nodeBodyCreate** | [**RMNodeBodyCreateWithRelativePath**](RMNodeBodyCreateWithRelativePath.md)| The node information to create.
 | 
 **autoRename** | **boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
 | [optional] 
 **include** | [**any**](string.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path
 | [optional] 
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RecordCategoryChildEntry**](RecordCategoryChildEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteRecordCategory"></a>
# **deleteRecordCategory**
> deleteRecordCategory(recordCategoryId)

Delete a record category

Deletes record category **recordCategoryId**.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RecordcategoriesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRecordCategory(recordCategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **string**| The identifier of a record category. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecordCategory"></a>
# **getRecordCategory**
> RecordCategoryEntry getRecordCategory(recordCategoryIdopts)

Get a record category

Gets information for record category **recordCategoryId**

Mandatory fields and the record category&#39;s aspects and properties are returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RecordcategoriesApi();

var opts = { 
  'include':  // any | Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path

  'relativePath': relativePath_example // string | Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.

  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRecordCategory(recordCategoryIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **string**| The identifier of a record category. | 
 **include** | [**any**](string.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path
 | [optional] 
 **relativePath** | **string**| Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.
 | [optional] 
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RecordCategoryEntry**](RecordCategoryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRecordCategoryChildren"></a>
# **listRecordCategoryChildren**
> RecordCategoryChildPaging listRecordCategoryChildren(recordCategoryIdopts)

List record category&#39;s children

Returns a list of record categories and/or record folders.

Minimal information for each child is returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.

The list of child nodes includes primary children and secondary children, if there are any.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RecordcategoriesApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'where': where_example // string | Optionally filter the list. Here are some examples:

*   where=(nodeType='rma:recordFolder')

*   where=(nodeType='rma:recordCategory')

*   where=(isRecordFolder=true AND isClosed=false)

  'include':  // any | Returns additional information about the record category child. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* hasRetentionSchedule
* isClosed
* isRecordCategory
* isRecordFolder
* path
* properties

  'relativePath': relativePath_example // string | Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **recordCategoryId**, or as resolved by **relativePath**.
  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRecordCategoryChildren(recordCategoryIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **string**| The identifier of a record category. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where&#x3D;(nodeType&#x3D;&#39;rma:recordFolder&#39;)

*   where&#x3D;(nodeType&#x3D;&#39;rma:recordCategory&#39;)

*   where&#x3D;(isRecordFolder&#x3D;true AND isClosed&#x3D;false)
 | [optional] 
 **include** | [**any**](string.md)| Returns additional information about the record category child. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* hasRetentionSchedule
* isClosed
* isRecordCategory
* isRecordFolder
* path
* properties
 | [optional] 
 **relativePath** | **string**| Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **recordCategoryId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RecordCategoryChildPaging**](RecordCategoryChildPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRecordCategory"></a>
# **updateRecordCategory**
> RecordCategoryEntry updateRecordCategory(recordCategoryIdrecordCategoryBodyUpdateopts)

Update a record category

Updates record category **recordCategoryId**. For example, you can rename a record category:
JSON
{
  \&quot;name\&quot;:\&quot;My new name\&quot;
}

You can also set or update one or more properties:
JSON
{
  \&quot;properties\&quot;:
    {
       \&quot;rma:vitalRecordIndicator\&quot;: true,
       \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;
    }
}

**Note:** If you want to add or remove aspects, then you must use **GET /record-categories/{recordCategoryId}** first to get the complete set of *aspectNames*.

**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RecordcategoriesApi();

var opts = { 
  'include':  // any | Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path

  'fields':  // any | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRecordCategory(recordCategoryIdrecordCategoryBodyUpdateopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **string**| The identifier of a record category. | 
 **recordCategoryBodyUpdate** | [**FilePlanComponentBodyUpdate**](FilePlanComponentBodyUpdate.md)| The record category information to update. | 
 **include** | [**any**](string.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path
 | [optional] 
 **fields** | [**any**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RecordCategoryEntry**](RecordCategoryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

