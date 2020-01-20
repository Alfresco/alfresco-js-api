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

import { HistoricTaskInstanceQueryRepresentation } from '../model/historicTaskInstanceQueryRepresentation';
import { IdentityLinkRepresentation } from '../model/identityLinkRepresentation';
import { ResultListDataRepresentationTaskRepresentation } from '../model/resultListDataRepresentationTaskRepresentation';
import { TaskAuditInfoRepresentation } from '../model/taskAuditInfoRepresentation';
import { TaskFilterRequestRepresentation } from '../model/taskFilterRequestRepresentation';
import { TaskQueryRepresentation } from '../model/taskQueryRepresentation';
import { TaskRepresentation } from '../model/taskRepresentation';
import { TaskUpdateRepresentation } from '../model/taskUpdateRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Tasks service.
* @module TasksApi
*/
export class TasksApi extends BaseApi {
    /**
    * List the users and groups involved with a task
    *
    *
    *
    * @param taskId taskId
    * @param identityLinkRepresentation identityLinkRepresentation
    * @return Promise<IdentityLinkRepresentation>
    */
    createIdentityLink(taskId: string, identityLinkRepresentation: IdentityLinkRepresentation): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(identityLinkRepresentation, 'identityLinkRepresentation');

        let postBody = identityLinkRepresentation;

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
            '/api/enterprise/tasks/{taskId}/identitylinks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }
    /**
        * Create a standalone task
        *
        * A standalone task is one which is not associated with any process instance.
        *
        * @param taskRepresentation taskRepresentation
        * @return Promise<TaskRepresentation>
        */
    createNewTask(taskRepresentation: TaskRepresentation): Promise<TaskRepresentation> {
        throwIfNotDefined(taskRepresentation, 'taskRepresentation');

        let postBody = taskRepresentation;

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
            '/api/enterprise/tasks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TaskRepresentation);
    }
    /**
        * Remove a user or group involvement from a task
        *
        *
        *
        * @param taskId taskId
        * @param family family
        * @param identityId identityId
        * @param type type
        * @return Promise<{}>
        */
    deleteIdentityLink(taskId: string, family: string, identityId: string, type: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(family, 'family');
        throwIfNotDefined(identityId, 'identityId');
        throwIfNotDefined(type, 'type');

        let postBody = null;

        let pathParams = {
            'taskId': taskId, 'family': family, 'identityId': identityId, 'type': type
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
            '/api/enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a task
        *
        *
        *
        * @param taskId taskId
        * @return Promise<{}>
        */
    deleteTask(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

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
            '/api/enterprise/tasks/{taskId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Filter a list of tasks
        *
        *
        *
        * @param tasksFilter tasksFilter
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    filterTasks(tasksFilter: TaskFilterRequestRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {
        throwIfNotDefined(tasksFilter, 'tasksFilter');

        let postBody = tasksFilter;

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
            '/api/enterprise/tasks/filter', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationTaskRepresentation);
    }
    /**
        * Get a user or group involvement with a task
        *
        *
        *
        * @param taskId taskId
        * @param family family
        * @param identityId identityId
        * @param type type
        * @return Promise<IdentityLinkRepresentation>
        */
    getIdentityLinkType(taskId: string, family: string, identityId: string, type: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(family, 'family');
        throwIfNotDefined(identityId, 'identityId');
        throwIfNotDefined(type, 'type');

        let postBody = null;

        let pathParams = {
            'taskId': taskId, 'family': family, 'identityId': identityId, 'type': type
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
            '/api/enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }
    /**
        * List either the users or groups involved with a process instance
        *
        *
        *
        * @param taskId taskId
        * @param family family
        * @return Promise<IdentityLinkRepresentation>
        */
    getIdentityLinksForFamily(taskId: string, family: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(family, 'family');

        let postBody = null;

        let pathParams = {
            'taskId': taskId, 'family': family
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
            '/api/enterprise/tasks/{taskId}/identitylinks/{family}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }
    /**
        * getIdentityLinks
        *
        *
        *
        * @param taskId taskId
        * @return Promise<IdentityLinkRepresentation>
        */
    getIdentityLinks(taskId: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

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
            '/api/enterprise/tasks/{taskId}/identitylinks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }
    /**
        * Get the audit log for a task
        *
        *
        *
        * @param taskId taskId
        * @return Promise<TaskAuditInfoRepresentation>
        */
    getTaskAuditLog(taskId: string): Promise<TaskAuditInfoRepresentation> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

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
            '/api/enterprise/tasks/{taskId}/audit', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TaskAuditInfoRepresentation);
    }
    /**
        * Get a task
        *
        *
        *
        * @param taskId taskId
        * @return Promise<TaskRepresentation>
        */
    getTask(taskId: string): Promise<TaskRepresentation> {
        throwIfNotDefined(taskId, 'taskId');

        let postBody = null;

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
            '/api/enterprise/tasks/{taskId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TaskRepresentation);
    }
    /**
        * Query historic tasks
        *
        *
        *
        * @param queryRequest queryRequest
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    listHistoricTasks(queryRequest: HistoricTaskInstanceQueryRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {
        throwIfNotDefined(queryRequest, 'queryRequest');

        let postBody = queryRequest;

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
            '/api/enterprise/historic-tasks/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationTaskRepresentation);
    }
    /**
        * List tasks
        *
        *
        *
        * @param tasksQuery tasksQuery
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    listTasks(tasksQuery: TaskQueryRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {
        throwIfNotDefined(tasksQuery, 'tasksQuery');

        let postBody = tasksQuery;

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
            '/api/enterprise/tasks/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationTaskRepresentation);
    }
    /**
        * Update a task
        *
        * You can edit only name, description and dueDate (ISO 8601 string).
        *
        * @param taskId taskId
        * @param updated updated
        * @return Promise<TaskRepresentation>
        */
    updateTask(taskId: string, updated: TaskUpdateRepresentation): Promise<TaskRepresentation> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(updated, 'updated');

        let postBody = updated;

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
            '/api/enterprise/tasks/{taskId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TaskRepresentation);
    }

}
