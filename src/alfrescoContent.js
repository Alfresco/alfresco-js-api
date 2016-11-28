'use strict';

class AlfrescoContent {
    /**
     * @param {EcmAuth} ecmAuth
     * @param {EcmClient} ecmClient
     */
    constructor(ecmAuth, ecmClient) {
        this.ecmAuth = ecmAuth;
        this.ecmClient = ecmClient;
    }

    /**
     * Get thumbnail URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String} thumbnail URL address.
     */
    getDocumentThumbnailUrl(documentId) {
        return this.ecmClient.basePath + '/nodes/' + documentId +
            '/renditions/doclib/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

    /**
     * Get preview URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String} preview URL address.
     */
    getDocumentPreviewUrl(documentId) {
        return this.ecmClient.basePath + '/nodes/' + documentId +
            '/renditions/imgpreview/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

    /**
     * Get content URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String}  content URL  address.
     */
    getContentUrl(documentId) {
        return this.ecmClient.basePath + '/nodes/' + documentId +
            '/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

}

module.exports = AlfrescoContent;
