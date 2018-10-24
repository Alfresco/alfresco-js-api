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
import { Error } from '../model/Error';
import { AssocTargetBody } from '../model/AssocTargetBody';
import { NodeEntry } from '../model/NodeEntry';
import { NodeBody } from '../model/NodeBody';
import { AssocChildBody } from '../model/AssocChildBody';
import { NodeSharedLinkEntry } from '../model/NodeSharedLinkEntry';
import { SharedLinkBody } from '../model/SharedLinkBody';
import { CopyBody } from '../model/CopyBody';
import { RenditionBody } from '../model/RenditionBody';
import { SiteBody } from '../model/SiteBody';
import { SiteEntry } from '../model/SiteEntry';
import { EmailSharedLinkBody } from '../model/EmailSharedLinkBody';
import { NodeSharedLinkPaging } from '../model/NodeSharedLinkPaging';
import { DeletedNodeEntry } from '../model/DeletedNodeEntry';
import { NodePaging } from '../model/NodePaging';
import { RenditionEntry } from '../model/RenditionEntry';
import { RenditionPaging } from '../model/RenditionPaging';
import { NodeAssocPaging } from '../model/NodeAssocPaging';
import { NodeChildAssocPaging } from '../model/NodeChildAssocPaging';
import { DeletedNodesPaging } from '../model/DeletedNodesPaging';

/**
 * Changes service.
 * @module api/ChangesApi
 * @version 0.1.0
 */

/**
 * Constructs a new ChangesApi.
 * @alias module:api/ChangesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class ChangesApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Add node association
     * Add association, with given association type, between source and target node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {module:model/AssocTargetBody} assocTargetBody The target node id and assoc type.
     */
    addAssoc(sourceId, assocTargetBody) {
        let postBody = assocTargetBody;

        // verify the required parameter 'sourceId' is set
        if (sourceId == undefined || sourceId == null) {
            throw "Missing the required parameter 'sourceId' when calling addAssoc";
        }

        // verify the required parameter 'assocTargetBody' is set
        if (assocTargetBody == undefined || assocTargetBody == null) {
            throw "Missing the required parameter 'assocTargetBody' when calling addAssoc";
        }


        let pathParams = {
            'sourceId': sourceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{sourceId}/targets', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
    addNode(nodeId, nodeBody, opts) {
        opts = opts || {};
        let postBody = nodeBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling addNode";
        }

        // verify the required parameter 'nodeBody' is set
        if (nodeBody == undefined || nodeBody == null) {
            throw "Missing the required parameter 'nodeBody' when calling addNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'autoRename': opts['autoRename'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json, 'multipart/form-data'];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Add secondary child
     * Add secondary child association, with given association type, between parent and child node.\n
     * @param {String} parentId The identifier of a node.
     * @param {module:model/AssocChildBody} assocChildBody The child node id and assoc type.
     */
    addSecondaryChildAssoc(parentId, assocChildBody) {
        let postBody = assocChildBody;

        // verify the required parameter 'parentId' is set
        if (parentId == undefined || parentId == null) {
            throw "Missing the required parameter 'parentId' when calling addSecondaryChildAssoc";
        }

        // verify the required parameter 'assocChildBody' is set
        if (assocChildBody == undefined || assocChildBody == null) {
            throw "Missing the required parameter 'assocChildBody' when calling addSecondaryChildAssoc";
        }


        let pathParams = {
            'parentId': parentId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{parentId}/secondary-children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Create a shared link to a file
     * Create shared link to specfied file identified by **nodeId** in request body.
     * @param {module:model/SharedLinkBody} sharedLinkBody The nodeId to create a shared link for.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    addSharedLink(sharedLinkBody, opts) {
        opts = opts || {};
        let postBody = sharedLinkBody;

        // verify the required parameter 'sharedLinkBody' is set
        if (sharedLinkBody == undefined || sharedLinkBody == null) {
            throw "Missing the required parameter 'sharedLinkBody' when calling addSharedLink";
        }


        let pathParams = {};
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeSharedLinkEntry;

        return this.apiClient.callApi(
            '/shared-links', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
    copyNode(nodeId, copyBody, opts) {
        opts = opts || {};
        let postBody = copyBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling copyNode";
        }

        // verify the required parameter 'copyBody' is set
        if (copyBody == undefined || copyBody == null) {
            throw "Missing the required parameter 'copyBody' when calling copyNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/copy', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
     * Create a site
     * Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user&#39;s site favorites. (default to false)
     * data is of type: {module:model/SiteEntry}
     */
    createSite(siteBody, opts) {
        opts = opts || {};
        let postBody = siteBody;

        // verify the required parameter 'siteBody' is set
        if (siteBody == undefined || siteBody == null) {
            throw "Missing the required parameter 'siteBody' when calling createSite";
        }


        let pathParams = {};
        let queryParams = {
            'skipConfiguration': opts['skipConfiguration'],
            'skipAddToFavorites': opts['skipAddToFavorites']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = SiteEntry;

        return this.apiClient.callApi(
            '/sites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a site
     * Update existing site
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    updateSite(siteId, siteBody, opts) {
        opts = opts || {};
        let postBody = siteBody;

        // verify the required parameter 'siteId' is set
        if (siteId == undefined || siteId == null) {
            throw "Missing the required parameter 'siteId' when calling updateSite";
        }

        // verify the required parameter 'siteBody' is set
        if (siteBody == undefined || siteBody == null) {
            throw "Missing the required parameter 'siteBody' when calling updateSite";
        }

        let pathParams = {
            'siteId': siteId,
            'siteBodyUpdate': siteBody
        };

        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = SiteEntry;

        return this.apiClient.callApi(
            '/sites/{siteId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     */
    deleteNode(nodeId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling deleteNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'permanent': opts['permanent']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{nodeId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Deletes a shared link
     * Deletes the shared link with identifier **sharedId**.
     * @param {String} sharedId The identifier of a shared link to a file.
     */
    deleteSharedLink(sharedId) {
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling deleteSharedLink";
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
        let returnType = null;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Delete a site
     * Deletes the site with **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    deleteSite(siteId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'siteId' is set
        if (siteId == undefined || siteId == null) {
            throw "Missing the required parameter 'siteId' when calling deleteSite";
        }


        let pathParams = {
            'siteId': siteId
        };
        let queryParams = {
            'permanent': opts['permanent']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/sites/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Email shared link
     * Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:model/EmailSharedLinkBody} emailSharedLinkBody The shared link email to send.
     */
    emailSharedLink(sharedId, emailSharedLinkBody) {
        let postBody = emailSharedLinkBody;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling emailSharedLink";
        }

        // verify the required parameter 'emailSharedLinkBody' is set
        if (emailSharedLinkBody == undefined || emailSharedLinkBody == null) {
            throw "Missing the required parameter 'emailSharedLinkBody' when calling emailSharedLink";
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
        let returnType = null;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/email', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Find shared links
     * Find (search for) links that current user has read permission on source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;)
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkPaging}
     */
    findSharedLinks(opts) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'where': opts['where'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeSharedLinkPaging;

        return this.apiClient.callApi(
            '/shared-links', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get a deleted node
     * Returns a specific deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * data is of type: {module:model/DeletedNodeEntry}
     */
    getDeletedNode(nodeId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getDeletedNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = DeletedNodeEntry;

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
    getDeletedNodes(opts) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = DeletedNodesPaging;

        return this.apiClient.callApi(
            '/deleted-nodes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get file content
     * Returns the file content of the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    getFileContent(nodeId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getFileContent";
        }


        let pathParams = {
            'nodeId': nodeId
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
            '/nodes/{nodeId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
    getNode(nodeId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
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
    getNodeChildren(nodeId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling getNodeChildren";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': opts['orderBy'],
            'where': opts['where'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'includeSource': opts['includeSource'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodePaging;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/children', 'GET',
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
     * Get a shared link
     * Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    getSharedLink(sharedId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling getSharedLink";
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

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeSharedLinkEntry;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
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
    getSharedLinkContent(sharedId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sharedId' is set
        if (sharedId == undefined || sharedId == null) {
            throw "Missing the required parameter 'sharedId' when calling getSharedLinkContent";
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

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/shared-links/{sharedId}/content', 'GET',
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
     * List parents
     * Returns a list of parent nodes that point to (ie. are associated with) the current child node. \n\nThis inclues both the primary parent and also secondary parents, if any.\n
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    listParents(childId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'childId' is set
        if (childId == undefined || childId == null) {
            throw "Missing the required parameter 'childId' when calling listParents";
        }


        let pathParams = {
            'childId': childId
        };
        let queryParams = {
            'where': opts['where'],
            'include': opts['include'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeAssocPaging;

        return this.apiClient.callApi(
            '/nodes/{childId}/parents', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
     * data is of type: {module:model/NodeChildAssocPaging}
     */
    listSecondaryChildAssociations(parentId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'parentId' is set
        if (parentId == undefined || parentId == null) {
            throw "Missing the required parameter 'parentId' when calling listSecondaryChildAssociations";
        }


        let pathParams = {
            'parentId': parentId
        };
        let queryParams = {
            'assocType': opts['assocType'],
            'where': opts['where'],
            'include': opts['include'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeChildAssocPaging;

        return this.apiClient.callApi(
            '/nodes/{parentId}/secondary-children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * List node associations
     * Returns a list of source nodes that point to (ie. are associated with) the current target node.\n
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    listSourceNodeAssociations(targetId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'targetId' is set
        if (targetId == undefined || targetId == null) {
            throw "Missing the required parameter 'targetId' when calling listSourceNodeAssociations";
        }


        let pathParams = {
            'targetId': targetId
        };
        let queryParams = {
            'where': opts['where'],
            'include': opts['include'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeAssocPaging;

        return this.apiClient.callApi(
            '/nodes/{targetId}/sources', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * List node associations
     * Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    listTargetAssociations(sourceId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sourceId' is set
        if (sourceId == undefined || sourceId == null) {
            throw "Missing the required parameter 'sourceId' when calling listTargetAssociations";
        }


        let pathParams = {
            'sourceId': sourceId
        };
        let queryParams = {
            'where': opts['where'],
            'include': opts['include'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeAssocPaging;

        return this.apiClient.callApi(
            '/nodes/{sourceId}/targets', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Live search for nodes
     * Returns a list of nodes that match the given search criteria.\n\nThe search term is used to look for nodes that match against name, title, description, full text content and tags.\n\nThe search term\n- must contain a minimum of 3 alphanumeric characters\n- allows \&quot;quoted term\&quot;\n- can optionally use &#39;*&#39; for wildcard matching\n\nBy default, file and folder types will be searched unless a specific type is provided as a query parameter.\n\nBy default, the search will be across the repository unless a specific root node id is provided to start the search from.\n
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.rootNodeId The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n
     * @param {String} opts.nodeType Restrict the returned results to only those of the given node type and it&#39;s sub-types
     * @param {String} opts.include Return additional info, eg. aspectNames, properties, path, isLink
     * @param {String} opts.orderBy The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    liveSearchNodes(term, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'term' is set
        if (term == undefined || term == null) {
            throw "Missing the required parameter 'term' when calling liveSearchNodes";
        }


        let pathParams = {};
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'term': term,
            'rootNodeId': opts['rootNodeId'],
            'nodeType': opts['nodeType'],
            'include': opts['include'],
            'orderBy': opts['orderBy'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodePaging;

        return this.apiClient.callApi(
            '/queries/live-search-nodes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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

    moveNode(nodeId, moveBody, opts) {
        opts = opts || {};
        let postBody = moveBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling moveNode";
        }

        // verify the required parameter 'moveBody' is set
        if (moveBody == undefined || moveBody == null) {
            throw "Missing the required parameter 'moveBody' when calling moveNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/move', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Purge a deleted node
     * Permanently removes the deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     */
    purgeDeletedNode(nodeId) {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling purgeDeletedNode";
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
            '/deleted-nodes/{nodeId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Remove node association(s)
     * Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n
     * @param {String} sourceId The identifier of a node.
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    removeAssoc(sourceId, targetId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'sourceId' is set
        if (sourceId == undefined || sourceId == null) {
            throw "Missing the required parameter 'sourceId' when calling removeAssoc";
        }

        // verify the required parameter 'targetId' is set
        if (targetId == undefined || targetId == null) {
            throw "Missing the required parameter 'targetId' when calling removeAssoc";
        }


        let pathParams = {
            'sourceId': sourceId,
            'targetId': targetId
        };
        let queryParams = {
            'assocType': opts['assocType']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{sourceId}/targets/{targetId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Remove secondary child (or children)
     * Remove secondary child association(s) between parent and child node for given association type. \n\nIf association type is not specified then all secondary child associations between parent and child are removed.\n
     * @param {String} parentId The identifier of a node.
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    removeSecondaryChildAssoc(parentId, childId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'parentId' is set
        if (parentId == undefined || parentId == null) {
            throw "Missing the required parameter 'parentId' when calling removeSecondaryChildAssoc";
        }

        // verify the required parameter 'childId' is set
        if (childId == undefined || childId == null) {
            throw "Missing the required parameter 'childId' when calling removeSecondaryChildAssoc";
        }


        let pathParams = {
            'parentId': parentId,
            'childId': childId
        };
        let queryParams = {
            'assocType': opts['assocType']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{parentId}/secondary-children/{childId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Restore a deleted node
     * Attempts to restore the deleted node identified by **nodeId** to its original location.\n
     * @param {String} nodeId The identifier of a node.
     * data is of type: {module:model/NodeEntry}
     */

    restoreNode(nodeId) {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling restoreNode";
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
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/deleted-nodes/{nodeId}/restore', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update file content
     * Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitary file.\n
     * @param {String} nodeId The identifier of a node.
     * @param {String} contentBody The binary content
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.majorVersion If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n (default to false)
     * @param {String} opts.comment Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    updateFileContent(nodeId, contentBody, opts) {
        opts = opts || {};
        let postBody = contentBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling updateFileContent";
        }

        // verify the required parameter 'contentBody' is set
        if (contentBody == undefined || contentBody == null) {
            throw "Missing the required parameter 'contentBody' when calling updateFileContent";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'majorVersion': opts['majorVersion'],
            'comment': opts['comment'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/octet-stream'];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/content', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
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
    updateNode(nodeId, nodeBody, opts) {
        opts = opts || {};
        let postBody = nodeBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing the required parameter 'nodeId' when calling updateNode";
        }

        // verify the required parameter 'nodeBody' is set
        if (nodeBody == undefined || nodeBody == null) {
            throw "Missing the required parameter 'nodeBody' when calling updateNode";
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}
