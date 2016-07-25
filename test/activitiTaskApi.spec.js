/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
//var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').Activiti.Auth;

describe('Activiti Task Api', function () {
    beforeEach(function (done) {
        this.hostActiviti = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: this.hostActiviti,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login().then(() => {
            done();
        });
    });

    it.skip('get activiti Tak list', function () {
        this.authResponseBpmMock.rec();

        var processApiInstance = new this.alfrescoJsApi.activiti.ProcessApi();

        processApiInstance.getProcessInstancesUsingPOST('{"page":0,"sort":"created-desc","state":"all"}');

        this.authResponseBpmMock.play();

    });
});
