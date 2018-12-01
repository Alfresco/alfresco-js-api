'use strict';

let nock = require('nock');
let BaseMock = require('../baseMock');

class TagMock extends BaseMock {

    constructor(host) {
        super(host);
    }


    get200GetGroups() {
        nock(this.host, {'encodedQueryParams': true})
        .get('/alfresco/api/-default-/public/alfresco/versions/1/groups')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': true,
                        'totalItems': 279,
                        'skipCount': 0,
                        'maxItems': 2
                    },
                    'entries': [
                        {
                            'entry': {
                                'isRoot': true,
                                'displayName': 'alfalfb',
                                'id': 'GROUP_alfalfa'
                            }
                        },
                        {
                            'entry': {
                                'isRoot': true,
                                'displayName': 'Call CenterAA',
                                'id': 'GROUP_CallCenterAA'
                            }
                        }
                    ]
                }
            });
    }

    getDeleteGroupSuccessfulResponse(groupName){
        nock(this.host, {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/groups/'+groupName)
            .query({"cascade":"false"})
            .reply(200);

        "http://adfdev.envalfresco.com/alfresco/api/-default-/public/alfresco/versions/1/groups/group_test"
    }

    getDeleteMemberForGroupSuccessfulResponse(groupName, memberName){
        nock(this.host, {'encodedQueryParams': true})
            .delete('/alfresco/api/-default-/public/alfresco/versions/1/groups/'+groupName+'/members/'+ memberName)
            .reply(200);
    }

    get200CreateGroupResponse() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/groups')
            .reply(200, {
                'entry': {
                  'isRoot': true,
                  'displayName': 'SAMPLE',
                  'id': 'GROUP_TEST'
                }
              });

    }

    get200GetSingleGroup() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/groups/GROUP_TEST')
            .reply(200, {
                'entry': {
                  'isRoot': true,
                  'displayName': 'SAMPLE',
                  'id': 'GROUP_TEST'
                }
              });
    }

    get200UpdateGroupResponse() {
        nock(this.host, {'encodedQueryParams': true})
            .put('/alfresco/api/-default-/public/alfresco/versions/1/groups/GROUP_TEST')
            .reply(200, {
                'entry': {
                  'isRoot': true,
                  'displayName': 'CHANGED',
                  'id': 'GROUP_TEST'
                }
              });
    }

    get200GetGroupMemberships() {
        nock(this.host, { 'encodedQueryParams': true })
            .get('/alfresco/api/-default-/public/alfresco/versions/1/groups/GROUP_TEST/members')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 1,
                        'hasMoreItems': false,
                        'totalItems': 1,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [
                        {
                            'entry': {
                                'displayName': 'SAMPLE',
                                'id': 'GROUP_SUB_TEST',
                                'memberType': 'GROUP'
                            }
                        }
                    ]
                }
            });
    }

    get200AddGroupMembershipResponse() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/groups/GROUP_TEST/members')
            .reply(200, {
                'entry': {
                  'displayName': 'SAMPLE',
                  'id': 'GROUP_SUB_TEST',
                  'memberType': 'GROUP'
                }
              });
    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/groups')
            .reply(401, {
                'error': {
                    'errorKey': 'framework.exception.ApiDefault',
                    'statusCode': 401,
                    'briefSummary': '05210059 Authentication failed for Web Script org/alfresco/api/ResourceWebScript.get',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }
}

module.exports = TagMock;
