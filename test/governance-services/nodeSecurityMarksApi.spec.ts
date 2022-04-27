import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { NodeSecurityMarksApi } from '../../src/api/gs-classification-rest-api';
import { NodeSecurityMarkBody } from '../../src/api/gs-classification-rest-api/model/NodeSecurityMarkBody';
import { EcmAuthMock } from '../mockObjects/content-services/ecm-auth.mock';
import { NodeSecurityMarksApiMock } from '../mockObjects/goverance-services/node-security-marks.mock';
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';

describe('Node Security Mark API test', () => {
    let authResponseMock: EcmAuthMock;
    let nodeSecurityMarksMock: NodeSecurityMarksApiMock;
    let nodeSecurityMarksApi: NodeSecurityMarksApi;
    let nodeSecurityMarkBody: Array<NodeSecurityMarkBody> = [
        {
            groupId: 'securityGroupId1',
            op: 'ADD',
            id: 'Sh1G8vTQ',
        },
        {
            groupId: 'securityGroupId2',
            op: 'ADD',
            id: 'Sh1G8vTR',
        }
    ];

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();
        nodeSecurityMarksMock = new NodeSecurityMarksApiMock(hostEcm);
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm,
        } as AlfrescoApiConfig);
        nodeSecurityMarksApi = new NodeSecurityMarksApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('add or remove security marks on a node', async () => {
        let nodeId = 'h3bdk2knw2kn';
        nodeSecurityMarksMock.post200manageSecurityMarkOnNode(nodeId);
        await nodeSecurityMarksApi.manageSecurityMarksOnNode(nodeId, nodeSecurityMarkBody).then((data) => {
            expect(data.list.entries[0].entry.groupId).equal('securityGroupId1');
            expect(data.list.entries[0].entry.id).equal('Sh1G8vTQ');
            expect(data.list.entries[0].entry.name).equal('SecurityMarkTest1');
        });
    });

    it('get security marks on a node', async () => {
        let nodeId = 'h3bdk2knw2kn';
        nodeSecurityMarksMock.get200SecurityMarkOnNode(nodeId);
        await nodeSecurityMarksApi.manageSecurityMarksOnNode(nodeId, nodeSecurityMarkBody).then((data) => {
            expect(data.list.entries[1].entry.groupId).equal('securityGroupId2');
            expect(data.list.entries[1].entry.id).equal('Sh1G8vTR');
            expect(data.list.entries[1].entry.name).equal('SecurityMarkTest2');
        });
    });
});
