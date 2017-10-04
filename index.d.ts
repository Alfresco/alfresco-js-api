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
        deleteNode(nodeId: string): Promise<any>;
        getDeletedNode(nodeId: string, opts?: any): Promise<DeletedNodeEntity>;
        getDeletedNodes(opts?: any): Promise<DeletedNodesPaging>;
        getFileContent(nodeId: string, opts?: any): Promise<any>;
        getNode(nodeId: string, opts?: any): Promise<MinimalNodeEntity>;
        getNodeChildren(nodeId: string, opts?: any): Promise<NodePaging>;
        moveNode(nodeId: string, moveBody: any, opts?: any): Promise<MinimalNodeEntity>;
        purgeDeletedNode(nodeId: string): Promise<any>;
        restoreNode(nodeId: string): Promise<MinimalNodeEntity>;
        updateFileContent(nodeId: string, contentBody: string, opts?: any): Promise<MinimalNodeEntity>;
        updateNode(nodeId: string, nodeBody: any, opts?: any): Promise<MinimalNodeEntity>;
        getNodeInfo(nodeId: string, opts?: any): Promise<MinimalNodeEntryEntity>;
        deleteNodePermanent(nodeId: string): Promise<any>;
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

        addSiteMember(siteId?: string, siteMemberBody?: SiteMemberBody): Promise<{}>;
        createSite(siteBody?: SiteBody, opts?: { skipConfiguration?: Boolean, skipAddToFavorites?: Boolean }): Promise<{}>;
        deleteSite(siteId?: string, opts?: { permanent?: Boolean }): Promise<{}>;
        getSite(siteId?: string, opts?: { relations?: Array<string>, fields?: Array<string> }): Promise<{}>;
        getSiteContainer(siteId?: string, containerld?: string, opts?: Array<string>): Promise<{}>;
        getSiteContainers(siteId?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<{}>;
        getSiteMember(siteId?: string, personld?: string, opts?: { fields?: Array<string> }): Promise<{}>;
        getSiteMembers(siteId?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<{}>;
        getSites(opts?: { skipCount?: number, maxltems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<{}>;
        removeSiteMember(siteId?: string, personld?: string): Promise<{}>;
        updateSiteMember(siteId?: string, personld?: string, siteMemberRoleBody?: SiteMemberRoleBody): Promise<{}>;
    }

    export interface PeopleApi {
        new(client: ApiClient): PeopleApi;

        addFavorite(personld?: string, favoriteBody?: FavoriteBody): Promise<FavoriteEntry>;
        addSiteMembershipRequest(personld?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<SiteMembershipRequestEntry>;
        deleteFavoriteSite(personld?: string, siteId?: string): Promise<{}>;
        favoriteSite(personld?: string, favoriteSiteBody?: FavoriteSiteBody): Promise<FavoriteEntry>;
        getActivities(personld?: string, opts?: { skipCount?: number, maxltems?: number, who?: string, siteId?: string, fields?: Array<string> }): Promise<ActivityPaging>;
        getFavorite(personld?: string, favoriteld?: string, opts?: { fields?: Array<string> }): Promise<FavoriteEntry>;
        getFavoriteSite(personld?: string, siteId?: string, opts?: { fields?: Array<string> }): Promise<SiteEntry>;
        getFavoriteSites(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<SitePaging>;
        getFavorites(personld?: string, opts?: { skipCount?: number, maxltems?: number, where?: string, fields?: Array<string> }): Promise<FavoritePaging>;
        getPerson(personld?: string, opts?: { fields?: Array<string> }): Promise<PersonEntry>;
        getPersonNetwork(personld?: string, networkId?: string, opts?: { fields?: Array<string> }): Promise<PersonNetworkEntry>;
        getPersonNetworks(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<PersonNetworkPaging>;
        getPreference(personld?: string, preferenceName?: string, opts?: { fields?: Array<string> }): Promise<PreferenceEntry>;
        getPreferences(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<PreferencePaging>;
        getSiteMembership(personld?: string, opts?: { skipCount?: number, maxltems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;
        getSiteMembershipRequest(personld?: string, siteId?: string, opts?: { fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;
        getSiteMembershipRequests(personld?: string, opts?: { skipCount?: number, maxltems?: number, fields?: Array<string> }): Promise<SiteMembershipRequestPaging>;
        removeFavoriteSite(personld?: string, favoriteld?: string): Promise<{}>;
        removeSiteMembershipRequest(personld?: string, siteId?: string): Promise<{}>;
        updateSiteMembershipRequest(personld?: string, siteId?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<{}>;
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
        cancelDownload(downloadId: string): Promise<any>;
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


    // ======= Process service Start ======

    export interface AdminEndpointsApi {
        new(client?: ApiClient): AdminEndpointsApi;

        createBasicAuthConfiguration(createRepresentation?: CreateEndpointBasicAuthRepresentation): Promise<EndpointBasicAuthRepresentation>;
        createEndpointConfiguration(representation?: EndpointConfigurationRepresentation): Promise<EndpointConfigurationRepresentation>;
        getBasicAuthConfiguration(basicAuthId?: number, tenantId?: number): Promise<EndpointBasicAuthRepresentation>;
        getBasicAuthConfigurations(tenantId?: number): Promise<EndpointBasicAuthRepresentation[]>;
        getEndpointConfiguration(endpointConfigurationId?: number, tenantId?: number): Promise<EndpointConfigurationRepresentation>;
        getEndpointConfigurations(tenantId?: number): Promise<EndpointConfigurationRepresentation[]>;
        removeBasicAuthConfiguration(basicAuthId?: number, tenantId?: number): Promise<any>;
        removeEndpointConfiguration(endpointConfigurationId?: number, tenantId?: number): Promise<any>;
        updateBasicAuthConfiguration(basicAuthId?: number, createRepresentation?: CreateEndpointBasicAuthRepresentation): Promise<EndpointBasicAuthRepresentation>;
        updateEndpointConfiguration(endpointConfigurationId?: number, representation?: EndpointConfigurationRepresentation): Promise<EndpointConfigurationRepresentation>;
    }

    export interface AdminGroupsApi {
        new(client?: ApiClient): AdminGroupsApi;

        activate(groupId?: number): Promise<any>;
        addAllUsersToGroup(groupId?: number): Promise<any>;
        addGroupCapabilities(groupId?: number, addGroupCapabilitiesRepresentation?: AddGroupCapabilitiesRepresentation): Promise<any>;
        addGroupMember(groupId?: number, userId?: number): Promise<any>;
        addRelatedGroup(groupId?: number, relatedgroupId?: number, type?: string): Promise<any>;
        createNewGroup(groupRepresentation?: GroupRepresentation): Promise<GroupRepresentation>;
        deleteGroupCapability(groupId?: number, groupCapabilityId?: number): Promise<any>;
        deleteGroupMember(groupId?: number, userId?: number): Promise<any>;
        deleteGroup(groupId?: number): Promise<any>;
        deleteRelatedGroup(groupId?: number, relatedgroupId?: number): Promise<any>;
        getCapabilities(groupId?: number): Promise<String[]>;
        getGroupUsers(groupId?: number, opts?: {filter?: string, page?: number, pageSize?: number}): Promise<any>;
        getGroup(groupId?: number, opts?: {includeAllUsers?: boolean, summary?: boolean}): Promise<AbstractGroupRepresentation>;
        getGroups(opts?: {tenantId?: number, functional?: boolean, summary?: boolean}): Promise<LightGroupRepresentation[]>;
        getRelatedGroups(groupId?: number): Promise<LightGroupRepresentation[]>;
        updateGroup(groupId?: number, groupRepresentation?: GroupRepresentation): Promise<GroupRepresentation>;
    }

    export interface AdminTenantsApi {
        new(client?: ApiClient): AdminTenantsApi;

        createTenant(createTenantRepresentation?: CreateTenantRepresentation): Promise<LightTenantRepresentation>;
        deleteTenant(tenantId?: number): Promise<any>;
        getTenantEvents(tenantId?: number): Promise<TenantEvent[]>;
        getTenantLogo(tenantId?: number): Promise<any>;
        getTenant(tenantId?: number): Promise<TenantRepresentation>;
        getTenants(): Promise<LightTenantRepresentation[]>;
        update(tenantId?: number, createTenantRepresentation?: CreateTenantRepresentation): Promise<TenantRepresentation>;
        uploadTenantLogo(tenantId?: number, file?: File): Promise<ImageUploadRepresentation>;
    }

    export interface AdminUsersApi {
        new(client?: ApiClient): AdminUsersApi;

        bulkUpdateUsers(update?: BulkUserUpdateRepresentation): Promise<any>;
        createNewUser(userRepresentation?: UserRepresentation): Promise<UserRepresentation>;
        getUser(userId?: number, opts?: {summary?: boolean}): Promise<AbstractUserRepresentation>;
        getUsers(opts?: {filter?: string, status?: string, accountType?: string, sort?: string, company?: string, start?: number, page?: number, size?: number, groupId?: number, tenantId?: number, summary?: boolean}): Promise<any>;
        updateUserDetails(userId?: number, UserRepresentation?: UserRepresentation): Promise<any>;

    }

    export interface AppsApi {
        new(client?: ApiClient): AppsApi;

        deployAppDefinitions(saveObject?: RuntimeAppDefinitionSaveRepresentation): Promise<any>;
        exportAppDefinition(modelId?: number): Promise<any>;
        getAppDefinitions(): Promise<any>;
        importAppDefinition(file?: File): Promise<AppDefinitionRepresentation>;
        publishAppDefinition(modelId?: number, publishModel?: AppDefinitionPublishRepresentation): Promise<AppDefinitionUpdateResultRepresentation>;
    }

    export interface AlfrescoApi {
        new(client?: ApiClient): AlfrescoApi;

        confirmAuthorisation(code: string): Promise<any>;
        getAllNetworks(): Promise<any>;
        getAllSites(networkId: string): Promise<any>;
        getContentInFolder(networkId: string, folderId: string): Promise<any>;
        getContentInSite(networkId: string, siteId: string): Promise<any>;
        getRepositories(opts: {tenantId: number, includeAccounts: boolean}): Promise<any>;
    }

    export interface AppsDefinitionApi {
        new(client?: ApiClient): AppsDefinitionApi;

        exportAppDefinition(modelId?: number): Promise<any>;
        importAppDefinition(file?: File): Promise<AppDefinitionRepresentation>;
        importAppDefinition(modelId?: number, file?: File): Promise<AppDefinitionRepresentation>;
        publishAppDefinition(modelId?: number, publishModel?: AppDefinitionPublishRepresentation): Promise<AppDefinitionUpdateResultRepresentation>;
    }

    export interface AppsRuntimeApi {
        new(client?: ApiClient): AppsRuntimeApi;

        deployAppDefinitions(saveObject?: RuntimeAppDefinitionSaveRepresentation): Promise<any>;
        getAppDefinitions(): Promise<any>;
    }

    export interface CommentsApi {
        new(client?: ApiClient): CommentsApi;

        addProcessInstanceComment(commentRequest?: CommentRepresentation, processInstanceId?: string): Promise<CommentRepresentation>;
        addTaskComment(commentRequest?: CommentRepresentation, taskId?: string): Promise<CommentRepresentation>;
        getProcessInstanceComments(processInstanceId?: string, opts?: {latestFirst?: boolean}): Promise<any>;
        getTaskComments(taskId?: string, opts?: {latestFirst?: boolean}): Promise<any>;
    }

    export interface ContentApi {
        new(client?: ApiClient): ContentApi;

        createRelatedContentOnProcessInstance(processInstanceId?: string, relatedContent?: RelatedContentRepresentation, opts): Promise<RelatedContentRepresentation>;
        createRelatedContentOnTask(taskId?: string, relatedContent?: RelatedContentRepresentation, opts?: {isRelatedContent?: boolean}): Promise<RelatedContentRepresentation>;
        createTemporaryRawRelatedContent(file?: File): Promise<RelatedContentRepresentation>;
        createTemporaryRelatedContent(relatedContent?: RelatedContentRepresentation): Promise<RelatedContentRepresentation>;
        deleteContent(contentId?: number): Promise<any>;
        getContent(contentId?: number): Promise<RelatedContentRepresentation>;
        getProcessInstanceContent(processInstanceId?: string): Promise<any>;
        getRawContent(contentId?: number): Promise<any>;
        getRawContentUrl(contentId?: number): string;
        getContentThumbnailUrl(contentId?: number): string;
        getRelatedContentForProcessInstance(processInstanceId?: string, isRelated?: boolean): Promise<any>;
        getRelatedContentForTask(taskId?: string, isRelated?: Boolean): Promise<any>;
    }

    export interface EditorApi {
        new(client?: ApiClient): EditorApi;

        getFormHistory(formId?: number, formHistoryId?: number): Promise<FormRepresentation>;
        getForm(formId?: number): Promise<FormRepresentation>;
        getForms(): Promise<FormRepresentation[]>;
        saveForm(formId?: number, saveRepresentation?: FormSaveRepresentation): Promise<FormRepresentation>;
        validateModel(formId?: number, saveRepresentation?: FormSaveRepresentation): Promise<ValidationErrorRepresentation[]>;
    }

    export interface GroupsApi {
        new(client?: ApiClient): GroupsApi;

        getGroups(opts?: {filter?: string, groupId?: number, externalId?: string, externalIdCaseInsensitive?: string, tenantId?: number}): Promise<any>;
        getUsersForGroup(groupId?: number): Promise<any>;

    }

    export interface IDMSyncApi {
        new(client?: ApiClient): IDMSyncApi;

        getLogFile(syncLogEntryId?: number): Promise<any>;
        getSyncLogEntries(opts?: {tenantId?: number, page?: number, size?: number}): Promise<SyncLogEntryRepresentation[]>;
    }

    export interface IntegrationAccountApi {
        new(client?: ApiClient): IntegrationAccountApi;

        getAccounts(): Promise<any>;
    }

    export interface IntegrationAlfrescoCloudApi {
        new(client?: ApiClient): IntegrationAlfrescoCloudApi;

        confirmAuthorisation(code?: string): Promise<any>;
        getAllNetworks(): Promise<any>;
        getAllSites(networkId?: string): Promise<any>;
        getContentInFolder(networkId?: string, folderId?: string): Promise<any>;
        getContentInSite(networkId?: string, siteId?: string): Promise<any>;
    }

    export interface IntegrationAlfrescoOnPremiseApi {
        new(client?: ApiClient): IntegrationAlfrescoOnPremiseApi;

        getAllSites(repositoryId?: string): Promise<any>;
        getContentInFolder(repositoryId?: string, folderId?: string): Promise<any>;
        getContentInSite(repositoryId?: string, siteId?: string): Promise<any>;
        getRepositories(opts?: {tenantId?: number, includeAccounts?: boolean}): Promise<any>;
    }

    export interface IntegrationApi {
        new(client?: ApiClient): IntegrationApi;

        confirmAuthorisation(code?: string): Promise<any>;
        createRepositoryAccount(userId?: number, credentials?: UserAccountCredentialsRepresentation): Promise<any>;
        deleteRepositoryAccount(userId?: number): Promise<any>;
        getAllNetworks(): Promise<any>;
        getAllSites(networkId?: string): Promise<any>;
        getBoxPluginStatus(): Promise<boolean>;
        getContentInFolder(networkId?: string, folderId?: string): Promise<any>;
        getContentInSite(networkId?: string, siteId?: string): Promise<any>;
        getFiles(opts?: {filter?: string, parent?: string}): Promise<any>;
        getRepositories(opts?: {tenantId?: number, includeAccounts?: boolean}): Promise<any>;
        getRepositoryAccount(userId?: number): Promise<any>;
        updateRepositoryAccount(userId?: number, credentials?: UserAccountCredentialsRepresentation): Promise<any>;
    }

    export interface ModelBpmnApi {
        new(client?: ApiClient): ModelBpmnApi;

        getHistoricProcessModelBpmn20Xml(processModelId?: number, processModelHistoryId?: number): Promise<any>;
        getProcessModelBpmn20Xml(processModelId?: number): Promise<any>;
    }

    export interface ModelJsonBpmnApi {
        new(client?: ApiClient): ModelJsonBpmnApi;

        getHistoricEditorDisplayisonClient(processModelId?: number, processModelHistoryId?: number): Promise<any>;
        getEditorDisplayisonClient(processModelId?: number): Promise<any>;
    }

    export interface ModelsApi {
        new(client?: ApiClient): ModelsApi;

        createModel(modelRepresentation?: ModelRepresentation): Promise<ModelRepresentation>;
        deleteModel(modelId?: number, opts?: {cascade?: boolean, deleteRuntimeApp?: boolean}): Promise<any>;
        duplicateModel(modelId?: number, modelRepresentation?: ModelRepresentation): Promise<ModelRepresentation>;
        getModelJSON(modelId?: number): Promise<any>;
        getModelThumbnail(modelId?: number): Promise<String[]>;
        getModel(modelId?: number, opts?: {includePermissions?: boolean}): Promise<ModelRepresentation>;
        getModelsToIncludeInAppDefinition(): Promise<any>;
        getModels(opts?: {filter?: string, sort?: string, modelType?: number, referenceId?: number}): Promise<any>;
        importNewVersion(modelId?: number, file?: File): Promise<ModelRepresentation>;
        importProcessModel(file?: File): Promise<ModelRepresentation>;
        saveModel(modelId?: number, values?: any): Promise<ModelRepresentation>;
        updateModel(modelId?: number, updatedModel?: ModelRepresentation): Promise<ModelRepresentation>;
        validateModel(modelId?: number, opts?: {values?: any}): Promise<ValidationErrorRepresentation[]>;
    }

    export interface ModelsHistoryApi {
        new(client?: ApiClient): ModelsHistoryApi;

        getModelHistoryCollection(modelId?: number, opts?: {includeLatestVersion?: boolean}): Promise<any>;
        getProcessModelHistory(modelId?: number, modelHistoryId?: number): Promise<ModelRepresentation>;
    }

    export interface ProcessApi {
        new(client?: ApiClient): ProcessApi;

        deleteProcessInstance(processInstanceId?: string): Promise<any>;
        filterProcessInstances(filterRequest?: ProcessInstanceFilterRequestRepresentation): Promise<any>;
        getProcessDefinitionStartForm(processDefinitionId?: string): Promise<FormDefinitionRepresentation>;
        getProcessDefinitions(opts?: {latest?: boolean, appDefinitionId?: number}): Promise<any>;
        getProcessInstanceContent(processInstanceId?: string): Promise<any>;
        getProcessInstanceStartForm(processInstanceId?: string): Promise<FormDefinitionRepresentation>;
        getProcessInstance(processInstanceId?: string): Promise<ProcessInstanceRepresentation>;
        getProcessInstances(requestNode?: ProcessFilterRequestRepresentation): Promise<any>;
        getProcessAuditJson(processId?: string): Promise<any>;
        getProcessAuditPdf(processId?: string): Promise<any>;
        getRestFieldValues(processDefinitionId?: string, field?: string): Promise<FormValueRepresentation[]>;
        getRestTableFieldValues(processDefinitionId?: string, field?: string, column?: string): Promise<FormValueRepresentation[]>;
        startNewProcessInstance(startRequest?: CreateProcessInstanceRepresentation): Promise<ProcessInstanceRepresentation>;
    }

    export interface ProcessInstancesApi {
        new(client?: ApiClient): ProcessInstancesApi;

        addProcessInstanceComment(commentRequestModule?: CommentRepresentation, processInstanceId?: string): Promise<CommentRepresentation>;
        deleteProcessInstance(processInstanceId?: string): Promise<any>;
        getProcessInstanceComments(processInstanceId?: string, opts?: {latestFirst?: boolean}): Promise<any>;
        getProcessInstanceStartForm(processInstanceId?: string): Promise<FormDefinitionRepresentation>;
        getProcessInstance(processInstanceId?: string): Promise<ProcessInstanceRepresentation>;
    }

    export interface ProcessDefinitionsApi {
        new(client?: ApiClient): ProcessDefinitionsApi;

        getProcessDefinitions(opts?: {latest?: boolean, appDefinitionId?: number}): Promise<any>;
    }

    export interface ProcessDefinitionsFormApi {
        new(client?: ApiClient): ProcessDefinitionsApi;

        getProcessDefinitionStartForm(processDefinitionId?: string): Promise<FormDefinitionRepresentation>;
        getRestFieldValues(processDefinitionId?: string, field?: string): Promise<FormValueRepresentation[]>;
        getRestTableFieldValues(processDefinitionId?: string, field?: string, column?: string): Promise<FormValueRepresentation[]>;
    }

    export interface ProcessInstancesInformationApi {
        new(client?: ApiClient): ProcessInstancesInformationApi;

        getProcessInstanceContent(processInstanceId?: string): Promise<any>;
        startNewProcessInstance(startRequest?: CreateProcessInstanceRepresentation): Promise<ProcessInstanceRepresentation>;
    }

    export interface ProcessInstancesListingApi {
        new(client?: ApiClient): ProcessInstancesListingApi;

        filterProcessInstances(filterRequest?: ProcessInstanceFilterRequestRepresentation): Promise<any>;
        getProcessInstances(requestNode?: any): Promise<any>;
    }

    export interface ProcessInstanceVariablesApi {
        new(client?: ApiClient): ProcessInstanceVariablesApi;

        getProcessInstanceVariables(processInstanceId?: string): Promise<any>;
        createProcessInstanceVariables(processInstanceId?: string, restVariables?: RestVariable): Promise<any>;
        createorUpdateProcessInstanceVariables(processInstanceId?: string, restVariables?: RestVariable): Promise<any>;
        getProcessInstanceVariable(processInstanceId?: string, variableName?: string): Promise<any>;
        updateProcessInstanceVariable(processInstanceId?: string, variableName?: string, restVariable?: RestVariable): Promise<any>;
        deleteProcessInstanceVariable(processInstanceId?: string, variableName?: string): Promise<any>;
    }

    export interface ProcessScopeApi {
        new(client?: ApiClient): ProcessScopeApi;

        getRuntimeProcessScopes(processScopesRequest?: ProcessScopesRequestRepresentation): Promise<ProcessScopeRepresentation>;
    }

    export interface ProfileApi {
        new(client?: ApiClient): ProfileApi;

        changePassword(changePasswordRepresentation?: ChangePasswordRepresentation): Promise<any>;
        getProfilePicture(): Promise<any>;
        getProfilePictureUrl(): string;
        getProfile(): Promise<UserRepresentation>;
        updateProfile(userRepresentation?: UserRepresentation): Promise<UserRepresentation>;
        uploadProfilePicture(file?: File): Promise<ImageUploadRepresentation>;
    }

    export interface ReportApi {
        new(client?: ApiClient): ReportApi;

        createDefaultReports(): Promise<any>;
        getTasksByprocessDefinitionId(reportId, processDefinitionId): Promise<any>;
        getReportsByParams(reportId, paramsQuery): Promise<any>;
        getProcessDefinitions(): Promise<any>;
        getReportParams(reportId): Promise<any>;
        getReportList(): Promise<any>;
        updateReport(reportId, name): Promise<any>;
        exportToCsv(reportId?: string, queryParams?: ReportExportQueryRepresentation): Promise<any>;
        saveReport(reportId?: string, queryParams?: ReportSaveQueryRepresentation): Promise<any>;
        deleteReport(reportId?: string): Promise<any>;
        getTasksByProcessDefinitionId(reportId: string, processDefinitionId: string): Promise<any>
    }

    export interface ScriptFileApi {
        new(client?: ApiClient): ScriptFileApi;

        getControllers(): Promise<string>;
        getLibraries(): Promise<string>;
    }

    export interface SystemPropertiesApi {
        new(client?: ApiClient): SystemPropertiesApi;

        getProperties(): Promise<SystemPropertiesRepresentation>;
    }

    export interface TaskActionsApi {
        new(client?: ApiClient): TaskActionsApi;

        assignTask(taskId?: string, requestNode?: any): Promise<TaskRepresentation>;
        attachForm(taskId?: string, requestNode?: any): Promise<any>;
        claimTask(taskId?: string): Promise<any>;
        completeTask(taskId?: string): Promise<any>;
        involveUser(taskId?: string, requestNode?: any): Promise<any>;
        removeForm(taskId?: string): Promise<any>;
        removeInvolvedUser(taskId?: string, requestNode?: any): Promise<any>;
        unclaimTask(taskId?: string): Promise<any>;
    }

    export interface TaskApi {
        new(client?: ApiClient): TaskApi;

        addSubtask(taskId?: string, taskRepresentation?: TaskRepresentation): Promise<any>;
        addTaskComment(commentRequest?: CommentRepresentation, taskId?: string): Promise<any>;
        assignTask(taskId?: string, requestNode?: any): Promise<any>;
        attachForm(taskId?: string, requestNode?: any): Promise<any>;
        claimTask(taskId?: string): Promise<any>;
        completeTaskForm(taskId?: string, completeTaskFormRepresentation?: CompleteFormRepresentation): Promise<any>;
        completeTask(taskid?: string): Promise<any>;
        createNewTask(taskRepresentation?: TaskRepresentation): Promise<any>;
        createRelatedContentOnTask(taskId?: string, relatedContent?: RelatedContentRepresentation, opts?: {isRelatedContent?: boolean}): Promise<any>;
        deleteTask(taskId?: string): Promise<any>;
        filterTasks(requestNode?: TaskFilterRequestRepresentation): Promise<any>;
        getChecklist(taskId?: string): Promise<any>;
        getTaskAuditJson(taskId?: string): Promise<any>;
        getTaskAuditPdf(taskId?: string): Promise<any>;
        getRelatedContentForTask(taskId?: string): Promise<any>;
        getRestFieldValuesColumn(taskId?: string, field?: string, column?: string): Promise<any>;
        getRestFieldValues(taskId?: string, field?: string): Promise<any>;
        getTaskComments(taskId?: string, opts?: {latestFirst?: boolean}): Promise<any>;
        getTaskForm(taskId?: string): Promise<any>;
        getTask(taskId?: string): Promise<any>;
        involveUser(taskId?: string, requestNode?: any): Promise<any>;
        listTasks(requestNode?: TaskQueryRequestRepresentation): Promise<any>;
        orderChecklist(taskId?: String, orderRepresentation?: ChecklistOrderRepresentation): Promise<any>;
        removeForm(taskId?: String): Promise<any>;
        removeInvolvedUser(taskId?: String, requestNode?: any): Promise<any>;
        saveTaskForm(taskId?: String, saveTaskFormRepresentation?: SaveFormRepresentation): Promise<any>;
        unclaimTask(taskId?: String): Promise<any>;
        updateTask(taskId?: String, updated?: TaskUpdateRepresentation): Promise<any>;
    }

    export interface TaskCheckListApi {
        new(client?: ApiClient): TaskCheckListApi;

        addSubtask(taskId?: string, taskRepresentation?: TaskRepresentation): Promise<TaskRepresentation>;
        getChecklist(taskid?: string): Promise<any>;
        orderChecklist(taskId?: string, orderRepresentation?: ChecklistOrderRepresentation): Promise<any>;
    }

    export interface TaskFormsApi {
        new(client?: ApiClient): TaskFormsApi;

        completeTaskForm(taskId?: string, completeTaskFormRepresentation?: CompleteFormRepresentation): Promise<any>;
        getRestFieldValues(taskId?: string, field?: string, column?: string): Promise<FormValueRepresentation[]>;
        getTaskForm(taskId?: string): Promise<FormDefinitionRepresentation>;
        getTaskFormVariables(taskId?: string): Promise<FormDefinitionRepresentation>;
        saveTaskForm(taskId?: string, saveTaskFormRepresentation?: SaveFormRepresentation): Promise<any>;
    }

    export interface UserApi {
        new(client?: ApiClient): UserApi;

        executeAction(userId?: number, actionRequest?: UserActionRepresentation): Promise<any>;
        getProfilePicture(userId?: number): Promise<any>;
        getUserProfilePictureUrl(userId?: number): string;
        getUser(userId?: number): Promise<any>;
        getUsers(opts?: {filter?: String, email?: String, externalId?: String, externalIdCaseInsensitive?: String, excludeTaskId?: String, excludeProcessId?: String, groupId?: number, tenantId?: number}): Promise<any>;
        requestPasswordReset(resetPassword?: ResetPasswordRepresentation): Promise<any>;
        updateUser(userId?: number, userRequest?: UserRepresentation): Promise<any>;
    }

    export interface UserFiltersApi {
        new(client?: ApiClient): UserFiltersApi;

        createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation?: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation>;
        createUserTaskFilter(userTaskFilterRepresentation?: UserTaskFilterRepresentation): Promise<any>;
        deleteUserProcessInstanceFilter(userFilterId?: number): Promise<any>;
        deleteUserTaskFilter(userFilterId?: number): Promise<any>;
        getUserProcessInstanceFilter(userFilterId?: number): Promise<any>;
        getUserProcesslnstanceFilters(opts?: {appId?: number}): Promise<any>;
        getUserTaskFilter(userFilterId?: number): Promise<any>;
        getUserTaskFilters(opts?: {appId?: number}): Promise<any>;
        orderUserProcessInstanceFilters(filterOrderRepresentation?: UserFilterOrderRepresentation): Promise<any>;
        orderUserTaskFilters(filterOrderRepresentation?: UserFilterOrderRepresentation): Promise<any>;
        updateUserProcessInstanceFilter(userFilterId?: number, userProcessInstanceFilterRepresentation?: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation>;
        updateUserTaskFilter(userFilterId?: number, userTaskFilterRepresentation?: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation>;
    }

    export interface UsersWorkflowApi {
        new(client?: ApiClient): UsersWorkflowApi;
        getUsers(opts?: {filter?: String, email?: String, externalId?: String, externalIdCaseInsensitive?: String, excludeTaskId?: String, excludeProcessId?: String, groupId?: number, tenantId?: number}): Promise<any>;
    }

    export interface AboutApi {
        new(client?: ApiClient): AboutApi;

        getAppVersion(): Promise<any>;
    }

    export interface AbstractGroupRepresentation {
        externalId?: string;
        id: number;
        name: string;
        status: string;
    }

    export interface AbstractUserRepresentation {
        email?: string;
        firstName?: string;
        lastName?: string;
        externalId?: string;
        id: number;
        pictureId: string;
    }

    export interface AddGroupCapabilitiesRepresentation {
        capabilities?: string[];
    }

    export interface AppDefinition {
        icon?: string;
        models?: AppModelDefinition;
        publishIdentityInfo?: PublishIdentityInfoRepresentation;
        theme?: string;
    }

    export interface AppDefinitionPublishRepresentation {
        comment?: string;
        force?: boolean;
    }

    export interface AppDefinitionRepresentation {
        defaultAppId?: string;
        deploymentId?: string;
        description?: string;
        icon?: string;
        id?: number;
        modelId?: number;
        name?: string;
        tenantId?: number;
        theme?: string;
    }

    export interface AppDefinitionUpdateResultRepresentation {
        appDefinition?: AppDefinitionRepresentation;
        customData?: any;
        error?: boolean;
        errorDescription?: string;
        errorType?: number;
        message?: string;
        messageKey?: string;
    }

    export interface AppModelDefinition {
        createdBy?: number;
        createdByFullName?: string;
        description?: string;
        id?: number;
        lastUpdated?: Date;
        lastUpdatedBy?: number;
        lastUpdatedByFullName?: string;
        modelType?: number;
        name?: string;
        stencilSetId?: number;
        version?: number;
    }

    export interface BulkUserUpdateRepresentation {
        accountType?: string;
        password?: string;
        sendNotifications?: boolean;
        status?: string;
        tenantId?: number;
        users?: number[];
    }

    export interface ChangePasswordRepresentation {
        newPassword?: string;
        oldPassword?: string;
    }

    export interface Chart {
        id?: string;
        type?: string;
    }

    export interface ChecklistOrderRepresentation {
        order?: string[];
    }

    export interface CommentRepresentation {
        created?: Date;
        createdBy?: LightUserRepresentation;
        id?: number;
        message?: string;
    }

    export interface CompleteFormRepresentation {
        outcome?: string;
        values?: any;
    }

    export interface ConditionRepresentation {
        leftFormFieldId?: string;
        leftRestResponseId?: string;
        nextConditionOperator?: string;
        operator?: string;
        rightFormFieldId?: string;
        rightRestResponseId?: string;
        rightType?: string;
        rightValue?: any;
    }

    export interface CreateEndpointBasicAuthRepresentation {
        name?: string;
        password?: string;
        tenantId?: number;
        username?: string;
    }

    export interface CreateProcessInstanceRepresentation {
        name?: string;
        outcome?: string;
        processDefinitionKey?: string;
        businessKey?: string;
        processDefinitionId?: string;
        variables?: any;
        values?: any;
    }

    export interface CreateTenantRepresentation {
        active?: boolean;
        domain?: string;
        maxUsers?: number;
        name?: string;
    }

    export interface EndpointBasicAuthRepresentation {
        created?: Date;
        id?: number;
        lastUpdated?: Date;
        name?: string;
        tenantId?: number;
        username?: string;
    }

    export interface EndpointConfigurationRepresentation {
        basicAuthId?: number;
        basicAuthName?: string;
        host?: string;
        id?: number;
        name?: string;
        path?: string;
        port?: string;
        protocol?: string;
        requestHeaders?: EndpointRequestHeaderRepresentation[];
        tenantId?: number;
    }

    export interface EndpointRequestHeaderRepresentation {
        name?: string;
        value?: string;
    }

    export interface EntityAttributeScopeRepresentation {
        name?: string;
        type?: string;
    }

    export interface EntityVariableScopeRepresentation {
        attributes?: EntityAttributeScopeRepresentation[];
        entityName?: string;
        mappedDataModel?: number;
        mappedVariableName?: string;
    }

    export interface FormDefinitionRepresentation {
        className?: string;
        customFieldTemplates?: any;
        fields?: FormFieldRepresentation;
        gridsterForm?: boolean;
        id?: number;
        javascriptEvents?: FormJavascriptEventRepresentation;
        metadata?: any;
        name?: string;
        outcomeTarget?: string;
        outcomes?: FormOutcomeRepresentation[];
        processDefinitionId?: string;
        processDefinitionKey?: string;
        processDefinitionName?: string;
        selectedOutcome?: string;
        style?: string;
        tabs?: FormTabRepresentation[];
        taskDefinitionKey?: string;
        taskId?: string;
        taskName?: string;
    }

    export interface FormFieldRepresentation {
        className?: string;
        col?: number;
        colspan?: number;
        hasEmptyValue?: boolean;
        id?: string;
        layout?: LayoutRepresentation;
        maxLength?: number;
        maxValue?: string;
        minLength?: number;
        minValue?: string;
        name?: string;
        optionType?: string;
        options?: OptionRepresentation;
        overrideId?: boolean;
        params?: any;
        placeholder?: string;
        readOnly?: boolean;
        regexPattern?: string;
        required?: boolean;
        restIdProperty?: string;
        restLabelProperty?: string;
        restResponsePath?: string;
        restUrl?: string;
        row?: number;
        sizeX?: number;
        sizeY?: number;
        tab?: string;
        type?: string;
        value?: any;
        visibilityCondition?: ConditionRepresentation;
    }

    export interface FormJavascriptEventRepresentation {
        event?: string;
        javascriptLogic?: string;
    }

    export interface FormOutcomeRepresentation {
        id?: string;
        name?: string;
    }

    export interface FormRepresentation {
        description?: string;
        formDefinition?: FormDefinitionRepresentation;
        id?: number;
        lastUpdated?: Date;
        lastUpdatedBy?: number;
        lastUpdatedByFullName?: string;
        name?: string;
        referenceId?: number;
        stencilSetId?: number;
        version?: number;
    }

    export interface FormSaveRepresentation {
        comment?: string;
        formImageBase64?: string;
        formRepresentation?: FormRepresentation;
        newVersion?: boolean;
        processScopeIdentifiers?: ProcessScopeIdentifierRepresentation;
        reusable?: boolean;
    }

    export interface FormScopeRepresentation {
        description?: string;
        fieldVariables?: FormFieldRepresentation[];
        fields?: FormFieldRepresentation[];
        id?: number;
        name?: string;
        outcomes?: FormOutcomeRepresentation[];
    }

    export interface FormTabRepresentation {
        id?: string;
        title?: string;
        visibilityCondition?: ConditionRepresentation;
    }

    export interface FormValueRepresentation {
        id?: string;
        name?: string;
    }

    export interface GroupCapabilityRepresentation {
        id?: number;
        name?: string;
    }

    export interface GroupRepresentation {
        capabilities?: GroupCapabilityRepresentation[];
        externalId?: string;
        groups?: GroupRepresentation[];
        id?: number;
        lastSyncTimeStamp?: Date;
        name?: string;
        parentGroupId?: number;
        status?: string;
        tenantId?: number;
        type?: number;
        userCount?: number;
        users?: UserRepresentation[];
    }

    export interface ImageUploadRepresentation {
        created?: Date;
        id?: number;
        name?: string;
        userId?: number;
    }

    export interface LayoutRepresentation {
        colspan?: number;
        column?: number;
        row?: number;
    }

    export interface LightAppRepresentation {
        description?: string;
        icon?: string;
        id?: number;
        name?: string;
        theme?: string;
    }

    export interface LightGroupRepresentation {
        externalId?: string;
        groups?: LightGroupRepresentation[];
        id?: number;
        name?: string;
        status?: string;
    }

    export interface LightTenantRepresentation {
        id?: number;
        name?: string;
    }

    export interface ModelRepresentation {
        comment?: string;
        createdBy?: number;
        createdByFullName?: string;
        description?: string;
        favorite?: boolean;
        id?: number;
        lastUpdated?: Date;
        lastUpdatedBy?: number;
        lastUpdatedByFullName?: string;
        latestVersion?: boolean;
        modelType?: number;
        name?: string;
        permission?: string;
        referenceId?: number;
        stencilSet?: number;
        version?: number;
    }

    export interface OptionRepresentation {
        id?: string;
        name?: string;
    }

    export interface ParameterValueRepresentation {
        id?: string;
        name?: string;
        version?: string;
        value?: string;
    }

    export interface ProcessFilterRequestRepresentation {
        processDefinitionId?: number;
        appDefinitionId?: number;
        state?: string;
        sort?: string;
        page?: number;
        size?: number;
    }

    export interface ProcessInstanceAuditRepresentation {
        processInstanceId?: number;
        processInstanceName?: string;
        processDefinitionName?: string;
        processDefinitionVersion?: string;
        processInstanceStartTime?: Date;
        processInstanceEndTime?: Date;
        processInstanceInitiator?: string;
        entries?: any;
        decisionInfo?: any;
    }

    export interface ProcessInstanceFilterRepresentation {
        asc?: boolean;
        name?: string;
        processDefinitionId?: string;
        processDefinitionKey?: string;
        sort?: string;
        state?: string;
    }

    export interface ProcessInstanceFilterRequestRepresentation {
        appDefinitionId?: number;
        filter?: ProcessInstanceFilterRepresentation;
        filterId?: number;
        page?: number;
        size?: number;
    }

    export interface ProcessInstanceRepresentation {
        businessKey?: string;
        ended?: Date;
        graphicalNotationDefined?: boolean;
        id?: string;
        name?: string;
        processDefinitionCategory?: string;
        processDefinitionDeploymentId?: string;
        processDefinitionDescription?: string;
        processDefinitionId?: string;
        processDefinitionKey?: string;
        processDefinitionName?: string;
        processDefinitionVersion?: number;
        startFormDefined?: boolean;
        started?: Date;
        startedBy?: LightUserRepresentation;
        tenantId?: string;
        variables?: RestVariable[];
    }

    export interface ProcessInstanceVariableRepresentation {
        id?: string;
        type?: string;
        value?: any;
    }

    export interface ProcessScopeIdentifierRepresentation {
        processActivityId?: string;
        processModelId?: number;
    }

    export interface ProcessScopeRepresentation {
        activityIds?: string[];
        activityIdsByCollapsedSubProcessIdMap?: any;
        activityIdsByDecisionTableIdMap?: any;
        activityIdsByFormIdMap?: any;
        activityIdsWithExcludedSubProcess?: any;
        customStencilVariables?: any;
        entityVariables?: any;
        executionVariables?: any;
        fieldToVariableMappings?: any;
        forms?: FormScopeRepresentation[];
        metadataVariables?: any;
        modelId?: number;
        modelId?: number;
        processModelType?: number;
        responseVariables?: any;
    }

    export interface ProcessScopesRequestRepresentation {
        identifiers?: ProcessScopeIdentifierRepresentation[];
        overriddenModel?: string;
    }

    export interface PublishIdentityInfoRepresentation {
        group?: LightGroupRepresentation;
        person?: LightUserRepresentation;
        type?: string;
    }

    export interface RelatedContentRepresentation {
        contentAvailable?: boolean;
        created?: Date;
        createdBy?: LightUserRepresentation;
        id?: number;
        link?: boolean;
        linkUrl?: string;
        mimeType?: string;
        name?: string;
        previewStatus?: string;
        simpleType?: string;
        source?: string;
        sourceId?: string;
        thumbnailStatus?: string;
    }

    export interface ReportCharts {
        elements?: string;
    }

    export interface ReportExportQueryRepresentation {
        processDefinitionId?: string;
        reportName?: string;
        slowProcessInstanceInteger?: number;
        status?: string;
        created?: string;
        typeFiltering?: string;
        duration?: string;
        taskName?: string;
        dateRangeInterval?: string;
        dateRange?: ReportDateRangeRepresentation;
    }

    export interface ReportParametersDefinition {
        id?: number;
        name?: string;
        definition?: string;
        created?: string;
    }

    export interface ReportSaveQueryRepresentation {
        processDefinitionId?: string;
        reportName?: string;
        slowProcessInstanceInteger?: number;
        status?: string;
        created?: string;
        typeFiltering?: string;
        duration?: string;
        taskName?: string;
        dateRangeInterval?: string;
        dateRange?: ReportDateRangeRepresentation;
    }

    export interface ResetPasswordRepresentation {
        email?: string;
    }

    export interface ResultListDataRepresentation {
        data?: any[];
        size?: number;
        start?: number;
        total?: number;
    }

    export interface RuntimeAppDefinitionSaveRepresentation {
        appDefinitions?: AppDefinitionRepresentation[];
    }

    export interface SaveFormRepresentation {
        values?: any;
    }

    export interface SyncLogEntryRepresentation {
        id?: number;
        timeStamp?: Date;
        type?: string;
    }

    export interface SystemPropertiesRepresentation {
        allowInvolveByEmail?: boolean;
    }

    export interface TaskAuditRepresentation {
        taskId?: string;
        taskName?: string;
        processDefinitionId?: string;
        processDefinitionName?: string;
        processDefinitionVersion?: number;
        assignee?: string;
        startTime?: string;
        endTime?: string;
        formData?: string;
        selectedOutcome?: string;
        comments?: string;
    }

    export interface TaskFilterRepresentation {
        asc?: boolean;
        assignment?: string;
        dueAfter?: Date;
        dueBefore?: Date;
        name?: string;
        processDefinitionId?: string;
        processDefinitionKey?: string;
        sort?: string;
        state?: string;
    }

    export interface TaskFilterRequestRepresentation {
        appDefinitionId?: number;
        filter?: TaskFilterRepresentation;
        filterId?: number;
        page?: number;
        size?: number;
    }

    export interface TaskQueryRequestRepresentation {
        processInstanceId?: number;
        text?: string;
        assignment?: string;
        state?: string;
        sort?: string;
        page?: number;
        size?: number;
    }

    export interface TaskRepresentation {
        adhocTaskCanBeReassigned?: boolean;
        assignee?: LightUserRepresentation;
        category?: string;
        created?: Date;
        description?: string;
        dueDate?: Date;
        duration?: number;
        endDate?: Date;
        formKey?: string;
        id?: string;
        initiatorCanCompleteTask?: boolean;
        involvedPeople?: LightUserRepresentation[];
        memberOfCandidateGroup?: boolean;
        memberOfCandidateUsers?: boolean;
        name?: string;
        parentTaskId?: string;
        parentTaskName?: string;
        priority?: number;
        processDefinitionCategory?: string;
        processDefinitionDeploymentId?: string;
        processDefinitionDescription?: string;
        processDefinitionId?: string;
        processDefinitionKey?: string;
        processDefinitionName?: string;
        processDefinitionVersion?: number;
        processInstanceId?: string;
        processInstanceName?: string;
        processInstanceStartUserId?: string;
    }

    export interface TaskUpdateRepresentation {
        description?: string;
        descriptionSet?: boolean;
        dueDate?: Date;
        dueDateSet?: boolean;
        name?: string;
        nameSet?: boolean;
    }

    export interface TenantEvent {
        eventTime?: Date;
        eventType?: string;
        extraInfo?: string;
        id?: number;
        tenantId?: number;
        userId?: number;
        userName?: string;
    }

    export interface TenantRepresentation {
        active?: boolean;
        created?: Date;
        domain?: string;
        id?: number;
        lastUpdate?: Date;
        logoId?: number;
        maxUsers?: number;
        name?: string;
    }

    export interface UserAccountCredentialsRepresentation {
        password?: string;
        username?: string;
    }

    export interface UserActionRepresentation {
        action?: string;
        newPassword?: string;
        oldPassword?: string;
    }

    export interface UserFilterOrderRepresentation {
        appId?: number;
        order?: number[];
    }

    export interface UserProcessInstanceFilterRepresentation {
        appId?: number;
        filter?: ProcessInstanceFilterRepresentation;
        icon?: number;
        id?: number;
        index?: number;
        name?: string;
        recent?: boolean;
    }

    export interface UserRepresentation {
        apps?: LightAppRepresentation[];
        capabilities?: string[];
        company?: string;
        created?: Date;
        email?: string;
        externalId?: string;
        firstName?: string;
        fullname?: string;
        groups?: GroupRepresentation[];
        lastName?: string;
        lastUpdate?: Date;
        latestSyncTimeStamp?: Date;
        password?: string;
        pictureId?: number;
        status?: string;
        tenantId?: number;
        tenantPictureId?: number;
        tenantName?: string;
        type?: string;
    }

    export interface UserTaskFilterRepresentation {
        appId?: number;
        filter?: TaskFilterRepresentation;
        icon?: string;
        id?: number;
        index?: number;
        name?: number;
        recent?: boolean;
    }

    export interface ValidationErrorRepresentation {
        defaultDescription?: string;
        id?: string;
        name?: string;
        problem?: string;
        problemReference?: string;
        validatorSetName?: string;
        warning?: boolean;
    }

    export interface VariableScopeRepresentation {
        mapVariable?: string;
        mappedColumn?: string;
        mappedDataModel?: number;
        mappedEntity?: string;
        mappedVariableName?: string;
        processVariableName?: string;
        processVariableType?: string;
    }

    export interface ReportDateRangeRepresentation {
        endDate?: string;
        rangeId?: number;
        startDate?: string;
    }

    export interface LightUserRepresentation {
        email?: string;
        externalId?: string;
        firstName?: string;
        id?: number;
        lastName?: string;
        pictureId?: number;
    }

    //  ======= Process service  End ======

    export interface Activiti {
        new(config: any): Activiti;
        aboutApi: AboutApi;
        AlfrescoApi: AlfrescoApi;
        adminEndpointsApi: AdminEndpointsApi;
        adminGroupsApi: AdminGroupsApi;
        adminTenantsApi: AdminTenantsApi;
        adminUsersApi: AdminUsersApi;
        alfrescoApi: AlfrescoApi;
        appsApi: AppsApi;
        appsDefinitionApi: AppsDefinitionApi;
        appsRuntimeApi: AppsRuntimeApi;
        commentsApi: CommentsApi;
        contentApi: ContentApi;
        contentRenditionApi: any;
        editorApi: EditorApi;
        groupsApi: GroupsApi;
        iDMSyncApi: IDMSyncApi;
        integrationAccountApi: IntegrationAccountApi;
        integrationAlfrescoCloudApi: IntegrationAlfrescoCloudApi;
        integrationAlfrescoOnPremiseApi: IntegrationAlfrescoOnPremiseApi;
        integrationApi: IntegrationApi;
        integrationBoxApi: any;
        integrationDriveApi: any;
        modelJsonBpmnApi: ModelJsonBpmnApi;
        modelBpmnApi: ModelBpmnApi;
        modelsApi: ModelsApi;
        modelsHistoryApi: ModelsHistoryApi;
        processApi: ProcessApi;
        processDefinitionsApi: ProcessDefinitionsApi;
        processDefinitionsFormApi: ProcessDefinitionsFormApi;
        processInstancesApi: ProcessInstancesApi;
        processInstancesInformationApi: ProcessInstancesInformationApi;
        processInstancesListingApi: ProcessInstancesListingApi;
        processScopeApi: ProcessScopeApi;
        processInstanceVariablesApi: ProcessInstanceVariablesApi;
        profileApi: ProfileApi;
        scriptFileApi: ScriptFileApi;
        systemPropertiesApi: SystemPropertiesApi;
        taskActionsApi: TaskActionsApi;
        taskApi: TaskApi;
        taskCheckListApi: TaskCheckListApi;
        taskFormsApi: TaskFormsApi;
        temporaryApi: any;
        userApi: UserApi;
        userFiltersApi: UserFiltersApi;
        usersWorkflowApi: UsersWorkflowApi;
        reportApi: ReportApi;

        /*Models*/
        AbstractGroupRepresentation: AbstractGroupRepresentation;
        AbstractUserRepresentation: AbstractUserRepresentation;
        AddGroupCapabilitiesRepresentation: AddGroupCapabilitiesRepresentation;
        AppDefinition: AppDefinition;
        AppDefinitionPublishRepresentation: AppDefinitionPublishRepresentation;
        AppDefinitionRepresentation: AppDefinitionRepresentation;
        AppDefinitionUpdateResultRepresentation: AppDefinitionUpdateResultRepresentation;
        AppModelDefinition: AppModelDefinition;
        BoxUserAccountCredentialsRepresentation: any;
        BulkUserUpdateRepresentation: BulkUserUpdateRepresentation;
        ChangePasswordRepresentation: ChangePasswordRepresentation;
        ChecklistOrderRepresentation: ChecklistOrderRepresentation;
        CommentRepresentation: CommentRepresentation;
        CompleteFormRepresentation: CompleteFormRepresentation;
        ConditionRepresentation: ConditionRepresentation;
        CreateEndpointBasicAuthRepresentation: CreateEndpointBasicAuthRepresentation;
        CreateProcessInstanceRepresentation: CreateProcessInstanceRepresentation;
        CreateTenantRepresentation: CreateTenantRepresentation;
        EndpointBasicAuthRepresentation: EndpointBasicAuthRepresentation;
        EndpointConfigurationRepresentation: EndpointConfigurationRepresentation;
        EndpointRequestHeaderRepresentation: EndpointRequestHeaderRepresentation;
        EntityAttributeScopeRepresentation: EntityAttributeScopeRepresentation;
        EntityVariableScopeRepresentation: EntityVariableScopeRepresentation;
        File: File;
        FormDefinitionRepresentation: FormDefinitionRepresentation;
        FormFieldRepresentation: FormFieldRepresentation;
        FormJavascriptEventRepresentation: FormJavascriptEventRepresentation;
        FormOutcomeRepresentation: FormOutcomeRepresentation;
        FormRepresentation: FormRepresentation;
        FormSaveRepresentation: FormSaveRepresentation;
        FormScopeRepresentation: FormScopeRepresentation;
        FormTabRepresentation: FormTabRepresentation;
        FormValueRepresentation: FormValueRepresentation;
        GroupCapabilityRepresentation: GroupCapabilityRepresentation;
        GroupRepresentation: GroupRepresentation;
        ImageUploadRepresentation: ImageUploadRepresentation;
        LayoutRepresentation: LayoutRepresentation;
        LightAppRepresentation: LightAppRepresentation;
        LightGroupRepresentation: LightGroupRepresentation;
        LightTenantRepresentation: LightTenantRepresentation;
        LightUserRepresentation: LightUserRepresentation;
        ModelRepresentation: ModelRepresentation;
        OptionRepresentation: OptionRepresentation;
        ProcessInstanceFilterRepresentation: ProcessInstanceFilterRepresentation;
        ProcessInstanceFilterRequestRepresentation: ProcessInstanceFilterRequestRepresentation;
        ProcessInstanceRepresentation: ProcessInstanceRepresentation;
        ProcessScopeIdentifierRepresentation: ProcessScopeIdentifierRepresentation;
        ProcessScopeRepresentation: ProcessScopeRepresentation;
        ProcessScopesRequestRepresentation: ProcessScopesRequestRepresentation;
        PublishIdentityInfoRepresentation: PublishIdentityInfoRepresentation;
        RelatedContentRepresentation: RelatedContentRepresentation;
        ResetPasswordRepresentation: ResetPasswordRepresentation;
        RestVariable: RestVariable;
        ResultListDataRepresentation: ResultListDataRepresentation;
        RuntimeAppDefinitionSaveRepresentation: RuntimeAppDefinitionSaveRepresentation;
        SaveFormRepresentation: SaveFormRepresentation;
        SyncLogEntryRepresentation: SyncLogEntryRepresentation;
        SystemPropertiesRepresentation: SystemPropertiesRepresentation;
        TaskFilterRepresentation: TaskFilterRepresentation;
        TaskFilterRequestRepresentation: TaskFilterRequestRepresentation;
        TaskRepresentation: TaskRepresentation;
        TaskUpdateRepresentation: TaskUpdateRepresentation;
        TenantEvent: TenantEvent;
        TenantRepresentation: TenantRepresentation;
        UserAccountCredentialsRepresentation: UserAccountCredentialsRepresentation;
        UserActionRepresentation: UserActionRepresentation;
        UserFilterOrderRepresentation: UserFilterOrderRepresentation;
        UserProcessInstanceFilterRepresentation: UserProcessInstanceFilterRepresentation;
        UserRepresentation: UserRepresentation;
        UserTaskFilterRepresentation: UserTaskFilterRepresentation;
        ValidationErrorRepresentation: ValidationErrorRepresentation;
        VariableScopeRepresentation: VariableScopeRepresentation;
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
