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

import { DeletedNodeEntry } from '../model/deletedNodeEntry';
import { DeletedNodesPaging } from '../model/deletedNodesPaging';
import { NodeEntry } from '../model/nodeEntry';
import { RenditionEntry } from '../model/renditionEntry';
import { RenditionPaging } from '../model/renditionPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Trashcan service.
* @module TrashcanApi
*/
export class TrashcanApi extends BaseApi {
    /**
    * Permanently delete a deleted node
    *
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Permanently deletes the deleted node **nodeId**.

    *
    * @param nodeId The identifier of a node.
    * @return Promise<{}>
    */
    deleteDeletedNode(nodeId: string): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');

        let postBody = null;

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
            '/deleted-nodes/{nodeId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get rendition information for a deleted node
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the rendition information for **renditionId** of file **nodeId**.

        *
        * @param nodeId The identifier of a node.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        * @return Promise<RenditionEntry>
        */
    getArchivedNodeRendition(nodeId: string, renditionId: string): Promise<RenditionEntry> {
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
            '/deleted-nodes/{nodeId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RenditionEntry);
    }
    /**
        * Get rendition content of a deleted node
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
    getArchivedNodeRenditionContent(nodeId: string, renditionId: string, opts?: any): Promise<any> {
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
            '/deleted-nodes/{nodeId}/renditions/{renditionId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a deleted node
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the specific deleted node **nodeId**.

        *
        * @param nodeId The identifier of a node.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the node. The following optional fields can be requested:
    * allowableOperations
    * association
    * isLink
    * isFavorite
    * isLocked
    * path
    * permissions

        * @return Promise<DeletedNodeEntry>
        */
    getDeletedNode(nodeId: string, opts?: any): Promise<DeletedNodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, DeletedNodeEntry);
    }
    /**
        * Get deleted node content
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets the content of the deleted node with identifier **nodeId**.

        *
        * @param nodeId The identifier of a node.
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

        * @return Promise<{}>
        */
    getDeletedNodeContent(nodeId: string, opts?: any): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'attachment': opts['attachment']
        };

        let headerParams = {
            'If-Modified-Since': opts['ifModifiedSince'], 'Range': opts['range']
        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List renditions for a deleted node
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets a list of the rendition information for each rendition of the file **nodeId**, including the rendition id.

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
    listDeletedNodeRenditions(nodeId: string, opts?: any): Promise<RenditionPaging> {
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
            '/deleted-nodes/{nodeId}/renditions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RenditionPaging);
    }
    /**
        * List deleted nodes
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Gets a list of deleted nodes for the current user.

    If the current user is an administrator deleted nodes for all users will be returned.

    The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.

        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.include Returns additional information about the node. The following optional fields can be requested:
    * allowableOperations
    * aspectNames
    * association
    * isLink
    * isFavorite
    * isLocked
    * path
    * properties
    * permissions

        * @return Promise<DeletedNodesPaging>
        */
    listDeletedNodes(opts?: any): Promise<DeletedNodesPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, DeletedNodesPaging);
    }
    /**
        * Restore a deleted node
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Attempts to restore the deleted node **nodeId** to its original location or to a new location.

    If the node is successfully restored to its former primary parent, then only the
    primary child association will be restored, including recursively for any primary
    children. It should be noted that no other secondary child associations or peer
    associations will be restored, for any of the nodes within the primary parent-child
    hierarchy of restored nodes, irrespective of whether these associations were to
    nodes within or outside of the restored hierarchy.

    Also, any previously shared link will not be restored since it is deleted at the time
    of delete of each node.

        *
        * @param nodeId The identifier of a node.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @param opts.deletedNodeBodyRestore The targetParentId if the node is restored to a new location.
        * @return Promise<NodeEntry>
        */
    restoreDeletedNode(nodeId: string, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = opts['deletedNodeBodyRestore'];

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}/restore', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

}
