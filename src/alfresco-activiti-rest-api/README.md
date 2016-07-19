# Alfresco Activiti Rest Api

ActivitiPublicRestApi - JavaScript client for activiti-public-rest-api
The Alfresco Activiti BPM Suite comes with a REST API. It includes both an Enterprise equivalent of the Activiti Open Source REST API exposing the generic Activiti Engine operations, and a dedicated set op REST API endpoints specific for the functionality in the Alfresco Activiti BPM Suite.      

- API version: 1.4.0
- Package version: 1.4.0


## Documentation for API Endpoints

All URIs are relative to *https://localhost:8080/activiti-app*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActivitiPublicRestApi.AboutApi* | [**getAppVersionUsingGET**](docs/AboutApi.md#getAppVersionUsingGET) | **GET** /api/enterprise/app-version | Server Information
*ActivitiPublicRestApi.AdminEndpointsApi* | [**createBasicAuthConfigurationUsingPOST1**](docs/AdminEndpointsApi.md#createBasicAuthConfigurationUsingPOST1) | **POST** /api/enterprise/admin/basic-auths | createBasicAuthConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**createEndpointConfigurationUsingPOST1**](docs/AdminEndpointsApi.md#createEndpointConfigurationUsingPOST1) | **POST** /api/enterprise/admin/endpoints | createEndpointConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getBasicAuthConfigurationUsingGET1**](docs/AdminEndpointsApi.md#getBasicAuthConfigurationUsingGET1) | **GET** /api/enterprise/admin/basic-auths/{basicAuthId} | getBasicAuthConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getBasicAuthConfigurationsUsingGET1**](docs/AdminEndpointsApi.md#getBasicAuthConfigurationsUsingGET1) | **GET** /api/enterprise/admin/basic-auths | getBasicAuthConfigurations
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getEndpointConfigurationUsingGET1**](docs/AdminEndpointsApi.md#getEndpointConfigurationUsingGET1) | **GET** /api/enterprise/admin/endpoints/{endpointConfigurationId} | getEndpointConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**getEndpointConfigurationsUsingGET1**](docs/AdminEndpointsApi.md#getEndpointConfigurationsUsingGET1) | **GET** /api/enterprise/admin/endpoints | getEndpointConfigurations
*ActivitiPublicRestApi.AdminEndpointsApi* | [**removeBasicAuthonfigurationUsingDELETE1**](docs/AdminEndpointsApi.md#removeBasicAuthonfigurationUsingDELETE1) | **DELETE** /api/enterprise/admin/basic-auths/{basicAuthId} | removeBasicAuthonfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**removeEndpointConfigurationUsingDELETE1**](docs/AdminEndpointsApi.md#removeEndpointConfigurationUsingDELETE1) | **DELETE** /api/enterprise/admin/endpoints/{endpointConfigurationId} | removeEndpointConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**updateBasicAuthConfigurationUsingPUT1**](docs/AdminEndpointsApi.md#updateBasicAuthConfigurationUsingPUT1) | **PUT** /api/enterprise/admin/basic-auths/{basicAuthId} | updateBasicAuthConfiguration
*ActivitiPublicRestApi.AdminEndpointsApi* | [**updateEndpointConfigurationUsingPUT1**](docs/AdminEndpointsApi.md#updateEndpointConfigurationUsingPUT1) | **PUT** /api/enterprise/admin/endpoints/{endpointConfigurationId} | updateEndpointConfiguration
*ActivitiPublicRestApi.AdminGroupsApi* | [**activateUsingPOST1**](docs/AdminGroupsApi.md#activateUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/action/activate | activate
*ActivitiPublicRestApi.AdminGroupsApi* | [**addAllUsersToGroupUsingPOST1**](docs/AdminGroupsApi.md#addAllUsersToGroupUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/add-all-users | addAllUsersToGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**addGroupCapabilitiesUsingPOST1**](docs/AdminGroupsApi.md#addGroupCapabilitiesUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/capabilities | addGroupCapabilities
*ActivitiPublicRestApi.AdminGroupsApi* | [**addGroupMemberUsingPOST1**](docs/AdminGroupsApi.md#addGroupMemberUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/members/{userId} | addGroupMember
*ActivitiPublicRestApi.AdminGroupsApi* | [**addRelatedGroupUsingPOST1**](docs/AdminGroupsApi.md#addRelatedGroupUsingPOST1) | **POST** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | addRelatedGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**createNewGroupUsingPOST1**](docs/AdminGroupsApi.md#createNewGroupUsingPOST1) | **POST** /api/enterprise/admin/groups | createNewGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteGroupCapabilityUsingDELETE1**](docs/AdminGroupsApi.md#deleteGroupCapabilityUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId} | deleteGroupCapability
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteGroupMemberUsingDELETE1**](docs/AdminGroupsApi.md#deleteGroupMemberUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId}/members/{userId} | deleteGroupMember
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteGroupUsingDELETE1**](docs/AdminGroupsApi.md#deleteGroupUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId} | deleteGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**deleteRelatedGroupUsingDELETE1**](docs/AdminGroupsApi.md#deleteRelatedGroupUsingDELETE1) | **DELETE** /api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId} | deleteRelatedGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**getCapabilitiesUsingGET1**](docs/AdminGroupsApi.md#getCapabilitiesUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId}/potential-capabilities | getCapabilities
*ActivitiPublicRestApi.AdminGroupsApi* | [**getGroupUsersUsingGET1**](docs/AdminGroupsApi.md#getGroupUsersUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId}/users | getGroupUsers
*ActivitiPublicRestApi.AdminGroupsApi* | [**getGroupUsingGET1**](docs/AdminGroupsApi.md#getGroupUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId} | getGroup
*ActivitiPublicRestApi.AdminGroupsApi* | [**getGroupsUsingGET2**](docs/AdminGroupsApi.md#getGroupsUsingGET2) | **GET** /api/enterprise/admin/groups | getGroups
*ActivitiPublicRestApi.AdminGroupsApi* | [**getRelatedGroupsUsingGET1**](docs/AdminGroupsApi.md#getRelatedGroupsUsingGET1) | **GET** /api/enterprise/admin/groups/{groupId}/related-groups | getRelatedGroups
*ActivitiPublicRestApi.AdminGroupsApi* | [**updateGroupUsingPUT1**](docs/AdminGroupsApi.md#updateGroupUsingPUT1) | **PUT** /api/enterprise/admin/groups/{groupId} | updateGroup
*ActivitiPublicRestApi.AdminTenantsApi* | [**createTenantUsingPOST1**](docs/AdminTenantsApi.md#createTenantUsingPOST1) | **POST** /api/enterprise/admin/tenants | Create a new tenant
*ActivitiPublicRestApi.AdminTenantsApi* | [**deleteTenantUsingDELETE1**](docs/AdminTenantsApi.md#deleteTenantUsingDELETE1) | **DELETE** /api/enterprise/admin/tenants/{tenantId} | Delete a tenant
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenantEventsUsingGET1**](docs/AdminTenantsApi.md#getTenantEventsUsingGET1) | **GET** /api/enterprise/admin/tenants/{tenantId}/events | Get tenant events
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenantLogoUsingGET1**](docs/AdminTenantsApi.md#getTenantLogoUsingGET1) | **GET** /api/enterprise/admin/tenants/{tenantId}/logo | Get tenant logo
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenantUsingGET1**](docs/AdminTenantsApi.md#getTenantUsingGET1) | **GET** /api/enterprise/admin/tenants/{tenantId} | Get tenant details
*ActivitiPublicRestApi.AdminTenantsApi* | [**getTenantsUsingGET1**](docs/AdminTenantsApi.md#getTenantsUsingGET1) | **GET** /api/enterprise/admin/tenants | Get all tenants
*ActivitiPublicRestApi.AdminTenantsApi* | [**updateUsingPUT1**](docs/AdminTenantsApi.md#updateUsingPUT1) | **PUT** /api/enterprise/admin/tenants/{tenantId} | Update a tenant
*ActivitiPublicRestApi.AdminTenantsApi* | [**uploadTenantLogoUsingPOST1**](docs/AdminTenantsApi.md#uploadTenantLogoUsingPOST1) | **POST** /api/enterprise/admin/tenants/{tenantId}/logo | Update tenant logo
*ActivitiPublicRestApi.AdminUsersApi* | [**bulkUpdateUsersUsingPUT1**](docs/AdminUsersApi.md#bulkUpdateUsersUsingPUT1) | **PUT** /api/enterprise/admin/users | Bulk Update a list of users
*ActivitiPublicRestApi.AdminUsersApi* | [**createNewUserUsingPOST1**](docs/AdminUsersApi.md#createNewUserUsingPOST1) | **POST** /api/enterprise/admin/users | Create a new user
*ActivitiPublicRestApi.AdminUsersApi* | [**getUserUsingGET1**](docs/AdminUsersApi.md#getUserUsingGET1) | **GET** /api/enterprise/admin/users/{userId} | Retrieve user information
*ActivitiPublicRestApi.AdminUsersApi* | [**getUsersUsingGET1**](docs/AdminUsersApi.md#getUsersUsingGET1) | **GET** /api/enterprise/admin/users | Get a list of users
*ActivitiPublicRestApi.AdminUsersApi* | [**updateUserDetailsUsingPUT1**](docs/AdminUsersApi.md#updateUserDetailsUsingPUT1) | **PUT** /api/enterprise/admin/users/{userId} | Update user details
*ActivitiPublicRestApi.AlfrescoApi* | [**confirmAuthorisationUsingGET**](docs/AlfrescoApi.md#confirmAuthorisationUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*ActivitiPublicRestApi.AlfrescoApi* | [**getAllNetworksUsingGET**](docs/AlfrescoApi.md#getAllNetworksUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*ActivitiPublicRestApi.AlfrescoApi* | [**getAllSitesUsingGET**](docs/AlfrescoApi.md#getAllSitesUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*ActivitiPublicRestApi.AlfrescoApi* | [**getAllSitesUsingGET1**](docs/AlfrescoApi.md#getAllSitesUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInFolderUsingGET**](docs/AlfrescoApi.md#getContentInFolderUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInFolderUsingGET1**](docs/AlfrescoApi.md#getContentInFolderUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInSiteUsingGET**](docs/AlfrescoApi.md#getContentInSiteUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.AlfrescoApi* | [**getContentInSiteUsingGET1**](docs/AlfrescoApi.md#getContentInSiteUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.AlfrescoApi* | [**getRepositoriesUsingGET**](docs/AlfrescoApi.md#getRepositoriesUsingGET) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
*ActivitiPublicRestApi.AppsApi* | [**deployAppDefinitionsUsingPOST**](docs/AppsApi.md#deployAppDefinitionsUsingPOST) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
*ActivitiPublicRestApi.AppsApi* | [**exportAppDefinitionUsingGET**](docs/AppsApi.md#exportAppDefinitionUsingGET) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
*ActivitiPublicRestApi.AppsApi* | [**getAppDefinitionsUsingGET**](docs/AppsApi.md#getAppDefinitionsUsingGET) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps
*ActivitiPublicRestApi.AppsApi* | [**importAppDefinitionUsingPOST**](docs/AppsApi.md#importAppDefinitionUsingPOST) | **POST** /api/enterprise/app-definitions/import | Import App Definition
*ActivitiPublicRestApi.AppsApi* | [**importAppDefinitionUsingPOST1**](docs/AppsApi.md#importAppDefinitionUsingPOST1) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
*ActivitiPublicRestApi.AppsApi* | [**publishAppDefinitionUsingPOST**](docs/AppsApi.md#publishAppDefinitionUsingPOST) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App
*ActivitiPublicRestApi.AppsDefinitionApi* | [**exportAppDefinitionUsingGET**](docs/AppsDefinitionApi.md#exportAppDefinitionUsingGET) | **GET** /api/enterprise/app-definitions/{modelId}/export | Export App Definition
*ActivitiPublicRestApi.AppsDefinitionApi* | [**importAppDefinitionUsingPOST**](docs/AppsDefinitionApi.md#importAppDefinitionUsingPOST) | **POST** /api/enterprise/app-definitions/import | Import App Definition
*ActivitiPublicRestApi.AppsDefinitionApi* | [**importAppDefinitionUsingPOST1**](docs/AppsDefinitionApi.md#importAppDefinitionUsingPOST1) | **POST** /api/enterprise/app-definitions/{modelId}/import | Import App
*ActivitiPublicRestApi.AppsDefinitionApi* | [**publishAppDefinitionUsingPOST**](docs/AppsDefinitionApi.md#publishAppDefinitionUsingPOST) | **POST** /api/enterprise/app-definitions/{modelId}/publish | Publish App
*ActivitiPublicRestApi.AppsRuntimeApi* | [**deployAppDefinitionsUsingPOST**](docs/AppsRuntimeApi.md#deployAppDefinitionsUsingPOST) | **POST** /api/enterprise/runtime-app-definitions | Deploy published app
*ActivitiPublicRestApi.AppsRuntimeApi* | [**getAppDefinitionsUsingGET**](docs/AppsRuntimeApi.md#getAppDefinitionsUsingGET) | **GET** /api/enterprise/runtime-app-definitions | List runtime apps
*ActivitiPublicRestApi.CommentsApi* | [**addProcessInstanceCommentUsingPOST**](docs/CommentsApi.md#addProcessInstanceCommentUsingPOST) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
*ActivitiPublicRestApi.CommentsApi* | [**addTaskCommentUsingPOST**](docs/CommentsApi.md#addTaskCommentUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
*ActivitiPublicRestApi.CommentsApi* | [**getProcessInstanceCommentsUsingGET**](docs/CommentsApi.md#getProcessInstanceCommentsUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
*ActivitiPublicRestApi.CommentsApi* | [**getTaskCommentsUsingGET**](docs/CommentsApi.md#getTaskCommentsUsingGET) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnProcessInstanceUsingPOST**](docs/ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST) | **POST** /api/enterprise/process-instances/{processInstanceId}/content | createRelatedContentOnProcessInstance
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnProcessInstanceUsingPOST1**](docs/ContentApi.md#createRelatedContentOnProcessInstanceUsingPOST1) | **POST** /api/enterprise/process-instances/{processInstanceId}/raw-content | createRelatedContentOnProcessInstance
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnTaskUsingPOST**](docs/ContentApi.md#createRelatedContentOnTaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
*ActivitiPublicRestApi.ContentApi* | [**createRelatedContentOnTaskUsingPOST1**](docs/ContentApi.md#createRelatedContentOnTaskUsingPOST1) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
*ActivitiPublicRestApi.ContentApi* | [**createTemporaryRawRelatedContentUsingPOST1**](docs/ContentApi.md#createTemporaryRawRelatedContentUsingPOST1) | **POST** /api/enterprise/content/raw | createTemporaryRawRelatedContent
*ActivitiPublicRestApi.ContentApi* | [**createTemporaryRelatedContentUsingPOST**](docs/ContentApi.md#createTemporaryRelatedContentUsingPOST) | **POST** /api/enterprise/content | createTemporaryRelatedContent
*ActivitiPublicRestApi.ContentApi* | [**deleteContentUsingDELETE1**](docs/ContentApi.md#deleteContentUsingDELETE1) | **DELETE** /api/enterprise/content/{contentId} | deleteContent
*ActivitiPublicRestApi.ContentApi* | [**getContentUsingGET1**](docs/ContentApi.md#getContentUsingGET1) | **GET** /api/enterprise/content/{contentId} | getContent
*ActivitiPublicRestApi.ContentApi* | [**getProcessInstanceContentUsingGET**](docs/ContentApi.md#getProcessInstanceContentUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
*ActivitiPublicRestApi.ContentApi* | [**getRawContentUsingGET3**](docs/ContentApi.md#getRawContentUsingGET3) | **GET** /api/enterprise/content/{contentId}/raw | getRawContent
*ActivitiPublicRestApi.ContentApi* | [**getRelatedContentForProcessInstanceUsingGET**](docs/ContentApi.md#getRelatedContentForProcessInstanceUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/content | getRelatedContentForProcessInstance
*ActivitiPublicRestApi.ContentApi* | [**getRelatedContentForTaskUsingGET**](docs/ContentApi.md#getRelatedContentForTaskUsingGET) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task
*ActivitiPublicRestApi.ContentRenditionApi* | [**getRawContentUsingGET2**](docs/ContentRenditionApi.md#getRawContentUsingGET2) | **GET** /api/enterprise/content/{contentId}/rendition/{renditionType} | Retrieve Raw Content
*ActivitiPublicRestApi.EditorApi* | [**getFormHistoryUsingGET**](docs/EditorApi.md#getFormHistoryUsingGET) | **GET** /api/enterprise/editor/form-models/{formId}/history/{formHistoryId} | getFormHistory
*ActivitiPublicRestApi.EditorApi* | [**getFormUsingGET**](docs/EditorApi.md#getFormUsingGET) | **GET** /api/enterprise/editor/form-models/{formId} | getForm
*ActivitiPublicRestApi.EditorApi* | [**getFormsUsingGET**](docs/EditorApi.md#getFormsUsingGET) | **GET** /api/enterprise/editor/form-models/values | getForms
*ActivitiPublicRestApi.EditorApi* | [**saveFormUsingPUT**](docs/EditorApi.md#saveFormUsingPUT) | **PUT** /api/enterprise/editor/form-models/{formId} | saveForm
*ActivitiPublicRestApi.EditorApi* | [**validateModelUsingPUT**](docs/EditorApi.md#validateModelUsingPUT) | **PUT** /api/enterprise/editor/form-models/{formId}/validate | validateModel
*ActivitiPublicRestApi.GroupsApi* | [**getGroupsUsingGET1**](docs/GroupsApi.md#getGroupsUsingGET1) | **GET** /api/enterprise/groups | List groups
*ActivitiPublicRestApi.GroupsApi* | [**getUsersForGroupUsingGET**](docs/GroupsApi.md#getUsersForGroupUsingGET) | **GET** /api/enterprise/groups/{groupId}/users | List users member of a specific group
*ActivitiPublicRestApi.IDMSyncApi* | [**getLogFileUsingGET**](docs/IDMSyncApi.md#getLogFileUsingGET) | **GET** /api/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile | getLogFile
*ActivitiPublicRestApi.IDMSyncApi* | [**getSyncLogEntriesUsingGET**](docs/IDMSyncApi.md#getSyncLogEntriesUsingGET) | **GET** /api/enterprise/idm-sync-log-entries | getSyncLogEntries
*ActivitiPublicRestApi.IntegrationApi* | [**confirmAuthorisationUsingGET**](docs/IntegrationApi.md#confirmAuthorisationUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*ActivitiPublicRestApi.IntegrationApi* | [**confirmAuthorisationUsingGET1**](docs/IntegrationApi.md#confirmAuthorisationUsingGET1) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
*ActivitiPublicRestApi.IntegrationApi* | [**confirmAuthorisationUsingGET2**](docs/IntegrationApi.md#confirmAuthorisationUsingGET2) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
*ActivitiPublicRestApi.IntegrationApi* | [**createRepositoryAccountUsingPOST**](docs/IntegrationApi.md#createRepositoryAccountUsingPOST) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
*ActivitiPublicRestApi.IntegrationApi* | [**deleteRepositoryAccountUsingDELETE**](docs/IntegrationApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
*ActivitiPublicRestApi.IntegrationApi* | [**getAllNetworksUsingGET**](docs/IntegrationApi.md#getAllNetworksUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*ActivitiPublicRestApi.IntegrationApi* | [**getAllSitesUsingGET**](docs/IntegrationApi.md#getAllSitesUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationApi* | [**getAllSitesUsingGET1**](docs/IntegrationApi.md#getAllSitesUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationApi* | [**getBoxPluginStatusUsingGET**](docs/IntegrationApi.md#getBoxPluginStatusUsingGET) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInFolderUsingGET**](docs/IntegrationApi.md#getContentInFolderUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInFolderUsingGET1**](docs/IntegrationApi.md#getContentInFolderUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInSiteUsingGET**](docs/IntegrationApi.md#getContentInSiteUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationApi* | [**getContentInSiteUsingGET1**](docs/IntegrationApi.md#getContentInSiteUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationApi* | [**getFilesUsingGET**](docs/IntegrationApi.md#getFilesUsingGET) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
*ActivitiPublicRestApi.IntegrationApi* | [**getFilesUsingGET1**](docs/IntegrationApi.md#getFilesUsingGET1) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders
*ActivitiPublicRestApi.IntegrationApi* | [**getRepositoriesUsingGET**](docs/IntegrationApi.md#getRepositoriesUsingGET) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
*ActivitiPublicRestApi.IntegrationApi* | [**getRepositoryAccountUsingGET**](docs/IntegrationApi.md#getRepositoryAccountUsingGET) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
*ActivitiPublicRestApi.IntegrationApi* | [**updateRepositoryAccountUsingPUT**](docs/IntegrationApi.md#updateRepositoryAccountUsingPUT) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account
*ActivitiPublicRestApi.IntegrationAccountApi* | [**getAccountsUsingGET**](docs/IntegrationAccountApi.md#getAccountsUsingGET) | **GET** /api/enterprise/account/integration | Retrieve Alfresco account information
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**confirmAuthorisationUsingGET**](docs/IntegrationAlfrescoCloudApi.md#confirmAuthorisationUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getAllNetworksUsingGET**](docs/IntegrationAlfrescoCloudApi.md#getAllNetworksUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getAllSitesUsingGET**](docs/IntegrationAlfrescoCloudApi.md#getAllSitesUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getContentInFolderUsingGET**](docs/IntegrationAlfrescoCloudApi.md#getContentInFolderUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationAlfrescoCloudApi* | [**getContentInSiteUsingGET**](docs/IntegrationAlfrescoCloudApi.md#getContentInSiteUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getAllSitesUsingGET1**](docs/IntegrationAlfrescoOnPremiseApi.md#getAllSitesUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getContentInFolderUsingGET1**](docs/IntegrationAlfrescoOnPremiseApi.md#getContentInFolderUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getContentInSiteUsingGET1**](docs/IntegrationAlfrescoOnPremiseApi.md#getContentInSiteUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
*ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi* | [**getRepositoriesUsingGET**](docs/IntegrationAlfrescoOnPremiseApi.md#getRepositoriesUsingGET) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
*ActivitiPublicRestApi.IntegrationBoxApi* | [**confirmAuthorisationUsingGET1**](docs/IntegrationBoxApi.md#confirmAuthorisationUsingGET1) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
*ActivitiPublicRestApi.IntegrationBoxApi* | [**createRepositoryAccountUsingPOST**](docs/IntegrationBoxApi.md#createRepositoryAccountUsingPOST) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
*ActivitiPublicRestApi.IntegrationBoxApi* | [**deleteRepositoryAccountUsingDELETE**](docs/IntegrationBoxApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
*ActivitiPublicRestApi.IntegrationBoxApi* | [**getBoxPluginStatusUsingGET**](docs/IntegrationBoxApi.md#getBoxPluginStatusUsingGET) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
*ActivitiPublicRestApi.IntegrationBoxApi* | [**getFilesUsingGET**](docs/IntegrationBoxApi.md#getFilesUsingGET) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
*ActivitiPublicRestApi.IntegrationBoxApi* | [**getRepositoryAccountUsingGET**](docs/IntegrationBoxApi.md#getRepositoryAccountUsingGET) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
*ActivitiPublicRestApi.IntegrationBoxApi* | [**updateRepositoryAccountUsingPUT**](docs/IntegrationBoxApi.md#updateRepositoryAccountUsingPUT) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account
*ActivitiPublicRestApi.IntegrationDriveApi* | [**confirmAuthorisationUsingGET2**](docs/IntegrationDriveApi.md#confirmAuthorisationUsingGET2) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
*ActivitiPublicRestApi.IntegrationDriveApi* | [**getFilesUsingGET1**](docs/IntegrationDriveApi.md#getFilesUsingGET1) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders
*ActivitiPublicRestApi.ModelBpmnApi* | [**getHistoricProcessModelBpmn20XmlUsingGET**](docs/ModelBpmnApi.md#getHistoricProcessModelBpmn20XmlUsingGET) | **GET** /api/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a previous process definition model to a BPMN 2.0 xml file
*ActivitiPublicRestApi.ModelBpmnApi* | [**getProcessModelBpmn20XmlUsingGET**](docs/ModelBpmnApi.md#getProcessModelBpmn20XmlUsingGET) | **GET** /api/enterprise/models/{processModelId}/bpmn20 | Export a process definition model to a BPMN 2.0 xml file
*ActivitiPublicRestApi.ModelsApi* | [**createModelUsingPOST**](docs/ModelsApi.md#createModelUsingPOST) | **POST** /api/enterprise/models | To create a new model
*ActivitiPublicRestApi.ModelsApi* | [**deleteModelUsingDELETE**](docs/ModelsApi.md#deleteModelUsingDELETE) | **DELETE** /api/enterprise/models/{modelId} | Delete a model
*ActivitiPublicRestApi.ModelsApi* | [**duplicateModelUsingPOST**](docs/ModelsApi.md#duplicateModelUsingPOST) | **POST** /api/enterprise/models/{modelId}/clone | To duplicate an existing model
*ActivitiPublicRestApi.ModelsApi* | [**getModelJSONUsingGET**](docs/ModelsApi.md#getModelJSONUsingGET) | **GET** /api/enterprise/models/{modelId}/editor/json | Get the JSON model
*ActivitiPublicRestApi.ModelsApi* | [**getModelThumbnailUsingGET**](docs/ModelsApi.md#getModelThumbnailUsingGET) | **GET** /api/enterprise/models/{modelId}/thumbnail | Get Model thumbnail
*ActivitiPublicRestApi.ModelsApi* | [**getModelUsingGET**](docs/ModelsApi.md#getModelUsingGET) | **GET** /api/enterprise/models/{modelId} | To retrieve details about a particular model (process, form, decision rule or app)
*ActivitiPublicRestApi.ModelsApi* | [**getModelsToIncludeInAppDefinitionUsingGET**](docs/ModelsApi.md#getModelsToIncludeInAppDefinitionUsingGET) | **GET** /api/enterprise/models-for-app-definition | TODO
*ActivitiPublicRestApi.ModelsApi* | [**getModelsUsingGET**](docs/ModelsApi.md#getModelsUsingGET) | **GET** /api/enterprise/models | List models (process, form, decision rule or app)
*ActivitiPublicRestApi.ModelsApi* | [**importNewVersionUsingPOST**](docs/ModelsApi.md#importNewVersionUsingPOST) | **POST** /api/enterprise/models/{modelId}/newversion | Create a new model version
*ActivitiPublicRestApi.ModelsApi* | [**importProcessModelUsingPOST**](docs/ModelsApi.md#importProcessModelUsingPOST) | **POST** /api/enterprise/process-models/import | To import a BPMN 2.0 xml file
*ActivitiPublicRestApi.ModelsApi* | [**saveModelUsingPOST**](docs/ModelsApi.md#saveModelUsingPOST) | **POST** /api/enterprise/models/{modelId}/editor/json | Save the JSON model
*ActivitiPublicRestApi.ModelsApi* | [**updateModelUsingPUT**](docs/ModelsApi.md#updateModelUsingPUT) | **PUT** /api/enterprise/models/{modelId} | Edit a specific model
*ActivitiPublicRestApi.ModelsApi* | [**validateModelUsingPOST**](docs/ModelsApi.md#validateModelUsingPOST) | **POST** /api/enterprise/models/{modelId}/editor/validate | Validate the JSON model
*ActivitiPublicRestApi.ModelsHistoryApi* | [**getModelHistoryCollectionUsingGET**](docs/ModelsHistoryApi.md#getModelHistoryCollectionUsingGET) | **GET** /api/enterprise/models/{modelId}/history | To get the version information for a model
*ActivitiPublicRestApi.ModelsHistoryApi* | [**getProcessModelHistoryUsingGET**](docs/ModelsHistoryApi.md#getProcessModelHistoryUsingGET) | **GET** /api/enterprise/models/{modelId}/history/{modelHistoryId} | To get a particular older version of a model
*ActivitiPublicRestApi.ProcessApi* | [**deleteProcessInstanceUsingDELETE**](docs/ProcessApi.md#deleteProcessInstanceUsingDELETE) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
*ActivitiPublicRestApi.ProcessApi* | [**filterProcessInstancesUsingPOST**](docs/ProcessApi.md#filterProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
*ActivitiPublicRestApi.ProcessApi* | [**getProcessDefinitionStartFormUsingGET**](docs/ProcessApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
*ActivitiPublicRestApi.ProcessApi* | [**getProcessDefinitionsUsingGET**](docs/ProcessApi.md#getProcessDefinitionsUsingGET) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstanceContentUsingGET**](docs/ProcessApi.md#getProcessInstanceContentUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstanceStartFormUsingGET**](docs/ProcessApi.md#getProcessInstanceStartFormUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstanceUsingGET**](docs/ProcessApi.md#getProcessInstanceUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information
*ActivitiPublicRestApi.ProcessApi* | [**getProcessInstancesUsingPOST**](docs/ProcessApi.md#getProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances
*ActivitiPublicRestApi.ProcessApi* | [**getRestFieldValuesUsingGET**](docs/ProcessApi.md#getRestFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
*ActivitiPublicRestApi.ProcessApi* | [**getRestTableFieldValuesUsingGET**](docs/ProcessApi.md#getRestTableFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
*ActivitiPublicRestApi.ProcessApi* | [**startNewProcessInstanceUsingPOST**](docs/ProcessApi.md#startNewProcessInstanceUsingPOST) | **POST** /api/enterprise/process-instances | Start a process instance
*ActivitiPublicRestApi.ProcessDefinitionsApi* | [**getProcessDefinitionsUsingGET**](docs/ProcessDefinitionsApi.md#getProcessDefinitionsUsingGET) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions
*ActivitiPublicRestApi.ProcessDefinitionsFormApi* | [**getProcessDefinitionStartFormUsingGET**](docs/ProcessDefinitionsFormApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
*ActivitiPublicRestApi.ProcessDefinitionsFormApi* | [**getRestFieldValuesUsingGET**](docs/ProcessDefinitionsFormApi.md#getRestFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
*ActivitiPublicRestApi.ProcessDefinitionsFormApi* | [**getRestTableFieldValuesUsingGET**](docs/ProcessDefinitionsFormApi.md#getRestTableFieldValuesUsingGET) | **GET** /api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)
*ActivitiPublicRestApi.ProcessInstancesApi* | [**addProcessInstanceCommentUsingPOST**](docs/ProcessInstancesApi.md#addProcessInstanceCommentUsingPOST) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
*ActivitiPublicRestApi.ProcessInstancesApi* | [**deleteProcessInstanceUsingDELETE**](docs/ProcessInstancesApi.md#deleteProcessInstanceUsingDELETE) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
*ActivitiPublicRestApi.ProcessInstancesApi* | [**getProcessInstanceCommentsUsingGET**](docs/ProcessInstancesApi.md#getProcessInstanceCommentsUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
*ActivitiPublicRestApi.ProcessInstancesApi* | [**getProcessInstanceStartFormUsingGET**](docs/ProcessInstancesApi.md#getProcessInstanceStartFormUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
*ActivitiPublicRestApi.ProcessInstancesApi* | [**getProcessInstanceUsingGET**](docs/ProcessInstancesApi.md#getProcessInstanceUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information
*ActivitiPublicRestApi.ProcessInstancesInformationApi* | [**getProcessInstanceContentUsingGET**](docs/ProcessInstancesInformationApi.md#getProcessInstanceContentUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
*ActivitiPublicRestApi.ProcessInstancesInformationApi* | [**startNewProcessInstanceUsingPOST**](docs/ProcessInstancesInformationApi.md#startNewProcessInstanceUsingPOST) | **POST** /api/enterprise/process-instances | Start a process instance
*ActivitiPublicRestApi.ProcessInstancesListingApi* | [**filterProcessInstancesUsingPOST**](docs/ProcessInstancesListingApi.md#filterProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/filter | Filter a list of process instances
*ActivitiPublicRestApi.ProcessInstancesListingApi* | [**getProcessInstancesUsingPOST**](docs/ProcessInstancesListingApi.md#getProcessInstancesUsingPOST) | **POST** /api/enterprise/process-instances/query | Retrieve a list of process instances
*ActivitiPublicRestApi.ProcessScopeApi* | [**getRuntimeProcessScopesUsingPOST**](docs/ProcessScopeApi.md#getRuntimeProcessScopesUsingPOST) | **POST** /api/enterprise/process-scopes | getRuntimeProcessScopes
*ActivitiPublicRestApi.ProfileApi* | [**changePasswordUsingPOST**](docs/ProfileApi.md#changePasswordUsingPOST) | **POST** /api/enterprise/profile-password | Change user password
*ActivitiPublicRestApi.ProfileApi* | [**getProfilePictureUsingGET**](docs/ProfileApi.md#getProfilePictureUsingGET) | **GET** /api/enterprise/profile-picture | Retrieve user profile picture
*ActivitiPublicRestApi.ProfileApi* | [**getProfileUsingGET**](docs/ProfileApi.md#getProfileUsingGET) | **GET** /api/enterprise/profile | Retrieve user information
*ActivitiPublicRestApi.ProfileApi* | [**updateProfile**](docs/ProfileApi.md#updateProfile) | **POST** /api/enterprise/profile | Update user information
*ActivitiPublicRestApi.ProfileApi* | [**uploadProfilePictureUsingPOST**](docs/ProfileApi.md#uploadProfilePictureUsingPOST) | **POST** /api/enterprise/profile-picture | Change user profile picture
*ActivitiPublicRestApi.ScriptFileApi* | [**getControllersUsingGET**](docs/ScriptFileApi.md#getControllersUsingGET) | **GET** /api/enterprise/script-files/controllers | getControllers
*ActivitiPublicRestApi.ScriptFileApi* | [**getLibrariesUsingGET**](docs/ScriptFileApi.md#getLibrariesUsingGET) | **GET** /api/enterprise/script-files/libraries | getLibraries
*ActivitiPublicRestApi.SystemPropertiesApi* | [**getPropertiesUsingGET**](docs/SystemPropertiesApi.md#getPropertiesUsingGET) | **GET** /api/enterprise/system/properties | Retrieve System Properties
*ActivitiPublicRestApi.TaskApi* | [**addSubtaskUsingPOST**](docs/TaskApi.md#addSubtaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
*ActivitiPublicRestApi.TaskApi* | [**addTaskCommentUsingPOST**](docs/TaskApi.md#addTaskCommentUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
*ActivitiPublicRestApi.TaskApi* | [**assignTaskUsingPUT**](docs/TaskApi.md#assignTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
*ActivitiPublicRestApi.TaskApi* | [**attachFormUsingPUT**](docs/TaskApi.md#attachFormUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
*ActivitiPublicRestApi.TaskApi* | [**claimTaskUsingPUT**](docs/TaskApi.md#claimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
*ActivitiPublicRestApi.TaskApi* | [**completeTaskFormUsingPOST**](docs/TaskApi.md#completeTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
*ActivitiPublicRestApi.TaskApi* | [**completeTaskUsingPUT**](docs/TaskApi.md#completeTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
*ActivitiPublicRestApi.TaskApi* | [**createNewTaskUsingPOST**](docs/TaskApi.md#createNewTaskUsingPOST) | **POST** /api/enterprise/tasks | Create a Standalone Task
*ActivitiPublicRestApi.TaskApi* | [**createRelatedContentOnTaskUsingPOST**](docs/TaskApi.md#createRelatedContentOnTaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
*ActivitiPublicRestApi.TaskApi* | [**createRelatedContentOnTaskUsingPOST1**](docs/TaskApi.md#createRelatedContentOnTaskUsingPOST1) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
*ActivitiPublicRestApi.TaskApi* | [**deleteTaskUsingDELETE**](docs/TaskApi.md#deleteTaskUsingDELETE) | **DELETE** /api/enterprise/tasks/{taskId} | Delete a Task
*ActivitiPublicRestApi.TaskApi* | [**filterTasksUsingPOST**](docs/TaskApi.md#filterTasksUsingPOST) | **POST** /api/enterprise/tasks/filter | Filter list of Task
*ActivitiPublicRestApi.TaskApi* | [**getChecklistUsingGET**](docs/TaskApi.md#getChecklistUsingGET) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
*ActivitiPublicRestApi.TaskApi* | [**getRelatedContentForTaskUsingGET**](docs/TaskApi.md#getRelatedContentForTaskUsingGET) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task
*ActivitiPublicRestApi.TaskApi* | [**getRestFieldValuesUsingGET1**](docs/TaskApi.md#getRestFieldValuesUsingGET1) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
*ActivitiPublicRestApi.TaskApi* | [**getRestFieldValuesUsingGET2**](docs/TaskApi.md#getRestFieldValuesUsingGET2) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
*ActivitiPublicRestApi.TaskApi* | [**getTaskCommentsUsingGET**](docs/TaskApi.md#getTaskCommentsUsingGET) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task
*ActivitiPublicRestApi.TaskApi* | [**getTaskFormUsingGET**](docs/TaskApi.md#getTaskFormUsingGET) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
*ActivitiPublicRestApi.TaskApi* | [**getTaskUsingGET**](docs/TaskApi.md#getTaskUsingGET) | **GET** /api/enterprise/tasks/{taskId} | Task Details
*ActivitiPublicRestApi.TaskApi* | [**involveUserUsingPUT**](docs/TaskApi.md#involveUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
*ActivitiPublicRestApi.TaskApi* | [**listTasksUsingPOST**](docs/TaskApi.md#listTasksUsingPOST) | **POST** /api/enterprise/tasks/query | List Task
*ActivitiPublicRestApi.TaskApi* | [**orderChecklistUsingPUT**](docs/TaskApi.md#orderChecklistUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
*ActivitiPublicRestApi.TaskApi* | [**removeFormUsingDELETE**](docs/TaskApi.md#removeFormUsingDELETE) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
*ActivitiPublicRestApi.TaskApi* | [**removeInvolvedUserUsingPUT**](docs/TaskApi.md#removeInvolvedUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
*ActivitiPublicRestApi.TaskApi* | [**saveTaskFormUsingPOST**](docs/TaskApi.md#saveTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form
*ActivitiPublicRestApi.TaskApi* | [**unclaimTaskUsingPUT**](docs/TaskApi.md#unclaimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
*ActivitiPublicRestApi.TaskApi* | [**updateTaskUsingPUT**](docs/TaskApi.md#updateTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId} | Update Task Details
*ActivitiPublicRestApi.TaskActionsApi* | [**assignTaskUsingPUT**](docs/TaskActionsApi.md#assignTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
*ActivitiPublicRestApi.TaskActionsApi* | [**attachFormUsingPUT**](docs/TaskActionsApi.md#attachFormUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
*ActivitiPublicRestApi.TaskActionsApi* | [**claimTaskUsingPUT**](docs/TaskActionsApi.md#claimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
*ActivitiPublicRestApi.TaskActionsApi* | [**completeTaskUsingPUT**](docs/TaskActionsApi.md#completeTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
*ActivitiPublicRestApi.TaskActionsApi* | [**involveUserUsingPUT**](docs/TaskActionsApi.md#involveUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
*ActivitiPublicRestApi.TaskActionsApi* | [**removeFormUsingDELETE**](docs/TaskActionsApi.md#removeFormUsingDELETE) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
*ActivitiPublicRestApi.TaskActionsApi* | [**removeInvolvedUserUsingPUT**](docs/TaskActionsApi.md#removeInvolvedUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
*ActivitiPublicRestApi.TaskActionsApi* | [**unclaimTaskUsingPUT**](docs/TaskActionsApi.md#unclaimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
*ActivitiPublicRestApi.TaskCheckListApi* | [**addSubtaskUsingPOST**](docs/TaskCheckListApi.md#addSubtaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
*ActivitiPublicRestApi.TaskCheckListApi* | [**getChecklistUsingGET**](docs/TaskCheckListApi.md#getChecklistUsingGET) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
*ActivitiPublicRestApi.TaskCheckListApi* | [**orderChecklistUsingPUT**](docs/TaskCheckListApi.md#orderChecklistUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
*ActivitiPublicRestApi.TaskFormsApi* | [**completeTaskFormUsingPOST**](docs/TaskFormsApi.md#completeTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
*ActivitiPublicRestApi.TaskFormsApi* | [**getRestFieldValuesUsingGET1**](docs/TaskFormsApi.md#getRestFieldValuesUsingGET1) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
*ActivitiPublicRestApi.TaskFormsApi* | [**getRestFieldValuesUsingGET2**](docs/TaskFormsApi.md#getRestFieldValuesUsingGET2) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
*ActivitiPublicRestApi.TaskFormsApi* | [**getTaskFormUsingGET**](docs/TaskFormsApi.md#getTaskFormUsingGET) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
*ActivitiPublicRestApi.TaskFormsApi* | [**saveTaskFormUsingPOST**](docs/TaskFormsApi.md#saveTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form
*ActivitiPublicRestApi.TemporaryApi* | [**completeTasksUsingGET**](docs/TemporaryApi.md#completeTasksUsingGET) | **GET** /api/enterprise/temporary/generate-report-data/complete-tasks | completeTasks
*ActivitiPublicRestApi.TemporaryApi* | [**generateDataUsingGET**](docs/TemporaryApi.md#generateDataUsingGET) | **GET** /api/enterprise/temporary/generate-report-data/start-process | generateData
*ActivitiPublicRestApi.TemporaryApi* | [**getHeadersUsingGET**](docs/TemporaryApi.md#getHeadersUsingGET) | **GET** /api/enterprise/temporary/example-headers | getHeaders
*ActivitiPublicRestApi.TemporaryApi* | [**getOptionsUsingGET**](docs/TemporaryApi.md#getOptionsUsingGET) | **GET** /api/enterprise/temporary/example-options | getOptions
*ActivitiPublicRestApi.UserApi* | [**executeActionUsingPOST**](docs/UserApi.md#executeActionUsingPOST) | **POST** /api/enterprise/users/{userId} | Execute an action for a specific user
*ActivitiPublicRestApi.UserApi* | [**getProfilePictureUsingGET1**](docs/UserApi.md#getProfilePictureUsingGET1) | **GET** /api/enterprise/users/{userId}/picture | Retrieve user profile picture
*ActivitiPublicRestApi.UserApi* | [**getUserUsingGET2**](docs/UserApi.md#getUserUsingGET2) | **GET** /api/enterprise/users/{userId} | Retrieve user information
*ActivitiPublicRestApi.UserApi* | [**getUsersUsingGET2**](docs/UserApi.md#getUsersUsingGET2) | **GET** /api/enterprise/users | List users
*ActivitiPublicRestApi.UserApi* | [**requestPasswordResetUsingPOST**](docs/UserApi.md#requestPasswordResetUsingPOST) | **POST** /api/enterprise/idm/passwords | Request password reset 
*ActivitiPublicRestApi.UserApi* | [**updateUserUsingPUT**](docs/UserApi.md#updateUserUsingPUT) | **PUT** /api/enterprise/users/{userId} | Update user information
*ActivitiPublicRestApi.UserFiltersApi* | [**createUserProcessInstanceFilterUsingPOST**](docs/UserFiltersApi.md#createUserProcessInstanceFilterUsingPOST) | **POST** /api/enterprise/filters/processes | Create a user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**createUserTaskFilterUsingPOST**](docs/UserFiltersApi.md#createUserTaskFilterUsingPOST) | **POST** /api/enterprise/filters/tasks | Create a new task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**deleteUserProcessInstanceFilterUsingDELETE**](docs/UserFiltersApi.md#deleteUserProcessInstanceFilterUsingDELETE) | **DELETE** /api/enterprise/filters/processes/{userFilterId} | Delete a user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**deleteUserTaskFilterUsingDELETE**](docs/UserFiltersApi.md#deleteUserTaskFilterUsingDELETE) | **DELETE** /api/enterprise/filters/tasks/{userFilterId} | Delete a task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserProcessInstanceFilterUsingGET**](docs/UserFiltersApi.md#getUserProcessInstanceFilterUsingGET) | **GET** /api/enterprise/filters/processes/{userFilterId} | Get a specific user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserProcessInstanceFiltersUsingGET**](docs/UserFiltersApi.md#getUserProcessInstanceFiltersUsingGET) | **GET** /api/enterprise/filters/processes | Retrieve list of taks filters
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserTaskFilterUsingGET**](docs/UserFiltersApi.md#getUserTaskFilterUsingGET) | **GET** /api/enterprise/filters/tasks/{userFilterId} | Get a specific task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**getUserTaskFiltersUsingGET**](docs/UserFiltersApi.md#getUserTaskFiltersUsingGET) | **GET** /api/enterprise/filters/tasks | Retrieve list of task filters
*ActivitiPublicRestApi.UserFiltersApi* | [**orderUserProcessInstanceFiltersUsingPUT**](docs/UserFiltersApi.md#orderUserProcessInstanceFiltersUsingPUT) | **PUT** /api/enterprise/filters/processes | To order the list of user process instance filters
*ActivitiPublicRestApi.UserFiltersApi* | [**orderUserTaskFiltersUsingPUT**](docs/UserFiltersApi.md#orderUserTaskFiltersUsingPUT) | **PUT** /api/enterprise/filters/tasks | To order the list of user task filters
*ActivitiPublicRestApi.UserFiltersApi* | [**updateUserProcessInstanceFilterUsingPUT**](docs/UserFiltersApi.md#updateUserProcessInstanceFilterUsingPUT) | **PUT** /api/enterprise/filters/processes/{userFilterId} | Update a user process instance task filter
*ActivitiPublicRestApi.UserFiltersApi* | [**updateUserTaskFilterUsingPUT**](docs/UserFiltersApi.md#updateUserTaskFilterUsingPUT) | **PUT** /api/enterprise/filters/tasks/{userFilterId} | Update a specific task filter
*ActivitiPublicRestApi.UsersWorkflowApi* | [**getUsersUsingGET2**](docs/UsersWorkflowApi.md#getUsersUsingGET2) | **GET** /api/enterprise/users | List users


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

