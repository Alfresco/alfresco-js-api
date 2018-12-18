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

export class ScriptFileApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the getControllers operation.
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getControllers
     */
    getControllers() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['text/javascript'];
        let accepts = [];
        let returnType = 'String';

        return this.apiClient.callApi(
            '/api/enterprise/script-files/controllers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getLibraries operation.
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getLibraries
     */
    getLibraries() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json', 'application/javascript'];
        let returnType = 'String';

        return this.apiClient.callApi(
            '/api/enterprise/script-files/libraries', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
