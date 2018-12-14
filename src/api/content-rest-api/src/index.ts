/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { ChangesApi } from './api/changesApi';
import { ChildAssociationsApi } from './api/childAssociationsApi';
import { CommentsApi } from './api/commentsApi';
import { FavoritesApi } from './api/favoritesApi';
import { NetworksApi } from './api/networksApi';
import { NodesApi } from './api/nodesApi';
import { RatingsApi } from './api/ratingsApi';
import { PeopleApi } from './api/peopleApi';
import { RenditionsApi } from './api/renditionsApi';
import { QueriesApi } from './api/queriesApi';
import { SharedlinksApi } from './api/sharedlinksApi';
import { SitesApi } from './api/sitesApi';
import { TagsApi } from './api/tagsApi';
import { WebscriptApi } from './api/webscriptApi';
import { DownloadsApi } from './api/downloadsApi';
import { VersionsApi } from './api/versionsApi';
import { ClassesApi } from './api/classesApi';
import { GroupsApi } from './api/groupsApi';
import { CustomModelApi } from './api/customModelApi';

export const CONTENT_LEGACY_APIS = [ChangesApi, ChildAssociationsApi, FavoritesApi, NetworksApi, NodesApi, CommentsApi, PeopleApi, RatingsApi, RenditionsApi, QueriesApi, SharedlinksApi, SitesApi, TagsApi, WebscriptApi, DownloadsApi, VersionsApi, ClassesApi, GroupsApi, CustomModelApi];

export const Core = {
    ChangesApi: ChangesApi,
    ChildAssociationsApi: ChildAssociationsApi,
    FavoriFavoritesApites: FavoritesApi,
    NetworksApi: NetworksApi,
    NodesApi: NodesApi,
    CommentsApi: CommentsApi,
    PeopleApi: PeopleApi,
    RatingsApi: RatingsApi,
    RenditionsApi: RenditionsApi,
    QueriesApi: QueriesApi,
    SharedlinksApi: SharedlinksApi,
    SitesApi: SitesApi,
    TagsApi: TagsApi,
    WebscriptApi: WebscriptApi,
    DownloadsApi: DownloadsApi,
    VersionsApi: VersionsApi,
    ClassesApi: ClassesApi,
    GroupsApi: GroupsApi,
    CustomModelApi: CustomModelApi,
};

export namespace Legacy {
    export interface Core {
        changesApi: ChangesApi;
        childAssociationsApi: ChildAssociationsApi;
        favoritesApi: FavoritesApi;
        networksApi: NetworksApi;
        nodesApi: NodesApi;
        commentsApi: CommentsApi;
        peopleApi: PeopleApi;
        ratingsApi: RatingsApi;
        renditionsApi: RenditionsApi;
        queriesApi: QueriesApi;
        sharedlinksApi: SharedlinksApi;
        sitesApi: SitesApi;
        tagsApi: TagsApi;
        webscriptApi: WebscriptApi;
        downloadsApi: DownloadsApi;
        versionsApi: VersionsApi;
        classesApi: ClassesApi;
        groupsApi: GroupsApi;
        customModelApi: CustomModelApi;

    }
}
export * from './model/AccessStatusEnum';
export * from './model/ErrorResponse';
export * from './model/NodeAssocMinimal';
export * from './model/ActivityActivitySummary';
export * from './model/NodeAssocMinimalEntry';
export * from './model/FavoriteBody';
export * from './model/NodeAssocPaging';
export * from './model/NodeAssocPagingList';
export * from './model/AssocChildBody';
export * from './model/SiteMemberBody';
export * from './model/AssocTargetBody';
export * from './model/FavoriteSiteBody';
export * from './model/NodeBody';
export * from './model/FavoriteSitePaging';
export * from './model/NodeBodyAssociation';
export * from './model/SiteMemberRoleBody';
export * from './model/FavoriteSitePagingList';
export * from './model/SiteMembershipBody';
export * from './model/ClassDescription';
export * from './model/FavoriteTarget';
export * from './model/RequestTemplate';
export * from './model/ClassPropertyDescription';
export * from './model/FavoriteTargetSite';
export * from './model/NodeMinimal';
export * from './model/NodeMinimalEntry';
export * from './model/StatusEnum';
export * from './model/GroupBody';
export * from './model/RenditionBody';
export * from './model/SubscriptionLevelEnum';
export * from './model/CopyBody';
export * from './model/NodeSharedLink';
export * from './model/DefaultFTSFieldOperatorEnum';
export * from './model/NodeSharedLinkEntry';
export * from './model/ResultSetContextSpellcheckEnum';
export * from './model/DefaultFTSOperatorEnum';
export * from './model/NodeSharedLinkPaging';
export * from './model/GroupsEntry';
export * from './model/NodeSharedLinkPagingList';
export * from './model/GroupsPaging';
export * from './model/NodesnodeIdchildrenContent';
export * from './model/RequestFacetFieldEnum';
export * from './model/TypeEnum';
export * from './model/GroupsPagingList';
export * from './model/DeletedNodeMinimalEntry';
export * from './model/IdEnum';
export * from './model/RequestFacetInterval';
export * from './model/RoleEnum';
export * from './model/InlineResponse201';
export * from './model/InlineResponse201Entry';
export * from './model/LifetimeEnum';
export * from './model/MinimalNode';
export * from './model/RequestFacetQuery';
export * from './model/SharedLinkBody';
export * from './model/VisibilityEnum';
export * from './model/MoveBody';
export * from './model/EmailSharedLinkBody';
export * from './model/RequestFilterQuery';
export * from './model/SiteBody';
