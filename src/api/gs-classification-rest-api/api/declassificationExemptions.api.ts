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

import { DeclassificationExemptionBody } from '../model/declassificationExemptionBody';
import { DeclassificationExemptionEntry } from '../model/declassificationExemptionEntry';
import { DeclassificationExemptionsPaging } from '../model/declassificationExemptionsPaging';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Declassificationexemptions service.
* @module DeclassificationExemptionsApi
*/
export class DeclassificationExemptionsApi extends BaseApi {
    /**
    * Create a declassification exemption
    *
    * Creates a new declassification exemption.

**Note:** You can create more than one exemption by specifying a list of exemptions in the JSON body.
For example, the following JSON body creates two declassification exemptions:
JSON
[
  {
    \"code\":\"My Code1\",
    \"description\":\"My Description1\"
  },
  {
    \"code\":\"My Code2\",
    \"description\":\"My Description2\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}

    *
    * @param declassificationExemption Declassification exemption
    * @return Promise<DeclassificationExemptionEntry>
    */
    createDeclassificationExemption(declassificationExemption: DeclassificationExemptionBody): Promise<DeclassificationExemptionEntry> {
        throwIfNotDefined(declassificationExemption, 'declassificationExemption');

        let postBody = declassificationExemption;

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
            '/declassification-exemptions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, DeclassificationExemptionEntry);
    }
    /**
        * Delete a declassification exemption
        *
        * Deletes the declassification exemption with id **declassificationExemptionId**. You can't delete a classification exemption that is being used to classify content.
        *
        * @param declassificationExemptionId The identifier for the declassification exemption
        * @return Promise<{}>
        */
    deleteDeclassificationExemption(declassificationExemptionId: string): Promise<any> {
        throwIfNotDefined(declassificationExemptionId, 'declassificationExemptionId');

        let postBody = null;

        let pathParams = {
            'declassificationExemptionId': declassificationExemptionId
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
            '/declassification-exemptions/{declassificationExemptionId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List all declassification exemptions
        *
        * Gets all declassification exemptions.
        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @return Promise<DeclassificationExemptionsPaging>
        */
    listDeclassificationExemptions(opts?: any): Promise<DeclassificationExemptionsPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/declassification-exemptions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, DeclassificationExemptionsPaging);
    }
    /**
        * Get declassification exemption information
        *
        * Gets the declassification exemption with id **declassificationExemptionId**.
        *
        * @param declassificationExemptionId The identifier for the declassification exemption
        * @return Promise<DeclassificationExemptionEntry>
        */
    showDeclassificationExemptionById(declassificationExemptionId: string): Promise<DeclassificationExemptionEntry> {
        throwIfNotDefined(declassificationExemptionId, 'declassificationExemptionId');

        let postBody = null;

        let pathParams = {
            'declassificationExemptionId': declassificationExemptionId
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
            '/declassification-exemptions/{declassificationExemptionId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, DeclassificationExemptionEntry);
    }
    /**
        * Update a declassification exemption
        *
        * Updates the declassification exemption with id **declassificationExemptionId**. For example, you can rename a declassification exemption.
        *
        * @param declassificationExemptionId The identifier for the declassification exemption
        * @param declassificationExemption Declassification exemption
        * @return Promise<DeclassificationExemptionEntry>
        */
    updateDeclassificationExemption(declassificationExemptionId: string, declassificationExemption: DeclassificationExemptionBody): Promise<DeclassificationExemptionEntry> {
        throwIfNotDefined(declassificationExemptionId, 'declassificationExemptionId');
        throwIfNotDefined(declassificationExemption, 'declassificationExemption');

        let postBody = declassificationExemption;

        let pathParams = {
            'declassificationExemptionId': declassificationExemptionId
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
            '/declassification-exemptions/{declassificationExemptionId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, DeclassificationExemptionEntry);
    }

}
