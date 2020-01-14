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

import { RelatedContentRepresentation } from '../model/relatedContentRepresentation';
import { ResultListDataRepresentationRelatedContentRepresentation } from '../model/resultListDataRepresentationRelatedContentRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
 * Content service.
 * @module ContentApi
 */
export class ContentApi extends BaseApi {
    /**
     * Attach existing content to a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @param relatedContent relatedContent
     * @param opts Optional parameters
     * @param opts.isRelatedContent isRelatedContent
     * @return Promise<RelatedContentRepresentation>
     */
    createRelatedContentOnProcessInstance(processInstanceId: string, relatedContent: RelatedContentRepresentation | any, opts?: any): Promise<RelatedContentRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(relatedContent, 'relatedContent');

        opts = opts || {};

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {};
        let formParams = {};

        let accepts = ['application/json'];

        if (relatedContent instanceof RelatedContentRepresentation) {
            let postBody = relatedContent;
            let contentTypes = ['application/json'];
            return this.apiClient.callApi(
                '/api/enterprise/process-instances/{processInstanceId}/content', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, RelatedContentRepresentation);
        } else {
            let postBody = null;
            formParams = {
                'file': relatedContent
            };
            let contentTypes = ['multipart/form-data'];
            return this.apiClient.callApi(
                '/api/enterprise/process-instances/{processInstanceId}/raw-content', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, RelatedContentRepresentation);
        }
    }

    /**
     * Attach existing content to a task
     *
     *
     *
     * @param taskId taskId
     * @param relatedContent relatedContent
     * @param opts Optional parameters
     * @param opts.isRelatedContent isRelatedContent
     * @return Promise<RelatedContentRepresentation>
     */
    createRelatedContentOnTask(taskId: string, relatedContent: RelatedContentRepresentation | any, opts?: any): Promise<RelatedContentRepresentation> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(relatedContent, 'relatedContent');

        opts = opts || {};

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {};
        let formParams = {};

        let accepts = ['application/json'];

        if (relatedContent instanceof RelatedContentRepresentation) {
            let postBody = relatedContent;
            let contentTypes = ['application/json'];
            return this.apiClient.callApi(
                '/api/enterprise/tasks/{taskId}/content', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, RelatedContentRepresentation);

        } else {
            let postBody = null;
            formParams = {
                'file': relatedContent
            };
            let contentTypes = ['multipart/form-data'];
            return this.apiClient.callApi(
                '/api/enterprise/tasks/{taskId}/raw-content', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, RelatedContentRepresentation);
        }
    }

    /**
     * Upload content and create a local representation
     *
     *
     *
     * @param file file
     * @return Promise<RelatedContentRepresentation>
     */
    createTemporaryRawRelatedContent(file: any): Promise<RelatedContentRepresentation> {
        throwIfNotDefined(file, 'file');

        let postBody = null;

        let pathParams = {};

        let queryParams = {};

        let headerParams = {};
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/content/raw', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RelatedContentRepresentation);
    }

    /**
     * Create a local representation of content from a remote repository
     *
     *
     *
     * @param relatedContent relatedContent
     * @return Promise<RelatedContentRepresentation>
     */
    createTemporaryRelatedContent(relatedContent: RelatedContentRepresentation): Promise<RelatedContentRepresentation> {
        throwIfNotDefined(relatedContent, 'relatedContent');

        let postBody = relatedContent;

        let pathParams = {};

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RelatedContentRepresentation);
    }

    /**
     * Remove a local content representation
     *
     *
     *
     * @param contentId contentId
     * @return Promise<{}>
     */
    deleteContent(contentId: number): Promise<any> {
        throwIfNotDefined(contentId, 'contentId');

        let postBody = null;

        let pathParams = {
            'contentId': contentId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Get a local content representation
     *
     *
     *
     * @param contentId contentId
     * @return Promise<RelatedContentRepresentation>
     */
    getContent(contentId: number): Promise<RelatedContentRepresentation> {
        throwIfNotDefined(contentId, 'contentId');

        let postBody = null;

        let pathParams = {
            'contentId': contentId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RelatedContentRepresentation);
    }

    /**
     * Get content Raw URL for the given contentId
     * @param contentId contentId
     */
    getRawContentUrl(contentId: number) {
        return `${this.apiClient.basePath}/api/enterprise/content/${contentId}/raw`;
    }

    /**
     * Stream content rendition
     *
     *
     *
     * @param contentId contentId
     * @param renditionType renditionType
     * @return Promise<{}>
     */
    getRawContent(contentId: number, renditionType?: string): Promise<any> {
        throwIfNotDefined(contentId, 'contentId');

        let postBody = null;

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        if (renditionType) {
            const contentTypes = ['application/json'];
            const accepts = ['application/json'];

            let pathParams = {
                'contentId': contentId,
                'renditionType': renditionType
            };
            return this.apiClient.callApi(
                '/api/enterprise/content/{contentId}/rendition/{renditionType}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, 'blob');
        } else {
            const contentTypes = ['application/json'];
            const accepts = ['application/json'];

            let pathParams = {
                'contentId': contentId
            };

            return this.apiClient.callApi(
                '/api/enterprise/content/{contentId}/raw', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, 'blob', undefined,  'blob');
        }
    }

    /**
     * List content attached to a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @param opts Optional parameters
     * @param opts.isRelatedContent isRelatedContent
     * @return Promise<ResultListDataRepresentationRelatedContentRepresentation>
     */
    getRelatedContentForProcessInstance(processInstanceId: string, opts?: any): Promise<ResultListDataRepresentationRelatedContentRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationRelatedContentRepresentation);
    }

    /**
     * List content attached to a task
     *
     *
     *
     * @param taskId taskId
     * @param opts Optional parameters
     * @param opts.isRelatedContent isRelatedContent
     * @return Promise<ResultListDataRepresentationRelatedContentRepresentation>
     */
    getRelatedContentForTask(taskId: string, opts?: any): Promise<ResultListDataRepresentationRelatedContentRepresentation> {
        throwIfNotDefined(taskId, 'taskId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationRelatedContentRepresentation);
    }

}
