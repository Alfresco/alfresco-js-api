/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var UploadMock = require('../test/mockObjects/uploadMock');
var fs = require('fs');

describe('Upload', function () {
    beforeEach(function (done) {
        this.host = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.host);
        this.uploadMock = new UploadMock(this.host);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            username: 'admin',
            password: 'admin',
            host: this.host
        });

        this.alfrescoJsApi.login().then(() => {
            done();
        });
    });

    describe('Upload File', function () {
        it('upload file should return 200 if is all ok', function (done) {
            this.uploadMock.get201CreationFile();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).then(function (data) {
                expect(data.entry.isFile).to.be.equal(true);
                expect(data.entry.name).to.be.equal('testFile.txt');
                done();
            });
        });

        it('upload file should get 409 if new name clashes with an existing file in the current parent folder', function (done) {
            this.uploadMock.get409CreationFileNewNameClashes();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(409);
                done();
            });
        });

        it('upload file should get 200 and rename if the new name clashes with an existing file in the current parent folder and autorename is true', function (done) {
            this.uploadMock.get201CreationFileAutoRename();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file, null, null, null, {autoRename: true})
                .then(function (data) {
                    expect(data.entry.isFile).to.be.equal(true);
                    expect(data.entry.name).to.be.equal('testFile-2.txt');
                    done();
                });
        });

        it('Abort should stop the  file file upload', function (done) {
            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            var promise = this.alfrescoJsApi.upload.uploadFile(file, null, null, null, {autoRename: true}).once('abort', ()=> {
                done();
            });

            promise.abort();
        });
    });

    describe('Events', function () {
        it('Upload should fire done event at the end of an upload', function (done) {
            this.uploadMock.get201CreationFile();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).on('success', ()=> {
                done();
            });
        });

        it('Upload should fire error event if something go wrong', function (done) {
            this.uploadMock.get409CreationFileNewNameClashes();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).on('error', ()=> {
                done();
            });
        });

        it('Upload should fire unauthorized event if get 401', function (done) {
            this.uploadMock.get401Response();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).on('unauthorized', ()=> {
                done();
            });
        });

        it('Upload should fire progress event during the upload', function (done) {
            this.uploadMock.get201CreationFile();

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.alfrescoJsApi.upload.uploadFile(file).once('progress', ()=> {
                done();
            });
        });

        it('Multiple Upload should fire progress events on the right promise during the upload', function (done) {

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');
            var fileTwo = fs.createReadStream('./test/mockObjects/testFile2.txt');

            var progressOneOk = false;
            var progressTwoOk = false;

            var promiseProgressOne = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(file).once('success', ()=> {
                    progressOneOk = true;
                    resolve();
                });
            });

            var promiseProgressTwo = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(fileTwo).once('success', ()=> {
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

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');
            var fileTwo = fs.createReadStream('./test/mockObjects/testFile2.txt');

            var errorOneOk = false;
            var errorTwoOk = false;

            var promiseErrorOne = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(file).once('success', ()=> {
                    errorOneOk = true;
                    resolve();
                });
            });

            var promiseErrorTwo = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(fileTwo).once('success', ()=> {
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

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');
            var fileTwo = fs.createReadStream('./test/mockObjects/testFile2.txt');

            var successOneOk = false;
            var successTwoOk = false;

            var promiseSuccessOne = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(file).once('success', ()=> {
                    successOneOk = true;
                    resolve();
                });
            });

            var promiseSuccessTwo = new Promise((resolve) => {
                this.uploadMock.get201CreationFile();

                this.alfrescoJsApi.upload.uploadFile(fileTwo).once('success', ()=> {
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

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');
            var fileTwo = fs.createReadStream('./test/mockObjects/testFile2.txt');

            var resolveOneOk = false;
            var resolveTwoOk = false;

            this.uploadMock.get201CreationFile();

            var p1 = this.alfrescoJsApi.upload.uploadFile(file).then(()=> {
                resolveOneOk = true;
            });

            this.uploadMock.get201CreationFile();

            var p2 = this.alfrescoJsApi.upload.uploadFile(fileTwo).then(()=> {
                resolveTwoOk = true;
            });

            Promise.all([p1, p2]).then(() => {
                expect(resolveOneOk).equal(true);
                expect(resolveTwoOk).equal(true);
                done();
            });
        });

        it('Multiple Upload should reject the correct promise', function (done) {

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');
            var fileTwo = fs.createReadStream('./test/mockObjects/testFile2.txt');

            var rejectOneOk = false;
            var rejectTwoOk = false;

            this.uploadMock.get409CreationFileNewNameClashes();

            var p1 = this.alfrescoJsApi.upload.uploadFile(file).then(null, ()=> {
                rejectOneOk = true;
            });

            this.uploadMock.get409CreationFileNewNameClashes();

            var p2 = this.alfrescoJsApi.upload.uploadFile(fileTwo).then(null, ()=> {
                rejectTwoOk = true;
            });

            Promise.all([p1, p2]).then(() => {
                expect(rejectOneOk).equal(true);
                expect(rejectTwoOk).equal(true);
                done();
            });
        });

        it('Is possible use chain events', function (done) {

            var file = fs.createReadStream('./test/mockObjects/testFile.txt');

            this.uploadMock.get401Response();

            var promiseProgressOne = {};
            var promiseProgressTwo = {};

            this.alfrescoJsApi.upload.uploadFile(file).once('error', ()=> {
                promiseProgressOne = new Promise((resolve) => {
                    resolve();
                });
            }).once('unauthorized', ()=> {
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
