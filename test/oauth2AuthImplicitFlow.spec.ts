/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility } from '@alfresco/js-api/src/alfrescoApiCompatibility';

let expect = require('chai').expect;
let Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
import { Oauth2Auth } from '../src/authentication/oauth2Auth';

declare let window: any;
const globalAny: any = global;

describe('Oauth2 Implicit flow test', function () {

    beforeEach(function () {
        delete this.oauth2Auth;
        this.hostOauth2 = 'http://myOauthUrl:30081';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
        this.alfrescoJsApi = new AlfrescoApiCompatibility({
            hostEcm: this.hostEcm
        });
    });

    it('should throw an error if redirectUri is not present', function (done) {

        try {
            this.oauth2Auth = new Oauth2Auth(<any>{
                oauth2: {
                    host: 'http://myOauthUrl:30081/auth/realms/springboot',
                    clientId: 'activiti',
                    secret: '',
                    scope: 'openid',
                    implicitFlow: true
                }
            }, this.alfrescoJsApi);
        } catch (error) {
            expect(error).to.be.equal('Missing redirectUri required parameter');
            done();
        }
    });

    it('should redirect to login if access token is not valid', function (done) {
        window = globalAny.window = { location: {} };

        this.oauth2Auth = new Oauth2Auth({
            oauth2: {
                host: 'http://myOauthUrl:30081/auth/realms/springboot',
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicitFlow: true,
                redirectUri: 'redirectUri'
            }
        }, this.alfrescoJsApi);

        this.oauth2Auth.on('implicit_redirect', () => {
            expect(window.location.href).contain('http://myOauthUrl:30081/auth/realms/springboot/protocol/' +
                'openid-connect/auth?');
            done();
        });

        this.oauth2Auth.implicitLogin();
    });

    it('should not redirect to login if access token is valid', function (done) {
        window = globalAny.window = { location: {} };

        this.oauth2Auth = new Oauth2Auth({
            oauth2: {
                host: 'http://myOauthUrl:30081/auth/realms/springboot',
                clientId: 'activiti',
                secret: '',
                scope: 'openid',
                implicitFlow: true,
                redirectUri: 'redirectUri'
            }
        }, this.alfrescoJsApi);

        this.oauth2Auth.isValidAccessToken = () => {
            return true;
        };
        this.oauth2Auth.isValidToken = () => {
            return true;
        };

        this.oauth2Auth.on('token_issued', () => {
            expect(window.location.url).to.be.equal(undefined);
            done();
        });

        this.oauth2Auth.implicitLogin();

    });

});

