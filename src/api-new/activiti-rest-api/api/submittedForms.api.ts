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

import { ResultListDataRepresentationSubmittedFormRepresentation } from '../model/resultListDataRepresentationSubmittedFormRepresentation';
import { SubmittedFormRepresentation } from '../model/submittedFormRepresentation';
import { BaseApi } from './base.api';

/**
* Submittedforms service.
* @module SubmittedformsApi
*/
export class SubmittedFormsApi extends BaseApi {
    /**
    * List submissions for a form
    *
    *
    *
    * @param formId formId
    * @param opts Optional parameters
    * @param opts.submittedBy submittedBy
    * @param opts.start start
    * @param opts.size size
    * @return Promise<ResultListDataRepresentationSubmittedFormRepresentation>
    */
    getFormSubmittedFroms(formId: number, opts?: any): Promise<ResultListDataRepresentationSubmittedFormRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in getFormSubmittedFroms");
        }

        let pathParams = {
            'formId': formId
        };

        let queryParams = {
            'submittedBy': opts['submittedBy'],
            'start': opts['start'],
            'size': opts['size']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/form-submitted-forms/{formId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationSubmittedFormRepresentation)
    }
    /**
        * List submissions for a process instance
        *
        *
        *
        * @param processId processId
        * @return Promise<ResultListDataRepresentationSubmittedFormRepresentation>
        */
    getProcessSubmittedFroms(processId: string): Promise<ResultListDataRepresentationSubmittedFormRepresentation> {

        let postBody = null;

        if (processId === undefined || processId === null) {
            throw new Error("Required param 'processId' in getProcessSubmittedFroms");
        }

        let pathParams = {
            'processId': processId
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
            '/api/enterprise/process-submitted-forms/{processId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationSubmittedFormRepresentation)
    }
    /**
        * Get a form submission
        *
        *
        *
        * @param submittedFormId submittedFormId
        * @return Promise<SubmittedFormRepresentation>
        */
    getSubmittedFrom(submittedFormId: number): Promise<SubmittedFormRepresentation> {

        let postBody = null;

        if (submittedFormId === undefined || submittedFormId === null) {
            throw new Error("Required param 'submittedFormId' in getSubmittedFrom");
        }

        let pathParams = {
            'submittedFormId': submittedFormId
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
            '/api/enterprise/submitted-forms/{submittedFormId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SubmittedFormRepresentation)
    }
    /**
        * Get the submitted form for a task
        *
        *
        *
        * @param taskId taskId
        * @return Promise<SubmittedFormRepresentation>
        */
    getTaskSubmittedFroms(taskId: string): Promise<SubmittedFormRepresentation> {

        let postBody = null;

        if (taskId === undefined || taskId === null) {
            throw new Error("Required param 'taskId' in getTaskSubmittedFroms");
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
            '/api/enterprise/task-submitted-form/{taskId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SubmittedFormRepresentation)
    }

}
