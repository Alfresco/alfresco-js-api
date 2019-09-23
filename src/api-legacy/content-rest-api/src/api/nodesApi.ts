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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { NodesApi as NewNodesApi } from '../../../../api/content-rest-api/api/nodes.api';
import { TrashcanApi } from '../../../../api/content-rest-api';
import { NodeEntry } from '../../../../api/content-rest-api/model/nodeEntry';
import { Node } from '../../../../api/content-rest-api/model/node';
import { DeletedNodeEntry } from '../../../../api/content-rest-api/model/deletedNodeEntry';
import { DeletedNodesPaging } from '../../../../api/content-rest-api/model/deletedNodesPaging';
import { NodeChildAssociationPaging } from '../../../../api/content-rest-api/model/nodeChildAssociationPaging';
import { NodeAssociationPaging } from '../../../../api/content-rest-api/model/nodeAssociationPaging';
import { NodeBodyMove } from '../../../../api/content-rest-api/model/nodeBodyMove';
import { NodeBodyUpdate } from '../../../../api/content-rest-api/model/nodeBodyUpdate';
import { NodeBodyCreate } from '../../../../api/content-rest-api/model/nodeBodyCreate';
import { NodeBodyCopy } from '../../../../api/content-rest-api/model/nodeBodyCopy';
import { NodeBodyLock } from '../../../../api/content-rest-api/model/nodeBodyLock';

/**
 * @deprecated 3.0.0
 */
export class NodesApi {

    private nodesApi: NewNodesApi;
    private trashcanApi: TrashcanApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.nodesApi = new NewNodesApi(alfrescoApi);
        this.trashcanApi = new TrashcanApi(alfrescoApi);
    }

    /**
     * Nodes service.
     * @module api/NodesApi
     * @version 0.1.0
     */

    /**
     * Constructs a new NodesApi.
     * @alias module:api/NodesApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
     * if unspecified.
     */

    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * data is of type: {module:model/NodeEntry}
     */
    addNode(nodeId: string, nodeBody: NodeBodyCreate, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.createNode(nodeId, nodeBody, opts);
    }

    /**
     * Copy a node
     * Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.\n\nThe new node has the same name as the source node unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also copied.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/CopyBody} copyBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    copyNode(nodeId: string, copyBody: NodeBodyCopy, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.copyNode(nodeId, copyBody, opts);
    }

    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     */
    deleteNode(nodeId: string, opts?: any): Promise<any> {
        return this.nodesApi.deleteNode(nodeId, opts);
    }

    /**
     * Get a deleted node
     * Returns a specific deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * data is of type: {module:model/DeletedNodeEntry}
     */
    getDeletedNode(nodeId: string, opts?: any): Promise<DeletedNodeEntry> {
        return this.trashcanApi.getDeletedNode(nodeId, opts);
    }

    /**
     * Get deleted nodes
     * Returns a list of deleted nodes for the current user.\nIf the current user is an administrator deleted nodes\nfor all users will be returned.\nThe list of deleted nodes will be ordered with the most recently deleted node at the top of the list.\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * data is of type: {module:model/DeletedNodesPaging}
     */
    getDeletedNodes(opts?: any): Promise<DeletedNodesPaging> {
        return this.trashcanApi.listDeletedNodes(opts);
    }

    /**
     * Get file content
     * Returns the file content of the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    getFileContent(nodeId: string, opts?: any): Promise<any> {
        return this.nodesApi.getNodeContent(nodeId, opts);
    }

    /**
     * Get a node
     * Get information for the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {String} opts.relativePath If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    getNode(nodeId: string, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.getNode(nodeId, opts);
    }

    /**
     * Get node content
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the content of the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getNodeContent(nodeId: string, opts?: any): Promise<any> {
        return this.nodesApi.getNodeContent(nodeId, opts);
    }

    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return additional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {String} opts.relativePath Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
     * @param {Boolean} opts.includeSource Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;)
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    getNodeChildren(nodeId: string, opts?: any): Promise<NodeChildAssociationPaging> {
        return this.nodesApi.listNodeChildren(nodeId, opts);
    }

    /**
     * get parents
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of parent nodes that are associated with the current child **nodeId**.  The list includes both the primary parent and any secondary parents.
     * @param {String} nodeId The identifier of a child node. You can also use one of these well-known aliases: * -my- * -shared- * -root-
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by **assocType** and/or **isPrimary**. Here are some example filters:  *   &#x60;&#x60;&#x60;where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isPrimary&#x3D;true)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isPrimary&#x3D;false and assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on **nodeId**
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeAssociationPaging}
     */
    getParents(nodeId: string, opts?: any): Promise<NodeAssociationPaging> {
        return this.nodesApi.listParents(nodeId, opts);
    }

    /**
     * Get secondary children
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of secondary child nodes that are associated with the current parent **nodeId**, via a secondary child association.
     * @param {String} nodeId The identifier of a parent node. You can also use one of these well-known aliases: * -my- * -shared- * -root-
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:  *   where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on **nodeId**
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeChildAssociationPaging}
     */
    getSecondaryChildren(nodeId: string, opts?: any): Promise<NodeChildAssociationPaging> {
        return this.nodesApi.listSecondaryChildren(nodeId, opts);
    }

    /**
     * Get source associations
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of source nodes that are associated with the current target **nodeId**.
     * @param {String} nodeId The identifier of a target node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by **assocType**. Here&#39;s an example:  *   &#x60;&#x60;&#x60;where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeAssociationPaging}
     */
    getSourceAssociations(nodeId: string, opts?: any): Promise<NodeAssociationPaging> {
        return this.nodesApi.listSourceAssociations(nodeId, opts);
    }

    /**
     * Get target associations
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of target nodes that are associated with the current source **nodeId**.
     * @param {String} nodeId The identifier of a source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by **assocType**. Here&#39;s an example:  *   &#x60;&#x60;&#x60;where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeAssociationPaging}
     */
    getTargetAssociations(nodeId: string, opts?: any): Promise<NodeAssociationPaging> {
        return this.nodesApi.listTargetAssociations(nodeId, opts);
    }

    /**
     * Lock a node
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Places a lock on node **nodeId**.  **Note:** you can only lock files. More specifically, a node can only be locked if it is of type &#x60;cm:content&#x60; or a subtype of &#x60;cm:content&#x60;.  The lock is owned by the current user, and prevents other users or processes from making updates to the node until the lock is released.    If the **timeToExpire** is not set or is zero, then the lock never expires.  Otherwise, the **timeToExpire** is the number of seconds before the lock expires.    When a lock expires, the lock is released.  If the node is already locked, and the user is the lock owner, then the lock is renewed with the new **timeToExpire**.          By default, a lock is applied that allows the owner to update or delete the node. You can use **type** to change the lock type to one of the following:  * **ALLOW_OWNER_CHANGES** (default) changes to the node can be made only by the lock owner. This enum is the same value as the deprecated WRITE_LOCK described in &#x60;org.alfresco.service.cmr.lock.LockType&#x60; in the Alfresco Public Java API. This is the default value. * **FULL** no changes by any user are allowed. This enum is the same value as the deprecated READ_ONLY_LOCK described in &#x60;org.alfresco.service.cmr.lock.LockType&#x60; in the Alfresco Public Java API.  By default, a lock is persisted in the database. You can create a volatile in-memory lock by setting the **lifetime** property to EPHEMERAL. You might choose use EPHEMERAL locks, for example, if you are taking frequent short-term locks that you don&#39;t need  to be kept over a restart of the repository. In this case you don&#39;t need the  overhead of writing the locks to the database.  If a lock on the node cannot be taken, then an error is returned.
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/NodeBodyLock} nodeBodyLock Lock details.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeEntry}
     */
    lockNode(nodeId: string, nodeBodyLock: NodeBodyLock, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.lockNode(nodeId, nodeBodyLock, opts);
    }

    /**
     * Unlock a node
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Deletes a lock on node **nodeId**.  The current user must be the owner of the locks or have admin rights, otherwise an error is returned.  If a lock on the node cannot be released, then an error is returned.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeEntry}
     */
    unlockNode(nodeId: string, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.unlockNode(nodeId, opts);
    }

    /**
     * Move a node
     * Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/MoveBody} moveBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    moveNode(nodeId: string, moveBody: NodeBodyMove, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.moveNode(nodeId, moveBody, opts);
    }

    /**
     * Purge a deleted node
     * Permanently removes the deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     */
    purgeDeletedNode(nodeId: string): Promise<any> {
        return this.trashcanApi.deleteDeletedNode(nodeId);
    }

    /**
     * Restore a deleted node
     * Attempts to restore the deleted node identified by **nodeId** to its original location.\n
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/NodeEntry}
     */
    restoreNode(nodeId: string): Promise<NodeEntry> {
        return this.trashcanApi.restoreDeletedNode(nodeId);
    }

    /**
     * Update file content
     * Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitrary file.\n
     * @param {String} nodeId The identifier of a node.
     * @param {String} contentBody The binary content
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.majorVersion If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n (default to false)
     * @param {String} opts.comment Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    updateFileContent(nodeId: string, contentBody: any, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.updateNodeContent(nodeId, contentBody, opts);
    }

    updateNodeContent(nodeId: string, contentBody: any, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.updateNodeContent(nodeId, contentBody, opts);
    }

    /**
     * Update a node
     * Updates the node with identifier **nodeId**. For example, you can rename a file or folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;,\n}\n&#x60;&#x60;&#x60;\nYou can also set or update one or more properties:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\n**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    updateNode(nodeId: string, nodeBody: NodeBodyUpdate, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.updateNode(nodeId, nodeBody, opts);
    }

    getNodeInfo(nodeId: string, opts?: any): Promise<Node> {
        return new Promise((resolve, reject) => {
            this.getNode(nodeId, opts).then(
                (nodeEntry: NodeEntry) => {
                    resolve(nodeEntry.entry);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    /**
     * Delete node by ID, If the nodeId is a folder, then its children are also
     * Deleted permanent will not be possible recover it
     *
     * @param  nodeId The identifier of a node. You can also use one of these well-known aliases: -my- | -shared- | -root-
     *
     * @returns A promise that is resolved if the file is deleted and {error} if rejected.
     */
    deleteNodePermanent(nodeId: string): Promise<any> {
        return this.deleteNode(nodeId, { permanent: true });
    }

    /**
     * Create a folder
     *
     * @param name - folder name
     * @param  relativePath - The relativePath specifies the folder structure to create relative to the node identified by nodeId.
     * @param  nodeId default value root.The identifier of a node where add the folder. You can also use one of these well-known aliases: -my- | -shared- | -root-
     * @param opts Optional parameters
     *
     * @returns  A promise that is resolved if the folder is created and {error} if rejected.
     */
    createFolder(name: string, relativePath: string, nodeId: string, opts?: any): Promise<NodeEntry> {
        nodeId = nodeId || '-root-';
        let nodeBody = {
            'name': name,
            'nodeType': 'cm:folder',
            'relativePath': relativePath
        };

        return this.addNode(nodeId, nodeBody, opts);
    }

    /**
     * Create a folder and auto-rename it if already exist
     *
     * @param {String} name - folder name
     * @param {String} relativePath - The relativePath specifies the folder structure to create relative to the node identified by nodeId.
     * @param {String} nodeId default value root.The identifier of a node where add the folder. You can also use one of these well-known aliases: -my- | -shared- | -root-
     * @param {Object} opts Optional parameters
     *
     * @returns {Promise} A promise that is resolved if the folder is created and {error} if rejected.
     */
    createFolderAutoRename(name: string, relativePath: string, nodeId: string, opts?: any): Promise<NodeEntry> {
        let optAutoRename = { autoRename: true };
        opts = opts || {};
        opts = Object.assign(opts, optAutoRename);

        return this.createFolder(name, relativePath, nodeId, opts);
    }
}
