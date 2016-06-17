'use strict';
var AlfrescoApi = require('./src/alfrescoApi.js');

module.exports = {
  Auth: require('./alfresco-auth-rest-api/src/index.js'),
  Core: require('./alfresco-core-rest-api/src/index.js'),
  AlfrescoApi: AlfrescoApi
};
