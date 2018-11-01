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

import { FavoriteEntry } from '../model/FavoriteEntry';
import { InlineResponse201 } from '../model/InlineResponse201';
import { GroupsPaging } from '../model/GroupsPaging';
import { FavoritePaging } from '../model/FavoritePaging';
import { PersonBodyCreate } from '../model/PersonBodyCreate';
import { PersonEntry } from '../model/PersonEntry';
import { PersonNetworkEntry } from '../model/PersonNetworkEntry';
import { PersonNetworkPaging } from '../model/PersonNetworkPaging';
import { PreferenceEntry } from '../model/PreferenceEntry';
import { PreferencePaging } from '../model/PreferencePaging';
import { SiteMembershipRequestPaging } from '../model/SiteMembershipRequestPaging';
import { ActivityPaging } from '../model/ActivityPaging';
import { SiteMembershipRequestEntry } from '../model/SiteMembershipRequestEntry';
import { SiteEntry } from '../model/SiteEntry';
import { SitePaging } from '../model/SitePaging';
import { PersonBodyUpdate } from '../model/PersonBodyUpdate';
import { FavoriteSiteBody } from '../model/FavoriteSiteBody';
import { FavoriteBody } from '../model/FavoriteBody';
import { SiteMembershipBody } from '../model/SiteMembershipBody';
import { BaseApi } from './baseApi';

export class PeopleApi extends BaseApi {

    private path: string = '/people';

    /**
     * People service.
     * @module api/PeopleApi
     * @version 0.1.0
     */

    /**
     * Add a favorite
     * Favorite a **site**, **file**, or **folder** in the repository.
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteBody} favoriteBody An object identifying the entity to be favorited. \n\nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n\nFor example, to favorite a file the following body would be used:\n\n&#x60;&#x60;&#x60;JSON\n{\n   \&quot;target\&quot;: {\n      \&quot;file\&quot;: {\n         \&quot;guid\&quot;: \&quot;abcde-01234\&quot;\n      }\n   }\n}\n&#x60;&#x60;&#x60;\n
     * data is of type: {module:model/FavoriteEntry}
     */
    addFavorite(personId: string, favoriteBody: FavoriteBody): Promise<FavoriteEntry> {
        let postBody = favoriteBody;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in addFavorite";
        }

        // verify the required parameter 'favoriteBody' is set
        if (favoriteBody === undefined || favoriteBody === null) {
            throw "Missing param 'favoriteBody' in addFavorite";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/favorites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Create a site membership request
     * Create a site membership request for **personId** and **siteId**. The **personId** will be invited to the site as a SiteConsumer.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMembershipBody} siteMembershipBody Site membership request details
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    addSiteMembershipRequest(personId: string, siteMembershipBody: SiteMembershipBody): Promise<SiteMembershipRequestEntry> {
        let postBody = siteMembershipBody;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in addSiteMembershipRequest";
        }

        // verify the required parameter 'siteMembershipBody' is set
        if (siteMembershipBody === undefined || siteMembershipBody === null) {
            throw "Missing param 'siteMembershipBody' in addSiteMembershipRequest";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/site-membership-requests', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Delete favorite site
     * Removes site **siteId** from the favorite site list of person **personId**.\n\n**Note This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     */
    deleteFavoriteSite(personId: string, siteId: string): Promise<any> {
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in deleteFavoriteSite";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in deleteFavoriteSite";
        }

        let pathParams = {
            'personId': personId,
            'siteId': siteId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{personId}/favorite-sites/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Favorite a site
     * Add a favorite site for person **personId**.\n\n**Note: that this method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteSiteBody} favoriteSiteBody The id of the site to favorite.
     * data is of type: {module:model/InlineResponse201}
     */
    favoriteSite(personId: string, favoriteSiteBody: FavoriteSiteBody): Promise<InlineResponse201> {
        let postBody = favoriteSiteBody;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in favoriteSite";
        }

        // verify the required parameter 'favoriteSiteBody' is set
        if (favoriteSiteBody === undefined || favoriteSiteBody === null) {
            throw "Missing param 'favoriteSiteBody' in favoriteSite";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/favorite-sites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get activities
     * Returns a list of activities for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.who A filter to include the user&#39;s activities only &#x60;-me-&#x60;, other user&#39;s activities only &#x60;-others-&#x60;&#39;\n
     * @param {String} opts.siteId Include only activity feed entries relating to this site.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ActivityPaging}
     */
    getActivities(personId: string, opts: any): Promise<ActivityPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getActivities";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'who': opts['who'],
            'siteId': opts['siteId'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/activities', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get a favorite
     * Returns favorite **favoriteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoriteEntry}
     */
    getFavorite(personId: string, favoriteId: string, opts: any): Promise<FavoriteEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getFavorite";
        }

        // verify the required parameter 'favoriteId' is set
        if (favoriteId === undefined || favoriteId === null) {
            throw "Missing param 'favoriteId' in getFavorite";
        }

        let pathParams = {
            'personId': personId,
            'favoriteId': favoriteId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/favorites/{favoriteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get a favorite site
     * Returns information on favorite site **siteId** of person **personId**.\n\n**Note: This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    getFavoriteSite(personId: string, siteId: string, opts: any): Promise<SiteEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getFavoriteSite";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in getFavoriteSite";
        }

        let pathParams = {
            'personId': personId,
            'siteId': siteId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/favorite-sites/{siteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get favorite sites
     * Get a person&#39;s favorite sites.\n\n**Note: This method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    getFavoriteSites(personId: string, opts: any): Promise<SitePaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getFavoriteSites";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/favorite-sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get favorites
     * Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.\n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS**\nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoritePaging}
     */
    getFavorites(personId: string, opts: any): Promise<FavoritePaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getFavorites";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/favorites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get a person
     * Gets information for the person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    getPerson(personId: string, opts: any): Promise<PersonEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getPerson";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * List people.
     * Gets information for the persons
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    getPersons(opts: any): Promise<PersonEntry> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {};
        let headerParams = {};
        let formParams = {};
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Add a person
     *If applicable, the given person's login access can also be optionally disabled. You must have admin rights to create a person. You can set custom properties when you create a person:
     * @param {PersonBodyCreate} person The PersonBodyCreate object.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    addPerson(person: PersonBodyCreate): Promise<PersonEntry> {
        // verify the required parameter 'personId' is set
        if (person === undefined || person === null) {
            throw "Missing param 'person' in addPerson";
        }

        let pathParams = {};

        let postBody = person;

        let headerParams = {};
        let formParams = {};
        let queryParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Update an existing user
     * @param {String} personId The identifier of a user.
     * @param {PersonBodyUpdate} personBodyUpdate The user details
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the include parameter, then the fields specified in the include parameter are returned in addition to those specified in the fields parameter\n
     * data is of type: {module:model/PersonEntry}
     */
    updatePerson(personId: string, personBodyUpdate: PersonBodyUpdate, opts: any): Promise<PersonEntry> {
        opts = opts || {};
        let postBody = personBodyUpdate;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in updatePerson";
        }

        // verify the required parameter 'personBodyUpdate' is set
        if (personBodyUpdate === undefined || personBodyUpdate === null) {
            throw "Missing param 'personBodyUpdate' in updatePerson";
        }

        let pathParams = {
            'personId': personId,
            'personBodyUpdate': personBodyUpdate
        };

        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get network information
     * Returns network information on a single network specified by **networkId** for **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkEntry}
     */
    getPersonNetwork(personId: string, networkId: string, opts: any): Promise<PersonNetworkEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getPersonNetwork";
        }

        // verify the required parameter 'networkId' is set
        if (networkId === undefined || networkId === null) {
            throw "Missing param 'networkId' in getPersonNetwork";
        }

        let pathParams = {
            'personId': personId,
            'networkId': networkId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/networks/{networkId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get network membership for a person
     * Gets a list of network memberships for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkPaging}
     */
    getPersonNetworks(personId: string, opts: any): Promise<PersonNetworkPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getPersonNetworks";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/networks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get a preference
     * Returns a specific preference for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} preferenceName The name of the preference.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PreferenceEntry}
     */
    getPreference(personId: string, preferenceName: string, opts: any): Promise<PreferenceEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getPreference";
        }

        // verify the required parameter 'preferenceName' is set
        if (preferenceName === undefined || preferenceName === null) {
            throw "Missing param 'preferenceName' in getPreference";
        }

        let pathParams = {
            'personId': personId,
            'preferenceName': preferenceName
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/preferences/{preferenceName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get preferences
     * Returns a list of preferences for person **personId**.\n\nEach preference consists of an **id** and a **value**.\nThe **value** can be of any JSON type.\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PreferencePaging}
     */
    getPreferences(personId: string, opts: any): Promise<PreferencePaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getPreferences";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/preferences', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get site membership information
     * Returns a list of site membership information for person **personId**.\nYou can sort the list of sites using the **orderBy** parameter.\n\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {string[]} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    getSiteMembership(personId: string, opts: any): Promise<SitePaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getSiteMembership";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': opts['orderBy'],
            'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get groups membership information
     * Returns a list of site membership information for person **personId**.\nYou can sort the list of sites using the **orderBy** parameter.\n\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {string[]} opts.include Use the include parameter to include one or more related entities in a single response. Possible values : parentIds and zones
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/GroupsPaging}
     */
    getGroupsMembership(personId: string, opts: any): Promise<GroupsPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getSiteMembership";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': opts['orderBy'],
            'include': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
            'where': opts['where']
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get a site membership request
     * Returns the site membership request for site **siteId** for person **personId**, if one exists.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    getSiteMembershipRequest(personId: string, siteId: string, opts: any): Promise<SiteMembershipRequestEntry> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getSiteMembershipRequest";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in getSiteMembershipRequest";
        }

        let pathParams = {
            'personId': personId,
            'siteId': siteId
        };
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/site-membership-requests/{siteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Get site membership requests
     * Returns the current site membership requests for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Infteger} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMembershipRequestPaging}
     */
    getSiteMembershipRequests(personId: string, opts: any): Promise<SiteMembershipRequestPaging> {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in getSiteMembershipRequests";
        }

        let pathParams = {
            'personId': personId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{personId}/site-membership-requests', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     */
    removeFavoriteSite(personId: string, favoriteId: string): Promise<any> {
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in removeFavoriteSite";
        }

        // verify the required parameter 'favoriteId' is set
        if (favoriteId === undefined || favoriteId === null) {
            throw "Missing param 'favoriteId' in removeFavoriteSite";
        }

        let pathParams = {
            'personId': personId,
            'favoriteId': favoriteId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{personId}/favorites/{favoriteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Cancel a site membership
     * Cancels the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     */
    removeSiteMembershipRequest(personId: string, siteId: string): Promise<any> {
        let postBody = null;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in removeSiteMembershipRequest";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in removeSiteMembershipRequest";
        }

        let pathParams = {
            'personId': personId,
            'siteId': siteId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{personId}/site-membership-requests/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Update a site membership request
     * Updates the message for the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMembershipBody1} siteMembershipBody The new message to display
     */
    updateSiteMembershipRequest(personId: string, siteId: string, siteMembershipBody: SiteMembershipBody): Promise<any> {
        let postBody = siteMembershipBody;

        // verify the required parameter 'personId' is set
        if (personId === undefined || personId === null) {
            throw "Missing param 'personId' in updateSiteMembershipRequest";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in updateSiteMembershipRequest";
        }

        // verify the required parameter 'siteMembershipBody' is set
        if (siteMembershipBody === undefined || siteMembershipBody === null) {
            throw "Missing param 'siteMembershipBody' in updateSiteMembershipRequest";
        }

        let pathParams = {
            'personId': personId,
            'siteId': siteId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            this.path + '/{personId}/site-membership-requests/{siteId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
