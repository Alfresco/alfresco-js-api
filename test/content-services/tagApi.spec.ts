import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { TagsApi } from '../../src/api/content-rest-api';
import { EcmAuthMock, TagMock } from '../../test/mockObjects';

describe('Tags', () => {
    let authResponseMock: EcmAuthMock;
    let tagMock: TagMock;
    let tagsApi: TagsApi;

    beforeEach((done) => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new EcmAuthMock(hostEcm);
        tagMock = new TagMock();

        authResponseMock.get201Response();

        const alfrescoJsApi = new AlfrescoApi({
            hostEcm
        });

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        tagsApi = new TagsApi(alfrescoJsApi);
    });

    it('tags', (done) => {
        tagMock.get200Response();

        tagsApi.listTags().then((data) => {
            expect(data.list.pagination.count).to.be.equal(2);
            expect(data.list.entries[0].entry.tag).to.be.equal('tag-test-1');
            expect(data.list.entries[1].entry.tag).to.be.equal('tag-test-2');
            done();
        });
    });

    it('Tags 401', (done) => {
        tagMock.get401Response();

        tagsApi.listTags().then(
            () => {},
            () => {
                done();
            }
        );
    });
});
