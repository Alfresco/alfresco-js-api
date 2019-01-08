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
export * from './accountIntegration.api';
import { AccountIntegrationApi } from './accountIntegration.api';
export * from './adminEndpoints.api';
import { AdminEndpointsApi } from './adminEndpoints.api';
export * from './adminGroups.api';
import { AdminGroupsApi } from './adminGroups.api';
export * from './adminTenants.api';
import { AdminTenantsApi } from './adminTenants.api';
export * from './adminUsers.api';
import { AdminUsersApi } from './adminUsers.api';
export * from './appDefinitions.api';
import { AppDefinitionsApi } from './appDefinitions.api';
export * from './checklists.api';
import { ChecklistsApi } from './checklists.api';
export * from './comments.api';
import { ActivitiCommentsApi } from './comments.api';
import { ContentApi } from './content.api';
export * from './dataSources.api';
import { DataSourcesApi } from './dataSources.api';
export * from './decisionAudits.api';
import { DecisionAuditsApi } from './decisionAudits.api';
export * from './decisionTables.api';
import { DecisionTablesApi } from './decisionTables.api';
export * from './endpoints.api';
import { EndpointsApi } from './endpoints.api';
export * from './formModels.api';
import { FormModelsApi } from './formModels.api';
export * from './groups.api';
import { ActivitiGroupsApi } from './groups.api';
export * from './iDMSync.api';
import { IDMSyncApi } from './iDMSync.api';
export * from './integrationAlfrescoCloud.api';
import { IntegrationAlfrescoCloudApi } from './integrationAlfrescoCloud.api';
export * from './integrationAlfrescoOnPremise.api';
import { IntegrationAlfrescoOnPremiseApi } from './integrationAlfrescoOnPremise.api';
export * from './integrationBox.api';
import { IntegrationBoxApi } from './integrationBox.api';
export * from './integrationDrive.api';
import { IntegrationDriveApi } from './integrationDrive.api';
export * from './models.api';
import { ModelsApi } from './models.api';
export * from './modelsBpmn.api';
import { ModelsBpmnApi } from './modelsBpmn.api';
export * from './modelsHistory.api';
import { ModelsHistoryApi } from './modelsHistory.api';
export * from './processDefinitions.api';
import { ProcessDefinitionsApi } from './processDefinitions.api';
export * from './processInstances.api';
import { ProcessInstancesApi } from './processInstances.api';
export * from './processInstanceVariables.api';
import { ProcessInstanceVariablesApi } from './processInstanceVariables.api';
export * from './processScopes.api';
import { ProcessScopesApi } from './processScopes.api';
export * from './runtimeAppDefinitions.api';
import { RuntimeAppDefinitionsApi } from './runtimeAppDefinitions.api';
export * from './runtimeAppDeployments.api';
import { RuntimeAppDeploymentsApi } from './runtimeAppDeployments.api';
export * from './scriptFiles.api';
import { ScriptFilesApi } from './scriptFiles.api';
export * from './submittedForms.api';
import { SubmittedFormsApi } from './submittedForms.api';
export * from './systemProperties.api';
import { SystemPropertiesApi } from './systemProperties.api';
export * from './taskActions.api';
import { TaskActionsApi } from './taskActions.api';
export * from './taskForms.api';
import { TaskFormsApi } from './taskForms.api';
export * from './tasks.api';
import { TasksApi } from './tasks.api';
export * from './taskVariables.api';
import { TaskVariablesApi } from './taskVariables.api';
export * from './userFilters.api';
import { UserFiltersApi } from './userFilters.api';
export * from './userProfile.api';
import { UserProfileApi } from './userProfile.api';
export * from './users.api';
import { UsersApi } from './users.api';
export * from './report.api';
import { ReportApi } from './report.api';
export * from './modelJsonBpmn.api';
import { ModelJsonBpmnApi } from './modelJsonBpmn.api';
export * from './temporary.api';
import { TemporaryApi } from './temporary.api';
export const APS_APIS = [AboutApi, AccountIntegrationApi, AdminEndpointsApi, AdminGroupsApi, AdminTenantsApi, AdminUsersApi, AppDefinitionsApi, ChecklistsApi, ActivitiCommentsApi, ContentApi, DataSourcesApi, DecisionAuditsApi, DecisionTablesApi, EndpointsApi, FormModelsApi, ActivitiGroupsApi, IDMSyncApi, IntegrationAlfrescoCloudApi, IntegrationAlfrescoOnPremiseApi, IntegrationBoxApi, IntegrationDriveApi, ModelsApi, ModelJsonBpmnApi, ModelsBpmnApi, ModelsHistoryApi, ProcessDefinitionsApi, ProcessInstancesApi, ProcessInstanceVariablesApi, ProcessScopesApi, RuntimeAppDefinitionsApi, RuntimeAppDeploymentsApi, ScriptFilesApi, SubmittedFormsApi, SystemPropertiesApi, TaskActionsApi, TaskFormsApi, TasksApi, TaskVariablesApi, UserFiltersApi, UserProfileApi, UsersApi, ReportApi, TemporaryApi];
