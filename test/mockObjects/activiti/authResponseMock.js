'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class AuthResponseMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/authentication', 'j_username=fakeuser%40app.activiti.com&j_password=fakepassword&_spring_security_remember_me=true&submit=Login')
            .reply(200);
    }


}

module.exports = AuthResponseMock;
