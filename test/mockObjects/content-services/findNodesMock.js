'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class FindNodesMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/queries/nodes?term=test')
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
                            'createdAt': '2011-03-03T10:34:52.092+0000',
                            'isFolder': false,
                            'isFile': true,
                            'createdByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                            'modifiedAt': '2011-03-03T10:34:52.092+0000',
                            'modifiedByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                            'name': 'coins1.JPG',
                            'id': '7bb9c846-fcc5-43b5-a893-39e46ebe94d4',
                            'nodeType': 'cm:content',
                            'content': {
                                'mimeType': 'image/jpeg',
                                'mimeTypeName': 'JPEG Image',
                                'sizeInBytes': 501641,
                                'encoding': 'UTF-8'
                            },
                            'parentId': '880a0f47-31b1-4101-b20b-4d325e54e8b1'
                        }
                    },{
                        'entry': {
                            'createdAt': '2011-03-03T10:34:52.092+0000',
                            'isFolder': false,
                            'isFile': true,
                            'createdByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                            'modifiedAt': '2011-03-03T10:34:52.092+0000',
                            'modifiedByUser': {'id': 'abeecher', 'displayName': 'Alice Beecher'},
                            'name': 'coins2.JPG',
                            'id': '7bb9c846-fcc5-43b5-a893-39e46ebe94d4',
                            'nodeType': 'cm:content',
                            'content': {
                                'mimeType': 'image/jpeg',
                                'mimeTypeName': 'JPEG Image',
                                'sizeInBytes': 501641,
                                'encoding': 'UTF-8'
                            },
                            'parentId': '880a0f47-31b1-4101-b20b-4d325e54e8b1'
                        }
                    }]
                }
            });
    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/public/alfresco/versions/1/queries/nodes?term=test')
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

module.exports = FindNodesMock;
