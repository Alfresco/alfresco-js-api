import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi } from '../../src/api/gs-classification-rest-api';
import { SecurityGroupBody } from '../../src/api/gs-classification-rest-api/model/securityGroupBody';
import { SecurityMarksApi } from '../../src/api/gs-classification-rest-api';
import { SecurityMarkBody } from '../../src/api/gs-classification-rest-api/model/securityMarkBody';

describe('Security Group API test', () => {
    let securityGroupApi: SecurityGroupsApi;
    let securityMarksApi: SecurityMarksApi;
    let securityMarkBody: SecurityMarkBody={
       'name' : 'SecurityMarkTest',
    }
    let securityGroupBody: SecurityGroupBody = {
        "groupName": "Alfresco",
        "groupType": "HIERARCHICAL"
    }
    let securityGroupId: string;
    let securityMarkId: string;
    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm,
            provider: 'ECM'
        });
        securityGroupApi = new SecurityGroupsApi(alfrescoApi);
        securityMarksApi = new SecurityMarksApi(alfrescoApi);
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

    it('create Security Mark', async () => {
        await securityMarksApi.createSecurityMark(securityGroupId,securityMarkBody)
            .then(data => {
                securityMarkId = data.entry.id;
                console.log("Success");
                expect(data.entry.id).not.equal(null);
                expect(data.entry.name).to.be.equal('SecurityMarkTest');
                expect(data.entry.groupId).to.be.equal(securityGroupId);
            });
    });

    it('get All Security Marks', async () => {
        await securityMarksApi.getSecurityMarks(securityGroupId,['inUse', 0, 10])
            .then(data => {
                expect(data.list.entries.length).to.be.above(0);
            });
    });

    it('get Security Mark Information', async () => {
        await securityMarksApi.getSecurityMark(securityGroupId,securityMarkId)
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.name).to.be.equal('SecurityMarkTest');
                expect(data.entry.groupId).to.be.equal(securityGroupId);
            });
    });

    it('update Security Mark', async () => {
        let updatedSecurityMarkBody: SecurityMarkBody = {
            'name' : 'AlfrescoSecurityMark',
        }
        await securityMarksApi.updateSecurityMark(securityGroupId,securityMarkId,updatedSecurityMarkBody)
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.name).to.be.equal('AlfrescoSecurityMark');
                expect(data.entry.groupId).to.be.equal(securityGroupId);
            });
    });

    it('delete Security Mark', (done) => {
        securityMarksApi.deleteSecurityMark(securityGroupId,securityMarkId)
            .then(
                () => {
                    done();
                }
            );
    });
});
