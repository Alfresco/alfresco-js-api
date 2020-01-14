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

import { ProcessScopeRepresentation } from '../model/processScopeRepresentation';
import { ProcessScopesRequestRepresentation } from '../model/processScopesRequestRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Processscopes service.
* @module ProcessscopesApi
*/
export class ProcessScopesApi extends BaseApi {
    /**
    * List runtime process scopes
    *
    *
    *
    * @param processScopesRequest processScopesRequest
    * @return Promise<ProcessScopeRepresentation>
    */
    getRuntimeProcessScopes(processScopesRequest: ProcessScopesRequestRepresentation): Promise<ProcessScopeRepresentation> {
        throwIfNotDefined(processScopesRequest, 'processScopesRequest');

        let postBody = processScopesRequest;

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
            '/api/enterprise/process-scopes', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessScopeRepresentation);
    }

}
