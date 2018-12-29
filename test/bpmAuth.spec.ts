/*global describe, it, beforeEach, afterEach */

import { ProcessAuth } from '@alfresco/js-api';

let AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let expect = require('chai').expect;
let sinon = require('sinon');

describe('Bpm Auth test', function () {
    beforeEach(function () {
        this.hostBpm = 'http://127.0.0.1:9999';
        this.authBpmMock = new AuthBpmMock(this.hostBpm);
    });

    it('should remember username on login', () => {
        const auth = new ProcessAuth({});
        auth.login('johndoe', 'password');
        expect(auth.authentications.basicAuth.username).to.be.equal('johndoe');
    });

    it('should forget username on logout', function (done) {
        const auth = new ProcessAuth({});

        this.authBpmMock.get200Response();

        auth.login('johndoe', 'password');
        expect(auth.authentications.basicAuth.username).to.be.equal('johndoe');

        this.authBpmMock.get200ResponseLogout();

        auth.logout().then(() => {
            expect(auth.authentications.basicAuth.username).to.be.equal(null);
            done();
        }, function () {
        });
    });

    describe('With Authentication', function () {

        it('login should return the Ticket if all is ok', function (done) {

            this.authBpmMock.get200Response();

            this.processAuth = new ProcessAuth({
                hostBpm: this.hostBpm,
                contextRootBpm: 'activiti-app'
            });

            this.processAuth.login('admin', 'admin').then((data) => {
                expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                done();
            }, function () {
            });

        });

        it('login password should be removed after login', function (done) {

            this.authBpmMock.get200Response();

            this.processAuth = new ProcessAuth({
                hostBpm: this.hostBpm,
                contextRootBpm: 'activiti-app'
            });

            this.processAuth.login('admin', 'admin').then((data) => {
                expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                expect(this.processAuth.authentications.basicAuth.password).to.be.not.equal('admin');
                done();
            }, function () {
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.authBpmMock.get200Response();

            this.processAuth = new ProcessAuth({
                hostBpm: this.hostBpm,
                contextRootBpm: 'activiti-app'
            });

            this.processAuth.login('admin', 'admin').then(() => {
                expect(this.processAuth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('isLoggedIn should return false if the api is logged out', function (done) {

            this.authBpmMock.get200Response();

            this.processAuth = new ProcessAuth({
                hostBpm: this.hostBpm,
                contextRootBpm: 'activiti-app'
            });
            this.processAuth.login('admin', 'admin');

            this.authBpmMock.get200ResponseLogout();

            this.processAuth.logout().then(() => {
                expect(this.processAuth.isLoggedIn()).to.be.equal(false);
                done();
            }, function () {
            });

        });

        it('isLoggedIn should return false if the host change', function (done) {

            this.authBpmMock.get200Response();

            this.processAuth = new ProcessAuth({
                hostBpm: this.hostBpm,
                contextRootBpm: 'activiti-app'
            });

            this.processAuth.login('admin', 'admin').then(() => {
                expect(this.processAuth.isLoggedIn()).to.be.equal(true);
                this.processAuth.changeHost('anyhost');
                expect(this.processAuth.isLoggedIn()).to.be.equal(false);
                done();
            }, function () {
            });

        });

        it('login should return an error if wrong credential are used 401 the login fails', function (done) {
            this.authBpmMock.get401Response();

            this.processAuth = new ProcessAuth({
                hostBpm: this.hostBpm,
                contextRootBpm: 'activiti-app'
            });

            this.processAuth.login('wrong', 'name').then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(401);
                done();
            });

        });

        describe('Events ', function () {
            it('login should fire an event if is unauthorized  401', function (done) {
                this.authBpmMock.get401Response();

                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                let loginPromise = this.processAuth.login('wrong', 'name');

                loginPromise.catch(() => {
                });

                loginPromise.on('unauthorized', () => {
                    done();
                });
            });

            it('login should fire an event if is forbidden 403', function (done) {
                this.authBpmMock.get403Response();

                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                let loginPromise = this.processAuth.login('wrong', 'name');

                loginPromise.catch(() => {
                });

                loginPromise.on('forbidden', () => {
                    done();
                });
            });

            it('The Api Should fire success event if is all ok 201', function (done) {
                this.authBpmMock.get200Response();

                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                let loginPromise = this.processAuth.login('admin', 'admin');

                loginPromise.catch(() => {
                });

                loginPromise.on('success', () => {
                    done();
                });
            });

            it('The Api Should fire logout event if the logout is successfull', function (done) {
                this.authBpmMock.get200Response();

                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                this.processAuth.login('admin', 'admin');

                this.authBpmMock.get200ResponseLogout();

                this.processAuth.logout().on('logout', () => {
                    done();
                });
            });
        });

        describe('With Ticket Authentication', function () {

            it('Ticket should be present in the client', function () {

                this.processAuth = new ProcessAuth({
                    ticketBpm: 'Basic YWRtaW46YWRtaW4=',
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                expect('Basic YWRtaW46YWRtaW4=').to.be.equal(this.processAuth.authentications.basicAuth.ticket);
            });
        });

        describe('Logout Api', function () {

            beforeEach(function (done) {
                this.authBpmMock.get200Response();
                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                this.processAuth.login('admin', 'admin').then(() => {
                    done();
                });
            });

            it('Ticket should be absent in the client and the resolve promise should be called', function (done) {
                this.authBpmMock.get200ResponseLogout();

                this.processAuth.logout().then((data) => {
                    expect(this.processAuth.getTicket()).to.be.equal(null);
                    expect(data).to.be.equal('logout');
                    done();
                }, function () {
                });
            });

        });

        describe('CSRF Token', function () {

            beforeEach(function () {
                this.setCsrfTokenStub = sinon.stub(ProcessAuth.prototype, 'setCsrfToken');
            });

            afterEach(function () {
                this.setCsrfTokenStub.restore();
            });

            it('should be enabled by default', function (done) {
                this.authBpmMock.get200Response();

                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                this.processAuth.login('admin', 'admin').then(() => {
                    expect(this.setCsrfTokenStub.called).to.be.equal(true);
                    done();
                });
            });

            it('should be disabled if disableCsrf is true', function (done) {
                this.authBpmMock.get200Response();

                this.processAuth = new ProcessAuth({
                    hostBpm: this.hostBpm,
                    contextRootBpm: 'activiti-app',
                    disableCsrf: true
                });

                this.processAuth.login('admin', 'admin').then(() => {
                    expect(this.setCsrfTokenStub.called).to.be.equal(false);
                    done();
                });
            });
        });
    });
});
