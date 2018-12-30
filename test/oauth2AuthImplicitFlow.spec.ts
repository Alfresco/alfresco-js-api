/*global describe, it, beforeEach */

let expect = require('chai').expect;
let Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
import { Oauth2Auth } from '../src/authentication/oauth2Auth';

declare let window:any;
const globalAny:any = global;

describe('Oauth2 Implicit flow test', function () {

    beforeEach(function () {
        Oauth2Auth.instance = null;
        delete this.oauth2Auth;
        this.hostOauth2 = 'http://127.0.0.1:9191/auth/realms/springboot';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    it('should discovery URL', function (done) {
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = Oauth2Auth.getInstance({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicitFlow: true,
                redirectUri: 'redirectUri'
            }
        });

        this.oauth2Auth.on('discovery', () => {
            expect(this.oauth2Auth.discovery.loginUrl).to.be.equal('http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/auth');
            done();
        });
    });

    it('should throw an error if redirectUri is not present', function (done) {

        try {
            this.oauth2Auth = Oauth2Auth.getInstance(<any>{
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'activiti',
                    secret: '',
                    scope: 'openid',
                    implicitFlow: true
                }
            });
        } catch (error) {
            expect(error).to.be.equal('Missing redirectUri required parameter');
            done();
        }
    });

    it('should redirect to login if access token is not valid', function (done) {
        window = globalAny.window = { location: {} };

        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = Oauth2Auth.getInstance({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicitFlow: true,
                redirectUri: 'redirectUri'
            }
        });

        this.oauth2Auth.on('implicit_redirect', (url) => {
            expect(window.location.href).contain('http://myOauthUrl:30081/auth/realms/springboot/protocol/' +
                'openid-connect/auth?');
            done();
        });

        this.oauth2Auth.implicitLogin();
    });

    it('should not redirect to login if access token is valid', function (done) {
        window = globalAny.window = { location: {} };
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = Oauth2Auth.getInstance({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicitFlow: true,
                redirectUri: 'redirectUri'
            }
        });

        this.oauth2Auth.isValidAccessToken = () => {
            return true;
        };
        this.oauth2Auth.isValidToken = () => {
            return true;
        };

        this.oauth2Auth.on('token_issued', (url) => {
            expect(window.location.url).to.be.equal(undefined);
            done();
        });

        this.oauth2Auth.implicitLogin();

    });

});

