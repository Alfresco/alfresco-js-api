(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['./api/CommentsApi', './api/NodesApi', './api/RenditionsApi', './api/TagsApi'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('./api/CommentsApi'), require('./api/NodesApi'), require('./api/RenditionsApi'), require('./api/TagsApi'));
    }
}(function(CommentsApi, NodesApi, RenditionsApi, TagsApi) {
    'use strict';

    var exports = {
        /**
         * The CommentsApi service constructor.
         * @property {module:api/CommentsApi}
         */
        CommentsApi: CommentsApi,
        /**
         * The NodesApi service constructor.
         * @property {module:api/NodesApi}
         */
        NodesApi: NodesApi,
        /**
         * The NodesApi service constructor.
         * @property {module:api/NodesApi}
         */
        RenditionsApi: RenditionsApi,
        /**
         * The TagsApi service constructor.
         * @property {module:api/TagsApi}
         */
        TagsApi: TagsApi
    };

    return exports;
}));
