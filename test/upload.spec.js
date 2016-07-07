/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/authResponseMock');
var UploadMock = require('../test/mockObjects/uploadMock');

describe('Alfresco Core Node Api', function () {
    beforeEach(function (done) {
        this.host = 'http://devproducts-platform.alfresco.me';

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
        it('upload empty file should return 200 if is all ok', function (done) {
            this.uploadMock.get201CreationFileEmpty();

            this.alfrescoJsApi.upload.uploadFile('newFile').then(function (data) {
                expect(data.entry.isFile).to.be.equal(true);
                expect(data.entry.name).to.be.equal('newFile');
                done();
            }, function () {
            });
        });

        it('upload file should get 409 if new name clashes with an existing file in the current parent folder', function (done) {
            this.uploadMock.get409CreationFileNewNameClashes();

            this.alfrescoJsApi.upload.uploadFile('newFile').then(function () {
            }, function (error) {
                expect(error.status).to.be.equal(409);
                done();
            });
        });
    });

    describe('Events', function () {
        it('Upload should fire done event at the end of an upload', function (done) {
            this.uploadMock.get201CreationFileEmpty();

            this.alfrescoJsApi.upload.uploadFile('newFile').on('success', ()=> {
                done();
            });
        });

        it('Upload should fire error event if something go wrong', function (done) {
            this.uploadMock.get409CreationFileNewNameClashes();

            this.alfrescoJsApi.upload.uploadFile('newFile').on('error', ()=> {
                done();
            });
        });

        it('Upload should fire unauthorized event if get 401', function (done) {
            this.uploadMock.get401Response();

            this.alfrescoJsApi.upload.uploadFile('newFile').on('unauthorized', ()=> {
                done();
            });
        });
    });
});
