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

/**
* SecurityGroupsApi service.
* @module SecurityGroupsApi
*/
export class SecurityGroupsApi extends BaseApi {

    getSecurityGroups(include: string, skipCount: number, maxItems: number) : Promise<SecurityGroupPaging>{
        let postBody = null;
        let pathParams = {
        };
        let queryParams = {
            'include': include,
            'skipCount': skipCount,
            'maxItems': maxItems
        };
        let headerParams = {
        };
        let formParams = {
        };
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/security-groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SecurityGroupPaging);
    }

    createSecurityGroup(securityGroupBody: SecurityGroupBody, include: string) : Promise<SecurityGroupEntry>{
        let postBody = securityGroupBody;
        let pathParams = {
        };
        let queryParams = {
            'include': include,
        };
        let headerParams = {
        };
        let formParams = {
        };
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/security-groups', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SecurityGroupEntry);
    }
}
