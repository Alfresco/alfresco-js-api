/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');

describe('Auth', function () {

  beforeEach(function () {
    this.authResponseMock = new AuthResponseMock();
  });

  describe('With Authentication', function () {

    it('login should return the Ticket if all is ok', function (done) {

      this.authResponseMock.get201Response();

      this.alfrescoJsApi = new AlfrescoApi({
        username: 'admin',
        password: 'admin',
        host: 'http://192.168.99.100:8080'
      });

      this.alfrescoJsApi.login().then(function (data) {
        expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
        done();
      }, function () {
            });
    });

    it('login should return an error if wrong credential are used 403 the login fails', function (done) {
      this.authResponseMock.get403Response();

      this.alfrescoJsApi = new AlfrescoApi({
        username: 'wrong',
        password: 'name',
        host: 'http://192.168.99.100:8080'
      });

      this.alfrescoJsApi.login().then(function () {

      }, function (error) {
        expect(error.error.toString()).to.be.equal('Error: Forbidden');
        expect(error.message).to.be.equal('{"error":{"errorKey":"Login failed","statusCode":403,' +
            '"briefSummary":"05150009 Login failed","stackTrace":"For security reasons the stack ' +
            'trace is no longer displayed, but the property is kept for previous versions.","descriptionURL":' +
            '"https://api-explorer.alfresco.com"}}');
        done();
      });
    });

    it('login should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
      this.authResponseMock.get400Response();

      this.alfrescoJsApi = new AlfrescoApi({
        username: null,
        password: null,
        host: 'http://192.168.99.100:8080'
      });

      this.alfrescoJsApi.login().then(function () {

      }, function (error) {
        expect(error.error.toString()).to.be.equal('Error: Bad Request');
        expect(error.message).to.be.equal('{"error":{"errorKey":"Invalid login details."' +
            ',"statusCode":400,"briefSummary":"05160045 Invalid login details.","stackTrace":' +
            '"For security reasons the stack trace is no longer displayed, but the property is ' +
            'kept for previous versions.","descriptionURL":"https://api-explorer.alfresco.com"}}');
        done();
      });
    });

    describe('Events ', function () {

      it('login should fire an event if is unauthorized an 401', function (done) {
        this.authResponseMock.get401Response();

        this.alfrescoJsApi.login();

        this.alfrescoJsApi.on('unauthorized', ()=> {
          done();
        });

      });

      it('The Api Should fire success event if is unauthorized an 401', function (done) {
        this.authResponseMock.get201Response();

        this.alfrescoJsApi = new AlfrescoApi({
          username: 'admin',
          password: 'admin',
          host: 'http://192.168.99.100:8080'
        });

        this.alfrescoJsApi.on('success', ()=> {
          done();
        });

        this.alfrescoJsApi.login();

      });

      it('The Api Should fire logout event if the logout is successfull', function (done) {
        this.authResponseMock.get201Response();

        this.alfrescoJsApi = new AlfrescoApi({
          username: 'admin',
          password: 'admin',
          host: 'http://192.168.99.100:8080'
        });

        this.alfrescoJsApi.on('logout', ()=> {
          done();
        });

        this.alfrescoJsApi.login();

        this.authResponseMock.get204ResponseLogout();

        this.alfrescoJsApi.logout();

      });

    });

    describe('With Ticket Authentication', function () {

      it('Ticket should be present in the client', function () {
        this.authResponseMock.get400Response();

        this.alfrescoJsApi = new AlfrescoApi({
          ticket: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
          host: 'http://192.168.99.100:8080'
        });

        expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(this.alfrescoJsApi.getClient().authentications.basicAuth.password);
      });
    });

    describe('Logout Api', function () {

      beforeEach(function (done) {
        this.authResponseMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');
        this.alfrescoJsApi = new AlfrescoApi({
          username: 'admin',
          password: 'admin',
          host: 'http://192.168.99.100:8080'
        });

        this.alfrescoJsApi.login().then((data) => {
          done();
        });
      });

      it('Ticket should be absent in the client and the resolve promise should be called', function (done) {
        this.authResponseMock.get204ResponseLogout();

        this.alfrescoJsApi.logout().then((data)=> {
          expect(this.alfrescoJsApi.config.ticket).to.be.equal(undefined);
          expect(data).to.be.equal('logout');
          done();
        }, function () {
                });
      });

      it('Logout should be rejected if the Ticket is already expired', function (done) {
        this.authResponseMock.get404ResponseLogout();
        this.alfrescoJsApi.logout().then(() => {
        }, (error) => {
          expect(error.error.toString()).to.be.equal('Error: Not Found');
          done();
        });
      });
    });
  });
});
