import { EcmAuthMock } from "@alfresco/js-api/test/mockObjects";
import {
    AlfrescoApi,
    AlfrescoApiConfig,
    AuthorityClearanceApi, AuthorityClearanceGroupPaging,
    NodeSecurityMarkBody, SecurityMarkEntry, SecurityMarkPaging
} from "@alfresco/js-api";
import { expect } from "chai";
import { AuthorityClearanceMock } from "@alfresco/js-api/test/mockObjects/goverance-services/authority-clearance.mock";

describe('Authority Clearance API test', () => {
    let authResponseMock: EcmAuthMock;
    let authorityClearanceMock: AuthorityClearanceMock;
    let authorityClearanceApi: AuthorityClearanceApi;
    let nodeSecurityMarkBodyList: Array<NodeSecurityMarkBody> = [
        {
            groupId: 'securityGroupFruits',
            op: 'ADD',
            id: 'fruitMarkId1',
        },
        {
            groupId: 'securityGroupFruits',
            op: 'ADD',
            id: 'fruitMarkId1',
        }
    ];
    let nodeSecurityMarkBodySingle: Array<NodeSecurityMarkBody> = [
        {
            groupId: 'securityGroupFruits',
            op: 'ADD',
            id: 'fruitMarkId1'
        }
    ]

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();
        authorityClearanceMock = new AuthorityClearanceMock(hostEcm);
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm,
        } as AlfrescoApiConfig);
        authorityClearanceApi = new AuthorityClearanceApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('get authority clearances for an authority', async () => {
        let nodeId = 'testAuthorityId';
        authorityClearanceMock.get200AuthorityClearanceForAuthority(nodeId);
        await authorityClearanceApi.getAuthorityClearanceForAuthority(nodeId).then((response: AuthorityClearanceGroupPaging) => {
            expect(response.list.entries[0].entry.id).equal('securityGroupFruits');
            expect(response.list.entries[0].entry.displayLabel).equal('Security Group FRUITS');
            expect(response.list.entries[0].entry.type).equal('USER_REQUIRES_ALL');
            expect(response.list.entries[0].entry.marks.length).equal(3);
        });
    });

    it('add single security marks to an authority', async () => {
        let nodeId = 'testAuthorityId';
        authorityClearanceMock.post200AuthorityClearanceWithSingleItem(nodeId);
        await authorityClearanceApi.updateAuthorityClearance(nodeId, nodeSecurityMarkBodySingle).then((data: SecurityMarkEntry | SecurityMarkPaging) => {
            let response: SecurityMarkEntry = data as SecurityMarkEntry;
            expect(response.entry.id).equal('fruitMarkId1');
            expect(response.entry.name).equal('APPLES');
            expect(response.entry.groupId).equal('securityGroupFruits');
        });
    });

    it('add multiple security marks on an authority', async () => {
        let nodeId = 'testAuthorityId';
        authorityClearanceMock.post200AuthorityClearanceWithList(nodeId);
        await authorityClearanceApi.updateAuthorityClearance(nodeId, nodeSecurityMarkBodyList).then((data: SecurityMarkEntry | SecurityMarkPaging) => {
            let response: SecurityMarkPaging = data as SecurityMarkPaging;
            expect(response.list.entries[0].entry.id).equal('fruitMarkId1');
            expect(response.list.entries[0].entry.name).equal('APPLES');
            expect(response.list.entries[0].entry.groupId).equal('securityGroupFruits');
        });
    });
});
