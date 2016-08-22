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

<!-- tocstop -->

<!-- markdown-toc end -->

# Basic usage For node projects

```javascript
var AlfrescoMockJsApi = require('alfresco-js-api').Mock;
```

# ECM

## Mock Auth Api

var AuthResponseMock = require('alfresco-js-api').Mock.Auth

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
var AlfrescoApi = require('alfresco-js-api');
var expect = require('chai').expect;
var AuthResponseMock = require('alfresco-js-api').Mock.Auth;

var host = 'http://127.0.0.1:8080';
var authResponseMock = new AuthResponseMock(host);

authResponseMock.get201Response('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

var alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: host
});

alfrescoJsApi.login().then((data) => {
    expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    done();
});
```

## Mock Node Api

var NodeMock = require('alfresco-js-api').Mock.Node

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
var AlfrescoApi = require('alfresco-js-api');
var expect = require('chai').expect;
var AuthResponseMock = require('alfresco-js-api').Mock.Auth;
var NodeMock = require('alfresco-js-api').Mock.Node;


var host = 'http://127.0.0.1:8080';
var authResponseMock = new AuthResponseMock(host);
var nodeMock = new NodeMock(host);

authResponseMock.get201Response();

var alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

alfrescoJsApi.login();

nodeMock.get200CreationFolder();

alfrescoJsApi.node.createFolder('newFolder').then(function (data) {
    expect(data.entry.name).to.be.equal('newFolder');
    expect(data.entry.isFolder).to.be.equal(true);
    done();
});
```

## Mock Upload Api

var UploadMock = require('alfresco-js-api').Mock.Upload

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
var AlfrescoApi = require('alfresco-js-api');
var expect = require('chai').expect;
var AuthResponseMock = require('alfresco-js-api').Mock.Auth;
var UploadMock = require('alfresco-js-api').Mock.Upload;


var host = 'http://127.0.0.1:8080';
var authResponseMock = new AuthResponseMock(host);
var uploadMock = new UploadMock(host);

authResponseMock.get201Response();

var alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

alfrescoJsApi.login();

uploadMock.get201CreationFile();

var file = fs.createReadStream('./test/mockObjects/testFile.txt');

alfrescoJsApi.upload.uploadFile(file).then(function (data) {
    expect(data.entry.isFile).to.be.equal(true);
    expect(data.entry.name).to.be.equal('testFile.txt');
    done();
});

```


## Mock WebScript Api

var WebScriptMock = require('alfresco-js-api').Mock.WebScript

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
var AlfrescoApi = require('alfresco-js-api');
var expect = require('chai').expect;
var AuthResponseMock = require('alfresco-js-api').Mock.Auth;
var WebScriptMock = require('alfresco-js-api').Mock.WebScript;

var host = 'http://127.0.0.1:8080';
var contextRoot = 'script';
var servicePath = 'alfresco';
var scriptPath = 'testWebScript';

var authResponseMock = new AuthResponseMock(host);

authResponseMock.get201Response();

var alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

var webScriptMock = new WebScriptMock(host, contextRoot, servicePath, scriptPath);

webScriptMock.get200Response();

alfrescoJsApi.webScript.executeWebScript('GET', scriptPath, null, contextRoot, servicePath)
.then((data)=> {
   expect(data).to.not.be.undefined;
});

```


## Mock Tags Api

var TagMock = require('alfresco-js-api').Mock.Tag

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
var AlfrescoApi = require('alfresco-js-api');
var expect = require('chai').expect;
var AuthResponseMock = require('alfresco-js-api').Mock.Auth;
var TagMock = require('alfresco-js-api').Mock.Tag;

var host = 'http://127.0.0.1:8080';

var authResponseMock = new AuthResponseMock(host);

authResponseMock.get201Response();

var alfrescoJsApi = new AlfrescoApi({
    username: 'admin',
    password: 'admin',
    hostEcm: this.host
});

var tagMock = new TagMock(host);

tagMock.get200Response();

this.alfrescoJsApi.core.tagsApi.getTags().then((data)=> {
   expect(data).to.not.be.undefined;
});

```

# BPM

## Mock Auth Api

var AuthResponseMock = require('alfresco-js-api').Mock.Activiti.Auth

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

var ProcessMock = require('alfresco-js-api').Mock.Activiti.Process

processMock = new ProcessMock(host);

Method | Description  |
------------- | ------------- |
processMock.get200Response()| | 
processMock.rec()| | 
processMock.play()| |
processMock.cleanAll()| | 

## Mock Tasks Api

var TasksMock = require('alfresco-js-api').Mock.Activiti.Tasks

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

var ModelsMock = require('alfresco-js-api').Mock.Activiti.Models

modelsMock = new ModelsMock(host);

Method | Description  |
------------- | ------------- |
modelsMock.get200getModels()||
modelsMock.rec()| | 
modelsMock.play()| |
modelsMock.cleanAll()| |
