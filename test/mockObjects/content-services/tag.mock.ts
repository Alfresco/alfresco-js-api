import nock from 'nock';
import { BaseMock } from '../base.mock';

export class TagMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    get200Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/alfresco/versions/1/tags')
            .reply(200, {
                list: {
                    pagination: { count: 2, hasMoreItems: false, skipCount: 0, maxItems: 100 },
                    entries: [
                        {
                            entry: {
                                tag: 'tag-test-1',
                                id: '0d89aa82-f2b8-4a37-9a54-f4c5148174d6',
                            },
                        },
                        {
                            entry: {
                                tag: 'tag-test-2',
                                id: 'd79bdbd0-9f55-45bb-9521-811e15bf48f6',
                            },
                        },
                    ],
                },
            });
    }

    get401Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/alfresco/versions/1/tags')
            .reply(401, {
                error: {
                    errorKey: 'framework.exception.ApiDefault',
                    statusCode: 401,
                    briefSummary: '05210059 Authentication failed for Web Script org/alfresco/api/ResourceWebScript.get',
                    stackTrace: 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    descriptionURL: 'https://api-explorer.alfresco.com',
                },
            });
    }
}
