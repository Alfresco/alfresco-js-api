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
import { AuthorityClearance, AuthorityClearanceEntry, AuthorityClearanceBody, AuthorityClearancePaging } from "../model";

/**
 * AuthorityClearanceApi service.
 * @module AuthorityClearanceApi
 */
export class AuthorityClearanceApi extends BaseApi {
    /**
     * Get the authority clearances for a single user/group
     * @param authorityType The identifier for the authorityType. Can be 'USER/GROUP'
     * @param authorityName The name for the authority for which the clearance is to be fetched. Can be left blank in which case it will fetch it for all users with pagination
     * @param clearance The clearance level for the authority. Can be TS (Top Secret), S (Secret), or C (Confidential)
     * @return Promise<AuthorityClearanceEntry>
     */
    getAuthorityClearanceForSingleAuthority(authorityName: string, authorityType?: string, clearance?: string): Promise<AuthorityClearanceEntry> {
        let body = null;
        let pathParams = {
            'authorityName': authorityName
        };
        let queryParams = {
            'authorityType': authorityType ? authorityType : null,
            'clearance': clearance ? clearance : null,
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi('/authority-clearance/{authorityName}', 'GET', pathParams, queryParams, headerParams, formParams, body, contentTypes, accepts, AuthorityClearance);
    }

    /**
     * Get the authority clearances for multiple users/groups with pagination
     * @param authorityType The filter for the authorityType. Can be 'USER/GROUP'
     * @param authorityName The filter for the authorityName for which the clearance is to be fetched. Can be left blank in which case it will fetch it for all users with pagination
     * @param clearance The clearance level for the authority. Can be TS (Top Secret), S (Secret), or C (Confidential)
     * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param opts.maxItems The maximum number of items to return in the list.
     * * @return Promise<AuthorityClearancePaging>
     */
    getAuthorityClearanceWithPagination(authorityName?: string, authorityType?: string, clearance?: string, opts?: any): Promise<AuthorityClearancePaging> {
        let body = null;
        let pathParams = {};
        let queryParams = {
            'authorityName': authorityName ? authorityName : null,
            'authorityType': authorityType ? authorityType : null,
            'clearance': clearance ? clearance : null,
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems']
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi('/authority-clearance/', 'GET', pathParams, queryParams, headerParams, formParams, body, contentTypes, accepts, AuthorityClearancePaging);
    }

     /**
     * Updates the authority clearance.
     * @param authorityName The name for the authority for which the clearance is to be updated
     * @param authorityClearance AuthorityClearanceBody
     * @return Promise<AuthorityClearanceBody>
     */
    updateAuthorityClearance(authorityName: string, authorityClearance: AuthorityClearanceBody): Promise<AuthorityClearanceBody> {

        let putBody = authorityClearance;
        let pathParams = {
            authorityName: authorityName,
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/authority-clearance/{authorityName}',
            'PUT',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            putBody,
            contentTypes,
            accepts,
            AuthorityClearanceBody
        );

    }
}
