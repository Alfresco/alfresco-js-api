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

export class ContentRenditionApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the getRawContent operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Raw Content
     * @param {Integer} contentId contentId
     * @param {String} renditionType renditionType
     */
    getRawContent(contentId, renditionType) {
        let postBody = null;

        // verify the required parameter 'contentId' is set
        if (contentId === undefined || contentId === null) {
            throw "Missing param 'contentId' in getRawContent";
        }

        // verify the required parameter 'renditionType' is set
        if (renditionType === undefined || renditionType === null) {
            throw "Missing param 'renditionType' in getRawContent";
        }


        let pathParams = {
            'contentId': contentId,
            'renditionType': renditionType
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/content/{contentId}/rendition/{renditionType}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
