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
export class ActivitiCommentsApi extends BaseApi {
    /**
    * Add a comment to a process instance
    *
    *
    *
    * @param commentRequest commentRequest
    * @param processInstanceId processInstanceId
    * @return Promise<CommentRepresentation>
    */
    addProcessInstanceComment(commentRequest: CommentRepresentation, processInstanceId: string): Promise<CommentRepresentation> {

        let postBody = commentRequest;

        if (commentRequest === undefined || commentRequest === null) {
            throw new Error("Required param 'commentRequest' in addProcessInstanceComment");
        }

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in addProcessInstanceComment");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
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
            '/api/enterprise/process-instances/{processInstanceId}/comments', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Add a comment to a task
        *
        *
        *
        * @param commentRequest commentRequest
        * @param taskId taskId
        * @return Promise<CommentRepresentation>
        */
    addTaskComment(commentRequest: CommentRepresentation, taskId: string): Promise<CommentRepresentation> {

        let postBody = commentRequest;

        if (commentRequest === undefined || commentRequest === null) {
            throw new Error("Required param 'commentRequest' in addTaskComment");
        }

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in addTaskComment");
        }

        let pathParams = {
            'taskId': taskId
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
            '/api/enterprise/tasks/{taskId}/comments', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get comments for a process
        *
        *
        *
        * @param processInstanceId processInstanceId
        * @param opts Optional parameters
        * @param opts.latestFirst latestFirst
        * @return Promise<ResultListDataRepresentationCommentRepresentation>
        */
    getProcessInstanceComments(processInstanceId: string, opts?: any): Promise<ResultListDataRepresentationCommentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceComments");
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {
            'latestFirst': opts['latestFirst']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/comments', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get comments for a task
        *
        *
        *
        * @param taskId taskId
        * @param opts Optional parameters
        * @param opts.latestFirst latestFirst
        * @return Promise<ResultListDataRepresentationCommentRepresentation>
        */
    getTaskComments(taskId: string, opts?: any): Promise<ResultListDataRepresentationCommentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskComments");
        }

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {
            'latestFirst': opts['latestFirst']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/comments', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
