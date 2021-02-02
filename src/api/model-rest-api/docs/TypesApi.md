# TypesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getType**](TypesApi.md#getType) | **GET** /types/{typeId} | Get a type
[**listTypes**](TypesApi.md#listTypes) | **GET** /types | List types


<a name="getType"></a>
## getType
> TypeEntry getType(typeId)

Get a type

**Note:** This is available in Alfresco 7.0.0 and newer versions.
Get information for type **typeId**.


### Example

```javascript
import { AlfrescoApi, TypesApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const typesApi = new TypesApi(alfrescoApi);


typesApi.getType(typeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | **string**| The Qname of a type. e.g namespace_prefix:name | 

### Return type

[**TypeEntry**](TypeEntry.md)

<a name="listTypes"></a>
## listTypes
> TypePaging listTypes(opts)

List types

**Note:** This is available in Alfresco 7.0.0 and newer versions.

Gets a list of types from the data dictionary. The System types will be ignored by default.
JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 0,
      \"hasMoreItems\": true,
      \"totalItems\": 0,
      \"skipCount\": 0,
      \"maxItems\": 0
    },
    \"entries\": [
      {
        \"entry\": {
          \"id\": \"cm:content\",
          \"description\": \"Base Content Object\",
          \"title\": \"Content\",
          \"parentId\": \"cm:cmobject\"
          \"properties\": [
            {
              \"id\": \"cm:name\",
              \"title\": \"Name\",
              \"description\": \"Name\",
              \"dataType\": \"d:text\",
              \"isMultiValued\": false,
              \"isMandatory\": true,
              \"isMandatoryEnforced\": true
              \"isProtected\": false
              ...
            },
            {
              ...
            }
          ]
        }
      },
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      },
    ]
  }
}



### Example

```javascript
import { AlfrescoApi, TypesApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const typesApi = new TypesApi(alfrescoApi);

const opts = { 
  'where': where_example /*  | Optionally filter the list. Here are some examples:
A Type should represented in the fully qualified name(namespace_prefix:name). e.g 'cm:content'.

The following where clause will only return types from the namespace1:model and namespace2:model.
  
  where=(modelIds='namespace1:model,namespace2:model')
  

The following where clause will only return sub types for the given parents.
  
  where=(parentIds='namespace1:parent,namespace2:parent')
  

The following where clause will only return types that match the pattern.
  
  where=(uriPrefix matches('http://www.alfresco.org/model.*'))
  

The following where clause will only return types that don't match the pattern.
  
  where=(not uriPrefix matches('http://www.alfresco.org/model.*'))
  
 */
};

typesApi.listTypes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **string**| Optionally filter the list. Here are some examples:
A Type should represented in the fully qualified name(namespace_prefix:name). e.g 'cm:content'.

The following where clause will only return types from the namespace1:model and namespace2:model.
  
  where=(modelIds='namespace1:model,namespace2:model')
  

The following where clause will only return sub types for the given parents.
  
  where=(parentIds='namespace1:parent,namespace2:parent')
  

The following where clause will only return types that match the pattern.
  
  where=(uriPrefix matches('http://www.alfresco.org/model.*'))
  

The following where clause will only return types that don't match the pattern.
  
  where=(not uriPrefix matches('http://www.alfresco.org/model.*'))
  
 | [optional] 

### Return type

[**TypePaging**](TypePaging.md)

