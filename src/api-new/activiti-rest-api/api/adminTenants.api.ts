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

import { CreateTenantRepresentation } from '../model/createTenantRepresentation';
import { ImageUploadRepresentation } from '../model/imageUploadRepresentation';
import { LightTenantRepresentation } from '../model/lightTenantRepresentation';
import { TenantEvent } from '../model/tenantEvent';
import { TenantRepresentation } from '../model/tenantRepresentation';
import { BaseApi } from './base.api';

/**
* Admintenants service.
* @module AdmintenantsApi
*/
export class AdminTenantsApi extends BaseApi {
    /**
    * Create a tenant
    *
    * Only a tenant manager may access this endpoint
    *
    * @param createTenantRepresentation createTenantRepresentation
    * @return Promise<LightTenantRepresentation>
    */
    createTenant(createTenantRepresentation: CreateTenantRepresentation): Promise<LightTenantRepresentation> {

        let postBody = createTenantRepresentation;

        if (createTenantRepresentation === undefined || createTenantRepresentation === null) {
            throw new Error("Required param 'createTenantRepresentation' in createTenant");
        }

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
            '/api/enterprise/admin/tenants', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, LightTenantRepresentation)
    }
    /**
        * Delete a tenant
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<{}>
        */
    deleteTenant(tenantId: number): Promise<any> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in deleteTenant");
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
            '/api/enterprise/admin/tenants/{tenantId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get tenant events
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<TenantEvent>
        */
    getTenantEvents(tenantId: number): Promise<TenantEvent> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getTenantEvents");
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
            '/api/enterprise/admin/tenants/{tenantId}/events', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TenantEvent)
    }
    /**
        * Get a tenant's logo
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<{}>
        */
    getTenantLogo(tenantId: number): Promise<any> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getTenantLogo");
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
            '/api/enterprise/admin/tenants/{tenantId}/logo', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a tenant
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<TenantRepresentation>
        */
    getTenant(tenantId: number): Promise<TenantRepresentation> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getTenant");
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
            '/api/enterprise/admin/tenants/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TenantRepresentation)
    }
    /**
        * List tenants
        *
        * Only a tenant manager may access this endpoint
        *
        * @return Promise<LightTenantRepresentation>
        */
    getTenants(): Promise<LightTenantRepresentation> {

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
            '/api/enterprise/admin/tenants', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, LightTenantRepresentation)
    }
    /**
        * Update a tenant
        *
        *
        *
        * @param tenantId tenantId
        * @param createTenantRepresentation createTenantRepresentation
        * @return Promise<TenantRepresentation>
        */
    update(tenantId: number, createTenantRepresentation: CreateTenantRepresentation): Promise<TenantRepresentation> {

        let postBody = createTenantRepresentation;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in update");
        }

        if (createTenantRepresentation === undefined || createTenantRepresentation === null) {
            throw new Error("Required param 'createTenantRepresentation' in update");
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
            '/api/enterprise/admin/tenants/{tenantId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TenantRepresentation)
    }
    /**
        * Update a tenant's logo
        *
        *
        *
        * @param tenantId tenantId
        * @param file file
        * @return Promise<ImageUploadRepresentation>
        */
    uploadTenantLogo(tenantId: number, file: Blob): Promise<ImageUploadRepresentation> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in uploadTenantLogo");
        }

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in uploadTenantLogo");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/tenants/{tenantId}/logo', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ImageUploadRepresentation)
    }

}
