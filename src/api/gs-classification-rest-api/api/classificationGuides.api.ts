/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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
import { InstructionEntry } from '../model/instructionEntry';
import { SubtopicPaging } from '../model/subtopicPaging';
import { TopicBody } from '../model/topicBody';
import { TopicEntry } from '../model/topicEntry';
import { TopicPaging } from '../model/topicPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

export interface CombinedInstructionsOpts {
    instructions?: any;
}

/**
* ClassificationGuidesApi service.
* @module ClassificationGuidesApi
*/
export class ClassificationGuidesApi extends BaseApi {
    /**
    * Combined instructions
    *
    * Combines instructions from the given topics and the user defined instruction, if any.
    *
    * @param opts Optional parameters
    * @param opts.instructions Instructions
    * @return Promise<InstructionEntry>
    */
    combinedInstructions(opts?: CombinedInstructionsOpts): Promise<InstructionEntry> {
        return this.post({
            path: '/combined-instructions',
            bodyParam: opts?.instructions,
            returnType: InstructionEntry
        });
    }
    /**
        * Create a classification guide
        *
        * Creates a new classification guide.
        *
        * @param classificationGuide Classification guide
        * @return Promise<ClassificationGuideEntry>
        */
    createClassificationGuide(classificationGuide: ClassificationGuideBody): Promise<ClassificationGuideEntry> {
        throwIfNotDefined(classificationGuide, 'classificationGuide');

        return this.post({
            path: '/classification-guides',
            bodyParam: classificationGuide,
            returnType: ClassificationGuideEntry
        });
    }

    /**
        * Create a subtopic
        *
        * Creates a new subtopic of a topic.
        *
        * @param topicId The identifier for the topic
        * @param topic Subtopic
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.

        * @return Promise<TopicEntry>
        */
    createSubtopic(topicId: string, topic: TopicBody, opts?: { include?: string[] }): Promise<TopicEntry> {
        throwIfNotDefined(topicId, 'topicId');
        throwIfNotDefined(topic, 'topic');

        opts = opts || {};

        const pathParams = {
            topicId
        };

        const queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        return this.post({
            path: '/topics/{topicId}/subtopics',
            pathParams,
            queryParams,
            bodyParam: topic,
            returnType: TopicEntry
        });
    }
    /**
        * Create a topic
        *
        * Creates a new topic.
        *
        * @param classificationGuideId The identifier for the classification guide
        * @param topic Topic
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.

        * @return Promise<TopicEntry>
        */
    createTopic(classificationGuideId: string, topic: TopicBody, opts?: { include?: string[] }): Promise<TopicEntry> {
        throwIfNotDefined(classificationGuideId, 'classificationGuideId');
        throwIfNotDefined(topic, 'topic');

        opts = opts || {};

        const pathParams = {
            classificationGuideId
        };

        const queryParams = {
            include: buildCollectionParam(opts?.include, 'csv')
        };

        return this.post({
            path: '/classification-guides/{classificationGuideId}/topics',
            pathParams,
            queryParams,
            bodyParam: topic,
            returnType: TopicEntry
        });
    }

    /**
        * Delete a classification guide
        *
        * Deletes the classification guide with id **classificationGuideId**, including any topics and instructions.
        *
        * @param classificationGuideId The identifier for the classification guide
        * @return Promise<{}>
        */
    deleteClassificationGuide(classificationGuideId: string): Promise<any> {
        throwIfNotDefined(classificationGuideId, 'classificationGuideId');

        const pathParams = {
            classificationGuideId
        };

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-guides/{classificationGuideId}', 'DELETE',
            pathParams, {}, {}, {}, null,
            contentTypes, accepts);
    }

    /**
        * Delete a topic
        *
        * Deletes the topic with id  **topicId**, including any subtopics and instructions.
        *
        * @param topicId The identifier for the topic
        * @return Promise<{}>
        */
    deleteTopic(topicId: string): Promise<any> {
        throwIfNotDefined(topicId, 'topicId');

        const pathParams = {
            topicId
        };

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/topics/{topicId}', 'DELETE',
            pathParams, {}, {}, {}, null,
            contentTypes, accepts);
    }
    /**
        * List all classification guides
        *
        * Gets all classification guides.
        *
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the guide. The following optional fields can be requested:
    * hasTopics - A flag indicating whether the guide already contains any topics.

        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
    * enabled - e.g. (enabled = true OR enabled = false)

        * @return Promise<ClassificationGuidePaging>
        */
    listClassificationGuides(opts?: { include?: string[]; skipCount?: number; maxItems?: number; orderBy?: string[]; where?: string }): Promise<ClassificationGuidePaging> {
        opts = opts || {};

        const queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where']
        };

        return this.get({
            path: '/classification-guides',
            queryParams,
            returnType: ClassificationGuidePaging
        });
    }

    /**
    * List all subtopics
    *
    * Gets all subtopics of a topic.
    *
    * @param topicId The identifier for the topic
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.

        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR. Fields to filter on:
    * hasInstruction
    * hasSubtopics

        * @param opts.includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
        * @return Promise<SubtopicPaging>
        */
    listSubtopics(topicId: string, opts?: {
        include?: string[];
        skipCount?: number;
        maxItems?: number;
        orderBy?: string[];
        where?: string;
        includeSource?: boolean;
    }): Promise<SubtopicPaging> {
        throwIfNotDefined(topicId, 'topicId');
        opts = opts || {};

        const pathParams = {
            topicId
        };

        const queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where'],
            'includeSource': opts['includeSource']
        };

        return this.get({
            path: '/topics/{topicId}/subtopics',
            pathParams,
            queryParams,
            returnType: SubtopicPaging
        });
    }

    /**
    * List all topics
    *
    * Gets all topics.
    *
    * @param classificationGuideId The identifier for the classification guide
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.

        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.where A string to restrict the returned objects by using a predicate. Supported operations are AND, NOT, and OR e.g. (instruction=true and hasSubtopics=false). Fields to filter on:
    * hasInstruction
    * hasSubtopics

        * @param opts.includeSource Also include **source** in addition to **entries** with folder information on the parent guide/topic
        * @return Promise<TopicPaging>
        */
    listTopics(classificationGuideId: string, opts?: {
        include?: string[];
        skipCount?: number;
        maxItems?: number;
        orderBy?: string[];
        where?: string;
        includeSource?: boolean;
    }): Promise<TopicPaging> {
        throwIfNotDefined(classificationGuideId, 'classificationGuideId');
        opts = opts || {};

        const pathParams = {
            classificationGuideId
        };

        const queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where'],
            'includeSource': opts['includeSource']
        };

        return this.get({
            path: '/classification-guides/{classificationGuideId}/topics',
            pathParams,
            queryParams,
            returnType: TopicPaging
        });
    }

    /**
    * Get classification guide information
    *
    * Gets the classification guide with id **classificationGuideId**.
    *
    * @param classificationGuideId The identifier for the classification guide
    * @return Promise<ClassificationGuideEntry>
    */
    showClassificationGuideById(classificationGuideId: string): Promise<ClassificationGuideEntry> {
        throwIfNotDefined(classificationGuideId, 'classificationGuideId');

        const pathParams = {
            classificationGuideId
        };

        return this.get({
            path: '/classification-guides/{classificationGuideId}',
            pathParams,
            returnType: ClassificationGuideEntry
        });
    }

    /**
    * Get topic information
    *
    * Gets the topic with id **topicId**.
    *
    * @param topicId The identifier for the topic
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.
    * @return Promise<TopicEntry>
    */
    showTopicById(topicId: string, opts?: { include?: string[] }): Promise<TopicEntry> {
        throwIfNotDefined(topicId, 'topicId');

        const pathParams = {
            topicId
        };

        const queryParams = {
            include: buildCollectionParam(opts?.include, 'csv')
        };

        return this.post({
            path: '/topics/{topicId}',
            pathParams,
            queryParams,
            returnType: TopicEntry
        });
    }

    /**
    * Update a classification guide
    *
    * Updates the classification guide with id **classificationGuideId**. For example, you can rename a classification guide.
    *
    * @param classificationGuideId The identifier for the classification guide
    * @param classificationGuide Classification guide
    * @return Promise<ClassificationGuideEntry>
    */
    updateClassificationGuide(classificationGuideId: string, classificationGuide: ClassificationGuideBody): Promise<ClassificationGuideEntry> {
        throwIfNotDefined(classificationGuideId, 'classificationGuideId');
        throwIfNotDefined(classificationGuide, 'classificationGuide');

        const pathParams = {
            classificationGuideId
        };

        return this.put({
            path: '/classification-guides/{classificationGuideId}',
            pathParams,
            bodyParam: classificationGuide,
            returnType: ClassificationGuideEntry
        });
    }

    /**
        * Update a topic
        *
        * Updates the topic with id **topicId**.

    Use this to rename a topic or to add, edit, or remove the instruction associated with it.

        *
        * @param topicId The identifier for the topic
        * @param topic Topic
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the topic. The following optional fields can be requested:
    * hasSubtopics - A flag indicating whether the topic already contains any subtopics.
    * instruction - Contains details of any instruction in the topic.
    * path - An ordered list of id-name pairs of all ancestor topics and the classification guide.
    * classificationGuide - The classification guide this topic is in.

        * @return Promise<TopicEntry>
        */
    updateTopic(topicId: string, topic: TopicBody, opts?: { include?: string[] }): Promise<TopicEntry> {
        throwIfNotDefined(topicId, 'topicId');
        throwIfNotDefined(topic, 'topic');

        const pathParams = {
            topicId
        };

        const queryParams = {
            include: buildCollectionParam(opts?.include, 'csv')
        };

        return this.put({
            path: '/topics/{topicId}',
            pathParams,
            queryParams,
            bodyParam: topic,
            returnType: TopicEntry
        });
    }
}
