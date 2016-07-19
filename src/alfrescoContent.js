'use strict';

class AlfrescoContent {
    /**
     * @param {String} apiBaseUrl
     * @param {EcmAuth} ecmAuth
     */
    constructor(apiBaseUrl, ecmAuth) {
        this.apiBaseUrl = apiBaseUrl;
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
        return this.apiBaseUrl + '/nodes/' + documentId +
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
        return this.apiBaseUrl + '/nodes/' + documentId +
            '/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

}

module.exports = AlfrescoContent;
