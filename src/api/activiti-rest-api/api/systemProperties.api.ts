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

import { GlobalDateFormatRepresentation } from '../model/globalDateFormatRepresentation';
import { PasswordValidationConstraints } from '../model/passwordValidationConstraints';
import { SystemPropertiesRepresentation } from '../model/systemPropertiesRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Systemproperties service.
* @module SystempropertiesApi
*/
export class SystemPropertiesApi extends BaseApi {
    /**
    * Get global date format
    *
    *
    *
    * @param tenantId tenantId
    * @return Promise<GlobalDateFormatRepresentation>
    */
    getGlobalDateFormat(tenantId: number): Promise<GlobalDateFormatRepresentation> {
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'tenantId': tenantId
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
            '/api/enterprise/system/properties/global-date-format/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GlobalDateFormatRepresentation);
    }
    /**
        * Get password validation constraints
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<PasswordValidationConstraints>
        */
    getPasswordValidationConstraints(tenantId: number): Promise<PasswordValidationConstraints> {
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'tenantId': tenantId
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
            '/api/enterprise/system/properties/password-validation-constraints/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PasswordValidationConstraints);
    }
    /**
        * Retrieve system properties
        *
        * Typical value is AllowInvolveByEmail
        *
        * @return Promise<SystemPropertiesRepresentation>
        */
    getProperties(): Promise<SystemPropertiesRepresentation> {

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
            '/api/enterprise/system/properties', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SystemPropertiesRepresentation);
    }
    /**
        * Get involved users who can edit forms
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<boolean>
        */
    involvedUsersCanEditForms(tenantId: number): Promise<boolean> {
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'tenantId': tenantId
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
            '/api/enterprise/system/properties/involved-users-can-edit-forms/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
