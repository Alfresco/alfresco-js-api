import nock from 'nock';
import { BaseMock } from '../base.mock';

export class TaskFormMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    get200getTaskFormVariables(): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/activiti-app/api/enterprise/task-forms/5028/variables')
            .reply(
                200,
                [{ id: 'initiator', type: 'string', value: '1001' }],
                [
                    'Server',
                    'Apache-Coyote/1.1',
                    'set-cookie',
                    'ACTIVITI_REMEMBER_ME=NjdOdGwvcUtFTkVEczQyMGh4WFp5QT09OmpUL1UwdFVBTC94QTJMTFFUVFgvdFE9PQ',
                    'X-Content-Type-Options',
                    'nosniff',
                    'X-XSS-Protection',
                    '1; mode=block',
                    'Cache-Control',
                    'no-cache, no-store, max-age=0, must-revalidate',
                    'Pragma',
                    'no-cache',
                    'Expires',
                    '0',
                    'X-Frame-Options',
                    'SAMEORIGIN',
                    'Content-Type',
                    'application/json',
                    'Transfer-Encoding',
                    'chunked',
                    'Date',
                    'Tue, 01 Nov 2016 19:43:36 GMT',
                    'Connection',
                    'close',
                ]
            );
    }
}
