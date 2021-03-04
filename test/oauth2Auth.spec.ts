import { AlfrescoApi } from '../src/alfrescoApi';
import { AlfrescoApiConfig } from '../src/alfrescoApiConfig';
import { Oauth2Auth } from '../src/authentication/oauth2Auth';
import { ContentApi } from '../src/api/content-custom-api/api/content.api';
import { Storage } from '../src/storage';

const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
const AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;

const jsdom = require('mocha-jsdom');
const globalAny: any = global;

describe('Oauth2  test', () => {
    let alfrescoJsApi: AlfrescoApi;
    let oauth2Mock: any;
    let authResponseMock: any;

    beforeEach(() => {
        const hostOauth2 = 'http://myOauthUrl:30081';

        oauth2Mock = new Oauth2Mock(hostOauth2);
        authResponseMock = new AuthResponseMock(hostOauth2);

        alfrescoJsApi = new AlfrescoApi({
            hostEcm: 'myecm'
        });
    });

    describe('With Authentication', () => {

        it('should be possible have different user login in different instance of the oauth2Auth class', async () => {
            const oauth2AuthInstanceOne = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            const oauth2AuthInstanceTwo = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            const oauth2Mock = new Oauth2Mock('http://myOauthUrl:30081');
            oauth2Mock.get200Response('superman-token');
            let loginInstanceOne = await oauth2AuthInstanceOne.login('superman', 'crypto');

            oauth2Mock.get200Response('barman-token');
            let loginInstanceTwo = await oauth2AuthInstanceTwo.login('barman', 'IamBarman');

            expect(loginInstanceOne.access_token).to.be.equal('superman-token');
            expect(loginInstanceTwo.access_token).to.be.equal('barman-token');

            oauth2AuthInstanceOne.logOut();
            oauth2AuthInstanceTwo.logOut();
        });

        it('login should return the Token if is ok', (done) => {
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            oauth2Auth.login('admin', 'admin').then(
                (data) => {
                    expect(data.access_token).to.be.equal('test-token');
                    oauth2Auth.logOut();
                    done();
                },
                (error: any) => {
                    console.log('error' + error);
                }
            );
        });

        it('should refresh token when the login not use the implicitFlow ', function (done) {
            this.timeout(3000);
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout',
                        'implicitFlow': false,
                        'refreshTokenTimeout': 100
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            const refreshSpy = chai.spy.on(oauth2Auth, 'refreshToken');

            setTimeout(() => {
                expect(refreshSpy).to.have.been.called.min(2);
                oauth2Auth.logOut();
                done();
            },         600);

            oauth2Auth.login('admin', 'admin');
        });

        it('should not hang the app also if teh logout is missing', function (done) {
            this.timeout(3000);
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout',
                        'implicitFlow': false,
                        'refreshTokenTimeout': 100
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            const refreshSpy = chai.spy.on(oauth2Auth, 'refreshToken');

            setTimeout(() => {
                expect(refreshSpy).to.have.been.called.min(2);
                done();
            },         600);

            oauth2Auth.login('admin', 'admin');
        });

        it('should emit a token_issued event if login is ok ', (done) => {
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            oauth2Auth.once('token_issued', () => {
                oauth2Auth.logOut();
                done();
            });

            oauth2Auth.login('admin', 'admin');
        });

        it('should not emit a token_issued event if setToken is null ', (done) => {
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            let counterCallEvent = 0;
            oauth2Auth.once('token_issued', () => {
                counterCallEvent++;
            });

            oauth2Auth.setToken(null, null);
            oauth2Auth.setToken('200', null);
            oauth2Auth.setToken(null, null);

            expect(counterCallEvent).to.be.equal(1);

            done();
        });

        it('should emit a token_issued if provider is ECM', (done) => {
            oauth2Mock.get200Response();
            authResponseMock.get200ValidTicket();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
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
                },
                alfrescoJsApi
            );

            oauth2Auth.once('token_issued', () => {
                oauth2Auth.logOut();
                done();
            });

            oauth2Auth.login('admin', 'admin');
        });

        it('should emit a token_issued if provider is ALL', (done) => {
            oauth2Mock.get200Response();
            authResponseMock.get200ValidTicket();
            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
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
                },
                alfrescoJsApi
            );

            oauth2Auth.once('token_issued', () => {
                oauth2Auth.logOut();
                done();
            });

            oauth2Auth.login('admin', 'admin');
        });

        it('should after token_issued event exchange the access_token for the alf_ticket', (done) => {
            oauth2Mock.get200Response();
            authResponseMock.get200ValidTicket();

            const alfrescoApi = new AlfrescoApi(<AlfrescoApiConfig> {
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

            alfrescoApi.oauth2Auth.on('ticket_exchanged', () => {
                expect(alfrescoApi.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                expect(alfrescoApi.contentClient.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                let content = new ContentApi(alfrescoApi);
                let URL = content.getContentUrl('FAKE-NODE-ID');
                expect(URL).to.be.equal('http://myOauthUrl:30081/alfresco/api/-default-/public/alfresco/versions/1/nodes/FAKE-NODE-ID/content?attachment=false&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                alfrescoApi.oauth2Auth.logOut();
                done();
            });

            alfrescoApi.login('admin', 'admin');
        });

        it('should after token_issued event exchange the access_token for the alf_ticket with the compatibility layer', (done) => {
            oauth2Mock.get200Response();
            authResponseMock.get200ValidTicket();

            const alfrescoApi = new AlfrescoApi(<AlfrescoApiConfig> {
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

            const contentApi = new ContentApi(alfrescoApi);

            alfrescoApi.oauth2Auth.on('ticket_exchanged', () => {
                expect(alfrescoApi.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                expect(alfrescoApi.contentClient.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                const URL = contentApi.getContentUrl('FAKE-NODE-ID');
                expect(URL).to.be.equal('http://myOauthUrl:30081/alfresco/api/-default-/public/alfresco/versions/1/nodes/FAKE-NODE-ID/content?attachment=false&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                alfrescoApi.oauth2Auth.logOut();

                done();
            });

            alfrescoApi.login('admin', 'admin');
        });

        it('should extend content session after oauth token refresh', function (done)  {
            oauth2Mock.get200Response();
            authResponseMock.get200ValidTicket();

            const alfrescoApi = new AlfrescoApi(<AlfrescoApiConfig> {
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

            let counterCallEvent = 0;
            alfrescoApi.oauth2Auth.on('ticket_exchanged', () => {
                expect(alfrescoApi.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                expect(alfrescoApi.contentClient.config.ticketEcm).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                let content = new ContentApi(alfrescoApi);
                let URL = content.getContentUrl('FAKE-NODE-ID');
                expect(URL).to.be.equal('http://myOauthUrl:30081/alfresco/api/-default-/public/alfresco/versions/1/nodes/FAKE-NODE-ID/content?attachment=false&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

                counterCallEvent++;

                if (counterCallEvent === 2) {
                    done();
                }
            });

            alfrescoApi.login('admin', 'admin');
            this.timeout(3000);
            alfrescoApi.refreshToken();
            this.timeout(3000);
        });

        it('isLoggedIn should return true if the api is logged in', (done) => {
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            oauth2Auth.login('admin', 'admin').then(() => {
                expect(oauth2Auth.isLoggedIn()).to.be.equal(true);
                oauth2Auth.logOut();
                done();
            });
        });

        it('login password should be removed after login', (done) => {
            oauth2Mock.get200Response();

            const oauth2Auth = new Oauth2Auth(
                <AlfrescoApiConfig> {
                    oauth2: {
                        'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                        'clientId': 'activiti',
                        'scope': 'openid',
                        'secret': '',
                        'redirectUri': '/',
                        'redirectUriLogout': '/logout'
                    },
                    authType: 'OAUTH'
                },
                alfrescoJsApi
            );

            oauth2Auth.login('admin', 'admin').then(() => {
                expect(oauth2Auth.authentications.basicAuth.password).to.be.not.equal('admin');
                oauth2Auth.logOut();
                done();
            });
        });

        describe('With mocked DOM', () => {
            jsdom({ url: 'http://localhost' });
            it('a failed hash check calls the logout', () => {

                const oauth2Auth = new Oauth2Auth(
                    <AlfrescoApiConfig> {
                        oauth2: {
                            'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                            'clientId': 'activiti',
                            'scope': 'openid',
                            'secret': '',
                            'redirectUri': '/',
                            'redirectUriLogout': '/logout'
                        },
                        authType: 'OAUTH'
                    },
                    alfrescoJsApi
                );

                oauth2Auth.storage = new Storage();
                oauth2Auth.createIframe();

                const iframe = <HTMLIFrameElement> document.getElementById('silent_refresh_token_iframe');
                iframe.contentWindow.location.hash = 'invalid';

                // define spy on logOut
                const logoutSpy = chai.spy.on(oauth2Auth, 'logOut');

                // invalid hash location leads to a reject which leads to a log out
                oauth2Auth.iFrameHashListener();
                setTimeout(() => {
                    expect(logoutSpy).to.have.been.called();
                },         500);
            });
        });

        describe('public urls', () => {
            let oauth2Auth: any;

            beforeEach(() => {
                oauth2Auth = new Oauth2Auth(
                    <AlfrescoApiConfig> {
                        oauth2: {
                            'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                            'clientId': 'activiti',
                            'scope': 'openid',
                            'secret': '',
                            'redirectUri': '/',
                            'redirectUriLogout': '/logout'
                        },
                        authType: 'OAUTH'
                    },
                    alfrescoJsApi
                );
            });

            it('should return `true` if url is defined in public urls list', () => {
                globalAny.window = { location: { href: 'public-url' } };
                oauth2Auth.config.oauth2.publicUrls = ['public-url'];

                expect(oauth2Auth.isPublicUrl()).to.be.equal(true);
            });

            it('should return `false` if url is not defined in public urls list', () => {
                globalAny.window = { location: { href: 'some-public-url' } };
                oauth2Auth.config.oauth2.publicUrls = ['public-url'];

                expect(oauth2Auth.isPublicUrl()).to.be.equal(false);
            });

            it('should return `false` if publicUrls property is not defined', () => {
                expect(oauth2Auth.isPublicUrl()).to.be.equal(false);
            });

            it('should return `false` if public urls is not set as an array list', () => {
                globalAny.window = { location: { href: 'public-url-string' } };
                oauth2Auth.config.oauth2.publicUrls = 'public-url-string';

                expect(oauth2Auth.isPublicUrl()).to.be.equal(false);
            });

            it('should match absolute path', () => {
                globalAny.window = { location: { href: 'http://some-public-url' } };
                oauth2Auth.config.oauth2.publicUrls = ['http://some-public-url'];

                expect(oauth2Auth.isPublicUrl()).to.be.equal(true);
            });

            it('should match a path pattern', () => {
                globalAny.window = { location: { href: 'http://some-public-url/123/path' } };
                oauth2Auth.config.oauth2.publicUrls = ['**/some-public-url/*/path'];

                expect(oauth2Auth.isPublicUrl()).to.be.equal(true);
            });

            it('should not call `implicitLogin`', async () => {
                globalAny.window = { location: { href: 'public-url' } };
                oauth2Auth.config.oauth2.silentLogin = true;
                oauth2Auth.config.oauth2.publicUrls = ['public-url'];
                const implicitLoginSpy = chai.spy.on(oauth2Auth, 'implicitLogin');

                await oauth2Auth.checkFragment();
                expect(implicitLoginSpy).not.to.have.been.called();
            });
        });
    });
});
