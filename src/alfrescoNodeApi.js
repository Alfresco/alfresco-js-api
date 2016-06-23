'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

class AlfrescoNodeApi {

    constructor(alfrescoClient) {
        this.nodeApiInstance = new AlfrescoCoreRestApi.NodesApi(alfrescoClient);
    }

    /**
     * Get Info about file or folder by given nodeId
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that return the file/folder data if resolved and {error} if rejected.
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
     * Delete node by ID, If the nodeId is a folder, then its children are also
     * Deleted nodes move to the trashcan
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that is resolved if the file si deleted and {error} if rejected.
     */
    deleteNode(nodeId) {
        return new Promise((resolve, reject) => {
            this.nodeApiInstance.deleteNode(nodeId, null).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    }
}

module.exports = AlfrescoNodeApi;
