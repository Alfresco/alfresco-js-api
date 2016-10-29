<p align="center">
  <img title="alfresco" alt='alfresco' src='assets/alfresco.png'  width="280px" height="150px"></img>
</p>

Alfresco JS API

_This project provides a JavaScript client API into the v1 Alfresco REST API_

<a name="0.3.7"></a>
# [0.3.7](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.7) (2016-10-29)

## Fix
- [Latest version no longer works due to .d.ts errors #78](https://github.com/Alfresco/alfresco-js-api/issues/78)

<a name="0.3.6"></a>
# [0.3.6](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.6) (2016-10-28)

## Fix
- [separate getRestFieldValues in getRestFieldValues and getRestFieldValuesColumn #71](https://github.com/Alfresco/alfresco-js-api/issues/71)
- [d.ts file doesn't work properly](https://github.com/Alfresco/alfresco-js-api/issues/68)
- [getProfilePicture from activiti api goes in error](https://github.com/Alfresco/alfresco-js-api/issues/64)

New method to retrieve just the profile picture URL

```javascript
this.alfrescoJsApi.activiti.profileApi.getProfilePictureUrl();
```

## Features
- [Activiti process status call](https://github.com/Alfresco/alfresco-js-api/issues/67)
- [add a method in order to retrieve the /task-forms/{task-id}/variables](https://github.com/Alfresco/alfresco-js-api/issues/65)
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskFormsApi.getTaskFormVariables(taskId);
```


```javascript
this.alfrescoJsApi.activiti.profileApi.getProfilePictureUrl();
```

### Example
```javascript

var processModelId = 789; // Integer | processModelId
var processModelHistoryId = 789; // Integer | processModelHistoryId

this.alfrescoJsApi.activiti.modelJsonBpmnApi.getEditorDisplayJsonClient(processModelId);
this.alfrescoJsApi.activiti.modelJsonBpmnApi.getHistoricEditorDisplayJsonClient(processModelId, processModelHistoryId);
```


<a name="0.3.5"></a>
# [0.3.5](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.5) (2016-09-26)

## Fix
- [Library no longer works with ECM](https://github.com/Alfresco/alfresco-js-api/issues/63)
- [Flag to enable/disable CSRF behaviour](https://github.com/Alfresco/alfresco-js-api/issues/62)

<a name="0.3.4"></a>
# [0.3.4](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.4) (2016-09-26)

## Fix
- [csrf token for activiti doesn't work with Node.js](https://github.com/Alfresco/alfresco-js-api/issues/61)

<a name="0.3.3"></a>
# [0.3.3](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.3) (2016-09-26)

## Fix
- [Add csrf token for activiti](https://github.com/Alfresco/alfresco-js-api/issues/59)

## Features

- Various improvements for TypeScript declaration files

<a name="0.3.2"></a>
# [0.3.2](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.2) (2016-09-21)

## Fix
- [Null date fields parsed as invalid dates](https://github.com/Alfresco/alfresco-js-api/issues/50)
- [Requires manual install of several packages](https://github.com/Alfresco/alfresco-js-api/issues/52)
- [Cannot read property hostEcm of undefined](https://github.com/Alfresco/alfresco-js-api/issues/53)

## Features

- Various improvements for TypeScript declaration files

<a name="0.3.1"></a>
# [0.3.1](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.1) (2016-08-29)

## Fix
- [Date parser error with Safari](https://github.com/Alfresco/alfresco-js-api/issues/43)

## Features

- Various improvements for TypeScript declaration files

<a name="0.3.0"></a>
# [0.3.0](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.0) (2016-08-22)

## Features
- [Integration Activiti Api #19](https://github.com/Alfresco/alfresco-js-api/issues/19)
    + [Activiti API](/src/alfresco-activiti-rest-api)

- [Login with ticket and check the ticket against the server #38](https://github.com/Alfresco/alfresco-js-api/issues/38)

```javascript
var ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

this.alfrescoJsApi.loginTicket(ticket).then(function (data) {
             console.log('valid ticket you are logged in');
         }, function (error) {
             console.error(error);
         });
```

## Fix

- [Node properties never parsed #35](https://github.com/Alfresco/alfresco-js-api/issues/35)
- [Thumbnail ask for regenerate and Add image preview #36](https://github.com/Alfresco/alfresco-js-api/issues/36)
- [Dist content is outdated #34](https://github.com/Alfresco/alfresco-js-api/issues/34)


## BREAKING CHANGES

- Constructor and login changed
Separation between constructor and login phase, decoupling login from constructor and host activiti added.

Before:

```javascript
this.alfrescoJsApi = new AlfrescoApi({username, password, alfrescoHost, contextRoot, ticket});
this.alfrescoJsApi.login();
```

After:

```javascript
this.alfrescoJsApi = new AlfrescoApi({hostECM, hostBPM, contextRoot, ticket});
this.alfrescoJsApi.login(username, password);
```

- Hosts configuration

alfrescoHost parameter is now split in two different parameter

Property | Description  | default value|
------------- | ------------- | -------------|
hostEcm| (Optional value The Ip or Name of the host where your Alfresco instance is running )|http://127.0.0.1:8080 |
hostBpm| (Optional value The Ip or Name of the host where your Activiti instance is running )|http://127.0.0.1:9999 |


- Get Ticket

Now the api are able ot auth in BPM and ECM so

Before:

```javascript
this.alfrescoJsApi.getTicket();
```

After:

```javascript
 var ecmTicket = this.alfrescoJsApi.getTicketEcm() ;
 var bpmTicket  = this.alfrescoJsApi.getTicketBpm();
```

-  Login ticket using constructor

Before:

```javascript
this.alfrescoJsApi = new AlfrescoApi({ host :''http://127.0.0.1:8080', ticket :'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1'});
```
    
After:

```javascript

//Login ticket ECM
this.alfrescoJsApi = new AlfrescoApi({ ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',  hostEcm:'http://127.0.0.1:8080'});

//Login ticket BPM
this.alfrescoJsApi = new AlfrescoApi({ ticketBpm: 'Basic YWRtaW46YWRtaW4=',  hostBpm:'http://127.0.0.1:9999'});

//Login ticket ECM and BPM 
this.alfrescoJsApi = new AlfrescoApi({ ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', ticketBpm: 'Basic YWRtaW46YWRtaW4=',  hostEcm:'http://127.0.0.1:8080',  hostBpm:'http://127.0.0.1:9999'});
```

<a name="0.2.2"></a>
# [0.2.2](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.2.2) (2016-07-21)
- [Cannot find module mockAlfrescoApi #29](https://github.com/Alfresco/alfresco-js-api/issues/29)
- [ChangesAPI doesn't refer to any real API and duplicates other APIs #26](https://github.com/Alfresco/alfresco-js-api/issues/26)

<a name="0.2.1"></a>
# [0.2.1](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.2.1) (2016-07-15)

## Features

- [Allow REST calls to custom web scripts through the SDK #13 ](https://github.com/Alfresco/alfresco-js-api/issues/13)
- [Build for ES5 target an Minify #16](https://github.com/Alfresco/alfresco-js-api/issues/16)
- [Provide the abort method for the Upload API #20](https://github.com/Alfresco/alfresco-js-api/issues/20)

## Fix

- [If upload more then one file at the same time all the events are fired on the last promise #8](https://github.com/Alfresco/alfresco-js-api/issues/8)
- [Mock library was not possible access without instantiate the  AlfrescoApi Object #11 ](https://github.com/Alfresco/alfresco-js-api/issues/11)
- [UploadMock was not exported #11 ](https://github.com/Alfresco/alfresco-js-api/issues/11)
- [ContextRoot seems not change the configuration #14](https://github.com/Alfresco/alfresco-js-api/issues/14)

## Deprecation

- [Naming this.alfrescoJsApi.node is now this.alfrescoJsApi.nodes the node name convection will be still supported in the next release #7 ](https://github.com/Alfresco/alfresco-js-api/issues/7)

Before:

```javascript
  this.alfrescoJsApi.node
```

After:

 ```javascript
  this.alfrescoJsApi.nodes.
```

<a name="0.2.0"></a>
# [0.2.0](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.2.0) (2016-07-08)

## BREAKING CHANGES

- Constructor changed

Before:

```javascript
    var AlfrescoApi = require('alfresco-js-api');
    var apiInstance = new AlfrescoApi.Auth.AuthenticationApi(this.getAlfrescoClient());
    var loginRequest = new AlfrescoApi.Auth.LoginRequest();
    loginRequest.userId = username;
    loginRequest.password = password;
    return apiInstance.createTicket(loginRequest);
```

After:

```javascript
     this.alfrescoJsApi = new AlfrescoApi({ username:'admin', password:'admin', host:'http://127.0.0.1:8080'});
    //note you don't need anymore to keep the client
```

- Bundle File is now in the dist folder and the name is changed

Before:

```html
    <script src="node_modules/alfresco-js-api/bundle.js"></script>
```

After:

```html
    <script src="node_modules/alfresco-js-api/dist/alfresco-js-api.js"></script>
```

- getClientWithTicket removed

Before:

```javascript
    AlfrescoApi.getClientWithTicket(this.getBaseUrl(), this.getToken());
```

After:

```javascript
    this.alfrescoJsApi = new AlfrescoApi({ ticket:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', host:'http://127.0.0.1:8080'});
    //note you don't need anymore to keep the client
```
- Login changed

Before:

```javascript
    var AlfrescoApi = require('alfresco-js-api');
    var apiInstance = new AlfrescoApi.Auth.AuthenticationApi(this.getAlfrescoClient());
    var loginRequest = new AlfrescoApi.Auth.LoginRequest();
    loginRequest.userId = username;
    loginRequest.password = password;
    return apiInstance.createTicket(loginRequest);

```

After:

```javascript
   this.alfrescoJsApi = new AlfrescoApi({ username:'admin', password:'admin', host:'http://127.0.0.1:8080'});

   this.alfrescoJsApi.login();
```
## Features

- Logout
- isLoggedIn
- Events login/logout
- getNodeInfo
- createFolder/createFolderAutoRename
- uploadFile
- Events Upload File * progress * success * abort * error * unauthorized
- deleteNode
- deleteNodePermanent
- getDocumentThumbnailUrl
- getContentUrl

## Chore

- chore add alfresco log anf gitter chat in readme
  ([9547122b](https://github.com/Alfresco/dev-platform-js-api/commit/9547122bc1609c898382016481e6867934e95b73))
