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
        root.AlfrescoCoreLegacyApi.CommentsApi = factory();
    }
}(this, function() {
    'use strict';
    /**
     * Constructs a new CommentsApi.
     * @alias module:api/CommentsApi
     * @class
     */
    var exports = function () {
        this.addComment = function(nodeId, commentBodyCreate, opts) {
            return this.createComment(nodeId, commentBodyCreate, opts);
        };
        this.getComments = function(nodeId, opts) {
            return this.listComments(nodeId, opts);
        };
    };

    return exports;

}));
