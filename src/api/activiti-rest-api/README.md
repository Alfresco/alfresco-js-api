Provides access to the complete features provided by Alfresco Process Services powered by Activiti.

You can use this API to integrate Alfresco Process Services with external applications.

- Last Build date: 2018-12-18T01:16:06.816Z


## Documentation for API Endpoints

All URIs are relative to */activiti-app/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*.AboutApi* | [**getAppVersion**](docs/AboutApi.md#getAppVersion) | **GET** /enterprise/app-version | Get server type and version
*.AccountintegrationApi* | [**getAccounts**](docs/AccountintegrationApi.md#getAccounts) | **GET** /enterprise/account/integration | Retrieve external account information
*.AdminendpointsApi* | [**createBasicAuthConfiguration**](docs/AdminendpointsApi.md#createBasicAuthConfiguration) | **POST** /enterprise/admin/basic-auths | Add an endpoint authorization
*.AdminendpointsApi* | [**createEndpointConfiguration**](docs/AdminendpointsApi.md#createEndpointConfiguration) | **POST** /enterprise/admin/endpoints | Create an endpoint
*.AdminendpointsApi* | [**getBasicAuthConfiguration**](docs/AdminendpointsApi.md#getBasicAuthConfiguration) | **GET** /enterprise/admin/basic-auths/{basicAuthId} | Get an endpoint authorization
*.AdminendpointsApi* | [**getBasicAuthConfigurations**](docs/AdminendpointsApi.md#getBasicAuthConfigurations) | **GET** /enterprise/admin/basic-auths | List endpoint authorizations
*.AdminendpointsApi* | [**getEndpointConfiguration**](docs/AdminendpointsApi.md#getEndpointConfiguration) | **GET** /enterprise/admin/endpoints/{endpointConfigurationId} | Get an endpoint
*.AdminendpointsApi* | [**getEndpointConfigurations**](docs/AdminendpointsApi.md#getEndpointConfigurations) | **GET** /enterprise/admin/endpoints | List endpoints
*.AdminendpointsApi* | [**removeBasicAuthonfiguration**](docs/AdminendpointsApi.md#removeBasicAuthonfiguration) | **DELETE** /enterprise/admin/basic-auths/{basicAuthId} | Delete an endpoint authorization
*.AdminendpointsApi* | [**removeEndpointConfiguration**](docs/AdminendpointsApi.md#removeEndpointConfiguration) | **DELETE** /enterprise/admin/endpoints/{endpointConfigurationId} | Delete an endpoint
*.AdminendpointsApi* | [**updateBasicAuthConfiguration**](docs/AdminendpointsApi.md#updateBasicAuthConfiguration) | **PUT** /enterprise/admin/basic-auths/{basicAuthId} | Update an endpoint authorization
*.AdminendpointsApi* | [**updateEndpointConfiguration**](docs/AdminendpointsApi.md#updateEndpointConfiguration) | **PUT** /enterprise/admin/endpoints/{endpointConfigurationId} | Update an endpoint
*.AdmingroupsApi* | [**activate**](docs/AdmingroupsApi.md#activate) | **POST** /enterprise/admin/groups/{groupId}/action/activate | Activate a group
*.AdmingroupsApi* | [**addAllUsersToGroup**](docs/AdmingroupsApi.md#addAllUsersToGroup) | **POST** /enterprise/admin/groups/{groupId}/add-all-users | Add users to a group
*.AdmingroupsApi* | [**addGroupCapabilities**](docs/AdmingroupsApi.md#addGroupCapabilities) | **POST** /enterprise/admin/groups/{groupId}/capabilities | Add capabilities to a group
*.AdmingroupsApi* | [**addGroupMember**](docs/AdmingroupsApi.md#addGroupMember) | **POST** /enterprise/admin/groups/{groupId}/members/{userId} | Add a user to a group
*.AdmingroupsApi* | [**addRelatedGroup**](docs/AdmingroupsApi.md#addRelatedGroup) | **POST** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Get a related group
*.AdmingroupsApi* | [**createNewGroup**](docs/AdmingroupsApi.md#createNewGroup) | **POST** /enterprise/admin/groups | Create a group
*.AdmingroupsApi* | [**deleteGroupCapability**](docs/AdmingroupsApi.md#deleteGroupCapability) | **DELETE** /enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | Remove a capability from a group
*.AdmingroupsApi* | [**deleteGroupMember**](docs/AdmingroupsApi.md#deleteGroupMember) | **DELETE** /enterprise/admin/groups/{groupId}/members/{userId} | Delete a member from a group
*.AdmingroupsApi* | [**deleteGroup**](docs/AdmingroupsApi.md#deleteGroup) | **DELETE** /enterprise/admin/groups/{groupId} | Delete a group
*.AdmingroupsApi* | [**deleteRelatedGroup**](docs/AdmingroupsApi.md#deleteRelatedGroup) | **DELETE** /enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | Delete a related group
*.AdmingroupsApi* | [**getCapabilities**](docs/AdmingroupsApi.md#getCapabilities) | **GET** /enterprise/admin/groups/{groupId}/potential-capabilities | List group capabilities
*.AdmingroupsApi* | [**getGroupUsers**](docs/AdmingroupsApi.md#getGroupUsers) | **GET** /enterprise/admin/groups/{groupId}/users | Get group members
*.AdmingroupsApi* | [**getGroup**](docs/AdmingroupsApi.md#getGroup) | **GET** /enterprise/admin/groups/{groupId} | Get a group
*.AdmingroupsApi* | [**getGroups**](docs/AdmingroupsApi.md#getGroups) | **GET** /enterprise/admin/groups | Query groups
*.AdmingroupsApi* | [**getRelatedGroups**](docs/AdmingroupsApi.md#getRelatedGroups) | **GET** /enterprise/admin/groups/{groupId}/related-groups | Get related groups
*.AdmingroupsApi* | [**updateGroup**](docs/AdmingroupsApi.md#updateGroup) | **PUT** /enterprise/admin/groups/{groupId} | Update a group
*.AdmintenantsApi* | [**createTenant**](docs/AdmintenantsApi.md#createTenant) | **POST** /enterprise/admin/tenants | Create a tenant
*.AdmintenantsApi* | [**deleteTenant**](docs/AdmintenantsApi.md#deleteTenant) | **DELETE** /enterprise/admin/tenants/{tenantId} | Delete a tenant
*.AdmintenantsApi* | [**getTenantEvents**](docs/AdmintenantsApi.md#getTenantEvents) | **GET** /enterprise/admin/tenants/{tenantId}/events | Get tenant events
*.AdmintenantsApi* | [**getTenantLogo**](docs/AdmintenantsApi.md#getTenantLogo) | **GET** /enterprise/admin/tenants/{tenantId}/logo | Get a tenant's logo
*.AdmintenantsApi* | [**getTenant**](docs/AdmintenantsApi.md#getTenant) | **GET** /enterprise/admin/tenants/{tenantId} | Get a tenant
*.AdmintenantsApi* | [**getTenants**](docs/AdmintenantsApi.md#getTenants) | **GET** /enterprise/admin/tenants | List tenants
*.AdmintenantsApi* | [**update**](docs/AdmintenantsApi.md#update) | **PUT** /enterprise/admin/tenants/{tenantId} | Update a tenant
*.AdmintenantsApi* | [**uploadTenantLogo**](docs/AdmintenantsApi.md#uploadTenantLogo) | **POST** /enterprise/admin/tenants/{tenantId}/logo | Update a tenant's logo
*.AdminusersApi* | [**bulkUpdateUsers**](docs/AdminusersApi.md#bulkUpdateUsers) | **PUT** /enterprise/admin/users | Bulk update a list of users
*.AdminusersApi* | [**createNewUser**](docs/AdminusersApi.md#createNewUser) | **POST** /enterprise/admin/users | Create a user
*.AdminusersApi* | [**getUser**](docs/AdminusersApi.md#getUser) | **GET** /enterprise/admin/users/{userId} | Get a user
*.AdminusersApi* | [**getUsers**](docs/AdminusersApi.md#getUsers) | **GET** /enterprise/admin/users | Query users
*.AdminusersApi* | [**updateUserDetails**](docs/AdminusersApi.md#updateUserDetails) | **PUT** /enterprise/admin/users/{userId} | Update a user
*.AppdefinitionsApi* | [**deleteAppDefinition**](docs/AppdefinitionsApi.md#deleteAppDefinition) | **DELETE** /enterprise/app-definitions/{appDefinitionId} | deleteAppDefinition
*.AppdefinitionsApi* | [**exportAppDefinition**](docs/AppdefinitionsApi.md#exportAppDefinition) | **GET** /enterprise/app-definitions/{modelId}/export | Export an app definition
*.AppdefinitionsApi* | [**getAppDefinition**](docs/AppdefinitionsApi.md#getAppDefinition) | **GET** /enterprise/app-definitions/{modelId} | Get an app definition
*.AppdefinitionsApi* | [**importAndPublishApp**](docs/AppdefinitionsApi.md#importAndPublishApp) | **POST** /enterprise/app-definitions/publish-app | importAndPublishApp
*.AppdefinitionsApi* | [**importAndPublishApp**](docs/AppdefinitionsApi.md#importAndPublishApp) | **POST** /enterprise/app-definitions/{modelId}/publish-app | importAndPublishApp
*.AppdefinitionsApi* | [**importAppDefinition**](docs/AppdefinitionsApi.md#importAppDefinition) | **POST** /enterprise/app-definitions/import | Import a new app definition
*.AppdefinitionsApi* | [**importAppDefinition**](docs/AppdefinitionsApi.md#importAppDefinition) | **POST** /enterprise/app-definitions/{modelId}/import | Update the content of an existing app
*.AppdefinitionsApi* | [**publishAppDefinition**](docs/AppdefinitionsApi.md#publishAppDefinition) | **POST** /enterprise/app-definitions/{modelId}/publish | Publish an app definition
*.AppdefinitionsApi* | [**updateAppDefinition**](docs/AppdefinitionsApi.md#updateAppDefinition) | **PUT** /enterprise/app-definitions/{modelId} | Update an app definition
*.ChecklistsApi* | [**addSubtask**](docs/ChecklistsApi.md#addSubtask) | **POST** /enterprise/tasks/{taskId}/checklist | Create a task checklist
*.ChecklistsApi* | [**getChecklist**](docs/ChecklistsApi.md#getChecklist) | **GET** /enterprise/tasks/{taskId}/checklist | Get checklist for a task
*.ChecklistsApi* | [**orderChecklist**](docs/ChecklistsApi.md#orderChecklist) | **PUT** /enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
*.CommentsApi* | [**addProcessInstanceComment**](docs/CommentsApi.md#addProcessInstanceComment) | **POST** /enterprise/process-instances/{processInstanceId}/comments | Add a comment to a process instance
*.CommentsApi* | [**addTaskComment**](docs/CommentsApi.md#addTaskComment) | **POST** /enterprise/tasks/{taskId}/comments | Add a comment to a task
*.CommentsApi* | [**getProcessInstanceComments**](docs/CommentsApi.md#getProcessInstanceComments) | **GET** /enterprise/process-instances/{processInstanceId}/comments | Get comments for a process
*.CommentsApi* | [**getTaskComments**](docs/CommentsApi.md#getTaskComments) | **GET** /enterprise/tasks/{taskId}/comments | Get comments for a task
*.ContentApi* | [**createRelatedContentOnProcessInstance**](docs/ContentApi.md#createRelatedContentOnProcessInstance) | **POST** /enterprise/process-instances/{processInstanceId}/content | Attach existing content to a process instance
*.ContentApi* | [**createRelatedContentOnProcessInstance**](docs/ContentApi.md#createRelatedContentOnProcessInstance) | **POST** /enterprise/process-instances/{processInstanceId}/raw-content | Upload content and attach to a process instance
*.ContentApi* | [**createRelatedContentOnTask**](docs/ContentApi.md#createRelatedContentOnTask) | **POST** /enterprise/tasks/{taskId}/content | Attach existing content to a task
*.ContentApi* | [**createRelatedContentOnTask**](docs/ContentApi.md#createRelatedContentOnTask) | **POST** /enterprise/tasks/{taskId}/raw-content | Upload content and attach to a task
*.ContentApi* | [**createTemporaryRawRelatedContent**](docs/ContentApi.md#createTemporaryRawRelatedContent) | **POST** /enterprise/content/raw | Upload content and create a local representation
*.ContentApi* | [**createTemporaryRelatedContent**](docs/ContentApi.md#createTemporaryRelatedContent) | **POST** /enterprise/content | Create a local representation of content from a remote repository
*.ContentApi* | [**deleteContent**](docs/ContentApi.md#deleteContent) | **DELETE** /enterprise/content/{contentId} | Remove a local content representation
*.ContentApi* | [**getContent**](docs/ContentApi.md#getContent) | **GET** /enterprise/content/{contentId} | Get a local content representation
*.ContentApi* | [**getRawContent**](docs/ContentApi.md#getRawContent) | **GET** /enterprise/content/{contentId}/rendition/{renditionType} | Stream content rendition
*.ContentApi* | [**getRawContent**](docs/ContentApi.md#getRawContent) | **GET** /enterprise/content/{contentId}/raw | Stream content from a local content representation
*.ContentApi* | [**getRelatedContentForProcessInstance**](docs/ContentApi.md#getRelatedContentForProcessInstance) | **GET** /enterprise/process-instances/{processInstanceId}/content | List content attached to a process instance
*.ContentApi* | [**getRelatedContentForTask**](docs/ContentApi.md#getRelatedContentForTask) | **GET** /enterprise/tasks/{taskId}/content | List content attached to a task
*.DatasourcesApi* | [**getDataSources**](docs/DatasourcesApi.md#getDataSources) | **GET** /enterprise/editor/data-sources | Get data sources
*.DecisionauditsApi* | [**getAuditTrail**](docs/DecisionauditsApi.md#getAuditTrail) | **GET** /enterprise/decisions/audits/{auditTrailId} | Get an audit trail
*.DecisionauditsApi* | [**getAuditTrails**](docs/DecisionauditsApi.md#getAuditTrails) | **GET** /enterprise/decisions/audits | Query decision table audit trails
*.DecisiontablesApi* | [**getDecisionTableEditorJson**](docs/DecisiontablesApi.md#getDecisionTableEditorJson) | **GET** /enterprise/decisions/decision-tables/{decisionTableId}/editorJson | Get definition for a decision table
*.DecisiontablesApi* | [**getDecisionTable**](docs/DecisiontablesApi.md#getDecisionTable) | **GET** /enterprise/decisions/decision-tables/{decisionTableId} | Get a decision table
*.DecisiontablesApi* | [**getDecisionTables**](docs/DecisiontablesApi.md#getDecisionTables) | **GET** /enterprise/decisions/decision-tables | Query decision tables
*.EndpointsApi* | [**getEndpointConfiguration**](docs/EndpointsApi.md#getEndpointConfiguration) | **GET** /enterprise/editor/endpoints/{endpointConfigurationId} | Get an endpoint configuration
*.EndpointsApi* | [**getEndpointConfigurations**](docs/EndpointsApi.md#getEndpointConfigurations) | **GET** /enterprise/editor/endpoints | List endpoint configurations
*.FormmodelsApi* | [**getFormEditorJson**](docs/FormmodelsApi.md#getFormEditorJson) | **GET** /enterprise/forms/{formId}/editorJson | Get form content
*.FormmodelsApi* | [**getFormHistory**](docs/FormmodelsApi.md#getFormHistory) | **GET** /enterprise/editor/form-models/{formId}/history/{formHistoryId} | Get form history
*.FormmodelsApi* | [**getForm**](docs/FormmodelsApi.md#getForm) | **GET** /enterprise/editor/form-models/{formId} | Get a form model
*.FormmodelsApi* | [**getForm**](docs/FormmodelsApi.md#getForm) | **GET** /enterprise/forms/{formId} | Get a form
*.FormmodelsApi* | [**getForms**](docs/FormmodelsApi.md#getForms) | **GET** /enterprise/editor/form-models/values | Get forms
*.FormmodelsApi* | [**getForms**](docs/FormmodelsApi.md#getForms) | **GET** /enterprise/editor/form-models | List form models
*.FormmodelsApi* | [**getForms**](docs/FormmodelsApi.md#getForms) | **GET** /enterprise/forms | Query forms
*.FormmodelsApi* | [**saveForm**](docs/FormmodelsApi.md#saveForm) | **PUT** /enterprise/editor/form-models/{formId} | Update form model content
*.FormmodelsApi* | [**validateModel**](docs/FormmodelsApi.md#validateModel) | **PUT** /enterprise/editor/form-models/{formId}/validate | Validate form model content
*.GroupsApi* | [**getGroups**](docs/GroupsApi.md#getGroups) | **GET** /enterprise/groups | Query groups
*.GroupsApi* | [**getUsersForGroup**](docs/GroupsApi.md#getUsersForGroup) | **GET** /enterprise/groups/{groupId}/users | List members of a group
*.IdmsyncApi* | [**getLogFile**](docs/IdmsyncApi.md#getLogFile) | **GET** /enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | Get log file for a sync log entry
*.IdmsyncApi* | [**getSyncLogEntries**](docs/IdmsyncApi.md#getSyncLogEntries) | **GET** /enterprise/idm-sync-log-entries | List sync log entries
*.IntegrationalfrescocloudApi* | [**confirmAuthorisation**](docs/IntegrationalfrescocloudApi.md#confirmAuthorisation) | **GET** /enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*.IntegrationalfrescocloudApi* | [**getAllNetworks**](docs/IntegrationalfrescocloudApi.md#getAllNetworks) | **GET** /enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*.IntegrationalfrescocloudApi* | [**getAllSites**](docs/IntegrationalfrescocloudApi.md#getAllSites) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*.IntegrationalfrescocloudApi* | [**getContentInFolderPath**](docs/IntegrationalfrescocloudApi.md#getContentInFolderPath) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by path
*.IntegrationalfrescocloudApi* | [**getContentInFolder**](docs/IntegrationalfrescocloudApi.md#getContentInFolder) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List files and folders inside a specific folder
*.IntegrationalfrescocloudApi* | [**getContentInSite**](docs/IntegrationalfrescocloudApi.md#getContentInSite) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List files and folders inside a specific site
*.IntegrationalfrescoonpremiseApi* | [**getAllSites**](docs/IntegrationalfrescoonpremiseApi.md#getAllSites) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*.IntegrationalfrescoonpremiseApi* | [**getContentInFolderPath**](docs/IntegrationalfrescoonpremiseApi.md#getContentInFolderPath) | **GET** /enterprise/rest/integration/alfresco/{repositoryId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by folder path
*.IntegrationalfrescoonpremiseApi* | [**getContentInFolder**](docs/IntegrationalfrescoonpremiseApi.md#getContentInFolder) | **GET** /enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List files and folders inside a specific folder
*.IntegrationalfrescoonpremiseApi* | [**getContentInSite**](docs/IntegrationalfrescoonpremiseApi.md#getContentInSite) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List files and folders inside a specific site
*.IntegrationalfrescoonpremiseApi* | [**getRepositories**](docs/IntegrationalfrescoonpremiseApi.md#getRepositories) | **GET** /enterprise/profile/accounts/alfresco | List Alfresco repositories
*.IntegrationboxApi* | [**confirmAuthorisation**](docs/IntegrationboxApi.md#confirmAuthorisation) | **GET** /enterprise/integration/box/confirm-auth-request | Box Authorization
*.IntegrationboxApi* | [**createRepositoryAccount**](docs/IntegrationboxApi.md#createRepositoryAccount) | **POST** /enterprise/integration/box/{userId}/account | Add Box account
*.IntegrationboxApi* | [**deleteRepositoryAccount**](docs/IntegrationboxApi.md#deleteRepositoryAccount) | **DELETE** /enterprise/integration/box/{userId}/account | Delete account information
*.IntegrationboxApi* | [**getBoxPluginStatus**](docs/IntegrationboxApi.md#getBoxPluginStatus) | **GET** /enterprise/integration/box/status | Get status information
*.IntegrationboxApi* | [**getFiles**](docs/IntegrationboxApi.md#getFiles) | **GET** /enterprise/integration/box/files | List file and folders
*.IntegrationboxApi* | [**getRepositoryAccount**](docs/IntegrationboxApi.md#getRepositoryAccount) | **GET** /enterprise/integration/box/{userId}/account | Get account information
*.IntegrationboxApi* | [**updateRepositoryAccount**](docs/IntegrationboxApi.md#updateRepositoryAccount) | **PUT** /enterprise/integration/box/{userId}/account | Update account information
*.IntegrationdriveApi* | [**confirmAuthorisation**](docs/IntegrationdriveApi.md#confirmAuthorisation) | **GET** /enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
*.IntegrationdriveApi* | [**getFiles**](docs/IntegrationdriveApi.md#getFiles) | **GET** /enterprise/integration/google-drive/files | List files and folders
*.ModelsApi* | [**createModel**](docs/ModelsApi.md#createModel) | **POST** /enterprise/models | Create a new model
*.ModelsApi* | [**deleteModel**](docs/ModelsApi.md#deleteModel) | **DELETE** /enterprise/models/{modelId} | Delete a model
*.ModelsApi* | [**duplicateModel**](docs/ModelsApi.md#duplicateModel) | **POST** /enterprise/models/{modelId}/clone | Duplicate an existing model
*.ModelsApi* | [**getModelJSON**](docs/ModelsApi.md#getModelJSON) | **GET** /enterprise/models/{modelId}/editor/json | Get model content
*.ModelsApi* | [**getModelThumbnail**](docs/ModelsApi.md#getModelThumbnail) | **GET** /enterprise/models/{modelId}/thumbnail | Get a model's thumbnail image
*.ModelsApi* | [**getModel**](docs/ModelsApi.md#getModel) | **GET** /enterprise/models/{modelId} | Get a model
*.ModelsApi* | [**getModelsToIncludeInAppDefinition**](docs/ModelsApi.md#getModelsToIncludeInAppDefinition) | **GET** /enterprise/models-for-app-definition | List process definition models shared with the current user
*.ModelsApi* | [**getModels**](docs/ModelsApi.md#getModels) | **GET** /enterprise/models | List models (process, form, decision rule or app)
*.ModelsApi* | [**importNewVersion**](docs/ModelsApi.md#importNewVersion) | **POST** /enterprise/models/{modelId}/newversion | Create a new version of a model
*.ModelsApi* | [**importProcessModel**](docs/ModelsApi.md#importProcessModel) | **POST** /enterprise/process-models/import | Import a BPMN 2.0 XML file
*.ModelsApi* | [**saveModel**](docs/ModelsApi.md#saveModel) | **POST** /enterprise/models/{modelId}/editor/json | Update model content
*.ModelsApi* | [**updateModel**](docs/ModelsApi.md#updateModel) | **PUT** /enterprise/models/{modelId} | Update a model
*.ModelsApi* | [**validateModel**](docs/ModelsApi.md#validateModel) | **POST** /enterprise/models/{modelId}/editor/validate | Validate model content
*.ModelsbpmnApi* | [**getHistoricProcessModelBpmn20Xml**](docs/ModelsbpmnApi.md#getHistoricProcessModelBpmn20Xml) | **GET** /enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a historic version of a process definition as BPMN 2.0 XML
*.ModelsbpmnApi* | [**getProcessModelBpmn20Xml**](docs/ModelsbpmnApi.md#getProcessModelBpmn20Xml) | **GET** /enterprise/models/{processModelId}/bpmn20 | Export a process definition as BPMN 2.0 XML
*.ModelshistoryApi* | [**getModelHistoryCollection**](docs/ModelshistoryApi.md#getModelHistoryCollection) | **GET** /enterprise/models/{modelId}/history | List a model's historic versions
*.ModelshistoryApi* | [**getProcessModelHistory**](docs/ModelshistoryApi.md#getProcessModelHistory) | **GET** /enterprise/models/{modelId}/history/{modelHistoryId} | Get a historic version of a model
*.ProcessdefinitionsApi* | [**createIdentityLink**](docs/ProcessdefinitionsApi.md#createIdentityLink) | **POST** /enterprise/process-definitions/{processDefinitionId}/identitylinks | Add a user or group involvement to a process definition
*.ProcessdefinitionsApi* | [**deleteIdentityLink**](docs/ProcessdefinitionsApi.md#deleteIdentityLink) | **DELETE** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Remove a user or group involvement from a process definition
*.ProcessdefinitionsApi* | [**getIdentityLinkType**](docs/ProcessdefinitionsApi.md#getIdentityLinkType) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Get a user or group involvement with a process definition
*.ProcessdefinitionsApi* | [**getIdentityLinksForFamily**](docs/ProcessdefinitionsApi.md#getIdentityLinksForFamily) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family} | List either the users or groups involved with a process definition
*.ProcessdefinitionsApi* | [**getIdentityLinks**](docs/ProcessdefinitionsApi.md#getIdentityLinks) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks | List the users and groups involved with a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionDecisionTables**](docs/ProcessdefinitionsApi.md#getProcessDefinitionDecisionTables) | **GET** /enterprise/process-definitions/{processDefinitionId}/decision-tables | List the decision tables associated with a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionForms**](docs/ProcessdefinitionsApi.md#getProcessDefinitionForms) | **GET** /enterprise/process-definitions/{processDefinitionId}/forms | List the forms associated with a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitionStartForm**](docs/ProcessdefinitionsApi.md#getProcessDefinitionStartForm) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
*.ProcessdefinitionsApi* | [**getProcessDefinitions**](docs/ProcessdefinitionsApi.md#getProcessDefinitions) | **GET** /enterprise/process-definitions | Retrieve a list of process definitions
*.ProcessdefinitionsApi* | [**getRestFieldValues**](docs/ProcessdefinitionsApi.md#getRestFieldValues) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
*.ProcessdefinitionsApi* | [**getRestTableFieldValues**](docs/ProcessdefinitionsApi.md#getRestTableFieldValues) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
*.ProcessinstancesApi* | [**activateProcessInstance**](docs/ProcessinstancesApi.md#activateProcessInstance) | **PUT** /enterprise/process-instances/{processInstanceId}/activate | Activate a process instance
*.ProcessinstancesApi* | [**createIdentityLink**](docs/ProcessinstancesApi.md#createIdentityLink) | **POST** /enterprise/process-instances/{processInstanceId}/identitylinks | Add a user or group involvement to a process instance
*.ProcessinstancesApi* | [**deleteIdentityLink**](docs/ProcessinstancesApi.md#deleteIdentityLink) | **DELETE** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a process instance
*.ProcessinstancesApi* | [**deleteProcessInstance**](docs/ProcessinstancesApi.md#deleteProcessInstance) | **DELETE** /enterprise/process-instances/{processInstanceId} | Cancel or remove a process instance
*.ProcessinstancesApi* | [**filterProcessInstances**](docs/ProcessinstancesApi.md#filterProcessInstances) | **POST** /enterprise/process-instances/filter | List process instances using a filter
*.ProcessinstancesApi* | [**getHistoricProcessInstanceDecisionTasks**](docs/ProcessinstancesApi.md#getHistoricProcessInstanceDecisionTasks) | **GET** /enterprise/process-instances/{processInstanceId}/decision-tasks | Get decision tasks in a process instance
*.ProcessinstancesApi* | [**getHistoricProcessInstanceVariables**](docs/ProcessinstancesApi.md#getHistoricProcessInstanceVariables) | **GET** /enterprise/process-instances/{processInstanceId}/historic-variables | Get historic variables for a process instance
*.ProcessinstancesApi* | [**getHistoricProcessInstances**](docs/ProcessinstancesApi.md#getHistoricProcessInstances) | **POST** /enterprise/historic-process-instances/query | Query historic process instances
*.ProcessinstancesApi* | [**getIdentityLinkType**](docs/ProcessinstancesApi.md#getIdentityLinkType) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a process instance
*.ProcessinstancesApi* | [**getIdentityLinksForFamily**](docs/ProcessinstancesApi.md#getIdentityLinksForFamily) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family} | List either the users or groups involved with a process instance
*.ProcessinstancesApi* | [**getIdentityLinks**](docs/ProcessinstancesApi.md#getIdentityLinks) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks | List the users and groups involved with a process instance
*.ProcessinstancesApi* | [**getProcessInstanceContent**](docs/ProcessinstancesApi.md#getProcessInstanceContent) | **GET** /enterprise/process-instances/{processInstanceId}/field-content | List content attached to process instance fields
*.ProcessinstancesApi* | [**getProcessInstanceDiagram**](docs/ProcessinstancesApi.md#getProcessInstanceDiagram) | **GET** /enterprise/process-instances/{processInstanceId}/diagram | Get the process diagram for the process instance
*.ProcessinstancesApi* | [**getProcessInstanceStartForm**](docs/ProcessinstancesApi.md#getProcessInstanceStartForm) | **GET** /enterprise/process-instances/{processInstanceId}/start-form | Get a process instance start form
*.ProcessinstancesApi* | [**getProcessInstance**](docs/ProcessinstancesApi.md#getProcessInstance) | **GET** /enterprise/process-instances/{processInstanceId} | Get a process instance
*.ProcessinstancesApi* | [**getProcessInstances**](docs/ProcessinstancesApi.md#getProcessInstances) | **POST** /enterprise/process-instances/query | Query process instances
*.ProcessinstancesApi* | [**getTaskAuditLog**](docs/ProcessinstancesApi.md#getTaskAuditLog) | **GET** /enterprise/process-instances/{processInstanceId}/audit-log | Get the audit log for a process instance
*.ProcessinstancesApi* | [**startNewProcessInstance**](docs/ProcessinstancesApi.md#startNewProcessInstance) | **POST** /enterprise/process-instances | Start a process instance
*.ProcessinstancesApi* | [**suspendProcessInstance**](docs/ProcessinstancesApi.md#suspendProcessInstance) | **PUT** /enterprise/process-instances/{processInstanceId}/suspend | Suspend a process instance
*.ProcessinstancevariablesApi* | [**createOrUpdateProcessInstanceVariables**](docs/ProcessinstancevariablesApi.md#createOrUpdateProcessInstanceVariables) | **PUT** /enterprise/process-instances/{processInstanceId}/variables | Create or update variables
*.ProcessinstancevariablesApi* | [**createProcessInstanceVariables**](docs/ProcessinstancevariablesApi.md#createProcessInstanceVariables) | **POST** /enterprise/process-instances/{processInstanceId}/variables | Create variables
*.ProcessinstancevariablesApi* | [**deleteProcessInstanceVariable**](docs/ProcessinstancevariablesApi.md#deleteProcessInstanceVariable) | **DELETE** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Delete a variable
*.ProcessinstancevariablesApi* | [**getProcessInstanceVariable**](docs/ProcessinstancevariablesApi.md#getProcessInstanceVariable) | **GET** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Get a variable
*.ProcessinstancevariablesApi* | [**getProcessInstanceVariables**](docs/ProcessinstancevariablesApi.md#getProcessInstanceVariables) | **GET** /enterprise/process-instances/{processInstanceId}/variables | List variables
*.ProcessinstancevariablesApi* | [**updateProcessInstanceVariable**](docs/ProcessinstancevariablesApi.md#updateProcessInstanceVariable) | **PUT** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Update a variable
*.ProcessscopesApi* | [**getRuntimeProcessScopes**](docs/ProcessscopesApi.md#getRuntimeProcessScopes) | **POST** /enterprise/process-scopes | List runtime process scopes
*.RuntimeappdefinitionsApi* | [**deployAppDefinitions**](docs/RuntimeappdefinitionsApi.md#deployAppDefinitions) | **POST** /enterprise/runtime-app-definitions | Deploy a published app
*.RuntimeappdefinitionsApi* | [**getAppDefinition**](docs/RuntimeappdefinitionsApi.md#getAppDefinition) | **GET** /enterprise/runtime-app-definitions/{appDefinitionId} | Get a runtime app
*.RuntimeappdefinitionsApi* | [**getAppDefinitions**](docs/RuntimeappdefinitionsApi.md#getAppDefinitions) | **GET** /enterprise/runtime-app-definitions | List runtime apps
*.RuntimeappdeploymentsApi* | [**deleteAppDeployment**](docs/RuntimeappdeploymentsApi.md#deleteAppDeployment) | **DELETE** /enterprise/runtime-app-deployments/{appDeploymentId} | Remove an app deployment
*.RuntimeappdeploymentsApi* | [**exportAppDefinition**](docs/RuntimeappdeploymentsApi.md#exportAppDefinition) | **GET** /enterprise/export-app-deployment/{deploymentId} | Export the app archive for a deployment
*.RuntimeappdeploymentsApi* | [**getAppDefinitions**](docs/RuntimeappdeploymentsApi.md#getAppDefinitions) | **GET** /enterprise/runtime-app-deployments | Query app deployments
*.RuntimeappdeploymentsApi* | [**getAppDeployment**](docs/RuntimeappdeploymentsApi.md#getAppDeployment) | **GET** /enterprise/runtime-app-deployments/{appDeploymentId} | Get an app deployment
*.RuntimeappdeploymentsApi* | [**getRuntimeAppDeploymentByDeployment**](docs/RuntimeappdeploymentsApi.md#getRuntimeAppDeploymentByDeployment) | **GET** /enterprise/runtime-app-deployment | Get an app by deployment ID or DMN deployment ID
*.ScriptfilesApi* | [**getControllers**](docs/ScriptfilesApi.md#getControllers) | **GET** /enterprise/script-files/controllers | getControllers
*.ScriptfilesApi* | [**getLibraries**](docs/ScriptfilesApi.md#getLibraries) | **GET** /enterprise/script-files/libraries | getLibraries
*.SubmittedformsApi* | [**getFormSubmittedForms**](docs/SubmittedformsApi.md#getFormSubmittedForms) | **GET** /enterprise/form-submitted-forms/{formId} | List submissions for a form
*.SubmittedformsApi* | [**getProcessSubmittedForms**](docs/SubmittedformsApi.md#getProcessSubmittedForms) | **GET** /enterprise/process-submitted-forms/{processId} | List submissions for a process instance
*.SubmittedformsApi* | [**getSubmittedFrom**](docs/SubmittedformsApi.md#getSubmittedFrom) | **GET** /enterprise/submitted-forms/{submittedFormId} | Get a form submission
*.SubmittedformsApi* | [**getTaskSubmittedForms**](docs/SubmittedformsApi.md#getTaskSubmittedForms) | **GET** /enterprise/task-submitted-form/{taskId} | Get the submitted form for a task
*.SystempropertiesApi* | [**getGlobalDateFormat**](docs/SystempropertiesApi.md#getGlobalDateFormat) | **GET** /enterprise/system/properties/global-date-format/{tenantId} | Get global date format
*.SystempropertiesApi* | [**getPasswordValidationConstraints**](docs/SystempropertiesApi.md#getPasswordValidationConstraints) | **GET** /enterprise/system/properties/password-validation-constraints/{tenantId} | Get password validation constraints
*.SystempropertiesApi* | [**getProperties**](docs/SystempropertiesApi.md#getProperties) | **GET** /enterprise/system/properties | Retrieve system properties
*.SystempropertiesApi* | [**involvedUsersCanEditForms**](docs/SystempropertiesApi.md#involvedUsersCanEditForms) | **GET** /enterprise/system/properties/involved-users-can-edit-forms/{tenantId} | Get involved users who can edit forms
*.TaskactionsApi* | [**assignTask**](docs/TaskactionsApi.md#assignTask) | **PUT** /enterprise/tasks/{taskId}/action/assign | Assign a task to a user
*.TaskactionsApi* | [**attachForm**](docs/TaskactionsApi.md#attachForm) | **PUT** /enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
*.TaskactionsApi* | [**claimTask**](docs/TaskactionsApi.md#claimTask) | **PUT** /enterprise/tasks/{taskId}/action/claim | Claim a task
*.TaskactionsApi* | [**completeTask**](docs/TaskactionsApi.md#completeTask) | **PUT** /enterprise/tasks/{taskId}/action/complete | Complete a task
*.TaskactionsApi* | [**delegateTask**](docs/TaskactionsApi.md#delegateTask) | **PUT** /enterprise/tasks/{taskId}/action/delegate | Delegate a task
*.TaskactionsApi* | [**involveGroup**](docs/TaskactionsApi.md#involveGroup) | **POST** /enterprise/tasks/{taskId}/groups/{groupId} | Involve a group with a task
*.TaskactionsApi* | [**involveUser**](docs/TaskactionsApi.md#involveUser) | **PUT** /enterprise/tasks/{taskId}/action/involve | Involve a user with a task
*.TaskactionsApi* | [**removeForm**](docs/TaskactionsApi.md#removeForm) | **DELETE** /enterprise/tasks/{taskId}/action/remove-form | Remove a form from a task
*.TaskactionsApi* | [**removeInvolvedUser**](docs/TaskactionsApi.md#removeInvolvedUser) | **DELETE** /enterprise/tasks/{taskId}/groups/{groupId} | Remove an involved group from a task
*.TaskactionsApi* | [**removeInvolvedUser**](docs/TaskactionsApi.md#removeInvolvedUser) | **PUT** /enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
*.TaskactionsApi* | [**resolveTask**](docs/TaskactionsApi.md#resolveTask) | **PUT** /enterprise/tasks/{taskId}/action/resolve | Resolve a task
*.TaskactionsApi* | [**unclaimTask**](docs/TaskactionsApi.md#unclaimTask) | **PUT** /enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
*.TaskformsApi* | [**completeTaskForm**](docs/TaskformsApi.md#completeTaskForm) | **POST** /enterprise/task-forms/{taskId} | Complete a task form
*.TaskformsApi* | [**getProcessInstanceVariables**](docs/TaskformsApi.md#getProcessInstanceVariables) | **GET** /enterprise/task-forms/{taskId}/variables | Get task variables
*.TaskformsApi* | [**getRestFieldValues**](docs/TaskformsApi.md#getRestFieldValues) | **GET** /enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve column field values
*.TaskformsApi* | [**getRestFieldValues**](docs/TaskformsApi.md#getRestFieldValues) | **GET** /enterprise/task-forms/{taskId}/form-values/{field} | Retrieve populated field values
*.TaskformsApi* | [**getTaskForm**](docs/TaskformsApi.md#getTaskForm) | **GET** /enterprise/task-forms/{taskId} | Get a task form
*.TaskformsApi* | [**saveTaskForm**](docs/TaskformsApi.md#saveTaskForm) | **POST** /enterprise/task-forms/{taskId}/save-form | Save a task form
*.TasksApi* | [**createIdentityLink**](docs/TasksApi.md#createIdentityLink) | **POST** /enterprise/tasks/{taskId}/identitylinks | List the users and groups involved with a task
*.TasksApi* | [**createNewTask**](docs/TasksApi.md#createNewTask) | **POST** /enterprise/tasks | Create a standalone task
*.TasksApi* | [**deleteIdentityLink**](docs/TasksApi.md#deleteIdentityLink) | **DELETE** /enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a task
*.TasksApi* | [**deleteTask**](docs/TasksApi.md#deleteTask) | **DELETE** /enterprise/tasks/{taskId} | Delete a task
*.TasksApi* | [**filterTasks**](docs/TasksApi.md#filterTasks) | **POST** /enterprise/tasks/filter | Filter a list of tasks
*.TasksApi* | [**getIdentityLinkType**](docs/TasksApi.md#getIdentityLinkType) | **GET** /enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a task
*.TasksApi* | [**getIdentityLinksForFamily**](docs/TasksApi.md#getIdentityLinksForFamily) | **GET** /enterprise/tasks/{taskId}/identitylinks/{family} | List either the users or groups involved with a process instance
*.TasksApi* | [**getIdentityLinks**](docs/TasksApi.md#getIdentityLinks) | **GET** /enterprise/tasks/{taskId}/identitylinks | getIdentityLinks
*.TasksApi* | [**getTaskAuditLog**](docs/TasksApi.md#getTaskAuditLog) | **GET** /enterprise/tasks/{taskId}/audit | Get the audit log for a task
*.TasksApi* | [**getTask**](docs/TasksApi.md#getTask) | **GET** /enterprise/tasks/{taskId} | Get a task
*.TasksApi* | [**listHistoricTasks**](docs/TasksApi.md#listHistoricTasks) | **POST** /enterprise/historic-tasks/query | Query historic tasks
*.TasksApi* | [**listTasks**](docs/TasksApi.md#listTasks) | **POST** /enterprise/tasks/query | List tasks
*.TasksApi* | [**updateTask**](docs/TasksApi.md#updateTask) | **PUT** /enterprise/tasks/{taskId} | Update a task
*.TaskvariablesApi* | [**createTaskVariable**](docs/TaskvariablesApi.md#createTaskVariable) | **POST** /enterprise/tasks/{taskId}/variables | Create variables
*.TaskvariablesApi* | [**deleteAllLocalTaskVariables**](docs/TaskvariablesApi.md#deleteAllLocalTaskVariables) | **DELETE** /enterprise/tasks/{taskId}/variables | Create or update variables
*.TaskvariablesApi* | [**deleteVariable**](docs/TaskvariablesApi.md#deleteVariable) | **DELETE** /enterprise/tasks/{taskId}/variables/{variableName} | Delete a variable
*.TaskvariablesApi* | [**getVariable**](docs/TaskvariablesApi.md#getVariable) | **GET** /enterprise/tasks/{taskId}/variables/{variableName} | Get a variable
*.TaskvariablesApi* | [**getVariables**](docs/TaskvariablesApi.md#getVariables) | **GET** /enterprise/tasks/{taskId}/variables | List variables
*.TaskvariablesApi* | [**updateVariable**](docs/TaskvariablesApi.md#updateVariable) | **PUT** /enterprise/tasks/{taskId}/variables/{variableName} | Update a variable
*.UserfiltersApi* | [**createUserProcessInstanceFilter**](docs/UserfiltersApi.md#createUserProcessInstanceFilter) | **POST** /enterprise/filters/processes | Create a process instance filter
*.UserfiltersApi* | [**createUserTaskFilter**](docs/UserfiltersApi.md#createUserTaskFilter) | **POST** /enterprise/filters/tasks | Create a task filter
*.UserfiltersApi* | [**deleteUserProcessInstanceFilter**](docs/UserfiltersApi.md#deleteUserProcessInstanceFilter) | **DELETE** /enterprise/filters/processes/{userFilterId} | Delete a process instance filter
*.UserfiltersApi* | [**deleteUserTaskFilter**](docs/UserfiltersApi.md#deleteUserTaskFilter) | **DELETE** /enterprise/filters/tasks/{userFilterId} | Delete a task filter
*.UserfiltersApi* | [**getUserProcessInstanceFilter**](docs/UserfiltersApi.md#getUserProcessInstanceFilter) | **GET** /enterprise/filters/processes/{userFilterId} | Get a process instance filter
*.UserfiltersApi* | [**getUserProcessInstanceFilters**](docs/UserfiltersApi.md#getUserProcessInstanceFilters) | **GET** /enterprise/filters/processes | List process instance filters
*.UserfiltersApi* | [**getUserTaskFilter**](docs/UserfiltersApi.md#getUserTaskFilter) | **GET** /enterprise/filters/tasks/{userFilterId} | Get a task filter
*.UserfiltersApi* | [**getUserTaskFilters**](docs/UserfiltersApi.md#getUserTaskFilters) | **GET** /enterprise/filters/tasks | List task filters
*.UserfiltersApi* | [**orderUserProcessInstanceFilters**](docs/UserfiltersApi.md#orderUserProcessInstanceFilters) | **PUT** /enterprise/filters/processes | Re-order the list of user process instance filters
*.UserfiltersApi* | [**orderUserTaskFilters**](docs/UserfiltersApi.md#orderUserTaskFilters) | **PUT** /enterprise/filters/tasks | Re-order the list of user task filters
*.UserfiltersApi* | [**updateUserProcessInstanceFilter**](docs/UserfiltersApi.md#updateUserProcessInstanceFilter) | **PUT** /enterprise/filters/processes/{userFilterId} | Update a process instance filter
*.UserfiltersApi* | [**updateUserTaskFilter**](docs/UserfiltersApi.md#updateUserTaskFilter) | **PUT** /enterprise/filters/tasks/{userFilterId} | Update a task filter
*.UserprofileApi* | [**changePassword**](docs/UserprofileApi.md#changePassword) | **POST** /enterprise/profile-password | Change user password
*.UserprofileApi* | [**getProfilePicture**](docs/UserprofileApi.md#getProfilePicture) | **GET** /enterprise/profile-picture | Retrieve user profile picture
*.UserprofileApi* | [**getProfile**](docs/UserprofileApi.md#getProfile) | **GET** /enterprise/profile | Get user profile
*.UserprofileApi* | [**updateProfile**](docs/UserprofileApi.md#updateProfile) | **POST** /enterprise/profile | Update user profile
*.UserprofileApi* | [**uploadProfilePicture**](docs/UserprofileApi.md#uploadProfilePicture) | **POST** /enterprise/profile-picture | Change user profile picture
*.UsersApi* | [**executeAction**](docs/UsersApi.md#executeAction) | **POST** /enterprise/users/{userId} | Execute an action for a specific user
*.UsersApi* | [**getProfilePicture**](docs/UsersApi.md#getProfilePicture) | **GET** /enterprise/users/{userId}/picture | Stream user profile picture
*.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /enterprise/users/{userId} | Get a user
*.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /enterprise/users | Query users
*.UsersApi* | [**requestPasswordReset**](docs/UsersApi.md#requestPasswordReset) | **POST** /enterprise/idm/passwords | Request a password reset
*.UsersApi* | [**updateUser**](docs/UsersApi.md#updateUser) | **PUT** /enterprise/users/{userId} | Update a user
*ActivitiPublicRestApi.ReportApi* | [**createDefaultReports**](docs/ReportApi.md#createDefaultReports) |   **POST** /app/rest/reporting/default-reports | Create the default reports
*ActivitiPublicRestApi.ReportApi* | [**getReportList**](docs/ReportApi.md#getReportList) | **GET** /app/rest/reporting/reports |  Retrieve the available report list
*ActivitiPublicRestApi.ReportApi* | [**getReportParams**](docs/ReportApi.md#getReportParams) | **GET** /app/rest/reporting/report-params/{reportId} |  Retrieve the parameters referring to the reportId
*ActivitiPublicRestApi.ReportApi* | [**getProcessDefinitions**](docs/ReportApi.md#getProcessDefinitions) | **GET** /app/rest/reporting/process-definitions |  Retrieve the process definition list for all the apps.
*ActivitiPublicRestApi.ReportApi* | [**getTasksByProcessDefinitionId**](docs/ReportApi.md#getTasksByProcessDefinitionId) | **GET** /app/rest/reporting/report-params/{reportId}/tasks | Retrieves all tasks that refer to the processDefinitionId
*ActivitiPublicRestApi.ReportApi* | [**getReportsByParams**](docs/ReportApi.md#getReportsByParams) | **GET** /app/rest/reporting/report-params/{reportId} | Generate the reports
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getHistoricEditorDisplayJsonClient**](docs/ModelJsonBpmnApi.md#getHistoricEditorDisplayJsonClient) | **GET** /api/enterprise/models/{processModelId}/history/{processModelHistoryId}/model-json | Export a previous process definition model to JSON
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getEditorDisplayJsonClient**](docs/ModelJsonBpmnApi.md#getEditorDisplayJsonClient) | **GET** /api/enterprise/models/{processModelId}/model-json | Export a process definition model to JSON
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getModelJSON**](docs/ModelJsonBpmnApi.md#getModelJSON) | **GET** /app/rest/process-definitions/{processDefinitionId}/model-json| Export a process definition model to JSON
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getModelJSONForProcessDefinition**](docs/ModelJsonBpmnApi.md#getModelJSONForProcessDefinition) | **GET** /app/rest/process-instances/{processInstanceId}/model-json | Export a process instances model to JSON
*ActivitiPublicRestApi.TemporaryApi* | [**completeTasks**](docs/TemporaryApi.md#completeTasks) | **GET** /api/enterprise/temporary/generate-report-data/complete-tasks | completeTasks
*ActivitiPublicRestApi.TemporaryApi* | [**generateData**](docs/TemporaryApi.md#generateData) | **GET** /api/enterprise/temporary/generate-report-data/start-process | generateData
*ActivitiPublicRestApi.TemporaryApi* | [**getHeaders**](docs/TemporaryApi.md#getHeaders) | **GET** /api/enterprise/temporary/example-headers | getHeaders
*ActivitiPublicRestApi.TemporaryApi* | [**getOptions**](docs/TemporaryApi.md#getOptions) | **GET** /api/enterprise/temporary/example-options | getOptions

## Documentation for Models

 - [AbstractGroupRepresentation](docs/AbstractGroupRepresentation.md)
 - [AbstractUserRepresentation](docs/AbstractUserRepresentation.md)
 - [AccountRepresentation](docs/AccountRepresentation.md)
 - [AddGroupCapabilitiesRepresentation](docs/AddGroupCapabilitiesRepresentation.md)
 - [AlfrescoContentRepresentation](docs/AlfrescoContentRepresentation.md)
 - [AlfrescoEndpointRepresentation](docs/AlfrescoEndpointRepresentation.md)
 - [AlfrescoNetworkRepresenation](docs/AlfrescoNetworkRepresenation.md)
 - [AlfrescoSiteRepresenation](docs/AlfrescoSiteRepresenation.md)
 - [AppDefinition](docs/AppDefinition.md)
 - [AppDefinitionPublishRepresentation](docs/AppDefinitionPublishRepresentation.md)
 - [AppDefinitionRepresentation](docs/AppDefinitionRepresentation.md)
 - [AppDefinitionSaveRepresentation](docs/AppDefinitionSaveRepresentation.md)
 - [AppDefinitionUpdateResultRepresentation](docs/AppDefinitionUpdateResultRepresentation.md)
 - [AppDeploymentRepresentation](docs/AppDeploymentRepresentation.md)
 - [AppModelDefinition](docs/AppModelDefinition.md)
 - [AssigneeIdentifierRepresentation](docs/AssigneeIdentifierRepresentation.md)
 - [AuditCalculatedValueRepresentation](docs/AuditCalculatedValueRepresentation.md)
 - [AuditDecisionExpressionInfoRepresentation](docs/AuditDecisionExpressionInfoRepresentation.md)
 - [AuditDecisionInfoRepresentation](docs/AuditDecisionInfoRepresentation.md)
 - [AuditDecisionRuleInfoRepresentation](docs/AuditDecisionRuleInfoRepresentation.md)
 - [AuditLogEntryRepresentation](docs/AuditLogEntryRepresentation.md)
 - [AuditLogFormDataRepresentation](docs/AuditLogFormDataRepresentation.md)
 - [BoxContent](docs/BoxContent.md)
 - [BoxUserAccountCredentialsRepresentation](docs/BoxUserAccountCredentialsRepresentation.md)
 - [BulkUserUpdateRepresentation](docs/BulkUserUpdateRepresentation.md)
 - [ChangePasswordRepresentation](docs/ChangePasswordRepresentation.md)
 - [ChecklistOrderRepresentation](docs/ChecklistOrderRepresentation.md)
 - [CommentAuditInfo](docs/CommentAuditInfo.md)
 - [CommentRepresentation](docs/CommentRepresentation.md)
 - [CompleteFormRepresentation](docs/CompleteFormRepresentation.md)
 - [ConditionRepresentation](docs/ConditionRepresentation.md)
 - [CreateEndpointBasicAuthRepresentation](docs/CreateEndpointBasicAuthRepresentation.md)
 - [CreateProcessInstanceRepresentation](docs/CreateProcessInstanceRepresentation.md)
 - [CreateTenantRepresentation](docs/CreateTenantRepresentation.md)
 - [DataSourceConfigRepresentation](docs/DataSourceConfigRepresentation.md)
 - [DataSourceRepresentation](docs/DataSourceRepresentation.md)
 - [DecisionAuditRepresentation](docs/DecisionAuditRepresentation.md)
 - [DecisionTaskRepresentation](docs/DecisionTaskRepresentation.md)
 - [EndpointBasicAuthRepresentation](docs/EndpointBasicAuthRepresentation.md)
 - [EndpointConfigurationRepresentation](docs/EndpointConfigurationRepresentation.md)
 - [EndpointRequestHeaderRepresentation](docs/EndpointRequestHeaderRepresentation.md)
 - [EntityAttributeScopeRepresentation](docs/EntityAttributeScopeRepresentation.md)
 - [EntityVariableScopeRepresentation](docs/EntityVariableScopeRepresentation.md)
 - [FieldValueInfo](docs/FieldValueInfo.md)
 - [File](docs/File.md)
 - [FormDefinitionRepresentation](docs/FormDefinitionRepresentation.md)
 - [FormFieldRepresentation](docs/FormFieldRepresentation.md)
 - [FormIdentifierRepresentation](docs/FormIdentifierRepresentation.md)
 - [FormJavascriptEventRepresentation](docs/FormJavascriptEventRepresentation.md)
 - [FormOutcomeRepresentation](docs/FormOutcomeRepresentation.md)
 - [FormRepresentation](docs/FormRepresentation.md)
 - [FormSaveRepresentation](docs/FormSaveRepresentation.md)
 - [FormScopeRepresentation](docs/FormScopeRepresentation.md)
 - [FormTabRepresentation](docs/FormTabRepresentation.md)
 - [FormValueRepresentation](docs/FormValueRepresentation.md)
 - [FormVariableRepresentation](docs/FormVariableRepresentation.md)
 - [GlobalDateFormatRepresentation](docs/GlobalDateFormatRepresentation.md)
 - [GoogleDriveContent](docs/GoogleDriveContent.md)
 - [GroupCapabilityRepresentation](docs/GroupCapabilityRepresentation.md)
 - [GroupRepresentation](docs/GroupRepresentation.md)
 - [HistoricProcessInstanceQueryRepresentation](docs/HistoricProcessInstanceQueryRepresentation.md)
 - [HistoricTaskInstanceQueryRepresentation](docs/HistoricTaskInstanceQueryRepresentation.md)
 - [IdentityLinkRepresentation](docs/IdentityLinkRepresentation.md)
 - [ImageUploadRepresentation](docs/ImageUploadRepresentation.md)
 - [JsonNode](docs/JsonNode.md)
 - [LayoutRepresentation](docs/LayoutRepresentation.md)
 - [LightAppRepresentation](docs/LightAppRepresentation.md)
 - [LightGroupRepresentation](docs/LightGroupRepresentation.md)
 - [LightTenantRepresentation](docs/LightTenantRepresentation.md)
 - [LightUserRepresentation](docs/LightUserRepresentation.md)
 - [ModelRepresentation](docs/ModelRepresentation.md)
 - [NamedObject](docs/NamedObject.md)
 - [ObjectNode](docs/ObjectNode.md)
 - [OptionRepresentation](docs/OptionRepresentation.md)
 - [PasswordValidationConstraints](docs/PasswordValidationConstraints.md)
 - [ProcessContentRepresentation](docs/ProcessContentRepresentation.md)
 - [ProcessDefinitionMetaDataRepresentation](docs/ProcessDefinitionMetaDataRepresentation.md)
 - [ProcessDefinitionRepresentation](docs/ProcessDefinitionRepresentation.md)
 - [ProcessInstanceAuditInfoRepresentation](docs/ProcessInstanceAuditInfoRepresentation.md)
 - [ProcessInstanceFilterRepresentation](docs/ProcessInstanceFilterRepresentation.md)
 - [ProcessInstanceFilterRequestRepresentation](docs/ProcessInstanceFilterRequestRepresentation.md)
 - [ProcessInstanceQueryRepresentation](docs/ProcessInstanceQueryRepresentation.md)
 - [ProcessInstanceRepresentation](docs/ProcessInstanceRepresentation.md)
 - [ProcessInstanceVariableRepresentation](docs/ProcessInstanceVariableRepresentation.md)
 - [ProcessScopeIdentifierRepresentation](docs/ProcessScopeIdentifierRepresentation.md)
 - [ProcessScopeRepresentation](docs/ProcessScopeRepresentation.md)
 - [ProcessScopesRequestRepresentation](docs/ProcessScopesRequestRepresentation.md)
 - [PublishIdentityInfoRepresentation](docs/PublishIdentityInfoRepresentation.md)
 - [QueryVariable](docs/QueryVariable.md)
 - [RelatedContentRepresentation](docs/RelatedContentRepresentation.md)
 - [ResetPasswordRepresentation](docs/ResetPasswordRepresentation.md)
 - [RestVariable](docs/RestVariable.md)
 - [ResultListDataRepresentationAbstractUserRepresentation](docs/ResultListDataRepresentationAbstractUserRepresentation.md)
 - [ResultListDataRepresentationAccountRepresentation](docs/ResultListDataRepresentationAccountRepresentation.md)
 - [ResultListDataRepresentationAlfrescoContentRepresentation](docs/ResultListDataRepresentationAlfrescoContentRepresentation.md)
 - [ResultListDataRepresentationAlfrescoEndpointRepresentation](docs/ResultListDataRepresentationAlfrescoEndpointRepresentation.md)
 - [ResultListDataRepresentationAlfrescoNetworkRepresenation](docs/ResultListDataRepresentationAlfrescoNetworkRepresenation.md)
 - [ResultListDataRepresentationAlfrescoSiteRepresenation](docs/ResultListDataRepresentationAlfrescoSiteRepresenation.md)
 - [ResultListDataRepresentationAppDefinitionRepresentation](docs/ResultListDataRepresentationAppDefinitionRepresentation.md)
 - [ResultListDataRepresentationAppDeploymentRepresentation](docs/ResultListDataRepresentationAppDeploymentRepresentation.md)
 - [ResultListDataRepresentationBoxContent](docs/ResultListDataRepresentationBoxContent.md)
 - [ResultListDataRepresentationCommentRepresentation](docs/ResultListDataRepresentationCommentRepresentation.md)
 - [ResultListDataRepresentationDataSourceRepresentation](docs/ResultListDataRepresentationDataSourceRepresentation.md)
 - [ResultListDataRepresentationDecisionAuditRepresentation](docs/ResultListDataRepresentationDecisionAuditRepresentation.md)
 - [ResultListDataRepresentationDecisionTaskRepresentation](docs/ResultListDataRepresentationDecisionTaskRepresentation.md)
 - [ResultListDataRepresentationFormRepresentation](docs/ResultListDataRepresentationFormRepresentation.md)
 - [ResultListDataRepresentationGoogleDriveContent](docs/ResultListDataRepresentationGoogleDriveContent.md)
 - [ResultListDataRepresentationLightGroupRepresentation](docs/ResultListDataRepresentationLightGroupRepresentation.md)
 - [ResultListDataRepresentationLightUserRepresentation](docs/ResultListDataRepresentationLightUserRepresentation.md)
 - [ResultListDataRepresentationModelRepresentation](docs/ResultListDataRepresentationModelRepresentation.md)
 - [ResultListDataRepresentationProcessContentRepresentation](docs/ResultListDataRepresentationProcessContentRepresentation.md)
 - [ResultListDataRepresentationProcessDefinitionRepresentation](docs/ResultListDataRepresentationProcessDefinitionRepresentation.md)
 - [ResultListDataRepresentationProcessInstanceRepresentation](docs/ResultListDataRepresentationProcessInstanceRepresentation.md)
 - [ResultListDataRepresentationRelatedContentRepresentation](docs/ResultListDataRepresentationRelatedContentRepresentation.md)
 - [ResultListDataRepresentationRuntimeDecisionTableRepresentation](docs/ResultListDataRepresentationRuntimeDecisionTableRepresentation.md)
 - [ResultListDataRepresentationRuntimeFormRepresentation](docs/ResultListDataRepresentationRuntimeFormRepresentation.md)
 - [ResultListDataRepresentationSubmittedFormRepresentation](docs/ResultListDataRepresentationSubmittedFormRepresentation.md)
 - [ResultListDataRepresentationTaskRepresentation](docs/ResultListDataRepresentationTaskRepresentation.md)
 - [ResultListDataRepresentationUserProcessInstanceFilterRepresentation](docs/ResultListDataRepresentationUserProcessInstanceFilterRepresentation.md)
 - [ResultListDataRepresentationUserTaskFilterRepresentation](docs/ResultListDataRepresentationUserTaskFilterRepresentation.md)
 - [RuntimeAppDefinitionSaveRepresentation](docs/RuntimeAppDefinitionSaveRepresentation.md)
 - [RuntimeDecisionTableRepresentation](docs/RuntimeDecisionTableRepresentation.md)
 - [RuntimeFormRepresentation](docs/RuntimeFormRepresentation.md)
 - [SaveFormRepresentation](docs/SaveFormRepresentation.md)
 - [SubmittedFormRepresentation](docs/SubmittedFormRepresentation.md)
 - [SyncLogEntryRepresentation](docs/SyncLogEntryRepresentation.md)
 - [SystemPropertiesRepresentation](docs/SystemPropertiesRepresentation.md)
 - [TaskAuditInfoRepresentation](docs/TaskAuditInfoRepresentation.md)
 - [TaskFilterRepresentation](docs/TaskFilterRepresentation.md)
 - [TaskFilterRequestRepresentation](docs/TaskFilterRequestRepresentation.md)
 - [TaskQueryRepresentation](docs/TaskQueryRepresentation.md)
 - [TaskRepresentation](docs/TaskRepresentation.md)
 - [TaskUpdateRepresentation](docs/TaskUpdateRepresentation.md)
 - [TenantEvent](docs/TenantEvent.md)
 - [TenantRepresentation](docs/TenantRepresentation.md)
 - [UserAccountCredentialsRepresentation](docs/UserAccountCredentialsRepresentation.md)
 - [UserActionRepresentation](docs/UserActionRepresentation.md)
 - [UserFilterOrderRepresentation](docs/UserFilterOrderRepresentation.md)
 - [UserIdentifierRepresentation](docs/UserIdentifierRepresentation.md)
 - [UserProcessInstanceFilterRepresentation](docs/UserProcessInstanceFilterRepresentation.md)
 - [UserRepresentation](docs/UserRepresentation.md)
 - [UserTaskFilterRepresentation](docs/UserTaskFilterRepresentation.md)
 - [ValidationErrorRepresentation](docs/ValidationErrorRepresentation.md)
 - [VariableMappingRepresentation](docs/VariableMappingRepresentation.md)
 - [VariableScopeRepresentation](docs/VariableScopeRepresentation.md)

