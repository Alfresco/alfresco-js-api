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

- [Full documentation of all the methods of each API](#full-documentation-of-all-the-methods-of-each-api)
- [Prerequisites](#prerequisites)
- [Node](#node)
- [Api Modules complete methods list](#api-modules-complete-methods-list)
- [Install](#install)
- [Use](#use)
    + [Import library for node projects](#import-library-for-node-projects)
    + [Import library for browser projects](#import-library-for-browser-projects)
- [Authentication JS-API](#authentication-js-api)
  * [Login](#login)
    + [Login with Username and Password BPM and ECM](#login-with-username-and-password-bpm-and-ecm)
      - [Example](#example)
    + [Login with Username and Password ECM](#login-with-username-and-password-ecm)
      - [Example](#example-1)
    + [Login with ticket](#login-with-ticket)
      - [Login with ticket ECM](#login-with-ticket-ecm)
      - [Example](#example-2)
      - [Login with ticket ECM/BPM as parameter in the constructor](#login-with-ticket-ecmbpm-as-parameter-in-the-constructor)
        * [Example](#example-3)
    + [Login with Username and Password BPM](#login-with-username-and-password-bpm)
    + [Example](#example-4)
    + [Login with OAUTH2 Alfresco authorization server](#login-with-oauth2-alfresco-authorization-server)
  * [Implicit Flow](#implicit-flow)
      - [oauth2 properties](#oauth2-properties)
      - [Events](#events)
    + [Example](#example-5)
    + [Example skip login form](#example-skip-login-form)
  * [Password Flow](#password-flow)
    + [Example](#example-6)
    + [Example](#example-7)
  * [Logout](#logout)
    + [Example](#example-8)
  * [isLoggedIn](#isloggedin)
    + [Example](#example-9)
  * [Get tickets](#get-tickets)
  * [Events login/logout](#events-loginlogout)
    + [Example](#example-10)
- [Custom Endpoint](#custom-endpoint)
  * [Example](#example-11)
- [ECM](#ecm)
  * [Get Node  content](#get-node--content)
    + [Example](#example-12)
  * [Get File or Folder Info](#get-file-or-folder-info)
    + [Example](#example-13)
  * [Get Folder Children Info](#get-folder-children-info)
    + [Example](#example-14)
  * [Create Folder](#create-folder)
    + [Example](#example-15)
    + [Example](#example-16)
  * [Upload File](#upload-file)
    + [Example](#example-17)
  * [Events Upload File](#events-upload-file)
    + [Example](#example-18)
  * [Delete File or Folder](#delete-file-or-folder)
    + [Example](#example-19)
  * [Delete File or Folder Permanent](#delete-file-or-folder-permanent)
    + [Example](#example-20)
  * [Get thumbnail Url](#get-thumbnail-url)
    + [Example](#example-21)
  * [Get preview Url](#get-preview-url)
    + [Example](#example-22)
  * [Get content Url](#get-content-url)
    + [Example](#example-23)
  * [Custom web scripts call](#custom-web-scripts-call)
    + [Parameters](#parameters)
- [BPM](#bpm)
  * [Task Api](#task-api)
    + [List Task](#list-task)
      - [Parameters](#parameters-1)
      - [Example](#example-24)
    + [Get Task](#get-task)
      - [Parameters](#parameters-2)
      - [Example](#example-25)
    + [Filter Task](#filter-task)
      - [Parameters](#parameters-3)
      - [Example](#example-26)
    + [Complete Task](#complete-task)
      - [Parameters](#parameters-4)
      - [Example](#example-27)
    + [Get Task Form](#get-task-form)
      - [Parameters](#parameters-5)
      - [Example](#example-28)
    + [Complete Task Form](#complete-task-form)
      - [Parameters](#parameters-6)
      - [Example](#example-29)
  * [Process Api](#process-api)
    + [Get Process Instances](#get-process-instances)
      - [Parameters](#parameters-7)
      - [Example](#example-30)
  * [Models Api](#models-api)
    + [Get Model](#get-model)
      - [Parameters](#parameters-8)
      - [Example](#example-31)
  * [Report Api](#report-api)
    + [Create default Reports](#create-default-reports)
      - [Parameters](#parameters-9)
      - [Example](#example-32)
    + [Get Reports](#get-reports)
      - [Parameters](#parameters-10)
      - [Example](#example-33)
    + [Report Params](#report-params)
      - [Parameters](#parameters-11)
      - [Example](#example-34)
  * [Report Process Definitions](#report-process-definitions)
      - [Parameters](#parameters-12)
      - [Example](#example-35)
  * [Tasks of process definition](#tasks-of-process-definition)
      - [Parameters](#parameters-13)
      - [Example](#example-36)
  * [Generate reports](#generate-reports)
      - [Parameters](#parameters-14)
      - [Example](#example-37)
  * [Update report details](#update-report-details)
      - [Parameters](#parameters-15)
      - [Example](#example-38)
  * [Export to csv](#export-to-csv)
      - [Parameters](#parameters-16)
      - [Example](#example-39)
  * [Save Report](#save-report)
      - [Parameters](#parameters-17)
      - [Example](#example-40)
  * [Delete report](#delete-report)
      - [Parameters](#parameters-18)
      - [Example](#example-41)
- [Error Events](#error-events)
  * [Example](#example-42)
- [Development](#development)
- [Release History](#release-history)

<!-- tocstop -->

<!-- markdown-toc end -->

# Full documentation of all the methods of each API

- [Authentication Services](/src/alfresco-auth-rest-api)
- [Content Services](/src/alfresco-core-rest-api)
- [Process Services](/src/alfresco-activiti-rest-api)
- [ContentCMN](/src/alfresco-private-rest-api)
- [Content Search](/src/alfresco-search-rest-api)

# Prerequisites

To correctly use the alfresco js api the minimal supported version are:

- 5.2.a-EA Alfresco Platform Repository (version [5.2.a-EA](https://wiki.alfresco.com/wiki/Community_file_list_201606-EA) or newer)
- 1.5 Activiti

# Node
To correctly use the alfresco-js-api in node check that on your machine is running Node version 5.0.0 or higher.

# Api Modules complete methods list

- [Authentication API](/src/alfresco-auth-rest-api)
- [Core API](/src/alfresco-core-rest-api)
- [Governance core API](/src/alfresco-gs-core-rest-api)
- [Governance classification API](/src/alfresco-gs-classification-rest-api)
- [Discovery API](/src/alfresco-discovery-rest-api)
- [Search API](/src/alfresco-search-rest-api)
- [Activiti API](/src/alfresco-activiti-rest-api)
- [Mock API](/test/mockObjects)

# Install


Installer for browser versions:

```sh
npm install --save alfresco-js-api
```

Installer for node versions:

```sh
npm install --save alfresco-js-api-node
```


# Use

### Import library for node projects

```javascript
var AlfrescoApi = require('alfresco-js-api-node');
```

### Import library for browser projects

```html
    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.min.js"></script>

    or for not minify version

    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.js"></script>
```


# Authentication JS-API

## Login

AlfrescoApi({alfrescoHost, activitiHost, contextRoot, ticket});

Property | Description  | default value|
------------- | ------------- | -------------|
hostEcm| (Optional value The Ip or Name of the host where your Alfresco instance is running )|http://127.0.0.1:8080 |
hostBpm| (Optional value The Ip or Name of the host where your Activiti instance is running )|http://127.0.0.1:9999 |
authType|  (Optional value can be 'BASIC' or 'OAUTH') | 'BASIC'|
oauth2|  (Optional configuration for SSO) ||
contextRoot| (Optional value that define the context Root of the Alfresco ECM API default value is alfresco )|alfresco |
contextRootBpm| (Optional value that define the context Root of the Activiti API default value is activiti-app )|alfresco |
provider| (Optional value default value is ECM. This parameter can accept as value ECM BPM or ALL to use the API and Login in the ECM, Activiti BPM or Both )|alfresco |
ticket| (Optional only if you want login with the ticket see example below)| |
disableCsrf| To disable CSRF Token to be submitted. Only for Activiti call.| false |
withCredentials| (Optional configuration for SSO, requires CORS on ECM) |false

### Login with Username and Password BPM and ECM

#### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ provider:'ALL' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login in  BPM and ECM performed ');
}, function (error) {
    console.error(error);
});
```


### Login with Username and Password ECM

#### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi();

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login ticket:' + data);
}, function (error) {
    console.error(error);
});

//The output will be: API called successfully Login ticket: TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1

```

### Login with ticket

If you already know thw ticket when you invoke the constructor you can pass it as parameter in the constructor otherwise you can call the login with ticket that will validate the ticket against the server


#### Login with ticket ECM

This authentication validate also the ticket against the server

#### Example
```javascript
var ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

this.alfrescoJsApi.loginTicket(ticket).then(function (data) {
             console.log('valid ticket you are logged in');
         }, function (error) {
             console.error(error);
         });
```

#### Login with ticket ECM/BPM as parameter in the constructor

With this authentication the ticket is not validated against the server

##### Example
```javascript

//Login ticket ECM
this.alfrescoJsApi = new AlfrescoApi({ ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',  hostEcm:'http://127.0.0.1:8080'});

//Login ticket BPM
this.alfrescoJsApi = new AlfrescoApi({ ticketBpm: 'Basic YWRtaW46YWRtaW4=',  hostBpm:'http://127.0.0.1:9999'});

//Login ticket ECM and BPM
this.alfrescoJsApi = new AlfrescoApi({ ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', ticketBpm: 'Basic YWRtaW46YWRtaW4=',  hostEcm:'http://127.0.0.1:8080',  hostBpm:'http://127.0.0.1:9999'});
```

### Login with Username and Password BPM

### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ provider:'BPM' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login in Activiti BPM performed ');
}, function (error) {
    console.error(error);
});

```
### Login with OAUTH2 Alfresco authorization server

## Implicit Flow

If your want to be redirect to the authorization server and login there you can use the implicit flow to login

#### oauth2 properties

Property | Description  | default value|
------------- | ------------- | -------------|
host| Your oauth2 server URL| null |
clientId| Your clientId oauth2 | null |
secret| Your secret oauth2| null |
scope| Your scope | null |
implicitFlow| true/false | false |
redirectUri|  url to be redirect after login| null|
redirectLogout|  url to be redirect after logout optional, if is nor present the redirectUri will be used| null|
refreshTokenTimeout|  millisecond value, after how many millisecond youw ant refresh the token| 40000|
redirectSilentIframeUri|  url to be redirect after silent refresh login| /assets/silent-refresh.html |
silentLogin|  direct execute the implicit login without the need od call this.alfrescoJsApi.implicitLogin() method|   false|


The alfresco-js-api will automatically redirect you to the login page anf refresh the token if necessary

#### Events

Property | Description  | default value|
------------- | ------------- | -------------|
implicit_redirect| triggered when the user is redirect to the auth server return url parameter of the redirect |  |
discovery| triggered when all the openId discovery url phase is terminated returnl an object with all the discovered url |  |
token_issued| triggered when a new token is issued|  |

The alfresco-js-api will automatically redirect you to the login page anf refresh the token if necessary


### Example

```javascript
this.alfrescoJsApi = new AlfrescoApi({
        oauth2: {
            host: 'HOST_OAUTH2_SERVER',
            clientId: 'YOUR_CLIENT_ID',
            secret: 'SECRET',
            scope: 'openid',
            implicitFlow: true,
            redirectUri: 'YOUR_HOME_APP_URL',
            silentRefreshTimeout: '600000' //Optional parameter 10 minutes default value
        },
        authType: 'OAUTH',
        provider: 'ALL'
});

this.alfrescoJsApi.implicitLogin();

```

### Example skip login form

```javascript
this.alfrescoJsApi = new AlfrescoApi({
        oauth2: {
            host: 'HOST_OAUTH2_SERVER',
            clientId: 'YOUR_CLIENT_ID',
            secret: 'SECRET',
            scope: 'openid',
            implicitFlow: true,
            redirectUri: 'YOUR_HOME_APP_URL',
            silentRefreshTimeout: '600000' //Optional parameter 10 minutes default value,
            silentLogin: true
        },
        authType: 'OAUTH',
        provider: 'ALL'
});

```


## Password Flow

If your auth endpoint is different from the standard one "/oauth/token" you can override it through the property authPath

### Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({
        oauth2: {
            host: 'HOST_OAUTH2_SERVER',
            clientId: 'YOUR_CLIENT_ID',
            secret: 'SECRET',
            authPath:'my-custom-auth-endpoint/token'
        },
        authType: 'OAUTH',
        provider: 'ALL'
    });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
   console.log('API called successfully Login in with authorization server performed ');
}, function (error) {
   console.error(error);
});

```

After the login if you want refresh your token you can use this call

### Example

```javascript
this.alfrescoJsApi.refreshToken()then(function (data) {
    console.log('Your token has been refreshed');
 }, function (error) {
    console.error(error);
 });
```

## Logout

logout()

### Example

```javascript

this.alfrescoJsApi.logout().then(function (data) {
    console.log('Successfully Logout');
}, function (error) {
    console.error('Possible ticket already expired');
});

```

## isLoggedIn

isLoggedIn()

> return true if you are logged in false if you are not.

### Example

```javascript

var isLoggedIn = this.alfrescoJsApi.isLoggedIn();

if (isLoggedIn) {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}

```
## Get tickets

getTicketEcm()

>After the log in you can retrieve you ECM ticket

```javascript
 var ecmTicket = this.alfrescoJsApi.getTicketEcm() ;
 console.log('This is your  ECM ticket  ' + ecmTicket);

```

getTicketBpm()

>After the log in you can retrieve you BPM ticket

```javascript

 var bpmTicket  = this.alfrescoJsApi.getTicketBpm();
 console.log('This is your BPM ticket ' + bpmTicket);
```

## Events login/logout

>  The login/logout are also an EventEmitter which you can register to listen to any of the following event types:
* unauthorized (If this event is triggered a call to the Api was unauthorized)
* success (If this event is triggered the login was success you can use this event instead the login promise)
* logout (If this event is triggered the client is successfully logout)

### Example

```javascript

this.alfrescoJsApi.login('admin', 'admin').on('unauthorized', function(){
    console.log('You are unauthorized you can use this event to redirect to login');
});

this.alfrescoJsApi.login('admin', 'admin').on('success', function(){
    console.log('Success Login');
});

this.alfrescoJsApi.logout().on('logout', function(){
    console.log('Successfully Logout');
});
```

# Custom Endpoint

Content service and process service has two different clients:

-  this.alfrescoJsApi.bpmClient
-  this.alfrescoJsApi.ecmClient

Both client expose a method ***callApi**


```javascript
    callApi(path: string, httpMethod: string, pathParams?: any, queryParams?: any, headerParams?: any, formParams?: any, bodyParam?: any, authNames?: string[], contentTypes?: string[], accepts?: string[], returnType?: any, contextRoot?: string, responseType?: string): Promise<any>;
```

If you want call your custom rest point in one of those two service use the corrispondin client. 

## Example

```javascript

    this.alfrescoJsApi.bpmClient.callApi(
        '/api/enterprise/app-version', 'GET',
        {}, {}, {}, {}, {},
        [],  ['application/json'], ['application/json'], {'String': 'String'}
    )

 ```
        

# ECM

A complete list of all the ECM methods is available here : [Core API](/src/alfresco-core-rest-api).
Below you can find some common examples.

## Get Node  content

getFileContent(nodeId, opts)

>Returns the file content of the node with identifier **nodeId**.

 ### Example
```javascript

var nodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.core.nodesApi.getFileContent(nodeId).then(function(data) {
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

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.getNodeInfo(fileOrFolderId).then(function (data) {
    console.log('This is the name' + data.name );
}, function (error) {
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

var folderNodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.getNodeChildren(folderNodeId).then(function (data) {
    console.log('The number of children in this folder are ' + data.list.pagination.count );
}, function (error) {
    console.log('This node does not exist');
});

```
## Create Folder

createFolder(name, relativePath, nodeIdParentFolder, opts)

>createFolder return a promise that is resolved if the folder is created and {error} if rejected.
You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  as nodeIdParentFolder

### Example

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

createFolderAutoRename(name, relativePath, nodeIdParentFolder, opts)
>is the same of createFolder(name, relativePath, nodeId, {autoRename: true}) is just syntactic sugar
 You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  as nodeIdParentFolder

### Example

```javascript

this.alfrescoJsApi.nodes.createFolderAutoRename('newFolderName').then(function (data) {
    console.log('The folder is created in root');
}, function (error) {
    console.log('Error in creation of this folder' + error);
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

The default behaviour of the Upload API will not create any thumbnail.
In order to create a thumbnail you have to perform to pass the parameter ```javascript{renditions: 'doclib'}```  as in the  example below.
This parameter will basically perform also a call to the Rendition API.
For more information about the Rendition API :
* [Rendition API](/src/alfresco-core-rest-api/docs/Rendition.md)
* [Rendition service Wiki](https://wiki.alfresco.com/wiki/Rendition_Service)

```javascript

var fs = require('fs');

var fileToUpload = fs.createReadStream('./folderA/folderB/newFile.txt');

this.alfrescoJsApi.upload.uploadFile(fileToUpload, null, null, null, {renditions: 'doclib'})
    .then(function () {
        console.log('File Uploaded in the root');
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


## Events Upload File

>  The uploadFile is also an EventEmitter which you can register to listen to any of the following event types:
* progress
* success
* abort
* error
* unauthorized

### Example

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

## Delete File or Folder

deleteNode(fileOrFolderId)

>Delete File/Folder with the identifier nodeId, if the nodeId is a folder, then its children are also deleted
Deleted nodes move to the trash bin is still possible to recover it

### Example

```javascript

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

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

var fileOrFolderId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

this.alfrescoJsApi.nodes.deleteNodePermanent(fileOrFolderId).then(function (data) {
    console.log('The file/folder is deleted');
}, function (error) {
    console.log('This node does not exist');
});

```

## Get thumbnail Url

getDocumentThumbnailUrl(documentId)

### Example

```javascript

var thumbnailUrl = this.alfrescoJsApi.content.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get preview Url

getDocumentPreviewUrl(documentId)

### Example

```javascript

var previewUrl = this.alfrescoJsApi.content.getDocumentPreviewUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get content Url

getContentUrl(documentId)

### Example

```javascript

var contentUrl = this.alfrescoJsApi.content.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

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

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/alfresco/service/mytasks

this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', 'mytasks').then(function (data) {
   console.log('Data received form http://127.0.01:8080/alfresco/service/mytasks' + data);
}, function (error) {
   console.log('Error' + error);
});

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/service/mytasks

this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', 'mytasks', null, 'share').then(function (data) {
   console.log('Data received form http://127.0.01:8080/share/service/mytasks' + data);
}, function (error) {
   console.log('Error' + error);
});

//Call a GET on a Web Scripts available at the following URIs: http://127.0.01:8080/share/differentServiceSlug/mytasks

this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', 'mytasks', null, 'share', 'differentServiceSlug').then(function (data) {
   console.log('Data received form http://127.0.01:8080/share/differentServiceSlug/mytasks' + data);
}, function (error) {
   console.log('Error' + error);
});

```

# BPM

A complete list of all the BPM methods is available her[Activiti API](/src/alfresco-activiti-rest-api).
Below you can find some common examples.

## Task Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Task Api documentation](/src/alfresco-activiti-rest-api/docs/TaskApi.md)

### List Task

listTasks(requestNode)

>return a list of task based on the requestNode query

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **requestNode** | [**Representation**](/src/alfresco-activiti-rest-api/docs/TaskQueryRequestRepresentation.md)| requestNode

#### Example

```javascript
var requestTasks = new this.alfrescoJsApi.activiti.TaskQueryRequestRepresentation();

this.alfrescoJsApi.activiti.taskApi.listTasks(requestTasks).then(function (data) {
 console.log('listTasks ' + data);
}, function (error) {
 console.log('Error' + error);
});
```

### Get Task

getTask(taskId)

>return the [**TaskRepresentation**](/src/alfresco-activiti-rest-api/docs/TaskRepresentation.md)  of single task by id

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId

#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.getTask(taskId).then(function (data) {
    console.log('Task representation ' + data);
}, function (error) {
    console.log('Error' + error);
});
```

### Filter Task

filterTasks(requestTasks)

>return the [**ResultListDataRepresentation**](/src/alfresco-activiti-rest-api/docs/ResultListDataRepresentation.md) that is a list of all the task filered

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **requestTasks** | [**TaskFilterRequestRepresentation**](/src/alfresco-activiti-rest-api/docs/TaskFilterRequestRepresentation.md)| requestTasks


#### Example

```javascript

var requestTasks = new this.alfrescoJsApi.activiti.TaskFilterRequestRepresentation();
requestTasks.appDefinitionId = 1;

this.alfrescoJsApi.activiti.taskApi.filterTasks(requestTasks).then(function (data) {
    console.log('Task filter list ' + data);
}, function (error) {
    console.log('Error' + error);
});
```

### Complete Task

completeTask(taskId)

>To complete a task (standalone or without a task form) :

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId

#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.completeTask(taskId).then(function () {
    console.log('Task completed');
}, function (error) {
    console.log('Error' + error);
});
```
### Get Task Form

getTaskForm(taskId)

>Retrieve the Task Form representation. [**FormDefinitionRepresentation**](/src/alfresco-activiti-rest-api/docs/FormDefinitionRepresentation.md)

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId

#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.getTaskForm(taskId).then(function (data) {
   console.log('Task form representation' + data);
}, function (error) {
   console.log('Error' + error);
});
```

### Complete Task Form

completeTaskForm(taskId, completeTaskFormRepresentation)

>Complete a Task Form

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **taskId** | **String**| taskId
 **completeTaskFormRepresentation** | [**CompleteFormRepresentation**](/src/alfresco-activiti-rest-api/docs/CompleteFormRepresentation.md)| completeTaskFormRepresentation

#### Example

```javascript

var taskId = '10'; // String | taskId

this.alfrescoJsApi.activiti.taskApi.completeTaskForm(taskId, completeTaskFormRepresentation).then(function () {
    console.log('Task completed');
}, function (error) {
    console.log('Error' + error);
});
```

## Process Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Process Api documentation](/src/alfresco-activiti-rest-api/docs/ProcessApi.md)


### Get Process Instances

getProcessInstances(requestNode)

>Retrieve a list of process instances [**ResultListDataRepresentation**](/src/alfresco-activiti-rest-api/docs/ResultListDataRepresentation.md)

#### Parameters

Name | Type | Description
------------- | ------------- | -------------
 **requestNode** | [**ProcessFilterRequestRepresentation**](/src/alfresco-activiti-rest-api/docs/ProcessFilterRequestRepresentation.md)| requestNode

#### Example

```javascript
var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then(function (data) {
    console.log('All processes' + data);
}, function (error) {
    console.log('Error' + error);
});
```

Filtered process:

```javascript
 var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

requestNode.page = 0;
requestNode.sort = 'created-desc';
requestNode.state = 'completed';

this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then(function (data) {
   console.log('All processes completed' + data);
}, function (error) {
   console.log('Error' + error);
});
```

## Models Api

Below you can find some example relative to the Activiti process api for all the possible method go to [Task Api documentation](/src/alfresco-activiti-rest-api/docs/ModelsApi.md)

### Get Model

getModel(modelId, opts)

>To retrieve details about a particular model (process, form, decision rule or app) return a [**ModelRepresentation**](ModelRepresentation.md)

#### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId |
 **includePermissions** | **Boolean**| includePermissions | [optional]

#### Example
```javascript

var opts = {
    'filter': 'myReusableForms',
    'modelType': 2
};

this.alfrescoJsApi.activiti.modelsApi.getModels(opts).then(function (data) {
    console.log('All your reusable forms' + data);
 }, function (error) {
    console.log('Error' + error);
 });
```

## Report Api

Below you can find some example relative to the Activiti report api for all the possible method go to [Report Api documentation](/src/alfresco-activiti-rest-api/docs/ReportApi.md)

### Create default Reports

createDefaultReports()

>Create the default reports

#### Parameters

No parameters required.

#### Example

```javascript

this.alfrescoJsApi.activiti.reportApi.createDefaultReports();
```

### Get Reports

getReportList()

> Retrieve the available report list

#### Parameters

No parameters required.

#### Example

```javascript

this.alfrescoJsApi.activiti.reportApi.getReportList();
```

### Report Params

getReportParams(reportId)

> Retrieve the parameters referring to the reportId.

#### Parameters

Name | Type | Description  | Notes|
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||

#### Example

```javascript

var reportId = "1"; // String | reportId

this.alfrescoJsApi.activiti.reportApi.getReportParams(reportId);
```

## Report Process Definitions

getProcessDefinitions()

> Retrieve the process definition list for all the apps.

#### Parameters

No parameters required.

#### Example

```javascript

this.alfrescoJsApi.activiti.reportApi.getProcessDefinitions();
```

## Tasks of process definition

getTasksByProcessDefinitionId(reportId, processDefinitionId)

> Retrieves all tasks that refer to the processDefinitionId

#### Parameters
Name | Type | Description  | Notes|
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **processDefinitionId** | **String**| process definition id ||

#### Example

```javascript

var reportId = "1"; // String | reportId
var processDefinitionId = "1"; // String | processDefinitionId

this.alfrescoJsApi.activiti.reportApi.getTasksByProcessDefinitionId(reportId, processDefinitionId);
```

## Generate reports

getReportsByParams(reportId, paramsQuery)

> Generate the reports based on the input parameters

#### Parameters
Name | Type | Description  | Notes|
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **paramsQuery** | **Object**| Query parameters ||

#### Example

```javascript

var reportId = "1"; // String | reportId
var paramsQuery = {status: 'ALL'}; // Object | paramsQuery

this.alfrescoJsApi.activiti.reportApi.getReportsByParams(reportId, paramsQuery);
```
## Update report details

updateReport(reportId, name)

> Update the report details

#### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **name** | **String**| The report name ||

#### Example

```javascript

var reportId = "1"; // String | reportId
var name = "new Fake name"; // String | reportId

this.alfrescoJsApi.activiti.reportApi.updateReport(reportId, name);
```

## Export to csv
exportToCsv(reportId, queryParms)

> Export a report as csv

#### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **queryParms** | **Object**| Query parameters ||

#### Example
```javascript

var reportId = "1"; // String | reportId
var queryParms = {
            'processDefinitionId': 'TEST:99:999',
            'dateRange': {
                'startDate': '2017-01-01T00:00:00.000Z',
                'endDate': '2017-01-24T23:59:59.999Z',
                'rangeId': 'currentYear'
            },
            'slowProcessInstanceInteger': 10,
            'status': 'All',
            '__reportName': 'FAKE_REPORT_NAME'
        };

this.alfrescoJsApi.activiti.reportApi.exportToCsv(reportId, queryParms);
```

## Save Report

saveReport(reportId, queryParams)

> Save a report

#### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------|
 **reportId** | **String**| reportId ||
 **queryParms** | **Object**| Query parameters ||

#### Example
```javascript

var reportId = "1"; // String | reportId
var queryParms = {
            'processDefinitionId': 'TEST:99:999',
            'dateRange': {
                'startDate': '2017-01-01T00:00:00.000Z',
                'endDate': '2017-01-24T23:59:59.999Z',
                'rangeId': 'currentYear'
            },
            'slowProcessInstanceInteger': 10,
            'status': 'All',
            '__reportName': 'FAKE_REPORT_NAME'
        };

this.alfrescoJsApi.activiti.reportApi.saveReport(reportId, queryParms);
```

## Delete report
deleteReport(reportId)

> Delete a report

#### Parameters
Name | Type | Description  | Notes |
------------- | ------------- | ------------- | ------------- |
 **reportId** | **String**| reportId | |

#### Example
```javascript

var reportId = "1"; // String | reportId

this.alfrescoJsApi.activiti.reportApi.deleteReport(reportId);
```

# Error Events

The alfresco-js-api has an error handler event where you can subscribe

## Example
```javascript
    this.alfrescoJsApi.on('error', (error) => {
        console.log(error)
    })
```

# Development

* To run the build

    ```$ npm run build```

* To run the build in watch mode

    ```$ npm run watchify```

* To run the test

    ```$ npm run test```

* To run the test coverage

    ```$ npm run coverage```


# Release History

Read the [Changelog] (./CHANGELOG.md)

