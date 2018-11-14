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
    createRelatedContentOnProcessInstanceUsingPOST(processInstanceId: string, relatedContent: RelatedContentRepresentation, opts?: any): Promise<RelatedContentRepresentation> {
        opts = opts || {};
        let postBody = relatedContent;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createRelatedContentOnProcessInstanceUsingPOST");
        }

        if (relatedContent === undefined || relatedContent === null) {
            throw new Error("Required param 'relatedContent' in createRelatedContentOnProcessInstanceUsingPOST");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/process-instances/{processInstanceId}/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Upload content and attach to a process instance
        *
        *
        *
        * @param processInstanceId processInstanceId
        * @param file file
        * @param opts Optional parameters
        * @param opts.isRelatedContent isRelatedContent
        * @return Promise<RelatedContentRepresentation>
        */
    createRelatedContentOnProcessInstanceUsingPOST1(processInstanceId: string, file: Blob, opts?: any): Promise<RelatedContentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createRelatedContentOnProcessInstanceUsingPOST1");
        }

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in createRelatedContentOnProcessInstanceUsingPOST1");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/process-instances/{processInstanceId}/raw-content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    createRelatedContentOnTaskUsingPOST(taskId: string, relatedContent: RelatedContentRepresentation, opts?: any): Promise<RelatedContentRepresentation> {
        opts = opts || {};
        let postBody = relatedContent;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in createRelatedContentOnTaskUsingPOST");
        }

        if (relatedContent === undefined || relatedContent === null) {
            throw new Error("Required param 'relatedContent' in createRelatedContentOnTaskUsingPOST");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/tasks/{taskId}/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Upload content and attach to a task
        *
        *
        *
        * @param taskId taskId
        * @param file file
        * @param opts Optional parameters
        * @param opts.isRelatedContent isRelatedContent
        * @return Promise<RelatedContentRepresentation>
        */
    createRelatedContentOnTaskUsingPOST1(taskId: string, file: Blob, opts?: any): Promise<RelatedContentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in createRelatedContentOnTaskUsingPOST1");
        }

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in createRelatedContentOnTaskUsingPOST1");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/tasks/{taskId}/raw-content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Upload content and create a local representation
        *
        *
        *
        * @param file file
        * @return Promise<RelatedContentRepresentation>
        */
    createTemporaryRawRelatedContentUsingPOST(file: Blob): Promise<RelatedContentRepresentation> {

        let postBody = null;

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in createTemporaryRawRelatedContentUsingPOST");
        }

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/content/raw', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a local representation of content from a remote repository
        *
        *
        *
        * @param relatedContent relatedContent
        * @return Promise<RelatedContentRepresentation>
        */
    createTemporaryRelatedContentUsingPOST(relatedContent: RelatedContentRepresentation): Promise<RelatedContentRepresentation> {

        let postBody = relatedContent;

        if (relatedContent === undefined || relatedContent === null) {
            throw new Error("Required param 'relatedContent' in createTemporaryRelatedContentUsingPOST");
        }

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Remove a local content representation
        *
        *
        *
        * @param contentId contentId
        * @return Promise<{}>
        */
    deleteContentUsingDELETE(contentId: number): Promise<{}> {

        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in deleteContentUsingDELETE");
        }

        let pathParams = {
            'contentId': contentId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/content/{contentId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a local content representation
        *
        *
        *
        * @param contentId contentId
        * @return Promise<RelatedContentRepresentation>
        */
    getContentUsingGET(contentId: number): Promise<RelatedContentRepresentation> {

        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in getContentUsingGET");
        }

        let pathParams = {
            'contentId': contentId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/content/{contentId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    getRawContentUsingGET(contentId: number, renditionType: string): Promise<{}> {

        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in getRawContentUsingGET");
        }

        if (renditionType === undefined || renditionType === null) {
            throw new Error("Required param 'renditionType' in getRawContentUsingGET");
        }

        let pathParams = {
            'contentId': contentId, 'renditionType': renditionType
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['*/*'];

        return this.apiClient.callApi(
            '/enterprise/content/{contentId}/rendition/{renditionType}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Stream content from a local content representation
        *
        *
        *
        * @param contentId contentId
        * @return Promise<{}>
        */
    getRawContentUsingGET1(contentId: number): Promise<{}> {

        let postBody = null;

        if (contentId === undefined || contentId === null) {
            throw new Error("Required param 'contentId' in getRawContentUsingGET1");
        }

        let pathParams = {
            'contentId': contentId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json', '*/*'];

        return this.apiClient.callApi(
            '/enterprise/content/{contentId}/raw', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    getRelatedContentForProcessInstanceUsingGET(processInstanceId: string, opts?: any): Promise<ResultListDataRepresentationRelatedContentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getRelatedContentForProcessInstanceUsingGET");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/process-instances/{processInstanceId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    getRelatedContentForTaskUsingGET(taskId: string, opts?: any): Promise<ResultListDataRepresentationRelatedContentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getRelatedContentForTaskUsingGET");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/tasks/{taskId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
