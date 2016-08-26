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

interface NodePagingList {
    pagination: Pagination;
    entries: MinimalNodeEntity[];
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

interface MinimalNodeEntryEntity {
    id: string;
    parentId: string;
    name: string;
    nodeType: string;
    isFolder: boolean;
    isFile: boolean;
    modifiedAt: string;
    modifiedByUser: UserInfo;
    createdAt: string;
    createdByUser: UserInfo;
    content: ContentInfo;
    path: PathInfoEntity;
    properties: NodeProperties;
}

interface NodeProperties {
    [key: string]: any;
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
    ActivitiMock : ActivitiMock;
    Tag : TagMock;
    Models: ModelsMock;
    UserFilters: UserFiltersMock;
}

interface ActivitiMock {
    Auth: ActivitiAuthMock;
    Process : ProcessMock;
    Tasks :TasksMock;
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
    usersWorkflowApi:any;
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
}

export class AlfrescoApiConfig {
    hostEcm: string;
    hostBpm: string;
    contextRoot: string;
    provider: string;
    ticketEcm: string;
    ticketBpm: string;
}

export interface AlfrescoJsApi {
    new(config: AlfrescoApiConfig): AlfrescoJsApi;

    config: AlfrescoApiConfig;

    Activiti: Activiti;
    Auth: Auth;
    Core: Core;
    Mock: Mock;

    activiti: activiti;
    core: core;

    search: any;
    nodes: NodesApi;
    content: any;
    upload: any;
    webScript: any;

    createClient(): any;
    getClient(): any;
    getClientAuth(): any;

    changeEcmHost(ecmHost: any);
    changeBpmHost(bpmHost: any);

    getNodeInfo(nodeId: string): Promise<MinimalNodeEntryEntity>;
    deleteNode(nodeId: string): any;
    deleteNodePermanent(nodeId: string): any;

    uploadFile(fileDefinition: File, relativePath: string, nodeId: string, nodeBody: any, opts: any):any;
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
