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
        root.AlfrescoCoreLegacyApi.RenditionsApi = factory();
    }
}(this, function() {
    'use strict';
    /**
     * Constructs a new RenditionsApi.
     * @alias module:api/RenditionsApi
     * @class
     */
    var exports = function () {
        this.getRenditions = function(nodeId, opts) {
            return this.listRenditions(nodeId, opts);
        };
    };

    return exports;

}));
