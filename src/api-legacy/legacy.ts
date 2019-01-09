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

import { AlfrescoApiActiviti } from './activiti-rest-api/src/api/AlfrescoApiActiviti';
import { ReportApi } from './activiti-rest-api/src/api/ReportApi';
import { TaskActionsApi } from './activiti-rest-api/src/api/TaskActionsApi';
import { TemporaryApi } from './activiti-rest-api/src/api/TemporaryApi';
import { AboutApi } from './activiti-rest-api/src/api/AboutApi';
import { IntegrationDriveApi } from './activiti-rest-api/src/api/IntegrationDriveApi';
import { ProcessApi } from './activiti-rest-api/src/api/ProcessApi';
import { ProfileApi } from './activiti-rest-api/src/api/ProfileApi';
import { TaskCheckListApi } from './activiti-rest-api/src/api/TaskCheckListApi';
import { IDMSyncApi } from './activiti-rest-api/src/api/IDMSyncApi';
import { AppsRuntimeApi } from './activiti-rest-api/src/api/AppsRuntimeApi';
import { AppsDefinitionApi } from './activiti-rest-api/src/api/AppsDefinitionApi';
import { ModelsHistoryApi } from './activiti-rest-api/src/api/ModelsHistoryApi';
import { ProcessInstancesApi } from './activiti-rest-api/src/api/ProcessInstancesApi';
import { AdminGroupsApi } from './activiti-rest-api/src/api/AdminGroupsApi';
import { SystemPropertiesApi } from './activiti-rest-api/src/api/SystemPropertiesApi';
import { AdminEndpointsApi } from './activiti-rest-api/src/api/AdminEndpointsApi';
import { AdminUsersApi } from './activiti-rest-api/src/api/AdminUsersApi';
import { CommentsApi } from './activiti-rest-api/src/api/CommentsApi';
import { TaskFormsApi } from './activiti-rest-api/src/api/TaskFormsApi';
import { ProcessInstancesListingApi } from './activiti-rest-api/src/api/ProcessInstancesListingApi';
import { ContentApi } from './activiti-rest-api/src/api/ContentApi';
import { UsersWorkflowApi } from './activiti-rest-api/src/api/UsersWorkflowApi';
import { IntegrationAlfrescoCloudApi } from './activiti-rest-api/src/api/IntegrationAlfrescoCloudApi';
import { IntegrationAlfrescoOnPremiseApi } from './activiti-rest-api/src/api/IntegrationAlfrescoOnPremiseApi';
import { IntegrationBoxApi } from './activiti-rest-api/src/api/IntegrationBoxApi';
import { ModelJsonBpmnApi } from './activiti-rest-api/src/api/ModelJsonBpmnApi';
import { ScriptFileApi } from './activiti-rest-api/src/api/ScriptFileApi';
import { UserFiltersApi } from './activiti-rest-api/src/api/UserFiltersApi';
import { ProcessInstancesInformationApi } from './activiti-rest-api/src/api/ProcessInstancesInformationApi';
import { TaskApi } from './activiti-rest-api/src/api/TaskApi';
import { ProcessDefinitionsApi } from './activiti-rest-api/src/api/ProcessDefinitionsApi';
import { IntegrationAccountApi } from './activiti-rest-api/src/api/IntegrationAccountApi';
import { UserApi } from './activiti-rest-api/src/api/UserApi';
import { ContentRenditionApi } from './activiti-rest-api/src/api/ContentRenditionApi';
import { ProcessInstanceVariablesApi } from './activiti-rest-api/src/api/ProcessInstanceVariablesApi';
import { ModelsApi } from './activiti-rest-api/src/api/ModelsApi';
import { EditorApi } from './activiti-rest-api/src/api/EditorApi';
import { AdminTenantsApi } from './activiti-rest-api/src/api/AdminTenantsApi';
import { ModelBpmnApi } from './activiti-rest-api/src/api/ModelBpmnApi';
import { AppsApi } from './activiti-rest-api/src/api/AppsApi';
import { ProcessScopeApi } from './activiti-rest-api/src/api/ProcessScopeApi';
import { ProcessDefinitionsFormApi } from './activiti-rest-api/src/api/ProcessDefinitionsFormApi';
import { GroupsApi } from './activiti-rest-api/src/api/GroupsApi';

import { NetworksApi } from './content-rest-api/src/api/networksApi';
import { SharedlinksApi } from './content-rest-api/src/api/sharedlinksApi';
import { ClassesApi } from './content-rest-api/src/api/classesApi';
import { CommentsApi as CommentsApiCS } from './content-rest-api/src/api/commentsApi';
import { CustomModelApi } from './content-rest-api/src/api/customModelApi';
import { RenditionsApi } from './content-rest-api/src/api/renditionsApi';
import { VersionsApi } from './content-rest-api/src/api/versionsApi';
import { ChildAssociationsApi } from './content-rest-api/src/api/childAssociationsApi';
import { PeopleApi } from './content-rest-api/src/api/peopleApi';
import { TagsApi } from './content-rest-api/src/api/tagsApi';
import { FavoritesApi } from './content-rest-api/src/api/favoritesApi';
import { RatingsApi } from './content-rest-api/src/api/ratingsApi';
import { DownloadsApi } from './content-rest-api/src/api/downloadsApi';
import { QueriesApi } from './content-rest-api/src/api/queriesApi';
import { NodesApi } from './content-rest-api/src/api/nodesApi';
import { WebscriptApi } from './content-rest-api/src/api/webscriptApi';
import { ChangesApi } from './content-rest-api/src/api/changesApi';
import { SitesApi } from './content-rest-api/src/api/sitesApi';
import { GroupsApi as GroupsApiCS } from './content-rest-api/src/api/groupsApi';
import { SearchApi } from '../api/search-rest-api/api';
import { GsSitesApi } from '../api/gs-core-rest-api/api/gsSites.api';
import { FilesApi } from '../api/gs-core-rest-api/api/files.api';
import { FilePlansApi } from '../api/gs-core-rest-api/api/filePlans.api';
import { RecordFoldersApi } from '../api/gs-core-rest-api/api/recordFolders.api';
import { UnfiledContainersApi } from '../api/gs-core-rest-api/api/unfiledContainers.api';
import { TransferContainersApi } from '../api/gs-core-rest-api/api/transferContainers.api';
import { UnfiledRecordFoldersApi } from '../api/gs-core-rest-api/api/unfiledRecordFolders.api';
import { RecordCategoriesApi } from '../api/gs-core-rest-api/api/recordCategories.api';
import { TransfersApi } from '../api/gs-core-rest-api/api/transfers.api';
import { RecordsApi } from '../api/gs-core-rest-api/api/records.api';
import { ClassificationReasonsApi } from '../api/gs-classification-rest-api/api/classificationReasons.api';
import { SecurityControlSettingsApi } from '../api/gs-classification-rest-api/api/securityControlSettings.api';
import { DeclassificationExemptionsApi } from '../api/gs-classification-rest-api/api/declassificationExemptions.api';
import { DefaultClassificationValuesApi } from '../api/gs-classification-rest-api/api/defaultClassificationValues.api';
import { ClassificationGuidesApi } from '../api/gs-classification-rest-api/api/classificationGuides.api';
import { DiscoveryApi } from '../api/discovery-rest-api/api';
import { AuthenticationApi } from '../api/auth-rest-api/api';

/**
 * @deprecated 3.0.0
 */
export namespace Legacy {
    export interface Activiti {
        alfrescoApi: AlfrescoApiActiviti;
        aboutApi: AboutApi;
        adminEndpointsApi: AdminEndpointsApi;
        adminGroupsApi: AdminGroupsApi;
        adminTenantsApi: AdminTenantsApi;
        adminUsersApi: AdminUsersApi;
        appsApi: AppsApi;
        appsDefinitionApi: AppsDefinitionApi;
        appsRuntimeApi: AppsRuntimeApi;
        commentsApi: CommentsApi;
        contentApi: ContentApi;
        contentRenditionApi: ContentRenditionApi;
        editorApi: EditorApi;
        groupsApi: GroupsApi;
        iDMSyncApi: IDMSyncApi;
        integrationAccountApi: IntegrationAccountApi;
        integrationAlfrescoCloudApi: IntegrationAlfrescoCloudApi;
        integrationAlfrescoOnPremiseApi: IntegrationAlfrescoOnPremiseApi;
        integrationBoxApi: IntegrationBoxApi;
        integrationDriveApi: IntegrationDriveApi;
        modelBpmnApi: ModelBpmnApi;
        modelJsonBpmnApi: ModelJsonBpmnApi;
        modelsApi: ModelsApi;
        modelsHistoryApi: ModelsHistoryApi;
        processApi: ProcessApi;
        processDefinitionsApi: ProcessDefinitionsApi;
        processDefinitionsFormApi: ProcessDefinitionsFormApi;
        processInstancesApi: ProcessInstancesApi;
        processInstancesInformationApi: ProcessInstancesInformationApi;
        processInstancesListingApi: ProcessInstancesListingApi;
        processInstanceVariablesApi: ProcessInstanceVariablesApi;
        processScopeApi: ProcessScopeApi;
        profileApi: ProfileApi;
        scriptFileApi: ScriptFileApi;
        systemPropertiesApi: SystemPropertiesApi;
        taskApi: TaskApi;
        taskActionsApi: TaskActionsApi;
        taskCheckListApi: TaskCheckListApi;
        taskFormsApi: TaskFormsApi;
        temporaryApi: TemporaryApi;
        userApi: UserApi;
        userFiltersApi: UserFiltersApi;
        usersWorkflowApi: UsersWorkflowApi;
        reportApi: ReportApi;
    }

    export interface Core {
        changesApi: ChangesApi;
        childAssociationsApi: ChildAssociationsApi;
        commentsApi: CommentsApiCS;
        favoritesApi: FavoritesApi;
        networksApi: NetworksApi;
        nodesApi: NodesApi;
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
        groupsApi: GroupsApiCS;
        customModelApi: CustomModelApi;

    }

    export interface Search {
        searchApi: SearchApi;
    }

    export interface Auth {
        authenticationApi: AuthenticationApi;
    }

    export interface Discovery {
        discoveryApi: DiscoveryApi;
    }

    export interface GsCore {
        fileplansApi: FilePlansApi;
        filesApi: FilesApi;
        gsSitesApi: GsSitesApi;
        recordcategoriesApi: RecordCategoriesApi;
        recordfoldersApi: RecordFoldersApi;
        recordsApi: RecordsApi;
        transfercontainersApi: TransferContainersApi;
        transfersApi: TransfersApi;
        unfiledcontainersApi: UnfiledContainersApi;
        unfiledrecordfoldersApi: UnfiledRecordFoldersApi;
    }

    export interface GsClassification {
        classificationguidesApi: ClassificationGuidesApi;
        classificationreasonsApi: ClassificationReasonsApi;
        declassificationexemptionsApi: DeclassificationExemptionsApi;
        defaultclassificationvaluesApi: DefaultClassificationValuesApi;
        securitycontrolsettingsApi: SecurityControlSettingsApi;
    }
}

export { ChildAssociationBody as AssocChildBody } from '../api/content-rest-api/model/childAssociationBody';
export { AssociationBody as AssocTargetBody } from '../api/content-rest-api/model/associationBody';
export { FavoriteBodyCreate as FavoriteBody } from '../api/content-rest-api/model/favoriteBodyCreate';
export { SearchRequest as QueryBody } from '../api/search-rest-api/model/searchRequest';
export { PathInfo as PathInfoEntity } from '../api/content-rest-api/model/pathInfo';
export { NodeEntry as MinimalNodeEntity } from '../api/content-rest-api/model/nodeEntry';
export { DeletedNodeEntry as DeletedNodeEntity } from '../api/content-rest-api/model/deletedNodeEntry';
export { Node as MinimalNode } from '../api/content-rest-api/model/node';
export { Node as MinimalNodeEntryEntity } from '../api/content-rest-api/model/node';
export { PathElement as PathElementEntity } from '../api/content-rest-api/model/pathElement';
export { SiteBodyCreate as SiteBody } from '../api/content-rest-api/model/siteBodyCreate';
export { GroupPaging as GroupsPaging } from '../api/content-rest-api/model/groupPaging';

export {
    ProcessInstanceQueryRepresentation as ProcessFilterRequestRepresentation
}from '../api/activiti-rest-api/model/processInstanceQueryRepresentation';
export {
    TaskQueryRepresentation as TaskQueryRequestRepresentation
}from '../api/activiti-rest-api/model/taskQueryRepresentation';

export { ContentClient as EcmClient } from '../contentClient';
export { ProcessClient as BpmClient } from '../processClient';
export { SiteMembershipBodyCreate as SiteMemberBody } from '../api/content-rest-api/model/siteMembershipBodyCreate';
export {
    SiteMembershipBodyUpdate as SiteMemberRoleBody
}from '../api/content-rest-api/model/siteMembershipBodyUpdate';
export { SharedLinkBodyCreate as SharedLinkBody } from '../api/content-rest-api/model/sharedLinkBodyCreate';
export { SharedLinkBodyEmail  as EmailSharedLinkBody } from '../api/content-rest-api/model/sharedLinkBodyEmail';
export { RenditionBodyCreate as RenditionBody } from '../api/content-rest-api/model/renditionBodyCreate';
export {
    SiteMembershipRequestBodyCreate as SiteMembershipRequestBody
}from '../api/content-rest-api/model/siteMembershipRequestBodyCreate';
export { FavoriteSiteBodyCreate as FavoriteSiteBody } from '../api/content-rest-api/model/favoriteSiteBodyCreate';
export { SiteMembershipRequestBodyUpdate as SiteMembershipBody } from '../api/content-rest-api/model/siteMembershipRequestBodyUpdate';
export { NodeBodyCreate as NodeBody } from '../api/content-rest-api/model/nodeBodyCreate';
export { NodeBodyCopy as CopyBody } from '../api/content-rest-api/model/nodeBodyCopy';
export { NodeBodyMove as MoveBody } from '../api/content-rest-api/model/nodeBodyMove';
export { GroupBodyCreate as GroupBody } from '../api/content-rest-api/model/groupBodyCreate';




