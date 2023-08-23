/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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

import { RMSiteBodyCreate } from '../model/rMSiteBodyCreate';
import { RMSiteBodyUpdate } from '../model/rMSiteBodyUpdate';
import { RMSiteEntry } from '../model/rMSiteEntry';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Gssites service.
* @module GssitesApi
*/
export class GsSitesApi extends BaseApi {
    /**
    * Create the Records Management (RM) site
    *
    *
Creates the RM site with the given details.

**Note:** The default site id is rm and the default site name is Records Management. The id of a site cannot be updated once the site has been created.

For example, to create an RM site named \"Records Management\" with \"Records Management Description\" as description, the following body could be used:
JSON
{
  \"title\": \"Records Management\",
  \"description\": \"Records Management Description\"
}

The creator will be added as a member with Site Manager role.

When you create the RM site, the **filePlan** structure is also created including special containers, such as containers for transfers, holds and, unfiled records.

    *
    * @param siteBodyCreate The site details
    * @param opts Optional parameters
    * @param opts.skipAddToFavorites Flag to indicate whether the RM site should not be added to the user's site favorites. (default to false)
    * @return Promise<RMSiteEntry>
    */
    createRMSite(siteBodyCreate: RMSiteBodyCreate, opts?: any): Promise<RMSiteEntry> {
        throwIfNotDefined(siteBodyCreate, 'siteBodyCreate');
        opts = opts || {};

        const queryParams = {
            'skipAddToFavorites': opts['skipAddToFavorites']
        };

        return this.post({
            path: '/gs-sites',
            queryParams,
            bodyParam: siteBodyCreate,
            returnType: RMSiteEntry
        });
    }
    /**
        * Delete the Records Management (RM) site
        *
        *
    Deletes the RM site.

        *
        * @return Promise<{}>
        */
    deleteRMSite(): Promise<void> {
        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/gs-sites/rm', 'DELETE',
            {}, {}, {}, {}, null,
            contentTypes, accepts);
    }

    /**
        * Get the Records Management (RM) site
        *
        *
    Gets information for RM site.

        *
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RMSiteEntry>
        */
    getRMSite(opts?: any): Promise<RMSiteEntry> {
        opts = opts || {};

        const queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        return this.get({
            path: '/gs-sites/rm',
            queryParams,
            returnType: RMSiteEntry
        });
    }
    /**
        * Update the Records Management (RM) site
        *
        *
    Update the details for the RM site. Site Manager or other (site) admin can update title or description.

    **Note**: the id, site visibility, or compliance of the RM site cannot be updated once the site has been created.

        *
        * @param siteBodyUpdate The RM site information to update.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<RMSiteEntry>
        */
    updateRMSite(siteBodyUpdate: RMSiteBodyUpdate, opts?: any): Promise<RMSiteEntry> {
        throwIfNotDefined(siteBodyUpdate, 'siteBodyUpdate');
        opts = opts || {};

        const queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        return this.put({
            path: '/gs-sites/rm',
            queryParams,
            bodyParam: siteBodyUpdate,
            returnType: RMSiteEntry
        });
    }
}
