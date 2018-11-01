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

/**
* Taskactions service.
* @module TaskactionsApi
*/
export class TaskactionsApi extends BaseApi {
    /**
    * Assign a task to a user
    * 
    * 
    * @param taskId taskId
    * @param userIdentifier userIdentifier
    */
    assignTaskUsingPUT(taskId: string, userIdentifier: AssigneeIdentifierRepresentation): Promise<TaskRepresentation> {

        let postBody = userIdentifier;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in assignTaskUsingPUT");
        }

        if (userIdentifier === undefined || userIdentifier === null) {
            throw new Error("Required param 'userIdentifier' in assignTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/assign', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Attach a form to a task
        * 
        * 
        * @param taskId taskId
        * @param formIdentifier formIdentifier
        */
    attachFormUsingPUT(taskId: string, formIdentifier: FormIdentifierRepresentation): Promise<{}> {

        let postBody = formIdentifier;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in attachFormUsingPUT");
        }

        if (formIdentifier === undefined || formIdentifier === null) {
            throw new Error("Required param 'formIdentifier' in attachFormUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/attach-form', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Claim a task
        * 
        * To claim a task (in case the task is assigned to a group)
        * @param taskId taskId
        */
    claimTaskUsingPUT(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in claimTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/claim', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Complete a task
        * 
        * Use this endpoint to complete a standalone task or task without a form
        * @param taskId taskId
        */
    completeTaskUsingPUT(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in completeTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/complete', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delegate a task
        * 
        * 
        * @param taskId taskId
        * @param userIdentifier userIdentifier
        */
    delegateTaskUsingPUT(taskId: string, userIdentifier: UserIdentifierRepresentation): Promise<{}> {

        let postBody = userIdentifier;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in delegateTaskUsingPUT");
        }

        if (userIdentifier === undefined || userIdentifier === null) {
            throw new Error("Required param 'userIdentifier' in delegateTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/delegate', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Involve a group with a task
        * 
        * 
        * @param taskId taskId
        * @param groupId groupId
        */
    involveGroupUsingPOST(taskId: string, groupId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in involveGroupUsingPOST");
        }

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in involveGroupUsingPOST");
        }

        let pathParams = {
            'taskId': taskId, 'groupId': groupId
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
            '/enterprise/tasks/{taskId}/groups/{groupId}', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Involve a user with a task
        * 
        * 
        * @param taskId taskId
        * @param userIdentifier userIdentifier
        */
    involveUserUsingPUT(taskId: string, userIdentifier: UserIdentifierRepresentation): Promise<{}> {

        let postBody = userIdentifier;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in involveUserUsingPUT");
        }

        if (userIdentifier === undefined || userIdentifier === null) {
            throw new Error("Required param 'userIdentifier' in involveUserUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/involve', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Remove a form from a task
        * 
        * 
        * @param taskId taskId
        */
    removeFormUsingDELETE(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in removeFormUsingDELETE");
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
            '/enterprise/tasks/{taskId}/action/remove-form', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Remove an involved group from a task
        * 
        * 
        * @param taskId taskId
        * @param groupId groupId
        */
    removeInvolvedUserUsingDELETE(taskId: string, groupId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in removeInvolvedUserUsingDELETE");
        }

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in removeInvolvedUserUsingDELETE");
        }

        let pathParams = {
            'taskId': taskId, 'groupId': groupId
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
            '/enterprise/tasks/{taskId}/groups/{groupId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Remove an involved user from a task
        * 
        * 
        * @param taskId taskId
        * @param userIdentifier userIdentifier
        */
    removeInvolvedUserUsingPUT(taskId: string, userIdentifier: UserIdentifierRepresentation): Promise<{}> {

        let postBody = userIdentifier;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in removeInvolvedUserUsingPUT");
        }

        if (userIdentifier === undefined || userIdentifier === null) {
            throw new Error("Required param 'userIdentifier' in removeInvolvedUserUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/remove-involved', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Resolve a task
        * 
        * 
        * @param taskId taskId
        */
    resolveTaskUsingPUT(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in resolveTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/resolve', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Unclaim a task
        * 
        * To unclaim a task (in case the task was assigned to a group)
        * @param taskId taskId
        */
    unclaimTaskUsingPUT(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in unclaimTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}/action/unclaim', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
