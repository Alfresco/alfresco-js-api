'use strict';

let nock = require('nock');
let BaseMock = require('../baseMock');

class CustomModelMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200AllCustomModel() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/alfresco/api/-default-/private/alfresco/versions/1/cmm', {})
            .reply(200, {
                'list': {
                    'pagination': {
                        'count': 0,
                        'hasMoreItems': false,
                        'totalItems': 0,
                        'skipCount': 0,
                        'maxItems': 100
                    }, 'entries': []
                }
            });
    }

    create201CustomModel() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/private/alfresco/versions/1/cmm')
            .reply(201, {
                'entry': {
                    'author': 'Administrator',
                    'name': 'testModel',
                    'description': 'Test model description',
                    'namespaceUri': 'http://www.alfresco.org/model/testNamespace/1.0',
                    'namespacePrefix': 'test',
                    'status': 'DRAFT'
                }
            });
    }

    activateCustomModel200() {
        nock(this.host, {'encodedQueryParams': true})
            .put('/alfresco/api/-default-/private/alfresco/versions/1/cmm/testModel', {'status': 'ACTIVE'})
            .query({'select': 'status'})
            .reply(200, {
                'entry': {
                    'author': 'Administrator',
                    'name': 'testModel',
                    'description': 'Test model description',
                    'namespaceUri': 'http://www.alfresco.org/model/testNamespace/1.0',
                    'namespacePrefix': 'test',
                    'status': 'ACTIVE'
                }
            });

    }

}

module.exports = CustomModelMock;
