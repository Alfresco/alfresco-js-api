# QueriesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findNodes**](QueriesApi.md#findNodes) | **GET** /queries/nodes | Find nodes
[**findPeople**](QueriesApi.md#findPeople) | **GET** /queries/people | Find people
[**findSites**](QueriesApi.md#findSites) | **GET** /queries/sites | Find sites


<a name="findNodes"></a>
# **findNodes**
> NodePaging findNodes(termopts)

Find nodes

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of nodes that match the given search criteria.

The search term is used to look for nodes that match against name, title, description, full text content or tags.

The search term:
- must contain a minimum of 3 alphanumeric characters
- allows \"quoted term\"
- can optionally use '*' for wildcard matching

By default, file and folder types will be searched unless a specific type is provided as a query parameter.

By default, the search will be across the repository unless a specific root node id is provided to start the search from.

You can sort the result list using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
* name
* modifiedAt
* createdAt


### Example
```javascript
import QueriesApi from 'QueriesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let queriesApi = new QueriesApi(this.alfrescoApi);

let opts = { 
  'rootNodeId': rootNodeId_example //  | The id of the node to start the search from.

Supports the aliases -my-, -root- and -shared-.

  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'nodeType': nodeType_example //  | Restrict the returned results to only those of the given node type and its sub-types

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

queriesApi.findNodes(termopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **string**| The term to search for. | 
 **rootNodeId** | **string**| The id of the node to start the search from.

Supports the aliases -my-, -root- and -shared-.
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **nodeType** | **string**| Restrict the returned results to only those of the given node type and its sub-types
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties
 | [optional] 
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**NodePaging**](NodePaging.md)

<a name="findPeople"></a>
# **findPeople**
> PersonPaging findPeople(termopts)

Find people

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of people that match the given search criteria.

The search term is used to look for matches against person id, firstname and lastname.

The search term:
- must contain a minimum of 2 alphanumeric characters
- can optionally use '*' for wildcard matching within the term

You can sort the result list using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
* id
* firstName
* lastName


### Example
```javascript
import QueriesApi from 'QueriesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let queriesApi = new QueriesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

};

queriesApi.findPeople(termopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **string**| The term to search for.
 | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 

### Return type

[**PersonPaging**](PersonPaging.md)

<a name="findSites"></a>
# **findSites**
> SitePaging findSites(termopts)

Find sites

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of sites that match the given search criteria.

The search term is used to look for sites that match against site id, title or description.

The search term:
- must contain a minimum of 2 alphanumeric characters
- can optionally use '*' for wildcard matching within the term

The default sort order for the returned list is for sites to be sorted by ascending id.
You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
* id
* title
* description


### Example
```javascript
import QueriesApi from 'QueriesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let queriesApi = new QueriesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

queriesApi.findSites(termopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **string**| The term to search for. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**SitePaging**](SitePaging.md)

