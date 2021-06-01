import { expect } from 'chai';
import { AlfrescoApiCompatibility as AlfrescoApi } from '../src/alfrescoApiCompatibility';
import { EcmAuthMock, UploadMock } from '../test/mockObjects';
import fs from 'fs';

describe('Upload', () => {
    let authResponseMock: EcmAuthMock;
    let uploadMock: UploadMock;
    let alfrescoJsApi: AlfrescoApi;

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';

        authResponseMock = new EcmAuthMock(hostEcm);
        uploadMock = new UploadMock(hostEcm);

        authResponseMock.get201Response();
        alfrescoJsApi = new AlfrescoApi({
            hostEcm: hostEcm
        });

        await alfrescoJsApi.login('admin', 'admin');
    });

    describe('Upload File', () => {
        it('upload file should return 200 if is all ok', (done) => {
            uploadMock.get201CreationFile();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            alfrescoJsApi.upload.uploadFile(file, null, null, null).then((data: any) => {
                expect(data.entry.isFile).to.be.equal(true);
                expect(data.entry.name).to.be.equal('testFile.txt');
                done();
            });
        });

        it('upload file should get 409 if new name clashes with an existing file in the current parent folder', (done) => {
            uploadMock.get409CreationFileNewNameClashes();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            alfrescoJsApi.upload.uploadFile(file, null, null, null).then(
                () => {},
                (error: any) => {
                    expect(error.status).to.be.equal(409);
                    done();
                }
            );
        });

        it('upload file should get 200 and rename if the new name clashes with an existing file in the current parent folder and autorename is true', (done) => {
            uploadMock.get201CreationFileAutoRename();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            alfrescoJsApi.upload.uploadFile(file, null, null, null, { autoRename: true })
                .then((data: any) => {
                    expect(data.entry.isFile).to.be.equal(true);
                    expect(data.entry.name).to.be.equal('testFile-2.txt');
                    done();
                });
        });

        it('Abort should stop the  file file upload', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            const promise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null, { autoRename: true });
            promise.once('abort', () => {
                done();
            });

            promise.abort();
        });
    });

    describe('Events', () => {
        it('Upload should fire done event at the end of an upload', (done) => {
            uploadMock.get201CreationFile();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            const uploadPromise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);

            uploadPromise.catch(() => {});
            uploadPromise.on('success', () => {
                done();
            });
        });

        it('Upload should fire error event if something go wrong', (done) => {
            uploadMock.get409CreationFileNewNameClashes();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            const uploadPromise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);
            uploadPromise.catch(() => {});
            uploadPromise.on('error', () => {
                done();
            });
        });

        it('Upload should fire unauthorized event if get 401', (done) => {
            uploadMock.get401Response();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            const uploadPromise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);

            uploadPromise.catch(() => {});
            uploadPromise.on('unauthorized', () => {
                done();
            });
        });

        it('Upload should fire progress event during the upload', (done) => {
            uploadMock.get201CreationFile();

            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            const uploadPromise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);

            uploadPromise.catch((error: any) => {
                console.log('error' + error);
            });
            uploadPromise.once('progress', () => {
                done();
            },                 (error: any) => {
                console.log('error' + error);
            });
        });

        it('Multiple Upload should fire progress events on the right promise during the upload', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            const fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let progressOneOk = false;
            let progressTwoOk = false;

            const promiseProgressOne = new Promise((resolve) => {
                uploadMock.get201CreationFile();

                const promise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);
                promise.once('success', () => {
                    progressOneOk = true;
                    resolve('Resolving');
                });
            });

            const promiseProgressTwo = new Promise((resolve) => {
                uploadMock.get201CreationFile();

                const promise: any = alfrescoJsApi.upload.uploadFile(fileTwo, null, null, null);
                promise.once('success', () => {
                    progressTwoOk = true;
                    resolve('Resolving');
                });
            });

            Promise.all([promiseProgressOne, promiseProgressTwo]).then(() => {
                expect(progressOneOk).equal(true);
                expect(progressTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should fire error events on the right promise during the upload', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            const fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let errorOneOk = false;
            let errorTwoOk = false;

            const promiseErrorOne = new Promise((resolve) => {
                uploadMock.get201CreationFile();

                const uploadPromise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);
                uploadPromise.catch(() => {});
                uploadPromise.once('success', () => {
                    errorOneOk = true;
                    resolve('Resolving');
                });
            });

            const promiseErrorTwo = new Promise((resolve) => {
                uploadMock.get201CreationFile();

                const uploadPromise: any = alfrescoJsApi.upload.uploadFile(fileTwo, null, null, null);
                uploadPromise.catch(() => {});
                uploadPromise.once('success', () => {
                    errorTwoOk = true;
                    resolve('Resolving');
                });
            });

            Promise.all([promiseErrorOne, promiseErrorTwo]).then(() => {
                expect(errorOneOk).equal(true);
                expect(errorTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should fire success events on the right promise during the upload', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            const fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let successOneOk = false;
            let successTwoOk = false;

            const promiseSuccessOne = new Promise((resolve) => {
                uploadMock.get201CreationFile();

                const uploadPromiseOne: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);
                uploadPromiseOne.catch(() => {});
                uploadPromiseOne.once('success', () => {
                    successOneOk = true;
                    resolve('Resolving');
                });
            });

            const promiseSuccessTwo = new Promise((resolve) => {
                uploadMock.get201CreationFile();

                const uploadPromiseTwo: any = alfrescoJsApi.upload.uploadFile(fileTwo, null, null, null);
                uploadPromiseTwo.catch(() => {});
                uploadPromiseTwo.once('success', () => {
                    successTwoOk = true;
                    resolve('Resolving');
                });
            });

            Promise.all([promiseSuccessOne, promiseSuccessTwo]).then(() => {
                expect(successOneOk).equal(true);
                expect(successTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should resolve the correct promise', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            const fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let resolveOneOk = false;
            let resolveTwoOk = false;

            uploadMock.get201CreationFile();

            const p1 = alfrescoJsApi.upload.uploadFile(file, null, null, null).then(() => {
                resolveOneOk = true;
            });

            uploadMock.get201CreationFile();

            const p2 = alfrescoJsApi.upload.uploadFile(fileTwo, null, null, null).then(() => {
                resolveTwoOk = true;
            });

            Promise.all([p1, p2]).then(() => {
                expect(resolveOneOk).equal(true);
                expect(resolveTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should reject the correct promise', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            const fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let rejectOneOk = false;
            let rejectTwoOk = false;

            uploadMock.get409CreationFileNewNameClashes();

            const p1 = alfrescoJsApi.upload.uploadFile(file, null, null, null).then(null, () => {
                rejectOneOk = true;
            });

            uploadMock.get409CreationFileNewNameClashes();

            const p2 = alfrescoJsApi.upload.uploadFile(fileTwo, null, null, null).then(null, () => {
                rejectTwoOk = true;
            });

            Promise.all([p1, p2]).then(() => {
                expect(rejectOneOk).equal(true);
                expect(rejectTwoOk).equal(true);
                done();
            });
        });

        it('Is possible use chain events', (done) => {
            const file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            uploadMock.get401Response();

            let promiseProgressOne = {};
            let promiseProgressTwo = {};

            const uploadPromise: any = alfrescoJsApi.upload.uploadFile(file, null, null, null);
            uploadPromise.catch(() => {});

            uploadPromise.once('error', () => {
                promiseProgressOne = new Promise((resolve) => {
                    resolve('Resolving');
                });
            }).once('unauthorized', () => {
                promiseProgressTwo = new Promise((resolve) => {
                    resolve('Resolving');
                });
            });

            Promise.all([promiseProgressOne, promiseProgressTwo]).then(() => {
                done();
            });
        });

    });
});
