import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi, SecurityMarksBody } from '../../src/api/gs-classification-rest-api';
import { SecurityGroupBody } from '../../src/api/gs-classification-rest-api/model/securityGroupBody';
import { SecurityMarksApi } from '../../src/api/gs-classification-rest-api';
import { SecurityMarkBody } from '../../src/api/gs-classification-rest-api/model/securityMarkBody';
import { EcmAuthMock } from '../mockObjects/content-services/ecm-auth.mock';
import { SecurityMarkApiMock } from '../mockObjects/goverance-services/security-marks.mock';
import { SecurityGroupApiMock } from '../mockObjects/goverance-services/security-groups.mock';
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';

describe('Security Mark API test', () => {
    let authResponseMock: EcmAuthMock;
    let securityMarkApiMock: SecurityMarkApiMock;
    let securityGroupMock: SecurityGroupApiMock;
    let securityGroupApi: SecurityGroupsApi;
    let securityMarksApi: SecurityMarksApi;
    let securityGroupId: string;
    let securityMarkId: string;
    const securityMarksBodySingle: SecurityMarksBody = [
        {
            name: 'SecurityMarkTest',
        }
    ];
    const securityGroupBody: SecurityGroupBody = {
        groupName: 'Alfresco',
        groupType: 'HIERARCHICAL',
    };
    const securityMarksBody: SecurityMarksBody = [
        {
            name: 'SecurityMark3',
        },
        {
            name: 'SecurityMark4',
        },
    ];

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();
        securityGroupMock = new SecurityGroupApiMock(hostEcm);
        securityMarkApiMock = new SecurityMarkApiMock(hostEcm);
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm,
        } as AlfrescoApiConfig);
        securityGroupApi = new SecurityGroupsApi(alfrescoApi);
        securityMarksApi = new SecurityMarksApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('create Security Group', async () => {
        securityGroupMock.createSecurityGroup200Response();
        await securityGroupApi.createSecurityGroup(securityGroupBody, 'inUse').then((data) => {
            securityGroupId = data.entry.id;
            expect(data.entry.id).not.equal(null);
            expect(data.entry.groupName).to.be.equal('Alfresco');
            expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
        });
    });

    it('create Security Mark', async () => {
        securityMarkApiMock.createSecurityMark200Response(securityGroupId);
        await securityMarksApi.createSecurityMarks(securityGroupId, securityMarksBodySingle).then((data: any) => {
            securityMarkId = data.entry.id;
            expect(data.entry.id).not.equal(null);
            expect(data.entry.name).to.be.equal('SecurityMarkTest');
            expect(data.entry.groupId).to.be.equal(securityGroupId);
        });
    });

    it('create multiple Security Mark', async () => {
        securityMarkApiMock.createSecurityMarks200Response(securityGroupId);
        await securityMarksApi.createSecurityMarks(securityGroupId, securityMarksBody).then((data: any) => {
            expect(data.list.entries[0].entry.id).not.equal(null);
            expect(data.list.entries[0].entry.name).to.be.equal('SecurityMark3');
            expect(data.list.entries[0].entry.groupId).to.be.equal(securityGroupId);
        });
    });

    it('get All Security Marks', async () => {
        securityMarkApiMock.get200GetSecurityMark(securityGroupId);
        await securityMarksApi.getSecurityMarks(securityGroupId, ['inUse', 0, 10]).then((data) => {
            expect(data.list.entries.length).to.be.above(0);
        });
    });

    it('get Security Mark Information', async () => {
        securityMarkApiMock.get200GetSingleSecurityMark(securityGroupId, securityMarkId);
        await securityMarksApi.getSecurityMark(securityGroupId, securityMarkId).then((data) => {
            expect(data.entry.id).not.equal(null);
            expect(data.entry.name).to.be.equal('SecurityMarkTest');
            expect(data.entry.groupId).to.be.equal(securityGroupId);
        });
    });

    it('update Security Mark', async () => {
        const updatedSecurityMarkBody: SecurityMarkBody = {
            name: 'AlfrescoSecurityMark',
        };
        securityMarkApiMock.put200UpdateSecurityMarkResponse(securityGroupId, securityMarkId);
        await securityMarksApi.updateSecurityMark(securityGroupId, securityMarkId, updatedSecurityMarkBody).then((data) => {
            expect(data.entry.id).not.equal(null);
            expect(data.entry.name).to.be.equal('AlfrescoSecurityMark');
            expect(data.entry.groupId).to.be.equal(securityGroupId);
        });
    });

    it('delete Security Mark', async () => {
        securityMarkApiMock.getDeleteSecurityMarkSuccessfulResponse(securityGroupId, securityMarkId);
        await securityGroupApi
            .deleteSecurityGroup(securityGroupId)
            .then((data) => {
                Promise.resolve(data);
            })
            .catch((err) => {
                Promise.reject(err);
            });
    });
});
