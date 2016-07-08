'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var Emitter = require('event-emitter');

class AlfrescoUpload extends AlfrescoCoreRestApi.NodesApi {

    constructor() {
        super();
        Emitter.call(this);
    }

    uploadFile(name, fileData, formData, relativePath, nodeId, opts) {
        nodeId = nodeId || '-root-';
        var nodeBody = {
            'name': name,
            'nodeType': 'cm:content',
            'relativePath': relativePath
        };

        formData = formData || {};

        formData.fileData = fileData;
        return this.addNodeUpload(nodeId, nodeBody, opts, formData);
    }

    /**
     * Create a node
     *
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases: -my-\ -shared- -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     */
    addNodeUpload(nodeId, nodeBody, opts, formParams) {
        opts = opts || {};
        var postBody = nodeBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId === undefined || nodeId === null) {
            throw 'Missing the required parameter nodeId when calling addNode';
        }

        // verify the required parameter 'nodeBody' is set
        if (nodeBody === undefined || nodeBody === null) {
            throw 'Missing the required parameter nodeBody when calling addNode';
        }

        var pathParams = {
            'nodeId': nodeId
        };
        var queryParams = {
            'autoRename': opts.autoRename,
            'include': this.apiClient.buildCollectionParam(opts.include, 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts.fields, 'csv')
        };
        var headerParams = {};
        formParams = formParams || {};

        var authNames = ['basicAuth'];
        var contentTypes = ['multipart/form-data'];
        var accepts = ['application/json'];
        var returnType = AlfrescoCoreRestApi.NodeEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}

Emitter(AlfrescoUpload.prototype); // jshint ignore:line
module.exports = AlfrescoUpload;
