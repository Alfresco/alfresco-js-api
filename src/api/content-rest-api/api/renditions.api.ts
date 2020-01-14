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

import { RenditionBodyCreate } from '../model/renditionBodyCreate';
import { RenditionEntry } from '../model/renditionEntry';
import { RenditionPaging } from '../model/renditionPaging';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Renditions service.
* @module RenditionsApi
*/
export class RenditionsApi extends BaseApi {
    /**
    * Create rendition
    *
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

An asynchronous request to create a rendition for file **nodeId**.

The rendition is specified by name **id** in the request body:
JSON
{
  \"id\":\"doclib\"
}

    *
    * @param nodeId The identifier of a node.
    * @param renditionBodyCreate The rendition \"id\".
    * @return Promise<{}>
    */
    createRendition(nodeId: string, renditionBodyCreate: RenditionBodyCreate): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(renditionBodyCreate, 'renditionBodyCreate');

        let postBody = renditionBodyCreate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get rendition information
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the rendition information for **renditionId** of file **nodeId**.

        *
        * @param nodeId The identifier of a node.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        * @return Promise<RenditionEntry>
        */
    getRendition(nodeId: string, renditionId: string): Promise<RenditionEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(renditionId, 'renditionId');

        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'renditionId': renditionId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RenditionEntry);
    }
    /**
        * Get rendition content
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the rendition content for **renditionId** of file **nodeId**.

        *
        * @param nodeId The identifier of a node.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        * @param opts Optional parameters
        * @param opts.attachment **true** enables a web browser to download the file as an attachment.
    **false** means a web browser may preview the file in a new tab or window, but not
    download the file.

    You can only set this parameter to **false** if the content type of the file is in the supported list;
    for example, certain image files and PDF files.

    If the content type is not supported for preview, then a value of **false**  is ignored, and
    the attachment will be returned in the response.
     (default to true)
        * @param opts.ifModifiedSince Only returns the content if it has been modified since the date provided.
    Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

        * @param opts.range The Range header indicates the part of a document that the server should return.
    Single part request supported, for example: bytes=1-10.

        * @param opts.placeholder If **true** and there is no rendition for this **nodeId** and **renditionId**,
    then the placeholder image for the mime type of this rendition is returned, rather
    than a 404 response.
     (default to false)
        * @return Promise<{}>
        */
    getRenditionContent(nodeId: string, renditionId: string, opts?: any): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(renditionId, 'renditionId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'renditionId': renditionId
        };

        let queryParams = {
            'attachment': opts['attachment'],
            'placeholder': opts['placeholder']
        };

        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince'], 'Range': opts['range']
        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List renditions
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets a list of the rendition information for each rendition of the the file **nodeId**, including the rendition id.

    Each rendition returned has a **status**: CREATED means it is available to view or download, NOT_CREATED means the rendition can be requested.

    You can use the **where** parameter to filter the returned renditions by **status**. For example, the following **where**
    clause will return just the CREATED renditions:


    (status='CREATED')


        *
        * @param nodeId The identifier of a node.
        * @param opts Optional parameters
        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @return Promise<RenditionPaging>
        */
    listRenditions(nodeId: string, opts?: any): Promise<RenditionPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'where': opts['where']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RenditionPaging);
    }

}
