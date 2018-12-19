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

/**
 * @deprecated 3.0.0
 */
export class AdminEndpointsApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the createBasicAuthConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createBasicAuthConfiguration
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     */
    createBasicAuthConfiguration(createRepresentation) {
        let postBody = createRepresentation;

        // verify the required parameter 'createRepresentation' is set
        if (createRepresentation === undefined || createRepresentation === null) {
            throw "Missing param 'createRepresentation' in createBasicAuthConfiguration";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the createEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createEndpointConfiguration
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     */
    createEndpointConfiguration(representation) {
        let postBody = representation;

        // verify the required parameter 'representation' is set
        if (representation === undefined || representation === null) {
            throw "Missing param 'representation' in createEndpointConfiguration";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getBasicAuthConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     */
    getBasicAuthConfiguration(basicAuthId, tenantId) {
        let postBody = null;

        // verify the required parameter 'basicAuthId' is set
        if (basicAuthId === undefined || basicAuthId === null) {
            throw "Missing param 'basicAuthId' in getBasicAuthConfiguration";
        }

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getBasicAuthConfiguration";
        }


        let pathParams = {
            'basicAuthId': basicAuthId
        };
        let queryParams = {
            'tenantId': tenantId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths/{basicAuthId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getBasicAuthConfigurations operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointBasicAuthRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfigurations
     * @param {Integer} tenantId tenantId
     */
    getBasicAuthConfigurations(tenantId) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getBasicAuthConfigurations";
        }


        let pathParams = {};
        let queryParams = {
            'tenantId': tenantId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     */
    getEndpointConfiguration(endpointConfigurationId, tenantId) {
        let postBody = null;

        // verify the required parameter 'endpointConfigurationId' is set
        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw "Missing param 'endpointConfigurationId' in getEndpointConfiguration";
        }

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getEndpointConfiguration";
        }


        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };
        let queryParams = {
            'tenantId': tenantId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getEndpointConfigurations operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointConfigurationRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfigurations
     * @param {Integer} tenantId tenantId
     */
    getEndpointConfigurations(tenantId) {
        let postBody = null;

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in getEndpointConfigurations";
        }


        let pathParams = {};
        let queryParams = {
            'tenantId': tenantId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the removeBasicAuthonfiguration operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeBasicAuthonfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     */
    removeBasicAuthonfiguration(basicAuthId, tenantId) {
        let postBody = null;

        // verify the required parameter 'basicAuthId' is set
        if (basicAuthId === undefined || basicAuthId === null) {
            throw "Missing param 'basicAuthId' in removeBasicAuthonfiguration";
        }

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in removeBasicAuthonfiguration";
        }


        let pathParams = {
            'basicAuthId': basicAuthId
        };
        let queryParams = {
            'tenantId': tenantId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths/{basicAuthId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the removeEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     */
    removeEndpointConfiguration(endpointConfigurationId, tenantId) {
        let postBody = null;

        // verify the required parameter 'endpointConfigurationId' is set
        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw "Missing param 'endpointConfigurationId' in removeEndpointConfiguration";
        }

        // verify the required parameter 'tenantId' is set
        if (tenantId === undefined || tenantId === null) {
            throw "Missing param 'tenantId' in removeEndpointConfiguration";
        }


        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };
        let queryParams = {
            'tenantId': tenantId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateBasicAuthConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     */
    updateBasicAuthConfiguration(basicAuthId, createRepresentation) {
        let postBody = createRepresentation;

        // verify the required parameter 'basicAuthId' is set
        if (basicAuthId === undefined || basicAuthId === null) {
            throw "Missing param 'basicAuthId' in updateBasicAuthConfiguration";
        }

        // verify the required parameter 'createRepresentation' is set
        if (createRepresentation === undefined || createRepresentation === null) {
            throw "Missing param 'createRepresentation' in updateBasicAuthConfiguration";
        }


        let pathParams = {
            'basicAuthId': basicAuthId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/basic-auths/{basicAuthId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     */
    updateEndpointConfiguration(endpointConfigurationId, representation) {
        let postBody = representation;

        // verify the required parameter 'endpointConfigurationId' is set
        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw "Missing param 'endpointConfigurationId' in updateEndpointConfiguration";
        }

        // verify the required parameter 'representation' is set
        if (representation === undefined || representation === null) {
            throw "Missing param 'representation' in updateEndpointConfiguration";
        }


        let pathParams = {
            'endpointConfigurationId': endpointConfigurationId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
