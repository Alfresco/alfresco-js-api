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
import { throwIfNotDefined } from '../../../assert';

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
    getFormSubmittedForms(formId: number, opts?: any): Promise<ResultListDataRepresentationSubmittedFormRepresentation> {
        throwIfNotDefined(formId, 'formId');

        opts = opts || {};
        let postBody = null;

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
            contentTypes, accepts, ResultListDataRepresentationSubmittedFormRepresentation);
    }
    /**
        * List submissions for a process instance
        *
        *
        *
        * @param processId processId
        * @return Promise<ResultListDataRepresentationSubmittedFormRepresentation>
        */
    getProcessSubmittedForms(processId: string): Promise<ResultListDataRepresentationSubmittedFormRepresentation> {
        throwIfNotDefined(processId, 'processId');

        let postBody = null;

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
            contentTypes, accepts, ResultListDataRepresentationSubmittedFormRepresentation);
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
        throwIfNotDefined(submittedFormId, 'submittedFormId');

        let postBody = null;

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
            contentTypes, accepts, SubmittedFormRepresentation);
    }
    /**
        * Get the submitted form for a task
        *
        *
        *
        * @param taskId taskId
        * @return Promise<SubmittedFormRepresentation>
        */
    getTaskSubmittedForms(taskId: string): Promise<SubmittedFormRepresentation> {
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
            '/api/enterprise/task-submitted-form/{taskId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SubmittedFormRepresentation);
    }

}
