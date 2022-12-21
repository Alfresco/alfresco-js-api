/*!
* @license
* Copyright 2022 Alfresco Software, Ltd.
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

import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { CategoryPaging } from '../model/categoryPaging';
import { CategoryEntry } from '../model/categoryEntry';
import { CategoryBody } from '../model/categoryBody';
import { CategoryLinkBody } from '../model/CategoryLinkBody';

export class CategoriesApi extends BaseApi {
    /**
        * List of subcategories within category
        *
        * Gets a list of subcategories with category **categoryId**.
        * The parameter categoryId can be set to the alias -root- to obtain a list of top level categories.

    You can use the **include** parameter to return additional **values** information.

        * @param categoryId The identifier of a category.
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

        * @param opts.include Returns additional information about the category. The following optional fields can be requested:
            * count

        * @return Promise<CategoryPaging>
    */
    getSubcategories(categoryId: string, opts?: any): Promise<CategoryPaging> {
        throwIfNotDefined(categoryId, 'categoryId');
        opts = opts || {};
        const postBody: null = null;

        const pathParams = {
            'categoryId': categoryId
        };

        const queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': buildCollectionParam(opts['fields'], 'csv'),
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/categories/{categoryId}/subcategories', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , CategoryPaging);
    }

    /**
        * Get a category
        *
        * Get a specific category with categoryId.

    You can use the **include** parameter to return additional **values** information.

        * @param categoryId The identifier of a category.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @param opts.include Returns additional information about the category. The following optional fields can be requested:
            * count

        * @return Promise<CategoryEntry>
    */
    getCategory(categoryId: string, opts?: any): Promise<CategoryEntry> {
        throwIfNotDefined(categoryId, 'categoryId');
        opts = opts || {};
        const postBody: null = null;

        const pathParams = {
            'categoryId': categoryId
        };

        const queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv'),
            'include': buildCollectionParam(opts['include'], 'csv')
        };

        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/category/{categoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , CategoryEntry);
    }

    /**
        * List of categories that node is assigned to
        *
        * Gets a list of categories for node with nodeId.

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

        * @return Promise<CategoryPaging>
    */
    getCategoryLinksForNode(nodeId: string, opts?: any): Promise<CategoryPaging> {
        throwIfNotDefined(nodeId, 'nodeId');
        opts = opts || {};
        const postBody: null = null;

        const pathParams = {
            'nodeId': nodeId
        };

        const queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/category-links', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , CategoryPaging);
    }

    /**
    * Deletes the category **categoryId**.
    *
    * This will cause everything to be removed from the category.
    * You must have admin rights to delete a category.
    *
    * @param categoryId The identifier of a category.
    * @return Promise<{}>
    */
    deleteCategory(categoryId: string): Promise<any> {
        throwIfNotDefined(categoryId, 'categoryId');
        const postBody: null = null;

        const pathParams = {
            'categoryId': categoryId
        };

        const queryParams = {};
        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/category/{categoryId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts );
    }

    /**
    * Unassign a node from category
    *
    * Removes the node **nodeId** from the category **categoryId**.
    *
    * @param nodeId The identifier of a node.
    * @param categoryId The identifier of a category.
    * @return Promise<{}>
    */
     unlinkNodeFromCategory(nodeId: string, categoryId: string): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(categoryId, 'categoryId');
        const postBody: null = null;

        const pathParams = {
            'nodeId': nodeId,
            'categoryId': categoryId
        };

        const queryParams = {};
        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/category-links/{categoryId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts );
    }

    /**
    * Update a category
    *
    * Updates the category **categoryId**.
    * You must have admin rights to update a category.
    *
    * @param categoryId The identifier of a category.
    * @param categoryBodyUpdate The updated category
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<CategoryEntry>
    */
    updateCategory(categoryId: string, categoryBodyUpdate: CategoryBody, opts?: any): Promise<CategoryEntry> {

        throwIfNotDefined(categoryId, 'categoryId');
        throwIfNotDefined(categoryBodyUpdate, 'categoryBodyUpdate');

        opts = opts || {};
        const postBody = categoryBodyUpdate;

        const pathParams = {
            'categoryId': categoryId
        };

        const queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/category/{categoryId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , CategoryEntry);
    }

    /**
    * Create a category
    *
    * Creates a new category within the category **categoryId**.
    * The parameter categoryId can be set to the alias -root- to create a new top level category.
    * You must have admin rights to create a category.
    * You specify the category in a JSON body like this:

    JSON
    {
    \"name\":\"test category 1\"
    }

    **Note:** You can create more than one category by specifying a list of categories in the JSON body like this:

    JSON
    [
    {
        \"name\":\"test category 1\"
    },
    {
        \"name\":\"test category 2\"
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
    * @param categoryId The identifier of a category.
    * @param categoryBodyCreate The new category
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<CategoryEntry>
    */
    createSubcategory(categoryId: string, categoryBodyCreate: CategoryBody[], opts?: any): Promise<CategoryEntry> {

        throwIfNotDefined(categoryId, 'categoryId');
        throwIfNotDefined(categoryBodyCreate, 'categoryBodyCreate');

        opts = opts || {};
        const postBody = categoryBodyCreate;

        const pathParams = {
            'categoryId': categoryId
        };

        const queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/categories/{categoryId}/subcategories', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , CategoryEntry);
    }

    /**
    * Assign a node to a category
    *
    * Assign the node **nodeId** to a category.
    * You specify the category in a JSON body like this:

    JSON
    {
    \"categoryId\":\"01234567-89ab-cdef-0123-456789abcdef\"
    }

    **Note:** You can assign the node to more than one category by specifying a list of categories in the JSON body like this:

    JSON
    [
    {
        \"categoryId\":\"01234567-89ab-cdef-0123-456789abcdef\"
    },
    {
        \"categoryId\":\"89abcdef-0123-4567-89ab-cdef01234567\"
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
    * @param categoryLinkBodyCreate The new category link
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<CategoryEntry>
    */
    linkNodeToCategory(nodeId: string, categoryLinkBodyCreate: CategoryLinkBody[], opts?: any): Promise<CategoryEntry> {

        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(categoryLinkBodyCreate, 'categoryLinkBodyCreate');

        opts = opts || {};
        const postBody = categoryLinkBodyCreate;

        const pathParams = {
            'nodeId': nodeId
        };

        const queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        const headerParams = {};
        const formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/nodes/{nodeId}/category-links', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts , CategoryEntry);
    }
}
