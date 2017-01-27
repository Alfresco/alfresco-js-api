/*global describe, it, beforeEach */

var expect = require('chai').expect;
var AuthEcmMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
var EcmAuth = require('../src/ecmAuth');

describe('Ecm Auth test', function () {

    beforeEach(function () {
        this.hostEcm = 'http://127.0.0.1:8080';
        this.authEcmMock = new AuthEcmMock(this.hostEcm);
    });

    describe('With Authentication', function () {

        it('login should return the Ticket if all is ok', function (done) {

            this.authEcmMock.get201Response();

            this.ecmAuth = new EcmAuth({
                contextRoot: 'alfresco',
                hostEcm: this.hostEcm
            });

            this.ecmAuth.login('admin', 'admin').then((data) => {
                expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                done();
            }, ()=> {
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.authEcmMock.get201Response();

            this.ecmAuth = new EcmAuth({
                contextRoot: 'alfresco',
                hostEcm: this.hostEcm
            });

            this.ecmAuth.login('admin', 'admin').then(() => {
                expect(this.ecmAuth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('isLoggedIn should return false if the host change', function (done) {

            this.authEcmMock.get201Response();

            this.ecmAuth = new EcmAuth({
                contextRoot: 'alfresco',
                hostEcm: this.hostEcm
            });

            this.ecmAuth.login('admin', 'admin').then(() => {
                expect(this.ecmAuth.isLoggedIn()).to.be.equal(true);
                this.ecmAuth.changeHost('anyhost');
                expect(this.ecmAuth.isLoggedIn()).to.be.equal(false);
                done();
            }, () => {
            });

        });

        it('isLoggedIn should return false if the api is logged out', function (done) {

            this.authEcmMock.get201Response();

            this.ecmAuth = new EcmAuth({
                contextRoot: 'alfresco',
                hostEcm: this.hostEcm
            });

            this.ecmAuth.login('admin', 'admin');

            this.authEcmMock.get204ResponseLogout();

            this.ecmAuth.logout().then(() => {
                expect(this.ecmAuth.isLoggedIn()).to.be.equal(false);
                done();
            }, ()=> {
            });
        });

        it('login should return an error if wrong credential are used 403 the login fails', function (done) {
            this.authEcmMock.get403Response();

            this.ecmAuth = new EcmAuth({
                contextRoot: 'alfresco',
                hostEcm: this.hostEcm
            });

            this.ecmAuth.login('wrong', 'name').then(function () {

            }, (error)=> {
                expect(error.status).to.be.equal(403);
                done();
            });
        });

        it('login should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
            this.authEcmMock.get400Response();

            this.ecmAuth = new EcmAuth({
                contextRoot: 'alfresco',
                hostEcm: this.hostEcm
            });

            this.ecmAuth.login(null, null).then(function () {

            }, (error)=> {
                expect(error.status).to.be.equal(400);
                done();
            });
        });

        describe('Events ', function () {
            it('login should fire an event if is unauthorized  401', function (done) {
                this.authEcmMock.get401Response();

                this.ecmAuth = new EcmAuth({
                    contextRoot: 'alfresco',
                    hostEcm: this.hostEcm
                });

                var loginPromise = this.ecmAuth.login('wrong', 'name');

                loginPromise.catch(()=> {
                });

                loginPromise.on('unauthorized', ()=> {
                    done();
                });
            });

            it('login should fire an event if is forbidden 403', function (done) {
                this.authEcmMock.get403Response();

                this.ecmAuth = new EcmAuth({
                    contextRoot: 'alfresco',
                    hostEcm: this.hostEcm
                });

                var loginPromise = this.ecmAuth.login('wrong', 'name');

                loginPromise.catch(()=> {
                });

                loginPromise.on('forbidden', ()=> {
                    done();
                });
            });

            it('The Api Should fire success event if is all ok 201', function (done) {
                this.authEcmMock.get201Response();

                this.ecmAuth = new EcmAuth({
                    contextRoot: 'alfresco',
                    hostEcm: this.hostEcm
                });

                var loginPromise = this.ecmAuth.login('admin', 'admin');

                loginPromise.catch(()=> {
                });

                loginPromise.on('success', ()=> {
                    done();
                });
            });

            it('The Api Should fire logout event if the logout is successfull', function (done) {
                this.authEcmMock.get201Response();

                this.ecmAuth = new EcmAuth({
                    contextRoot: 'alfresco',
                    hostEcm: this.hostEcm
                });

                this.ecmAuth.login('admin', 'admin');

                this.authEcmMock.get204ResponseLogout();

                this.ecmAuth.logout().on('logout', ()=> {
                    done();
                });
            });
        });

        describe('With Ticket Authentication', function () {

            it('Ticket should be present in the client', function () {
                this.authEcmMock.get400Response();

                this.ecmAuth = new EcmAuth({
                    ticketEcm: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
                    hostEcm: this.hostEcm
                });

                expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(this.ecmAuth.authentications.basicAuth.password);
            });
        });

        describe('Logout Api', function () {

            beforeEach(function (done) {
                this.authEcmMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');
                this.ecmAuth = new EcmAuth({
                    contextRoot: 'alfresco',
                    hostEcm: this.hostEcm
                });

                this.ecmAuth.login('admin', 'admin').then(() => {
                    done();
                });
            });

            it('Ticket should be absent in the client and the resolve promise should be called', function (done) {
                this.authEcmMock.get204ResponseLogout();

                this.ecmAuth.logout().then((data)=> {
                    expect(this.ecmAuth.config.ticket).to.be.equal(undefined);
                    expect(data).to.be.equal('logout');
                    done();
                }, function () {
                });
            });

            it('Logout should be rejected if the Ticket is already expired', function (done) {
                this.authEcmMock.get404ResponseLogout();
                this.ecmAuth.logout().then(() => {
                }, (error) => {
                    expect(error.error.toString()).to.be.equal('Error: Not Found');
                    done();
                });
            });
        });
    });
});
