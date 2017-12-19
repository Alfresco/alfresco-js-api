/*global describe, it, beforeEach */

var AlfrescoApi = require('../../main');
var AuthResponseMock = require('../../test/mockObjects/mockAlfrescoApi').Auth;
var RenditionMock = require('../../test/mockObjects/mockAlfrescoApi').Rendition;
var expect = require('chai').expect;

describe('Rendition', function () {

    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);
        this.renditionMock = new RenditionMock();

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('Get Rendition', function (done) {
        this.renditionMock.get200RenditionResponse();

        this.alfrescoJsApi.core.renditionsApi.getRendition('97a29e9c-1e4f-4d9d-bb02-1ec920dda045', 'pdf').then(function (data) {
            expect(data.entry.id).to.be.equal('pdf');
            done();
        }, function () {
        });
    });

    it('Create Rendition', function (done) {
        this.renditionMock.createRendition200();

        this.alfrescoJsApi.core.renditionsApi.createRendition('97a29e9c-1e4f-4d9d-bb02-1ec920dda045', {id: 'pdf'}).then(function () {
            done();
        }, function () {
        });
    });

    it('Get Renditions list for node id', function (done) {
        this.renditionMock.get200RenditionList();

        this.alfrescoJsApi.core.renditionsApi.getRenditions('97a29e9c-1e4f-4d9d-bb02-1ec920dda045').then(function (data) {
            expect(data.list.pagination.count).to.be.equal(6);
            expect(data.list.entries[0].entry.id).to.be.equal('avatar');
            done();
        }, function () {
        });
    });
});
