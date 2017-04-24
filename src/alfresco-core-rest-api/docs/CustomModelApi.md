# AlfrescoCoreRestApi.CustomModelApi

All URIs are relative to *https://localhost/alfresco/api/-default-/private/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomModel**](CustomModelApi.md#createCustomModel) | **POST** /cmm | create Custom Model
[**createCustomType**](CustomModelApi.md#createCustomType) | **POST** /cmm/{modelName}/types | create custom type
[**createCustomAspect**](CustomModelApi.md#createCustomAspect) | **POST** /cmm/{modelName}/aspects | create custom aspect
[**createCustomConstraint**](CustomModelApi.md#createCustomConstraint) | **POST** cmm/{modelName}?select=status | create custom constraint
[**activateCustomModel**](CustomModelApi.md#activateCustomModel) | **PUT** /nodes/{nodeId}/tags/{tagId} | activate custom model
[**deactivateCustomModel**](CustomModelApi.md#deactivateCustomModel) | **PUT** /cmm/{modelName}?select=status | deactivate custom model
[**addPropertyToAspect**](CustomModelApi.md#addPropertyToAspect) | **PUT** /cmm/{modelName}/aspects/{aspectName}?select=props| add property into an existing aspect
[**addPropertyToType**](CustomModelApi.md#addPropertyToType) | **PUT** /cmm/{modelName}/types/{typeName}?select=props | Add Property into an existing type
[**updateCustomModel**](CustomModelApi.md#updateCustomModel) | **PUT** /cmm/{modelName} | edit an existing custom model
[**updateCustomType**](CustomModelApi.md#updateCustomType) | **PUT** /cmm/{modelName}/types/{typeName} | edit an existing custom type
[**updateCustomAspect**](CustomModelApi.md#updateCustomAspect) | **PUT** /cmm/{modelName}/aspects/{aspectName} | dEdit an existing custom aspect
[**getAllCustomModel**](CustomModelApi.md#getAllCustomModel) | **GET** /cmm | get all customModel
[**getCustomModel**](CustomModelApi.md#getCustomModel) | **GET** /cmm/{modelName} | get a single custom model
[**getAllCustomType**](CustomModelApi.md#getAllCustomType) | **GET** /cmm/{modelName}/types | get all custom Type
[**getCustomType**](CustomModelApi.md#getCustomType) | **GET** /cmm/{modelName}/types/{typeName} | get custom type
[**getAllCustomAspect**](CustomModelApi.md#getAllCustomAspect) | **GET** /cmm/{modelName}/aspects | get all custom aspect
[**getCustomAspect**](CustomModelApi.md#getCustomAspect) | **GET** /cmm/{modelName}/aspects/{aspectName} | get custom aspect
[**getAllCustomConstraints**](CustomModelApi.md#getAllCustomConstraints) | **GET** /cmm/{modelName}/constraints | get all custom constraints
[**getCustomConstraints**](CustomModelApi.md#getCustomConstraints) | **GET** /cmm/{modelName}/constraints{constraintName} | get custom constraints
[**deleteCustomModel**](CustomModelApi.md#deleteCustomModel) | **DELETE** /cmm/{modelName} | delete custom model
[**deleteCustomType**](CustomModelApi.md#deleteCustomType) | **DELETE** /cmm/{modelName}/types/{typeName} | delete custom type

<a name="createCustomModel"></a>
# **createCustomModel**
>  createCustomModel(status, description, name, namespaceUri, namespacePrefix)

Create a basic custom model
The name, namespaceUri and namespacePrefix are mandatory.
{
"status" : "DRAFT",
"description" : "Test model description",
"name" : "testModel",
"namespaceUri" : "http://www.alfresco.org/model/testNamespace/1.0",
"namespacePrefix" : "test"
}
  

### Example
```javascript
var status = "DRAFT";
var description = "Test model description";
var name = "testModel";
var namespaceUri = "http://www.alfresco.org/model/testNamespace/1.0";
var namespacePrefix = "test";

this.alfrescoJsApi.core.customModelApi.createCustomModel(status, description, name, namespaceUri, namespacePrefix).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**  ||
 **description** |  **String** |  |
 **name** |  **String** |  |
 **namespaceUri** |  **String** |  |
 **namespacePrefix** |  **String** |  |
 

 <a name="createCustomType"></a>
 # **createCustomType**
 >  createCustomType(modelName, name, parentName, title, description)
 
create custom type The name is mandatory.
Example POST body
{
"name" : "myType1",
"parentName" : "cm:content",
"title" : "my type1 title",
"description" : "Test type description"
}
 
 ### Example
 ```javascript
var name = "myType1";
var parentName = "cm:content";
var title = "my type1 title";
var description = "Test type description";
 
 this.alfrescoJsApi.core.customModelApi.createCustomType(modelName, name, parentName, title, description).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **name** | **String**  ||
  **parentName** |  **String** |  |
  **title** |  **String** |  |
  **description** |  **String** |  |
 
 
 <a name="createCustomAspect"></a>
 # **createCustomAspect**
 >  createCustomAspect(modelName, name, parentName, title, description)
 
create custom aspect The name is mandatory.
Example POST body
{
"name" : "myAspect1",
"parentName" : "cm:titled",
"title" : "my aspect1 title",
"description" : "Test aspect description"
}
 
 ### Example
 ```javascript
var name = "myAspect1";
var parentName = "cm:titled";
var title = "my aspect1 title";
var description = "Test aspect description";
 
 this.alfrescoJsApi.core.customModelApi.createCustomAspect(modelName, name, parentName, title, description).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **name** | **String**  ||
  **parentName** |  **String** |  |
  **title** |  **String** |  |
  **description** |  **String** |  |
  
 
 <a name="createCustomConstraint"></a>
 # **createCustomConstraint**
 >  createCustomConstraint(modelName, name, type, parameters)
 
create custom constraint( The name and type are mandatory.
Example POST body
{
    "name" : "myPercentage",
    "type" : "MINMAX",  
    "parameters" : [{
       "name" : "maxValue",
       "simpleValue" : 100.0
    }, {
        "name" : "minValue",
        "simpleValue" : 0.0
    }]
}
 
 ### Example
 ```javascript
var name = "myPercentage";
var type = "MINMAX";
var title = "my aspect1 title";
var parameters = [{
                         "name" : "maxValue",
                         "simpleValue" : 100.0
                      }, {
                          "name" : "minValue",
                          "simpleValue" : 0.0
                      }];
 
 this.alfrescoJsApi.core.customModelApi.createCustomConstraint(modelName, name, type, parameters).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **name** | **String**  ||
  **type** |  **String** |  |
  **parameters** |  **Object** |  |
   
 
 <a name="activateCustomModel"></a>
 # **activateCustomModel**
 >  activateCustomModel(modelName)
 
Activate a custom model
 
 ### Example
 ```javascript
var name = "testModel";

 this.alfrescoJsApi.core.customModelApi.activateCustomModel(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  
 <a name="deactivateCustomModel"></a>
 # **deactivateCustomModel**
 >  deactivateCustomModel(modelName)
 
Deactivate a custom model
 
 ### Example
 ```javascript
var name = "testModel";

 this.alfrescoJsApi.core.customModelApi.deactivateCustomModel(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
    
 
 <a name="activateCustomModel"></a>
 # **activateCustomModel**
 >  activateCustomModel(modelName)
 
Activate a custom model
 
 ### Example
 ```javascript
var name = "testModel";

 this.alfrescoJsApi.core.customModelApi.activateCustomModel(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  
 <a name="addPropertyToAspect"></a>
 # **addPropertyToAspect**
 >  addPropertyToAspect(modelName, aspectName, properties)
 
Add property into an existing aspect 
 
 ### Example
 ```javascript
var modelName = "testModel";
var aspectName = "myAspect1";
var properties" = [{
                "name" : "InvoiceNumber",
                "title" : "Invoice Number",
                "description" : "MyProperty desc",
                "dataType" : "d:int",
                "multiValued" : false,
                "mandatory" : false,
                "mandatoryEnforced" : false
                 }]

 this.alfrescoJsApi.core.customModelApi.addPropertyToAspect(modelName, aspectName, properties).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **aspectName** | **String**  ||
  **properties** | **Object**  ||
 
  
 <a name="addPropertyToType"></a>
 # **addPropertyToType**
 >  addPropertyToType(modelName, typeName, properties)
 
Add property into an existing aspect 
 
 ### Example
 ```javascript
var modelName = "testModel";
var typeName = "myType1";
var properties = [{}]

 this.alfrescoJsApi.core.customModelApi.addPropertyToType(modelName, typeName, properties).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **typeName** | **String**  ||
  **properties** | **Object**  ||
 
  
 <a name="updateCustomModel"></a>
 # **updateCustomModel**
 >  updateCustomModel(modelName, description, namespaceUri, namespacePrefix) 
 
Edit an existing custom model Note: model name cannot be modified. 
 
 
 ```javascript
 {
 "name" : "testModel",
 "description" : "Test model description modified",
 "namespaceUri" : "http://www.alfresco.org/model/testNamespace/1.0",
 "namespacePrefix" : "test"
 }
 
 ```
 
 ### Example
 ```javascript
var modelName = "testModel";
var description = "Test model description modified";
var namespaceUri =  "http://www.alfresco.org/model/testNamespace/1.0";
var namespacePrefix = "test";

 this.alfrescoJsApi.core.customModelApi.addPropertyToType(modelName, description, namespaceUri, namespacePrefix).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **description** | **String**  ||
  **namespaceUri** | **String**  ||
  **namespacePrefix** | **String**  ||
 
  
 <a name="updateCustomType"></a>
 # **updateCustomType**
 >  updateCustomType(modelName, typeName, description, parentName, title)
 
Edit an existing custom type Note: The name is mandatory.
Example PUT body
 
 ```javascript
{
    "name" : "myType1",
    "parentName" : "cm:content",
    "title" : "my type1 title",
    "description" : "Test type description"
}

 
 ```
 
 ### Example
 ```javascript
var modelName = "tesModel";
var typeName = "myType1";
var parentName =  "cm:content",
var title =   "my type1 title";
var description = "Test type description";

 this.alfrescoJsApi.core.customModelApi.updateCustomType(modelName, typeName, description, parentName, title).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **typeName** | **String**  ||
  **parentName** | **String**  ||
  **title** | **String**  ||
  **description** | **String**  ||

 
  
 <a name="updateCustomAspect"></a>
 # **updateCustomAspect**
 >  updateCustomAspect(modelName, aspectName, description, parentName, title)
 
Edit an existing custom type Note: The name is mandatory.
Example PUT body
 
 ```javascript
{
    "name" : "myAspect1",
    "parentName" : "cm:titled",
    "title" : "my aspect1 title",
    "description" : "Test aspect description"
}
 
 ```
 
 ### Example
 ```javascript
var modelName = "tesModel";
var aspectName = "myAspect1";
var parentName =  "cm:titled",
var title =   "my aspect1 title";
var description = "Test aspect description";

 this.alfrescoJsApi.core.customModelApi.updateCustomAspect(modelName, aspectName, description, parentName, title).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **aspectName** | **String**  ||
  **parentName** | **String**  ||
  **title** | **String**  ||
  **description** | **String**  ||

 
  
 <a name="getAllCustomModel"></a>
 # **getAllCustomModel**
 >  getAllCustomModel()

 Get all custom model
 ```javascript
{  
   "list":{  
      "pagination":{  
         "count":1,
         "hasMoreItems":false,
         "totalItems":1,
         "skipCount":0,
         "maxItems":100
      },
      "entries":[  
         {  
            "entry":{  
               "author":"Administrator",
               "status":"DRAFT",
               "description":"Test model description",
               "name":"testModel",
               "namespacePrefix":"test",
               "namespaceUri":"http://www.alfresco.org/model/testNamespace/1.0"
            }
         }
      ]
   }
}
 ```
 
 ### Example
 ```javascript

 this.alfrescoJsApi.core.customModelApi.getAllCustomModel().then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
  
 <a name="getCustomModel"></a>
 # **getCustomModel**
 >  getCustomModel(modelName, queryParams)

 Get custom model

Example response body
 ```javascript
{  
   "entry":{  
      "author":"Administrator",
      "status":"DRAFT",
      "description":"Test model description",
      "name":"testModel",
      "namespacePrefix":"test",
      "namespaceUri":"http://www.alfresco.org/model/testNamespace/1.0"
   }
}

 ```
 ### Example
 ```javascript
var modelName = "testModel";

 this.alfrescoJsApi.core.customModelApi.getCustomModel(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });


 var modelName = "testModel";
 var queryParams = {select:"all"};

 this.alfrescoJsApi.core.customModelApi.getCustomModel(modelName, queryParams).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ```
 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **queryParams** | **Object**  ||

  
 <a name="getAllCustomType"></a>
 # **getAllCustomType**
 >  getAllCustomType(modelName)

 Get all custom type
 ```javascript
{  
   "list":{  
      "pagination":{  
         "count":1,
         "hasMoreItems":false,
         "totalItems":1,
         "skipCount":0,
         "maxItems":100
      },
      "entries":[  
         {  
            "entry":{  
               "prefixedName":"test:myType1",
               "title":"my type1 title",
               "description":"Test type description",
               "name":"myType1",
               "properties":[  

               ],
               "parentName":"cm:content"
            }
         }
      ]
   }
}
 
 ```
 ### Example
 ```javascript
var modelName = "testModel";
 
 this.alfrescoJsApi.core.customModelApi.getAllCustomType(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ``` 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||

  
 <a name="getCustomType"></a>
 # **getCustomType**
 >  getCustomType(modelName, typeName, queryParams)
 ```javascript

{
    "entry" : {
    "prefixedName" : "test:myType1",
    "title" : "my type1 title",
    "description" : "Test type description",
    "name" : "myType1",
    "properties" : [],
    "parentName" : "cm:content"
}
  ```
 ### Example
 ```javascript
var modelName = "testModel";
var typeName = "myType1";
 
 this.alfrescoJsApi.core.customModelApi.getCustomType(modelName, typeName, queryParams).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ``` 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **typeName** | **String**  ||
  **queryParams** | **Object**  ||


  
 <a name="getAllCustomAspect"></a>
 # **getAllCustomAspect**
 >  getAllCustomAspect(modelName)

 
 ### Example
 ```javascript
var modelName = "testModel";
 
 this.alfrescoJsApi.core.customModelApi.getAllCustomAspect(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ``` 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||

  
 <a name="getCustomAspect"></a>
 # **getCustomAspect**
 >  getCustomAspect(modelName, aspectName, queryParams)

 
 ### Example
 ```javascript
var modelName = "testModel";
 
 this.alfrescoJsApi.core.customModelApi.getAllCustomAspect(modelName, aspectName, queryParams).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ``` 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **aspectName** | **String**  ||
  **queryParams** | **Object**  ||

  
 <a name="getAllCustomConstraints"></a>
 # **getAllCustomConstraints**
 >  getAllCustomConstraints(modelName)

 
 ### Example
 ```javascript
var modelName = "testModel";
 
 this.alfrescoJsApi.core.customModelApi.getAllCustomConstraints(modelName).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ``` 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
   
 <a name="getCustomConstraints"></a>
 # **getCustomConstraints**
 >  getCustomConstraints(modelName)

 
 ### Example
 ```javascript
var modelName = "testModel";
 
 this.alfrescoJsApi.core.customModelApi.getCustomConstraints(modelName, constraintName, queryParams).then(function(data) {
   console.log('API called successfully. Returned data: ' + data);
 }, function(error) {
   console.error(error);
 });
 
 ``` 
 ### Parameters
 
 Name | Type | Description  | Notes
 ------------- | ------------- | ------------- | -------------
  **modelName** | **String**  ||
  **constraintName** | **String**  ||
  **queryParams** | **Object**  ||

  