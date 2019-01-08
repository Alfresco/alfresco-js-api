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

import { ResultListDataRepresentationGoogleDriveContent } from '../model/resultListDataRepresentationGoogleDriveContent';
import { BaseApi } from './base.api';

/**
* Integrationdrive service.
* @module IntegrationdriveApi
*/
export class IntegrationDriveApi extends BaseApi {
    /**
    * Drive Authorization
    *
    * Returns Drive OAuth HTML Page
    *
    * @return Promise<{}>
    */
    confirmAuthorisation(): Promise<any> {

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
        let accepts = ['text/html'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/google-drive/confirm-auth-request', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List files and folders
        *
        *
        *
        * @param opts Optional parameters
        * @param opts.filter filter
        * @param opts.parent parent
        * @param opts.currentFolderOnly currentFolderOnly
        * @return Promise<ResultListDataRepresentationGoogleDriveContent>
        */
    getFiles(opts?: any): Promise<ResultListDataRepresentationGoogleDriveContent> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'filter': opts['filter'],
            'parent': opts['parent'],
            'currentFolderOnly': opts['currentFolderOnly']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/google-drive/files', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationGoogleDriveContent);
    }

}
