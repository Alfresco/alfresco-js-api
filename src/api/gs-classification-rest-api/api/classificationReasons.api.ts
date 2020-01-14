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

import { ClassificationReasonBody } from '../model/classificationReasonBody';
import { ClassificationReasonEntry } from '../model/classificationReasonEntry';
import { ClassificationReasonsPaging } from '../model/classificationReasonsPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Classificationreasons service.
* @module ClassificationReasonsApi
*/
export class ClassificationReasonsApi extends BaseApi {
    /**
    * Create a classification reason
    *
    * Creates a new classification reason.

**Note:** You can create more than one reason by specifying a list of reasons in the JSON body.
For example, the following JSON body creates two classification reasons:
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
    * @param classificationReason Classification reason
    * @return Promise<ClassificationReasonEntry>
    */
    createClassificationReason(classificationReason: ClassificationReasonBody): Promise<ClassificationReasonEntry> {
        throwIfNotDefined(classificationReason, 'classificationReason');

        let postBody = classificationReason;

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
            '/classification-reasons', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ClassificationReasonEntry);
    }
    /**
        * Delete a classification reason
        *
        * Deletes the classification reason  **classificationReasonId**. You can't delete a classification reason that is being used to classify content. There must be at least one classification reason.
        *
        * @param classificationReasonId The identifier for the classification reason
        * @return Promise<{}>
        */
    deleteClassificationReason(classificationReasonId: string): Promise<any> {
        throwIfNotDefined(classificationReasonId, 'classificationReasonId');

        let postBody = null;

        let pathParams = {
            'classificationReasonId': classificationReasonId
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
            '/classification-reasons/{classificationReasonId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List all classification reasons
        *
        * Gets all classification reasons.
        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
        * @param opts.maxItems The maximum number of items to return in the list.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<ClassificationReasonsPaging>
        */
    listClassificationReasons(opts?: any): Promise<ClassificationReasonsPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/classification-reasons', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ClassificationReasonsPaging);
    }
    /**
        * Get classification reason information
        *
        * Gets the classification reason  **classificationReasonId**.
        *
        * @param classificationReasonId The identifier for the classification reason
        * @return Promise<ClassificationReasonEntry>
        */
    showClassificationReasonById(classificationReasonId: string): Promise<ClassificationReasonEntry> {
        throwIfNotDefined(classificationReasonId, 'classificationReasonId');

        let postBody = null;

        let pathParams = {
            'classificationReasonId': classificationReasonId
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
            '/classification-reasons/{classificationReasonId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ClassificationReasonEntry);
    }
    /**
        * Update a classification reason
        *
        * Updates the classification reason with id **classificationReasonId**. For example, you can change a classification reason code or description.
        *
        * @param classificationReasonId The identifier for the classification reason
        * @param classificationReason Classification reason
        * @return Promise<ClassificationReasonEntry>
        */
    updateClassificationReason(classificationReasonId: string, classificationReason: ClassificationReasonBody): Promise<ClassificationReasonEntry> {
        throwIfNotDefined(classificationReasonId, 'classificationReasonId');
        throwIfNotDefined(classificationReason, 'classificationReason');

        let postBody = classificationReason;

        let pathParams = {
            'classificationReasonId': classificationReasonId
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
            '/classification-reasons/{classificationReasonId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ClassificationReasonEntry);
    }

}
