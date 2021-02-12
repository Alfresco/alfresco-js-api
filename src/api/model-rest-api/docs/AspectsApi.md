# AspectsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAspect**](AspectsApi.md#getAspect) | **GET** /aspects/{aspectId} | Get an aspect
[**listAspects**](AspectsApi.md#listAspects) | **GET** /aspects | List aspects


<a name="getAspect"></a>
## getAspect
> AspectEntry getAspect(aspectId)

Get an aspect

**Note:** This is available in Alfresco 7.0.0 and newer versions.
Get information for aspect **aspectId**.


### Example

```javascript
import { AlfrescoApi, AspectsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const aspectsApi = new AspectsApi(alfrescoApi);


aspectsApi.getAspect(aspectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aspectId** | **string**| The Qname of an aspect(prefix:name) e.g 'cm:title' | 

### Return type

[**AspectEntry**](AspectEntry.md)

<a name="listAspects"></a>
## listAspects
> AspectPaging listAspects(opts)

List aspects

**Note:** This is available in Alfresco 7.0.0 and newer versions.

Gets a list of aspects from the data dictionary. The System aspects will be ignored by default.
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
          \"id\": \"cm:titled\",
          \"description\": \"Titled\",
          \"title\": \"Titled\",
          \"properties\": [
            {
              \"id\": \"cm:title\",
              \"title\": \"Title\",
              \"description\": \"Content Title\",
              \"dataType\": \"d:mltext\",
              \"isMultiValued\": false,
              \"isMandatory\": false,
              \"isMandatoryEnforced\": false
              \"isProtected\": false
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
import { AlfrescoApi, AspectsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const aspectsApi = new AspectsApi(alfrescoApi);

const opts = { 
  'where': where_example /*  | Optionally filter the list. Here are some examples:

An aspect should represented in the following format(prefix:name). e.g 'cm:title'.

The following where clause will only return aspects from the namespace1:model and namespace2:model.
  
  where=(modelIds in ('namespace1:model','namespace2:model'))
  

The following where clause will only return sub aspects for the given parents.
  
  where=(parentIds in ('namespace1:parent','namespace2:parent'))
  

The following where clause will only return aspects that match the pattern.
  
  where=(namespaceUri matches('http://www.alfresco.org/model.*'))
  

The following where clause will only return aspects that don't match the pattern.
  
  where=(not namespaceUri matches('http://www.alfresco.org/model.*'))
  
 */
  'skipCount': 56 /*  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 */
  'maxItems': 56 /*  | The maximum number of items to return in the list.
If not supplied then the default value is 100.
 */
};

aspectsApi.listAspects(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **string**| Optionally filter the list. Here are some examples:

An aspect should represented in the following format(prefix:name). e.g 'cm:title'.

The following where clause will only return aspects from the namespace1:model and namespace2:model.
  
  where=(modelIds in ('namespace1:model','namespace2:model'))
  

The following where clause will only return sub aspects for the given parents.
  
  where=(parentIds in ('namespace1:parent','namespace2:parent'))
  

The following where clause will only return aspects that match the pattern.
  
  where=(namespaceUri matches('http://www.alfresco.org/model.*'))
  

The following where clause will only return aspects that don't match the pattern.
  
  where=(not namespaceUri matches('http://www.alfresco.org/model.*'))
  
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]

### Return type

[**AspectPaging**](AspectPaging.md)

