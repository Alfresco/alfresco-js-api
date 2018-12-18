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

import { ModelRepresentation } from '../model/modelRepresentation';
import { ResultListDataRepresentationModelRepresentation } from '../model/resultListDataRepresentationModelRepresentation';
import { BaseApi } from './base.api';

/**
* Modelshistory service.
* @module ModelshistoryApi
*/
export class ModelshistoryApi extends BaseApi {
    /**
    * List a model's historic versions
    * 
    * 
    * 
    * @param modelId modelId
    * @param opts Optional parameters
    * @param opts.includeLatestVersion includeLatestVersion
    * @return Promise<ResultListDataRepresentationModelRepresentation>
    */
    getModelHistoryCollection(modelId: number, opts?: any): Promise<ResultListDataRepresentationModelRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (modelId === undefined || modelId === null) {
            throw new Error("Required param 'modelId' in getModelHistoryCollectionUsingGET");
        }

        let pathParams = {
            'modelId': modelId
        };

        let queryParams = {
            'includeLatestVersion': opts['includeLatestVersion']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/models/{modelId}/history', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a historic version of a model
        * 
        * 
        * 
        * @param modelId modelId
        * @param modelHistoryId modelHistoryId
        * @return Promise<ModelRepresentation>
        */
    getProcessModelHistory(modelId: number, modelHistoryId: number): Promise<ModelRepresentation> {

        let postBody = null;

        if (modelId === undefined || modelId === null) {
            throw new Error("Required param 'modelId' in getProcessModelHistoryUsingGET");
        }

        if (modelHistoryId === undefined || modelHistoryId === null) {
            throw new Error("Required param 'modelHistoryId' in getProcessModelHistoryUsingGET");
        }

        let pathParams = {
            'modelId': modelId, 'modelHistoryId': modelHistoryId
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
            '/enterprise/models/{modelId}/history/{modelHistoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
