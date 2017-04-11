'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class CommentMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    post201Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/74cd8a96-8a21-47e5-9b3b-a1b3e296787d/comments', [{'content': 'This is a comment'}, {'content': 'This is another comment'}])
            .reply(201, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': false,
                        'totalItems': 2,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [{
                        'entry': {
                            'createdAt': '2017-04-11T09:31:21.452+0000',
                            'createdBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'edited': false,
                            'modifiedAt': '2017-04-11T09:31:21.452+0000',
                            'canEdit': true,
                            'modifiedBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'canDelete': true,
                            'id': 'c294cf79-49c1-483e-ac86-39c8fe3cce8f',
                            'content': 'This is a comment'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2017-04-11T09:31:21.658+0000',
                            'createdBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'edited': false,
                            'modifiedAt': '2017-04-11T09:31:21.658+0000',
                            'canEdit': true,
                            'modifiedBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'canDelete': true,
                            'id': '539fc9b2-7d5b-4966-9e44-fcf433647f25',
                            'content': 'This is another comment'
                        }
                    }]
                }
            });

    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true}).get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/74cd8a96-8a21-47e5-9b3b-a1b3e296787d/comments')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': false,
                        'totalItems': 2,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [{
                        'entry': {
                            'createdAt': '2017-04-11T09:31:21.658+0000',
                            'createdBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'edited': false,
                            'modifiedAt': '2017-04-11T09:31:21.658+0000',
                            'canEdit': true,
                            'modifiedBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'canDelete': true,
                            'id': '539fc9b2-7d5b-4966-9e44-fcf433647f25',
                            'content': 'This is another comment'
                        }
                    }, {
                        'entry': {
                            'createdAt': '2017-04-11T09:31:21.452+0000',
                            'createdBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'edited': false,
                            'modifiedAt': '2017-04-11T09:31:21.452+0000',
                            'canEdit': true,
                            'modifiedBy': {
                                'aspectNames': ['cm:ownable'],
                                'firstName': 'Administrator',
                                'emailNotificationsEnabled': true,
                                'company': {},
                                'id': 'admin',
                                'enabled': true,
                                'email': 'admin@alfresco.com',
                                'properties': {
                                    'cm:homeFolderProvider': 'bootstrapHomeFolderProvider',
                                    'cm:authorizationStatus': 'AUTHORIZED',
                                    'cm:homeFolder': '72866d2e-64ee-45a2-ae00-30a5ced96a41',
                                    'cm:name': '56f78250-37a7-4e22-b35a-64b53ae1e5ca',
                                    'cm:owner': {'id': 'admin', 'displayName': 'Administrator'},
                                    'cm:organizationId': ''
                                }
                            },
                            'canDelete': true,
                            'id': 'c294cf79-49c1-483e-ac86-39c8fe3cce8f',
                            'content': 'This is a comment'
                        }
                    }]
                }
            });
    }


}

module.exports = CommentMock;
