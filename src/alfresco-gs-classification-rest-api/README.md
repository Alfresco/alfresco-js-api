# alfresco_governance_services_security_controls

AlfrescoGovernanceServicesSecurityControls - JavaScript client for alfresco_governance_services_security_controls
Provides access to classification and security mark related features.

## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**combinedInstructions**](docs/ClassificationGuidesApi.md#combinedInstructions) | **POST** /combined-instructions | Combined instructions
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**createClassificationGuide**](docs/ClassificationGuidesApi.md#createClassificationGuide) | **POST** /classification-guides | Create a classification guide
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**createSubtopic**](docs/ClassificationGuidesApi.md#createSubtopic) | **POST** /topics/{topicId}/subtopics | Create a subtopic
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**createTopic**](docs/ClassificationGuidesApi.md#createTopic) | **POST** /classification-guides/{classificationGuideId}/topics | Create a topic
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**deleteClassificationGuide**](docs/ClassificationGuidesApi.md#deleteClassificationGuide) | **DELETE** /classification-guides/{classificationGuideId} | Delete a classification guide
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**deleteTopic**](docs/ClassificationGuidesApi.md#deleteTopic) | **DELETE** /topics/{topicId} | Delete a topic
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**listClassificationGuides**](docs/ClassificationGuidesApi.md#listClassificationGuides) | **GET** /classification-guides | List all classification guides
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**listSubtopics**](docs/ClassificationGuidesApi.md#listSubtopics) | **GET** /topics/{topicId}/subtopics | List all subtopics
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**listTopics**](docs/ClassificationGuidesApi.md#listTopics) | **GET** /classification-guides/{classificationGuideId}/topics | List all topics
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**showClassificationGuideById**](docs/ClassificationGuidesApi.md#showClassificationGuideById) | **GET** /classification-guides/{classificationGuideId} | Get classification guide information
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**showTopicById**](docs/ClassificationGuidesApi.md#showTopicById) | **GET** /topics/{topicId} | Get topic information
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**updateClassificationGuide**](docs/ClassificationGuidesApi.md#updateClassificationGuide) | **PUT** /classification-guides/{classificationGuideId} | Update a classification guide
*AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi* | [**updateTopic**](docs/ClassificationGuidesApi.md#updateTopic) | **PUT** /topics/{topicId} | Update a topic
*AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi* | [**createClassificationReason**](docs/ClassificationReasonsApi.md#createClassificationReason) | **POST** /classification-reasons | Create a classification reason
*AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi* | [**deleteClassificationReason**](docs/ClassificationReasonsApi.md#deleteClassificationReason) | **DELETE** /classification-reasons/{classificationReasonId} | Delete a classification reason
*AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi* | [**listClassificationReasons**](docs/ClassificationReasonsApi.md#listClassificationReasons) | **GET** /classification-reasons | List all classification reasons
*AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi* | [**showClassificationReasonById**](docs/ClassificationReasonsApi.md#showClassificationReasonById) | **GET** /classification-reasons/{classificationReasonId} | Get classification reason information
*AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi* | [**updateClassificationReason**](docs/ClassificationReasonsApi.md#updateClassificationReason) | **PUT** /classification-reasons/{classificationReasonId} | Update a classification reason
*AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi* | [**createDeclassificationExemption**](docs/DeclassificationExemptionsApi.md#createDeclassificationExemption) | **POST** /declassification-exemptions | Create a declassification exemption
*AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi* | [**deleteDeclassificationExemption**](docs/DeclassificationExemptionsApi.md#deleteDeclassificationExemption) | **DELETE** /declassification-exemptions/{declassificationExemptionId} | Delete a declassification exemption
*AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi* | [**listDeclassificationExemptions**](docs/DeclassificationExemptionsApi.md#listDeclassificationExemptions) | **GET** /declassification-exemptions | List all declassification exemptions
*AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi* | [**showDeclassificationExemptionById**](docs/DeclassificationExemptionsApi.md#showDeclassificationExemptionById) | **GET** /declassification-exemptions/{declassificationExemptionId} | Get declassification exemption information
*AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi* | [**updateDeclassificationExemption**](docs/DeclassificationExemptionsApi.md#updateDeclassificationExemption) | **PUT** /declassification-exemptions/{declassificationExemptionId} | Update a declassification exemption
*AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi* | [**calculateDefaultDeclassificationDate**](docs/DeclassificationExemptionsApi.md#calculateDefaultDeclassificationDate) | **POST** /default-classification-values/{nodeId}/calculate-declassification-date | Calculate the default declassification date
*AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingsApi* | [**getSecurityControlSetting**](docs/SecurityControlSettingsApi.md#getSecurityControlSetting) | **GET** /security-control-settings/{securityControlSettingKey} | Get security control setting value
*AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingsApi* | [**updateSecurityControlSetting**](docs/SecurityControlSettingsApi.md#updateSecurityControlSetting) | **PUT** /security-control-settings/{securityControlSettingKey} | Update security control setting value


## Documentation for Models

 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody](docs/ClassificationGuideBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuideEntry](docs/ClassificationGuideEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePaging](docs/ClassificationGuidePaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePagingList](docs/ClassificationGuidePagingList.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesBody](docs/ClassificationGuidesBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesEntry](docs/ClassificationGuidesEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationInformation](docs/ClassificationInformation.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReason](docs/ClassificationReason.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody](docs/ClassificationReasonBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonEntry](docs/ClassificationReasonEntry.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPaging](docs/ClassificationReasonsPaging.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPagingList](docs/ClassificationReasonsPagingList.md)
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
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuideInTopic](docs/ClassificationGuideInTopic.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesInTopic](docs/ClassificationGuidesInTopic.md)
 - [AlfrescoGovernanceServicesSecurityControls.CombinedInstructionBody](docs/CombinedInstructionBody.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuide](docs/ClassificationGuide.md)
 - [AlfrescoGovernanceServicesSecurityControls.ClassificationGuides](docs/ClassificationGuides.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

