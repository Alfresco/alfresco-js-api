var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

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

module.exports = {
  Auth: require('./alfresco-auth-rest-api/src/index.js'),
  Core: require('./alfresco-core-rest-api/src/index.js'),
  getClientWithTicket: getClientWithTicket,
  getClientWithAuthentication: getClientWithAuthentication
};
