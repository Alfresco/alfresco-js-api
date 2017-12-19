'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class GsSitesApiMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/gs/versions/1/gs-sites/rm')
            .reply(200, {
                'entry': {
                    'role': 'SiteManager',
                    'visibility': 'PUBLIC',
                    'compliance': 'STANDARD',
                    'guid': 'fd870d47-57a0-46f7-83c8-c523a4da13c4',
                    'description': 'Records Management Description Test',
                    'id': 'rm',
                    'title': 'Records Management'
                }
            });

    }


}

module.exports = GsSitesApiMock;
