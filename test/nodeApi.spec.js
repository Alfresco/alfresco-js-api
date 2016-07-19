/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var NodeMock = require('../test/mockObjects/mockAlfrescoApi').Node;

describe('Node', function () {
    beforeEach(function (done) {
        this.host = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.host);
        this.nodeMock = new NodeMock(this.host);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: this.host
        });

        this.alfrescoJsApi.login().then(() => {
            done();
        },(error) => {
            console.log('error ' + JSON.stringify(error));
        });
    });

    describe('Create Folder', function () {

        it('creation of the folder should get 409 if new name clashes with an existing node in the current parent folder', function (done) {
            this.nodeMock.get409CreationFolderNewNameClashes();

            this.alfrescoJsApi.nodes.createFolder('newFolder').then(function () {
            }, function () {
                done();
            });
        });

        it('creation of the folder for the node with identifier nodeId should return 200 if is all ok', function (done) {
            this.nodeMock.get200CreationFolder();

            this.alfrescoJsApi.nodes.createFolder('newFolder').then(function (data) {
                expect(data.entry.name).to.be.equal('newFolder');
                expect(data.entry.isFolder).to.be.equal(true);
                done();
            });
        });

        it('if autoRename is true creation of the folder should get 200 if new name clashes with an existing node in the current parent folder should be renamed', function (done) {
            this.nodeMock.get201CreationFolderNewNameNotClashes();

            this.alfrescoJsApi.nodes.createFolderAutoRename('newFolder').then(function (data) {
                expect(data.entry.name).to.be.equal('newFolder-1');
                expect(data.entry.isFolder).to.be.equal(true);
                done();
            });
        });

    });

    describe('Get Node', function () {
        it('information for the node with identifier nodeId should return 200 if is all ok', function (done) {
            this.nodeMock.get200ResponseSingleFileFolder();

            this.alfrescoJsApi.nodes.getNodeInfo('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function (data) {
                expect(data.name).to.be.equal('grass.jpg');
                expect(data.isFile).to.be.equal(true);
                done();
            });

        });

        it('information for the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404FileFolderNotExist();

            this.alfrescoJsApi.nodes.getNodeInfo('80a94ac4-3ec4-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(404);
                done();
            });
        });
    });

    describe('Get Children Node', function () {
        it('information for the node with identifier nodeId should return 200 if is all ok', function (done) {
            this.nodeMock.get200ResponseChildren();

            this.alfrescoJsApi.nodes.getNodeChildren('b4cff62a-664d-4d45-9302-98723eac1319').then(function (data) {
                expect(data.list.pagination.count).to.be.equal(5);
                expect(data.list.entries[0].entry.name).to.be.equal('dataLists');
                done();
            });

        });

        it('information for the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404ChildrenNotExist();

            this.alfrescoJsApi.nodes.getNodeChildren('b4cff62a-664d-4d45-9302-98723eac1319').then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(404);
                done();
            });
        });

    });

    describe('Delete', function () {
        it('delete the node with identifier nodeId', function (done) {
            this.nodeMock.get204SuccessfullyDeleted();

            this.alfrescoJsApi.nodes.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
                done();
            }, function () {
            });
        });

        it('delete the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404DeleteNotFound();

            this.alfrescoJsApi.nodes.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(404);
                done();
            });
        });

        it('delete the node with identifier nodeId should return 403 if current user does not have permission to delete', function (done) {
            this.nodeMock.get403DeletePermissionDenied();

            this.alfrescoJsApi.nodes.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });
    });

    describe('Delete Permanent', function () {
        it('permanent delete the node with identifier nodeId', function (done) {
            this.nodeMock.get204SuccessfullyDeleted();

            this.alfrescoJsApi.nodes.deleteNodePermanent('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });

        it('permanent delete the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404DeletePermanentlyNotFound();

            this.alfrescoJsApi.nodes.deleteNodePermanent('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(404);
                done();
            });
        });

        it('permanent delete the node with identifier nodeId should return 403 if current user does not have permission to delete', function (done) {
            this.nodeMock.get403DeletePermissionDenied();

            this.alfrescoJsApi.nodes.deleteNodePermanent('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            }, function () {
                done();
            });
        });
    });
});
