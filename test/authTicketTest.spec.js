var AlfrescoJsApi = require('../main');
var expect = require('chai').expect;
var nock = require('nock');

describe('Alfresco Client', function () {

    it('createTicket should return the Ticket if all is ok', function (done) {

        nock('http://192.168.99.100:8080', {'encodedQueryParams': true})
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets')
            .reply(201, {'entry': {'id': 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', 'userId': 'admin'}});

        var alfrescoClient = AlfrescoJsApi.getClientWithAuthentication('http://192.168.99.100:8080/alfresco/api/-default-/public/authentication/versions/1', 'admin', 'admin');

        var apiInstance = new AlfrescoJsApi.Auth.AuthenticationApi(alfrescoClient);
        var loginRequest = new AlfrescoJsApi.Auth.LoginRequest();

        loginRequest.userId = 'admin';
        loginRequest.password = 'admin';

        apiInstance.createTicket(loginRequest).then(function (data) {
            expect(data.entry.id).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
            done();
        }, function (error) {
            console.error('error ' + error.response.error + '  ' + error.response.text);
        });

    });

    it('createTicket should return an error if wrong credential are used', function (done) {

        //      nock.recorder.rec();
        nock('http://192.168.99.100:8080', {"encodedQueryParams": true})
            .post('/alfresco/api/-default-/public/authentication/versions/1/tickets')
            .reply(403, {
                "error": {
                    "errorKey": "Login failed",
                    "statusCode": 403,
                    "briefSummary": "05150009 Login failed",
                    "stackTrace": "For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.",
                    "descriptionURL": "https://api-explorer.alfresco.com"
                }
            });

        var alfrescoClient = AlfrescoJsApi.getClientWithAuthentication('http://192.168.99.100:8080/alfresco/api/-default-/public/authentication/versions/1', 'wrong', 'name');

        var apiInstance = new AlfrescoJsApi.Auth.AuthenticationApi(alfrescoClient);
        var loginRequest = new AlfrescoJsApi.Auth.LoginRequest();

        loginRequest.userId = 'wrong';
        loginRequest.password = 'name';

        apiInstance.createTicket(loginRequest).then(function (data) {

        }, function (error) {
            console.log('error' + error);
            expect(error).to.be.equal('error[Error: Forbidden] message[{"error":{"errorKey":"Login failed","statusCode":403,"briefSummary":"05150009 Login failed","stackTrace":"For security reasons the stack trace is no longer displayed, but the property is kept for previous versions.","descriptionURL":"https://api-explorer.alfresco.com"}}]');
            done();
        });
        //     nock.recorder.play();
    });
});
