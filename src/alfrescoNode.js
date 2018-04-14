'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

// @deprecated 2.3.0
class AlfrescoNode extends AlfrescoCoreRestApi.NodesApi {

    /**
     * Get Info about file or folder by given nodeId
     * Minimal information for each child is returned by default.
     * You can use the include parameter to return additional information.
     *
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases: -my- | -shared- | -root-
     * @param {Object} opts
     *
     * @returns {Promise} A promise with the file/folder data if resolved and {error} if rejected.
     */
    getNodeInfo(nodeId, opts) {
        return new Promise((resolve, reject) => {
            this.getNode(nodeId, opts).then(function (data) {
                resolve(data.entry);
            }, function (error) {
                reject(error);
            });
        });
    }

    /**
     * Delete node by ID, If the nodeId is a folder, then its children are also
     * Deleted permanent will not be possible recover it
     *
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases: -my- | -shared- | -root-
     *
     * @returns {Promise} A promise that is resolved if the file is deleted and {error} if rejected.
     */
    deleteNodePermanent(nodeId) {
        return this.deleteNode(nodeId, {permanent: true});
    }

    /**
     * Create a folder
     *
     * @param {String} name - folder name
     * @param {String} relativePath - The relativePath specifies the folder structure to create relative to the node identified by nodeId.
     * @param {String} nodeId default value root.The identifier of a node where add the folder. You can also use one of these well-known aliases: -my- | -shared- | -root-
     * @param {Object} opts Optional parameters
     *
     * @returns {Promise} A promise that is resolved if the folder is created and {error} if rejected.
     */
    createFolder(name, relativePath, nodeId, opts) {
        nodeId = nodeId || '-root-';
        var nodeBody = {
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
    createFolderAutoRename(name, relativePath, nodeId, opts) {
        var optAutoRename = {autoRename: true};
        opts = opts || {};
        opts = Object.assign(opts, optAutoRename);

        return this.createFolder(name, relativePath, nodeId, opts);
    }
}

module.exports = AlfrescoNode;
