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

import { PeopleApi as PeopleApiNew } from '../../../../api/content-rest-api/api/people.api';
import { NetworksApi } from '../../../../api/content-rest-api/api/networks.api';
import { FavoritesApi } from '../../../../api/content-rest-api/api/favorites.api';
import { SitesApi } from '../../../../api/content-rest-api/api/sites.api';
import { PreferencesApi } from '../../../../api/content-rest-api/api/preferences.api';
import { ActivitiesApi } from '../../../../api/content-rest-api/api/activities.api';
import { AlfrescoApi } from '../../../../alfrescoApi';
import { GroupsApi } from '../../../../api/content-rest-api/api/groups.api';
import { FavoriteEntry } from '../../../../api/content-rest-api/model/favoriteEntry';
import { FavoriteBodyCreate } from '../../../../api/content-rest-api/model/favoriteBodyCreate';
import { SiteMembershipRequestBodyCreate } from '../../../../api/content-rest-api/model/siteMembershipRequestBodyCreate';
import { SiteMembershipRequestEntry } from '../../../../api/content-rest-api/model/siteMembershipRequestEntry';
import { FavoriteSiteBodyCreate } from '../../../../api/content-rest-api/model/favoriteSiteBodyCreate';
import { FavoriteSiteEntry } from '../../../../api/content-rest-api/model/favoriteSiteEntry';
import { ActivityPaging } from '../../../../api/content-rest-api/model/activityPaging';
import { SiteEntry } from '../../../../api/content-rest-api/model/siteEntry';
import { SitePaging } from '../../../../api/content-rest-api/model/sitePaging';
import { FavoritePaging } from '../../../../api/content-rest-api/model/favoritePaging';
import { PersonEntry } from '../../../../api/content-rest-api/model/personEntry';
import { PersonPaging } from '../../../../api/content-rest-api/model/personPaging';
import { PersonNetworkEntry } from '../../../../api/content-rest-api/model/personNetworkEntry';
import { PersonNetworkPaging } from '../../../../api/content-rest-api/model/personNetworkPaging';
import { PreferenceEntry } from '../../../../api/content-rest-api/model/preferenceEntry';
import { PreferencePaging } from '../../../../api/content-rest-api/model/preferencePaging';
import { GroupPaging } from '../../../../api/content-rest-api/model/groupPaging';
import { SiteMembershipRequestPaging } from '../../../../api/content-rest-api/model/siteMembershipRequestPaging';
import { SiteMembershipRequestBodyUpdate } from '../../../../api/content-rest-api/model/siteMembershipRequestBodyUpdate';
import { PersonBodyCreate } from '../../../../api/content-rest-api/model/personBodyCreate';
import { PersonBodyUpdate } from '../../../../api/content-rest-api/model/personBodyUpdate';
import { SiteRolePaging } from '../../../../api/content-rest-api/model/siteRolePaging';

/**
 * @deprecated 3.0.0
 */
export class PeopleApi {

    private networksApi: NetworksApi;
    private peopleApiNew: PeopleApiNew;
    private favoritesApi: FavoritesApi;
    private sitesApi: SitesApi;
    private activitiesApi: ActivitiesApi;
    private preferencesApi: PreferencesApi;
    private groupsApi: GroupsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.networksApi = new NetworksApi(alfrescoApi);
        this.peopleApiNew = new PeopleApiNew(alfrescoApi);
        this.favoritesApi = new FavoritesApi(alfrescoApi);
        this.sitesApi = new SitesApi(alfrescoApi);
        this.activitiesApi = new ActivitiesApi(alfrescoApi);
        this.preferencesApi = new PreferencesApi(alfrescoApi);
        this.groupsApi = new GroupsApi(alfrescoApi);
    }

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
    addFavorite(personId: string, favoriteBody: FavoriteBodyCreate): Promise<FavoriteEntry> {
        return this.favoritesApi.createFavorite(personId, favoriteBody);
    }

    /**
     * Create a site membership request
     * Create a site membership request for **personId** and **siteId**. The **personId** will be invited to the site as a SiteConsumer.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMembershipBody} siteMembershipBody Site membership request details
     * data is of type: {module:model/SiteMembershipRequestEntry}
     */
    addSiteMembershipRequest(personId: string, siteMembershipBody: SiteMembershipRequestBodyCreate): Promise<SiteMembershipRequestEntry> {
        return this.sitesApi.createSiteMembershipRequestForPerson(personId, siteMembershipBody);
    }

    /**
     * Delete favorite site
     * Removes site **siteId** from the favorite site list of person **personId**.\n\n**Note This method is deprecated and will be removed in the future.**\nUse &#x60;/people/{personId}/favorites/{favoriteId}&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     */
    deleteFavoriteSite(personId: string, siteId: string): Promise<any> {
        return this.favoritesApi.deleteSiteFavorite(personId, siteId);
    }

    /**
     * Favorite a site
     * Add a favorite site for person **personId**.\n\n**Note: that this method is deprecated and will be removed in the future**.\nUse &#x60;/people/{personId}/favorites&#x60; instead.\n
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteSiteBody} favoriteSiteBody The id of the site to favorite.
     * data is of type: {module:model/InlineResponse201}
     */
    favoriteSite(personId: string, favoriteSiteBody: FavoriteSiteBodyCreate): Promise<FavoriteSiteEntry> {
        return this.favoritesApi.createSiteFavorite(personId, favoriteSiteBody);
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
    getActivities(personId: string, opts?: any): Promise<ActivityPaging> {
        return this.activitiesApi.listActivitiesForPerson(personId, opts);
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
    getFavorite(personId: string, favoriteId: string, opts?: any): Promise<FavoriteEntry> {
        return this.favoritesApi.getFavorite(personId, favoriteId, opts);
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
    getFavoriteSite(personId: string, siteId: string, opts?: any): Promise<SiteEntry> {
        return this.favoritesApi.getFavoriteSite(personId, siteId, opts);
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
    getFavoriteSites(personId: string, opts?: any): Promise<SitePaging> {
        return this.favoritesApi.listFavoriteSitesForPerson(personId, opts);
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
    getFavorites(personId: string, opts?: any): Promise<FavoritePaging> {
        return this.favoritesApi.listFavorites(personId, opts);
    }

    /**
     * Get a person
     * Gets information for the person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    getPerson(personId: string, opts?: any): Promise<PersonEntry> {
        return this.peopleApiNew.getPerson(personId, opts);
    }

    /**
     * List people.
     * Gets information for the persons
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    getPersons(opts?: any): Promise<PersonPaging> {
        return this.peopleApiNew.listPeople(opts);
    }

    /**
     * Add a person
     *If applicable, the given person's login access can also be optionally disabled. You must have admin rights to create a person. You can set custom properties when you create a person:
     * @param {PersonBodyCreate} person The PersonBodyCreate object.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonEntry}
     */
    addPerson(person: PersonBodyCreate): Promise<PersonEntry> {
        return this.peopleApiNew.createPerson(person);
    }

    /**
     * Update an existing user
     * @param {String} personId The identifier of a user.
     * @param {PersonBodyUpdate} personBodyUpdate The user details
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the include parameter, then the fields specified in the include parameter are returned in addition to those specified in the fields parameter\n
     * data is of type: {module:model/PersonEntry}
     */
    updatePerson(personId: string, personBodyUpdate: PersonBodyUpdate, opts?: any): Promise<PersonEntry> {
        return this.peopleApiNew.updatePerson(personId, personBodyUpdate, opts);
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
    getPersonNetwork(personId: string, networkId: string, opts?: any): Promise<PersonNetworkEntry> {
        return this.networksApi.getNetworkForPerson(personId, networkId, opts);
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
    getPersonNetworks(personId: string, opts?: any): Promise<PersonNetworkPaging> {
        return this.networksApi.listNetworksForPerson(personId, opts);
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
    getPreference(personId: string, preferenceName: string, opts?: any): Promise<PreferenceEntry> {
        return this.preferencesApi.getPreference(personId, preferenceName, opts);
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
    getPreferences(personId: string, opts?: any): Promise<PreferencePaging> {
        return this.preferencesApi.listPreferences(personId, opts);
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
    getSiteMembership(personId: string, opts?: any): Promise<SiteRolePaging> {
        return this.sitesApi.listSiteMembershipsForPerson(personId, opts);
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
    getGroupsMembership(personId: string, opts?: any): Promise<GroupPaging> {
        return this.groupsApi.listGroupMembershipsForPerson(personId, opts);
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
    getSiteMembershipRequest(personId: string, siteId: string, opts?: any): Promise<SiteMembershipRequestEntry> {
        return this.sitesApi.getSiteMembershipRequestForPerson(personId, siteId, opts);
    }

    /**
     * Get site membership requests
     * Returns the current site membership requests for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMembershipRequestPaging}
     */
    getSiteMembershipRequests(personId: string, opts?: any): Promise<SiteMembershipRequestPaging> {
        return this.sitesApi.listSiteMembershipRequestsForPerson(personId, opts);
    }

    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     */
    removeFavoriteSite(personId: string, favoriteId: string): Promise<any> {
        return this.favoritesApi.deleteSiteFavorite(personId, favoriteId);
    }

    listSiteMembershipsForPerson(personId: string, opts?: any): Promise<SiteRolePaging> {
        return this.sitesApi.listSiteMembershipsForPerson(personId, opts);
    }

    /**
     * Cancel a site membership
     * Cancels the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     */
    removeSiteMembershipRequest(personId: string, siteId: string): Promise<any> {
        return this.sitesApi.deleteSiteMembershipRequestForPerson(personId, siteId);
    }

    /**
     * Update a site membership request
     * Updates the message for the site membership request to site **siteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMembershipBody1} siteMembershipBody The new message to display
     */
    updateSiteMembershipRequest(personId: string, siteId: string, siteMembershipBody: SiteMembershipRequestBodyUpdate): Promise<SiteMembershipRequestEntry> {
        return this.sitesApi.updateSiteMembershipRequestForPerson(personId, siteId, siteMembershipBody);
    }
}
