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

import { AppDefinitionRepresentation } from '../model/appDefinitionRepresentation';
import { ResultListDataRepresentationAppDefinitionRepresentation } from '../model/resultListDataRepresentationAppDefinitionRepresentation';
import { RuntimeAppDefinitionSaveRepresentation } from '../model/runtimeAppDefinitionSaveRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Runtimeappdefinitions service.
* @module RuntimeappdefinitionsApi
*/
export class RuntimeAppDefinitionsApi extends BaseApi {
    /**
    * Deploy a published app
    *
    * Deploying an app allows the user to see it on his/her landing page. Apps must be published before they can be deployed.
    *
    * @param saveObject saveObject
    * @return Promise<{}>
    */
    deployAppDefinitions(saveObject: RuntimeAppDefinitionSaveRepresentation): Promise<any> {
        throwIfNotDefined(saveObject, 'saveObject');

        let postBody = saveObject;

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
            '/api/enterprise/runtime-app-definitions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a runtime app
        *
        *
        *
        * @param appDefinitionId appDefinitionId
        * @return Promise<AppDefinitionRepresentation>
        */
    getAppDefinition(appDefinitionId: number): Promise<AppDefinitionRepresentation> {
        throwIfNotDefined(appDefinitionId, 'appDefinitionId');

        let postBody = null;

        let pathParams = {
            'appDefinitionId': appDefinitionId
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
            '/api/enterprise/runtime-app-definitions/{appDefinitionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AppDefinitionRepresentation);
    }
    /**
        * List runtime apps
        *
        * When a user logs in into Alfresco Process Services Suite, a landing page is displayed containing all the apps that the user is allowed to see and use. These are referred to as runtime apps.
        *
        * @return Promise<ResultListDataRepresentationAppDefinitionRepresentation>
        */
    getAppDefinitions(): Promise<ResultListDataRepresentationAppDefinitionRepresentation> {

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
            '/api/enterprise/runtime-app-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAppDefinitionRepresentation);
    }

}
