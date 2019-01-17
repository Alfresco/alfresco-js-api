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
import { RatingsApi as NewRatingsApi } from '../../../../api/content-rest-api/api/ratings.api';
import { RatingEntry } from '../../../../api/content-rest-api/model/ratingEntry';
import { RatingPaging } from '../../../../api/content-rest-api/model/ratingPaging';
import { RatingBody } from '../../../../api/content-rest-api/model/ratingBody';

/**
 * @deprecated 3.0.0
 */
export class RatingsApi  {

    private ratingsApi: NewRatingsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.ratingsApi = new NewRatingsApi(alfrescoApi);
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
    getRating(nodeId: string, ratingId: string, opts?: any): Promise<RatingEntry> {
       return this.ratingsApi.getRating(nodeId, ratingId, opts);
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
    getRatings(nodeId: string, opts?: any): Promise<RatingPaging> {
        return this.ratingsApi.listRatings(nodeId, opts);
    }

    /**
     * Rate
     * Rate the node with identifier **nodeId**
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/RatingBody} ratingBody For \&quot;myRating\&quot; the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.\n\nFor example, to \&quot;like\&quot; a file the following body would be used:\n\n  &#x60;&#x60;&#x60;JSON\n    {\n      \&quot;id\&quot;: \&quot;likes\&quot;,\n      \&quot;myRating\&quot;: true\n    }\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/RatingEntry}
     */
    rate(nodeId: string, ratingBody: RatingBody): Promise<RatingEntry> {
        return this.ratingsApi.createRating(nodeId, ratingBody);
    }

    /**
     * Delete a rating
     * Removes rating **ratingId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     */
    removeRating(nodeId: string, ratingId: string): Promise<any> {
        return this.ratingsApi.deleteRating(nodeId, ratingId);
    }
}
