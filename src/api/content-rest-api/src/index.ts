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

export const CONTENT_APIS = [ChangesApi, ChildAssociationsApi, FavoritesApi, NetworksApi, NodesApi, CommentsApi, PeopleApi, RatingsApi, RenditionsApi, QueriesApi, SharedlinksApi, SitesApi, TagsApi, WebscriptApi, DownloadsApi, VersionsApi, ClassesApi, GroupsApi, CustomModelApi];
