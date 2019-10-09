/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';

let expect = require('chai').expect;
let AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
let WebScriptMock = require('../../test/mockObjects/mockAlfrescoApi').WebScript;

describe('WebScript', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';
        this.contextRoot = 'script';
        this.servicePath = 'alfresco';
        this.scriptPath = 'testWebScript';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.webScriptMock = new WebScriptMock(this.hostEcm, this.contextRoot, this.servicePath, this.scriptPath);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        },                                              () => {

        });
    });

    it('execute webScript return 400 error if is not present on the server should be handled by reject promise', function (done) {
        this.webScriptMock.get404Response();

        this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath).then(() => {
                console.log('success');
            },
                                                                                                                                     (error: any) => {
                expect(error.status).to.be.equal(404);
                done();
            }
        );
    });

    it('execute webScript GET return 200 if all is ok  should be handled by resolve promise', function (done) {
        this.webScriptMock.get200Response();

        this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath).then(
            () => {
                done();
            },
            (error: any) => {
                console.log('error' + JSON.stringify(error));
            }
        );
    });

    it('execute webScript that return HTML should not return it as Object', function (done) {
        this.webScriptMock.get200ResponseHTMLFormat();

        this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', 'sample/folder/Company%20Home').then((data: any) => {
            try {
                JSON.parse(data);
            } catch (e) {
                done();
            }
        },                                                                                                () => {
            console.log('error');
        });
    });

    describe('Events', function () {
        it('WebScript should fire success event at the end', function (done) {
            this.webScriptMock.get200Response();

            let webscriptPromise = this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath);

            webscriptPromise.catch(() => {
            });

            webscriptPromise.on('success', () => {
                done();
            });
        });

        it('WebScript should fire error event if something go wrong', function (done) {
            this.webScriptMock.get404Response();

            let webscriptPromise = this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath);

            webscriptPromise.catch(() => {
            });

            webscriptPromise.on('error', () => {
                done();
            });
        });

        it('WebScript should fire unauthorized event if get 401', function (done) {
            this.webScriptMock.get401Response();

            let webscriptPromise = this.alfrescoJsApi.core.webscriptApi.executeWebScript('GET', this.scriptPath, null, this.contextRoot, this.servicePath);

            webscriptPromise.catch(() => {
            });

            webscriptPromise.on('unauthorized', () => {
                done();
            });
        });
    });
});
