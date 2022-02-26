import { expect } from 'chai';
import { AlfrescoApiConfig } from '..';
import { AlfrescoApi } from '../src/alfrescoApi';
import { DiscoveryApi } from '../src/api/discovery-rest-api';
import { EcmAuthMock, DiscoveryMock } from '../test/mockObjects';

describe('Discovery', () => {
    let authResponseMock: EcmAuthMock;
    let discoveryMock: DiscoveryMock;
    let discoveryApi: DiscoveryApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();

        discoveryMock = new DiscoveryMock();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        } as AlfrescoApiConfig);

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        discoveryApi = new DiscoveryApi(alfrescoJsApi);
    });

    it('should getRepositoryInformation works', (done) => {
        discoveryMock.get200Response();

        discoveryApi.getRepositoryInformation().then(
            (data) => {
                expect(data.entry.repository.edition).to.be.equal('Enterprise');
                done();
            },
            (error: any) => {
                console.error(error);
            }
        );
    });
});
