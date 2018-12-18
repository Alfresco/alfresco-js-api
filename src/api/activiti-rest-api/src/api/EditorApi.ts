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
import { BpmClient } from '../../../../bpmClient';

export class EditorApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the getFormHistory operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFormHistory
     * @param {Integer} formId formId
     * @param {Integer} formHistoryId formHistoryId
     */
    getFormHistory(formId, formHistoryId) {
        let postBody = null;

        // verify the required parameter 'formId' is set
        if (formId === undefined || formId === null) {
            throw "Missing param 'formId' in getFormHistory";
        }

        // verify the required parameter 'formHistoryId' is set
        if (formHistoryId === undefined || formHistoryId === null) {
            throw "Missing param 'formHistoryId' in getFormHistory";
        }


        let pathParams = {
            'formId': formId,
            'formHistoryId': formHistoryId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}/history/{formHistoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForm
     * @param {Integer} formId formId
     */
    getForm(formId) {
        let postBody = null;

        // verify the required parameter 'formId' is set
        if (formId === undefined || formId === null) {
            throw "Missing param 'formId' in getForm";
        }


        let pathParams = {
            'formId': formId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getForms operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForms
     * data is of type: {Array.<module:model/FormRepresentation>}
     */
    getForms() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/values', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the saveForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveForm
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     */
    saveForm(formId, saveRepresentation) {
        let postBody = saveRepresentation;

        // verify the required parameter 'formId' is set
        if (formId === undefined || formId === null) {
            throw "Missing param 'formId' in saveForm";
        }

        // verify the required parameter 'saveRepresentation' is set
        if (saveRepresentation === undefined || saveRepresentation === null) {
            throw "Missing param 'saveRepresentation' in saveForm";
        }


        let pathParams = {
            'formId': formId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the validateModel operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidationErrorRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * validateModel
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     */
    validateModel(formId, saveRepresentation) {
        let postBody = saveRepresentation;

        // verify the required parameter 'formId' is set
        if (formId === undefined || formId === null) {
            throw "Missing param 'formId' in validateModel";
        }

        // verify the required parameter 'saveRepresentation' is set
        if (saveRepresentation === undefined || saveRepresentation === null) {
            throw "Missing param 'saveRepresentation' in validateModel";
        }


        let pathParams = {
            'formId': formId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/editor/form-models/{formId}/validate', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
