import nock from 'nock';
import { BaseMock } from '../base.mock';

export class EcmAuthMock extends BaseMock {
    username: string;
    password: string;

    constructor(host?: string, username?: string, password?: string) {
        super(host);
        this.username = username || 'admin';
        this.password = password || 'admin';
    }

    get201Response(forceTicket?: string): void {
        const returnMockTicket = forceTicket || 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                userId: this.username,
                password: this.password,
            })
            .reply(201, { entry: { id: returnMockTicket, userId: 'admin' } });
    }

    get200ValidTicket(forceTicket?: string): void {
        const returnMockTicket = forceTicket || 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/authentication/versions/1/tickets/-me-')
            .reply(200, { entry: { id: returnMockTicket } });
    }

    get403Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                userId: 'wrong',
                password: 'name',
            })
            .reply(403, {
                error: {
                    errorKey: 'Login failed',
                    statusCode: 403,
                    briefSummary: '05150009 Login failed',
                    stackTrace: 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    descriptionURL: 'https://api-explorer.alfresco.com',
                },
            });
    }

    get400Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                userId: null,
                password: null,
            })
            .reply(400, {
                error: {
                    errorKey: 'Invalid login details.',
                    statusCode: 400,
                    briefSummary: '05160045 Invalid login details.',
                    stackTrace: 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    descriptionURL: 'https://api-explorer.alfresco.com',
                },
            });
    }

    get401Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                userId: 'wrong',
                password: 'name',
            })
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

    get204ResponseLogout(): void {
        nock(this.host, { encodedQueryParams: true }).delete('/alfresco/api/-default-/public/authentication/versions/1/tickets/-me-').reply(204, '');
    }

    get404ResponseLogout(): void {
        nock(this.host, { encodedQueryParams: true }).delete('/alfresco/api/-default-/public/authentication/versions/1/tickets/-me-').reply(404, '');
    }
}
