import { expect } from 'chai';
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { TagBody, TagEntry, TagsApi } from '../../src/api/content-rest-api';
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
        } as AlfrescoApiConfig);

        alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });

        tagsApi = new TagsApi(alfrescoJsApi);
    });

    describe('listTags', () => {
        it('should load list of tags', (done) => {
            tagMock.get200Response();

            tagsApi.listTags().then((data) => {
                expect(data.list.pagination.count).equal(2);
                expect(data.list.entries[0].entry.tag).equal('tag-test-1');
                expect(data.list.entries[1].entry.tag).equal('tag-test-2');
                done();
            });
        });

        it('should handle 401 error', (done) => {
            tagMock.get401Response();

            tagsApi.listTags().then(
                () => {},
                () => {
                    done();
                }
            );
        });

        it('should return counts for specified tags', (done) => {
            tagMock.getTagsByNamesIncludingCounters200Response();

            tagsApi.listTags({
                include: ['count'],
                tags: ['tag-test-1', 'tag-test-2']
            }).then((data) => {
                expect(data.list.pagination.count).equal(2);
                expect(data.list.entries[0].entry).deep.equal({
                    tag: 'tag-test-1',
                    id: '0d89aa82-f2b8-4a37-9a54-f4c5148174d6',
                    count: 0
                });
                expect(data.list.entries[1].entry).deep.equal({
                    tag: 'tag-test-2',
                    id: 'd79bdbd0-9f55-45bb-9521-811e15bf48f6',
                    count: 1
                });
                done();
            });
        });
    });

    describe('createTags', () => {
        it('should return created tags', (done: Mocha.Done) => {
            tagMock.createTags201Response();
            tagsApi.createTags([new TagBody(), new TagBody()]).then((tags: TagEntry[]) => {
                expect(tags).length(2);
                expect(tags[0].entry.tag).equal('tag-test-1');
                expect(tags[1].entry.tag).equal('tag-test-2');
                done();
            });
        });

        it('should throw error if tags are not passed', () => {
            expect(tagsApi.createTags.bind(tagsApi, null)).throw();
        });
    });
});
