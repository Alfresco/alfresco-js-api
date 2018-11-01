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

import { EndpointConfigurationRepresentation } from '../model/endpointConfigurationRepresentation';
import { BaseApi } from './base.api';

/**
* Endpoints service.
* @module EndpointsApi
*/
export class EndpointsApi extends BaseApi {
    /**
    * Get an endpoint configuration
    * 
    * 
    * @param endpointConfigurationId endpointConfigurationId
    */
    getEndpointConfigurationUsingGET(endpointConfigurationId: number): Promise<EndpointConfigurationRepresentation> {

        let postBody = null;

        if (endpointConfigurationId === undefined || endpointConfigurationId === null) {
            throw new Error("Required param 'endpointConfigurationId' in getEndpointConfigurationUsingGET");
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
            '/enterprise/editor/endpoints/{endpointConfigurationId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List endpoint configurations
        * 
        * 
        */
    getEndpointConfigurationsUsingGET(): Promise<any> {

        let postBody = null;

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
            '/enterprise/editor/endpoints', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
