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
        opts = opts || {};
        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createRelatedContentOnProcessInstance");
        }

        if (relatedContent === undefined || relatedContent === null) {
            throw new Error("Required param 'relatedContent' in createRelatedContentOnProcessInstance");
        }

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
            let contentTypes = [ 'multipart/form-data'];
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
        opts = opts || {};
        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in createRelatedContentOnTask");
        }

        if (relatedContent === undefined || relatedContent === null) {
            throw new Error("Required param 'relatedContent' in createRelatedContentOnTask");
        }

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
            let contentTypes = [ 'multipart/form-data'];
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

        let postBody = null;

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in createTemporaryRawRelatedContent");
        }

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

        let postBody = relatedContent;

        if (relatedContent === undefined || relatedContent === null) {
            throw new Error("Required param 'relatedContent' in createTemporaryRelatedContent");
        }

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

        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in deleteContent");
        }

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

        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in getContent");
        }

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
    getRawContent(contentId: number): Promise<any>;
    getRawContent(contentId: number, renditionType: string): Promise<any>;
    getRawContent(contentId: number, renditionType?: string): Promise<any> {
        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in getRawContent");
        }

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
        opts = opts || {};
        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getRelatedContentForProcessInstance");
        }

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
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getRelatedContentForTask");
        }

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
