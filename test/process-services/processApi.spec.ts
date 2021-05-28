/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { ProcessInstanceQueryRepresentation } from '../../src/api/activiti-rest-api/model/processInstanceQueryRepresentation';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ProcessMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Process;

describe('Activiti Process Api', () => {
    let authResponseBpmMock: any;
    let processMock: any;
    let alfrescoJsApi: AlfrescoApi;

    beforeEach((done) => {
        const BPM_HOST = 'http://127.0.0.1:9999';

        authResponseBpmMock = new AuthBpmMock(BPM_HOST);
        processMock = new ProcessMock(BPM_HOST);

        authResponseBpmMock.get200Response();

        alfrescoJsApi = new AlfrescoApi({
            hostBpm: BPM_HOST,
            provider: 'BPM'
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get activiti Process list filtered', (done) => {
        processMock.get200Response();

        const requestNode = new ProcessInstanceQueryRepresentation();

        requestNode.page = 0;
        requestNode.sort = 'created-desc';
        requestNode.state = 'completed';

        alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then((data) => {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            expect(data.size).equal(2);
            done();
        });
    });

    it('get activiti Process list', (done) => {
        processMock.get200Response();

        const requestNode = new ProcessInstanceQueryRepresentation();

        alfrescoJsApi.activiti.processApi.getProcessInstances(requestNode).then((data) => {
            expect(data.data[0].name).equal('Process Test Api - July 26th 2016');
            expect(data.data[1].name).equal('Process Test Api - July 26th 2016');
            done();
        });
    });

    it('get process definition startForm', (done) => {
        processMock.get200getProcessDefinitionStartForm();
        const processDefinitionId = 'testProcess:1:7504';

        alfrescoJsApi.activiti.processApi.getProcessDefinitionStartForm(processDefinitionId).then((data) => {
            expect(data.processDefinitionId).equal('testProcess:1:7504');
            done();
        });
    });

});
