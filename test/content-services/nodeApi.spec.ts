import { AlfrescoApiConfig } from '../..';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { NodesApi } from '../../src/api/content-rest-api';
import { EcmAuthMock, NodeMock } from '../../test/mockObjects';

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

describe('Node', () => {
    let authResponseMock: EcmAuthMock;
    let nodeMock: NodeMock;
    let nodesApi: NodesApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new EcmAuthMock(hostEcm);
        nodeMock = new NodeMock(hostEcm);

        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        } as AlfrescoApiConfig);

        alfrescoJsApi.login('admin', 'admin').then(
            () => {
                done();
            },
            (error: any) => {
                console.log('error ' + JSON.stringify(error));
            }
        );

        nodesApi = new NodesApi(alfrescoJsApi);
    });

    describe('Get Children Node', () => {
        it('information for the node with identifier nodeId should return 200 if is all ok', (done) => {
            nodeMock.get200ResponseChildren();

            nodesApi.listNodeChildren('b4cff62a-664d-4d45-9302-98723eac1319').then((data) => {
                expect(data.list.pagination.count).to.be.equal(5);
                expect(data.list.entries[0].entry.name).to.be.equal('dataLists');
                done();
            });

        });

        it('information for the node with identifier nodeId should return 404 if the id is does not exist', (done) => {
            nodeMock.get404ChildrenNotExist();

            nodesApi.listNodeChildren('b4cff62a-664d-4d45-9302-98723eac1319').then(
                () => {},
                (error: any) => {
                    expect(error.status).to.be.equal(404);
                    done();
                }
            );
        });

        it('dynamic augmenting object parameters', (done) => {
            nodeMock.get200ResponseChildrenFutureNewPossibleValue();

            nodesApi.listNodeChildren('b4cff62a-664d-4d45-9302-98723eac1319').then((data: any) => {
                expect(data.list.entries[0].entry.impossibleProperties).to.be.equal('impossibleRightValue');
                done();
            });
        });

        it('should return dates as timezone-aware', (done) => {
            nodeMock.get200ResponseChildrenNonUTCTimes();

            nodesApi.listNodeChildren('b4cff62a-664d-4d45-9302-98723eac1320').then(
                (data) => {
                    expect(data.list.entries.length).to.be.equal(1);
                    expect(data.list.entries[0].entry.createdAt).to.equalTime(new Date(Date.UTC(2011, 2, 15, 17, 4, 54, 290)));
                    done();
                },
                (error: any) => {
                    console.log('error' + JSON.stringify(error));
                }
            );
        });
    });

    describe('Delete', () => {
        it('delete the node with identifier nodeId', (done) => {
            nodeMock.get204SuccessfullyDeleted();

            nodesApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(
                () => {
                    done();
                }
            );
        });

        it('delete the node with identifier nodeId should return 404 if the id is does not exist', (done) => {
            nodeMock.get404DeleteNotFound();

            nodesApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(
                () => {},
                (error: any) => {
                    expect(error.status).to.be.equal(404);
                    done();
                }
            );
        });

        it('delete the node with identifier nodeId should return 403 if current user does not have permission to delete', (done) => {
            nodeMock.get403DeletePermissionDenied();

            nodesApi.deleteNode('80a94ac8-3ece-47ad-864e-5d939424c47c').then(
                () => {},
                () => {
                    done();
                }
            );
        });
    });
});
