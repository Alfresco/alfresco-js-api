/*global describe, it, beforeEach */

import { AlfrescoApiConfig } from '../src/alfrescoApiConfig';

let chai = require('chai');
let expect = chai.expect;
let spies = require('chai-spies');
chai.use(spies);
let Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
let AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
import { Oauth2Auth } from '../src/authentication/oauth2Auth';
import { AlfrescoApi } from '../src/alfrescoApi';
import { ContentApi } from '../src/api/content-rest-api/api/content.api';
import { AlfrescoApiCompatibility } from '../src/alfrescoApiCompatibility';

let jsdom = require('mocha-jsdom');
const globalAny: any = global;

import { Storage } from '../src/storage';

describe('Oauth2  test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://myOauthUrl:30081';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
        this.authResponseMock = new AuthResponseMock(this.hostOauth2);
        this.alfrescoJsApi = new AlfrescoApiCompatibility({
            hostEcm: this.hostEcm
        });
    });

    describe('With Authentication', function () {

        it('should be possible have different user login in different instance of the oauth2Auth class', async () => {
            const oauth2AuthInstanceOne = new Oauth2Auth(<AlfrescoApiConfig>{
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                                           new AlfrescoApiCompatibility({
                hostEcm: 'myecm'
            }));

            const oauth2AuthInstanceTwo = new Oauth2Auth(<AlfrescoApiConfig>{
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                                           new AlfrescoApiCompatibility({
                hostEcm: 'myecm'
            }));

            const oauth2Mock = new Oauth2Mock('http://myOauthUrl:30081');
            oauth2Mock.get200Response('superman-token');
            let loginInstanceOne = await oauth2AuthInstanceOne.login('superman', 'crypto');

            oauth2Mock.get200Response('barman-token');
            let loginInstanceTwo = await oauth2AuthInstanceTwo.login('barman', 'IamBarman');

            expect(loginInstanceOne.access_token).to.be.equal('superman-token');
            expect(loginInstanceTwo.access_token).to.be.equal('barman-token');
        });

        it('login should return the Token if is ok', function (done) {

            this.oauth2Mock.get200Response();

            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            this.oauth2Auth.login('admin', 'admin').then((data: any) => {
                    expect(data.access_token).to.be.equal('test-token');
                    done();
                },
                                                         function (error: any) {
                    console.log('error' + error);
                });

        });

        it('should emit a token_issued event if login is ok ', function (done) {

            this.oauth2Mock.get200Response();

            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            this.oauth2Auth.once('token_issued', () => {
                done();
            });

            this.oauth2Auth.login('admin', 'admin');
        });

        it('should not emit a token_issued if provider is BPM', function () {

            const exchangeTicketListenerSpy = chai.spy.on(this.oauth2Auth, 'exchangeTicketListener');

            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                provider: 'BPM',
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            expect(exchangeTicketListenerSpy).not.to.have.been.called();
        });

        it('should emit a token_issued if provider is ECM', function (done) {

            this.oauth2Mock.get200Response();
            this.authResponseMock.get200ValidTicket();
            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                provider: 'ECM',
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            this.oauth2Auth.once('token_issued', () => {
                done();
            });

            this.oauth2Auth.login('admin', 'admin');
        });

        it('should emit a token_issued if provider is ALL', function (done) {

            this.oauth2Mock.get200Response();
            this.authResponseMock.get200ValidTicket();
            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                provider: 'ALL',
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            this.oauth2Auth.once('token_issued', () => {
                done();
            });

            this.oauth2Auth.login('admin', 'admin');
        });

        it('should after token_issued event exchange the access_token for the alf_ticket', function (done) {

            this.oauth2Mock.get200Response();
            this.authResponseMock.get200ValidTicket();
            let alfrescoApi = new AlfrescoApi(<AlfrescoApiConfig>{
                hostEcm: 'http://myOauthUrl:30081',
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

            alfrescoApi.oauth2Auth.once('ticket_exchanged', () => {
                expect(alfrescoApi.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                expect(alfrescoApi.contentClient.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                let content = new ContentApi(alfrescoApi);
                let URL = content.getContentUrl('FAKE-NODE-ID');
                expect(URL).to.be.equal('http://myOauthUrl:30081/alfresco/api/-default-/public/alfresco/versions/1/nodes/FAKE-NODE-ID/content?attachment=false&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                done();
            });

            alfrescoApi.login('admin', 'admin');
        });

        it('should after token_issued event exchange the access_token for the alf_ticket with the compatibility layer', function (done) {

            this.oauth2Mock.get200Response();
            this.authResponseMock.get200ValidTicket();
            let alfrescoApi = new AlfrescoApiCompatibility(<AlfrescoApiConfig>{
                hostEcm: 'http://myOauthUrl:30081',
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

            alfrescoApi.oauth2Auth.once('ticket_exchanged', () => {
                expect(alfrescoApi.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                expect(alfrescoApi.contentClient.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                let URL = alfrescoApi.content.getContentUrl('FAKE-NODE-ID');
                expect(URL).to.be.equal('http://myOauthUrl:30081/alfresco/api/-default-/public/alfresco/versions/1/nodes/FAKE-NODE-ID/content?attachment=false&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                done();
            });

            alfrescoApi.login('admin', 'admin');
        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.oauth2Mock.get200Response();

            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            this.oauth2Auth.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.isLoggedIn()).to.be.equal(true);
                done();
            },                                           function () {
            });
        });

        it('login password should be removed after login', function (done) {

            this.oauth2Mock.get200Response();

            this.oauth2Auth = new Oauth2Auth(<AlfrescoApiConfig>{
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            },                               this.alfrescoJsApi);

            this.oauth2Auth.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.authentications.basicAuth.password).to.be.not.equal('admin');
                done();
            },                                           () => {
            });

        });

        describe('With mocked DOM', function () {
            jsdom({ url: 'http://localhost' });
            it('a failed hash check calls the logout', function () {

                this.oauth2Auth.storage = new Storage();

                this.oauth2Auth.createIframe();

                const iframe = <HTMLIFrameElement> document.getElementById('silent_refresh_token_iframe');
                iframe.contentWindow.location.hash = 'invalid';

                // define spy on logOut
                const logoutSpy = chai.spy.on(this.oauth2Auth, 'logOut');

                // invalid hash location leads to a reject which leads to a log out
                this.oauth2Auth.iFrameHashListener();
                setTimeout(() => expect(logoutSpy).to.have.been.called(), 500);
            });
        });

        describe('public urls', function () {
            it('should return `true` if url is defined in public urls list', function () {
                globalAny.window = { location: { href: 'public-url' } };
                this.oauth2Auth.config.oauth2.publicUrls = ['public-url'];

                expect(this.oauth2Auth.isPublicUrl()).to.be.equal(true);
            });

            it('should return `false` if url is not defined in public urls list', function () {
                globalAny.window = { location: { href: 'some-public-url' } };
                this.oauth2Auth.config.oauth2.publicUrls = ['public-url'];

                expect(this.oauth2Auth.isPublicUrl()).to.be.equal(false);
            });

            it('should return `false` if publicUrls property is not defined', function () {
                expect(this.oauth2Auth.isPublicUrl()).to.be.equal(false);
            });

            it('should return `false` if public urls is not set as an array list', function () {
                globalAny.window = { location: { href: 'public-url-string' } };
                this.oauth2Auth.config.oauth2.publicUrls = 'public-url-string';

                expect(this.oauth2Auth.isPublicUrl()).to.be.equal(false);
            });

            it('should match absolute path', function () {
                globalAny.window = { location: { href: 'http://some-public-url' } };
                this.oauth2Auth.config.oauth2.publicUrls = ['http://some-public-url'];

                expect(this.oauth2Auth.isPublicUrl()).to.be.equal(true);
            });

            it('should match a path pattern', function () {
                globalAny.window = { location: { href: 'http://some-public-url/123/path' } };
                this.oauth2Auth.config.oauth2.publicUrls = ['**/some-public-url/*/path'];

                expect(this.oauth2Auth.isPublicUrl()).to.be.equal(true);
            });

            it('should not call `implicitLogin`', async function () {
                globalAny.window = { location: { href: 'public-url' } };
                this.oauth2Auth.config.oauth2.silentLogin = true;
                this.oauth2Auth.config.oauth2.publicUrls = ['public-url'];
                const implicitLoginSpy = chai.spy.on(this.oauth2Auth, 'implicitLogin');

                await this.oauth2Auth.checkFragment();
                expect(implicitLoginSpy).not.to.have.been.called();
            });
        });
    });
});
