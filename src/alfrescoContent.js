'use strict';

class AlfrescoContent {

    /**
     * Creates an instance of AlfrescoContent.
     *
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
     * @param {String} nodeId The ID of the document node
     * @param {Boolean} [attachment=false] Retrieve content as an attachment for download
     * @param {String} [ticket] Custom ticket to use for authentication
     * @returns {String} The URL address pointing to the content.
     */
    getDocumentThumbnailUrl(nodeId, attachment, ticket) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/renditions/doclib/content' +
            '?attachment=' + (attachment ? 'true' : 'false') +
            '&alf_ticket=' + (ticket || this.ecmAuth.getTicket());
    }

    /**
     * Get preview URL for the given nodeId
     *
     * @param {String} nodeId The ID of the document node
     * @param {Boolean} [attachment=false] Retrieve content as an attachment for download
     * @param {String} [ticket] Custom ticket to use for authentication
     * @returns {String} The URL address pointing to the content.
     */
    getDocumentPreviewUrl(nodeId, attachment, ticket) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/renditions/imgpreview/content' +
            '?attachment=' + (attachment ? 'true' : 'false') +
            '&alf_ticket=' + (ticket || this.ecmAuth.getTicket());
    }

    /**
     * Get content URL for the given nodeId
     *
     * @param {String} nodeId The ID of the document node
     * @param {Boolean} [attachment=false] Retrieve content as an attachment for download
     * @param {String} [ticket] Custom ticket to use for authentication
     * @returns {String} The URL address pointing to the content.
     */
    getContentUrl(nodeId, attachment, ticket) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/content' +
            '?attachment=' + (attachment ? 'true' : 'false') +
            '&alf_ticket=' + (ticket || this.ecmAuth.getTicket());
    }

    /**
     * Get rendition URL for the given nodeId
     *
     * @param {String} nodeId The ID of the document node
     * @param {String} encoding of the document
     * @param {Boolean} [attachment=false] retrieve content as an attachment for download
     * @param {String} [ticket] Custom ticket to use for authentication
     * @returns {String} The URL address pointing to the content.
     */
    getRenditionUrl(nodeId, encoding, attachment, ticket) {
        return this.ecmClient.basePath + '/nodes/' + nodeId +
            '/renditions/' + encoding + '/content' +
            '?attachment=' + (attachment ? 'true' : 'false') +
            '&alf_ticket=' + (ticket || this.ecmAuth.getTicket());
    }

    /**
     * Get content url for the given shared link id
     *
     * @param {String} linkId - The ID of the shared link
     * @param {Boolean} [attachment=false] Retrieve content as an attachment for download
     * @returns {String} The URL address pointing to the content.
     */
    getSharedLinkContentUrl(linkId, attachment) {
        return this.ecmClient.basePath + '/shared-links/' + linkId +
            '/content' +
            '?attachment=' + (attachment ? 'true' : 'false');
    }
}

module.exports = AlfrescoContent;
