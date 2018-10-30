/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AlfrescoApiClient } from '../../../alfrescoApiClient';
import { Error } from '../model/Error';
import { ClassificationGuideBody } from '../model/ClassificationGuideBody';
import { ClassificationGuideEntry } from '../model/ClassificationGuideEntry';
import { ClassificationGuidePaging } from '../model/ClassificationGuidePaging';
import { CombinedInstructionBody } from '../model/CombinedInstructionBody';
import { InstructionEntry } from '../model/InstructionEntry';
import { SubtopicPaging } from '../model/SubtopicPaging';
import { TopicBody } from '../model/TopicBody';
import { TopicEntry } from '../model/TopicEntry';
import { TopicPaging } from '../model/TopicPaging';


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
export class ClassificationGuidesApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Combined instructions
     * Combines instructions from the given topics and the user defined instruction, if any.
     * @param {Object} opts Optional parameters
     * @param {CombinedInstructionBody} opts.instructions Instructions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleInstructionEntry} and HTTP response
     */
    combinedInstructions = function (opts) {
        opts = opts || {};
        let postBody = opts['instructions'];


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = InstructionEntry;

        return this.apiClient.callApi(
            '/combined-instructions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Create a classification guide
     * Creates a new classification guide.
     * @param {ClassificationGuideBody} classificationGuide Classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuideEntry} and HTTP response
     */
    createClassificationGuide = function (classificationGuide) {
        let postBody = classificationGuide;

        // verify the required parameter 'classificationGuide' is set
        if (classificationGuide === undefined || classificationGuide === null) {
            throw new Error("Missing param 'classificationGuide' in createClassificationGuide");
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = ClassificationGuideEntry;

        return this.apiClient.callApi(
            '/classification-guides', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Create a subtopic
     * Creates a new subtopic of a topic.
     * @param {string} topicId The identifier for the topic
     * @param {TopicBody} topic Subtopic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    createSubtopic = function (topicId, topic, opts) {
        opts = opts || {};
        let postBody = topic;

        // verify the required parameter 'topicId' is set
        if (topicId === undefined || topicId === null) {
            throw new Error("Missing param 'topicId' in createSubtopic");
        }

        // verify the required parameter 'topic' is set
        if (topic === undefined || topic === null) {
            throw new Error("Missing param 'topic' in createSubtopic");
        }


        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TopicEntry;

        return this.apiClient.callApi(
            '/topics/{topicId}/subtopics', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Create a topic
     * Creates a new topic.
     * @param {string} classificationGuideId The identifier for the classification guide
     * @param {TopicBody} topic Topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    createTopic = function (classificationGuideId, topic, opts) {
        opts = opts || {};
        let postBody = topic;

        // verify the required parameter 'classificationGuideId' is set
        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Missing param 'classificationGuideId' in createTopic");
        }

        // verify the required parameter 'topic' is set
        if (topic === undefined || topic === null) {
            throw new Error("Missing param 'topic' in createTopic");
        }


        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TopicEntry;

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}/topics', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };


    /**
     * Delete a classification guide
     * Deletes the classification guide with id **classificationGuideId**, including any topics and instructions.
     * @param {string} classificationGuideId The identifier for the classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteClassificationGuide = function (classificationGuideId) {
        let postBody = null;

        // verify the required parameter 'classificationGuideId' is set
        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Missing param 'classificationGuideId' in deleteClassificationGuide");
        }


        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Delete a topic
     * Deletes the topic with id  **topicId**, including any subtopics and instructions.
     * @param {string} topicId The identifier for the topic
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTopic = function (topicId) {
        let postBody = null;

        // verify the required parameter 'topicId' is set
        if (topicId === undefined || topicId === null) {
            throw new Error("Missing param 'topicId' in deleteTopic");
        }


        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/topics/{topicId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };


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
    listClassificationGuides = function (opts) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = ClassificationGuidePaging;

        return this.apiClient.callApi(
            '/classification-guides', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

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
    listSubtopics = function (topicId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'topicId' is set
        if (topicId === undefined || topicId === null) {
            throw new Error("Missing param 'topicId' in listSubtopics");
        }


        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where'],
            'includeSource': opts['includeSource']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = SubtopicPaging;

        return this.apiClient.callApi(
            '/topics/{topicId}/subtopics', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

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
    listTopics = function (classificationGuideId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'classificationGuideId' is set
        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Missing param 'classificationGuideId' in listTopics");
        }


        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where'],
            'includeSource': opts['includeSource']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TopicPaging;

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}/topics', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Get classification guide information
     * Gets the classification guide with id **classificationGuideId**.
     * @param {string} classificationGuideId The identifier for the classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuideEntry} and HTTP response
     */
    showClassificationGuideById = function (classificationGuideId) {
        let postBody = null;

        // verify the required parameter 'classificationGuideId' is set
        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Missing param 'classificationGuideId' in showClassificationGuideById");
        }


        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = ClassificationGuideEntry;

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Get topic information
     * Gets the topic with id **topicId**.
     * @param {string} topicId The identifier for the topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    showTopicById = function (topicId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'topicId' is set
        if (topicId === undefined || topicId === null) {
            throw new Error("Missing param 'topicId' in showTopicById");
        }


        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TopicEntry;

        return this.apiClient.callApi(
            '/topics/{topicId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };


    /**
     * Update a classification guide
     * Updates the classification guide with id **classificationGuideId**. For example, you can rename a classification guide.
     * @param {string} classificationGuideId The identifier for the classification guide
     * @param {ClassificationGuideBody} classificationGuide Classification guide
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationGuideEntry} and HTTP response
     */
    updateClassificationGuide = function (classificationGuideId, classificationGuide) {
        let postBody = classificationGuide;

        // verify the required parameter 'classificationGuideId' is set
        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Missing param 'classificationGuideId' in updateClassificationGuide");
        }

        // verify the required parameter 'classificationGuide' is set
        if (classificationGuide === undefined || classificationGuide === null) {
            throw new Error("Missing param 'classificationGuide' in updateClassificationGuide");
        }


        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = ClassificationGuideEntry;

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Update a topic
     * Updates the topic with id **topicId**.  Use this to rename a topic or to add, edit, or remove the instruction associated with it.
     * @param {string} topicId The identifier for the topic
     * @param {TopicBody} topic Topic
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the topic. The following optional fields can be requested: * hasSubtopics - A flag indicating whether the topic already contains any subtopics. * instruction - Contains details of any instruction in the topic. * path - An ordered list of id-name pairs of all ancestor topics and the classification guide. * classificationGuide - The classification guide this topic is in.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTopicEntry} and HTTP response
     */
    updateTopic = function (topicId, topic, opts) {
        opts = opts || {};
        let postBody = topic;

        // verify the required parameter 'topicId' is set
        if (topicId === undefined || topicId === null) {
            throw new Error("Missing param 'topicId' in updateTopic");
        }

        // verify the required parameter 'topic' is set
        if (topic === undefined || topic === null) {
            throw new Error("Missing param 'topic' in updateTopic");
        }


        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = TopicEntry;

        return this.apiClient.callApi(
            '/topics/{topicId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

}
