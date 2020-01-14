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

import { CreateEndpointBasicAuthRepresentation } from '../model/createEndpointBasicAuthRepresentation';
import { EndpointBasicAuthRepresentation } from '../model/endpointBasicAuthRepresentation';
import { EndpointConfigurationRepresentation } from '../model/endpointConfigurationRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Adminendpoints service.
* @module AdminendpointsApi
*/
export class AdminEndpointsApi extends BaseApi {
    /**
    * Add an endpoint authorization
    *
    *
    *
    * @param createRepresentation createRepresentation
    * @return Promise<EndpointBasicAuthRepresentation>
    */
    createBasicAuthConfiguration(createRepresentation: CreateEndpointBasicAuthRepresentation): Promise<EndpointBasicAuthRepresentation> {
        throwIfNotDefined(createRepresentation, 'createRepresentation');
        let postBody = createRepresentation;

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
            '/api/enterprise/admin/basic-auths', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointBasicAuthRepresentation);
    }
    /**
        * Create an endpoint
        *
        *
        *
        * @param representation representation
        * @return Promise<EndpointConfigurationRepresentation>
        */
    createEndpointConfiguration(representation: EndpointConfigurationRepresentation): Promise<EndpointConfigurationRepresentation> {
        throwIfNotDefined(representation, 'representation');
        let postBody = representation;

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
            '/api/enterprise/admin/endpoints', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointConfigurationRepresentation);
    }
    /**
        * Get an endpoint authorization
        *
        *
        *
        * @param basicAuthId basicAuthId
        * @param tenantId tenantId
        * @return Promise<EndpointBasicAuthRepresentation>
        */
    getBasicAuthConfiguration(basicAuthId: number, tenantId: number): Promise<EndpointBasicAuthRepresentation> {
        throwIfNotDefined(basicAuthId, 'basicAuthId');
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'basicAuthId': basicAuthId
        };

        let queryParams = {
            'tenantId': tenantId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths/{basicAuthId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointBasicAuthRepresentation);
    }
    /**
        * List endpoint authorizations
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<EndpointBasicAuthRepresentation>
        */
    getBasicAuthConfigurations(tenantId: number): Promise<EndpointBasicAuthRepresentation> {
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'tenantId': tenantId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointBasicAuthRepresentation);
    }
    /**
        * Get an endpoint
        *
        *
        *
        * @param endpointConfigurationId endpointConfigurationId
        * @param tenantId tenantId
        * @return Promise<EndpointConfigurationRepresentation>
        */
    getEndpointConfiguration(endpointConfigurationId: number, tenantId: number): Promise<EndpointConfigurationRepresentation> {
        throwIfNotDefined(endpointConfigurationId, 'endpointConfigurationId');
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };

        let queryParams = {
            'tenantId': tenantId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointConfigurationRepresentation);
    }
    /**
        * List endpoints
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<EndpointConfigurationRepresentation>
        */
    getEndpointConfigurations(tenantId: number): Promise<EndpointConfigurationRepresentation> {
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'tenantId': tenantId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointConfigurationRepresentation);
    }
    /**
        * Delete an endpoint authorization
        *
        *
        *
        * @param basicAuthId basicAuthId
        * @param tenantId tenantId
        * @return Promise<{}>
        */
    removeBasicAuthConfiguration(basicAuthId: number, tenantId: number): Promise<any> {
        throwIfNotDefined(basicAuthId, 'basicAuthId');
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'basicAuthId': basicAuthId
        };

        let queryParams = {
            'tenantId': tenantId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths/{basicAuthId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete an endpoint
        *
        *
        *
        * @param endpointConfigurationId endpointConfigurationId
        * @param tenantId tenantId
        * @return Promise<{}>
        */
    removeEndpointConfiguration(endpointConfigurationId: number, tenantId: number): Promise<any> {
        throwIfNotDefined(endpointConfigurationId, 'endpointConfigurationId');
        throwIfNotDefined(tenantId, 'tenantId');

        let postBody = null;

        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };

        let queryParams = {
            'tenantId': tenantId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update an endpoint authorization
        *
        *
        *
        * @param basicAuthId basicAuthId
        * @param createRepresentation createRepresentation
        * @return Promise<EndpointBasicAuthRepresentation>
        */
    updateBasicAuthConfiguration(basicAuthId: number, createRepresentation: CreateEndpointBasicAuthRepresentation): Promise<EndpointBasicAuthRepresentation> {
        throwIfNotDefined(basicAuthId, 'basicAuthId');
        throwIfNotDefined(createRepresentation, 'createRepresentation');

        let postBody = createRepresentation;

        let pathParams = {
            'basicAuthId': basicAuthId
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
            '/api/enterprise/admin/basic-auths/{basicAuthId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointBasicAuthRepresentation);
    }
    /**
        * Update an endpoint
        *
        *
        *
        * @param endpointConfigurationId endpointConfigurationId
        * @param representation representation
        * @return Promise<EndpointConfigurationRepresentation>
        */
    updateEndpointConfiguration(endpointConfigurationId: number, representation: EndpointConfigurationRepresentation): Promise<EndpointConfigurationRepresentation> {
        throwIfNotDefined(endpointConfigurationId, 'endpointConfigurationId');
        throwIfNotDefined(representation, 'representation');

        let postBody = representation;

        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
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
            '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointConfigurationRepresentation);
    }

}
