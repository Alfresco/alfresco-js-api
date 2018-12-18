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

export class AppsRuntimeApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the deployAppDefinitions operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy published app
     * After creating and puclished an app the user can add it to his/her landing page.
     * @param {module:model/RuntimeAppDefinitionSaveRepresentation} saveObject saveObject
     */
    deployAppDefinitions(saveObject) {
        let postBody = saveObject;

        // verify the required parameter 'saveObject' is set
        if (saveObject === undefined || saveObject === null) {
            throw "Missing param 'saveObject' in deployAppDefinitions";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/runtime-app-definitions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getAppDefinitions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List runtime apps
     * When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getAppDefinitions() {
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
            '/api/enterprise/runtime-app-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
