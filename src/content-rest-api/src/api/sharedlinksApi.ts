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

import { NodeSharedLinkEntry } from '../model/NodeSharedLinkEntry';
import { SharedLinkBody } from '../model/SharedLinkBody';
import { EmailSharedLinkBody } from '../model/EmailSharedLinkBody';
import { NodeSharedLinkPaging } from '../model/NodeSharedLinkPaging';
import { BaseApi } from './baseApi';
import { RenditionPaging } from '../model/RenditionPaging';
import { RenditionEntry } from '../model/RenditionEntry';

/**
 * Sharedlinks service.
 * @module api/SharedlinksApi
 * @version 0.1.0
 */

/**
 * Constructs a new SharedlinksApi.
 * @alias module:api/SharedlinksApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class SharedlinksApi extends BaseApi {

    private path: string = '/shared-links';

    /**
     * Create a shared link to a file
     * Create shared link to specfied file identified by **nodeId** in request body.
     * @param {module:model/SharedLinkBody} sharedLinkBody The nodeId to create a shared link for.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    addSharedLink(sharedLinkBody: SharedLinkBody, opts: any): Promise<NodeSharedLinkEntry> {
        opts = opts || {};
        let postBody = sharedLinkBody;

        // verify the required parameter 'sharedLinkBody' is set
        if (sharedLinkBody == undefined || sharedLinkBody == null) {
            throw "Missing param 'sharedLinkBody' in addSharedLink";
        }


        let pathParams = {};
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }


    /**
     * Deletes a shared link
     * Deletes the shared link with identifier **sharedId**.
     * @param {String} sharedId The identifier of a shared link to a file.
     */
    deleteSharedLink(sharedId: string): Promise<any> {
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in deleteSharedLink";
        }


        let pathParams = {
            'sharedId': sharedId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path+'/{sharedId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }


    /**
     * Email shared link
     * Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:model/EmailSharedLinkBody} emailSharedLinkBody The shared link email to send.
     */
    emailSharedLink(sharedId: string, emailSharedLinkBody: EmailSharedLinkBody): Promise<any> {
        let postBody = emailSharedLinkBody;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in emailSharedLink";
        }

        // verify the required parameter 'emailSharedLinkBody' is set
        if (emailSharedLinkBody == undefined || emailSharedLinkBody == null) {
            throw "Missing param 'emailSharedLinkBody' in emailSharedLink";
        }


        let pathParams = {
            'sharedId': sharedId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path+'/{sharedId}/email', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }


    /**
     * Find shared links
     * Find (search for) links that current user has read permission on source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;)
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkPaging}
     */
    findSharedLinks(opts: any): Promise<NodeSharedLinkPaging> {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/shared-links', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }


    /**
     * Get a shared link
     * Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    getSharedLink(sharedId:string, opts: any): Promise<NodeSharedLinkEntry>  {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in getSharedLink";
        }


        let pathParams = {
            'sharedId': sharedId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path+'/{sharedId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }


    /**
     * Get file content
     * Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    getSharedLinkContent(sharedId:string, opts: any) : Promise<any> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in getSharedLinkContent";
        }


        let pathParams = {
            'sharedId': sharedId
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
            this.path+'/{sharedId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
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
    getSharedLinkRenditionContent(sharedId: string, renditionId: string, opts: any): Promise<any> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in getSharedLinkRenditionContent";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId == undefined || renditionId == null) {
            throw "Missing param 'renditionId' in getSharedLinkRenditionContent";
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


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path+'/{sharedId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts, returnType
        );
    }


    /**
     * List information for created renditions
     * Returns the rendition information for the file with shared link identifier **sharedId**.\n\nThis will only return rendition information, including the rendition id, for each rendition\nwhere the rendition status is CREATED (ie. available\u00A0to view/download).\n\n**Note:** No authentication is required to call this endpoint.      \n
     * @param {String} sharedId The identifier of a shared link to a file.
     * data is of type: {module:model/RenditionPaging}
     */
    getSharedLinkRenditions(sharedId: string): Promise<RenditionPaging> {
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in getSharedLinkRenditions";
        }


        let pathParams = {
            'sharedId': sharedId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path+'/{sharedId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }

    /**
     * Gets rendition information for the file with shared link identifier sharedId.
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * data is of type: {module:model/RenditionEntry}
     */
    getSharedLinkRendition(sharedId: string, renditionId: string): Promise<RenditionEntry> {
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing param 'sharedId' in getRendition";
        }

        // verify the required parameter 'renditionId' is set
        if (renditionId == undefined || renditionId == null) {
            throw "Missing param 'renditionId' in getRendition";
        }

        let pathParams = {
            'sharedId': sharedId,
            'renditionId': renditionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path+'/{sharedId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
             contentTypes, accepts
        );
    }
}
