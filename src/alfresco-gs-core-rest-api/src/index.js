(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/ChildAssociationInfo', './model/ContentInfo', './model/Error', './model/ErrorError', './model/FilePlan', './model/FilePlanBodyUpdate', './model/FilePlanComponentBodyUpdate', './model/FilePlanEntry', './model/Pagination', './model/PathElement', './model/PathInfo', './model/RMNodeBodyCreate', './model/RMNodeBodyCreateWithRelativePath', './model/RMSite', './model/RMSiteBodyCreate', './model/RMSiteBodyUpdate', './model/RMSiteEntry', './model/Record', './model/RecordCategory', './model/RecordCategoryChild', './model/RecordCategoryChildEntry', './model/RecordCategoryChildPaging', './model/RecordCategoryChildPagingList', './model/RecordCategoryEntry', './model/RecordCategoryPaging', './model/RecordCategoryPagingList', './model/RecordEntry', './model/RecordFolder', './model/RecordFolderAssociationPaging', './model/RecordFolderAssociationPagingList', './model/RecordFolderChildAssociation', './model/RecordFolderChildAssociationEntry', './model/RecordFolderEntry', './model/RequestBodyFile', './model/RootCategoryBodyCreate', './model/Transfer', './model/TransferAssociationPaging', './model/TransferAssociationPagingList', './model/TransferChild', './model/TransferChildAssociation', './model/TransferChildAssociationEntry', './model/TransferContainer', './model/TransferContainerAssociationPaging', './model/TransferContainerAssociationPagingList', './model/TransferContainerBodyUpdate', './model/TransferContainerChild', './model/TransferContainerChildAssociation', './model/TransferContainerChildAssociationEntry', './model/TransferContainerEntry', './model/TransferEntry', './model/UnfiledContainer', './model/UnfiledContainerAssociationPaging', './model/UnfiledContainerAssociationPagingList', './model/UnfiledContainerChild', './model/UnfiledContainerChildAssociation', './model/UnfiledContainerChildAssociationEntry', './model/UnfiledContainerEntry', './model/UnfiledRecordContainerBodyUpdate', './model/UnfiledRecordFolder', './model/UnfiledRecordFolderAssociationPaging', './model/UnfiledRecordFolderAssociationPagingList', './model/UnfiledRecordFolderBodyUpdate', './model/UnfiledRecordFolderChild', './model/UnfiledRecordFolderChildAssociation', './model/UnfiledRecordFolderChildAssociationEntry', './model/UnfiledRecordFolderEntry', './model/UserInfo', './api/FileplansApi', './api/FilesApi', './api/GssitesApi', './api/RecordcategoriesApi', './api/RecordfoldersApi', './api/RecordsApi', './api/TransfercontainersApi', './api/TransfersApi', './api/UnfiledcontainersApi', './api/UnfiledrecordfoldersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/ChildAssociationInfo'), require('./model/ContentInfo'), require('./model/Error'), require('./model/ErrorError'), require('./model/FilePlan'), require('./model/FilePlanBodyUpdate'), require('./model/FilePlanComponentBodyUpdate'), require('./model/FilePlanEntry'), require('./model/Pagination'), require('./model/PathElement'), require('./model/PathInfo'), require('./model/RMNodeBodyCreate'), require('./model/RMNodeBodyCreateWithRelativePath'), require('./model/RMSite'), require('./model/RMSiteBodyCreate'), require('./model/RMSiteBodyUpdate'), require('./model/RMSiteEntry'), require('./model/Record'), require('./model/RecordCategory'), require('./model/RecordCategoryChild'), require('./model/RecordCategoryChildEntry'), require('./model/RecordCategoryChildPaging'), require('./model/RecordCategoryChildPagingList'), require('./model/RecordCategoryEntry'), require('./model/RecordCategoryPaging'), require('./model/RecordCategoryPagingList'), require('./model/RecordEntry'), require('./model/RecordFolder'), require('./model/RecordFolderAssociationPaging'), require('./model/RecordFolderAssociationPagingList'), require('./model/RecordFolderChildAssociation'), require('./model/RecordFolderChildAssociationEntry'), require('./model/RecordFolderEntry'), require('./model/RequestBodyFile'), require('./model/RootCategoryBodyCreate'), require('./model/Transfer'), require('./model/TransferAssociationPaging'), require('./model/TransferAssociationPagingList'), require('./model/TransferChild'), require('./model/TransferChildAssociation'), require('./model/TransferChildAssociationEntry'), require('./model/TransferContainer'), require('./model/TransferContainerAssociationPaging'), require('./model/TransferContainerAssociationPagingList'), require('./model/TransferContainerBodyUpdate'), require('./model/TransferContainerChild'), require('./model/TransferContainerChildAssociation'), require('./model/TransferContainerChildAssociationEntry'), require('./model/TransferContainerEntry'), require('./model/TransferEntry'), require('./model/UnfiledContainer'), require('./model/UnfiledContainerAssociationPaging'), require('./model/UnfiledContainerAssociationPagingList'), require('./model/UnfiledContainerChild'), require('./model/UnfiledContainerChildAssociation'), require('./model/UnfiledContainerChildAssociationEntry'), require('./model/UnfiledContainerEntry'), require('./model/UnfiledRecordContainerBodyUpdate'), require('./model/UnfiledRecordFolder'), require('./model/UnfiledRecordFolderAssociationPaging'), require('./model/UnfiledRecordFolderAssociationPagingList'), require('./model/UnfiledRecordFolderBodyUpdate'), require('./model/UnfiledRecordFolderChild'), require('./model/UnfiledRecordFolderChildAssociation'), require('./model/UnfiledRecordFolderChildAssociationEntry'), require('./model/UnfiledRecordFolderEntry'), require('./model/UserInfo'), require('./api/FileplansApi'), require('./api/FilesApi'), require('./api/GssitesApi'), require('./api/RecordcategoriesApi'), require('./api/RecordfoldersApi'), require('./api/RecordsApi'), require('./api/TransfercontainersApi'), require('./api/TransfersApi'), require('./api/UnfiledcontainersApi'), require('./api/UnfiledrecordfoldersApi'));
  }
}(function(ApiClient, ChildAssociationInfo, ContentInfo, Error, ErrorError, FilePlan, FilePlanBodyUpdate, FilePlanComponentBodyUpdate, FilePlanEntry, Pagination, PathElement, PathInfo, RMNodeBodyCreate, RMNodeBodyCreateWithRelativePath, RMSite, RMSiteBodyCreate, RMSiteBodyUpdate, RMSiteEntry, Record, RecordCategory, RecordCategoryChild, RecordCategoryChildEntry, RecordCategoryChildPaging, RecordCategoryChildPagingList, RecordCategoryEntry, RecordCategoryPaging, RecordCategoryPagingList, RecordEntry, RecordFolder, RecordFolderAssociationPaging, RecordFolderAssociationPagingList, RecordFolderChildAssociation, RecordFolderChildAssociationEntry, RecordFolderEntry, RequestBodyFile, RootCategoryBodyCreate, Transfer, TransferAssociationPaging, TransferAssociationPagingList, TransferChild, TransferChildAssociation, TransferChildAssociationEntry, TransferContainer, TransferContainerAssociationPaging, TransferContainerAssociationPagingList, TransferContainerBodyUpdate, TransferContainerChild, TransferContainerChildAssociation, TransferContainerChildAssociationEntry, TransferContainerEntry, TransferEntry, UnfiledContainer, UnfiledContainerAssociationPaging, UnfiledContainerAssociationPagingList, UnfiledContainerChild, UnfiledContainerChildAssociation, UnfiledContainerChildAssociationEntry, UnfiledContainerEntry, UnfiledRecordContainerBodyUpdate, UnfiledRecordFolder, UnfiledRecordFolderAssociationPaging, UnfiledRecordFolderAssociationPagingList, UnfiledRecordFolderBodyUpdate, UnfiledRecordFolderChild, UnfiledRecordFolderChildAssociation, UnfiledRecordFolderChildAssociationEntry, UnfiledRecordFolderEntry, UserInfo, FileplansApi, FilesApi, GssitesApi, RecordcategoriesApi, RecordfoldersApi, RecordsApi, TransfercontainersApi, TransfersApi, UnfiledcontainersApi, UnfiledrecordfoldersApi) {
  'use strict';

  /**
   * **GS Core API**\n\nProvides access to the core features of Alfresco Governance Services.\n.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoGovernanceServicesRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoGovernanceServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoGovernanceServicesRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
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
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ChildAssociationInfo model constructor.
     * @property {module:model/ChildAssociationInfo}
     */
    ChildAssociationInfo: ChildAssociationInfo,
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
     * The FilePlan model constructor.
     * @property {module:model/FilePlan}
     */
    FilePlan: FilePlan,
    /**
     * The FilePlanBodyUpdate model constructor.
     * @property {module:model/FilePlanBodyUpdate}
     */
    FilePlanBodyUpdate: FilePlanBodyUpdate,
    /**
     * The FilePlanComponentBodyUpdate model constructor.
     * @property {module:model/FilePlanComponentBodyUpdate}
     */
    FilePlanComponentBodyUpdate: FilePlanComponentBodyUpdate,
    /**
     * The FilePlanEntry model constructor.
     * @property {module:model/FilePlanEntry}
     */
    FilePlanEntry: FilePlanEntry,
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
     * The RMNodeBodyCreate model constructor.
     * @property {module:model/RMNodeBodyCreate}
     */
    RMNodeBodyCreate: RMNodeBodyCreate,
    /**
     * The RMNodeBodyCreateWithRelativePath model constructor.
     * @property {module:model/RMNodeBodyCreateWithRelativePath}
     */
    RMNodeBodyCreateWithRelativePath: RMNodeBodyCreateWithRelativePath,
    /**
     * The RMSite model constructor.
     * @property {module:model/RMSite}
     */
    RMSite: RMSite,
    /**
     * The RMSiteBodyCreate model constructor.
     * @property {module:model/RMSiteBodyCreate}
     */
    RMSiteBodyCreate: RMSiteBodyCreate,
    /**
     * The RMSiteBodyUpdate model constructor.
     * @property {module:model/RMSiteBodyUpdate}
     */
    RMSiteBodyUpdate: RMSiteBodyUpdate,
    /**
     * The RMSiteEntry model constructor.
     * @property {module:model/RMSiteEntry}
     */
    RMSiteEntry: RMSiteEntry,
    /**
     * The Record model constructor.
     * @property {module:model/Record}
     */
    Record: Record,
    /**
     * The RecordCategory model constructor.
     * @property {module:model/RecordCategory}
     */
    RecordCategory: RecordCategory,
    /**
     * The RecordCategoryChild model constructor.
     * @property {module:model/RecordCategoryChild}
     */
    RecordCategoryChild: RecordCategoryChild,
    /**
     * The RecordCategoryChildEntry model constructor.
     * @property {module:model/RecordCategoryChildEntry}
     */
    RecordCategoryChildEntry: RecordCategoryChildEntry,
    /**
     * The RecordCategoryChildPaging model constructor.
     * @property {module:model/RecordCategoryChildPaging}
     */
    RecordCategoryChildPaging: RecordCategoryChildPaging,
    /**
     * The RecordCategoryChildPagingList model constructor.
     * @property {module:model/RecordCategoryChildPagingList}
     */
    RecordCategoryChildPagingList: RecordCategoryChildPagingList,
    /**
     * The RecordCategoryEntry model constructor.
     * @property {module:model/RecordCategoryEntry}
     */
    RecordCategoryEntry: RecordCategoryEntry,
    /**
     * The RecordCategoryPaging model constructor.
     * @property {module:model/RecordCategoryPaging}
     */
    RecordCategoryPaging: RecordCategoryPaging,
    /**
     * The RecordCategoryPagingList model constructor.
     * @property {module:model/RecordCategoryPagingList}
     */
    RecordCategoryPagingList: RecordCategoryPagingList,
    /**
     * The RecordEntry model constructor.
     * @property {module:model/RecordEntry}
     */
    RecordEntry: RecordEntry,
    /**
     * The RecordFolder model constructor.
     * @property {module:model/RecordFolder}
     */
    RecordFolder: RecordFolder,
    /**
     * The RecordFolderAssociationPaging model constructor.
     * @property {module:model/RecordFolderAssociationPaging}
     */
    RecordFolderAssociationPaging: RecordFolderAssociationPaging,
    /**
     * The RecordFolderAssociationPagingList model constructor.
     * @property {module:model/RecordFolderAssociationPagingList}
     */
    RecordFolderAssociationPagingList: RecordFolderAssociationPagingList,
    /**
     * The RecordFolderChildAssociation model constructor.
     * @property {module:model/RecordFolderChildAssociation}
     */
    RecordFolderChildAssociation: RecordFolderChildAssociation,
    /**
     * The RecordFolderChildAssociationEntry model constructor.
     * @property {module:model/RecordFolderChildAssociationEntry}
     */
    RecordFolderChildAssociationEntry: RecordFolderChildAssociationEntry,
    /**
     * The RecordFolderEntry model constructor.
     * @property {module:model/RecordFolderEntry}
     */
    RecordFolderEntry: RecordFolderEntry,
    /**
     * The RequestBodyFile model constructor.
     * @property {module:model/RequestBodyFile}
     */
    RequestBodyFile: RequestBodyFile,
    /**
     * The RootCategoryBodyCreate model constructor.
     * @property {module:model/RootCategoryBodyCreate}
     */
    RootCategoryBodyCreate: RootCategoryBodyCreate,
    /**
     * The Transfer model constructor.
     * @property {module:model/Transfer}
     */
    Transfer: Transfer,
    /**
     * The TransferAssociationPaging model constructor.
     * @property {module:model/TransferAssociationPaging}
     */
    TransferAssociationPaging: TransferAssociationPaging,
    /**
     * The TransferAssociationPagingList model constructor.
     * @property {module:model/TransferAssociationPagingList}
     */
    TransferAssociationPagingList: TransferAssociationPagingList,
    /**
     * The TransferChild model constructor.
     * @property {module:model/TransferChild}
     */
    TransferChild: TransferChild,
    /**
     * The TransferChildAssociation model constructor.
     * @property {module:model/TransferChildAssociation}
     */
    TransferChildAssociation: TransferChildAssociation,
    /**
     * The TransferChildAssociationEntry model constructor.
     * @property {module:model/TransferChildAssociationEntry}
     */
    TransferChildAssociationEntry: TransferChildAssociationEntry,
    /**
     * The TransferContainer model constructor.
     * @property {module:model/TransferContainer}
     */
    TransferContainer: TransferContainer,
    /**
     * The TransferContainerAssociationPaging model constructor.
     * @property {module:model/TransferContainerAssociationPaging}
     */
    TransferContainerAssociationPaging: TransferContainerAssociationPaging,
    /**
     * The TransferContainerAssociationPagingList model constructor.
     * @property {module:model/TransferContainerAssociationPagingList}
     */
    TransferContainerAssociationPagingList: TransferContainerAssociationPagingList,
    /**
     * The TransferContainerBodyUpdate model constructor.
     * @property {module:model/TransferContainerBodyUpdate}
     */
    TransferContainerBodyUpdate: TransferContainerBodyUpdate,
    /**
     * The TransferContainerChild model constructor.
     * @property {module:model/TransferContainerChild}
     */
    TransferContainerChild: TransferContainerChild,
    /**
     * The TransferContainerChildAssociation model constructor.
     * @property {module:model/TransferContainerChildAssociation}
     */
    TransferContainerChildAssociation: TransferContainerChildAssociation,
    /**
     * The TransferContainerChildAssociationEntry model constructor.
     * @property {module:model/TransferContainerChildAssociationEntry}
     */
    TransferContainerChildAssociationEntry: TransferContainerChildAssociationEntry,
    /**
     * The TransferContainerEntry model constructor.
     * @property {module:model/TransferContainerEntry}
     */
    TransferContainerEntry: TransferContainerEntry,
    /**
     * The TransferEntry model constructor.
     * @property {module:model/TransferEntry}
     */
    TransferEntry: TransferEntry,
    /**
     * The UnfiledContainer model constructor.
     * @property {module:model/UnfiledContainer}
     */
    UnfiledContainer: UnfiledContainer,
    /**
     * The UnfiledContainerAssociationPaging model constructor.
     * @property {module:model/UnfiledContainerAssociationPaging}
     */
    UnfiledContainerAssociationPaging: UnfiledContainerAssociationPaging,
    /**
     * The UnfiledContainerAssociationPagingList model constructor.
     * @property {module:model/UnfiledContainerAssociationPagingList}
     */
    UnfiledContainerAssociationPagingList: UnfiledContainerAssociationPagingList,
    /**
     * The UnfiledContainerChild model constructor.
     * @property {module:model/UnfiledContainerChild}
     */
    UnfiledContainerChild: UnfiledContainerChild,
    /**
     * The UnfiledContainerChildAssociation model constructor.
     * @property {module:model/UnfiledContainerChildAssociation}
     */
    UnfiledContainerChildAssociation: UnfiledContainerChildAssociation,
    /**
     * The UnfiledContainerChildAssociationEntry model constructor.
     * @property {module:model/UnfiledContainerChildAssociationEntry}
     */
    UnfiledContainerChildAssociationEntry: UnfiledContainerChildAssociationEntry,
    /**
     * The UnfiledContainerEntry model constructor.
     * @property {module:model/UnfiledContainerEntry}
     */
    UnfiledContainerEntry: UnfiledContainerEntry,
    /**
     * The UnfiledRecordContainerBodyUpdate model constructor.
     * @property {module:model/UnfiledRecordContainerBodyUpdate}
     */
    UnfiledRecordContainerBodyUpdate: UnfiledRecordContainerBodyUpdate,
    /**
     * The UnfiledRecordFolder model constructor.
     * @property {module:model/UnfiledRecordFolder}
     */
    UnfiledRecordFolder: UnfiledRecordFolder,
    /**
     * The UnfiledRecordFolderAssociationPaging model constructor.
     * @property {module:model/UnfiledRecordFolderAssociationPaging}
     */
    UnfiledRecordFolderAssociationPaging: UnfiledRecordFolderAssociationPaging,
    /**
     * The UnfiledRecordFolderAssociationPagingList model constructor.
     * @property {module:model/UnfiledRecordFolderAssociationPagingList}
     */
    UnfiledRecordFolderAssociationPagingList: UnfiledRecordFolderAssociationPagingList,
    /**
     * The UnfiledRecordFolderBodyUpdate model constructor.
     * @property {module:model/UnfiledRecordFolderBodyUpdate}
     */
    UnfiledRecordFolderBodyUpdate: UnfiledRecordFolderBodyUpdate,
    /**
     * The UnfiledRecordFolderChild model constructor.
     * @property {module:model/UnfiledRecordFolderChild}
     */
    UnfiledRecordFolderChild: UnfiledRecordFolderChild,
    /**
     * The UnfiledRecordFolderChildAssociation model constructor.
     * @property {module:model/UnfiledRecordFolderChildAssociation}
     */
    UnfiledRecordFolderChildAssociation: UnfiledRecordFolderChildAssociation,
    /**
     * The UnfiledRecordFolderChildAssociationEntry model constructor.
     * @property {module:model/UnfiledRecordFolderChildAssociationEntry}
     */
    UnfiledRecordFolderChildAssociationEntry: UnfiledRecordFolderChildAssociationEntry,
    /**
     * The UnfiledRecordFolderEntry model constructor.
     * @property {module:model/UnfiledRecordFolderEntry}
     */
    UnfiledRecordFolderEntry: UnfiledRecordFolderEntry,
    /**
     * The UserInfo model constructor.
     * @property {module:model/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The FileplansApi service constructor.
     * @property {module:api/FileplansApi}
     */
    FileplansApi: FileplansApi,
    /**
     * The FilesApi service constructor.
     * @property {module:api/FilesApi}
     */
    FilesApi: FilesApi,
    /**
     * The GssitesApi service constructor.
     * @property {module:api/GssitesApi}
     */
    GssitesApi: GssitesApi,
    /**
     * The RecordcategoriesApi service constructor.
     * @property {module:api/RecordcategoriesApi}
     */
    RecordcategoriesApi: RecordcategoriesApi,
    /**
     * The RecordfoldersApi service constructor.
     * @property {module:api/RecordfoldersApi}
     */
    RecordfoldersApi: RecordfoldersApi,
    /**
     * The RecordsApi service constructor.
     * @property {module:api/RecordsApi}
     */
    RecordsApi: RecordsApi,
    /**
     * The TransfercontainersApi service constructor.
     * @property {module:api/TransfercontainersApi}
     */
    TransfercontainersApi: TransfercontainersApi,
    /**
     * The TransfersApi service constructor.
     * @property {module:api/TransfersApi}
     */
    TransfersApi: TransfersApi,
    /**
     * The UnfiledcontainersApi service constructor.
     * @property {module:api/UnfiledcontainersApi}
     */
    UnfiledcontainersApi: UnfiledcontainersApi,
    /**
     * The UnfiledrecordfoldersApi service constructor.
     * @property {module:api/UnfiledrecordfoldersApi}
     */
    UnfiledrecordfoldersApi: UnfiledrecordfoldersApi
  };

  return exports;
}));
