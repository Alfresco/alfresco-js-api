import { AlfrescoApi } from '../src/alfrescoApi';

const expect = require('chai').expect;
const AuthEcmMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
const AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
const Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;

describe('Basic configuration test', () => {

    describe('config parameter ', () => {

        it('Should basePath have a default value', () => {
            let config = {};

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
        });

        it('should be reflected in the client', () => {
            let config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot'
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://testServer.com:1616/strangeContextRoot/api/-default-/public/alfresco/versions/1');
        });
    });

    describe('setconfig parameter ', () => {

        it('should be possible change the host in the client', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot'
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://testServer.com:1616/strangeContextRoot/api/-default-/public/alfresco/versions/1');

            const newConfig = {
                hostEcm: 'http://testServer.com:2616',
                contextRoot: 'strangeContextRoot'
            };

            alfrescoJsApi.setConfig(newConfig);

            expect(alfrescoJsApi.contentClient.basePath)
                .equal('http://testServer.com:2616/strangeContextRoot/api/-default-/public/alfresco/versions/1');
        });
    });

    describe('CSRF', () => {

        it('should disableCsrf true parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                disableCsrf: true
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.isCsrfEnabled()).equal(false);
            expect(alfrescoJsApi.processClient.isCsrfEnabled()).equal(false);
        });

        it('should disableCsrf false parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                disableCsrf: false
            };

            const alfrescoJsApi = new AlfrescoApi(config);

            expect(alfrescoJsApi.contentClient.isCsrfEnabled()).equal(true);
            expect(alfrescoJsApi.processClient.isCsrfEnabled()).equal(true);
        });
    });

    describe('WithCredentials', () => {
        it('should withCredentials true parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: true
            };
            const alfrescoJsApi = new AlfrescoApi(config);
            expect(alfrescoJsApi.contentClient.isWithCredentials()).equal(true);
            expect(alfrescoJsApi.processClient.isWithCredentials()).equal(true);
        });

        it('should withCredentials false parameter should be reflected in the clients', () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: false
            };
            const alfrescoJsApi = new AlfrescoApi(config);
            expect(alfrescoJsApi.contentClient.isWithCredentials()).equal(false);
            expect(alfrescoJsApi.processClient.isWithCredentials()).equal(false);
        });
    });

    describe('login', () => {

        it('Should login be rejected if username or password are not provided', async () => {
            const config = {
                hostEcm: 'http://testServer.com:1616',
                contextRoot: 'strangeContextRoot',
                withCredentials: true
            };
            const alfrescoJsApi = new AlfrescoApi(config);

            let error;

            try {
                await alfrescoJsApi.login(undefined, undefined);
            } catch (e) {
                error = e;
            }

            expect(error).equal('missing username or password');

            error = undefined;

            try {
                await alfrescoJsApi.login('username', undefined);
            } catch (e) {
                error = e;
            }

            expect(error).equal('missing username or password');

            error = undefined;

            try {
                await alfrescoJsApi.login(undefined, 'password');
            } catch (e) {
                error = e;
            }

            expect(error).equal('missing username or password');

            error = undefined;

            try {
                await alfrescoJsApi.login('', '');
            } catch (e) {
                error = e;
            }

            expect(error).equal('missing username or password');

            error = undefined;

            try {
                await alfrescoJsApi.login('username', '');
            } catch (e) {
                error = e;
            }

            expect(error).equal('missing username or password');

            error = undefined;

            try {
                await alfrescoJsApi.login('', 'password');
            } catch (e) {
                error = e;
            }

            expect(error).equal('missing username or password');
        });

        it('Should logged-in be emitted when log in ECM', (done) => {
            const hostEcm = 'http://127.0.0.1:8080';

            const authEcmMock = new AuthEcmMock(hostEcm);

            const alfrescoJsApi = new AlfrescoApi({
                hostEcm,
                provider: 'ECM'
            });

            authEcmMock.get201Response();

            alfrescoJsApi.on('logged-in', () => {
                done();
            });

            alfrescoJsApi.login('admin', 'admin')
        });

        it('Should logged-in be emitted when log in BPM', (done) => {
            const hostBpm = 'http://127.0.0.1:9999';
            const authBpmMock = new AuthBpmMock(hostBpm);

            authBpmMock.get200Response();

            const alfrescoJsApi = new AlfrescoApi({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app',
                provider: 'BPM'
            });

            alfrescoJsApi.on('logged-in', () => {
                done();
            });

            alfrescoJsApi.login('admin', 'admin')
        });

        it('Should logged-in be emitted when log in OAUTH', (done) => {
            const oauth2Mock = new Oauth2Mock('http://myOauthUrl:30081');

            oauth2Mock.get200Response();

            const alfrescoJsApi = new AlfrescoApi({
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

            alfrescoJsApi.on('logged-in', () => {
                done();
            });

            alfrescoJsApi.login('admin', 'admin')
        });

        it('Should logged-in be emitted when the ticket is in the store', (done) => {
            const hostBpm = 'http://127.0.0.1:9999';
            const authBpmMock = new AuthBpmMock(hostBpm);

            authBpmMock.get200Response();

            const alfrescoJsApi = new AlfrescoApi({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app',
                provider: 'BPM'
            });

            alfrescoJsApi.login('admin', 'admin').then(()=>{

                alfrescoJsApi.reply('logged-in', () => {
                    done();
                });
            });

        });

    });

});
