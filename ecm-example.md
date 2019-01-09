<!-- markdown-toc start - Don't edit this section.  npm run toc to generate it-->

<!-- toc -->

- [ECM](#ecm)
  * [Get Node  content](#get-node--content)
    + [Example](#example)
  * [Get File or Folder Info](#get-file-or-folder-info)
    + [Example](#example-1)
  * [Get Folder Children Info](#get-folder-children-info)
    + [Example](#example-2)
  * [Create Folder](#create-folder)
    + [Example](#example-3)
    + [Example](#example-4)
  * [Upload File](#upload-file)
    + [Example](#example-5)
  * [Events Upload File](#events-upload-file)
    + [Example](#example-6)
  * [Delete File or Folder](#delete-file-or-folder)
    + [Example](#example-7)
  * [Delete File or Folder Permanent](#delete-file-or-folder-permanent)
    + [Example](#example-8)
  * [Get thumbnail Url](#get-thumbnail-url)
    + [Example](#example-9)
  * [Get preview Url](#get-preview-url)
    + [Example](#example-10)
  * [Get content Url](#get-content-url)
    + [Example](#example-11)
  * [Custom web scripts call](#custom-web-scripts-call)
    + [Parameters](#parameters)

<!-- tocstop -->

<!-- markdown-toc end -->

# ECM

A complete list of all the ECM methods is available here : [Core API](/src/alfresco-core-rest-api).
Below you can find some common examples.

## Get Node  content

getFileContent(nodeId, opts)

>Returns the file content of the node with identifier **nodeId**.

 ### Example
```javascript

let nodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.getNodeContent(nodeId).then(function(data) {
    fs.writeFile('./test/grass.jpg', data, function(error) {
        if (error) {
            console.error(error);
            return;
        }
        console.log('The file was saved!');
    });
}, function(error) {
    console.error(error);
});
```

## Get File or Folder Info

getNodeInfo(fileOrFolderId, opts)

>Get information for the File/Folder with the identifier nodeId. The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  as NodeId

### Example

```javascript

let nodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.getNode(nodeId, opts).then( 
            (nodeEntry: NodeEntry) => {
                console.log('This is the name' + nodeEntry.entry.name );
            },
            (error) => {
                console.log('This node does not exist');
            });

```
## Get Folder Children Info

getNodeChildren(fileOrFolderId, opts)

>Minimal information for each child is returned by default.
You can use the include parameter to return additional information.
returns a promise with the Info about the children of the node if resolved and {error} if rejected.
You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  as NodeId

### Example

```javascript

let nodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.listNodeChildren(nodeId, opts).then( 
            (data: NodeChildAssociationPaging) => {
    console.log('The number of children in this folder are ' + data.list.pagination.count );
            },
            (error) => {
                console.log('This node does not exist');
            });

```
## Create Folder

addNode(nodeId: string, nodeBody: NodeBodyCreate, opts?: any)
 
>addNode return a promise that is resolved if the folder is created and {error} if rejected.
You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  as nodeIdParentFolder

### Example

```javascript

let nodeBody = {
    'name': 'newFolderName',
    'nodeType': 'cm:folder',
    'relativePath': relativePath
};
    
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.addNode('-root-', nodeBody).then( 
            (data:NodeEntry) => {
                console.log('The folder is created in root');
            },
            (error) => {    
                console.log('Error in creation of this folder or folder already exist' + error);
            });
```

```javascript
let nodeBody = {
    'name': 'newFolderName',
    'nodeType': 'cm:folder',
    'relativePath': 'folderA/folderB'
};
    
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.addNode('-root-', nodeBody).then( 
            (data:NodeEntry) => {
                    console.log('The folder is created in  folderA/folderB from root');
            },
            (error) => {    
                console.log('Error in creation of this folder or folder already exist' + error);
            });
```

```javascript

let nodeBody = {
    'name': 'newFolderName',
    'nodeType': 'cm:folder',
    'relativePath': 'folderA/folderB'
};
let parentFolder = '80a94ac8-3ece-47ad-864e-5d939424c47c'
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.addNode(parentFolder, nodeBody).then( 
            (data:NodeEntry) => {
                console.log('The folder is created in  folderA/folderB from parentFolder:' + parentFolder);
            },
            (error) => {    
                console.log('Error in creation of this folder or folder already exist' + error);
            });

```

**CreateFolder With Auto Rename**

### Example

```javascript

let nodeBody = {
    'name': 'newFolderName',
    'nodeType': 'cm:folder',
    'autoRename': true,
    'relativePath': relativePath
};
    
let nodesApi = new NodesApi(this.alfrescoApi);

nodesApi.addNode('-root-', nodeBody).then( 
            (data:NodeEntry) => {
                console.log('The folder is created in root');
            },
            (error) => {    
                console.log('Error in creation of this folder or folder already exist' + error);
            });
```

## Upload File

uploadFile(fileDefinition, relativePath, nodeId, nodeBody, opts)
>uploadFile return a promise that is resolved if the file is successful uploaded and {error} if rejected.

The fileDefinition provides information about files and allows JavaScript to access their content.

*Web File Definition
File Definition are generally retrieved from a FileList object returned as a result of a user selecting files using the <input> element

*Node File Definition
File Definition are generally retrieved from a read Stram

### Example

```javascript

let fs = require('fs');

let fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .then(function () {
        console.log('File Uploaded in the root');
    }, function (error) {
        console.log('Error during the upload' + error);
    });


this.alfrescoJsApi.upload.uploadFile(fileToUpload, null, null, null, {autoRename: true})
    .then(function () {
        console.log('File Uploaded in the root');
    }, function (error) {
        console.log('Error during the upload' + error);
    });


this.alfrescoJsApi.upload.uploadFile(fileToUpload, 'folderX/folderY/folderZ')
    .then(function () {
        console.log('File Uploaded in the from root folderX/folderY/folderZ');
    }, function (error) {
        console.log('Error during the upload' + error);
    });


let parentFolder = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.upload.uploadFile(fileToUpload, 'folderX/folderY/folderZ', parentFolder )
    .then(function () {
        console.log('File Uploaded in the from parentFolder ' + parentFolder + ' n folderX/folderY/folderZ');
    }, function (error) {
        console.log('Error during the upload' + error);
    });

```

The default behaviour of the Upload API will not create any thumbnail.
In order to create a thumbnail you have to perform to pass the parameter ```javascript{renditions: 'doclib'}```  as in the  example below.
This parameter will basically perform also a call to the Rendition API.
For more information about the Rendition API :
* [Rendition API](/src/alfresco-core-rest-api/docs/Rendition.md)
* [Rendition service Wiki](https://wiki.alfresco.com/wiki/Rendition_Service)

```javascript

let fs = require('fs');

let fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

this.alfrescoJsApi.upload.uploadFile(fileToUpload, null, null, null, {renditions: 'doclib'})
    .then(function () {
        console.log('File Uploaded in the root');
    }, function (error) {
        console.log('Error during the upload' + error);
    });

```

* To abort a file uploading


```javascript

let fs = require('fs');

let fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

let promiseUpload = this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .once('abort', function () {
        console.log('File Uploaded aborted');
    });

promiseUpload.abort();
```


## Events Upload File

>  The uploadFile is also an EventEmitter which you can register to listen to any of the following event types:
* progress
* success
* abort
* error
* unauthorized

### Example

```javascript
let fs = require('fs');

let fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .on('progress', (progress) => {
        console.log( 'Total :' + progress.total );
        console.log( 'Loaded :' + progress.loaded );
        console.log( 'Percent :' + progress.percent );
    })
    .on('success', () => {
       console.log( 'Your File is uploaded');
    });
    .on('abort', () => {
      console.log( 'Upload Aborted');
    })
    .on('error', () => {
      console.log( 'Error during the upload');
    })
    .on('unauthorized', () => {
    console.log('You are unauthorized');
    })
```

## Delete File or Folder

deleteNode(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
Deleted nodes move to the trash bin is still possible to recover it

### Example

```javascript

let fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.deleteNode(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');
}, function (error) {
    console.log('This node does not exist');
});

```

## Delete File or Folder Permanent

deleteNodePermanent(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
If Deleted Permanent is used will not be possible recover the files

### Example

```javascript

let fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

let nodesApi = new NodesApi(this.alfrescoApi);
nodesApi.deleteNodePermanent(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');
}, function (error) {
    console.log('This node does not exist');
});

```

## Get thumbnail Url

getDocumentThumbnailUrl(documentId)

### Example

```javascript
let contentApi = new ContentApi(this.alfrescoApi);
let thumbnailUrl = contentApi.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get preview Url

getDocumentPreviewUrl(documentId)

### Example

```javascript
let contentApi = new ContentApi(this.alfrescoApi);
let previewUrl = contentApi.getDocumentPreviewUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get content Url

getContentUrl(documentId)

### Example

```javascript
let contentApi = new ContentApi(this.alfrescoApi);
let contentUrl = contentApi.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Custom web scripts call

For mor information about web scripts read the [Wiki](https://wiki.alfresco.com/wiki/Web_Scripts) and the [Wiki with Web ScriptsExamples](https://wiki.alfresco.com/wiki/Web_Scripts_Examples)

executeWebScript(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath, postBody)

>  Anatomy of a Web Script URI  **http(s)://(host):(port)/(contextPath)/(servicePath)/(scriptPath)?(scriptArgs)**
A Web Script is simply a service bound to a URI which responds to HTTP methods such as GET, POST, PUT and DELETE. While using the same underlying code, there are broadly two kinds of Web Scripts.

### Parameters
Name | Description
------------- | -------------
**httpMethod**  | possible value GET, POST, PUT and DELETE
**scriptPath**  |path to Web Script (as defined by Web Script)
**scriptArgs**  |arguments to pass to Web Script
**contextRoot** |path where application is deployed default value 'alfresco'
**servicePath** |path where Web Script service is mapped default value 'service'
**postBody** | post body

```javascript
let webscriptApi = new WebscriptApi(this.alfrescoApi);

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/alfresco/service/mytasks

webscriptApi.executeWebScript('GET', 'mytasks').then( 
    (data) => {
        console.log('Data received form http://127.0.01:8080/alfresco/service/mytasks' + data);
},  (error) => {
         console.log('Error' + error);
});

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/service/mytasks

webscriptApi.executeWebScript('GET', 'mytasks', null, 'share').then( 
    (data)=> {
        console.log('Data received form http://127.0.01:8080/share/service/mytasks' + data);
},  (error)=> {
        console.log('Error' + error);
});

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/differentServiceSlug/mytasks

webscriptApi.executeWebScript('GET', 'mytasks', null, 'share', 'differentServiceSlug').then( 
    (data)=> {
        console.log('Data received form http://127.0.01:8080/share/differentServiceSlug/mytasks' + data);
},  (error) => {
        console.log('Error' + error);
});

```
