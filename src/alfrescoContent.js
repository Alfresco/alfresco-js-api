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
     * Get thumbnail URL for the given nodeId
     *
     * @param {String} nodeId of the document
     *
     * @returns {String} thumbnail URL address.
     */
    getDocumentThumbnailUrl(nodeId) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/renditions/doclib/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

    /**
     * Get preview URL for the given nodeId
     *
     * @param {String} nodeId of the document
     *
     * @returns {String} preview URL address.
     */
    getDocumentPreviewUrl(nodeId) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/renditions/imgpreview/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

    /**
     * Get content URL for the given nodeId
     *
     * @param {String} nodeId of the document
     *
     * @returns {String}  content URL  address.
     */
    getContentUrl(nodeId) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }

    /**
     * Get rendition URL for the given nodeId
     *
     * @param {String} nodeId of the document
     * @param {String} encoding of the document
     *
     * @returns {String}  content URL  address.
     */
    getRenditionUrl(nodeId, encoding) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
                '/renditions/' + encoding +
            '/content' + '?attachment=false&alf_ticket=' + this.ecmAuth.getTicket();
    }
}

module.exports = AlfrescoContent;
