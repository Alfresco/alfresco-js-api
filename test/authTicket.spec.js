/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');

describe('Auth', function () {

    beforeEach(function () {
        this.host = 'http://192.168.99.100:8080';
        this.authResponseMock = new AuthResponseMock(this.host);
    });

    describe('With Authentication', function () {

        it('login should return the Ticket if all is ok', function (done) {

            this.authResponseMock.get201Response();

            this.alfrescoJsApi = new AlfrescoApi({
                username: 'admin',
                password: 'admin',
                host: this.host
            });

            this.alfrescoJsApi.login().then((data) => {
                expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                done();
            }, function () {
            });
        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.authResponseMock.get201Response();

            this.alfrescoJsApi = new AlfrescoApi({
                username: 'admin',
                password: 'admin',
                host: 'http://192.168.99.100:8080'
            });

            this.alfrescoJsApi.login().then(() => {
                expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('isLoggedIn should return false if the api is logged out', function (done) {

            this.authResponseMock.get201Response();

            this.alfrescoJsApi = new AlfrescoApi({
                username: 'admin',
                password: 'admin',
                host: 'http://192.168.99.100:8080'
            });

            this.alfrescoJsApi.login();

            this.authResponseMock.get204ResponseLogout();

            this.alfrescoJsApi.logout().then(() => {
                expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(false);
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
                expect(error.status).to.be.equal(403);
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
                expect(error.status).to.be.equal(400);
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

                this.alfrescoJsApi.login().then(() => {
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
