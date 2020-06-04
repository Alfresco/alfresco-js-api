import { AlfrescoApi } from '../src/alfrescoApi';
import { DiscoveryApi } from '../src/api/discovery-rest-api';

const AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
const DiscoveryMock = require('../test/mockObjects/mockAlfrescoApi').Discovery;
const expect = require('chai').expect;

describe('Discovery', () => {
    let authResponseMock: any;
    let discoveryMock: any;
    let discoveryApi: DiscoveryApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        authResponseMock.get201Response();

        discoveryMock = new DiscoveryMock();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

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
