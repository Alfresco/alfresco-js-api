# Alfresco JavaScript API Client
<p>
  <a title='Build Status' href="https://travis-ci.com/Alfresco/dev-platform-js-api">
     <img src='https://travis-ci.com/Alfresco/alfresco-js-api.svg?token=FPzV2wyyCU8imY6wHR2B&branch=master'  alt='travis Status' />
  </a>
  <a href='https://coveralls.io/github/Alfresco/alfresco-js-api?branch=master'>
     <img src='https://coveralls.io/repos/github/Alfresco/alfresco-js-api/badge.svg?branch=master&t=Osaz5p' alt='Coverage Status' />
  </a>
  <a href='https://raw.githubusercontent.com/Alfresco/dev-platform-js-api/master/LICENSE'>
     <img src='https://img.shields.io/hexpm/l/plug.svg' alt='license' />
  </a>

</p>

This project provides a JavaScript client API into the v1 Alfresco REST API.

## Api Modules

- [Authentication API](https://github.com/Alfresco/alfresco-js-api/tree/master/src/alfresco-auth-rest-api)
- [Core API](https://github.com/Alfresco/alfresco-js-api/tree/master/src/alfresco-core-rest-api)

## installation

```sh
npm set registry http://devproducts.alfresco.me:4873
npm install --save alfresco-js-api
```

### Basic usage For node projects

```javascript
var AlfrescoJsApi = require('alfresco-js-api');
```

### Basic usage For browser

```html
 <script src="node_modules/alfresco-js-api/bundle.js"></script>
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

#  Login

>  AlfrescoApi({username, password, alfrescoHost, ticket});

If you want login with Username and Password

```javascript
var AlfrescoApi = require('alfresco-js-api');

this.alfrescoJsApi = new AlfrescoApi({ username:'admin', password:'admin', host:'http://192.168.99.100:8080'});

this.alfrescoJsApi.login().then(function (data) {
    console.log('API called successfully Login ticket:' + data);
}, function (error) {
    console.error(error);
});

//The output will be: API called successfully Login ticket: TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1

```

If you already have a ticket

```javascript

var AlfrescoApi = require('alfresco-js-api');

this.alfrescoJsApi = new AlfrescoApi({ ticket:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', host:'http://192.168.99.100:8080'});

```

#  Logout

>  logout();

```javascript

this.alfrescoJsApi.logout().then(function (data) {
    console.log('Successfully Logout');
}, function (error) {
    console.error('Possible ticket already expired');
});

```

#  isLoggedIn

>  isLoggedIn(); return true if you are logged in false if you are not.

```javascript

var isLoggedIn = this.alfrescoJsApi.isLoggedIn();

if (isLoggedIn) {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}

```

#  Events

>  The AlfrescoApi is also an EventEmitter that you can register to listen to any of the following event types:
* unauthorized (If this event is triggered a call to the Api was unauthorized)
* success (If this event is triggered the login was success you can use this event instead the login promise)
* logout (If this event is triggered the client is successfully logout)

```javascript

this.alfrescoJsApi.on('unauthorized', function(){
    console.log('You are unauthorized you can use this event to redirect to login');
});

this.alfrescoJsApi.on('success', function(){
    console.log('Success Login');
});

this.alfrescoJsApi.on('logout', function(){
    console.log('Successfully Logout');
});
```

#  Get File or Folder Info
> getNodeInfo(fileOrFolderId); Get information for the File/Folder with the identifier nodeId.

```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.getNodeInfo(fileOrFolderId).then(function (data) {
    console.log('This is the name' + data.name );    
}, function (error) {
    console.log('This node does not exist');
});

```

#  Delete File or Folder
> deleteNode(fileOrFolderId); Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
Deleted nodes move to the trash bin is still possible to recover it
     
```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.deleteNode(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');    
}, function (error) {
    console.log('This node does not exist');
});

```

#  Delete File or Folder Permanent
> deleteNodePermanent(fileOrFolderId); Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
If Deleted Permanent is used will not be possible recover the files
     
```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.deleteNodePermanent(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');    
}, function (error) {
    console.log('This node does not exist');
});

```

#  Get thumbnail Url
  
>  getDocumentThumbnailUrl(documentId);

```javascript

var thumbnailUrl = this.alfrescoJsApi.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

#  Get content Url
  
>  getContentUrl(documentId);

```javascript

var thumbnailUrl = this.alfrescoJsApi.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Development

* To run the build 

    ```$ npm run build```

* To run the test 

    ```$ npm run test```

* To run the test coverage

    ```$ npm run coverage```


## Release History


 * 2016-06-16  v1.0.1  Test and task runner Added 
 * 2016-06-03  v1.0.0  

