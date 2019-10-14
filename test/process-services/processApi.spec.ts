/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { ProcessInstanceQueryRepresentation } from '../../src/api/activiti-rest-api/model/processInstanceQueryRepresentation';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ProcessMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Process;

describe('Activiti Process Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.processMock = new ProcessMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get activiti Process list filtered', function (done) {
        this.processMock.get200Response();

        let requestNode = new ProcessInstanceQueryRepresentation();

        requestNode.page = 0;
        requestNode.sort = 'created-desc';
        requestNode.state = 'completed';

        this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then((data: any) => {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            expect(data.size).equal(2);
            done();
        });
    });

    it('get activiti Process list', function (done) {
        this.processMock.get200Response();

        let requestNode = new ProcessInstanceQueryRepresentation();

        this.alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then((data: any) => {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            done();
        });
    });

    it('get process definition startForm', function (done) {
        this.processMock.get200getProcessDefinitionStartForm();
        let processDefinitionId = 'testProcess:1:7504';

        this.alfrescoJsApi.activiti.processApi.getProcessDefinitionStartForm(processDefinitionId).then((data: any) => {
            expect(data.processDefinitionId).equal('testProcess:1:7504');
            done();
        });
    });

});
