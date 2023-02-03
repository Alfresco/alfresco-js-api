import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi } from '../../src/api/gs-classification-rest-api';
import { expect } from 'chai';
import { SecurityGroupBody } from '../../src/api/gs-classification-rest-api/model/securityGroupBody';
import { EcmAuthMock } from '../../test/mockObjects';
import { SecurityGroupApiMock } from '../../test/mockObjects/goverance-services/security-groups.mock';
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';

describe('Security Group API test', () => {
    let authResponseMock: EcmAuthMock;
    let securityGroupMock: SecurityGroupApiMock
    let securityGroupApi: SecurityGroupsApi;
    const securityGroupBody: SecurityGroupBody = {
        "groupName": "Alfresco",
        "groupType": "HIERARCHICAL"
    }
    let securityGroupId: string;

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();
        securityGroupMock  = new SecurityGroupApiMock(hostEcm);
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm
        } as AlfrescoApiConfig);
        securityGroupApi = new SecurityGroupsApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('create Security Group', async () => {
        securityGroupMock.createSecurityGroup200Response();
        await securityGroupApi.createSecurityGroup(securityGroupBody,'inUse')
            .then(data => {
                securityGroupId = data.entry.id;
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('get All Security Groups', async () => {
        securityGroupMock.getSecurityGroups200Response();
        await securityGroupApi.getSecurityGroups(['inUse ', 0, 10])
            .then(data => {
                expect(data.list.entries.length).to.be.above(0);
            });
    });

    it('get Security Group Information', async () => {
        securityGroupMock.getSecurityGroupInfo200Response(securityGroupId);
        await securityGroupApi.getSecurityGroupInfo(securityGroupId,['inUse'])
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('update Security Group', async () => {
        securityGroupMock.updateSecurityGroup200Response(securityGroupId);
        const updatedSecurityGroupBody: SecurityGroupBody = {
            "groupName": "Nasa",
        }
        await securityGroupApi.updateSecurityGroup(securityGroupId,updatedSecurityGroupBody,['inUse'])
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Nasa');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('delete Security Group', async () => {
        securityGroupMock.deleteSecurityGroup200Response(securityGroupId);
        await securityGroupApi.deleteSecurityGroup(securityGroupId).then((data) => {
            Promise.resolve(data);
        }).catch((err)=>{
            Promise.reject(err);
        });
    });
});
