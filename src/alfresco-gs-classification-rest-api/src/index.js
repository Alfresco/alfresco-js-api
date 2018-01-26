

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../alfrescoApiClient', './model/ClassificationGuideBody', './model/ClassificationGuideEntry', './model/ClassificationGuidePaging', './model/ClassificationGuidePagingList', './model/ClassificationGuidesBody', './model/ClassificationGuidesEntry', './model/ClassificationInformation', './model/ClassificationReason', './model/ClassificationReasonBody', './model/ClassificationReasonEntry', './model/ClassificationReasonsPaging', './model/ClassificationReasonsPagingList', './model/DeclassificationDate', './model/DeclassificationExemption', './model/DeclassificationExemptionBody', './model/DeclassificationExemptionEntry', './model/DeclassificationExemptionsPaging', './model/DeclassificationExemptionsPagingList', './model/Error', './model/ErrorError', './model/Instruction', './model/InstructionBody', './model/InstructionEntry', './model/Pagination', './model/Path', './model/PathElement', './model/SecurityControlSetting', './model/SecurityControlSettingBody', './model/SecurityControlSettingEntry', './model/SecurityMark', './model/SecurityMarkBody', './model/SecurityMarkInformation', './model/SecurityMarkInformationBody', './model/SecurityMarks', './model/SecurityMarksBody', './model/SubtopicPaging', './model/Topic', './model/TopicBody', './model/TopicEntry', './model/TopicPaging', './model/TopicPagingList', './model/ClassificationGuideInTopic', './model/ClassificationGuidesInTopic', './model/CombinedInstructionBody', './model/ClassificationGuide', './model/ClassificationGuides', './api/ClassificationGuidesApi', './api/ClassificationReasonsApi', './api/DeclassificationExemptionsApi', './api/SecurityControlSettingsApi'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../alfrescoApiClient'), require('./model/ClassificationGuideBody'), require('./model/ClassificationGuideEntry'), require('./model/ClassificationGuidePaging'), require('./model/ClassificationGuidePagingList'), require('./model/ClassificationGuidesBody'), require('./model/ClassificationGuidesEntry'), require('./model/ClassificationInformation'), require('./model/ClassificationReason'), require('./model/ClassificationReasonBody'), require('./model/ClassificationReasonEntry'), require('./model/ClassificationReasonsPaging'), require('./model/ClassificationReasonsPagingList'), require('./model/DeclassificationDate'), require('./model/DeclassificationExemption'), require('./model/DeclassificationExemptionBody'), require('./model/DeclassificationExemptionEntry'), require('./model/DeclassificationExemptionsPaging'), require('./model/DeclassificationExemptionsPagingList'), require('./model/Error'), require('./model/ErrorError'), require('./model/Instruction'), require('./model/InstructionBody'), require('./model/InstructionEntry'), require('./model/Pagination'), require('./model/Path'), require('./model/PathElement'), require('./model/SecurityControlSetting'), require('./model/SecurityControlSettingBody'), require('./model/SecurityControlSettingEntry'), require('./model/SecurityMark'), require('./model/SecurityMarkBody'), require('./model/SecurityMarkInformation'), require('./model/SecurityMarkInformationBody'), require('./model/SecurityMarks'), require('./model/SecurityMarksBody'), require('./model/SubtopicPaging'), require('./model/Topic'), require('./model/TopicBody'), require('./model/TopicEntry'), require('./model/TopicPaging'), require('./model/TopicPagingList'), require('./model/ClassificationGuideInTopic'), require('./model/ClassificationGuidesInTopic'), require('./model/CombinedInstructionBody'), require('./model/ClassificationGuide'), require('./model/ClassificationGuides'), require('./api/ClassificationGuidesApi'), require('./api/ClassificationReasonsApi'),  require('./api/DeclassificationExemptionsApi'), require('./api/SecurityControlSettingsApi'));
    }
}(function (ApiClient, ClassificationGuideBody, ClassificationGuideEntry, ClassificationGuidePaging, ClassificationGuidePagingList, ClassificationGuidesBody, ClassificationGuidesEntry, ClassificationInformation, ClassificationReason, ClassificationReasonBody, ClassificationReasonEntry, ClassificationReasonsPaging, ClassificationReasonsPagingList, DeclassificationDate, DeclassificationExemption, DeclassificationExemptionBody, DeclassificationExemptionEntry, DeclassificationExemptionsPaging, DeclassificationExemptionsPagingList, Error, ErrorError, Instruction, InstructionBody, InstructionEntry, Pagination, Path, PathElement, SecurityControlSetting, SecurityControlSettingBody, SecurityControlSettingEntry, SecurityMark, SecurityMarkBody, SecurityMarkInformation, SecurityMarkInformationBody, SecurityMarks, SecurityMarksBody, SubtopicPaging, Topic, TopicBody, TopicEntry, TopicPaging, TopicPagingList, ClassificationGuideInTopic, ClassificationGuidesInTopic, CombinedInstructionBody, ClassificationGuide, ClassificationGuides, ClassificationGuidesApi, ClassificationReasonsApi, DeclassificationExemptionsApi, SecurityControlSettingsApi) {
    'use strict';

    /**
     * Provides_access_to_classification_and_security_mark_related_features_.<br>
     * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
     * <p>
     * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
     * <pre>
     * var AlfrescoGovernanceServicesSecurityControls = require('index'); // See note below*.
     * var xxxSvc = new AlfrescoGovernanceServicesSecurityControls.XxxApi(); // Allocate the API class we're going to use.
     * var yyyModel = new AlfrescoGovernanceServicesSecurityControls.Yyy(); // Construct a model instance.
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
         * @property {:ApiClient}
         */
        ApiClient: ApiClient,
        /**
         * The ClassificationGuideBody model constructor.
         * @property {ClassificationGuideBody}
         */
        ClassificationGuideBody: ClassificationGuideBody,
        /**
         * The ClassificationGuideEntry model constructor.
         * @property {ClassificationGuideEntry}
         */
        ClassificationGuideEntry: ClassificationGuideEntry,
        /**
         * The ClassificationGuidePaging model constructor.
         * @property {ClassificationGuidePaging}
         */
        ClassificationGuidePaging: ClassificationGuidePaging,
        /**
         * The ClassificationGuidePagingList model constructor.
         * @property {ClassificationGuidePagingList}
         */
        ClassificationGuidePagingList: ClassificationGuidePagingList,
        /**
         * The ClassificationGuidesBody model constructor.
         * @property {ClassificationGuidesBody}
         */
        ClassificationGuidesBody: ClassificationGuidesBody,
        /**
         * The ClassificationGuidesEntry model constructor.
         * @property {ClassificationGuidesEntry}
         */
        ClassificationGuidesEntry: ClassificationGuidesEntry,
        /**
         * The ClassificationInformation model constructor.
         * @property {ClassificationInformation}
         */
        ClassificationInformation: ClassificationInformation,
        /**
         * The ClassificationReason model constructor.
         * @property {ClassificationReason}
         */
        ClassificationReason: ClassificationReason,
        /**
         * The ClassificationReasonBody model constructor.
         * @property {ClassificationReasonBody}
         */
        ClassificationReasonBody: ClassificationReasonBody,
        /**
         * The ClassificationReasonEntry model constructor.
         * @property {ClassificationReasonEntry}
         */
        ClassificationReasonEntry: ClassificationReasonEntry,
        /**
         * The ClassificationReasonsPaging model constructor.
         * @property {ClassificationReasonsPaging}
         */
        ClassificationReasonsPaging: ClassificationReasonsPaging,
        /**
         * The ClassificationReasonsPagingList model constructor.
         * @property {ClassificationReasonsPagingList}
         */
        ClassificationReasonsPagingList: ClassificationReasonsPagingList,
        /**
         * The DeclassificationDate model constructor.
         * @property {DeclassificationDate}
         */
        DeclassificationDate: DeclassificationDate,
        /**
         * The DeclassificationExemption model constructor.
         * @property {DeclassificationExemption}
         */
        DeclassificationExemption: DeclassificationExemption,
        /**
         * The DeclassificationExemptionBody model constructor.
         * @property {DeclassificationExemptionBody}
         */
        DeclassificationExemptionBody: DeclassificationExemptionBody,
        /**
         * The DeclassificationExemptionEntry model constructor.
         * @property {DeclassificationExemptionEntry}
         */
        DeclassificationExemptionEntry: DeclassificationExemptionEntry,
        /**
         * The DeclassificationExemptionsPaging model constructor.
         * @property {DeclassificationExemptionsPaging}
         */
        DeclassificationExemptionsPaging: DeclassificationExemptionsPaging,
        /**
         * The DeclassificationExemptionsPagingList model constructor.
         * @property {DeclassificationExemptionsPagingList}
         */
        DeclassificationExemptionsPagingList: DeclassificationExemptionsPagingList,
        /**
         * The Error model constructor.
         * @property {Error}
         */
        Error: Error,
        /**
         * The ErrorError model constructor.
         * @property {ErrorError}
         */
        ErrorError: ErrorError,
        /**
         * The Instruction model constructor.
         * @property {Instruction}
         */
        Instruction: Instruction,
        /**
         * The InstructionBody model constructor.
         * @property {InstructionBody}
         */
        InstructionBody: InstructionBody,
        /**
         * The InstructionEntry model constructor.
         * @property {InstructionEntry}
         */
        InstructionEntry: InstructionEntry,
        /**
         * The Pagination model constructor.
         * @property {Pagination}
         */
        Pagination: Pagination,
        /**
         * The Path model constructor.
         * @property {Path}
         */
        Path: Path,
        /**
         * The PathElement model constructor.
         * @property {PathElement}
         */
        PathElement: PathElement,
        /**
         * The SecurityControlSetting model constructor.
         * @property {SecurityControlSetting}
         */
        SecurityControlSetting: SecurityControlSetting,
        /**
         * The SecurityControlSettingBody model constructor.
         * @property {SecurityControlSettingBody}
         */
        SecurityControlSettingBody: SecurityControlSettingBody,
        /**
         * The SecurityControlSettingEntry model constructor.
         * @property {SecurityControlSettingEntry}
         */
        SecurityControlSettingEntry: SecurityControlSettingEntry,
        /**
         * The SecurityMark model constructor.
         * @property {SecurityMark}
         */
        SecurityMark: SecurityMark,
        /**
         * The SecurityMarkBody model constructor.
         * @property {SecurityMarkBody}
         */
        SecurityMarkBody: SecurityMarkBody,
        /**
         * The SecurityMarkInformation model constructor.
         * @property {SecurityMarkInformation}
         */
        SecurityMarkInformation: SecurityMarkInformation,
        /**
         * The SecurityMarkInformationBody model constructor.
         * @property {SecurityMarkInformationBody}
         */
        SecurityMarkInformationBody: SecurityMarkInformationBody,
        /**
         * The SecurityMarks model constructor.
         * @property {SecurityMarks}
         */
        SecurityMarks: SecurityMarks,
        /**
         * The SecurityMarksBody model constructor.
         * @property {SecurityMarksBody}
         */
        SecurityMarksBody: SecurityMarksBody,
        /**
         * The SubtopicPaging model constructor.
         * @property {SubtopicPaging}
         */
        SubtopicPaging: SubtopicPaging,
        /**
         * The Topic model constructor.
         * @property {Topic}
         */
        Topic: Topic,
        /**
         * The TopicBody model constructor.
         * @property {TopicBody}
         */
        TopicBody: TopicBody,
        /**
         * The TopicEntry model constructor.
         * @property {TopicEntry}
         */
        TopicEntry: TopicEntry,
        /**
         * The TopicPaging model constructor.
         * @property {TopicPaging}
         */
        TopicPaging: TopicPaging,
        /**
         * The TopicPagingList model constructor.
         * @property {TopicPagingList}
         */
        TopicPagingList: TopicPagingList,
        /**
         * The ClassificationGuideInTopic model constructor.
         * @property {ClassificationGuideInTopic}
         */
        ClassificationGuideInTopic: ClassificationGuideInTopic,
        /**
         * The ClassificationGuidesInTopic model constructor.
         * @property {ClassificationGuidesInTopic}
         */
        ClassificationGuidesInTopic: ClassificationGuidesInTopic,
        /**
         * The CombinedInstructionBody model constructor.
         * @property {CombinedInstructionBody}
         */
        CombinedInstructionBody: CombinedInstructionBody,
        /**
         * The ClassificationGuide model constructor.
         * @property {ClassificationGuide}
         */
        ClassificationGuide: ClassificationGuide,
        /**
         * The ClassificationGuides model constructor.
         * @property {ClassificationGuides}
         */
        ClassificationGuides: ClassificationGuides,
        /**
         * The ClassificationGuidesApi service constructor.
         * @property {ClassificationGuidesApi}
         */
        ClassificationGuidesApi: ClassificationGuidesApi,
        /**
         * The ClassificationReasonsApi service constructor.
         * @property {ClassificationReasonsApi}
         */
        ClassificationReasonsApi: ClassificationReasonsApi,
        /**
         * The DeclassificationExemptionsApi service constructor.
         * @property {DeclassificationExemptionsApi}
         */
        DeclassificationExemptionsApi: DeclassificationExemptionsApi,
        /**
         * The SecurityControlSettingsApi service constructor.
         * @property {SecurityControlSettingsApi}
         */
        SecurityControlSettingsApi: SecurityControlSettingsApi
    };

    return exports;
}));
