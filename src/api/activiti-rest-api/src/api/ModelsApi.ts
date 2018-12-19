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
import { ProcessClient } from '../../../../processClient';

/**
 * @deprecated 3.0.0
 */
export class ModelsApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the createModel operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To create a new model
     * @param {module:model/ModelRepresentation} modelRepresentation modelRepresentation
     */
    createModel(modelRepresentation) {
        let postBody = modelRepresentation;

        // verify the required parameter 'modelRepresentation' is set
        if (modelRepresentation === undefined || modelRepresentation === null) {
            throw "Missing param 'modelRepresentation' in createModel";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the deleteModel operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade cascade
     * @param {Boolean} opts.deleteRuntimeApp deleteRuntimeApp
     */
    deleteModel(modelId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in deleteModel";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {
            'cascade': opts['cascade'],
            'deleteRuntimeApp': opts['deleteRuntimeApp']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the duplicateModel operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To duplicate an existing model
     * @param {Integer} modelId modelId
     * @param {module:model/ModelRepresentation} modelRepresentation modelRepresentation
     */
    duplicateModel(modelId, modelRepresentation) {
        let postBody = modelRepresentation;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in duplicateModel";
        }

        // verify the required parameter 'modelRepresentation' is set
        if (modelRepresentation === undefined || modelRepresentation === null) {
            throw "Missing param 'modelRepresentation' in duplicateModel";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/clone', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getModelJSON operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the JSON model
     * @param {Integer} modelId modelId
     */
    getModelJSON(modelId) {
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in getModelJSON";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/editor/json', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getModelThumbnail operation.
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Model thumbnail
     * @param {Integer} modelId modelId
     */
    getModelThumbnail(modelId) {
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in getModelThumbnail";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['image/png', 'application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/thumbnail', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getModel operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To retrieve details about a particular model (process, form, decision rule or app)
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermissions includePermissions
     */
    getModel(modelId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in getModel";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {
            'includePermissions': opts['includePermissions']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getModelsToIncludeInAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TODO
     */
    getModelsToIncludeInAppDefinition() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models-for-app-definition', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getModels operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List models (process, form, decision rule or app)
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.sort sort
     * @param {Integer} opts.modelType modelType
     * @param {Integer} opts.referenceId referenceId
     */
    getModels(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'filter': opts['filter'],
            'filterText': opts['filterText'],
            'sort': opts['sort'],
            'modelType': opts['modelType'],
            'referenceId': opts['referenceId']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the importNewVersion operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new model version
     * @param {Integer} modelId modelId
     * @param {File} file file
     */
    importNewVersion(modelId, file) {
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in importNewVersion";
        }

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in importNewVersion";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': file
        };


        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/newversion', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the importProcessModel operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To import a BPMN 2.0 xml file
     * @param {File} file file
     */
    importProcessModel(file) {
        let postBody = null;

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in importProcessModel";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': file
        };


        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-models/import', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the saveModel operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the JSON model
     * @param {Integer} modelId modelId
     * @param {Object} values values
     */
    saveModel(modelId, values) {
        let postBody = values;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in saveModel";
        }

        // verify the required parameter 'values' is set
        if (values === undefined || values === null) {
            throw "Missing param 'values' in saveModel";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/editor/json', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateModel operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a specific model
     * @param {Integer} modelId modelId
     * @param {module:model/ModelRepresentation} updatedModel updatedModel
     */
    updateModel(modelId, updatedModel) {
        let postBody = updatedModel;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in updateModel";
        }

        // verify the required parameter 'updatedModel' is set
        if (updatedModel === undefined || updatedModel === null) {
            throw "Missing param 'updatedModel' in updateModel";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}', 'PUT',
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
     * Validate the JSON model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.values values
     */
    validateModel(modelId, opts?: any) {
        opts = opts || {};
        let postBody = opts['values'];

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in validateModel";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/editor/validate', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
