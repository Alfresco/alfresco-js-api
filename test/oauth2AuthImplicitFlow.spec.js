/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Auth = require('../src/oauth2Auth');
var Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;

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
                implicit: true,
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
            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    host: this.hostOauth2,
                    clientId: 'activiti',
                    secret: '',
                    scope: 'openid',
                    implicit: true
                }
            });
        } catch (error) {
            expect(error).to.be.equal('Missing redirectUri required parameter');
            done();
        }
    });

    it('should redirect to login if access token is not valid', function (done) {
        window = {location: {}};
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = new Oauth2Auth({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicit: true,
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

    it.only('should not redirect to login if access token is valid', function (done) {
        window = {location: {}};
        this.oauth2Mock.get200Discovery();

        this.oauth2Auth = new Oauth2Auth({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicit: true,
                redirectUri: 'redirectUri'
            }
        });

        this.oauth2Auth.isValidAccessToken= ()=> {
            return true;
        };
        this.oauth2Auth.isValidToken= ()=> {
            return true;
        };

        this.oauth2Auth.implicitLogin();


    });

});

