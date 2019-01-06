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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { TagsApi as NewTagsApi } from '../../../../api-new/content-rest-api/api/tags.api';
import { TagEntry } from '../../../../api-new/content-rest-api/model/tagEntry';
import { ModelError } from '../../../../api-new/content-rest-api/model/modelError';
import { TagPaging } from '../../../../api-new/content-rest-api/model/tagPaging';
import { TagBody } from '../../../../api-new/content-rest-api/model/tagBody';

/**
 * @deprecated 3.0.0
 */
export class TagsApi  {

    tagsApi: NewTagsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.tagsApi = new NewTagsApi(alfrescoApi);
    }

    /**
     * Add a tag
     * Adds one or more tags to the node **nodeId**. You can create more than one tag by\nspecifying a list of tags in the JSON body like this:\n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-1\&quot;\n  },\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-2\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/TagBody} tagBody The new tag
     * data is of type: {module:model/TagEntry}
     */
    addTag(nodeId: string, tagBody: TagBody): Promise<TagEntry | ModelError> {
        return this.tagsApi.createTagForNode(nodeId, tagBody);
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
    getNodeTags(nodeId: string, opts?: any): Promise<TagPaging | ModelError> {
        return this.tagsApi.listTagsForNode(nodeId, opts);
    }

    /**
     * Get a tag
     * Return a specific tag with **tagId**.
     * @param {String} tagId The identifier of a tag.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagEntry}
     */
    getTag(tagId: string, opts?: any): Promise<TagEntry | ModelError> {
        return this.tagsApi.getTag(tagId, opts);
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
    getTags(opts?: any): Promise<TagPaging | ModelError> {
        return this.tagsApi.listTags(opts);
    }

    /**
     * Delete a tag
     * Removes tag **tagId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} tagId The identifier of a tag.
     */
    removeTag(nodeId: string, tagId: string): Promise<any | ModelError> {
        return this.tagsApi.deleteTagFromNode(nodeId, tagId);
    }

    /**
     * Update a tag
     * Updates the tag **tagId**.
     * @param {String} tagId The identifier of a tag.
     * @param {module:model/TagBody1} tagBody The updated tag
     * data is of type: {module:model/TagEntry}
     */
    updateTag(tagId: string, tagBody: TagBody): Promise<TagEntry | ModelError> {
        return this.tagsApi.updateTag(tagId, tagBody);
    }
}
