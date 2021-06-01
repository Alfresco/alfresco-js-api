import { expect } from 'chai';
import sinon from 'sinon';
import { ProcessAuth } from '../src/authentication/processAuth';
import { BpmAuthMock } from './mockObjects';

describe('Bpm Auth test', () => {
    const hostBpm = 'http://127.0.0.1:9999';
    let authBpmMock: BpmAuthMock;

    beforeEach(() => {
        authBpmMock = new BpmAuthMock(hostBpm);
    });

    it('should remember username on login', () => {
        const auth = new ProcessAuth({});
        auth.login('johndoe', 'password');
        expect(auth.authentications.basicAuth.username).to.be.equal('johndoe');
    });

    it('should forget username on logout', (done) => {
        const processAuth = new ProcessAuth({
            hostBpm: hostBpm,
            contextRootBpm: 'activiti-app'
        });

        authBpmMock.get200Response();

        processAuth.login('admin', 'admin').then(() => {
            expect(processAuth.authentications.basicAuth.username).to.be.equal('admin');

            authBpmMock.get200ResponseLogout();

            processAuth.logout().then(() => {
                expect(processAuth.authentications.basicAuth.username).to.be.equal(null);
                done();
            });
        }, (error: any) => {
            console.log('error' + JSON.stringify(error));
        });
    });

    describe('With Authentication', () => {

        it('login should return the Ticket if all is ok', (done) => {
            authBpmMock.get200Response();

            const processAuth = new ProcessAuth({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app'
            });

            processAuth.login('admin', 'admin').then((data: any) => {
                expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                done();
            });

        });

        it('login password should be removed after login', (done) => {
            authBpmMock.get200Response();

            const processAuth = new ProcessAuth({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app'
            });

            processAuth.login('admin', 'admin').then((data: any) => {
                expect(data).to.be.equal('Basic YWRtaW46YWRtaW4=');
                expect(processAuth.authentications.basicAuth.password).to.be.not.equal('admin');
                done();
            });
        });

        it('isLoggedIn should return true if the api is logged in', (done) => {
            authBpmMock.get200Response();

            const processAuth = new ProcessAuth({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app'
            });

            processAuth.login('admin', 'admin').then(() => {
                expect(processAuth.isLoggedIn()).to.be.equal(true);
                done();
            });
        });

        it('isLoggedIn should return false if the api is logged out', (done) => {
            authBpmMock.get200Response();

            const processAuth = new ProcessAuth({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app'
            });
            processAuth.login('admin', 'admin');

            authBpmMock.get200ResponseLogout();

            processAuth.logout().then(() => {
                expect(processAuth.isLoggedIn()).to.be.equal(false);
                done();
            });
        });

        it('isLoggedIn should return false if the host change', (done) => {
            authBpmMock.get200Response();

            const processAuth = new ProcessAuth({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app'
            });

            processAuth.login('admin', 'admin').then(() => {
                expect(processAuth.isLoggedIn()).to.be.equal(true);
                processAuth.changeHost();
                expect(processAuth.isLoggedIn()).to.be.equal(false);
                done();
            });

        });

        it('login should return an error if wrong credential are used 401 the login fails', (done) => {
            authBpmMock.get401Response();

            const processAuth = new ProcessAuth({
                hostBpm: hostBpm,
                contextRootBpm: 'activiti-app'
            });

            processAuth.login('wrong', 'name').then(
                () => {},
                (error: any) => {
                    expect(error.status).to.be.equal(401);
                    done();
                }
            );
        });

        describe('Events ', () => {
            it('login should fire an event if is unauthorized  401', (done) => {
                authBpmMock.get401Response();

                const processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                const loginPromise: any = processAuth.login('wrong', 'name');

                loginPromise.catch(() => {});
                loginPromise.on('unauthorized', () => {
                    done();
                });
            });

            it('login should fire an event if is forbidden 403', (done) => {
                authBpmMock.get403Response();

                const processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                const loginPromise: any = processAuth.login('wrong', 'name');
                loginPromise.catch(() => {});
                loginPromise.on('forbidden', () => {
                    done();
                });
            });

            it('The Api Should fire success event if is all ok 201', (done) => {
                authBpmMock.get200Response();

                const processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                const loginPromise: any = processAuth.login('admin', 'admin');

                loginPromise.catch(() => {});
                loginPromise.on('success', () => {
                    done();
                });
            });

            it('The Api Should fire logout event if the logout is successfull', (done) => {
                authBpmMock.get200Response();

                const processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                processAuth.login('admin', 'admin');

                authBpmMock.get200ResponseLogout();

                const promise: any = processAuth.logout();
                promise.on('logout', () => {
                    done();
                });
            });
        });

        describe('With Ticket Authentication', () => {

            it('Ticket should be present in the client', () => {
                const processAuth = new ProcessAuth({
                    ticketBpm: 'Basic YWRtaW46YWRtaW4=',
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                expect('Basic YWRtaW46YWRtaW4=').to.be.equal(processAuth.authentications.basicAuth.ticket);
            });
        });

        describe('Logout Api', () => {
            let processAuth: ProcessAuth;

            beforeEach((done) => {
                authBpmMock.get200Response();

                processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                processAuth.login('admin', 'admin').then(() => {
                    done();
                });
            });

            it('Ticket should be absent in the client and the resolve promise should be called', (done) => {
                authBpmMock.get200ResponseLogout();

                processAuth.logout().then((data: any) => {
                    expect(processAuth.getTicket()).to.be.equal(null);
                    expect(data).to.be.equal('logout');
                    done();
                });
            });

        });

        describe('CSRF Token', () => {
            let setCsrfTokenStub: any;

            beforeEach(() => {
                setCsrfTokenStub = sinon.stub(ProcessAuth.prototype, 'setCsrfToken');
            });

            afterEach(() => {
                setCsrfTokenStub.restore();
            });

            it('should be enabled by default', (done) => {
                authBpmMock.get200Response();

                const processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app'
                });

                processAuth.login('admin', 'admin').then(() => {
                    expect(setCsrfTokenStub.called).to.be.equal(true);
                    done();
                });
            });

            it('should be disabled if disableCsrf is true', (done) => {
                authBpmMock.get200Response();

                const processAuth = new ProcessAuth({
                    hostBpm,
                    contextRootBpm: 'activiti-app',
                    disableCsrf: true
                });

                processAuth.login('admin', 'admin').then(() => {
                    expect(setCsrfTokenStub.called).to.be.equal(false);
                    done();
                });
            });
        });
    });
});
