# alfresco-governance-services-security-controls

AlfrescoGovernanceServicesSecurityControls - JavaScript client for alfresco-governance-services-security-controls
**Classification API**
Provides access to classification and security mark related features.


## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**combinedInstructions**](docs/ClassificationguidesApi.md#combinedInstructions) | **POST** /combined-instructions | Combined instructions
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**createClassificationGuide**](docs/ClassificationguidesApi.md#createClassificationGuide) | **POST** /classification-guides | Create a classification guide
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**createSubtopic**](docs/ClassificationguidesApi.md#createSubtopic) | **POST** /topics/{topicId}/subtopics | Create a subtopic
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**createTopic**](docs/ClassificationguidesApi.md#createTopic) | **POST** /classification-guides/{classificationGuideId}/topics | Create a topic
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**deleteClassificationGuide**](docs/ClassificationguidesApi.md#deleteClassificationGuide) | **DELETE** /classification-guides/{classificationGuideId} | Delete a classification guide
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**deleteTopic**](docs/ClassificationguidesApi.md#deleteTopic) | **DELETE** /topics/{topicId} | Delete a topic
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**listClassificationGuides**](docs/ClassificationguidesApi.md#listClassificationGuides) | **GET** /classification-guides | List all classification guides
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**listSubtopics**](docs/ClassificationguidesApi.md#listSubtopics) | **GET** /topics/{topicId}/subtopics | List all subtopics
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**listTopics**](docs/ClassificationguidesApi.md#listTopics) | **GET** /classification-guides/{classificationGuideId}/topics | List all topics
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**showClassificationGuideById**](docs/ClassificationguidesApi.md#showClassificationGuideById) | **GET** /classification-guides/{classificationGuideId} | Get classification guide information
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**showTopicById**](docs/ClassificationguidesApi.md#showTopicById) | **GET** /topics/{topicId} | Get topic information
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**updateClassificationGuide**](docs/ClassificationguidesApi.md#updateClassificationGuide) | **PUT** /classification-guides/{classificationGuideId} | Update a classification guide
*AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi* | [**updateTopic**](docs/ClassificationguidesApi.md#updateTopic) | **PUT** /topics/{topicId} | Update a topic
*AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi* | [**createClassificationReason**](docs/ClassificationreasonsApi.md#createClassificationReason) | **POST** /classification-reasons | Create a classification reason
*AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi* | [**deleteClassificationReason**](docs/ClassificationreasonsApi.md#deleteClassificationReason) | **DELETE** /classification-reasons/{classificationReasonId} | Delete a classification reason
*AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi* | [**listClassificationReasons**](docs/ClassificationreasonsApi.md#listClassificationReasons) | **GET** /classification-reasons | List all classification reasons
*AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi* | [**showClassificationReasonById**](docs/ClassificationreasonsApi.md#showClassificationReasonById) | **GET** /classification-reasons/{classificationReasonId} | Get classification reason information
*AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi* | [**updateClassificationReason**](docs/ClassificationreasonsApi.md#updateClassificationReason) | **PUT** /classification-reasons/{classificationReasonId} | Update a classification reason
*AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi* | [**createDeclassificationExemption**](docs/DeclassificationexemptionsApi.md#createDeclassificationExemption) | **POST** /declassification-exemptions | Create a declassification exemption
*AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi* | [**deleteDeclassificationExemption**](docs/DeclassificationexemptionsApi.md#deleteDeclassificationExemption) | **DELETE** /declassification-exemptions/{declassificationExemptionId} | Delete a declassification exemption
*AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi* | [**listDeclassificationExemptions**](docs/DeclassificationexemptionsApi.md#listDeclassificationExemptions) | **GET** /declassification-exemptions | List all declassification exemptions
*AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi* | [**showDeclassificationExemptionById**](docs/DeclassificationexemptionsApi.md#showDeclassificationExemptionById) | **GET** /declassification-exemptions/{declassificationExemptionId} | Get declassification exemption information
*AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi* | [**updateDeclassificationExemption**](docs/DeclassificationexemptionsApi.md#updateDeclassificationExemption) | **PUT** /declassification-exemptions/{declassificationExemptionId} | Update a declassification exemption
*AlfrescoGovernanceServicesSecurityControls.DefaultclassificationvaluesApi* | [**calculateDefaultDeclassificationDate**](docs/DefaultclassificationvaluesApi.md#calculateDefaultDeclassificationDate) | **POST** /default-classification-values/{nodeId}/calculate-declassification-date | Calculate the default declassification date
*AlfrescoGovernanceServicesSecurityControls.SecuritycontrolsettingsApi* | [**getSecurityControlSetting**](docs/SecuritycontrolsettingsApi.md#getSecurityControlSetting) | **GET** /security-control-settings/{securityControlSettingKey} | Get security control setting value
*AlfrescoGovernanceServicesSecurityControls.SecuritycontrolsettingsApi* | [**updateSecurityControlSetting**](docs/SecuritycontrolsettingsApi.md#updateSecurityControlSetting) | **PUT** /security-control-settings/{securityControlSettingKey} | Update security control setting value


## Documentation for Models

 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuide](docs/ClassificationGuide.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody](docs/ClassificationGuideBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuideEntry](docs/ClassificationGuideEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuideInTopic](docs/ClassificationGuideInTopic.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePaging](docs/ClassificationGuidePaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePagingList](docs/ClassificationGuidePagingList.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuides](docs/ClassificationGuides.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesBody](docs/ClassificationGuidesBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesEntry](docs/ClassificationGuidesEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesInTopic](docs/ClassificationGuidesInTopic.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationInformation](docs/ClassificationInformation.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReason](docs/ClassificationReason.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody](docs/ClassificationReasonBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonEntry](docs/ClassificationReasonEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPaging](docs/ClassificationReasonsPaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPagingList](docs/ClassificationReasonsPagingList.md)
 - [AlfrescoGovernanceServicesSecurityControls.CombinedInstructionBody](docs/CombinedInstructionBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.DeclassificationDate](docs/DeclassificationDate.md)
 - [AlfrescoGovernanceServicesSecurityControls.DeclassificationExemption](docs/DeclassificationExemption.md)
 - [AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionBody](docs/DeclassificationExemptionBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionEntry](docs/DeclassificationExemptionEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging](docs/DeclassificationExemptionsPaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPagingList](docs/DeclassificationExemptionsPagingList.md)
 - [AlfrescoGovernanceServicesSecurityControls.Error](docs/Error.md)
 - [AlfrescoGovernanceServicesSecurityControls.ErrorError](docs/ErrorError.md)
 - [AlfrescoGovernanceServicesSecurityControls.Instruction](docs/Instruction.md)
 - [AlfrescoGovernanceServicesSecurityControls.InstructionBody](docs/InstructionBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.InstructionEntry](docs/InstructionEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.Pagination](docs/Pagination.md)
 - [AlfrescoGovernanceServicesSecurityControls.Path](docs/Path.md)
 - [AlfrescoGovernanceServicesSecurityControls.PathElement](docs/PathElement.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityControlSetting](docs/SecurityControlSetting.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingBody](docs/SecurityControlSettingBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingEntry](docs/SecurityControlSettingEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityMark](docs/SecurityMark.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityMarkBody](docs/SecurityMarkBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformation](docs/SecurityMarkInformation.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformationBody](docs/SecurityMarkInformationBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityMarks](docs/SecurityMarks.md)
 - [AlfrescoGovernanceServicesSecurityControls.SecurityMarksBody](docs/SecurityMarksBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.SubtopicPaging](docs/SubtopicPaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.Topic](docs/Topic.md)
 - [AlfrescoGovernanceServicesSecurityControls.TopicBody](docs/TopicBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.TopicEntry](docs/TopicEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.TopicPaging](docs/TopicPaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.TopicPagingList](docs/TopicPagingList.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

