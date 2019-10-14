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
import { TaskActionsApi } from '../../../../api/activiti-rest-api/api/taskActions.api';
import { TaskRepresentation } from '../../../../api/activiti-rest-api/model/taskRepresentation';
import { AssigneeIdentifierRepresentation } from '../../../../api/activiti-rest-api/model/assigneeIdentifierRepresentation';
import { FormIdentifierRepresentation } from '../../../../api/activiti-rest-api/model/formIdentifierRepresentation';
import { ActivitiCommentsApi } from '../../../../api/activiti-rest-api/api/comments.api';
import { CommentRepresentation } from '../../../../api/activiti-rest-api/model/commentRepresentation';
import { ChecklistsApi } from '../../../../api/activiti-rest-api/api/checklists.api';
import { TaskFormsApi } from '../../../../api/activiti-rest-api/api/taskForms.api';
import { CompleteFormRepresentation } from '../../../../api/activiti-rest-api/model/completeFormRepresentation';
import { TasksApi } from '../../../../api/activiti-rest-api/api/tasks.api';
import { ContentApi } from '../../../../api/activiti-rest-api/api/content.api';
import { RelatedContentRepresentation } from '../../../../api/activiti-rest-api/model/relatedContentRepresentation';
import { TaskFilterRequestRepresentation } from '../../../../api/activiti-rest-api/model/taskFilterRequestRepresentation';
import { ResultListDataRepresentationTaskRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationTaskRepresentation';
import { TaskAuditInfoRepresentation } from '../../../../api/activiti-rest-api/model/taskAuditInfoRepresentation';
import { ResultListDataRepresentationRelatedContentRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationRelatedContentRepresentation';
import { ResultListDataRepresentationCommentRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationCommentRepresentation';
import { FormDefinitionRepresentation } from '../../../../api/activiti-rest-api/model/formDefinitionRepresentation';
import { UserIdentifierRepresentation } from '../../../../api/activiti-rest-api/model/userIdentifierRepresentation';
import { TaskQueryRepresentation } from '../../../../api/activiti-rest-api/model/taskQueryRepresentation';
import { ChecklistOrderRepresentation } from '../../../../api/activiti-rest-api/model/checklistOrderRepresentation';
import { SaveFormRepresentation } from '../../../../api/activiti-rest-api/model/saveFormRepresentation';
import { TaskUpdateRepresentation } from '../../../../api/activiti-rest-api/model/taskUpdateRepresentation';
import { FormValueRepresentation } from '../../../../api/activiti-rest-api/model/formValueRepresentation';

/**
 * @deprecated 3.0.0
 */
export class TaskApi {

    private taskactionsApi: TaskActionsApi;
    private activitiCommentsApi: ActivitiCommentsApi;
    private checklistsApi: ChecklistsApi;
    private taskFormsApi: TaskFormsApi;
    private tasksApi: TasksApi;
    private contentApi: ContentApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.taskactionsApi = new TaskActionsApi(alfrescoApi);
        this.activitiCommentsApi = new ActivitiCommentsApi(alfrescoApi);
        this.checklistsApi = new ChecklistsApi(alfrescoApi);
        this.taskFormsApi = new TaskFormsApi(alfrescoApi);
        this.tasksApi = new TasksApi(alfrescoApi);
        this.contentApi = new ContentApi(alfrescoApi);
    }

    addSubtask(taskId: string, taskRepresentation: TaskRepresentation): Promise<TaskRepresentation> {
        return this.checklistsApi.addSubtask(taskId, taskRepresentation);
    }

    addTaskComment(commentRequest: CommentRepresentation, taskId: string): Promise<CommentRepresentation> {
        return this.activitiCommentsApi.addTaskComment(commentRequest, taskId);
    }

    assignTask(taskId: string, userIdentifier: AssigneeIdentifierRepresentation): Promise<TaskRepresentation> {
        return this.taskactionsApi.assignTask(taskId, userIdentifier);
    }

    attachForm(taskId: string, formIdentifier: FormIdentifierRepresentation): Promise<any> {
        return this.taskactionsApi.attachForm(taskId, formIdentifier);
    }

    claimTask(taskId: string): Promise<any> {
        return this.taskactionsApi.claimTask(taskId);
    }

    completeTaskForm(taskId: string, completeTaskFormRepresentation: CompleteFormRepresentation): Promise<any> {
        return this.taskFormsApi.completeTaskForm(taskId, completeTaskFormRepresentation);
    }

    completeTask(taskId: string): Promise<any> {
       return this.taskactionsApi.completeTask(taskId);
    }

    createNewTask(taskRepresentation: TaskRepresentation): Promise<TaskRepresentation> {
        return this.tasksApi.createNewTask(taskRepresentation);
    }

    createRelatedContentOnTask(taskId: string, relatedContent: RelatedContentRepresentation, opts?: any): Promise<RelatedContentRepresentation> {
        return this.contentApi.createRelatedContentOnTask(taskId, relatedContent, opts);
    }

    deleteTask(taskId: string): Promise<any> {
        return this.tasksApi.deleteTask(taskId);
    }

    filterTasks(tasksFilter: TaskFilterRequestRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {
        return this.tasksApi.filterTasks(tasksFilter);
    }

    getChecklist(taskId: string): Promise<ResultListDataRepresentationTaskRepresentation> {
        return this.checklistsApi.getChecklist(taskId);
    }

    getTaskAuditLog(taskId: string): Promise<TaskAuditInfoRepresentation> {
        return this.tasksApi.getTaskAuditLog(taskId);
    }

    getTaskAuditJson(taskId: string) {
        return this.tasksApi.getTaskAuditLog(taskId);
    }

    getTaskAuditPdf(taskId: string) {
        return this.tasksApi.getTaskAuditLog(taskId);
    }

    getRelatedContentForTask(taskId: string, opts?: any): Promise<ResultListDataRepresentationRelatedContentRepresentation> {
        return this.contentApi.getRelatedContentForTask(taskId, opts);
    }

    getRestFieldValuesColumn(taskId: string, field: string, column: string): Promise<any> {
        return this.taskFormsApi.getRestFieldColumnValues(taskId, field, column);
    }

    getRestFieldValues(taskId: string, field: string): Promise<FormValueRepresentation []> {
        return this.taskFormsApi.getRestFieldValues(taskId, field);
    }

    getTaskComments(taskId: string, opts?: any): Promise<ResultListDataRepresentationCommentRepresentation> {
        return this.activitiCommentsApi.getTaskComments(taskId, opts);
    }

    getTaskForm(taskId: string): Promise<FormDefinitionRepresentation> {
        return this.taskFormsApi.getTaskForm(taskId);
    }

    getTask(taskId: string): Promise<TaskRepresentation> {
        return this.tasksApi.getTask(taskId);
    }

    involveUser(taskId: string, userIdentifier: UserIdentifierRepresentation): Promise<any> {
        return this.taskactionsApi.involveUser(taskId, userIdentifier);
    }

    listTasks(tasksQuery: TaskQueryRepresentation): Promise<ResultListDataRepresentationTaskRepresentation> {
        return this.tasksApi.listTasks(tasksQuery);
    }

    orderChecklist(taskId: string, orderRepresentation: ChecklistOrderRepresentation): Promise<any> {
        return this.checklistsApi.orderChecklist(taskId, orderRepresentation);
    }

    removeForm(taskId: string): Promise<any> {
        return this.taskactionsApi.removeForm(taskId);
    }

    removeInvolvedUser(taskId: string, groupId: string): Promise<any> {
        return this.taskactionsApi.removeInvolvedUser(taskId, groupId);
    }

    saveTaskForm(taskId: string, saveTaskFormRepresentation: SaveFormRepresentation): Promise<any> {
        return this.taskFormsApi.saveTaskForm(taskId, saveTaskFormRepresentation);
    }

    unclaimTask(taskId: string): Promise<any> {
        return this.taskactionsApi.unclaimTask(taskId);
    }

    updateTask(taskId: string, updated: TaskUpdateRepresentation): Promise<TaskRepresentation> {
        return this.tasksApi.updateTask(taskId, updated);
    }
}
