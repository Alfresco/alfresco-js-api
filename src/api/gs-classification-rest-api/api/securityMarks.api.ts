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
import { throwIfNotDefined } from '../../../assert';
import { SecurityMarkEntry } from '../model/securityMarkEntry';
import { SecurityMarkBody } from '../model/securityMarkBody';

/**
 * Securitycontrolsettings service.
 * @module SecurityMarksApi
 */
export class SecurityMarksApi extends BaseApi {
    /**
    * Get security mark value
    *
    * Gets the value for a selected **securityGroupId**.
    *
    * @param securityGroupId The key for the security group id.
    * @param opts.inUse The key for the security mark is in use or not.
    * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    * @param opts.maxItems The maximum number of items to return in the list.

    * @return Promise<SecurityMarkEntry>
    */
    getSecurityMarks(securityGroupId: string, opts?: any): Promise<SecurityMarkEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');

        let postBody = null;

        let pathParams = {
            securityGroupId: securityGroupId,
        };

        let queryParams = {
            inUse: opts['inUse'],
            skipCount: opts['skipCount'],
            maxItems: opts['maxItems'],
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}/security-marks',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkEntry
        );
    }

    /**
    * Create security mark
    *
    *
    * @param securityGroupId The key for the security group id.
    * @param securityMarkBody securityMarkBody.

    * @return Promise<SecurityMarkEntry>
    */
    createSecurityMark(securityGroupId: string, securityMarkBody: SecurityMarkBody): Promise<SecurityMarkEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');
        throwIfNotDefined(securityMarkBody, 'securityMarkBody');

        let postBody = securityMarkBody;
        let pathParams = {
            securityGroupId: securityGroupId,
        };
        let queryParams = {
            securityMarkBody,
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}/security-marks',
            'POST',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkEntry
        );
    }
    /**
    * Get security mark value information
    *
    * Gets the value for a selected **securityMarkId**.
    *
    * @param securityGroupId The key for the security group id.
    * @param securityMarkId The key for the security mark id
    * @return Promise<SecurityMarkEntry>
    */
    getSecurityMark(securityGroupId: string, securityMarkId: string): Promise<SecurityMarkEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');
        throwIfNotDefined(securityMarkId, 'securityMarkId');

        let postBody = null;

        let pathParams = {
            securityGroupId: securityGroupId,
            securityMarkId: securityMarkId,
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}/security-marks/{securityMarkId}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkEntry
        );
    }

    /**
    * Updates Security Mark value
    *
    *
    * @param securityGroupId The key for the security group id.
    * @param securityMarkId The key for the security mark is in use or not.
    * @param securityMarkBody securityMarkBody.

    * @return Promise<SecurityMarkEntry>
    */

    updateSecurityMark(securityGroupId: string, securityMarkId: string, securityMarkBody: SecurityMarkBody): Promise<SecurityMarkEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');
        throwIfNotDefined(securityMarkId, 'securityMarkId');
        throwIfNotDefined(securityMarkBody, 'securityMarkBody');

        let postBody = null;

        let pathParams = {
            securityGroupId: securityGroupId,
            securityMarkId: securityMarkId,
        };

        let queryParams = {
            securityMarkBody
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}/security-marks/{securityMarkId}',
            'PUT',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkEntry
        );
    }

    /**
    * Delete security mark
    *
    *
    * @param securityGroupId The key for the security group id.
    * @param securityMarkId The key for the security mark id.
    * @param securityMarkBody Security Mark
    *
    * @return Promise<SecurityMarkEntry>
    */
    deleteSecurityMark(securityGroupId: string, securityMarkId: string, securityMarkBody: SecurityMarkBody): Promise<SecurityMarkEntry> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');
        throwIfNotDefined(securityMarkId, 'securityMarkId');

        let postBody = null;

        let pathParams = {
            securityGroupId: securityGroupId,
            securityMarkId: securityMarkId,
        };

        let queryParams = {
            securityMarkBody
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/security-groups/{securityGroupId}/security-marks/{securityMarkId}',
            'DELETE',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkEntry
        );
    }
}
