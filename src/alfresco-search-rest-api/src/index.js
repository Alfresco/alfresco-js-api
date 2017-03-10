(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../alfrescoApiClient',
            './api/SearchApi',
            './model/ContentInfo',
            './model/Error',
            './model/ErrorError',
            './model/Node',
            './model/Pagination',
            './model/PathElement',
            './model/PathInfo',
            './model/QueryBody',
            './model/RequestDefaults',
            './model/RequestFacetFields',
            './model/RequestFacetFieldsFacets',
            './model/RequestFacetQueries',
            './model/RequestFacetQueriesInner',
            './model/RequestFields',
            './model/RequestFilterQueries',
            './model/RequestFilterQueriesInner',
            './model/RequestHighlight',
            './model/RequestHighlightFields',
            './model/RequestInclude',
            './model/RequestLimits',
            './model/RequestPagination',
            './model/RequestQuery',
            './model/RequestScope',
            './model/RequestSortDefinition',
            './model/RequestSortDefinitionInner',
            './model/RequestSpellcheck',
            './model/RequestTemplates',
            './model/RequestTemplatesInner',
            './model/ResponseConsistency',
            './model/ResultNode',
            './model/ResultSetContext',
            './model/ResultSetContextBuckets',
            './model/ResultSetContextFacetFields',
            './model/ResultSetContextFacetQueries',
            './model/ResultSetContextSpellcheck',
            './model/ResultSetPaging',
            './model/ResultSetPagingList',
            './model/ResultSetRowEntry',
            './model/SearchEntry',
            './model/SearchEntryHighlight',
            './model/UserInfo'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../alfrescoApiClient'),
            require('./api/SearchApi'),
            require('./model/ContentInfo'),
            require('./model/Error'),
            require('./model/ErrorError'),
            require('./model/Node'),
            require('./model/Pagination'),
            require('./model/PathElement'),
            require('./model/PathInfo'),
            require('./model/QueryBody'),
            require('./model/RequestDefaults'),
            require('./model/RequestFacetFields'),
            require('./model/RequestFacetFieldsFacets'),
            require('./model/RequestFacetQueries'),
            require('./model/RequestFacetQueriesInner'),
            require('./model/RequestFields'),
            require('./model/RequestFilterQueries'),
            require('./model/RequestFilterQueriesInner'),
            require('./model/RequestHighlight'),
            require('./model/RequestHighlightFields'),
            require('./model/RequestInclude'),
            require('./model/RequestLimits'),
            require('./model/RequestPagination'),
            require('./model/RequestQuery'),
            require('./model/RequestScope'),
            require('./model/RequestSortDefinition'),
            require('./model/RequestSortDefinitionInner'),
            require('./model/RequestSpellcheck'),
            require('./model/RequestTemplates'),
            require('./model/RequestTemplatesInner'),
            require('./model/ResponseConsistency'),
            require('./model/ResultNode'),
            require('./model/ResultSetContext'),
            require('./model/ResultSetContextBuckets'),
            require('./model/ResultSetContextFacetFields'),
            require('./model/ResultSetContextFacetQueries'),
            require('./model/ResultSetContextSpellcheck'),
            require('./model/ResultSetPaging'),
            require('./model/ResultSetPagingList'),
            require('./model/ResultSetRowEntry'),
            require('./model/SearchEntry'),
            require('./model/SearchEntryHighlight'),
            require('./model/UserInfo')
        );
    }
}(function (ApiClient,
            SearchApi,
            ContentInfo,
            Error,
            ErrorError,
            Node,
            Pagination,
            PathElement,
            PathInfo,
            QueryBody,
            RequestDefaults,
            RequestFacetFields,
            RequestFacetFieldsFacets,
            RequestFacetQueries,
            RequestFacetQueriesInner,
            RequestFields,
            RequestFilterQueries,
            RequestFilterQueriesInner,
            RequestHighlight,
            RequestHighlightFields,
            RequestInclude,
            RequestLimits,
            RequestPagination,
            RequestQuery,
            RequestScope,
            RequestSortDefinition,
            RequestSortDefinitionInner,
            RequestSpellcheck,
            RequestTemplates,
            RequestTemplatesInner,
            ResponseConsistency,
            ResultNode,
            ResultSetContext,
            ResultSetContextBuckets,
            ResultSetContextFacetFields,
            ResultSetContextFacetQueries,
            ResultSetContextSpellcheck,
            ResultSetPaging,
            ResultSetPagingList,
            ResultSetRowEntry,
            SearchEntry,
            SearchEntryHighlight,
            UserInfo) {
    'use strict';

    /**
     * Search_APIProvides_access_to_the_search_features_of_Alfresco_Content_Services_.<br>
     * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
     * <p>
     * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
     * <pre>
     * var AlfrescoContentServicesRestApi = require('index'); // See note below*.
     * var xxxSvc = new AlfrescoContentServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
     * var yyyModel = new AlfrescoContentServicesRestApi.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
     * and put the application logic within the callback function.</em>
     * </p>
     * <p>
     * A non-AMD browser application (discouraged) might do something like this:
     * <pre>
     * var xxxSvc = new AlfrescoContentServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
     * var yyy = new AlfrescoContentServicesRestApi.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * </p>
     * @module index
     * @version 1
     */
    var exports = {
        /**
         * The ApiClient constructor.
         * @property {module:ApiClient}
         */
        ApiClient: ApiClient,
        /**
         * The ContentInfo model constructor.
         * @property {module:model/ContentInfo}
         */
        ContentInfo: ContentInfo,
        /**
         * The Error model constructor.
         * @property {module:model/Error}
         */
        Error: Error,
        /**
         * The ErrorError model constructor.
         * @property {module:model/ErrorError}
         */
        ErrorError: ErrorError,
        /**
         * The Node model constructor.
         * @property {module:model/Node}
         */
        Node: Node,
        /**
         * The Pagination model constructor.
         * @property {module:model/Pagination}
         */
        Pagination: Pagination,
        /**
         * The PathElement model constructor.
         * @property {module:model/PathElement}
         */
        PathElement: PathElement,
        /**
         * The PathInfo model constructor.
         * @property {module:model/PathInfo}
         */
        PathInfo: PathInfo,
        /**
         * The QueryBody model constructor.
         * @property {module:model/QueryBody}
         */
        QueryBody: QueryBody,
        /**
         * The RequestDefaults model constructor.
         * @property {module:model/RequestDefaults}
         */
        RequestDefaults: RequestDefaults,
        /**
         * The RequestFacetFields model constructor.
         * @property {module:model/RequestFacetFields}
         */
        RequestFacetFields: RequestFacetFields,
        /**
         * The RequestFacetFieldsFacets model constructor.
         * @property {module:model/RequestFacetFieldsFacets}
         */
        RequestFacetFieldsFacets: RequestFacetFieldsFacets,
        /**
         * The RequestFacetQueries model constructor.
         * @property {module:model/RequestFacetQueries}
         */
        RequestFacetQueries: RequestFacetQueries,
        /**
         * The RequestFacetQueriesInner model constructor.
         * @property {module:model/RequestFacetQueriesInner}
         */
        RequestFacetQueriesInner: RequestFacetQueriesInner,
        /**
         * The RequestFields model constructor.
         * @property {module:model/RequestFields}
         */
        RequestFields: RequestFields,
        /**
         * The RequestFilterQueries model constructor.
         * @property {module:model/RequestFilterQueries}
         */
        RequestFilterQueries: RequestFilterQueries,
        /**
         * The RequestFilterQueriesInner model constructor.
         * @property {module:model/RequestFilterQueriesInner}
         */
        RequestFilterQueriesInner: RequestFilterQueriesInner,
        /**
         * The RequestHighlight model constructor.
         * @property {module:model/RequestHighlight}
         */
        RequestHighlight: RequestHighlight,
        /**
         * The RequestHighlightFields model constructor.
         * @property {module:model/RequestHighlightFields}
         */
        RequestHighlightFields: RequestHighlightFields,
        /**
         * The RequestInclude model constructor.
         * @property {module:model/RequestInclude}
         */
        RequestInclude: RequestInclude,
        /**
         * The RequestLimits model constructor.
         * @property {module:model/RequestLimits}
         */
        RequestLimits: RequestLimits,
        /**
         * The RequestPagination model constructor.
         * @property {module:model/RequestPagination}
         */
        RequestPagination: RequestPagination,
        /**
         * The RequestQuery model constructor.
         * @property {module:model/RequestQuery}
         */
        RequestQuery: RequestQuery,
        /**
         * The RequestScope model constructor.
         * @property {module:model/RequestScope}
         */
        RequestScope: RequestScope,
        /**
         * The RequestSortDefinition model constructor.
         * @property {module:model/RequestSortDefinition}
         */
        RequestSortDefinition: RequestSortDefinition,
        /**
         * The RequestSortDefinitionInner model constructor.
         * @property {module:model/RequestSortDefinitionInner}
         */
        RequestSortDefinitionInner: RequestSortDefinitionInner,
        /**
         * The RequestSpellcheck model constructor.
         * @property {module:model/RequestSpellcheck}
         */
        RequestSpellcheck: RequestSpellcheck,
        /**
         * The RequestTemplates model constructor.
         * @property {module:model/RequestTemplates}
         */
        RequestTemplates: RequestTemplates,
        /**
         * The RequestTemplatesInner model constructor.
         * @property {module:model/RequestTemplatesInner}
         */
        RequestTemplatesInner: RequestTemplatesInner,
        /**
         * The ResponseConsistency model constructor.
         * @property {module:model/ResponseConsistency}
         */
        ResponseConsistency: ResponseConsistency,
        /**
         * The ResultNode model constructor.
         * @property {module:model/ResultNode}
         */
        ResultNode: ResultNode,
        /**
         * The ResultSetContext model constructor.
         * @property {module:model/ResultSetContext}
         */
        ResultSetContext: ResultSetContext,
        /**
         * The ResultSetContextBuckets model constructor.
         * @property {module:model/ResultSetContextBuckets}
         */
        ResultSetContextBuckets: ResultSetContextBuckets,
        /**
         * The ResultSetContextFacetFields model constructor.
         * @property {module:model/ResultSetContextFacetFields}
         */
        ResultSetContextFacetFields: ResultSetContextFacetFields,
        /**
         * The ResultSetContextFacetQueries model constructor.
         * @property {module:model/ResultSetContextFacetQueries}
         */
        ResultSetContextFacetQueries: ResultSetContextFacetQueries,
        /**
         * The ResultSetContextSpellcheck model constructor.
         * @property {module:model/ResultSetContextSpellcheck}
         */
        ResultSetContextSpellcheck: ResultSetContextSpellcheck,
        /**
         * The ResultSetPaging model constructor.
         * @property {module:model/ResultSetPaging}
         */
        ResultSetPaging: ResultSetPaging,
        /**
         * The ResultSetPagingList model constructor.
         * @property {module:model/ResultSetPagingList}
         */
        ResultSetPagingList: ResultSetPagingList,
        /**
         * The ResultSetRowEntry model constructor.
         * @property {module:model/ResultSetRowEntry}
         */
        ResultSetRowEntry: ResultSetRowEntry,
        /**
         * The SearchEntry model constructor.
         * @property {module:model/SearchEntry}
         */
        SearchEntry: SearchEntry,
        /**
         * The SearchEntryHighlight model constructor.
         * @property {module:model/SearchEntryHighlight}
         */
        SearchEntryHighlight: SearchEntryHighlight,
        /**
         * The UserInfo model constructor.
         * @property {module:model/UserInfo}
         */
        UserInfo: UserInfo,
        /**
         * The SearchApi service constructor.
         * @property {module:api/SearchApi}
         */
        SearchApi: SearchApi
    };

    return exports;
}));
