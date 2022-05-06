import nock from 'nock';
import { BaseMock } from '../base.mock';

export class NodeSecurityMarksApiMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }
    post200manageSecurityMarkOnNode(nodeId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/gs/versions/1/secured-nodes/' + nodeId + '/securing-marks')
            .reply(200, {
                list: {
                    pagination: {
                        count: 2,
                        hasMoreItems: false,
                        totalItems: 2,
                        skipCount: 0,
                        maxItems: 100,
                    },
                    entries: [
                        {
                            entry: {
                                groupId: 'securityGroupId1',
                                name: 'SecurityMarkTest1',
                                id: 'Sh1G8vTQ'
                            }
                        },
                        {
                            entry: {
                                groupId: 'securityGroupId2',
                                name: 'SecurityMarkTest2',
                                id: 'Sh1G8vTR',
                            }
                        }
                    ],
                },
            });
    }

    get200SecurityMarkOnNode(nodeId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/gs/versions/1/secured-nodes/' + nodeId + '/securing-marks')
            .reply(200, {
                list: {
                    pagination: {
                        count: 2,
                        hasMoreItems: false,
                        totalItems: 2,
                        skipCount: 0,
                        maxItems: 100,
                    },
                    entries: [
                        {
                            entry: {
                                groupId: 'securityGroupId1',
                                name: 'SecurityMarkTest1',
                                id: 'Sh1G8vTQ'
                            }
                        },
                        {
                            entry: {
                                groupId: 'securityGroupId2',
                                name: 'SecurityMarkTest2',
                                id: 'Sh1G8vTR',
                            }
                        }
                    ],
                },
            });
    }
}
