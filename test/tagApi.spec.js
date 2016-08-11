/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var WebScriptMock = require('../test/mockObjects/mockAlfrescoApi').WebScript;

describe('Tags', function () {

    beforeEach(function (done) {
        this.host = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.host);
        this.webScriptMock = new WebScriptMock(this.host, this.contextRoot, this.servicePath, this.scriptPath);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: this.host
        });

        this.alfrescoJsApi.login().then((data) => {
            done();
        });
    });

    it.skip('tags', function (done) {
        // this.webScriptMock.get404Response();

        this.alfrescoJsApi.core.tagsApi.getTags().then(function (data) {
            console.log('API called successfully. Returned data: ' + data);
            done();
        }, function (error) {
            console.error(error);
            done();

        });
    });

});
