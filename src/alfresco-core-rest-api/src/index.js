(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Activity', './model/ActivityActivitySummary', './model/ActivityEntry', './model/ActivityPaging', './model/ActivityPagingList', './model/AssocChildBody', './model/AssocInfo', './model/AssocTargetBody', './model/ChildAssocInfo', './model/ChildAssociationInfo', './model/Comment', './model/CommentBody', './model/CommentBody1', './model/CommentEntry', './model/CommentPaging', './model/CommentPagingList', './model/Company', './model/ContentInfo', './model/CopyBody', './model/DeletedNode', './model/DeletedNodeEntry', './model/DeletedNodeMinimal', './model/DeletedNodeMinimalEntry', './model/DeletedNodesPaging', './model/DeletedNodesPagingList', './model/EmailSharedLinkBody', './model/Error', './model/ErrorError', './model/Favorite', './model/FavoriteBody', './model/FavoriteEntry', './model/FavoritePaging', './model/FavoritePagingList', './model/FavoriteSiteBody', './model/InlineResponse201', './model/InlineResponse201Entry', './model/MoveBody', './model/NetworkQuota', './model/NodeAssocMinimal', './model/NodeAssociationPaging', './model/NodeAssociationPagingList',  './model/NodeBodyLock',  './model/NodeChildAssociation',  './model/NodeChildAssociationEntry',  './model/NodeChildAssociationPaging',  './model/NodeChildAssociationPagingList', './model/Node', './model/NodeAssociation', './model/NodeAssociationEntry', './model/NodeAssocMinimalEntry', './model/NodeAssocPaging', './model/NodeAssocPagingList', './model/NodeBody', './model/NodeChildAssocMinimal', './model/NodeChildAssocMinimalEntry', './model/NodeChildAssocPaging', './model/NodeChildAssocPagingList', './model/NodeEntry', './model/NodeFull', './model/NodeMinimal', './model/NodeMinimalEntry', './model/NodePaging', './model/NodePagingList', './model/NodeSharedLink', './model/NodeSharedLinkEntry', './model/NodeSharedLinkPaging', './model/NodeSharedLinkPagingList', './model/NodesnodeIdchildrenContent', './model/Pagination', './model/PathElement', './model/PathInfo', './model/PermissionElement', './model/PermissionsInfo', './model/PersonPaging', './model/PersonPagingList', './model/Person', './model/PersonBodyCreate', './model/PersonEntry', './model/PersonNetwork', './model/PersonNetworkEntry', './model/PersonNetworkPaging', './model/PersonNetworkPagingList', './model/Preference', './model/PreferenceEntry', './model/PreferencePaging', './model/PreferencePagingList', './model/Rating', './model/RatingAggregate', './model/RatingBody', './model/RatingEntry', './model/RatingPaging', './model/RatingPagingList', './model/Rendition', './model/RenditionBody', './model/RenditionEntry', './model/RenditionPaging', './model/RenditionPagingList', './model/SharedLinkBody', './model/Site', './model/SiteBody', './model/SiteContainer', './model/SiteContainerEntry', './model/SiteContainerPaging', './model/SiteEntry', './model/SiteMember', './model/SiteMemberBody', './model/SiteMemberEntry', './model/SiteMemberPaging', './model/SiteMemberRoleBody', './model/SiteMembershipBody', './model/SiteMembershipBody1', './model/SiteMembershipRequest', './model/SiteMembershipRequestEntry', './model/SiteMembershipRequestPaging', './model/SiteMembershipRequestPagingList', './model/SitePaging', './model/SitePagingList', './model/Tag', './model/TagBody', './model/TagBody1', './model/TagEntry', './model/TagPaging', './model/TagPagingList', './model/UserInfo', './model/AssociationInfo','./api/AssociationsApi', './api/ChangesApi', './api/ChildAssociationsApi', './api/CommentsApi', './api/FavoritesApi', './api/NetworksApi', './api/NodesApi', './api/PeopleApi', './api/RatingsApi', './api/RenditionsApi', './api/QueriesApi', './api/SharedlinksApi', './api/SitesApi', './api/TagsApi', './api/WebscriptApi', './api/DownloadsApi', './api/VersionsApi', './api/ClassesApi',  './api/GroupsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Activity'), require('./model/ActivityActivitySummary'), require('./model/ActivityEntry'), require('./model/ActivityPaging'), require('./model/ActivityPagingList'), require('./model/AssocChildBody'), require('./model/AssocInfo'), require('./model/AssocTargetBody'), require('./model/ChildAssocInfo'), require('./model/ChildAssociationInfo'), require('./model/Comment'), require('./model/CommentBody'), require('./model/CommentBody1'), require('./model/CommentEntry'), require('./model/CommentPaging'), require('./model/CommentPagingList'), require('./model/Company'), require('./model/ContentInfo'), require('./model/CopyBody'), require('./model/DeletedNode'), require('./model/DeletedNodeEntry'), require('./model/DeletedNodeMinimal'), require('./model/DeletedNodeMinimalEntry'), require('./model/DeletedNodesPaging'), require('./model/DeletedNodesPagingList'), require('./model/EmailSharedLinkBody'), require('./model/Error'), require('./model/ErrorError'), require('./model/Favorite'), require('./model/FavoriteBody'), require('./model/FavoriteEntry'), require('./model/FavoritePaging'), require('./model/FavoritePagingList'), require('./model/FavoriteSiteBody'), require('./model/InlineResponse201'), require('./model/InlineResponse201Entry'), require('./model/MoveBody'), require('./model/NetworkQuota'), require('./model/NodeAssocMinimal'), require('./model/NodeAssociationPaging'), require('./model/NodeAssociationPagingList'),  require('./model/NodeBodyLock'), require('./model/NodeChildAssociation'),  require('./model/NodeChildAssociationEntry'), require('./model/NodeChildAssociationPaging'),  require('./model/NodeChildAssociationPagingList'),  require('./model/Node') ,require('./model/NodeAssociation'), require('./model/NodeAssociationEntry'), require('./model/NodeAssocMinimalEntry'), require('./model/NodeAssocPaging'), require('./model/NodeAssocPagingList'), require('./model/NodeBody'), require('./model/NodeChildAssocMinimal'), require('./model/NodeChildAssocMinimalEntry'), require('./model/NodeChildAssocPaging'), require('./model/NodeChildAssocPagingList'), require('./model/NodeEntry'), require('./model/NodeFull'), require('./model/NodeMinimal'), require('./model/NodeMinimalEntry'), require('./model/NodePaging'), require('./model/NodePagingList'), require('./model/NodeSharedLink'), require('./model/NodeSharedLinkEntry'), require('./model/NodeSharedLinkPaging'), require('./model/NodeSharedLinkPagingList'), require('./model/NodesnodeIdchildrenContent'), require('./model/Pagination'), require('./model/PathElement'), require('./model/PathInfo'), require('./model/PermissionElement'), require('./model/PermissionsInfo'), require('./model/PersonPaging'), require('./model/PersonPagingList'), require('./model/Person'), require('./model/PersonBodyCreate'), require('./model/PersonEntry'), require('./model/PersonNetwork'), require('./model/PersonNetworkEntry'), require('./model/PersonNetworkPaging'), require('./model/PersonNetworkPagingList'), require('./model/Preference'), require('./model/PreferenceEntry'), require('./model/PreferencePaging'), require('./model/PreferencePagingList'), require('./model/Rating'), require('./model/RatingAggregate'), require('./model/RatingBody'), require('./model/RatingEntry'), require('./model/RatingPaging'), require('./model/RatingPagingList'), require('./model/Rendition'), require('./model/RenditionBody'), require('./model/RenditionEntry'), require('./model/RenditionPaging'), require('./model/RenditionPagingList'), require('./model/SharedLinkBody'), require('./model/Site'), require('./model/SiteBody'), require('./model/SiteContainer'), require('./model/SiteContainerEntry'), require('./model/SiteContainerPaging'), require('./model/SiteEntry'), require('./model/SiteMember'), require('./model/SiteMemberBody'), require('./model/SiteMemberEntry'), require('./model/SiteMemberPaging'), require('./model/SiteMemberRoleBody'), require('./model/SiteMembershipBody'), require('./model/SiteMembershipBody1'), require('./model/SiteMembershipRequest'), require('./model/SiteMembershipRequestEntry'), require('./model/SiteMembershipRequestPaging'), require('./model/SiteMembershipRequestPagingList'), require('./model/SitePaging'), require('./model/SitePagingList'), require('./model/Tag'), require('./model/TagBody'), require('./model/TagBody1'), require('./model/TagEntry'), require('./model/TagPaging'), require('./model/TagPagingList'), require('./model/UserInfo'), require('./model/AssociationInfo'), require('./api/AssociationsApi'), require('./api/ChangesApi'), require('./api/ChildAssociationsApi'), require('./api/CommentsApi'), require('./api/FavoritesApi'), require('./api/NetworksApi'), require('./api/NodesApi'), require('./api/PeopleApi'), require('./api/RatingsApi'), require('./api/RenditionsApi'), require('./api/QueriesApi'), require('./api/SharedlinksApi'), require('./api/SitesApi'), require('./api/TagsApi'), require('./api/WebscriptApi'), require('./api/DownloadsApi'), require('./api/VersionsApi'), require('./api/ClassesApi'), require('./api/GroupsApi'));
  }
}(function(ApiClient, Activity, ActivityActivitySummary, ActivityEntry, ActivityPaging, ActivityPagingList, AssocChildBody, AssocInfo, AssocTargetBody, ChildAssocInfo, ChildAssociationInfo, Comment, CommentBody, CommentBody1, CommentEntry, CommentPaging, CommentPagingList, Company, ContentInfo, CopyBody, DeletedNode, DeletedNodeEntry, DeletedNodeMinimal, DeletedNodeMinimalEntry, DeletedNodesPaging, DeletedNodesPagingList, EmailSharedLinkBody, Error, ErrorError, Favorite, FavoriteBody, FavoriteEntry, FavoritePaging, FavoritePagingList, FavoriteSiteBody, InlineResponse201, InlineResponse201Entry, MoveBody, NetworkQuota, NodeAssocMinimal, NodeAssociationPaging, NodeAssociationPagingList, NodeBodyLock, NodeChildAssociation, NodeChildAssociationEntry, NodeChildAssociationPaging, NodeChildAssociationPagingList, Node, NodeAssociation, NodeAssociationEntry, NodeAssocMinimalEntry, NodeAssocPaging, NodeAssocPagingList, NodeBody, NodeChildAssocMinimal, NodeChildAssocMinimalEntry, NodeChildAssocPaging, NodeChildAssocPagingList, NodeEntry, NodeFull, NodeMinimal, NodeMinimalEntry, NodePaging, NodePagingList, NodeSharedLink, NodeSharedLinkEntry, NodeSharedLinkPaging, NodeSharedLinkPagingList, NodesnodeIdchildrenContent, Pagination, PathElement, PathInfo, PermissionElement, PermissionsInfo, PersonPaging, PersonPagingList, Person, PersonBodyCreate, PersonEntry, PersonNetwork, PersonNetworkEntry, PersonNetworkPaging, PersonNetworkPagingList, Preference, PreferenceEntry, PreferencePaging, PreferencePagingList, Rating, RatingAggregate, RatingBody, RatingEntry, RatingPaging, RatingPagingList, Rendition, RenditionBody, RenditionEntry, RenditionPaging, RenditionPagingList, SharedLinkBody, Site, SiteBody, SiteContainer, SiteContainerEntry, SiteContainerPaging, SiteEntry, SiteMember, SiteMemberBody, SiteMemberEntry, SiteMemberPaging, SiteMemberRoleBody, SiteMembershipBody, SiteMembershipBody1, SiteMembershipRequest, SiteMembershipRequestEntry, SiteMembershipRequestPaging, SiteMembershipRequestPagingList, SitePaging, SitePagingList, Tag, TagBody, TagBody1, TagEntry, TagPaging, TagPagingList, UserInfo, AssociationInfo, AssociationsApi, ChangesApi, ChildAssociationsApi, CommentsApi, FavoritesApi, NetworksApi, NodesApi, PeopleApi, RatingsApi, RenditionsApi, QueriesApi, SharedlinksApi, SitesApi, TagsApi, WebscriptApi, DownloadsApi, VersionsApi, ClassesApi, GroupsApi) {
  'use strict';

  /**
   * Provides access to the core features of Alfresco.\n\nThis API uses the term **entity** to refer to an object in an Alfresco repository.\nAn **entity** is of a specific **type**, and has a unique **id**.\n\n* The **id** of an entity of type **node** is the **NodeRef** with the &#x60;workspace://SpacesStore&#x60; prefix removed.\n* The **id** of an entity of type **site** is the site&#39;s short name.\n* The **id** for an entity of type **person** is the person&#39;s username.\n.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoCoreRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoCoreRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoCoreRestApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new AlfrescoCoreRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoCoreRestApi.Yyy(); // Construct a model instance.
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
     * The Activity model constructor.
     * @property {module:model/Activity}
     */
    Activity: Activity,
    /**
     * The ActivityActivitySummary model constructor.
     * @property {module:model/ActivityActivitySummary}
     */
    ActivityActivitySummary: ActivityActivitySummary,
    /**
     * The ActivityEntry model constructor.
     * @property {module:model/ActivityEntry}
     */
    ActivityEntry: ActivityEntry,
    /**
     * The ActivityPaging model constructor.
     * @property {module:model/ActivityPaging}
     */
    ActivityPaging: ActivityPaging,
    /**
     * The ActivityPagingList model constructor.
     * @property {module:model/ActivityPagingList}
     */
    ActivityPagingList: ActivityPagingList,
    /**
     * The AssocChildBody model constructor.
     * @property {module:model/AssocChildBody}
     */
    AssocChildBody: AssocChildBody,
    /**
     * The AssocInfo model constructor.
     * @property {module:model/AssocInfo}
     */
    AssocInfo: AssocInfo,
    /**
     * The AssocTargetBody model constructor.
     * @property {module:model/AssocTargetBody}
     */
    AssocTargetBody: AssocTargetBody,
    /**
     * The ChildAssocInfo model constructor.
     * @property {module:model/ChildAssocInfo}
     */
    ChildAssocInfo: ChildAssocInfo,
    /**
     * The ChildAssocInfo model constructor.
     * @property {module:model/ChildAssociationInfo}
     */
    ChildAssociationInfo: ChildAssociationInfo,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The CommentBody model constructor.
     * @property {module:model/CommentBody}
     */
    CommentBody: CommentBody,
    /**
     * The CommentBody1 model constructor.
     * @property {module:model/CommentBody1}
     */
    CommentBody1: CommentBody1,
    /**
     * The CommentEntry model constructor.
     * @property {module:model/CommentEntry}
     */
    CommentEntry: CommentEntry,
    /**
     * The CommentPaging model constructor.
     * @property {module:model/CommentPaging}
     */
    CommentPaging: CommentPaging,
    /**
     * The CommentPagingList model constructor.
     * @property {module:model/CommentPagingList}
     */
    CommentPagingList: CommentPagingList,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The ContentInfo model constructor.
     * @property {module:model/ContentInfo}
     */
    ContentInfo: ContentInfo,
    /**
     * The CopyBody model constructor.
     * @property {module:model/CopyBody}
     */
    CopyBody: CopyBody,
    /**
     * The DeletedNode model constructor.
     * @property {module:model/DeletedNode}
     */
    DeletedNode: DeletedNode,
    /**
     * The DeletedNodeEntry model constructor.
     * @property {module:model/DeletedNodeEntry}
     */
    DeletedNodeEntry: DeletedNodeEntry,
    /**
     * The DeletedNodeMinimal model constructor.
     * @property {module:model/DeletedNodeMinimal}
     */
    DeletedNodeMinimal: DeletedNodeMinimal,
    /**
     * The DeletedNodeMinimalEntry model constructor.
     * @property {module:model/DeletedNodeMinimalEntry}
     */
    DeletedNodeMinimalEntry: DeletedNodeMinimalEntry,
    /**
     * The DeletedNodesPaging model constructor.
     * @property {module:model/DeletedNodesPaging}
     */
    DeletedNodesPaging: DeletedNodesPaging,
    /**
     * The DeletedNodesPagingList model constructor.
     * @property {module:model/DeletedNodesPagingList}
     */
    DeletedNodesPagingList: DeletedNodesPagingList,
    /**
     * The EmailSharedLinkBody model constructor.
     * @property {module:model/EmailSharedLinkBody}
     */
    EmailSharedLinkBody: EmailSharedLinkBody,
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
     * The Favorite model constructor.
     * @property {module:model/Favorite}
     */
    Favorite: Favorite,
    /**
     * The FavoriteBody model constructor.
     * @property {module:model/FavoriteBody}
     */
    FavoriteBody: FavoriteBody,
    /**
     * The FavoriteEntry model constructor.
     * @property {module:model/FavoriteEntry}
     */
    FavoriteEntry: FavoriteEntry,
    /**
     * The FavoritePaging model constructor.
     * @property {module:model/FavoritePaging}
     */
    FavoritePaging: FavoritePaging,
    /**
     * The FavoritePagingList model constructor.
     * @property {module:model/FavoritePagingList}
     */
    FavoritePagingList: FavoritePagingList,
    /**
     * The FavoriteSiteBody model constructor.
     * @property {module:model/FavoriteSiteBody}
     */
    FavoriteSiteBody: FavoriteSiteBody,
    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201: InlineResponse201,
    /**
     * The InlineResponse201Entry model constructor.
     * @property {module:model/InlineResponse201Entry}
     */
    InlineResponse201Entry: InlineResponse201Entry,
    /**
     * The MoveBody model constructor.
     * @property {module:model/MoveBody}
     */
    MoveBody: MoveBody,
    /**
     * The NetworkQuota model constructor.
     * @property {module:model/NetworkQuota}
     */
    NetworkQuota: NetworkQuota,
    /**
     * The NodeAssociationEntry model constructor.
     * @property {module:model/NodeAssociationEntry}
     */
    NodeAssociationEntry: NodeAssociationEntry,
    /**
     * The NodeAssocMinimal model constructor.
     * @property {module:model/NodeAssocMinimal}
     */
    NodeAssocMinimal: NodeAssocMinimal,
    /**
     * The NodeAssociationPaging model constructor.
     * @property {module:model/NodeAssociationPaging}
     */
    NodeAssociationPaging: NodeAssociationPaging,
    /**
     * The NodeAssociationPagingList model constructor.
     * @property {module:model/NodeAssociationPagingList}
     */
    NodeAssociationPagingList: NodeAssociationPagingList,
    /**
     * The NodeBodyLock model constructor.
     * @property {module:model/NodeBodyLock}
     */
    NodeBodyLock: NodeBodyLock,
    /**
     * The Node model constructor.
     * @property {module:model/NodeChildAssociation}
     */
    NodeChildAssociation: NodeChildAssociation,
    /**
     * The Node model constructor.
     * @property {module:model/NodeChildAssociationPaging}
     */
    NodeChildAssociationPaging: NodeChildAssociationPaging,
    /**
     * The Node model constructor.
     * @property {module:model/NodeChildAssociationPagingList}
     */
    NodeChildAssociationPagingList: NodeChildAssociationPagingList,
    /**
     * The Node model constructor.
     * @property {module:model/NodeChildAssociationEntry}
     */
    NodeChildAssociationEntry: NodeChildAssociationEntry,
    /**
     * The Node model constructor.
     * @property {module:model/Node}
     */
    Node: Node,
    /**
     * The NodeAssocMinimalEntry model constructor.
     * @property {module:model/NodeAssocMinimalEntry}
     */
    NodeAssocMinimalEntry: NodeAssocMinimalEntry,
    /**
     * The NodeAssocPaging model constructor.
     * @property {module:model/NodeAssocPaging}
     */
    NodeAssocPaging: NodeAssocPaging,
    /**
     * The NodeAssocPagingList model constructor.
     * @property {module:model/NodeAssocPagingList}
     */
    NodeAssocPagingList: NodeAssocPagingList,
    /**
     * The NodeBody model constructor.
     * @property {module:model/NodeBody}
     */
    NodeBody: NodeBody,
    /**
     * The NodeChildAssocMinimal model constructor.
     * @property {module:model/NodeChildAssocMinimal}
     */
    NodeChildAssocMinimal: NodeChildAssocMinimal,
    /**
     * The NodeChildAssocMinimalEntry model constructor.
     * @property {module:model/NodeChildAssocMinimalEntry}
     */
    NodeChildAssocMinimalEntry: NodeChildAssocMinimalEntry,
    /**
     * The NodeChildAssocPaging model constructor.
     * @property {module:model/NodeChildAssocPaging}
     */
    NodeChildAssocPaging: NodeChildAssocPaging,
    /**
     * The NodeChildAssocPagingList model constructor.
     * @property {module:model/NodeChildAssocPagingList}
     */
    NodeChildAssocPagingList: NodeChildAssocPagingList,
    /**
     * The NodeEntry model constructor.
     * @property {module:model/NodeEntry}
     */
    NodeEntry: NodeEntry,
    /**
     * The NodeFull model constructor.
     * @property {module:model/NodeFull}
     */
    NodeFull: NodeFull,
    /**
     * The NodeMinimal model constructor.
     * @property {module:model/NodeMinimal}
     */
    NodeMinimal: NodeMinimal,
    /**
     * The NodeMinimalEntry model constructor.
     * @property {module:model/NodeMinimalEntry}
     */
    NodeMinimalEntry: NodeMinimalEntry,
    /**
     * The NodePaging model constructor.
     * @property {module:model/NodePaging}
     */
    NodePaging: NodePaging,
    /**
     * The NodePagingList model constructor.
     * @property {module:model/NodePagingList}
     */
    NodePagingList: NodePagingList,
    /**
     * The NodeSharedLink model constructor.
     * @property {module:model/NodeSharedLink}
     */
    NodeSharedLink: NodeSharedLink,
    /**
     * The NodeSharedLinkEntry model constructor.
     * @property {module:model/NodeSharedLinkEntry}
     */
    NodeSharedLinkEntry: NodeSharedLinkEntry,
    /**
     * The NodeSharedLinkPaging model constructor.
     * @property {module:model/NodeSharedLinkPaging}
     */
    NodeSharedLinkPaging: NodeSharedLinkPaging,
    /**
     * The NodeSharedLinkPagingList model constructor.
     * @property {module:model/NodeSharedLinkPagingList}
     */
    NodeSharedLinkPagingList: NodeSharedLinkPagingList,
    /**
     * The NodesnodeIdchildrenContent model constructor.
     * @property {module:model/NodesnodeIdchildrenContent}
     */
    NodesnodeIdchildrenContent: NodesnodeIdchildrenContent,
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
     * The PermissionElement model constructor.
     * @property {module:model/PermissionElement}
     */
    PermissionElement: PermissionElement,
    /**
     * The PermissionsInfo model constructor.
     * @property {module:model/PermissionsInfo}
     */
    PermissionsInfo: PermissionsInfo,
    /**
     * The PersonPaging model constructor.
     * @property {module:model/PersonPaging}
     */
    PersonPaging: PersonPaging,
    /**
     * The PersonPagingList model constructor.
     * @property {module:model/PersonPagingList}
     */
    PersonPagingList: PersonPagingList,
    /**
     * The PathInfo model constructor.
     * @property {module:model/PathInfo}
     */
    PathInfo: PathInfo,
    /**
     * The Person model constructor.
     * @property {module:model/PersonBodyCreate}
     */
    PersonBodyCreate: PersonBodyCreate,
    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person: Person,
    /**
     * The PersonEntry model constructor.
     * @property {module:model/PersonEntry}
     */
    PersonEntry: PersonEntry,
    /**
     * The PersonNetwork model constructor.
     * @property {module:model/PersonNetwork}
     */
    PersonNetwork: PersonNetwork,
    /**
     * The PersonNetworkEntry model constructor.
     * @property {module:model/PersonNetworkEntry}
     */
    PersonNetworkEntry: PersonNetworkEntry,
    /**
     * The PersonNetworkPaging model constructor.
     * @property {module:model/PersonNetworkPaging}
     */
    PersonNetworkPaging: PersonNetworkPaging,
    /**
     * The PersonNetworkPagingList model constructor.
     * @property {module:model/PersonNetworkPagingList}
     */
    PersonNetworkPagingList: PersonNetworkPagingList,
    /**
     * The Preference model constructor.
     * @property {module:model/Preference}
     */
    Preference: Preference,
    /**
     * The PreferenceEntry model constructor.
     * @property {module:model/PreferenceEntry}
     */
    PreferenceEntry: PreferenceEntry,
    /**
     * The PreferencePaging model constructor.
     * @property {module:model/PreferencePaging}
     */
    PreferencePaging: PreferencePaging,
    /**
     * The PreferencePagingList model constructor.
     * @property {module:model/PreferencePagingList}
     */
    PreferencePagingList: PreferencePagingList,
    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating: Rating,
    /**
     * The RatingAggregate model constructor.
     * @property {module:model/RatingAggregate}
     */
    RatingAggregate: RatingAggregate,
    /**
     * The RatingBody model constructor.
     * @property {module:model/RatingBody}
     */
    RatingBody: RatingBody,
    /**
     * The RatingEntry model constructor.
     * @property {module:model/RatingEntry}
     */
    RatingEntry: RatingEntry,
    /**
     * The RatingPaging model constructor.
     * @property {module:model/RatingPaging}
     */
    RatingPaging: RatingPaging,
    /**
     * The RatingPagingList model constructor.
     * @property {module:model/RatingPagingList}
     */
    RatingPagingList: RatingPagingList,
    /**
     * The Rendition model constructor.
     * @property {module:model/Rendition}
     */
    Rendition: Rendition,
    /**
     * The RenditionBody model constructor.
     * @property {module:model/RenditionBody}
     */
    RenditionBody: RenditionBody,
    /**
     * The RenditionEntry model constructor.
     * @property {module:model/RenditionEntry}
     */
    RenditionEntry: RenditionEntry,
    /**
     * The RenditionPaging model constructor.
     * @property {module:model/RenditionPaging}
     */
    RenditionPaging: RenditionPaging,
    /**
     * The RenditionPagingList model constructor.
     * @property {module:model/RenditionPagingList}
     */
    RenditionPagingList: RenditionPagingList,
    /**
     * The SharedLinkBody model constructor.
     * @property {module:model/SharedLinkBody}
     */
    SharedLinkBody: SharedLinkBody,
    /**
     * The Site model constructor.
     * @property {module:model/Site}
     */
    Site: Site,
    /**
     * The SiteBody model constructor.
     * @property {module:model/SiteBody}
     */
    SiteBody: SiteBody,
    /**
     * The SiteContainer model constructor.
     * @property {module:model/SiteContainer}
     */
    SiteContainer: SiteContainer,
    /**
     * The SiteContainerEntry model constructor.
     * @property {module:model/SiteContainerEntry}
     */
    SiteContainerEntry: SiteContainerEntry,
    /**
     * The SiteContainerPaging model constructor.
     * @property {module:model/SiteContainerPaging}
     */
    SiteContainerPaging: SiteContainerPaging,
    /**
     * The SiteEntry model constructor.
     * @property {module:model/SiteEntry}
     */
    SiteEntry: SiteEntry,
    /**
     * The SiteMember model constructor.
     * @property {module:model/SiteMember}
     */
    SiteMember: SiteMember,
    /**
     * The SiteMemberBody model constructor.
     * @property {module:model/SiteMemberBody}
     */
    SiteMemberBody: SiteMemberBody,
    /**
     * The SiteMemberEntry model constructor.
     * @property {module:model/SiteMemberEntry}
     */
    SiteMemberEntry: SiteMemberEntry,
    /**
     * The SiteMemberPaging model constructor.
     * @property {module:model/SiteMemberPaging}
     */
    SiteMemberPaging: SiteMemberPaging,
    /**
     * The SiteMemberRoleBody model constructor.
     * @property {module:model/SiteMemberRoleBody}
     */
    SiteMemberRoleBody: SiteMemberRoleBody,
    /**
     * The SiteMembershipBody model constructor.
     * @property {module:model/SiteMembershipBody}
     */
    SiteMembershipBody: SiteMembershipBody,
    /**
     * The SiteMembershipBody1 model constructor.
     * @property {module:model/SiteMembershipBody1}
     */
    SiteMembershipBody1: SiteMembershipBody1,
    /**
     * The SiteMembershipRequest model constructor.
     * @property {module:model/SiteMembershipRequest}
     */
    SiteMembershipRequest: SiteMembershipRequest,
    /**
     * The SiteMembershipRequestEntry model constructor.
     * @property {module:model/SiteMembershipRequestEntry}
     */
    SiteMembershipRequestEntry: SiteMembershipRequestEntry,
    /**
     * The SiteMembershipRequestPaging model constructor.
     * @property {module:model/SiteMembershipRequestPaging}
     */
    SiteMembershipRequestPaging: SiteMembershipRequestPaging,
    /**
     * The SiteMembershipRequestPagingList model constructor.
     * @property {module:model/SiteMembershipRequestPagingList}
     */
    SiteMembershipRequestPagingList: SiteMembershipRequestPagingList,
    /**
     * The SitePaging model constructor.
     * @property {module:model/SitePaging}
     */
    SitePaging: SitePaging,
    /**
     * The SitePagingList model constructor.
     * @property {module:model/SitePagingList}
     */
    SitePagingList: SitePagingList,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TagBody model constructor.
     * @property {module:model/TagBody}
     */
    TagBody: TagBody,
    /**
     * The TagBody1 model constructor.
     * @property {module:model/TagBody1}
     */
    TagBody1: TagBody1,
    /**
     * The TagEntry model constructor.
     * @property {module:model/TagEntry}
     */
    TagEntry: TagEntry,
    /**
     * The TagPaging model constructor.
     * @property {module:model/TagPaging}
     */
    TagPaging: TagPaging,
    /**
     * The TagPagingList model constructor.
     * @property {module:model/TagPagingList}
     */
    TagPagingList: TagPagingList,
    /**
     * The UserInfo model constructor.
     * @property {module:model/UserInfo}
     */
    UserInfo: UserInfo,
    /**
     * The AssociationsApi service constructor.
     * @property {module:api/AssociationsApi}
     */
    AssociationsApi: AssociationsApi,
    /**
     * The AssociationInfo service constructor.
     * @property {module:model/AssociationInfo}
     */
    AssociationInfo: AssociationInfo,
    /**
     * The ChangesApi service constructor.
     * @property {module:api/ChangesApi}
     */
    ChangesApi: ChangesApi,
    /**
     * The ChildAssociationsApi service constructor.
     * @property {module:api/ChildAssociationsApi}
     */
    ChildAssociationsApi: ChildAssociationsApi,
    /**
     * The CommentsApi service constructor.
     * @property {module:api/CommentsApi}
     */
    CommentsApi: CommentsApi,
    /**
     * The DownloadsApi service constructor.
     * @property {module:api/DownloadsApi}
     */
    DownloadsApi: DownloadsApi,
    /**
     * The VersionsApi service constructor.
     * @property {module:api/VersionsApi}
     */
    VersionsApi: VersionsApi,
    /**
     * The ClassesApi service constructor.
     * @property {module:api/ClassesApi}
     */
    ClassesApi: ClassesApi,
    /**
     * The FavoritesApi service constructor.
     * @property {module:api/FavoritesApi}
     */
    FavoritesApi: FavoritesApi,
    /**
     * The NetworksApi service constructor.
     * @property {module:api/NetworksApi}
     */
    NetworksApi: NetworksApi,
    /**
     * The NodesApi service constructor.
     * @property {module:api/NodesApi}
     */
    NodesApi: NodesApi,
    /**
     * The PeopleApi service constructor.
     * @property {module:api/PeopleApi}
     */
    PeopleApi: PeopleApi,
    /**
     * The QueriesApi service constructor.
     * @property {module:api/QueriesApi}
     */
    QueriesApi: QueriesApi,
    /**
     * The RatingsApi service constructor.
     * @property {module:api/RatingsApi}
     */
    RatingsApi: RatingsApi,
    /**
     * The RenditionsApi service constructor.
     * @property {module:api/RenditionsApi}
     */
    RenditionsApi: RenditionsApi,
    /**
     * The SharedlinksApi service constructor.
     * @property {module:api/SharedlinksApi}
     */
    SharedlinksApi: SharedlinksApi,
    /**
     * The SitesApi service constructor.
     * @property {module:api/SitesApi}
     */
    SitesApi: SitesApi,
    /**
     * The TagsApi service constructor.
     * @property {module:api/TagsApi}
     */
    TagsApi: TagsApi,
    /**
     * The WebscriptApi service constructor.
     * @property {module:api/WebscriptApi}
     */
    WebscriptApi: WebscriptApi,
    /**
     * The GroupsApi service constructor
     * @property {module: api/GroupsApi}
     */
    GroupsApi: GroupsApi
  };

  return exports;
}));
