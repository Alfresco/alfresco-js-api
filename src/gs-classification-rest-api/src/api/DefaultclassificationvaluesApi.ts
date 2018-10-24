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
import { DeclassificationDate } from '../model/DeclassificationDate';


/**
 * Defaultclassificationvalues service.
 * @module api/DeclassificationExemptionsApi
 * @version 0.1.0
 */

/**
 * Constructs a new DeclassificationExemptionsApi.
 * @alias :api/DeclassificationExemptionsApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class DeclassificationExemptionsApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Calculate the default declassification date
     * Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.
     * @param {string} nodeId The identifier of a node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationDate} and HTTP response
     */
    calculateDefaultDeclassificationDate = function (nodeId) {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId === undefined || nodeId === null) {
            throw new Error("Missing param 'nodeId' in calculateDefaultDeclassificationDate");
        }


        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = DeclassificationDate;

        return this.apiClient.callApi(
            '/default-classification-values/{nodeId}/calculate-declassification-date', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

}
