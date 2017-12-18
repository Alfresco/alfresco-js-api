'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class PeopleMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get201Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/people')
            .reply(201, {
                'entry': {
                    'firstName': 'chewbacca',
                    'lastName': 'Chewbe',
                    'emailNotificationsEnabled': true,
                    'company': {},
                    'id': 'chewbe',
                    'enabled': true,
                    'email': 'chewbe@millenniumfalcon.com'
                }
            });

    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/tags')
            .reply(401, {});
    }
}

module.exports = PeopleMock;
