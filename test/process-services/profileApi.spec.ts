import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { UserProfileApi } from '../../src/api/activiti-rest-api/api/userProfile.api';
import { BpmAuthMock } from '../mockObjects';
let ProfileMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Profile;

describe('Activiti Profile Api', () => {
    let profileApi: UserProfileApi;

    let profileMock: any;
    let authResponseBpmMock: BpmAuthMock;

    beforeEach(async () => {
        const BPM_HOST = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(BPM_HOST);
        profileMock = new ProfileMock(BPM_HOST);

        authResponseBpmMock.get200Response();

        const alfrescoApi = new AlfrescoApi({
            hostBpm: BPM_HOST,
            provider: 'BPM'
        });

        profileApi = new UserProfileApi(alfrescoApi);

        await alfrescoApi.login('admin', 'admin');
    });

    it('get Profile Picture', async () => {
        profileMock.get200getProfilePicture();
        await profileApi.getProfilePicture();
    });

    it('get Profile url Picture', () => {
        expect(profileApi.getProfilePictureUrl()).equal('http://127.0.0.1:9999/activiti-app/app/rest/admin/profile-picture');
    });

    it('get Profile', async () => {
        profileMock.get200getProfile();
        const data = await profileApi.getProfile();
        expect(data.lastName).equal('Administrator');
        expect(data.groups[0].name).equal('analytics-users');
        expect(data.tenantName).equal('test');
    });
});
