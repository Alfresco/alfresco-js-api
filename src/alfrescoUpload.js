'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var Emitter = require('event-emitter');

class AlfrescoUpload extends AlfrescoCoreRestApi.NodesApi {

    constructor() {
        super();
        Emitter.call(this);
    }

    uploadFile(fileDefinition, relativePath, rootFolderId, nodeBody, opts) {
        rootFolderId = rootFolderId || '-root-';
        opts = opts || {};

        var nodeBodyRequired = {
            'name': fileDefinition.name,
            'nodeType': 'cm:content',
            'relativePath': relativePath
        };

        nodeBody = Object.assign(nodeBodyRequired, nodeBody);

        var formParam = Object.assign({}, nodeBody.properties || {});
        formParam.filedata = fileDefinition;
        formParam.relativePath = relativePath;
        if (opts.name) {
            formParam.name = opts.name;
        }

        formParam = Object.assign(formParam, opts);

        return this.addNodeUpload(rootFolderId, nodeBody, opts, formParam);
    }

    updateFile(fileDefinition, relativePath, nodeId, nodeBody, opts) {
        opts = opts || {};

        return this.updateNodeContent(nodeId, nodeBody, opts);
    }

    /**
     * Create a node
     *
     * @param {String} rootFolderId The identifier of a node. You can also use one of these well-known aliases: -my-\ -shared- -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     */
    //@deprecated in 2.4.0 use addNode in NodesApi
    addNodeUpload(nodeId, nodeBody, opts, formParams) {
        opts = opts || {};
        var postBody = nodeBody;

        if (!nodeId) {
            throw 'Missing the required parameter nodeId when calling uploadFile';
        }

        if (!nodeBody) {
            throw 'Missing the required parameter nodeBody when calling uploadFile';
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
