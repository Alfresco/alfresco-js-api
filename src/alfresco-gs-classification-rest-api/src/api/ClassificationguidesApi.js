(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/CombinedInstructionBody', '../model/InstructionEntry', '../model/ClassificationGuideBody', '../model/ClassificationGuideEntry', '../model/TopicBody', '../model/TopicEntry', '../model/ClassificationGuidePaging', '../model/SubtopicPaging', '../model/TopicPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/CombinedInstructionBody'), require('../model/InstructionEntry'), require('../model/ClassificationGuideBody'), require('../model/ClassificationGuideEntry'), require('../model/TopicBody'), require('../model/TopicEntry'), require('../model/ClassificationGuidePaging'), require('../model/SubtopicPaging'), require('../model/TopicPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationguidesApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.Error, root.AlfrescoGovernanceServicesSecurityControls.CombinedInstructionBody, root.AlfrescoGovernanceServicesSecurityControls.InstructionEntry, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideEntry, root.AlfrescoGovernanceServicesSecurityControls.TopicBody, root.AlfrescoGovernanceServicesSecurityControls.TopicEntry, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePaging, root.AlfrescoGovernanceServicesSecurityControls.SubtopicPaging, root.AlfrescoGovernanceServicesSecurityControls.TopicPaging);
  }
}(this, function(ApiClient, Error, CombinedInstructionBody, InstructionEntry, ClassificationGuideBody, ClassificationGuideEntry, TopicBody, TopicEntry, ClassificationGuidePaging, SubtopicPaging, TopicPaging) {
  'use strict';

  /**
   * Classificationguides service.
   * @module api/ClassificationguidesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ClassificationguidesApi.
   * @alias module:api/ClassificationguidesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Combined instructions
     * Combines instructions from the given topics and the user defined instruction, if any.
     * @param {Object} opts Optional parameters
     * @param {module:model/CombinedInstructionBody} opts.instructions Instructions
     * data is of type: {module:model/InstructionEntry}
     */
    this.combinedInstructions = function(opts) {
      opts = opts || {};
      var postBody = opts['instructions'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InstructionEntry;

      return this.apiClient.callApi(
        '/combined-instructions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a classification guide
     * Creates a new classification guide.
     * @param {module:model/ClassificationGuideBody} classificationGuide Classification guide
     * data is of type: {module:model/ClassificationGuideEntry}
     */
    this.createClassificationGuide = function(classificationGuide) {
      var postBody = classificationGuide;

      // verify the required parameter 'classificationGuide' is set
      if (classificationGuide == undefined || classificationGuide == null) {
        throw "Missing the required parameter 'classificationGuide' when calling createClassificationGuide";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassificationGuideEntry;

      return this.apiClient.callApi(
        '/classification-guides', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a subtopic
     * Creates a new subtopic of a topic.
     * @param {String} topicId The identifier for the topic
     * @param {module:model/TopicBody} topic Subtopic
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the topic. The following optional fields can be requested:\n* hasSubtopics - A flag indicating whether the topic already contains any subtopics.\n* instruction - Contains details of any instruction in the topic.\n* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.\n* classificationGuide - The classification guide this topic is in.\n
     * data is of type: {module:model/TopicEntry}
     */
    this.createSubtopic = function(topicId, topic, opts) {
      opts = opts || {};
      var postBody = topic;

      // verify the required parameter 'topicId' is set
      if (topicId == undefined || topicId == null) {
        throw "Missing the required parameter 'topicId' when calling createSubtopic";
      }

      // verify the required parameter 'topic' is set
      if (topic == undefined || topic == null) {
        throw "Missing the required parameter 'topic' when calling createSubtopic";
      }


      var pathParams = {
        'topicId': topicId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TopicEntry;

      return this.apiClient.callApi(
        '/topics/{topicId}/subtopics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a topic
     * Creates a new topic.
     * @param {String} classificationGuideId The identifier for the classification guide
     * @param {module:model/TopicBody} topic Topic
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the topic. The following optional fields can be requested:\n* hasSubtopics - A flag indicating whether the topic already contains any subtopics.\n* instruction - Contains details of any instruction in the topic.\n* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.\n* classificationGuide - The classification guide this topic is in.\n
     * data is of type: {module:model/TopicEntry}
     */
    this.createTopic = function(classificationGuideId, topic, opts) {
      opts = opts || {};
      var postBody = topic;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId == undefined || classificationGuideId == null) {
        throw "Missing the required parameter 'classificationGuideId' when calling createTopic";
      }

      // verify the required parameter 'topic' is set
      if (topic == undefined || topic == null) {
        throw "Missing the required parameter 'topic' when calling createTopic";
      }


      var pathParams = {
        'classificationGuideId': classificationGuideId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TopicEntry;

      return this.apiClient.callApi(
        '/classification-guides/{classificationGuideId}/topics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a classification guide
     * Deletes the classification guide with id **classificationGuideId**, including any topics and instructions.
     * @param {String} classificationGuideId The identifier for the classification guide
     */
    this.deleteClassificationGuide = function(classificationGuideId) {
      var postBody = null;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId == undefined || classificationGuideId == null) {
        throw "Missing the required parameter 'classificationGuideId' when calling deleteClassificationGuide";
      }


      var pathParams = {
        'classificationGuideId': classificationGuideId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/classification-guides/{classificationGuideId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a topic
     * Deletes the topic with id  **topicId**, including any subtopics and instructions.
     * @param {String} topicId The identifier for the topic
     */
    this.deleteTopic = function(topicId) {
      var postBody = null;

      // verify the required parameter 'topicId' is set
      if (topicId == undefined || topicId == null) {
        throw "Missing the required parameter 'topicId' when calling deleteTopic";
      }


      var pathParams = {
        'topicId': topicId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/topics/{topicId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List all classification guides
     * Gets all classification guides.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the guide. The following optional fields can be requested:\n* hasTopics - A flag indicating whether the guide already contains any topics.\n
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to\nsort the list by one or more fields.\n\nEach field has a default sort order, which is normally acending order. Read the API method implementation notes\nabove to check if any fields used in this method have a descending default search order.\n\nTo sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.\n
     * @param {String} opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:\n* enabled - e.g. (enabled = true OR enabled = false)\n
     * data is of type: {module:model/ClassificationGuidePaging}
     */
    this.listClassificationGuides = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
        'where': opts['where']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassificationGuidePaging;

      return this.apiClient.callApi(
        '/classification-guides', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List all subtopics
     * Gets all subtopics of a topic.
     * @param {String} topicId The identifier for the topic
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the topic. The following optional fields can be requested:\n* hasSubtopics - A flag indicating whether the topic already contains any subtopics.\n* instruction - Contains details of any instruction in the topic.\n* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.\n* classificationGuide - The classification guide this topic is in.\n
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to\nsort the list by one or more fields.\n\nEach field has a default sort order, which is normally acending order. Read the API method implementation notes\nabove to check if any fields used in this method have a descending default search order.\n\nTo sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.\n
     * @param {String} opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:\n* hasInstruction\n* hasSubtopics\n
     * @param {Boolean} opts.includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
     * data is of type: {module:model/SubtopicPaging}
     */
    this.listSubtopics = function(topicId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'topicId' is set
      if (topicId == undefined || topicId == null) {
        throw "Missing the required parameter 'topicId' when calling listSubtopics";
      }


      var pathParams = {
        'topicId': topicId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
        'where': opts['where'],
        'includeSource': opts['includeSource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubtopicPaging;

      return this.apiClient.callApi(
        '/topics/{topicId}/subtopics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List all topics
     * Gets all topics.
     * @param {String} classificationGuideId The identifier for the classification guide
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the topic. The following optional fields can be requested:\n* hasSubtopics - A flag indicating whether the topic already contains any subtopics.\n* instruction - Contains details of any instruction in the topic.\n* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.\n* classificationGuide - The classification guide this topic is in.\n
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to\nsort the list by one or more fields.\n\nEach field has a default sort order, which is normally acending order. Read the API method implementation notes\nabove to check if any fields used in this method have a descending default search order.\n\nTo sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.\n
     * @param {String} opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction=true and hasSubtopics=false). Fields to filter on:\n* hasInstruction\n* hasSubtopics\n
     * @param {Boolean} opts.includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
     * data is of type: {module:model/TopicPaging}
     */
    this.listTopics = function(classificationGuideId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId == undefined || classificationGuideId == null) {
        throw "Missing the required parameter 'classificationGuideId' when calling listTopics";
      }


      var pathParams = {
        'classificationGuideId': classificationGuideId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
        'where': opts['where'],
        'includeSource': opts['includeSource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TopicPaging;

      return this.apiClient.callApi(
        '/classification-guides/{classificationGuideId}/topics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get classification guide information
     * Gets the classification guide with id **classificationGuideId**.
     * @param {String} classificationGuideId The identifier for the classification guide
     * data is of type: {module:model/ClassificationGuideEntry}
     */
    this.showClassificationGuideById = function(classificationGuideId) {
      var postBody = null;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId == undefined || classificationGuideId == null) {
        throw "Missing the required parameter 'classificationGuideId' when calling showClassificationGuideById";
      }


      var pathParams = {
        'classificationGuideId': classificationGuideId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassificationGuideEntry;

      return this.apiClient.callApi(
        '/classification-guides/{classificationGuideId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get topic information
     * Gets the topic with id **topicId**.
     * @param {String} topicId The identifier for the topic
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the topic. The following optional fields can be requested:\n* hasSubtopics - A flag indicating whether the topic already contains any subtopics.\n* instruction - Contains details of any instruction in the topic.\n* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.\n* classificationGuide - The classification guide this topic is in.\n
     * data is of type: {module:model/TopicEntry}
     */
    this.showTopicById = function(topicId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'topicId' is set
      if (topicId == undefined || topicId == null) {
        throw "Missing the required parameter 'topicId' when calling showTopicById";
      }


      var pathParams = {
        'topicId': topicId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TopicEntry;

      return this.apiClient.callApi(
        '/topics/{topicId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a classification guide
     * Updates the classification guide with id **classificationGuideId**. For example, you can rename a classification guide.
     * @param {String} classificationGuideId The identifier for the classification guide
     * @param {module:model/ClassificationGuideBody} classificationGuide Classification guide
     * data is of type: {module:model/ClassificationGuideEntry}
     */
    this.updateClassificationGuide = function(classificationGuideId, classificationGuide) {
      var postBody = classificationGuide;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId == undefined || classificationGuideId == null) {
        throw "Missing the required parameter 'classificationGuideId' when calling updateClassificationGuide";
      }

      // verify the required parameter 'classificationGuide' is set
      if (classificationGuide == undefined || classificationGuide == null) {
        throw "Missing the required parameter 'classificationGuide' when calling updateClassificationGuide";
      }


      var pathParams = {
        'classificationGuideId': classificationGuideId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassificationGuideEntry;

      return this.apiClient.callApi(
        '/classification-guides/{classificationGuideId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a topic
     * Updates the topic with id **topicId**.\n\nUse this to rename a topic or to add, edit, or remove the instruction associated with it.\n
     * @param {String} topicId The identifier for the topic
     * @param {module:model/TopicBody} topic Topic
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the topic. The following optional fields can be requested:\n* hasSubtopics - A flag indicating whether the topic already contains any subtopics.\n* instruction - Contains details of any instruction in the topic.\n* path - An ordered list of id-name pairs of all ancestor topics and the classification guide.\n* classificationGuide - The classification guide this topic is in.\n
     * data is of type: {module:model/TopicEntry}
     */
    this.updateTopic = function(topicId, topic, opts) {
      opts = opts || {};
      var postBody = topic;

      // verify the required parameter 'topicId' is set
      if (topicId == undefined || topicId == null) {
        throw "Missing the required parameter 'topicId' when calling updateTopic";
      }

      // verify the required parameter 'topic' is set
      if (topic == undefined || topic == null) {
        throw "Missing the required parameter 'topic' when calling updateTopic";
      }


      var pathParams = {
        'topicId': topicId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TopicEntry;

      return this.apiClient.callApi(
        '/topics/{topicId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
