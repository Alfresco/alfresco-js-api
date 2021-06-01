import { expect } from 'chai';
import { AlfrescoApi } from '../src/alfrescoApi';
import { SearchApi } from '../src/api/search-rest-api';
import { AuthResponseMock, SearchMock } from '../test/mockObjects';

describe('Search', () => {
    let authResponseMock: AuthResponseMock;
    let searchMock: SearchMock;
    let searchApi: SearchApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new AuthResponseMock(hostEcm);
        authResponseMock.get201Response();

        searchMock = new SearchMock();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        searchApi = new SearchApi(alfrescoJsApi);
    });

    it('should search works', (done) => {
        searchMock.get200Response();

        searchApi.search({
            'query': {
                'query': 'select * from cmis:folder',
                'language': 'cmis'
            }
        }).then(
            (data: any) => {
                expect(data.list.entries[0].entry.name).to.be.equal('user');
                done();
            },
            (error: any) => {
                console.error(error);
            }
        );
    });
});
