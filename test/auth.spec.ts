import { expect } from 'chai';
import { AlfrescoApiConfig } from '../src/alfrescoApiConfig';
import { AlfrescoApiCompatibility as AlfrescoApi } from '../src/alfrescoApiCompatibility';
import { EcmAuthMock, BpmAuthMock, NodeMock, ProfileMock } from '../test/mockObjects';

const NOOP = () => { /* empty */ };
const ECM_HOST = 'http://127.0.0.1:8080';
const BPM_HOST = 'http://127.0.0.1:9999';

interface ErrorResponse {
    status: number;
}

describe('Auth', () => {

    describe('ECM Provider config', () => {
        let authResponseEcmMock: EcmAuthMock;
        let nodeMock: NodeMock;

        beforeEach(() => {
            authResponseEcmMock = new EcmAuthMock(ECM_HOST);
            nodeMock = new NodeMock(ECM_HOST);
        });

        describe('With Authentication', () => {
            let alfrescoJsApi: AlfrescoApi;

            beforeEach(() => {
                alfrescoJsApi = new AlfrescoApi({
                    hostEcm: ECM_HOST
                } as AlfrescoApiConfig);
            })

            describe('login', () => {

                it('should return the Ticket if all is ok', (done) => {

                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin').then((data: string) => {
                        expect(data).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                        done();
                    });
                });

                it('should return an error if wrong credential are used 403 the login fails', (done) => {
                    authResponseEcmMock.get403Response();

                    alfrescoJsApi.login('wrong', 'name').then(NOOP, (error: ErrorResponse) => {
                        expect(error.status).to.be.equal(403);
                        done();
                    });
                });

            });

            describe('isLoggedIn', () => {
                it('should return true if the api is logged in', (done) => {

                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                        done();
                    });
                });

                it('should return false if the api is logged out', (done) => {
                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin').catch(NOOP);

                    authResponseEcmMock.get204ResponseLogout();

                    alfrescoJsApi.logout().then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });
            });

            describe('Events ', () => {
                it('should login  fire an event if is unauthorized  401', (done) => {
                    authResponseEcmMock.get401Response();

                    const authPromise: any = alfrescoJsApi.login('wrong', 'name');

                    authPromise.catch(NOOP);
                    authPromise.on('unauthorized', () => {
                        done();
                    });
                });

                it('should login fire success event if is all ok 201', (done) => {
                    authResponseEcmMock.get201Response();

                    const authPromise: any = alfrescoJsApi.login('admin', 'admin');

                    authPromise.catch(NOOP);
                    authPromise.on('success', () => {
                        done();
                    });
                });

                it('should login fire logout event if the logout is successfull', (done) => {
                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin');

                    authResponseEcmMock.get204ResponseLogout();

                    const authPromise: any = alfrescoJsApi.logout();

                    authPromise.catch(NOOP);
                    authPromise.on('logout', () => {
                        done();
                    });
                });
            });

            describe('With Ticket Authentication', () => {
                it('should Ticket be present in the client', () => {
                    authResponseEcmMock.get400Response();

                    const alfrescoJsApi = new AlfrescoApi({
                        ticketEcm: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
                        hostEcm: ECM_HOST
                    } as AlfrescoApiConfig);

                    expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(alfrescoJsApi.contentClient.authentications.basicAuth.password);
                });

                it('should Ticket login be validate against the server if is valid', (done) => {
                    const ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

                    authResponseEcmMock.get200ValidTicket(ticket);

                    alfrescoJsApi.loginTicket(ticket, null).then((data: string) => {
                        expect(alfrescoJsApi.contentAuth.authentications.basicAuth.password).to.be.equal(ticket);
                        expect(data).to.be.equal(ticket);
                        done();
                    });
                });

                it('should Ticket login  be validate against the server d is NOT valid', (done) => {
                    const ticket = 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1';

                    authResponseEcmMock.get400Response();

                    alfrescoJsApi.loginTicket(ticket, null).then(NOOP, () => {
                        done();
                    });
                });
            });

            describe('Logout Api', () => {

                beforeEach(async () => {
                    authResponseEcmMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');
                    await alfrescoJsApi.login('admin', 'admin');
                });

                it('should Ticket be absent in the client and the resolve promise should be called', (done) => {
                    authResponseEcmMock.get204ResponseLogout();

                    alfrescoJsApi.logout().then((data: string) => {
                        expect(alfrescoJsApi.config.ticket).to.be.equal(undefined);
                        expect(data).to.be.equal('logout');
                        done();
                    });
                });

                it('should Logout be rejected if the Ticket is already expired', (done) => {
                    authResponseEcmMock.get404ResponseLogout();
                    alfrescoJsApi.logout().then(NOOP, (error: any) => {
                        expect(error.error.toString()).to.be.equal('Error: Not Found');
                        done();
                    });
                });
            });

            describe('Unauthorized', () => {

                beforeEach((done) => {
                    authResponseEcmMock.get201Response('TICKET_22d7a5a83d78b9cc9666ec4e412475e5455b33bd');

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        done();
                    });
                });

                it('should 401 invalidate the ticket', (done) => {
                    nodeMock.get401CreationFolder();
                    alfrescoJsApi.nodes.createFolder('newFolder', null, null).then(NOOP, () => {
                        expect(alfrescoJsApi.contentAuth.authentications.basicAuth.password).to.be.equal(null);
                        done();
                    });

                });

                it('should 401 invalidate the session and logout', (done) => {
                    nodeMock.get401CreationFolder();

                    alfrescoJsApi.nodes.createFolder('newFolder', null, null).then(NOOP, () => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });

                it('should emit an error event if a failing call is executed', (done) => {
                    alfrescoJsApi.on('error', () => {
                        done();
                    });

                    nodeMock.get401CreationFolder();

                    alfrescoJsApi.nodes.createFolder('newFolder', null, null).then(NOOP);
                });
            });

        });
    });

    describe('BPM Provider config', () => {
        let profileMock: ProfileMock;
        let authResponseBpmMock: BpmAuthMock;
        let alfrescoJsApi: AlfrescoApi;

        beforeEach(() => {
            profileMock = new ProfileMock(BPM_HOST);
            authResponseBpmMock = new BpmAuthMock(BPM_HOST);

            alfrescoJsApi = new AlfrescoApi({
                hostBpm: BPM_HOST,
                provider: 'BPM'
            } as AlfrescoApiConfig);
        });

        describe('With Authentication', () => {
            describe('login', () => {

                it('should return the Ticket if all is ok', (done) => {
                    authResponseBpmMock.get200Response();

                    alfrescoJsApi.login('admin', 'admin').then(
                        (data: string) => {
                            expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                            done();
                        },
                        (error: any) => {
                            console.log('error' + JSON.stringify(error));
                        }
                    );
                });

                it('should return an error if wrong credential are used 401 the login fails', (done) => {
                    authResponseBpmMock.get401Response();

                    alfrescoJsApi.login('wrong', 'name').then(NOOP, (error: ErrorResponse) => {
                        expect(error.status).to.be.equal(401);
                        done();
                    });
                });
            });

            describe('isLoggedIn', () => {

                it('should return true if the api is logged in', (done) => {

                    authResponseBpmMock.get200Response();

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                        done();
                    },
                    NOOP);
                });

                it('should return false if the api is logged out', (done) => {
                    authResponseBpmMock.get200Response();

                    alfrescoJsApi.login('admin', 'admin');

                    authResponseBpmMock.get200ResponseLogout();

                    alfrescoJsApi.logout().then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    }, NOOP);
                });
            });

            describe('Events ', () => {
                it('should login  fire an event if is unauthorized  401', (done) => {
                    authResponseBpmMock.get401Response();

                    const authPromise: any = alfrescoJsApi.login('wrong', 'name');

                    authPromise.catch(NOOP);

                    authPromise.on('unauthorized', () => {
                        done();
                    });
                });

                it('should the Api fire success event if is all ok 201', (done) => {
                    authResponseBpmMock.get200Response();

                    const authPromise: any = alfrescoJsApi.login('admin', 'admin');

                    authPromise.catch(NOOP);

                    authPromise.on('success', () => {
                        done();
                    });
                });

                it('should the Api fire logout event if the logout is successfull', (done) => {
                    authResponseBpmMock.get200Response();

                    alfrescoJsApi.login('admin', 'admin');

                    authResponseBpmMock.get200ResponseLogout();

                    const authPromise: any = alfrescoJsApi.logout();

                    authPromise.catch(NOOP);
                    authPromise.on('logout', () => {
                        done();
                    });
                });
            });

            describe('Unauthorized', () => {

                beforeEach((done) => {
                    authResponseBpmMock.get200Response();

                    alfrescoJsApi.login('admin', 'admin').then(() => {
                        done();
                    });
                });

                it('should 401 invalidate the ticket', (done) => {
                    profileMock.get401getProfile();

                    alfrescoJsApi.activiti.profileApi.getProfile().then(NOOP, () => {
                        expect(alfrescoJsApi.processAuth.authentications.basicAuth.ticket).to.be.equal(null);
                        done();
                    });

                });

                it('should 401 invalidate the session and logout', (done) => {
                    profileMock.get401getProfile();

                    alfrescoJsApi.activiti.profileApi.getProfile().then(() => NOOP, () => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });
            });
        });
    });

    describe('BPM and ECM Provider config', () => {
        let authResponseEcmMock: EcmAuthMock;
        let authResponseBpmMock: BpmAuthMock;
        let alfrescoJsApi: AlfrescoApi;

        beforeEach(() => {
            authResponseEcmMock = new EcmAuthMock(ECM_HOST);
            authResponseBpmMock = new BpmAuthMock(BPM_HOST);

            authResponseEcmMock.cleanAll();
            authResponseBpmMock.cleanAll();

            alfrescoJsApi = new AlfrescoApi({
                hostEcm: ECM_HOST,
                hostBpm: BPM_HOST,
                provider: 'ALL'
            } as AlfrescoApiConfig);
        });

        describe('With Authentication', () => {

            it('should Ticket be present in the client', () => {
                authResponseBpmMock.get200Response();
                authResponseEcmMock.get201Response();

                const alfrescoJsApi = new AlfrescoApi({
                    ticketEcm: 'TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1',
                    ticketBpm: 'Basic YWRtaW46YWRtaW4=',
                    hostEcm: ECM_HOST,
                    hostBpm: BPM_HOST,
                    provider: 'ALL'
                } as AlfrescoApiConfig);

                expect('Basic YWRtaW46YWRtaW4=').to.be.equal(alfrescoJsApi.processClient.authentications.basicAuth.ticket);
                expect('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1').to.be.equal(alfrescoJsApi.contentClient.authentications.basicAuth.password);
            });

            describe('login', () => {

                it('should return the Ticket if all is ok', (done) => {
                    authResponseBpmMock.get200Response();
                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin').then((data: string[]) => {
                        expect(data[0]).to.be.equal('TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
                        expect(data[1]).to.be.equal('Basic YWRtaW46YWRtaW4=');
                        done();
                    });
                });

                it('should fail if only ECM fail', (done) => {
                    authResponseBpmMock.get200Response();
                    authResponseEcmMock.get401Response();

                    alfrescoJsApi.login('admin', 'admin').then(NOOP, () => {
                        done();
                    });

                    authResponseEcmMock.cleanAll();
                });

                it('should fail if only BPM fail', (done) => {
                    authResponseBpmMock.get401Response();
                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin').then(NOOP, () => {
                        done();
                    });

                    authResponseBpmMock.cleanAll();
                });
            });

            describe('isLoggedIn', () => {
                it('should return false if the api is logged out', (done) => {
                    authResponseBpmMock.get200Response();
                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin');

                    authResponseBpmMock.get200ResponseLogout();
                    authResponseEcmMock.get204ResponseLogout();

                    alfrescoJsApi.logout().then(() => {
                        expect(alfrescoJsApi.isLoggedIn()).to.be.equal(false);
                        done();
                    });
                });

                it('should return an error if wrong credential are used 401 the login fails', (done) => {
                    authResponseBpmMock.get401Response();
                    authResponseEcmMock.get401Response();

                    alfrescoJsApi.login('wrong', 'name').then(NOOP, (error: ErrorResponse) => {
                        expect(error.status).to.be.equal(401);
                        done();
                    });
                });
            });

            it('should return true if the api is logged in', (done) => {
                authResponseBpmMock.get200Response();
                authResponseEcmMock.get201Response();

                alfrescoJsApi.login('admin', 'admin').then(() => {
                    expect(alfrescoJsApi.isLoggedIn()).to.be.equal(true);
                    done();
                });
            });

            describe('Events ', () => {

                it('should login fire an event if is unauthorized  401', (done) => {
                    authResponseBpmMock.get401Response();
                    authResponseEcmMock.get401Response();

                    const authPromise: any = alfrescoJsApi.login('wrong', 'name');

                    authPromise.catch(NOOP);
                    authPromise.on('unauthorized', () => {
                        done();
                    });
                });

                it('should The Api fire success event if is all ok 201', (done) => {
                    authResponseBpmMock.get200Response();
                    authResponseEcmMock.get201Response();

                    const authPromise: any = alfrescoJsApi.login('admin', 'admin');

                    authPromise.catch(NOOP);
                    authPromise.on('success', () => {
                        done();
                    });
                });

                it('should The Api fire logout event if the logout is successful', (done) => {
                    authResponseBpmMock.get200Response();
                    authResponseEcmMock.get201Response();

                    alfrescoJsApi.login('admin', 'admin');

                    authResponseBpmMock.get200ResponseLogout();
                    authResponseEcmMock.get204ResponseLogout();

                    (alfrescoJsApi.logout() as any).on('logout', () => {
                        done();
                    });
                });
            });
        });
    });

});
