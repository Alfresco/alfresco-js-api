/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from 'alfresco-js-api';
import { NodeChildAssociationPaging } from '../../src/api-new/content-rest-api/model/nodeChildAssociationPaging';
import { DateAlfresco } from '../../dist/package/src/api-new/content-rest-api/model/dateAlfresco';

let chai = require('chai');
let expect = chai.expect;
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let NodeMock = require('../../test/mockObjects/mockAlfrescoApi').Node;
let fs = require('fs');

chai.use(require('chai-datetime'));

describe('Node', function () {
    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.nodeMock = new NodeMock(this.hostEcm);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        }, (error) => {
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

        it('dynamic augmenting object parameters', function (done) {
            this.nodeMock.get200ResponseChildrenFutureNewPossibleValue();

            this.alfrescoJsApi.nodes.getNodeChildren('b4cff62a-664d-4d45-9302-98723eac1319').then(function (data) {
                expect(data.list.entries[0].entry.impossibleProperties).to.be.equal('impossibleRightValue');
                done();
            });
        });

        it('should return dates as timezone-aware', function (done) {
            this.nodeMock.get200ResponseChildrenNonUTCTimes();

            this.alfrescoJsApi.nodes.getNodeChildren('b4cff62a-664d-4d45-9302-98723eac1320').then(function (data: NodeChildAssociationPaging) {
                expect(data.list.entries.length).to.be.equal(1);
                expect(data.list.entries[0].entry.createdAt).to.equalTime(new Date(Date.UTC(2011, 2, 15, 17, 4, 54, 290)));
                done();
            }, (error) => {
                console.log('error' + JSON.stringify(error));
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

    describe('Content', function () {
        it.skip('getFileContent', function (done) {

            let nodeId = '80a94ac8-3ece-47ad-864e-5d939424c47c';

            this.alfrescoJsApi.core.nodesApi.getFileContent(nodeId).then(function (data) {
                fs.writeFile('./test/grass.jpg', data, function (err) {
                    if (err) {
                        console.log(err);
                        done();
                    }
                    console.log('The file was saved!');
                    done();
                });

            }, function (error) {
                console.error(error);
            });

        });
    });
});
