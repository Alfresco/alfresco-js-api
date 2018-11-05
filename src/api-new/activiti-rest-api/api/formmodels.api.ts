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

import { FormDefinitionRepresentation } from '../model/formDefinitionRepresentation';
import { FormRepresentation } from '../model/formRepresentation';
import { FormSaveRepresentation } from '../model/formSaveRepresentation';
import { ResultListDataRepresentationFormRepresentation } from '../model/resultListDataRepresentationFormRepresentation';
import { ResultListDataRepresentationRuntimeFormRepresentation } from '../model/resultListDataRepresentationRuntimeFormRepresentation';
import { RuntimeFormRepresentation } from '../model/runtimeFormRepresentation';
import { ValidationErrorRepresentation } from '../model/validationErrorRepresentation';
import { BaseApi } from './base.api';

/**
* Formmodels service.
* @module FormmodelsApi
*/
export class FormmodelsApi extends BaseApi {
    /**
    * Get form content
    * 
    * 
    * 
    * @param formId formId
    * @return Promise<FormDefinitionRepresentation>
    */
    getFormEditorJsonUsingGET(formId: number): Promise<FormDefinitionRepresentation> {

        let postBody = null;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in getFormEditorJsonUsingGET");
        }

        let pathParams = {
            'formId': formId
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
            '/enterprise/forms/{formId}/editorJson', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get form history
        * 
        * 
        * 
        * @param formId formId
        * @param formHistoryId formHistoryId
        * @return Promise<FormRepresentation>
        */
    getFormHistoryUsingGET(formId: number, formHistoryId: number): Promise<FormRepresentation> {

        let postBody = null;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in getFormHistoryUsingGET");
        }

        if (formHistoryId === undefined || formHistoryId === null) {
            throw new Error("Required param 'formHistoryId' in getFormHistoryUsingGET");
        }

        let pathParams = {
            'formId': formId, 'formHistoryId': formHistoryId
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
            '/enterprise/editor/form-models/{formId}/history/{formHistoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a form model
        * 
        * 
        * 
        * @param formId formId
        * @return Promise<FormRepresentation>
        */
    getFormUsingGET(formId: number): Promise<FormRepresentation> {

        let postBody = null;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in getFormUsingGET");
        }

        let pathParams = {
            'formId': formId
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
            '/enterprise/editor/form-models/{formId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a form
        * 
        * 
        * 
        * @param formId formId
        * @return Promise<RuntimeFormRepresentation>
        */
    getFormUsingGET1(formId: number): Promise<RuntimeFormRepresentation> {

        let postBody = null;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in getFormUsingGET1");
        }

        let pathParams = {
            'formId': formId
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
            '/enterprise/forms/{formId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get forms
        * 
        * 
        * 
        * @param formId formId
        * @return Promise<Array<FormRepresentation>>
        */
    getFormsUsingGET(formId: Array<string>): Promise<Array<FormRepresentation>> {

        let postBody = null;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in getFormsUsingGET");
        }

        let pathParams = {

        };

        let queryParams = {
            'formId': this.apiClient.buildCollectionParam(formId, 'multi')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/editor/form-models/values', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List form models
        * 
        * 
        * 
        * @return Promise<ResultListDataRepresentationFormRepresentation>
        */
    getFormsUsingGET1(): Promise<ResultListDataRepresentationFormRepresentation> {

        let postBody = null;

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
            '/enterprise/editor/form-models', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query forms
        * 
        * 
        * 
        * @param opts Optional parameters
        * @param opts.nameLike nameLike
        * @param opts.appId appId
        * @param opts.tenantId tenantId
        * @param opts.start start
        * @param opts.sort sort
        * @param opts.order order
        * @param opts.size size
        * @return Promise<ResultListDataRepresentationRuntimeFormRepresentation>
        */
    getFormsUsingGET2(opts: any): Promise<ResultListDataRepresentationRuntimeFormRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'nameLike': opts['nameLike'],
            'appId': opts['appId'],
            'tenantId': opts['tenantId'],
            'start': opts['start'],
            'sort': opts['sort'],
            'order': opts['order'],
            'size': opts['size']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/forms', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update form model content
        * 
        * 
        * 
        * @param formId ID of the form to update
        * @param saveRepresentation saveRepresentation
        * @return Promise<FormRepresentation>
        */
    saveFormUsingPUT(formId: number, saveRepresentation: FormSaveRepresentation): Promise<FormRepresentation> {

        let postBody = saveRepresentation;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in saveFormUsingPUT");
        }

        if (saveRepresentation === undefined || saveRepresentation === null) {
            throw new Error("Required param 'saveRepresentation' in saveFormUsingPUT");
        }

        let pathParams = {
            'formId': formId
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
            '/enterprise/editor/form-models/{formId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Validate form model content
        * 
        * The model content to be validated must be specified in the POST body
        * 
        * @param formId formId
        * @param saveRepresentation saveRepresentation
        * @return Promise<Array<ValidationErrorRepresentation>>
        */
    validateModelUsingPUT(formId: number, saveRepresentation: FormSaveRepresentation): Promise<Array<ValidationErrorRepresentation>> {

        let postBody = saveRepresentation;

        if (formId === undefined || formId === null) {
            throw new Error("Required param 'formId' in validateModelUsingPUT");
        }

        if (saveRepresentation === undefined || saveRepresentation === null) {
            throw new Error("Required param 'saveRepresentation' in validateModelUsingPUT");
        }

        let pathParams = {
            'formId': formId
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
            '/enterprise/editor/form-models/{formId}/validate', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
