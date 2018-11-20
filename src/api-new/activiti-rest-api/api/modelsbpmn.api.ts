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

/**
* Modelsbpmn service.
* @module ModelsbpmnApi
*/
export class ModelsbpmnApi extends BaseApi {
    /**
    * Export a historic version of a process definition as BPMN 2.0 XML
    *
    *
    *
    * @param processModelId processModelId
    * @param processModelHistoryId processModelHistoryId
    * @return Promise<{}>
    */
    getHistoricProcessModelBpmn20XmlUsingGET(processModelId: number, processModelHistoryId: number): Promise<{}> {

        let postBody = null;

        if (processModelId === undefined || processModelId === null) {
            throw new Error("Required param 'processModelId' in getHistoricProcessModelBpmn20XmlUsingGET");
        }

        if (processModelHistoryId === undefined || processModelHistoryId === null) {
            throw new Error("Required param 'processModelHistoryId' in getHistoricProcessModelBpmn20XmlUsingGET");
        }

        let pathParams = {
            'processModelId': processModelId, 'processModelHistoryId': processModelHistoryId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/xml'];

        return this.apiClient.callApi(
            '/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Export a process definition as BPMN 2.0 XML
        *
        *
        *
        * @param processModelId processModelId
        * @return Promise<{}>
        */
    getProcessModelBpmn20XmlUsingGET(processModelId: number): Promise<{}> {

        let postBody = null;

        if (processModelId === undefined || processModelId === null) {
            throw new Error("Required param 'processModelId' in getProcessModelBpmn20XmlUsingGET");
        }

        let pathParams = {
            'processModelId': processModelId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/xml'];

        return this.apiClient.callApi(
            '/enterprise/models/{processModelId}/bpmn20', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
