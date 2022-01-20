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
import { SecurityGroupPaging } from '../model/securityGroupPaging';
import { SecurityGroupBody } from '../model/securityGroupBody';
import { SecurityGroupEntry } from '../model/securityGroupEntry';
import { throwIfNotDefined } from '../../../assert';

/**
 * SecurityGroupsApi service.
 * @module SecurityGroupsApi
 */
export class SecurityGroupsApi extends BaseApi {
    /**
     * Get All security groups
     * @param opts.include Additional information about the security group
     * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param opts.maxItems The maximum number of items to return in the list.
     * @return Promise<SecurityGroupPaging>
     */
    getSecurityGroups(opts?: any): Promise<SecurityGroupPaging> {
        let postBody = null;
        let pathParams = {};
        let queryParams = {
            'include': opts['include'],
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems']
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi('/security-groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts, SecurityGroupPaging);
    }

    /**
     * Create security group
     * @param securityGroupBody securityGroupBody.
     * @param include additional information about the security group
     * @return Promise<SecurityGroupEntry>
     */
    createSecurityGroup(securityGroupBody: SecurityGroupBody, opts?: any): Promise<SecurityGroupEntry> {
        throwIfNotDefined(securityGroupBody, 'securityGroupBody');

        let postBody = securityGroupBody;
        let pathParams = {};
        let queryParams = {
            'include': opts['include'],
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi('/security-groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts, SecurityGroupEntry);
    }
    /**
     * Get a security groups information
     * @param securityGroupId The Key of Security Group id for which info is required
     * @param opts.include additional information about the security group
     * @return Promise<SecurityGroupEntry>
     */
    getSecurityGroupInfo(securityGroupId: string, opts?: any): Promise<SecurityGroupEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');

        let postBody = null;
        let pathParams = {
            'securityGroupId': securityGroupId,
        };
        let queryParams = {
            'include': opts['include'],
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityGroupEntry
        );
    }
    /**
     * Update a security groups information
     * @param securityGroupId The Key of Security Group id for which info is required
     * @param securityGroupBody SecurityGroupBody
     * @param opts.include additional information about the security group
     * @return Promise<SecurityGroupEntry>
     */

    updateSecurityGroup(securityGroupId: string, securityGroupBody: SecurityGroupBody, opts?: any): Promise<SecurityGroupEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');
        throwIfNotDefined(securityGroupBody, 'securityGroupBody');

        let postBody = securityGroupBody;
        let pathParams = {
            securityGroupId: securityGroupId,
        };
        let queryParams = {
            'include': opts['include'],
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}',
            'PUT',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityGroupEntry
        );
    }

    /**
     * Delete security group
     * @param securityGroupId The key for the security group id.
     * @return Promise<SecurityMarkEntry>
     */
    deleteSecurityGroup(securityGroupId: string): Promise<any> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');

        let postBody = null;
        let pathParams = {
            'securityGroupId': securityGroupId,
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi('/security-groups/{securityGroupId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, contentTypes, accepts);
    }
}
