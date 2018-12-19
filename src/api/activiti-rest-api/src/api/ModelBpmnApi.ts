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

export class ModelBpmnApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the getHistoricProcessModelBpmn20Xml operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a previous process definition model to a BPMN 2.0 xml file
     * @param {Integer} processModelId processModelId
     * @param {Integer} processModelHistoryId processModelHistoryId
     */
    getHistoricProcessModelBpmn20Xml(processModelId, processModelHistoryId) {
        let postBody = null;

        // verify the required parameter 'processModelId' is set
        if (processModelId === undefined || processModelId === null) {
            throw "Missing param 'processModelId' in getHistoricProcessModelBpmn20Xml";
        }

        // verify the required parameter 'processModelHistoryId' is set
        if (processModelHistoryId === undefined || processModelHistoryId === null) {
            throw "Missing param 'processModelHistoryId' in getHistoricProcessModelBpmn20Xml";
        }


        let pathParams = {
            'processModelId': processModelId,
            'processModelHistoryId': processModelHistoryId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProcessModelBpmn20Xml operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a process definition model to a BPMN 2.0 xml file
     * @param {Integer} processModelId processModelId
     */
    getProcessModelBpmn20Xml(processModelId) {
        let postBody = null;

        // verify the required parameter 'processModelId' is set
        if (processModelId === undefined || processModelId === null) {
            throw "Missing param 'processModelId' in getProcessModelBpmn20Xml";
        }


        let pathParams = {
            'processModelId': processModelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/models/{processModelId}/bpmn20', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
