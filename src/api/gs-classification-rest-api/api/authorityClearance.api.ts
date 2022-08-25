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
import {
    AuthorityClearanceGroupPaging,
    NodeSecurityMarkBody, SecurityMarkEntry, SecurityMarkPaging
} from "../model";

/**
 * AuthorityClearanceApi service.
 * @module AuthorityClearanceApi
 */
export class AuthorityClearanceApi extends BaseApi {
    /**
     * Get the authority clearances for a single user/group
     * @param authorityType The identifier for the authorityType. Can be 'USER/GROUP'
     * @param authorityId The name for the authority for which the clearance is to be fetched. Can be left blank in which case it will fetch it for all users with pagination
     * @param clearance The clearance level for the authority. Can be TS (Top Secret), S (Secret), or C (Confidential)
     * @return Promise<AuthorityClearanceGroupPaging>
     */
    getAuthorityClearanceForAuthority(authorityId: string, authorityType?: string, clearance?: string): Promise<AuthorityClearanceGroupPaging> {
        let body = null;
        let pathParams = {
            'authorityId': authorityId
        };
        let queryParams = {
            'authorityType': authorityType ? authorityType : null,
            'clearance': clearance ? clearance : null,
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi('/cleared-authorities/{authorityId}/clearing-marks', 'GET', pathParams, queryParams, headerParams, formParams, body, contentTypes, accepts, AuthorityClearanceGroupPaging);
    }

     /**
     * Updates the authority clearance.
     * @param authorityId The name for the authority for which the clearance is to be updated
     * @param authorityClearance AuthorityClearanceBody
     * @return Promise<SecurityMarkEntry | SecurityMarkPaging>
     */
    updateAuthorityClearance(authorityId: string, authorityClearance: NodeSecurityMarkBody[]): Promise<SecurityMarkEntry | SecurityMarkPaging> {

        let postBody = authorityClearance;
        let pathParams = {
            authorityId: authorityId,
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/cleared-authorities/{authorityId}/clearing-marks',
            'POST',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            authorityClearance.length === 1 ? SecurityMarkEntry : SecurityMarkPaging
        );

    }
}
