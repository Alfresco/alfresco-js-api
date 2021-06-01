import nock from 'nock';
import { BaseMock } from '../base.mock';

export class SearchMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    get200Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/search/versions/1/search', {
                query: {
                    query: 'select * from cmis:folder',
                    language: 'cmis',
                },
            })
            .reply(200, {
                list: {
                    pagination: { count: 100, hasMoreItems: true, skipCount: 0, maxItems: 100 },
                    entries: [
                        {
                            entry: {
                                createdAt: '2017-04-10T10:52:30.868+0000',
                                isFolder: true,
                                search: { score: 1 },
                                isFile: false,
                                createdByUser: { id: 'admin', displayName: 'Administrator' },
                                modifiedAt: '2017-04-10T10:52:30.868+0000',
                                modifiedByUser: { id: 'admin', displayName: 'Administrator' },
                                name: 'user',
                                id: '224e30f4-a7b3-4192-b6e6-dc27d95e26ef',
                                nodeType: 'cm:folder',
                                parentId: '83551834-75d6-4e07-a318-46d5d176738a',
                            },
                        },
                    ],
                },
            });
    }
}
