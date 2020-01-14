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
import { ValidationErrorRepresentation } from '../model/validationErrorRepresentation';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
 * Formmodels service.
 * @module FormmodelsApi
 */
export class FormModelsApi extends BaseApi {
    /**
     * Get form content
     *
     *
     *
     * @param formId formId
     * @return Promise<FormDefinitionRepresentation>
     */
    getFormEditorJson(formId: number): Promise<FormDefinitionRepresentation> {
        throwIfNotDefined(formId, 'formId');

        let postBody = null;

        let pathParams = {
            'formId': formId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/forms/{formId}/editorJson', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormDefinitionRepresentation);
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
    getFormHistory(formId: number, formHistoryId: number): Promise<FormRepresentation> {
        throwIfNotDefined(formId, 'formId');
        throwIfNotDefined(formHistoryId, 'formHistoryId');

        let postBody = null;

        let pathParams = {
            'formId': formId, 'formHistoryId': formHistoryId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}/history/{formHistoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormRepresentation);
    }

    /**
     * Get a form model
     *
     *
     *
     * @param formId formId
     * @return Promise<FormRepresentation>
     */
    getForm(formId: number): Promise<FormRepresentation> {
        throwIfNotDefined(formId, 'formId');

        let postBody = null;

        let pathParams = {
            'formId': formId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormRepresentation);
    }

    /**
     * Get forms
     *
     *
     *
     * @param formId formId
     * @return Promise<FormRepresentation>
     */
    getForms(input: string[] | { [key: string]: any }): Promise<FormRepresentation | ResultListDataRepresentationFormRepresentation | ResultListDataRepresentationRuntimeFormRepresentation> {
        let postBody = null;
        let pathParams = {};
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        if (typeof input === 'string') {
            let queryParams = {
                'formId': buildCollectionParam(input, 'multi')
            };

            return this.apiClient.callApi(
                '/api/enterprise/editor/form-models/values', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, FormRepresentation);
        } else if (typeof input === 'object') {
            input = input || {};
            let queryParams = {
                'nameLike': input['nameLike'],
                'appId': input['appId'],
                'tenantId': input['tenantId'],
                'start': input['start'],
                'sort': input['sort'],
                'order': input['order'],
                'size': input['size']
            };

            return this.apiClient.callApi(
                '/api/enterprise/forms', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, ResultListDataRepresentationRuntimeFormRepresentation);
        } else {
            let queryParams = {};

            return this.apiClient.callApi(
                '/api/enterprise/editor/form-models', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, ResultListDataRepresentationFormRepresentation);
        }
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
    saveForm(formId: number, saveRepresentation: FormSaveRepresentation): Promise<FormRepresentation> {
        throwIfNotDefined(formId, 'formId');
        throwIfNotDefined(saveRepresentation, 'saveRepresentation');

        let postBody = saveRepresentation;

        let pathParams = {
            'formId': formId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormRepresentation);
    }

    /**
     * Validate form model content
     *
     * The model content to be validated must be specified in the POST body
     *
     * @param formId formId
     * @param saveRepresentation saveRepresentation
     * @return Promise<ValidationErrorRepresentation>
     */
    validateModel(formId: number, saveRepresentation: FormSaveRepresentation): Promise<ValidationErrorRepresentation> {
        throwIfNotDefined(formId, 'formId');
        throwIfNotDefined(saveRepresentation, 'saveRepresentation');

        let postBody = saveRepresentation;

        let pathParams = {
            'formId': formId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}/validate', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ValidationErrorRepresentation);
    }

}
