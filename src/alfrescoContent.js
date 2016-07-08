'use strict';

class AlfrescoContent {
    /**
     * @param {String} apiBaseUrl
     * @param {Object} config
     */
    constructor(apiBaseUrl, config) {
        this.apiBaseUrl = apiBaseUrl;
        this.config = config;
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
            '/renditions/doclib/content' + '?attachment=false&alf_ticket=' + this.config.ticket;
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
            '/content' + '?attachment=false&alf_ticket=' + this.config.ticket;
    }

}

module.exports = AlfrescoContent;
