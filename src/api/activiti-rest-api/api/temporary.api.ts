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

import { BaseApi } from './base.api';

export class TemporaryApi extends BaseApi {

    /**
     * Temporary service.
     * @module api/TemporaryApi
     * @version 1.4.0
     */

    /**
     * Function to receive the result of the completeTasks operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * completeTasks
     * @param {Integer} userId userId
     * @param {String} processDefinitionKey processDefinitionKey
     */
    completeTasks(userId: number, processDefinitionKey: string) {
        let postBody = null;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in completeTasks";
        }

        // verify the required parameter 'processDefinitionKey' is set
        if (processDefinitionKey === undefined || processDefinitionKey === null) {
            throw "Missing param 'processDefinitionKey' in completeTasks";
        }


        let pathParams = {};
        let queryParams = {
            'userId': userId,
            'processDefinitionKey': processDefinitionKey
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/api/enterprise/temporary/generate-report-data/complete-tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to receive the result of the generateData operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * generateData
     * @param {Integer} userId userId
     * @param {String} processDefinitionKey processDefinitionKey
     */
    generateData(userId: number, processDefinitionKey: string) {
        let postBody = null;

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in generateData";
        }

        // verify the required parameter 'processDefinitionKey' is set
        if (processDefinitionKey === undefined || processDefinitionKey === null) {
            throw "Missing param 'processDefinitionKey' in generateData";
        }


        let pathParams = {};
        let queryParams = {
            'userId': userId,
            'processDefinitionKey': processDefinitionKey
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/api/enterprise/temporary/generate-report-data/start-process', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to receive the result of the getHeaders operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ArrayNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getHeaders
     */
    getHeaders() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/api/enterprise/temporary/example-headers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to receive the result of the getOptions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ArrayNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOptions
     */
    getOptions() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/api/enterprise/temporary/example-options', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }
}
