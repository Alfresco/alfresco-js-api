import { expect } from 'chai';
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { UserFiltersApi } from '../../src/api/activiti-rest-api';
import { BpmAuthMock, UserFiltersMock } from '../mockObjects';

describe('Activiti User Filter Api', () => {
    const hostBpm = 'http://127.0.0.1:9999';
    let authResponseBpmMock: BpmAuthMock;
    let filtersMock: UserFiltersMock;
    let userFiltersApi: UserFiltersApi;

    beforeEach(async () => {
        authResponseBpmMock = new BpmAuthMock(hostBpm);
        filtersMock = new UserFiltersMock(hostBpm);

        authResponseBpmMock.get200Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostBpm,
            provider: 'BPM'
        } as AlfrescoApiConfig);

        userFiltersApi = new UserFiltersApi(alfrescoJsApi);

        await alfrescoJsApi.login('admin', 'admin');
    });

    it('get filter user', async () => {
        filtersMock.get200getUserTaskFilters();

        const opts = {
            'appId': 1 // Integer | appId
        };

        const data = await userFiltersApi.getUserTaskFilters(opts);
        expect(data.data[0].name).equal('Involved Tasks');
    });
});
