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

import { DeletedNodeBodyRestore } from '../model/deletedNodeBodyRestore';
import { DeletedNodeEntry } from '../model/deletedNodeEntry';
import { DeletedNodesPaging } from '../model/deletedNodesPaging';
import { ModelError } from '../model/modelError';
import { NodeEntry } from '../model/nodeEntry';
import { RenditionEntry } from '../model/renditionEntry';
import { RenditionPaging } from '../model/renditionPaging';
import { BaseApi } from './base.api';

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

    * @param nodeId The identifier of a node.
    */
    deleteDeletedNode(nodeId: string): Promise<{}> {

        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in deleteDeletedNode");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get rendition information for a deleted node
        * 
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.
    
    Gets the rendition information for **renditionId** of file **nodeId**.
    
        * @param nodeId The identifier of a node.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        */
    getArchivedNodeRendition(nodeId: string, renditionId: string): Promise<RenditionEntry> {

        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in getArchivedNodeRendition");
        }

        if (renditionId === undefined || renditionId === null) {
            throw new Error("Required param 'renditionId' in getArchivedNodeRendition");
        }

        let pathParams = {
            'nodeId': nodeId, 'renditionId': renditionId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}/renditions/{renditionId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get rendition content of a deleted node
        * 
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.
    
    Gets the rendition content for **renditionId** of file **nodeId**.
    
        * @param nodeId The identifier of a node.
        * @param renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
        * @param attachment **true** enables a web browser to download the file as an attachment.
    **false** means a web browser may preview the file in a new tab or window, but not
    download the file.
    
    You can only set this parameter to **false** if the content type of the file is in the supported list;
    for example, certain image files and PDF files.
    
    If the content type is not supported for preview, then a value of **false**  is ignored, and
    the attachment will be returned in the response.
    
        * @param ifModifiedSince Only returns the content if it has been modified since the date provided.
    Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
    
        * @param range The Range header indicates the part of a document that the server should return.
    Single part request supported, for example: bytes=1-10.
    
        * @param placeholder If **true** and there is no rendition for this **nodeId** and **renditionId**,
    then the placeholder image for the mime type of this rendition is returned, rather
    than a 404 response.
    
        */
    getArchivedNodeRenditionContent(nodeId: string, renditionId: string, opts: any): Promise<{}> {
        opts = opts || {};
        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in getArchivedNodeRenditionContent");
        }

        if (renditionId === undefined || renditionId === null) {
            throw new Error("Required param 'renditionId' in getArchivedNodeRenditionContent");
        }

        let pathParams = {
            'nodeId': nodeId, 'renditionId': renditionId
        };
        let queryParams = {
            'attachment': opts['attachment'],
            'placeholder': opts['placeholder'],
        };
        let collectionQueryParams = {
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
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a deleted node
        * 
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.
    
    Gets the specific deleted node **nodeId**.
    
        * @param nodeId The identifier of a node.
        * @param include Returns additional information about the node. The following optional fields can be requested:
    * allowableOperations
    * association
    * isLink
    * isFavorite
    * isLocked
    * path
    * permissions
    
        */
    getDeletedNode(nodeId: string, opts: any): Promise<DeletedNodeEntry> {
        opts = opts || {};
        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in getDeletedNode");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get deleted node content
        * 
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.
    
    Gets the content of the deleted node with identifier **nodeId**.
    
        * @param nodeId The identifier of a node.
        * @param attachment **true** enables a web browser to download the file as an attachment.
    **false** means a web browser may preview the file in a new tab or window, but not
    download the file.
    
    You can only set this parameter to **false** if the content type of the file is in the supported list;
    for example, certain image files and PDF files.
    
    If the content type is not supported for preview, then a value of **false**  is ignored, and
    the attachment will be returned in the response.
    
        * @param ifModifiedSince Only returns the content if it has been modified since the date provided.
    Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
    
        * @param range The Range header indicates the part of a document that the server should return.
    Single part request supported, for example: bytes=1-10.
    
        */
    getDeletedNodeContent(nodeId: string, opts: any): Promise<{}> {
        opts = opts || {};
        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in getDeletedNodeContent");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'attachment': opts['attachment'],
        };
        let collectionQueryParams = {
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
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    
    
        * @param nodeId The identifier of a node.
        * @param where A string to restrict the returned objects by using a predicate.
        */
    listDeletedNodeRenditions(nodeId: string, opts: any): Promise<RenditionPaging> {
        opts = opts || {};
        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in listDeletedNodeRenditions");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'where': opts['where'],
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}/renditions', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List deleted nodes
        * 
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.
    
    Gets a list of deleted nodes for the current user.
    
    If the current user is an administrator deleted nodes for all users will be returned.
    
    The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.
    
        * @param skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
    
        * @param maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
    
        * @param include Returns additional information about the node. The following optional fields can be requested:
    * allowableOperations
    * aspectNames
    * association
    * isLink
    * isFavorite
    * isLocked
    * path
    * properties
    * permissions
    
        */
    listDeletedNodes(opts: any): Promise<DeletedNodesPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    
        * @param nodeId The identifier of a node.
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        * @param deletedNodeBodyRestore The targetParentId if the node is restored to a new location.
        */
    restoreDeletedNode(nodeId: string, opts: any): Promise<NodeEntry> {
        opts = opts || {};
        let postBody = opts['deletedNodeBodyRestore'];

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in restoreDeletedNode");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}/restore', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
