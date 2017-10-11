declare class AlfrescoApi {

    constructor(config: AlfrescoApi.AlfrescoApiConfig);

    changeEcmHost(ecmHost: string): void;

    changeBpmHost(bpmHost: string): void;

    changeCsrfConfig(disableCsrf: boolean): void;

    isLoggedIn(): boolean;

    login(username: string, password: string): Promise<string>;

    logout(): Promise<any>;

    loginTicket(ticket: string): any;

    refresh(): Promise<string>;

    getTicket(): Array<string>;

    getTicketBpm(): string;

    getTicketEcm(): string;

    setTicket(ticketEcm: any, ticketBpm: any): void;

    config: AlfrescoApi.AlfrescoApiConfig;

    Activiti: AlfrescoApi.Activiti;
    Auth: AlfrescoApi.Auth;
    Core: AlfrescoApi.Core;
    Discovery: AlfrescoApi.Discovery;

    bpmAuth: AlfrescoApi.BpmAuthApi;
    ecmAuth: AlfrescoApi.EcmAuthApi;
    oauth2Auth: AlfrescoApi.OauthApi;

    activiti: AlfrescoApi.Activiti;
    core: AlfrescoApi.Core;
    discovery: AlfrescoApi.Discovery;

    search: any;
    nodes: AlfrescoApi.NodesApi;
    content: AlfrescoApi.ContentApi;
    upload: AlfrescoApi.UploadApi;
    webScript: AlfrescoApi.WebscriptApi;

    ecmClient: AlfrescoApi.EcmClient;
    bpmClient: AlfrescoApi.BpmClient;
    searchClient: AlfrescoApi.SearchClient;
    ecmPrivateClient: AlfrescoApi.EcmPrivateClient;

}

declare namespace AlfrescoApi {

    export interface AlfrescoApi {

        new(config: AlfrescoApiConfig): AlfrescoApi;

        changeEcmHost(ecmHost: string): void;
        changeBpmHost(bpmHost: string): void;
        changeCsrfConfig(disableCsrf: boolean): void;

        isLoggedIn(): boolean;
        login(username: string, password: string): Promise<string>;
        logout(): Promise<any>;
        loginTicket(ticket: string): any;
        refresh(): Promise<string>;

        getTicket(): Array<string>;
        getTicketBpm(): string;
        getTicketEcm(): string;

        setTicket(ticketEcm: any, ticketBpm: any): void;

        config: AlfrescoApiConfig;

        Activiti: Activiti;
        Auth: Auth;
        Core: Core;
        Discovery: Discovery;

        bpmAuth: BpmAuthApi;
        ecmAuth: EcmAuthApi;
        oauth2Auth: OauthApi;

        activiti: Activiti;
        core: Core;
        discovery: Discovery;

        search: any;
        nodes: NodesApi;
        content: ContentApi;
        upload: UploadApi;
        webScript: WebscriptApi;

        ecmClient: EcmClient;
        bpmClient: BpmClient;
        searchClient: SearchClient;
        ecmPrivateClient: EcmPrivateClient;

    }

    export interface FolderEntity {
        items: DocumentEntity[];
    }

    export interface DocumentEntity {
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

    export interface LocationEntity {
        repositoryId: string;
        site: string;
        siteTitle: string;
        container: string;
        path: string;
        file: string;
        parent: LocationParentEntity;
    }

    export interface LocationParentEntity {
        nodeRef: string;
    }

    export interface DeletedNodesPaging {
        list: DeletedNodesPagingList;
    }

    export interface DeletedNodesPagingList {
        pagination: Pagination;
        entries: DeletedNodeEntity[];
    }

    export interface Source {
        id: string;
        name?: string;
        createdAt?: Date;
        modifiedAt?: Date;
        createdByUser?: UserInfo;
        modifiedByUser?: UserInfo;
        isFolder?: boolean;
        isFile?: boolean;
        aspectNames?: Array<string>;
        properties?: any;
        nodeType?: string;
    }

    export interface MinimalNodeEntity {
        entry?: MinimalNodeEntryEntity;
    }

    export interface DeletedNodeEntity {
        entry?: DeletedNodeMinimalEntry;
    }

    export interface Node {
        id?: string;
        name?: string;
        nodeType?: string;
        isFolder?: boolean;
        isFile?: boolean;
        isLocked?: boolean;
        modifiedAt?: Date;
        modifiedByUser?: UserInfo;
        adddAt?: Date;
        adddByUser?: UserInfo;
        parentId?: string;
        isLink?: boolean;
        content?: ContentInfo;
        aspectNames?: Array<string>;
        properties?: any;
        allowableOperations?: Array<string>;
        path?: PathInfo;
        permissions?: PermissionsInfo;
        createdAt?: Date;
        createdByUser?: UserInfo;
    }

    export interface MinimalNode extends Node {
    }

    export interface EcmClient {
        new(config: AlfrescoApiConfig): EcmClient;
        changeHost(host: string): void;
        setAuthentications(authentications: any): void;
    }

    export interface BpmClient {
        new(config: AlfrescoApiConfig): BpmClient;
        changeHost(host: string): void;
        setAuthentications(authentications: any): void;
    }

    export interface SearchClient {
        new(config: AlfrescoApiConfig): SearchClient;
        changeHost(): void;
        setAuthentications(authentications: any): void;
    }

    export interface EcmPrivateClient {
        new(config: AlfrescoApiConfig): EcmPrivateClient;
        changeHost(host: string): void;
        setAuthentications(authentications: any): void;
    }

    export interface MinimalNodeEntryEntity extends MinimalNode {
    }

    export interface NodeProperties {
        [key: string]: any;
    }

    export interface DeletedNodeMinimalEntry extends MinimalNode {
        archivedAt: Date;
        archivedByUser: UserInfo;
    }

    export interface PathInfoEntity {
        elements: PathElementEntity[];
        isComplete: boolean;
        name: string;
    }

    export interface PathElementEntity {
        id: string;
        name: string;
    }

    export interface Auth {
    }

    export interface NodesApi {
        new(client: ApiClient): NodesApi;

        addNode(nodeId: string, nodeBody: any, opts?: any): Promise<MinimalNodeEntity>;
        copyNode(nodeId: string, copyBody: any, opts?: any): Promise<MinimalNodeEntity>;
        deleteNode(nodeId: string): Promise<void>;
        getDeletedNode(nodeId: string, opts?: any): Promise<DeletedNodeEntity>;
        getDeletedNodes(opts?: any): Promise<DeletedNodesPaging>;
        getFileContent(nodeId: string, opts?: any): Promise<any>;
        getNode(nodeId: string, opts?: any): Promise<MinimalNodeEntity>;
        getNodeChildren(nodeId: string, opts?: any): Promise<NodePaging>;
        moveNode(nodeId: string, moveBody: any, opts?: any): Promise<MinimalNodeEntity>;
        purgeDeletedNode(nodeId: string): Promise<void>;
        restoreNode(nodeId: string): Promise<MinimalNodeEntity>;
        updateFileContent(nodeId: string, contentBody: string, opts?: any): Promise<MinimalNodeEntity>;
        updateNode(nodeId: string, nodeBody: any, opts?: any): Promise<MinimalNodeEntity>;
        getNodeInfo(nodeId: string, opts?: any): Promise<MinimalNodeEntryEntity>;
        deleteNodePermanent(nodeId: string): Promise<void>;
        createFolder(name: string, relativePath: string, nodeId?: string, opts?: any): Promise<MinimalNodeEntity>;
        createFolderAutoRename(name: string, relativePath: string, nodeId: string, opts): Promise<MinimalNodeEntity>;
    }

    export interface ApiClient {
        new(client: any): ApiClient;
    }

    export interface BpmAuth {
        new(config: any): BpmAuth;
    }

    //  ======= Discovery start ======

    export interface Discovery {
        new(config: any): Discovery;

        discoveryApi: DiscoveryApi;
    }

    export interface DiscoveryApi {
        getRepositoryInformation(): Promise<DiscoveryEntry>;
    }

    export interface DiscoveryEntry {
        entry: RepositoryEntry;
    }

    export interface EntitlementsInfo {
        maxUsers?: number;
        maxDocs?: number;
        isClusterEnabled?: boolean;
        isCryptodocEnabled?: boolean;
    }

    export interface Error {
        error?: ErrorError;
    }

    export interface LicenseInfo {
        issuedAt: Date;
        expiresAt: Date;
        remainingDays: number;
        holder: string;
        mode: string;
        entitlements?: EntitlementsInfo;
    }

    export interface ModuleInfo {
        id?: string;
        title?: string;
        description?: string;
        version?: string;
        installDate?: Date;
        installState?: string;
        versionMin?: string;
        versionMax?: string;
    }

    export interface RepositoryInfo {
        edition: string;
        version: VersionInfo;
        status: StatusInfo;
        license?: LicenseInfo;
        modules?: Array<ModuleInfo>;
    }

    export interface RepositoryEntry {
        repository: RepositoryInfo;
    }

    export interface StatusInfo {
        isReadOnly: boolean;
        isAuditEnabled: boolean;
        isQuickShareEnabled: boolean;
        isThumbnailGenerationEnabled: boolean;
    }

    export interface VersionInfo {
        major: string;
        minor: string;
        patch: string;
        hotfix: string;
        schema: number;
        label: string;
        display: string;
    }

    //  ======= Discovery end ======


    //  ======= Core Start ======

    export interface FavoritesApi {
        new(client: ApiClient): FavoritesApi;

        addFavorite(personId?: string, favoriteBody?: FavoriteBody): Promise<FavoriteEntry>;
        // addSiteFavorite(personId?: string, favoriteSiteBody?: FavoriteSiteBody, fields?: Array<string>, opts?: any): Promise<FavoriteSiteEntry>;
        // removeFavorite(personId?: string, favoriteId?: string, opts?: any): Promise<{}>;
        removeFavoriteSite(personId?: string, favoriteId?: string): Promise<{}>;
        getFavorite(personId?: string, favoriteId?: string, opts?: any): Promise<FavoriteEntry>;
        getFavorites(personId?: string, opts?: { skipCount?: number, maxItems?: number, where?: string, fields?: Array<string> }): Promise<FavoritePaging>;
        getFavoriteSite(personId?: string, siteId?: string, opts?: any): Promise<SiteEntry>;
        // listFavoriteSitesForPerson(personId?: string, skipCount?: number, maxItems?: number, fields?: Array<string>, opts?: any): Promise<SitePaging>;
        // listFavorites(personId?: string, skipCount?: number, maxItems?: number, where?: string, fields?: Array<string>, opts?: any): Promise<FavoritePaging>;
    }

    export interface ChildAssociationsApi {
        new(client: ApiClient): ChildAssociationsApi;

        addNode(nodeld?: string, nodeBody?: NodeBody, opts?: { autoRename?: boolean, include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        addSecondaryChildAssoc(parentld?: string, assocChildBody?: AssocChildBody): Promise<{}>;
        deleteNode(nodeld?: string, opts?: { permanent?: boolean }): Promise<{}>;
        getNodeChildren(nodeld?: string, opts?: { skipCount?: number, maxltems?: number, orderBy?: string, where?: string, include?: Array<string>, relativePath?: string, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        listParents(childld?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<{}>;
        listSecondaryChildAssociations(parentld?: string, opts?: { assocType?: string, where?: string, include?: string, fields?: Array<string> }): Promise<{}>;
        moveNode(nodeld?: string, moveBody?: MoveBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
    }

    export interface AssociationsApi {
        new(client: ApiClient): AssociationsApi;

        addAssoc(sourceld?: string, assocTargetBody?: AssocTargetBody): Promise<{}>;
        listSourceNodeAssociations(targetld?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<{}>;
        listTargetAssociations(sourceld?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<{}>;
        removeAssoc(sourceld?: string, targetld?: string, opts?: { assocType?: string }): Promise<{}>;

    }

    export interface CommentsApi {
        new(client: ApiClient): CommentsApi;

        addComment(nodeId?: string, commentBody?: CommentBody, opts?: any): Promise<CommentEntry>;
        removeComment(nodeId?: string, commentId?: string): Promise<{}>;
        getomments(nodeId?: string, opts?: any): Promise<CommentPaging>;
        updateComment(nodeId?: string, commentId?: string, commentBody?: CommentBody, opts?: any): Promise<CommentEntry>;
    }

    export interface NetworksApi {
        new(client: ApiClient): NetworksApi;

        getNetwork(networkId?: string, opts?: any): Promise<PersonNetworkEntry>;
        getNetworkForPerson(personId?: string, networkId?: string, opts?: any): Promise<PersonNetworkEntry>;
        listNetworksForPerson(personId?: string, opts?: any): Promise<PersonNetworkPaging>;
    }

    export interface NodesApi {
        new(client: ApiClient): NodesApi;

        addNode(nodeld?: string, nodeBody?: NodeBody, opts?: { autoRename?: boolean, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
        copyNode(nodeld?: string, copyBody?: CopyBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
        deleteNode(nodeld?: string, opts?: { permanent?: boolean }): Promise<{}>;
        getDeletedNode(nodeld?: string, opts?: { include?: Array<string> }): Promise<DeletedNodeEntry>;
        getDeletedNodes(opts?: { skipCount?: number, maxltems?: number, include?: Array<string> }): Promise<DeletedNodeEntry>;
        getFileContent(nodeld?: string, opts?: { attachment?: boolean, ifModifiedSince?: Date }): Promise<{}>;
        getNode(nodeld?: string, opts?: { include?: Array<string>, relativePath?: string, fields?: Array<string> }): Promise<{}>;
        getNodeContent(nodeId?: string, opts?: any): Promise<{}>;
        getNodeChildren(nodeld?: string, opts?: { skipCount?: number, maxltems?: number, orderBy?: string, where?: string, include?: Array<string>, relativePath?: string, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        getParents(nodeld?: string, opts?: { where?: string, include?: Array<string>, skipCount?: number, maxltems?: number, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        getSecondaryChildren(nodeld?: string, opts?: { where?: string, include?: Array<string>, skipCount?: number, maxltems?: number, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        getSourceAssociations(nodeld?: string, opts?: { where?: string, include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        getTargetAssociations(nodeld?: string, opts?: { where?: string, include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        lockNode(nodeld?: string, nodeBodyLock?: NodeBodyLock, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        unlockNode(nodeld?: string, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        moveNode(nodeld?: string, moveBody?: MoveBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        purgeDeletedNode(nodeld?: string): Promise<{}>;
        restoreNode(nodeld?: string): Promise<NodeEntry>;
        updateFileContent(nodeld?: string, contentBody?: string, opts?: { majorVersion?: boolean, comment?: string, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
        updateNodeContent(nodeId?: string, contentBody?: string, opts?: any): Promise<NodeEntry>;
        updateNode(nodeld?: string, nodeBody?: NodeBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
    }

    export interface SitesApi {
        new(client?: ApiClient): SitesApi;

        addSiteMember(siteld?: string, siteMemberBody?: SiteMemberBody): Promise<{}>;
        createSite(siteBody?: SiteBody, opts?: { skipConfiguration?: Boolean, skipAddToFavorites?: Boolean }): Promise<{}>;
        deleteSite(siteld?: string, opts?: { permanent?: Boolean }): Promise<{}>;
        getSite(siteld?: string, opts?: { relations?: Array<string>, fields?: Array<string> }): Promise<{}>;
        getSiteContainer(siteld?: string, containerld?: string, opts?: Array<string>): Promise<{}>;
        getSiteContainers(siteld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<{}>;
        getSiteMember(siteld?: string, personld?: string, opts?: { fields?: Array<string> }): Promise<{}>;
        getSiteMembers(siteld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<{}>;
        getSites(opts?: { skipCount?: number, maxltems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<{}>;
        removeSiteMember(siteld?: string, personld?: string): Promise<{}>;
        updateSiteMember(siteld?: string, personld?: string, siteMemberRoleBody?: SiteMemberRoleBody): Promise<{}>;
    }

    export interface PeopleApi {
        new(client: ApiClient): PeopleApi;

        addFavorite(personld?: string, favoriteBody?: FavoriteBody): Promise<FavoriteEntry>;
        addSiteMembershipRequest(personld?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<SiteMembershipRequestEntry>;
        deleteFavoriteSite(personld?: string, siteld?: string): Promise<{}>;
        favoriteSite(personld?: string, favoriteSiteBody?: FavoriteSiteBody): Promise<FavoriteEntry>;
        getActivities(personld?: string, opts?: { skipCount?: number, maxltems?: number, who?: string, siteld?: string, fields?: Array<string> }): Promise<ActivityPaging>;
        getFavorite(personld?: string, favoriteld?: string, opts?: { fields?: Array<string> }): Promise<FavoriteEntry>;
        getFavoriteSite(personld?: string, siteld?: string, opts?: { fields?: Array<string> }): Promise<SiteEntry>;
        getFavoriteSites(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<SitePaging>;
        getFavorites(personld?: string, opts?: { skipCount?: number, maxltems?: number, where?: string, fields?: Array<string> }): Promise<FavoritePaging>;
        getPerson(personld?: string, opts?: { fields?: Array<string> }): Promise<PersonEntry>;
        getPersonNetwork(personld?: string, networkld?: string, opts?: { fields?: Array<string> }): Promise<PersonNetworkEntry>;
        getPersonNetworks(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<PersonNetworkPaging>;
        getPreference(personld?: string, preferenceName?: string, opts?: { fields?: Array<string> }): Promise<PreferenceEntry>;
        getPreferences(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<PreferencePaging>;
        getSiteMembership(personld?: string, opts?: { skipCount?: number, maxltems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;
        getSiteMembershipRequest(personld?: string, siteld?: string, opts?: { fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;
        getSiteMembershipRequests(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<SiteMembershipRequestPaging>;
        removeFavoriteSite(personld?: string, favoriteld?: string): Promise<{}>;
        removeSiteMembershipRequest(personld?: string, siteld?: string): Promise<{}>;
        updateSiteMembershipRequest(personld?: string, siteld?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<{}>;
    }

    // export interface PreferencesApi {
    //     getPreference(personId?: string, opts?: any): Promise<PreferenceEntry>;
    //     getPreferences(personId?: string, opts?: any): Promise<PreferencePaging>;
    // }

    export interface QueriesApi {
        new(client: ApiClient): QueriesApi;

        findNodes(term?: string, opts?: any): Promise<NodePaging>;
        findPeople(term?: string, opts?: any): Promise<PersonPaging>;
        findSites(term?: string, opts?: any): Promise<SitePaging>;
    }

    export interface RenditionsApi {
        new(client: ApiClient): RenditionsApi;

        createRendition(nodeId?: string, renditionBody?: RenditionBody): Promise<{}>;
        getRendition(nodeId?: string, renditionId?: string): Promise<RenditionEntry>;
        getRenditionContent(nodeId?: string, renditionId?: string, opts?: any): Promise<{}>;
        getRenditions(nodeId?: string): Promise<RenditionPaging>;
        getSharedLinkRendition(sharedId?: string): Promise<RenditionEntry>;
        getSharedLinkRenditionContent(sharedId?: string, renditionId?: string, opts?: any): Promise<{}>;
    }

    export interface RatingsApi {
        new(client: ApiClient): RatingsApi;

        rate(nodeId?: string, ratingBody?: RatingBody, opts?: any): Promise<RatingEntry>;
        removeRating(nodeId?: string, ratingId?: string): Promise<{}>;
        getRating(nodeId?: string, ratingId?: string, opts?: any): Promise<RatingEntry>;
        getRatings(nodeId?: string, opts?: any): Promise<RatingPaging>;
    }

    export interface SharedlinksApi {
        new(client: ApiClient): SharedlinksApi;

        addSharedLink(sharedLinkBody?: SharedLinkBody, opts?: any): Promise<SharedLinkEntry>;
        deleteSharedLink(sharedId?: string): Promise<{}>;
        emailSharedLink(sharedId?: string, emailSharedLinkBody?: EmailSharedLinkBody, opts?: any): Promise<{}>;
        findSharedLinks(opts?: any): Promise<SharedLinkPaging>;
        getSharedLink(sharedId?: string, opts?: any): Promise<SharedLinkEntry>;
        getSharedLinkContent(sharedId?: string, opts?: any): Promise<{}>;
    }

    export interface DownloadsApi {
        new(client: ApiClient): DownloadsApi;

        createDownload(payload: DownloadBodyCreate, opts?: any): Promise<DownloadEntry>;
        getDownload(downloadId: string, opts?: any): Promise<DownloadEntry>;
        cancelDownload(downloadId: string): Promise<void>;
    }

    export interface DownloadBodyCreate {
        nodeIds?: string[];
    }

    export interface DownloadEntry {
        entry?: Download;
    }

    export interface Download {
        filesAdded?: number;
        bytesAdded?: number;
        id: string;
        totalFiles: number;
        totalBytes: number;
        status: string;
    }

    export interface TagsApi {
        new(client: ApiClient): TagsApi;

        addTag(nodeId?: string, tagBody?: TagBody): Promise<TagEntry>;
        removeTag(nodeId?: string, tagId?: string): Promise<{}>;
        getTag(tagId?: string, fields?: Array<string>, opts?: any): Promise<TagEntry>;
        getNodeTags(nodeId?: string, opts?: any): Promise<TagPaging>;
        getTags(opts?: any): Promise<TagPaging>;
        updateTag(tagId?: string, tagBody?: TagBody): Promise<TagEntry>;
    }

    export interface WebscriptApi {
        new(client: ApiClient): WebscriptApi;

        executeWebScript(httpMethod?: string, scriptPath?: string, scriptArgs?: any, contextRoot?: string, servicePat?: string, postBody?: string): Promise<{}>;
    }

    // export interface TrashcanApi {
    //     deleteremovedNode(nodeId?: string, opts?: any): Promise<{}>;
    //     getremovedNode(nodeId?: string, include?: Array<string>, opts?: any): Promise<removedNodeEntry>;
    //     listremovedNodes(skipCount?: number, maxItems?: number, include?: Array<string>, opts?: any): Promise<removedNodesPaging>;
    //     restoreremovedNode(nodeId?: string, fields?: Array<string>, opts?: any): Promise<NodeEntry>;
    // }

    // export interface VersionsApi {
    //     removeVersion(nodeId?: string, versionId?: string, opts?: any): Promise<{}>;
    //     getVersion(nodeId?: string, versionId?: string, opts?: any): Promise<VersionEntry>;
    //     getVersionContent(nodeId?: string, versionId?: string, attachment?: boolean, ifModifiedSince?: Date, opts?: any): Promise<{}>;
    //     listVersionHistory(nodeId?: string, include?: Array<string>, fields?: Array<string>, skipCount?: number, maxItems?: number, opts?: any): Promise<VersionPaging>;
    //     revertVersion(nodeId?: string, versionId?: string, revertBody?: RevertBody, fields?: Array<string>, opts?: any): Promise<VersionEntry>;
    // }

    export interface Activity {
        postPersonId?: string;
        id?: number;
        siteId?: string;
        postedAt?: Date;
        feedPersonId?: string;
        activitySummary?: {
            [key: string]: string;
        };
        activityType?: string;
    }

    export interface ActivityEntry {
        entry?: Activity;
    }

    export interface AssocChildBody {
        childId: string;
        assocType: string;
    }

    export interface DeletedNodeEntry {
        entry?: DeletedNode;
    }

    export interface DeletedNode {
        archivedByUser?: UserInfo;
        archivedAt?: Date;
    }

    export interface ActivityPaging {
        list?: ActivityPagingList;
    }

    export interface ActivityPagingList {
        entries?: Array<ActivityEntry>;
        pagination?: Pagination;
    }

    export interface Association {
        targetId?: string;
        assocType?: string;
    }

    export interface AssociationBody {
        targetId?: string;
        assocType?: string;
    }

    export interface AssociationEntry {
        entry?: Association;
    }

    export interface AssociationInfo {
        assocType?: string;
    }

    export interface ChildAssociation {
        childId?: string;
        assocType?: string;
    }

    export interface ChildAssociationBody {
        childId?: string;
        assocType?: string;
    }

    export interface ChildAssociationEntry {
        entry?: ChildAssociation;
    }

    export interface ChildAssociationInfo {
        assocType?: string;
        isPrimary?: boolean;
    }

    export interface AssocTargetBody {
        targetId?: string;
        assocType?: string;
    }

    export interface Comment {
        id?: string;
        content?: string;
        adddBy?: Person;
        adddAt?: Date;
        edited?: boolean;
        modifiedBy?: Person;
        modifiedAt?: Date;
        canEdit?: boolean;
        canremove?: boolean;
    }

    export interface CommentBody {
        content?: string;
    }

    export interface CommentEntry {
        entry?: Comment;
    }

    export interface CommentPaging {
        list?: CommentPagingList;
    }

    export interface CommentPagingList {
        entries?: Array<CommentEntry>;
        pagination?: Pagination;
    }

    export interface Company {
        organization?: string;
        address1?: string;
        address2?: string;
        address3?: string;
        postcode?: string;
        telephone?: string;
        fax?: string;
        email?: string;
    }

    export interface ContentInfo {
        mimeType?: string;
        mimeTypeName?: string;
        sizeInBytes?: number;
        encoding?: string;
    }

    export interface RemovedNode extends Node {
        archivedByUser?: UserInfo;
        archivedAt?: Date;
    }

    export interface RemovedNodeEntry {
        entry?: RemovedNode;
    }

    export interface RemovedNodesPaging {
        list?: RemovedNodesPagingList;
    }

    export interface RemovedNodesPagingList {
        entries?: Array<RemovedNodeEntry>;
        pagination?: Pagination;
    }

    export interface Error {
        error?: ErrorError;
    }

    export interface ErrorError {
        errorKey?: string;
        briefSummary?: string;
        descriptionURL?: string;
        logId?: string;
        stackTrace?: string;
        statusCode?: number;
    }

    export interface Favorite {
        targetGuid?: string;
        adddAt?: Date;
        target?: any;
    }

    export interface FavoriteBody {
        target?: any;
    }

    export interface FavoriteEntry {
        entry?: Favorite;
    }

    export interface FavoritePaging {
        list?: FavoritePagingList;
    }

    export interface FavoritePagingList {
        entries?: Array<FavoriteEntry>;
        pagination?: Pagination;
    }

    export interface FavoriteSite {
        id?: string;
    }

    export interface FavoriteSiteBody {
        id?: string;
    }

    export interface FavoriteSiteEntry {
        entry?: FavoriteSite;
    }

    export interface NetworkQuota {
        id?: string;
        limit?: number;
        usage?: number;
    }


    export interface NodeAssociation extends Node {
        association?: AssociationInfo;
    }

    export interface NodeAssociationEntry {
        entry?: NodeAssociation;
    }

    export interface NodeAssociationPaging {
        list?: NodeAssociationPagingList;
    }

    export interface NodeAssociationPagingList {
        entries?: Array<NodeAssociationEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export interface CopyBody {
        targetParentId?: string;
        name?: string;
    }

    export interface NodeBody {
        name?: string;
        nodeType?: string;
        aspectNames?: Array<string>;
        properties?: {
            [key: string]: string;
        };
        relativePath?: string;
        association?: NodeBodyAssociation;
        secondaryChildren?: Array<ChildAssociationBody>;
        targets?: Array<AssociationBody>;
        permissions?: PermissionsBodyUpdate;
    }

    export interface NodeBodyAssociation {
        assocType?: string;
    }

    export interface NodeBodyLock {
        timeToExpire?: number;
        type?: NodeBodyLock.TypeEnum;
        lifetime?: NodeBodyLock.LifetimeEnum;
    }

    namespace NodeBodyLock {
        enum TypeEnum {
            ALLOW_OWNER_CHANGES,
            FULL
        }
        enum LifetimeEnum {
            PERSISTENT,
            EPHEMERAL
        }
    }

    export interface MoveBody {
        targetParentId?: string;
        name?: string;
    }

    export interface NodeChildAssociation extends Node {
        association?: ChildAssociationInfo;
    }

    export interface NodeChildAssociationEntry {
        entry?: NodeChildAssociation;
    }

    export interface NodeChildAssociationPaging {
        list?: NodeChildAssociationPagingList;
    }

    export interface NodeChildAssociationPagingList {
        entries?: Array<NodeChildAssociationEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export interface NodeEntry {
        entry?: Node;
    }

    export interface NodePaging {
        list?: NodePagingList;
    }

    export interface NodePagingList {
        entries?: Array<NodeEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export interface Pagination {
        count?: number;
        hasMoreItems?: boolean;
        totalItems?: number;
        skipCount?: number;
        maxItems?: number;
    }

    export interface PathElement {
        id?: string;
        name?: string;
    }

    export interface PathInfo {
        elements?: Array<PathElement>;
        name?: string;
        isComplete?: boolean;
    }

    export interface PermissionElement {
        authorityId?: string;
        name?: string;
        accessStatus?: PermissionElement.AccessStatusEnum;
    }

    namespace PermissionElement {
        enum AccessStatusEnum {
            ALLOWED,
            DENIED
        }
    }

    export interface PermissionsBodyUpdate {
        isInheritanceEnabled?: boolean;
        locallySet?: Array<PermissionElement>;
    }

    export interface PermissionsInfo {
        isInheritanceEnabled?: boolean;
        inherited?: Array<PermissionElement>;
        locallySet?: Array<PermissionElement>;
        settable?: Array<string>;
    }

    export interface Person {
        id?: string;
        firstName?: string;
        lastName?: string;
        description?: string;
        avatarId?: string;
        email?: string;
        skypeId?: string;
        googleId?: string;
        instantMessageId?: string;
        jobTitle?: string;
        location?: string;
        company?: Company;
        mobile?: string;
        telephone?: string;
        statusUpdatedAt?: Date;
        userStatus?: string;
        enabled?: boolean;
        emailNotificationsEnabled?: boolean;
        aspectNames?: Array<string>;
        properties?: {
            [key: string]: string;
        };
    }

    export interface PersonBodyadd {
        id?: string;
        firstName?: string;
        lastName?: string;
        description?: string;
        email?: string;
        skypeId?: string;
        googleId?: string;
        instantMessageId?: string;
        jobTitle?: string;
        location?: string;
        company?: Company;
        mobile?: string;
        telephone?: string;
        userStatus?: string;
        enabled?: boolean;
        emailNotificationsEnabled?: boolean;
        password?: string;
        aspectNames?: Array<string>;
        properties?: {
            [key: string]: string;
        };
    }

    export interface PersonBodyUpdate {
        firstName?: string;
        lastName?: string;
        description?: string;
        email?: string;
        skypeId?: string;
        googleId?: string;
        instantMessageId?: string;
        jobTitle?: string;
        location?: string;
        company?: Company;
        mobile?: string;
        telephone?: string;
        userStatus?: string;
        enabled?: boolean;
        emailNotificationsEnabled?: boolean;
        password?: string;
        oldPassword?: string;
        aspectNames?: Array<string>;
        properties?: {
            [key: string]: string;
        };
    }

    export interface PersonEntry {
        entry?: Person;
    }

    export interface PersonNetwork {
        id?: string;
        homeNetwork?: boolean;
        isEnabled?: boolean;
        adddAt?: Date;
        paidNetwork?: boolean;
        subscriptionLevel?: PersonNetwork.SubscriptionLevelEnum;
        quotas?: Array<NetworkQuota>;
    }

    namespace PersonNetwork {
        enum SubscriptionLevelEnum {
            Free,
            Standard,
            Enterprise
        }
    }

    export interface PersonNetworkEntry {
        entry?: PersonNetwork;
    }

    export interface PersonNetworkPaging {
        list?: PersonNetworkPagingList;
    }

    export interface PersonNetworkPagingList {
        entries?: Array<PersonNetworkEntry>;
        pagination?: Pagination;
    }

    export interface PersonPaging {
        list?: PersonPagingList;
    }

    export interface PersonPagingList {
        entries?: Array<PersonEntry>;
        pagination?: Pagination;
    }

    export interface Preference {
        id?: string;
        value?: string;
    }

    export interface PreferenceEntry {
        entry?: Preference;
    }

    export interface PreferencePaging {
        list?: PreferencePagingList;
    }

    export interface PreferencePagingList {
        entries?: Array<PreferenceEntry>;
        pagination?: Pagination;
    }

    export interface Rating {
        id?: string;
        aggregate?: RatingAggregate;
        ratedAt?: Date;
        myRating?: string;
    }

    export interface RatingAggregate {
        average?: number;
        numberOfRatings?: number;
    }

    export interface RatingBody {
        id?: RatingBody.IdEnum;
        myRating?: string;
    }

    namespace RatingBody {
        enum IdEnum {
            likes,
            fiveStar
        }
    }

    export interface RatingEntry {
        entry?: Rating;
    }

    export interface RatingPaging {
        list?: RatingPagingList;
    }

    export interface RatingPagingList {
        entries?: Array<RatingEntry>;
        pagination?: Pagination;
    }

    export interface Rendition {
        id?: string;
        content?: ContentInfo;
        status?: Rendition.StatusEnum;
    }

    namespace Rendition {
        enum StatusEnum {
            CREATED,
            NOT_CREATED
        }
    }

    export interface RenditionBody {
        id?: string;
    }

    export interface RenditionEntry {
        entry?: Rendition;
    }

    export interface RenditionPaging {
        list?: RenditionPagingList;
    }

    export interface RenditionPagingList {
        entries?: Array<RenditionEntry>;
        pagination?: Pagination;
    }

    export interface RevertBody {
        majorVersion?: boolean;
        comment?: string;
    }

    export interface SharedLink {
        id?: string;
        expiresAt?: Date;
        nodeId?: string;
        name?: string;
        modifiedAt?: Date;
        modifiedByUser?: UserInfo;
        sharedByUser?: UserInfo;
        content?: ContentInfo;
        allowableOperations?: Array<string>;
    }

    export interface SharedLinkBody {
        nodeId?: string;
        expiresAt?: Date;
    }

    export interface EmailSharedLinkBody {
        client?: string;
        message?: string;
        locale?: string;
        recipientEmails?: Array<string>;
    }

    export interface SharedLinkEntry {
        entry?: SharedLink;
    }

    export interface SharedLinkPaging {
        list?: SharedLinkPagingList;
    }

    export interface SharedLinkPagingList {
        entries?: Array<SharedLinkEntry>;
        pagination?: Pagination;
    }

    export interface Site {
        id?: string;
        guid?: string;
        title?: string;
        description?: string;
        visibility?: Site.VisibilityEnum;
        preset?: string;
        role?: Site.RoleEnum;
    }

    namespace Site {
        enum VisibilityEnum {
            PRIVATE,
            MODERATED,
            PUBLIC
        }
        enum RoleEnum {
            SiteConsumer,
            SiteCollaborator,
            SiteContributor,
            SiteManager
        }
    }

    export interface SiteBodyadd {
        id?: string;
        title?: string;
        description?: string;
        visibility?: SiteBodyadd.VisibilityEnum;
    }

    export interface SiteBody {
        id?: string;
        title?: string;
        description?: string;
        visibility?: SiteBodyadd.VisibilityEnum;
    }

    namespace SiteBodyadd {
        enum VisibilityEnum {
            PUBLIC,
            PRIVATE,
            MODERATED
        }
    }

    export interface SiteBodyUpdate {
        title?: string;
        description?: string;
        visibility?: SiteBodyUpdate.VisibilityEnum;
    }

    namespace SiteBodyUpdate {
        enum VisibilityEnum {
            PRIVATE,
            MODERATED,
            PUBLIC
        }
    }

    export interface SiteContainer {
        id?: string;
        folderId?: string;
    }

    export interface SiteContainerEntry {
        entry?: SiteContainer;
    }

    export interface SiteContainerPaging {
        list?: SiteContainerPagingList;
    }

    export interface SiteContainerPagingList {
        entries?: Array<SiteContainerEntry>;
        pagination?: Pagination;
    }

    export interface SiteEntry {
        entry?: Site;
    }

    export interface SiteMember {
        id?: string;
        person?: Person;
        role?: SiteMember.RoleEnum;
    }

    export interface SiteMemberBody {
        id?: string;
        role?: SiteMember.RoleEnum;
    }

    export interface SiteMemberRoleBody {
        role?: SiteMember.RoleEnum;
    }

    namespace SiteMember {
        enum RoleEnum {
            SiteConsumer,
            SiteCollaborator,
            SiteContributor,
            SiteManager
        }
    }

    export interface SiteMemberEntry {
        entry?: SiteMember;
    }

    export interface SiteMemberPaging {
        list?: SiteMemberPagingList;
    }

    export interface SiteMemberPagingList {
        entries?: Array<SiteMemberEntry>;
        pagination?: Pagination;
    }

    export interface SiteMembershipBodyadd {
        role?: SiteMembershipBodyadd.RoleEnum;
        id?: string;
    }

    namespace SiteMembershipBodyadd {
        enum RoleEnum {
            SiteConsumer,
            SiteCollaborator,
            SiteContributor,
            SiteManager
        }
    }

    export interface SiteMembershipBodyUpdate {
        role?: SiteMembershipBodyUpdate.RoleEnum;
    }

    namespace SiteMembershipBodyUpdate {
        enum RoleEnum {
            SiteConsumer,
            SiteCollaborator,
            SiteContributor,
            SiteManager
        }
    }

    export interface SiteMembershipRequest {
        id?: string;
        adddAt?: Date;
        site?: Site;
        message?: string;
    }

    export interface SiteMembershipRequestBody {
        message?: string;
        id?: string;
        title?: string;
    }

    export interface SiteMembershipRequestBodyUpdate {
        message?: string;
    }

    export interface SiteMembershipRequestEntry {
        entry?: SiteMembershipRequest;
    }

    export interface SiteMembershipRequestPaging {
        list?: SiteMembershipRequestPagingList;
    }

    export interface SiteMembershipRequestPagingList {
        entries?: Array<SiteMembershipRequestEntry>;
        pagination?: Pagination;
    }

    export interface SitePaging {
        list?: SitePagingList;
    }

    export interface SitePagingList {
        entries?: Array<SiteEntry>;
        pagination?: Pagination;
    }

    export interface SiteRole {
        site?: Site;
        id?: string;
        guid?: string;
        role?: SiteRole.RoleEnum;
    }

    namespace SiteRole {
        enum RoleEnum {
            SiteConsumer,
            SiteCollaborator,
            SiteContributor,
            SiteManager
        }
    }

    export interface SiteRoleEntry {
        entry?: SiteRole;
    }

    export interface SiteRolePaging {
        list?: SiteRolePagingList;
    }

    export interface SiteRolePagingList {
        entries?: Array<SiteRoleEntry>;
        pagination?: Pagination;
    }

    export interface Tag {
        id?: string;
        tag?: string;
    }

    export interface TagBody {
        tag?: string;
    }

    export interface TagEntry {
        entry?: Tag;
    }

    export interface TagPaging {
        list?: TagPagingList;
    }

    export interface TagPagingList {
        entries?: Array<TagEntry>;
        pagination?: Pagination;
    }

    export interface UserInfo {
        displayName?: string;
        id?: string;
    }

    export interface Version {
        id?: string;
        versionComment?: string;
        name?: string;
        nodeType?: string;
        isFolder?: boolean;
        isFile?: boolean;
        modifiedAt?: Date;
        modifiedByUser?: UserInfo;
        content?: ContentInfo;
        aspectNames?: Array<string>;
        properties?: {
            [key: string]: string;
        };
    }

    export interface VersionEntry {
        entry?: Version;
    }

    export interface VersionPaging {
        list?: VersionPagingList;
    }

    export interface VersionPagingList {
        entries?: Array<VersionEntry>;
        pagination?: Pagination;
    }

    //  ======= Core End ======


    //  ======= Auth Start ======


    //  ======= Auth End ======


    //  ======= Search Start ======


    //  ======= Search End ======

    export interface Activiti {
        new(config: any): Activiti;
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
        modelJsonBpmnApi: any;
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
        processInstanceVariablesApi: any;
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
        reportApi: any;

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
        RestVariable: RestVariable;
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

    export interface Core {
        associationsApi: AssociationsApi;
        changesApi: any;
        childAssociationsApi: ChildAssociationsApi;
        commentsApi: CommentsApi;
        customModelApi: CustomModelApi;
        downloadsApi: DownloadsApi;
        favoritesApi: FavoritesApi;
        networksApi: NetworksApi;
        nodesApi: NodesApi;
        peopleApi: PeopleApi;
        ratingsApi: RatingsApi;
        renditionsApi: RenditionsApi;
        searchApi: any;
        sharedlinksApi: SharedlinksApi;
        sitesApi: SitesApi;
        queriesApi: QueriesApi;
        tagsApi: TagsApi;
        webscriptApi: WebscriptApi;

        /*Models*/
        Activity: Activity;
        ActivityActivitySummary: any;
        ActivityEntry: ActivityEntry;
        ActivityPaging: ActivityPaging;
        ActivityPagingList: ActivityPagingList;
        AssocChildBody: AssocChildBody;
        AssocInfo: any;
        AssocTargetBody: AssocTargetBody;
        ChildAssocInfo: any;
        Comment: Comment;
        CommentBody: CommentBody;
        CommentEntry: CommentEntry;
        CommentPaging: CommentPaging;
        CommentPagingList: CommentPagingList;
        Company: Company;
        ContentInfo: ContentInfo;
        CopyBody: CopyBody;
        DeletedNode: DeletedNode;
        DeletedNodeEntry: DeletedNodeEntry;
        DeletedNodeMinimal: any;
        DeletedNodeMinimalEntry: DeletedNodeMinimalEntry;
        DeletedNodesPaging: DeletedNodesPaging;
        DeletedNodesPagingList: DeletedNodesPagingList;
        EmailSharedLinkBody: EmailSharedLinkBody;
        Error: Error;
        ErrorError: ErrorError;
        Favorite: Favorite;
        FavoriteBody: FavoriteBody;
        FavoriteEntry: FavoriteEntry;
        FavoritePaging: FavoritePaging;
        FavoritePagingList: FavoritePagingList;
        FavoriteSiteBody: FavoriteSiteBody;
        InlineResponse201: any;
        InlineResponse201Entry: any;
        MoveBody: MoveBody;
        NetworkQuota: NetworkQuota;
        NodeAssocMinimal: any;
        NodeAssocMinimalEntry: any;
        NodeAssocPaging: any;
        NodeAssocPagingList: any;
        NodeBody: NodeBody;
        NodeChildAssocMinimal: any;
        NodeChildAssocMinimalEntry: any;
        NodeChildAssocPaging: any;
        NodeChildAssocPagingList: any;
        NodeEntry: NodeEntry;
        NodeFull: any;
        NodeMinimal: any;
        NodeMinimalEntry: any;
        NodePaging: NodePaging;
        NodePagingList: NodePagingList;
        NodeSharedLink: any;
        NodeSharedLinkEntry: any;
        NodeSharedLinkPaging: any;
        NodeSharedLinkPagingList: any;
        NodesnodeIdchildrenContent: any;
        Pagination: Pagination;
        PathElement: PathElement;
        PathInfo: PathElement;
        Person: Person;
        PersonEntry: PersonEntry;
        PersonNetwork: PersonNetwork;
        PersonNetworkEntry: PersonNetworkEntry;
        PersonNetworkPaging: PersonNetworkPaging;
        PersonNetworkPagingList: PersonNetworkPagingList;
        Preference: Preference;
        PreferenceEntry: PreferenceEntry;
        PreferencePaging: PreferencePaging;
        PreferencePagingList: PreferencePagingList;
        Rating: Rating;
        RatingAggregate: RatingAggregate;
        RatingBody: RatingBody;
        RatingEntry: RatingEntry;
        RatingPaging: RatingPaging;
        RatingPagingList: RatingPagingList;
        Rendition: Rendition;
        RenditionBody: RenditionBody;
        RenditionEntry: RenditionEntry;
        RenditionPaging: RenditionPaging;
        RenditionPagingList: RenditionPagingList;
        SharedLinkBody: SharedLinkBody;
        Site: Site;
        SiteBody: any;
        SiteContainer: SiteContainer;
        SiteContainerEntry: SiteContainerEntry;
        SiteContainerPaging: SiteContainerPaging;
        SiteEntry: SiteEntry;
        SiteMember: SiteMember;
        SiteMemberBody: any;
        SiteMemberEntry: SiteMemberEntry;
        SiteMemberPaging: SiteMemberPaging;
        SiteMemberRoleBody: any;
        SiteMembershipBody: any;
        SiteMembershipRequest: SiteMembershipRequest;
        SiteMembershipRequestEntry: SiteMembershipRequestEntry;
        SiteMembershipRequestPaging: SiteMembershipRequestPaging;
        SiteMembershipRequestPagingList: SiteMembershipRequestPagingList;
        SitePaging: SitePaging;
        SitePagingList: SitePagingList;
        Tag: Tag;
        TagBody: TagBody;
        TagEntry: TagEntry;
        TagPaging: TagPaging;
        TagPagingList: TagPagingList;
        UserInfo: UserInfo;
    }

    export interface CustomModelApi {
        createCustomModel(status: string, description: string, name: string, namespaceUri: string, namespacePrefix: string): Promise<{}>;
        createCustomType(modelName: string, name: string, parentName: string, title, description: string): Promise<{}>;
        createCustomAspect(modelName: string, name: string, parentName: string, title, description: string): Promise<{}>;
        createCustomConstraint(modelName: string, name: string, type: string, parameters: any): Promise<{}>;
        activateCustomModel(modelName: string): Promise<{}>;
        deactivateCustomModel(modelName: string): Promise<{}>;
        addPropertyToAspect(modelName: string, aspectName: string, properties: any): Promise<{}>;
        addPropertyToType(modelName: string, updateCustomModel, properties: any): Promise<{}>;
        updateCustomModel(modelName: string, description: string, namespaceUri: string, namespacePrefix: string): Promise<{}>;
        updateCustomType(modelName: string, typeName: string, description: string, parentName: string, title: string): Promise<{}>;
        updateCustomAspect(modelName: string, aspectName: string, description: string, parentName: string, title: string): Promise<{}>;
        getAllCustomModel(): Promise<{}>;
        getCustomModel(modelName: string, queryParams: any): Promise<{}>;
        getAllCustomType(modelName: string): Promise<{}>;
        getCustomType(modelName: string, typeName: string, queryParams: any): Promise<{}>;
        getAllCustomAspect(modelName: string): Promise<{}>;
        getCustomAspect(modelName: string, aspectName: string, queryParams: any): Promise<{}>;
        getAllCustomConstraints(modelName: string): Promise<{}>;
        getCustomConstraints(modelName: string, constraintName: string, queryParams: any): Promise<{}>;
        deleteCustomModel(modelName: string): Promise<{}>;
        deleteCustomType(modelName: string, typeName: string): Promise<{}>;
    }

    export interface AlfrescoApiConfig {
        hostEcm?: string;
        hostBpm?: string;
        oauth2?: Oauth2Config;
        contextRoot?: string;
        contextRootBpm?: string;
        provider?: string;
        ticketEcm?: string;
        ticketBpm?: string;
        disableCsrf?: boolean;
    }

    export interface RestVariable {
        name?: string;
        scope?: string;
        type?: string;
        value?: string;
        valueUrl?: string;
    }

    export interface ContentApi {
        new(ecmAuth: any): ContentApi;

        getDocumentThumbnailUrl(nodeId: string, attachment?: boolean, ticket?: string): string;
        getDocumentPreviewUrl(nodeId: string, attachment?: boolean, ticket?: string): string;
        getContentUrl(nodeId: string, attachment?: boolean, ticket?: string): string;
        getRenditionUrl(nodeId: string, encoding: string, attachment?: boolean, ticket?: string): string;
    }

    export interface AuthApi {
        new(config: AlfrescoApiConfig): AuthApi;

        changeHost(host: string): void;
        login(username: string, password: string): Promise<string>;
        logout(): Promise<string>;
        setTicket(ticket: string): void;
        getTicket(): string;
        isLoggedIn(): boolean;
        getClient(): any;

        username: string;

    }

    export interface UploadApi {
        new(config: AlfrescoApiConfig): UploadApi;

        uploadFile(fileDefinition?: any, relativePath?: any, nodeId?: any, nodeBody?: any, opts?: any): any;
        addNodeUpload(nodeId?: any, nodeBody?: any, opts?: any, formParams?: any): any;
    }

    export interface BpmAuthApi extends AuthApi {

    }

    export interface OauthApi extends AuthApi {
        refresh(): Promise<string>;
    }

    export interface EcmAuthApi extends AuthApi {
        validateTicket(): Promise<string>;
    }

    export interface Oauth2Config {
        clientId?: string;
        secret?: string;
        host?: string;
    }

}

export = AlfrescoApi;
