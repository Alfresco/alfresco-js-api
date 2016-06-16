/*global describe, it, beforeEach */

var AlfrescoJsApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/AuthResponseMock');

describe('Auth', function () {

    beforeEach(function () {
        this.authResponseMock = new AuthResponseMock();
    });

    describe('With Authentication', function () {

        it('createTicket should return the Ticket if all is ok', function (done) {

            this.authResponseMock.get200Response();

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

        it('createTicket should return an error if wrong credential are used 403 the login fails', function (done) {
            this.authResponseMock.get403Response();

            var alfrescoClient = AlfrescoJsApi.getClientWithAuthentication('http://192.168.99.100:8080/alfresco/api/-default-/public/authentication/versions/1', 'wrong', 'name');

            var apiInstance = new AlfrescoJsApi.Auth.AuthenticationApi(alfrescoClient);
            var loginRequest = new AlfrescoJsApi.Auth.LoginRequest();

            loginRequest.userId = 'wrong';
            loginRequest.password = 'name';

            apiInstance.createTicket(loginRequest).then(function () {

            }, function (error) {
                expect(error).to.be.equal('error[Error: Forbidden] message[{"error":{"errorKey":"Login failed",' +
                    '"statusCode":403,"briefSummary":"05150009 Login failed","stackTrace":"For security reasons the ' +
                    'stack trace is no longer displayed, but the property is kept for previous versions.","descriptionURL"' +
                    ':"https://api-explorer.alfresco.com"}}]');
                done();
            });
        });

        it('createTicket should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
            this.authResponseMock.get400Response();

            var alfrescoClient = AlfrescoJsApi.getClientWithAuthentication('http://192.168.99.100:8080/alfresco/api/-default-/public/authentication/versions/1', null, null);

            var apiInstance = new AlfrescoJsApi.Auth.AuthenticationApi(alfrescoClient);
            var loginRequest = new AlfrescoJsApi.Auth.LoginRequest();

            loginRequest.userId = null;
            loginRequest.password = null;

            apiInstance.createTicket(loginRequest).then(function () {

            }, function (error) {
                console.log(error);
                expect(error).to.be.equal('error[Error: Bad Request] message[{"error":{"errorKey":"Invalid login details."' +
                    ',"statusCode":400,"briefSummary":"05160045 Invalid login details.","stackTrace":"For security reasons' +
                    ' the stack trace is no longer displayed, but the property is kept for previous versions.",' +
                    '"descriptionURL":"https://api-explorer.alfresco.com"}}]');
                done();
            });
        });

    });

    describe('Login', function () {

        it('createTicket should return the Ticket if all is ok', function (done) {

            this.authResponseMock.get200Response();

            var loginPromise = AlfrescoJsApi.login('http://192.168.99.100:8080/alfresco/api/-default-/public/authentication/versions/1', 'admin', 'admin');

            loginPromise.then(function (data) {
                expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                done();
            }, function (error) {
                console.error('error ' + error.response.error + '  ' + error.response.text);
            });
        });
    });

    describe('With Ticket', function () {

        it('createTicket should return the Ticket if all is ok', function () {

            var alfrescoClient = AlfrescoJsApi.getClientWithTicket('http://192.168.99.100:8080/alfresco/api/-default-/public/authentication/versions/1', 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');

            expect(alfrescoClient).not.to.be.equal(undefined);

        });
    });
});
