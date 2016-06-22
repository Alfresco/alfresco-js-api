/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var NodeChildrenMock = require('../test/mockObjects/nodeChildrenMock');

describe('Alfresco Core Node Api', function () {

    beforeEach(function (done) {
        this.authResponseMock = new AuthResponseMock();
        this.nodeChildrenMock = new NodeChildrenMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: 'http://192.168.99.100:8080'
        });

        this.alfrescoJsApi.login().then((data) => {
            done();
        });
    });

    it('Get information for the node with identifier nodeId.', function (done) {
        this.nodeChildrenMock.get200Response();
        var alfrescoClient = this.alfrescoJsApi.getClient();

        var apiInstance = new AlfrescoApi.Core.NodesApi(alfrescoClient);
        var nodeId = '-root-';
        var opts = {
            relativePath: '/Sites/swsdp/documentLibrary',
            include: ['path']
        };

        apiInstance.getNodeChildren(nodeId, opts).then(function (data) {
            expect(data.list.pagination.count).to.be.equal(5);
            expect(data.list.entries[0].entry.path.name).to.be.equal('/Company Home/Sites/swsdp/documentLibrary');
            done();
        }, function (error) {
            console.log(error);
        });
    });

});
