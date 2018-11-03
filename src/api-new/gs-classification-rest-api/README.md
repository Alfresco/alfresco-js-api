Provides access to classification and security mark related features.

- Last Build date: 2018-11-03T00:28:19.249Z


## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*.ClassificationguidesApi* | [**combinedInstructions**](docs/ClassificationguidesApi.md#combinedInstructions) | **POST** /combined-instructions | Combined instructions
*.ClassificationguidesApi* | [**createClassificationGuide**](docs/ClassificationguidesApi.md#createClassificationGuide) | **POST** /classification-guides | Create a classification guide
*.ClassificationguidesApi* | [**createSubtopic**](docs/ClassificationguidesApi.md#createSubtopic) | **POST** /topics/{topicId}/subtopics | Create a subtopic
*.ClassificationguidesApi* | [**createTopic**](docs/ClassificationguidesApi.md#createTopic) | **POST** /classification-guides/{classificationGuideId}/topics | Create a topic
*.ClassificationguidesApi* | [**deleteClassificationGuide**](docs/ClassificationguidesApi.md#deleteClassificationGuide) | **DELETE** /classification-guides/{classificationGuideId} | Delete a classification guide
*.ClassificationguidesApi* | [**deleteTopic**](docs/ClassificationguidesApi.md#deleteTopic) | **DELETE** /topics/{topicId} | Delete a topic
*.ClassificationguidesApi* | [**listClassificationGuides**](docs/ClassificationguidesApi.md#listClassificationGuides) | **GET** /classification-guides | List all classification guides
*.ClassificationguidesApi* | [**listSubtopics**](docs/ClassificationguidesApi.md#listSubtopics) | **GET** /topics/{topicId}/subtopics | List all subtopics
*.ClassificationguidesApi* | [**listTopics**](docs/ClassificationguidesApi.md#listTopics) | **GET** /classification-guides/{classificationGuideId}/topics | List all topics
*.ClassificationguidesApi* | [**showClassificationGuideById**](docs/ClassificationguidesApi.md#showClassificationGuideById) | **GET** /classification-guides/{classificationGuideId} | Get classification guide information
*.ClassificationguidesApi* | [**showTopicById**](docs/ClassificationguidesApi.md#showTopicById) | **GET** /topics/{topicId} | Get topic information
*.ClassificationguidesApi* | [**updateClassificationGuide**](docs/ClassificationguidesApi.md#updateClassificationGuide) | **PUT** /classification-guides/{classificationGuideId} | Update a classification guide
*.ClassificationguidesApi* | [**updateTopic**](docs/ClassificationguidesApi.md#updateTopic) | **PUT** /topics/{topicId} | Update a topic
*.ClassificationreasonsApi* | [**createClassificationReason**](docs/ClassificationreasonsApi.md#createClassificationReason) | **POST** /classification-reasons | Create a classification reason
*.ClassificationreasonsApi* | [**deleteClassificationReason**](docs/ClassificationreasonsApi.md#deleteClassificationReason) | **DELETE** /classification-reasons/{classificationReasonId} | Delete a classification reason
*.ClassificationreasonsApi* | [**listClassificationReasons**](docs/ClassificationreasonsApi.md#listClassificationReasons) | **GET** /classification-reasons | List all classification reasons
*.ClassificationreasonsApi* | [**showClassificationReasonById**](docs/ClassificationreasonsApi.md#showClassificationReasonById) | **GET** /classification-reasons/{classificationReasonId} | Get classification reason information
*.ClassificationreasonsApi* | [**updateClassificationReason**](docs/ClassificationreasonsApi.md#updateClassificationReason) | **PUT** /classification-reasons/{classificationReasonId} | Update a classification reason
*.DeclassificationexemptionsApi* | [**createDeclassificationExemption**](docs/DeclassificationexemptionsApi.md#createDeclassificationExemption) | **POST** /declassification-exemptions | Create a declassification exemption
*.DeclassificationexemptionsApi* | [**deleteDeclassificationExemption**](docs/DeclassificationexemptionsApi.md#deleteDeclassificationExemption) | **DELETE** /declassification-exemptions/{declassificationExemptionId} | Delete a declassification exemption
*.DeclassificationexemptionsApi* | [**listDeclassificationExemptions**](docs/DeclassificationexemptionsApi.md#listDeclassificationExemptions) | **GET** /declassification-exemptions | List all declassification exemptions
*.DeclassificationexemptionsApi* | [**showDeclassificationExemptionById**](docs/DeclassificationexemptionsApi.md#showDeclassificationExemptionById) | **GET** /declassification-exemptions/{declassificationExemptionId} | Get declassification exemption information
*.DeclassificationexemptionsApi* | [**updateDeclassificationExemption**](docs/DeclassificationexemptionsApi.md#updateDeclassificationExemption) | **PUT** /declassification-exemptions/{declassificationExemptionId} | Update a declassification exemption
*.DefaultclassificationvaluesApi* | [**calculateDefaultDeclassificationDate**](docs/DefaultclassificationvaluesApi.md#calculateDefaultDeclassificationDate) | **POST** /default-classification-values/{nodeId}/calculate-declassification-date | Calculate the default declassification date
*.SecuritycontrolsettingsApi* | [**getSecurityControlSetting**](docs/SecuritycontrolsettingsApi.md#getSecurityControlSetting) | **GET** /security-control-settings/{securityControlSettingKey} | Get security control setting value
*.SecuritycontrolsettingsApi* | [**updateSecurityControlSetting**](docs/SecuritycontrolsettingsApi.md#updateSecurityControlSetting) | **PUT** /security-control-settings/{securityControlSettingKey} | Update security control setting value


## Documentation for Models

 - [.ClassificationGuideBody](docs/ClassificationGuideBody.md)
 - [.ClassificationGuideEntry](docs/ClassificationGuideEntry.md)
 - [.ClassificationGuidePaging](docs/ClassificationGuidePaging.md)
 - [.ClassificationGuidePagingList](docs/ClassificationGuidePagingList.md)
 - [.ClassificationGuidesBody](docs/ClassificationGuidesBody.md)
 - [.ClassificationGuidesEntry](docs/ClassificationGuidesEntry.md)
 - [.ClassificationInformation](docs/ClassificationInformation.md)
 - [.ClassificationReason](docs/ClassificationReason.md)
 - [.ClassificationReasonBody](docs/ClassificationReasonBody.md)
 - [.ClassificationReasonEntry](docs/ClassificationReasonEntry.md)
 - [.ClassificationReasonsPaging](docs/ClassificationReasonsPaging.md)
 - [.ClassificationReasonsPagingList](docs/ClassificationReasonsPagingList.md)
 - [.DeclassificationDate](docs/DeclassificationDate.md)
 - [.DeclassificationExemption](docs/DeclassificationExemption.md)
 - [.DeclassificationExemptionBody](docs/DeclassificationExemptionBody.md)
 - [.DeclassificationExemptionEntry](docs/DeclassificationExemptionEntry.md)
 - [.DeclassificationExemptionsPaging](docs/DeclassificationExemptionsPaging.md)
 - [.DeclassificationExemptionsPagingList](docs/DeclassificationExemptionsPagingList.md)
 - [.ErrorError](docs/ErrorError.md)
 - [.Instruction](docs/Instruction.md)
 - [.InstructionBody](docs/InstructionBody.md)
 - [.InstructionEntry](docs/InstructionEntry.md)
 - [.ModelError](docs/ModelError.md)
 - [.Pagination](docs/Pagination.md)
 - [.Path](docs/Path.md)
 - [.PathElement](docs/PathElement.md)
 - [.SecurityControlSetting](docs/SecurityControlSetting.md)
 - [.SecurityControlSettingBody](docs/SecurityControlSettingBody.md)
 - [.SecurityControlSettingEntry](docs/SecurityControlSettingEntry.md)
 - [.SecurityMark](docs/SecurityMark.md)
 - [.SecurityMarkBody](docs/SecurityMarkBody.md)
 - [.SecurityMarkInformation](docs/SecurityMarkInformation.md)
 - [.SecurityMarkInformationBody](docs/SecurityMarkInformationBody.md)
 - [.SecurityMarks](docs/SecurityMarks.md)
 - [.SecurityMarksBody](docs/SecurityMarksBody.md)
 - [.SubtopicPaging](docs/SubtopicPaging.md)
 - [.Topic](docs/Topic.md)
 - [.TopicBody](docs/TopicBody.md)
 - [.TopicEntry](docs/TopicEntry.md)
 - [.TopicPaging](docs/TopicPaging.md)
 - [.TopicPagingList](docs/TopicPagingList.md)
 - [.ClassificationGuideInTopic](docs/ClassificationGuideInTopic.md)
 - [.ClassificationGuidesInTopic](docs/ClassificationGuidesInTopic.md)
 - [.CombinedInstructionBody](docs/CombinedInstructionBody.md)
 - [.ClassificationGuide](docs/ClassificationGuide.md)
 - [.ClassificationGuides](docs/ClassificationGuides.md)

