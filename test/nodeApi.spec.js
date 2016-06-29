/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var NodeMock = require('../test/mockObjects/nodeMock');

describe('Alfresco Core Node Api', function () {

    beforeEach(function (done) {
        this.authResponseMock = new AuthResponseMock();
        this.nodeMock = new NodeMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: 'http://devproducts-platform.alfresco.me/'
        });

        this.alfrescoJsApi.login().then((data) => {
            done();
        },(error) => {
            console.log('error ' + JSON.stringify(error));
        });
    });

    describe('Get Node', function () {

        it('information for the node with identifier nodeId should return 200 if is all ok', function (done) {
            this.nodeMock.get200ResponseSingleFileFolder();

            this.alfrescoJsApi.getNodeInfo('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function (data) {
                expect(data.name).to.be.equal('grass.jpg');
                expect(data.isFile).to.be.equal(true);
                done();
            }, function (error) {
                console.log(error);
            });
        });

        it('information for the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404FileFolderNotExist();

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

    describe('Get Children Node', function () {

        it('information for the node with identifier nodeId should return 200 if is all ok', function (done) {
            this.nodeMock.get200ResponseChildren();

            this.alfrescoJsApi.getNodeChildrenInfo('b4cff62a-664d-4d45-9302-98723eac1319').then(function (data) {
                expect(data.pagination.count).to.be.equal(5);
                expect(data.entries[0].entry.name).to.be.equal('dataLists');
                done();
            }, function (error) {
                console.log(error);
            });

        });

        it('information for the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404FileFolderNotExist();

            this.alfrescoJsApi.getNodeChildrenInfo('80a94ac4-3ec4-47ad-864e-5d939424c47c').then(function () {
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
            this.nodeMock.get204SuccessfullyDeleted();

            this.alfrescoJsApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
                done();
            }, function () {
            });
        });

        it('delete the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404DeleteNotFound();

            this.alfrescoJsApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.error.toString()).to.be.equal('Error: Not Found');
                done();
            });
        });

        it('delete the node with identifier nodeId should return 403 if current user does not have permission to delete', function (done) {
            this.nodeMock.get403DeletePermissionDenied();

            this.alfrescoJsApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });
    });

    describe('Delete Permanent', function () {
        it('permanent delete the node with identifier nodeId', function (done) {
            this.nodeMock.get204SuccessfullyDeleted();

            this.alfrescoJsApi.deleteNodePermanent('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });

        it('permanent delete the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404DeletePermanentlyNotFound();

            this.alfrescoJsApi.deleteNodePermanent('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.error.toString()).to.be.equal('Error: Not Found');
                done();
            });
        });

        it('permanent delete the node with identifier nodeId should return 403 if current user does not have permission to delete', function (done) {
            this.nodeMock.get403DeletePermissionDenied();

            this.alfrescoJsApi.deleteNodePermanent('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });
    });
});
