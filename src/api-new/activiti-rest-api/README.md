Provides access to the complete features provided by Alfresco Process Services powered by Activiti.

You can use this API to integrate Alfresco Process Services with external applications.

- Last Build date: 2018-11-02T12:15:13.625Z


## Documentation for API Endpoints

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*.AboutApi* | [**getAppVersionUsingGET**](docs/AboutApi.md#getAppVersionUsingGET) | **GET** /enterprise/app-version | Get server type and version
*.AccountintegrationApi* | [**getAccountsUsingGET**](docs/AccountintegrationApi.md#getAccountsUsingGET) | **GET** /enterprise/account/integration | Retrieve external account information
*.AdminendpointsApi* | [**createBasicAuthConfigurationUsingPOST**](docs/AdminendpointsApi.md#createBasicAuthConfigurationUsingPOST) | **POST** /enterprise/admin/basic-auths | Add an endpoint authorization
*.AdminendpointsApi* | [**createEndpointConfigurationUsingPOST**](docs/AdminendpointsApi.md#createEndpointConfigurationUsingPOST) | **POST** /enterprise/admin/endpoints | Create an endpoint
*.AdminendpointsApi* | [**getBasicAuthConfigurationUsingGET**](docs/AdminendpointsApi.md#getBasicAuthConfigurationUsingGET) | **GET** /enterprise/admin/basic-auths/{basicAuthId} | Get an endpoint authorization
*.AdminendpointsApi* | [**getBasicAuthConfigurationsUsingGET**](docs/AdminendpointsApi.md#getBasicAuthConfigurationsUsingGET) | **GET** /enterprise/admin/basic-auths | List endpoint authorizations
*.AdminendpointsApi* | [**getEndpointConfigurationUsingGET1**](docs/AdminendpointsApi.md#getEndpointConfigurationUsingGET1) | **GET** /enterprise/admin/endpoints/{endpointConfigurationId} | Get an endpoint
*.AdminendpointsApi* | [**getEndpointConfigurationsUsingGET1**](docs/AdminendpointsApi.md#getEndpointConfigurationsUsingGET1) | **GET** /enterprise/admin/endpoints | List endpoints
*.AdminendpointsApi* | [**removeBasicAuthonfigurationUsingDELETE**](docs/AdminendpointsApi.md#removeBasicAuthonfigurationUsingDELETE) | **DELETE** /enterprise/admin/basic-auths/{basicAuthId} | Delete an endpoint authorization
*.AdminendpointsApi* | [**removeEndpointConfigurationUsingDELETE**](docs/AdminendpointsApi.md#removeEndpointConfigurationUsingDELETE) | **DELETE** /enterprise/admin/endpoints/{endpointConfigurationId} | Delete an endpoint
*.AdminendpointsApi* | [**updateBasicAuthConfigurationUsingPUT**](docs/AdminendpointsApi.md#updateBasicAuthConfigurationUsingPUT) | **PUT** /enterprise/admin/basic-auths/{basicAuthId} | Update an endpoint authorization
*.AdminendpointsApi* | [**updateEndpointConfigurationUsingPUT**](docs/AdminendpointsApi.md#updateEndpointConfigurationUsingPUT) | **PUT** /enterprise/admin/endpoints/{endpointConfigurationId} | Update an endpoint
*.AdmingroupsApi* | [**activateUsingPOST**](docs/AdmingroupsApi.md#activateUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/action/activate | Activate a group
*.AdmingroupsApi* | [**addAllUsersToGroupUsingPOST**](docs/AdmingroupsApi.md#addAllUsersToGroupUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/add-all-users | Add users to a group
*.AdmingroupsApi* | [**addGroupCapabilitiesUsingPOST**](docs/AdmingroupsApi.md#addGroupCapabilitiesUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/capabilities | Add capabilities to a group
*.AdmingroupsApi* | [**addGroupMemberUsingPOST**](docs/AdmingroupsApi.md#addGroupMemberUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/members/{userId} | Add a user to a group
*.AdmingroupsApi* | [**addRelatedGroupUsingPOST**](docs/AdmingroupsApi.md#addRelatedGroupUsingPOST) | **POST** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Get a related group
*.AdmingroupsApi* | [**createNewGroupUsingPOST**](docs/AdmingroupsApi.md#createNewGroupUsingPOST) | **POST** /enterprise/admin/groups | Create a group
*.AdmingroupsApi* | [**deleteGroupCapabilityUsingDELETE**](docs/AdmingroupsApi.md#deleteGroupCapabilityUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | Remove a capability from a group
*.AdmingroupsApi* | [**deleteGroupMemberUsingDELETE**](docs/AdmingroupsApi.md#deleteGroupMemberUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId}/members/{userId} | Delete a member from a group
*.AdmingroupsApi* | [**deleteGroupUsingDELETE**](docs/AdmingroupsApi.md#deleteGroupUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId} | Delete a group
*.AdmingroupsApi* | [**deleteRelatedGroupUsingDELETE**](docs/AdmingroupsApi.md#deleteRelatedGroupUsingDELETE) | **DELETE** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Delete a related group
*.AdmingroupsApi* | [**getCapabilitiesUsingGET**](docs/AdmingroupsApi.md#getCapabilitiesUsingGET) | **GET** /enterprise/admin/groups/{groupId}/potential-capabilities | List group capabilities
*.AdmingroupsApi* | [**getGroupUsersUsingGET**](docs/AdmingroupsApi.md#getGroupUsersUsingGET) | **GET** /enterprise/admin/groups/{groupId}/users | Get group members
*.AdmingroupsApi* | [**getGroupUsingGET**](docs/AdmingroupsApi.md#getGroupUsingGET) | **GET** /enterprise/admin/groups/{groupId} | Get a group
*.AdmingroupsApi* | [**getGroupsUsingGET1**](docs/AdmingroupsApi.md#getGroupsUsingGET1) | **GET** /enterprise/admin/groups | Query groups
*.AdmingroupsApi* | [**getRelatedGroupsUsingGET**](docs/AdmingroupsApi.md#getRelatedGroupsUsingGET) | **GET** /enterprise/admin/groups/{groupId}/related-groups | Get related groups
*.AdmingroupsApi* | [**updateGroupUsingPUT**](docs/AdmingroupsApi.md#updateGroupUsingPUT) | **PUT** /enterprise/admin/groups/{groupId} | Update a group
*.AdmintenantsApi* | [**createTenantUsingPOST**](docs/AdmintenantsApi.md#createTenantUsingPOST) | **POST** /enterprise/admin/tenants | Create a tenant
*.AdmintenantsApi* | [**deleteTenantUsingDELETE**](docs/AdmintenantsApi.md#deleteTenantUsingDELETE) | **DELETE** /enterprise/admin/tenants/{tenantId} | Delete a tenant
*.AdmintenantsApi* | [**getTenantEventsUsingGET**](docs/AdmintenantsApi.md#getTenantEventsUsingGET) | **GET** /enterprise/admin/tenants/{tenantId}/events | Get tenant events
*.AdmintenantsApi* | [**getTenantLogoUsingGET**](docs/AdmintenantsApi.md#getTenantLogoUsingGET) | **GET** /enterprise/admin/tenants/{tenantId}/logo | Get a tenant&#39;s logo
*.AdmintenantsApi* | [**getTenantUsingGET**](docs/AdmintenantsApi.md#getTenantUsingGET) | **GET** /enterprise/admin/tenants/{tenantId} | Get a tenant
*.AdmintenantsApi* | [**getTenantsUsingGET**](docs/AdmintenantsApi.md#getTenantsUsingGET) | **GET** /enterprise/admin/tenants | List tenants
*.AdmintenantsApi* | [**updateUsingPUT**](docs/AdmintenantsApi.md#updateUsingPUT) | **PUT** /enterprise/admin/tenants/{tenantId} | Update a tenant
*.AdmintenantsApi* | [**uploadTenantLogoUsingPOST**](docs/AdmintenantsApi.md#uploadTenantLogoUsingPOST) | **POST** /enterprise/admin/tenants/{tenantId}/logo | Update a tenant&#39;s logo
*.AdminusersApi* | [**bulkUpdateUsersUsingPUT**](docs/AdminusersApi.md#bulkUpdateUsersUsingPUT) | **PUT** /enterprise/admin/users | Bulk update a list of users
*.AdminusersApi* | [**createNewUserUsingPOST**](docs/AdminusersApi.md#createNewUserUsingPOST) | **POST** /enterprise/admin/users | Create a user
*.AdminusersApi* | [**getUserUsingGET**](docs/AdminusersApi.md#getUserUsingGET) | **GET** /enterprise/admin/users/{userId} | Get a user
*.AdminusersApi* | [**getUsersUsingGET**](docs/AdminusersApi.md#getUsersUsingGET) | **GET** /enterprise/admin/users | Query users
*.AdminusersApi* | [**updateUserDetailsUsingPUT**](docs/AdminusersApi.md#updateUserDetailsUsingPUT) | **PUT** /enterprise/admin/users/{userId} | Update a user
*.AppdefinitionsApi* | [**deleteAppDefinitionUsingDELETE**](docs/AppdefinitionsApi.md#deleteAppDefinitionUsingDELETE) | **DELETE** /enterprise/app-definitions/{appDefinitionId} | deleteAppDefinition
*.AppdefinitionsApi* | [**exportAppDefinitionUsingGET**](docs/AppdefinitionsApi.md#exportAppDefinitionUsingGET) | **GET** /enterprise/app-definitions/{modelId}/export | Export an app definition
*.AppdefinitionsApi* | [**getAppDefinitionUsingGET**](docs/AppdefinitionsApi.md#getAppDefinitionUsingGET) | **GET** /enterprise/app-definitions/{modelId} | Get an app definition
*.AppdefinitionsApi* | [**importAndPublishAppUsingPOST**](docs/AppdefinitionsApi.md#importAndPublishAppUsingPOST) | **POST** /enterprise/app-definitions/publish-app | importAndPublishApp
*.AppdefinitionsApi* | [**importAndPublishAppUsingPOST1**](docs/AppdefinitionsApi.md#importAndPublishAppUsingPOST1) | **POST** /enterprise/app-definitions/{modelId}/publish-app | importAndPublishApp
*.AppdefinitionsApi* | [**importAppDefinitionUsingPOST**](docs/AppdefinitionsApi.md#importAppDefinitionUsingPOST) | **POST** /enterprise/app-definitions/import | Import a new app definition
*.AppdefinitionsApi* | [**importAppDefinitionUsingPOST1**](docs/AppdefinitionsApi.md#importAppDefinitionUsingPOST1) | **POST** /enterprise/app-definitions/{modelId}/import | Update the content of an existing app
*.AppdefinitionsApi* | [**publishAppDefinitionUsingPOST**](docs/AppdefinitionsApi.md#publishAppDefinitionUsingPOST) | **POST** /enterprise/app-definitions/{modelId}/publish | Publish an app definition
*.AppdefinitionsApi* | [**updateAppDefinitionUsingPUT**](docs/AppdefinitionsApi.md#updateAppDefinitionUsingPUT) | **PUT** /enterprise/app-definitions/{modelId} | Update an app definition
*.ChecklistsApi* | [**addSubtaskUsingPOST**](docs/ChecklistsApi.md#addSubtaskUsingPOST) | **POST** /enterprise/tasks/{taskId}/checklist | Create a task checklist
*.ChecklistsApi* | [**getChecklistUsingGET**](docs/ChecklistsApi.md#getChecklistUsingGET) | **GET** /enterprise/tasks/{taskId}/checklist | Get checklist for a task
*.ChecklistsApi* | [**orderChecklistUsingPUT**](docs/ChecklistsApi.md#orderChecklistUsingPUT) | **PUT** /enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
*.CommentsApi* | [**addProcessInstanceCommentUsingPOST**](docs/CommentsApi.md#addProcessInstanceCommentUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/comments | Add a comment to a process instance
*.CommentsApi* | [**addTaskCommentUsingPOST**](docs/CommentsApi.md#addTaskCommentUsingPOST) | **POST** /enterprise/tasks/{taskId}/comments | Add a comment to a task
*.CommentsApi* | [**getProcessInstanceCommentsUsingGET**](docs/CommentsApi.md#getProcessInstanceCommentsUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/comments | Get comments for a process
*.CommentsApi* | [**getTaskCommentsUsingGET**](docs/CommentsApi.md#getTaskCommentsUsingGET) | **GET** /enterprise/tasks/{taskId}/comments | Get comments for a task
*.ContentApi* | [**createRelatedContentOnProcessInstanceUsingPOST**](docs/ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/content | Attach existing content to a process instance
*.ContentApi* | [**createRelatedContentOnProcessInstanceUsingPOST1**](docs/ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST1) | **POST** /enterprise/process-instances/{processInstanceId}/raw-content | Upload content and attach to a process instance
*.ContentApi* | [**createRelatedContentOnTaskUsingPOST**](docs/ContentApi.md#createRelatedContentOnTaskUsingPOST) | **POST** /enterprise/tasks/{taskId}/content | Attach existing content to a task
*.ContentApi* | [**createRelatedContentOnTaskUsingPOST1**](docs/ContentApi.md#createRelatedContentOnTaskUsingPOST1) | **POST** /enterprise/tasks/{taskId}/raw-content | Upload content and attach to a task
*.ContentApi* | [**createTemporaryRawRelatedContentUsingPOST**](docs/ContentApi.md#createTemporaryRawRelatedContentUsingPOST) | **POST** /enterprise/content/raw | Upload content and create a local representation
*.ContentApi* | [**createTemporaryRelatedContentUsingPOST**](docs/ContentApi.md#createTemporaryRelatedContentUsingPOST) | **POST** /enterprise/content | Create a local representation of content from a remote repository
*.ContentApi* | [**deleteContentUsingDELETE**](docs/ContentApi.md#deleteContentUsingDELETE) | **DELETE** /enterprise/content/{contentId} | Remove a local content representation
*.ContentApi* | [**getContentUsingGET**](docs/ContentApi.md#getContentUsingGET) | **GET** /enterprise/content/{contentId} | Get a local content representation
*.ContentApi* | [**getRawContentUsingGET**](docs/ContentApi.md#getRawContentUsingGET) | **GET** /enterprise/content/{contentId}/rendition/{renditionType} | Stream content rendition
*.ContentApi* | [**getRawContentUsingGET1**](docs/ContentApi.md#getRawContentUsingGET1) | **GET** /enterprise/content/{contentId}/raw | Stream content from a local content representation
*.ContentApi* | [**getRelatedContentForProcessInstanceUsingGET**](docs/ContentApi.md#getRelatedContentForProcessInstanceUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/content | List content attached to a process instance
*.ContentApi* | [**getRelatedContentForTaskUsingGET**](docs/ContentApi.md#getRelatedContentForTaskUsingGET) | **GET** /enterprise/tasks/{taskId}/content | List content attached to a task
*.DatasourcesApi* | [**getDataSourcesUsingGET**](docs/DatasourcesApi.md#getDataSourcesUsingGET) | **GET** /enterprise/editor/data-sources | Get data sources
*.DecisionauditsApi* | [**getAuditTrailUsingGET**](docs/DecisionauditsApi.md#getAuditTrailUsingGET) | **GET** /enterprise/decisions/audits/{auditTrailId} | Get an audit trail
*.DecisionauditsApi* | [**getAuditTrailsUsingGET**](docs/DecisionauditsApi.md#getAuditTrailsUsingGET) | **GET** /enterprise/decisions/audits | Query decision table audit trails
*.DecisiontablesApi* | [**getDecisionTableEditorJsonUsingGET**](docs/DecisiontablesApi.md#getDecisionTableEditorJsonUsingGET) | **GET** /enterprise/decisions/decision-tables/{decisionTableId}/editorJson | Get definition for a decision table
*.DecisiontablesApi* | [**getDecisionTableUsingGET**](docs/DecisiontablesApi.md#getDecisionTableUsingGET) | **GET** /enterprise/decisions/decision-tables/{decisionTableId} | Get a decision table
*.DecisiontablesApi* | [**getDecisionTablesUsingGET**](docs/DecisiontablesApi.md#getDecisionTablesUsingGET) | **GET** /enterprise/decisions/decision-tables | Query decision tables
*.EndpointsApi* | [**getEndpointConfigurationUsingGET**](docs/EndpointsApi.md#getEndpointConfigurationUsingGET) | **GET** /enterprise/editor/endpoints/{endpointConfigurationId} | Get an endpoint configuration
*.EndpointsApi* | [**getEndpointConfigurationsUsingGET**](docs/EndpointsApi.md#getEndpointConfigurationsUsingGET) | **GET** /enterprise/editor/endpoints | List endpoint configurations
*.FormmodelsApi* | [**getFormEditorJsonUsingGET**](docs/FormmodelsApi.md#getFormEditorJsonUsingGET) | **GET** /enterprise/forms/{formId}/editorJson | Get form content
*.FormmodelsApi* | [**getFormHistoryUsingGET**](docs/FormmodelsApi.md#getFormHistoryUsingGET) | **GET** /enterprise/editor/form-models/{formId}/history/{formHistoryId} | Get form history
*.FormmodelsApi* | [**getFormUsingGET**](docs/FormmodelsApi.md#getFormUsingGET) | **GET** /enterprise/editor/form-models/{formId} | Get a form model
*.FormmodelsApi* | [**getFormUsingGET1**](docs/FormmodelsApi.md#getFormUsingGET1) | **GET** /enterprise/forms/{formId} | Get a form
*.FormmodelsApi* | [**getFormsUsingGET**](docs/FormmodelsApi.md#getFormsUsingGET) | **GET** /enterprise/editor/form-models/values | Get forms
*.FormmodelsApi* | [**getFormsUsingGET1**](docs/FormmodelsApi.md#getFormsUsingGET1) | **GET** /enterprise/editor/form-models | List form models
*.FormmodelsApi* | [**getFormsUsingGET2**](docs/FormmodelsApi.md#getFormsUsingGET2) | **GET** /enterprise/forms | Query forms
*.FormmodelsApi* | [**saveFormUsingPUT**](docs/FormmodelsApi.md#saveFormUsingPUT) | **PUT** /enterprise/editor/form-models/{formId} | Update form model content
*.FormmodelsApi* | [**validateModelUsingPUT**](docs/FormmodelsApi.md#validateModelUsingPUT) | **PUT** /enterprise/editor/form-models/{formId}/validate | Validate form model content
*.GroupsApi* | [**getGroupsUsingGET**](docs/GroupsApi.md#getGroupsUsingGET) | **GET** /enterprise/groups | Query groups
*.GroupsApi* | [**getUsersForGroupUsingGET**](docs/GroupsApi.md#getUsersForGroupUsingGET) | **GET** /enterprise/groups/{groupId}/users | List members of a group
*.IdmsyncApi* | [**getLogFileUsingGET**](docs/IdmsyncApi.md#getLogFileUsingGET) | **GET** /enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | Get log file for a sync log entry
*.IdmsyncApi* | [**getSyncLogEntriesUsingGET**](docs/IdmsyncApi.md#getSyncLogEntriesUsingGET) | **GET** /enterprise/idm-sync-log-entries | List sync log entries
*.IntegrationalfrescocloudApi* | [**confirmAuthorisationUsingGET**](docs/IntegrationalfrescocloudApi.md#confirmAuthorisationUsingGET) | **GET** /enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*.IntegrationalfrescocloudApi* | [**getAllNetworksUsingGET**](docs/IntegrationalfrescocloudApi.md#getAllNetworksUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*.IntegrationalfrescocloudApi* | [**getAllSitesUsingGET**](docs/IntegrationalfrescocloudApi.md#getAllSitesUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*.IntegrationalfrescocloudApi* | [**getContentInFolderPathUsingGET**](docs/IntegrationalfrescocloudApi.md#getContentInFolderPathUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by path
*.IntegrationalfrescocloudApi* | [**getContentInFolderUsingGET**](docs/IntegrationalfrescocloudApi.md#getContentInFolderUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List files and folders inside a specific folder
*.IntegrationalfrescocloudApi* | [**getContentInSiteUsingGET**](docs/IntegrationalfrescocloudApi.md#getContentInSiteUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List files and folders inside a specific site
*.IntegrationalfrescoonpremiseApi* | [**getAllSitesUsingGET1**](docs/IntegrationalfrescoonpremiseApi.md#getAllSitesUsingGET1) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*.IntegrationalfrescoonpremiseApi* | [**getContentInFolderPathUsingGET1**](docs/IntegrationalfrescoonpremiseApi.md#getContentInFolderPathUsingGET1) | **GET** /enterprise/rest/integration/alfresco/{repositoryId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by folder path
*.IntegrationalfrescoonpremiseApi* | [**getContentInFolderUsingGET1**](docs/IntegrationalfrescoonpremiseApi.md#getContentInFolderUsingGET1) | **GET** /enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List files and folders inside a specific folder
*.IntegrationalfrescoonpremiseApi* | [**getContentInSiteUsingGET1**](docs/IntegrationalfrescoonpremiseApi.md#getContentInSiteUsingGET1) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List files and folders inside a specific site
*.IntegrationalfrescoonpremiseApi* | [**getRepositoriesUsingGET**](docs/IntegrationalfrescoonpremiseApi.md#getRepositoriesUsingGET) | **GET** /enterprise/profile/accounts/alfresco | List Alfresco repositories
*.IntegrationboxApi* | [**confirmAuthorisationUsingGET1**](docs/IntegrationboxApi.md#confirmAuthorisationUsingGET1) | **GET** /enterprise/integration/box/confirm-auth-request | Box Authorization
*.IntegrationboxApi* | [**createRepositoryAccountUsingPOST**](docs/IntegrationboxApi.md#createRepositoryAccountUsingPOST) | **POST** /enterprise/integration/box/{userId}/account | Add Box account
*.IntegrationboxApi* | [**deleteRepositoryAccountUsingDELETE**](docs/IntegrationboxApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /enterprise/integration/box/{userId}/account | Delete account information
*.IntegrationboxApi* | [**getBoxPluginStatusUsingGET**](docs/IntegrationboxApi.md#getBoxPluginStatusUsingGET) | **GET** /enterprise/integration/box/status | Get status information
*.IntegrationboxApi* | [**getFilesUsingGET**](docs/IntegrationboxApi.md#getFilesUsingGET) | **GET** /enterprise/integration/box/files | List file and folders
*.IntegrationboxApi* | [**getRepositoryAccountUsingGET**](docs/IntegrationboxApi.md#getRepositoryAccountUsingGET) | **GET** /enterprise/integration/box/{userId}/account | Get account information
*.IntegrationboxApi* | [**updateRepositoryAccountUsingPUT**](docs/IntegrationboxApi.md#updateRepositoryAccountUsingPUT) | **PUT** /enterprise/integration/box/{userId}/account | Update account information
*.IntegrationdriveApi* | [**confirmAuthorisationUsingGET2**](docs/IntegrationdriveApi.md#confirmAuthorisationUsingGET2) | **GET** /enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
*.IntegrationdriveApi* | [**getFilesUsingGET1**](docs/IntegrationdriveApi.md#getFilesUsingGET1) | **GET** /enterprise/integration/google-drive/files | List files and folders
*.ModelsApi* | [**createModelUsingPOST**](docs/ModelsApi.md#createModelUsingPOST) | **POST** /enterprise/models | Create a new model
*.ModelsApi* | [**deleteModelUsingDELETE**](docs/ModelsApi.md#deleteModelUsingDELETE) | **DELETE** /enterprise/models/{modelId} | Delete a model
*.ModelsApi* | [**duplicateModelUsingPOST**](docs/ModelsApi.md#duplicateModelUsingPOST) | **POST** /enterprise/models/{modelId}/clone | Duplicate an existing model
*.ModelsApi* | [**getModelJSONUsingGET**](docs/ModelsApi.md#getModelJSONUsingGET) | **GET** /enterprise/models/{modelId}/editor/json | Get model content
*.ModelsApi* | [**getModelThumbnailUsingGET**](docs/ModelsApi.md#getModelThumbnailUsingGET) | **GET** /enterprise/models/{modelId}/thumbnail | Get a model&#39;s thumbnail image
*.ModelsApi* | [**getModelUsingGET**](docs/ModelsApi.md#getModelUsingGET) | **GET** /enterprise/models/{modelId} | Get a model
*.ModelsApi* | [**getModelsToIncludeInAppDefinitionUsingGET**](docs/ModelsApi.md#getModelsToIncludeInAppDefinitionUsingGET) | **GET** /enterprise/models-for-app-definition | List process definition models shared with the current user
*.ModelsApi* | [**getModelsUsingGET**](docs/ModelsApi.md#getModelsUsingGET) | **GET** /enterprise/models | List models (process, form, decision rule or app)
*.ModelsApi* | [**importNewVersionUsingPOST**](docs/ModelsApi.md#importNewVersionUsingPOST) | **POST** /enterprise/models/{modelId}/newversion | Create a new version of a model
*.ModelsApi* | [**importProcessModelUsingPOST**](docs/ModelsApi.md#importProcessModelUsingPOST) | **POST** /enterprise/process-models/import | Import a BPMN 2.0 XML file
*.ModelsApi* | [**saveModelUsingPOST**](docs/ModelsApi.md#saveModelUsingPOST) | **POST** /enterprise/models/{modelId}/editor/json | Update model content
*.ModelsApi* | [**updateModelUsingPUT**](docs/ModelsApi.md#updateModelUsingPUT) | **PUT** /enterprise/models/{modelId} | Update a model
*.ModelsApi* | [**validateModelUsingPOST**](docs/ModelsApi.md#validateModelUsingPOST) | **POST** /enterprise/models/{modelId}/editor/validate | Validate model content
*.ModelsbpmnApi* | [**getHistoricProcessModelBpmn20XmlUsingGET**](docs/ModelsbpmnApi.md#getHistoricProcessModelBpmn20XmlUsingGET) | **GET** /enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a historic version of a process definition as BPMN 2.0 XML
*.ModelsbpmnApi* | [**getProcessModelBpmn20XmlUsingGET**](docs/ModelsbpmnApi.md#getProcessModelBpmn20XmlUsingGET) | **GET** /enterprise/models/{processModelId}/bpmn20 | Export a process definition as BPMN 2.0 XML
*.ModelshistoryApi* | [**getModelHistoryCollectionUsingGET**](docs/ModelshistoryApi.md#getModelHistoryCollectionUsingGET) | **GET** /enterprise/models/{modelId}/history | List a model&#39;s historic versions
*.ModelshistoryApi* | [**getProcessModelHistoryUsingGET**](docs/ModelshistoryApi.md#getProcessModelHistoryUsingGET) | **GET** /enterprise/models/{modelId}/history/{modelHistoryId} | Get a historic version of a model
*.ProcessdefinitionsApi* | [**createIdentityLinkUsingPOST**](docs/ProcessdefinitionsApi.md#createIdentityLinkUsingPOST) | **POST** /enterprise/process-definitions/{processDefinitionId}/identitylinks | Add a user or group involvement to a process definition
*.ProcessdefinitionsApi* | [**deleteIdentityLinkUsingDELETE**](docs/ProcessdefinitionsApi.md#deleteIdentityLinkUsingDELETE) | **DELETE** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Remove a user or group involvement from a process definition
*.ProcessdefinitionsApi* | [**getIdentityLinkTypeUsingGET**](docs/ProcessdefinitionsApi.md#getIdentityLinkTypeUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Get a user or group involvement with a process definition
*.ProcessdefinitionsApi* | [**getIdentityLinksForFamilyUsingGET**](docs/ProcessdefinitionsApi.md#getIdentityLinksForFamilyUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family} | List either the users or groups involved with a process definition
*.ProcessdefinitionsApi* | [**getIdentityLinksUsingGET**](docs/ProcessdefinitionsApi.md#getIdentityLinksUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks | List the users and groups involved with a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionDecisionTablesUsingGET**](docs/ProcessdefinitionsApi.md#getProcessDefinitionDecisionTablesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/decision-tables | List the decision tables associated with a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionFormsUsingGET**](docs/ProcessdefinitionsApi.md#getProcessDefinitionFormsUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/forms | List the forms associated with a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionStartFormUsingGET**](docs/ProcessdefinitionsApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionsUsingGET**](docs/ProcessdefinitionsApi.md#getProcessDefinitionsUsingGET) | **GET** /enterprise/process-definitions | Retrieve a list of process definitions
*.ProcessdefinitionsApi* | [**getRestFieldValuesUsingGET**](docs/ProcessdefinitionsApi.md#getRestFieldValuesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
*.ProcessdefinitionsApi* | [**getRestTableFieldValuesUsingGET**](docs/ProcessdefinitionsApi.md#getRestTableFieldValuesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
*.ProcessinstancesApi* | [**activateProcessInstanceUsingPUT**](docs/ProcessinstancesApi.md#activateProcessInstanceUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/activate | Activate a process instance
*.ProcessinstancesApi* | [**createIdentityLinkUsingPOST1**](docs/ProcessinstancesApi.md#createIdentityLinkUsingPOST1) | **POST** /enterprise/process-instances/{processInstanceId}/identitylinks | Add a user or group involvement to a process instance
*.ProcessinstancesApi* | [**deleteIdentityLinkUsingDELETE1**](docs/ProcessinstancesApi.md#deleteIdentityLinkUsingDELETE1) | **DELETE** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a process instance
*.ProcessinstancesApi* | [**deleteProcessInstanceUsingDELETE**](docs/ProcessinstancesApi.md#deleteProcessInstanceUsingDELETE) | **DELETE** /enterprise/process-instances/{processInstanceId} | Cancel or remove a process instance
*.ProcessinstancesApi* | [**filterProcessInstancesUsingPOST**](docs/ProcessinstancesApi.md#filterProcessInstancesUsingPOST) | **POST** /enterprise/process-instances/filter | List process instances using a filter
*.ProcessinstancesApi* | [**getHistoricProcessInstanceDecisionTasksUsingGET**](docs/ProcessinstancesApi.md#getHistoricProcessInstanceDecisionTasksUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/decision-tasks | Get decision tasks in a process instance
*.ProcessinstancesApi* | [**getHistoricProcessInstanceVariablesUsingGET**](docs/ProcessinstancesApi.md#getHistoricProcessInstanceVariablesUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/historic-variables | Get historic variables for a process instance
*.ProcessinstancesApi* | [**getHistoricProcessInstancesUsingPOST**](docs/ProcessinstancesApi.md#getHistoricProcessInstancesUsingPOST) | **POST** /enterprise/historic-process-instances/query | Query historic process instances
*.ProcessinstancesApi* | [**getIdentityLinkTypeUsingGET1**](docs/ProcessinstancesApi.md#getIdentityLinkTypeUsingGET1) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a process instance
*.ProcessinstancesApi* | [**getIdentityLinksForFamilyUsingGET1**](docs/ProcessinstancesApi.md#getIdentityLinksForFamilyUsingGET1) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family} | List either the users or groups involved with a process instance
*.ProcessinstancesApi* | [**getIdentityLinksUsingGET1**](docs/ProcessinstancesApi.md#getIdentityLinksUsingGET1) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks | List the users and groups involved with a process instance
*.ProcessinstancesApi* | [**getProcessInstanceContentUsingGET**](docs/ProcessinstancesApi.md#getProcessInstanceContentUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/field-content | List content attached to process instance fields
*.ProcessinstancesApi* | [**getProcessInstanceDiagramUsingGET**](docs/ProcessinstancesApi.md#getProcessInstanceDiagramUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/diagram | Get the process diagram for the process instance
*.ProcessinstancesApi* | [**getProcessInstanceStartFormUsingGET**](docs/ProcessinstancesApi.md#getProcessInstanceStartFormUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/start-form | Get a process instance start form
*.ProcessinstancesApi* | [**getProcessInstanceUsingGET**](docs/ProcessinstancesApi.md#getProcessInstanceUsingGET) | **GET** /enterprise/process-instances/{processInstanceId} | Get a process instance
*.ProcessinstancesApi* | [**getProcessInstancesUsingPOST**](docs/ProcessinstancesApi.md#getProcessInstancesUsingPOST) | **POST** /enterprise/process-instances/query | Query process instances
*.ProcessinstancesApi* | [**getTaskAuditLogUsingGET**](docs/ProcessinstancesApi.md#getTaskAuditLogUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/audit-log | Get the audit log for a process instance
*.ProcessinstancesApi* | [**startNewProcessInstanceUsingPOST**](docs/ProcessinstancesApi.md#startNewProcessInstanceUsingPOST) | **POST** /enterprise/process-instances | Start a process instance
*.ProcessinstancesApi* | [**suspendProcessInstanceUsingPUT**](docs/ProcessinstancesApi.md#suspendProcessInstanceUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/suspend | Suspend a process instance
*.ProcessinstancevariablesApi* | [**createOrUpdateProcessInstanceVariablesUsingPUT**](docs/ProcessinstancevariablesApi.md#createOrUpdateProcessInstanceVariablesUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/variables | Create or update variables
*.ProcessinstancevariablesApi* | [**createProcessInstanceVariablesUsingPOST**](docs/ProcessinstancevariablesApi.md#createProcessInstanceVariablesUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/variables | Create variables
*.ProcessinstancevariablesApi* | [**deleteProcessInstanceVariableUsingDELETE**](docs/ProcessinstancevariablesApi.md#deleteProcessInstanceVariableUsingDELETE) | **DELETE** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Delete a variable
*.ProcessinstancevariablesApi* | [**getProcessInstanceVariableUsingGET**](docs/ProcessinstancevariablesApi.md#getProcessInstanceVariableUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Get a variable
*.ProcessinstancevariablesApi* | [**getProcessInstanceVariablesUsingGET**](docs/ProcessinstancevariablesApi.md#getProcessInstanceVariablesUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/variables | List variables
*.ProcessinstancevariablesApi* | [**updateProcessInstanceVariableUsingPUT**](docs/ProcessinstancevariablesApi.md#updateProcessInstanceVariableUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Update a variable
*.ProcessscopesApi* | [**getRuntimeProcessScopesUsingPOST**](docs/ProcessscopesApi.md#getRuntimeProcessScopesUsingPOST) | **POST** /enterprise/process-scopes | List runtime process scopes
*.RuntimeappdefinitionsApi* | [**deployAppDefinitionsUsingPOST**](docs/RuntimeappdefinitionsApi.md#deployAppDefinitionsUsingPOST) | **POST** /enterprise/runtime-app-definitions | Deploy a published app
*.RuntimeappdefinitionsApi* | [**getAppDefinitionUsingGET1**](docs/RuntimeappdefinitionsApi.md#getAppDefinitionUsingGET1) | **GET** /enterprise/runtime-app-definitions/{appDefinitionId} | Get a runtime app
*.RuntimeappdefinitionsApi* | [**getAppDefinitionsUsingGET**](docs/RuntimeappdefinitionsApi.md#getAppDefinitionsUsingGET) | **GET** /enterprise/runtime-app-definitions | List runtime apps
*.RuntimeappdeploymentsApi* | [**deleteAppDeploymentUsingDELETE**](docs/RuntimeappdeploymentsApi.md#deleteAppDeploymentUsingDELETE) | **DELETE** /enterprise/runtime-app-deployments/{appDeploymentId} | Remove an app deployment
*.RuntimeappdeploymentsApi* | [**exportAppDefinitionUsingGET1**](docs/RuntimeappdeploymentsApi.md#exportAppDefinitionUsingGET1) | **GET** /enterprise/export-app-deployment/{deploymentId} | Export the app archive for a deployment
*.RuntimeappdeploymentsApi* | [**getAppDefinitionsUsingGET1**](docs/RuntimeappdeploymentsApi.md#getAppDefinitionsUsingGET1) | **GET** /enterprise/runtime-app-deployments | Query app deployments
*.RuntimeappdeploymentsApi* | [**getAppDeploymentUsingGET**](docs/RuntimeappdeploymentsApi.md#getAppDeploymentUsingGET) | **GET** /enterprise/runtime-app-deployments/{appDeploymentId} | Get an app deployment
*.RuntimeappdeploymentsApi* | [**getRuntimeAppDeploymentByDeploymentUsingGET**](docs/RuntimeappdeploymentsApi.md#getRuntimeAppDeploymentByDeploymentUsingGET) | **GET** /enterprise/runtime-app-deployment | Get an app by deployment ID or DMN deployment ID
*.ScriptfilesApi* | [**getControllersUsingGET**](docs/ScriptfilesApi.md#getControllersUsingGET) | **GET** /enterprise/script-files/controllers | getControllers
*.ScriptfilesApi* | [**getLibrariesUsingGET**](docs/ScriptfilesApi.md#getLibrariesUsingGET) | **GET** /enterprise/script-files/libraries | getLibraries
*.SubmittedformsApi* | [**getFormSubmittedFromsUsingGET**](docs/SubmittedformsApi.md#getFormSubmittedFromsUsingGET) | **GET** /enterprise/form-submitted-forms/{formId} | List submissions for a form
*.SubmittedformsApi* | [**getProcessSubmittedFromsUsingGET**](docs/SubmittedformsApi.md#getProcessSubmittedFromsUsingGET) | **GET** /enterprise/process-submitted-forms/{processId} | List submissions for a process instance
*.SubmittedformsApi* | [**getSubmittedFromUsingGET**](docs/SubmittedformsApi.md#getSubmittedFromUsingGET) | **GET** /enterprise/submitted-forms/{submittedFormId} | Get a form submission
*.SubmittedformsApi* | [**getTaskSubmittedFromsUsingGET**](docs/SubmittedformsApi.md#getTaskSubmittedFromsUsingGET) | **GET** /enterprise/task-submitted-form/{taskId} | Get the submitted form for a task
*.SystempropertiesApi* | [**getGlobalDateFormatUsingGET**](docs/SystempropertiesApi.md#getGlobalDateFormatUsingGET) | **GET** /enterprise/system/properties/global-date-format/{tenantId} | Get global date format
*.SystempropertiesApi* | [**getPasswordValidationConstraintsUsingGET**](docs/SystempropertiesApi.md#getPasswordValidationConstraintsUsingGET) | **GET** /enterprise/system/properties/password-validation-constraints/{tenantId} | Get password validation constraints
*.SystempropertiesApi* | [**getPropertiesUsingGET**](docs/SystempropertiesApi.md#getPropertiesUsingGET) | **GET** /enterprise/system/properties | Retrieve system properties
*.SystempropertiesApi* | [**involvedUsersCanEditFormsUsingGET**](docs/SystempropertiesApi.md#involvedUsersCanEditFormsUsingGET) | **GET** /enterprise/system/properties/involved-users-can-edit-forms/{tenantId} | Get involved users who can edit forms
*.TaskactionsApi* | [**assignTaskUsingPUT**](docs/TaskactionsApi.md#assignTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/assign | Assign a task to a user
*.TaskactionsApi* | [**attachFormUsingPUT**](docs/TaskactionsApi.md#attachFormUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
*.TaskactionsApi* | [**claimTaskUsingPUT**](docs/TaskactionsApi.md#claimTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/claim | Claim a task
*.TaskactionsApi* | [**completeTaskUsingPUT**](docs/TaskactionsApi.md#completeTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/complete | Complete a task
*.TaskactionsApi* | [**delegateTaskUsingPUT**](docs/TaskactionsApi.md#delegateTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/delegate | Delegate a task
*.TaskactionsApi* | [**involveGroupUsingPOST**](docs/TaskactionsApi.md#involveGroupUsingPOST) | **POST** /enterprise/tasks/{taskId}/groups/{groupId} | Involve a group with a task
*.TaskactionsApi* | [**involveUserUsingPUT**](docs/TaskactionsApi.md#involveUserUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/involve | Involve a user with a task
*.TaskactionsApi* | [**removeFormUsingDELETE**](docs/TaskactionsApi.md#removeFormUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/action/remove-form | Remove a form from a task
*.TaskactionsApi* | [**removeInvolvedUserUsingDELETE**](docs/TaskactionsApi.md#removeInvolvedUserUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/groups/{groupId} | Remove an involved group from a task
*.TaskactionsApi* | [**removeInvolvedUserUsingPUT**](docs/TaskactionsApi.md#removeInvolvedUserUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
*.TaskactionsApi* | [**resolveTaskUsingPUT**](docs/TaskactionsApi.md#resolveTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/resolve | Resolve a task
*.TaskactionsApi* | [**unclaimTaskUsingPUT**](docs/TaskactionsApi.md#unclaimTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
*.TaskformsApi* | [**completeTaskFormUsingPOST**](docs/TaskformsApi.md#completeTaskFormUsingPOST) | **POST** /enterprise/task-forms/{taskId} | Complete a task form
*.TaskformsApi* | [**getProcessInstanceVariablesUsingGET1**](docs/TaskformsApi.md#getProcessInstanceVariablesUsingGET1) | **GET** /enterprise/task-forms/{taskId}/variables | Get task variables
*.TaskformsApi* | [**getRestFieldValuesUsingGET1**](docs/TaskformsApi.md#getRestFieldValuesUsingGET1) | **GET** /enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve column field values
*.TaskformsApi* | [**getRestFieldValuesUsingGET2**](docs/TaskformsApi.md#getRestFieldValuesUsingGET2) | **GET** /enterprise/task-forms/{taskId}/form-values/{field} | Retrieve populated field values
*.TaskformsApi* | [**getTaskFormUsingGET**](docs/TaskformsApi.md#getTaskFormUsingGET) | **GET** /enterprise/task-forms/{taskId} | Get a task form
*.TaskformsApi* | [**saveTaskFormUsingPOST**](docs/TaskformsApi.md#saveTaskFormUsingPOST) | **POST** /enterprise/task-forms/{taskId}/save-form | Save a task form
*.TasksApi* | [**createIdentityLinkUsingPOST2**](docs/TasksApi.md#createIdentityLinkUsingPOST2) | **POST** /enterprise/tasks/{taskId}/identitylinks | List the users and groups involved with a task
*.TasksApi* | [**createNewTaskUsingPOST**](docs/TasksApi.md#createNewTaskUsingPOST) | **POST** /enterprise/tasks | Create a standalone task
*.TasksApi* | [**deleteIdentityLinkUsingDELETE2**](docs/TasksApi.md#deleteIdentityLinkUsingDELETE2) | **DELETE** /enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a task
*.TasksApi* | [**deleteTaskUsingDELETE**](docs/TasksApi.md#deleteTaskUsingDELETE) | **DELETE** /enterprise/tasks/{taskId} | Delete a task
*.TasksApi* | [**filterTasksUsingPOST**](docs/TasksApi.md#filterTasksUsingPOST) | **POST** /enterprise/tasks/filter | Filter a list of tasks
*.TasksApi* | [**getIdentityLinkTypeUsingGET2**](docs/TasksApi.md#getIdentityLinkTypeUsingGET2) | **GET** /enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a task
*.TasksApi* | [**getIdentityLinksForFamilyUsingGET2**](docs/TasksApi.md#getIdentityLinksForFamilyUsingGET2) | **GET** /enterprise/tasks/{taskId}/identitylinks/{family} | List either the users or groups involved with a process instance
*.TasksApi* | [**getIdentityLinksUsingGET2**](docs/TasksApi.md#getIdentityLinksUsingGET2) | **GET** /enterprise/tasks/{taskId}/identitylinks | getIdentityLinks
*.TasksApi* | [**getTaskAuditLogUsingGET1**](docs/TasksApi.md#getTaskAuditLogUsingGET1) | **GET** /enterprise/tasks/{taskId}/audit | Get the audit log for a task
*.TasksApi* | [**getTaskUsingGET**](docs/TasksApi.md#getTaskUsingGET) | **GET** /enterprise/tasks/{taskId} | Get a task
*.TasksApi* | [**listHistoricTasksUsingPOST**](docs/TasksApi.md#listHistoricTasksUsingPOST) | **POST** /enterprise/historic-tasks/query | Query historic tasks
*.TasksApi* | [**listTasksUsingPOST**](docs/TasksApi.md#listTasksUsingPOST) | **POST** /enterprise/tasks/query | List tasks
*.TasksApi* | [**updateTaskUsingPUT**](docs/TasksApi.md#updateTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId} | Update a task
*.TaskvariablesApi* | [**createTaskVariableUsingPOST**](docs/TaskvariablesApi.md#createTaskVariableUsingPOST) | **POST** /enterprise/tasks/{taskId}/variables | Create variables
*.TaskvariablesApi* | [**deleteAllLocalTaskVariablesUsingDELETE**](docs/TaskvariablesApi.md#deleteAllLocalTaskVariablesUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/variables | Create or update variables
*.TaskvariablesApi* | [**deleteVariableUsingDELETE**](docs/TaskvariablesApi.md#deleteVariableUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/variables/{variableName} | Delete a variable
*.TaskvariablesApi* | [**getVariableUsingGET**](docs/TaskvariablesApi.md#getVariableUsingGET) | **GET** /enterprise/tasks/{taskId}/variables/{variableName} | Get a variable
*.TaskvariablesApi* | [**getVariablesUsingGET**](docs/TaskvariablesApi.md#getVariablesUsingGET) | **GET** /enterprise/tasks/{taskId}/variables | List variables
*.TaskvariablesApi* | [**updateVariableUsingPUT**](docs/TaskvariablesApi.md#updateVariableUsingPUT) | **PUT** /enterprise/tasks/{taskId}/variables/{variableName} | Update a variable
*.UserfiltersApi* | [**createUserProcessInstanceFilterUsingPOST**](docs/UserfiltersApi.md#createUserProcessInstanceFilterUsingPOST) | **POST** /enterprise/filters/processes | Create a process instance filter
*.UserfiltersApi* | [**createUserTaskFilterUsingPOST**](docs/UserfiltersApi.md#createUserTaskFilterUsingPOST) | **POST** /enterprise/filters/tasks | Create a task filter
*.UserfiltersApi* | [**deleteUserProcessInstanceFilterUsingDELETE**](docs/UserfiltersApi.md#deleteUserProcessInstanceFilterUsingDELETE) | **DELETE** /enterprise/filters/processes/{userFilterId} | Delete a process instance filter
*.UserfiltersApi* | [**deleteUserTaskFilterUsingDELETE**](docs/UserfiltersApi.md#deleteUserTaskFilterUsingDELETE) | **DELETE** /enterprise/filters/tasks/{userFilterId} | Delete a task filter
*.UserfiltersApi* | [**getUserProcessInstanceFilterUsingGET**](docs/UserfiltersApi.md#getUserProcessInstanceFilterUsingGET) | **GET** /enterprise/filters/processes/{userFilterId} | Get a process instance filter
*.UserfiltersApi* | [**getUserProcessInstanceFiltersUsingGET**](docs/UserfiltersApi.md#getUserProcessInstanceFiltersUsingGET) | **GET** /enterprise/filters/processes | List process instance filters
*.UserfiltersApi* | [**getUserTaskFilterUsingGET**](docs/UserfiltersApi.md#getUserTaskFilterUsingGET) | **GET** /enterprise/filters/tasks/{userFilterId} | Get a task filter
*.UserfiltersApi* | [**getUserTaskFiltersUsingGET**](docs/UserfiltersApi.md#getUserTaskFiltersUsingGET) | **GET** /enterprise/filters/tasks | List task filters
*.UserfiltersApi* | [**orderUserProcessInstanceFiltersUsingPUT**](docs/UserfiltersApi.md#orderUserProcessInstanceFiltersUsingPUT) | **PUT** /enterprise/filters/processes | Re-order the list of user process instance filters
*.UserfiltersApi* | [**orderUserTaskFiltersUsingPUT**](docs/UserfiltersApi.md#orderUserTaskFiltersUsingPUT) | **PUT** /enterprise/filters/tasks | Re-order the list of user task filters
*.UserfiltersApi* | [**updateUserProcessInstanceFilterUsingPUT**](docs/UserfiltersApi.md#updateUserProcessInstanceFilterUsingPUT) | **PUT** /enterprise/filters/processes/{userFilterId} | Update a process instance filter
*.UserfiltersApi* | [**updateUserTaskFilterUsingPUT**](docs/UserfiltersApi.md#updateUserTaskFilterUsingPUT) | **PUT** /enterprise/filters/tasks/{userFilterId} | Update a task filter
*.UserprofileApi* | [**changePasswordUsingPOST**](docs/UserprofileApi.md#changePasswordUsingPOST) | **POST** /enterprise/profile-password | Change user password
*.UserprofileApi* | [**getProfilePictureUsingGET**](docs/UserprofileApi.md#getProfilePictureUsingGET) | **GET** /enterprise/profile-picture | Retrieve user profile picture
*.UserprofileApi* | [**getProfileUsingGET**](docs/UserprofileApi.md#getProfileUsingGET) | **GET** /enterprise/profile | Get user profile
*.UserprofileApi* | [**updateProfile**](docs/UserprofileApi.md#updateProfile) | **POST** /enterprise/profile | Update user profile
*.UserprofileApi* | [**uploadProfilePictureUsingPOST**](docs/UserprofileApi.md#uploadProfilePictureUsingPOST) | **POST** /enterprise/profile-picture | Change user profile picture
*.UsersApi* | [**executeActionUsingPOST**](docs/UsersApi.md#executeActionUsingPOST) | **POST** /enterprise/users/{userId} | Execute an action for a specific user
*.UsersApi* | [**getProfilePictureUsingGET1**](docs/UsersApi.md#getProfilePictureUsingGET1) | **GET** /enterprise/users/{userId}/picture | Stream user profile picture
*.UsersApi* | [**getUserUsingGET1**](docs/UsersApi.md#getUserUsingGET1) | **GET** /enterprise/users/{userId} | Get a user
*.UsersApi* | [**getUsersUsingGET1**](docs/UsersApi.md#getUsersUsingGET1) | **GET** /enterprise/users | Query users
*.UsersApi* | [**requestPasswordResetUsingPOST**](docs/UsersApi.md#requestPasswordResetUsingPOST) | **POST** /enterprise/idm/passwords | Request a password reset
*.UsersApi* | [**updateUserUsingPUT**](docs/UsersApi.md#updateUserUsingPUT) | **PUT** /enterprise/users/{userId} | Update a user


## Documentation for Models

 - [.AbstractGroupRepresentation](docs/AbstractGroupRepresentation.md)
 - [.AbstractUserRepresentation](docs/AbstractUserRepresentation.md)
 - [.AccountRepresentation](docs/AccountRepresentation.md)
 - [.AddGroupCapabilitiesRepresentation](docs/AddGroupCapabilitiesRepresentation.md)
 - [.AlfrescoContentRepresentation](docs/AlfrescoContentRepresentation.md)
 - [.AlfrescoEndpointRepresentation](docs/AlfrescoEndpointRepresentation.md)
 - [.AlfrescoNetworkRepresenation](docs/AlfrescoNetworkRepresenation.md)
 - [.AlfrescoSiteRepresenation](docs/AlfrescoSiteRepresenation.md)
 - [.AppDefinition](docs/AppDefinition.md)
 - [.AppDefinitionPublishRepresentation](docs/AppDefinitionPublishRepresentation.md)
 - [.AppDefinitionRepresentation](docs/AppDefinitionRepresentation.md)
 - [.AppDefinitionSaveRepresentation](docs/AppDefinitionSaveRepresentation.md)
 - [.AppDefinitionUpdateResultRepresentation](docs/AppDefinitionUpdateResultRepresentation.md)
 - [.AppDeploymentRepresentation](docs/AppDeploymentRepresentation.md)
 - [.AppModelDefinition](docs/AppModelDefinition.md)
 - [.AssigneeIdentifierRepresentation](docs/AssigneeIdentifierRepresentation.md)
 - [.AuditCalculatedValueRepresentation](docs/AuditCalculatedValueRepresentation.md)
 - [.AuditDecisionExpressionInfoRepresentation](docs/AuditDecisionExpressionInfoRepresentation.md)
 - [.AuditDecisionInfoRepresentation](docs/AuditDecisionInfoRepresentation.md)
 - [.AuditDecisionRuleInfoRepresentation](docs/AuditDecisionRuleInfoRepresentation.md)
 - [.AuditLogEntryRepresentation](docs/AuditLogEntryRepresentation.md)
 - [.AuditLogFormDataRepresentation](docs/AuditLogFormDataRepresentation.md)
 - [.BoxContent](docs/BoxContent.md)
 - [.BoxUserAccountCredentialsRepresentation](docs/BoxUserAccountCredentialsRepresentation.md)
 - [.BulkUserUpdateRepresentation](docs/BulkUserUpdateRepresentation.md)
 - [.ChangePasswordRepresentation](docs/ChangePasswordRepresentation.md)
 - [.ChecklistOrderRepresentation](docs/ChecklistOrderRepresentation.md)
 - [.CommentAuditInfo](docs/CommentAuditInfo.md)
 - [.CommentRepresentation](docs/CommentRepresentation.md)
 - [.CompleteFormRepresentation](docs/CompleteFormRepresentation.md)
 - [.ConditionRepresentation](docs/ConditionRepresentation.md)
 - [.CreateEndpointBasicAuthRepresentation](docs/CreateEndpointBasicAuthRepresentation.md)
 - [.CreateProcessInstanceRepresentation](docs/CreateProcessInstanceRepresentation.md)
 - [.CreateTenantRepresentation](docs/CreateTenantRepresentation.md)
 - [.DataSourceConfigRepresentation](docs/DataSourceConfigRepresentation.md)
 - [.DataSourceRepresentation](docs/DataSourceRepresentation.md)
 - [.DecisionAuditRepresentation](docs/DecisionAuditRepresentation.md)
 - [.DecisionTaskRepresentation](docs/DecisionTaskRepresentation.md)
 - [.EndpointBasicAuthRepresentation](docs/EndpointBasicAuthRepresentation.md)
 - [.EndpointConfigurationRepresentation](docs/EndpointConfigurationRepresentation.md)
 - [.EndpointRequestHeaderRepresentation](docs/EndpointRequestHeaderRepresentation.md)
 - [.EntityAttributeScopeRepresentation](docs/EntityAttributeScopeRepresentation.md)
 - [.EntityVariableScopeRepresentation](docs/EntityVariableScopeRepresentation.md)
 - [.FieldValueInfo](docs/FieldValueInfo.md)
 - [.File](docs/File.md)
 - [.FormDefinitionRepresentation](docs/FormDefinitionRepresentation.md)
 - [.FormFieldRepresentation](docs/FormFieldRepresentation.md)
 - [.FormIdentifierRepresentation](docs/FormIdentifierRepresentation.md)
 - [.FormJavascriptEventRepresentation](docs/FormJavascriptEventRepresentation.md)
 - [.FormOutcomeRepresentation](docs/FormOutcomeRepresentation.md)
 - [.FormRepresentation](docs/FormRepresentation.md)
 - [.FormSaveRepresentation](docs/FormSaveRepresentation.md)
 - [.FormScopeRepresentation](docs/FormScopeRepresentation.md)
 - [.FormTabRepresentation](docs/FormTabRepresentation.md)
 - [.FormValueRepresentation](docs/FormValueRepresentation.md)
 - [.FormVariableRepresentation](docs/FormVariableRepresentation.md)
 - [.GlobalDateFormatRepresentation](docs/GlobalDateFormatRepresentation.md)
 - [.GoogleDriveContent](docs/GoogleDriveContent.md)
 - [.GroupCapabilityRepresentation](docs/GroupCapabilityRepresentation.md)
 - [.GroupRepresentation](docs/GroupRepresentation.md)
 - [.HistoricProcessInstanceQueryRepresentation](docs/HistoricProcessInstanceQueryRepresentation.md)
 - [.HistoricTaskInstanceQueryRepresentation](docs/HistoricTaskInstanceQueryRepresentation.md)
 - [.IdentityLinkRepresentation](docs/IdentityLinkRepresentation.md)
 - [.ImageUploadRepresentation](docs/ImageUploadRepresentation.md)
 - [.JsonNode](docs/JsonNode.md)
 - [.LayoutRepresentation](docs/LayoutRepresentation.md)
 - [.LightAppRepresentation](docs/LightAppRepresentation.md)
 - [.LightGroupRepresentation](docs/LightGroupRepresentation.md)
 - [.LightTenantRepresentation](docs/LightTenantRepresentation.md)
 - [.LightUserRepresentation](docs/LightUserRepresentation.md)
 - [.ModelRepresentation](docs/ModelRepresentation.md)
 - [.NamedObject](docs/NamedObject.md)
 - [.ObjectNode](docs/ObjectNode.md)
 - [.OptionRepresentation](docs/OptionRepresentation.md)
 - [.PasswordValidationConstraints](docs/PasswordValidationConstraints.md)
 - [.ProcessContentRepresentation](docs/ProcessContentRepresentation.md)
 - [.ProcessDefinitionMetaDataRepresentation](docs/ProcessDefinitionMetaDataRepresentation.md)
 - [.ProcessDefinitionRepresentation](docs/ProcessDefinitionRepresentation.md)
 - [.ProcessInstanceAuditInfoRepresentation](docs/ProcessInstanceAuditInfoRepresentation.md)
 - [.ProcessInstanceFilterRepresentation](docs/ProcessInstanceFilterRepresentation.md)
 - [.ProcessInstanceFilterRequestRepresentation](docs/ProcessInstanceFilterRequestRepresentation.md)
 - [.ProcessInstanceQueryRepresentation](docs/ProcessInstanceQueryRepresentation.md)
 - [.ProcessInstanceRepresentation](docs/ProcessInstanceRepresentation.md)
 - [.ProcessInstanceVariableRepresentation](docs/ProcessInstanceVariableRepresentation.md)
 - [.ProcessScopeIdentifierRepresentation](docs/ProcessScopeIdentifierRepresentation.md)
 - [.ProcessScopeRepresentation](docs/ProcessScopeRepresentation.md)
 - [.ProcessScopesRequestRepresentation](docs/ProcessScopesRequestRepresentation.md)
 - [.PublishIdentityInfoRepresentation](docs/PublishIdentityInfoRepresentation.md)
 - [.QueryVariable](docs/QueryVariable.md)
 - [.RelatedContentRepresentation](docs/RelatedContentRepresentation.md)
 - [.ResetPasswordRepresentation](docs/ResetPasswordRepresentation.md)
 - [.RestVariable](docs/RestVariable.md)
 - [.ResultListDataRepresentationAbstractUserRepresentation](docs/ResultListDataRepresentationAbstractUserRepresentation.md)
 - [.ResultListDataRepresentationAccountRepresentation](docs/ResultListDataRepresentationAccountRepresentation.md)
 - [.ResultListDataRepresentationAlfrescoContentRepresentation](docs/ResultListDataRepresentationAlfrescoContentRepresentation.md)
 - [.ResultListDataRepresentationAlfrescoEndpointRepresentation](docs/ResultListDataRepresentationAlfrescoEndpointRepresentation.md)
 - [.ResultListDataRepresentationAlfrescoNetworkRepresenation](docs/ResultListDataRepresentationAlfrescoNetworkRepresenation.md)
 - [.ResultListDataRepresentationAlfrescoSiteRepresenation](docs/ResultListDataRepresentationAlfrescoSiteRepresenation.md)
 - [.ResultListDataRepresentationAppDefinitionRepresentation](docs/ResultListDataRepresentationAppDefinitionRepresentation.md)
 - [.ResultListDataRepresentationAppDeploymentRepresentation](docs/ResultListDataRepresentationAppDeploymentRepresentation.md)
 - [.ResultListDataRepresentationBoxContent](docs/ResultListDataRepresentationBoxContent.md)
 - [.ResultListDataRepresentationCommentRepresentation](docs/ResultListDataRepresentationCommentRepresentation.md)
 - [.ResultListDataRepresentationDataSourceRepresentation](docs/ResultListDataRepresentationDataSourceRepresentation.md)
 - [.ResultListDataRepresentationDecisionAuditRepresentation](docs/ResultListDataRepresentationDecisionAuditRepresentation.md)
 - [.ResultListDataRepresentationDecisionTaskRepresentation](docs/ResultListDataRepresentationDecisionTaskRepresentation.md)
 - [.ResultListDataRepresentationFormRepresentation](docs/ResultListDataRepresentationFormRepresentation.md)
 - [.ResultListDataRepresentationGoogleDriveContent](docs/ResultListDataRepresentationGoogleDriveContent.md)
 - [.ResultListDataRepresentationLightGroupRepresentation](docs/ResultListDataRepresentationLightGroupRepresentation.md)
 - [.ResultListDataRepresentationLightUserRepresentation](docs/ResultListDataRepresentationLightUserRepresentation.md)
 - [.ResultListDataRepresentationModelRepresentation](docs/ResultListDataRepresentationModelRepresentation.md)
 - [.ResultListDataRepresentationProcessContentRepresentation](docs/ResultListDataRepresentationProcessContentRepresentation.md)
 - [.ResultListDataRepresentationProcessDefinitionRepresentation](docs/ResultListDataRepresentationProcessDefinitionRepresentation.md)
 - [.ResultListDataRepresentationProcessInstanceRepresentation](docs/ResultListDataRepresentationProcessInstanceRepresentation.md)
 - [.ResultListDataRepresentationRelatedContentRepresentation](docs/ResultListDataRepresentationRelatedContentRepresentation.md)
 - [.ResultListDataRepresentationRuntimeDecisionTableRepresentation](docs/ResultListDataRepresentationRuntimeDecisionTableRepresentation.md)
 - [.ResultListDataRepresentationRuntimeFormRepresentation](docs/ResultListDataRepresentationRuntimeFormRepresentation.md)
 - [.ResultListDataRepresentationSubmittedFormRepresentation](docs/ResultListDataRepresentationSubmittedFormRepresentation.md)
 - [.ResultListDataRepresentationTaskRepresentation](docs/ResultListDataRepresentationTaskRepresentation.md)
 - [.ResultListDataRepresentationUserProcessInstanceFilterRepresentation](docs/ResultListDataRepresentationUserProcessInstanceFilterRepresentation.md)
 - [.ResultListDataRepresentationUserTaskFilterRepresentation](docs/ResultListDataRepresentationUserTaskFilterRepresentation.md)
 - [.RuntimeAppDefinitionSaveRepresentation](docs/RuntimeAppDefinitionSaveRepresentation.md)
 - [.RuntimeDecisionTableRepresentation](docs/RuntimeDecisionTableRepresentation.md)
 - [.RuntimeFormRepresentation](docs/RuntimeFormRepresentation.md)
 - [.SaveFormRepresentation](docs/SaveFormRepresentation.md)
 - [.SubmittedFormRepresentation](docs/SubmittedFormRepresentation.md)
 - [.SyncLogEntryRepresentation](docs/SyncLogEntryRepresentation.md)
 - [.SystemPropertiesRepresentation](docs/SystemPropertiesRepresentation.md)
 - [.TaskAuditInfoRepresentation](docs/TaskAuditInfoRepresentation.md)
 - [.TaskFilterRepresentation](docs/TaskFilterRepresentation.md)
 - [.TaskFilterRequestRepresentation](docs/TaskFilterRequestRepresentation.md)
 - [.TaskQueryRepresentation](docs/TaskQueryRepresentation.md)
 - [.TaskRepresentation](docs/TaskRepresentation.md)
 - [.TaskUpdateRepresentation](docs/TaskUpdateRepresentation.md)
 - [.TenantEvent](docs/TenantEvent.md)
 - [.TenantRepresentation](docs/TenantRepresentation.md)
 - [.UserAccountCredentialsRepresentation](docs/UserAccountCredentialsRepresentation.md)
 - [.UserActionRepresentation](docs/UserActionRepresentation.md)
 - [.UserFilterOrderRepresentation](docs/UserFilterOrderRepresentation.md)
 - [.UserIdentifierRepresentation](docs/UserIdentifierRepresentation.md)
 - [.UserProcessInstanceFilterRepresentation](docs/UserProcessInstanceFilterRepresentation.md)
 - [.UserRepresentation](docs/UserRepresentation.md)
 - [.UserTaskFilterRepresentation](docs/UserTaskFilterRepresentation.md)
 - [.ValidationErrorRepresentation](docs/ValidationErrorRepresentation.md)
 - [.VariableMappingRepresentation](docs/VariableMappingRepresentation.md)
 - [.VariableScopeRepresentation](docs/VariableScopeRepresentation.md)

