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

import { SecurityControlSettingBody } from '../model/securityControlSettingBody';
import { SecurityControlSettingEntry } from '../model/securityControlSettingEntry';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Securitycontrolsettings service.
* @module SecurityControlSettingsApi
*/
export class SecurityControlSettingsApi extends BaseApi {
    /**
    * Get security control setting value
    *
    * Gets the value for a selected **securityControlSettingKey**.
    *
    * @param securityControlSettingKey The key for the security control setting. You can use one of the following settings:
* -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file

    * @return Promise<SecurityControlSettingEntry>
    */
    getSecurityControlSetting(securityControlSettingKey: string): Promise<SecurityControlSettingEntry> {
        throwIfNotDefined(securityControlSettingKey, 'securityControlSettingKey');

        let postBody = null;

        let pathParams = {
            'securityControlSettingKey': securityControlSettingKey
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
            '/security-control-settings/{securityControlSettingKey}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SecurityControlSettingEntry);
    }
    /**
        * Update security control setting value
        *
        * Updates the value of a selected **securityControlSettingKey**.
        *
        * @param securityControlSettingKey The key for the security control setting. You can use one of the following settings:
    * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file

        * @param securityControlSettingValue The new value for the security control setting. This can be a string or number, depending on the setting key.
        * @return Promise<SecurityControlSettingEntry>
        */
    updateSecurityControlSetting(securityControlSettingKey: string, securityControlSettingValue: SecurityControlSettingBody): Promise<SecurityControlSettingEntry> {
        throwIfNotDefined(securityControlSettingKey, 'securityControlSettingKey');
        throwIfNotDefined(securityControlSettingValue, 'securityControlSettingValue');

        let postBody = securityControlSettingValue;

        let pathParams = {
            'securityControlSettingKey': securityControlSettingKey
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
            '/security-control-settings/{securityControlSettingKey}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SecurityControlSettingEntry);
    }

}
