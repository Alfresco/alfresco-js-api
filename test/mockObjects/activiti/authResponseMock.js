'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class AuthResponseMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/authentication', 'j_username=admin&j_password=admin&_spring_security_remember_me=true&submit=Login')
            .reply(200);
    }

    get200ResponseLogout() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/logout', {})
            .reply(200);

    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/authentication', 'j_username=wrong&j_password=credentials&_spring_security_remember_me=true&submit=Login')
            .reply(401);
    }
}

module.exports = AuthResponseMock;
