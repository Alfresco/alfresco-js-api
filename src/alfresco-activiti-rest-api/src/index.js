(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/AbstractGroupRepresentation', './model/AbstractRepresentation', './model/AbstractUserRepresentation', './model/AddGroupCapabilitiesRepresentation', './model/AppDefinition', './model/AppDefinitionPublishRepresentation', './model/AppDefinitionRepresentation', './model/AppDefinitionUpdateResultRepresentation', './model/AppModelDefinition', './model/ArrayNode', './model/BoxUserAccountCredentialsRepresentation', './model/BulkUserUpdateRepresentation', './model/ChangePasswordRepresentation', './model/ChecklistOrderRepresentation', './model/CommentRepresentation', './model/CompleteFormRepresentation', './model/ConditionRepresentation', './model/CreateEndpointBasicAuthRepresentation', './model/CreateProcessInstanceRepresentation', './model/CreateTenantRepresentation', './model/EndpointBasicAuthRepresentation', './model/EndpointConfigurationRepresentation', './model/EndpointRequestHeaderRepresentation', './model/EntityAttributeScopeRepresentation', './model/EntityVariableScopeRepresentation', './model/File', './model/FormDefinitionRepresentation', './model/FormFieldRepresentation', './model/FormJavascriptEventRepresentation', './model/FormOutcomeRepresentation', './model/FormRepresentation', './model/FormSaveRepresentation', './model/FormScopeRepresentation', './model/FormTabRepresentation', './model/FormValueRepresentation', './model/GroupCapabilityRepresentation', './model/GroupRepresentation', './model/ImageUploadRepresentation', './model/LayoutRepresentation', './model/LightAppRepresentation', './model/LightGroupRepresentation', './model/LightTenantRepresentation', './model/LightUserRepresentation', './model/MaplongListstring', './model/MapstringListEntityVariableScopeRepresentation', './model/MapstringListVariableScopeRepresentation', './model/Mapstringstring', './model/ModelRepresentation', './model/ObjectNode', './model/OptionRepresentation', './model/ProcessFilterRequestRepresentation', './model/ProcessInstanceFilterRepresentation', './model/ProcessInstanceFilterRequestRepresentation', './model/ProcessInstanceRepresentation', './model/ProcessInstanceVariableRepresentation', './model/ProcessScopeIdentifierRepresentation', './model/ProcessScopeRepresentation', './model/ProcessScopesRequestRepresentation', './model/PublishIdentityInfoRepresentation', './model/RelatedContentRepresentation', './model/ResetPasswordRepresentation', './model/RestVariable', './model/ResultListDataRepresentation', './model/RuntimeAppDefinitionSaveRepresentation', './model/SaveFormRepresentation', './model/SyncLogEntryRepresentation', './model/SystemPropertiesRepresentation', './model/TaskFilterRepresentation', './model/TaskFilterRequestRepresentation', './model/TaskQueryRequestRepresentation', './model/TaskRepresentation', './model/TaskUpdateRepresentation', './model/TenantEvent', './model/TenantRepresentation', './model/UserAccountCredentialsRepresentation', './model/UserActionRepresentation', './model/UserFilterOrderRepresentation', './model/UserProcessInstanceFilterRepresentation', './model/UserRepresentation', './model/UserTaskFilterRepresentation', './model/ValidationErrorRepresentation', './model/VariableScopeRepresentation', './api/AboutApi', './api/AdminEndpointsApi', './api/AdminGroupsApi', './api/AdminTenantsApi', './api/AdminUsersApi', './api/AlfrescoApi', './api/AppsApi', './api/AppsDefinitionApi', './api/AppsRuntimeApi', './api/CommentsApi', './api/ContentApi', './api/ContentRenditionApi', './api/EditorApi', './api/GroupsApi', './api/IDMSyncApi', './api/IntegrationApi', './api/IntegrationAccountApi', './api/IntegrationAlfrescoCloudApi', './api/IntegrationAlfrescoOnPremiseApi', './api/IntegrationBoxApi', './api/IntegrationDriveApi', './api/ModelBpmnApi', './api/ModelJsonBpmnApi', './api/ModelsApi', './api/ModelsHistoryApi', './api/ProcessApi', './api/ProcessDefinitionsApi', './api/ProcessDefinitionsFormApi', './api/ProcessInstancesApi', './api/ProcessInstancesInformationApi', './api/ProcessInstancesListingApi', './api/ProcessInstanceVariablesApi', './api/ProcessScopeApi', './api/ProfileApi', './api/ScriptFileApi', './api/SystemPropertiesApi', './api/TaskApi', './api/TaskActionsApi', './api/TaskCheckListApi', './api/TaskFormsApi', './api/TemporaryApi', './api/UserApi', './api/UserFiltersApi', './api/UsersWorkflowApi', './api/ReportApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/AbstractGroupRepresentation'), require('./model/AbstractRepresentation'), require('./model/AbstractUserRepresentation'), require('./model/AddGroupCapabilitiesRepresentation'), require('./model/AppDefinition'), require('./model/AppDefinitionPublishRepresentation'), require('./model/AppDefinitionRepresentation'), require('./model/AppDefinitionUpdateResultRepresentation'), require('./model/AppModelDefinition'), require('./model/ArrayNode'), require('./model/BoxUserAccountCredentialsRepresentation'), require('./model/BulkUserUpdateRepresentation'), require('./model/ChangePasswordRepresentation'), require('./model/ChecklistOrderRepresentation'), require('./model/CommentRepresentation'), require('./model/CompleteFormRepresentation'), require('./model/ConditionRepresentation'), require('./model/CreateEndpointBasicAuthRepresentation'), require('./model/CreateProcessInstanceRepresentation'), require('./model/CreateTenantRepresentation'), require('./model/EndpointBasicAuthRepresentation'), require('./model/EndpointConfigurationRepresentation'), require('./model/EndpointRequestHeaderRepresentation'), require('./model/EntityAttributeScopeRepresentation'), require('./model/EntityVariableScopeRepresentation'), require('./model/File'), require('./model/FormDefinitionRepresentation'), require('./model/FormFieldRepresentation'), require('./model/FormJavascriptEventRepresentation'), require('./model/FormOutcomeRepresentation'), require('./model/FormRepresentation'), require('./model/FormSaveRepresentation'), require('./model/FormScopeRepresentation'), require('./model/FormTabRepresentation'), require('./model/FormValueRepresentation'), require('./model/GroupCapabilityRepresentation'), require('./model/GroupRepresentation'), require('./model/ImageUploadRepresentation'), require('./model/LayoutRepresentation'), require('./model/LightAppRepresentation'), require('./model/LightGroupRepresentation'), require('./model/LightTenantRepresentation'), require('./model/LightUserRepresentation'), require('./model/MaplongListstring'), require('./model/MapstringListEntityVariableScopeRepresentation'), require('./model/MapstringListVariableScopeRepresentation'), require('./model/Mapstringstring'), require('./model/ModelRepresentation'), require('./model/ObjectNode'), require('./model/OptionRepresentation'), require('./model/ProcessFilterRequestRepresentation'), require('./model/ProcessInstanceFilterRepresentation'), require('./model/ProcessInstanceFilterRequestRepresentation'), require('./model/ProcessInstanceRepresentation'), require('./model/ProcessInstanceVariableRepresentation'), require('./model/ProcessScopeIdentifierRepresentation'), require('./model/ProcessScopeRepresentation'), require('./model/ProcessScopesRequestRepresentation'), require('./model/PublishIdentityInfoRepresentation'), require('./model/RelatedContentRepresentation'), require('./model/ResetPasswordRepresentation'), require('./model/RestVariable'), require('./model/ResultListDataRepresentation'), require('./model/RuntimeAppDefinitionSaveRepresentation'), require('./model/SaveFormRepresentation'), require('./model/SyncLogEntryRepresentation'), require('./model/SystemPropertiesRepresentation'), require('./model/TaskFilterRepresentation'), require('./model/TaskFilterRequestRepresentation'), require('./model/TaskQueryRequestRepresentation'), require('./model/TaskRepresentation'), require('./model/TaskUpdateRepresentation'), require('./model/TenantEvent'), require('./model/TenantRepresentation'), require('./model/UserAccountCredentialsRepresentation'), require('./model/UserActionRepresentation'), require('./model/UserFilterOrderRepresentation'), require('./model/UserProcessInstanceFilterRepresentation'), require('./model/UserRepresentation'), require('./model/UserTaskFilterRepresentation'), require('./model/ValidationErrorRepresentation'), require('./model/VariableScopeRepresentation'), require('./api/AboutApi'), require('./api/AdminEndpointsApi'), require('./api/AdminGroupsApi'), require('./api/AdminTenantsApi'), require('./api/AdminUsersApi'), require('./api/AlfrescoApi'), require('./api/AppsApi'), require('./api/AppsDefinitionApi'), require('./api/AppsRuntimeApi'), require('./api/CommentsApi'), require('./api/ContentApi'), require('./api/ContentRenditionApi'), require('./api/EditorApi'), require('./api/GroupsApi'), require('./api/IDMSyncApi'), require('./api/IntegrationApi'), require('./api/IntegrationAccountApi'), require('./api/IntegrationAlfrescoCloudApi'), require('./api/IntegrationAlfrescoOnPremiseApi'), require('./api/IntegrationBoxApi'), require('./api/IntegrationDriveApi'), require('./api/ModelBpmnApi'), require('./api/ModelJsonBpmnApi'), require('./api/ModelsApi'), require('./api/ModelsHistoryApi'), require('./api/ProcessApi'), require('./api/ProcessDefinitionsApi'), require('./api/ProcessDefinitionsFormApi'), require('./api/ProcessInstancesApi'), require('./api/ProcessInstancesInformationApi'), require('./api/ProcessInstancesListingApi'), require('./api/ProcessInstanceVariablesApi'), require('./api/ProcessScopeApi'), require('./api/ProfileApi'), require('./api/ScriptFileApi'), require('./api/SystemPropertiesApi'), require('./api/TaskApi'), require('./api/TaskActionsApi'), require('./api/TaskCheckListApi'), require('./api/TaskFormsApi'), require('./api/TemporaryApi'), require('./api/UserApi'), require('./api/UserFiltersApi'), require('./api/UsersWorkflowApi'), require('./api/ReportApi'));
  }
}(function(ApiClient, AbstractGroupRepresentation, AbstractRepresentation, AbstractUserRepresentation, AddGroupCapabilitiesRepresentation, AppDefinition, AppDefinitionPublishRepresentation, AppDefinitionRepresentation, AppDefinitionUpdateResultRepresentation, AppModelDefinition, ArrayNode, BoxUserAccountCredentialsRepresentation, BulkUserUpdateRepresentation, ChangePasswordRepresentation, ChecklistOrderRepresentation, CommentRepresentation, CompleteFormRepresentation, ConditionRepresentation, CreateEndpointBasicAuthRepresentation, CreateProcessInstanceRepresentation, CreateTenantRepresentation, EndpointBasicAuthRepresentation, EndpointConfigurationRepresentation, EndpointRequestHeaderRepresentation, EntityAttributeScopeRepresentation, EntityVariableScopeRepresentation, File, FormDefinitionRepresentation, FormFieldRepresentation, FormJavascriptEventRepresentation, FormOutcomeRepresentation, FormRepresentation, FormSaveRepresentation, FormScopeRepresentation, FormTabRepresentation, FormValueRepresentation, GroupCapabilityRepresentation, GroupRepresentation, ImageUploadRepresentation, LayoutRepresentation, LightAppRepresentation, LightGroupRepresentation, LightTenantRepresentation, LightUserRepresentation, MaplongListstring, MapstringListEntityVariableScopeRepresentation, MapstringListVariableScopeRepresentation, Mapstringstring, ModelRepresentation, ObjectNode, OptionRepresentation, ProcessFilterRequestRepresentation, ProcessInstanceFilterRepresentation, ProcessInstanceFilterRequestRepresentation, ProcessInstanceRepresentation, ProcessInstanceVariableRepresentation, ProcessScopeIdentifierRepresentation, ProcessScopeRepresentation, ProcessScopesRequestRepresentation, PublishIdentityInfoRepresentation, RelatedContentRepresentation, ResetPasswordRepresentation, RestVariable, ResultListDataRepresentation, RuntimeAppDefinitionSaveRepresentation, SaveFormRepresentation, SyncLogEntryRepresentation, SystemPropertiesRepresentation, TaskFilterRepresentation, TaskFilterRequestRepresentation, TaskQueryRequestRepresentation, TaskRepresentation, TaskUpdateRepresentation, TenantEvent, TenantRepresentation, UserAccountCredentialsRepresentation, UserActionRepresentation, UserFilterOrderRepresentation, UserProcessInstanceFilterRepresentation, UserRepresentation, UserTaskFilterRepresentation, ValidationErrorRepresentation, VariableScopeRepresentation, AboutApi, AdminEndpointsApi, AdminGroupsApi, AdminTenantsApi, AdminUsersApi, AlfrescoApi, AppsApi, AppsDefinitionApi, AppsRuntimeApi, CommentsApi, ContentApi, ContentRenditionApi, EditorApi, GroupsApi, IDMSyncApi, IntegrationApi, IntegrationAccountApi, IntegrationAlfrescoCloudApi, IntegrationAlfrescoOnPremiseApi, IntegrationBoxApi, IntegrationDriveApi, ModelBpmnApi, ModelJsonBpmnApi, ModelsApi, ModelsHistoryApi, ProcessApi, ProcessDefinitionsApi, ProcessDefinitionsFormApi, ProcessInstancesApi, ProcessInstancesInformationApi, ProcessInstancesListingApi, ProcessInstanceVariablesApi, ProcessScopeApi, ProfileApi, ScriptFileApi, SystemPropertiesApi, TaskApi, TaskActionsApi, TaskCheckListApi, TaskFormsApi, TemporaryApi, UserApi, UserFiltersApi, UsersWorkflowApi, ReportApi) {
  'use strict';

  /**
   *  The Alfresco Activiti BPM Suite comes with a REST API. It includes both an Enterprise equivalent of the Activiti Open Source REST API exposing the generic Activiti Engine operations, and a dedicated set op REST API endpoints specific for the functionality in the Alfresco Activiti BPM Suite.        Note that there is also an &#39;internal&#39; REST API, which are the REST endpoints used by the Javascript UI. It is advised not to use this API, these REST API urls and way of using it will change and evolve with the product and are unsupported. The supported API is stable. Also, the internal REST API uses a different authentication mechanism tailored towards web browser usage. .<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ActivitiPublicRestApi = require('index'); // See note below*.
   * var xxxSvc = new ActivitiPublicRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ActivitiPublicRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ActivitiPublicRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ActivitiPublicRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.4.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AbstractGroupRepresentation model constructor.
     * @property {module:model/AbstractGroupRepresentation}
     */
    AbstractGroupRepresentation: AbstractGroupRepresentation,
    /**
     * The AbstractRepresentation model constructor.
     * @property {module:model/AbstractRepresentation}
     */
    AbstractRepresentation: AbstractRepresentation,
    /**
     * The AbstractUserRepresentation model constructor.
     * @property {module:model/AbstractUserRepresentation}
     */
    AbstractUserRepresentation: AbstractUserRepresentation,
    /**
     * The AddGroupCapabilitiesRepresentation model constructor.
     * @property {module:model/AddGroupCapabilitiesRepresentation}
     */
    AddGroupCapabilitiesRepresentation: AddGroupCapabilitiesRepresentation,
    /**
     * The AppDefinition model constructor.
     * @property {module:model/AppDefinition}
     */
    AppDefinition: AppDefinition,
    /**
     * The AppDefinitionPublishRepresentation model constructor.
     * @property {module:model/AppDefinitionPublishRepresentation}
     */
    AppDefinitionPublishRepresentation: AppDefinitionPublishRepresentation,
    /**
     * The AppDefinitionRepresentation model constructor.
     * @property {module:model/AppDefinitionRepresentation}
     */
    AppDefinitionRepresentation: AppDefinitionRepresentation,
    /**
     * The AppDefinitionUpdateResultRepresentation model constructor.
     * @property {module:model/AppDefinitionUpdateResultRepresentation}
     */
    AppDefinitionUpdateResultRepresentation: AppDefinitionUpdateResultRepresentation,
    /**
     * The AppModelDefinition model constructor.
     * @property {module:model/AppModelDefinition}
     */
    AppModelDefinition: AppModelDefinition,
    /**
     * The ArrayNode model constructor.
     * @property {module:model/ArrayNode}
     */
    ArrayNode: ArrayNode,
    /**
     * The BoxUserAccountCredentialsRepresentation model constructor.
     * @property {module:model/BoxUserAccountCredentialsRepresentation}
     */
    BoxUserAccountCredentialsRepresentation: BoxUserAccountCredentialsRepresentation,
    /**
     * The BulkUserUpdateRepresentation model constructor.
     * @property {module:model/BulkUserUpdateRepresentation}
     */
    BulkUserUpdateRepresentation: BulkUserUpdateRepresentation,
    /**
     * The ChangePasswordRepresentation model constructor.
     * @property {module:model/ChangePasswordRepresentation}
     */
    ChangePasswordRepresentation: ChangePasswordRepresentation,
    /**
     * The ChecklistOrderRepresentation model constructor.
     * @property {module:model/ChecklistOrderRepresentation}
     */
    ChecklistOrderRepresentation: ChecklistOrderRepresentation,
    /**
     * The CommentRepresentation model constructor.
     * @property {module:model/CommentRepresentation}
     */
    CommentRepresentation: CommentRepresentation,
    /**
     * The CompleteFormRepresentation model constructor.
     * @property {module:model/CompleteFormRepresentation}
     */
    CompleteFormRepresentation: CompleteFormRepresentation,
    /**
     * The ConditionRepresentation model constructor.
     * @property {module:model/ConditionRepresentation}
     */
    ConditionRepresentation: ConditionRepresentation,
    /**
     * The CreateEndpointBasicAuthRepresentation model constructor.
     * @property {module:model/CreateEndpointBasicAuthRepresentation}
     */
    CreateEndpointBasicAuthRepresentation: CreateEndpointBasicAuthRepresentation,
    /**
     * The CreateProcessInstanceRepresentation model constructor.
     * @property {module:model/CreateProcessInstanceRepresentation}
     */
    CreateProcessInstanceRepresentation: CreateProcessInstanceRepresentation,
    /**
     * The CreateTenantRepresentation model constructor.
     * @property {module:model/CreateTenantRepresentation}
     */
    CreateTenantRepresentation: CreateTenantRepresentation,
    /**
     * The EndpointBasicAuthRepresentation model constructor.
     * @property {module:model/EndpointBasicAuthRepresentation}
     */
    EndpointBasicAuthRepresentation: EndpointBasicAuthRepresentation,
    /**
     * The EndpointConfigurationRepresentation model constructor.
     * @property {module:model/EndpointConfigurationRepresentation}
     */
    EndpointConfigurationRepresentation: EndpointConfigurationRepresentation,
    /**
     * The EndpointRequestHeaderRepresentation model constructor.
     * @property {module:model/EndpointRequestHeaderRepresentation}
     */
    EndpointRequestHeaderRepresentation: EndpointRequestHeaderRepresentation,
    /**
     * The EntityAttributeScopeRepresentation model constructor.
     * @property {module:model/EntityAttributeScopeRepresentation}
     */
    EntityAttributeScopeRepresentation: EntityAttributeScopeRepresentation,
    /**
     * The EntityVariableScopeRepresentation model constructor.
     * @property {module:model/EntityVariableScopeRepresentation}
     */
    EntityVariableScopeRepresentation: EntityVariableScopeRepresentation,
    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File: File,
    /**
     * The FormDefinitionRepresentation model constructor.
     * @property {module:model/FormDefinitionRepresentation}
     */
    FormDefinitionRepresentation: FormDefinitionRepresentation,
    /**
     * The FormFieldRepresentation model constructor.
     * @property {module:model/FormFieldRepresentation}
     */
    FormFieldRepresentation: FormFieldRepresentation,
    /**
     * The FormJavascriptEventRepresentation model constructor.
     * @property {module:model/FormJavascriptEventRepresentation}
     */
    FormJavascriptEventRepresentation: FormJavascriptEventRepresentation,
    /**
     * The FormOutcomeRepresentation model constructor.
     * @property {module:model/FormOutcomeRepresentation}
     */
    FormOutcomeRepresentation: FormOutcomeRepresentation,
    /**
     * The FormRepresentation model constructor.
     * @property {module:model/FormRepresentation}
     */
    FormRepresentation: FormRepresentation,
    /**
     * The FormSaveRepresentation model constructor.
     * @property {module:model/FormSaveRepresentation}
     */
    FormSaveRepresentation: FormSaveRepresentation,
    /**
     * The FormScopeRepresentation model constructor.
     * @property {module:model/FormScopeRepresentation}
     */
    FormScopeRepresentation: FormScopeRepresentation,
    /**
     * The FormTabRepresentation model constructor.
     * @property {module:model/FormTabRepresentation}
     */
    FormTabRepresentation: FormTabRepresentation,
    /**
     * The FormValueRepresentation model constructor.
     * @property {module:model/FormValueRepresentation}
     */
    FormValueRepresentation: FormValueRepresentation,
    /**
     * The GroupCapabilityRepresentation model constructor.
     * @property {module:model/GroupCapabilityRepresentation}
     */
    GroupCapabilityRepresentation: GroupCapabilityRepresentation,
    /**
     * The GroupRepresentation model constructor.
     * @property {module:model/GroupRepresentation}
     */
    GroupRepresentation: GroupRepresentation,
    /**
     * The ImageUploadRepresentation model constructor.
     * @property {module:model/ImageUploadRepresentation}
     */
    ImageUploadRepresentation: ImageUploadRepresentation,
    /**
     * The LayoutRepresentation model constructor.
     * @property {module:model/LayoutRepresentation}
     */
    LayoutRepresentation: LayoutRepresentation,
    /**
     * The LightAppRepresentation model constructor.
     * @property {module:model/LightAppRepresentation}
     */
    LightAppRepresentation: LightAppRepresentation,
    /**
     * The LightGroupRepresentation model constructor.
     * @property {module:model/LightGroupRepresentation}
     */
    LightGroupRepresentation: LightGroupRepresentation,
    /**
     * The LightTenantRepresentation model constructor.
     * @property {module:model/LightTenantRepresentation}
     */
    LightTenantRepresentation: LightTenantRepresentation,
    /**
     * The LightUserRepresentation model constructor.
     * @property {module:model/LightUserRepresentation}
     */
    LightUserRepresentation: LightUserRepresentation,
    /**
     * The MaplongListstring model constructor.
     * @property {module:model/MaplongListstring}
     */
    MaplongListstring: MaplongListstring,
    /**
     * The MapstringListEntityVariableScopeRepresentation model constructor.
     * @property {module:model/MapstringListEntityVariableScopeRepresentation}
     */
    MapstringListEntityVariableScopeRepresentation: MapstringListEntityVariableScopeRepresentation,
    /**
     * The MapstringListVariableScopeRepresentation model constructor.
     * @property {module:model/MapstringListVariableScopeRepresentation}
     */
    MapstringListVariableScopeRepresentation: MapstringListVariableScopeRepresentation,
    /**
     * The Mapstringstring model constructor.
     * @property {module:model/Mapstringstring}
     */
    Mapstringstring: Mapstringstring,
    /**
     * The ModelRepresentation model constructor.
     * @property {module:model/ModelRepresentation}
     */
    ModelRepresentation: ModelRepresentation,
    /**
     * The ObjectNode model constructor.
     * @property {module:model/ObjectNode}
     */
    ObjectNode: ObjectNode,
    /**
     * The OptionRepresentation model constructor.
     * @property {module:model/OptionRepresentation}
     */
    OptionRepresentation: OptionRepresentation,

    /**
    * The ProcessFilterRequestRepresentation model constructor.
    * @property {module:model/ProcessFilterRequestRepresentation}
    */
    ProcessFilterRequestRepresentation: ProcessFilterRequestRepresentation,

    /**
     * The ProcessInstanceFilterRepresentation model constructor.
     * @property {module:model/ProcessInstanceFilterRepresentation}
     */
    ProcessInstanceFilterRepresentation: ProcessInstanceFilterRepresentation,
    /**
     * The ProcessInstanceFilterRequestRepresentation model constructor.
     * @property {module:model/ProcessInstanceFilterRequestRepresentation}
     */
    ProcessInstanceFilterRequestRepresentation: ProcessInstanceFilterRequestRepresentation,
    /**
     * The ProcessInstanceRepresentation model constructor.
     * @property {module:model/ProcessInstanceRepresentation}
     */
    ProcessInstanceRepresentation: ProcessInstanceRepresentation,
    /**
     * The ProcessInstanceVariableRepresentation model constructor.
     * @property {module:model/ProcessInstanceVariableRepresentation}
     */
    ProcessInstanceVariableRepresentation: ProcessInstanceVariableRepresentation,
    /**
     * The ProcessScopeIdentifierRepresentation model constructor.
     * @property {module:model/ProcessScopeIdentifierRepresentation}
     */
    ProcessScopeIdentifierRepresentation: ProcessScopeIdentifierRepresentation,
    /**
     * The ProcessScopeRepresentation model constructor.
     * @property {module:model/ProcessScopeRepresentation}
     */
    ProcessScopeRepresentation: ProcessScopeRepresentation,
    /**
     * The ProcessScopesRequestRepresentation model constructor.
     * @property {module:model/ProcessScopesRequestRepresentation}
     */
    ProcessScopesRequestRepresentation: ProcessScopesRequestRepresentation,
    /**
     * The PublishIdentityInfoRepresentation model constructor.
     * @property {module:model/PublishIdentityInfoRepresentation}
     */
    PublishIdentityInfoRepresentation: PublishIdentityInfoRepresentation,
    /**
     * The RelatedContentRepresentation model constructor.
     * @property {module:model/RelatedContentRepresentation}
     */
    RelatedContentRepresentation: RelatedContentRepresentation,
    /**
     * The ResetPasswordRepresentation model constructor.
     * @property {module:model/ResetPasswordRepresentation}
     */
    ResetPasswordRepresentation: ResetPasswordRepresentation,
    /**
     * The RestVariable model constructor.
     * @property {module:model/RestVariable}
     */
    RestVariable: RestVariable,
    /**
     * The ResultListDataRepresentation model constructor.
     * @property {module:model/ResultListDataRepresentation}
     */
    ResultListDataRepresentation: ResultListDataRepresentation,
    /**
     * The RuntimeAppDefinitionSaveRepresentation model constructor.
     * @property {module:model/RuntimeAppDefinitionSaveRepresentation}
     */
    RuntimeAppDefinitionSaveRepresentation: RuntimeAppDefinitionSaveRepresentation,
    /**
     * The SaveFormRepresentation model constructor.
     * @property {module:model/SaveFormRepresentation}
     */
    SaveFormRepresentation: SaveFormRepresentation,
    /**
     * The SyncLogEntryRepresentation model constructor.
     * @property {module:model/SyncLogEntryRepresentation}
     */
    SyncLogEntryRepresentation: SyncLogEntryRepresentation,
    /**
     * The SystemPropertiesRepresentation model constructor.
     * @property {module:model/SystemPropertiesRepresentation}
     */
    SystemPropertiesRepresentation: SystemPropertiesRepresentation,
    /**
     * The TaskFilterRepresentation model constructor.
     * @property {module:model/TaskFilterRepresentation}
     */
    TaskFilterRepresentation: TaskFilterRepresentation,
    /**
     * The TaskFilterRequestRepresentation model constructor.
     * @property {module:model/TaskFilterRequestRepresentation}
     */
    TaskFilterRequestRepresentation: TaskFilterRequestRepresentation,
    /**
     * The TaskQueryRequestRepresentation model constructor.
     * @property {module:model/TaskQueryRequestRepresentation}
     */
     TaskQueryRequestRepresentation: TaskQueryRequestRepresentation,

      /**
     * The TaskRepresentation model constructor.
     * @property {module:model/TaskRepresentation}
     */
    TaskRepresentation: TaskRepresentation,
    /**
     * The TaskUpdateRepresentation model constructor.
     * @property {module:model/TaskUpdateRepresentation}
     */
    TaskUpdateRepresentation: TaskUpdateRepresentation,
    /**
     * The TenantEvent model constructor.
     * @property {module:model/TenantEvent}
     */
    TenantEvent: TenantEvent,
    /**
     * The TenantRepresentation model constructor.
     * @property {module:model/TenantRepresentation}
     */
    TenantRepresentation: TenantRepresentation,
    /**
     * The UserAccountCredentialsRepresentation model constructor.
     * @property {module:model/UserAccountCredentialsRepresentation}
     */
    UserAccountCredentialsRepresentation: UserAccountCredentialsRepresentation,
    /**
     * The UserActionRepresentation model constructor.
     * @property {module:model/UserActionRepresentation}
     */
    UserActionRepresentation: UserActionRepresentation,
    /**
     * The UserFilterOrderRepresentation model constructor.
     * @property {module:model/UserFilterOrderRepresentation}
     */
    UserFilterOrderRepresentation: UserFilterOrderRepresentation,
    /**
     * The UserProcessInstanceFilterRepresentation model constructor.
     * @property {module:model/UserProcessInstanceFilterRepresentation}
     */
    UserProcessInstanceFilterRepresentation: UserProcessInstanceFilterRepresentation,
    /**
     * The UserRepresentation model constructor.
     * @property {module:model/UserRepresentation}
     */
    UserRepresentation: UserRepresentation,
    /**
     * The UserTaskFilterRepresentation model constructor.
     * @property {module:model/UserTaskFilterRepresentation}
     */
    UserTaskFilterRepresentation: UserTaskFilterRepresentation,
    /**
     * The ValidationErrorRepresentation model constructor.
     * @property {module:model/ValidationErrorRepresentation}
     */
    ValidationErrorRepresentation: ValidationErrorRepresentation,
    /**
     * The VariableScopeRepresentation model constructor.
     * @property {module:model/VariableScopeRepresentation}
     */
    VariableScopeRepresentation: VariableScopeRepresentation,
    /**
     * The AboutApi service constructor.
     * @property {module:api/AboutApi}
     */
    AboutApi: AboutApi,
    /**
     * The AdminEndpointsApi service constructor.
     * @property {module:api/AdminEndpointsApi}
     */
    AdminEndpointsApi: AdminEndpointsApi,
    /**
     * The AdminGroupsApi service constructor.
     * @property {module:api/AdminGroupsApi}
     */
    AdminGroupsApi: AdminGroupsApi,
    /**
     * The AdminTenantsApi service constructor.
     * @property {module:api/AdminTenantsApi}
     */
    AdminTenantsApi: AdminTenantsApi,
    /**
     * The AdminUsersApi service constructor.
     * @property {module:api/AdminUsersApi}
     */
    AdminUsersApi: AdminUsersApi,
    /**
     * The AlfrescoApi service constructor.
     * @property {module:api/AlfrescoApi}
     */
    AlfrescoApi: AlfrescoApi,
    /**
     * The AppsApi service constructor.
     * @property {module:api/AppsApi}
     */
    AppsApi: AppsApi,
    /**
     * The AppsDefinitionApi service constructor.
     * @property {module:api/AppsDefinitionApi}
     */
    AppsDefinitionApi: AppsDefinitionApi,
    /**
     * The AppsRuntimeApi service constructor.
     * @property {module:api/AppsRuntimeApi}
     */
    AppsRuntimeApi: AppsRuntimeApi,
    /**
     * The CommentsApi service constructor.
     * @property {module:api/CommentsApi}
     */
    CommentsApi: CommentsApi,
    /**
     * The ContentApi service constructor.
     * @property {module:api/ContentApi}
     */
    ContentApi: ContentApi,
    /**
     * The ContentRenditionApi service constructor.
     * @property {module:api/ContentRenditionApi}
     */
    ContentRenditionApi: ContentRenditionApi,
    /**
     * The EditorApi service constructor.
     * @property {module:api/EditorApi}
     */
    EditorApi: EditorApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The IDMSyncApi service constructor.
     * @property {module:api/IDMSyncApi}
     */
    IDMSyncApi: IDMSyncApi,
    /**
     * The IntegrationApi service constructor.
     * @property {module:api/IntegrationApi}
     */
    IntegrationApi: IntegrationApi,
    /**
     * The IntegrationAccountApi service constructor.
     * @property {module:api/IntegrationAccountApi}
     */
    IntegrationAccountApi: IntegrationAccountApi,
    /**
     * The IntegrationAlfrescoCloudApi service constructor.
     * @property {module:api/IntegrationAlfrescoCloudApi}
     */
    IntegrationAlfrescoCloudApi: IntegrationAlfrescoCloudApi,
    /**
     * The IntegrationAlfrescoOnPremiseApi service constructor.
     * @property {module:api/IntegrationAlfrescoOnPremiseApi}
     */
    IntegrationAlfrescoOnPremiseApi: IntegrationAlfrescoOnPremiseApi,
    /**
     * The IntegrationBoxApi service constructor.
     * @property {module:api/IntegrationBoxApi}
     */
    IntegrationBoxApi: IntegrationBoxApi,
    /**
     * The IntegrationDriveApi service constructor.
     * @property {module:api/IntegrationDriveApi}
     */
    IntegrationDriveApi: IntegrationDriveApi,
    /**
     * The ModelBpmnApi service constructor.
     * @property {module:api/ModelBpmnApi}
     */
    ModelBpmnApi: ModelBpmnApi,
    /**
     * The ModelJsonBpmnApi service constructor.
     * @property {module:api/ModelJsonBpmnApi}
     */
    ModelJsonBpmnApi: ModelJsonBpmnApi,
    /**
     * The ModelsApi service constructor.
     * @property {module:api/ModelsApi}
     */
    ModelsApi: ModelsApi,
    /**
     * The ModelsHistoryApi service constructor.
     * @property {module:api/ModelsHistoryApi}
     */
    ModelsHistoryApi: ModelsHistoryApi,
    /**
     * The ProcessApi service constructor.
     * @property {module:api/ProcessApi}
     */
    ProcessApi: ProcessApi,
    /**
     * The ProcessDefinitionsApi service constructor.
     * @property {module:api/ProcessDefinitionsApi}
     */
    ProcessDefinitionsApi: ProcessDefinitionsApi,
    /**
     * The ProcessDefinitionsFormApi service constructor.
     * @property {module:api/ProcessDefinitionsFormApi}
     */
    ProcessDefinitionsFormApi: ProcessDefinitionsFormApi,
    /**
     * The ProcessInstancesApi service constructor.
     * @property {module:api/ProcessInstancesApi}
     */
    ProcessInstancesApi: ProcessInstancesApi,
    /**
     * The ProcessInstancesInformationApi service constructor.
     * @property {module:api/ProcessInstancesInformationApi}
     */
    ProcessInstancesInformationApi: ProcessInstancesInformationApi,
    /**
     * The ProcessInstancesListingApi service constructor.
     * @property {module:api/ProcessInstancesListingApi}
     */
    ProcessInstancesListingApi: ProcessInstancesListingApi,
    /**
     * The ProcessScopeApi service constructor.
     * @property {module:api/ProcessScopeApi}
     */
    ProcessScopeApi: ProcessScopeApi,
    /**
     * The ProcessInstanceVariablesApi service constructor.
     * @property {module:api/ProcessInstanceVariablesApi}
     */
    ProcessInstanceVariablesApi: ProcessInstanceVariablesApi,
    /**
     * The ProfileApi service constructor.
     * @property {module:api/ProfileApi}
     */
    ProfileApi: ProfileApi,
    /**
     * The ScriptFileApi service constructor.
     * @property {module:api/ScriptFileApi}
     */
    ScriptFileApi: ScriptFileApi,
    /**
     * The SystemPropertiesApi service constructor.
     * @property {module:api/SystemPropertiesApi}
     */
    SystemPropertiesApi: SystemPropertiesApi,
    /**
     * The TaskApi service constructor.
     * @property {module:api/TaskApi}
     */
    TaskApi: TaskApi,
    /**
     * The TaskActionsApi service constructor.
     * @property {module:api/TaskActionsApi}
     */
    TaskActionsApi: TaskActionsApi,
    /**
     * The TaskCheckListApi service constructor.
     * @property {module:api/TaskCheckListApi}
     */
    TaskCheckListApi: TaskCheckListApi,
    /**
     * The TaskFormsApi service constructor.
     * @property {module:api/TaskFormsApi}
     */
    TaskFormsApi: TaskFormsApi,
    /**
     * The TemporaryApi service constructor.
     * @property {module:api/TemporaryApi}
     */
    TemporaryApi: TemporaryApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The UserFiltersApi service constructor.
     * @property {module:api/UserFiltersApi}
     */
    UserFiltersApi: UserFiltersApi,
    /**
     * The UsersWorkflowApi service constructor.
     * @property {module:api/UsersWorkflowApi}
     */
    UsersWorkflowApi: UsersWorkflowApi,
    /**
     * The ReportApi service constructor.
     * @property {module:api/ReportApi}
     */
    ReportApi: ReportApi
  };

  return exports;
}));
