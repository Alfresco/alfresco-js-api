import nock from 'nock';
import { BaseMock } from '../base.mock';

export class SecurityGroupApiMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    createSecurityGroup200Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/gs/versions/1/security-groups')
            .reply(200, {
                entry: {
                    "groupName": "Alfresco",
                    "groupType": "HIERARCHICAL",
                    "id": "a0a7b107-84ba-4c3d-b0b7-a8509e8c1c33"
                },
            });
    }

    getSecurityGroups200Response(): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/gs/versions/1/security-groups')
            .reply(200, {
                "list": {
                    "pagination": {
                        "count": 2,
                        "hasMoreItems": false,
                        "totalItems": 2,
                        "skipCount": 0,
                        "maxItems": 100
                    },
                    "entries": [
                        {
                            "entry": {
                                "groupName": "Alfresco",
                                "groupType": "HIERARCHICAL",
                                "id": "a0a7b107-84ba-4c3d-b0b7-a8509e8c1c33"
                            }
                        },
                        {
                            "entry": {
                                "groupName": "Classification",
                                "groupType": "HIERARCHICAL",
                                "id": "classification"
                            }
                        }
                    ]
                },
            });
    }

    getSecurityGroupInfo200Response(securityGroupId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/gs/versions/1/security-groups/'+ securityGroupId)
            .reply(200, {
                "entry": {
                    "groupName": "Alfresco",
                    "groupType": "HIERARCHICAL",
                    "id": "a0a7b107-84ba-4c3d-b0b7-a8509e8c1c33"
                },
            });
    }

    updateSecurityGroup200Response(securityGroupId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .put('/alfresco/api/-default-/public/gs/versions/1/security-groups/'+ securityGroupId)
            .reply(200, {
                "entry": {
                    "groupName": "Nasa",
                    "groupType": "HIERARCHICAL",
                    "id": "a0a7b107-84ba-4c3d-b0b7-a8509e8c1c33"
                },
            });
    }

    deleteSecurityGroup200Response(securityGroupId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/security-groups/'+ securityGroupId)
            .reply(200);
    }
}
