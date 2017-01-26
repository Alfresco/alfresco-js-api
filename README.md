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
    + [Login with Username and Password ECM](#login-with-username-and-password-ecm)
    + [Login with ticket](#login-with-ticket)
      - [Login with ticket ECM](#login-with-ticket-ecm)
      - [Login with ticket ECM/BPM as parameter in the constructor](#login-with-ticket-ecmbpm-as-parameter-in-the-constructor)
    + [Login with Username and Password BPM](#login-with-username-and-password-bpm)
  * [Logout](#logout)
  * [isLoggedIn](#isloggedin)
  * [Get tickets](#get-tickets)
  * [Events login/logout](#events-loginlogout)
- [ECM](#ecm)
  * [Get Node  content](#get-node--content)
  * [Get File or Folder Info](#get-file-or-folder-info)
  * [Get Folder Children Info](#get-folder-children-info)
  * [Create Folder](#create-folder)
  * [Upload File](#upload-file)
  * [Events Upload File](#events-upload-file)
  * [Delete File or Folder](#delete-file-or-folder)
  * [Delete File or Folder Permanent](#delete-file-or-folder-permanent)
  * [Get thumbnail Url](#get-thumbnail-url)
  * [Get preview Url](#get-preview-url)
  * [Get content Url](#get-content-url)
  * [Custom web scripts call](#custom-web-scripts-call)
- [BPM](#bpm)
  * [Task Api](#task-api)
    + [List Task](#list-task)
    + [Get Task](#get-task)
    + [Filter Task](#filter-task)
    + [Complete Task](#complete-task)
    + [Get Task Form](#get-task-form)
    + [Complete Task Form](#complete-task-form)
  * [Process Api](#process-api)
    + [Get Process Instances](#get-process-instances)
  * [Models Api](#models-api)
    + [Get Model](#get-model)
  * [Report Api](#report-api)
    + [Create default Reports](#create-default-reports)
    + [Get Reports](#get-reports)
    + [Report Params](#report-params)
  * [Report Process Definitions](#report-process-definitions)
  * [Tasks of process definition](#tasks-of-process-definition)
  * [Generate reports](#generate-reports)
  * [Update report details](#update-report-details)
  * [Export to csv](#export-to-csv)
  * [Save Report](#save-report)
  * [Delete report](#delete-report)
- [Development](#development)
- [Release History](#release-history)

<!-- tocstop -->

<!-- markdown-toc end -->

# Prerequisites 

To correctly use the alfresco js api the minimal supported version are:

- 5.2.a-EA Alfresco Platform Repository (version [5.2.a-EA](https://wiki.alfresco.com/wiki/Community_file_list_201606-EA) or newer)
- 1.5 Activiti

# Node
To correctly use this component check that on your machine is running Node version 5.0.0 or higher.

# Api Modules complete methods list

- [Authentication API](/src/alfresco-auth-rest-api)
- [Core API](/src/alfresco-core-rest-api)
- [Activiti API](/src/alfresco-activiti-rest-api)
- [Mock API](/test/mockObjects)

# Install
npm install --save alfresco-js-api

# Use

### Import library for node projects

```javascript
var AlfrescoApi = require('alfresco-js-api');
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
contextRoot| (Optional value that define the context Root of the Alfresco ECM API default value is alfresco )|alfresco |
contextRootBpm| (Optional value that define the context Root of the Activiti API default value is activiti-app )|alfresco |
provider| (Optional value default value is ECM. This parameter can accept as value ECM BPM or ALL to use the API and Login in the ECM, Activiti BPM or Both )|alfresco |
ticket| (Optional only if you want login with the ticket see example below)| |
disableCsrf| To disable CSRF Token to be submitted. Only for Activiti call.| false |

### Login with Username and Password BPM and ECM

####Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ provider:'ALL' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login in  BPM and ECM performed ');
}, function (error) {
    console.error(error);
});
```


### Login with Username and Password ECM

####Example
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
 
####Example
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

#####Example
```javascript

//Login ticket ECM
this.alfrescoJsApi = new AlfrescoApi({ ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',  hostEcm:'http://127.0.0.1:8080'});

//Login ticket BPM
this.alfrescoJsApi = new AlfrescoApi({ ticketBpm: 'Basic YWRtaW46YWRtaW4=',  hostBpm:'http://127.0.0.1:9999'});

//Login ticket ECM and BPM 
this.alfrescoJsApi = new AlfrescoApi({ ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', ticketBpm: 'Basic YWRtaW46YWRtaW4=',  hostEcm:'http://127.0.0.1:8080',  hostBpm:'http://127.0.0.1:9999'});
```

### Login with Username and Password BPM

###Example
```javascript
this.alfrescoJsApi = new AlfrescoApi({ provider:'BPM' });

this.alfrescoJsApi.login('admin', 'admin').then(function (data) {
    console.log('API called successfully Login in Activiti BPM performed ');
}, function (error) {
    console.error(error);
});

```

## Logout

logout()

###Example

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

###Example

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

###Example

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

# ECM

A complete list of all the ECM methods is available here : [Core API](/src/alfresco-core-rest-api). 
Below you can find some common examples.

## Get Node  content 

getFileContent(nodeId, opts)
                      
>Returns the file content of the node with identifier **nodeId**.
                    
 ###Example
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

###Example

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
 
###Example

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

###Example

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

###Example

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

###Example

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

###Example

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

###Example

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

###Example

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

###Example

```javascript

var thumbnailUrl = this.alfrescoJsApi.content.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get preview Url
  
getDocumentPreviewUrl(documentId)

###Example

```javascript

var previewUrl = this.alfrescoJsApi.content.getDocumentPreviewUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Get content Url
  
getContentUrl(documentId)

###Example

```javascript

var contentUrl = this.alfrescoJsApi.content.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

```

## Custom web scripts call

For mor information about web scripts read the [Wiki](https://wiki.alfresco.com/wiki/Web_Scripts) and the [Wiki with Web ScriptsExamples](https://wiki.alfresco.com/wiki/Web_Scripts_Examples)

executeWebScript(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath)

>  Anatomy of a Web Script URI  **http(s)://(host):(port)/(contextPath)/(servicePath)/(scriptPath)?(scriptArgs)**
A Web Script is simply a service bound to a URI which responds to HTTP methods such as GET, POST, PUT and DELETE. While using the same underlying code, there are broadly two kinds of Web Scripts.

###Parameters
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

####Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **requestNode** | [**Representation**](/src/alfresco-activiti-rest-api/docs/TaskQueryRequestRepresentation.md)| requestNode 

####Example

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

####Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **taskId** | **String**| taskId 
 
####Example

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

####Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **requestTasks** | [**TaskFilterRequestRepresentation**](/src/alfresco-activiti-rest-api/docs/TaskFilterRequestRepresentation.md)| requestTasks 


####Example

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

####Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **taskId** | **String**| taskId 

####Example

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

####Parameters

Name | Type | Description  
------------- | ------------- | -------------
 **taskId** | **String**| taskId 

####Example

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

####Parameters

Name | Type | Description  
------------- | ------------- | -------------
 **taskId** | **String**| taskId 
 **completeTaskFormRepresentation** | [**CompleteFormRepresentation**](/src/alfresco-activiti-rest-api/docs/CompleteFormRepresentation.md)| completeTaskFormRepresentation 

####Example

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

####Parameters

Name | Type | Description  
------------- | ------------- | ------------- 
 **requestNode** | [**ProcessFilterRequestRepresentation**](/src/alfresco-activiti-rest-api/docs/ProcessFilterRequestRepresentation.md)| requestNode 

####Example

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

####Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **includePermissions** | **Boolean**| includePermissions | [optional] 

####Example
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

####Parameters

No parameters required.

####Example

```javascript

this.alfrescoJsApi.activiti.reportApi.createDefaultReports();
```

### Get Reports

getReportList()

> Retrieve the available report list

####Parameters

No parameters required.

####Example

```javascript

this.alfrescoJsApi.activiti.reportApi.getReportList();
```

### Report Params

getReportParams(reportId)

> Retrieve the parameters referring to the reportId.

####Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |

####Example

```javascript

var reportId = "1"; // String | reportId

this.alfrescoJsApi.activiti.reportApi.getReportParams(reportId);
```

## Report Process Definitions

getProcessDefinitions()

> Retrieve the process definition list for all the apps.

####Parameters

No parameters required.

####Example

```javascript

this.alfrescoJsApi.activiti.reportApi.getProcessDefinitions();
```

## Tasks of process definition

getTasksByProcessDefinitionId(reportId, processDefinitionId)

> Retrieves all tasks that refer to the processDefinitionId

####Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **processDefinitionId** | **String**| process definition id |

####Example

```javascript

var reportId = "1"; // String | reportId
var processDefinitionId = "1"; // String | processDefinitionId

this.alfrescoJsApi.activiti.reportApi.getTasksByProcessDefinitionId(reportId, processDefinitionId);
```

## Generate reports

getReportsByParams(reportId, paramsQuery)

> Generate the reports based on the input parameters

####Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **paramsQuery** | **Object**| Query parameters |

####Example

```javascript

var reportId = "1"; // String | reportId
var paramsQuery = {status: 'ALL'}; // Object | paramsQuery

this.alfrescoJsApi.activiti.reportApi.getReportsByParams(reportId, paramsQuery);
```
## Update report details

updateReport(reportId, name)

> Update the report details

####Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **name** | **String**| The report name |

####Example

```javascript

var reportId = "1"; // String | reportId
var name = "new Fake name"; // String | reportId

this.alfrescoJsApi.activiti.reportApi.updateReport(reportId, name);
```

## Export to csv
exportToCsv(reportId, queryParms)

> Export a report as csv

####Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **queryParms** | **Object**| Query parameters |

####Example
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

####Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |
 **queryParms** | **Object**| Query parameters |

####Example
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

####Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| reportId |

####Example
```javascript

var reportId = "1"; // String | reportId

this.alfrescoJsApi.activiti.reportApi.deleteReport(reportId);
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

