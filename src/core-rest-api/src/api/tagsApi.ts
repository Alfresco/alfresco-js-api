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

import { AlfrescoApiClient } from '../../../alfrescoApiClient';
import { TagBody } from '../model/TagBody';
import { TagEntry } from '../model/TagEntry';
import { TagPaging } from '../model/TagPaging';

/**
 * Tags service.
 * @module api/TagsApi
 * @version 0.1.0
 */

/**
 * Constructs a new TagsApi.
 * @alias module:api/TagsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class TagsApi {

  apiClient: AlfrescoApiClient;

  constructor(apiClient?: AlfrescoApiClient) {
    this.apiClient = apiClient || new AlfrescoApiClient();
  }


  /**
   * Add a tag
   * Adds one or more tags to the node **nodeId**. You can create more than one tag by\nspecifying a list of tags in the JSON body like this:\n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-1\&quot;\n  },\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-2\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
   * @param {String} nodeId The identifier of a node.
   * @param {module:model/TagBody} tagBody The new tag
   * data is of type: {module:model/TagEntry}
   */
  addTag(nodeId: string, tagBody: TagBody): Promise<TagEntry> {
    let postBody = tagBody;

    // verify the required parameter 'nodeId' is set
    if (nodeId == undefined || nodeId == null) {
      throw "Missing param 'nodeId' in addTag";
    }

    // verify the required parameter 'tagBody' is set
    if (tagBody == undefined || tagBody == null) {
      throw "Missing param 'tagBody' in addTag";
    }


    let pathParams = {
      'nodeId': nodeId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [this.apiClient.contentTypes.json];
    let accepts = [this.apiClient.contentTypes.json];

    return this.apiClient.callApi(
      '/nodes/{nodeId}/tags', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts
    );
  }


  /**
   * Get tags
   * Returns a list of tags for node **nodeId**.
   * @param {String} nodeId The identifier of a node.
   * @param {Object} opts Optional parameters
   * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
   * @param {Integer} opts.maxItems The maximum number of items to return in the list.
   * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
   * data is of type: {module:model/TagPaging}
   */
  getNodeTags(nodeId: string, opts: any): Promise<TagPaging> {
    opts = opts || {};
    let postBody = null;

    // verify the required parameter 'nodeId' is set
    if (nodeId == undefined || nodeId == null) {
      throw "Missing param 'nodeId' in getNodeTags";
    }


    let pathParams = {
      'nodeId': nodeId
    };
    let queryParams = {
      'skipCount': opts['skipCount'],
      'maxItems': opts['maxItems'],
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [this.apiClient.contentTypes.json];
    let accepts = [this.apiClient.contentTypes.json];

    return this.apiClient.callApi(
      '/nodes/{nodeId}/tags', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts
    );
  }


  /**
   * Get a tag
   * Return a specific tag with **tagId**.
   * @param {String} tagId The identifier of a tag.
   * @param {Object} opts Optional parameters
   * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
   * data is of type: {module:model/TagEntry}
   */
  getTag(tagId: string, opts: any): Promise<TagEntry> {
    opts = opts || {};
    let postBody = null;

    // verify the required parameter 'tagId' is set
    if (tagId == undefined || tagId == null) {
      throw "Missing param 'tagId' in getTag";
    }


    let pathParams = {
      'tagId': tagId
    };
    let queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [this.apiClient.contentTypes.json];
    let accepts = [this.apiClient.contentTypes.json];

    return this.apiClient.callApi(
      '/tags/{tagId}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts,
    );
  }


  /**
   * Get tags
   * Returns a list of tags in this repository.
   * @param {Object} opts Optional parameters
   * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
   * @param {Integer} opts.maxItems The maximum number of items to return in the list.
   * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
   * data is of type: {module:model/TagPaging}
   */
  getTags(opts: any): Promise<TagPaging> {
    opts = opts || {};
    let postBody = null;


    let pathParams = {};
    let queryParams = {
      'skipCount': opts['skipCount'],
      'maxItems': opts['maxItems'],
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [this.apiClient.contentTypes.json];
    let accepts = [this.apiClient.contentTypes.json];

    return this.apiClient.callApi(
      '/tags', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts
    );
  }


  /**
   * Delete a tag
   * Removes tag **tagId** from node **nodeId**.
   * @param {String} nodeId The identifier of a node.
   * @param {String} tagId The identifier of a tag.
   */
  removeTag(nodeId: string, tagId: string): Promise<any> {
    let postBody = null;

    // verify the required parameter 'nodeId' is set
    if (nodeId == undefined || nodeId == null) {
      throw "Missing param 'nodeId' in removeTag";
    }

    // verify the required parameter 'tagId' is set
    if (tagId == undefined || tagId == null) {
      throw "Missing param 'tagId' in removeTag";
    }


    let pathParams = {
      'nodeId': nodeId,
      'tagId': tagId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [this.apiClient.contentTypes.json];
    let accepts = [this.apiClient.contentTypes.json];
    let returnType = null;

    return this.apiClient.callApi(
      '/nodes/{nodeId}/tags/{tagId}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }


  /**
   * Update a tag
   * Updates the tag **tagId**.
   * @param {String} tagId The identifier of a tag.
   * @param {module:model/TagBody1} tagBody The updated tag
   * data is of type: {module:model/TagEntry}
   */
  updateTag(tagId: string, tagBody: TagBody): Promise<TagEntry> {
    let postBody = tagBody;

    // verify the required parameter 'tagId' is set
    if (tagId == undefined || tagId == null) {
      throw "Missing param 'tagId' in updateTag";
    }

    // verify the required parameter 'tagBody' is set
    if (tagBody == undefined || tagBody == null) {
      throw "Missing param 'tagBody' in updateTag";
    }


    let pathParams = {
      'tagId': tagId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ['basicAuth'];
    let contentTypes = [this.apiClient.contentTypes.json];
    let accepts = [this.apiClient.contentTypes.json];

    return this.apiClient.callApi(
      '/tags/{tagId}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts
    );
  }
}
