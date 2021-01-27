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
 **aspectId** | **string**| The Qname of an aspect. e.g namespace_prefix:name | 

### Return type

[**AspectEntry**](AspectEntry.md)

<a name="listAspects"></a>
## listAspects
> AspectPaging listAspects(opts)

List aspects

**Note:** This is available in Alfresco 7.0.0 and newer versions.

Gets a list of aspects from the data dictionary. The System aspects will be ignored by default.
```JSON
{
  "list": {
    "pagination": {
      "count": 0,
      "hasMoreItems": true,
      "totalItems": 0,
      "skipCount": 0,
      "maxItems": 0
    },
    "entries": [
      {
        "entry": {
          "id": "cm:titled",
          "description": "Titled",
          "title": "Titled",
          "properties": [
            {
              "id": "cm:title",
              "title": "Title",
              "description": "Content Title",
              "dataType": "d:mltext",
              "isMultiValued": false,
              "isMandatory": false,
              "isMandatoryEnforced": false
              "isProtected": false
            },
            {
              ...
            }
          ]
        }
      },
      {
        "entry": {
          ...
        }
      },
      {
        "entry": {
          ...
        }
      }
    ]
  }
}
```


### Example

```javascript
import { AlfrescoApi, AspectsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const aspectsApi = new AspectsApi(alfrescoApi);

const opts = { 
  'where': where_example /*  | Optionally filter the list. Here are some examples:

The following where clause will only return aspects from the customModel1 and customModel2.
  
  where=(modelIds='customModel1,customModel2')
  

The following where clause will only return sub aspects for the given parents.
  
  where=(parentIds='parentId1,parentId2')
  

The following where clause will only return aspects that match the pattern.
  
  where=(uriPrefix matches('http://www.alfresco.org/model.*'))
  

The following where clause will only return aspects that don't match the pattern.
  
  where=(not uriPrefix matches('http://www.alfresco.org/model.*'))
  
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

The following where clause will only return aspects from the customModel1 and customModel2.
  
  where=(modelIds='customModel1,customModel2')
  

The following where clause will only return sub aspects for the given parents.
  
  where=(parentIds='parentId1,parentId2')
  

The following where clause will only return aspects that match the pattern.
  
  where=(uriPrefix matches('http://www.alfresco.org/model.*'))
  

The following where clause will only return aspects that don't match the pattern.
  
  where=(not uriPrefix matches('http://www.alfresco.org/model.*'))
  
 | [optional] 

### Return type

[**AspectPaging**](AspectPaging.md)

