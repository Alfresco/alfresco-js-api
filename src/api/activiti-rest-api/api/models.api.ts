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

import { ModelRepresentation } from '../model/modelRepresentation';
import { ObjectNode } from '../model/objectNode';
import { ResultListDataRepresentationModelRepresentation } from '../model/resultListDataRepresentationModelRepresentation';
import { ValidationErrorRepresentation } from '../model/validationErrorRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Models service.
* @module ModelsApi
*/
export class ModelsApi extends BaseApi {
    /**
    * Create a new model
    *
    *
    *
    * @param modelRepresentation modelRepresentation
    * @return Promise<ModelRepresentation>
    */
    createModel(modelRepresentation: ModelRepresentation): Promise<ModelRepresentation> {
        throwIfNotDefined(modelRepresentation, 'modelRepresentation');

        let postBody = modelRepresentation;

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
            '/api/enterprise/models', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }
    /**
        * Delete a model
        *
        *
        *
        * @param modelId modelId
        * @param opts Optional parameters
        * @param opts.cascade cascade
        * @param opts.deleteRuntimeApp deleteRuntimeApp
        * @return Promise<{}>
        */
    deleteModel(modelId: number, opts?: any): Promise<any> {
        throwIfNotDefined(modelId, 'modelId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {
            'cascade': opts['cascade'],
            'deleteRuntimeApp': opts['deleteRuntimeApp']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Duplicate an existing model
        *
        *
        *
        * @param modelId modelId
        * @param modelRepresentation modelRepresentation
        * @return Promise<ModelRepresentation>
        */
    duplicateModel(modelId: number, modelRepresentation: ModelRepresentation): Promise<ModelRepresentation> {
        throwIfNotDefined(modelId, 'modelId');
        throwIfNotDefined(modelRepresentation, 'modelRepresentation');

        let postBody = modelRepresentation;

        let pathParams = {
            'modelId': modelId
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
            '/api/enterprise/models/{modelId}/clone', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }
    /**
        * Get model content
        *
        *
        *
        * @param modelId modelId
        * @return Promise<ObjectNode>
        */
    getModelJSON(modelId: number): Promise<ObjectNode> {
        throwIfNotDefined(modelId, 'modelId');
        let postBody = null;

        let pathParams = {
            'modelId': modelId
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
            '/api/enterprise/models/{modelId}/editor/json', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ObjectNode);
    }
    /**
        * Get a model's thumbnail image
        *
        *
        *
        * @param modelId modelId
        * @return Promise<string>
        */
    getModelThumbnail(modelId: number): Promise<string> {
        throwIfNotDefined(modelId, 'modelId');
        let postBody = null;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['image/png'];

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/thumbnail', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a model
        *
        * Models act as containers for process, form, decision table and app definitions
        *
        * @param modelId modelId
        * @param opts Optional parameters
        * @param opts.includePermissions includePermissions
        * @return Promise<ModelRepresentation>
        */
    getModel(modelId: number, opts?: any): Promise<ModelRepresentation> {
        throwIfNotDefined(modelId, 'modelId');
        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {
            'includePermissions': opts['includePermissions']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }


    /**
        * List process definition models shared with the current user
        *
        *
        *
        * @return Promise<ResultListDataRepresentationModelRepresentation>
        */
    getModelsToIncludeInAppDefinition(): Promise<ResultListDataRepresentationModelRepresentation> {

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
            '/api/enterprise/models-for-app-definition', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationModelRepresentation);
    }
    /**
        * List models (process, form, decision rule or app)
        *
        *
        *
        * @param opts Optional parameters
        * @param opts.filter filter
        * @param opts.sort sort
        * @param opts.modelType modelType
        * @param opts.referenceId referenceId
        * @return Promise<ResultListDataRepresentationModelRepresentation>
        */
    getModels(opts?: any): Promise<ResultListDataRepresentationModelRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'filter': opts['filter'],
            'filterText': opts['filterText'],
            'sort': opts['sort'],
            'modelType': opts['modelType'],
            'referenceId': opts['referenceId']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/models', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationModelRepresentation);
    }
    /**
        * Create a new version of a model
        *
        *
        *
        * @param modelId modelId
        * @param file file
        * @return Promise<ModelRepresentation>
        */
    importNewVersion(modelId: number, file: any): Promise<ModelRepresentation> {
        throwIfNotDefined(modelId, 'modelId');
        throwIfNotDefined(file, 'file');

        let postBody = null;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/newversion', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }
    /**
        * Import a BPMN 2.0 XML file
        *
        *
        *
        * @param file file
        * @return Promise<ModelRepresentation>
        */
    importProcessModel(file: any): Promise<ModelRepresentation> {
        throwIfNotDefined(file, 'file');

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-models/import', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }
    /**
        * Update model content
        *
        *
        *
        * @param modelId modelId
        * @param values values
        * @return Promise<ModelRepresentation>
        */
    saveModel(modelId: number, values: any): Promise<ModelRepresentation> {
        throwIfNotDefined(modelId, 'modelId');
        throwIfNotDefined(values, 'values');

        let postBody = values;

        let pathParams = {
            'modelId': modelId
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
            '/api/enterprise/models/{modelId}/editor/json', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }
    /**
        * Update a model
        *
        * This method allows you to update the metadata of a model. In order to update the content of the model you will need to call the specific endpoint for that model type.
        *
        * @param modelId modelId
        * @param updatedModel updatedModel
        * @return Promise<ModelRepresentation>
        */
    updateModel(modelId: number, updatedModel: ModelRepresentation): Promise<ModelRepresentation> {
        throwIfNotDefined(modelId, 'modelId');
        throwIfNotDefined(updatedModel, 'updatedModel');

        let postBody = updatedModel;

        let pathParams = {
            'modelId': modelId
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
            '/api/enterprise/models/{modelId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ModelRepresentation);
    }
    /**
        * Validate model content
        *
        *
        *
        * @param modelId modelId
        * @param opts Optional parameters
        * @param opts.values values
        * @return Promise<ValidationErrorRepresentation>
        */
    validateModel(modelId: number, opts?: any): Promise<ValidationErrorRepresentation> {
        throwIfNotDefined(modelId, 'modelId');

        opts = opts || {};
        let postBody = opts['values'];

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/x-www-form-urlencoded'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/editor/validate', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ValidationErrorRepresentation);
    }

}
