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

import { PersonNetworkEntry } from '../model/personNetworkEntry';
import { PersonNetworkPaging } from '../model/personNetworkPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Networks service.
* @module NetworksApi
*/
export class NetworksApi extends BaseApi {
    /**
    * Get a network
    *
    * Gets information for a network **networkId**.
    *
    * @param networkId The identifier of a network.
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<PersonNetworkEntry>
    */
    getNetwork(networkId: string, opts?: any): Promise<PersonNetworkEntry> {
        throwIfNotDefined(networkId, 'networkId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'networkId': networkId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/networks/{networkId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonNetworkEntry);
    }
    /**
        * Get network information
        *
        * Gets network information on a single network specified by **networkId** for **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param networkId The identifier of a network.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<PersonNetworkEntry>
        */
    getNetworkForPerson(personId: string, networkId: string, opts?: any): Promise<PersonNetworkEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(networkId, 'networkId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId, 'networkId': networkId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/networks/{networkId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonNetworkEntry);
    }
    /**
        * List network membership
        *
        * Gets a list of network memberships for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<PersonNetworkPaging>
        */
    listNetworksForPerson(personId: string, opts?: any): Promise<PersonNetworkPaging> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/networks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PersonNetworkPaging);
    }

}
