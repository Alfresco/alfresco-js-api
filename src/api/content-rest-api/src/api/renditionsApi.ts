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

import { RenditionBody } from '../model/RenditionBody';
import { RenditionEntry } from '../model/RenditionEntry';
import { RenditionPaging } from '../model/RenditionPaging';
import { BaseApi } from './baseApi';

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
export class RenditionsApi extends BaseApi {

    private path: string = '/nodes';

    /**
     * Create rendition
     * Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/RenditionBody} renditionBody The rendition \&quot;id\&quot;.
     */
    createRendition(nodeId: string, renditionBody: RenditionBody): Promise<any> {
        let postBody = renditionBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId === undefined || nodeId === null) {
            throw "Missing param 'nodeId' in createRendition";
        }

        // verify the required parameter 'renditionBody' is set
        if (renditionBody === undefined || renditionBody === null) {
            throw "Missing param 'renditionBody' in createRendition";
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{nodeId}/renditions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get rendition information
     * Returns the rendition information for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * data is of type: {module:model/RenditionEntry}
     */
    getRendition(nodeId: string, renditionId: string): Promise<RenditionEntry> {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId === undefined || nodeId === null) {
            throw "Missing param 'nodeId' in getRendition";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId === undefined || renditionId === null) {
            throw "Missing param 'renditionId' in getRendition";
        }

        let pathParams = {
            'nodeId': nodeId,
            'renditionId': renditionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{nodeId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
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
    getRenditionContent(nodeId: string, renditionId: string, opts: any): Promise<any> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId === undefined || nodeId === null) {
            throw "Missing param 'nodeId' in getRenditionContent";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId === undefined || renditionId === null) {
            throw "Missing param 'renditionId' in getRenditionContent";
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

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{nodeId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * List information for renditions
     * Returns the rendition information for the file node with identifier **nodeId**.\nThis will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/RenditionPaging}
     */
    getRenditions(nodeId: string): Promise<RenditionPaging> {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId === undefined || nodeId === null) {
            throw "Missing param 'nodeId' in getRenditions";
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{nodeId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

}
