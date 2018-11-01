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
    * @param  taskId taskId
    * @param  identityLinkRepresentation identityLinkRepresentation
    * @return Promise<IdentityLinkRepresentation>
    */
    createIdentityLinkUsingPOST2(taskId: string, identityLinkRepresentation: IdentityLinkRepresentation): Promise<IdentityLinkRepresentation> {

        let postBody = identityLinkRepresentation;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in createIdentityLinkUsingPOST2");
        }

        if (identityLinkRepresentation === undefined || identityLinkRepresentation === null) {
            throw new Error("Required param 'identityLinkRepresentation' in createIdentityLinkUsingPOST2");
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
            '/enterprise/tasks/{taskId}/identitylinks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a standalone task
        * 
        * A standalone task is one which is not associated with any process instance.
        * 
        * @param  taskRepresentation taskRepresentation
        * @return Promise<TaskRepresentation>
        */
    createNewTaskUsingPOST(taskRepresentation: TaskRepresentation): Promise<TaskRepresentation> {

        let postBody = taskRepresentation;

        if (taskRepresentation === undefined || taskRepresentation === null) {
            throw new Error("Required param 'taskRepresentation' in createNewTaskUsingPOST");
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
            '/enterprise/tasks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Remove a user or group involvement from a task
        * 
        * 
        * 
        * @param  taskId taskId
        * @param  family family
        * @param  identityId identityId
        * @param  type type
        * @return Promise<{}>
        */
    deleteIdentityLinkUsingDELETE2(taskId: string, family: string, identityId: string, type: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in deleteIdentityLinkUsingDELETE2");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in deleteIdentityLinkUsingDELETE2");
        }

        if (identityId === undefined || identityId === null) {
            throw new Error("Required param 'identityId' in deleteIdentityLinkUsingDELETE2");
        }

        if (type === undefined || type === null) {
            throw new Error("Required param 'type' in deleteIdentityLinkUsingDELETE2");
        }

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
            '/enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a task
        * 
        * 
        * 
        * @param  taskId taskId
        * @return Promise<{}>
        */
    deleteTaskUsingDELETE(taskId: string): Promise<{}> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in deleteTaskUsingDELETE");
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
            '/enterprise/tasks/{taskId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Filter a list of tasks
        * 
        * 
        * 
        * @param  tasksFilter tasksFilter
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    filterTasksUsingPOST(tasksFilter: TaskFilterRequestRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {

        let postBody = tasksFilter;

        if (tasksFilter === undefined || tasksFilter === null) {
            throw new Error("Required param 'tasksFilter' in filterTasksUsingPOST");
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
            '/enterprise/tasks/filter', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a user or group involvement with a task
        * 
        * 
        * 
        * @param  taskId taskId
        * @param  family family
        * @param  identityId identityId
        * @param  type type
        * @return Promise<IdentityLinkRepresentation>
        */
    getIdentityLinkTypeUsingGET2(taskId: string, family: string, identityId: string, type: string): Promise<IdentityLinkRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getIdentityLinkTypeUsingGET2");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in getIdentityLinkTypeUsingGET2");
        }

        if (identityId === undefined || identityId === null) {
            throw new Error("Required param 'identityId' in getIdentityLinkTypeUsingGET2");
        }

        if (type === undefined || type === null) {
            throw new Error("Required param 'type' in getIdentityLinkTypeUsingGET2");
        }

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
            '/enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List either the users or groups involved with a process instance
        * 
        * 
        * 
        * @param  taskId taskId
        * @param  family family
        * @return Promise<any>
        */
    getIdentityLinksForFamilyUsingGET2(taskId: string, family: string): Promise<any> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getIdentityLinksForFamilyUsingGET2");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in getIdentityLinksForFamilyUsingGET2");
        }

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
            '/enterprise/tasks/{taskId}/identitylinks/{family}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * getIdentityLinks
        * 
        * 
        * 
        * @param  taskId taskId
        * @return Promise<any>
        */
    getIdentityLinksUsingGET2(taskId: string): Promise<any> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getIdentityLinksUsingGET2");
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
            '/enterprise/tasks/{taskId}/identitylinks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get the audit log for a task
        * 
        * 
        * 
        * @param  taskId taskId
        * @return Promise<TaskAuditInfoRepresentation>
        */
    getTaskAuditLogUsingGET1(taskId: string): Promise<TaskAuditInfoRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskAuditLogUsingGET1");
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
            '/enterprise/tasks/{taskId}/audit', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a task
        * 
        * 
        * 
        * @param  taskId taskId
        * @return Promise<TaskRepresentation>
        */
    getTaskUsingGET(taskId: string): Promise<TaskRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskUsingGET");
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
            '/enterprise/tasks/{taskId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query historic tasks
        * 
        * 
        * 
        * @param  queryRequest queryRequest
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    listHistoricTasksUsingPOST(queryRequest: HistoricTaskInstanceQueryRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {

        let postBody = queryRequest;

        if (queryRequest === undefined || queryRequest === null) {
            throw new Error("Required param 'queryRequest' in listHistoricTasksUsingPOST");
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
            '/enterprise/historic-tasks/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List tasks
        * 
        * 
        * 
        * @param  tasksQuery tasksQuery
        * @return Promise<ResultListDataRepresentationTaskRepresentation>
        */
    listTasksUsingPOST(tasksQuery: TaskQueryRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {

        let postBody = tasksQuery;

        if (tasksQuery === undefined || tasksQuery === null) {
            throw new Error("Required param 'tasksQuery' in listTasksUsingPOST");
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
            '/enterprise/tasks/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a task
        * 
        * You can edit only name, description and dueDate (ISO 8601 string).
        * 
        * @param  taskId taskId
        * @param  updated updated
        * @return Promise<TaskRepresentation>
        */
    updateTaskUsingPUT(taskId: string, updated: TaskUpdateRepresentation): Promise<TaskRepresentation> {

        let postBody = updated;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in updateTaskUsingPUT");
        }

        if (updated === undefined || updated === null) {
            throw new Error("Required param 'updated' in updateTaskUsingPUT");
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
            '/enterprise/tasks/{taskId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
