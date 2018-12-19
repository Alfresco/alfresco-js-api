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

export class ModelsHistoryApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the getModelHistoryCollection operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To get the version information for a model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeLatestVersion includeLatestVersion
     */
    getModelHistoryCollection(modelId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in getModelHistoryCollection";
        }


        let pathParams = {
            'modelId': modelId
        };
        let queryParams = {
            'includeLatestVersion': opts['includeLatestVersion']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/history', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessModelHistory operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To get a particular older version of a model
     * @param {Integer} modelId modelId
     * @param {Integer} modelHistoryId modelHistoryId
     */
    getProcessModelHistory(modelId, modelHistoryId) {
        let postBody = null;

        // verify the required parameter 'modelId' is set
        if (modelId === undefined || modelId === null) {
            throw "Missing param 'modelId' in getProcessModelHistory";
        }

        // verify the required parameter 'modelHistoryId' is set
        if (modelHistoryId === undefined || modelHistoryId === null) {
            throw "Missing param 'modelHistoryId' in getProcessModelHistory";
        }


        let pathParams = {
            'modelId': modelId,
            'modelHistoryId': modelHistoryId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{modelId}/history/{modelHistoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
