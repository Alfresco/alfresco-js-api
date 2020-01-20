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

import { FavoriteBodyCreate } from '../model/favoriteBodyCreate';
import { FavoriteEntry } from '../model/favoriteEntry';
import { FavoritePaging } from '../model/favoritePaging';
import { FavoriteSiteBodyCreate } from '../model/favoriteSiteBodyCreate';
import { FavoriteSiteEntry } from '../model/favoriteSiteEntry';
import { SiteEntry } from '../model/siteEntry';
import { SitePaging } from '../model/sitePaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Favorites service.
* @module FavoritesApi
*/
export class FavoritesApi extends BaseApi {
    /**
    * Create a favorite
    *
    * Favorite a **site**, **file**, or **folder** in the repository.

You can use the -me- string in place of <personId> to specify the currently authenticated user.

**Note:** You can favorite more than one entity by
specifying a list of objects in the JSON body like this:

JSON
[
  {
       \"target\": {
          \"file\": {
             \"guid\": \"abcde-01234-....\"
          }
       }
   },
   {
       \"target\": {
          \"file\": {
             \"guid\": \"abcde-09863-....\"
          }
       }
   },
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
    * @param personId The identifier of a person.
    * @param favoriteBodyCreate An object identifying the entity to be favorited.

The object consists of a single property which is an object with the name site, file, or folder.
The content of that object is the guid of the target entity.

For example, to favorite a file the following body would be used:

JSON
{
   \"target\": {
      \"file\": {
         \"guid\": \"abcde-01234-....\"
      }
   }
}

    * @param opts Optional parameters
    * @param opts.include Returns additional information about favorites, the following optional fields can be requested:
* path (note, this only applies to files and folders)

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<FavoriteEntry>
    */
    createFavorite(personId: string, favoriteBodyCreate: FavoriteBodyCreate, opts?: any): Promise<FavoriteEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(favoriteBodyCreate, 'favoriteBodyCreate');

        opts = opts || {};
        let postBody = favoriteBodyCreate;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/favorites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FavoriteEntry);
    }
    /**
        * Create a site favorite
        *
        * **Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
    Use /people/{personId}/favorites instead.

    Create a site favorite for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

     **Note:** You can favorite more than one site by
    specifying a list of sites in the JSON body like this:

    JSON
    [
      {
        \"id\": \"test-site-1\"
      },
      {
        \"id\": \"test-site-2\"
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
        * @param personId The identifier of a person.
        * @param favoriteSiteBodyCreate The id of the site to favorite.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<FavoriteSiteEntry>
        */
    createSiteFavorite(personId: string, favoriteSiteBodyCreate: FavoriteSiteBodyCreate, opts?: any): Promise<FavoriteSiteEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(favoriteSiteBodyCreate, 'favoriteSiteBodyCreate');

        opts = opts || {};
        let postBody = favoriteSiteBodyCreate;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}/favorite-sites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FavoriteSiteEntry);
    }
    /**
        * Delete a favorite
        *
        * Deletes **favoriteId** as a favorite of person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param favoriteId The identifier of a favorite.
        * @return Promise<{}>
        */
    deleteFavorite(personId: string, favoriteId: string): Promise<any> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(favoriteId, 'favoriteId');

        let postBody = null;

        let pathParams = {
            'personId': personId, 'favoriteId': favoriteId
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
            '/people/{personId}/favorites/{favoriteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a site favorite
        *
        * **Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
    Use /people/{personId}/favorites/{favoriteId} instead.

    Deletes site **siteId** from the favorite site list of person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param siteId The identifier of a site.
        * @return Promise<{}>
        */
    deleteSiteFavorite(personId: string, siteId: string): Promise<any> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(siteId, 'siteId');

        let postBody = null;

        let pathParams = {
            'personId': personId, 'siteId': siteId
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
            '/people/{personId}/favorite-sites/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a favorite
        *
        * Gets favorite **favoriteId** for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param favoriteId The identifier of a favorite.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about favorites, the following optional fields can be requested:
    * path (note, this only applies to files and folders)

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<FavoriteEntry>
        */
    getFavorite(personId: string, favoriteId: string, opts?: any): Promise<FavoriteEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(favoriteId, 'favoriteId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId, 'favoriteId': favoriteId
        };

        let queryParams = {
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/favorites/{favoriteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FavoriteEntry);
    }
    /**
        * Get a favorite site
        *
        * **Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
    Use /people/{personId}/favorites/{favoriteId} instead.

    Gets information on favorite site **siteId** of person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param siteId The identifier of a site.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteEntry>
        */
    getFavoriteSite(personId: string, siteId: string, opts?: any): Promise<SiteEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(siteId, 'siteId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId, 'siteId': siteId
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
            '/people/{personId}/favorite-sites/{siteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteEntry);
    }
    /**
        * List favorite sites
        *
        * **Note:** this endpoint is deprecated as of Alfresco 4.2, and will be removed in the future.
    Use /people/{personId}/favorites instead.

    Gets a list of a person's favorite sites.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
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

        * @return Promise<SitePaging>
        */
    listFavoriteSitesForPerson(personId: string, opts?: any): Promise<SitePaging> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
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
            '/people/{personId}/favorite-sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SitePaging);
    }
    /**
        * List favorites
        *
        * Gets a list of favorites for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

    You can use the **where** parameter to restrict the list in the response
    to entries of a specific kind. The **where** parameter takes a value.
    The value is a single predicate that can include one or more **EXISTS**
    conditions. The **EXISTS** condition uses a single operand to limit the
    list to include entries that include that one property. The property values are:

    *   target/file
    *   target/folder
    *   target/site

    For example, the following **where** parameter restricts the returned list to the file favorites for a person:

    SQL
    (EXISTS(target/file))

    You can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.


    For example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:

    SQL
    (EXISTS(target/file) OR EXISTS(target/folder))


        *
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @param opts.include Returns additional information about favorites, the following optional fields can be requested:
    * path (note, this only applies to files and folders)

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<FavoritePaging>
        */
    listFavorites(personId: string, opts?: any): Promise<FavoritePaging> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'include': buildCollectionParam(opts['include'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/favorites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FavoritePaging);
    }

}
