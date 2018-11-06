/*!
 * @license
 * Copyright 2018 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EcmAuth } from './ecmAuth';
import { EcmClient } from './ecmClient';

export class AlfrescoContent {

    ecmAuth: EcmAuth;
    ecmClient: EcmClient;

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
            this.getAlfTicket(ticket);
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
            this.getAlfTicket(ticket);
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
            this.getAlfTicket(ticket);
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
            this.getAlfTicket(ticket);
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

    /**
     * Gets the rendition content for file with shared link identifier sharedId.
     *
     * @param {String} sharedId - The identifier of a shared link to a file.
     * @param {String} renditionId - The name of a thumbnail rendition, for example doclib, or pdf.
     * @param {Boolean} [attachment=false] Retrieve content as an attachment for download
     * @returns {String} The URL address pointing to the content.
     */
    getSharedLinkRenditionUrl(sharedId, renditionId, attachment) {
        return this.ecmClient.basePath + '/shared-links/' + sharedId +
            '/renditions/' + renditionId + '/content' +
            '?attachment=' + (attachment ? 'true' : 'false');
    }

    getAlfTicket(ticket) {
        if (this.ecmAuth) {
            return '&alf_ticket=' + (ticket || this.ecmAuth.getTicket());
        } else {
            return '';
        }
    }

}
