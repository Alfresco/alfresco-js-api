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

import { TicketBody } from '../model/ticketBody';
import { TicketEntry } from '../model/ticketEntry';
import { ValidTicketEntry } from '../model/validTicketEntry';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Authentication service.
* @module AuthenticationApi
*/
export class AuthenticationApi extends BaseApi {
    /**
    * Create ticket (login)
    *
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Logs in and returns the new authentication ticket.

The userId and password properties are mandatory in the request body. For example:
JSON
{
    \"userId\": \"jbloggs\",
    \"password\": \"password\"
}

To use the ticket in future requests you should pass it in the request header.
For example using Javascript:
  Javascript
    request.setRequestHeader (\"Authorization\", \"Basic \" + btoa(ticket));


    *
    * @param ticketBodyCreate The user credential.
    * @return Promise<TicketEntry>
    */
    createTicket(ticketBodyCreate: TicketBody): Promise<TicketEntry> {
        throwIfNotDefined(ticketBodyCreate, 'ticketBodyCreate');

        let postBody = ticketBodyCreate;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tickets', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TicketEntry);
    }

    /**
     * Get ticket (login)
     *

     Logs in and returns the new authentication ticket.
     *
     * @return Promise<TicketEntry>
     */
    getTicket(): Promise<TicketEntry> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tickets/-me-', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TicketEntry);
    }

    /**
        * Delete ticket (logout)
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Deletes logged in ticket (logout).

        *
        * @return Promise<{}>
        */
    deleteTicket(): Promise<any> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tickets/-me-', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Validate ticket
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Validates the specified ticket (derived from Authorization header) is still valid.

    For example, you can pass the Authorization request header using Javascript:
      Javascript
        request.setRequestHeader (\"Authorization\", \"Basic \" + btoa(ticket));


        *
        * @return Promise<ValidTicketEntry>
        */
    validateTicket(): Promise<ValidTicketEntry> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tickets/-me-', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ValidTicketEntry);
    }

}
