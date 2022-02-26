import { expect } from 'chai';
import { AlfrescoApiConfig } from '../src/alfrescoApiConfig';
import { AlfrescoApiCompatibility as AlfrescoApi } from '../src/alfrescoApiCompatibility';
import { EcmAuthMock, BpmAuthMock } from '../test/mockObjects';

describe('Change config', () => {
    let authResponseBpmMock: BpmAuthMock;
    let authResponseMock: EcmAuthMock;
    let alfrescoJsApi: AlfrescoApi;

    beforeEach(async () => {
        const config = {
            hostBpm: 'http://127.0.0.1:9999',
            hostEcm: 'http://127.0.0.1:8080',
            provider: 'ALL'
        };

        authResponseBpmMock = new BpmAuthMock(config.hostBpm);
        authResponseMock = new EcmAuthMock(config.hostEcm);

        authResponseMock.get201Response();
        authResponseBpmMock.get200Response();

        alfrescoJsApi = new AlfrescoApi(config as AlfrescoApiConfig);
        await alfrescoJsApi.login('admin', 'admin');
    });

    describe('Change hosts', () => {

        it('Change host Ecm', () => {
            expect(alfrescoJsApi.contentClient.basePath).to.be.equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');

            alfrescoJsApi.changeEcmHost('http://differenTserverEcm:9898');

            expect(alfrescoJsApi.contentClient.basePath).to.be.equal('http://differenTserverEcm:9898/alfresco/api/-default-/public/alfresco/versions/1');
        });

        it('Change host bpm', () => {
            expect(alfrescoJsApi.processClient.basePath).to.be.equal('http://127.0.0.1:9999/activiti-app');

            alfrescoJsApi.changeBpmHost('http://differenTserverBpm:2222');

            expect(alfrescoJsApi.processClient.basePath).to.be.equal('http://differenTserverBpm:2222/activiti-app');
        });

        it('Change host ecm bpm', () => {
            expect(alfrescoJsApi.contentClient.basePath).to.be.equal('http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1');
            expect(alfrescoJsApi.processClient.basePath).to.be.equal('http://127.0.0.1:9999/activiti-app');

            alfrescoJsApi.changeEcmHost('http://differenTserverEcm:9898');
            alfrescoJsApi.changeBpmHost('http://differenTserverBpm:2222');

            expect(alfrescoJsApi.contentClient.basePath).to.be.equal('http://differenTserverEcm:9898/alfresco/api/-default-/public/alfresco/versions/1');
            expect(alfrescoJsApi.processClient.basePath).to.be.equal('http://differenTserverBpm:2222/activiti-app');
        });
    });

});
