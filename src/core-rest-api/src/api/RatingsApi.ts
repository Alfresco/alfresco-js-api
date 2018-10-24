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
import { Error } from '../model/RatingEntry';
import { RatingEntry } from '../model/RatingEntry';
import { RatingPaging } from '../model/RatingPaging';
import { RatingBody } from '../model/RatingBody';

/**
 * Ratings service.
 * @module api/RatingsApi
 * @version 0.1.0
 */

/**
 * Constructs a new RatingsApi.
 * @alias module:api/RatingsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class RatingsApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Get a rating
     * Get the specific rating **ratingId** on node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RatingEntry}
     */
    getRating(nodeId, ratingId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing param 'nodeId' in getRating";
        }

        // verify the required parameter 'ratingId' is set
        if (ratingId == undefined || ratingId == null) {
            throw "Missing param 'ratingId' in getRating";
        }


        let pathParams = {
            'nodeId': nodeId,
            'ratingId': ratingId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = RatingEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/ratings/{ratingId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Get ratings
     * Get the ratings for node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RatingPaging}
     */
    getRatings(nodeId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing param 'nodeId' in getRatings";
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
        let returnType = RatingPaging;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/ratings', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Rate
     * Rate the node with identifier **nodeId**
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/RatingBody} ratingBody For \&quot;myRating\&quot; the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.\n\nFor example, to \&quot;like\&quot; a file the following body would be used:\n\n  &#x60;&#x60;&#x60;JSON\n    {\n      \&quot;id\&quot;: \&quot;likes\&quot;,\n      \&quot;myRating\&quot;: true\n    }\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/RatingEntry}
     */
    rate(nodeId, ratingBody) {
        let postBody = ratingBody;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing param 'nodeId' in rate";
        }

        // verify the required parameter 'ratingBody' is set
        if (ratingBody == undefined || ratingBody == null) {
            throw "Missing param 'ratingBody' in rate";
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
        let returnType = RatingEntry;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/ratings', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }


    /**
     * Delete a rating
     * Removes rating **ratingId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     */
    removeRating(nodeId, ratingId) {
        let postBody = null;

        // verify the required parameter 'nodeId' is set
        if (nodeId == undefined || nodeId == null) {
            throw "Missing param 'nodeId' in removeRating";
        }

        // verify the required parameter 'ratingId' is set
        if (ratingId == undefined || ratingId == null) {
            throw "Missing param 'ratingId' in removeRating";
        }


        let pathParams = {
            'nodeId': nodeId,
            'ratingId': ratingId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = null;

        return this.apiClient.callApi(
            '/nodes/{nodeId}/ratings/{ratingId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}
