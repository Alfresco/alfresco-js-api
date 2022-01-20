import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi } from '../../src/api/gs-classification-rest-api';
import { expect } from 'chai';
import { SecurityGroupBody } from '../../src/api/gs-classification-rest-api/model/securityGroupBody';

describe('Security Group API test', () => {
    let securityGroupApi: SecurityGroupsApi;
    let securityGroupBody: SecurityGroupBody = {
        "groupName": "Alfresco",
        "groupType": "HIERARCHICAL"
    }
    let securityGroupId: string;
    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm,
            provider: 'ECM'
        });
        securityGroupApi = new SecurityGroupsApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('create Security Group', async () => {
        await securityGroupApi.createSecurityGroup(securityGroupBody,'inUse')
            .then(data => {
                securityGroupId = data.entry.id;
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('get All Security Groups', async () => {
        await securityGroupApi.getSecurityGroups(['inUse ', 0, 10])
            .then(data => {
                expect(data.list.entries.length).to.be.above(0);
            });
    });

    it('get Security Group Information', async () => {
        await securityGroupApi.getSecurityGroupInfo(securityGroupId,['inUse'])
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('update Security Group', async () => {
        let updatedSecurityGroupBody: SecurityGroupBody = {
            "groupName": "Nasa",
        }
        await securityGroupApi.updateSecurityGroup(securityGroupId,updatedSecurityGroupBody,['inUse'])
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Nasa');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('delete Security Group', (done) => {
        securityGroupApi.deleteSecurityGroup(securityGroupId)
            .then(
                () => {
                    done();
                }
            );
    });
});
