var AlfrescoCoreRestApi = require('./src/ApiClient.js');
var NodesApi = require('./src/api/NodesApi.js');

global.AlfrescoApi = {
    ApiClient: AlfrescoCoreRestApi,
    NodesApi: NodesApi
};

