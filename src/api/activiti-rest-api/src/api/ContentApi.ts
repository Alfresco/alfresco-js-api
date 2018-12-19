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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { ProcessClient } from '../../../../processClient';

export class ContentApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the createRelatedContentOnProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRelatedContentOnProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     */
    createRelatedContentOnProcessInstancePostBody(processInstanceId, relatedContent, opts?: any) {
        let postBody = relatedContent;
        opts = opts || {};

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in createRelatedContentOnProcessInstance";
        }

        // verify the required parameter 'relatedContent' is set
        if (relatedContent === undefined || relatedContent === null) {
            throw "Missing param 'relatedContent' in createRelatedContentOnProcessInstance";
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
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createRelatedContentOnProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRelatedContentOnProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {File} file file
     */
    createRelatedContentOnProcessInstance(processInstanceId, file, opts?: any) {
        let postBody = null;
        opts = opts || {};

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in createRelatedContentOnProcessInstance";
        }

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in createRelatedContentOnProcessInstance";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };
        let headerParams = {};
        let formParams = {
            'file': file
        };


        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/raw-content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createRelatedContentOnTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To relate content (eg from Alfresco) to a task
     * @param {String} taskId taskId
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isRelatedContent isRelatedContent
     */
    createRelatedContentOnTaskPostBody(taskId, relatedContent, opts?: any) {
        opts = opts || {};
        let postBody = relatedContent;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in createRelatedContentOnTask";
        }

        // verify the required parameter 'relatedContent' is set
        if (relatedContent === undefined || relatedContent === null) {
            throw "Missing param 'relatedContent' in createRelatedContentOnTask";
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
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createRelatedContentOnTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload content to a task
     * @param {String} taskId taskId
     * @param {File} file file
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isRelatedContent isRelatedContent
     */
    createRelatedContentOnTask(taskId, file, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in createRelatedContentOnTask";
        }

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in createRelatedContentOnTask";
        }


        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
            'isRelatedContent': opts['isRelatedContent']
        };
        let headerParams = {};
        let formParams = {
            'file': file
        };


        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/raw-content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createTemporaryRawRelatedContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createTemporaryRawRelatedContent
     * @param {File} file file
     */
    createTemporaryRawRelatedContent(file) {
        let postBody = null;

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in createTemporaryRawRelatedContent";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': file
        };


        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/content/raw', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createTemporaryRelatedContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createTemporaryRelatedContent
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     */
    createTemporaryRelatedContent(relatedContent) {
        let postBody = relatedContent;

        // verify the required parameter 'relatedContent' is set
        if (relatedContent === undefined || relatedContent === null) {
            throw "Missing param 'relatedContent' in createTemporaryRelatedContent";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/content', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the deleteContent operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteContent
     * @param {Integer} contentId contentId
     */
    deleteContent(contentId) {
        let postBody = null;

        // verify the required parameter 'contentId' is set
        if (contentId === undefined || contentId === null) {
            throw "Missing param 'contentId' in deleteContent";
        }


        let pathParams = {
            'contentId': contentId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getContent
     * @param {Integer} contentId contentId
     */
    getContent(contentId) {
        let postBody = null;

        // verify the required parameter 'contentId' is set
        if (contentId === undefined || contentId === null) {
            throw "Missing param 'contentId' in getContent";
        }


        let pathParams = {
            'contentId': contentId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessInstanceContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
     */
    getProcessInstanceContent(processInstanceId) {
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstanceContent";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/field-content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getRawContent operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRawContent
     * @param {Integer} contentId contentId
     */
    getRawContent(contentId) {
        let postBody = null;

        // verify the required parameter 'contentId' is set
        if (contentId === undefined || contentId === null) {
            throw "Missing param 'contentId' in getRawContent";
        }


        let pathParams = {
            'contentId': contentId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;
        let contextRoot = null;
        let responseType = 'blob';

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}/raw', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType, contextRoot, responseType
        );
    }

    getContentPreview(contentId) {
        let postBody = null;

        // verify the required parameter 'contentId' is set
        if (contentId === undefined || contentId === null) {
            throw "Missing param 'contentId' in getRawContent";
        }


        let pathParams = {
            'contentId': contentId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;
        let contextRoot = null;
        let responseType = 'blob';

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}/rendition/preview', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType, contextRoot, responseType
        );
    }


    /**
     * Get content Raw URL for the given contentId
     * @param {Integer} contentId contentId
     */
    getRawContentUrl(contentId) {
        return this.apiClient.basePath + '/api/enterprise/content/' + contentId + '/raw';
    }

    /**
     * Get thumbnail for the given contentId
     * @param {Integer} contentId contentId
     */
    getContentThumbnail(contentId) {
        let postBody = null;

        // verify the required parameter 'contentId' is set
        if (contentId === undefined || contentId === null) {
            throw "Missing param 'contentId' in getRawContent";
        }


        let pathParams = {
            'contentId': contentId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Object;
        let contextRoot = null;
        let responseType = 'blob';

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}/rendition/thumbnail', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType, contextRoot, responseType
        );
    }

    /**
     * Function to receive the result of the getRelatedContentForProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRelatedContentForProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {Boolean} isRelated isRelated optional
     */
    getRelatedContentForProcessInstance(processInstanceId, isRelated) {
        isRelated = isRelated || true;
        let postBody = null;

        // verify the required parameter 'processInstanceId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getRelatedContentForProcessInstance";
        }


        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {
            'isRelatedContent': isRelated
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getRelatedContentForTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     * @param {Boolean} isRelated isRelated optional
     */

    /**
     * Retrieve which content is attached to a task
     * @param {String} taskId taskId
     */
    getRelatedContentForTask(taskId, isRelated) {
        isRelated = isRelated || true;
        let postBody = null;

        // verify the required parameter 'taskId' is set
        if (taskId === undefined || taskId === null) {
            throw "Missing param 'taskId' in getRelatedContentForTask";
        }


        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
            'isRelatedContent': isRelated
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
