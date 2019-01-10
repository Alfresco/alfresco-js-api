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

import { AboutApi } from './api/AboutApi';
import { AlfrescoApiActiviti } from './api/AlfrescoApiActiviti';
import { AdminEndpointsApi } from './api/AdminEndpointsApi';
import { AdminGroupsApi } from './api/AdminGroupsApi';
import { AdminTenantsApi } from './api/AdminTenantsApi';
import { AdminUsersApi } from './api/AdminUsersApi';
import { AppsApi } from './api/AppsApi';
import { AppsDefinitionApi } from './api/AppsDefinitionApi';
import { AppsRuntimeApi } from './api/AppsRuntimeApi';
import { CommentsApi } from './api/CommentsApi';
import { ContentApi } from './api/ContentApi';
import { ContentRenditionApi } from './api/ContentRenditionApi';
import { EditorApi } from './api/EditorApi';
import { GroupsApi } from './api/GroupsApi';
import { IDMSyncApi } from './api/IDMSyncApi';
import { IntegrationAccountApi } from './api/IntegrationAccountApi';
import { IntegrationAlfrescoCloudApi } from './api/IntegrationAlfrescoCloudApi';
import { IntegrationAlfrescoOnPremiseApi } from './api/IntegrationAlfrescoOnPremiseApi';
import { IntegrationBoxApi } from './api/IntegrationBoxApi';
import { IntegrationDriveApi } from './api/IntegrationDriveApi';
import { ModelBpmnApi } from './api/ModelBpmnApi';
import { ModelJsonBpmnApi } from './api/ModelJsonBpmnApi';
import { ModelsApi } from './api/ModelsApi';
import { ModelsHistoryApi } from './api/ModelsHistoryApi';
import { ProcessApi } from './api/ProcessApi';
import { ProcessDefinitionsApi } from './api/ProcessDefinitionsApi';
import { ProcessDefinitionsFormApi } from './api/ProcessDefinitionsFormApi';
import { ProcessInstancesApi } from './api/ProcessInstancesApi';
import { ProcessInstancesInformationApi } from './api/ProcessInstancesInformationApi';
import { ProcessInstancesListingApi } from './api/ProcessInstancesListingApi';
import { ProcessInstanceVariablesApi } from './api/ProcessInstanceVariablesApi';
import { ProcessScopeApi } from './api/ProcessScopeApi';
import { ProfileApi } from './api/ProfileApi';
import { ScriptFileApi } from './api/ScriptFileApi';
import { SystemPropertiesApi } from './api/SystemPropertiesApi';
import { TaskApi } from './api/TaskApi';
import { TaskActionsApi } from './api/TaskActionsApi';
import { TaskCheckListApi } from './api/TaskCheckListApi';
import { TaskFormsApi } from './api/TaskFormsApi';
import { TemporaryApi } from './api/TemporaryApi';
import { UserApi } from './api/UserApi';
import { UserFiltersApi } from './api/UserFiltersApi';
import { UsersWorkflowApi } from './api/UsersWorkflowApi';
import { ReportApi } from './api/ReportApi';

import { AlfrescoApiActiviti as _AlfrescoApiActiviti } from './api/AlfrescoApiActiviti';
import { AboutApi as _AboutApi } from './api/AboutApi';
import { AdminEndpointsApi as _AdminEndpointsApi } from './api/AdminEndpointsApi';
import { AdminGroupsApi as _AdminGroupsApi } from './api/AdminGroupsApi';
import { AdminTenantsApi as _AdminTenantsApi } from './api/AdminTenantsApi';
import { AdminUsersApi as _AdminUsersApi } from './api/AdminUsersApi';
import { AppsApi as _AppsApi } from './api/AppsApi';
import { AppsDefinitionApi as _AppsDefinitionApi } from './api/AppsDefinitionApi';
import { AppsRuntimeApi as _AppsRuntimeApi } from './api/AppsRuntimeApi';
import { CommentsApi as _CommentsApi } from './api/CommentsApi';
import { ContentApi as _ContentApi } from './api/ContentApi';
import { ContentRenditionApi as _ContentRenditionApi } from './api/ContentRenditionApi';
import { EditorApi as _EditorApi } from './api/EditorApi';
import { GroupsApi as _GroupsApi } from './api/GroupsApi';
import { IDMSyncApi as _IDMSyncApi } from './api/IDMSyncApi';
import { IntegrationAccountApi as _IntegrationAccountApi } from './api/IntegrationAccountApi';
import { IntegrationAlfrescoCloudApi as _IntegrationAlfrescoCloudApi } from './api/IntegrationAlfrescoCloudApi';
import { IntegrationAlfrescoOnPremiseApi as _IntegrationAlfrescoOnPremiseApi } from './api/IntegrationAlfrescoOnPremiseApi';
import { IntegrationBoxApi as _IntegrationBoxApi } from './api/IntegrationBoxApi';
import { IntegrationDriveApi as _IntegrationDriveApi } from './api/IntegrationDriveApi';
import { ModelBpmnApi as _ModelBpmnApi } from './api/ModelBpmnApi';
import { ModelJsonBpmnApi as _ModelJsonBpmnApi } from './api/ModelJsonBpmnApi';
import { ModelsApi as _ModelsApi } from './api/ModelsApi';
import { ModelsHistoryApi as _ModelsHistoryApi } from './api/ModelsHistoryApi';
import { ProcessApi as _ProcessApi } from './api/ProcessApi';
import { ProcessDefinitionsApi as _ProcessDefinitionsApi } from './api/ProcessDefinitionsApi';
import { ProcessDefinitionsFormApi as _ProcessDefinitionsFormApi } from './api/ProcessDefinitionsFormApi';
import { ProcessInstancesApi as _ProcessInstancesApi } from './api/ProcessInstancesApi';
import { ProcessInstancesInformationApi as _ProcessInstancesInformationApi } from './api/ProcessInstancesInformationApi';
import { ProcessInstancesListingApi as _ProcessInstancesListingApi } from './api/ProcessInstancesListingApi';
import { ProcessInstanceVariablesApi as _ProcessInstanceVariablesApi } from './api/ProcessInstanceVariablesApi';
import { ProcessScopeApi as _ProcessScopeApi } from './api/ProcessScopeApi';
import { ProfileApi as _ProfileApi } from './api/ProfileApi';
import { ScriptFileApi as _ScriptFileApi } from './api/ScriptFileApi';
import { SystemPropertiesApi as _SystemPropertiesApi } from './api/SystemPropertiesApi';
import { TaskApi as _TaskApi } from './api/TaskApi';
import { TaskActionsApi as _TaskActionsApi } from './api/TaskActionsApi';
import { TaskCheckListApi as _TaskCheckListApi } from './api/TaskCheckListApi';
import { TaskFormsApi as _TaskFormsApi } from './api/TaskFormsApi';
import { TemporaryApi as _TemporaryApi } from './api/TemporaryApi';
import { UserApi as _UserApi } from './api/UserApi';
import { UserFiltersApi as _UserFiltersApi } from './api/UserFiltersApi';
import { UsersWorkflowApi as _UsersWorkflowApi } from './api/UsersWorkflowApi';
import { ReportApi as _ReportApi } from './api/ReportApi';

export const APS_LEGACY_APIS = {
    AlfrescoApi: AlfrescoApiActiviti,
    AboutApi: AboutApi,
    AdminEndpointsApi: AdminEndpointsApi,
    AdminGroupsApi: AdminGroupsApi,
    AdminTenantsApi: AdminTenantsApi,
    AdminUsersApi: AdminUsersApi,
    AppsApi: AppsApi,
    AppsDefinitionApi: AppsDefinitionApi,
    AppsRuntimeApi: AppsRuntimeApi,
    CommentsApi: CommentsApi,
    ContentApi: ContentApi,
    ContentRenditionApi: ContentRenditionApi,
    EditorApi: EditorApi,
    GroupsApi: GroupsApi,
    IDMSyncApi: IDMSyncApi,
    IntegrationAccountApi: IntegrationAccountApi,
    IntegrationAlfrescoCloudApi: IntegrationAlfrescoCloudApi,
    IntegrationAlfrescoOnPremiseApi: IntegrationAlfrescoOnPremiseApi,
    IntegrationBoxApi: IntegrationBoxApi,
    IntegrationDriveApi: IntegrationDriveApi,
    ModelBpmnApi: ModelBpmnApi,
    ModelJsonBpmnApi: ModelJsonBpmnApi,
    ModelsApi: ModelsApi,
    ModelsHistoryApi: ModelsHistoryApi,
    ProcessApi: ProcessApi,
    ProcessDefinitionsApi: ProcessDefinitionsApi,
    ProcessDefinitionsFormApi: ProcessDefinitionsFormApi,
    ProcessInstancesApi: ProcessInstancesApi,
    ProcessInstancesInformationApi: ProcessInstancesInformationApi,
    ProcessInstancesListingApi: ProcessInstancesListingApi,
    ProcessInstanceVariablesApi: ProcessInstanceVariablesApi,
    ProcessScopeApi: ProcessScopeApi,
    ProfileApi: ProfileApi,
    ScriptFileApi: ScriptFileApi,
    SystemPropertiesApi: SystemPropertiesApi,
    TaskApi: TaskApi,
    TaskActionsApi: TaskActionsApi,
    TaskCheckListApi: TaskCheckListApi,
    TaskFormsApi: TaskFormsApi,
    TemporaryApi: TemporaryApi,
    UserApi: UserApi,
    UserFiltersApi: UserFiltersApi,
    UsersWorkflowApi: UsersWorkflowApi,
    ReportApi: ReportApi
};

export namespace Activiti {
    export class AlfrescoApi extends _AlfrescoApiActiviti {
    }

    export class AboutApi extends _AboutApi {
    }

    export class AdminEndpointsApi extends _AdminEndpointsApi {
    }

    export class AdminGroupsApi extends _AdminGroupsApi {
    }

    export class AdminTenantsApi extends _AdminTenantsApi {
    }

    export class AdminUsersApi extends _AdminUsersApi {
    }

    export class AppsApi extends _AppsApi {
    }

    export class AppsDefinitionApi extends _AppsDefinitionApi {
    }

    export class AppsRuntimeApi extends _AppsRuntimeApi {
    }

    export class CommentsApi extends _CommentsApi {
    }

    export class ContentApi extends _ContentApi {
    }

    export class ContentRenditionApi extends _ContentRenditionApi {
    }

    export class EditorApi extends _EditorApi {
    }

    export class GroupsApi extends _GroupsApi {
    }

    export class IDMSyncApi extends _IDMSyncApi {
    }

    export class IntegrationAccountApi extends _IntegrationAccountApi {
    }

    export class IntegrationAlfrescoCloudApi extends _IntegrationAlfrescoCloudApi {
    }

    export class IntegrationAlfrescoOnPremiseApi extends _IntegrationAlfrescoOnPremiseApi {
    }

    export class IntegrationBoxApi extends _IntegrationBoxApi {
    }

    export class IntegrationDriveApi extends _IntegrationDriveApi {
    }

    export class ModelBpmnApi extends _ModelBpmnApi {
    }

    export class ModelJsonBpmnApi extends _ModelJsonBpmnApi {
    }

    export class ModelsApi extends _ModelsApi {
    }

    export class ModelsHistoryApi extends _ModelsHistoryApi {
    }

    export class ProcessApi extends _ProcessApi {
    }

    export class ProcessDefinitionsApi extends _ProcessDefinitionsApi {
    }

    export class ProcessDefinitionsFormApi extends _ProcessDefinitionsFormApi {
    }

    export class ProcessInstancesApi extends _ProcessInstancesApi {
    }

    export class ProcessInstancesInformationApi extends _ProcessInstancesInformationApi {
    }

    export class ProcessInstancesListingApi extends _ProcessInstancesListingApi {
    }

    export class ProcessInstanceVariablesApi extends _ProcessInstanceVariablesApi {
    }

    export class ProcessScopeApi extends _ProcessScopeApi {
    }

    export class ProfileApi extends _ProfileApi {
    }

    export class ScriptFileApi extends _ScriptFileApi {
    }

    export class SystemPropertiesApi extends _SystemPropertiesApi {
    }

    export class TaskApi extends _TaskApi {
    }

    export class TaskActionsApi extends _TaskActionsApi {
    }

    export class TaskCheckListApi extends _TaskCheckListApi {
    }

    export class TaskFormsApi extends _TaskFormsApi {
    }

    export class TemporaryApi extends _TemporaryApi {
    }

    export class UserApi extends _UserApi {
    }

    export class UserFiltersApi extends _UserFiltersApi {
    }

    export class UsersWorkflowApi extends _UsersWorkflowApi {
    }

    export class ReportApi extends _ReportApi {
    }
}
