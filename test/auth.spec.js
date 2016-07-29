/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthEcmMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;

describe('Auth', function () {

    describe('ECM Provider config', function () {

        beforeEach(function () {
            this.host = 'http://127.0.0.1:8080';
            this.authResponseEcmMock = new AuthEcmMock(this.host);
        });

        describe('With Authentication', function () {

            it('login should return the Ticket if all is ok', function (done) {

                this.authResponseEcmMock.get201Response();

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

                this.authResponseEcmMock.get201Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'admin',
                    password: 'admin',
                    host: this.host
                });

                this.alfrescoJsApi.login().then(() => {
                    expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                    done();
                }, function () {
                });
            });

            it('isLoggedIn should return false if the api is logged out', function (done) {

                this.authResponseEcmMock.get201Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'admin',
                    password: 'admin',
                    host: this.host
                });

                this.alfrescoJsApi.login();

                this.authResponseEcmMock.get204ResponseLogout();

                this.alfrescoJsApi.logout().then(() => {
                    expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                    done();
                }, function () {
                });
            });

            it('login should return an error if wrong credential are used 403 the login fails', function (done) {
                this.authResponseEcmMock.get403Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'wrong',
                    password: 'name',
                    host: this.host
                });

                this.alfrescoJsApi.login().then(function () {

                }, function (error) {
                    expect(error.status).to.be.equal(403);
                    done();
                });
            });

            it('login should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
                this.authResponseEcmMock.get400Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: null,
                    password: null,
                    host: this.host
                });

                this.alfrescoJsApi.login().then(function () {

                }, function (error) {
                    expect(error.status).to.be.equal(400);
                    done();
                });
            });

            describe('Events ', function () {
                it('login should fire an event if is unauthorized  401', function (done) {
                    this.authResponseEcmMock.get401Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'wrong',
                        password: 'name',
                        host: this.host
                    });

                    this.alfrescoJsApi.login().on('unauthorized', ()=> {
                        done();
                    });
                });

                it('The Api Should fire success event if is all ok 201', function (done) {
                    this.authResponseEcmMock.get201Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host
                    });

                    this.alfrescoJsApi.login().on('success', ()=> {
                        done();
                    });
                });

                it('The Api Should fire logout event if the logout is successfull', function (done) {
                    this.authResponseEcmMock.get201Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host
                    });

                    this.alfrescoJsApi.login();

                    this.authResponseEcmMock.get204ResponseLogout();

                    this.alfrescoJsApi.logout().on('logout', ()=> {
                        done();
                    });
                });
            });

            describe('With Ticket Authentication', function () {

                it('Ticket should be present in the client', function () {
                    this.authResponseEcmMock.get400Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        ticket: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
                        host: this.host
                    });

                    expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(this.alfrescoJsApi.getClient().authentications.basicAuth.password);
                });
            });

            describe('Logout Api', function () {

                beforeEach(function (done) {
                    this.authResponseEcmMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');
                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host
                    });

                    this.alfrescoJsApi.login().then(() => {
                        done();
                    });
                });

                it('Ticket should be absent in the client and the resolve promise should be called', function (done) {
                    this.authResponseEcmMock.get204ResponseLogout();

                    this.alfrescoJsApi.logout().then((data)=> {
                        expect(this.alfrescoJsApi.config.ticket).to.be.equal(undefined);
                        expect(data).to.be.equal('logout');
                        done();
                    }, function () {
                    });
                });

                it('Logout should be rejected if the Ticket is already expired', function (done) {
                    this.authResponseEcmMock.get404ResponseLogout();
                    this.alfrescoJsApi.logout().then(() => {
                    }, (error) => {
                        expect(error.error.toString()).to.be.equal('Error: Not Found');
                        done();
                    });
                });
            });
        });
    });

    describe('BPM Provider config', function () {

        beforeEach(function () {
            this.hostActiviti = 'http://127.0.0.1:9999';
            this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);
        });

        describe('With Authentication', function () {

            it('login should return the Ticket if all is ok', function (done) {

                this.authResponseBpmMock.get200Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'admin',
                    password: 'admin',
                    hostActiviti: this.hostActiviti,
                    provider: 'BPM'
                });

                this.alfrescoJsApi.login().then((data) => {
                    expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                    done();
                }, function () {
                });
            });

            it('isLoggedIn should return true if the api is logged in', function (done) {

                this.authResponseBpmMock.get200Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'admin',
                    password: 'admin',
                    hostActiviti: this.hostActiviti,
                    provider: 'BPM'

                });

                this.alfrescoJsApi.login().then(() => {
                    expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                    done();
                }, function () {
                });
            });

            it('isLoggedIn should return false if the api is logged out', function (done) {

                this.authResponseBpmMock.get200Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'admin',
                    password: 'admin',
                    hostActiviti: this.hostActiviti,
                    provider: 'BPM'

                });

                this.alfrescoJsApi.login();

                this.authResponseBpmMock.get200ResponseLogout();

                this.alfrescoJsApi.logout().then(() => {
                    expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                    done();
                }, function () {
                });
            });

            it('login should return an error if wrong credential are used 401 the login fails', function (done) {
                this.authResponseBpmMock.get401Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: 'wrong',
                    password: 'name',
                    hostActiviti: this.hostActiviti,
                    provider: 'BPM'

                });

                this.alfrescoJsApi.login().then(function () {

                }, function (error) {
                    expect(error.status).to.be.equal(401);
                    done();
                });
            });

            it.skip('login should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
                this.authResponseBpmMock.get400Response();

                this.alfrescoJsApi = new AlfrescoApi({
                    username: null,
                    password: null,
                    hostActiviti: this.hostActiviti,
                    provider: 'BPM'

                });

                this.alfrescoJsApi.login().then(function () {

                }, function (error) {
                    expect(error.status).to.be.equal(400);
                    done();
                });
            });

            describe('Events ', function () {
                it('login should fire an event if is unauthorized  401', function (done) {
                    this.authResponseBpmMock.get401Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'wrong',
                        password: 'name',
                        hostActiviti: this.hostActiviti,
                        provider: 'BPM'

                    });

                    this.alfrescoJsApi.login().on('unauthorized', ()=> {
                        done();
                    });
                });

                it('The Api Should fire success event if is all ok 201', function (done) {
                    this.authResponseBpmMock.get200Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        hostActiviti: this.hostActiviti,
                        provider: 'BPM'

                    });

                    this.alfrescoJsApi.login().on('success', ()=> {
                        done();
                    });
                });

                it('The Api Should fire logout event if the logout is successfull', function (done) {
                    this.authResponseBpmMock.get200Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        hostActiviti: this.hostActiviti,
                        provider: 'BPM'

                    });

                    this.alfrescoJsApi.login();

                    this.authResponseBpmMock.get200ResponseLogout();

                    this.alfrescoJsApi.logout().on('logout', ()=> {
                        done();
                    });
                });
            });

            describe('Logout Api', function () {

                beforeEach(function (done) {
                    this.authResponseBpmMock.get200Response();
                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        hostActiviti: this.hostActiviti,
                        provider: 'BPM'
                    });

                    this.alfrescoJsApi.login().then(() => {
                        done();
                    });
                });
            });
        });

        describe('BPM and ECM Provider config', function () {

            beforeEach(function () {
                this.host = 'http://127.0.0.1:8080';
                this.hostActiviti = 'http://127.0.0.1:9999';
                this.authResponseEcmMock = new AuthEcmMock(this.host);
                this.authResponseBpmMock = new AuthBpmMock(this.hostActiviti);
            });

            describe('With Authentication', function () {

                it('login should return the Ticket if all is ok', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'
                    });

                    this.alfrescoJsApi.login().then((data) => {
                        expect(data[0]).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                        expect(data[1]).to.be.equal('Basic YWRtaW46YWRtaW4=');
                        done();
                    }, function () {
                    });
                });

                it('login should fail if only ECM fail', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get401Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'
                    });

                    this.alfrescoJsApi.login().then(function () {
                    }, function () {
                        done();
                    });

                    this.authResponseEcmMock.cleanAll();
                });

                it('login should fail if only BPM fail', function (done) {

                    this.authResponseBpmMock.get401Response();
                    this.authResponseEcmMock.get201Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'
                    });

                    this.alfrescoJsApi.login().then(function () {
                    }, function () {
                        done();
                    });

                    this.authResponseBpmMock.cleanAll();
                });

                it('isLoggedIn should return true if the api is logged in', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'

                    });

                    this.alfrescoJsApi.login().then(() => {
                        expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                        done();
                    }, function () {
                    });
                });

                it('isLoggedIn should return false if the api is logged out', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'admin',
                        password: 'admin',
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'

                    });

                    this.alfrescoJsApi.login();

                    this.authResponseBpmMock.get200ResponseLogout();
                    this.authResponseEcmMock.get204ResponseLogout();

                    this.alfrescoJsApi.logout().then(() => {
                        expect(this.alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    }, function () {
                    });
                });

                it('login should return an error if wrong credential are used 401 the login fails', function (done) {
                    this.authResponseBpmMock.get401Response();
                    this.authResponseEcmMock.get401Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: 'wrong',
                        password: 'name',
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'

                    });

                    this.alfrescoJsApi.login().then(function () {

                    }, function (error) {
                        expect(error.status).to.be.equal(401);
                        done();
                    });
                });

                it.skip('login should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
                    this.authResponseBpmMock.get400Response();

                    this.alfrescoJsApi = new AlfrescoApi({
                        username: null,
                        password: null,
                        host: this.host,
                        hostActiviti: this.hostActiviti,
                        provider: 'ALL'

                    });

                    this.alfrescoJsApi.login().then(function () {

                    }, function (error) {
                        expect(error.status).to.be.equal(400);
                        done();
                    });
                });

                describe('Events ', function () {
                    it('login should fire an event if is unauthorized  401', function (done) {
                        this.authResponseBpmMock.get401Response();
                        this.authResponseEcmMock.get401Response();

                        this.alfrescoJsApi = new AlfrescoApi({
                            username: 'wrong',
                            password: 'name',
                            host: this.host,
                            hostActiviti: this.hostActiviti,
                            provider: 'ALL'

                        });

                        this.alfrescoJsApi.login().on('unauthorized', ()=> {
                            done();
                        });
                    });

                    it('The Api Should fire success event if is all ok 201', function (done) {
                        this.authResponseBpmMock.get200Response();
                        this.authResponseEcmMock.get201Response();

                        this.alfrescoJsApi = new AlfrescoApi({
                            username: 'admin',
                            password: 'admin',
                            host: this.host,
                            hostActiviti: this.hostActiviti,
                            provider: 'ALL'

                        });

                        this.alfrescoJsApi.login().on('success', ()=> {
                            done();
                        });
                    });

                    it('The Api Should fire logout event if the logout is successfull', function (done) {
                        this.authResponseBpmMock.get200Response();
                        this.authResponseEcmMock.get201Response();

                        this.alfrescoJsApi = new AlfrescoApi({
                            username: 'admin',
                            password: 'admin',
                            host: this.host,
                            hostActiviti: this.hostActiviti,
                            provider: 'ALL'

                        });

                        this.alfrescoJsApi.login();

                        this.authResponseBpmMock.get200ResponseLogout();
                        this.authResponseEcmMock.get204ResponseLogout();

                        this.alfrescoJsApi.logout().on('logout', ()=> {
                            done();
                        });
                    });
                });

                describe('Logout Api', function () {

                    beforeEach(function (done) {
                        this.authResponseBpmMock.get200Response();
                        this.alfrescoJsApi = new AlfrescoApi({
                            username: 'admin',
                            password: 'admin',
                            host: this.host,
                            hostActiviti: this.hostActiviti,
                            provider: 'ALL'
                        });

                        this.alfrescoJsApi.login().then(() => {
                            done();
                        });
                    });
                });
            });
        });
    });
});
