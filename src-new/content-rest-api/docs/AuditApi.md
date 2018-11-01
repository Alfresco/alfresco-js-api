# .AuditApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAuditEntriesForAuditApp**](AuditApi.md#deleteAuditEntriesForAuditApp) | **DELETE** /audit-applications/{auditApplicationId}/audit-entries | Permanently delete audit entries for an audit application
[**deleteAuditEntry**](AuditApi.md#deleteAuditEntry) | **DELETE** /audit-applications/{auditApplicationId}/audit-entries/{auditEntryId} | Permanently delete an audit entry
[**getAuditApp**](AuditApi.md#getAuditApp) | **GET** /audit-applications/{auditApplicationId} | Get audit application info
[**getAuditEntry**](AuditApi.md#getAuditEntry) | **GET** /audit-applications/{auditApplicationId}/audit-entries/{auditEntryId} | Get audit entry
[**listAuditApps**](AuditApi.md#listAuditApps) | **GET** /audit-applications | List audit applications
[**listAuditEntriesForAuditApp**](AuditApi.md#listAuditEntriesForAuditApp) | **GET** /audit-applications/{auditApplicationId}/audit-entries | List audit entries for an audit application
[**listAuditEntriesForNode**](AuditApi.md#listAuditEntriesForNode) | **GET** /nodes/{nodeId}/audit-entries | List audit entries for a node
[**updateAuditApp**](AuditApi.md#updateAuditApp) | **PUT** /audit-applications/{auditApplicationId} | Update audit application info


<a name="deleteAuditEntriesForAuditApp"></a>
# **deleteAuditEntriesForAuditApp**
> deleteAuditEntriesForAuditApp(auditApplicationIdwhere)

Permanently delete audit entries for an audit application

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Permanently delete audit entries for an audit application **auditApplicationId**.

The **where** clause must be specified, either with an inclusive time period or for
an inclusive range of ids. The delete is within the context of the given audit application.

For example:

*   where&#x3D;(createdAt BETWEEN (&#39;2017-06-02T12:13:51.593+01:00&#39; , &#39;2017-06-04T10:05:16.536+01:00&#39;)
*   where&#x3D;(id BETWEEN (&#39;1234&#39;, &#39;4321&#39;)

You must have admin rights to delete audit information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAuditEntriesForAuditApp(auditApplicationIdwhere, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditApplicationId** | **string**| The identifier of an audit application. | 
 **where** | **string**| Audit entries to permanently delete for an audit application, given an inclusive time period or range of ids. For example:

*   where&#x3D;(createdAt BETWEEN (&#39;2017-06-02T12:13:51.593+01:00&#39; , &#39;2017-06-04T10:05:16.536+01:00&#39;)
*   where&#x3D;(id BETWEEN (&#39;1234&#39;, &#39;4321&#39;)
 | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAuditEntry"></a>
# **deleteAuditEntry**
> deleteAuditEntry(auditApplicationIdauditEntryId)

Permanently delete an audit entry

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Permanently delete a single audit entry **auditEntryId**.

You must have admin rights to delete audit information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAuditEntry(auditApplicationIdauditEntryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditApplicationId** | **string**| The identifier of an audit application. | 
 **auditEntryId** | **string**| The identifier of an audit entry. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAuditApp"></a>
# **getAuditApp**
> AuditApp getAuditApp(auditApplicationIdopts)

Get audit application info

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Get status of an audit application **auditApplicationId**.

You must have admin rights to retrieve audit information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();

var opts = { 
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
apiInstance.getAuditApp(auditApplicationIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditApplicationId** | **string**| The identifier of an audit application. | 
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

[**AuditApp**](AuditApp.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAuditEntry"></a>
# **getAuditEntry**
> AuditEntryEntry getAuditEntry(auditApplicationIdauditEntryIdopts)

Get audit entry

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Gets audit entry **auditEntryId**.

You must have admin rights to access audit information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();

var opts = { 
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
apiInstance.getAuditEntry(auditApplicationIdauditEntryIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditApplicationId** | **string**| The identifier of an audit application. | 
 **auditEntryId** | **string**| The identifier of an audit entry. | 
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

[**AuditEntryEntry**](AuditEntryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAuditApps"></a>
# **listAuditApps**
> AuditAppPaging listAuditApps(opts)

List audit applications

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Gets a list of audit applications in this repository.

This list may include pre-configured audit applications, if enabled, such as:

* alfresco-access
* CMISChangeLog
* Alfresco Tagging Service
* Alfresco Sync Service (used by Enterprise Cloud Sync)

You must have admin rights to retrieve audit information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

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
apiInstance.listAuditApps(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
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

[**AuditAppPaging**](AuditAppPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAuditEntriesForAuditApp"></a>
# **listAuditEntriesForAuditApp**
> AuditEntryPaging listAuditEntriesForAuditApp(auditApplicationIdopts)

List audit entries for an audit application

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Gets a list of audit entries for audit application **auditApplicationId**.

You can use the **include** parameter to return additional **values** information.

The list can be filtered by one or more of:
* **createdByUser** person id
* **createdAt** inclusive time period
* **id** inclusive range of ids
* **valuesKey** audit entry values contains the exact matching key
* **valuesValue** audit entry values contains the exact matching value

The default sort order is **createdAt** ascending, but you can use an optional **ASC** or **DESC**
modifier to specify an ascending or descending sort order.

For example, specifying orderBy&#x3D;createdAt DESC returns audit entries in descending **createdAt** order.

You must have admin rights to retrieve audit information.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'orderBy':  // any | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'where': where_example // string | Optionally filter the list. Here are some examples:

*   where=(createdByUser='jbloggs')

*   where=(id BETWEEN ('1234', '4321')

*   where=(createdAt BETWEEN ('2017-06-02T12:13:51.593+01:00' , '2017-06-04T10:05:16.536+01:00')

*   where=(createdByUser='jbloggs' and createdAt BETWEEN ('2017-06-02T12:13:51.593+01:00' , '2017-06-04T10:05:16.536+01:00')

*   where=(valuesKey='/alfresco-access/login/user')

*   where=(valuesKey='/alfresco-access/transaction/action' and valuesValue='DELETE')

  'include':  // any | Returns additional information about the audit entry. The following optional fields can be requested:
* values

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
apiInstance.listAuditEntriesForAuditApp(auditApplicationIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditApplicationId** | **string**| The identifier of an audit application. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **orderBy** | [**any**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where&#x3D;(createdByUser&#x3D;&#39;jbloggs&#39;)

*   where&#x3D;(id BETWEEN (&#39;1234&#39;, &#39;4321&#39;)

*   where&#x3D;(createdAt BETWEEN (&#39;2017-06-02T12:13:51.593+01:00&#39; , &#39;2017-06-04T10:05:16.536+01:00&#39;)

*   where&#x3D;(createdByUser&#x3D;&#39;jbloggs&#39; and createdAt BETWEEN (&#39;2017-06-02T12:13:51.593+01:00&#39; , &#39;2017-06-04T10:05:16.536+01:00&#39;)

*   where&#x3D;(valuesKey&#x3D;&#39;/alfresco-access/login/user&#39;)

*   where&#x3D;(valuesKey&#x3D;&#39;/alfresco-access/transaction/action&#39; and valuesValue&#x3D;&#39;DELETE&#39;)
 | [optional] 
 **include** | [**any**](string.md)| Returns additional information about the audit entry. The following optional fields can be requested:
* values
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

[**AuditEntryPaging**](AuditEntryPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAuditEntriesForNode"></a>
# **listAuditEntriesForNode**
> AuditEntryPaging listAuditEntriesForNode(nodeIdopts)

List audit entries for a node

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Gets a list of audit entries for node **nodeId**.

The list can be filtered by **createdByUser** and for a given inclusive time period.

The default sort order is **createdAt** ascending, but you can use an optional **ASC** or **DESC**
modifier to specify an ascending or descending sort order.

For example, specifying orderBy&#x3D;createdAt DESC returns audit entries in descending **createdAt** order.

This relies on the pre-configured &#39;alfresco-access&#39; audit application.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();

var opts = { 
  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'orderBy':  // any | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'maxItems': 56 // number | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'where': where_example // string | Optionally filter the list. Here are some examples:

*   where=(createdByUser='-me-')

*   where=(createdAt BETWEEN ('2017-06-02T12:13:51.593+01:00' , '2017-06-04T10:05:16.536+01:00')

*   where=(createdByUser='jbloggs' and createdAt BETWEEN ('2017-06-02T12:13:51.593+01:00' , '2017-06-04T10:05:16.536+01:00')

  'include':  // any | Returns additional information about the audit entry. The following optional fields can be requested:
* values

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
apiInstance.listAuditEntriesForNode(nodeIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **orderBy** | [**any**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where&#x3D;(createdByUser&#x3D;&#39;-me-&#39;)

*   where&#x3D;(createdAt BETWEEN (&#39;2017-06-02T12:13:51.593+01:00&#39; , &#39;2017-06-04T10:05:16.536+01:00&#39;)

*   where&#x3D;(createdByUser&#x3D;&#39;jbloggs&#39; and createdAt BETWEEN (&#39;2017-06-02T12:13:51.593+01:00&#39; , &#39;2017-06-04T10:05:16.536+01:00&#39;)
 | [optional] 
 **include** | [**any**](string.md)| Returns additional information about the audit entry. The following optional fields can be requested:
* values
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

[**AuditEntryPaging**](AuditEntryPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAuditApp"></a>
# **updateAuditApp**
> AuditApp updateAuditApp(auditApplicationIdauditAppBodyUpdateopts)

Update audit application info

**Note:** this endpoint is available in Alfresco 5.2.2 and newer versions.

Disable or re-enable the audit application **auditApplicationId**.

New audit entries will not be created for a disabled audit application until
it is re-enabled (and system-wide auditing is also enabled).

Note, it is still possible to query &amp;/or delete any existing audit entries even
if auditing is disabled for the audit application.

You must have admin rights to update audit application.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AuditApi();

var opts = { 
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
apiInstance.updateAuditApp(auditApplicationIdauditAppBodyUpdateopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auditApplicationId** | **string**| The identifier of an audit application. | 
 **auditAppBodyUpdate** | [**AuditBodyUpdate**](AuditBodyUpdate.md)| The audit application to update. | 
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

[**AuditApp**](AuditApp.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

