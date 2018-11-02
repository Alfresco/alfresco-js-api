# .ProcessScopeRepresentation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activityIds** | **Array<string>** |  | [optional] [default to null]
**activityIdsByCollapsedSubProcessIdMap** | **{ [key: string]: Array<string>; }** |  | [optional] [default to null]
**activityIdsByDecisionTableIdMap** | **{ [key: string]: Array<string>; }** |  | [optional] [default to null]
**activityIdsByFormIdMap** | **{ [key: string]: Array<string>; }** |  | [optional] [default to null]
**activityIdsWithExcludedSubProcess** | **Array<string>** |  | [optional] [default to null]
**activitySidsByActivityIdMap** | **{ [key: string]: string; }** |  | [optional] [default to null]
**customStencilVariables** | **{ [key: string]: Array<VariableScopeRepresentation>; }** |  | [optional] [default to null]
**entityVariables** | **{ [key: string]: Array<EntityVariableScopeRepresentation>; }** |  | [optional] [default to null]
**executionVariables** | **{ [key: string]: Array<VariableScopeRepresentation>; }** |  | [optional] [default to null]
**fieldToVariableMappings** | **{ [key: string]: Array<VariableScopeRepresentation>; }** |  | [optional] [default to null]
**forms** | **{ [key: string]: Array<FormScopeRepresentation>; }** |  | [optional] [default to null]
**metadataVariables** | **{ [key: string]: Array<VariableScopeRepresentation>; }** |  | [optional] [default to null]
**modelId** | **number** |  | [optional] [default to null]
**processModelType** | **number** |  | [optional] [default to null]
**responseVariables** | **{ [key: string]: Array<VariableScopeRepresentation>; }** |  | [optional] [default to null]
**reusableFieldMapping** | **{ [key: string]: Array<VariableMappingRepresentation>; }** |  | [optional] [default to null]


