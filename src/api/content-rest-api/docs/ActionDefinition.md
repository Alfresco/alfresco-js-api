# ActionDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of the action definition — used for example when executing an action | [default to null]
**name** | **string** | name of the action definition, e.g. \"move\" | [optional] [default to null]
**title** | **string** | title of the action definition, e.g. \"Move\" | [optional] [default to null]
**description** | **string** | describes the action definition, e.g. \"This will move the matched item to another space.\" | [optional] [default to null]
**applicableTypes** | **string[]** | QNames of the types this action applies to | [default to null]
**trackStatus** | **boolean** | whether the basic action definition supports action tracking or not | [default to null]
**parameterDefinitions** | [**ActionParameterDefinition[]**](ActionParameterDefinition.md) |  | [optional] [default to null]


