/*global describe, it, beforeEach */

var BpmAuth = require('../src/bpmAuth');
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var expect = require('chai').expect;

describe('Bpm Auth test', function () {

    beforeEach(function () {
        this.host = 'http://127.0.0.1:9999';
        this.authBpmMock = new AuthBpmMock(this.host);
    });

    describe('With Authentication', function () {

        it('login should return the Ticket if all is ok', function (done) {

            this.authBpmMock.get200Response();

            this.bpmAuth = new BpmAuth({
                hostActiviti: this.host,
                username: 'admin',
                password: 'admin'
            });

            this.bpmAuth.login().then((data) => {
                expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                done();
            }, function () {
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.authBpmMock.get200Response();

            this.bpmAuth = new BpmAuth({
                hostActiviti: this.host,
                username: 'admin',
                password: 'admin'
            });

            this.bpmAuth.login().then(() => {
                expect(this.bpmAuth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('isLoggedIn should return false if the api is logged out', function (done) {

            this.authBpmMock.get200Response();

            this.bpmAuth = new BpmAuth({
                hostActiviti: this.host,
                username: 'admin',
                password: 'admin'
            });
            this.bpmAuth.login();

            this.authBpmMock.get200ResponseLogout();

            this.bpmAuth.logout().then(() => {
                expect(this.bpmAuth.isLoggedIn()).to.be.equal(false);
                done();
            }, function () {
            });

        });

        it('login should return an error if wrong credential are used 401 the login fails', function (done) {

            this.bpmAuth = new BpmAuth({
                hostActiviti: this.host,
                username: 'wrong',
                password: 'name'
            });

            this.authBpmMock.get401Response();

            this.bpmAuth.login().then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(401);
                done();
            });

        });

        describe('Events ', function () {
            it('login should fire an event if is unauthorized  401', function (done) {
                this.authBpmMock.get401Response();

                this.bpmAuth = new BpmAuth({
                    hostActiviti: this.host,
                    username: 'wrong',
                    password: 'name'
                });

                this.bpmAuth.login().on('unauthorized', ()=> {
                    done();
                });
            });

            it('The Api Should fire success event if is all ok 201', function (done) {
                this.authBpmMock.get200Response();

                this.bpmAuth = new BpmAuth({
                    hostActiviti: this.host,
                    username: 'admin',
                    password: 'admin'
                });

                this.bpmAuth.login().on('success', ()=> {
                    done();
                });
            });

            it('The Api Should fire logout event if the logout is successfull', function (done) {
                this.authBpmMock.get200Response();

                this.bpmAuth = new BpmAuth({
                    hostActiviti: this.host,
                    username: 'admin',
                    password: 'admin'
                });

                this.bpmAuth.login();

                this.authBpmMock.get200ResponseLogout();

                this.bpmAuth.logout().on('logout', ()=> {
                    done();
                });
            });
        });

        describe('Logout Api', function () {

            beforeEach(function (done) {
                this.authBpmMock.get200Response();
                this.bpmAuth = new BpmAuth({
                    hostActiviti: this.host,
                    username: 'admin',
                    password: 'admin'
                });

                this.bpmAuth.login().then(() => {
                    done();
                });
            });

            it('Ticket should be absent in the client and the resolve promise should be called', function (done) {
                this.authBpmMock.get200ResponseLogout();

                this.bpmAuth.logout().then((data)=> {
                    expect(this.bpmAuth.config.ticket).to.be.equal(undefined);
                    expect(data).to.be.equal('logout');
                    done();
                }, function () {
                });
            });

        });
    });
});
