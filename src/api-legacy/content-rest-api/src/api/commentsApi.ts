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
import { CommentsApi as NewCommentsApi } from '../../../../api/content-rest-api/api/comments.api';
import { CommentEntry } from '../../../../api/content-rest-api/model/commentEntry';
import { CommentPaging } from '../../../../api/content-rest-api/model/commentPaging';
import { CommentBody } from '../../../../api/content-rest-api/model/commentBody';

/**
 * @deprecated 3.0.0
 */
export class CommentsApi {

    private commentsApi: NewCommentsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.commentsApi = new NewCommentsApi(alfrescoApi);
    }

    /**
     * Add a comment
     * Creates one or more comments on node **nodeId**. You can create more than one comment by \nspecifying a list of comments in the JSON body like this:      \n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;content\&quot;: \&quot;This is a comment\&quot;\n  },\n  {\n    \&quot;content\&quot;: \&quot;This is another comment\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/CommentBody} commentBody The comment text. Note that you can provide an array of comments.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommentEntry}
     * data is of type: {module:model/CommentEntry}
     */
    addComment(nodeId: string, commentBody: CommentBody, opts?: any): Promise<CommentEntry> {
        return this.commentsApi.createComment(nodeId, commentBody, opts);
    }

    /**
     * Get comments
     * Returns a list of comments for the node identified by **nodeId**, sorted chronologically with the newest comment first.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CommentPaging}
     */
    getComments(nodeId: string, opts?: any): Promise<CommentPaging> {
        return this.commentsApi.listComments(nodeId, opts);
    }

    /**
     * Delete a comment
     * Removes the comment **commentId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} commentId The identifier of a comment.
     */
    removeComment(nodeId: string, commentId: string): Promise<any> {
        return this.commentsApi.deleteComment(nodeId, commentId);
    }

    /**
     * Update a comment
     * Updates an existing comment **commentId** on node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} commentId The identifier of a comment.
     * @param {module:model/CommentBody1} commentBody The JSON representing the comment to be updated.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CommentEntry}
     */
    updateComment(nodeId: string, commentId: string, commentBody: CommentBody, opts?: any): Promise<any> {
        return this.commentsApi.updateComment(nodeId, commentId, commentBody, opts);
    }
}
