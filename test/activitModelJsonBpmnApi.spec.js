/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
//var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;

describe('Activiti Model JsonBpmn Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Model JsonBpmn', function (done) {
        //  this.authResponseBpmMock.rec();
        this.alfrescoJsApi.activiti.modelJsonBpmnApi.getEditorDisplayJsonClient(1).then((data)=> {
            console.log(data);
            done();
        }, (error)=> {
            console.log('error' + error);
            // this.authResponseBpmMock.play();
        });
    });
});
