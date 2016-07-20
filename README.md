# Alfresco JavaScript API Client


<p>
  <a title='Gitter chat' href="https://gitter.im/Alfresco/alfresco-ng2-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
     <img src='https://badges.gitter.im/Alfresco/alfresco-ng2-components.svg'  alt='Gitter chat' />
  </a>
  <a title='Build Status' href="https://travis-ci.org/Alfresco/alfresco-js-api">
     <img src='https://travis-ci.org/Alfresco/alfresco-js-api.svg?branch=master'  alt='travis Status' />
  </a>
  <a href='https://codecov.io/gh/Alfresco/alfresco-js-api'>
    <img src='https://img.shields.io/codecov/c/github/Alfresco/alfresco-js-api/master.svg?maxAge=0' alt='Coverage Status' />
  </a>
  <a href='https://raw.githubusercontent.com/Alfresco/dev-platform-js-api/master/LICENSE'>
     <img src='https://img.shields.io/hexpm/l/plug.svg' alt='license' />
  </a>

</p>

<p align="center">
  <img title="alfresco" alt='alfresco' src='assets/alfresco.png'  width="280px" height="150px"></img>
</p>

This project provides a JavaScript client API into the Alfresco REST API and Activiti REST API.

<!-- markdown-toc start - Don't edit this section.  npm run toc to generate it-->

<!-- toc -->

  * [Node](#node)
  * [Install](#install)
  * [Api Modules](#api-modules)
    + [Basic usage For node projects](#basic-usage-for-node-projects)
    + [Basic usage For browser](#basic-usage-for-browser)
  * [Getting Started](#getting-started)
- [Login](#login)
- [Logout](#logout)
- [isLoggedIn](#isloggedin)
- [Events login/logout](#events-loginlogout)
- [Get File or Folder Info](#get-file-or-folder-info)
- [Get Folder Children Info](#get-folder-children-info)
- [Create Folder](#create-folder)
- [Upload File](#upload-file)
- [Events Upload File](#events-upload-file)
- [Delete File or Folder](#delete-file-or-folder)
- [Delete File or Folder Permanent](#delete-file-or-folder-permanent)
- [Get thumbnail Url](#get-thumbnail-url)
- [Get content Url](#get-content-url)
- [Custom web scripts call](#custom-web-scripts-call)
  * [Development](#development)
  * [Release History](#release-history)

<!-- tocstop -->

<!-- markdown-toc end -->

## Node
To correctly use this component check that on your machine is running Node version 5.0.0 or higher.

## Install
npm install --save alfresco-js-api

## Api Modules

- [Authentication API](/src/alfresco-auth-rest-api)
- [Core API](/src/alfresco-core-rest-api)
- [Mock API](/test/mockObjects)

### Basic usage For node projects

```javascript
var AlfrescoJsApi = require('alfresco-js-api');
```

### Basic usage For browser

```html
    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.min.js"></script>
    
    or for not minify version
    
    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.js"></script>
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

#  Login

AlfrescoApi({username, password, alfrescoHost, contextRoot, ticket});

>If you want login with Username and Password
*username
*password
*alfrescoHost (The Ip or Name of the host where your Alfresco istance is running default value 'http://127.0.0.1:8080')
*contextRoot (Optional value default value is alfresco default value  'alfresco')
*ticket (Optional only if you want login with the ticket see example below)

```javascript
var AlfrescoApi = require('alfresco-js-api');

this.alfrescoJsApi = new AlfrescoApi({ username:'admin', password:'admin', host:'http://127.0.0.1:8080'});

this.alfrescoJsApi.login().then(function (data) {
    console.log('API called successfully Login ticket:' + data);
}, function (error) {
    console.error(error);
});

//The output will be: API called successfully Login ticket: TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1

```

>If you already have a ticket

```javascript

var AlfrescoApi = require('alfresco-js-api');

this.alfrescoJsApi = new AlfrescoApi({ ticket:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', host:'http://127.0.0.1:8080'});

```

#  Logout

logout()

```javascript

this.alfrescoJsApi.logout().then(function (data) {
    console.log('Successfully Logout');
}, function (error) {
    console.error('Possible ticket already expired');
});

```

#  isLoggedIn

isLoggedIn()

> return true if you are logged in false if you are not.

```javascript

var isLoggedIn = this.alfrescoJsApi.isLoggedIn();

if (isLoggedIn) {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}

```
#  Events login/logout

>  The login/logout are also an EventEmitter which you can register to listen to any of the following event types:
* unauthorized (If this event is triggered a call to the Api was unauthorized)
* success (If this event is triggered the login was success you can use this event instead the login promise)
* logout (If this event is triggered the client is successfully logout)

```javascript

this.alfrescoJsApi.login().on('unauthorized', function(){
    console.log('You are unauthorized you can use this event to redirect to login');
});

this.alfrescoJsApi.login().on('success', function(){
    console.log('Success Login');
});

this.alfrescoJsApi.logout().on('logout', function(){
    console.log('Successfully Logout');
});
```

#  Get File or Folder Info

getNodeInfo(fileOrFolderId, opts)

>Get information for the File/Folder with the identifier nodeId.

```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.getNodeInfo(fileOrFolderId).then(function (data) {
    console.log('This is the name' + data.name );    
}, function (error) {
    console.log('This node does not exist');
});

```
#  Get Folder Children Info

getNodeChildren(fileOrFolderId, opts)

>Minimal information for each child is returned by default.
You can use the include parameter to return additional information.
returns a promise with the Info about the children of the node if resolved and {error} if rejected.
  
```javascript

var folderNodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.getNodeChildren(folderNodeId).then(function (data) {
    console.log('The number of children in this folder are ' + data.list.pagination.count );    
}, function (error) {
    console.log('This node does not exist');
});

```
#  Create Folder

createFolder(name, relativePath, nodeId, opts) 

>createFolder return a promise that is resolved if the folder is created and {error} if rejected.
     
```javascript

this.alfrescoJsApi.nodes.createFolder('newFolderName').then(function (data) {
    console.log('The folder is created in root');    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});


this.alfrescoJsApi.nodes.createFolder('newFolderName', 'folderA/folderB').then(function (data) {
    console.log('The folder is created in  folderA/folderB from root');    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});


var parentFolder = '80a94ac8-3ece-47ad-864e-5d939424c47c'

this.alfrescoJsApi.nodes.createFolder('newFolderName', 'folderA/folderB', parentFolder).then(function (data) {
    console.log('The folder is created in  folderA/folderB from parentFolder:' + parentFolder);    
}, function (error) {
    console.log('Error in creation of this folder or folder already exist' + error);
});

```

**CreateFolder With Auto Rename**

createFolderAutoRename(name, relativePath, nodeId, opts)
>is the same of createFolder(name, relativePath, nodeId, {autoRename: true}) is just syntactic sugar


```javascript

this.alfrescoJsApi.nodes.createFolderAutoRename('newFolderName').then(function (data) {
    console.log('The folder is created in root');    
}, function (error) {
    console.log('Error in creation of this folder' + error);
});
```

#  Upload File

uploadFile(fileDefinition, relativePath, nodeId, nodeBody, opts)
>uploadFile return a promise that is resolved if the file is successful uploaded and {error} if rejected.

The fileDefinition provides information about files and allows JavaScript to access their content.

*Web File Definition 
File Definition are generally retrieved from a FileList object returned as a result of a user selecting files using the <input> element

*Node File Definition
File Definition are generally retrieved from a read Stram


```javascript
 
var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

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


var parentFolder = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.upload.uploadFile(fileToUpload, 'folderX/folderY/folderZ', parentFolder )
    .then(function () {
        console.log('File Uploaded in the from parentFolder ' + parentFolder + ' n folderX/folderY/folderZ');
    }, function (error) {
        console.log('Error during the upload' + error);
    }); 
    
```

* To abort a file uploading


```javascript
 
var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

var promiseUpload = this.alfrescoJsApi.upload.uploadFile(fileToUpload)
    .once('abort', function () {
        console.log('File Uploaded aborted');
    });        

promiseUpload.abort();
```


#  Events Upload File

>  The uploadFile is also an EventEmitter which you can register to listen to any of the following event types:
* progress 
* success 
* abort 
* error 
* unauthorized 

```javascript
var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

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

#  Delete File or Folder

deleteNode(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
Deleted nodes move to the trash bin is still possible to recover it
     
```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.deleteNode(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');    
}, function (error) {
    console.log('This node does not exist');
});

```

#  Delete File or Folder Permanent

deleteNodePermanent(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
If Deleted Permanent is used will not be possible recover the files
     
```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.deleteNodePermanent(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');    
}, function (error) {
    console.log('This node does not exist');
});

```

#  Get thumbnail Url
  
getDocumentThumbnailUrl(documentId)

```javascript

var thumbnailUrl = this.alfrescoJsApi.content.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

#  Get content Url
  
getContentUrl(documentId)

```javascript

var thumbnailUrl = this.alfrescoJsApi.content.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

# Custom web scripts call

For mor information about web scripts read the [Wiki](https://wiki.alfresco.com/wiki/Web_Scripts) and the [Wiki with Web Scripts Examples](https://wiki.alfresco.com/wiki/Web_Scripts_Examples)

executeWebScript(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath)

>  Anatomy of a Web Script URI  **http(s)://(host):(port)/(contextPath)/(servicePath)/(scriptPath)?(scriptArgs)**
A Web Script is simply a service bound to a URI which responds to HTTP methods such as GET, POST, PUT and DELETE. While using the same underlying code, there are broadly two kinds of Web Scripts.

*  **httpMethod**  possible value GET, POST, PUT and DELETE
*  **scriptPath**  path to Web Script (as defined by Web Script)
*  **scriptArgs**  arguments to pass to Web Script
*  **contextRoot** path where application is deployed default value 'alfresco'
*  **servicePath** path where Web Script service is mapped default value 'service'

```javascript

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/alfresco/service/mytasks

this.alfrescoJsApi.webScript.executeWebScript('GET', 'mytasks').then(function (data) {
   console.log('Data received form http://127.0.01:8080/alfresco/service/mytasks' + data);    
}, function (error) {
   console.log('Error' + error);
});
        
//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/service/mytasks

this.alfrescoJsApi.webScript.executeWebScript('GET', 'mytasks', null, 'share').then(function (data) {
   console.log('Data received form http://127.0.01:8080/share/service/mytasks' + data);    
}, function (error) {
   console.log('Error' + error);
});

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/differentServiceSlug/mytasks

this.alfrescoJsApi.webScript.executeWebScript('GET', 'mytasks', null, 'share', 'differentServiceSlug').then(function (data) {
   console.log('Data received form http://127.0.01:8080/share/differentServiceSlug/mytasks' + data);    
}, function (error) {
   console.log('Error' + error);
});
        
```
      

## Development

* To run the build 

    ```$ npm run build```

* To run the build in watch mode

    ```$ npm run watchify```
    
* To run the test 

    ```$ npm run test```

* To run the test coverage

    ```$ npm run coverage```


## Release History

Read the [Changelog] (./CHANGELOG.md)

