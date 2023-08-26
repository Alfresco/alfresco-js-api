/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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

/**
 * SecurityGroupsApi service.
 * @module SecurityGroupsApi
 */
export class SecurityGroupsApi extends BaseApi {
    /**
     * Get All security groups
     * @param opts Optional parameters
     * @param opts.include Additional information about the security group
     * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param opts.maxItems The maximum number of items to return in the list.
     * @return Promise<SecurityGroupPaging>
     */
    getSecurityGroups(opts?: { include?: string[], skipCount?: number; maxItems?: number; }): Promise<SecurityGroupPaging> {
        return this.get({
            path: '/security-groups',
            queryParams: opts,
            returnType: SecurityGroupPaging
        });
    }

    /**
     * Create security group
     * @param securityGroupBody securityGroupBody.
     * @param opts Optional parameters
     * @param opts.include additional information about the security group
     * @return Promise<SecurityGroupEntry>
     */
    createSecurityGroup(securityGroupBody: SecurityGroupBody, opts?: { include?: string[] }): Promise<SecurityGroupEntry> {
        return this.post({
            path: '/security-groups',
            queryParams: opts,
            bodyParam: securityGroupBody,
            returnType: SecurityGroupEntry
        });
    }
    /**
     * Get a security groups information
     * @param securityGroupId The Key of Security Group id for which info is required
     * @param opts Optional parameters
     * @param opts.include additional information about the security group
     * @return Promise<SecurityGroupEntry>
     */
    getSecurityGroupInfo(securityGroupId: string, opts?: { include?: string[] }): Promise<SecurityGroupEntry> {
        const pathParams = {
            securityGroupId,
        };

        return this.get({
            path: '/security-groups/{securityGroupId}',
            pathParams,
            queryParams: opts,
            returnType: SecurityGroupEntry
        });
    }
    /**
     * Update a security groups information
     * @param securityGroupId The Key of Security Group id for which info is required
     * @param securityGroupBody SecurityGroupBody
     * @param opts Optional parameters
     * @param opts.include additional information about the security group
     * @return Promise<SecurityGroupEntry>
     */
    updateSecurityGroup(securityGroupId: string, securityGroupBody: SecurityGroupBody, opts?: { include?: string[] }): Promise<SecurityGroupEntry> {
        const pathParams = {
            securityGroupId,
        };

        return this.put({
            path: '/security-groups/{securityGroupId}',
            pathParams,
            queryParams: opts,
            bodyParam: securityGroupBody,
            returnType: SecurityGroupEntry
        });
    }

    /**
     * Delete security group
     * @param securityGroupId The key for the security group id.
     * @return Promise<SecurityMarkEntry>
     */
    deleteSecurityGroup(securityGroupId: string): Promise<any> {
        const pathParams = { securityGroupId };
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];
        return this.apiClient.callApi('/security-groups/{securityGroupId}', 'DELETE', pathParams, {}, {}, {}, null, contentTypes, accepts);
    }
}
