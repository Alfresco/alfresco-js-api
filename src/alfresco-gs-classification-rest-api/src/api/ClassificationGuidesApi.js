

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ClassificationGuideBody', '../model/ClassificationGuideEntry', '../model/ClassificationGuidePaging', '../model/CombinedInstructionBody', '../model/Error', '../model/InstructionEntry', '../model/SubtopicPaging', '../model/TopicBody', '../model/TopicEntry', '../model/TopicPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ClassificationGuideBody'), require('../model/ClassificationGuideEntry'), require('../model/ClassificationGuidePaging'), require('../model/CombinedInstructionBody'), require('../model/Error'), require('../model/InstructionEntry'), require('../model/SubtopicPaging'), require('../model/TopicBody'), require('../model/TopicEntry'), require('../model/TopicPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideEntry, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePaging, root.AlfrescoGovernanceServicesSecurityControls.CombinedInstructionBody, root.AlfrescoGovernanceServicesSecurityControls.Error, root.AlfrescoGovernanceServicesSecurityControls.InstructionEntry, root.AlfrescoGovernanceServicesSecurityControls.SubtopicPaging, root.AlfrescoGovernanceServicesSecurityControls.TopicBody, root.AlfrescoGovernanceServicesSecurityControls.TopicEntry, root.AlfrescoGovernanceServicesSecurityControls.TopicPaging);
  }
}(this, function(ApiClient, ClassificationGuideBody, ClassificationGuideEntry, ClassificationGuidePaging, CombinedInstructionBody, Error, InstructionEntry, SubtopicPaging, TopicBody, TopicEntry, TopicPaging) {
  'use strict';

  /**
   * Classificationguides service.
   * @module api/ClassificationGuidesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ClassificationGuidesApi.
   * @alias :api/ClassificationGuidesApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Combined instructions
     * Combines instructions from the given topics and the user defined instruction, if any.
     * @param {Object} opts Optional parameters
     * @param {CombinedInstructionBody} opts.instructions Instructions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleInstructionEntry} and HTTP response
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
     * @param {ClassificationGuideBody} classificationGuide Classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuideEntry} and HTTP response
     */
    this.createClassificationGuide = function(classificationGuide) {
      var postBody = classificationGuide;

      // verify the required parameter 'classificationGuide' is set
      if (classificationGuide === undefined || classificationGuide === null) {
        throw new Error("Missing the required parameter 'classificationGuide' when calling createClassificationGuide");
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
     * @param {string} topicId The identifier for the topic
     * @param {TopicBody} topic Subtopic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    this.createSubtopic = function(topicId, topic, opts) {
      opts = opts || {};
      var postBody = topic;

      // verify the required parameter 'topicId' is set
      if (topicId === undefined || topicId === null) {
        throw new Error("Missing the required parameter 'topicId' when calling createSubtopic");
      }

      // verify the required parameter 'topic' is set
      if (topic === undefined || topic === null) {
        throw new Error("Missing the required parameter 'topic' when calling createSubtopic");
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
     * @param {string} classificationGuideId The identifier for the classification guide
     * @param {TopicBody} topic Topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    this.createTopic = function(classificationGuideId, topic, opts) {
      opts = opts || {};
      var postBody = topic;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId === undefined || classificationGuideId === null) {
        throw new Error("Missing the required parameter 'classificationGuideId' when calling createTopic");
      }

      // verify the required parameter 'topic' is set
      if (topic === undefined || topic === null) {
        throw new Error("Missing the required parameter 'topic' when calling createTopic");
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
     * @param {string} classificationGuideId The identifier for the classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteClassificationGuide = function(classificationGuideId) {
      var postBody = null;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId === undefined || classificationGuideId === null) {
        throw new Error("Missing the required parameter 'classificationGuideId' when calling deleteClassificationGuide");
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
     * @param {string} topicId The identifier for the topic
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTopic = function(topicId) {
      var postBody = null;

      // verify the required parameter 'topicId' is set
      if (topicId === undefined || topicId === null) {
        throw new Error("Missing the required parameter 'topicId' when calling deleteTopic");
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
     * @param {string[]} opts.include Returns additional information about the guide. The following optional fields can be requested: * hasTopics - A flag indicating whether the guide already contains any topics.
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @param {string} opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on: * enabled - e.g. (enabled &#x3D; true OR enabled &#x3D; false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuidePaging} and HTTP response
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
     * @param {string} topicId The identifier for the topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @param {string} opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on: * hasInstruction * hasSubtopics
     * @param {boolean} opts.includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleSubtopicPaging} and HTTP response
     */
    this.listSubtopics = function(topicId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'topicId' is set
      if (topicId === undefined || topicId === null) {
        throw new Error("Missing the required parameter 'topicId' when calling listSubtopics");
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
     * @param {string} classificationGuideId The identifier for the classification guide
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to sort the list by one or more fields.  Each field has a default sort order, which is normally acending order. Read the API method implementation notes above to check if any fields used in this method have a descending default search order.  To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
     * @param {string} opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction&#x3D;true and hasSubtopics&#x3D;false). Fields to filter on: * hasInstruction * hasSubtopics
     * @param {boolean} opts.includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicPaging} and HTTP response
     */
    this.listTopics = function(classificationGuideId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId === undefined || classificationGuideId === null) {
        throw new Error("Missing the required parameter 'classificationGuideId' when calling listTopics");
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
     * @param {string} classificationGuideId The identifier for the classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuideEntry} and HTTP response
     */
    this.showClassificationGuideById = function(classificationGuideId) {
      var postBody = null;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId === undefined || classificationGuideId === null) {
        throw new Error("Missing the required parameter 'classificationGuideId' when calling showClassificationGuideById");
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
     * @param {string} topicId The identifier for the topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    this.showTopicById = function(topicId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'topicId' is set
      if (topicId === undefined || topicId === null) {
        throw new Error("Missing the required parameter 'topicId' when calling showTopicById");
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
     * @param {string} classificationGuideId The identifier for the classification guide
     * @param {ClassificationGuideBody} classificationGuide Classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuideEntry} and HTTP response
     */
    this.updateClassificationGuide = function(classificationGuideId, classificationGuide) {
      var postBody = classificationGuide;

      // verify the required parameter 'classificationGuideId' is set
      if (classificationGuideId === undefined || classificationGuideId === null) {
        throw new Error("Missing the required parameter 'classificationGuideId' when calling updateClassificationGuide");
      }

      // verify the required parameter 'classificationGuide' is set
      if (classificationGuide === undefined || classificationGuide === null) {
        throw new Error("Missing the required parameter 'classificationGuide' when calling updateClassificationGuide");
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
     * Updates the topic with id **topicId**.  Use this to rename a topic or to add, edit, or remove the instruction associated with it.
     * @param {string} topicId The identifier for the topic
     * @param {TopicBody} topic Topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    this.updateTopic = function(topicId, topic, opts) {
      opts = opts || {};
      var postBody = topic;

      // verify the required parameter 'topicId' is set
      if (topicId === undefined || topicId === null) {
        throw new Error("Missing the required parameter 'topicId' when calling updateTopic");
      }

      // verify the required parameter 'topic' is set
      if (topic === undefined || topic === null) {
        throw new Error("Missing the required parameter 'topic' when calling updateTopic");
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
