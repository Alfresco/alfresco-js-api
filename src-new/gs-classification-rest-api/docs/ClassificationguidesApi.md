# .ClassificationguidesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**combinedInstructions**](ClassificationguidesApi.md#combinedInstructions) | **POST** /combined-instructions | Combined instructions
[**createClassificationGuide**](ClassificationguidesApi.md#createClassificationGuide) | **POST** /classification-guides | Create a classification guide
[**createSubtopic**](ClassificationguidesApi.md#createSubtopic) | **POST** /topics/{topicId}/subtopics | Create a subtopic
[**createTopic**](ClassificationguidesApi.md#createTopic) | **POST** /classification-guides/{classificationGuideId}/topics | Create a topic
[**deleteClassificationGuide**](ClassificationguidesApi.md#deleteClassificationGuide) | **DELETE** /classification-guides/{classificationGuideId} | Delete a classification guide
[**deleteTopic**](ClassificationguidesApi.md#deleteTopic) | **DELETE** /topics/{topicId} | Delete a topic
[**listClassificationGuides**](ClassificationguidesApi.md#listClassificationGuides) | **GET** /classification-guides | List all classification guides
[**listSubtopics**](ClassificationguidesApi.md#listSubtopics) | **GET** /topics/{topicId}/subtopics | List all subtopics
[**listTopics**](ClassificationguidesApi.md#listTopics) | **GET** /classification-guides/{classificationGuideId}/topics | List all topics
[**showClassificationGuideById**](ClassificationguidesApi.md#showClassificationGuideById) | **GET** /classification-guides/{classificationGuideId} | Get classification guide information
[**showTopicById**](ClassificationguidesApi.md#showTopicById) | **GET** /topics/{topicId} | Get topic information
[**updateClassificationGuide**](ClassificationguidesApi.md#updateClassificationGuide) | **PUT** /classification-guides/{classificationGuideId} | Update a classification guide
[**updateTopic**](ClassificationguidesApi.md#updateTopic) | **PUT** /topics/{topicId} | Update a topic


<a name="combinedInstructions"></a>
# **combinedInstructions**
> InstructionEntry combinedInstructions(opts)

Combined instructions

Combines instructions from the given topics and the user defined instruction, if any.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'instructions':  // CombinedInstructionBody | Instructions
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.combinedInstructions(opts, callback);
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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClassificationGuide(classificationGuide, callback);
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
> TopicEntry createSubtopic(topicIdtopicopts)

Create a subtopic

Creates a new subtopic of a topic.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubtopic(topicIdtopicopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **string**| The identifier for the topic | 
 **topic** | [**TopicBody**](TopicBody.md)| Subtopic | 
 **include** | [**any**](string.md)| Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.
 | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTopic"></a>
# **createTopic**
> TopicEntry createTopic(classificationGuideIdtopicopts)

Create a topic

Creates a new topic.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTopic(classificationGuideIdtopicopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **string**| The identifier for the classification guide | 
 **topic** | [**TopicBody**](TopicBody.md)| Topic | 
 **include** | [**any**](string.md)| Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.
 | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClassificationGuide"></a>
# **deleteClassificationGuide**
> deleteClassificationGuide(classificationGuideId)

Delete a classification guide

Deletes the classification guide with id **classificationGuideId**, including any topics and instructions.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteClassificationGuide(classificationGuideId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **string**| The identifier for the classification guide | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTopic"></a>
# **deleteTopic**
> deleteTopic(topicId)

Delete a topic

Deletes the topic with id  **topicId**, including any subtopics and instructions.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTopic(topicId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **string**| The identifier for the topic | 

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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the guide. The following optional fields can be requested:
* hasTopics - A flag indicating whether the guide already contains any topics.

  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'orderBy':  // any | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally acending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'where': where_example // string | A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
* enabled - e.g. (enabled = true OR enabled = false)

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listClassificationGuides(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | [**any**](string.md)| Returns additional information about the guide. The following optional fields can be requested:
* hasTopics - A flag indicating whether the guide already contains any topics.
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**any**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally acending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
* enabled - e.g. (enabled &#x3D; true OR enabled &#x3D; false)
 | [optional] 

### Return type

[**ClassificationGuidePaging**](ClassificationGuidePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSubtopics"></a>
# **listSubtopics**
> SubtopicPaging listSubtopics(topicIdopts)

List all subtopics

Gets all subtopics of a topic.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.

  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'orderBy':  // any | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally acending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'where': where_example // string | A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
* hasInstruction
* hasSubtopics

  'includeSource': true // boolean | Also include **source** in addition to **entries** with folder information on the parent guide/topic
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSubtopics(topicIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **string**| The identifier for the topic | 
 **include** | [**any**](string.md)| Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**any**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally acending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
* hasInstruction
* hasSubtopics
 | [optional] 
 **includeSource** | **boolean**| Also include **source** in addition to **entries** with folder information on the parent guide/topic | [optional] 

### Return type

[**SubtopicPaging**](SubtopicPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTopics"></a>
# **listTopics**
> TopicPaging listTopics(classificationGuideIdopts)

List all topics

Gets all topics.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.

  'skipCount': 56 // number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56 // number | The maximum number of items to return in the list.
  'orderBy':  // any | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally acending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'where': where_example // string | A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction=true and hasSubtopics=false). Fields to filter on:
* hasInstruction
* hasSubtopics

  'includeSource': true // boolean | Also include **source** in addition to **entries** with folder information on the parent guide/topic
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTopics(classificationGuideIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **string**| The identifier for the classification guide | 
 **include** | [**any**](string.md)| Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **number**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | [**any**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally acending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction&#x3D;true and hasSubtopics&#x3D;false). Fields to filter on:
* hasInstruction
* hasSubtopics
 | [optional] 
 **includeSource** | **boolean**| Also include **source** in addition to **entries** with folder information on the parent guide/topic | [optional] 

### Return type

[**TopicPaging**](TopicPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showClassificationGuideById"></a>
# **showClassificationGuideById**
> ClassificationGuideEntry showClassificationGuideById(classificationGuideId)

Get classification guide information

Gets the classification guide with id **classificationGuideId**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.showClassificationGuideById(classificationGuideId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **string**| The identifier for the classification guide | 

### Return type

[**ClassificationGuideEntry**](ClassificationGuideEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showTopicById"></a>
# **showTopicById**
> TopicEntry showTopicById(topicIdopts)

Get topic information

Gets the topic with id **topicId**.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.showTopicById(topicIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **string**| The identifier for the topic | 
 **include** | [**any**](string.md)| Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.
 | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateClassificationGuide"></a>
# **updateClassificationGuide**
> ClassificationGuideEntry updateClassificationGuide(classificationGuideIdclassificationGuide)

Update a classification guide

Updates the classification guide with id **classificationGuideId**. For example, you can rename a classification guide.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateClassificationGuide(classificationGuideIdclassificationGuide, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classificationGuideId** | **string**| The identifier for the classification guide | 
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
> TopicEntry updateTopic(topicIdtopicopts)

Update a topic

Updates the topic with id **topicId**.

Use this to rename a topic or to add, edit, or remove the instruction associated with it.


### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ClassificationguidesApi();

var opts = { 
  'include':  // any | Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.

};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTopic(topicIdtopicopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topicId** | **string**| The identifier for the topic | 
 **topic** | [**TopicBody**](TopicBody.md)| Topic | 
 **include** | [**any**](string.md)| Returns additional information about the topic. The following optional fields can be requested:
* hasSubtopics - A flag indicating whether the topic already contains any subtopics.
* instruction - Contains details of any instruction in the topic.
* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
* classificationGuide - The classification guide this topic is in.
 | [optional] 

### Return type

[**TopicEntry**](TopicEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

