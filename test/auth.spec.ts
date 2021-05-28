/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../src/alfrescoApiCompatibility';

let expect = require('chai').expect;
let AuthEcmMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
let AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let NodeMock = require('../test/mockObjects/mockAlfrescoApi').Node;
let ProfileMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Profile;

const noop = () => { /* empty */ };
interface ErrorResponse {
    status: number;
}

describe('Auth', function () {
    describe('ECM Provider config', function () {

        beforeEach(function () {
            this.hostEcm = 'http://127.0.0.1:8080';
            this.authResponseEcmMock = new AuthEcmMock(this.hostEcm);
            this.nodeMock = new NodeMock(this.hostEcm);
        });

        describe('With Authentication', function () {

            describe('login', function () {

                it('should return the Ticket if all is ok', function (done) {

                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.hostEcm
                    });

                    alfrescoJsApi.login('admin', 'admin').then((data: string) => {
                        expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                        done();
                    });
                });

                it('should return an error if wrong credential are used 403 the login fails', function (done) {
                    this.authResponseEcmMock.get403Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.login('wrong', 'name').then(noop, (error: ErrorResponse) => {
                        expect(error.status).to.be.equal(403);
                        done();
                    });
                });

            });

            describe('isLoggedIn', function () {
                it('should return true if the api is logged in', function (done) {

                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                        done();
                    });
                });

                it('should return false if the api is logged out', function (done) {

                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.login('admin', 'admin').catch(noop);

                    this.authResponseEcmMock.get204ResponseLogout();

                    alfrescoJsApi.logout().then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });
            });

            describe('Events ', function () {

                it('should login  fire an event if is unauthorized  401', function (done) {
                    this.authResponseEcmMock.get401Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    const authPromise: any = alfrescoJsApi.login('wrong', 'name');

                    authPromise.catch(noop);
                    authPromise.on('unauthorized', () => {
                        done();
                    });
                });

                it('should login fire success event if is all ok 201', function (done) {
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    const authPromise: any = alfrescoJsApi.login('admin', 'admin');

                    authPromise.catch(noop);
                    authPromise.on('success', () => {
                        done();
                    });
                });

                it('should login fire logout event if the logout is successfull', function (done) {
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.login('admin', 'admin');

                    this.authResponseEcmMock.get204ResponseLogout();

                    const authPromise: any = alfrescoJsApi.logout();

                    authPromise.catch(noop);
                    authPromise.on('logout', () => {
                        done();
                    });
                });
            });

            describe('With Ticket Authentication', function () {

                it('should Ticket be present in the client', function () {
                    this.authResponseEcmMock.get400Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        ticketEcm: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
                        hostEcm: this.host
                    });

                    expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(alfrescoJsApi.contentClient.authentications.basicAuth.password);
                });

                it('should Ticket login be validate against the server if is valid', function (done) {
                    const ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

                    this.authResponseEcmMock.get200ValidTicket(ticket);

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.loginTicket(ticket, null).then((data: string) => {
                        expect(alfrescoJsApi.contentAuth.authentications.basicAuth.password).to.be.equal(ticket);
                        expect(data).to.be.equal(ticket);
                        done();
                    });
                });

                it('should Ticket login  be validate against the server d is NOT valid', function (done) {
                    const ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

                    this.authResponseEcmMock.get400Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.loginTicket(ticket, null).then(noop, () => {
                        done();
                    });
                });
            });

            describe('Logout Api', function () {
                let alfrescoJsApi: AlfrescoApi;

                beforeEach(function (done) {
                    this.authResponseEcmMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');
                    alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        done();
                    }, noop);
                });

                it('should Ticket be absent in the client and the resolve promise should be called', function (done) {
                    this.authResponseEcmMock.get204ResponseLogout();

                    alfrescoJsApi.logout().then((data: string) => {
                        expect(alfrescoJsApi.config.ticket).to.be.equal(undefined);
                        expect(data).to.be.equal('logout');
                        done();
                    },
                    noop);
                });

                it('should Logout be rejected if the Ticket is already expired', function (done) {
                    this.authResponseEcmMock.get404ResponseLogout();
                    alfrescoJsApi.logout().then(noop, (error: any) => {
                        expect(error.error.toString()).to.be.equal('Error: Not Found');
                        done();
                    });
                });
            });

            describe('Unauthorized', function () {
                let alfrescoJsApi: AlfrescoApi;

                beforeEach(function (done) {
                    this.authResponseEcmMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');
                    alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host
                    });

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        done();
                    },
                    noop);
                });

                it('should 401 invalidate the ticket', function (done) {
                    this.nodeMock.get401CreationFolder();
                    alfrescoJsApi.nodes.createFolder('newFolder', null, null).then(noop, () => {
                        expect(alfrescoJsApi.contentAuth.authentications.basicAuth.password).to.be.equal(null);
                        done();
                    });

                });

                it('should 401 invalidate the session and logout', function (done) {
                    this.nodeMock.get401CreationFolder();

                    alfrescoJsApi.nodes.createFolder('newFolder', null, null).then(noop, () => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });

                it('should emit an error event if a failing call is executed', function (done) {
                    alfrescoJsApi.on('error', () => {
                        done();
                    });

                    this.nodeMock.get401CreationFolder();

                    alfrescoJsApi.nodes.createFolder('newFolder', null, null).then(noop);
                });
            });

        });
    });

    describe('BPM Provider config', function () {

        beforeEach(function () {
            this.hostBpm = 'http://127.0.0.1:9999';
            this.profileMock = new ProfileMock(this.hostBpm);
            this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        });

        describe('With Authentication', function () {

            describe('login', function () {

                it('should return the Ticket if all is ok', function (done) {

                    this.authResponseBpmMock.get200Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login('admin', 'admin').then(
                        (data: string) => {
                            expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                            done();
                        },
                        function (error: any) {
                            console.log('error' + JSON.stringify(error));
                        }
                    );
                });

                it('should return an error if wrong credential are used 401 the login fails', function (done) {
                    this.authResponseBpmMock.get401Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login('wrong', 'name').then(noop, (error: ErrorResponse) => {
                        expect(error.status).to.be.equal(401);
                        done();
                    });
                });

                it.skip('should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
                    this.authResponseBpmMock.get400Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login(null, null).then(noop, function (error: ErrorResponse) {
                        expect(error.status).to.be.equal(400);
                        done();
                    });
                });
            });

            describe('isLoggedIn', function () {

                it('should return true if the api is logged in', function (done) {

                    this.authResponseBpmMock.get200Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                        done();
                    },
                    noop);
                });

                it('should return false if the api is logged out', function (done) {

                    this.authResponseBpmMock.get200Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login('admin', 'admin');

                    this.authResponseBpmMock.get200ResponseLogout();

                    alfrescoJsApi.logout().then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    }, noop);
                });
            });

            describe('Events ', function () {
                it('should login  fire an event if is unauthorized  401', function (done) {
                    this.authResponseBpmMock.get401Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'

                    });

                    const authPromise: any = alfrescoJsApi.login('wrong', 'name');

                    authPromise.catch(noop);

                    authPromise.on('unauthorized', () => {
                        done();
                    });
                });

                it('should the Api fire success event if is all ok 201', function (done) {
                    this.authResponseBpmMock.get200Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'

                    });

                    const authPromise: any = alfrescoJsApi.login('admin', 'admin');

                    authPromise.catch(noop);

                    authPromise.on('success', () => {
                        done();
                    });
                });

                it('should the Api fire logout event if the logout is successfull', function (done) {
                    this.authResponseBpmMock.get200Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login('admin', 'admin');

                    this.authResponseBpmMock.get200ResponseLogout();

                    const authPromise: any = alfrescoJsApi.logout();

                    authPromise.catch(noop);
                    authPromise.on('logout', () => {
                        done();
                    });
                });
            });

            describe('Unauthorized', function () {
                let alfrescoJsApi: AlfrescoApi;

                beforeEach(function (done) {
                    this.authResponseBpmMock.get200Response();

                    alfrescoJsApi = new AlfrescoApi({
                        hostBpm: this.hostBpm,
                        provider: 'BPM'
                    });

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        done();
                    }, noop);
                });

                it('should 401 invalidate the ticket', function (done) {
                    this.profileMock.get401getProfile();

                    alfrescoJsApi.activiti.profileApi.getProfile().then(noop, () => {
                        expect(alfrescoJsApi.processAuth.authentications.basicAuth.ticket).to.be.equal(null);
                        done();
                    });

                });

                it('should 401 invalidate the session and logout', function (done) {
                    this.profileMock.get401getProfile();

                    alfrescoJsApi.activiti.profileApi.getProfile().then(() => noop, () => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });
            });
        });
    });

    describe('BPM and ECM Provider config', function () {

        beforeEach(function () {
            this.host = 'http://127.0.0.1:8080';
            this.hostBpm = 'http://127.0.0.1:9999';
            this.authResponseEcmMock = new AuthEcmMock(this.hostEcm);
            this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);

            this.authResponseEcmMock.cleanAll();
            this.authResponseBpmMock.cleanAll();
        });

        describe('With Authentication', function () {

            it('should Ticket be present in the client', function () {
                this.authResponseBpmMock.get200Response();
                this.authResponseEcmMock.get201Response();

                const alfrescoJsApi = new AlfrescoApi({
                    ticketEcm: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
                    ticketBpm: 'Basic YWRtaW46YWRtaW4=',
                    hostEcm: this.host,
                    hostBpm: this.hostBpm,
                    provider: 'ALL'
                });

                expect('Basic YWRtaW46YWRtaW4=').to.be.equal(alfrescoJsApi.processClient.authentications.basicAuth.ticket);
                expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(alfrescoJsApi.contentClient.authentications.basicAuth.password);
            });

            describe('login', function () {

                it('should return the Ticket if all is ok', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.hostEcm,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'
                    });

                    alfrescoJsApi.login('admin', 'admin').then((data: string[]) => {
                        expect(data[0]).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                        expect(data[1]).to.be.equal('Basic YWRtaW46YWRtaW4=');
                        done();
                    },
                    noop);
                });

                it('should fail if only ECM fail', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get401Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'
                    });

                    alfrescoJsApi.login('admin', 'admin').then(noop, function () {
                        done();
                    });

                    this.authResponseEcmMock.cleanAll();
                });

                it('should fail if only BPM fail', function (done) {

                    this.authResponseBpmMock.get401Response();
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'
                    });

                    alfrescoJsApi.login('admin', 'admin').then(noop, function () {
                        done();
                    });

                    this.authResponseBpmMock.cleanAll();
                });
            });

            describe('isLoggedIn', function () {
                it('should return false if the api is logged out', function (done) {

                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'

                    });

                    alfrescoJsApi.login('admin', 'admin');

                    this.authResponseBpmMock.get200ResponseLogout();
                    this.authResponseEcmMock.get204ResponseLogout();

                    alfrescoJsApi.logout().then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    }, noop);
                });

                it('should return an error if wrong credential are used 401 the login fails', function (done) {
                    this.authResponseBpmMock.get401Response();
                    this.authResponseEcmMock.get401Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'

                    });

                    alfrescoJsApi.login('wrong', 'name').then(noop, function (error: ErrorResponse) {
                        expect(error.status).to.be.equal(401);
                        done();
                    });
                });

                it.skip('should return an error if wrong credential are used 400 userId and/or password are/is not provided', function (done) {
                    this.authResponseBpmMock.get400Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'

                    });

                    alfrescoJsApi.login(null, null).then(noop, function (error: ErrorResponse) {
                        expect(error.status).to.be.equal(400);
                        done();
                    });
                });
            });

            it('should return true if the api is logged in', function (done) {

                this.authResponseBpmMock.get200Response();
                this.authResponseEcmMock.get201Response();

                const alfrescoJsApi = new AlfrescoApi({
                    hostEcm: this.host,
                    hostBpm: this.hostBpm,
                    provider: 'ALL'

                });

                alfrescoJsApi.login('admin', 'admin').then(() => {
                    expect(alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                    done();
                }, noop);
            });

            describe('Events ', function () {

                it('should login fire an event if is unauthorized  401', function (done) {
                    this.authResponseBpmMock.get401Response();
                    this.authResponseEcmMock.get401Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'
                    });

                    const authPromise: any = alfrescoJsApi.login('wrong', 'name');

                    authPromise.catch(noop);
                    authPromise.on('unauthorized', () => {
                        done();
                    });
                });

                it('should The Api fire success event if is all ok 201', function (done) {
                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'
                    });

                    const authPromise: any = alfrescoJsApi.login('admin', 'admin');

                    authPromise.catch(noop);
                    authPromise.on('success', () => {
                        done();
                    });
                });

                it('should The Api fire logout event if the logout is successful', function (done) {
                    this.authResponseBpmMock.get200Response();
                    this.authResponseEcmMock.get201Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        hostEcm: this.host,
                        hostBpm: this.hostBpm,
                        provider: 'ALL'
                    });

                    alfrescoJsApi.login('admin', 'admin');

                    this.authResponseBpmMock.get200ResponseLogout();
                    this.authResponseEcmMock.get204ResponseLogout();

                    (alfrescoJsApi.logout() as any).on('logout', () => {
                        done();
                    });
                });
            });
        });
    });

});
