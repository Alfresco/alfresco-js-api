# Alfresco JavaScript API Client

| branch | status |
| --- | --- |
| master | [![Build Status](https://travis-ci.org/Alfresco/alfresco-js-api.svg?branch=master)](https://travis-ci.org/Alfresco/alfresco-js-api)  |
| development | [![Build Status](https://travis-ci.org/Alfresco/alfresco-js-api.svg?branch=development)](https://travis-ci.org/Alfresco/alfresco-js-api)  |



<p>
  <a title='Gitter chat' href="https://gitter.im/Alfresco/api/ng2-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
     <img src='https://badges.gitter.im/Alfresco/api/ng2-components.svg'  alt='Gitter chat' />
  </a>
  <a href='https://codecov.io/gh/Alfresco/api/js-api'>
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
- [Install](#install)
- [Authentication JS-API](#authentication-js-api)
  * [Login](#login)
    + [Login with Username and Password BPM and ECM](#login-with-username-and-password-bpm-and-ecm)
      - [Example](#example)
    + [Login with Username and Password ECM](#login-with-username-and-password-ecm)
      - [Example](#example-1)
    + [Login with ticket](#login-with-ticket)
      - [Login with ticket ECM](#login-with-ticket-ecm)
        * [Example](#example-2)
      - [Login with ticket ECM/BPM as parameter in the constructor](#login-with-ticket-ecmbpm-as-parameter-in-the-constructor)
        * [Example](#example-3)
    + [Login with Username and Password BPM](#login-with-username-and-password-bpm)
      - [Example](#example-4)
    + [Login with OAUTH2 Alfresco authorization server](#login-with-oauth2-alfresco-authorization-server)
      - [Implicit Flow](#implicit-flow)
        * [oauth2 properties](#oauth2-properties)
        * [Events](#events)
        * [Example](#example-5)
        * [Example skip login form (implicitFlow)](#example-skip-login-form-implicitflow)
      - [Password Flow](#password-flow)
        * [Example](#example-6)
        * [Example](#example-7)
  * [Logout](#logout)
    + [Example](#example-8)
  * [isLoggedIn](#isloggedin)
    + [Example](#example-9)
  * [Get tickets](#get-tickets)
  * [Events login/logout](#events-loginlogout)
    + [Example](#example-10)
- [Custom Endpoint](#custom-endpoint)
  * [Example](#example-11)
- [Error Events](#error-events)
  * [Example](#example-12)
- [ECM Example](#ecm-example)
- [BPM Example](#bpm-example)
- [Legacy Endpoint porting (ver 2.x.x)](#legacy-endpoint-porting-ver-2xx)
- [Development](#development)

<!-- tocstop -->

<!-- markdown-toc end -->

# Full documentation of all the methods of each API

- [Authentication Services](/src/api/auth-rest-api)
- [Content Services](/src/api/content-rest-api)
- [Process Services (APS 1.X)](/src/api-legacy/activiti-rest-api)
- [Process Services (AAE)](/src/api/activiti-rest-api)
- [Content Search](/src/api/search-rest-api)
- [Governance Classification](/src/api/gs-classification-rest-api)
- [Governance Core](/src/api/gs-core-rest-api)
- [Discovery Content API](/src/api/discovery-rest-api)

# Prerequisites

The minimal supported versions are:

- Alfresco Platform Repository: version [5.2.a-EA](https://wiki.alfresco.com/wiki/Community_file_list_201606-EA) or newer
- Activiti: 1.5
- Node.js ([Long Term Support](https://nodejs.org/en/) version)

# Installing

Using NPM:

```sh
npm install @alfresco/js-api
```

Using Yarn:

```sh
yarn add @alfresco/js-api
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
const alfrescoApi = new AlfrescoApi({ provider: 'ALL' });

alfrescoJsApi.login('admin', 'admin').then(
    data => {
        console.log('API called successfully Login in  BPM and ECM performed ');
    },
    error => {
        console.error(error);
    }
);
```

### Login with Username and Password ECM

#### Example

```javascript
const alfrescoJsApi = new AlfrescoApi();

alfrescoJsApi.login('admin', 'admin').then(
    data => {
        console.log('API called successfully Login ticket:' + data);
    },
    error => {
        console.error(error);
    }
);

// The output will be: API called successfully Login ticket: TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1

```

### Login with ticket

If you already know thw ticket when you invoke the constructor you can pass it as parameter in the constructor otherwise you can call the login with ticket that will validate the ticket against the server

#### Login with ticket ECM

This authentication validate also the ticket against the server

##### Example

```javascript
const ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

alfrescoJsApi.loginTicket(ticket).then(
    data => {
        console.log('valid ticket you are logged in');
    },
    error => {
        console.error(error);
    }
);
```

#### Login with ticket ECM/BPM as parameter in the constructor

With this authentication the ticket is not validated against the server

##### Example

```javascript

// Login with ECM ticket
const alfrescoApi = new AlfrescoApi({
    ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', 
    hostEcm:'http://127.0.0.1:8080'
});

// Login with BPM ticket
const alfrescoApi = new AlfrescoApi({
    ticketBpm: 'Basic YWRtaW46YWRtaW4=',  
    hostBpm:'http://127.0.0.1:9999'
});

// Login with ECM and BPM tickets
const alfrescoApi = new AlfrescoApi({
    ticketEcm:'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
    ticketBpm: 'Basic YWRtaW46YWRtaW4=',  
    hostEcm:'http://127.0.0.1:8080',  
    hostBpm:'http://127.0.0.1:9999'
});
```

### Login with Username and Password BPM

#### Example

```javascript
const alfrescoApi = new AlfrescoApi({ provider:'BPM' });

alfrescoJsApi.login('admin', 'admin').then(
    () => {
        console.log('API called successfully Login in Activiti BPM performed ');
    },
    error => {
        console.error(error);
    }
);
```

### Login with OAUTH2 Alfresco authorization server

#### Implicit Flow

If your want to be redirect to the authorization server and login there you can use the implicit flow to login

##### oauth2 properties

Property | Description  | default value|
------------- | ------------- | -------------|
host| Your oauth2 server URL| null |
clientId| Your clientId oauth2 | null |
secret| Your secret oauth2| null |
scope| Your scope | null |
implicitFlow| true/false | false |
redirectUri|  url to be redirect after login| null|
redirectLogout|  url to be redirect after logout optional, if is nor present the redirectUri will be used| null|
refreshTokenTimeout|  millisecond value, after how many millisecond youw ant refresh the token| 30000|
redirectSilentIframeUri|  url to be redirect after silent refresh login| /assets/silent-refresh.html |
silentLogin|  direct execute the implicit login without the need to call AlfrescoJsApi.implicitLogin() method|   false|
publicUrls | list of public urls that don't need authorization. It is possible too pass absolute paths and string patterns that are valid for [minimatch](https://github.com/isaacs/minimatch#readme) |

The api/js-api will automatically redirect you to the login page anf refresh the token if necessary

##### Events

Property | Description  | default value|
------------- | ------------- | -------------|
implicit_redirect| triggered when the user is redirect to the auth server return url parameter of the redirect |  |
discovery| triggered when all the openId discovery url phase is terminated returnl an object with all the discovered url |  |
token_issued| triggered when a new token is issued|  |

The api/js-api will automatically redirect you to the login page anf refresh the token if necessary

##### Example

```javascript
const alfrescoApi = new AlfrescoApi({
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

alfrescoJsApi.implicitLogin();
```

##### Example skip login form (implicitFlow)

```javascript
const alfrescoApi = new AlfrescoApi({
    oauth2: {
        host: 'HOST_OAUTH2_SERVER',
        clientId: 'YOUR_CLIENT_ID',
        secret: 'SECRET',
        scope: 'openid',
        implicitFlow: true,
        redirectUri: 'YOUR_HOME_APP_URL',
        silentRefreshTimeout: '600000' //Optional parameter 10 minutes default value,
        silentLogin: true,
        publicUrls: ['PUBLIC_URL', 'URL_PATTERN']
    },
    authType: 'OAUTH',
    provider: 'ALL'
});
```

#### Password Flow

If your auth endpoint is different from the standard one "/oauth/token" you can override it through the property authPath

##### Example

```javascript
const alfrescoApi = new AlfrescoApi({
    oauth2: {
        host: 'HOST_OAUTH2_SERVER',
        clientId: 'YOUR_CLIENT_ID',
        secret: 'SECRET',
        authPath:'my-custom-auth-endpoint/token'
    },
    authType: 'OAUTH',
    provider: 'ALL'
});

alfrescoJsApi.login('admin', 'admin').then(
    data => {
        console.log('API called successfully Login in with authorization server performed');
    },
    error => {
        console.error(error);
    }
);
```

After the login if you want refresh your token you can use this call

##### Example

```javascript
alfrescoJsApi.refreshToken().then(
    data => {
        console.log('Your token has been refreshed');
    },
    error => {
        console.error(error);
    }
);
```

## Logout

logout()

### Example

```javascript

alfrescoJsApi.logout().then(
    data => {
        console.log('Successfully Logout');
    }, 
    error => {
        console.error('Possible ticket already expired');
    }
);
```

## isLoggedIn

isLoggedIn()

> return true if you are logged in false if you are not.

### Example

```javascript

const isLoggedIn = alfrescoJsApi.isLoggedIn();

if (isLoggedIn) {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}
```

## Get tickets

### getTicketEcm()

After the log in you can retrieve you ECM ticket

```javascript
const ecmTicket = alfrescoJsApi.getTicketEcm() ;

console.log('This is your  ECM ticket  ' + ecmTicket);
```

### getTicketBpm()

After the log in you can retrieve you BPM ticket

```javascript
const bpmTicket  = alfrescoJsApi.getTicketBpm();

console.log('This is your BPM ticket ' + bpmTicket);
```

## Events login/logout

The login/logout are also an EventEmitter which you can register to listen to any of the following event types:

- unauthorized (If this event is triggered a call to the Api was unauthorized)
- success (If this event is triggered the login was success you can use this event > instead the login promise)
- logout (If this event is triggered the client is successfully logout)

### Example

```javascript

alfrescoJsApi.login('admin', 'admin')
    .on('unauthorized', () => {
        console.log('You are unauthorized you can use this event to redirect to login');
    });

alfrescoJsApi.login('admin', 'admin')
    .on('success', () => {
        console.log('Success Login');
    });

alfrescoJsApi.logout()
    .on('logout', () => {
        console.log('Successfully Logout');
    });
```

# Custom Endpoint

Content service and process service has two different clients:

- AlfrescoJsApi.ProcessClient
- AlfrescoJsApi.ContentClient

Both client expose a method ***callApi**

```javascript
callApi(
    path: string,
    httpMethod: string,
    pathParams?: any,
    queryParams?: any,
    headerParams?: any,
    formParams?: any,
    bodyParam?: any,
    contentTypes?: string[],
    accepts?: string[],
    returnType?: any,
    contextRoot?: string,
    responseType?: string
): Promise<any>;
```

If you want call your custom rest point in one of those two service use the corresponding client.

## Example

```javascript
alfrescoJsApi.bpmClient.callApi(
    '/api/enterprise/app-version', 'GET',
    {}, {}, {}, {}, {}, ['application/json'], ['application/json'], {'String': 'String'}
)
 ```

# Error Events

The api/js-api has an error handler event where you can subscribe

## Example

```javascript
alfrescoJsApi.on('error', error => {
    console.log(error);
});
```

# ECM Example

A complete list of all the ECM methods is available here : [Content API](/src/api/content-rest-api) here you can find some common [Example](/ecm-example.md).

# BPM Example

A complete list of all the BPM methods is available here : [APS 2.X API](/src/api/activiti-rest-api) here you can find some common [Example](/bpm-example.md).

# Legacy Endpoint porting (ver 2.x.x)

Since version 3.0.0 in order to support tree shaking the JS-API has been radically redesigned.

In order to help the porting to the new JS-APi version of the old project the previous syntax even if is deprecated is still supported in the compatibility layer.

***Note this compatibility layer could be deleted in the next major versions of the JS-API***

```javascript
import { AlfrescoApiCompatibility as AlfrescoApi } from '../src/alfrescoApiCompatibility';

const alfrescoJsApi = new AlfrescoApi({
        oauth2: {
            host: 'HOST_OAUTH2_SERVER',
            clientId: 'YOUR_CLIENT_ID',
            secret: 'SECRET',
            authPath:'my-custom-auth-endpoint/token'
        },
        authType: 'OAUTH',
        provider: 'ALL'
    });

alfrescoJsApi.login('admin', 'admin').then(
    data => {
        console.log('API called successfully Login in with authorization server performed ');
    },
    error => {
        console.error(error);
    }
);

alfrescoJsApi.nodes
    .getNodeInfo(fileOrFolderId)
    .then(
        data => {
            console.log('This is the name' + data.name );
        }, 
        error => {
            console.log('This node does not exist');
        }
    );
```

# Development

To run the build

```sh
npm run build
```

To run the test

```sh
npm run test
```
