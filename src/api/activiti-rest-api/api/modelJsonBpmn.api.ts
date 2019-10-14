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

import { BaseApi } from './base.api';

export class ModelJsonBpmnApi extends BaseApi {

    /**
     * Function to receive the result of the getHistoricEditorDisplayJsonClient operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a previous process definition model to a JSON
     * @param {Integer} processModelId processModelId
     * @param {Integer} processModelHistoryId processModelHistoryId
     */
    getHistoricEditorDisplayJsonClient(processModelId: number, processModelHistoryId: number) {
        let postBody = null;

        // verify the required parameter 'processModelId' is set
        if (processModelId === undefined || processModelId === null) {
            throw "Missing param 'processModelId' in getHistoricEditorDisplayJsonClient";
        }

        // verify the required parameter 'processModelHistoryId' is set
        if (processModelHistoryId === undefined || processModelHistoryId === null) {
            throw "Missing param 'processModelHistoryId' in getHistoricEditorDisplayJsonClient";
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


        return this.apiClient.callApi(
            '/app/rest/models/{processModelId}/history/{processModelHistoryId}/model-json', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to receive the result of the getEditorDisplayJsonClient operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a process definition model to a JSON
     * @param {Integer} processModelId processModelId
     */
    getEditorDisplayJsonClient(processModelId: number) {
        let postBody = null;

        // verify the required parameter 'processModelId' is set
        if (processModelId === undefined || processModelId === null) {
            throw "Missing param 'processModelId' in getEditorDisplayJsonClient";
        }


        let pathParams = {
            'processModelId': processModelId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/models/{processModelId}/model-json', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to receive the result of the getModelJSONForProcessDefinition operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} processDefinitionId processDefinitionId
     */
    getModelJSON(processDefinitionId: string) {
        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw "Missing param 'processDefinitionId' in getProcessDefinitionModel";
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/process-definitions/{processDefinitionId}/model-json', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to receive the result of the getModelHistoryJSON operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} processInstanceId processInstanceId
     */
    getModelJSONForProcessDefinition(processInstanceId: string) {
        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processInstanceId' in getProcessInstancesModel";
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/process-instances/{processInstanceId}/model-json', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }
}
