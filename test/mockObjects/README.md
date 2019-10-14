# Alfresco Mock Rest Api

Alfresco Mock API - is a suite of class to mock the alfresco-core-rest-api alfresco-auth-rest-api

Alfresco Mock API use [Nock](https://github.com/node-nock/nock) which is an HTTP mocking and expectations library for Node.js
                                                                

<!-- markdown-toc start - Don't edit this section.  npm run toc to generate it-->

<!-- toc -->

- [Basic usage For node projects](#basic-usage-for-node-projects)
- [ECM](#ecm)
  * [Mock Auth Api](#mock-auth-api)
    + [Example](#example)
  * [Mock Node Api](#mock-node-api)
    + [Example](#example-1)
  * [Mock Upload Api](#mock-upload-api)
    + [Example](#example-2)
  * [Mock WebScript Api](#mock-webscript-api)
    + [Example](#example-3)
  * [Mock Tags Api](#mock-tags-api)
    + [Example](#example-4)
- [BPM](#bpm)
  * [Mock Auth Api](#mock-auth-api-1)
  * [Mock Process Api](#mock-process-api)
  * [Mock Tasks Api](#mock-tasks-api)
  * [Mock Models Api](#mock-models-api)
  * [Mock User Filter Api](#mock-user-filter-api)

<!-- tocstop -->

<!-- markdown-toc end -->

# Basic usage For node projects

```javascript
let AlfrescoMockJsApi = require('@alfresco/js-api').Mock;
```

# ECM

## Mock Auth Api

let AuthResponseMock = require('@alfresco/js-api').Mock.Auth

authResponseMock = new AuthResponseMock(host, username, password);
Property | default value| 
------------- | -------------|
username| admin |
password| admin |

Method | Description  |
------------- | ------------- |
authResponseMock.authResponseMock.get201Response(forceTicket);| | 
authResponseMock.get403Response()| | 
authResponseMock.get400Response()| | 
authResponseMock.get401Response()| | 
authResponseMock.get204ResponseLogout()| | 
authResponseMock.get404ResponseLogout()| | 
authResponseMock.rec()| | 
authResponseMock.play()| | 
authResponseMock.cleanAll()| | 

### Example 

```javascript
let AlfrescoApi = require('@alfresco/js-api');
let expect = require('chai').expect;
let AuthResponseMock = require('@alfresco/js-api').Mock.Auth;

let host = 'http://127.0.0.1:8080';
let authResponseMock = new AuthResponseMock(host);

authResponseMock.get201Response('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

let alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: host
});

alfrescoJsApi.login().then((data: any) => {
    expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    done();
});
```

## Mock Node Api

let NodeMock = require('@alfresco/js-api').Mock.Node

nodeMock = new NodeMock(host);

Method | Description  |
------------- | ------------- |
nodeMock.get200ResponseChildren()| | 
nodeMock.get200ResponseSingleFileFolder()| | 
nodeMock.get404ChildrenNotExist()| | 
nodeMock.get404FileFolderNotExist()| | 
nodeMock.get204SuccessfullyDeleted()| | 
nodeMock.get403DeletePermissionDenied()| | 
nodeMock.get404DeleteNotFound()| | 
nodeMock.get404DeletePermanentlyNotFound() | | 
nodeMock.get200CreationFolder()| | 
nodeMock.get409CreationFolderNewNameClashes()| | 
nodeMock.get201CreationFolderNewNameNotClashes()| | 
nodeMock.rec();| | 
nodeMock.play();| | 
nodeMock.cleanAll()| | 

### Example 

```javascript
let AlfrescoApi = require('@alfresco/js-api');
let expect = require('chai').expect;
let AuthResponseMock = require('@alfresco/js-api').Mock.Auth;
let NodeMock = require('@alfresco/js-api').Mock.Node;


let host = 'http://127.0.0.1:8080';
let authResponseMock = new AuthResponseMock(host);
let nodeMock = new NodeMock(host);

authResponseMock.get201Response();

let alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

alfrescoJsApi.login();

nodeMock.get200CreationFolder();

alfrescoJsApi.node.createFolder('newFolder').then(function (data: any) {
    expect(data.entry.name).to.be.equal('newFolder');
    expect(data.entry.isFolder).to.be.equal(true);
    done();
});
```

## Mock Upload Api

let UploadMock = require('@alfresco/js-api').Mock.Upload

uploadMock = new UploadMock(host);

Method | Description  |
------------- | ------------- |
uploadMock.get201CreationFile()| | 
uploadMock.get201CreationFileAutoRename()| | 
uploadMock.get409CreationFileNewNameClashes()| | 
uploadMock.get401Response()| | 
uploadMock.rec()| | 
uploadMock.play()| | 
uploadMock.cleanAll()| | 

### Example 

```javascript
let AlfrescoApi = require('@alfresco/js-api');
let expect = require('chai').expect;
let AuthResponseMock = require('@alfresco/js-api').Mock.Auth;
let UploadMock = require('@alfresco/js-api').Mock.Upload;


let host = 'http://127.0.0.1:8080';
let authResponseMock = new AuthResponseMock(host);
let uploadMock = new UploadMock(host);

authResponseMock.get201Response();

let alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

alfrescoJsApi.login();

uploadMock.get201CreationFile();

let file = fs.createReadStream('./test/mockObjects/testFile.txt');

alfrescoJsApi.upload.uploadFile(file).then(function (data: any) {
    expect(data.entry.isFile).to.be.equal(true);
    expect(data.entry.name).to.be.equal('testFile.txt');
    done();
});

```


## Mock WebScript Api

let WebScriptMock = require('@alfresco/js-api').Mock.WebScript

webScriptMock = new WebScriptMock(host);

Method | Description  |
------------- | ------------- |
webScriptMock.get404Response()| | 
webScriptMock.get401Response()| | 
webScriptMock.get200Response()| | 
webScriptMock.rec()| | 
webScriptMock.play()| | 
webScriptMock.cleanAll()| | 

### Example 

```javascript
let AlfrescoApi = require('@alfresco/js-api');
let expect = require('chai').expect;
let AuthResponseMock = require('@alfresco/js-api').Mock.Auth;
let WebScriptMock = require('@alfresco/js-api').Mock.WebScript;

let host = 'http://127.0.0.1:8080';
let contextRoot = 'script';
let servicePath = 'alfresco';
let scriptPath = 'testWebScript';

let authResponseMock = new AuthResponseMock(host);

authResponseMock.get201Response();

let alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

let webScriptMock = new WebScriptMock(host, contextRoot, servicePath, scriptPath);

webScriptMock.get200Response();

alfrescoJsApi.webScript.executeWebScript('GET', scriptPath, null, contextRoot, servicePath)
.then((data)=> {
   expect(data).to.not.be.undefined;
});

```


## Mock Tags Api

let TagMock = require('@alfresco/js-api').Mock.Tag

tagMock = new TagMock(host);

Method | Description  |
------------- | ------------- |
tagMock.get404Response()| | 
tagMock.get401Response()| | 
tagMock.get200Response()| | 
tagMock.rec()| | 
tagMock.play()| | 
tagMock.cleanAll()| | 

### Example 

```javascript
let AlfrescoApi = require('@alfresco/js-api');
let expect = require('chai').expect;
let AuthResponseMock = require('@alfresco/js-api').Mock.Auth;
let TagMock = require('@alfresco/js-api').Mock.Tag;

let host = 'http://127.0.0.1:8080';

let authResponseMock = new AuthResponseMock(host);

authResponseMock.get201Response();

let alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

let tagMock = new TagMock(host);

tagMock.get200Response();

this.alfrescoJsApi.core.tagsApi.getTags().then((data)=> {
   expect(data).to.not.be.undefined;
});

```

# BPM

## Mock Auth Api

let AuthResponseMock = require('@alfresco/js-api').Mock.Activiti.Auth

authResponseMock = new AuthResponseMock(host);

Method | Description  |
------------- | ------------- |
authResponseMock.get201Response(forceTicket);| | 
authResponseMock.get200Response()| | 
authResponseMock.get200ResponseLogout()| | 
authResponseMock.rec()| | 
authResponseMock.play()| |
authResponseMock.cleanAll()| | 


## Mock Process Api

let ProcessMock = require('@alfresco/js-api').Mock.Activiti.Process

processMock = new ProcessMock(host);

Method | Description  |
------------- | ------------- |
processMock.get200Response()| | 
processMock.rec()| | 
processMock.play()| |
processMock.cleanAll()| | 

## Mock Tasks Api

let TasksMock = require('@alfresco/js-api').Mock.Activiti.Tasks

tasksMock = new TasksMock(host);

Method | Description  |
------------- | ------------- |
tasksMock.get200Response()| | 
tasksMock.get200ResponseGetTask| | 
tasksMock.get404CompleteTask||
tasksMock.get400TaskFilter||
tasksMock.get200TaskFilter||
tasksMock.get200CreateTask()||
tasksMock.get200getTaskForm()||
tasksMock.rec()| | 
tasksMock.play()| |
tasksMock.cleanAll()| |

## Mock Models Api

let ModelsMock = require('@alfresco/js-api').Mock.Activiti.Models

modelsMock = new ModelsMock(host);

Method | Description  |
------------- | ------------- |
modelsMock.get200getModels()||
modelsMock.rec()| | 
modelsMock.play()| |
modelsMock.cleanAll()| |


## Mock User Filter Api

let UserFilters = require('@alfresco/js-api').Mock.Activiti.UserFilters

userFilters = new UserFilters(host);

Method | Description  |
------------- | ------------- |
userFilters.get200getUserTaskFilters()||
userFilters.rec()| | 
userFilters.play()| |
userFilters.cleanAll()| |
