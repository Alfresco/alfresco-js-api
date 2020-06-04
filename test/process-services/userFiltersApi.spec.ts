import { AlfrescoApi } from '../../src/alfrescoApi';
import { UserFiltersApi } from '../../src/api/activiti-rest-api';

const expect = require('chai').expect;
const AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
const FiltersMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.UserFilters;

describe('Activiti User Filter Api', () => {
    const hostBpm = 'http://127.0.0.1:9999';
    let authResponseBpmMock: any;
    let filtersMock: any;
    let userFiltersApi: UserFiltersApi;

    beforeEach((done) => {
        authResponseBpmMock = new AuthBpmMock(hostBpm);
        filtersMock = new FiltersMock(hostBpm);

        authResponseBpmMock.get200Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostBpm,
            provider: 'BPM'
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        userFiltersApi = new UserFiltersApi(alfrescoJsApi);
    });

    it('get filter user', (done) => {
        filtersMock.get200getUserTaskFilters();

        const opts = {
            'appId': 1 // Integer | appId
        };

        userFiltersApi.getUserTaskFilters(opts).then((data) => {
            expect(data.data[0].name).equal('Involved Tasks');
            done();
        });
    });
});
