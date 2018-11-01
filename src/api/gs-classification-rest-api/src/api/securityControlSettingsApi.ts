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

import { AlfrescoApiClient } from '../../../../alfrescoApiClient';
import { Error } from '../model/Error';
import { SecurityControlSettingBody } from '../model/SecurityControlSettingBody';
import { SecurityControlSettingEntry } from '../model/SecurityControlSettingEntry';

/**
 * Securitycontrolsettings service.
 * @module api/SecurityControlSettingsApi
 * @version 0.1.0
 */

/**
 * Constructs a new SecurityControlSettingsApi.
 * @alias :api/SecurityControlSettingsApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class SecurityControlSettingsApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Get security control setting value
     * Gets the value for a selected **securityControlSettingKey**.
     * @param {string} securityControlSettingKey The key for the security control setting. You can use one of the following settings: * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleSecurityControlSettingEntry} and HTTP response
     */
    getSecurityControlSetting = function(securityControlSettingKey) {
        let postBody = null;

        // verify the required parameter 'securityControlSettingKey' is set
        if (securityControlSettingKey === undefined || securityControlSettingKey === null) {
            throw new Error("Missing param 'securityControlSettingKey' in getSecurityControlSetting");
        }

        let pathParams = {
            'securityControlSettingKey': securityControlSettingKey
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = SecurityControlSettingEntry;

        return this.apiClient.callApi(
            '/security-control-settings/{securityControlSettingKey}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Update security control setting value
     * Updates the value of a selected **securityControlSettingKey**.
     * @param {string} securityControlSettingKey The key for the security control setting. You can use one of the following settings: * -declassificationTimeFrame- for the declassification time frame value set in alfresco-global.properties file
     * @param {SecurityControlSettingBody} securityControlSettingValue The new value for the security control setting. This can be a string or number, depending on the setting key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleSecurityControlSettingEntry} and HTTP response
     */
    updateSecurityControlSetting = function(securityControlSettingKey, securityControlSettingValue) {
        let postBody = securityControlSettingValue;

        // verify the required parameter 'securityControlSettingKey' is set
        if (securityControlSettingKey === undefined || securityControlSettingKey === null) {
            throw new Error("Missing param 'securityControlSettingKey' in updateSecurityControlSetting");
        }

        // verify the required parameter 'securityControlSettingValue' is set
        if (securityControlSettingValue === undefined || securityControlSettingValue === null) {
            throw new Error("Missing param 'securityControlSettingValue' in updateSecurityControlSetting");
        }

        let pathParams = {
            'securityControlSettingKey': securityControlSettingKey
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = SecurityControlSettingEntry;

        return this.apiClient.callApi(
            '/security-control-settings/{securityControlSettingKey}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

}
