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
        root.AlfrescoCoreLegacyApi.TagsApi = factory();
    }
}(this, function() {
    'use strict';
    /**
     * Constructs a new TagsApi.
     * @alias module:api/TagsApi
     * @class
     */
    var exports = function () {
        this.getTags = function(opts) {
            return this.listTags(opts);
        };
    };

    return exports;

}));
