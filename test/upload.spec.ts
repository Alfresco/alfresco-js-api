/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from 'alfresco-js-api';

let expect = require('chai').expect;
let AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;
let UploadMock = require('../test/mockObjects/mockAlfrescoApi').Upload;
let fs = require('fs');

describe('Upload', function () {
    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.uploadMock = new UploadMock(this.hostEcm);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    describe('Upload File', function () {
        it('upload file should return 200 if is all ok', function (done) {
            this.uploadMock.get201CreationFile();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).then(function (data) {
                expect(data.entry.isFile).to.be.equal(true);
                expect(data.entry.name).to.be.equal('testFile.txt');
                done();
            });
        });

        it('upload file should get 409 if new name clashes with an existing file in the current parent folder', function (done) {
            this.uploadMock.get409CreationFileNewNameClashes();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(409);
                done();
            });
        });

        it('upload file should get 200 and rename if the new name clashes with an existing file in the current parent folder and autorename is true', function (done) {
            this.uploadMock.get201CreationFileAutoRename();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file, null, null, null, { autoRename: true })
                .then(function (data) {
                    expect(data.entry.isFile).to.be.equal(true);
                    expect(data.entry.name).to.be.equal('testFile-2.txt');
                    done();
                });
        });

        it('Abort should stop the  file file upload', function (done) {
            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            let promise = this.alfrescoJsApi.upload.uploadFile(file, null, null, null, { autoRename: true }).once('abort', () => {
                done();
            });

            promise.abort();
        });
    });

    describe('Events', function () {
        it('Upload should fire done event at the end of an upload', function (done) {
            this.uploadMock.get201CreationFile();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            let uploadPromise = this.alfrescoJsApi.upload.uploadFile(file);

            uploadPromise.catch(() => {
            });
            uploadPromise.on('success', () => {
                done();
            });
        });

        it('Upload should fire error event if something go wrong', function (done) {
            this.uploadMock.get409CreationFileNewNameClashes();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            let uploadPromise = this.alfrescoJsApi.upload.uploadFile(file);

            uploadPromise.catch(() => {
            });
            uploadPromise.on('error', () => {
                done();
            });
        });

        it('Upload should fire unauthorized event if get 401', function (done) {
            this.uploadMock.get401Response();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            let uploadPromise = this.alfrescoJsApi.upload.uploadFile(file);

            uploadPromise.catch(() => {
            });
            uploadPromise.on('unauthorized', () => {
                done();
            });
        });

        it('Upload should fire progress event during the upload', function (done) {
            this.uploadMock.get201CreationFile();

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            let uploadPromise = this.alfrescoJsApi.upload.uploadFile(file);

            uploadPromise.catch(() => {
            });
            uploadPromise.once('progress', () => {
                done();
            });
        });

        it('Multiple Upload should fire progress events on the right promise during the upload', function (done) {

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            let fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let progressOneOk = false;
            let progressTwoOk = false;

            let promiseProgressOne = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(file).once('success', () => {
                    progressOneOk = true;
                    resolve();
                });
            });

            let promiseProgressTwo = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(fileTwo).once('success', () => {
                    progressTwoOk = true;
                    resolve();
                });
            });

            Promise.all([promiseProgressOne, promiseProgressTwo]).then(() => {
                expect(progressOneOk).equal(true);
                expect(progressTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should fire error events on the right promise during the upload', function (done) {

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            let fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let errorOneOk = false;
            let errorTwoOk = false;

            let promiseErrorOne = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                let uploadPromise = this.alfrescoJsApi.upload.uploadFile(file);

                uploadPromise.catch(() => {
                });
                uploadPromise.once('success', () => {
                    errorOneOk = true;
                    resolve();
                });
            });

            let promiseErrorTwo = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                let uploadPromise = this.alfrescoJsApi.upload.uploadFile(fileTwo);

                uploadPromise.catch(() => {
                });
                uploadPromise.once('success', () => {
                    errorTwoOk = true;
                    resolve();
                });
            });

            Promise.all([promiseErrorOne, promiseErrorTwo]).then(() => {
                expect(errorOneOk).equal(true);
                expect(errorTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should fire success events on the right promise during the upload', function (done) {

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            let fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let successOneOk = false;
            let successTwoOk = false;

            let promiseSuccessOne = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                let uploadPromiseOne = this.alfrescoJsApi.upload.uploadFile(file);

                uploadPromiseOne.catch(() => {
                });
                uploadPromiseOne.once('success', () => {
                    successOneOk = true;
                    resolve();
                });
            });

            let promiseSuccessTwo = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                let uploadPromiseTwo = this.alfrescoJsApi.upload.uploadFile(fileTwo);

                uploadPromiseTwo.catch(() => {
                });
                uploadPromiseTwo.once('success', () => {
                    successTwoOk = true;
                    resolve();
                });
            });

            Promise.all([promiseSuccessOne, promiseSuccessTwo]).then(() => {
                expect(successOneOk).equal(true);
                expect(successTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should resolve the correct promise', function (done) {

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            let fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let resolveOneOk = false;
            let resolveTwoOk = false;

            this.uploadMock.get201CreationFile();

            let p1 = this.alfrescoJsApi.upload.uploadFile(file).then(() => {
                resolveOneOk = true;
            });

            this.uploadMock.get201CreationFile();

            let p2 = this.alfrescoJsApi.upload.uploadFile(fileTwo).then(() => {
                resolveTwoOk = true;
            });

            Promise.all([p1, p2]).then(() => {
                expect(resolveOneOk).equal(true);
                expect(resolveTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should reject the correct promise', function (done) {

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');
            let fileTwo = fs.createReadStream('./test/mockObjects/assets/testFile2.txt');

            let rejectOneOk = false;
            let rejectTwoOk = false;

            this.uploadMock.get409CreationFileNewNameClashes();

            let p1 = this.alfrescoJsApi.upload.uploadFile(file).then(null, () => {
                rejectOneOk = true;
            });

            this.uploadMock.get409CreationFileNewNameClashes();

            let p2 = this.alfrescoJsApi.upload.uploadFile(fileTwo).then(null, () => {
                rejectTwoOk = true;
            });

            Promise.all([p1, p2]).then(() => {
                expect(rejectOneOk).equal(true);
                expect(rejectTwoOk).equal(true);
                done();
            });
        });

        it('Is possible use chain events', function (done) {

            let file = fs.createReadStream('./test/mockObjects/assets/testFile.txt');

            this.uploadMock.get401Response();

            let promiseProgressOne = {};
            let promiseProgressTwo = {};

            let uploadPromise = this.alfrescoJsApi.upload.uploadFile(file);

            uploadPromise.catch(() => {
            });

            uploadPromise.once('error', () => {
                promiseProgressOne = new Promise((resolve) => {
                    resolve();
                });
            }).once('unauthorized', () => {
                promiseProgressTwo = new Promise((resolve) => {
                    resolve();
                });
            });

            Promise.all([promiseProgressOne, promiseProgressTwo]).then(() => {
                done();
            });
        });

    });
});
