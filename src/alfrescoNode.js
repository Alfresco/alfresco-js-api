'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

class AlfrescoNode extends AlfrescoCoreRestApi.NodesApi {

    /**
     * Get Info about file or folder by given nodeId
     * Minimal information for each child is returned by default.
     * You can use the include parameter to return addtional information.
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
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that is resolved if the file is deleted and {error} if rejected.
     */
    deleteNodePermanent(nodeId) {
        return new Promise((resolve, reject) => {
            this.deleteNode(nodeId,  {permanent: true}).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }
}

module.exports = AlfrescoNode;
