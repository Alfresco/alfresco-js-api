import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi } from '../../src/api/gs-classification-rest-api';

describe('Security Group API test', () => {
    let securityGroupApi: SecurityGroupsApi;
    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        const alfrescoApi = new AlfrescoApi({
            hostBpm: hostEcm,
            provider: 'ECM'
        });
        securityGroupApi = new SecurityGroupsApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('get Security Group', async () => {
        await securityGroupApi.getSecurityGroups("inUse ",0,10);
    });
});
