/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var UploadMock = require('../test/mockObjects/uploadMock');
var fs = require('fs');

describe('Alfresco Core Node Api', function () {
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

            this.uploadMock.play();
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

            this.uploadMock.play();
        });
    });
});
