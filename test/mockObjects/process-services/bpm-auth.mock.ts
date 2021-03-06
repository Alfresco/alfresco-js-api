import nock from 'nock';
import { BaseMock } from '../base.mock';

export class BpmAuthMock extends BaseMock {
    username: string;
    password: string;

    constructor(host?: string, username?: string, password?: string) {
        super(host);
        this.username = username || 'admin';
        this.password = password || 'admin';
    }

    get200Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/activiti-app/app/authentication', 'j_username=' + this.username + '&j_password=' + this.password + '&_spring_security_remember_me=true&submit=Login')
            .reply(200);
    }

    get200ResponseLogout(): void {
        nock(this.host, { encodedQueryParams: true }).get('/activiti-app/app/logout', {}).reply(200);
    }

    get401Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/activiti-app/app/authentication', 'j_username=wrong&j_password=name&_spring_security_remember_me=true&submit=Login')
            .reply(401, {
                error: {
                    message: 'This request requires HTTP authentication.',
                    statusCode: 401,
                },
            });
    }

    get403Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/activiti-app/app/authentication', 'j_username=wrong&j_password=name&_spring_security_remember_me=true&submit=Login')
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
}
