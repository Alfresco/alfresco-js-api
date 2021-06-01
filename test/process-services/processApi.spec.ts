import { expect } from 'chai';
import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { ProcessInstanceQueryRepresentation } from '../../src/api/activiti-rest-api/model/processInstanceQueryRepresentation';
import { BpmAuthMock, ProcessMock } from '../mockObjects';

describe('Activiti Process Api', () => {
    let authResponseBpmMock: BpmAuthMock;
    let processMock: ProcessMock;
    let alfrescoJsApi: AlfrescoApi;

    beforeEach(async () => {
        const BPM_HOST = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(BPM_HOST);
        processMock = new ProcessMock(BPM_HOST);

        authResponseBpmMock.get200Response();

        alfrescoJsApi = new AlfrescoApi({
            hostBpm: BPM_HOST,
            provider: 'BPM'
        });

        await alfrescoJsApi.login('admin', 'admin');
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
