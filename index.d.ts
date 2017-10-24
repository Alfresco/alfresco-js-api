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

    export declare class FolderEntity {
        constructor(obj?: any);

        items: DocumentEntity[];
    }

    export declare class DocumentEntity {
        constructor(obj?: any);

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

    export declare class LocationEntity {
        constructor(obj?: any);

        repositoryId: string;
        site: string;
        siteTitle: string;
        container: string;
        path: string;
        file: string;
        parent: LocationParentEntity;
    }

    export declare class LocationParentEntity {
        constructor(obj?: any);

        nodeRef: string;
    }

    export declare class DeletedNodesPaging {
        constructor(obj?: any);

        list: DeletedNodesPagingList;
    }

    export declare class DeletedNodesPagingList {
        constructor(obj?: any);

        pagination: Pagination;
        entries: DeletedNodeEntity[];
    }

    export declare class Source {
        constructor(obj?: any);

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

    export declare class MinimalNodeEntity {
        constructor(obj?: any);

        entry?: MinimalNodeEntryEntity;
    }

    export declare class DeletedNodeEntity {
        constructor(obj?: any);

        entry?: DeletedNodeMinimalEntry;
    }

    export declare class Node {
        constructor(obj?: any);

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

    export declare class MinimalNode extends Node {
        constructor(obj?: any);

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

    export declare class MinimalNodeEntryEntity extends MinimalNode {
        constructor(obj?: any);

    }

    export declare class NodeProperties {
        constructor(obj?: any);

        [key: string]: any;
    }

    export declare class DeletedNodeMinimalEntry extends MinimalNode {
        constructor(obj?: any);

        archivedAt: Date;
        archivedByUser: UserInfo;
    }

    export declare class PathInfoEntity {
        constructor(obj?: any);

        elements: PathElementEntity[];
        isComplete: boolean;
        name: string;
    }

    export declare class PathElementEntity {
        constructor(obj?: any);

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

    export declare class EntitlementsInfo {
        constructor(obj?: any);

        maxUsers?: number;
        maxDocs?: number;
        isClusterEnabled?: boolean;
        isCryptodocEnabled?: boolean;
    }


    export interface Error {
        error?: ErrorError;
    }

    export declare class LicenseInfo {
        constructor(obj?: any);

        issuedAt: Date;
        expiresAt: Date;
        remainingDays: number;
        holder: string;
        mode: string;
        entitlements?: EntitlementsInfo;
    }

    export declare class ModuleInfo {
        constructor(obj?: any);

        id?: string;
        title?: string;
        description?: string;
        version?: string;
        installDate?: Date;
        installState?: string;
        versionMin?: string;
        versionMax?: string;
    }

    export declare class RepositoryInfo {
        constructor(obj?: any);

        edition: string;
        version: VersionInfo;
        status: StatusInfo;
        license?: LicenseInfo;
        modules?: Array<ModuleInfo>;
    }

    export declare class RepositoryEntry {
        constructor(obj?: any);

        repository: RepositoryInfo;
    }

    export declare class StatusInfo {
        constructor(obj?: any);

        isReadOnly: boolean;
        isAuditEnabled: boolean;
        isQuickShareEnabled: boolean;
        isThumbnailGenerationEnabled: boolean;
    }

    export declare class VersionInfo {
        constructor(obj?: any);

        major: string;
        minor: string;
        patch: string;
        hotfix: string;
        schema: number;
        label: string;
        display: string;
    }

    export declare class PersonBodyCreate {
        constructor(obj?: any);

        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: number;
        properties: any;
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

        addNode(nodeId?: string, nodeBody?: NodeBody, opts?: { autoRename?: boolean, include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        addSecondaryChildAssoc(parentld?: string, assocChildBody?: AssocChildBody): Promise<{}>;
        deleteNode(nodeId?: string, opts?: { permanent?: boolean }): Promise<{}>;
        getNodeChildren(nodeId?: string, opts?: { skipCount?: number, maxItems?: number, orderBy?: string, where?: string, include?: Array<string>, relativePath?: string, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        listParents(childld?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<{}>;
        listSecondaryChildAssociations(parentld?: string, opts?: { assocType?: string, where?: string, include?: string, fields?: Array<string> }): Promise<{}>;
        moveNode(nodeId?: string, moveBody?: MoveBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
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

        addNode(nodeId?: string, nodeBody?: NodeBody, opts?: { autoRename?: boolean, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
        copyNode(nodeId?: string, copyBody?: CopyBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
        deleteNode(nodeId?: string, opts?: { permanent?: boolean }): Promise<{}>;
        getDeletedNode(nodeId?: string, opts?: { include?: Array<string> }): Promise<DeletedNodeEntry>;
        getDeletedNodes(opts?: { skipCount?: number, maxItems?: number, include?: Array<string> }): Promise<DeletedNodeEntry>;
        getFileContent(nodeId?: string, opts?: { attachment?: boolean, ifModifiedSince?: Date }): Promise<{}>;
        getNode(nodeId?: string, opts?: { include?: Array<string>, relativePath?: string, fields?: Array<string> }): Promise<{}>;
        getNodeContent(nodeId?: string, opts?: any): Promise<{}>;
        getNodeChildren(nodeId?: string, opts?: { skipCount?: number, maxItems?: number, orderBy?: string, where?: string, include?: Array<string>, relativePath?: string, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        getParents(nodeId?: string, opts?: { where?: string, include?: Array<string>, skipCount?: number, maxItems?: number, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        getSecondaryChildren(nodeId?: string, opts?: { where?: string, include?: Array<string>, skipCount?: number, maxItems?: number, includeSource?: boolean, fields?: Array<string> }): Promise<{}>;
        getSourceAssociations(nodeId?: string, opts?: { where?: string, include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        getTargetAssociations(nodeId?: string, opts?: { where?: string, include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        lockNode(nodeId?: string, nodeBodyLock?: NodeBodyLock, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        unlockNode(nodeId?: string, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        moveNode(nodeId?: string, moveBody?: MoveBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<{}>;
        purgeDeletedNode(nodeId?: string): Promise<{}>;
        restoreNode(nodeId?: string): Promise<NodeEntry>;
        updateFileContent(nodeId?: string, contentBody?: string, opts?: { majorVersion?: boolean, comment?: string, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
        updateNodeContent(nodeId?: string, contentBody?: string, opts?: any): Promise<NodeEntry>;
        updateNode(nodeId?: string, nodeBody?: NodeBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
    }

    export interface SitesApi {
        new(client?: ApiClient): SitesApi;

        addSiteMember(siteId?: string, siteMemberBody?: SiteMemberBody): Promise<{}>;
        createSite(siteBody?: SiteBody, opts?: { skipConfiguration?: Boolean, skipAddToFavorites?: Boolean }): Promise<{}>;
        deleteSite(siteId?: string, opts?: { permanent?: Boolean }): Promise<{}>;
        getSite(siteId?: string, opts?: { relations?: Array<string>, fields?: Array<string> }): Promise<{}>;
        getSiteContainer(siteId?: string, containerId?: string, opts?: Array<string>): Promise<{}>;
        getSiteContainers(siteId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<{}>;
        getSiteMember(siteId?: string, personId?: string, opts?: { fields?: Array<string> }): Promise<{}>;
        getSiteMembers(siteId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<{}>;
        getSites(opts?: { skipCount?: number, maxItems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<{}>;
        removeSiteMember(siteId?: string, personId?: string): Promise<{}>;
        updateSiteMember(siteId?: string, personId?: string, siteMemberRoleBody?: SiteMemberRoleBody): Promise<{}>;
    }

    export interface PeopleApi {
        new(client: ApiClient): PeopleApi;

        addPerson(person: PersonBodyCreate): Promise<{PersonEntry}>;
        addFavorite(personId?: string, favoriteBody?: FavoriteBody): Promise<FavoriteEntry>;
        addSiteMembershipRequest(personId?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<SiteMembershipRequestEntry>;
        deleteFavoriteSite(personId?: string, siteId?: string): Promise<{}>;
        favoriteSite(personId?: string, favoriteSiteBody?: FavoriteSiteBody): Promise<FavoriteEntry>;
        getActivities(personId?: string, opts?: { skipCount?: number, maxItems?: number, who?: string, siteId?: string, fields?: Array<string> }): Promise<ActivityPaging>;
        getFavorite(personId?: string, favoriteId?: string, opts?: { fields?: Array<string> }): Promise<FavoriteEntry>;
        getFavoriteSite(personId?: string, siteId?: string, opts?: { fields?: Array<string> }): Promise<SiteEntry>;
        getFavoriteSites(personId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<SitePaging>;
        getFavorites(personId?: string, opts?: { skipCount?: number, maxItems?: number, where?: string, fields?: Array<string> }): Promise<FavoritePaging>;
        getPerson(personId?: string, opts?: { fields?: Array<string> }): Promise<PersonEntry>;
        getPersonNetwork(personId?: string, networkId?: string, opts?: { fields?: Array<string> }): Promise<PersonNetworkEntry>;
        getPersonNetworks(personId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<PersonNetworkPaging>;
        getPreference(personId?: string, preferenceName?: string, opts?: { fields?: Array<string> }): Promise<PreferenceEntry>;
        getPreferences(personId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<PreferencePaging>;
        getSiteMembership(personId?: string, opts?: { skipCount?: number, maxItems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;
        getSiteMembershipRequest(personId?: string, siteId?: string, opts?: { fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;
        getSiteMembershipRequests(personId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<SiteMembershipRequestPaging>;
        removeFavoriteSite(personId?: string, favoriteId?: string): Promise<{}>;
        removeSiteMembershipRequest(personId?: string, siteId?: string): Promise<{}>;
        updateSiteMembershipRequest(personId?: string, siteId?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<{}>;
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

    export interface VersionsApi {
        // removeVersion(nodeId: string, versionId: string, opts?: any): Promise<{}>;
        // getVersion(nodeId: string, versionId: string, opts?: any): Promise<VersionEntry>;
        // getVersionContent(nodeId: string, versionId: string, attachment?: boolean, ifModifiedSince?: Date, opts?: any): Promise<{}>;
        listVersionHistory(nodeId: string, opts?: { include?: Array<string>, fields?: Array<string>, skipCount?: number, maxItems?: number }): Promise<VersionPaging>;
        revertVersion(nodeId: string, versionId: string, revertBody: RevertBody, opts?: { fields?: Array<string> }): Promise<VersionEntry>;
    }

    export declare class Activity {
        constructor(obj?: any);

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

    export declare class ActivityEntry {
        constructor(obj?: any);

        entry?: Activity;
    }

    export declare class AssocChildBody {
        constructor(obj?: any);

        childId: string;
        assocType: string;
    }

    export declare class DeletedNodeEntry {
        constructor(obj?: any);

        entry?: DeletedNode;
    }

    export declare class DeletedNode {
        constructor(obj?: any);

        archivedByUser?: UserInfo;
        archivedAt?: Date;
    }

    export declare class ActivityPaging {
        constructor(obj?: any);

        list?: ActivityPagingList;
    }

    export declare class ActivityPagingList {
        constructor(obj?: any);

        entries?: Array<ActivityEntry>;
        pagination?: Pagination;
    }

    export declare class Association {
        constructor(obj?: any);

        targetId?: string;
        assocType?: string;
    }

    export declare class AssociationBody {
        constructor(obj?: any);

        targetId?: string;
        assocType?: string;
    }

    export declare class AssociationEntry {
        constructor(obj?: any);

        entry?: Association;
    }

    export declare class AssociationInfo {
        constructor(obj?: any);

        assocType?: string;
    }

    export declare class ChildAssociation {
        constructor(obj?: any);

        childId?: string;
        assocType?: string;
    }

    export declare class ChildAssociationBody {
        constructor(obj?: any);

        childId?: string;
        assocType?: string;
    }

    export declare class ChildAssociationEntry {
        constructor(obj?: any);

        entry?: ChildAssociation;
    }

    export declare class ChildAssociationInfo {
        constructor(obj?: any);

        assocType?: string;
        isPrimary?: boolean;
    }

    export declare class AssocTargetBody {
        constructor(obj?: any);

        targetId?: string;
        assocType?: string;
    }

    export declare class Comment {
        constructor(obj?: any);

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

    export declare class CommentBody {
        constructor(obj?: any);

        content?: string;
    }

    export declare class CommentEntry {
        constructor(obj?: any);

        entry?: Comment;
    }

    export declare class CommentPaging {
        constructor(obj?: any);

        list?: CommentPagingList;
    }

    export declare class CommentPagingList {
        constructor(obj?: any);

        entries?: Array<CommentEntry>;
        pagination?: Pagination;
    }

    export declare class Company {
        constructor(obj?: any);

        organization?: string;
        address1?: string;
        address2?: string;
        address3?: string;
        postcode?: string;
        telephone?: string;
        fax?: string;
        email?: string;
    }

    export declare class ContentInfo {
        constructor(obj?: any);

        mimeType?: string;
        mimeTypeName?: string;
        sizeInBytes?: number;
        encoding?: string;
    }

    export declare class RemovedNode extends Node {
        constructor(obj?: any);

        archivedByUser?: UserInfo;
        archivedAt?: Date;
    }

    export declare class RemovedNodeEntry {
        constructor(obj?: any);

        entry?: RemovedNode;
    }

    export declare class RemovedNodesPaging {
        constructor(obj?: any);

        list?: RemovedNodesPagingList;
    }

    export declare class RemovedNodesPagingList {
        constructor(obj?: any);

        entries?: Array<RemovedNodeEntry>;
        pagination?: Pagination;
    }

    export declare class Error {
        constructor(obj?: any);

        error?: ErrorError;
    }

    export declare class ErrorError {
        constructor(obj?: any);

        errorKey?: string;
        briefSummary?: string;
        descriptionURL?: string;
        logId?: string;
        stackTrace?: string;
        statusCode?: number;
    }

    export declare class Favorite {
        constructor(obj?: any);

        targetGuid?: string;
        adddAt?: Date;
        target?: any;
    }

    export declare class FavoriteBody {
        constructor(obj?: any);

        target?: any;
    }

    export declare class FavoriteEntry {
        constructor(obj?: any);

        entry?: Favorite;
    }

    export declare class FavoritePaging {
        constructor(obj?: any);

        list?: FavoritePagingList;
    }

    export declare class FavoritePagingList {
        constructor(obj?: any);

        entries?: Array<FavoriteEntry>;
        pagination?: Pagination;
    }

    export declare class FavoriteSite {
        constructor(obj?: any);

        id?: string;
    }

    export declare class FavoriteSiteBody {
        constructor(obj?: any);

        id?: string;
    }

    export declare class FavoriteSiteEntry {
        constructor(obj?: any);

        entry?: FavoriteSite;
    }

    export declare class NetworkQuota {
        constructor(obj?: any);

        id?: string;
        limit?: number;
        usage?: number;
    }


    export declare class NodeAssociation extends Node {
        constructor(obj?: any);

        association?: AssociationInfo;
    }

    export declare class NodeAssociationEntry {
        constructor(obj?: any);

        entry?: NodeAssociation;
    }

    export declare class NodeAssociationPaging {
        constructor(obj?: any);

        list?: NodeAssociationPagingList;
    }

    export declare class NodeAssociationPagingList {
        constructor(obj?: any);

        entries?: Array<NodeAssociationEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export declare class CopyBody {
        constructor(obj?: any);

        targetParentId?: string;
        name?: string;
    }

    export declare class NodeBody {
        constructor(obj?: any);

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

    export declare class NodeBodyAssociation {
        constructor(obj?: any);

        assocType?: string;
    }

    export declare class NodeBodyLock {
        constructor(obj?: any);

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

    export declare class MoveBody {
        constructor(obj?: any);

        targetParentId?: string;
        name?: string;
    }

    export declare class NodeChildAssociation extends Node {
        constructor(obj?: any);

        association?: ChildAssociationInfo;
    }

    export declare class NodeChildAssociationEntry {
        constructor(obj?: any);

        entry?: NodeChildAssociation;
    }

    export declare class NodeChildAssociationPaging {
        constructor(obj?: any);

        list?: NodeChildAssociationPagingList;
    }

    export declare class NodeChildAssociationPagingList {
        constructor(obj?: any);

        entries?: Array<NodeChildAssociationEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export declare class NodeEntry {
        constructor(obj?: any);

        entry?: Node;
    }

    export declare class NodePaging {
        constructor(obj?: any);

        list?: NodePagingList;
    }

    export declare class NodePagingList {
        constructor(obj?: any);

        entries?: Array<NodeEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export declare class Pagination {
        constructor(obj?: any);

        count?: number;
        hasMoreItems?: boolean;
        totalItems?: number;
        skipCount?: number;
        maxItems?: number;
    }

    export declare class PathElement {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export declare class PathInfo {
        constructor(obj?: any);

        elements?: Array<PathElement>;
        name?: string;
        isComplete?: boolean;
    }

    export declare class PermissionElement {
        constructor(obj?: any);

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

    export declare class PermissionsBodyUpdate {
        constructor(obj?: any);

        isInheritanceEnabled?: boolean;
        locallySet?: Array<PermissionElement>;
    }

    export declare class PermissionsInfo {
        constructor(obj?: any);

        isInheritanceEnabled?: boolean;
        inherited?: Array<PermissionElement>;
        locallySet?: Array<PermissionElement>;
        settable?: Array<string>;
    }

    export declare class Person {
        constructor(obj?: any);

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

    export declare class PersonBodyadd {
        constructor(obj?: any);

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

    export declare class PersonBodyUpdate {
        constructor(obj?: any);

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

    export declare class PersonEntry {
        constructor(obj?: any);

        entry?: Person;
    }

    export declare class PersonNetwork {
        constructor(obj?: any);

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

    export declare class PersonNetworkEntry {
        constructor(obj?: any);

        entry?: PersonNetwork;
    }

    export declare class PersonNetworkPaging {
        constructor(obj?: any);

        list?: PersonNetworkPagingList;
    }

    export declare class PersonNetworkPagingList {
        constructor(obj?: any);

        entries?: Array<PersonNetworkEntry>;
        pagination?: Pagination;
    }

    export declare class PersonPaging {
        constructor(obj?: any);

        list?: PersonPagingList;
    }

    export declare class PersonPagingList {
        constructor(obj?: any);

        entries?: Array<PersonEntry>;
        pagination?: Pagination;
    }

    export declare class Preference {
        constructor(obj?: any);

        id?: string;
        value?: string;
    }

    export declare class PreferenceEntry {
        constructor(obj?: any);

        entry?: Preference;
    }

    export declare class PreferencePaging {
        constructor(obj?: any);

        list?: PreferencePagingList;
    }

    export declare class PreferencePagingList {
        constructor(obj?: any);

        entries?: Array<PreferenceEntry>;
        pagination?: Pagination;
    }

    export declare class Rating {
        constructor(obj?: any);

        id?: string;
        aggregate?: RatingAggregate;
        ratedAt?: Date;
        myRating?: string;
    }

    export declare class RatingAggregate {
        constructor(obj?: any);

        average?: number;
        numberOfRatings?: number;
    }

    export declare class RatingBody {
        constructor(obj?: any);

        id?: RatingBody.IdEnum;
        myRating?: string;
    }

    namespace RatingBody {

        enum IdEnum {
            likes,
            fiveStar
        }
    }

    export declare class RatingEntry {
        constructor(obj?: any);

        entry?: Rating;
    }

    export declare class RatingPaging {
        constructor(obj?: any);

        list?: RatingPagingList;
    }

    export declare class RatingPagingList {
        constructor(obj?: any);

        entries?: Array<RatingEntry>;
        pagination?: Pagination;
    }

    export declare class Rendition {
        constructor(obj?: any);

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

    export declare class RenditionBody {
        constructor(obj?: any);

        id?: string;
    }

    export declare class RenditionEntry {
        constructor(obj?: any);

        entry?: Rendition;
    }

    export declare class RenditionPaging {
        constructor(obj?: any);

        list?: RenditionPagingList;
    }

    export declare class RenditionPagingList {
        constructor(obj?: any);

        entries?: Array<RenditionEntry>;
        pagination?: Pagination;
    }

    export declare class RevertBody {
        constructor(obj?: any);

        majorVersion?: boolean;
        comment?: string;
    }

    export declare class SharedLink {
        constructor(obj?: any);

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

    export declare class SharedLinkBody {
        constructor(obj?: any);

        nodeId?: string;
        expiresAt?: Date;
    }

    export declare class EmailSharedLinkBody {
        constructor(obj?: any);

        client?: string;
        message?: string;
        locale?: string;
        recipientEmails?: Array<string>;
    }

    export declare class SharedLinkEntry {
        constructor(obj?: any);

        entry?: SharedLink;
    }

    export declare class SharedLinkPaging {
        constructor(obj?: any);

        list?: SharedLinkPagingList;
    }

    export declare class SharedLinkPagingList {
        constructor(obj?: any);

        entries?: Array<SharedLinkEntry>;
        pagination?: Pagination;
    }

    export declare class Site {
        constructor(obj?: any);

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

    export declare class SiteBodyadd {
        constructor(obj?: any);

        id?: string;
        title?: string;
        description?: string;
        visibility?: SiteBodyadd.VisibilityEnum;
    }

    export declare class SiteBody {
        constructor(obj?: any);

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

    export declare class SiteBodyUpdate {
        constructor(obj?: any);

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

    export declare class SiteContainer {
        constructor(obj?: any);

        id?: string;
        folderId?: string;
    }

    export declare class SiteContainerEntry {
        constructor(obj?: any);

        entry?: SiteContainer;
    }

    export declare class SiteContainerPaging {
        constructor(obj?: any);

        list?: SiteContainerPagingList;
    }

    export declare class SiteContainerPagingList {
        constructor(obj?: any);

        entries?: Array<SiteContainerEntry>;
        pagination?: Pagination;
    }

    export declare class SiteEntry {
        constructor(obj?: any);

        entry?: Site;
    }

    export declare class SiteMember {
        constructor(obj?: any);

        id?: string;
        person?: Person;
        role?: SiteMember.RoleEnum;
    }

    export declare class SiteMemberBody {
        constructor(obj?: any);

        id?: string;
        role?: SiteMember.RoleEnum;
    }

    export declare class SiteMemberRoleBody {
        constructor(obj?: any);

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

    export declare class SiteMemberEntry {
        constructor(obj?: any);

        entry?: SiteMember;
    }

    export declare class SiteMemberPaging {
        constructor(obj?: any);

        list?: SiteMemberPagingList;
    }

    export declare class SiteMemberPagingList {
        constructor(obj?: any);

        entries?: Array<SiteMemberEntry>;
        pagination?: Pagination;
    }

    export declare class SiteMembershipBodyadd {
        constructor(obj?: any);

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

    export declare class SiteMembershipBodyUpdate {
        constructor(obj?: any);

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

    export declare class SiteMembershipRequest {
        constructor(obj?: any);

        id?: string;
        adddAt?: Date;
        site?: Site;
        message?: string;
    }

    export declare class SiteMembershipRequestBody {
        constructor(obj?: any);

        message?: string;
        id?: string;
        title?: string;
    }

    export declare class SiteMembershipRequestBodyUpdate {
        constructor(obj?: any);

        message?: string;
    }

    export declare class SiteMembershipRequestEntry {
        constructor(obj?: any);

        entry?: SiteMembershipRequest;
    }

    export declare class SiteMembershipRequestPaging {
        constructor(obj?: any);

        list?: SiteMembershipRequestPagingList;
    }

    export declare class SiteMembershipRequestPagingList {
        constructor(obj?: any);

        entries?: Array<SiteMembershipRequestEntry>;
        pagination?: Pagination;
    }

    export declare class SitePaging {
        constructor(obj?: any);

        list?: SitePagingList;
    }

    export declare class SitePagingList {
        constructor(obj?: any);

        entries?: Array<SiteEntry>;
        pagination?: Pagination;
    }

    export declare class SiteRole {
        constructor(obj?: any);

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

    export declare class SiteRoleEntry {
        constructor(obj?: any);

        entry?: SiteRole;
    }

    export declare class SiteRolePaging {
        constructor(obj?: any);

        list?: SiteRolePagingList;
    }

    export declare class SiteRolePagingList {
        constructor(obj?: any);

        entries?: Array<SiteRoleEntry>;
        pagination?: Pagination;
    }

    export declare class Tag {
        constructor(obj?: any);

        id?: string;
        tag?: string;
    }

    export declare class TagBody {
        constructor(obj?: any);

        tag?: string;
    }

    export declare class TagEntry {
        constructor(obj?: any);

        entry?: Tag;
    }

    export declare class TagPaging {
        constructor(obj?: any);

        list?: TagPagingList;
    }

    export declare class TagPagingList {
        constructor(obj?: any);

        entries?: Array<TagEntry>;
        pagination?: Pagination;
    }

    export declare class UserInfo {
        constructor(obj?: any);

        displayName?: string;
        id?: string;
    }

    export declare class Version {
        constructor(obj?: any);

        id?: string;
        // versionComment?: string;
        name?: string;
        nodeType?: string;
        isFolder?: boolean;
        isFile?: boolean;
        modifiedAt?: Date;
        modifiedByUser?: UserInfo;
        content?: ContentInfo;
        // aspectNames?: Array<string>;
        // properties?: {
        //     [key: string]: string;
        // };
    }

    export declare class VersionEntry {
        constructor(obj?: any);

        entry?: Version;
    }

    export declare class VersionPaging {
        constructor(obj?: any);

        list?: VersionPagingList;
    }

    export declare class VersionPagingList {
        constructor(obj?: any);

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
        getAppDefinitions(): Promise<ResultListDataRepresentation<AppDefinitionRepresentation>>;
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
        createProcessInstanceVariables(processInstanceId?: string, restVariables?: RestVariable[]): Promise<any>;
        createOrUpdateProcessInstanceVariables(processInstanceId?: string, restVariables?: RestVariable[]): Promise<any>;
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
        getTasksByProcessDefinitionId(reportId: string, processDefinitionId: string): Promise<any>;
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
        orderChecklist(taskId?: string, orderRepresentation?: ChecklistOrderRepresentation): Promise<any>;
        removeForm(taskId?: string): Promise<any>;
        removeInvolvedUser(taskId?: string, requestNode?: any): Promise<any>;
        saveTaskForm(taskId?: string, saveTaskFormRepresentation?: SaveFormRepresentation): Promise<any>;
        unclaimTask(taskId?: string): Promise<any>;
        updateTask(taskId?: string, updated?: TaskUpdateRepresentation): Promise<any>;
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
        getUsers(opts?: {filter?: string, email?: string, externalId?: string, externalIdCaseInsensitive?: string, excludeTaskId?: string, excludeProcessId?: string, groupId?: number, tenantId?: number}): Promise<any>;
        requestPasswordReset(resetPassword?: ResetPasswordRepresentation): Promise<any>;
        updateUser(userId?: number, userRequest?: UserRepresentation): Promise<any>;
    }

    export interface UserFiltersApi {
        new(client?: ApiClient): UserFiltersApi;

        createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation?: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation>;
        createUserTaskFilter(userTaskFilterRepresentation?: UserTaskFilterRepresentation): Promise<any>;
        deleteUserProcessInstanceFilter(userFilterId?: number): Promise<any>;
        getUserProcessInstanceFilter(userFilterId?: number): Promise<any>;
        getUserProcessInstanceFilters(opts?: {appId?: number}): Promise<any>;
        deleteUserTaskFilter(userFilterId?: number): Promise<any>;
        getUserTaskFilter(userFilterId?: number): Promise<any>;
        getUserTaskFilters(opts?: {appId?: number}): Promise<any>;
        orderUserProcessInstanceFilters(filterOrderRepresentation?: UserFilterOrderRepresentation): Promise<any>;
        orderUserTaskFilters(filterOrderRepresentation?: UserFilterOrderRepresentation): Promise<any>;
        updateUserProcessInstanceFilter(userFilterId?: number, userProcessInstanceFilterRepresentation?: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation>;
        updateUserTaskFilter(userFilterId?: number, userTaskFilterRepresentation?: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation>;
    }

    export interface UsersWorkflowApi {
        new(client?: ApiClient): UsersWorkflowApi;
        getUsers(opts?: {filter?: string, email?: string, externalId?: string, externalIdCaseInsensitive?: string, excludeTaskId?: string, excludeProcessId?: string, groupId?: number, tenantId?: number}): Promise<any>;
    }

    export interface AboutApi {
        new(client?: ApiClient): AboutApi;

        getAppVersion(): Promise<any>;
    }

    export declare class AbstractGroupRepresentation {
        constructor(obj?: any);

        externalId?: string;
        id: number;
        name: string;
        status: string;
    }

    export declare class AbstractUserRepresentation {
        constructor(obj?: any);

        email?: string;
        firstName?: string;
        lastName?: string;
        externalId?: string;
        id: number;
        pictureId: string;
    }

    export declare class AddGroupCapabilitiesRepresentation {
        constructor(obj?: any);

        capabilities?: string[];
    }

    export declare class AppDefinition {
        constructor(obj?: any);

        icon?: string;
        models?: AppModelDefinition;
        publishIdentityInfo?: PublishIdentityInfoRepresentation;
        theme?: string;
    }

    export declare class AppDefinitionPublishRepresentation {
        constructor(obj?: any);

        comment?: string;
        force?: boolean;
    }

    export declare class AppDefinitionRepresentation {
        constructor(obj?: any);

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

    export declare class AppDefinitionUpdateResultRepresentation {
        constructor(obj?: any);

        appDefinition?: AppDefinitionRepresentation;
        customData?: any;
        error?: boolean;
        errorDescription?: string;
        errorType?: number;
        message?: string;
        messageKey?: string;
    }

    export declare class AppModelDefinition {
        constructor(obj?: any);

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

    export declare class BulkUserUpdateRepresentation {
        constructor(obj?: any);

        accountType?: string;
        password?: string;
        sendNotifications?: boolean;
        status?: string;
        tenantId?: number;
        users?: number[];
    }

    export declare class ChangePasswordRepresentation {
        constructor(obj?: any);

        newPassword?: string;
        oldPassword?: string;
    }

    export declare class Chart {
        constructor(obj?: any): Chart;

        id?: string;
        type?: string;
    }

    export declare class ChecklistOrderRepresentation {
        constructor(obj?: any);

        order?: string[];
    }

    export declare class CompleteFormRepresentation {
        constructor(obj?: any);

        outcome?: string;
        values?: any;
    }

    export declare class ConditionRepresentation {
        constructor(obj?: any);

        leftFormFieldId?: string;
        leftRestResponseId?: string;
        nextConditionOperator?: string;
        operator?: string;
        rightFormFieldId?: string;
        rightRestResponseId?: string;
        rightType?: string;
        rightValue?: any;
    }

    export declare class CreateEndpointBasicAuthRepresentation {
        constructor(obj?: any);

        name?: string;
        password?: string;
        tenantId?: number;
        username?: string;
    }

    export declare class CreateProcessInstanceRepresentation {
        constructor(obj?: any);

        name?: string;
        outcome?: string;
        processDefinitionKey?: string;
        businessKey?: string;
        processDefinitionId?: string;
        variables?: any;
        values?: any;
    }

    export declare class CreateTenantRepresentation {
        constructor(obj?: any);

        active?: boolean;
        domain?: string;
        maxUsers?: number;
        name?: string;
    }

    export declare class EndpointBasicAuthRepresentation {
        constructor(obj?: any);

        created?: Date;
        id?: number;
        lastUpdated?: Date;
        name?: string;
        tenantId?: number;
        username?: string;
    }

    export declare class EndpointConfigurationRepresentation {
        constructor(obj?: any);

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

    export declare class EndpointRequestHeaderRepresentation {
        constructor(obj?: any);

        name?: string;
        value?: string;
    }

    export declare class EntityAttributeScopeRepresentation {
        constructor(obj?: any);

        name?: string;
        type?: string;
    }

    export declare class EntityVariableScopeRepresentation {
        constructor(obj?: any);

        attributes?: EntityAttributeScopeRepresentation[];
        entityName?: string;
        mappedDataModel?: number;
        mappedVariableName?: string;
    }

    export declare class FormDefinitionRepresentation {
        constructor(obj?: any);

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

    export declare class FormFieldRepresentation {
        constructor(obj?: any);

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

    export declare class FormJavascriptEventRepresentation {
        constructor(obj?: any);

        event?: string;
        javascriptLogic?: string;
    }

    export declare class FormOutcomeRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export declare class FormRepresentation {
        constructor(obj?: any);

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

    export declare class FormSaveRepresentation {
        constructor(obj?: any);

        comment?: string;
        formImageBase64?: string;
        formRepresentation?: FormRepresentation;
        newVersion?: boolean;
        processScopeIdentifiers?: ProcessScopeIdentifierRepresentation;
        reusable?: boolean;
    }

    export declare class FormScopeRepresentation {
        constructor(obj?: any);

        description?: string;
        fieldVariables?: FormFieldRepresentation[];
        fields?: FormFieldRepresentation[];
        id?: number;
        name?: string;
        outcomes?: FormOutcomeRepresentation[];
    }

    export declare class FormTabRepresentation {
        constructor(obj?: any);

        id?: string;
        title?: string;
        visibilityCondition?: ConditionRepresentation;
    }

    export declare class FormValueRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export declare class GroupCapabilityRepresentation {
        constructor(obj?: any);

        id?: number;
        name?: string;
    }

    export declare class GroupRepresentation {
        constructor(obj?: any);

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

    export declare class ImageUploadRepresentation {
        constructor(obj?: any);

        created?: Date;
        id?: number;
        name?: string;
        userId?: number;
    }

    export declare class LayoutRepresentation {
        constructor(obj?: any);

        colspan?: number;
        column?: number;
        row?: number;
    }

    export declare class LightAppRepresentation {
        constructor(obj?: any);

        description?: string;
        icon?: string;
        id?: number;
        name?: string;
        theme?: string;
    }

    export declare class LightGroupRepresentation {
        constructor(obj?: any);

        externalId?: string;
        groups?: LightGroupRepresentation[];
        id?: number;
        name?: string;
        status?: string;
    }

    export declare class LightTenantRepresentation {
        constructor(obj?: any);

        id?: number;
        name?: string;
    }

    export declare class ModelRepresentation {
        constructor(obj?: any);

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

    export declare class OptionRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export declare class ParameterValueRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
        version?: string;
        value?: string;
    }

    export declare class ProcessFilterRequestRepresentation {
        constructor(obj?: any);

        processDefinitionId?: number;
        appDefinitionId?: number;
        state?: string;
        sort?: string;
        page?: number;
        size?: number;
    }

    export declare class ProcessInstanceAuditRepresentation {
        constructor(obj?: any);

        processInstanceId?: string;
        processInstanceName?: string;
        processDefinitionName?: string;
        processDefinitionVersion?: string;
        processInstanceStartTime?: Date;
        processInstanceEndTime?: Date;
        processInstanceInitiator?: string;
        entries?: any;
        decisionInfo?: any;
    }

    export declare class ProcessInstanceFilterRepresentation {
        constructor(obj?: any);

        asc?: boolean;
        name?: string;
        processDefinitionId?: string;
        processDefinitionKey?: string;
        sort?: string;
        state?: string;
    }

    export declare class ProcessInstanceFilterRequestRepresentation {
        constructor(obj?: any);

        appDefinitionId?: number;
        filter?: ProcessInstanceFilterRepresentation;
        filterId?: number;
        page?: number;
        size?: number;
    }

    export declare class ProcessInstanceRepresentation {
        constructor(obj?: any);

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

    export declare class ProcessInstanceVariableRepresentation {
        constructor(obj?: any);

        id?: string;
        type?: string;
        value?: any;
    }

    export declare class ProcessScopeIdentifierRepresentation {
        constructor(obj?: any);

        processActivityId?: string;
        processModelId?: number;
    }

    export declare class ProcessScopeRepresentation {
        constructor(obj?: any);

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

    export declare class ProcessScopesRequestRepresentation {
        constructor(obj?: any);

        identifiers?: ProcessScopeIdentifierRepresentation[];
        overriddenModel?: string;
    }

    export declare class PublishIdentityInfoRepresentation {
        constructor(obj?: any);

        group?: LightGroupRepresentation;
        person?: LightUserRepresentation;
        type?: string;
    }

    export declare class RelatedContentRepresentation {
        constructor(obj?: any);

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

    export declare class ReportCharts {
        constructor(obj?: any);

        elements?: string;
    }

    export declare class ReportExportQueryRepresentation {
        constructor(obj?: any);

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

    export declare class ReportParametersDefinition {
        constructor(obj?: any);

        id?: number;
        name?: string;
        definition?: string;
        created?: string;
    }

    export declare class ReportSaveQueryRepresentation {
        constructor(obj?: any);

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

    export declare class ResetPasswordRepresentation {
        constructor(obj?: any);

        email?: string;
    }

    export declare class ResultListDataRepresentation<T> {
        constructor(obj?: any);

        data?: T[];
        size?: number;
        start?: number;
        total?: number;
    }

    export declare class RuntimeAppDefinitionSaveRepresentation {
        constructor(obj?: any);

        appDefinitions?: AppDefinitionRepresentation[];
    }

    export declare class SaveFormRepresentation {
        constructor(obj?: any);

        values?: any;
    }

    export declare class SyncLogEntryRepresentation {
        constructor(obj?: any);

        id?: number;
        timeStamp?: Date;
        type?: string;
    }

    export declare class SystemPropertiesRepresentation {
        constructor(obj?: any);

        allowInvolveByEmail?: boolean;
    }

    export declare class TaskAuditRepresentation {
        constructor(obj?: any);

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

    export declare class TaskFilterRepresentation {
        constructor(obj?: any);

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

    export declare class TaskFilterRequestRepresentation {
        constructor(obj?: any);

        appDefinitionId?: number;
        filter?: TaskFilterRepresentation;
        filterId?: number;
        page?: number;
        size?: number;
    }

    export declare class TaskQueryRequestRepresentation {
        constructor(obj?: any);

        processInstanceId?: string;
        text?: string;
        assignment?: string;
        state?: string;
        sort?: string;
        page?: number;
        size?: number;
    }

    export declare class TaskRepresentation {
        constructor(obj?: any);

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

    export declare class TaskUpdateRepresentation {
        constructor(obj?: any);

        description?: string;
        descriptionSet?: boolean;
        dueDate?: Date;
        dueDateSet?: boolean;
        name?: string;
        nameSet?: boolean;
    }

    export declare class TenantEvent {
        constructor(obj?: any);

        eventTime?: Date;
        eventType?: string;
        extraInfo?: string;
        id?: number;
        tenantId?: number;
        userId?: number;
        userName?: string;
    }

    export declare class TenantRepresentation {
        constructor(obj?: any);

        active?: boolean;
        created?: Date;
        domain?: string;
        id?: number;
        lastUpdate?: Date;
        logoId?: number;
        maxUsers?: number;
        name?: string;
    }

    export declare class UserAccountCredentialsRepresentation {
        constructor(obj?: any);

        password?: string;
        username?: string;
    }

    export declare class UserActionRepresentation {
        constructor(obj?: any);

        action?: string;
        newPassword?: string;
        oldPassword?: string;
    }

    export declare class UserFilterOrderRepresentation {
        constructor(obj?: any);

        appId?: number;
        order?: number[];
    }

    export declare class UserProcessInstanceFilterRepresentation {
        constructor(obj?: any);

        appId?: number;
        filter?: ProcessInstanceFilterRepresentation;
        icon?: number;
        id?: number;
        index?: number;
        name?: string;
        recent?: boolean;
    }

    export declare class UserRepresentation {
        constructor(obj?: any);

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

    export declare class UserTaskFilterRepresentation {
        constructor(obj?: any);

        appId?: number;
        filter?: TaskFilterRepresentation;
        icon?: string;
        id?: number;
        index?: number;
        name?: string;
        recent?: boolean;
    }

    export declare class ValidationErrorRepresentation {
        constructor(obj?: any);

        defaultDescription?: string;
        id?: string;
        name?: string;
        problem?: string;
        problemReference?: string;
        validatorSetName?: string;
        warning?: boolean;
    }

    export declare class VariableScopeRepresentation {
        constructor(obj?: any);

        mapVariable?: string;
        mappedColumn?: string;
        mappedDataModel?: number;
        mappedEntity?: string;
        mappedVariableName?: string;
        processVariableName?: string;
        processVariableType?: string;
    }

    export declare class ReportDateRangeRepresentation {
        constructor(obj?: any);

        endDate?: string;
        rangeId?: number;
        startDate?: string;
    }

    export declare class LightUserRepresentation {
        constructor(obj?: any);

        email?: string;
        externalId?: string;
        firstName?: string;
        id?: number;
        lastName?: string;
        pictureId?: number;
    }

    export declare class CommentRepresentation {
        constructor(obj?: any);

        created?: Date;
        createdBy?: LightUserRepresentation;
        id?: number;
        message?: string;
    }

    //  ======= Process service  End ======

    export declare class Activiti {
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
        versionsApi: VersionsApi;
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

    export declare class AlfrescoApiConfig {
        constructor(obj?: any);

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

    export declare class RestVariable {
        constructor(obj?: any);

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
