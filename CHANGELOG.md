<p align="center">
  <img title="alfresco" alt='alfresco' src='assets/alfresco.png'  width="280px" height="150px"></img>
</p>

Alfresco JS API

_This project provides a JavaScript client API into the v1 Alfresco REST API_

<a name="0.2.3"></a>
# [0.2.3](https://github.com/Alfresco/alfresco-js-api/releases/tag/0.2.3) (2016-xx-xx)
- [Integration Activiti Api #19](https://github.com/Alfresco/alfresco-js-api/issues/19)

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

