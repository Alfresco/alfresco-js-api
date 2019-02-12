# DownloadsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelDownload**](DownloadsApi.md#cancelDownload) | **DELETE** /downloads/{downloadId} | Cancel a download
[**createDownload**](DownloadsApi.md#createDownload) | **POST** /downloads | Create a new download
[**getDownload**](DownloadsApi.md#getDownload) | **GET** /downloads/{downloadId} | Get a download


<a name="cancelDownload"></a>
# **cancelDownload**
> cancelDownload(downloadId)

Cancel a download

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Cancels the creation of a download request.

**Note:** The download node can be deleted using the **DELETE /nodes/{downloadId}** endpoint

By default, if the download node is not deleted it will be picked up by a cleaner job which removes download nodes older than a configurable amount of time (default is 1 hour)

Information about the existing progress at the time of cancelling can be retrieved by calling the **GET /downloads/{downloadId}** endpoint

The cancel operation is done asynchronously.


### Example
```javascript
import DownloadsApi from 'DownloadsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let downloadsApi = new DownloadsApi(this.alfrescoApi);


downloadsApi.cancelDownload(downloadId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadId** | **string**| The identifier of a download node. | 

### Return type

null (empty response body)

<a name="createDownload"></a>
# **createDownload**
> DownloadEntry createDownload(downloadBodyCreateopts)

Create a new download

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Creates a new download node asynchronously, the content of which will be the zipped content of the **nodeIds** specified in the JSON body like this:

JSON
{
    \"nodeIds\":
     [
       \"c8bb482a-ff3c-4704-a3a3-de1c83ccd84c\",
       \"cffa62db-aa01-493d-9594-058bc058eeb1\"
     ]
}


**Note:** The content of the download node can be obtained using the **GET /nodes/{downloadId}/content** endpoint


### Example
```javascript
import DownloadsApi from 'DownloadsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let downloadsApi = new DownloadsApi(this.alfrescoApi);

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

downloadsApi.createDownload(downloadBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadBodyCreate** | [**DownloadBodyCreate**](DownloadBodyCreate.md)| The nodeIds the content of which will be zipped, which zip will be set as the content of our download node. | 
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

[**DownloadEntry**](DownloadEntry.md)

<a name="getDownload"></a>
# **getDownload**
> DownloadEntry getDownload(downloadIdopts)

Get a download

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Retrieve status information for download node **downloadId**


### Example
```javascript
import DownloadsApi from 'DownloadsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let downloadsApi = new DownloadsApi(this.alfrescoApi);

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

downloadsApi.getDownload(downloadIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadId** | **string**| The identifier of a download node. | 
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

[**DownloadEntry**](DownloadEntry.md)

