import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { GsSitesApi } from '../../src/api/gs-core-rest-api';
import { AuthResponseMock, GsSitesApiMock } from '../../test/mockObjects';

describe('Governance API test', () => {
    let authResponseMock: AuthResponseMock;
    let gsSitesApiMock: GsSitesApiMock;
    let gsSitesApi: GsSitesApi;

    beforeEach(() => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        authResponseMock.get201Response();

        gsSitesApiMock = new GsSitesApiMock(hostEcm);

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        gsSitesApi = new GsSitesApi(alfrescoJsApi);
    });

    it('should getRMSite return the RM site', (done) => {
        gsSitesApiMock.get200Response();

        gsSitesApi.getRMSite().then((data) => {
            expect(data.entry.description).to.be.equal('Records Management Description Test');
            done();
        });
    });
});
