var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index.js');
var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

global.AlfrescoApi = AlfrescoCoreRestApi; //legacy
global.AlfrescoApi.Auth = AlfrescoAuthRestApi;
global.AlfrescoApi.Core = AlfrescoCoreRestApi;

global.AlfrescoApi.getClientWithTicket = function (basePath, ticket) {
    var defaultClient = new AlfrescoApi.ApiClient();
    defaultClient.basePath = basePath;
    // Configure HTTP basic authorization: basicAuth
    var basicAuth = defaultClient.authentications['basicAuth'];
    basicAuth.username = 'ROLE_TICKET';
    basicAuth.password = ticket;
    return defaultClient;
};

global.AlfrescoApi.getClientWithAuthentication = function (basePath, username, password) {
    var defaultClient = new AlfrescoApi.ApiClient();
    defaultClient.basePath = basePath;
    // Configure HTTP basic authorization: basicAuth
    var basicAuth = defaultClient.authentications['basicAuth'];
    basicAuth.username = username;
    basicAuth.password = password;
    return defaultClient;
};