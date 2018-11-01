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

import { ClassificationGuideBody } from '../model/classificationGuideBody';
import { ClassificationGuideEntry } from '../model/classificationGuideEntry';
import { ClassificationGuidePaging } from '../model/classificationGuidePaging';
import { CombinedInstructionBody } from '../model/combinedInstructionBody';
import { InstructionEntry } from '../model/instructionEntry';
import { ModelError } from '../model/modelError';
import { SubtopicPaging } from '../model/subtopicPaging';
import { TopicBody } from '../model/topicBody';
import { TopicEntry } from '../model/topicEntry';
import { TopicPaging } from '../model/topicPaging';
import { BaseApi } from './base.api';

/**
* Classificationguides service.
* @module ClassificationguidesApi
*/
export class ClassificationguidesApi extends BaseApi {
    /**
    * Combined instructions
    * 
    * Combines instructions from the given topics and the user defined instruction, if any.
    * @param instructions Instructions
    */
    combinedInstructions(opts: any): Promise<InstructionEntry> {
        opts = opts || {};
        let postBody = opts['instructions'];

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/combined-instructions', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a classification guide
        * 
        * Creates a new classification guide.
        * @param classificationGuide Classification guide
        */
    createClassificationGuide(classificationGuide: ClassificationGuideBody): Promise<ClassificationGuideEntry> {

        let postBody = classificationGuide;

        if (classificationGuide === undefined || classificationGuide === null) {
            throw new Error("Required param 'classificationGuide' in createClassificationGuide");
        }

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a subtopic
        * 
        * Creates a new subtopic of a topic.
        * @param topicId The identifier for the topic
        * @param topic Subtopic
        * @param include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    
        */
    createSubtopic(topicId: string, topic: TopicBody, opts: any): Promise<TopicEntry> {
        opts = opts || {};
        let postBody = topic;

        if (topicId === undefined || topicId === null) {
            throw new Error("Required param 'topicId' in createSubtopic");
        }

        if (topic === undefined || topic === null) {
            throw new Error("Required param 'topic' in createSubtopic");
        }

        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/topics/{topicId}/subtopics', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a topic
        * 
        * Creates a new topic.
        * @param classificationGuideId The identifier for the classification guide
        * @param topic Topic
        * @param include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    
        */
    createTopic(classificationGuideId: string, topic: TopicBody, opts: any): Promise<TopicEntry> {
        opts = opts || {};
        let postBody = topic;

        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Required param 'classificationGuideId' in createTopic");
        }

        if (topic === undefined || topic === null) {
            throw new Error("Required param 'topic' in createTopic");
        }

        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}/topics', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a classification guide
        * 
        * Deletes the classification guide with id **classificationGuideId**, including any topics and instructions.
        * @param classificationGuideId The identifier for the classification guide
        */
    deleteClassificationGuide(classificationGuideId: string): Promise<{}> {

        let postBody = null;

        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Required param 'classificationGuideId' in deleteClassificationGuide");
        }

        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a topic
        * 
        * Deletes the topic with id  **topicId**, including any subtopics and instructions.
        * @param topicId The identifier for the topic
        */
    deleteTopic(topicId: string): Promise<{}> {

        let postBody = null;

        if (topicId === undefined || topicId === null) {
            throw new Error("Required param 'topicId' in deleteTopic");
        }

        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/topics/{topicId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List all classification guides
        * 
        * Gets all classification guides.
        * @param include Returns additional information about the guide. The following optional fields can be requested:
    * hasTopics - A flag indicating whether the guide already contains any topics.
    
        * @param skipCount The number of entities that exist in the collection before those included in this list.
        * @param maxItems The maximum number of items to return in the list.
        * @param orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.
    
    Each field has a default sort order, which is normally acending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.
    
    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
    
        * @param where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
    * enabled - e.g. (enabled = true OR enabled = false)
    
        */
    listClassificationGuides(opts: any): Promise<ClassificationGuidePaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            },
            'orderBy': {
                value: opts['orderBy'],
                collectionFormat: 'csv'
            },
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List all subtopics
        * 
        * Gets all subtopics of a topic.
        * @param topicId The identifier for the topic
        * @param include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    
        * @param skipCount The number of entities that exist in the collection before those included in this list.
        * @param maxItems The maximum number of items to return in the list.
        * @param orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.
    
    Each field has a default sort order, which is normally acending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.
    
    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
    
        * @param where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
    * hasInstruction
    * hasSubtopics
    
        * @param includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
        */
    listSubtopics(topicId: string, opts: any): Promise<SubtopicPaging> {
        opts = opts || {};
        let postBody = null;

        if (topicId === undefined || topicId === null) {
            throw new Error("Required param 'topicId' in listSubtopics");
        }

        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'includeSource': opts['includeSource'],
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            },
            'orderBy': {
                value: opts['orderBy'],
                collectionFormat: 'csv'
            },
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/topics/{topicId}/subtopics', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List all topics
        * 
        * Gets all topics.
        * @param classificationGuideId The identifier for the classification guide
        * @param include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    
        * @param skipCount The number of entities that exist in the collection before those included in this list.
        * @param maxItems The maximum number of items to return in the list.
        * @param orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.
    
    Each field has a default sort order, which is normally acending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.
    
    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
    
        * @param where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction=true and hasSubtopics=false). Fields to filter on:
    * hasInstruction
    * hasSubtopics
    
        * @param includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
        */
    listTopics(classificationGuideId: string, opts: any): Promise<TopicPaging> {
        opts = opts || {};
        let postBody = null;

        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Required param 'classificationGuideId' in listTopics");
        }

        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'includeSource': opts['includeSource'],
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            },
            'orderBy': {
                value: opts['orderBy'],
                collectionFormat: 'csv'
            },
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}/topics', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get classification guide information
        * 
        * Gets the classification guide with id **classificationGuideId**.
        * @param classificationGuideId The identifier for the classification guide
        */
    showClassificationGuideById(classificationGuideId: string): Promise<ClassificationGuideEntry> {

        let postBody = null;

        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Required param 'classificationGuideId' in showClassificationGuideById");
        }

        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get topic information
        * 
        * Gets the topic with id **topicId**.
        * @param topicId The identifier for the topic
        * @param include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    
        */
    showTopicById(topicId: string, opts: any): Promise<TopicEntry> {
        opts = opts || {};
        let postBody = null;

        if (topicId === undefined || topicId === null) {
            throw new Error("Required param 'topicId' in showTopicById");
        }

        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/topics/{topicId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a classification guide
        * 
        * Updates the classification guide with id **classificationGuideId**. For example, you can rename a classification guide.
        * @param classificationGuideId The identifier for the classification guide
        * @param classificationGuide Classification guide
        */
    updateClassificationGuide(classificationGuideId: string, classificationGuide: ClassificationGuideBody): Promise<ClassificationGuideEntry> {

        let postBody = classificationGuide;

        if (classificationGuideId === undefined || classificationGuideId === null) {
            throw new Error("Required param 'classificationGuideId' in updateClassificationGuide");
        }

        if (classificationGuide === undefined || classificationGuide === null) {
            throw new Error("Required param 'classificationGuide' in updateClassificationGuide");
        }

        let pathParams = {
            'classificationGuideId': classificationGuideId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a topic
        * 
        * Updates the topic with id **topicId**.
    
    Use this to rename a topic or to add, edit, or remove the instruction associated with it.
    
        * @param topicId The identifier for the topic
        * @param topic Topic
        * @param include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    
        */
    updateTopic(topicId: string, topic: TopicBody, opts: any): Promise<TopicEntry> {
        opts = opts || {};
        let postBody = topic;

        if (topicId === undefined || topicId === null) {
            throw new Error("Required param 'topicId' in updateTopic");
        }

        if (topic === undefined || topic === null) {
            throw new Error("Required param 'topic' in updateTopic");
        }

        let pathParams = {
            'topicId': topicId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'include': {
                value: opts['include'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/topics/{topicId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
