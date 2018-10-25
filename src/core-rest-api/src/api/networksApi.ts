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
import { PersonNetworkEntry } from '../model/PersonNetworkEntry';
import { PersonNetworkPaging } from '../model/PersonNetworkPaging';

/**
 * Networks service.
 * @module api/NetworksApi
 * @version 0.1.0
 */

/**
 * Constructs a new NetworksApi.
 * @alias module:api/NetworksApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */

export class NetworksApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Get a network
     * Returns information for a network **networkId**.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkEntry}
     */
    getNetwork(networkId: string, opts: any): Promise<PersonNetworkEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'networkId' is set
        if (networkId == undefined || networkId == null) {
            throw "Missing param 'networkId' in getNetwork";
        }


        let pathParams = {
            'networkId': networkId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];

        return this.apiClient.callApi(
            '/networks/{networkId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts
        );
    }


    /**
     * Get network information
     * Gets network information on a single network specified by **networkId** for **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.
     * @param {String} personId The identifier of a person.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonNetworkEntry}
     */
    getNetworkForPerson(personId: string, networkId: string, opts: any): Promise<PersonNetworkEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId == undefined || personId == null) {
            throw new Error("Missing param 'personId' in getNetworkForPerson");
        }

        // verify the required parameter 'networkId' is set
        if (networkId == undefined || networkId == null) {
            throw new Error("Missing param 'networkId' in getNetworkForPerson");
        }


        let pathParams = {
            'personId': personId,
            'networkId': networkId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];

        return this.apiClient.callApi(
            '/people/{personId}/networks/{networkId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts
        );
    }


    /**
     * List network membership
     * Gets a list of network memberships for person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonNetworkPaging}
     */
    listNetworksForPerson(personId: string, opts: any): Promise<PersonNetworkPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId == undefined || personId == null) {
            throw new Error("Missing param 'personId' in listNetworksForPerson");
        }


        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];

        return this.apiClient.callApi(
            '/people/{personId}/networks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts
        );
    }
}
