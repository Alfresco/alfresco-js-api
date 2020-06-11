import { AlfrescoApi } from '../../src/alfrescoApi';
import { ModelJsonBpmnApi } from '../../src/api/activiti-rest-api';

const expect = require('chai').expect;
const AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
const ModelJsonBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.ModelJsonBpmMock;

describe('Activiti Model JsonBpmn Api', () => {
    let authResponseBpmMock: any;
    let modelJsonBpmMock: any;
    let modelJsonBpmnApi: ModelJsonBpmnApi;

    beforeEach((done) => {
        const hostBpm = 'http://127.0.0.1:9999';

        authResponseBpmMock = new AuthBpmMock(hostBpm);
        authResponseBpmMock.get200Response();

        modelJsonBpmMock = new ModelJsonBpmMock(hostBpm);

        const alfrescoJsApi = new AlfrescoApi({
            hostBpm,
            provider: 'BPM'
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        modelJsonBpmnApi = new ModelJsonBpmnApi(alfrescoJsApi);
    });

    it('get Model JsonBpmn', (done) => {
        modelJsonBpmMock.get200EditorDisplayJsonClient();
        modelJsonBpmnApi.getEditorDisplayJsonClient(1).then(
            (data) => {
                expect(data).not.equal(null);
                done();
            },
            (error: any) => {
                console.log('error' + error);
            }
        );
    });

    it('get Model JsonBpmn history', (done) => {
        modelJsonBpmMock.get200HistoricEditorDisplayJsonClient();
        modelJsonBpmnApi.getHistoricEditorDisplayJsonClient(1, 1).then(
            (data) => {
                expect(data).not.equal(null);
                done();
            },
            (error: any) => {
                console.log('error' + error);
            }
        );
    });
});
