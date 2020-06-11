import { AlfrescoApi } from '../../src/alfrescoApi';
import { ModelsApi } from '../../src/api/activiti-rest-api';

const expect = require('chai').expect;
const AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
const ModelsMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Models;

describe('Activiti Models Api', () => {
    let authResponseBpmMock: any;
    let modelsMock: any;
    let modelsApi: ModelsApi;

    beforeEach((done) => {
        const hostBpm = 'http://127.0.0.1:9999';

        authResponseBpmMock = new AuthBpmMock(hostBpm);
        authResponseBpmMock.get200Response();

        modelsMock = new ModelsMock(hostBpm);

        const alfrescoJsApi = new AlfrescoApi({
            hostBpm,
            provider: 'BPM'
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        modelsApi = new ModelsApi(alfrescoJsApi);
    });

    it('get activiti model', (done) => {
        modelsMock.get200getModels();

        const opts = {
            'filter': 'myReusableForms',
            'modelType': 2
        };

        modelsApi.getModels(opts).then((data) => {
            expect(data.data[0].name).equal('Metadata');
            done();
        });
    });
});
