# Alfresco CMN  Api

AlfrescoPrivateRestApi - JavaScript client for alfresco-private-rest-api
Provides access to the cmn features of Alfresco.

This API uses the term **entity** to refer to an object in an Alfresco repository.
An **entity** is of a specific **type**, and has a unique **id**.

* The **id** of an entity of type **node** is the **NodeRef** with the `workspace://SpacesStore` prefix removed.
* The **id** of an entity of type **site** is the site's short name.
* The **id** for an entity of type **person** is the person's username.


## Documentation for API Endpoints

All URIs are relative to *https://localhost/alfresco/api/-default-/private/alfresco/versions/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomModel**](docs/CustomModelApi.md#createCustomModel)| **POST** /cmm | create Custom Model
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomType**](docs/CustomModelApi.md#createCustomType) | **POST** /cmm/{modelName}/types | create custom type
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomAspect**](docs/CustomModelApi.md#createCustomAspect) | **POST** /cmm/{modelName}/aspects | create custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**createCustomConstraint**](docs/CustomModelApi.md#createCustomConstraint) | **POST** cmm/{modelName}?select=status | create custom constraint
*AlfrescoCoreRestApi.CustomModelApi* | [**activateCustomModel**](docs/CustomModelApi.md#activateCustomModel) | **PUT** /nodes/{nodeId}/tags/{tagId} | activate custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**deactivateCustomModel**](docs/CustomModelApi.md#deactivateCustomModel) | **PUT** /cmm/{modelName}?select=status | deactivate custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**addPropertyToAspect**](docs/CustomModelApi.md#addPropertyToAspect) | **PUT** /cmm/{modelName}/aspects/{aspectName}?select=props| add property into an existing aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**addPropertyToType**](docs/CustomModelApi.md#addPropertyToType) | **PUT** /cmm/{modelName}/types/{typeName}?select=props | Add Property into an existing type
*AlfrescoCoreRestApi.CustomModelApi* | [**updateCustomModel**](docs/CustomModelApi.md#updateCustomModel) | **PUT** /cmm/{modelName} | edit an existing custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**updateCustomType**](docs/CustomModelApi.md#updateCustomType) | **PUT** /cmm/{modelName}/types/{typeName} | edit an existing custom type
*AlfrescoCoreRestApi.CustomModelApi* | [**updateCustomAspect**](docs/CustomModelApi.md#updateCustomAspect) | **PUT** /cmm/{modelName}/aspects/{aspectName} | dEdit an existing custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomModel**](docs/CustomModelApi.md#getAllCustomModel) | **GET** /cmm | get all customModel
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomModel**](docs/CustomModelApi.md#getCustomModel) | **GET** /cmm/{modelName} | get a single custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomType**](docs/CustomModelApi.md#getAllCustomType) | **GET** /cmm/{modelName}/types | get all custom Type
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomType**](docs/CustomModelApi.md#getCustomType) | **GET** /cmm/{modelName}/types/{typeName} | get custom type
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomAspect**](docs/CustomModelApi.md#getAllCustomAspect) | **GET** /cmm/{modelName}/aspects | get all custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomAspect**](docs/CustomModelApi.md#getCustomAspect) | **GET** /cmm/{modelName}/aspects/{aspectName} | get custom aspect
*AlfrescoCoreRestApi.CustomModelApi* | [**getAllCustomConstraints**](docs/CustomModelApi.md#getAllCustomConstraints) | **GET** /cmm/{modelName}/constraints | get all custom constraints
*AlfrescoCoreRestApi.CustomModelApi* | [**getCustomConstraints**](docs/CustomModelApi.md#getCustomConstraints) | **GET** /cmm/{modelName}/constraints{constraintName} | get custom constraints
*AlfrescoCoreRestApi.CustomModelApi* | [**deleteCustomModel**](docs/CustomModelApi.md#deleteCustomModel) | **DELETE** /cmm/{modelName} | delete custom model
*AlfrescoCoreRestApi.CustomModelApi* | [**deleteCustomType**](docs/CustomModelApi.md#deleteCustomType) | **DELETE** /cmm/{modelName}/types/{typeName} | delete custom type


## Documentation for Models

## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

