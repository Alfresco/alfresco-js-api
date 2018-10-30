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

import { AlfrescoApiClient } from '../../../alfrescoApiClient';
import { Error } from '../model/Error';
import { DiscoveryEntry } from '../model/DiscoveryEntry';

/**
 * Discovery service.
 * @module api/DiscoveryApi
 * @version 0.1.0
 */

/**
 * Constructs a new DiscoveryApi.
 * @alias module:api/DiscoveryApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class DiscoveryApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Get repository information
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.\n\nRetrieves the capabilities and detailed version information from the repository.\n
     * data is of type: {module:model/DiscoveryEntry}
     */
    getRepositoryInformation = function () {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = DiscoveryEntry;

        return this.apiClient.callApi(
            '/discovery', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };
}
