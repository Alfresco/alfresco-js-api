/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { NodeChildAssociationPaging } from '../../src/api/content-rest-api/model/nodeChildAssociationPaging';

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
        },                                              (error) => {
            console.log('error ' + JSON.stringify(error));
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
            },                                                                                    function (error) {
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
            },                                                                                    (error) => {
                console.log('error' + JSON.stringify(error));
            });
        });
    });

    describe('Delete', function () {
        it('delete the node with identifier nodeId', function (done) {
            this.nodeMock.get204SuccessfullyDeleted();

            this.alfrescoJsApi.nodes.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
                done();
            },                                                                               function () {
            });
        });

        it('delete the node with identifier nodeId should return 404 if the id is does not exist', function (done) {
            this.nodeMock.get404DeleteNotFound();

            this.alfrescoJsApi.nodes.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            },                                                                               function (error) {
                expect(error.status).to.be.equal(404);
                done();
            });
        });

        it('delete the node with identifier nodeId should return 403 if current user does not have permission to delete', function (done) {
            this.nodeMock.get403DeletePermissionDenied();

            this.alfrescoJsApi.nodes.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(function () {
            },                                                                               function () {
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

            },                                                           function (error) {
                console.error(error);
            });

        });
    });
});
