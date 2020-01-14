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

import { RatingBody } from '../model/ratingBody';
import { RatingEntry } from '../model/ratingEntry';
import { RatingPaging } from '../model/ratingPaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Ratings service.
* @module RatingsApi
*/
export class RatingsApi extends BaseApi {
    /**
    * Create a rating
    *
    * Create a rating for the node with identifier **nodeId**
    *
    * @param nodeId The identifier of a node.
    * @param ratingBodyCreate For \"myRating\" the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.

For example, to \"like\" a file the following body would be used:

JSON
  {
    \"id\": \"likes\",
    \"myRating\": true
  }

    * @param opts Optional parameters
    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<RatingEntry>
    */
    createRating(nodeId: string, ratingBodyCreate: RatingBody, opts?: any): Promise<RatingEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(ratingBodyCreate, 'ratingBodyCreate');

        opts = opts || {};
        let postBody = ratingBodyCreate;

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
            '/nodes/{nodeId}/ratings', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RatingEntry);
    }
    /**
        * Delete a rating
        *
        * Deletes rating **ratingId** from node **nodeId**.
        *
        * @param nodeId The identifier of a node.
        * @param ratingId The identifier of a rating.
        * @return Promise<{}>
        */
    deleteRating(nodeId: string, ratingId: string): Promise<any> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(ratingId, 'ratingId');

        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'ratingId': ratingId
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
            '/nodes/{nodeId}/ratings/{ratingId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a rating
        *
        * Get the specific rating **ratingId** on node **nodeId**.
        *
        * @param nodeId The identifier of a node.
        * @param ratingId The identifier of a rating.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RatingEntry>
        */
    getRating(nodeId: string, ratingId: string, opts?: any): Promise<RatingEntry> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(ratingId, 'ratingId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'nodeId': nodeId, 'ratingId': ratingId
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
            '/nodes/{nodeId}/ratings/{ratingId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RatingEntry);
    }
    /**
        * List ratings
        *
        * Gets a list of ratings for node **nodeId**.
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

        * @return Promise<RatingPaging>
        */
    listRatings(nodeId: string, opts?: any): Promise<RatingPaging> {
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
            '/nodes/{nodeId}/ratings', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, RatingPaging);
    }

}
