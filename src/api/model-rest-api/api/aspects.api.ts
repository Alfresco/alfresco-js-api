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

import { AspectEntry } from '../model/aspectEntry';
import { AspectPaging } from '../model/aspectPaging';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';
import { buildCollectionParam } from '../../../alfrescoApiClient';

/**
* Aspects service.
* @module AspectsApi
*/
export class AspectsApi extends BaseApi {
    /**
    * Get an aspect
    *
    * **Note:** This is available in Alfresco 7.0.0 and newer versions.
Get information for aspect **aspectId**.

    *
    * @param aspectId The Qname of an aspect(prefix:name) e.g 'cm:title'
    * @return Promise<AspectEntry>
    */
    getAspect(aspectId: string): Promise<AspectEntry> {

        throwIfNotDefined(aspectId, 'aspectId');

        const postBody: null = null;

        const pathParams = {
            'aspectId': aspectId
        };

        const queryParams = {
        };

        const headerParams = {

        };
        const formParams = {
        };

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/aspects/{aspectId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , AspectEntry);
    }
/**
    * List aspects
    *
    * **Note:** This is available in Alfresco 7.0.0 and newer versions.

Gets a list of aspects from the data dictionary. The System aspects will be ignored by default.
JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 0,
      \"hasMoreItems\": true,
      \"totalItems\": 0,
      \"skipCount\": 0,
      \"maxItems\": 0
    },
    \"entries\": [
      {
        \"entry\": {
          \"associations\": [],
          \"mandatoryAspects\": [],
          \"includedInSupertypeQuery\": true,
          \"description\": \"Titled\",
          \"isContainer\": false,
          \"model\": {
              \"id\": \"cm:contentmodel\",
              \"author\": \"Alfresco\",
              \"description\": \"Alfresco Content Domain Model\",
              \"namespaceUri\": \"http://www.alfresco.org/model/content/1.0\",
              \"namespacePrefix\": \"cm\"
          },
          \"id\": \"cm:titled\",
          \"title\": \"Titled\",
          \"properties\": [
            {
              \"id\": \"cm:title\",
              \"title\": \"Title\",
              \"description\": \"Content Title\",
              \"dataType\": \"d:mltext\",
              \"isMultiValued\": false,
              \"isMandatory\": false,
              \"isMandatoryEnforced\": false,
              \"isProtected\": false
            },
            {
              ...
            }
          ]
        }
      },
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      },
    ]
  }
}

    *
    * @param opts Optional parameters
    * @param opts.where Optionally filter the list. Here are some examples:

An aspect should represented in the following format(prefix:name). e.g 'cm:title'.

The following where clause will only return aspects from the namespace1:model and namespace2:model.

  where=(modelId in ('namespace1:model','namespace2:model'))
  where=(modelId in ('namespace1:model INCLUDESUBASPECTS','namespace2:model'))

The following where clause will only return sub aspects for the given parents.

  where=(parentId in ('namespace1:parent','namespace2:parent'))

The following where clause will only return aspects that match the pattern.

  where=(namespaceUri matches('http://www.alfresco.*'))

The following where clause will only return aspects that don't match the pattern.

  where=(not namespaceUri matches('http://www.alfresco.*'))

    * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 (default to 0)
    * @param opts.maxItems The maximum number of items to return in the list.
If not supplied then the default value is 100.
 (default to 100)
    * @param opts.include Returns additional information about the aspect. The following optional fields can be requested:
* properties
* mandatoryAspects
* associations

    * @return Promise<AspectPaging>
    */
    listAspects(opts?: any): Promise<AspectPaging> {

        opts = opts || {};
        const postBody: null = null;

        const pathParams = {

        };

        const queryParams = {
            'where': opts['where'],
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        const headerParams = {

        };
        const formParams = {
        };

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/aspects', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , AspectPaging);
    }

}
