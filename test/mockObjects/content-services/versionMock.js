'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class VersionMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    post201Response(nodeId, versionId) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/' + nodeId + '/versions/' + versionId + '/revert')
            .reply(201, { 'entry': { 'id': '3.0' } });

    }

    get200Response(nodeId) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/nodes/' + nodeId + '/versions')
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 2,
                        'hasMoreItems': false,
                        'totalItems': 2,
                        'skipCount': 0,
                        'maxItems': 100
                    },
                    'entries': [
                        { 'entry': { 'id': '2.0' } },
                        { 'entry': { 'id': '1.0' } }
                    ]
                }
            });
}


}

module.exports = VersionMock;
