(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        if (!root.AlfrescoCoreLegacyApi) {
            root.AlfrescoCoreLegacyApi = {};
        }
        root.AlfrescoCoreLegacyApi.NodesApi = factory();
    }
}(this, function() {
    'use strict';
    /**
     * Constructs a new NodesApi.
     * @alias module:api/NodesApi
     * @class
     */
    var exports = function () {
        this.addNode = function(nodeId, nodeCreateBody, opts) {
            return this.createNode(nodeId, nodeCreateBody, opts);
        };
        this.getNodeChildren = function(nodeId, opts) {
            return this.listNodeChildren(nodeId, opts);
        };
    };

    return exports;

}));
