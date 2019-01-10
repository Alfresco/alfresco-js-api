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

import { ResultListDataRepresentationDataSourceRepresentation } from '../model/resultListDataRepresentationDataSourceRepresentation';
import { BaseApi } from './base.api';

/**
* Datasources service.
* @module DatasourcesApi
*/
export class DataSourcesApi extends BaseApi {
    /**
    * Get data sources
    *
    *
    *
    * @param opts Optional parameters
    * @param opts.tenantId tenantId
    * @return Promise<ResultListDataRepresentationDataSourceRepresentation>
    */
    getDataSources(opts?: any): Promise<ResultListDataRepresentationDataSourceRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'tenantId': opts['tenantId']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/editor/data-sources', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationDataSourceRepresentation);
    }

}
