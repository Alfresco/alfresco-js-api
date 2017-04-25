declare var AlfrescoApi: AlfrescoApi.AlfrescoApi;

declare namespace AlfrescoApi {
    export interface AlfrescoApi {
        new(config: AlfrescoApiConfig): AlfrescoApi;

        config: AlfrescoApiConfig;

        Activiti: Activiti;
        Auth: Auth;
        Core: Core;

        bpmAuth: BpmAuthApi;
        ecmAuth: EcmAuthApi;
        oauth2Auth: OauthApi;

        activiti: Activiti;
        core: Core;

        search: any;
        nodes: NodesApi;
        content: ContentApi;
        upload: any;
        webScript: any;

        ecmClient: EcmClient;
        bpmClient: BpmClient;
        searchClient: SearchClient;
        ecmPrivateClient: EcmPrivateClient;

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

    export interface NodePaging {
        list: NodePagingList;
    }

    export interface DeletedNodesPaging {
        list: DeletedNodesPagingList;
    }

    export interface NodePagingList {
        pagination: Pagination;
        entries: MinimalNodeEntity[];
        source?: Source;
    }

    export interface DeletedNodesPagingList {
        pagination: Pagination;
        entries: DeletedNodeEntity[];
    }

    export interface Pagination {
        count: number;
        hasMoreItems: boolean;
        totalItems: number;
        skipCount: number;
        maxItems: number;
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
        entry: MinimalNodeEntryEntity;
    }

    export interface DeletedNodeEntity {
        entry: DeletedNodeMinimalEntry;
    }

    export interface MinimalNode {
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

    export interface EcmClient {
        new(config: AlfrescoApiConfig): EcmClient;
        changeHost(host: String): void;
        setAuthentications(authentications: any): void;
    }

    export interface BpmClient {
        new(config: AlfrescoApiConfig): BpmClient;
        changeHost(host: String): void;
        setAuthentications(authentications: any): void;
    }

    export interface SearchClient {
        new(config: AlfrescoApiConfig): SearchClient;
        changeHost(): void;
        setAuthentications(authentications: any): void;
    }

    export interface EcmPrivateClient {
        new(config: AlfrescoApiConfig): EcmPrivateClient;
        changeHost(host: String): void;
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

    export interface UserInfo {
        displayName: string;
        id: string;
    }

    export interface ContentInfo {
        mimeType: string;
        mimeTypeName: string;
        sizeInBytes: number;
        encoding: string;
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
        associationsApi: any;
        changesApi: any;
        childAssociationsApi: any;
        commentsApi: any;
        customModelApi: any;
        favoritesApi: any;
        networksApi: any;
        nodesApi: any;
        peopleApi: any;
        ratingsApi: any;
        renditionsApi: any;
        searchApi: any;
        sharedlinksApi: any;
        sitesApi: any;
        queriesApi: any;
        tagsApi: any;
        webscriptApi: any;

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

        getDocumentThumbnailUrl(nodeId: string): string;
        getDocumentPreviewUrl(nodeId: string): string;
        getContentUrl(nodeId: string): string;
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
