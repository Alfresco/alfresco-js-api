interface FolderEntity {
    items: DocumentEntity[];
}

interface DocumentEntity {
    nodeRef: string;
    nodeType: string;
    type: string;
    mimetype: string;
    isFolder: boolean;
    isLink: boolean;
    fileName: string;
    displayName: string;
    status: string;
    title: string;
    description: string;
    author: string;
    createdOn: string;
    createdBy: string;
    createdByUser: string;
    modifiedOn: string;
    modifiedBy: string;
    modifiedByUser: string;
    lockedBy: string;
    lockedByUser: string;
    size: number;
    version: string;
    contentUrl: string;
    webdavUrl: string;
    actionSet: string;
    tags: string[];
    activeWorkflows: string;
    location: LocationEntity;
}

interface LocationEntity {
    repositoryId: string;
    site: string;
    siteTitle: string;
    container: string;
    path: string;
    file: string;
    parent: LocationParentEntity;
}

interface LocationParentEntity {
    nodeRef: string;
}

interface NodePaging {
    list: NodePagingList;
}

interface DeletedNodesPaging {
    list: DeletedNodesPagingList;
}

interface NodePagingList {
    pagination: Pagination;
    entries: MinimalNodeEntity[];
}

interface DeletedNodesPagingList {
    pagination: Pagination;
    entries: DeletedNodeEntity[];
}

export class Pagination {
    count: number;
    hasMoreItems: boolean;
    totalItems: number;
    skipCount: number;
    maxItems: number;
}

interface MinimalNodeEntity {
    entry: MinimalNodeEntryEntity;
}

interface DeletedNodeEntity {
    entry: DeletedNodeMinimalEntry;
}

interface MinimalNode {
    id: string;
    parentId: string;
    name: string;
    nodeType: string;
    isFolder: boolean;
    isFile: boolean;
    modifiedAt: Date;
    modifiedByUser: UserInfo;
    createdAt: Date;
    createdByUser: UserInfo;
    content: ContentInfo;
    path: PathInfoEntity;
    properties: NodeProperties;
}

interface MinimalNodeEntryEntity extends MinimalNode {
}

interface NodeProperties {
    [key: string]: any;
}

interface DeletedNodeMinimalEntry extends MinimalNode {
    archivedAt: Date;
    archivedByUser: UserInfo;
}

interface UserInfo {
    displayName: string;
    id: string;
}

interface ContentInfo {
    mimeType: string;
    mimeTypeName: string;
    sizeInBytes: number;
    encoding: string;
}

interface PathInfoEntity {
    elements: PathElementEntity;
    isComplete: boolean;
    name: string;
}

interface PathElementEntity {
    id: string;
    name: string;
}

interface Core {
    NodesApi: NodesApi;
}

interface Auth {
}

interface AuthMock {
    new(host: string, username: string, password: string): AuthMock;
    get201Response(forceTicket: string);
    get403Response();
    get400Response();
    get401Response();
    get204ResponseLogout();
    get404ResponseLogout();
    rec();
    play();
    clearAll();
}

interface NodeMock {
    new(host: string): NodeMock;
    get200ResponseChildren();
    get200ResponseSingleFileFolder();
    get404ChildrenNotExist();
    get404FileFolderNotExist();
    get204SuccessfullyDeleted();
    get403DeletePermissionDenied();
    get404DeleteNotFound();
    get404DeletePermanentlyNotFound() ;
    get200CreationFolder();
    get409CreationFolderNewNameClashes();
    get201CreationFolderNewNameNotClashes();
    rec();
    play();
    clearAll();
}

interface UploadMock {
    new(host: string): UploadMock;
    get201CreationFile();
    get201CreationFileAutoRename();
    get409CreationFileNewNameClashes();
    get401Response();
    rec();
    play();
    clearAll();
}

interface WebScriptMock {
    new(host: string): WebScriptMock;
    get200Response();
    get400Response();
    rec();
    play();
    clearAll();
}

interface TagMock {
    new(host: string): TagMock;
    get200Response();
    get401Response();
    rec();
    play();
    clearAll();
}

interface RenditionMock {
    new(host: string): RenditionMock;
    get200RenditionList();
    createRendition200();
    get200RenditionResponse();
    rec();
    play();
    clearAll();
}

interface ModelsMock {
    new(host: string): ModelsMock;
    get200Response();
    rec();
    play();
    clearAll();
}

interface Mock {
    Auth: AuthMock;
    Node: NodeMock;
    Upload: UploadMock;
    WebScript: WebScriptMock;
    ActivitiMock: ActivitiMock;
    Tag: TagMock;
    Models: ModelsMock;
    UserFilters: UserFiltersMock;
    Rendition: RenditionMock;
}

interface ActivitiMock {
    Auth: ActivitiAuthMock;
    Process: ProcessMock;
    Tasks: TasksMock;
}

interface UserFiltersMock {
    new(host: string, username: string, password: string): UserFiltersMock;
    get200getUserTaskFilters();
}

interface ActivitiAuthMock {
    new(host: string, username: string, password: string): ActivitiAuthMock;
    get200Response();
    get200ResponseLogout()
    get401Response();
}

interface ProcessMock {
    new(host: string): ProcessMock;
    get200Response();
}

interface TasksMock {
    new(host: string): TasksMock;
    get200Response();
}

interface Activiti {

}

interface NodesApi {
    new(client: ApiClient): NodesApi;
    getNodeInfo(nodeId: string): Promise<MinimalNodeEntryEntity>;
    getNodeChildren(nodeId: string, opts: any): Promise<NodePaging>;
    deleteNode(nodeId: string): Promise<any>;
    createFolder(name: string, relativePath: string, nodeId?: string, opts?: any): Promise<MinimalNodeEntryEntity>;
    getNode(nodeId: string, opts: any): Promise<MinimalNodeEntity>;
    getDeletedNodes(opts: any): Promise<DeletedNodesPaging>;
    purgeDeletedNode(nodeId: string): Promise<any>;
    getDeletedNode(nodeId: string, opts: any): Promise<DeletedNodeEntity>;
    restoreNode(nodeId: string): Promise<MinimalNodeEntity>;
    addNode(nodeId: string, nodeBody: any, opts: any);
}

interface ApiClient {
    new(client: any): ApiClient;
}

interface BpmAuth {
    new(config: any): BpmAuth;
}

interface activiti {
    new(config: any): activiti;
    aboutApi: any;
    adminEndpointsApi: any;
    adminGroupsApi: any;
    adminTenantsApi: any;
    adminUsersApi: any;
    alfrescoApi: any;
    appsApi: any;
    appsDefinitionApi: any;
    appsRuntimeApi: any;
    commentsApi: any;
    contentApi: any;
    contentRenditionApi: any;
    editorApi: any;
    groupsApi: any;
    iDMSyncApi: any;
    integrationAccountApi: any;
    integrationAlfrescoCloudApi: any;
    integrationAlfrescoOnPremiseApi: any;
    integrationApi: any;
    integrationBoxApi: any;
    integrationDriveApi: any;
    modelBpmnApi: any;
    modelsApi: any;
    modelsHistoryApi: any;
    processApi: any;
    processDefinitionsApi: any;
    processDefinitionsFormApi: any;
    processInstancesApi: any;
    processInstancesInformationApi: any;
    processInstancesListingApi: any;
    processScopeApi: any;
    profileApi: any;
    scriptFileApi: any;
    systemPropertiesApi: any;
    taskActionsApi: any;
    taskApi: any;
    taskCheckListApi: any;
    taskFormsApi: any;
    temporaryApi: any;
    userApi: any;
    userFiltersApi: any;
    usersWorkflowApi: any;

    /*Models*/
    AbstractGroupRepresentation: any;
    AbstractRepresentation: any;
    AbstractUserRepresentation: any;
    AddGroupCapabilitiesRepresentation: any;
    AppDefinition: any;
    AppDefinitionPublishRepresentation: any;
    AppDefinitionRepresentation: any;
    AppDefinitionUpdateResultRepresentation: any;
    AppModelDefinition: any;
    ArrayNode: any;
    BoxUserAccountCredentialsRepresentation: any;
    BulkUserUpdateRepresentation: any;
    ChangePasswordRepresentation: any;
    ChecklistOrderRepresentation: any;
    CommentRepresentation: any;
    CompleteFormRepresentation: any;
    ConditionRepresentation: any;
    CreateEndpointBasicAuthRepresentation: any;
    CreateProcessInstanceRepresentation: any;
    CreateTenantRepresentation: any;
    EndpointBasicAuthRepresentation: any;
    EndpointConfigurationRepresentation: any;
    EndpointRequestHeaderRepresentation: any;
    EntityAttributeScopeRepresentation: any;
    EntityVariableScopeRepresentation: any;
    File: any;
    FormDefinitionRepresentation: any;
    FormFieldRepresentation: any;
    FormJavascriptEventRepresentation: any;
    FormOutcomeRepresentation: any;
    FormRepresentation: any;
    FormSaveRepresentation: any;
    FormScopeRepresentation: any;
    FormTabRepresentation: any;
    FormValueRepresentation: any;
    GroupCapabilityRepresentation: any;
    GroupRepresentation: any;
    ImageUploadRepresentation: any;
    LayoutRepresentation: any;
    LightAppRepresentation: any;
    LightGroupRepresentation: any;
    LightTenantRepresentation: any;
    LightUserRepresentation: any;
    MaplongListstring: any;
    MapstringListEntityVariableScopeRepresentation: any;
    MapstringListVariableScopeRepresentation: any;
    Mapstringstring: any;
    ModelRepresentation: any;
    ObjectNode: any;
    OptionRepresentation: any;
    ProcessInstanceFilterRepresentation: any;
    ProcessInstanceFilterRequestRepresentation: any;
    ProcessInstanceRepresentation: any;
    ProcessScopeIdentifierRepresentation: any;
    ProcessScopeRepresentation: any;
    ProcessScopesRequestRepresentation: any;
    PublishIdentityInfoRepresentation: any;
    RelatedContentRepresentation: any;
    ResetPasswordRepresentatio: any;
    RestVariable: any;
    ResultListDataRepresentation: any;
    RuntimeAppDefinitionSaveRepresentation: any;
    SaveFormRepresentation: any;
    SyncLogEntryRepresentation: any;
    SystemPropertiesRepresentation: any;
    TaskFilterRepresentation: any;
    TaskFilterRequestRepresentation: any;
    TaskRepresentation: any;
    TaskUpdateRepresentation: any;
    TenantEvent: any;
    TenantRepresentation: any;
    UserAccountCredentialsRepresentation: any;
    UserActionRepresentation: any;
    UserFilterOrderRepresentation: any;
    UserProcessInstanceFilterRepresentation: any;
    UserRepresentation: any;
    UserTaskFilterRepresentation: any;
    ValidationErrorRepresentation: any;
    VariableScopeRepresentation: any;
}

interface core {
    associationsApi: any;
    changesApi: any;
    childAssociationsApi: any;
    commentsApi: any;
    favoritesApi: any;
    networksApi: any;
    nodesApi: any;
    peopleApi: any;
    ratingsApi: any;
    renditionsApi: any;
    searchApi: any;
    sharedlinksApi: any;
    sitesApi: any;
    tagsApi: any;

    /*Models*/
    Activity: any;
    ActivityActivitySummary: any;
    ActivityEntry: any;
    ActivityPaging: any;
    ActivityPagingList: any;
    AssocChildBody: any;
    AssocInfo: any;
    AssocTargetBody: any;
    ChildAssocInfo: any;
    Comment: any;
    CommentBody: any;
    CommentBody1: any;
    CommentEntry: any;
    CommentPaging: any;
    CommentPagingList: any;
    Company: any;
    ContentInfo: any;
    CopyBody: any;
    DeletedNode: any;
    DeletedNodeEntry: any;
    DeletedNodeMinimal: any;
    DeletedNodeMinimalEntry: any;
    DeletedNodesPaging: any;
    DeletedNodesPagingList: any;
    EmailSharedLinkBody: any;
    Error: any;
    ErrorError: any;
    Favorite: any;
    FavoriteBody: any;
    FavoriteEntry: any;
    FavoritePaging: any;
    FavoritePagingList: any;
    FavoriteSiteBody: any;
    InlineResponse201: any;
    InlineResponse201Entry: any;
    MoveBody: any;
    NetworkQuota: any;
    NodeAssocMinimal: any;
    NodeAssocMinimalEntry: any;
    NodeAssocPaging: any;
    NodeAssocPagingList: any;
    NodeBody: any;
    NodeBody1: any;
    NodeChildAssocMinimal: any;
    NodeChildAssocMinimalEntry: any;
    NodeChildAssocPaging: any;
    NodeChildAssocPagingList: any;
    NodeEntry: any;
    NodeFull: any;
    NodeMinimal: any;
    NodeMinimalEntry: any;
    NodePaging: any;
    NodePagingList: any;
    NodeSharedLink: any;
    NodeSharedLinkEntry: any;
    NodeSharedLinkPaging: any;
    NodeSharedLinkPagingList: any;
    NodesnodeIdchildrenContent: any;
    Pagination: any;
    PathElement: any;
    PathInfo: any;
    Person: any;
    PersonEntry: any;
    PersonNetwork: any;
    PersonNetworkEntry: any;
    PersonNetworkPaging: any;
    PersonNetworkPagingList: any;
    Preference: any;
    PreferenceEntry: any;
    PreferencePaging: any;
    PreferencePagingList: any;
    Rating: any;
    RatingAggregate: any;
    RatingBody: any;
    RatingEntry: any;
    RatingPaging: any;
    RatingPagingList: any;
    Rendition: any;
    RenditionBody: any;
    RenditionEntry: any;
    RenditionPaging: any;
    RenditionPagingList: any;
    SharedLinkBody: any;
    Site: any;
    SiteBody: any;
    SiteContainer: any;
    SiteContainerEntry: any;
    SiteContainerPaging: any;
    SiteEntry: any;
    SiteMember: any;
    SiteMemberBody: any;
    SiteMemberEntry: any;
    SiteMemberPaging: any;
    SiteMemberRoleBody: any;
    SiteMembershipBody: any;
    SiteMembershipBody1: any;
    SiteMembershipRequest: any;
    SiteMembershipRequestEntry: any;
    SiteMembershipRequestPaging: any;
    SiteMembershipRequestPagingList: any;
    SitePaging: any;
    SitePagingList: any;
    Tag: any;
    TagBody: any;
    TagBody1: any;
    TagEntry: any;
    TagPaging: any;
    TagPagingList: any;
    UserInfo: any;
}

export class AlfrescoApiConfig {
    hostEcm: string;
    hostBpm: string;
    contextRoot: string;
    provider: string;
    ticketEcm: string;
    ticketBpm: string;
}

export interface ContentApi {
    new(ecmAuth: any);

    getDocumentThumbnailUrl(documentId: string): string;
    getDocumentPreviewUrl(documentId: string): string;
    getContentUrl(documentId: string): string;
}

export interface AuthApi {
    new(config: AlfrescoApiConfig): AuthApi;

    changeHost(host: string);
    login(username: string, password: string): Promise<string>;
    logout(): Promise<string>;
    setTicket(ticket: string);
    getTicket(): string;
    isLoggedIn(): boolean;

    getClient(): any;
}

export interface BpmAuthApi extends AuthApi {

}

export interface EcmAuthApi extends AuthApi {
    validateTicket(): Promise<string>;
}

export interface AlfrescoJsApi {
    new(config: AlfrescoApiConfig): AlfrescoJsApi;

    config: AlfrescoApiConfig;

    Activiti: Activiti;
    Auth: Auth;
    Core: Core;
    Mock: Mock;

    bpmAuth: BpmAuthApi;
    ecmAuth: EcmAuthApi;

    activiti: activiti;
    core: core;

    search: any;
    nodes: NodesApi;
    content: ContentApi;
    upload: any;
    webScript: any;

    createClient(): any;
    getClient(): any;
    getClientAuth(): any;

    changeEcmHost(ecmHost: string);
    changeBpmHost(bpmHost: string);

    getNodeInfo(nodeId: string): Promise<MinimalNodeEntryEntity>;
    deleteNode(nodeId: string): any;
    deleteNodePermanent(nodeId: string): any;

    uploadFile(fileDefinition: File, relativePath: string, nodeId: string, nodeBody: any, opts: any): any;
    createFolder(name: string, relativePath: string, nodeId: string): any;

    isLoggedIn(): boolean;
    login(username: string, password: string): Promise<string>;
    logout(): Promise<any>;
    loginTicket(ticket: string): any;

    getDocumentThumbnailUrl(documentId: string): any;
    getContentUrl(documentId: string): any;

    getTicket(): Array<string>;
    getTicketBpm(): string;
    getTicketEcm(): string;

    setTicket(ticketEcm: any, ticketBpm: any): void;
}
