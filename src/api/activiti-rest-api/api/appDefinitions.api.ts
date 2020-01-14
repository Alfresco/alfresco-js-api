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

import { AppDefinitionPublishRepresentation } from '../model/appDefinitionPublishRepresentation';
import { AppDefinitionRepresentation } from '../model/appDefinitionRepresentation';
import { AppDefinitionSaveRepresentation } from '../model/appDefinitionSaveRepresentation';
import { AppDefinitionUpdateResultRepresentation } from '../model/appDefinitionUpdateResultRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
 * Appdefinitions service.
 * @module AppdefinitionsApi
 */
export class AppDefinitionsApi extends BaseApi {
    /**
     * deleteAppDefinition
     *
     *
     *
     * @param appDefinitionId appDefinitionId
     * @return Promise<{}>
     */
    deleteAppDefinition(appDefinitionId: number): Promise<any> {
        throwIfNotDefined(appDefinitionId, 'appDefinitionId');

        let postBody = null;

        let pathParams = {
            'appDefinitionId': appDefinitionId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/app-definitions/{appDefinitionId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Export an app definition
     *
     * This will return a zip file containing the app definition model and all related models (process definitions and forms).
     *
     * @param modelId modelId from a runtime app or the id of an app definition model
     * @return Promise<{}>
     */
    exportAppDefinition(modelId: number): Promise<any> {
        throwIfNotDefined(modelId, 'modelId');

        let postBody = null;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json', 'application/zip'];

        return this.apiClient.callApi(
            '/api/enterprise/app-definitions/{modelId}/export', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Get an app definition
     *
     *
     *
     * @param modelId Application definition ID
     * @return Promise<AppDefinitionRepresentation>
     */
    getAppDefinition(modelId: number): Promise<AppDefinitionRepresentation> {
        throwIfNotDefined(modelId, 'modelId');

        let postBody = null;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/app-definitions/{modelId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AppDefinitionRepresentation);
    }

    /**
     * importAndPublishApp
     *
     *
     *
     * @param file file
     * @return Promise<AppDefinitionUpdateResultRepresentation>
     */
    importAndPublishApp(file: any): Promise<AppDefinitionUpdateResultRepresentation> {
        throwIfNotDefined(file, 'file');

        let postBody = null;
        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/api/enterprise/app-definitions/publish-app', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AppDefinitionUpdateResultRepresentation);
    }

    /**
     * Import a new app definition
     *
     * Allows a zip file to be uploaded containing an app definition and any number of included models.<p>This is useful to bootstrap an environment (for users or continuous integration).<p>Before using any processes included in the import the app must be published and deployed.
     *
     * @param file file
     * @param opts Optional parameters
     * @param opts.renewIdmEntries Whether to renew user and group identifiers (default to false)
     * @return Promise<AppDefinitionRepresentation>
     */
    importAppDefinition(file: any, opts?: any): Promise<AppDefinitionRepresentation> {
        throwIfNotDefined(file, 'file');

        opts = opts || {};
        let postBody = null;

        let pathParams = {};

        let queryParams = {
            'renewIdmEntries': opts['renewIdmEntries']
        };

        let headerParams = {};
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/app-definitions/import', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AppDefinitionRepresentation);
    }

    /**
     * Publish an app definition
     *
     * Publishing an app definition makes it available for use. The application must not have any validation errors or an error will be returned.<p>Before an app definition can be used by other users, it must also be deployed for their use
     *
     * @param modelId modelId
     * @param publishModel publishModel
     * @return Promise<AppDefinitionUpdateResultRepresentation>
     */
    publishAppDefinition(modelId: number, publishModel: AppDefinitionPublishRepresentation): Promise<AppDefinitionUpdateResultRepresentation> {
        throwIfNotDefined(modelId, 'modelId');
        throwIfNotDefined(publishModel, 'publishModel');

        let postBody = publishModel;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/app-definitions/{modelId}/publish', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AppDefinitionUpdateResultRepresentation);
    }

    /**
     * Update an app definition
     *
     *
     *
     * @param modelId Application definition ID
     * @param updatedModel updatedModel |
     * @return Promise<AppDefinitionUpdateResultRepresentation>
     */
    updateAppDefinition(modelId: number, updatedModel: AppDefinitionSaveRepresentation | any): Promise<any> {
        throwIfNotDefined(modelId, 'modelId');
        throwIfNotDefined(updatedModel, 'updatedModel');

        let postBody = updatedModel;

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {};

        let headerParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        if (!updatedModel['appDefinition']) {
            contentTypes = ['multipart/form-data'];

            let formParams = {
                'file': updatedModel
            };

            return this.apiClient.callApi(
                '/api/enterprise/app-definitions/{modelId}/import', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts);
        } else {
            let formParams = {};

            return this.apiClient.callApi(
                '/api/enterprise/app-definitions/{modelId}', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts);
        }

    }
}
