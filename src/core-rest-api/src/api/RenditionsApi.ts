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

import { AlfrescoApiClient } from '../../../alfrescoApiClient';
import { Error } from '../model/RatingEntry';
import { RenditionBody } from '../model/RenditionBody';
import { RenditionEntry } from '../model/RenditionEntry';
import { RenditionPaging } from '../model/RenditionPaging';


/**
 * Renditions service.
 * @module api/RenditionsApi
 * @version 0.1.0
 */

/**
 * Constructs a new RenditionsApi.
 * @alias module:api/RenditionsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class RenditionsApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Create rendition
     * Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/RenditionBody} renditionBody The rendition \&quot;id\&quot;.
     */
    createRendition(nodeId, renditionBody) {
        let postBody = renditionBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling createRendition";
        }

        // verify the required parameter 'renditionBody' is set
        if (renditionBody == undefined || renditionBody == null) {
            throw "Missing the required parameter 'renditionBody' when calling createRendition";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get rendition information
     * Returns the rendition information for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * data is of type: {module:model/RenditionEntry}
     */
    getRendition(nodeId, renditionId) {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getRendition";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId == undefined || renditionId == null) {
            throw "Missing the required parameter 'renditionId' when calling getRendition";
        }


        let pathParams = {
            'nodeId': nodeId,
            'renditionId': renditionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = RenditionEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get rendition content
     * Returns the rendition content for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    getRenditionContent(nodeId, renditionId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getRenditionContent";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId == undefined || renditionId == null) {
            throw "Missing the required parameter 'renditionId' when calling getRenditionContent";
        }


        let pathParams = {
            'nodeId': nodeId,
            'renditionId': renditionId
        };
        let queryParams = {
            'attachment': opts['attachment']
        };
        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince']
        };
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * List information for renditions
     * Returns the rendition information for the file node with identifier **nodeId**.\nThis will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/RenditionPaging}
     */
    getRenditions(nodeId) {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getRenditions";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = RenditionPaging;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get shared link rendition content
     * Returns the rendition content for file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    getSharedLinkRenditionContent(sharedId, renditionId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditionContent";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId == undefined || renditionId == null) {
            throw "Missing the required parameter 'renditionId' when calling getSharedLinkRenditionContent";
        }


        let pathParams = {
            'sharedId': sharedId,
            'renditionId': renditionId
        };
        let queryParams = {
            'attachment': opts['attachment']
        };
        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince']
        };
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * List information for created renditions
     * Returns the rendition information for the file with shared link identifier **sharedId**.\n\nThis will only return rendition information, including the rendition id, for each rendition\nwhere the rendition status is CREATED (ie. available\u00A0to view/download).\n\n**Note:** No authentication is required to call this endpoint.      \n
     * @param {String} sharedId The identifier of a shared link to a file.
     * data is of type: {module:model/RenditionPaging}
     */
    getSharedLinkRenditions(sharedId) {
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditions";
        }


        let pathParams = {
            'sharedId': sharedId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = RenditionPaging;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Gets rendition information for the file with shared link identifier sharedId.
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * data is of type: {module:model/RenditionEntry}
     */
    getSharedLinkRendition(sharedId, renditionId) {
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling getRendition";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId == undefined || renditionId == null) {
            throw "Missing the required parameter 'renditionId' when calling getRendition";
        }


        let pathParams = {
            'sharedId': sharedId,
            'renditionId': renditionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = RenditionEntry;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}
