import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi } from '../../src/api/gs-classification-rest-api';
import { expect } from 'chai';
import { SecurityGroupBody } from '../../src/api/gs-classification-rest-api/model/securityGroupBody';

describe('Security Group API test', () => {
    let securityGroupApi: SecurityGroupsApi;
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
        let securityGroupBody: SecurityGroupBody = {
            "groupName": "Alfresco",
            "groupType": "HIERARCHICAL"
        }
        await securityGroupApi.createSecurityGroup(securityGroupBody,'inUse')
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('get Security Group', async () => {
        await securityGroupApi.getSecurityGroups('inUse ', 0, 10)
            .then(data => {
                expect(data.list.pagination.count).to.be.equal(1);
                expect(data.list.entries[0].entry.id).to.be.equal('classification');
                expect(data.list.entries[0].entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });
});
