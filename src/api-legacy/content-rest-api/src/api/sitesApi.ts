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

import { SiteBodyUpdate } from '../../../../api/content-rest-api/model/siteBodyUpdate';
import { SiteBodyCreate } from '../../../../api/content-rest-api/model/siteBodyCreate';
import { SitesApi as NewSitesApi } from '../../../../api/content-rest-api/api/sites.api';
import { AlfrescoApi } from '../../../../alfrescoApi';
import { SiteMemberEntry } from '../../../../api/content-rest-api/model/siteMemberEntry';
import { SiteMembershipBodyCreate } from '../../../../api/content-rest-api/model/siteMembershipBodyCreate';
import { SiteEntry } from '../../../../api/content-rest-api/model/siteEntry';
import { SiteContainerEntry } from '../../../../api/content-rest-api/model/siteContainerEntry';
import { SiteContainerPaging } from '../../../../api/content-rest-api/model/siteContainerPaging';
import { SiteMemberPaging } from '../../../../api/content-rest-api/model/siteMemberPaging';
import { SitePaging } from '../../../../api/content-rest-api/model/sitePaging';
import { SiteMembershipBodyUpdate } from '../../../../api/content-rest-api/model/siteMembershipBodyUpdate';

/**
 * @deprecated 3.0.0
 */
export class SitesApi {

    private sitesApi: NewSitesApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.sitesApi = new NewSitesApi(alfrescoApi);
    }

    /**
     * Add a person
     * Adds person **personId** as a member of site **siteId**.\n\nYou can set the **role** to one of four types:\n\n* SiteConsumer\n* SiteCollaborator\n* SiteContributor\n* SiteManager\n
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMemberBody} siteMemberBody The person to add and their role
     * data is of type: {module:model/SiteMemberEntry}
     */
    addSiteMember(siteId: string, siteMemberBody: SiteMembershipBodyCreate): Promise<SiteMemberEntry> {
        return this.sitesApi.createSiteMembership(siteId, siteMemberBody);
    }

    /**
     * Create a site
     * Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user&#39;s site favorites. (default to false)
     * data is of type: {module:model/SiteEntry}
     */
    createSite(siteBody: SiteBodyCreate, opts?: any): Promise<SiteEntry> {
        return this.sitesApi.createSite(siteBody, opts);
    }

    /**
     * Update a site
     * Update existing site
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    updateSite(siteId: string, siteBody: SiteBodyUpdate, opts?: any): Promise<SiteEntry> {
        return this.sitesApi.updateSite(siteId, siteBody, opts);
    }

    /**
     * Delete a site
     * Deletes the site with **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    deleteSite(siteId: string, opts?: any): Promise<any> {
        return this.sitesApi.deleteSite(siteId, opts);
    }

    /**
     * Get a site
     * Returns information for site **siteId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the site **siteId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    getSite(siteId: string, opts?: any): Promise<SiteEntry> {
        return this.sitesApi.getSite(siteId, opts);
    }

    /**
     * Get a container
     * Returns information on the container **containerId** in site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} containerId The unique identifier of a site container.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteContainerEntry}
     */
    getSiteContainer(siteId: string, containerId: string, opts?: any): Promise<SiteContainerEntry> {
        return this.sitesApi.getSiteContainer(siteId, containerId, opts);
    }

    /**
     * Get containers
     * Returns a list of containers information for site identified by **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteContainerPaging}
     */
    getSiteContainers(siteId: string, opts?: any): Promise<SiteContainerPaging> {
        return this.sitesApi.listSiteContainers(siteId, opts);
    }

    /**
     * Get a site member
     * Returns site membership information for person **personId** on site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMemberEntry}
     */
    getSiteMember(siteId: string, personId: string, opts?: any): Promise<SiteMemberEntry> {
        return this.sitesApi.getSiteMembership(siteId, personId, opts);
    }

    /**
     * Get members
     * Returns a list of site memberships for site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMemberPaging}
     */
    getSiteMembers(siteId: string, opts?: any): Promise<SiteMemberPaging> {
        return this.sitesApi.listSiteMemberships(siteId, opts);
    }

    /**
     * Get sites
     * Returns a list of sites in this repository. You can sort the list if sites using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each site:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {string[]} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    getSites(opts?: any): Promise<SitePaging> {
        return this.sitesApi.listSites(opts);
    }

    /**
     * Delete a site member
     * Removes person **personId** as a member of site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     */
    removeSiteMember(siteId: string, personId: string): Promise<any> {
        return this.sitesApi.deleteSiteMembership(siteId, personId);
    }

    /**
     * Update a site member
     * Update the membership of person **personId** in site **siteId**.\n\nYou can set the **role** to one of four types:\n\n* SiteConsumer\n* SiteCollaborator\n* SiteContributor\n* SiteManager\n
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMemberRoleBody} siteMemberRoleBody The persons new role
     * data is of type: {module:model/SiteMemberEntry}
     */
    updateSiteMember(siteId: string, personId: string, siteMemberRoleBody: SiteMembershipBodyUpdate): Promise<SiteMemberEntry> {
        return this.sitesApi.updateSiteMembership(siteId, personId, siteMemberRoleBody);
    }
}
