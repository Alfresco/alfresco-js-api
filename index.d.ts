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

    export class FolderEntity {
        constructor(obj?: any);

        items: DocumentEntity[];
    }

    export class DocumentEntity {
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

    export class LocationEntity {
        constructor(obj?: any);

        repositoryId: string;
        site: string;
        siteTitle: string;
        container: string;
        path: string;
        file: string;
        parent: LocationParentEntity;
    }

    export class LocationParentEntity {
        constructor(obj?: any);

        nodeRef: string;
    }

    export class DeletedNodesPaging {
        constructor(obj?: any);

        list: DeletedNodesPagingList;
    }

    export class DeletedNodesPagingList {
        constructor(obj?: any);

        pagination: Pagination;
        entries: DeletedNodeEntity[];
    }

    export class Source {
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

    export class MinimalNodeEntity {
        constructor(obj?: any);

        entry?: MinimalNodeEntryEntity;
    }

    export class DeletedNodeEntity {
        constructor(obj?: any);

        entry?: DeletedNodeMinimalEntry;
    }

    export class Node {
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

    export class MinimalNode extends Node {
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

    export class MinimalNodeEntryEntity extends MinimalNode {
        constructor(obj?: any);

    }

    export class NodeProperties {
        constructor(obj?: any);

        [key: string]: any;
    }

    export class DeletedNodeMinimalEntry extends MinimalNode {
        constructor(obj?: any);

        archivedAt: Date;
        archivedByUser: UserInfo;
    }

    export class PathInfoEntity {
        constructor(obj?: any);

        elements: PathElementEntity[];
        isComplete: boolean;
        name: string;
    }

    export class PathElementEntity {
        constructor(obj?: any);

        id: string;
        name: string;
    }

    export interface Auth {
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

    export class EntitlementsInfo {
        constructor(obj?: any);

        maxUsers?: number;
        maxDocs?: number;
        isClusterEnabled?: boolean;
        isCryptodocEnabled?: boolean;
    }


    export interface Error {
        error?: ErrorError;
    }

    export class LicenseInfo {
        constructor(obj?: any);

        issuedAt: Date;
        expiresAt: Date;
        remainingDays: number;
        holder: string;
        mode: string;
        entitlements?: EntitlementsInfo;
    }

    export class ModuleInfo {
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

    export class RepositoryInfo {
        constructor(obj?: any);

        edition: string;
        version: VersionInfo;
        status: StatusInfo;
        license?: LicenseInfo;
        modules?: Array<ModuleInfo>;
    }

    export class RepositoryEntry {
        constructor(obj?: any);

        repository: RepositoryInfo;
    }

    export class StatusInfo {
        constructor(obj?: any);

        isReadOnly: boolean;
        isAuditEnabled: boolean;
        isQuickShareEnabled: boolean;
        isThumbnailGenerationEnabled: boolean;
    }

    export class VersionInfo {
        constructor(obj?: any);

        major: string;
        minor: string;
        patch: string;
        hotfix: string;
        schema: number;
        label: string;
        display: string;
    }

    export class PersonBodyCreate {
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
        // removeFavorite(personId?: string, favoriteId?: string, opts?: any): Promise<any>;
        removeFavoriteSite(personId?: string, favoriteId?: string): Promise<any>;

        getFavorite(personId?: string, favoriteId?: string, opts?: any): Promise<FavoriteEntry>;

        getFavorites(personId?: string, opts?: { skipCount?: number, maxItems?: number, where?: string, fields?: Array<string> }): Promise<FavoritePaging>;

        getFavoriteSite(personId?: string, siteId?: string, opts?: any): Promise<SiteEntry>;

        // listFavoriteSitesForPerson(personId?: string, skipCount?: number, maxItems?: number, fields?: Array<string>, opts?: any): Promise<SitePaging>;
        // listFavorites(personId?: string, skipCount?: number, maxItems?: number, where?: string, fields?: Array<string>, opts?: any): Promise<FavoritePaging>;
    }

    export interface ChildAssociationsApi {
        new(client: ApiClient): ChildAssociationsApi;

        addNode(nodeId?: string, nodeBody?: NodeBody, opts?: { autoRename?: boolean, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        addSecondaryChildAssoc(parentId?: string, assocChildBody?: AssocChildBody): Promise<any>;

        deleteNode(nodeId?: string, opts?: { permanent?: boolean }): Promise<any>;

        getNodeChildren(nodeId?: string, opts?: { skipCount?: number, maxItems?: number, orderBy?: string, where?: string, include?: Array<string>, relativePath?: string, includeSource?: boolean, fields?: Array<string> }): Promise<NodePaging>;

        listParents(childId?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<NodeAssocPaging>;

        listSecondaryChildAssociations(parentId?: string, opts?: { assocType?: string, where?: string, include?: string, fields?: Array<string> }): Promise<NodeAssocPaging>;

        moveNode(nodeId?: string, moveBody?: MoveBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
    }

    export interface AssociationsApi {
        new(client: ApiClient): AssociationsApi;

        addAssoc(sourceId?: string, assocTargetBody?: AssocTargetBody): Promise<any>;

        listSourceNodeAssociations(targetId?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<NodeAssocPaging>;

        listTargetAssociations(sourceId?: string, opts?: { where?: string, include?: string, fields?: Array<string> }): Promise<NodeAssocPaging>;

        removeAssoc(sourceId?: string, targetId?: string, opts?: { assocType?: string }): Promise<any>;

    }

    export interface CommentsApi {
        new(client: ApiClient): CommentsApi;

        addComment(nodeId?: string, commentBody?: CommentBody, opts?: any): Promise<CommentEntry>;

        getComments(nodeId?: string, opts?: any): Promise<CommentPaging>;

        removeComment(nodeId?: string, commentId?: string): Promise<any>;

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

        addNode(nodeId: string, nodeBody: any, opts?: { autoRename?: boolean, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        copyNode(nodeId: string, copyBody: any, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        deleteNode(nodeId?: string, opts?: { permanent?: boolean }): Promise<any>;

        purgeDeletedNode(nodeId: string): Promise<any>;

        // custom API not exposed by the platform
        getNodeInfo(nodeId: string, opts?: any): Promise<Node>;

        // custom API not exposed by the platform
        deleteNodePermanent(nodeId: string): Promise<any>;

        // custom API not exposed by the platform
        createFolder(name: string, relativePath: string, nodeId?: string, opts?: any): Promise<NodeEntry>;

        // custom API not exposed by the platform
        createFolderAutoRename(name: string, relativePath: string, nodeId: string, opts): Promise<NodeEntry>;

        getDeletedNode(nodeId?: string, opts?: { include?: Array<string> }): Promise<DeletedNodeEntry>;

        getDeletedNodes(opts?: { skipCount?: number, maxItems?: number, include?: Array<string> }): Promise<DeletedNodesPaging>;

        getFileContent(nodeId?: string, opts?: { attachment?: boolean, ifModifiedSince?: Date }): Promise<any>;

        getNode(nodeId?: string, opts?: { include?: Array<string>, relativePath?: string, fields?: Array<string> }): Promise<NodeEntry>;

        getNodeContent(nodeId?: string, opts?: any): Promise<any>;

        getNodeChildren(nodeId?: string, opts?: { skipCount?: number, maxItems?: number, orderBy?: string, where?: string, include?: Array<string>, relativePath?: string, includeSource?: boolean, fields?: Array<string> }): Promise<NodePaging>;

        getParents(nodeId?: string, opts?: { where?: string, include?: Array<string>, skipCount?: number, maxItems?: number, includeSource?: boolean, fields?: Array<string> }): Promise<NodeAssociationPaging>;

        getSecondaryChildren(nodeId?: string, opts?: { where?: string, include?: Array<string>, skipCount?: number, maxItems?: number, includeSource?: boolean, fields?: Array<string> }): Promise<NodeChildAssociationPaging>;

        getSourceAssociations(nodeId?: string, opts?: { where?: string, include?: Array<string>, fields?: Array<string> }): Promise<NodeAssociationPaging>;

        getTargetAssociations(nodeId?: string, opts?: { where?: string, include?: Array<string>, fields?: Array<string> }): Promise<NodeAssociationPaging>;

        lockNode(nodeId?: string, nodeBodyLock?: NodeBodyLock, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        unlockNode(nodeId?: string, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        moveNode(nodeId?: string, moveBody?: MoveBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        restoreNode(nodeId?: string): Promise<any>;

        updateFileContent(nodeId?: string, contentBody?: string, opts?: { majorVersion?: boolean, comment?: string, include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;

        updateNodeContent(nodeId?: string, contentBody?: string, opts?: any): Promise<NodeEntry>;

        updateNode(nodeId?: string, nodeBody?: NodeBody, opts?: { include?: Array<string>, fields?: Array<string> }): Promise<NodeEntry>;
    }

    export interface SitesApi {
        new(client?: ApiClient): SitesApi;

        addSiteMember(siteId?: string, siteMemberBody?: SiteMemberBody): Promise<SiteMemberEntry>;

        createSite(siteBody?: SiteBody, opts?: { skipConfiguration?: Boolean, skipAddToFavorites?: Boolean }): Promise<SiteEntry>;

        deleteSite(siteId?: string, opts?: { permanent?: Boolean }): Promise<any>;

        getSite(siteId?: string, opts?: { relations?: Array<string>, fields?: Array<string> }): Promise<SiteEntry>;

        getSiteContainer(siteId?: string, containerId?: string, opts?: Array<string>): Promise<SiteContainerEntry>;

        getSiteContainers(siteId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<SiteContainerPaging>;

        getSiteMember(siteId?: string, personId?: string, opts?: { fields?: Array<string> }): Promise<SiteMemberEntry>;

        getSiteMembers(siteId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<SiteMemberPaging>;

        getSites(opts?: { skipCount?: number, maxItems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<SitePaging>;

        removeSiteMember(siteId?: string, personId?: string): Promise<any>;

        updateSiteMember(siteId?: string, personId?: string, siteMemberRoleBody?: SiteMemberRoleBody): Promise<SiteMemberEntry>;
    }

    export interface PeopleApi {
        new(client: ApiClient): PeopleApi;

        addPerson(person: PersonBodyCreate): Promise<PersonEntry>;

        addFavorite(personId?: string, favoriteBody?: FavoriteBody): Promise<FavoriteEntry>;

        addSiteMembershipRequest(personId?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<SiteMembershipRequestEntry>;

        deleteFavoriteSite(personId?: string, siteId?: string): Promise<any>;

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

        getSiteMembership(personId?: string, opts?: { skipCount?: number, maxItems?: number, orderBy?: string, relations?: Array<string>, fields?: Array<string> }): Promise<SitePaging>;

        getSiteMembershipRequest(personId?: string, siteId?: string, opts?: { fields?: Array<string> }): Promise<SiteMembershipRequestEntry>;

        getSiteMembershipRequests(personId?: string, opts?: { skipCount?: number, maxItems?: number, fields?: Array<string> }): Promise<SiteMembershipRequestPaging>;

        removeFavoriteSite(personId?: string, favoriteId?: string): Promise<any>;

        removeSiteMembershipRequest(personId?: string, siteId?: string): Promise<any>;

        updateSiteMembershipRequest(personId?: string, siteId?: string, siteMembershipBody?: SiteMembershipRequestBody): Promise<any>;
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

        createRendition(nodeId?: string, renditionBody?: RenditionBody): Promise<any>;

        getRendition(nodeId?: string, renditionId?: string): Promise<RenditionEntry>;

        getRenditionContent(nodeId?: string, renditionId?: string, opts?: any): Promise<any>;

        getRenditions(nodeId?: string): Promise<RenditionPaging>;

        getSharedLinkRendition(sharedId?: string): Promise<RenditionEntry>;

        getSharedLinkRenditionContent(sharedId?: string, renditionId?: string, opts?: any): Promise<any>;
    }

    export interface RatingsApi {
        new(client: ApiClient): RatingsApi;

        rate(nodeId?: string, ratingBody?: RatingBody, opts?: any): Promise<RatingEntry>;

        removeRating(nodeId?: string, ratingId?: string): Promise<any>;

        getRating(nodeId?: string, ratingId?: string, opts?: any): Promise<RatingEntry>;

        getRatings(nodeId?: string, opts?: any): Promise<RatingPaging>;
    }

    export interface SharedlinksApi {
        new(client: ApiClient): SharedlinksApi;

        addSharedLink(sharedLinkBody?: SharedLinkBody, opts?: any): Promise<SharedLinkEntry>;

        deleteSharedLink(sharedId?: string): Promise<any>;

        emailSharedLink(sharedId?: string, emailSharedLinkBody?: EmailSharedLinkBody, opts?: any): Promise<any>;

        findSharedLinks(opts?: any): Promise<SharedLinkPaging>;

        getSharedLink(sharedId?: string, opts?: any): Promise<SharedLinkEntry>;

        getSharedLinkContent(sharedId?: string, opts?: any): Promise<any>;
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

    export interface NodeAssocPaging {
        list?: NodeAssocPagingList;
    }

    export interface NodeAssocPagingList {
        entries?: NodeAssocMinimalEntry;
        pagination?: Pagination;
    }

    export interface NodeAssocMinimalEntry {
        entry?:NodeAssocMinimal;
    }

    export interface NodeAssocMinimal {
        id?: string;
        parentId?: String;
        name?: String;
        nodeType?: String;
        isFolder?: Boolean;
        isFile?: Boolean;
        modifiedAt?: Date;
        modifiedByUser?:UserInfo;
        createdAt?: Date;
        createdByUser?: UserInfo;
        content?: ContentInfo;
        association?: AssocInfo;
    }

    export interface AssocInfo {
        assocType?:String;
    }

    export interface TagsApi {
        new(client: ApiClient): TagsApi;

        addTag(nodeId?: string, tagBody?: TagBody): Promise<TagEntry>;

        removeTag(nodeId?: string, tagId?: string): Promise<any>;

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
    //     deleteremovedNode(nodeId?: string, opts?: any): Promise<any>;
    //     getremovedNode(nodeId?: string, include?: Array<string>, opts?: any): Promise<removedNodeEntry>;
    //     listremovedNodes(skipCount?: number, maxItems?: number, include?: Array<string>, opts?: any): Promise<removedNodesPaging>;
    //     restoreremovedNode(nodeId?: string, fields?: Array<string>, opts?: any): Promise<NodeEntry>;
    // }

    export interface VersionsApi {
        // removeVersion(nodeId: string, versionId: string, opts?: any): Promise<any>;
        // getVersion(nodeId: string, versionId: string, opts?: any): Promise<VersionEntry>;
        // getVersionContent(nodeId: string, versionId: string, attachment?: boolean, ifModifiedSince?: Date, opts?: any): Promise<any>;
        listVersionHistory(nodeId: string, opts?: { include?: Array<string>, fields?: Array<string>, skipCount?: number, maxItems?: number }): Promise<VersionPaging>;

        revertVersion(nodeId: string, versionId: string, revertBody: RevertBody, opts?: { fields?: Array<string> }): Promise<VersionEntry>;
    }

    export class Activity {
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

    export class ActivityEntry {
        constructor(obj?: any);

        entry?: Activity;
    }

    export class AssocChildBody {
        constructor(obj?: any);

        childId: string;
        assocType: string;
    }

    export class DeletedNodeEntry {
        constructor(obj?: any);

        entry?: DeletedNode;
    }

    export class DeletedNode {
        constructor(obj?: any);

        archivedByUser?: UserInfo;
        archivedAt?: Date;
    }

    export class ActivityPaging {
        constructor(obj?: any);

        list?: ActivityPagingList;
    }

    export class ActivityPagingList {
        constructor(obj?: any);

        entries?: Array<ActivityEntry>;
        pagination?: Pagination;
    }

    export class Association {
        constructor(obj?: any);

        targetId?: string;
        assocType?: string;
    }

    export class AssociationBody {
        constructor(obj?: any);

        targetId?: string;
        assocType?: string;
    }

    export class AssociationEntry {
        constructor(obj?: any);

        entry?: Association;
    }

    export class AssociationInfo {
        constructor(obj?: any);

        assocType?: string;
    }

    export class ChildAssociation {
        constructor(obj?: any);

        childId?: string;
        assocType?: string;
    }

    export class ChildAssociationBody {
        constructor(obj?: any);

        childId?: string;
        assocType?: string;
    }

    export class ChildAssociationEntry {
        constructor(obj?: any);

        entry?: ChildAssociation;
    }

    export class ChildAssociationInfo {
        constructor(obj?: any);

        assocType?: string;
        isPrimary?: boolean;
    }

    export class AssocTargetBody {
        constructor(obj?: any);

        targetId?: string;
        assocType?: string;
    }

    export class Comment {
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

    export class CommentBody {
        constructor(obj?: any);

        content?: string;
    }

    export class CommentEntry {
        constructor(obj?: any);

        entry?: Comment;
    }

    export class CommentPaging {
        constructor(obj?: any);

        list?: CommentPagingList;
    }

    export class CommentPagingList {
        constructor(obj?: any);

        entries?: Array<CommentEntry>;
        pagination?: Pagination;
    }

    export class Company {
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

    export class ContentInfo {
        constructor(obj?: any);

        mimeType?: string;
        mimeTypeName?: string;
        sizeInBytes?: number;
        encoding?: string;
    }

    export class RemovedNode extends Node {
        constructor(obj?: any);

        archivedByUser?: UserInfo;
        archivedAt?: Date;
    }

    export class RemovedNodeEntry {
        constructor(obj?: any);

        entry?: RemovedNode;
    }

    export class RemovedNodesPaging {
        constructor(obj?: any);

        list?: RemovedNodesPagingList;
    }

    export class RemovedNodesPagingList {
        constructor(obj?: any);

        entries?: Array<RemovedNodeEntry>;
        pagination?: Pagination;
    }

    export class Error {
        constructor(obj?: any);

        error?: ErrorError;
    }

    export class ErrorError {
        constructor(obj?: any);

        errorKey?: string;
        briefSummary?: string;
        descriptionURL?: string;
        logId?: string;
        stackTrace?: string;
        statusCode?: number;
    }

    export class Favorite {
        constructor(obj?: any);

        targetGuid?: string;
        adddAt?: Date;
        target?: any;
    }

    export class FavoriteBody {
        constructor(obj?: any);

        target?: any;
    }

    export class FavoriteEntry {
        constructor(obj?: any);

        entry?: Favorite;
    }

    export class FavoritePaging {
        constructor(obj?: any);

        list?: FavoritePagingList;
    }

    export class FavoritePagingList {
        constructor(obj?: any);

        entries?: Array<FavoriteEntry>;
        pagination?: Pagination;
    }

    export class FavoriteSite {
        constructor(obj?: any);

        id?: string;
    }

    export class FavoriteSiteBody {
        constructor(obj?: any);

        id?: string;
    }

    export class FavoriteSiteEntry {
        constructor(obj?: any);

        entry?: FavoriteSite;
    }

    export class NetworkQuota {
        constructor(obj?: any);

        id?: string;
        limit?: number;
        usage?: number;
    }


    export class NodeAssociation extends Node {
        constructor(obj?: any);

        association?: AssociationInfo;
    }

    export class NodeAssociationEntry {
        constructor(obj?: any);

        entry?: NodeAssociation;
    }

    export class NodeAssociationPaging {
        constructor(obj?: any);

        list?: NodeAssociationPagingList;
    }

    export class NodeAssociationPagingList {
        constructor(obj?: any);

        entries?: Array<NodeAssociationEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export class CopyBody {
        constructor(obj?: any);

        targetParentId?: string;
        name?: string;
    }

    export class NodeBody {
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

    export class NodeBodyAssociation {
        constructor(obj?: any);

        assocType?: string;
    }

    export class NodeBodyLock {
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

    export class MoveBody {
        constructor(obj?: any);

        targetParentId?: string;
        name?: string;
    }

    export class NodeChildAssociation extends Node {
        constructor(obj?: any);

        association?: ChildAssociationInfo;
    }

    export class NodeChildAssociationEntry {
        constructor(obj?: any);

        entry?: NodeChildAssociation;
    }

    export class NodeChildAssociationPaging {
        constructor(obj?: any);

        list?: NodeChildAssociationPagingList;
    }

    export class NodeChildAssociationPagingList {
        constructor(obj?: any);

        entries?: Array<NodeChildAssociationEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export class NodeEntry {
        constructor(obj?: any);

        entry?: Node;
    }

    export class NodePaging {
        constructor(obj?: any);

        list?: NodePagingList;
    }

    export class NodePagingList {
        constructor(obj?: any);

        entries?: Array<NodeEntry>;
        pagination?: Pagination;
        source?: Node;
    }

    export class Pagination {
        constructor(obj?: any);

        count?: number;
        hasMoreItems?: boolean;
        totalItems?: number;
        skipCount?: number;
        maxItems?: number;
    }

    export class PathElement {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export class PathInfo {
        constructor(obj?: any);

        elements?: Array<PathElement>;
        name?: string;
        isComplete?: boolean;
    }

    export class PermissionElement {
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

    export class PermissionsBodyUpdate {
        constructor(obj?: any);

        isInheritanceEnabled?: boolean;
        locallySet?: Array<PermissionElement>;
    }

    export class PermissionsInfo {
        constructor(obj?: any);

        isInheritanceEnabled?: boolean;
        inherited?: Array<PermissionElement>;
        locallySet?: Array<PermissionElement>;
        settable?: Array<string>;
    }

    export class Person {
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

    export class PersonBodyadd {
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

    export class PersonBodyUpdate {
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

    export class PersonEntry {
        constructor(obj?: any);

        entry?: Person;
    }

    export class PersonNetwork {
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

    export class PersonNetworkEntry {
        constructor(obj?: any);

        entry?: PersonNetwork;
    }

    export class PersonNetworkPaging {
        constructor(obj?: any);

        list?: PersonNetworkPagingList;
    }

    export class PersonNetworkPagingList {
        constructor(obj?: any);

        entries?: Array<PersonNetworkEntry>;
        pagination?: Pagination;
    }

    export class PersonPaging {
        constructor(obj?: any);

        list?: PersonPagingList;
    }

    export class PersonPagingList {
        constructor(obj?: any);

        entries?: Array<PersonEntry>;
        pagination?: Pagination;
    }

    export class Preference {
        constructor(obj?: any);

        id?: string;
        value?: string;
    }

    export class PreferenceEntry {
        constructor(obj?: any);

        entry?: Preference;
    }

    export class PreferencePaging {
        constructor(obj?: any);

        list?: PreferencePagingList;
    }

    export class PreferencePagingList {
        constructor(obj?: any);

        entries?: Array<PreferenceEntry>;
        pagination?: Pagination;
    }

    export class Rating {
        constructor(obj?: any);

        id?: string;
        aggregate?: RatingAggregate;
        ratedAt?: Date;
        myRating?: string;
    }

    export class RatingAggregate {
        constructor(obj?: any);

        average?: number;
        numberOfRatings?: number;
    }

    export class RatingBody {
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

    export class RatingEntry {
        constructor(obj?: any);

        entry?: Rating;
    }

    export class RatingPaging {
        constructor(obj?: any);

        list?: RatingPagingList;
    }

    export class RatingPagingList {
        constructor(obj?: any);

        entries?: Array<RatingEntry>;
        pagination?: Pagination;
    }

    export class Rendition {
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

    export class RenditionBody {
        constructor(obj?: any);

        id?: string;
    }

    export class RenditionEntry {
        constructor(obj?: any);

        entry?: Rendition;
    }

    export class RenditionPaging {
        constructor(obj?: any);

        list?: RenditionPagingList;
    }

    export class RenditionPagingList {
        constructor(obj?: any);

        entries?: Array<RenditionEntry>;
        pagination?: Pagination;
    }

    export class RevertBody {
        constructor(obj?: any);

        majorVersion?: boolean;
        comment?: string;
    }

    export class SharedLink {
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

    export class SharedLinkBody {
        constructor(obj?: any);

        nodeId?: string;
        expiresAt?: Date;
    }

    export class EmailSharedLinkBody {
        constructor(obj?: any);

        client?: string;
        message?: string;
        locale?: string;
        recipientEmails?: Array<string>;
    }

    export class SharedLinkEntry {
        constructor(obj?: any);

        entry?: SharedLink;
    }

    export class SharedLinkPaging {
        constructor(obj?: any);

        list?: SharedLinkPagingList;
    }

    export class SharedLinkPagingList {
        constructor(obj?: any);

        entries?: Array<SharedLinkEntry>;
        pagination?: Pagination;
    }

    export class Site {
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

    export class SiteBodyadd {
        constructor(obj?: any);

        id?: string;
        title?: string;
        description?: string;
        visibility?: SiteBodyadd.VisibilityEnum;
    }

    export class SiteBody {
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

    export class SiteBodyUpdate {
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

    export class SiteContainer {
        constructor(obj?: any);

        id?: string;
        folderId?: string;
    }

    export class SiteContainerEntry {
        constructor(obj?: any);

        entry?: SiteContainer;
    }

    export class SiteContainerPaging {
        constructor(obj?: any);

        list?: SiteContainerPagingList;
    }

    export class SiteContainerPagingList {
        constructor(obj?: any);

        entries?: Array<SiteContainerEntry>;
        pagination?: Pagination;
    }

    export class SiteEntry {
        constructor(obj?: any);

        entry?: Site;
    }

    export class SiteMember {
        constructor(obj?: any);

        id?: string;
        person?: Person;
        role?: SiteMember.RoleEnum;
    }

    export class SiteMemberBody {
        constructor(obj?: any);

        id?: string;
        role?: SiteMember.RoleEnum;
    }

    export class SiteMemberRoleBody {
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

    export class SiteMemberEntry {
        constructor(obj?: any);

        entry?: SiteMember;
    }

    export class SiteMemberPaging {
        constructor(obj?: any);

        list?: SiteMemberPagingList;
    }

    export class SiteMemberPagingList {
        constructor(obj?: any);

        entries?: Array<SiteMemberEntry>;
        pagination?: Pagination;
    }

    export class SiteMembershipBodyadd {
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

    export class SiteMembershipBodyUpdate {
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

    export class SiteMembershipRequest {
        constructor(obj?: any);

        id?: string;
        adddAt?: Date;
        site?: Site;
        message?: string;
    }

    export class SiteMembershipRequestBody {
        constructor(obj?: any);

        message?: string;
        id?: string;
        title?: string;
    }

    export class SiteMembershipRequestBodyUpdate {
        constructor(obj?: any);

        message?: string;
    }

    export class SiteMembershipRequestEntry {
        constructor(obj?: any);

        entry?: SiteMembershipRequest;
    }

    export class SiteMembershipRequestPaging {
        constructor(obj?: any);

        list?: SiteMembershipRequestPagingList;
    }

    export class SiteMembershipRequestPagingList {
        constructor(obj?: any);

        entries?: Array<SiteMembershipRequestEntry>;
        pagination?: Pagination;
    }

    export class SitePaging {
        constructor(obj?: any);

        list?: SitePagingList;
    }

    export class SitePagingList {
        constructor(obj?: any);

        entries?: Array<SiteEntry>;
        pagination?: Pagination;
    }

    export class SiteRole {
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

    export class SiteRoleEntry {
        constructor(obj?: any);

        entry?: SiteRole;
    }

    export class SiteRolePaging {
        constructor(obj?: any);

        list?: SiteRolePagingList;
    }

    export class SiteRolePagingList {
        constructor(obj?: any);

        entries?: Array<SiteRoleEntry>;
        pagination?: Pagination;
    }

    export class Tag {
        constructor(obj?: any);

        id?: string;
        tag?: string;
    }

    export class TagBody {
        constructor(obj?: any);

        tag?: string;
    }

    export class TagEntry {
        constructor(obj?: any);

        entry?: Tag;
    }

    export class TagPaging {
        constructor(obj?: any);

        list?: TagPagingList;
    }

    export class TagPagingList {
        constructor(obj?: any);

        entries?: Array<TagEntry>;
        pagination?: Pagination;
    }

    export class UserInfo {
        constructor(obj?: any);

        displayName?: string;
        id?: string;
    }

    export class Version {
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

    export class VersionEntry {
        constructor(obj?: any);

        entry?: Version;
    }

    export class VersionPaging {
        constructor(obj?: any);

        list?: VersionPagingList;
    }

    export class VersionPagingList {
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

        addRelatedGroup(groupId?: number, relatedGroupId?: number, type?: string): Promise<any>;

        createNewGroup(groupRepresentation?: GroupRepresentation): Promise<GroupRepresentation>;

        deleteGroupCapability(groupId?: number, groupCapabilityId?: number): Promise<any>;

        deleteGroupMember(groupId?: number, userId?: number): Promise<any>;

        deleteGroup(groupId?: number): Promise<any>;

        deleteRelatedGroup(groupId?: number, relatedGroupId?: number): Promise<any>;

        getCapabilities(groupId?: number): Promise<String[]>;

        getGroupUsers(groupId?: number, opts?: { filter?: string, page?: number, pageSize?: number }): Promise<any>;

        getGroup(groupId?: number, opts?: { includeAllUsers?: boolean, summary?: boolean }): Promise<AbstractGroupRepresentation>;

        getGroups(opts?: { tenantId?: number, functional?: boolean, summary?: boolean }): Promise<LightGroupRepresentation[]>;

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

        getUser(userId?: number, opts?: { summary?: boolean }): Promise<AbstractUserRepresentation>;

        getUsers(opts?: { filter?: string, status?: string, accountType?: string, sort?: string, company?: string, start?: number, page?: number, size?: number, groupId?: number, tenantId?: number, summary?: boolean }): Promise<any>;

        updateUserDetails(userId?: number, UserRepresentation?: UserRepresentation): Promise<any>;

    }

    export interface AppsApi {
        new(client?: ApiClient): AppsApi;

        deployAppDefinitions(saveObject?: RuntimeAppDefinitionSaveRepresentation): Promise<any>;

        exportAppDefinition(modelId?: number): Promise<any>;

        getAppDefinitions(): Promise<ResultListDataRepresentation>;

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

        getRepositories(opts: { tenantId: number, includeAccounts: boolean }): Promise<any>;
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

        getProcessInstanceComments(processInstanceId?: string, opts?: { latestFirst?: boolean }): Promise<any>;

        getTaskComments(taskId?: string, opts?: { latestFirst?: boolean }): Promise<any>;
    }

    export interface ContentApi {
        new(client?: ApiClient): ContentApi;

        createRelatedContentOnProcessInstance(processInstanceId?: string, relatedContent?: RelatedContentRepresentation, opts?:any): Promise<RelatedContentRepresentation>;

        createRelatedContentOnTask(taskId?: string, relatedContent?: RelatedContentRepresentation, opts?: { isRelatedContent?: boolean }): Promise<RelatedContentRepresentation>;

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

        getGroups(opts?: { filter?: string, groupId?: number, externalId?: string, externalIdCaseInsensitive?: string, tenantId?: number }): Promise<any>;

        getUsersForGroup(groupId?: number): Promise<any>;

    }

    export interface IDMSyncApi {
        new(client?: ApiClient): IDMSyncApi;

        getLogFile(syncLogEntryId?: number): Promise<any>;

        getSyncLogEntries(opts?: { tenantId?: number, page?: number, size?: number }): Promise<SyncLogEntryRepresentation[]>;
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

        getRepositories(opts?: { tenantId?: number, includeAccounts?: boolean }): Promise<any>;
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

        getFiles(opts?: { filter?: string, parent?: string }): Promise<any>;

        getRepositories(opts?: { tenantId?: number, includeAccounts?: boolean }): Promise<any>;

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

        getHistoricEditorDisplayJsonClient(processModelId?: number, processModelHistoryId?: number): Promise<any>;

        getEditorDisplayJsonClient(processModelId?: number): Promise<any>;

        getModelJSON(processDefinitionId?: string): Promise<any>;

        getModelJSONForProcessDefinition(processInstanceId?: string): Promise<any>;
    }

    export interface ModelsApi {
        new(client?: ApiClient): ModelsApi;

        createModel(modelRepresentation?: ModelRepresentation): Promise<ModelRepresentation>;

        deleteModel(modelId?: number, opts?: { cascade?: boolean, deleteRuntimeApp?: boolean }): Promise<any>;

        duplicateModel(modelId?: number, modelRepresentation?: ModelRepresentation): Promise<ModelRepresentation>;

        getModelJSON(modelId?: number): Promise<any>;

        getModelThumbnail(modelId?: number): Promise<String[]>;

        getModel(modelId?: number, opts?: { includePermissions?: boolean }): Promise<ModelRepresentation>;

        getModelsToIncludeInAppDefinition(): Promise<any>;

        getModels(opts?: { filter?: string, sort?: string, modelType?: number, referenceId?: number }): Promise<any>;

        importNewVersion(modelId?: number, file?: File): Promise<ModelRepresentation>;

        importProcessModel(file?: File): Promise<ModelRepresentation>;

        saveModel(modelId?: number, values?: any): Promise<ModelRepresentation>;

        updateModel(modelId?: number, updatedModel?: ModelRepresentation): Promise<ModelRepresentation>;

        validateModel(modelId?: number, opts?: { values?: any }): Promise<ValidationErrorRepresentation[]>;
    }

    export interface ModelsHistoryApi {
        new(client?: ApiClient): ModelsHistoryApi;

        getModelHistoryCollection(modelId?: number, opts?: { includeLatestVersion?: boolean }): Promise<any>;

        getProcessModelHistory(modelId?: number, modelHistoryId?: number): Promise<ModelRepresentation>;
    }

    export interface ProcessApi {
        new(client?: ApiClient): ProcessApi;

        deleteProcessInstance(processInstanceId?: string): Promise<any>;

        filterProcessInstances(filterRequest?: ProcessInstanceFilterRequestRepresentation): Promise<any>;

        getProcessDefinitionStartForm(processDefinitionId?: string): Promise<FormDefinitionRepresentation>;

        getProcessDefinitions(opts?: { latest?: boolean, appDefinitionId?: number }): Promise<any>;

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

        getProcessInstanceComments(processInstanceId?: string, opts?: { latestFirst?: boolean }): Promise<any>;

        getProcessInstanceStartForm(processInstanceId?: string): Promise<FormDefinitionRepresentation>;

        getProcessInstance(processInstanceId?: string): Promise<ProcessInstanceRepresentation>;
    }

    export interface ProcessDefinitionsApi {
        new(client?: ApiClient): ProcessDefinitionsApi;

        getProcessDefinitions(opts?: { latest?: boolean, appDefinitionId?: number }): Promise<any>;
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

        completeTask(taskId?: string): Promise<any>;

        createNewTask(taskRepresentation?: TaskRepresentation): Promise<any>;

        createRelatedContentOnTask(taskId?: string, relatedContent?: RelatedContentRepresentation, opts?: { isRelatedContent?: boolean }): Promise<any>;

        deleteTask(taskId?: string): Promise<any>;

        filterTasks(requestNode?: TaskFilterRequestRepresentation): Promise<any>;

        getChecklist(taskId?: string): Promise<any>;

        getTaskAuditJson(taskId?: string): Promise<any>;

        getTaskAuditPdf(taskId?: string): Promise<any>;

        getRelatedContentForTask(taskId?: string): Promise<any>;

        getRestFieldValuesColumn(taskId?: string, field?: string, column?: string): Promise<any>;

        getRestFieldValues(taskId?: string, field?: string): Promise<any>;

        getTaskComments(taskId?: string, opts?: { latestFirst?: boolean }): Promise<any>;

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

        getChecklist(taskId?: string): Promise<any>;

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

        getUsers(opts?: { filter?: string, email?: string, externalId?: string, externalIdCaseInsensitive?: string, excludeTaskId?: string, excludeProcessId?: string, groupId?: number, tenantId?: number }): Promise<any>;

        requestPasswordReset(resetPassword?: ResetPasswordRepresentation): Promise<any>;

        updateUser(userId?: number, userRequest?: UserRepresentation): Promise<any>;
    }

    export interface UserFiltersApi {
        new(client?: ApiClient): UserFiltersApi;

        createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation?: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation>;

        createUserTaskFilter(userTaskFilterRepresentation?: UserTaskFilterRepresentation): Promise<any>;

        deleteUserProcessInstanceFilter(userFilterId?: number): Promise<any>;

        getUserProcessInstanceFilter(userFilterId?: number): Promise<any>;

        getUserProcessInstanceFilters(opts?: { appId?: number }): Promise<any>;

        deleteUserTaskFilter(userFilterId?: number): Promise<any>;

        getUserTaskFilter(userFilterId?: number): Promise<any>;

        getUserTaskFilters(opts?: { appId?: number }): Promise<any>;

        orderUserProcessInstanceFilters(filterOrderRepresentation?: UserFilterOrderRepresentation): Promise<any>;

        orderUserTaskFilters(filterOrderRepresentation?: UserFilterOrderRepresentation): Promise<any>;

        updateUserProcessInstanceFilter(userFilterId?: number, userProcessInstanceFilterRepresentation?: UserProcessInstanceFilterRepresentation): Promise<UserProcessInstanceFilterRepresentation>;

        updateUserTaskFilter(userFilterId?: number, userTaskFilterRepresentation?: UserTaskFilterRepresentation): Promise<UserTaskFilterRepresentation>;
    }

    export interface UsersWorkflowApi {
        new(client?: ApiClient): UsersWorkflowApi;

        getUsers(opts?: { filter?: string, email?: string, externalId?: string, externalIdCaseInsensitive?: string, excludeTaskId?: string, excludeProcessId?: string, groupId?: number, tenantId?: number }): Promise<any>;
    }

    export interface AboutApi {
        new(client?: ApiClient): AboutApi;

        getAppVersion(): Promise<any>;
    }

    export class AbstractGroupRepresentation {
        constructor(obj?: any);

        externalId?: string;
        id: number;
        name: string;
        status: string;
    }

    export class AbstractUserRepresentation {
        constructor(obj?: any);

        email?: string;
        firstName?: string;
        lastName?: string;
        externalId?: string;
        id: number;
        pictureId: string;
    }

    export class AddGroupCapabilitiesRepresentation {
        constructor(obj?: any);

        capabilities?: string[];
    }

    export class AppDefinition {
        constructor(obj?: any);

        icon?: string;
        models?: AppModelDefinition;
        publishIdentityInfo?: PublishIdentityInfoRepresentation;
        theme?: string;
    }

    export class AppDefinitionPublishRepresentation {
        constructor(obj?: any);

        comment?: string;
        force?: boolean;
    }

    export class AppDefinitionRepresentation {
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

    export class AppDefinitionUpdateResultRepresentation {
        constructor(obj?: any);

        appDefinition?: AppDefinitionRepresentation;
        customData?: any;
        error?: boolean;
        errorDescription?: string;
        errorType?: number;
        message?: string;
        messageKey?: string;
    }

    export class AppModelDefinition {
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

    export class BulkUserUpdateRepresentation {
        constructor(obj?: any);

        accountType?: string;
        password?: string;
        sendNotifications?: boolean;
        status?: string;
        tenantId?: number;
        users?: number[];
    }

    export class ChangePasswordRepresentation {
        constructor(obj?: any);

        newPassword?: string;
        oldPassword?: string;
    }

    export class Chart {
        constructor(obj?: any);

        id?: string;
        type?: string;
    }

    export class ChecklistOrderRepresentation {
        constructor(obj?: any);

        order?: string[];
    }

    export class CompleteFormRepresentation {
        constructor(obj?: any);

        outcome?: string;
        values?: any;
    }

    export class ConditionRepresentation {
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

    export class CreateEndpointBasicAuthRepresentation {
        constructor(obj?: any);

        name?: string;
        password?: string;
        tenantId?: number;
        username?: string;
    }

    export class CreateProcessInstanceRepresentation {
        constructor(obj?: any);

        name?: string;
        outcome?: string;
        processDefinitionKey?: string;
        businessKey?: string;
        processDefinitionId?: string;
        variables?: any;
        values?: any;
    }

    export class CreateTenantRepresentation {
        constructor(obj?: any);

        active?: boolean;
        domain?: string;
        maxUsers?: number;
        name?: string;
    }

    export class EndpointBasicAuthRepresentation {
        constructor(obj?: any);

        created?: Date;
        id?: number;
        lastUpdated?: Date;
        name?: string;
        tenantId?: number;
        username?: string;
    }

    export class EndpointConfigurationRepresentation {
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

    export class EndpointRequestHeaderRepresentation {
        constructor(obj?: any);

        name?: string;
        value?: string;
    }

    export class EntityAttributeScopeRepresentation {
        constructor(obj?: any);

        name?: string;
        type?: string;
    }

    export class EntityVariableScopeRepresentation {
        constructor(obj?: any);

        attributes?: EntityAttributeScopeRepresentation[];
        entityName?: string;
        mappedDataModel?: number;
        mappedVariableName?: string;
    }

    export class FormDefinitionRepresentation {
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

    export class FormFieldRepresentation {
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

    export class FormJavascriptEventRepresentation {
        constructor(obj?: any);

        event?: string;
        javascriptLogic?: string;
    }

    export class FormOutcomeRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export class FormRepresentation {
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

    export class FormSaveRepresentation {
        constructor(obj?: any);

        comment?: string;
        formImageBase64?: string;
        formRepresentation?: FormRepresentation;
        newVersion?: boolean;
        processScopeIdentifiers?: ProcessScopeIdentifierRepresentation;
        reusable?: boolean;
    }

    export class FormScopeRepresentation {
        constructor(obj?: any);

        description?: string;
        fieldVariables?: FormFieldRepresentation[];
        fields?: FormFieldRepresentation[];
        id?: number;
        name?: string;
        outcomes?: FormOutcomeRepresentation[];
    }

    export class FormTabRepresentation {
        constructor(obj?: any);

        id?: string;
        title?: string;
        visibilityCondition?: ConditionRepresentation;
    }

    export class FormValueRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export class GroupCapabilityRepresentation {
        constructor(obj?: any);

        id?: number;
        name?: string;
    }

    export class GroupRepresentation {
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

    export class ImageUploadRepresentation {
        constructor(obj?: any);

        created?: Date;
        id?: number;
        name?: string;
        userId?: number;
    }

    export class LayoutRepresentation {
        constructor(obj?: any);

        colspan?: number;
        column?: number;
        row?: number;
    }

    export class LightAppRepresentation {
        constructor(obj?: any);

        description?: string;
        icon?: string;
        id?: number;
        name?: string;
        theme?: string;
    }

    export class LightGroupRepresentation {
        constructor(obj?: any);

        externalId?: string;
        groups?: LightGroupRepresentation[];
        id?: number;
        name?: string;
        status?: string;
    }

    export class LightTenantRepresentation {
        constructor(obj?: any);

        id?: number;
        name?: string;
    }

    export class ModelRepresentation {
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

    export class OptionRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
    }

    export class ParameterValueRepresentation {
        constructor(obj?: any);

        id?: string;
        name?: string;
        version?: string;
        value?: string;
    }

    export class ProcessFilterRequestRepresentation {
        constructor(obj?: any);

        processDefinitionId?: number;
        appDefinitionId?: number;
        state?: string;
        sort?: string;
        page?: number;
        size?: number;
    }

    export class ProcessInstanceAuditRepresentation {
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

    export class ProcessInstanceFilterRepresentation {
        constructor(obj?: any);

        asc?: boolean;
        name?: string;
        processDefinitionId?: string;
        processDefinitionKey?: string;
        sort?: string;
        state?: string;
    }

    export class ProcessInstanceFilterRequestRepresentation {
        constructor(obj?: any);

        appDefinitionId?: number;
        filter?: ProcessInstanceFilterRepresentation;
        filterId?: number;
        page?: number;
        size?: number;
    }

    export class ProcessInstanceRepresentation {
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

    export class ProcessInstanceVariableRepresentation {
        constructor(obj?: any);

        id?: string;
        type?: string;
        value?: any;
    }

    export class ProcessScopeIdentifierRepresentation {
        constructor(obj?: any);

        processActivityId?: string;
        processModelId?: number;
    }

    export class ProcessScopeRepresentation {
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
        processModelType?: number;
        responseVariables?: any;
    }

    export class ProcessScopesRequestRepresentation {
        constructor(obj?: any);

        identifiers?: ProcessScopeIdentifierRepresentation[];
        overriddenModel?: string;
    }

    export class PublishIdentityInfoRepresentation {
        constructor(obj?: any);

        group?: LightGroupRepresentation;
        person?: LightUserRepresentation;
        type?: string;
    }

    export class RelatedContentRepresentation {
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

    export class ReportCharts {
        constructor(obj?: any);

        elements?: string;
    }

    export class ReportExportQueryRepresentation {
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

    export class ReportParametersDefinition {
        constructor(obj?: any);

        id?: number;
        name?: string;
        definition?: string;
        created?: string;
    }

    export class ReportSaveQueryRepresentation {
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

    export class ResetPasswordRepresentation {
        constructor(obj?: any);

        email?: string;
    }

    export class ResultListDataRepresentation {
        constructor(obj?: any);

        data?: any[];
        size?: number;
        start?: number;
        total?: number;
    }

    export class RuntimeAppDefinitionSaveRepresentation {
        constructor(obj?: any);

        appDefinitions?: AppDefinitionRepresentation[];
    }

    export class SaveFormRepresentation {
        constructor(obj?: any);

        values?: any;
    }

    export class SyncLogEntryRepresentation {
        constructor(obj?: any);

        id?: number;
        timeStamp?: Date;
        type?: string;
    }

    export class SystemPropertiesRepresentation {
        constructor(obj?: any);

        allowInvolveByEmail?: boolean;
    }

    export class TaskAuditRepresentation {
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

    export class TaskFilterRepresentation {
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

    export class TaskFilterRequestRepresentation {
        constructor(obj?: any);

        appDefinitionId?: number;
        filter?: TaskFilterRepresentation;
        filterId?: number;
        page?: number;
        size?: number;
    }

    export class TaskQueryRequestRepresentation {
        constructor(obj?: any);

        processInstanceId?: string;
        text?: string;
        assignment?: string;
        state?: string;
        sort?: string;
        page?: number;
        size?: number;
    }

    export class TaskRepresentation {
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

    export class TaskUpdateRepresentation {
        constructor(obj?: any);

        description?: string;
        descriptionSet?: boolean;
        dueDate?: Date;
        dueDateSet?: boolean;
        name?: string;
        nameSet?: boolean;
    }

    export class TenantEvent {
        constructor(obj?: any);

        eventTime?: Date;
        eventType?: string;
        extraInfo?: string;
        id?: number;
        tenantId?: number;
        userId?: number;
        userName?: string;
    }

    export class TenantRepresentation {
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

    export class UserAccountCredentialsRepresentation {
        constructor(obj?: any);

        password?: string;
        username?: string;
    }

    export class UserActionRepresentation {
        constructor(obj?: any);

        action?: string;
        newPassword?: string;
        oldPassword?: string;
    }

    export class UserFilterOrderRepresentation {
        constructor(obj?: any);

        appId?: number;
        order?: number[];
    }

    export class UserProcessInstanceFilterRepresentation {
        constructor(obj?: any);

        appId?: number;
        filter?: ProcessInstanceFilterRepresentation;
        icon?: number;
        id?: number;
        index?: number;
        name?: string;
        recent?: boolean;
    }

    export class UserRepresentation {
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

    export class UserTaskFilterRepresentation {
        constructor(obj?: any);

        appId?: number;
        filter?: TaskFilterRepresentation;
        icon?: string;
        id?: number;
        index?: number;
        name?: string;
        recent?: boolean;
    }

    export class ValidationErrorRepresentation {
        constructor(obj?: any);

        defaultDescription?: string;
        id?: string;
        name?: string;
        problem?: string;
        problemReference?: string;
        validatorSetName?: string;
        warning?: boolean;
    }

    export class VariableScopeRepresentation {
        constructor(obj?: any);

        mapVariable?: string;
        mappedColumn?: string;
        mappedDataModel?: number;
        mappedEntity?: string;
        mappedVariableName?: string;
        processVariableName?: string;
        processVariableType?: string;
    }

    export class ReportDateRangeRepresentation {
        constructor(obj?: any);

        endDate?: string;
        rangeId?: number;
        startDate?: string;
    }

    export class LightUserRepresentation {
        constructor(obj?: any);

        email?: string;
        externalId?: string;
        firstName?: string;
        id?: number;
        lastName?: string;
        pictureId?: number;
    }

    export class CommentRepresentation {
        constructor(obj?: any);

        created?: Date;
        createdBy?: LightUserRepresentation;
        id?: number;
        message?: string;
    }

    //  ======= Process service  End ======

    export class Activiti {
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
        AssocInfo: AssocInfo;
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
        NodeAssocMinimal: NodeAssocMinimal;
        NodeAssocMinimalEntry: NodeAssocMinimalEntry;
        NodeAssocPaging: NodeAssocPaging;
        NodeAssocPagingList: NodeAssocPagingList;
        NodeBody: NodeBody;
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
        createCustomModel(status: string, description: string, name: string, namespaceUri: string, namespacePrefix: string): Promise<any>;

        createCustomType(modelName: string, name: string, parentName: string, title, description: string): Promise<any>;

        createCustomAspect(modelName: string, name: string, parentName: string, title, description: string): Promise<any>;

        createCustomConstraint(modelName: string, name: string, type: string, parameters: any): Promise<any>;

        activateCustomModel(modelName: string): Promise<any>;

        deactivateCustomModel(modelName: string): Promise<any>;

        addPropertyToAspect(modelName: string, aspectName: string, properties: any): Promise<any>;

        addPropertyToType(modelName: string, updateCustomModel, properties: any): Promise<any>;

        updateCustomModel(modelName: string, description: string, namespaceUri: string, namespacePrefix: string): Promise<any>;

        updateCustomType(modelName: string, typeName: string, description: string, parentName: string, title: string): Promise<any>;

        updateCustomAspect(modelName: string, aspectName: string, description: string, parentName: string, title: string): Promise<any>;

        getAllCustomModel(): Promise<any>;

        getCustomModel(modelName: string, queryParams: any): Promise<any>;

        getAllCustomType(modelName: string): Promise<any>;

        getCustomType(modelName: string, typeName: string, queryParams: any): Promise<any>;

        getAllCustomAspect(modelName: string): Promise<any>;

        getCustomAspect(modelName: string, aspectName: string, queryParams: any): Promise<any>;

        getAllCustomConstraints(modelName: string): Promise<any>;

        getCustomConstraints(modelName: string, constraintName: string, queryParams: any): Promise<any>;

        deleteCustomModel(modelName: string): Promise<any>;

        deleteCustomType(modelName: string, typeName: string): Promise<any>;
    }

    export class AlfrescoApiConfig {
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

    export class RestVariable {
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
