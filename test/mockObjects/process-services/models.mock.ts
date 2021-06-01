import nock from 'nock';
import { BaseMock } from '../base.mock';

export class ModelsMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    get200getModels(): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/activiti-app/api/enterprise/models')
            .query({ filter: 'myReusableForms', modelType: '2' })
            .reply(200, {
                size: 1,
                total: 1,
                start: 0,
                data: [
                    {
                        id: 1,
                        name: 'Metadata',
                        description: '',
                        createdBy: 1,
                        createdByFullName: ' Administrator',
                        lastUpdatedBy: 1,
                        lastUpdatedByFullName: ' Administrator',
                        lastUpdated: '2016-08-05T17:39:22.750+0000',
                        latestVersion: true,
                        version: 2,
                        comment: null,
                        stencilSet: null,
                        referenceId: null,
                        modelType: 2,
                        favorite: null,
                        permission: 'write',
                        tenantId: 1,
                    },
                ],
            });
    }
}
