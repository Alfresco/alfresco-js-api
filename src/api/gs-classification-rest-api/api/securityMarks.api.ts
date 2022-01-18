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
import { SecurityMark } from '../model/securityMark';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
 * Securitycontrolsettings service.
 * @module SecurityMarksApi
 */
export class SecurityMarksApi extends BaseApi {
    /**
    * Get security group id value
    *
    * Gets the value for a selected **securityGroupId**.
    *
    * @param securityGroupId The key for the security group id. You can use one of the following settings:
* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file

    * @return Promise<SecurityMark>
    */
    getSecurityMark(securityGroupId: string): Promise<SecurityMark> {
        throwIfNotDefined(securityGroupId, 'securityGroupId');

        let postBody = null;

        let pathParams = {
            securityGroupId: securityGroupId,
        };

        let queryParams = {};

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
            SecurityMark
        );
    }
}
