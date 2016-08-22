/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthResponseMock = require('../test/mockObjects/mockAlfrescoApi').Auth;

describe('Content', function () {
    beforeEach(function (done) {
        this.hostEcm = 'http://127.0.0.1:8080';

        this.authResponseMock = new AuthResponseMock(this.hostEcm);

        this.authResponseMock.get201Response();
        this.alfrescoJsApi = new AlfrescoApi({
            hostEcm: this.hostEcm
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Document Thumbnail Url', function () {
        var thumbnailUrl = this.alfrescoJsApi.content.getDocumentThumbnailUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

        expect(thumbnailUrl).to.be.equal(this.hostEcm + '/alfresco/api/-default-/public/alfresco/versions/1/nodes/' +
            '1a0b110f-1e09-4ca2-b367-fe25e4964a4/renditions/doclib/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('get Preview Thumbnail Url', function () {
        var thumbnailUrl = this.alfrescoJsApi.content.getDocumentPreviewUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

        expect(thumbnailUrl).to.be.equal(this.hostEcm + '/alfresco/api/-default-/public/alfresco/versions/1/nodes/' +
            '1a0b110f-1e09-4ca2-b367-fe25e4964a4/renditions/imgpreview/content?attachment=false&' +
            'alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });

    it('get Content Url', function () {
        var contentUrl = this.alfrescoJsApi.content.getContentUrl('1a0b110f-1e09-4ca2-b367-fe25e4964a4');

        expect(contentUrl).to.be.equal(this.hostEcm + '/alfresco/api/-default-/public/alfresco/versions/1/nodes/' +
            '1a0b110f-1e09-4ca2-b367-fe25e4964a4/content?attachment=false' +
            '&alf_ticket=TICKET_4479f4d3bb155195879bfbb8d5206f433488a1b1');
    });
});
