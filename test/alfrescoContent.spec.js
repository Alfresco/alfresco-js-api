/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;

describe('AlfrescoContent', function () {
    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';
        this.nodesUrl = this.hostEcm + '/alfresco/api/-default-/public/alfresco/versions/1/nodes/';
        this.nodeId = '1a0b110f-1e09-4ca2-b367-fe25e4964a4';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            this.content = this.alfrescoJsApi.content;
            done();
        });
    });

    it('outputs thumbnail url', function () {
        var thumbnailUrl = this.content.getDocumentThumbnailUrl(this.nodeId);

        expect(thumbnailUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/doclib/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs thumbnail url as attachment', function () {
        var thumbnailUrl = this.content.getDocumentThumbnailUrl(this.nodeId, true);

        expect(thumbnailUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/doclib/content?attachment=true&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs thumbnail url with custom ticket', function () {
        var thumbnailUrl = this.content.getDocumentThumbnailUrl(this.nodeId, true, 'custom_ticket');

        expect(thumbnailUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/doclib/content?attachment=true&' +
            'alf_ticket=custom_ticket');
    });

    it('outputs preview url', function () {
        var thumbnailUrl = this.content.getDocumentPreviewUrl(this.nodeId);

        expect(thumbnailUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/imgpreview/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs preview url as attachment', function () {
        var thumbnailUrl = this.content.getDocumentPreviewUrl(this.nodeId, true);

        expect(thumbnailUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/imgpreview/content?attachment=true&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs preview url with custom ticket', function () {
        var thumbnailUrl = this.content.getDocumentPreviewUrl(this.nodeId, true, 'custom_ticket');

        expect(thumbnailUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/imgpreview/content?attachment=true&' +
            'alf_ticket=custom_ticket');
    });

    it('outputs content url', function () {
        var contentUrl = this.content.getContentUrl(this.nodeId);

        expect(contentUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/content?attachment=false' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs content url as attachment', function () {
        var contentUrl = this.content.getContentUrl(this.nodeId, true);

        expect(contentUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/content?attachment=true' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs content url with custom ticket', function () {
        var contentUrl = this.content.getContentUrl(this.nodeId, true, 'custom_ticket');

        expect(contentUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/content?attachment=true' +
            '&alf_ticket=custom_ticket');
    });

    it('outputs rendition url', function () {
        const encoding = 'pdf';
        var contentUrl = this.content.getRenditionUrl(this.nodeId, encoding);

        expect(contentUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/' + encoding +
            '/content?attachment=false' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs rendition url as attachment', function () {
        const encoding = 'pdf';
        var contentUrl = this.content.getRenditionUrl(this.nodeId, encoding, true);

        expect(contentUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/' + encoding +
            '/content?attachment=true' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('outputs rendition url with custom ticket', function () {
        const encoding = 'pdf';
        var contentUrl = this.content.getRenditionUrl(this.nodeId, encoding, true, 'custom_ticket');

        expect(contentUrl).to.be.equal(this.nodesUrl + this.nodeId +
            '/renditions/' + encoding +
            '/content?attachment=true' +
            '&alf_ticket=custom_ticket');
    });
});
