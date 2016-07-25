'use strict';

class AlfrescoContent {
    /**
     * @param {EcmAuth} ecmAuth
     */
    constructor(ecmAuth) {
        this.ecmAuth = ecmAuth;
    }

    /**
     * Get thumbnail URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String} thumbnail URL address.
     */
    getDocumentThumbnailUrl(documentId) {
        return this.ecmAuth.getClient().basePath  + '/nodes/' + documentId +
            '/renditions/doclib/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

    /**
     * Get content URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String}  content URL  address.
     */
    getContentUrl(documentId) {
        return this.ecmAuth.getClient().basePath + '/nodes/' + documentId +
            '/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

}

module.exports = AlfrescoContent;
