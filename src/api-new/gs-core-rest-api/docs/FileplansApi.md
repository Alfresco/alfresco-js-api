# .FileplansApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFilePlanCategories**](FileplansApi.md#createFilePlanCategories) | **POST** /file-plans/{filePlanId}/categories | Create record categories for a file plan
[**getFilePlan**](FileplansApi.md#getFilePlan) | **GET** /file-plans/{filePlanId} | Get a file plan
[**getFilePlanCategories**](FileplansApi.md#getFilePlanCategories) | **GET** /file-plans/{filePlanId}/categories | List file plans&#39;s children
[**updateFilePlan**](FileplansApi.md#updateFilePlan) | **PUT** /file-plans/{filePlanId} | Update a file plan


<a name="createFilePlanCategories"></a>
# **createFilePlanCategories**
> RecordCategoryEntry createFilePlanCategories(filePlanIdnodeBodyCreateopts)

Create record categories for a file plan

Creates a record category as a primary child of **filePlanId**.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create
a unique name using an integer suffix.

This API method also supports record category creation using application/json.

You must specify at least a **name**.

You can create a category like this:
JSON
{
  \&quot;name\&quot;:\&quot;My Record Category\&quot;
}

You can set properties when creating a record category:
JSON
{
  \&quot;name\&quot;:\&quot;My Record Category\&quot;,
  \&quot;properties\&quot;:
  {
    \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,
    \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;
  }
}


Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.

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
import FileplansApi from 'FileplansApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let fileplansApi = new FileplansApi(this.alfrescoApi);

let opts = { 
  'autoRename': true // boolean | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.

  'include':  // Array<string> | Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

fileplansApi.createFilePlanCategories(filePlanIdnodeBodyCreateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **string**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **nodeBodyCreate** | [**RootCategoryBodyCreate**](RootCategoryBodyCreate.md)| The node information to create. | 
 **autoRename** | **boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
 | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* hasRetentionSchedule
* path
 | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

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

<a name="getFilePlan"></a>
# **getFilePlan**
> FilePlanEntry getFilePlan(filePlanIdopts)

Get a file plan

Gets information for file plan **filePlanId**

Mandatory fields and the file plan&#39;s aspects and properties are returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import FileplansApi from 'FileplansApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let fileplansApi = new FileplansApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the file plan. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

fileplansApi.getFilePlan(filePlanIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **string**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the file plan. Any optional field from the response model can be requested. For example:
* allowableOperations
* path
 | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**FilePlanEntry**](FilePlanEntry.md)

<a name="getFilePlanCategories"></a>
# **getFilePlanCategories**
> RecordCategoryPaging getFilePlanCategories(filePlanIdopts)

List file plans&#39;s children

Returns a list of record categories.

Minimal information for each child is returned by default.

You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.


### Example
```javascript
import FileplansApi from 'FileplansApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let fileplansApi = new FileplansApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'include':  // Array<string> | Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* hasRetentionSchedule
* path
* properties

  'includeSource': true // boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **filePlanId**
  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

fileplansApi.getFilePlanCategories(filePlanIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **string**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:
* allowableOperations
* aspectNames
* hasRetentionSchedule
* path
* properties
 | [optional] 
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **filePlanId** | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**RecordCategoryPaging**](RecordCategoryPaging.md)

<a name="updateFilePlan"></a>
# **updateFilePlan**
> FilePlanEntry updateFilePlan(filePlanIdfilePlanBodyUpdateopts)

Update a file plan

Updates file plan **filePlanId**.
You can only set or update description and title properties:
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
import FileplansApi from 'FileplansApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let fileplansApi = new FileplansApi(this.alfrescoApi);

let opts = { 
  'include':  // Array<string> | Returns additional information about the file plan. Any optional field from the response model can be requested. For example:
* allowableOperations
* path

  'fields':  // Array<string> | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

fileplansApi.updateFilePlan(filePlanIdfilePlanBodyUpdateopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePlanId** | **string**| The identifier of a file plan. You can also use the -filePlan- alias. | 
 **filePlanBodyUpdate** | [**FilePlanBodyUpdate**](FilePlanBodyUpdate.md)| The file plan information to update. | 
 **include** | [**Array&lt;string&gt;**](string.md)| Returns additional information about the file plan. Any optional field from the response model can be requested. For example:
* allowableOperations
* path
 | [optional] 
 **fields** | [**Array&lt;string&gt;**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**FilePlanEntry**](FilePlanEntry.md)

