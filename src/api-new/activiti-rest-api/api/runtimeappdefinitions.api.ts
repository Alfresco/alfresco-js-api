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

/**
* Runtimeappdefinitions service.
* @module RuntimeappdefinitionsApi
*/
export class RuntimeappdefinitionsApi extends BaseApi {
    /**
    * Deploy a published app
    * 
    * Deploying an app allows the user to see it on his/her landing page. Apps must be published before they can be deployed.
    * 
    * @param  saveObject saveObject
    * @return Promise<{}>
    */
    deployAppDefinitionsUsingPOST(saveObject: RuntimeAppDefinitionSaveRepresentation): Promise<{}> {

        let postBody = saveObject;

        if (saveObject === undefined || saveObject === null) {
            throw new Error("Required param 'saveObject' in deployAppDefinitionsUsingPOST");
        }

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
            '/enterprise/runtime-app-definitions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a runtime app
        * 
        * 
        * 
        * @param  appDefinitionId appDefinitionId
        * @return Promise<AppDefinitionRepresentation>
        */
    getAppDefinitionUsingGET1(appDefinitionId: number): Promise<AppDefinitionRepresentation> {

        let postBody = null;

        if (appDefinitionId === undefined || appDefinitionId === null) {
            throw new Error("Required param 'appDefinitionId' in getAppDefinitionUsingGET1");
        }

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
            '/enterprise/runtime-app-definitions/{appDefinitionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List runtime apps
        * 
        * When a user logs in into Alfresco Process Services Suite, a landing page is displayed containing all the apps that the user is allowed to see and use. These are referred to as runtime apps.
        * 
        * @return Promise<ResultListDataRepresentationAppDefinitionRepresentation>
        */
    getAppDefinitionsUsingGET(): Promise<ResultListDataRepresentationAppDefinitionRepresentation> {

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
            '/enterprise/runtime-app-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
