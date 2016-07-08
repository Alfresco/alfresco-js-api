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
    entries: MinimalNodeEntity[];
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

interface Mock {
    Auth : any;
    node: any;
}

interface NodesApi {
    new(client: ApiClient): NodesApi;
    getNodeChildren(nodeId: string, opts: any): NodePaging;
}

interface ApiClient {
    new(client: any): ApiClient;
}

export interface AlfrescoApi {
    new(config: any): AlfrescoApi;

    Auth: Auth;
    Core: Core;
    Mock: Mock;

    search: any;
    node: any;

    createClient(): any;
    getClient(): any;
    getClientAuth(): any;
    getToken(): any;
    changeConfig(config: any);

    createFolder(name: string, relativePath: string, nodeId: string): any;
    getNodeInfo(nodeId: string): any;
    getNodeChildrenInfo(nodeId: string, opts: any): any;
    deleteNode(nodeId: string): any;
    deleteNodePermanent(nodeId: string): any;

    uploadFile(fileDefinition: File, relativePath: string, nodeId: string, nodeBody: any, opts: any):any;

    isLoggedIn(): boolean;
    login(): any;
    logout(): any;
    getDocumentThumbnailUrl(documentId: string): any;
    getContentUrl(documentId: string): any;
}

declare var AlfrescoApi: AlfrescoApi;
