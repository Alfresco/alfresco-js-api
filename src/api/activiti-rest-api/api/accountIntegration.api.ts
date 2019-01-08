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

import { ResultListDataRepresentationAccountRepresentation } from '../model/resultListDataRepresentationAccountRepresentation';
import { BaseApi } from './base.api';

/**
* Accountintegration service.
* @module AccountintegrationApi
*/
export class AccountIntegrationApi extends BaseApi {
    /**
    * Retrieve external account information
    *
    * Accounts are used to integrate with third party apps and clients
    *
    * @return Promise<ResultListDataRepresentationAccountRepresentation>
    */
    getAccounts(): Promise<ResultListDataRepresentationAccountRepresentation> {

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
            '/api/enterprise/account/integration', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAccountRepresentation);
    }

}
