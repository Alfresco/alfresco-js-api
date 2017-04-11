'use strict';
var nock = require('nock');
var BaseMock = require('../baseMock');

class ProfileMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200getProfile() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/profile')
            .reply(200, {
                'id': 1,
                'firstName': null,
                'lastName': 'Administrator',
                'email': 'admin',
                'externalId': null,
                'company': null,
                'pictureId': null,
                'fullname': ' Administrator',
                'password': null,
                'type': 'enterprise',
                'status': 'active',
                'created': '2016-10-21T13:32:54.886+0000',
                'lastUpdate': '2016-10-23T22:16:48.252+0000',
                'tenantId': 1,
                'latestSyncTimeStamp': null,
                'groups': [{
                    'id': 1,
                    'name': 'analytics-users',
                    'externalId': null,
                    'status': 'active',
                    'tenantId': 1,
                    'type': 0,
                    'parentGroupId': null,
                    'lastSyncTimeStamp': null,
                    'userCount': null,
                    'users': null,
                    'capabilities': null,
                    'groups': null,
                    'manager': null
                }, {
                    'id': 2,
                    'name': 'kickstart-users',
                    'externalId': null,
                    'status': 'active',
                    'tenantId': 1,
                    'type': 0,
                    'parentGroupId': null,
                    'lastSyncTimeStamp': null,
                    'userCount': null,
                    'users': null,
                    'capabilities': null,
                    'groups': null,
                    'manager': null
                }, {
                    'id': 3,
                    'name': 'Superusers',
                    'externalId': null,
                    'status': 'active',
                    'tenantId': 1,
                    'type': 0,
                    'parentGroupId': null,
                    'lastSyncTimeStamp': null,
                    'userCount': null,
                    'users': null,
                    'capabilities': null,
                    'groups': null,
                    'manager': null
                }],
                'capabilities': null,
                'apps': [],
                'primaryGroup': null,
                'tenantPictureId': null,
                'tenantName': 'test'
            });
    }

    get401getProfile() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/profile')
            .reply(401);
    }

    get200getProfilePicture() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/profile-picture')
            .reply(200, 'BUFFERSIZE');
    }

}

module.exports = ProfileMock;
