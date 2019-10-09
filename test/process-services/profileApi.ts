/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ProfileMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Profile;

describe('Activiti Profile Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.profileMock = new ProfileMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Profile Picture', function (done) {
        this.profileMock.get200getProfilePicture();
        this.alfrescoJsApi.activiti.profileApi.getProfilePicture().then(() => {
            done();
        });
    });

    it('get Profile url Picture', function () {
        expect(this.alfrescoJsApi.activiti.profileApi.getProfilePictureUrl()).equal('http://127.0.0.1:9999/activiti-app/app/rest/admin/profile-picture');
    });

    it('get Profile', function (done) {
        this.profileMock.get200getProfile();
        this.alfrescoJsApi.activiti.profileApi.getProfile().then((data: any) => {
            expect(data.lastName).equal('Administrator');
            expect(data.groups[0].name).equal('analytics-users');
            expect(data.tenantName).equal('test');
            done();
        },                                                       (error: any) => {
            console.log(error);
        });
    });
});
