var AlfrescoCoreRestApi = require('./src/ApiClient.js');
var NodesApi = require('./src/api/NodesApi.js');

global.AlfrescoApi = {
    ApiClient: AlfrescoCoreRestApi,
    NodesApi: NodesApi
};

var defaultClient = new AlfrescoCoreRestApi();
defaultClient.basePath = 'http://192.168.99.100:8080/alfresco/api/-default-/public/alfresco/versions/1';

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'admin';
basicAuth.password = 'admin';

var apiInstance = new NodesApi(defaultClient);

var nodeId = '-root-', opts = {};
var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ', data);
    }
};
apiInstance.getNodeChildren(nodeId, opts, callback);
