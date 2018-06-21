/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
var Oauth2Auth = require('../src/oauth2Auth');
var AlfrescoApi = require('../main');

describe('Oauth2  test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://myOauthUrl:30081/auth/realms/springboot';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    describe('With Authentication', function () {

        it('login should return the Token if is ok', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                expect(data.access_token).to.be.equal('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0cHczOUltNE54dXZEN0ZqZ3JOQ3Q2ZkpaVDctQ3JWTzRkX3BLaXJlSTF3In0.eyJqdGkiOiI2OWQ2Njk4Ni0zMWIxLTQzMDYtYjQ0ZS0wZTZiOGFiNmMwMTUiLCJleHAiOjE1Mjk2MDc2MDYsIm5iZiI6MCwiaWF0IjoxNTI5NjA3MzA2LCJpc3MiOiJodHRwOi8vYTVlMmY5M2RlMTBhZjExZThhMDU2MGExYmVhNWI3YzgtMjM2NzA5NDMzLnVzLWVhc3QtMS5lbGIuYW1hem9uYXdzLmNvbTozMDA4MS9hdXRoL3JlYWxtcy9zcHJpbmdib290IiwiYXVkIjoiYWN0aXZpdGkiLCJzdWIiOiJlMjRjZjM0Mi1mYzUwLTRjYjEtYTBjMC01N2RhZWRiODI3NDkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhY3Rpdml0aSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6Ijk0MzNlMjA2LWRmMWEtNDZhMy1iZTdlLTY1YjA0NWExYzM2YiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwKiIsImh0dHA6Ly9hY3Rpdml0aS1jbG91ZC1kZW1vLXVpOjMwMDAiLCJodHRwOi8vYXBza2V5Y2xvYWtzMy5lbnZhbGZyZXNjbyoiLCJodHRwOi8vYXBza2V5Y2xvYWsuZW52YWxmcmVzY28uY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsInZpZXctcmVhbG0iLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsInJlYWxtLWFkbWluIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJicm9rZXIiOnsicm9sZXMiOlsicmVhZC10b2tlbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4ifQ.mJd_FFUor0KydllQWQ-MHprQYH6xman_Tu3054bBdcMT2Q4JmduTzucJBe0gUJkTJfr6xZ9dVfhHn6Gbw-bumwczLq2tzosIN6XipMwLRWSxxsApkDuQq-jwuOnO8bigQO8X1mBJGxenLsJueYjFP3aQlhWvJ0Seuq-I5-dCQ_tofbb3XqicJyz9OmsuJ3aZYHBWryQVEXfoadgFDMwTZHpQ00GH4JzTI4jZVbrG7SgkpZCSTrNGLNAF3bcdN_YWzKxw9RHZ03nOCVRy9j0_o49RoNmB8O2PvrVeqV49H8bRTYGCmkNyQwFQL2HNvvXUVxigqw6XkDDqZoEWIA5DAQ');
                done();
            }, function () {
            });


        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                expect(this.oauth2Auth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('login password should be removed after login', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.authentications.basicAuth.password).to.be.not.equal('admin');
                done();
            }, () => {
            });

        });

        it.only('refresh token should change the token', function (done) {

            this.oauth2Mock.rec();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://a5e2f93de10af11e8a0560a1bea5b7c8-236709433.us-east-1.elb.amazonaws.com:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then(() => {


                this.oauth2Auth.refreshToken().then(() => {
                    expect(this.oauth2Auth.authentications.basicAuth.accessToken).to.be.equal('f8bccca0-76cf-4bd9-bb16-a867ffdd5a35');
                    done();
                }, (error) => {
                    this.oauth2Mock.play();
                    console.log('error' + error);
                });
            });
        });
    });
});
