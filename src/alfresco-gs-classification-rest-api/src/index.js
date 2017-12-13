(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/ClassificationGuide', './model/ClassificationGuideBody', './model/ClassificationGuideEntry', './model/ClassificationGuideInTopic', './model/ClassificationGuidePaging', './model/ClassificationGuidePagingList', './model/ClassificationGuides', './model/ClassificationGuidesBody', './model/ClassificationGuidesEntry', './model/ClassificationGuidesInTopic', './model/ClassificationInformation', './model/ClassificationReason', './model/ClassificationReasonBody', './model/ClassificationReasonEntry', './model/ClassificationReasonsPaging', './model/ClassificationReasonsPagingList', './model/CombinedInstructionBody', './model/DeclassificationDate', './model/DeclassificationExemption', './model/DeclassificationExemptionBody', './model/DeclassificationExemptionEntry', './model/DeclassificationExemptionsPaging', './model/DeclassificationExemptionsPagingList', './model/Error', './model/ErrorError', './model/Instruction', './model/InstructionBody', './model/InstructionEntry', './model/Pagination', './model/Path', './model/PathElement', './model/SecurityControlSetting', './model/SecurityControlSettingBody', './model/SecurityControlSettingEntry', './model/SecurityMark', './model/SecurityMarkBody', './model/SecurityMarkInformation', './model/SecurityMarkInformationBody', './model/SecurityMarks', './model/SecurityMarksBody', './model/SubtopicPaging', './model/Topic', './model/TopicBody', './model/TopicEntry', './model/TopicPaging', './model/TopicPagingList', './api/ClassificationguidesApi', './api/ClassificationreasonsApi', './api/DeclassificationexemptionsApi', './api/DefaultclassificationvaluesApi', './api/SecuritycontrolsettingsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/ClassificationGuide'), require('./model/ClassificationGuideBody'), require('./model/ClassificationGuideEntry'), require('./model/ClassificationGuideInTopic'), require('./model/ClassificationGuidePaging'), require('./model/ClassificationGuidePagingList'), require('./model/ClassificationGuides'), require('./model/ClassificationGuidesBody'), require('./model/ClassificationGuidesEntry'), require('./model/ClassificationGuidesInTopic'), require('./model/ClassificationInformation'), require('./model/ClassificationReason'), require('./model/ClassificationReasonBody'), require('./model/ClassificationReasonEntry'), require('./model/ClassificationReasonsPaging'), require('./model/ClassificationReasonsPagingList'), require('./model/CombinedInstructionBody'), require('./model/DeclassificationDate'), require('./model/DeclassificationExemption'), require('./model/DeclassificationExemptionBody'), require('./model/DeclassificationExemptionEntry'), require('./model/DeclassificationExemptionsPaging'), require('./model/DeclassificationExemptionsPagingList'), require('./model/Error'), require('./model/ErrorError'), require('./model/Instruction'), require('./model/InstructionBody'), require('./model/InstructionEntry'), require('./model/Pagination'), require('./model/Path'), require('./model/PathElement'), require('./model/SecurityControlSetting'), require('./model/SecurityControlSettingBody'), require('./model/SecurityControlSettingEntry'), require('./model/SecurityMark'), require('./model/SecurityMarkBody'), require('./model/SecurityMarkInformation'), require('./model/SecurityMarkInformationBody'), require('./model/SecurityMarks'), require('./model/SecurityMarksBody'), require('./model/SubtopicPaging'), require('./model/Topic'), require('./model/TopicBody'), require('./model/TopicEntry'), require('./model/TopicPaging'), require('./model/TopicPagingList'), require('./api/ClassificationguidesApi'), require('./api/ClassificationreasonsApi'), require('./api/DeclassificationexemptionsApi'), require('./api/DefaultclassificationvaluesApi'), require('./api/SecuritycontrolsettingsApi'));
  }
}(function(ApiClient, ClassificationGuide, ClassificationGuideBody, ClassificationGuideEntry, ClassificationGuideInTopic, ClassificationGuidePaging, ClassificationGuidePagingList, ClassificationGuides, ClassificationGuidesBody, ClassificationGuidesEntry, ClassificationGuidesInTopic, ClassificationInformation, ClassificationReason, ClassificationReasonBody, ClassificationReasonEntry, ClassificationReasonsPaging, ClassificationReasonsPagingList, CombinedInstructionBody, DeclassificationDate, DeclassificationExemption, DeclassificationExemptionBody, DeclassificationExemptionEntry, DeclassificationExemptionsPaging, DeclassificationExemptionsPagingList, Error, ErrorError, Instruction, InstructionBody, InstructionEntry, Pagination, Path, PathElement, SecurityControlSetting, SecurityControlSettingBody, SecurityControlSettingEntry, SecurityMark, SecurityMarkBody, SecurityMarkInformation, SecurityMarkInformationBody, SecurityMarks, SecurityMarksBody, SubtopicPaging, Topic, TopicBody, TopicEntry, TopicPaging, TopicPagingList, ClassificationguidesApi, ClassificationreasonsApi, DeclassificationexemptionsApi, DefaultclassificationvaluesApi, SecuritycontrolsettingsApi) {
  'use strict';

  /**
   * Provides access to classification and security mark related features..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoGovernanceServicesSecurityControls = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoGovernanceServicesSecurityControls.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoGovernanceServicesSecurityControls.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AlfrescoGovernanceServicesSecurityControls.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoGovernanceServicesSecurityControls.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ClassificationGuide model constructor.
     * @property {module:model/ClassificationGuide}
     */
    ClassificationGuide: ClassificationGuide,
    /**
     * The ClassificationGuideBody model constructor.
     * @property {module:model/ClassificationGuideBody}
     */
    ClassificationGuideBody: ClassificationGuideBody,
    /**
     * The ClassificationGuideEntry model constructor.
     * @property {module:model/ClassificationGuideEntry}
     */
    ClassificationGuideEntry: ClassificationGuideEntry,
    /**
     * The ClassificationGuideInTopic model constructor.
     * @property {module:model/ClassificationGuideInTopic}
     */
    ClassificationGuideInTopic: ClassificationGuideInTopic,
    /**
     * The ClassificationGuidePaging model constructor.
     * @property {module:model/ClassificationGuidePaging}
     */
    ClassificationGuidePaging: ClassificationGuidePaging,
    /**
     * The ClassificationGuidePagingList model constructor.
     * @property {module:model/ClassificationGuidePagingList}
     */
    ClassificationGuidePagingList: ClassificationGuidePagingList,
    /**
     * The ClassificationGuides model constructor.
     * @property {module:model/ClassificationGuides}
     */
    ClassificationGuides: ClassificationGuides,
    /**
     * The ClassificationGuidesBody model constructor.
     * @property {module:model/ClassificationGuidesBody}
     */
    ClassificationGuidesBody: ClassificationGuidesBody,
    /**
     * The ClassificationGuidesEntry model constructor.
     * @property {module:model/ClassificationGuidesEntry}
     */
    ClassificationGuidesEntry: ClassificationGuidesEntry,
    /**
     * The ClassificationGuidesInTopic model constructor.
     * @property {module:model/ClassificationGuidesInTopic}
     */
    ClassificationGuidesInTopic: ClassificationGuidesInTopic,
    /**
     * The ClassificationInformation model constructor.
     * @property {module:model/ClassificationInformation}
     */
    ClassificationInformation: ClassificationInformation,
    /**
     * The ClassificationReason model constructor.
     * @property {module:model/ClassificationReason}
     */
    ClassificationReason: ClassificationReason,
    /**
     * The ClassificationReasonBody model constructor.
     * @property {module:model/ClassificationReasonBody}
     */
    ClassificationReasonBody: ClassificationReasonBody,
    /**
     * The ClassificationReasonEntry model constructor.
     * @property {module:model/ClassificationReasonEntry}
     */
    ClassificationReasonEntry: ClassificationReasonEntry,
    /**
     * The ClassificationReasonsPaging model constructor.
     * @property {module:model/ClassificationReasonsPaging}
     */
    ClassificationReasonsPaging: ClassificationReasonsPaging,
    /**
     * The ClassificationReasonsPagingList model constructor.
     * @property {module:model/ClassificationReasonsPagingList}
     */
    ClassificationReasonsPagingList: ClassificationReasonsPagingList,
    /**
     * The CombinedInstructionBody model constructor.
     * @property {module:model/CombinedInstructionBody}
     */
    CombinedInstructionBody: CombinedInstructionBody,
    /**
     * The DeclassificationDate model constructor.
     * @property {module:model/DeclassificationDate}
     */
    DeclassificationDate: DeclassificationDate,
    /**
     * The DeclassificationExemption model constructor.
     * @property {module:model/DeclassificationExemption}
     */
    DeclassificationExemption: DeclassificationExemption,
    /**
     * The DeclassificationExemptionBody model constructor.
     * @property {module:model/DeclassificationExemptionBody}
     */
    DeclassificationExemptionBody: DeclassificationExemptionBody,
    /**
     * The DeclassificationExemptionEntry model constructor.
     * @property {module:model/DeclassificationExemptionEntry}
     */
    DeclassificationExemptionEntry: DeclassificationExemptionEntry,
    /**
     * The DeclassificationExemptionsPaging model constructor.
     * @property {module:model/DeclassificationExemptionsPaging}
     */
    DeclassificationExemptionsPaging: DeclassificationExemptionsPaging,
    /**
     * The DeclassificationExemptionsPagingList model constructor.
     * @property {module:model/DeclassificationExemptionsPagingList}
     */
    DeclassificationExemptionsPagingList: DeclassificationExemptionsPagingList,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The Instruction model constructor.
     * @property {module:model/Instruction}
     */
    Instruction: Instruction,
    /**
     * The InstructionBody model constructor.
     * @property {module:model/InstructionBody}
     */
    InstructionBody: InstructionBody,
    /**
     * The InstructionEntry model constructor.
     * @property {module:model/InstructionEntry}
     */
    InstructionEntry: InstructionEntry,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The Path model constructor.
     * @property {module:model/Path}
     */
    Path: Path,
    /**
     * The PathElement model constructor.
     * @property {module:model/PathElement}
     */
    PathElement: PathElement,
    /**
     * The SecurityControlSetting model constructor.
     * @property {module:model/SecurityControlSetting}
     */
    SecurityControlSetting: SecurityControlSetting,
    /**
     * The SecurityControlSettingBody model constructor.
     * @property {module:model/SecurityControlSettingBody}
     */
    SecurityControlSettingBody: SecurityControlSettingBody,
    /**
     * The SecurityControlSettingEntry model constructor.
     * @property {module:model/SecurityControlSettingEntry}
     */
    SecurityControlSettingEntry: SecurityControlSettingEntry,
    /**
     * The SecurityMark model constructor.
     * @property {module:model/SecurityMark}
     */
    SecurityMark: SecurityMark,
    /**
     * The SecurityMarkBody model constructor.
     * @property {module:model/SecurityMarkBody}
     */
    SecurityMarkBody: SecurityMarkBody,
    /**
     * The SecurityMarkInformation model constructor.
     * @property {module:model/SecurityMarkInformation}
     */
    SecurityMarkInformation: SecurityMarkInformation,
    /**
     * The SecurityMarkInformationBody model constructor.
     * @property {module:model/SecurityMarkInformationBody}
     */
    SecurityMarkInformationBody: SecurityMarkInformationBody,
    /**
     * The SecurityMarks model constructor.
     * @property {module:model/SecurityMarks}
     */
    SecurityMarks: SecurityMarks,
    /**
     * The SecurityMarksBody model constructor.
     * @property {module:model/SecurityMarksBody}
     */
    SecurityMarksBody: SecurityMarksBody,
    /**
     * The SubtopicPaging model constructor.
     * @property {module:model/SubtopicPaging}
     */
    SubtopicPaging: SubtopicPaging,
    /**
     * The Topic model constructor.
     * @property {module:model/Topic}
     */
    Topic: Topic,
    /**
     * The TopicBody model constructor.
     * @property {module:model/TopicBody}
     */
    TopicBody: TopicBody,
    /**
     * The TopicEntry model constructor.
     * @property {module:model/TopicEntry}
     */
    TopicEntry: TopicEntry,
    /**
     * The TopicPaging model constructor.
     * @property {module:model/TopicPaging}
     */
    TopicPaging: TopicPaging,
    /**
     * The TopicPagingList model constructor.
     * @property {module:model/TopicPagingList}
     */
    TopicPagingList: TopicPagingList,
    /**
     * The ClassificationguidesApi service constructor.
     * @property {module:api/ClassificationguidesApi}
     */
    ClassificationguidesApi: ClassificationguidesApi,
    /**
     * The ClassificationreasonsApi service constructor.
     * @property {module:api/ClassificationreasonsApi}
     */
    ClassificationreasonsApi: ClassificationreasonsApi,
    /**
     * The DeclassificationexemptionsApi service constructor.
     * @property {module:api/DeclassificationexemptionsApi}
     */
    DeclassificationexemptionsApi: DeclassificationexemptionsApi,
    /**
     * The DefaultclassificationvaluesApi service constructor.
     * @property {module:api/DefaultclassificationvaluesApi}
     */
    DefaultclassificationvaluesApi: DefaultclassificationvaluesApi,
    /**
     * The SecuritycontrolsettingsApi service constructor.
     * @property {module:api/SecuritycontrolsettingsApi}
     */
    SecuritycontrolsettingsApi: SecuritycontrolsettingsApi
  };

  return exports;
}));
