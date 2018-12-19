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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { ProcessClient } from '../../../../processClient';

export class AdminTenantsApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the createTenant operation.
     * @param {String} error Error message, if any.
     * @param {module:model/LightTenantRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new tenant
     * Tenant manager only
     * @param {module:model/CreateTenantRepresentation} createTenantRepresentation createTenantRepresentation
     * data is of type: {module:model/LightTenantRepresentation}
     */
    createTenant(createTenantRepresentation) {
        let postBody = createTenantRepresentation;

        // verify the required parameter 'createTenantRepresentation' is set
        if (createTenantRepresentation === undefined || createTenantRepresentation === null) {
            throw "Missing param 'createTenantRepresentation' in createTenant";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the deleteTenant operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tenant
     * @param {Integer} tenantId tenantId
     */
    deleteTenant(tenantId) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in deleteTenant";
        }


        let pathParams = {
            'tenantId': tenantId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getTenantEvents operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TenantEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tenant events
     * @param {Integer} tenantId tenantId
     * data is of type: {Array.<module:model/TenantEvent>}
     */
    getTenantEvents(tenantId) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getTenantEvents";
        }


        let pathParams = {
            'tenantId': tenantId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}/events', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getTenantLogo operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tenant logo
     * @param {Integer} tenantId tenantId
     */
    getTenantLogo(tenantId) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getTenantLogo";
        }


        let pathParams = {
            'tenantId': tenantId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}/logo', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getTenant operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TenantRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tenant details
     * @param {Integer} tenantId tenantId
     * data is of type: {module:model/TenantRepresentation}
     */
    getTenant(tenantId) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getTenant";
        }


        let pathParams = {
            'tenantId': tenantId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getTenants operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LightTenantRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tenants
     * Tenant manager only
     * data is of type: {Array.<module:model/LightTenantRepresentation>}
     */
    getTenants() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the update operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TenantRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a tenant
     * @param {Integer} tenantId tenantId
     * @param {module:model/CreateTenantRepresentation} createTenantRepresentation createTenantRepresentation
     * data is of type: {module:model/TenantRepresentation}
     */
    update(tenantId, createTenantRepresentation) {
        let postBody = createTenantRepresentation;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in update";
        }

        // verify the required parameter 'createTenantRepresentation' is set
        if (createTenantRepresentation === undefined || createTenantRepresentation === null) {
            throw "Missing param 'createTenantRepresentation' in update";
        }


        let pathParams = {
            'tenantId': tenantId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the uploadTenantLogo operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ImageUploadRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update tenant logo
     * @param {Integer} tenantId tenantId
     * @param {File} file file
     * data is of type: {module:model/ImageUploadRepresentation}
     */
    uploadTenantLogo(tenantId, file) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in uploadTenantLogo";
        }

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in uploadTenantLogo";
        }


        let pathParams = {
            'tenantId': tenantId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': file
        };


        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}/logo', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
