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

import { AssociationBody } from '../model/associationBody';
import { AssociationEntry } from '../model/associationEntry';
import { ChildAssociationBody } from '../model/childAssociationBody';
import { ChildAssociationEntry } from '../model/childAssociationEntry';
import { NodeAssociationPaging } from '../model/nodeAssociationPaging';
import { NodeBodyCopy } from '../model/nodeBodyCopy';
import { NodeBodyCreate } from '../model/nodeBodyCreate';
import { NodeBodyLock } from '../model/nodeBodyLock';
import { NodeBodyMove } from '../model/nodeBodyMove';
import { NodeBodyUpdate } from '../model/nodeBodyUpdate';
import { NodeChildAssociationPaging } from '../model/nodeChildAssociationPaging';
import { NodeEntry } from '../model/nodeEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
 * Nodes service.
 * @module NodesApi
 */
export class NodesApi extends BaseApi {
    /**
     * Copy a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Copies the node **nodeId** to the parent folder node **targetParentId**. You specify the **targetParentId** in the request body.

     The new node has the same name as the source node unless you specify a new **name** in the request body.

     If the source **nodeId** is a folder, then all of its children are also copied.

     If the source **nodeId** is a file, it's properties, aspects and tags are copied, it's ratings, comments and locks are not.

     *
     * @param nodeId The identifier of a node.
     * @param nodeBodyCopy The targetParentId and, optionally, a new name which should include the file extension.
     * @param opts Optional parameters
     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    copyNode(nodeId: string, nodeBodyCopy: NodeBodyCopy, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(nodeBodyCopy, 'nodeBodyCopy');

        opts = opts || {};
        let postBody = nodeBodyCopy;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/copy', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

    /**
     * Create node association
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Create an association, with the given association type, between the source **nodeId** and a target node.

     **Note:** You can create more than one association by
     specifying a list of associations in the JSON body like this:

     JSON
     [
     {
        \"targetId\": \"string\",
        \"assocType\": \"string\"
     },
     {
       \"targetId\": \"string\",
       \"assocType\": \"string\"
     }
     ]

     If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

     JSON
     {
       \"list\": {
         \"pagination\": {
           \"count\": 2,
           \"hasMoreItems\": false,
           \"totalItems\": 2,
           \"skipCount\": 0,
           \"maxItems\": 100
         },
         \"entries\": [
           {
             \"entry\": {
               ...
             }
           },
           {
             \"entry\": {
               ...
             }
           }
         ]
       }
     }


     *
     * @param nodeId The identifier of a source node.
     * @param associationBodyCreate The target node id and assoc type.
     * @param opts Optional parameters
     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<AssociationEntry>
     */
    createAssociation(nodeId: string, associationBodyCreate: AssociationBody, opts?: any): Promise<AssociationEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(associationBodyCreate, 'associationBodyCreate');

        opts = opts || {};
        let postBody = associationBodyCreate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/targets', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AssociationEntry);
    }

    /**
     * Create a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Create a node and add it as a primary child of node **nodeId**.

     This endpoint supports both JSON and multipart/form-data (file upload).

     **Using multipart/form-data**

     Use the **filedata** field to represent the content to upload, for example, the following curl command will
     create a node with the contents of test.txt in the test user's home folder.

     curl -utest:test -X POST host:port/alfresco/api/-default-/public/alfresco/versions/1/nodes/-my-/children -F filedata=@test.txt

     You can use the **name** field to give an alternative name for the new file.

     You can use the **nodeType** field to create a specific type. The default is cm:content.

     You can use the **renditions** field to create renditions (e.g. doclib) asynchronously upon upload.
     Note that currently only one rendition can be requested. Also, as requesting rendition is a background process,
     any rendition failure (e.g. No transformer is currently available) will not fail the whole upload and has the potential to silently fail.

     Use **overwrite** to overwrite an existing file, matched by name. If the file is versionable,
     the existing content is replaced.

     When you overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version
     should be created. The default for **majorVersion** is **false**.
     Setting  **majorVersion** enables versioning of the node, if it is not already versioned.

     When you overwrite existing content, you can use the **comment** field to add a version comment that appears in the
     version history. This also enables versioning of this node, if it is not already versioned.

     You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
     the API method tries to create a unique name using an integer suffix.

     You can use the **relativePath** field to specify the folder structure to create relative to the node **nodeId**.
     Folders in the **relativePath** that do not exist are created before the node is created.

     Any other field provided will be treated as a property to set on the newly created node.

     **Note:** setting properties of type d:content and d:category are not supported.

     **Using JSON**

     You must specify at least a **name** and **nodeType**. For example, to create a folder:
     JSON
     {
       \"name\":\"My Folder\",
       \"nodeType\":\"cm:folder\"
     }


     You can create an empty file like this:
     JSON
     {
       \"name\":\"My text file.txt\",
       \"nodeType\":\"cm:content\"
     }

     You can update binary content using the PUT /nodes/{nodeId} API method.

     You can create a folder, or other node, inside a folder hierarchy:
     JSON
     {
       \"name\":\"My Special Folder\",
       \"nodeType\":\"cm:folder\",
       \"relativePath\":\"X/Y/Z\"
     }

     The **relativePath** specifies the folder structure to create relative to the node **nodeId**. Folders in the
     **relativePath** that do not exist are created before the node is created.

     You can set properties when you create a new node:
     JSON
     {
       \"name\":\"My Other Folder\",
       \"nodeType\":\"cm:folder\",
       \"properties\":
       {
         \"cm:title\":\"Folder title\",
         \"cm:description\":\"This is an important folder\"
       }
     }

     Any missing aspects are applied automatically. For example, **cm:titled** in the JSON shown above. You can set aspects
     explicitly, if needed, using an **aspectNames** field.

     **Note:** setting properties of type d:content and d:category are not supported.

     Typically, for files and folders, the primary children are created within the parent folder using the default \"cm:contains\" assocType.
     If the content model allows then it is also possible to create primary children with a different assoc type. For example:
     JSON
     {
       \"name\":\"My Node\",
       \"nodeType\":\"my:specialNodeType\",
       \"association\":
       {
         \"assocType\":\"my:specialAssocType\"
       }
     }


     Additional associations can be added after creating a node. You can also add associations at the time the node is created. This is
     required, for example, if the content model specifies that a node has mandatory associations to one or more existing nodes. You can optionally
     specify an array of **secondaryChildren** to create one or more secondary child associations, such that the newly created node acts as a parent node.
     You can optionally specify an array of **targets** to create one or more peer associations such that the newly created node acts as a source node.
     For example, to associate one or more secondary children at time of creation:
     JSON
     {
       \"name\":\"My Folder\",
       \"nodeType\":\"cm:folder\",
       \"secondaryChildren\":
         [ {\"childId\":\"abcde-01234-...\", \"assocType\":\"my:specialChildAssocType\"} ]
     }

     For example, to associate one or more targets at time of creation:
     JSON
     {
       \"name\":\"My Folder\",
       \"nodeType\":\"cm:folder\",
       \"targets\":
         [ {\"targetId\":\"abcde-01234-...\", \"assocType\":\"my:specialPeerAssocType\"} ]
     }


     **Note:** You can create more than one child by
     specifying a list of nodes in the JSON body. For example, the following JSON
     body creates two folders inside the specified **nodeId**, if the **nodeId** identifies
     a folder:

     JSON
     [
     {
       \"name\":\"My Folder 1\",
       \"nodeType\":\"cm:folder\"
     },
     {
       \"name\":\"My Folder 2\",
       \"nodeType\":\"cm:folder\"
     }
     ]

     If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

     JSON
     {
       \"list\": {
         \"pagination\": {
           \"count\": 2,
           \"hasMoreItems\": false,
           \"totalItems\": 2,
           \"skipCount\": 0,
           \"maxItems\": 100
         },
         \"entries\": [
           {
             \"entry\": {
               ...
             }
           },
           {
             \"entry\": {
               ...
             }
           }
         ]
       }
     }


     *
     * @param nodeId The identifier of a node. You can also use one of these well-known aliases:
     * -my-
     * -shared-
     * -root-

     * @param nodeBodyCreate The node information to create.
     * @param opts Optional parameters
     * @param opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    createNode(nodeId: string, nodeBodyCreate: NodeBodyCreate, opts?: any, formParams?: any): Promise<NodeEntry| any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(nodeBodyCreate, 'nodeBodyCreate');

        opts = opts || {};
        let postBody = nodeBodyCreate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'autoRename': opts['autoRename'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        formParams = formParams || {};

        let contentTypes, returnType = null;

        if (formParams.filedata) {
            contentTypes = ['multipart/form-data'];
        } else {
            contentTypes = ['application/json'];
            returnType = NodeEntry;
        }

        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType);
    }

    /**
     * Create secondary child
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Create a secondary child association, with the given association type, between the parent **nodeId** and a child node.

     **Note:** You can create more than one secondary child association by
     specifying a list of associations in the JSON body like this:

     JSON
     [
     {
       \"childId\": \"string\",
       \"assocType\": \"string\"
     },
     {
       \"childId\": \"string\",
       \"assocType\": \"string\"
     }
     ]

     If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

     JSON
     {
       \"list\": {
         \"pagination\": {
           \"count\": 2,
           \"hasMoreItems\": false,
           \"totalItems\": 2,
           \"skipCount\": 0,
           \"maxItems\": 100
         },
         \"entries\": [
           {
             \"entry\": {
               ...
             }
           },
           {
             \"entry\": {
               ...
             }
           }
         ]
       }
     }


     *
     * @param nodeId The identifier of a parent node.
     * @param secondaryChildAssociationBodyCreate The child node id and assoc type.
     * @param opts Optional parameters
     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<ChildAssociationEntry>
     */
    createSecondaryChildAssociation(nodeId: string, secondaryChildAssociationBodyCreate: ChildAssociationBody, opts?: any): Promise<ChildAssociationEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(secondaryChildAssociationBodyCreate, 'secondaryChildAssociationBodyCreate');

        opts = opts || {};
        let postBody = secondaryChildAssociationBodyCreate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/secondary-children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ChildAssociationEntry);
    }

    /**
     * Delete node association(s)
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Delete an association, or associations, from the source **nodeId* to a target node for the given association type.

     If the association type is **not** specified, then all peer associations, of any type, in the direction
     from source to target, are deleted.

     **Note:** After removal of the peer association, or associations, from source to target, the two nodes may still have peer associations
     in the other direction.

     *
     * @param nodeId The identifier of a source node.
     * @param targetId The identifier of a target node.
     * @param opts Optional parameters
     * @param opts.assocType Only delete associations of this type.
     * @return Promise<{}>
     */
    deleteAssociation(nodeId: string, targetId: string, opts?: any): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(targetId, 'targetId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'targetId': targetId
        };

        let queryParams = {
            'assocType': opts['assocType']
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/targets/{targetId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Delete a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Deletes the node **nodeId**.

     If **nodeId** is a folder, then its children are also deleted.

     Deleted nodes move to the trashcan unless the **permanent** query parameter is **true** and the current user is the owner of the node or an admin.

     Deleting a node deletes it from its primary parent and also from any secondary parents. Peer associations are also deleted, where the deleted
     node is either a source or target of an association. This applies recursively to any hierarchy of primary children of the deleted node.

     **Note:** If the node is not permanently deleted, and is later successfully restored to its former primary parent, then the primary
     child association is restored. This applies recursively for any primary children. No other secondary child associations or
     peer associations are restored for any of the nodes in the primary parent-child hierarchy of restored nodes, regardless of whether the original
     associations were to nodes inside or outside the restored hierarchy.

     *
     * @param nodeId The identifier of a node.
     * @param opts Optional parameters
     * @param opts.permanent If **true** then the node is deleted permanently, without moving to the trashcan.
     Only the owner of the node or an admin can permanently delete the node.
     (default to false)
     * @return Promise<{}>
     */
    deleteNode(nodeId: string, opts?: any): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'permanent': opts['permanent']
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Delete secondary child or children
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Delete secondary child associations between the parent **nodeId** and child nodes for the given association type.

     If the association type is **not** specified, then all secondary child associations, of any type in the direction
     from parent to secondary child, will be deleted. The child will still have a primary parent and may still be
     associated as a secondary child with other secondary parents.

     *
     * @param nodeId The identifier of a parent node.
     * @param childId The identifier of a child node.
     * @param opts Optional parameters
     * @param opts.assocType Only delete associations of this type.
     * @return Promise<{}>
     */
    deleteSecondaryChildAssociation(nodeId: string, childId: string, opts?: any): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(childId, 'childId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'childId': childId
        };

        let queryParams = {
            'assocType': opts['assocType']
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/secondary-children/{childId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Get a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Get information for node **nodeId**.

     You can use the **include** parameter to return additional information.

     *
     * @param nodeId The identifier of a node. You can also use one of these well-known aliases:
     * -my-
     * -shared-
     * -root-

     * @param opts Optional parameters
     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.relativePath A path relative to the **nodeId**. If you set this,
     information is returned on the node resolved by this path.

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    getNode(nodeId: string, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

    /**
     * Get node content
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Gets the content of the node with identifier **nodeId**.

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
    getNodeContent(nodeId: string, opts?: any): Promise<any> {
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
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * List node children
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Gets a list of children of the parent node **nodeId**.

     Minimal information for each child is returned by default.

     You can use the **include** parameter to return additional information.

     The list of child nodes includes primary children and secondary children, if there are any.

     You can use the **include** parameter (include=association) to return child association details
     for each child, including the **assocTyp**e and the **isPrimary** flag.

     The default sort order for the returned list is for folders to be sorted before files, and by ascending name.

     You can override the default using **orderBy** to specify one or more fields to sort by. The default order is always ascending, but
     you can use an optional **ASC** or **DESC** modifier to specify an ascending or descending sort order.

     For example, specifying orderBy=name DESC returns a mixed folder/file list in descending **name** order.

     You can use any of the following fields to order the results:
     * isFolder
     * name
     * mimeType
     * nodeType
     * sizeInBytes
     * modifiedAt
     * createdAt
     * modifiedByUser
     * createdByUser

     *
     * @param nodeId The identifier of a node. You can also use one of these well-known aliases:
     * -my-
     * -shared-
     * -root-

     * @param opts Optional parameters
     * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
     If not supplied then the default value is 0.
     (default to 0)
     * @param opts.maxItems The maximum number of items to return in the list.
     If not supplied then the default value is 100.
     (default to 100)
     * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
     sort the list by one or more fields.

     Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
     above to check if any fields used in this method have a descending default search order.

     To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

     * @param opts.where Optionally filter the list. Here are some examples:

     *   where=(isFolder=true)

     *   where=(isFile=true)

     *   where=(nodeType='my:specialNodeType')

     *   where=(nodeType='my:specialNodeType INCLUDESUBTYPES')

     *   where=(isPrimary=true)

     *   where=(assocType='my:specialAssocType')

     *   where=(isPrimary=false and assocType='my:specialAssocType')

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

     * @param opts.relativePath Return information on children in the folder resolved by this path. The path is relative to **nodeId**.
     * @param opts.includeSource Also include **source** in addition to **entries** with folder information on the parent node – either the specified parent **nodeId**, or as resolved by **relativePath**.
     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeChildAssociationPaging>
     */
    listNodeChildren(nodeId: string, opts?: any): Promise<NodeChildAssociationPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'includeSource': opts['includeSource'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeChildAssociationPaging);
    }

    /**
     * List parents
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Gets a list of parent nodes that are associated with the current child **nodeId**.

     The list includes both the primary parent and any secondary parents.

     *
     * @param nodeId The identifier of a child node. You can also use one of these well-known aliases:
     * -my-
     * -shared-
     * -root-

     * @param opts Optional parameters
     * @param opts.where Optionally filter the list by **assocType** and/or **isPrimary**. Here are some example filters:

     *   where=(assocType='my:specialAssocType')

     *   where=(isPrimary=true)

     *   where=(isPrimary=false and assocType='my:specialAssocType')

     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * aspectNames
     * isLink
     * isFavorite
     * isLocked
     * path
     * properties

     * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
     If not supplied then the default value is 0.
     (default to 0)
     * @param opts.maxItems The maximum number of items to return in the list.
     If not supplied then the default value is 100.
     (default to 100)
     * @param opts.includeSource Also include **source** (in addition to **entries**) with folder information on **nodeId**
     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeAssociationPaging>
     */
    listParents(nodeId: string, opts?: any): Promise<NodeAssociationPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'includeSource': opts['includeSource'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/parents', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeAssociationPaging);
    }

    /**
     * List secondary children
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Gets a list of secondary child nodes that are associated with the current parent **nodeId**, via a secondary child association.

     *
     * @param nodeId The identifier of a parent node. You can also use one of these well-known aliases:
     * -my-
     * -shared-
     * -root-

     * @param opts Optional parameters
     * @param opts.where Optionally filter the list by assocType. Here's an example:

     *   where=(assocType='my:specialAssocType')

     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * aspectNames
     * isLink
     * isFavorite
     * isLocked
     * path
     * properties

     * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
     If not supplied then the default value is 0.
     (default to 0)
     * @param opts.maxItems The maximum number of items to return in the list.
     If not supplied then the default value is 100.
     (default to 100)
     * @param opts.includeSource Also include **source** (in addition to **entries**) with folder information on **nodeId**
     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeChildAssociationPaging>
     */
    listSecondaryChildren(nodeId: string, opts?: any): Promise<NodeChildAssociationPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'includeSource': opts['includeSource'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/secondary-children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeChildAssociationPaging);
    }

    /**
     * List source associations
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Gets a list of source nodes that are associated with the current target **nodeId**.

     *
     * @param nodeId The identifier of a target node.
     * @param opts Optional parameters
     * @param opts.where Optionally filter the list by **assocType**. Here's an example:

     *   where=(assocType='my:specialAssocType')

     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * aspectNames
     * isLink
     * isFavorite
     * isLocked
     * path
     * properties

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeAssociationPaging>
     */
    listSourceAssociations(nodeId: string, opts?: any): Promise<NodeAssociationPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/sources', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeAssociationPaging);
    }

    /**
     * List target associations
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Gets a list of target nodes that are associated with the current source **nodeId**.

     *
     * @param nodeId The identifier of a source node.
     * @param opts Optional parameters
     * @param opts.where Optionally filter the list by **assocType**. Here's an example:

     *   where=(assocType='my:specialAssocType')

     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * aspectNames
     * isLink
     * isFavorite
     * isLocked
     * path
     * properties

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeAssociationPaging>
     */
    listTargetAssociations(nodeId: string, opts?: any): Promise<NodeAssociationPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/targets', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeAssociationPaging);
    }

    /**
     * Lock a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Places a lock on node **nodeId**.

     **Note:** you can only lock files. More specifically, a node can only be locked if it is
     of type cm:content or a subtype of cm:content.

     The lock is owned by the current user, and prevents other users or processes from making updates to the node until the lock is released.

     If the **timeToExpire** is not set or is zero, then the lock never expires.  Otherwise, the **timeToExpire** is the number of seconds before the lock expires.

     When a lock expires, the lock is released.

     If the node is already locked, and the user is the lock owner, then the lock is renewed with the new **timeToExpire**.

     By default, a lock is applied that allows the owner to update or delete the node.
     You can use **type** to change the lock type to one of the following:
     * **ALLOW_OWNER_CHANGES** (default) changes to the node can be made only by the lock owner. This enum is the same value as the deprecated WRITE_LOCK described in org.alfresco.service.cmr.lock.LockType in the Alfresco Public Java API. This is the default value.
     * **FULL** no changes by any user are allowed. This enum is the same value as the deprecated READ_ONLY_LOCK described in org.alfresco.service.cmr.lock.LockType in the Alfresco Public Java API.

     By default, a lock is persisted in the database. You can create a volatile in-memory lock by setting the **lifetime** property to EPHEMERAL.
     You might choose use EPHEMERAL locks, for example, if you are taking frequent short-term locks that you don't need
     to be kept over a restart of the repository. In this case you don't need the
     overhead of writing the locks to the database.

     If a lock on the node cannot be taken, then an error is returned.

     *
     * @param nodeId The identifier of a node.
     * @param nodeBodyLock Lock details.
     * @param opts Optional parameters
     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    lockNode(nodeId: string, nodeBodyLock: NodeBodyLock, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(nodeBodyLock, 'nodeBodyLock');

        opts = opts || {};
        let postBody = nodeBodyLock;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/lock', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

    /**
     * Move a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Move the node **nodeId** to the parent folder node **targetParentId**.

     The **targetParentId** is specified in the in request body.

     The moved node retains its name unless you specify a new **name** in the request body.

     If the source **nodeId** is a folder, then its children are also moved.

     The move will effectively change the primary parent.

     *
     * @param nodeId The identifier of a node.
     * @param nodeBodyMove The targetParentId and, optionally, a new name which should include the file extension.
     * @param opts Optional parameters
     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    moveNode(nodeId: string, nodeBodyMove: NodeBodyMove, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(nodeBodyMove, 'nodeBodyMove');

        opts = opts || {};
        let postBody = nodeBodyMove;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/move', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

    /**
     * Unlock a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Deletes a lock on node **nodeId**.

     The current user must be the owner of the locks or have admin rights, otherwise an error is returned.

     If a lock on the node cannot be released, then an error is returned.

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

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    unlockNode(nodeId: string, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/unlock', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

    /**
     * Update a node
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Updates the node **nodeId**. For example, you can rename a file or folder:
     JSON
     {
       \"name\":\"My new name\"
     }

     You can also set or update one or more properties:
     JSON
     {
       \"properties\":
       {
         \"cm:title\":\"Folder title\"
       }
     }

     **Note:** setting properties of type d:content and d:category are not supported.

     **Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.

     You can add (or remove) *locallySet* permissions, if any, in addition to any inherited permissions.
     You can also optionally disable (or re-enable) inherited permissions via *isInheritanceEnabled* flag:
     JSON
     {
       \"permissions\":
         {
           \"isInheritanceEnabled\": false,
           \"locallySet\":
             [
               {\"authorityId\": \"GROUP_special\", \"name\": \"Read\", \"accessStatus\":\"DENIED\"},
               {\"authorityId\": \"testuser\", \"name\": \"Contributor\", \"accessStatus\":\"ALLOWED\"}
             ]
         }
     }

     **Note:** if you want to add or remove locally set permissions then you must use **GET /nodes/{nodeId}** first to get the complete set of *locallySet* permissions.

     **Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.

     *
     * @param nodeId The identifier of a node.
     * @param nodeBodyUpdate The node information to update.
     * @param opts Optional parameters
     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    updateNode(nodeId: string, nodeBodyUpdate: NodeBodyUpdate, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(nodeBodyUpdate, 'nodeBodyUpdate');

        opts = opts || {};
        let postBody = nodeBodyUpdate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

    /**
     * Update node content
     *
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

     Updates the content of the node with identifier **nodeId**.

     The request body for this endpoint can be any text or binary stream.

     The **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,
     a new minor version is created by default.

     Optionally a new **name** parameter can also be specified that must be unique within the parent folder. If specified and valid then this
     will rename the node. If invalid then an error is returned and the content is not updated.

     **Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.
     This is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for
     tooling to accept an arbitrary file.

     *
     * @param nodeId The identifier of a node.
     * @param contentBodyUpdate The binary content
     * @param opts Optional parameters
     * @param opts.majorVersion If **true**, create a major version.
     Setting this parameter also enables versioning of this node, if it is not already versioned.
     (default to false)
     * @param opts.comment Add a version comment which will appear in version history.
     Setting this parameter also enables versioning of this node, if it is not already versioned.

     * @param opts.name Optional new name. This should include the file extension.
     The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
     The character . must not be used at the end of the name.

     * @param opts.include Returns additional information about the node. The following optional fields can be requested:
     * allowableOperations
     * association
     * isLink
     * isFavorite
     * isLocked
     * path
     * permissions

     * @param opts.fields A list of field names.

     You can use this parameter to restrict the fields
     returned within a response if, for example, you want to save on overall bandwidth.

     The list applies to a returned individual
     entity or entries within a collection.

     If the API method also supports the **include**
     parameter, then the fields specified in the **include**
     parameter are returned in addition to those specified in the **fields** parameter.

     * @return Promise<NodeEntry>
     */
    updateNodeContent(nodeId: string, contentBodyUpdate: any, opts?: any): Promise<NodeEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(contentBodyUpdate, 'contentBodyUpdate');

        opts = opts || {};
        let postBody = contentBodyUpdate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'majorVersion': opts['majorVersion'],
            'comment': opts['comment'],
            'name': opts['name'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/octet-stream'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/content', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, NodeEntry);
    }

}
