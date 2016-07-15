/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var WebScriptMock = require('../test/mockObjects/webScriptMock');

describe('WebScript', function () {

    beforeEach(function (done) {
        this.host = 'http://127.0.0.1:8080';
        this.contextRoot = 'script';
        this.servicePath = 'alfresco';
        this.scriptPath = 'testWebScript';

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

    it('execute webScript return 400 error if is not present on the server should be handled by reject promise', function (done) {
        this.webScriptMock.get404Response();

        this.alfrescoJsApi.webScript.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath).then(
            null,
            (error) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('execute webScript GET return 200 if all is ok  should be handled by resolve promise', function (done) {
        this.webScriptMock.get200Response();

        this.alfrescoJsApi.webScript.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath).then(
            () => {
                done();
            }
        );
    });

    it('execute webScript that return HTML should not return it as Object', function (done) {
        this.webScriptMock.get200ResponseHTMLFormat();

        this.alfrescoJsApi.webScript.executeWebScript('GET', 'sample/folder/Company%20Home').then((data) => {
            try {
                JSON.parse(data);
            } catch (e) {
                done();
            }

        });
    });

    describe('Events', function () {
        it('WebScript should fire done event at the end of an upload', function (done) {
            this.webScriptMock.get200Response();

            this.alfrescoJsApi.webScript.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath)
                .on('success', ()=> {
                    done();
                });
        });

        it('WebScript should fire error event if something go wrong', function (done) {
            this.webScriptMock.get404Response();

            this.alfrescoJsApi.webScript.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath)
                .on('error', ()=> {
                    done();
                });
        });

        it('WebScript should fire unauthorized event if get 401', function (done) {
            this.webScriptMock.get401Response();

            this.alfrescoJsApi.webScript.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath)
                .on('unauthorized', ()=> {
                    done();
                });
        });
    });
});
