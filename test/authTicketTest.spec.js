/*global describe, it, beforeEach */

var alfresco = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');

describe('Auth', function () {

  beforeEach(function () {
    this.authResponseMock = new AuthResponseMock();
  });

  describe('With Authentication', function () {

    it('login should return the Ticket if all is ok', function (done) {

      this.authResponseMock.get201Response();

      this.alfrescoJsApi = new alfresco.AlfrescoApi({ username:'admin', password:'admin', host:'http://192.168.99.100:8080'});

      this.alfrescoJsApi.login().then(function (data) {
        expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
        done();
      }, function (error) {
      });
    });

    it('login should return an error if wrong credential are used 403 the login fails', function (done) {
      this.authResponseMock.get403Response();

      this.alfrescoJsApi = new alfresco.AlfrescoApi({ username:'wrong', password:'name', host:'http://192.168.99.100:8080'});

      this.alfrescoJsApi.login().then(function () {

      }, function (error) {
        expect(error).to.be.equal('error[Error: Forbidden] message[{"error":{"errorKey":"Login failed",' +
            '"statusCode":403,"briefSummary":"05150009 Login failed","stackTrace":"For security reasons the ' +
            'stack trace is no longer displayed, but the property is kept for previous versions.","descriptionURL"' +
            ':"https://api-explorer.alfresco.com"}}]');
        done();
      });
    });

    it('login should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
      this.authResponseMock.get400Response();

      this.alfrescoJsApi = new alfresco.AlfrescoApi({ username: null , password: null, host:'http://192.168.99.100:8080'});

      this.alfrescoJsApi.login().then(function () {

      }, function (error) {
        expect(error).to.be.equal('error[Error: Bad Request] message[{"error":{"errorKey":"Invalid login details."' +
            ',"statusCode":400,"briefSummary":"05160045 Invalid login details.","stackTrace":"For security reasons' +
            ' the stack trace is no longer displayed, but the property is kept for previous versions.",' +
            '"descriptionURL":"https://api-explorer.alfresco.com"}}]');
        done();
      });
    });

  });

  describe('With Ticket Authentication', function () {

      it('Ticket should be present in the client', function () {
          this.authResponseMock.get400Response();

          this.alfrescoJsApi = new alfresco.AlfrescoApi({ticket: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1', host:'http://192.168.99.100:8080'});

          expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(this.alfrescoJsApi.getClient().authentications.basicAuth.password);
      });
  });
});
