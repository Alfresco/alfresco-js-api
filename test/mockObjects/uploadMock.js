'use strict';

var nock = require('nock');

class UploadMock {

    constructor(host) {
        this.host = host ? host : 'http://192.168.99.100:8080';
    }

    get201CreationFileEmpty() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children', {
                'name': 'newFile',
                'nodeType': 'cm:content'
            })
            .reply(201, {
                'entry': {
                    'aspectNames': ['cm:auditable'],
                    'createdAt': '2016-07-07T00:04:24.538+0000',
                    'isFolder': false,
                    'isFile': true,
                    'createdByUser': {'id': 'admin', 'displayName': 'Administrator'},
                    'modifiedAt': '2016-07-07T00:04:24.538+0000',
                    'modifiedByUser': {'id': 'admin', 'displayName': 'Administrator'},
                    'name': 'newFile',
                    'id': 'bb492255-3543-426e-ab2f-148f7046f740',
                    'nodeType': 'cm:content',
                    'content': {
                        'mimeType': 'text/plain',
                        'mimeTypeName': 'Plain Text',
                        'sizeInBytes': 0,
                        'encoding': 'UTF-8'
                    },
                    'parentId': 'd4f87809-10d9-49a3-ae7d-7a2640f87f3d'
                }
            });
    }

    get409CreationFileNewNameClashes() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children', {
                'name': 'newFile',
                'nodeType': 'cm:content'
            })
            .reply(409, {
                'error': {
                    'errorKey': 'Duplicate child name not allowed: newFile',
                    'statusCode': 409,
                    'briefSummary': '06070090 Duplicate child name not allowed: newFile',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    get401Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/alfresco/versions/1/nodes/-root-/children', {
                'name': 'newFile',
                'nodeType': 'cm:content'
            })
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


    rec() {
        nock.recorder.rec();
    }

    play() {
        nock.recorder.play();
    }
}

module.exports = UploadMock;
