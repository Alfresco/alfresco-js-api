'use strict';

class AlfrescoContent {

    /**
     * Get thumbnail URL for the given documentId
     *
     * @param {String} documentId of the document
     * @param {String} apiBaseUrl
     * @param {String} ticket auth
     *
     * @returns {String} thumbnail URL address.
     */
    static getDocumentThumbnailUrl(documentId, apiBaseUrl, ticket) {
        return apiBaseUrl + '/nodes/' + documentId +
            '/renditions/doclib/content' + '?attachment=false&alf_ticket=' + ticket;
    }

    /**
     * Get content URL for the given documentId
     *
     * @param {String} documentId of the document
     * @param {String} apiBaseUrl
     * @param {String} ticket auth
     *
     * @returns {String}  content URL  address.
     */
    static getContentUrl(documentId, apiBaseUrl, ticket) {
        return apiBaseUrl + '/nodes/' + documentId +
            '/content' + '?attachment=false&alf_ticket=' + ticket;
    }
}

module.exports = AlfrescoContent;
