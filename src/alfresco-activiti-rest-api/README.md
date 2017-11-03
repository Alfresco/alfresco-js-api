# Alfresco Activiti Rest Api

ActivitiPublicRestApi - JavaScript client for activiti-public-rest-api
The Alfresco Activiti BPM Suite comes with a REST API. It includes both an Enterprise equivalent of the Activiti Open Source REST API exposing the generic Activiti Engine operations, and a dedicated set op REST API endpoints specific for the functionality in the Alfresco Activiti BPM Suite.      

- API version: 1.4.0
- Package version: 1.4.0


## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080/activiti-app*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActivitiPublicRestApi.AboutApi* | [**getAppVersion**](docs/AboutApi.md#getAppVersion) | **GET** /api/enterprise/app-version | Server Information
*ActivitiPublicRestApi.AdminEndpointsApi* | [**createBasicAuthConfiguration**](docs/AdminEndpointsApi.md#createBasicAuthConfiguration) | **POST** /api/enterprise/admin/basic-auths | createBasicAuthConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**createEndpointConfiguration**](docs/AdminEndpointsApi.md#createEndpointConfiguration) | **POST** /api/enterprise/admin/endpoints | createEndpointConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getBasicAuthConfiguration**](docs/AdminEndpointsApi.md#getBasicAuthConfiguration) | **GET** /api/enterprise/admin/basic-auths/{basicAuthId} | getBasicAuthConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getBasicAuthConfigurations**](docs/AdminEndpointsApi.md#getBasicAuthConfigurations) | **GET** /api/enterprise/admin/basic-auths | getBasicAuthConfigurations
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getEndpointConfiguration**](docs/AdminEndpointsApi.md#getEndpointConfiguration) | **GET** /api/enterprise/admin/endpoints/{endpointConfigurationId} | getEndpointConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getEndpointConfigurations**](docs/AdminEndpointsApi.md#getEndpointConfigurations) | **GET** /api/enterprise/admin/endpoints | getEndpointConfigurations
*ActivitiPublicRestApi.AdminEndpointsApi* | [**removeBasicAuthonfiguration**](docs/AdminEndpointsApi.md#removeBasicAuthonfiguration) | **DELETE** /api/enterprise/admin/basic-auths/{basicAuthId} | removeBasicAuthonfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**removeEndpointConfiguration**](docs/AdminEndpointsApi.md#removeEndpointConfiguration) | **DELETE** /api/enterprise/admin/endpoints/{endpointConfigurationId} | removeEndpointConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**updateBasicAuthConfiguration**](docs/AdminEndpointsApi.md#updateBasicAuthConfiguration) | **PUT** /api/enterprise/admin/basic-auths/{basicAuthId} | updateBasicAuthConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**updateEndpointConfiguration**](docs/AdminEndpointsApi.md#updateEndpointConfiguration) | **PUT** /api/enterprise/admin/endpoints/{endpointConfigurationId} | updateEndpointConfiguration
*ActivitiPublicRestApi.AdminGroupsApi* | [**activate**](docs/AdminGroupsApi.md#activate) | **POST** /api/enterprise/admin/groups/{groupId}/action/activate | activate
*ActivitiPublicRestApi.AdminGroupsApi* | [**addAllUsersToGroup**](docs/AdminGroupsApi.md#addAllUsersToGroup) | **POST** /api/enterprise/admin/groups/{groupId}/add-all-users | addAllUsersToGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**addGroupCapabilities**](docs/AdminGroupsApi.md#addGroupCapabilities) | **POST** /api/enterprise/admin/groups/{groupId}/capabilities | addGroupCapabilities
*ActivitiPublicRestApi.AdminGroupsApi* | [**addGroupMember**](docs/AdminGroupsApi.md#addGroupMember) | **POST** /api/enterprise/admin/groups/{groupId}/members/{userId} | addGroupMember
*ActivitiPublicRestApi.AdminGroupsApi* | [**addRelatedGroup**](docs/AdminGroupsApi.md#addRelatedGroup) | **POST** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | addRelatedGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**createNewGroup**](docs/AdminGroupsApi.md#createNewGroup) | **POST** /api/enterprise/admin/groups | createNewGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteGroupCapability**](docs/AdminGroupsApi.md#deleteGroupCapability) | **DELETE** /api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | deleteGroupCapability
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteGroupMember**](docs/AdminGroupsApi.md#deleteGroupMember) | **DELETE** /api/enterprise/admin/groups/{groupId}/members/{userId} | deleteGroupMember
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteGroup**](docs/AdminGroupsApi.md#deleteGroup) | **DELETE** /api/enterprise/admin/groups/{groupId} | deleteGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteRelatedGroup**](docs/AdminGroupsApi.md#deleteRelatedGroup) | **DELETE** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | deleteRelatedGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**getCapabilities**](docs/AdminGroupsApi.md#getCapabilities) | **GET** /api/enterprise/admin/groups/{groupId}/potential-capabilities | getCapabilities
*ActivitiPublicRestApi.AdminGroupsApi* | [**getGroupUsers**](docs/AdminGroupsApi.md#getGroupUsers) | **GET** /api/enterprise/admin/groups/{groupId}/users | getGroupUsers
*ActivitiPublicRestApi.AdminGroupsApi* | [**getGroup**](docs/AdminGroupsApi.md#getGroup) | **GET** /api/enterprise/admin/groups/{groupId} | getGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**getGroups**](docs/AdminGroupsApi.md#getGroups) | **GET** /api/enterprise/admin/groups | getGroups
*ActivitiPublicRestApi.AdminGroupsApi* | [**getRelatedGroups**](docs/AdminGroupsApi.md#getRelatedGroups) | **GET** /api/enterprise/admin/groups/{groupId}/related-groups | getRelatedGroups
*ActivitiPublicRestApi.AdminGroupsApi* | [**updateGroup**](docs/AdminGroupsApi.md#updateGroup) | **PUT** /api/enterprise/admin/groups/{groupId} | updateGroup
*ActivitiPublicRestApi.AdminTenantsApi* | [**createTenant**](docs/AdminTenantsApi.md#createTenant) | **POST** /api/enterprise/admin/tenants | Create a new tenant
*ActivitiPublicRestApi.AdminTenantsApi* | [**deleteTenant**](docs/AdminTenantsApi.md#deleteTenant) | **DELETE** /api/enterprise/admin/tenants/{tenantId} | Delete a tenant
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenantEvents**](docs/AdminTenantsApi.md#getTenantEvents) | **GET** /api/enterprise/admin/tenants/{tenantId}/events | Get tenant events
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenantLogo**](docs/AdminTenantsApi.md#getTenantLogo) | **GET** /api/enterprise/admin/tenants/{tenantId}/logo | Get tenant logo
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenant**](docs/AdminTenantsApi.md#getTenant) | **GET** /api/enterprise/admin/tenants/{tenantId} | Get tenant details
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenants**](docs/AdminTenantsApi.md#getTenants) | **GET** /api/enterprise/admin/tenants | Get all tenants
*ActivitiPublicRestApi.AdminTenantsApi* | [**update**](docs/AdminTenantsApi.md#update) | **PUT** /api/enterprise/admin/tenants/{tenantId} | Update a tenant
*ActivitiPublicRestApi.AdminTenantsApi* | [**uploadTenantLogo**](docs/AdminTenantsApi.md#uploadTenantLogo) | **POST** /api/enterprise/admin/tenants/{tenantId}/logo | Update tenant logo
*ActivitiPublicRestApi.AdminUsersApi* | [**bulkUpdateUsers**](docs/AdminUsersApi.md#bulkUpdateUsers) | **PUT** /api/enterprise/admin/users | Bulk Update a list of users
*ActivitiPublicRestApi.AdminUsersApi* | [**createNewUser**](docs/AdminUsersApi.md#createNewUser) | **POST** /api/enterprise/admin/users | Create a new user
*ActivitiPublicRestApi.AdminUsersApi* | [**getUser**](docs/AdminUsersApi.md#getUser) | **GET** /api/enterprise/admin/users/{userId} | Retrieve user information
*ActivitiPublicRestApi.AdminUsersApi* | [**getUsers**](docs/AdminUsersApi.md#getUsers) | **GET** /api/enterprise/admin/users | Get a list of users
*ActivitiPublicRestApi.AdminUsersApi* | [**updateUserDetails**](docs/AdminUsersApi.md#updateUserDetails) | **PUT** /api/enterprise/admin/users/{userId} | Update user details
*ActivitiPublicRestApi.AlfrescoApi* | [**confirmAuthorisation**](docs/AlfrescoApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*ActivitiPublicRestApi.AlfrescoApi* | [**getAllNetworks**](docs/AlfrescoApi.md#getAllNetworks) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*ActivitiPublicRestApi.AlfrescoApi* | [**getAllSites**](docs/AlfrescoApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*ActivitiPublicRestApi.AlfrescoApi* | [**getAllSites**](docs/AlfrescoApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInFolder**](docs/AlfrescoApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInFolder**](docs/AlfrescoApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInSite**](docs/AlfrescoApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInSite**](docs/AlfrescoApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.AlfrescoApi* | [**getRepositories**](docs/AlfrescoApi.md#getRepositories) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
*ActivitiPublicRestApi.AppsApi* | [**deployAppDefinitions**](docs/AppsApi.md#deployAppDefinitions) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
*ActivitiPublicRestApi.AppsApi* | [**exportAppDefinition**](docs/AppsApi.md#exportAppDefinition) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
*ActivitiPublicRestApi.AppsApi* | [**getAppDefinitions**](docs/AppsApi.md#getAppDefinitions) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps
*ActivitiPublicRestApi.AppsApi* | [**importAppDefinition**](docs/AppsApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/import | Import App Definition
*ActivitiPublicRestApi.AppsApi* | [**importAppDefinition**](docs/AppsApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
*ActivitiPublicRestApi.AppsApi* | [**publishAppDefinition**](docs/AppsApi.md#publishAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App
*ActivitiPublicRestApi.AppsDefinitionApi* | [**exportAppDefinition**](docs/AppsDefinitionApi.md#exportAppDefinition) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
*ActivitiPublicRestApi.AppsDefinitionApi* | [**importAppDefinition**](docs/AppsDefinitionApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/import | Import App Definition
*ActivitiPublicRestApi.AppsDefinitionApi* | [**importAppDefinition**](docs/AppsDefinitionApi.md#importAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
*ActivitiPublicRestApi.AppsDefinitionApi* | [**publishAppDefinition**](docs/AppsDefinitionApi.md#publishAppDefinition) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App
*ActivitiPublicRestApi.AppsRuntimeApi* | [**deployAppDefinitions**](docs/AppsRuntimeApi.md#deployAppDefinitions) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
*ActivitiPublicRestApi.AppsRuntimeApi* | [**getAppDefinitions**](docs/AppsRuntimeApi.md#getAppDefinitions) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps
*ActivitiPublicRestApi.CommentsApi* | [**addProcessInstanceComment**](docs/CommentsApi.md#addProcessInstanceComment) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
*ActivitiPublicRestApi.CommentsApi* | [**addTaskComment**](docs/CommentsApi.md#addTaskComment) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
*ActivitiPublicRestApi.CommentsApi* | [**getProcessInstanceComments**](docs/CommentsApi.md#getProcessInstanceComments) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
*ActivitiPublicRestApi.CommentsApi* | [**getTaskComments**](docs/CommentsApi.md#getTaskComments) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnProcessInstance**](docs/ContentApi.md#createRelatedContentOnProcessInstance) | **POST** /api/enterprise/process-instances/{processInstanceId}/content | createRelatedContentOnProcessInstance
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnProcessInstance**](docs/ContentApi.md#createRelatedContentOnProcessInstance) | **POST** /api/enterprise/process-instances/{processInstanceId}/raw-content | createRelatedContentOnProcessInstance
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnTask**](docs/ContentApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnTask**](docs/ContentApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
*ActivitiPublicRestApi.ContentApi* | [**createTemporaryRawRelatedContent**](docs/ContentApi.md#createTemporaryRawRelatedContent) | **POST** /api/enterprise/content/raw | createTemporaryRawRelatedContent
*ActivitiPublicRestApi.ContentApi* | [**createTemporaryRelatedContent**](docs/ContentApi.md#createTemporaryRelatedContent) | **POST** /api/enterprise/content | createTemporaryRelatedContent
*ActivitiPublicRestApi.ContentApi* | [**deleteContent**](docs/ContentApi.md#deleteContent) | **DELETE** /api/enterprise/content/{contentId} | deleteContent
*ActivitiPublicRestApi.ContentApi* | [**getContent**](docs/ContentApi.md#getContent) | **GET** /api/enterprise/content/{contentId} | getContent
*ActivitiPublicRestApi.ContentApi* | [**getProcessInstanceContent**](docs/ContentApi.md#getProcessInstanceContent) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
*ActivitiPublicRestApi.ContentApi* | [**getRawContent**](docs/ContentApi.md#getRawContent) | **GET** /api/enterprise/content/{contentId}/raw | getRawContent
*ActivitiPublicRestApi.ContentApi* | [**getRelatedContentForProcessInstance**](docs/ContentApi.md#getRelatedContentForProcessInstance) | **GET** /api/enterprise/process-instances/{processInstanceId}/content | getRelatedContentForProcessInstance
*ActivitiPublicRestApi.ContentApi* | [**getRelatedContentForTask**](docs/ContentApi.md#getRelatedContentForTask) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task
*ActivitiPublicRestApi.ContentRenditionApi* | [**getRawContent**](docs/ContentRenditionApi.md#getRawContent) | **GET** /api/enterprise/content/{contentId}/rendition/{renditionType} | Retrieve Raw Content
*ActivitiPublicRestApi.EditorApi* | [**getFormHistory**](docs/EditorApi.md#getFormHistory) | **GET** /api/enterprise/editor/form-models/{formId}/history/{formHistoryId} | getFormHistory
*ActivitiPublicRestApi.EditorApi* | [**getForm**](docs/EditorApi.md#getForm) | **GET** /api/enterprise/editor/form-models/{formId} | getForm
*ActivitiPublicRestApi.EditorApi* | [**getForms**](docs/EditorApi.md#getForms) | **GET** /api/enterprise/editor/form-models/values | getForms
*ActivitiPublicRestApi.EditorApi* | [**saveForm**](docs/EditorApi.md#saveForm) | **PUT** /api/enterprise/editor/form-models/{formId} | saveForm
*ActivitiPublicRestApi.EditorApi* | [**validateModel**](docs/EditorApi.md#validateModel) | **PUT** /api/enterprise/editor/form-models/{formId}/validate | validateModel
*ActivitiPublicRestApi.GroupsApi* | [**getGroups**](docs/GroupsApi.md#getGroups) | **GET** /api/enterprise/groups | List groups
*ActivitiPublicRestApi.GroupsApi* | [**getUsersForGroup**](docs/GroupsApi.md#getUsersForGroup) | **GET** /api/enterprise/groups/{groupId}/users | List users member of a specific group
*ActivitiPublicRestApi.IDMSyncApi* | [**getLogFile**](docs/IDMSyncApi.md#getLogFile) | **GET** /api/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | getLogFile
*ActivitiPublicRestApi.IDMSyncApi* | [**getSyncLogEntries**](docs/IDMSyncApi.md#getSyncLogEntries) | **GET** /api/enterprise/idm-sync-log-entries | getSyncLogEntries
*ActivitiPublicRestApi.IntegrationApi* | [**confirmAuthorisation**](docs/IntegrationApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*ActivitiPublicRestApi.IntegrationApi* | [**confirmAuthorisation**](docs/IntegrationApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
*ActivitiPublicRestApi.IntegrationApi* | [**confirmAuthorisation**](docs/IntegrationApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
*ActivitiPublicRestApi.IntegrationApi* | [**createRepositoryAccount**](docs/IntegrationApi.md#createRepositoryAccount) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
*ActivitiPublicRestApi.IntegrationApi* | [**deleteRepositoryAccount**](docs/IntegrationApi.md#deleteRepositoryAccount) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
*ActivitiPublicRestApi.IntegrationApi* | [**getAllNetworks**](docs/IntegrationApi.md#getAllNetworks) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*ActivitiPublicRestApi.IntegrationApi* | [**getAllSites**](docs/IntegrationApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationApi* | [**getAllSites**](docs/IntegrationApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationApi* | [**getBoxPluginStatus**](docs/IntegrationApi.md#getBoxPluginStatus) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInFolder**](docs/IntegrationApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInFolder**](docs/IntegrationApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInSite**](docs/IntegrationApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInSite**](docs/IntegrationApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationApi* | [**getFiles**](docs/IntegrationApi.md#getFiles) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
*ActivitiPublicRestApi.IntegrationApi* | [**getFiles**](docs/IntegrationApi.md#getFiles) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders
*ActivitiPublicRestApi.IntegrationApi* | [**getRepositories**](docs/IntegrationApi.md#getRepositories) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
*ActivitiPublicRestApi.IntegrationApi* | [**getRepositoryAccount**](docs/IntegrationApi.md#getRepositoryAccount) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
*ActivitiPublicRestApi.IntegrationApi* | [**updateRepositoryAccount**](docs/IntegrationApi.md#updateRepositoryAccount) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account
*ActivitiPublicRestApi.IntegrationAccountApi* | [**getAccounts**](docs/IntegrationAccountApi.md#getAccounts) | **GET** /api/enterprise/account/integration | Retrieve Alfresco account information
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**confirmAuthorisation**](docs/IntegrationAlfrescoCloudApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getAllNetworks**](docs/IntegrationAlfrescoCloudApi.md#getAllNetworks) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getAllSites**](docs/IntegrationAlfrescoCloudApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getContentInFolder**](docs/IntegrationAlfrescoCloudApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getContentInSite**](docs/IntegrationAlfrescoCloudApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getAllSites**](docs/IntegrationAlfrescoOnPremiseApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getContentInFolder**](docs/IntegrationAlfrescoOnPremiseApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getContentInSite**](docs/IntegrationAlfrescoOnPremiseApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getRepositories**](docs/IntegrationAlfrescoOnPremiseApi.md#getRepositories) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
*ActivitiPublicRestApi.IntegrationBoxApi* | [**confirmAuthorisation**](docs/IntegrationBoxApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
*ActivitiPublicRestApi.IntegrationBoxApi* | [**createRepositoryAccount**](docs/IntegrationBoxApi.md#createRepositoryAccount) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
*ActivitiPublicRestApi.IntegrationBoxApi* | [**deleteRepositoryAccount**](docs/IntegrationBoxApi.md#deleteRepositoryAccount) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
*ActivitiPublicRestApi.IntegrationBoxApi* | [**getBoxPluginStatus**](docs/IntegrationBoxApi.md#getBoxPluginStatus) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
*ActivitiPublicRestApi.IntegrationBoxApi* | [**getFiles**](docs/IntegrationBoxApi.md#getFiles) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
*ActivitiPublicRestApi.IntegrationBoxApi* | [**getRepositoryAccount**](docs/IntegrationBoxApi.md#getRepositoryAccount) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
*ActivitiPublicRestApi.IntegrationBoxApi* | [**updateRepositoryAccount**](docs/IntegrationBoxApi.md#updateRepositoryAccount) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account
*ActivitiPublicRestApi.IntegrationDriveApi* | [**confirmAuthorisation**](docs/IntegrationDriveApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
*ActivitiPublicRestApi.IntegrationDriveApi* | [**getFiles**](docs/IntegrationDriveApi.md#getFiles) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders
*ActivitiPublicRestApi.ModelBpmnApi* | [**getHistoricProcessModelBpmn20Xml**](docs/ModelBpmnApi.md#getHistoricProcessModelBpmn20Xml) | **GET** /api/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a previous process definition model to a BPMN 2.0 xml file
*ActivitiPublicRestApi.ModelBpmnApi* | [**getProcessModelBpmn20Xml**](docs/ModelBpmnApi.md#getProcessModelBpmn20Xml) | **GET** /api/enterprise/models/{processModelId}/bpmn20 | Export a process definition model to a BPMN 2.0 xml file
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getHistoricEditorDisplayJsonClient**](docs/ModelJsonBpmnApi.md#getHistoricEditorDisplayJsonClient) | **GET** /api/enterprise/models/{processModelId}/history/{processModelHistoryId}/model-json | Export a previous process definition model to JSON
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getEditorDisplayJsonClient**](docs/ModelJsonBpmnApi.md#getEditorDisplayJsonClient) | **GET** /api/enterprise/models/{processModelId}/model-json | Export a process definition model to JSON
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getModelJSON**](docs/ModelJsonBpmnApi.md#getModelJSON) | **GET** /app/rest/process-definitions/{processDefinitionId}/model-json| Export a process definition model to JSON
*ActivitiPublicRestApi.modelJsonBpmnApi* | [**getModelJSONForProcessDefinition**](docs/ModelJsonBpmnApi.md#getModelJSONForProcessDefinition) | **GET** /app/rest/process-instances/{processInstanceId}/model-json | Export a process instances model to JSON
*ActivitiPublicRestApi.ModelsApi* | [**createModel**](docs/ModelsApi.md#createModel) | **POST** /api/enterprise/models | To create a new model
*ActivitiPublicRestApi.ModelsApi* | [**deleteModel**](docs/ModelsApi.md#deleteModel) | **DELETE** /api/enterprise/models/{modelId} | Delete a model
*ActivitiPublicRestApi.ModelsApi* | [**duplicateModel**](docs/ModelsApi.md#duplicateModel) | **POST** /api/enterprise/models/{modelId}/clone | To duplicate an existing model
*ActivitiPublicRestApi.ModelsApi* | [**getModelJSON**](docs/ModelsApi.md#getModelJSON) | **GET** /api/enterprise/models/{modelId}/editor/json | Get the JSON model
*ActivitiPublicRestApi.ModelsApi* | [**getModelThumbnail**](docs/ModelsApi.md#getModelThumbnail) | **GET** /api/enterprise/models/{modelId}/thumbnail | Get Model thumbnail
*ActivitiPublicRestApi.ModelsApi* | [**getModel**](docs/ModelsApi.md#getModel) | **GET** /api/enterprise/models/{modelId} | To retrieve details about a particular model (process, form, decision rule or app)
*ActivitiPublicRestApi.ModelsApi* | [**getModelsToIncludeInAppDefinition**](docs/ModelsApi.md#getModelsToIncludeInAppDefinition) | **GET** /api/enterprise/models-for-app-definition | TODO
*ActivitiPublicRestApi.ModelsApi* | [**getModels**](docs/ModelsApi.md#getModels) | **GET** /api/enterprise/models | List models (process, form, decision rule or app)
*ActivitiPublicRestApi.ModelsApi* | [**importNewVersion**](docs/ModelsApi.md#importNewVersion) | **POST** /api/enterprise/models/{modelId}/newversion | Create a new model version
*ActivitiPublicRestApi.ModelsApi* | [**importProcessModel**](docs/ModelsApi.md#importProcessModel) | **POST** /api/enterprise/process-models/import | To import a BPMN 2.0 xml file
*ActivitiPublicRestApi.ModelsApi* | [**saveModel**](docs/ModelsApi.md#saveModel) | **POST** /api/enterprise/models/{modelId}/editor/json | Save the JSON model
*ActivitiPublicRestApi.ModelsApi* | [**updateModel**](docs/ModelsApi.md#updateModel) | **PUT** /api/enterprise/models/{modelId} | Edit a specific model
*ActivitiPublicRestApi.ModelsApi* | [**validateModel**](docs/ModelsApi.md#validateModel) | **POST** /api/enterprise/models/{modelId}/editor/validate | Validate the JSON model
*ActivitiPublicRestApi.ModelsHistoryApi* | [**getModelHistoryCollection**](docs/ModelsHistoryApi.md#getModelHistoryCollection) | **GET** /api/enterprise/models/{modelId}/history | To get the version information for a model
*ActivitiPublicRestApi.ModelsHistoryApi* | [**getProcessModelHistory**](docs/ModelsHistoryApi.md#getProcessModelHistory) | **GET** /api/enterprise/models/{modelId}/history/{modelHistoryId} | To get a particular older version of a model
*ActivitiPublicRestApi.ProcessApi* | [**deleteProcessInstance**](docs/ProcessApi.md#deleteProcessInstance) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
*ActivitiPublicRestApi.ProcessApi* | [**filterProcessInstances**](docs/ProcessApi.md#filterProcessInstances) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
*ActivitiPublicRestApi.ProcessApi* | [**getProcessDefinitionStartForm**](docs/ProcessApi.md#getProcessDefinitionStartForm) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
*ActivitiPublicRestApi.ProcessApi* | [**getProcessDefinitions**](docs/ProcessApi.md#getProcessDefinitions) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstanceContent**](docs/ProcessApi.md#getProcessInstanceContent) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstanceStartForm**](docs/ProcessApi.md#getProcessInstanceStartForm) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstance**](docs/ProcessApi.md#getProcessInstance) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstances**](docs/ProcessApi.md#getProcessInstances) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances
*ActivitiPublicRestApi.ProcessApi* | [**getRestFieldValues**](docs/ProcessApi.md#getRestFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
*ActivitiPublicRestApi.ProcessApi* | [**getRestTableFieldValues**](docs/ProcessApi.md#getRestTableFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
*ActivitiPublicRestApi.ProcessApi* | [**startNewProcessInstance**](docs/ProcessApi.md#startNewProcessInstance) | **POST** /api/enterprise/process-instances | Start a process instance
*ActivitiPublicRestApi.ProcessDefinitionsApi* | [**getProcessDefinitions**](docs/ProcessDefinitionsApi.md#getProcessDefinitions) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions
*ActivitiPublicRestApi.ProcessDefinitionsFormApi* | [**getProcessDefinitionStartForm**](docs/ProcessDefinitionsFormApi.md#getProcessDefinitionStartForm) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
*ActivitiPublicRestApi.ProcessDefinitionsFormApi* | [**getRestFieldValues**](docs/ProcessDefinitionsFormApi.md#getRestFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
*ActivitiPublicRestApi.ProcessDefinitionsFormApi* | [**getRestTableFieldValues**](docs/ProcessDefinitionsFormApi.md#getRestTableFieldValues) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
*ActivitiPublicRestApi.ProcessInstancesApi* | [**addProcessInstanceComment**](docs/ProcessInstancesApi.md#addProcessInstanceComment) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
*ActivitiPublicRestApi.ProcessInstancesApi* | [**deleteProcessInstance**](docs/ProcessInstancesApi.md#deleteProcessInstance) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
*ActivitiPublicRestApi.ProcessInstancesApi* | [**getProcessInstanceComments**](docs/ProcessInstancesApi.md#getProcessInstanceComments) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
*ActivitiPublicRestApi.ProcessInstancesApi* | [**getProcessInstanceStartForm**](docs/ProcessInstancesApi.md#getProcessInstanceStartForm) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
*ActivitiPublicRestApi.ProcessInstancesApi* | [**getProcessInstance**](docs/ProcessInstancesApi.md#getProcessInstance) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information
*ActivitiPublicRestApi.ProcessInstancesInformationApi* | [**getProcessInstanceContent**](docs/ProcessInstancesInformationApi.md#getProcessInstanceContent) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
*ActivitiPublicRestApi.ProcessInstancesInformationApi* | [**startNewProcessInstance**](docs/ProcessInstancesInformationApi.md#startNewProcessInstance) | **POST** /api/enterprise/process-instances | Start a process instance
*ActivitiPublicRestApi.ProcessInstancesListingApi* | [**filterProcessInstances**](docs/ProcessInstancesListingApi.md#filterProcessInstances) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
*ActivitiPublicRestApi.ProcessInstancesListingApi* | [**getProcessInstances**](docs/ProcessInstancesListingApi.md#getProcessInstances) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances
*ActivitiPublicRestApi.ProcessScopeApi* | [**getRuntimeProcessScopes**](docs/ProcessScopeApi.md#getRuntimeProcessScopes) | **POST** /api/enterprise/process-scopes | getRuntimeProcessScopes
*ActivitiPublicRestApi.ProfileApi* | [**changePassword**](docs/ProfileApi.md#changePassword) | **POST** /api/enterprise/profile-password | Change user password
*ActivitiPublicRestApi.ProfileApi* | [**getProfilePicture**](docs/ProfileApi.md#getProfilePicture) | **GET** /api/enterprise/profile-picture |Retrieve user profile buffered array picture
*ActivitiPublicRestApi.ProfileApi* | [**getProfilePictureUrl**](docs/ProfileApi.md#getProfilePictureUrl) | **GET** /app/rest/admin/profile-picture | Retrieve Url user profile picture
*ActivitiPublicRestApi.ProfileApi* | [**getProfile**](docs/ProfileApi.md#getProfile) | **GET** /api/enterprise/profile | Retrieve user information
*ActivitiPublicRestApi.ProfileApi* | [**updateProfile**](docs/ProfileApi.md#updateProfile) | **POST** /api/enterprise/profile | Update user information
*ActivitiPublicRestApi.ProfileApi* | [**uploadProfilePicture**](docs/ProfileApi.md#uploadProfilePicture) | **POST** /api/enterprise/profile-picture | Change user profile picture
*ActivitiPublicRestApi.ScriptFileApi* | [**getControllers**](docs/ScriptFileApi.md#getControllers) | **GET** /api/enterprise/script-files/controllers | getControllers
*ActivitiPublicRestApi.ScriptFileApi* | [**getLibraries**](docs/ScriptFileApi.md#getLibraries) | **GET** /api/enterprise/script-files/libraries | getLibraries
*ActivitiPublicRestApi.SystemPropertiesApi* | [**getProperties**](docs/SystemPropertiesApi.md#getProperties) | **GET** /api/enterprise/system/properties | Retrieve System Properties
*ActivitiPublicRestApi.TaskApi* | [**addSubtask**](docs/TaskApi.md#addSubtask) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
*ActivitiPublicRestApi.TaskApi* | [**addTaskComment**](docs/TaskApi.md#addTaskComment) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
*ActivitiPublicRestApi.TaskApi* | [**assignTask**](docs/TaskApi.md#assignTask) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
*ActivitiPublicRestApi.TaskApi* | [**attachForm**](docs/TaskApi.md#attachForm) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
*ActivitiPublicRestApi.TaskApi* | [**claimTask**](docs/TaskApi.md#claimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
*ActivitiPublicRestApi.TaskApi* | [**completeTaskForm**](docs/TaskApi.md#completeTaskForm) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
*ActivitiPublicRestApi.TaskApi* | [**completeTask**](docs/TaskApi.md#completeTask) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
*ActivitiPublicRestApi.TaskApi* | [**createNewTask**](docs/TaskApi.md#createNewTask) | **POST** /api/enterprise/tasks | Create a Standalone Task
*ActivitiPublicRestApi.TaskApi* | [**createRelatedContentOnTask**](docs/TaskApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
*ActivitiPublicRestApi.TaskApi* | [**createRelatedContentOnTask**](docs/TaskApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
*ActivitiPublicRestApi.TaskApi* | [**deleteTask**](docs/TaskApi.md#deleteTask) | **DELETE** /api/enterprise/tasks/{taskId} | Delete a Task
*ActivitiPublicRestApi.TaskApi* | [**filterTasks**](docs/TaskApi.md#filterTasks) | **POST** /api/enterprise/tasks/filter | Filter list of Task
*ActivitiPublicRestApi.TaskApi* | [**getChecklist**](docs/TaskApi.md#getChecklist) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
*ActivitiPublicRestApi.TaskApi* | [**getTaskAuditJson**](docs/TaskApi.md#getTaskAuditJson) | **GET** /api/enterprise/tasks/{taskId}/audit | Retrieve audit infromation in json format
*ActivitiPublicRestApi.TaskApi* | [**getTaskAuditPdf**](docs/TaskApi.md#getTaskAuditPdf) | **GET** /app/rest/tasks/{taskId}/audit | Retrieve the task audit infromation in pdf format
*ActivitiPublicRestApi.TaskApi* | [**getRelatedContentForTask**](docs/TaskApi.md#getRelatedContentForTask) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task
*ActivitiPublicRestApi.TaskApi* | [**getRestFieldValuesColumn**](docs/TaskApi.md#getRestFieldValuesColumn) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
*ActivitiPublicRestApi.TaskApi* | [**getRestFieldValues**](docs/TaskApi.md#getRestFieldValues) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
*ActivitiPublicRestApi.TaskApi* | [**getTaskComments**](docs/TaskApi.md#getTaskComments) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task
*ActivitiPublicRestApi.TaskApi* | [**getTaskForm**](docs/TaskApi.md#getTaskForm) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
*ActivitiPublicRestApi.TaskApi* | [**getTask**](docs/TaskApi.md#getTask) | **GET** /api/enterprise/tasks/{taskId} | Task Details
*ActivitiPublicRestApi.TaskApi* | [**involveUser**](docs/TaskApi.md#involveUser) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
*ActivitiPublicRestApi.TaskApi* | [**listTasks**](docs/TaskApi.md#listTasks) | **POST** /api/enterprise/tasks/query | List Task
*ActivitiPublicRestApi.TaskApi* | [**orderChecklist**](docs/TaskApi.md#orderChecklist) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
*ActivitiPublicRestApi.TaskApi* | [**removeForm**](docs/TaskApi.md#removeForm) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
*ActivitiPublicRestApi.TaskApi* | [**removeInvolvedUser**](docs/TaskApi.md#removeInvolvedUser) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
*ActivitiPublicRestApi.TaskApi* | [**saveTaskForm**](docs/TaskApi.md#saveTaskForm) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form
*ActivitiPublicRestApi.TaskApi* | [**unclaimTask**](docs/TaskApi.md#unclaimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
*ActivitiPublicRestApi.TaskApi* | [**updateTask**](docs/TaskApi.md#updateTask) | **PUT** /api/enterprise/tasks/{taskId} | Update Task Details
*ActivitiPublicRestApi.TaskActionsApi* | [**assignTask**](docs/TaskActionsApi.md#assignTask) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
*ActivitiPublicRestApi.TaskActionsApi* | [**attachForm**](docs/TaskActionsApi.md#attachForm) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
*ActivitiPublicRestApi.TaskActionsApi* | [**claimTask**](docs/TaskActionsApi.md#claimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
*ActivitiPublicRestApi.TaskActionsApi* | [**completeTask**](docs/TaskActionsApi.md#completeTask) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
*ActivitiPublicRestApi.TaskActionsApi* | [**involveUser**](docs/TaskActionsApi.md#involveUser) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
*ActivitiPublicRestApi.TaskActionsApi* | [**removeForm**](docs/TaskActionsApi.md#removeForm) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
*ActivitiPublicRestApi.TaskActionsApi* | [**removeInvolvedUser**](docs/TaskActionsApi.md#removeInvolvedUser) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
*ActivitiPublicRestApi.TaskActionsApi* | [**unclaimTask**](docs/TaskActionsApi.md#unclaimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
*ActivitiPublicRestApi.TaskCheckListApi* | [**addSubtask**](docs/TaskCheckListApi.md#addSubtask) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
*ActivitiPublicRestApi.TaskCheckListApi* | [**getChecklist**](docs/TaskCheckListApi.md#getChecklist) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
*ActivitiPublicRestApi.TaskCheckListApi* | [**orderChecklist**](docs/TaskCheckListApi.md#orderChecklist) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
*ActivitiPublicRestApi.TaskFormsApi* | [**completeTaskForm**](docs/TaskFormsApi.md#completeTaskForm) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
*ActivitiPublicRestApi.TaskFormsApi* | [**getRestFieldValues**](docs/TaskFormsApi.md#getRestFieldValues) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
*ActivitiPublicRestApi.TaskFormsApi* | [**getRestFieldValues**](docs/TaskFormsApi.md#getRestFieldValues) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
*ActivitiPublicRestApi.TaskFormsApi* | [**getTaskForm**](docs/TaskFormsApi.md#getTaskForm) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
*ActivitiPublicRestApi.TaskFormsApi* | [**saveTaskForm**](docs/TaskFormsApi.md#saveTaskForm) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form
*ActivitiPublicRestApi.TemporaryApi* | [**completeTasks**](docs/TemporaryApi.md#completeTasks) | **GET** /api/enterprise/temporary/generate-report-data/complete-tasks | completeTasks
*ActivitiPublicRestApi.TemporaryApi* | [**generateData**](docs/TemporaryApi.md#generateData) | **GET** /api/enterprise/temporary/generate-report-data/start-process | generateData
*ActivitiPublicRestApi.TemporaryApi* | [**getHeaders**](docs/TemporaryApi.md#getHeaders) | **GET** /api/enterprise/temporary/example-headers | getHeaders
*ActivitiPublicRestApi.TemporaryApi* | [**getOptions**](docs/TemporaryApi.md#getOptions) | **GET** /api/enterprise/temporary/example-options | getOptions
*ActivitiPublicRestApi.UserApi* | [**executeAction**](docs/UserApi.md#executeAction) | **POST** /api/enterprise/users/{userId} | Execute an action for a specific user
*ActivitiPublicRestApi.UserApi* | [**getProfilePicture**](docs/UserApi.md#getProfilePicture) | **GET** /api/enterprise/users/{userId}/picture | Retrieve user profile picture
*ActivitiPublicRestApi.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /api/enterprise/users/{userId} | Retrieve user information
*ActivitiPublicRestApi.UserApi* | [**getUsers**](docs/UserApi.md#getUsers) | **GET** /api/enterprise/users | List users
*ActivitiPublicRestApi.UserApi* | [**requestPasswordReset**](docs/UserApi.md#requestPasswordReset) | **POST** /api/enterprise/idm/passwords | Request password reset 
*ActivitiPublicRestApi.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /api/enterprise/users/{userId} | Update user information
*ActivitiPublicRestApi.UserFiltersApi* | [**createUserProcessInstanceFilter**](docs/UserFiltersApi.md#createUserProcessInstanceFilter) | **POST** /api/enterprise/filters/processes | Create a user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**createUserTaskFilter**](docs/UserFiltersApi.md#createUserTaskFilter) | **POST** /api/enterprise/filters/tasks | Create a new task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**deleteUserProcessInstanceFilter**](docs/UserFiltersApi.md#deleteUserProcessInstanceFilter) | **DELETE** /api/enterprise/filters/processes/{userFilterId} | Delete a user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**deleteUserTaskFilter**](docs/UserFiltersApi.md#deleteUserTaskFilter) | **DELETE** /api/enterprise/filters/tasks/{userFilterId} | Delete a task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserProcessInstanceFilter**](docs/UserFiltersApi.md#getUserProcessInstanceFilter) | **GET** /api/enterprise/filters/processes/{userFilterId} | Get a specific user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserProcessInstanceFilters**](docs/UserFiltersApi.md#getUserProcessInstanceFilters) | **GET** /api/enterprise/filters/processes | Retrieve list of taks filters
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserTaskFilter**](docs/UserFiltersApi.md#getUserTaskFilter) | **GET** /api/enterprise/filters/tasks/{userFilterId} | Get a specific task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserTaskFilters**](docs/UserFiltersApi.md#getUserTaskFilters) | **GET** /api/enterprise/filters/tasks | Retrieve list of task filters
*ActivitiPublicRestApi.UserFiltersApi* | [**orderUserProcessInstanceFilters**](docs/UserFiltersApi.md#orderUserProcessInstanceFilters) | **PUT** /api/enterprise/filters/processes | To order the list of user process instance filters
*ActivitiPublicRestApi.UserFiltersApi* | [**orderUserTaskFilters**](docs/UserFiltersApi.md#orderUserTaskFilters) | **PUT** /api/enterprise/filters/tasks | To order the list of user task filters
*ActivitiPublicRestApi.UserFiltersApi* | [**updateUserProcessInstanceFilter**](docs/UserFiltersApi.md#updateUserProcessInstanceFilter) | **PUT** /api/enterprise/filters/processes/{userFilterId} | Update a user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**updateUserTaskFilter**](docs/UserFiltersApi.md#updateUserTaskFilter) | **PUT** /api/enterprise/filters/tasks/{userFilterId} | Update a specific task filter
*ActivitiPublicRestApi.UsersWorkflowApi* | [**getUsers**](docs/UsersWorkflowApi.md#getUsers) | **GET** /api/enterprise/users | List users
*ActivitiPublicRestApi.ReportApi* | [**createDefaultReports**](docs/ReportApi.md#createDefaultReports) |   **POST** /app/rest/reporting/default-reports | Create the default reports
*ActivitiPublicRestApi.ReportApi* | [**getReportList**](docs/ReportApi.md#getReportList) | **GET** /app/rest/reporting/reports |  Retrieve the available report list
*ActivitiPublicRestApi.ReportApi* | [**getReportParams**](docs/ReportApi.md#getReportParams) | **GET** /app/rest/reporting/report-params/{reportId} |  Retrieve the parameters referring to the reportId
*ActivitiPublicRestApi.ReportApi* | [**getProcessDefinitions**](docs/ReportApi.md#getProcessDefinitions) | **GET** /app/rest/reporting/process-definitions |  Retrieve the process definition list for all the apps.
*ActivitiPublicRestApi.ReportApi* | [**getTasksByProcessDefinitionId**](docs/ReportApi.md#getTasksByProcessDefinitionId) | **GET** /app/rest/reporting/report-params/{reportId}/tasks | Retrieves all tasks that refer to the processDefinitionId
*ActivitiPublicRestApi.ReportApi* | [**getReportsByParams**](docs/ReportApi.md#getReportsByParams) | **GET** /app/rest/reporting/report-params/{reportId} | Generate the reports


## Documentation for Models

 - [ActivitiPublicRestApi.AbstractGroupRepresentation](docs/AbstractGroupRepresentation.md)
 - [ActivitiPublicRestApi.AbstractRepresentation](docs/AbstractRepresentation.md)
 - [ActivitiPublicRestApi.AbstractUserRepresentation](docs/AbstractUserRepresentation.md)
 - [ActivitiPublicRestApi.AddGroupCapabilitiesRepresentation](docs/AddGroupCapabilitiesRepresentation.md)
 - [ActivitiPublicRestApi.AppDefinition](docs/AppDefinition.md)
 - [ActivitiPublicRestApi.AppDefinitionPublishRepresentation](docs/AppDefinitionPublishRepresentation.md)
 - [ActivitiPublicRestApi.AppDefinitionRepresentation](docs/AppDefinitionRepresentation.md)
 - [ActivitiPublicRestApi.AppDefinitionUpdateResultRepresentation](docs/AppDefinitionUpdateResultRepresentation.md)
 - [ActivitiPublicRestApi.AppModelDefinition](docs/AppModelDefinition.md)
 - [ActivitiPublicRestApi.ArrayNode](docs/ArrayNode.md)
 - [ActivitiPublicRestApi.BoxUserAccountCredentialsRepresentation](docs/BoxUserAccountCredentialsRepresentation.md)
 - [ActivitiPublicRestApi.BulkUserUpdateRepresentation](docs/BulkUserUpdateRepresentation.md)
 - [ActivitiPublicRestApi.ChangePasswordRepresentation](docs/ChangePasswordRepresentation.md)
 - [ActivitiPublicRestApi.ChecklistOrderRepresentation](docs/ChecklistOrderRepresentation.md)
 - [ActivitiPublicRestApi.CommentRepresentation](docs/CommentRepresentation.md)
 - [ActivitiPublicRestApi.CompleteFormRepresentation](docs/CompleteFormRepresentation.md)
 - [ActivitiPublicRestApi.ConditionRepresentation](docs/ConditionRepresentation.md)
 - [ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation](docs/CreateEndpointBasicAuthRepresentation.md)
 - [ActivitiPublicRestApi.CreateProcessInstanceRepresentation](docs/CreateProcessInstanceRepresentation.md)
 - [ActivitiPublicRestApi.CreateTenantRepresentation](docs/CreateTenantRepresentation.md)
 - [ActivitiPublicRestApi.EndpointBasicAuthRepresentation](docs/EndpointBasicAuthRepresentation.md)
 - [ActivitiPublicRestApi.EndpointConfigurationRepresentation](docs/EndpointConfigurationRepresentation.md)
 - [ActivitiPublicRestApi.EndpointRequestHeaderRepresentation](docs/EndpointRequestHeaderRepresentation.md)
 - [ActivitiPublicRestApi.EntityAttributeScopeRepresentation](docs/EntityAttributeScopeRepresentation.md)
 - [ActivitiPublicRestApi.EntityVariableScopeRepresentation](docs/EntityVariableScopeRepresentation.md)
 - [ActivitiPublicRestApi.File](docs/File.md)
 - [ActivitiPublicRestApi.FormDefinitionRepresentation](docs/FormDefinitionRepresentation.md)
 - [ActivitiPublicRestApi.FormFieldRepresentation](docs/FormFieldRepresentation.md)
 - [ActivitiPublicRestApi.FormJavascriptEventRepresentation](docs/FormJavascriptEventRepresentation.md)
 - [ActivitiPublicRestApi.FormOutcomeRepresentation](docs/FormOutcomeRepresentation.md)
 - [ActivitiPublicRestApi.FormRepresentation](docs/FormRepresentation.md)
 - [ActivitiPublicRestApi.FormSaveRepresentation](docs/FormSaveRepresentation.md)
 - [ActivitiPublicRestApi.FormScopeRepresentation](docs/FormScopeRepresentation.md)
 - [ActivitiPublicRestApi.FormTabRepresentation](docs/FormTabRepresentation.md)
 - [ActivitiPublicRestApi.FormValueRepresentation](docs/FormValueRepresentation.md)
 - [ActivitiPublicRestApi.GroupCapabilityRepresentation](docs/GroupCapabilityRepresentation.md)
 - [ActivitiPublicRestApi.GroupRepresentation](docs/GroupRepresentation.md)
 - [ActivitiPublicRestApi.ImageUploadRepresentation](docs/ImageUploadRepresentation.md)
 - [ActivitiPublicRestApi.LayoutRepresentation](docs/LayoutRepresentation.md)
 - [ActivitiPublicRestApi.LightAppRepresentation](docs/LightAppRepresentation.md)
 - [ActivitiPublicRestApi.LightGroupRepresentation](docs/LightGroupRepresentation.md)
 - [ActivitiPublicRestApi.LightTenantRepresentation](docs/LightTenantRepresentation.md)
 - [ActivitiPublicRestApi.LightUserRepresentation](docs/LightUserRepresentation.md)
 - [ActivitiPublicRestApi.MaplongListstring](docs/MaplongListstring.md)
 - [ActivitiPublicRestApi.MapstringListEntityVariableScopeRepresentation](docs/MapstringListEntityVariableScopeRepresentation.md)
 - [ActivitiPublicRestApi.MapstringListVariableScopeRepresentation](docs/MapstringListVariableScopeRepresentation.md)
 - [ActivitiPublicRestApi.Mapstringstring](docs/Mapstringstring.md)
 - [ActivitiPublicRestApi.ModelRepresentation](docs/ModelRepresentation.md)
 - [ActivitiPublicRestApi.ObjectNode](docs/ObjectNode.md)
 - [ActivitiPublicRestApi.OptionRepresentation](docs/OptionRepresentation.md)
 - [ActivitiPublicRestApi.ProcessInstanceFilterRepresentation](docs/ProcessInstanceFilterRepresentation.md)
 - [ActivitiPublicRestApi.ProcessInstanceFilterRequestRepresentation](docs/ProcessInstanceFilterRequestRepresentation.md)
 - [ActivitiPublicRestApi.ProcessInstanceRepresentation](docs/ProcessInstanceRepresentation.md)
 - [ActivitiPublicRestApi.ProcessInstanceVariableRepresentation](docs/ProcessInstanceVariableRepresentation.md)
 - [ActivitiPublicRestApi.ProcessScopeIdentifierRepresentation](docs/ProcessScopeIdentifierRepresentation.md)
 - [ActivitiPublicRestApi.ProcessScopeRepresentation](docs/ProcessScopeRepresentation.md)
 - [ActivitiPublicRestApi.ProcessScopesRequestRepresentation](docs/ProcessScopesRequestRepresentation.md)
 - [ActivitiPublicRestApi.PublishIdentityInfoRepresentation](docs/PublishIdentityInfoRepresentation.md)
 - [ActivitiPublicRestApi.RelatedContentRepresentation](docs/RelatedContentRepresentation.md)
 - [ActivitiPublicRestApi.ResetPasswordRepresentation](docs/ResetPasswordRepresentation.md)
 - [ActivitiPublicRestApi.RestVariable](docs/RestVariable.md)
 - [ActivitiPublicRestApi.ResultListDataRepresentation](docs/ResultListDataRepresentation.md)
 - [ActivitiPublicRestApi.RuntimeAppDefinitionSaveRepresentation](docs/RuntimeAppDefinitionSaveRepresentation.md)
 - [ActivitiPublicRestApi.SaveFormRepresentation](docs/SaveFormRepresentation.md)
 - [ActivitiPublicRestApi.SyncLogEntryRepresentation](docs/SyncLogEntryRepresentation.md)
 - [ActivitiPublicRestApi.SystemPropertiesRepresentation](docs/SystemPropertiesRepresentation.md)
 - [ActivitiPublicRestApi.TaskFilterRepresentation](docs/TaskFilterRepresentation.md)
 - [ActivitiPublicRestApi.TaskFilterRequestRepresentation](docs/TaskFilterRequestRepresentation.md)
 - [ActivitiPublicRestApi.TaskRepresentation](docs/TaskRepresentation.md)
 - [ActivitiPublicRestApi.TaskUpdateRepresentation](docs/TaskUpdateRepresentation.md)
 - [ActivitiPublicRestApi.TenantEvent](docs/TenantEvent.md)
 - [ActivitiPublicRestApi.TenantRepresentation](docs/TenantRepresentation.md)
 - [ActivitiPublicRestApi.UserAccountCredentialsRepresentation](docs/UserAccountCredentialsRepresentation.md)
 - [ActivitiPublicRestApi.UserActionRepresentation](docs/UserActionRepresentation.md)
 - [ActivitiPublicRestApi.UserFilterOrderRepresentation](docs/UserFilterOrderRepresentation.md)
 - [ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation](docs/UserProcessInstanceFilterRepresentation.md)
 - [ActivitiPublicRestApi.UserRepresentation](docs/UserRepresentation.md)
 - [ActivitiPublicRestApi.UserTaskFilterRepresentation](docs/UserTaskFilterRepresentation.md)
 - [ActivitiPublicRestApi.ValidationErrorRepresentation](docs/ValidationErrorRepresentation.md)
 - [ActivitiPublicRestApi.VariableScopeRepresentation](docs/VariableScopeRepresentation.md)


## Documentation for Authorization

 All endpoints do not require authorization.

