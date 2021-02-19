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

import { TypeEntry } from '../model/typeEntry';
import { TypePaging } from '../model/typePaging';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';
import { buildCollectionParam } from '../../../alfrescoApiClient';

/**
* Types service.
* @module TypesApi
*/
export class TypesApi extends BaseApi {
    /**
    * Get a type
    *
    * **Note:** This is available in Alfresco 7.0.0 and newer versions.
Get information for type **typeId**.

    *
    * @param typeId The Qname of a type(prefix:name) e.g 'cm:content'
    * @return Promise<TypeEntry>
    */
    getType(typeId: string): Promise<TypeEntry> {

        throwIfNotDefined(typeId, 'typeId');

        const postBody: null = null;

        const pathParams = {
            'typeId': typeId
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
            '/types/{typeId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , TypeEntry);
    }
/**
    * List types
    *
    * **Note:** This is available in Alfresco 7.0.0 and newer versions.

Gets a list of types from the data dictionary. The System types will be ignored by default.
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
          \"id\": \"cm:content\",
          \"description\": \"Base Content Object\",
          \"title\": \"Content\",
          \"parentId\": \"cm:cmobject\"
          \"properties\": [
            {
              \"id\": \"cm:name\",
              \"title\": \"Name\",
              \"description\": \"Name\",
              \"dataType\": \"d:text\",
              \"isMultiValued\": false,
              \"isMandatory\": true,
              \"isMandatoryEnforced\": true
              \"isProtected\": false
              ...
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

A type should represented in the following format(prefix:name). e.g 'cm:content'.

The following where clause will only return types from the namespace1:model and namespace2:model.

  where=(modelId in ('namespace1:model','namespace2:model'))
  where=(modelId in ('namespace1:model INCLUDESUBTYPES','namespace2:model'))

The following where clause will only return sub types for the given parents.

  where=(parentId in ('namespace1:parent','namespace2:parent'))

The following where clause will only return types that match the pattern.

  where=(namespaceUri matches('http://www.alfresco.*'))

The following where clause will only return types that don't match the pattern.

  where=(not namespaceUri matches('http://www.alfresco.*'))

    * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 (default to 0)
    * @param opts.maxItems The maximum number of items to return in the list.
If not supplied then the default value is 100.
 (default to 100)
    * @param opts.include Returns additional information about the type. The following optional fields can be requested:
* properties
* mandatoryAspects
* associations

    * @return Promise<TypePaging>
    */
    listTypes(opts?: any): Promise<TypePaging> {

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
            '/types', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , TypePaging);
    }
}
