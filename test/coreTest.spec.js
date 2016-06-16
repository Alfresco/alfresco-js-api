var AlfrescoCoreJsApi = require('../main').Core;
var expect = require('chai').expect;
var nock = require('nock');

describe('Alfresco Core Node Api', function () {

    it('Get information for the node with identifier nodeId.', function (done) {


        console.log('AlfrescoJsApi.Core.ApiClient' + AlfrescoCoreJsApi.ApiClient());
        var defaultClient = AlfrescoCoreJsApi.Core.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
        var basicAuth = defaultClient.authentications['basicAuth'];
        basicAuth.username = 'YOUR USERNAME'
        basicAuth.password = 'YOUR PASSWORD'

        var apiInstance = new AlfrescoCoreJsApi.Core.NodesApi()

        var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: -my- , -shared- , -root-
        var opts = {
            'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: path , isLink , allowableOperations
            'relativePath': "relativePath_example", // {String} If specified, returns information on the node resolved by this path. The path is relative to the specified **nodeId**
            'fields': ["fields_example"] /* {[String]} A list of field names.

             You can use this parameter to restrict the fields
             returned within a response if, for example, you want to save on overall bandwidth.

             The list applies to a returned individual
             entity or entries within a collection.

             If the API method also supports the **include**
             parameter, then the fields specified in the **include**
             parameter are returned in addition to those specified in the **fields** parameter.*/

        };
        apiInstance.getNode(nodeId, opts).then(function(data) {
            console.log('API called successfully. Returned data: ' + data);
        }, function(error) {
            console.error(error);
        });

    });
});
