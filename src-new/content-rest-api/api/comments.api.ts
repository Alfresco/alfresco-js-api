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

import { CommentBody } from '../model/commentBody';
import { CommentEntry } from '../model/commentEntry';
import { CommentPaging } from '../model/commentPaging';
import { ModelError } from '../model/modelError';
import { BaseApi } from './base.api';

/**
* Comments service.
* @module CommentsApi
*/
export class CommentsApi extends BaseApi {
    /**
    * Create a comment
    * 
    * Creates a comment on node **nodeId**. You specify the comment in a JSON body like this:

JSON
{
  \"content\": \"This is a comment\"
}

**Note:** You can create more than one comment by
specifying a list of comments in the JSON body like this:

JSON
[
  {
    \"content\": \"This is a comment\"
  },
  {
    \"content\": \"This is another comment\"
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

    * @param nodeId The identifier of a node.
    * @param commentBodyCreate The comment text. Note that you can also provide a list of comments.
    * @param fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    */
    createComment(nodeId: string, commentBodyCreate: CommentBody, opts: any): Promise<CommentEntry> {
        opts = opts || {};
        let postBody = commentBodyCreate;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in createComment");
        }

        if (commentBodyCreate === undefined || commentBodyCreate === null) {
            throw new Error("Required param 'commentBodyCreate' in createComment");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/comments', 'POST',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a comment
        * 
        * Deletes the comment **commentId** from node **nodeId**.
        * @param nodeId The identifier of a node.
        * @param commentId The identifier of a comment.
        */
    deleteComment(nodeId: string, commentId: string): Promise<{}> {

        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in deleteComment");
        }

        if (commentId === undefined || commentId === null) {
            throw new Error("Required param 'commentId' in deleteComment");
        }

        let pathParams = {
            'nodeId': nodeId, 'commentId': commentId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/comments/{commentId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List comments
        * 
        * Gets a list of comments for the node **nodeId**, sorted chronologically with the newest comment first.
        * @param nodeId The identifier of a node.
        * @param skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
    
        * @param maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
    
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    listComments(nodeId: string, opts: any): Promise<CommentPaging> {
        opts = opts || {};
        let postBody = null;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in listComments");
        }

        let pathParams = {
            'nodeId': nodeId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
        };
        let collectionQueryParams = {
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/comments', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Update a comment
        * 
        * Updates an existing comment **commentId** on node **nodeId**.
        * @param nodeId The identifier of a node.
        * @param commentId The identifier of a comment.
        * @param commentBodyUpdate The JSON representing the comment to be updated.
        * @param fields A list of field names.
    
    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.
    
    The list applies to a returned individual
    entity or entries within a collection.
    
    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.
    
        */
    updateComment(nodeId: string, commentId: string, commentBodyUpdate: CommentBody, opts: any): Promise<CommentEntry> {
        opts = opts || {};
        let postBody = commentBodyUpdate;

        if (nodeId === undefined || nodeId === null) {
            throw new Error("Required param 'nodeId' in updateComment");
        }

        if (commentId === undefined || commentId === null) {
            throw new Error("Required param 'commentId' in updateComment");
        }

        if (commentBodyUpdate === undefined || commentBodyUpdate === null) {
            throw new Error("Required param 'commentBodyUpdate' in updateComment");
        }

        let pathParams = {
            'nodeId': nodeId, 'commentId': commentId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
            'fields': {
                value: opts['fields'],
                collectionFormat: 'csv'
            }
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/comments/{commentId}', 'PUT',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
