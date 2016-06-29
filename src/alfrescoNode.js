'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

class AlfrescoNode {

    constructor(alfrescoClient) {
        this.nodeApiInstance = new AlfrescoCoreRestApi.NodesApi(alfrescoClient);
    }

    /**
     * Get Info about file or folder by given nodeId
     * Minimal information for each child is returned by default.
     * You can use the include parameter to return addtional information.
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise with the file/folder data if resolved and {error} if rejected.
     */
    getNodeInfo(nodeId) {
        return new Promise((resolve, reject) => {
            this.nodeApiInstance.getNode(nodeId, null).then(function (data) {
                resolve(data.entry);
            }, function (error) {
                reject(error);
            });
        });
    }

    /**
     * Get Info about the children of the node with identifier nodeId.
     * Minimal information for each child is returned by default.
     * You can use the include parameter to return addtional information.
     *
     * @param {String} nodeId
     * @param {Object} opts
     *
     * @returns {Promise} A promise with Info about the children of the node if resolved and {error} if rejected.
     */
    getNodeChildrenInfo(nodeId, opts) {
        return new Promise((resolve, reject) => {
            this.nodeApiInstance.getNodeChildren(nodeId, opts).then(function (data) {
                resolve(data.list);
            }, function (error) {
                reject(error);
            });
        });
    }

    /**
     * Delete node by ID, If the nodeId is a folder, then its children are also
     * Deleted nodes move to the trashcan
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that is resolved if the file is deleted and {error} if rejected.
     */
    deleteNode(nodeId, opts) {
        return new Promise((resolve, reject) => {
            this.nodeApiInstance.deleteNode(nodeId, opts).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }
}

module.exports = AlfrescoNode;
