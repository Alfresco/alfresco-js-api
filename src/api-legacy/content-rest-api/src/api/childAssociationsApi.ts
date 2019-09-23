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
import { NodesApi } from '../../../../api/content-rest-api/api/nodes.api';
import { NodeBodyCreate } from '../../../../api/content-rest-api/model/nodeBodyCreate';
import { ChildAssociationBody } from '../../../../api/content-rest-api/model/childAssociationBody';
import { NodeEntry } from '../../../../api/content-rest-api/model/nodeEntry';
import { ChildAssociationEntry } from '../../../../api/content-rest-api/model/childAssociationEntry';
import { NodeChildAssociationPaging } from '../../../../api/content-rest-api/model/nodeChildAssociationPaging';
import { NodeAssociationPaging } from '../../../../api/content-rest-api/model/nodeAssociationPaging';
import { NodeBodyMove } from '../../../../api/content-rest-api/model/nodeBodyMove';

/**
 * @deprecated 3.0.0
 */
export class ChildAssociationsApi {

    private nodesApi: NodesApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.nodesApi = new NodesApi(alfrescoApi);
    }

    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    addNode(nodeId: string, nodeBody: NodeBodyCreate, opts?: any): Promise<NodeEntry> {
        return this.nodesApi.createNode(nodeId, nodeBody, opts);
    }

    /**
     * Add secondary child
     * Add secondary child association, with given association type, between parent and child node.\n
     * @param {String} parentId The identifier of a node.
     * @param {module:model/AssocChildBody} assocChildBody The child node id and assoc type.
     */
    addSecondaryChildAssoc(parentId: string, assocChildBody: ChildAssociationBody): Promise<ChildAssociationEntry> {
        return this.nodesApi.createSecondaryChildAssociation(parentId, <any>assocChildBody);
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
     * List parents
     * Returns a list of parent nodes that point to (ie. are associated with) the current child node. \n\nThis includes both the primary parent and also secondary parents, if any.\n
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    listParents(childId: string, opts?: any): Promise<NodeAssociationPaging> {
        return this.nodesApi.listParents(childId, opts);
    }

    /**
     * List secondary children
     * Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.\n
     * @param {String} parentId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the returned results to only those of the given association type
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeChildAssociationPaging}
     */
    listSecondaryChildAssociations(parentId: string, opts?: any): Promise<NodeAssociationPaging> {
        return this.nodesApi.listSecondaryChildren(parentId, opts);
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
     * Remove secondary child (or children)
     * Remove secondary child association(s) between parent and child node for given association type. \n\nIf association type is not specified then all secondary child associations between parent and child are removed.\n
     * @param {String} parentId The identifier of a node.
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    removeSecondaryChildAssoc(parentId: string, childId: string, opts?: any): Promise<any> {
        return this.nodesApi.deleteSecondaryChildAssociation(parentId, childId, opts);
    }
}
