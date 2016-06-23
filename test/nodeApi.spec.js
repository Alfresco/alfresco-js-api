/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var NodeChildrenMock = require('../test/mockObjects/nodeMock');

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

    describe('Get', function () {

        it('Get information for the node with identifier nodeId', function (done) {
            this.nodeChildrenMock.get200ResponseSingleFileFolder();

            this.alfrescoJsApi.getNodeInfo('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function (data) {
                expect(data.name).to.be.equal('grass.jpg');
                expect(data.isFile).to.be.equal(true);
                done();
            }, function (error) {
                console.log(error);
            });
        });

        it('Get information for the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeChildrenMock.get404FileFolderNotExist();

            this.alfrescoJsApi.getNodeInfo('80a94ac4-3ec4-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.message).to.be.equal('{"error":{"errorKey":"framework.exception.' +
                    'EntityNotFound","statusCode":404,"briefSummary":"05220073 The entity with ' +
                    'id: 80a94ac4-3ec4-47ad-864e-5d939424c47c was not found","stackTrace":"For ' +
                    'security reasons the stack trace is no longer displayed, but the property is' +
                    ' kept for previous versions.","descriptionURL":"https://api-explorer.alfresco.com"}}');
                expect(error.error.toString()).to.be.equal('Error: Not Found');
                done();
            });
        });
    });

    describe('Delete', function () {
        it('delete the node with identifier nodeId', function (done) {
            this.nodeChildrenMock.get204SuccessfullyDeleted();

            this.alfrescoJsApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
                done();
            }, function () {
                done();
            });
        });

        it('delete the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeChildrenMock.get404DeleteNotFound();

            this.alfrescoJsApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.error.toString()).to.be.equal('Error: Not Found');
                done();
            });
        });

        it('delete the node with identifier nodeId should return 403 if current user does not have permission to delete', function (done) {
            this.nodeChildrenMock.get403DeletePermissionDenied();

            this.alfrescoJsApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });
    });

});
