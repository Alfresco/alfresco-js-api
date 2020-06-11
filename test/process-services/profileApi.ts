/*global describe, it, beforeEach */

const expect = require('chai').expect;
import { AlfrescoApi } from '../../src/alfrescoApi';
import { UserProfileApi } from '../../src/api/activiti-rest-api/api/userProfile.api';
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ProfileMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Profile;

describe('Activiti Profile Api', function () {
    let profileApi: UserProfileApi;

    let profileMock: any;
    let authResponseBpmMock: any;

    beforeEach(function (done) {
        const hostBpm = 'http://127.0.0.1:9999';

        authResponseBpmMock = new AuthBpmMock(hostBpm);
        profileMock = new ProfileMock(hostBpm);

        authResponseBpmMock.get200Response();

        const alfrescoApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        profileApi = new UserProfileApi(alfrescoApi);

        alfrescoApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Profile Picture', function (done) {
        profileMock.get200getProfilePicture();
        profileApi.getProfilePicture().then(() => {
            done();
        });
    });

    it('get Profile url Picture', function () {
        expect(profileApi.getProfilePictureUrl()).equal('http://127.0.0.1:9999/activiti-app/app/rest/admin/profile-picture');
    });

    it('get Profile', function (done) {
        this.profileMock.get200getProfile();
        profileApi.getProfile().then(
            (data: any) => {
                expect(data.lastName).equal('Administrator');
                expect(data.groups[0].name).equal('analytics-users');
                expect(data.tenantName).equal('test');
                done();
            },
            (error: any) => {
                console.log(error);
            }
        );
    });
});
