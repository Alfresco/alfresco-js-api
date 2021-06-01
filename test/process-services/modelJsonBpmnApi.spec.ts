import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { ModelJsonBpmnApi } from '../../src/api/activiti-rest-api';
import { BpmAuthMock } from '../mockObjects';

const ModelJsonBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.ModelJsonBpmMock;

describe('Activiti Model JsonBpmn Api', () => {
    let authResponseBpmMock: BpmAuthMock;
    let modelJsonBpmMock: any;
    let modelJsonBpmnApi: ModelJsonBpmnApi;

    beforeEach(async () => {
        const hostBpm = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(hostBpm);
        authResponseBpmMock.get200Response();

        modelJsonBpmMock = new ModelJsonBpmMock(hostBpm);

        const alfrescoJsApi = new AlfrescoApi({
            hostBpm,
            provider: 'BPM'
        });

        modelJsonBpmnApi = new ModelJsonBpmnApi(alfrescoJsApi);

        await alfrescoJsApi.login('admin', 'admin');
    });

    it('get Model JsonBpmn', async () => {
        modelJsonBpmMock.get200EditorDisplayJsonClient();
        const data = await modelJsonBpmnApi.getEditorDisplayJsonClient(1);
        expect(data).not.equal(null);
    });

    it('get Model JsonBpmn history', async () => {
        modelJsonBpmMock.get200HistoricEditorDisplayJsonClient();
        const data = await modelJsonBpmnApi.getHistoricEditorDisplayJsonClient(1, 1);
        expect(data).not.equal(null);
    });
});
