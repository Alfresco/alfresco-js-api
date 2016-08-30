<p align="center">
  <img title="alfresco" alt='alfresco' src='assets/alfresco.png'  width="280px" height="150px"></img>
</p>

Alfresco JS API

_This project provides a JavaScript client API into the v1 Alfresco REST API_

<a name="0.3.1"></a>
# [0.3.1](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.3.1) (2016-xx-xx)

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
