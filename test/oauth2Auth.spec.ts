/*global describe, it, beforeEach */

import { AlfrescoApiConfig } from '../src/alfrescoApiConfig';

let expect = require('chai').expect;
let Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
import { Oauth2Auth } from '../src/authentication/oauth2Auth';

describe('Oauth2  test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://myOauthUrl:30081';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    describe('With Authentication', function () {

        it('login should return the Token if is ok', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = Oauth2Auth.getInstance(<AlfrescoApiConfig>{
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
                expect(data.access_token).to.be.equal('test-token');
                done();
            },                                           function (e) {
                console.log('e' + e);
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = Oauth2Auth.getInstance(<AlfrescoApiConfig>{
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
            },                                           function () {
            });
        });

        it('login password should be removed after login', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = Oauth2Auth.getInstance(<AlfrescoApiConfig>{
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
            },                                           () => {
            });

        });
    });
});
