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
import { DeclassificationExemptionBody } from '../model/DeclassificationExemptionBody';
import { DeclassificationExemptionEntry } from '../model/DeclassificationExemptionEntry';
import { DeclassificationExemptionsPaging } from '../model/DeclassificationExemptionsPaging';

/**
 * Declassificationexemptions service.
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
     * Create a declassification exemption
     * Creates a new declassification exemption.  **Note:** You can create more than one exemption by specifying a list of exemptions in the JSON body. For example, the following JSON body creates two declassification exemptions: &#x60;&#x60;&#x60;JSON [   {     \&quot;code\&quot;:\&quot;My Code1\&quot;,     \&quot;description\&quot;:\&quot;My Description1\&quot;   },   {     \&quot;code\&quot;:\&quot;My Code2\&quot;,     \&quot;description\&quot;:\&quot;My Description2\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {DeclassificationExemptionBody} declassificationExemption Declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionEntry} and HTTP response
     */
    createDeclassificationExemption = function (declassificationExemption) {
        let postBody = declassificationExemption;

        // verify the required parameter 'declassificationExemption' is set
        if (declassificationExemption === undefined || declassificationExemption === null) {
            throw new Error("Missing param 'declassificationExemption' in createDeclassificationExemption");
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = DeclassificationExemptionEntry;

        return this.apiClient.callApi(
            '/declassification-exemptions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Delete a declassification exemption
     * Deletes the declassification exemption with id **declassificationExemptionId**. You can&#39;t delete a classification exemption that is being used to classify content.
     * @param {string} declassificationExemptionId The identifier for the declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDeclassificationExemption = function (declassificationExemptionId) {
        let postBody = null;

        // verify the required parameter 'declassificationExemptionId' is set
        if (declassificationExemptionId === undefined || declassificationExemptionId === null) {
            throw new Error("Missing param 'declassificationExemptionId' in deleteDeclassificationExemption");
        }


        let pathParams = {
            'declassificationExemptionId': declassificationExemptionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/declassification-exemptions/{declassificationExemptionId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * List all declassification exemptions
     * Gets all declassification exemptions.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionsPaging} and HTTP response
     */
    listDeclassificationExemptions = function (opts) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = DeclassificationExemptionsPaging;

        return this.apiClient.callApi(
            '/declassification-exemptions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get declassification exemption information
     * Gets the declassification exemption with id **declassificationExemptionId**.
     * @param {string} declassificationExemptionId The identifier for the declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionEntry} and HTTP response
     */
    showDeclassificationExemptionById = function (declassificationExemptionId) {
        let postBody = null;

        // verify the required parameter 'declassificationExemptionId' is set
        if (declassificationExemptionId === undefined || declassificationExemptionId === null) {
            throw new Error("Missing param 'declassificationExemptionId' in showDeclassificationExemptionById");
        }


        let pathParams = {
            'declassificationExemptionId': declassificationExemptionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = DeclassificationExemptionEntry;

        return this.apiClient.callApi(
            '/declassification-exemptions/{declassificationExemptionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Update a declassification exemption
     * Updates the declassification exemption with id **declassificationExemptionId**. For example, you can rename a declassification exemption.
     * @param {string} declassificationExemptionId The identifier for the declassification exemption
     * @param {DeclassificationExemptionBody} declassificationExemption Declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionEntry} and HTTP response
     */
    updateDeclassificationExemption = function (declassificationExemptionId, declassificationExemption) {
        let postBody = declassificationExemption;

        // verify the required parameter 'declassificationExemptionId' is set
        if (declassificationExemptionId === undefined || declassificationExemptionId === null) {
            throw new Error("Missing param 'declassificationExemptionId' in updateDeclassificationExemption");
        }

        // verify the required parameter 'declassificationExemption' is set
        if (declassificationExemption === undefined || declassificationExemption === null) {
            throw new Error("Missing param 'declassificationExemption' in updateDeclassificationExemption");
        }


        let pathParams = {
            'declassificationExemptionId': declassificationExemptionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = DeclassificationExemptionEntry;

        return this.apiClient.callApi(
            '/declassification-exemptions/{declassificationExemptionId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

}
