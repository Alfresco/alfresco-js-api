import nock from 'nock';
import { BaseMock } from '../base.mock';

export class UploadMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    get201CreationFile(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children')
            .reply(201, {
                entry: {
                    isFile: true,
                    createdByUser: { id: 'admin', displayName: 'Administrator' },
                    modifiedAt: '2016-07-08T16:08:10.218+0000',
                    nodeType: 'cm:content',
                    content: {
                        mimeType: 'text/plain',
                        mimeTypeName: 'Plain Text',
                        sizeInBytes: 28,
                        encoding: 'ISO-8859-2',
                    },
                    parentId: '55290409-3c61-41e5-80f6-8354ed133ce0',
                    aspectNames: ['cm:versionable', 'cm:titled', 'cm:auditable', 'cm:author'],
                    createdAt: '2016-07-08T16:08:10.218+0000',
                    isFolder: false,
                    modifiedByUser: { id: 'admin', displayName: 'Administrator' },
                    name: 'testFile.txt',
                    id: '2857abfd-0ac6-459d-a22d-ec78770570f3',
                    properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
                },
            });
    }

    get201CreationFileAutoRename(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children')
            .query({ autoRename: 'true' })
            .reply(201, {
                entry: {
                    isFile: true,
                    createdByUser: { id: 'admin', displayName: 'Administrator' },
                    modifiedAt: '2016-07-08T17:04:34.684+0000',
                    nodeType: 'cm:content',
                    content: {
                        mimeType: 'text/plain',
                        mimeTypeName: 'Plain Text',
                        sizeInBytes: 28,
                        encoding: 'ISO-8859-2',
                    },
                    parentId: '55290409-3c61-41e5-80f6-8354ed133ce0',
                    aspectNames: ['cm:versionable', 'cm:titled', 'cm:auditable', 'cm:author'],
                    createdAt: '2016-07-08T17:04:34.684+0000',
                    isFolder: false,
                    modifiedByUser: { id: 'admin', displayName: 'Administrator' },
                    name: 'testFile-2.txt',
                    id: 'ae314293-27e8-4221-9a09-699f103db5f3',
                    properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
                },
            });
    }

    get409CreationFileNewNameClashes(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children')
            .reply(409, {
                error: {
                    errorKey: 'Duplicate child name not allowed: newFile',
                    statusCode: 409,
                    briefSummary: '06070090 Duplicate child name not allowed: newFile',
                    stackTrace: 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    descriptionURL: 'https://api-explorer.alfresco.com',
                },
            });
    }

    get401Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children')
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
