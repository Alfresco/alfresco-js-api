<p align="center">
  <img title="alfresco" alt='alfresco' src='assets/alfresco.png'  width="280px" height="150px"></img>
</p>

Alfresco JS API

_This project provides a JavaScript client API into the v1 Alfresco REST API_

#   (2016-07-11)


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

