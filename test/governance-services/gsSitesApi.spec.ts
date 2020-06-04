import { AlfrescoApi } from '../../src/alfrescoApi';
import { GsSitesApi } from '../../src/api/gs-core-rest-api';

const AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
const GsSitesApiMock = require('../../test/mockObjects/mockAlfrescoApi').GsSitesApi;
const expect = require('chai').expect;

describe('Governance API test', () => {
    let authResponseMock: any;
    let gsSitesApiMock: any;
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
