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

/**
* Adminendpoints service.
* @module AdminendpointsApi
*/
export class AdminendpointsApi extends BaseApi {
    /**
    * Add an endpoint authorization
    * 
    * 
    * @param createRepresentation createRepresentation
    */
    createBasicAuthConfigurationUsingPOST(createRepresentation: CreateEndpointBasicAuthRepresentation): Promise<EndpointBasicAuthRepresentation> {

        let postBody = createRepresentation;

        if (createRepresentation === undefined || createRepresentation === null) {
            throw new Error("Required param 'createRepresentation' in createBasicAuthConfigurationUsingPOST");
        }

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/basic-auths', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create an endpoint
        * 
        * 
        * @param representation representation
        */
    createEndpointConfigurationUsingPOST(representation: EndpointConfigurationRepresentation): Promise<EndpointConfigurationRepresentation> {

        let postBody = representation;

        if (representation === undefined || representation === null) {
            throw new Error("Required param 'representation' in createEndpointConfigurationUsingPOST");
        }

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/endpoints', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get an endpoint authorization
        * 
        * 
        * @param basicAuthId basicAuthId
        * @param tenantId tenantId
        */
    getBasicAuthConfigurationUsingGET(basicAuthId: number, tenantId: number): Promise<EndpointBasicAuthRepresentation> {

        let postBody = null;

        if (basicAuthId === undefined || basicAuthId === null) {
            throw new Error("Required param 'basicAuthId' in getBasicAuthConfigurationUsingGET");
        }

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getBasicAuthConfigurationUsingGET");
        }

        let pathParams = {
            'basicAuthId': basicAuthId
        };
        let queryParams = {
            'tenantId': tenantId,
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/basic-auths/{basicAuthId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List endpoint authorizations
        * 
        * 
        * @param tenantId tenantId
        */
    getBasicAuthConfigurationsUsingGET(tenantId: number): Promise<any> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getBasicAuthConfigurationsUsingGET");
        }

        let pathParams = {

        };
        let queryParams = {
            'tenantId': tenantId,
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/basic-auths', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get an endpoint
        * 
        * 
        * @param endpointConfigurationId endpointConfigurationId
        * @param tenantId tenantId
        */
    getEndpointConfigurationUsingGET1(endpointConfigurationId: number, tenantId: number): Promise<EndpointConfigurationRepresentation> {

        let postBody = null;

        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw new Error("Required param 'endpointConfigurationId' in getEndpointConfigurationUsingGET1");
        }

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getEndpointConfigurationUsingGET1");
        }

        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };
        let queryParams = {
            'tenantId': tenantId,
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/endpoints/{endpointConfigurationId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List endpoints
        * 
        * 
        * @param tenantId tenantId
        */
    getEndpointConfigurationsUsingGET1(tenantId: number): Promise<any> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getEndpointConfigurationsUsingGET1");
        }

        let pathParams = {

        };
        let queryParams = {
            'tenantId': tenantId,
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/endpoints', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete an endpoint authorization
        * 
        * 
        * @param basicAuthId basicAuthId
        * @param tenantId tenantId
        */
    removeBasicAuthonfigurationUsingDELETE(basicAuthId: number, tenantId: number): Promise<{}> {

        let postBody = null;

        if (basicAuthId === undefined || basicAuthId === null) {
            throw new Error("Required param 'basicAuthId' in removeBasicAuthonfigurationUsingDELETE");
        }

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in removeBasicAuthonfigurationUsingDELETE");
        }

        let pathParams = {
            'basicAuthId': basicAuthId
        };
        let queryParams = {
            'tenantId': tenantId,
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/basic-auths/{basicAuthId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete an endpoint
        * 
        * 
        * @param endpointConfigurationId endpointConfigurationId
        * @param tenantId tenantId
        */
    removeEndpointConfigurationUsingDELETE(endpointConfigurationId: number, tenantId: number): Promise<{}> {

        let postBody = null;

        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw new Error("Required param 'endpointConfigurationId' in removeEndpointConfigurationUsingDELETE");
        }

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in removeEndpointConfigurationUsingDELETE");
        }

        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };
        let queryParams = {
            'tenantId': tenantId,
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/endpoints/{endpointConfigurationId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update an endpoint authorization
        * 
        * 
        * @param basicAuthId basicAuthId
        * @param createRepresentation createRepresentation
        */
    updateBasicAuthConfigurationUsingPUT(basicAuthId: number, createRepresentation: CreateEndpointBasicAuthRepresentation): Promise<EndpointBasicAuthRepresentation> {

        let postBody = createRepresentation;

        if (basicAuthId === undefined || basicAuthId === null) {
            throw new Error("Required param 'basicAuthId' in updateBasicAuthConfigurationUsingPUT");
        }

        if (createRepresentation === undefined || createRepresentation === null) {
            throw new Error("Required param 'createRepresentation' in updateBasicAuthConfigurationUsingPUT");
        }

        let pathParams = {
            'basicAuthId': basicAuthId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/basic-auths/{basicAuthId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update an endpoint
        * 
        * 
        * @param endpointConfigurationId endpointConfigurationId
        * @param representation representation
        */
    updateEndpointConfigurationUsingPUT(endpointConfigurationId: number, representation: EndpointConfigurationRepresentation): Promise<EndpointConfigurationRepresentation> {

        let postBody = representation;

        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw new Error("Required param 'endpointConfigurationId' in updateEndpointConfigurationUsingPUT");
        }

        if (representation === undefined || representation === null) {
            throw new Error("Required param 'representation' in updateEndpointConfigurationUsingPUT");
        }

        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/endpoints/{endpointConfigurationId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
