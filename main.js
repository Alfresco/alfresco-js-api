var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index.js');

var getClientWithTicket = function (basePath, ticket) {
    var alfrescoClient = new AlfrescoCoreRestApi.ApiClient();
    alfrescoClient.basePath = basePath;
    // Configure HTTP basic authorization: basicAuth
    var basicAuth = alfrescoClient.authentications.basicAuth;
    basicAuth.username = 'ROLE_TICKET';
    basicAuth.password = ticket;
    return alfrescoClient;
};

var getClientWithAuthentication = function (basePath, username, password) {
    var alfrescoClient = new AlfrescoCoreRestApi.ApiClient();
    alfrescoClient.basePath = basePath;
    // Configure HTTP basic authorization: basicAuth
    var basicAuth = alfrescoClient.authentications.basicAuth;
    basicAuth.username = username;
    basicAuth.password = password;
    return alfrescoClient;
};


/**
 * Method to delegate to POST login
 * @param basePath
 * @param username
 * @param password
 * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
 * */
var login = function (basePath, username, password) {

    var alfrescoClient = this.getClientWithAuthentication(basePath, username, password);

    var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(alfrescoClient);
    var loginRequest = new AlfrescoAuthRestApi.LoginRequest();

    loginRequest.userId = username;
    loginRequest.password = password;

    return new Promise(function(resolve, reject) {
        apiInstance.createTicket(loginRequest).then(function (data) {
            resolve(data.entry.id);
        }, function (error) {
            reject(error);
        });
    });
};

module.exports = {
    Auth: require('./alfresco-auth-rest-api/src/index.js'),
    Core: require('./alfresco-core-rest-api/src/index.js'),
    getClientWithTicket: getClientWithTicket,
    getClientWithAuthentication: getClientWithAuthentication,
    login: login
};
