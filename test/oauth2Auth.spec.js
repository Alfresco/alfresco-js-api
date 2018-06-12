/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
var Oauth2Auth = require('../src/oauth2Auth');
var AlfrescoApi = require('../main');

describe('Oauth2  test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://127.0.0.1:9191';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    describe('With Authentication', function () {

        it('login should return the Token if is ok', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'alfrescoapp',
                    secret: 'secret',
                    scope: 'scope'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                expect(data.access_token).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                expect(data.legacyToken).to.be.equal('LegacyToken{legacyTokenBpm=\'Basic YWRtaW46YWRtaW4=\', tokenId=\'null\', legacyTokenEcm=\'TICKET_bbead3a54dbe141f77e442e6703f7fa29671107a\'}');
                done();
            }, function () {
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'alfrescoapp',
                    secret: 'secret',
                    scope: 'scope'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('Access token should be delivered with any ECM call', function (done) {

            this.oauth2Mock.get200Response();

            this.alfrescoJsApi = new AlfrescoApi({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'alfrescoapp',
                    secret: 'secret',
                    scope: 'scope'
                },
                authType: 'OAUTH'
            });

            this.alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.accessToken).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.refreshToken).to.be.equal('15d66b26-3cf7-446a-8db8-1345f2f4485a');
                done();
            }, () => {
            });
        });

        it('Should return the access token with a custom auth endpoint', function (done) {

            this.oauth2Mock.get200CustomResponse('/my-custom-auth/token');

            this.alfrescoJsApi = new AlfrescoApi({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'alfrescoapp',
                    secret: 'secret',
                    authPath: '/my-custom-auth/token',
                    scope: 'scope'
                },
                authType: 'OAUTH'
            });

            this.alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.accessToken).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.refreshToken).to.be.equal('15d66b26-3cf7-446a-8db8-1345f2f4485a');
                done();
            }, () => {
            });
        });

        it('login password should be removed after login', function (done) {

            this.oauth2Mock.get200Response();

            this.alfrescoJsApi = new AlfrescoApi({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'alfrescoapp',
                    secret: 'secret',
                    scope: 'scope'
                },
                authType: 'OAUTH'
            });

            this.alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.authentications.basicAuth.password).to.be.not.equal('admin');
                done();
            }, () => {
            });

        });

        it('refresh token should change the token', function (done) {

            this.oauth2Mock.get200Response();

            this.alfrescoJsApi = new AlfrescoApi({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'alfrescoapp',
                    secret: 'secret',
                    scope: 'scope'
                },
                authType: 'OAUTH'
            });

            this.alfrescoJsApi.login('admin', 'admin').then(() => {

                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.accessToken).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.refreshToken).to.be.equal('15d66b26-3cf7-446a-8db8-1345f2f4485a');

                this.oauth2Mock.get200RefreshTokenResponse(this.alfrescoJsApi.ecmClient.authentications.basicAuth.refreshToken);

                this.alfrescoJsApi.refreshToken().then(() => {
                    expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.accessToken).to.be.equal('f8bccca0-76cf-4bd9-bb16-a867ffdd5a35');
                    done();
                }, (error) => {
                    console.log('error' + error);
                });
            });
        });
    });
});
