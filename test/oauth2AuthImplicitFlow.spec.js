/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Auth = require('../src/oauth2Auth');

describe('Oauth2 Implicit flow test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://a5e2f93de10af11e8a0560a1bea5b7c8-236709433.us-east-1.elb.amazonaws.com:30081/auth/realms/springboot';
    });

    it('should discovery URL', function () {

        this.oauth2Auth = new Oauth2Auth({
            oauth2: {
                host: this.hostOauth2,
                clientId: 'activiti',
                secret: '',
                implicit: true
            }
        });

        this.oauth2Auth.on('discovery',()=> {
            expect(this.oauth2Auth.discovery.loginUrl).to.be.equal(true);
        });
    });
});

