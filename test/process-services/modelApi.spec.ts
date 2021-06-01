import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { ModelsApi } from '../../src/api/activiti-rest-api';
import { BpmAuthMock } from '../mockObjects';

const ModelsMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Models;

describe('Activiti Models Api', () => {
    let authResponseBpmMock: BpmAuthMock;
    let modelsMock: any;
    let modelsApi: ModelsApi;

    beforeEach(async () => {
        const hostBpm = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(hostBpm);
        authResponseBpmMock.get200Response();

        modelsMock = new ModelsMock(hostBpm);

        const alfrescoJsApi = new AlfrescoApi({
            hostBpm,
            provider: 'BPM'
        });

        modelsApi = new ModelsApi(alfrescoJsApi);

        await alfrescoJsApi.login('admin', 'admin');
    });

    it('get activiti model', async () => {
        modelsMock.get200getModels();

        const opts = {
            'filter': 'myReusableForms',
            'modelType': 2
        };

        const data = await modelsApi.getModels(opts);
        expect(data.data[0].name).equal('Metadata');
    });
});
