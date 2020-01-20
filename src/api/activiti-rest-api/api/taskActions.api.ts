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

import { AssigneeIdentifierRepresentation } from '../model/assigneeIdentifierRepresentation';
import { FormIdentifierRepresentation } from '../model/formIdentifierRepresentation';
import { TaskRepresentation } from '../model/taskRepresentation';
import { UserIdentifierRepresentation } from '../model/userIdentifierRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
 * Taskactions service.
 * @module TaskactionsApi
 */
export class TaskActionsApi extends BaseApi {
    /**
     * Assign a task to a user
     *
     *
     *
     * @param taskId taskId
     * @param userIdentifier userIdentifier
     * @return Promise<TaskRepresentation>
     */
    assignTask(taskId: string, userIdentifier: AssigneeIdentifierRepresentation): Promise<TaskRepresentation> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(userIdentifier, 'userIdentifier');

        let postBody = userIdentifier;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/assign', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TaskRepresentation);
    }

    /**
     * Attach a form to a task
     *
     *
     *
     * @param taskId taskId
     * @param formIdentifier formIdentifier
     * @return Promise<{}>
     */
    attachForm(taskId: string, formIdentifier: FormIdentifierRepresentation): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(formIdentifier, 'formIdentifier');

        let postBody = formIdentifier;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/attach-form', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Claim a task
     *
     * To claim a task (in case the task is assigned to a group)
     *
     * @param taskId taskId
     * @return Promise<{}>
     */
    claimTask(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/claim', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Complete a task
     *
     * Use this endpoint to complete a standalone task or task without a form
     *
     * @param taskId taskId
     * @return Promise<{}>
     */
    completeTask(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/complete', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Delegate a task
     *
     *
     *
     * @param taskId taskId
     * @param userIdentifier userIdentifier
     * @return Promise<{}>
     */
    delegateTask(taskId: string, userIdentifier: UserIdentifierRepresentation): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(userIdentifier, 'userIdentifier');

        let postBody = userIdentifier;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/delegate', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Involve a group with a task
     *
     *
     *
     * @param taskId taskId
     * @param groupId groupId
     * @return Promise<{}>
     */
    involveGroup(taskId: string, groupId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(groupId, 'groupId');

        let postBody = null;

        let pathParams = {
            'taskId': taskId, 'groupId': groupId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/groups/{groupId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Involve a user with a task
     *
     *
     *
     * @param taskId taskId
     * @param userIdentifier userIdentifier
     * @return Promise<{}>
     */
    involveUser(taskId: string, userIdentifier: UserIdentifierRepresentation): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(userIdentifier, 'userIdentifier');

        let postBody = userIdentifier;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/involve', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Remove a form from a task
     *
     *
     *
     * @param taskId taskId
     * @return Promise<{}>
     */
    removeForm(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/remove-form', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Remove an involved group from a task
     *
     *
     *
     * @param taskId taskId
     * @param groupId groupId
     * @return Promise<{}>
     */
    removeInvolvedUser(taskId: string, identifier: string | UserIdentifierRepresentation): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(identifier, 'identifier');

        let pathParams = {
            'taskId': taskId, 'groupId': identifier
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        if (identifier instanceof String) {
            let postBody = null;

            return this.apiClient.callApi(
                '/api/enterprise/tasks/{taskId}/groups/{groupId}', 'DELETE',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts);
        } else {

            let postBody = identifier;

            return this.apiClient.callApi(
                '/api/enterprise/tasks/{taskId}/action/remove-involved', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts);
        }
    }

    /**
     * Resolve a task
     *
     *
     *
     * @param taskId taskId
     * @return Promise<{}>
     */
    resolveTask(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/resolve', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Unclaim a task
     *
     * To unclaim a task (in case the task was assigned to a group)
     *
     * @param taskId taskId
     * @return Promise<{}>
     */
    unclaimTask(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

        let pathParams = {
            'taskId': taskId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/tasks/{taskId}/action/unclaim', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
