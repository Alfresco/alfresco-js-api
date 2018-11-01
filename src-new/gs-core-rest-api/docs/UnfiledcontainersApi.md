# .UnfiledcontainersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnfiledContainerChildren**](UnfiledcontainersApi.md#createUnfiledContainerChildren) | **POST** /unfiled-containers/{unfiledContainerId}/children | Create a record or an unfiled record folder
[**getUnfiledContainer**](UnfiledcontainersApi.md#getUnfiledContainer) | **GET** /unfiled-containers/{unfiledContainerId} | Get the unfiled records container
[**listUnfiledContainerChildren**](UnfiledcontainersApi.md#listUnfiledContainerChildren) | **GET** /unfiled-containers/{unfiledContainerId}/children | List unfiled record container&#39;s children
[**updateUnfiledContainer**](UnfiledcontainersApi.md#updateUnfiledContainer) | **PUT** /unfiled-containers/{unfiledContainerId} | Update an unfiled record container


<a name="createUnfiledContainerChildren"></a>
# **createUnfiledContainerChildren**
> UnfiledContainerAssociationPaging createUnfiledContainerChildren(unfiledContainerIdnodeBodyCreateopts)

Create a record or an unfiled record folder

Creates a record or an unfiled record folder as a primary child of **unfiledContainerId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create a unique name using an integer suffix.

This endpoint supports both JSON and multipart/form-data (file upload).

**Using multipart/form-data**

Use the **filedata** field to represent the content to upload, for example, the following curl command will
create a node with the contents of test.txt in the test user&#39;s home folder.

curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-containers/{unfiledContainerId}/children -F filedata&#x3D;@test.txt

This API method also supports record and unfiled record folder creation using application/json.

You must specify at least a **name** and **nodeType**.

You can create a non-electronic record like this:
JSON
{
  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,
  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,
  \&quot;properties\&quot;:
    {
      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,
      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,
      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,
      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,
      \&quot;rma:numberOfCopies\&quot;:1,
      \&quot;rma:physicalSize\&quot;:30,
      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,
      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;
    }
}


You can create an empty electronic record:
JSON
{
  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,
  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
}


You can create an unfiled record folder like this:
JSON
{
  \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,
  \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,
  \&quot;properties\&quot;:
  {
    \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;
  }
}


Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates a record and an unfiled record folder inside the specified **unfiledContainerId**:
JSON
[
  {
    \&quot;name\&quot;:\&quot;My Record\&quot;,
    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;
  },
  {
    \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,
    \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;
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

var apiInstance = new .UnfiledcontainersApi();

var opts = { 
  'autoRename': true // boolean | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

  'include':  // any | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
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
apiInstance.createUnfiledContainerChildren(unfiledContainerIdnodeBodyCreateopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **string**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **nodeBodyCreate** | [**RMNodeBodyCreate**](RMNodeBodyCreate.md)| The node information to create. | 
 **autoRename** | **boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
 | [optional] 
 **include** | [**any**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
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

[**UnfiledContainerAssociationPaging**](UnfiledContainerAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getUnfiledContainer"></a>
# **getUnfiledContainer**
> UnfiledContainerEntry getUnfiledContainer(unfiledContainerIdopts)

Get the unfiled records container

Gets information for unfiled records container **unfiledContainerId**

Mandatory fields and the unfiled records container&#39;s aspects and properties are returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UnfiledcontainersApi();

var opts = { 
  'include':  // any | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
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
apiInstance.getUnfiledContainer(unfiledContainerIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **string**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **include** | [**any**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
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

[**UnfiledContainerEntry**](UnfiledContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUnfiledContainerChildren"></a>
# **listUnfiledContainerChildren**
> UnfiledContainerAssociationPaging listUnfiledContainerChildren(unfiledContainerIdopts)

List unfiled record container&#39;s children

Returns a list of records or unfiled record folders.

Minimal information for each child is returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UnfiledcontainersApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'where': where_example // string | Optionally filter the list. Here are some examples:

*   where=(isRecord=true)

*   where=(isUnfiledRecordFolder=false)

*   where=(nodeType='cm:content INCLUDESUBTYPES')

  'include':  // any | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* association
* path
* properties

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **unfiledContainerId**
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
apiInstance.listUnfiledContainerChildren(unfiledContainerIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **string**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where&#x3D;(isRecord&#x3D;true)

*   where&#x3D;(isUnfiledRecordFolder&#x3D;false)

*   where&#x3D;(nodeType&#x3D;&#39;cm:content INCLUDESUBTYPES&#39;)
 | [optional] 
 **include** | [**any**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* association
* path
* properties
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **unfiledContainerId** | [optional] 
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

[**UnfiledContainerAssociationPaging**](UnfiledContainerAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUnfiledContainer"></a>
# **updateUnfiledContainer**
> UnfiledContainerEntry updateUnfiledContainer(unfiledContainerIdunfiledContainerBodyUpdateopts)

Update an unfiled record container

Updates unfiled record container **unfiledContainerId**. For example, you can rename an unfiled record container:
JSON
{
  \&quot;name\&quot;:\&quot;My new name\&quot;
}

You can also set or update description and title properties:
JSON
{
  \&quot;properties\&quot;:
    {
       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,
       \&quot;cm:title\&quot;:\&quot;New Title\&quot;
    }
}


**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UnfiledcontainersApi();

var opts = { 
  'include':  // any | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:
* allowableOperations
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
apiInstance.updateUnfiledContainer(unfiledContainerIdunfiledContainerBodyUpdateopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledContainerId** | **string**| The identifier of an unfiled records container. You can use the **-unfiled-** alias. | 
 **unfiledContainerBodyUpdate** | [**UnfiledRecordContainerBodyUpdate**](UnfiledRecordContainerBodyUpdate.md)| The unfiled record container information to update. | 
 **include** | [**any**](string.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:
* allowableOperations
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

[**UnfiledContainerEntry**](UnfiledContainerEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

