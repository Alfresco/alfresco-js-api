
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../alfrescoApiClient', './model/ChildAssociationInfo', './model/ContentInfo', './model/Error', './model/ErrorError', './model/FilePlan', './model/FilePlanBodyUpdate', './model/FilePlanComponentBodyUpdate', './model/FilePlanEntry', './model/Pagination', './model/PathElement', './model/PathInfo', './model/RMNodeBodyCreate', './model/RMNodeBodyCreateWithRelativePath', './model/RMSite', './model/RMSiteBodyCreate', './model/RMSiteBodyUpdate', './model/RMSiteEntry', './model/Record', './model/RecordCategory', './model/RecordCategoryChild', './model/RecordCategoryChildEntry', './model/RecordCategoryChildPaging', './model/RecordCategoryChildPagingList', './model/RecordCategoryEntry', './model/RecordCategoryPaging', './model/RecordCategoryPagingList', './model/RecordEntry', './model/RecordFolder', './model/RecordFolderAssociationPaging', './model/RecordFolderAssociationPagingList', './model/RecordFolderChildAssociationEntry', './model/RecordFolderEntry', './model/RequestBodyFile', './model/RootCategoryBodyCreate', './model/Transfer', './model/TransferAssociationPaging', './model/TransferAssociationPagingList', './model/TransferChild', './model/TransferChildAssociationEntry', './model/TransferContainer', './model/TransferContainerAssociationPaging', './model/TransferContainerAssociationPagingList', './model/TransferContainerBodyUpdate', './model/TransferContainerChild', './model/TransferContainerChildAssociationEntry', './model/TransferContainerEntry', './model/TransferEntry', './model/UnfiledContainer', './model/UnfiledContainerAssociationPaging', './model/UnfiledContainerAssociationPagingList', './model/UnfiledContainerChild', './model/UnfiledContainerChildAssociationEntry', './model/UnfiledContainerEntry', './model/UnfiledRecordContainerBodyUpdate', './model/UnfiledRecordFolder', './model/UnfiledRecordFolderAssociationPaging', './model/UnfiledRecordFolderAssociationPagingList', './model/UnfiledRecordFolderBodyUpdate', './model/UnfiledRecordFolderChild', './model/UnfiledRecordFolderChildAssociationEntry', './model/UnfiledRecordFolderEntry', './model/UserInfo', './model/RecordFolderChildAssociation', './model/TransferChildAssociation', './model/TransferContainerChildAssociation', './model/UnfiledContainerChildAssociation', './model/UnfiledRecordFolderChildAssociation', './api/FilePlansApi', './api/FilesApi', './api/GsSitesApi', './api/RecordCategoriesApi', './api/RecordFoldersApi', './api/RecordsApi', './api/TransferContainersApi', './api/TransfersApi', './api/UnfiledContainersApi', './api/UnfiledRecordFoldersApi'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../alfrescoApiClient'), require('./model/ChildAssociationInfo'), require('./model/ContentInfo'), require('./model/Error'), require('./model/ErrorError'), require('./model/FilePlan'), require('./model/FilePlanBodyUpdate'), require('./model/FilePlanComponentBodyUpdate'), require('./model/FilePlanEntry'), require('./model/Pagination'), require('./model/PathElement'), require('./model/PathInfo'), require('./model/RMNodeBodyCreate'), require('./model/RMNodeBodyCreateWithRelativePath'), require('./model/RMSite'), require('./model/RMSiteBodyCreate'), require('./model/RMSiteBodyUpdate'), require('./model/RMSiteEntry'), require('./model/Record'), require('./model/RecordCategory'), require('./model/RecordCategoryChild'), require('./model/RecordCategoryChildEntry'), require('./model/RecordCategoryChildPaging'), require('./model/RecordCategoryChildPagingList'), require('./model/RecordCategoryEntry'), require('./model/RecordCategoryPaging'), require('./model/RecordCategoryPagingList'), require('./model/RecordEntry'), require('./model/RecordFolder'), require('./model/RecordFolderAssociationPaging'), require('./model/RecordFolderAssociationPagingList'), require('./model/RecordFolderChildAssociationEntry'), require('./model/RecordFolderEntry'), require('./model/RequestBodyFile'), require('./model/RootCategoryBodyCreate'), require('./model/Transfer'), require('./model/TransferAssociationPaging'), require('./model/TransferAssociationPagingList'), require('./model/TransferChild'), require('./model/TransferChildAssociationEntry'), require('./model/TransferContainer'), require('./model/TransferContainerAssociationPaging'), require('./model/TransferContainerAssociationPagingList'), require('./model/TransferContainerBodyUpdate'), require('./model/TransferContainerChild'), require('./model/TransferContainerChildAssociationEntry'), require('./model/TransferContainerEntry'), require('./model/TransferEntry'), require('./model/UnfiledContainer'), require('./model/UnfiledContainerAssociationPaging'), require('./model/UnfiledContainerAssociationPagingList'), require('./model/UnfiledContainerChild'), require('./model/UnfiledContainerChildAssociationEntry'), require('./model/UnfiledContainerEntry'), require('./model/UnfiledRecordContainerBodyUpdate'), require('./model/UnfiledRecordFolder'), require('./model/UnfiledRecordFolderAssociationPaging'), require('./model/UnfiledRecordFolderAssociationPagingList'), require('./model/UnfiledRecordFolderBodyUpdate'), require('./model/UnfiledRecordFolderChild'), require('./model/UnfiledRecordFolderChildAssociationEntry'), require('./model/UnfiledRecordFolderEntry'), require('./model/UserInfo'), require('./model/RecordFolderChildAssociation'), require('./model/TransferChildAssociation'), require('./model/TransferContainerChildAssociation'), require('./model/UnfiledContainerChildAssociation'), require('./model/UnfiledRecordFolderChildAssociation'), require('./api/FilePlansApi'), require('./api/FilesApi'), require('./api/GsSitesApi'), require('./api/RecordCategoriesApi'), require('./api/RecordFoldersApi'), require('./api/RecordsApi'), require('./api/TransferContainersApi'), require('./api/TransfersApi'), require('./api/UnfiledContainersApi'), require('./api/UnfiledRecordFoldersApi'));
    }
}(function (ApiClient, ChildAssociationInfo, ContentInfo, Error, ErrorError, FilePlan, FilePlanBodyUpdate, FilePlanComponentBodyUpdate, FilePlanEntry, Pagination, PathElement, PathInfo, RMNodeBodyCreate, RMNodeBodyCreateWithRelativePath, RMSite, RMSiteBodyCreate, RMSiteBodyUpdate, RMSiteEntry, Record, RecordCategory, RecordCategoryChild, RecordCategoryChildEntry, RecordCategoryChildPaging, RecordCategoryChildPagingList, RecordCategoryEntry, RecordCategoryPaging, RecordCategoryPagingList, RecordEntry, RecordFolder, RecordFolderAssociationPaging, RecordFolderAssociationPagingList, RecordFolderChildAssociationEntry, RecordFolderEntry, RequestBodyFile, RootCategoryBodyCreate, Transfer, TransferAssociationPaging, TransferAssociationPagingList, TransferChild, TransferChildAssociationEntry, TransferContainer, TransferContainerAssociationPaging, TransferContainerAssociationPagingList, TransferContainerBodyUpdate, TransferContainerChild, TransferContainerChildAssociationEntry, TransferContainerEntry, TransferEntry, UnfiledContainer, UnfiledContainerAssociationPaging, UnfiledContainerAssociationPagingList, UnfiledContainerChild, UnfiledContainerChildAssociationEntry, UnfiledContainerEntry, UnfiledRecordContainerBodyUpdate, UnfiledRecordFolder, UnfiledRecordFolderAssociationPaging, UnfiledRecordFolderAssociationPagingList, UnfiledRecordFolderBodyUpdate, UnfiledRecordFolderChild, UnfiledRecordFolderChildAssociationEntry, UnfiledRecordFolderEntry, UserInfo, RecordFolderChildAssociation, TransferChildAssociation, TransferContainerChildAssociation, UnfiledContainerChildAssociation, UnfiledRecordFolderChildAssociation, FilePlansApi, FilesApi, GsSitesApi, RecordCategoriesApi, RecordFoldersApi, RecordsApi, TransferContainersApi, TransfersApi, UnfiledContainersApi, UnfiledRecordFoldersApi) {
    'use strict';

    /**
     * GS_Core_APIProvides_access_to_the_core_features_of_Alfresco_Governance_Services_.<br>
     * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
     * <p>
     * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
     * <pre>
     * var AlfrescoGovernanceServicesRestApi = require('index'); // See note below*.
     * var xxxSvc = new AlfrescoGovernanceServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
     * var yyyModel = new AlfrescoGovernanceServicesRestApi.Yyy(); // Construct a model instance.
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
     * var xxxSvc = new AlfrescoGovernanceServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
     * var yyy = new AlfrescoGovernanceServicesRestApi.Yyy(); // Construct a model instance.
     * yyyModel.someProperty = 'someValue';
     * ...
     * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
     * ...
     * </pre>
     * </p>
     * @module index
     * @version 0.1.0
     */
    var exports = {
        /**
         * The ApiClient constructor.
         * @property {:ApiClient}
         */
        ApiClient: ApiClient,
        /**
         * The ChildAssociationInfo model constructor.
         * @property {ChildAssociationInfo}
         */
        ChildAssociationInfo: ChildAssociationInfo,
        /**
         * The ContentInfo model constructor.
         * @property {ContentInfo}
         */
        ContentInfo: ContentInfo,
        /**
         * The Error model constructor.
         * @property {Error}
         */
        Error: Error,
        /**
         * The ErrorError model constructor.
         * @property {ErrorError}
         */
        ErrorError: ErrorError,
        /**
         * The FilePlan model constructor.
         * @property {FilePlan}
         */
        FilePlan: FilePlan,
        /**
         * The FilePlanBodyUpdate model constructor.
         * @property {FilePlanBodyUpdate}
         */
        FilePlanBodyUpdate: FilePlanBodyUpdate,
        /**
         * The FilePlanComponentBodyUpdate model constructor.
         * @property {FilePlanComponentBodyUpdate}
         */
        FilePlanComponentBodyUpdate: FilePlanComponentBodyUpdate,
        /**
         * The FilePlanEntry model constructor.
         * @property {FilePlanEntry}
         */
        FilePlanEntry: FilePlanEntry,
        /**
         * The Pagination model constructor.
         * @property {Pagination}
         */
        Pagination: Pagination,
        /**
         * The PathElement model constructor.
         * @property {PathElement}
         */
        PathElement: PathElement,
        /**
         * The PathInfo model constructor.
         * @property {PathInfo}
         */
        PathInfo: PathInfo,
        /**
         * The RMNodeBodyCreate model constructor.
         * @property {RMNodeBodyCreate}
         */
        RMNodeBodyCreate: RMNodeBodyCreate,
        /**
         * The RMNodeBodyCreateWithRelativePath model constructor.
         * @property {RMNodeBodyCreateWithRelativePath}
         */
        RMNodeBodyCreateWithRelativePath: RMNodeBodyCreateWithRelativePath,
        /**
         * The RMSite model constructor.
         * @property {RMSite}
         */
        RMSite: RMSite,
        /**
         * The RMSiteBodyCreate model constructor.
         * @property {RMSiteBodyCreate}
         */
        RMSiteBodyCreate: RMSiteBodyCreate,
        /**
         * The RMSiteBodyUpdate model constructor.
         * @property {RMSiteBodyUpdate}
         */
        RMSiteBodyUpdate: RMSiteBodyUpdate,
        /**
         * The RMSiteEntry model constructor.
         * @property {RMSiteEntry}
         */
        RMSiteEntry: RMSiteEntry,
        /**
         * The Record model constructor.
         * @property {Record}
         */
        Record: Record,
        /**
         * The RecordCategory model constructor.
         * @property {RecordCategory}
         */
        RecordCategory: RecordCategory,
        /**
         * The RecordCategoryChild model constructor.
         * @property {RecordCategoryChild}
         */
        RecordCategoryChild: RecordCategoryChild,
        /**
         * The RecordCategoryChildEntry model constructor.
         * @property {RecordCategoryChildEntry}
         */
        RecordCategoryChildEntry: RecordCategoryChildEntry,
        /**
         * The RecordCategoryChildPaging model constructor.
         * @property {RecordCategoryChildPaging}
         */
        RecordCategoryChildPaging: RecordCategoryChildPaging,
        /**
         * The RecordCategoryChildPagingList model constructor.
         * @property {RecordCategoryChildPagingList}
         */
        RecordCategoryChildPagingList: RecordCategoryChildPagingList,
        /**
         * The RecordCategoryEntry model constructor.
         * @property {RecordCategoryEntry}
         */
        RecordCategoryEntry: RecordCategoryEntry,
        /**
         * The RecordCategoryPaging model constructor.
         * @property {RecordCategoryPaging}
         */
        RecordCategoryPaging: RecordCategoryPaging,
        /**
         * The RecordCategoryPagingList model constructor.
         * @property {RecordCategoryPagingList}
         */
        RecordCategoryPagingList: RecordCategoryPagingList,
        /**
         * The RecordEntry model constructor.
         * @property {RecordEntry}
         */
        RecordEntry: RecordEntry,
        /**
         * The RecordFolder model constructor.
         * @property {RecordFolder}
         */
        RecordFolder: RecordFolder,
        /**
         * The RecordFolderAssociationPaging model constructor.
         * @property {RecordFolderAssociationPaging}
         */
        RecordFolderAssociationPaging: RecordFolderAssociationPaging,
        /**
         * The RecordFolderAssociationPagingList model constructor.
         * @property {RecordFolderAssociationPagingList}
         */
        RecordFolderAssociationPagingList: RecordFolderAssociationPagingList,
        /**
         * The RecordFolderChildAssociationEntry model constructor.
         * @property {RecordFolderChildAssociationEntry}
         */
        RecordFolderChildAssociationEntry: RecordFolderChildAssociationEntry,
        /**
         * The RecordFolderEntry model constructor.
         * @property {RecordFolderEntry}
         */
        RecordFolderEntry: RecordFolderEntry,
        /**
         * The RequestBodyFile model constructor.
         * @property {RequestBodyFile}
         */
        RequestBodyFile: RequestBodyFile,
        /**
         * The RootCategoryBodyCreate model constructor.
         * @property {RootCategoryBodyCreate}
         */
        RootCategoryBodyCreate: RootCategoryBodyCreate,
        /**
         * The Transfer model constructor.
         * @property {Transfer}
         */
        Transfer: Transfer,
        /**
         * The TransferAssociationPaging model constructor.
         * @property {TransferAssociationPaging}
         */
        TransferAssociationPaging: TransferAssociationPaging,
        /**
         * The TransferAssociationPagingList model constructor.
         * @property {TransferAssociationPagingList}
         */
        TransferAssociationPagingList: TransferAssociationPagingList,
        /**
         * The TransferChild model constructor.
         * @property {TransferChild}
         */
        TransferChild: TransferChild,
        /**
         * The TransferChildAssociationEntry model constructor.
         * @property {TransferChildAssociationEntry}
         */
        TransferChildAssociationEntry: TransferChildAssociationEntry,
        /**
         * The TransferContainer model constructor.
         * @property {TransferContainer}
         */
        TransferContainer: TransferContainer,
        /**
         * The TransferContainerAssociationPaging model constructor.
         * @property {TransferContainerAssociationPaging}
         */
        TransferContainerAssociationPaging: TransferContainerAssociationPaging,
        /**
         * The TransferContainerAssociationPagingList model constructor.
         * @property {TransferContainerAssociationPagingList}
         */
        TransferContainerAssociationPagingList: TransferContainerAssociationPagingList,
        /**
         * The TransferContainerBodyUpdate model constructor.
         * @property {TransferContainerBodyUpdate}
         */
        TransferContainerBodyUpdate: TransferContainerBodyUpdate,
        /**
         * The TransferContainerChild model constructor.
         * @property {TransferContainerChild}
         */
        TransferContainerChild: TransferContainerChild,
        /**
         * The TransferContainerChildAssociationEntry model constructor.
         * @property {TransferContainerChildAssociationEntry}
         */
        TransferContainerChildAssociationEntry: TransferContainerChildAssociationEntry,
        /**
         * The TransferContainerEntry model constructor.
         * @property {TransferContainerEntry}
         */
        TransferContainerEntry: TransferContainerEntry,
        /**
         * The TransferEntry model constructor.
         * @property {TransferEntry}
         */
        TransferEntry: TransferEntry,
        /**
         * The UnfiledContainer model constructor.
         * @property {UnfiledContainer}
         */
        UnfiledContainer: UnfiledContainer,
        /**
         * The UnfiledContainerAssociationPaging model constructor.
         * @property {UnfiledContainerAssociationPaging}
         */
        UnfiledContainerAssociationPaging: UnfiledContainerAssociationPaging,
        /**
         * The UnfiledContainerAssociationPagingList model constructor.
         * @property {UnfiledContainerAssociationPagingList}
         */
        UnfiledContainerAssociationPagingList: UnfiledContainerAssociationPagingList,
        /**
         * The UnfiledContainerChild model constructor.
         * @property {UnfiledContainerChild}
         */
        UnfiledContainerChild: UnfiledContainerChild,
        /**
         * The UnfiledContainerChildAssociationEntry model constructor.
         * @property {UnfiledContainerChildAssociationEntry}
         */
        UnfiledContainerChildAssociationEntry: UnfiledContainerChildAssociationEntry,
        /**
         * The UnfiledContainerEntry model constructor.
         * @property {UnfiledContainerEntry}
         */
        UnfiledContainerEntry: UnfiledContainerEntry,
        /**
         * The UnfiledRecordContainerBodyUpdate model constructor.
         * @property {UnfiledRecordContainerBodyUpdate}
         */
        UnfiledRecordContainerBodyUpdate: UnfiledRecordContainerBodyUpdate,
        /**
         * The UnfiledRecordFolder model constructor.
         * @property {UnfiledRecordFolder}
         */
        UnfiledRecordFolder: UnfiledRecordFolder,
        /**
         * The UnfiledRecordFolderAssociationPaging model constructor.
         * @property {UnfiledRecordFolderAssociationPaging}
         */
        UnfiledRecordFolderAssociationPaging: UnfiledRecordFolderAssociationPaging,
        /**
         * The UnfiledRecordFolderAssociationPagingList model constructor.
         * @property {UnfiledRecordFolderAssociationPagingList}
         */
        UnfiledRecordFolderAssociationPagingList: UnfiledRecordFolderAssociationPagingList,
        /**
         * The UnfiledRecordFolderBodyUpdate model constructor.
         * @property {UnfiledRecordFolderBodyUpdate}
         */
        UnfiledRecordFolderBodyUpdate: UnfiledRecordFolderBodyUpdate,
        /**
         * The UnfiledRecordFolderChild model constructor.
         * @property {UnfiledRecordFolderChild}
         */
        UnfiledRecordFolderChild: UnfiledRecordFolderChild,
        /**
         * The UnfiledRecordFolderChildAssociationEntry model constructor.
         * @property {UnfiledRecordFolderChildAssociationEntry}
         */
        UnfiledRecordFolderChildAssociationEntry: UnfiledRecordFolderChildAssociationEntry,
        /**
         * The UnfiledRecordFolderEntry model constructor.
         * @property {UnfiledRecordFolderEntry}
         */
        UnfiledRecordFolderEntry: UnfiledRecordFolderEntry,
        /**
         * The UserInfo model constructor.
         * @property {UserInfo}
         */
        UserInfo: UserInfo,
        /**
         * The RecordFolderChildAssociation model constructor.
         * @property {RecordFolderChildAssociation}
         */
        RecordFolderChildAssociation: RecordFolderChildAssociation,
        /**
         * The TransferChildAssociation model constructor.
         * @property {TransferChildAssociation}
         */
        TransferChildAssociation: TransferChildAssociation,
        /**
         * The TransferContainerChildAssociation model constructor.
         * @property {TransferContainerChildAssociation}
         */
        TransferContainerChildAssociation: TransferContainerChildAssociation,
        /**
         * The UnfiledContainerChildAssociation model constructor.
         * @property {UnfiledContainerChildAssociation}
         */
        UnfiledContainerChildAssociation: UnfiledContainerChildAssociation,
        /**
         * The UnfiledRecordFolderChildAssociation model constructor.
         * @property {UnfiledRecordFolderChildAssociation}
         */
        UnfiledRecordFolderChildAssociation: UnfiledRecordFolderChildAssociation,
        /**
         * The FilePlansApi service constructor.
         * @property {FilePlansApi}
         */
        FilePlansApi: FilePlansApi,
        /**
         * The FilesApi service constructor.
         * @property {FilesApi}
         */
        FilesApi: FilesApi,
        /**
         * The GsSitesApi service constructor.
         * @property {GsSitesApi}
         */
        GsSitesApi: GsSitesApi,
        /**
         * The RecordCategoriesApi service constructor.
         * @property {RecordCategoriesApi}
         */
        RecordCategoriesApi: RecordCategoriesApi,
        /**
         * The RecordFoldersApi service constructor.
         * @property {RecordFoldersApi}
         */
        RecordFoldersApi: RecordFoldersApi,
        /**
         * The RecordsApi service constructor.
         * @property {RecordsApi}
         */
        RecordsApi: RecordsApi,
        /**
         * The TransferContainersApi service constructor.
         * @property {TransferContainersApi}
         */
        TransferContainersApi: TransferContainersApi,
        /**
         * The TransfersApi service constructor.
         * @property {TransfersApi}
         */
        TransfersApi: TransfersApi,
        /**
         * The UnfiledContainersApi service constructor.
         * @property {UnfiledContainersApi}
         */
        UnfiledContainersApi: UnfiledContainersApi,
        /**
         * The UnfiledRecordFoldersApi service constructor.
         * @property {UnfiledRecordFoldersApi}
         */
        UnfiledRecordFoldersApi: UnfiledRecordFoldersApi
    };

    return exports;
}));
