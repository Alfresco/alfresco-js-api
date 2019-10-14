# UploadApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadFile**](UploadApi.md#uploadFile) | | upload file content


<a name="uploadFile"></a>
# **uploadFile**
>      uploadFile(fileDefinition, relativePath: string, rootFolderId: string, nodeBody: any, opts?: any): Promise<any | Emitter> 


### Example

```javascript

let fs = require('fs');

let fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

let uploadApi = new UploadApi(this.alfrescoApi);
uploadApi.uploadFile(fileToUpload)
    .then(function () {
        console.log('File Uploaded in the root');
    }, function (error) {
        console.log('Error during the upload' + error);
    });

        
```


