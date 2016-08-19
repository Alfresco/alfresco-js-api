/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var ProcessMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Process;

describe('Activiti Process Api', function () {
    beforeEach(function (done) {
        this.hostActiviti = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);
        this.processMock = new ProcessMock(this.hostActiviti);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            host: this.hostActiviti,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get activiti Process list filtered', function (done) {
        this.processMock.get200Response();

        var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

        requestNode.page = 0;
        requestNode.sort = 'created-desc';
        requestNode.state = 'completed';

        this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then((data)=> {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            expect(data.size).equal(2);
            done();
        });
    });

    it('get activiti Process list', function (done) {
        this.processMock.get200Response();

        var requestNode = new this.alfrescoJsApi.activiti.ProcessFilterRequestRepresentation();

        this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then((data)=> {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            done();
        });
    });

});
