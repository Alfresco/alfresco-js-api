# AlfrescoGovernanceServicesSecurityControls.Topic

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**hasInstruction** | **Boolean** | Flag indicating whether the topic has an instruction or not. | 
**instruction** | [**Instruction**](Instruction.md) |  | [optional] 
**createdAt** | **Date** |  | 
**hasSubtopics** | **Boolean** | Flag indicating whether the topic has subtopics. This field is only included when requested. | [optional] [default to false]
**path** | [**Path**](Path.md) |  | [optional] 
**classificationGuide** | [**ClassificationGuideInTopic**](ClassificationGuideInTopic.md) |  | [optional] 


