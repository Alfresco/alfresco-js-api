/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var TasksMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Tasks;

describe('Activiti Task Api', function () {
    beforeEach(function (done) {
        this.hostActiviti = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);
        this.tasksMock = new TasksMock(this.hostActiviti);

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

    it('get activiti Task list', function (done) {

        this.tasksMock.get200Response();

        var requestNode = new this.alfrescoJsApi.activiti.TaskQueryRequestRepresentation();

        this.alfrescoJsApi.activiti.taskApi.listTasks(requestNode).then((data)=> {
            expect(data.data[0].processDefinitionName).equal('Process Test Api');
            expect(data.data[1].processDefinitionName).equal('Process Test Api');
            expect(data.size).equal(2);
            done();
        });
    });
});
