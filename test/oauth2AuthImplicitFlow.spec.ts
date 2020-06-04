import { AlfrescoApi } from '../src/alfrescoApi';
import { Oauth2Auth } from '../src/authentication/oauth2Auth';

const expect = require('chai').expect;

declare let window: any;
const globalAny: any = global;

describe('Oauth2 Implicit flow test', () => {
    let oauth2Auth: Oauth2Auth;
    let alfrescoJsApi: AlfrescoApi;

    beforeEach(() => {
        alfrescoJsApi = new AlfrescoApi({
            hostEcm: ''
        });
    });

    it('should throw an error if redirectUri is not present', (done) => {
        try {
            oauth2Auth = new Oauth2Auth(
                <any>{
                    oauth2: {
                        host: 'http://myOauthUrl:30081/auth/realms/springboot',
                        clientId: 'activiti',
                        secret: '',
                        scope: 'openid',
                        implicitFlow: true
                    }
                },
                alfrescoJsApi
            );
        } catch (error) {
            expect(error).to.be.equal('Missing redirectUri required parameter');
            done();
        }
    });

    it('should redirect to login if access token is not valid', (done) => {
        window = globalAny.window = { location: {} };

        oauth2Auth = new Oauth2Auth(
            {
                oauth2: {
                    host: 'http://myOauthUrl:30081/auth/realms/springboot',
                    clientId: 'activiti',
                    secret: '',
                    scope: 'openid',
                    implicitFlow: true,
                    redirectUri: 'redirectUri'
                }
            },
            alfrescoJsApi
        );

        oauth2Auth.on('implicit_redirect', () => {
            expect(window.location.href).contain('http://myOauthUrl:30081/auth/realms/springboot/protocol/' +
                'openid-connect/auth?');
            done();
        });

        oauth2Auth.implicitLogin();
    });

    it('should not redirect to login if access token is valid', (done) => {
        window = globalAny.window = { location: {} };

        oauth2Auth = new Oauth2Auth(
            {
                oauth2: {
                    host: 'http://myOauthUrl:30081/auth/realms/springboot',
                    clientId: 'activiti',
                    secret: '',
                    scope: 'openid',
                    implicitFlow: true,
                    redirectUri: 'redirectUri'
                }
            },
            alfrescoJsApi
        );

        oauth2Auth.isValidAccessToken = () => {
            return true;
        };
        oauth2Auth.isValidToken = () => {
            return true;
        };

        oauth2Auth.on('token_issued', () => {
            expect(window.location.url).to.be.equal(undefined);
            done();
        });

        oauth2Auth.implicitLogin();
    });
});

