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


export * from './about.api';
import { AboutApi } from './about.api';
export * from './accountintegration.api';
import { AccountIntegrationApi } from './accountintegration.api';
export * from './adminendpoints.api';
import { AdminEndpointsApi } from './adminendpoints.api';
export * from './admingroups.api';
import { AdminGroupsApi } from './admingroups.api';
export * from './admintenants.api';
import { AdminTenantsApi } from './admintenants.api';
export * from './adminusers.api';
import { AdminUsersApi } from './adminusers.api';
export * from './appdefinitions.api';
import { AppDefinitionsApi } from './appdefinitions.api';
export * from './checklists.api';
import { ChecklistsApi } from './checklists.api';
export * from './comments.api';
import { ActivitiCommentsApi } from './comments.api';
import { ContentApi } from './content.api';
export * from './datasources.api';
import { DataSourcesApi } from './datasources.api';
export * from './decisionaudits.api';
import { DecisionAuditsApi } from './decisionaudits.api';
export * from './decisiontables.api';
import { DecisionTablesApi } from './decisiontables.api';
export * from './endpoints.api';
import { EndpointsApi } from './endpoints.api';
export * from './formmodels.api';
import { FormModelsApi } from './formmodels.api';
export * from './groups.api';
import { ActivitiGroupsApi } from './groups.api';
export * from './iDMSync.api';
import { IDMSyncApi } from './iDMSync.api';
export * from './integrationalfrescocloud.api';
import { IntegrationAlfrescoCloudApi } from './integrationalfrescocloud.api';
export * from './integrationalfrescoonpremise.api';
import { IntegrationAlfrescoOnPremiseApi } from './integrationalfrescoonpremise.api';
export * from './integrationbox.api';
import { IntegrationBoxApi } from './integrationbox.api';
export * from './integrationdrive.api';
import { IntegrationDriveApi } from './integrationdrive.api';
export * from './models.api';
import { ModelsApi } from './models.api';
export * from './modelsbpmn.api';
import { ModelsBpmnApi } from './modelsbpmn.api';
export * from './modelshistory.api';
import { ModelsHistoryApi } from './modelshistory.api';
export * from './processdefinitions.api';
import { ProcessDefinitionsApi } from './processdefinitions.api';
export * from './processinstances.api';
import { ProcessInstancesApi } from './processinstances.api';
export * from './processinstancevariables.api';
import { ProcessInstanceVariablesApi } from './processinstancevariables.api';
export * from './processscopes.api';
import { ProcessScopesApi } from './processscopes.api';
export * from './runtimeappdefinitions.api';
import { RuntimeAppDefinitionsApi } from './runtimeappdefinitions.api';
export * from './runtimeappdeployments.api';
import { RuntimeAppDeploymentsApi } from './runtimeappdeployments.api';
export * from './scriptfiles.api';
import { ScriptFilesApi } from './scriptfiles.api';
export * from './submittedforms.api';
import { SubmittedFormsApi } from './submittedforms.api';
export * from './systemproperties.api';
import { SystemPropertiesApi } from './systemproperties.api';
export * from './taskactions.api';
import { TaskActionsApi } from './taskactions.api';
export * from './taskforms.api';
import { TaskFormsApi } from './taskforms.api';
export * from './tasks.api';
import { TasksApi } from './tasks.api';
export * from './taskvariables.api';
import { TaskVariablesApi } from './taskvariables.api';
export * from './userfilters.api';
import { UserFiltersApi } from './userfilters.api';
export * from './userprofile.api';
import { UserProfileApi } from './userprofile.api';
export * from './users.api';
import { UsersApi } from './users.api';
export * from './report.api';
import { ReportApi } from './report.api';
export * from './modelJsonBpmn.api';
import { ModelJsonBpmnApi } from './modelJsonBpmn.api';
export * from './temporary.api';
import { TemporaryApi } from './temporary.api';
export const APS_APIS = [AboutApi, AccountIntegrationApi, AdminEndpointsApi, AdminGroupsApi, AdminTenantsApi, AdminUsersApi, AppDefinitionsApi, ChecklistsApi, ActivitiCommentsApi, ContentApi, DataSourcesApi, DecisionAuditsApi, DecisionTablesApi, EndpointsApi, FormModelsApi, ActivitiGroupsApi, IDMSyncApi, IntegrationAlfrescoCloudApi, IntegrationAlfrescoOnPremiseApi, IntegrationBoxApi, IntegrationDriveApi, ModelsApi, ModelJsonBpmnApi, ModelsBpmnApi, ModelsHistoryApi, ProcessDefinitionsApi, ProcessInstancesApi, ProcessInstanceVariablesApi, ProcessScopesApi, RuntimeAppDefinitionsApi, RuntimeAppDeploymentsApi, ScriptFilesApi, SubmittedFormsApi, SystemPropertiesApi, TaskActionsApi, TaskFormsApi, TasksApi, TaskVariablesApi, UserFiltersApi, UserProfileApi, UsersApi, ReportApi, TemporaryApi];
