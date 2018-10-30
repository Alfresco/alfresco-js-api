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
import { LoginTicketEntry } from '../model/LoginTicketEntry';
import { ValidateTicketEntry } from '../model/ValidateTicketEntry';

/**
 * Authentication service.
 * @module api/AuthenticationApi
 * @version 0.1.0
 */

/**
 * Constructs a new AuthenticationApi.
 * @alias module:api/AuthenticationApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class AuthenticationApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Create ticket (login)
     * Logs in and returns the new authentication ticket.\nThe userId and password properties are mandatory in the request body. For example:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;userId\&quot;: \&quot;jbloggs\&quot;,\n    \&quot;password\&quot;: \&quot;password\&quot;\n}\n&#x60;&#x60;&#x60;\nTo use the ticket in future requests you should pass it in the request header.\nFor example using Javascript:\n  &#x60;&#x60;&#x60;Javascript\n    request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));\n  &#x60;&#x60;&#x60;\n
     * @param {module:model/LoginRequest} loginRequest The user credential.
     * data is of type: {module:model/LoginTicketEntry}
     */
    createTicket = function (loginRequest) {
        let postBody = loginRequest;

        // verify the required parameter 'loginRequest' is set
        if (loginRequest === undefined || loginRequest === null) {
            throw "Missing param 'loginRequest' in createTicket";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = LoginTicketEntry;

        return this.apiClient.callApi(
            '/tickets', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType, null, 'application/json'
        );
    };


    /**
     * Delete ticket (logout)
     * Deletes logged in ticket (logout).\n
     */
    deleteTicket = function () {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/tickets/-me-', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };


    /**
     * Validate ticket
     * Validates the specified ticket (derived from Authorization header) is still valid.\n\nFor example, you can pass the Authorization request header using Javascript:\n  &#x60;&#x60;&#x60;Javascript\n    request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/ValidateTicketEntry}
     */
    validateTicket = function () {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = ValidateTicketEntry;

        return this.apiClient.callApi(
            '/tickets/-me-', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };
}
