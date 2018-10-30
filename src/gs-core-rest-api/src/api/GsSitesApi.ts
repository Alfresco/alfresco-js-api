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
import { Error } from '../model/Error';
import { RMSiteBodyCreate } from '../model/RMSiteBodyCreate';
import { RMSiteBodyUpdate } from '../model/RMSiteBodyUpdate';
import { RMSiteEntry } from '../model/RMSiteEntry';


/**
 * Gssites service.
 * @module api/GsSitesApi
 * @version 0.1.0
 */

/**
 * Constructs a new GsSitesApi.
 * @alias :api/GsSitesApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class GsSitesApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }


    /**
     * Create the Records Management (RM) site
     *  Creates the RM site with the given details.  **Note:** The default site id is rm and the default site name is Records Management. The id of a site cannot be updated once the site has been created.  For example, to create an RM site named \&quot;Records Management\&quot; with \&quot;Records Management Description\&quot; as description, the following body could be used: &#x60;&#x60;&#x60;JSON {   \&quot;title\&quot;: \&quot;Records Management\&quot;,   \&quot;description\&quot;: \&quot;Records Management Description\&quot; } &#x60;&#x60;&#x60;  The creator will be added as a member with Site Manager role.  When you create the RM site, the **filePlan** structure is also created including special containers, such as containers for transfers, holds and, unfiled records.
     * @param {RMSiteBodyCreate} siteBodyCreate The site details
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.skipAddToFavorites Flag to indicate whether the RM site should not be added to the user&#39;s site favorites. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRMSiteEntry} and HTTP response
     */
    createRMSite = function (siteBodyCreate, opts) {
        opts = opts || {};
        let postBody = siteBodyCreate;

        // verify the required parameter 'siteBodyCreate' is set
        if (siteBodyCreate === undefined || siteBodyCreate === null) {
            throw new Error("Missing param 'siteBodyCreate' in createRMSite");
        }


        let pathParams = {};
        let queryParams = {
            'skipAddToFavorites': opts['skipAddToFavorites']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RMSiteEntry;

        return this.apiClient.callApi(
            '/gs-sites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Delete the Records Management (RM) site
     *  Deletes the RM site.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRMSite = function () {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/gs-sites/rm', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Get the Records Management (RM) site
     *  Gets information for RM site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRMSiteEntry} and HTTP response
     */
    getRMSite = function (opts) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RMSiteEntry;

        return this.apiClient.callApi(
            '/gs-sites/rm', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Update the Records Management (RM) site
     *  Update the details for the RM site. Site Manager or other (site) admin can update title or description.  **Note**: the id, site visibility, or compliance of the RM site cannot be updated once the site has been created.
     * @param {RMSiteBodyUpdate} siteBodyUpdate The RM site information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRMSiteEntry} and HTTP response
     */
    updateRMSite = function (siteBodyUpdate, opts) {
        opts = opts || {};
        let postBody = siteBodyUpdate;

        // verify the required parameter 'siteBodyUpdate' is set
        if (siteBodyUpdate === undefined || siteBodyUpdate === null) {
            throw new Error("Missing param 'siteBodyUpdate' in updateRMSite");
        }


        let pathParams = {};
        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RMSiteEntry;

        return this.apiClient.callApi(
            '/gs-sites/rm', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

}
