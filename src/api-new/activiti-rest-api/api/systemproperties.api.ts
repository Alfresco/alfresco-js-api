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

/**
* Systemproperties service.
* @module SystempropertiesApi
*/
export class SystempropertiesApi extends BaseApi {
    /**
    * Get global date format
    *
    *
    *
    * @param tenantId tenantId
    * @return Promise<GlobalDateFormatRepresentation>
    */
    getGlobalDateFormatUsingGET(tenantId: number): Promise<GlobalDateFormatRepresentation> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getGlobalDateFormatUsingGET");
        }

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
            '/enterprise/system/properties/global-date-format/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get password validation constraints
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<PasswordValidationConstraints>
        */
    getPasswordValidationConstraintsUsingGET(tenantId: number): Promise<PasswordValidationConstraints> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getPasswordValidationConstraintsUsingGET");
        }

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
            '/enterprise/system/properties/password-validation-constraints/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Retrieve system properties
        *
        * Typical value is AllowInvolveByEmail
        *
        * @return Promise<SystemPropertiesRepresentation>
        */
    getPropertiesUsingGET(): Promise<SystemPropertiesRepresentation> {

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
            '/enterprise/system/properties', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get involved users who can edit forms
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<boolean>
        */
    involvedUsersCanEditFormsUsingGET(tenantId: number): Promise<boolean> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in involvedUsersCanEditFormsUsingGET");
        }

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
            '/enterprise/system/properties/involved-users-can-edit-forms/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
