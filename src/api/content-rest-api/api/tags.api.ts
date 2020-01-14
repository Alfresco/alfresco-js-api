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

import { TagBody } from '../model/tagBody';
import { TagEntry } from '../model/tagEntry';
import { TagPaging } from '../model/tagPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Tags service.
* @module TagsApi
*/
export class TagsApi extends BaseApi {
    /**
    * Create a tag for a node
    *
    * Creates a tag on the node **nodeId**. You specify the tag in a JSON body like this:

JSON
{
  \"tag\":\"test-tag-1\"
}

**Note:** You can create more than one tag by
specifying a list of tags in the JSON body like this:

JSON
[
  {
    \"tag\":\"test-tag-1\"
  },
  {
    \"tag\":\"test-tag-2\"
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
    * @param nodeId The identifier of a node.
    * @param tagBodyCreate The new tag
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<TagEntry>
    */
    createTagForNode(nodeId: string, tagBodyCreate: TagBody, opts?: any): Promise<TagEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(tagBodyCreate, 'tagBodyCreate');

        opts = opts || {};
        let postBody = tagBodyCreate;

        let pathParams = {
            'nodeId': nodeId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/tags', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TagEntry);
    }
    /**
        * Delete a tag from a node
        *
        * Deletes tag **tagId** from node **nodeId**.
        *
        * @param nodeId The identifier of a node.
        * @param tagId The identifier of a tag.
        * @return Promise<{}>
        */
    deleteTagFromNode(nodeId: string, tagId: string): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(tagId, 'tagId');

        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'tagId': tagId
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
            '/nodes/{nodeId}/tags/{tagId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a tag
        *
        * Get a specific tag with **tagId**.
        *
        * @param tagId The identifier of a tag.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<TagEntry>
        */
    getTag(tagId: string, opts?: any): Promise<TagEntry> {
        throwIfNotDefined(tagId, 'tagId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'tagId': tagId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tags/{tagId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TagEntry);
    }
    /**
        * List tags
        *
        * Gets a list of tags in this repository.

    You can use the **include** parameter to return additional **values** information.

        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @param opts.include Returns additional information about the tag. The following optional fields can be requested:
    * count

        * @return Promise<TagPaging>
        */
    listTags(opts?: any): Promise<TagPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': buildCollectionParam(opts['fields'], 'csv'),
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tags', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TagPaging);
    }
    /**
        * List tags for a node
        *
        * Gets a list of tags for node **nodeId**.
        *
        * @param nodeId The identifier of a node.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<TagPaging>
        */
    listTagsForNode(nodeId: string, opts?: any): Promise<TagPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId
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
            '/nodes/{nodeId}/tags', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TagPaging);
    }
    /**
        * Update a tag
        *
        * Updates the tag **tagId**.
        *
        * @param tagId The identifier of a tag.
        * @param tagBodyUpdate The updated tag
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<TagEntry>
        */
    updateTag(tagId: string, tagBodyUpdate: TagBody, opts?: any): Promise<TagEntry> {
        throwIfNotDefined(tagId, 'tagId');
        throwIfNotDefined(tagBodyUpdate, 'tagBodyUpdate');

        opts = opts || {};
        let postBody = tagBodyUpdate;

        let pathParams = {
            'tagId': tagId
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/tags/{tagId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, TagEntry);
    }

}
