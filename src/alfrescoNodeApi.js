'use strict';

var AlfrescoCoreRestApi = require('../alfresco-core-rest-api/src/index.js');

class AlfrescoNodeApi {

    constructor(alfrescoClient) {
        this.nodeApiInstance = new AlfrescoCoreRestApi.NodesApi(alfrescoClient);
    }

    /**
     * Get Info about file or folder by given nodeId
     *
     * @param {String} nodeId
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
}

module.exports = AlfrescoNodeApi;
