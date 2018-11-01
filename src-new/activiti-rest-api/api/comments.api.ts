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

import { CommentRepresentation } from '../model/commentRepresentation';
import { ResultListDataRepresentationCommentRepresentation } from '../model/resultListDataRepresentationCommentRepresentation';
import { BaseApi } from './base.api';

/**
* Comments service.
* @module CommentsApi
*/
export class CommentsApi extends BaseApi {
    /**
    * Add a comment to a process instance
    * 
    * 
    * @param commentRequest commentRequest
    * @param processInstanceId processInstanceId
    */
    addProcessInstanceCommentUsingPOST(commentRequest: CommentRepresentation, processInstanceId: string): Promise<CommentRepresentation> {

        let postBody = commentRequest;

        if (commentRequest === undefined || commentRequest === null) {
            throw new Error("Required param 'commentRequest' in addProcessInstanceCommentUsingPOST");
        }

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in addProcessInstanceCommentUsingPOST");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
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
            '/enterprise/process-instances/{processInstanceId}/comments', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Add a comment to a task
        * 
        * 
        * @param commentRequest commentRequest
        * @param taskId taskId
        */
    addTaskCommentUsingPOST(commentRequest: CommentRepresentation, taskId: string): Promise<CommentRepresentation> {

        let postBody = commentRequest;

        if (commentRequest === undefined || commentRequest === null) {
            throw new Error("Required param 'commentRequest' in addTaskCommentUsingPOST");
        }

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in addTaskCommentUsingPOST");
        }

        let pathParams = {
            'taskId': taskId
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
            '/enterprise/tasks/{taskId}/comments', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get comments for a process
        * 
        * 
        * @param processInstanceId processInstanceId
        * @param latestFirst latestFirst
        */
    getProcessInstanceCommentsUsingGET(processInstanceId: string, opts: any): Promise<ResultListDataRepresentationCommentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceCommentsUsingGET");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {
            'latestFirst': opts['latestFirst'],
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
            '/enterprise/process-instances/{processInstanceId}/comments', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get comments for a task
        * 
        * 
        * @param taskId taskId
        * @param latestFirst latestFirst
        */
    getTaskCommentsUsingGET(taskId: string, opts: any): Promise<ResultListDataRepresentationCommentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskCommentsUsingGET");
        }

        let pathParams = {
            'taskId': taskId
        };
        let queryParams = {
            'latestFirst': opts['latestFirst'],
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
            '/enterprise/tasks/{taskId}/comments', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
