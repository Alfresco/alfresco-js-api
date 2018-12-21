/*global describe, it, beforeEach */

let expect = require('chai').expect;
let Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
import { Oauth2Auth } from '@alfresco/js-api';

describe('Oauth2 Implicit flow test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://127.0.0.1:9191/auth/realms/springboot';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    it('should discovery URL', function (done) {
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = new Oauth2Auth({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicitFlow: true,
                redirectUri: 'redirectUri'
            }
        });

        this.oauth2Auth.on('discovery', (discovery) => {
            console.log('discovery' + discovery);

            expect(this.oauth2Auth.discovery.loginUrl).to.be.equal('http://myOauthUrl:30081/auth/realms/springboot/protocol/openid-connect/auth');
            done();
        });
    });

    it('should throw an error if redirectUri is not present', function (done) {

        try {
            this.oauth2Auth = new Oauth2Auth(<any>{
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
        (window as any) = { location: {} };
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = new Oauth2Auth({
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
            expect((window as any).location.href).contain('http://myOauthUrl:30081/auth/realms/springboot/protocol/' +
                'openid-connect/auth?');
            done();
        });

        this.oauth2Auth.implicitLogin();
    });

    it('should not redirect to login if access token is valid', function (done) {
        (window as any) = { location: {} };
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = new Oauth2Auth({
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
            expect((window as any).location.url).to.be.equal(undefined);
            done();
        });

        this.oauth2Auth.implicitLogin();

    });

});

