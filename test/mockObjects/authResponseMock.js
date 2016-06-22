'use strict';

var nock = require('nock');

class AuthResponseMock {

    get201Response(forceTicket) {

        var returnMockTicket = forceTicket || 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                'userId': 'admin',
                'password': 'admin'
            })
            .reply(201, {'entry': {'id': returnMockTicket, 'userId': 'admin'}});
    }

    get403Response() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                'userId': 'wrong',
                'password': 'name'
            })
            .reply(403, {
                'error': {
                    'errorKey': 'Login failed',
                    'statusCode': 403,
                    'briefSummary': '05150009 Login failed',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });
    }

    get400Response() {

        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                'userId': null,
                'password': null
            })
            .reply(400, {
                'error': {
                    'errorKey': 'Invalid login details.',
                    'statusCode': 400,
                    'briefSummary': '05160045 Invalid login details.',
                    'stackTrace': 'For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.',
                    'descriptionURL': 'https://api-explorer.alfresco.com'
                }
            });

    }

    get401Response() {
        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets', {
                'userId': null,
                'password': null
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

    get204ResponseLogout (){
        nock('http://192.168.99.100:8080', {'encodedQueryParams':true})
            .delete('/alfresco/api/-default-/public/authentication/versions/1/tickets/-me-')
            .reply(204, '');
    }

    get404ResponseLogout (){
        nock('http://192.168.99.100:8080', {'encodedQueryParams':true})
            .delete('/alfresco/api/-default-/public/authentication/versions/1/tickets/-me-')
            .reply(404, '');
    }


    rec() {
        nock.recorder.rec();
    }

    play() {
        nock.recorder.play();
    }
}

module.exports = AuthResponseMock;
