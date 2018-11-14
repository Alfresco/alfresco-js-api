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

import { SearchRequest } from '../model/SearchRequest';
import { SearchApi as NewSearchApi } from '../../../../api-new/search-rest-api/api/search.api';
import { AlfrescoApi } from '../../../../alfrescoApi';

/**
 * Search service.
 * @module api/SearchApi
 * @version 1
 */

/**
 * Constructs a new SearchApi.
 * @alias module:api/SearchApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class SearchApi  {

    searchApi: NewSearchApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.searchApi = new NewSearchApi(alfrescoApi);
    }
    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/SearchApi~searchCallback
     * @param {string} error Error message, if any.
     * @param {module:model/ResultSetPaging} data The data returned by the service call.
     * @param {string} response The complete HTTP response.
     */

    /**
     * Searches Alfresco
     * @param {module:model/SearchRequest} SearchRequest Generic query API
     * @param {module:api/SearchApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultSetPaging}
     */
    search(searchRequest: SearchRequest): Promise<any> {
        return this.searchApi.search(<any>searchRequest);
    }
}
