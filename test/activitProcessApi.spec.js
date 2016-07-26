/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var ProcessMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.ProcessMock;

describe('Activiti Process Api', function () {
    beforeEach(function (done) {
        this.hostActiviti = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);
        this.processMock = new ProcessMock(this.hostActiviti);

        //this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin@app.activiti.com',
            password: 'admin',
            host: this.hostActiviti,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login().then(() => {
            done();
        });
    });

    it('get activiti Process list', function (done) {
        this.processMock.get200Response();

        var processApiInstance = new this.alfrescoJsApi.activiti.ProcessApi();

        processApiInstance.getProcessInstancesUsingPOST('{"page":0,"sort":"created-desc","state":"all"}').then((data)=> {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            expect(data.size).equal(2);
            done();
        });

    });
});
