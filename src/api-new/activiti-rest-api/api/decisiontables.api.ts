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

import { JsonNode } from '../model/jsonNode';
import { ResultListDataRepresentationRuntimeDecisionTableRepresentation } from '../model/resultListDataRepresentationRuntimeDecisionTableRepresentation';
import { RuntimeDecisionTableRepresentation } from '../model/runtimeDecisionTableRepresentation';
import { BaseApi } from './base.api';

/**
* Decisiontables service.
* @module DecisiontablesApi
*/
export class DecisiontablesApi extends BaseApi {
    /**
    * Get definition for a decision table
    * 
    * 
    * 
    * @param  decisionTableId decisionTableId
    * @return Promise<JsonNode>
    */
    getDecisionTableEditorJsonUsingGET(decisionTableId: number): Promise<JsonNode> {

        let postBody = null;

        if (decisionTableId === undefined || decisionTableId === null) {
            throw new Error("Required param 'decisionTableId' in getDecisionTableEditorJsonUsingGET");
        }

        let pathParams = {
            'decisionTableId': decisionTableId
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
            '/enterprise/decisions/decision-tables/{decisionTableId}/editorJson', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a decision table
        * 
        * 
        * 
        * @param  decisionTableId decisionTableId
        * @return Promise<RuntimeDecisionTableRepresentation>
        */
    getDecisionTableUsingGET(decisionTableId: number): Promise<RuntimeDecisionTableRepresentation> {

        let postBody = null;

        if (decisionTableId === undefined || decisionTableId === null) {
            throw new Error("Required param 'decisionTableId' in getDecisionTableUsingGET");
        }

        let pathParams = {
            'decisionTableId': decisionTableId
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
            '/enterprise/decisions/decision-tables/{decisionTableId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query decision tables
        * 
        * 
        * 
        * @param Object opts Optional parameters
        * @param  opts.nameLike nameLike
        * @param  opts.keyLike keyLike
        * @param  opts.tenantIdLike tenantIdLike
        * @param  opts.deploymentId deploymentId
        * @param  opts.sort sort
        * @param  opts.order order
        * @param  opts.start start
        * @param  opts.size size
        * @return Promise<ResultListDataRepresentationRuntimeDecisionTableRepresentation>
        */
    getDecisionTablesUsingGET(opts: any): Promise<ResultListDataRepresentationRuntimeDecisionTableRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'nameLike': opts['nameLike'],
            'keyLike': opts['keyLike'],
            'tenantIdLike': opts['tenantIdLike'],
            'deploymentId': opts['deploymentId'],
            'sort': opts['sort'],
            'order': opts['order'],
            'start': opts['start'],
            'size': opts['size']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/decisions/decision-tables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
