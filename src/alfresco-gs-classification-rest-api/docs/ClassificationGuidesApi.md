# AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**combinedInstructions**](ClassificationGuidesApi.md#combinedInstructions) | **POST** /combined-instructions | Combined instructions
[**createClassificationGuide**](ClassificationGuidesApi.md#createClassificationGuide) | **POST** /classification-guides | Create a classification guide
[**createSubtopic**](ClassificationGuidesApi.md#createSubtopic) | **POST** /topics/{topicId}/subtopics | Create a subtopic
[**createTopic**](ClassificationGuidesApi.md#createTopic) | **POST** /classification-guides/{classificationGuideId}/topics | Create a topic
[**deleteClassificationGuide**](ClassificationGuidesApi.md#deleteClassificationGuide) | **DELETE** /classification-guides/{classificationGuideId} | Delete a classification guide
[**deleteTopic**](ClassificationGuidesApi.md#deleteTopic) | **DELETE** /topics/{topicId} | Delete a topic
[**listClassificationGuides**](ClassificationGuidesApi.md#listClassificationGuides) | **GET** /classification-guides | List all classification guides
[**listSubtopics**](ClassificationGuidesApi.md#listSubtopics) | **GET** /topics/{topicId}/subtopics | List all subtopics
[**listTopics**](ClassificationGuidesApi.md#listTopics) | **GET** /classification-guides/{classificationGuideId}/topics | List all topics
[**showClassificationGuideById**](ClassificationGuidesApi.md#showClassificationGuideById) | **GET** /classification-guides/{classificationGuideId} | Get classification guide information
[**showTopicById**](ClassificationGuidesApi.md#showTopicById) | **GET** /topics/{topicId} | Get topic information
[**updateClassificationGuide**](ClassificationGuidesApi.md#updateClassificationGuide) | **PUT** /classification-guides/{classificationGuideId} | Update a classification guide
[**updateTopic**](ClassificationGuidesApi.md#updateTopic) | **PUT** /topics/{topicId} | Update a topic


<a name="combinedInstructions"></a>
# **combinedInstructions**
> InstructionEntry combinedInstructions(opts)

Combined instructions

Combines instructions from the given topics and the user defined instruction, if any.

### Example
```javascript
pts = { 
  'instructions': new AlfrescoGovernanceServicesSecurityControls.CombinedInstructionBody() // CombinedInstructionBody | Instructions
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.combinedInstructions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instructions** | [**CombinedInstructionBody**](CombinedInstructionBody.md)| Instructions | [optional] 

### Return type

[**InstructionEntry**](InstructionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClassificationGuide"></a>
# **createClassificationGuide**
> ClassificationGuideEntry createClassificationGuide(classificationGuide)

Create a classification guide

Creates a new classification guide.

### Example
```javascript

var classificationGuide = new AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody(); // ClassificationGuideBody | Classification guide

this.alfrescoJsApi.gsClassification.classificationGuidesApi.createClassificationGuide(classificationGuide).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuide** | [**ClassificationGuideBody**](ClassificationGuideBody.md)| Classification guide | 

### Return type

[**ClassificationGuideEntry**](ClassificationGuideEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSubtopic"></a>
# **createSubtopic**
> TopicEntry createSubtopic(topicId, topic, opts)

Create a subtopic

Creates a new subtopic of a topic.

### Example
```javascript
var topicId = "topicId_example"; // String | The identifier for the topic

var topic = new AlfrescoGovernanceServicesSecurityControls.TopicBody(); // TopicBody | Subtopic

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in. 
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.createSubtopic(topicId, topic, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **String**| The identifier for the topic | 
 **topic** | [**TopicBody**](TopicBody.md)| Subtopic | 
 **include** | [**[String]**](String.md)| Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.  | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTopic"></a>
# **createTopic**
> TopicEntry createTopic(classificationGuideId, topic, opts)

Create a topic

Creates a new topic.

### Example
```javascript
var classificationGuideId = "classificationGuideId_example"; // String | The identifier for the classification guide

var topic = new AlfrescoGovernanceServicesSecurityControls.TopicBody(); // TopicBody | Topic

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in. 
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.createTopic(classificationGuideId, topic, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **String**| The identifier for the classification guide | 
 **topic** | [**TopicBody**](TopicBody.md)| Topic | 
 **include** | [**[String]**](String.md)| Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.  | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClassificationGuide"></a>
# **deleteClassificationGuide**
> deleteClassificationGuide(classificationGuideId, )

Delete a classification guide

Deletes the classification guide with id **classificationGuideId**, including any topics and instructions.

### Example
```javascript

var classificationGuideId = "classificationGuideId_example"; // String | The identifier for the classification guide

this.alfrescoJsApi.gsClassification.classificationGuidesApi.deleteClassificationGuide(classificationGuideId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **String**| The identifier for the classification guide | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTopic"></a>
# **deleteTopic**
> deleteTopic(topicId, )

Delete a topic

Deletes the topic with id  **topicId**, including any subtopics and instructions.

### Example
```javascript
var topicId = "topicId_example"; // String | The identifier for the topic

this.alfrescoJsApi.gsClassification.classificationGuidesApi.deleteTopic(topicId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **String**| The identifier for the topic | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listClassificationGuides"></a>
# **listClassificationGuides**
> ClassificationGuidePaging listClassificationGuides(opts)

List all classification guides

Gets all classification guides.

### Example
```javascript
var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the guide. The following optional fields can be requested: * hasTopics - A flag indicating whether the guide already contains any topics. 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // Number | The maximum number of items to return in the list.
  'orderBy': ["orderBy_example"], // [String] | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field. 
  'where': "where_example" // String | A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on: * enabled - e.g. (enabled = true OR enabled = false) 
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.listClassificationGuides(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | [**[String]**](String.md)| Returns additional information about the guide. The following optional fields can be requested: * hasTopics - A flag indicating whether the guide already contains any topics.  | [optional] 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**[String]**](String.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.  | [optional] 
 **where** | **String**| A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on: * enabled - e.g. (enabled &#x3D; true OR enabled &#x3D; false)  | [optional] 

### Return type

[**ClassificationGuidePaging**](ClassificationGuidePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSubtopics"></a>
# **listSubtopics**
> SubtopicPaging listSubtopics(topicId, , opts)

List all subtopics

Gets all subtopics of a topic.

### Example
```javascript

var topicId = "topicId_example"; // String | The identifier for the topic

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in. 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // Number | The maximum number of items to return in the list.
  'orderBy': ["orderBy_example"], // [String] | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field. 
  'where': "where_example", // String | A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on: * hasInstruction * hasSubtopics 
  'includeSource': true // Boolean | Also include **source** in addition to **entries** with folder information on the parent guide/topic
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.listSubtopics(topicId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **String**| The identifier for the topic | 
 **include** | [**[String]**](String.md)| Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.  | [optional] 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**[String]**](String.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.  | [optional] 
 **where** | **String**| A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on: * hasInstruction * hasSubtopics  | [optional] 
 **includeSource** | **Boolean**| Also include **source** in addition to **entries** with folder information on the parent guide/topic | [optional] 

### Return type

[**SubtopicPaging**](SubtopicPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTopics"></a>
# **listTopics**
> TopicPaging listTopics(classificationGuideId, , opts)

List all topics

Gets all topics.

### Example
```javascript

var classificationGuideId = "classificationGuideId_example"; // String | The identifier for the classification guide

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in. 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // Number | The maximum number of items to return in the list.
  'orderBy': ["orderBy_example"], // [String] | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field. 
  'where': "where_example", // String | A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction=true and hasSubtopics=false). Fields to filter on: * hasInstruction * hasSubtopics 
  'includeSource': true // Boolean | Also include **source** in addition to **entries** with folder information on the parent guide/topic
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.listTopics(classificationGuideId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **String**| The identifier for the classification guide | 
 **include** | [**[String]**](String.md)| Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.  | [optional] 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**[String]**](String.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.  | [optional] 
 **where** | **String**| A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction&#x3D;true and hasSubtopics&#x3D;false). Fields to filter on: * hasInstruction * hasSubtopics  | [optional] 
 **includeSource** | **Boolean**| Also include **source** in addition to **entries** with folder information on the parent guide/topic | [optional] 

### Return type

[**TopicPaging**](TopicPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showClassificationGuideById"></a>
# **showClassificationGuideById**
> ClassificationGuideEntry showClassificationGuideById(classificationGuideId, )

Get classification guide information

Gets the classification guide with id **classificationGuideId**.

### Example
```javascript

var classificationGuideId = "classificationGuideId_example"; // String | The identifier for the classification guide

this.alfrescoJsApi.gsClassification.classificationGuidesApi.showClassificationGuideById(classificationGuideId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **String**| The identifier for the classification guide | 

### Return type

[**ClassificationGuideEntry**](ClassificationGuideEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showTopicById"></a>
# **showTopicById**
> TopicEntry showTopicById(topicId, , opts)

Get topic information

Gets the topic with id **topicId**.

### Example
```javascript

var topicId = "topicId_example"; // String | The identifier for the topic

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in. 
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.showTopicById(topicId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **String**| The identifier for the topic | 
 **include** | [**[String]**](String.md)| Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.  | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClassificationGuide"></a>
# **updateClassificationGuide**
> ClassificationGuideEntry updateClassificationGuide(classificationGuideId, classificationGuide)

Update a classification guide

Updates the classification guide with id **classificationGuideId**. For example, you can rename a classification guide.

### Example
```javascript

var classificationGuideId = "classificationGuideId_example"; // String | The identifier for the classification guide

var classificationGuide = new AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody(); // ClassificationGuideBody | Classification guide

this.alfrescoJsApi.gsClassification.classificationGuidesApi.updateClassificationGuide(classificationGuideId, classificationGuide).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **String**| The identifier for the classification guide | 
 **classificationGuide** | [**ClassificationGuideBody**](ClassificationGuideBody.md)| Classification guide | 

### Return type

[**ClassificationGuideEntry**](ClassificationGuideEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTopic"></a>
# **updateTopic**
> TopicEntry updateTopic(topicId, topic, opts)

Update a topic

Updates the topic with id **topicId**.  Use this to rename a topic or to add, edit, or remove the instruction associated with it. 

### Example
```javascript

var topicId = "topicId_example"; // String | The identifier for the topic

var topic = new AlfrescoGovernanceServicesSecurityControls.TopicBody(); // TopicBody | Topic

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in. 
};
this.alfrescoJsApi.gsClassification.classificationGuidesApi.updateTopic(topicId, topic, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **String**| The identifier for the topic | 
 **topic** | [**TopicBody**](TopicBody.md)| Topic | 
 **include** | [**[String]**](String.md)| Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.  | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

