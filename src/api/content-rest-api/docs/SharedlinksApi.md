# SharedlinksApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSharedLink**](SharedlinksApi.md#createSharedLink) | **POST** /shared-links | Create a shared link to a file
[**deleteSharedLink**](SharedlinksApi.md#deleteSharedLink) | **DELETE** /shared-links/{sharedId} | Deletes a shared link
[**emailSharedLink**](SharedlinksApi.md#emailSharedLink) | **POST** /shared-links/{sharedId}/email | Email shared link
[**getSharedLink**](SharedlinksApi.md#getSharedLink) | **GET** /shared-links/{sharedId} | Get a shared link
[**getSharedLinkContent**](SharedlinksApi.md#getSharedLinkContent) | **GET** /shared-links/{sharedId}/content | Get shared link content
[**getSharedLinkRendition**](SharedlinksApi.md#getSharedLinkRendition) | **GET** /shared-links/{sharedId}/renditions/{renditionId} | Get shared link rendition information
[**getSharedLinkRenditionContent**](SharedlinksApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content
[**listSharedLinkRenditions**](SharedlinksApi.md#listSharedLinkRenditions) | **GET** /shared-links/{sharedId}/renditions | List renditions for a shared link
[**listSharedLinks**](SharedlinksApi.md#listSharedLinks) | **GET** /shared-links | List shared links


<a name="createSharedLink"></a>
# **createSharedLink**
> SharedLinkEntry createSharedLink(sharedLinkBodyCreateopts)

Create a shared link to a file

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Create a shared link to the file **nodeId** in the request body. Also, an optional expiry date could be set,
so the shared link would become invalid when the expiry date is reached. For example:

JSON
  {
    \"nodeId\": \"1ff9da1a-ee2f-4b9c-8c34-3333333333\",
    \"expiresAt\": \"2017-03-23T23:00:00.000+0000\"
  }


**Note:** You can create shared links to more than one file
specifying a list of **nodeId**s in the JSON body like this:

JSON
[
  {
    \"nodeId\": \"1ff9da1a-ee2f-4b9c-8c34-4444444444\"
  },
  {
    \"nodeId\": \"1ff9da1a-ee2f-4b9c-8c34-5555555555\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the shared link, the following optional fields can be requested:
* allowableOperations
* path

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

sharedlinksApi.createSharedLink(sharedLinkBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedLinkBodyCreate** | [**SharedLinkBodyCreate**](SharedLinkBodyCreate.md)| The nodeId to create a shared link for. | 
 **include** | [**string**](string.md)| Returns additional information about the shared link, the following optional fields can be requested:
* allowableOperations
* path
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

[**SharedLinkEntry**](SharedLinkEntry.md)

<a name="deleteSharedLink"></a>
# **deleteSharedLink**
> deleteSharedLink(sharedId)

Deletes a shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Deletes the shared link with identifier **sharedId**.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);


sharedlinksApi.deleteSharedLink(sharedId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 

### Return type

null (empty response body)

<a name="emailSharedLink"></a>
# **emailSharedLink**
> emailSharedLink(sharedIdsharedLinkBodyEmail)

Email shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Sends email with app-specific url including identifier **sharedId**.

The client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:
JSON
{
    \"client\": \"myClient\",
    \"recipientEmails\": [\"john.doe@acme.com\", \"joe.bloggs@acme.com\"]
}

A plain text message property can be optionally provided in the request body to customise the sent email.
Also, a locale property can be optionally provided in the request body to send the emails in a particular language (if the locale is supported by Alfresco).
For example, to email a shared link with a messages and a locale:
JSON
{
    \"client\": \"myClient\",
    \"recipientEmails\": [\"john.doe@acme.com\", \"joe.bloggs@acme.com\"],
    \"message\": \"myMessage\",
    \"locale\":\"en-GB\"
}

**Note:** The client must be registered before you can send a shared link email. See [server documentation]. However, out-of-the-box
 share is registered as a default client, so you could pass **share** as the client name:
JSON
{
    \"client\": \"share\",
    \"recipientEmails\": [\"john.doe@acme.com\"]
}



### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);


sharedlinksApi.emailSharedLink(sharedIdsharedLinkBodyEmail).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 
 **sharedLinkBodyEmail** | [**SharedLinkBodyEmail**](SharedLinkBodyEmail.md)| The shared link email to send. | 

### Return type

null (empty response body)

<a name="getSharedLink"></a>
# **getSharedLink**
> SharedLinkEntry getSharedLink(sharedIdopts)

Get a shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets minimal information for the file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

sharedlinksApi.getSharedLink(sharedIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 
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

[**SharedLinkEntry**](SharedLinkEntry.md)

<a name="getSharedLinkContent"></a>
# **getSharedLinkContent**
> getSharedLinkContent(sharedIdopts)

Get shared link content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the content of the file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);

let opts = { 
  'attachment': true //  | **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.

  'ifModifiedSince': 2013-10-20T19:20:30+01:00 //  | Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

  'range': range_example //  | The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.

};

sharedlinksApi.getSharedLinkContent(sharedIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 
 **attachment** | **boolean**| **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.
 | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
 | [optional] 
 **range** | **string**| The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.
 | [optional] 

### Return type

null (empty response body)

<a name="getSharedLinkRendition"></a>
# **getSharedLinkRendition**
> RenditionEntry getSharedLinkRendition(sharedIdrenditionId)

Get shared link rendition information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets rendition information for the file with shared link identifier **sharedId**.

This API method returns rendition information where the rendition status is CREATED,
which means the rendition is available to view/download.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);


sharedlinksApi.getSharedLinkRendition(sharedIdrenditionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 
 **renditionId** | **string**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

### Return type

[**RenditionEntry**](RenditionEntry.md)

<a name="getSharedLinkRenditionContent"></a>
# **getSharedLinkRenditionContent**
> getSharedLinkRenditionContent(sharedIdrenditionIdopts)

Get shared link rendition content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the rendition content for file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);

let opts = { 
  'attachment': true //  | **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.

  'ifModifiedSince': 2013-10-20T19:20:30+01:00 //  | Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

  'range': range_example //  | The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.

};

sharedlinksApi.getSharedLinkRenditionContent(sharedIdrenditionIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 
 **renditionId** | **string**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **boolean**| **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.
 | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
 | [optional] 
 **range** | **string**| The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.
 | [optional] 

### Return type

null (empty response body)

<a name="listSharedLinkRenditions"></a>
# **listSharedLinkRenditions**
> RenditionPaging listSharedLinkRenditions(sharedId)

List renditions for a shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of the rendition information for the file with shared link identifier **sharedId**.

This API method returns rendition information, including the rendition id, for each rendition
where the rendition status is CREATED, which means the rendition is available to view/download.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);


sharedlinksApi.listSharedLinkRenditions(sharedId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **string**| The identifier of a shared link to a file. | 

### Return type

[**RenditionPaging**](RenditionPaging.md)

<a name="listSharedLinks"></a>
# **listSharedLinks**
> SharedLinkPaging listSharedLinks(opts)

List shared links

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Get a list of links that the current user has read permission on source node.

The list is ordered in descending modified order.

**Note:** The list of links is eventually consistent so newly created shared links may not appear immediately.


### Example
```javascript
import SharedlinksApi from 'SharedlinksApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let sharedlinksApi = new SharedlinksApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'where': where_example //  | Optionally filter the list by \"sharedByUser\" userid of person who shared the link (can also use -me-)

*   where=(sharedByUser='jbloggs')

*   where=(sharedByUser='-me-')

  'include':  //  | Returns additional information about the shared link, the following optional fields can be requested:
* allowableOperations
* path

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

sharedlinksApi.listSharedLinks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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
 **where** | **string**| Optionally filter the list by \"sharedByUser\" userid of person who shared the link (can also use -me-)

*   where=(sharedByUser='jbloggs')

*   where=(sharedByUser='-me-')
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the shared link, the following optional fields can be requested:
* allowableOperations
* path
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

[**SharedLinkPaging**](SharedLinkPaging.md)

