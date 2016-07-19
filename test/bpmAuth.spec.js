/*global describe, it, beforeEach */

var BpmAuth = require('../src/bpmAuth');
var AuthMock = require('../test/mockObjects/mockAlfrescoApi').Activiti.Auth;

describe('Bpm Auth test', function () {

    beforeEach(function () {
        this.host = 'http://127.0.0.1:8080';

        this.config = {
            hostActiviti: this.host,
            username: 'fakeuser@app.activiti.com',
            password: 'fakepassword'
        };

        this.AuthMock = new AuthMock(this.host);
    });

    it('login', function (done) {
        this.AuthMock.get200Response();
        var activitiAuth = new BpmAuth(this.config);
        activitiAuth.login().then(()=> {
            done();
        });
    });
});
