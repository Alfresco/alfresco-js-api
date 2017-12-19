/*global describe, it, beforeEach */

var AlfrescoApi = require('../../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var ModelJsonBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.ModelJsonBpmMock;

describe('Activiti Model JsonBpmn Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.modelJsonBpmMock = new ModelJsonBpmMock(this.hostBpm);

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
        this.modelJsonBpmMock.get200EditorDisplayJsonClient();
        this.alfrescoJsApi.activiti.modelJsonBpmnApi.getEditorDisplayJsonClient(1).then((data)=> {
            expect(data).not.equal(null);
            done();
        }, (error)=> {
            console.log('error' + error);
        });
    });

    it('get Model JsonBpmn history', function (done) {
        this.modelJsonBpmMock.get200HistoricEditorDisplayJsonClient();
        this.alfrescoJsApi.activiti.modelJsonBpmnApi.getHistoricEditorDisplayJsonClient(1,1).then((data)=> {
            expect(data).not.equal(null);
            done();
        }, (error)=> {
            console.log('error' + error);
        });
    });
});
