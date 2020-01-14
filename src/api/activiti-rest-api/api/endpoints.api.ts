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
import { throwIfNotDefined } from '../../../assert';

/**
* Endpoints service.
* @module EndpointsApi
*/
export class EndpointsApi extends BaseApi {
    /**
    * Get an endpoint configuration
    *
    *
    *
    * @param endpointConfigurationId endpointConfigurationId
    * @return Promise<EndpointConfigurationRepresentation>
    */
    getEndpointConfiguration(endpointConfigurationId: number): Promise<EndpointConfigurationRepresentation> {
        throwIfNotDefined(endpointConfigurationId, 'endpointConfigurationId');

        let postBody = null;

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
            '/api/enterprise/editor/endpoints/{endpointConfigurationId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointConfigurationRepresentation);
    }
    /**
        * List endpoint configurations
        *
        *
        *
        * @return Promise<EndpointConfigurationRepresentation>
        */
    getEndpointConfigurations(): Promise<EndpointConfigurationRepresentation> {

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
            '/api/enterprise/editor/endpoints', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, EndpointConfigurationRepresentation);
    }

}
