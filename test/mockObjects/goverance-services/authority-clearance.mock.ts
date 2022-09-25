import { BaseMock } from "../base.mock";
import nock from "nock";

export class AuthorityClearanceMock extends BaseMock {
    constructor(host: string) {
        super(host);
    }

    get200AuthorityClearanceForAuthority(authorityId: string) {
        nock(this.host, { encodedQueryParams: true })
            .get('/alfresco/api/-default-/public/gs/versions/1/cleared-authorities/' + authorityId + '/clearing-marks?skipCount=0&maxItems=100')
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
                                id: 'securityGroupFruits',
                                displayLabel: 'Security Group FRUITS',
                                systemGroup: false,
                                type: 'USER_REQUIRES_ALL',
                                marks: [
                                    {
                                        id: 'fruitMarkId1',
                                        displayLabel: 'APPLES',
                                        applied: true,
                                        inherited: false
                                    },
                                    {
                                        id: 'fruitMarkId2',
                                        displayLabel: 'BANANAS',
                                        applied: false,
                                        inherited: false
                                    },
                                    {
                                        id: 'fruitMarkId3',
                                        displayLabel: 'MANGOES',
                                        applied: false,
                                        inherited: true
                                    },
                                ]
                            }
                        },
                        {
                            entry: {
                                id: 'securityGroupAnimals',
                                displayLabel: 'Security Group ANIMALS',
                                systemGroup: false,
                                type: 'USER_REQUIRES_ANY',
                                marks: [
                                    {
                                        id: 'animalMarkId1',
                                        displayLabel: 'LION',
                                        applied: true,
                                        inherited: false
                                    },
                                    {
                                        id: 'animalMarkId1',
                                        displayLabel: 'TIGER',
                                        applied: true,
                                        inherited: false
                                    },
                                    {
                                        id: 'animalMarkId1',
                                        displayLabel: 'ZEBRA',
                                        applied: true,
                                        inherited: false
                                    }
                                ]
                            }
                        }
                    ]
                }
            });
    }

    post200AuthorityClearanceWithSingleItem(authorityId: string) {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/gs/versions/1/cleared-authorities/' + authorityId + '/clearing-marks')
            .reply(200, {
                entry: {
                    id: 'fruitMarkId1',
                    name: 'APPLES',
                    groupId: 'securityGroupFruits'
                }
            });
    }

    post200AuthorityClearanceWithList(authorityId: string) {
        nock(this.host, { encodedQueryParams: true })
            .post('/alfresco/api/-default-/public/gs/versions/1/cleared-authorities/' + authorityId + '/clearing-marks')
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
                                id: 'fruitMarkId1',
                                name: 'APPLES',
                                groupId: 'securityGroupFruits'
                            }
                        },
                        {
                            entry: {
                                id: 'fruitMarkId2',
                                name: 'BANANAS',
                                groupId: 'securityGroupFruits'
                            }
                        }
                    ]
                }
            });
    }
}