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

import { SiteBodyCreate } from '../model/siteBodyCreate';
import { SiteBodyUpdate } from '../model/siteBodyUpdate';
import { SiteContainerEntry } from '../model/siteContainerEntry';
import { SiteContainerPaging } from '../model/siteContainerPaging';
import { SiteEntry } from '../model/siteEntry';
import { SiteMemberEntry } from '../model/siteMemberEntry';
import { SiteMemberPaging } from '../model/siteMemberPaging';
import { SiteMembershipBodyCreate } from '../model/siteMembershipBodyCreate';
import { SiteMembershipBodyUpdate } from '../model/siteMembershipBodyUpdate';
import { SiteMembershipRequestBodyCreate } from '../model/siteMembershipRequestBodyCreate';
import { SiteMembershipRequestBodyUpdate } from '../model/siteMembershipRequestBodyUpdate';
import { SiteMembershipRequestEntry } from '../model/siteMembershipRequestEntry';
import { SiteMembershipRequestPaging } from '../model/siteMembershipRequestPaging';
import { SiteMembershipRequestWithPersonPaging } from '../model/siteMembershipRequestWithPersonPaging';
import { SitePaging } from '../model/sitePaging';
import { SiteRoleEntry } from '../model/siteRoleEntry';
import { SiteRolePaging } from '../model/siteRolePaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Sites service.
* @module SitesApi
*/
export class SitesApi extends BaseApi {
    /**
    * Approve a site membership request
    *
    * Approve a site membership request.

    *
    * @param siteId The identifier of a site.
    * @param inviteeId The invitee user name.
    * @param opts Optional parameters
    * @param opts.siteMembershipApprovalBody Accepting a request to join, optionally, allows assignment of a role to the user.

    * @return Promise<{}>
    */
    approveSiteMembershipRequest(siteId: string, inviteeId: string, opts?: any): Promise<any> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(inviteeId, 'inviteeId');

        opts = opts || {};
        let postBody = opts['siteMembershipApprovalBody'];

        let pathParams = {
            'siteId': siteId, 'inviteeId': inviteeId
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
            '/sites/{siteId}/site-membership-requests/{inviteeId}/approve', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Create a site
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Creates a default site with the given details.  Unless explicitly specified, the site id will be generated
    from the site title. The site id must be unique and only contain alphanumeric and/or dash characters.

    Note: the id of a site cannot be updated once the site has been created.

    For example, to create a public site called \"Marketing\" the following body could be used:
    JSON
    {
      \"title\": \"Marketing\",
      \"visibility\": \"PUBLIC\"
    }


    The creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.

    **Note:** if skipped then such a site will **not** work within Share.

    The addition of the site to the user's site favorites can be skipped via the **skipAddToFavorites** query parameter.

    The creator will be added as a member with Site Manager role.

    When you create a site, a container called **documentLibrary** is created for you in the new site.
    This container is the root folder for content stored in the site.

        *
        * @param siteBodyCreate The site details
        * @param opts Optional parameters
        * @param opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
        * @param opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user's site favorites. (default to false)
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
    createSite(siteBodyCreate: SiteBodyCreate, opts?: any): Promise<SiteEntry> {
        throwIfNotDefined(siteBodyCreate, 'siteBodyCreate');

        opts = opts || {};
        let postBody = siteBodyCreate;

        let pathParams = {

        };

        let queryParams = {
            'skipConfiguration': opts['skipConfiguration'],
            'skipAddToFavorites': opts['skipAddToFavorites'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/sites', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteEntry);
    }
    /**
        * Create a site membership
        *
        * Creates a site membership for person **personId** on site **siteId**.

    You can set the **role** to one of four types:

    * SiteConsumer
    * SiteCollaborator
    * SiteContributor
    * SiteManager

    **Note:** You can create more than one site membership by
    specifying a list of people in the JSON body like this:

    JSON
    [
      {
        \"role\": \"SiteConsumer\",
        \"id\": \"joe\"
      },
      {
        \"role\": \"SiteConsumer\",
        \"id\": \"fred\"
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
        * @param siteId The identifier of a site.
        * @param siteMembershipBodyCreate The person to add and their role
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteMemberEntry>
        */
    createSiteMembership(siteId: string, siteMembershipBodyCreate: SiteMembershipBodyCreate, opts?: any): Promise<SiteMemberEntry> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(siteMembershipBodyCreate, 'siteMembershipBodyCreate');

        opts = opts || {};
        let postBody = siteMembershipBodyCreate;

        let pathParams = {
            'siteId': siteId
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
            '/sites/{siteId}/members', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMemberEntry);
    }
    /**
        * Create a site membership request
        *
        * Create a site membership request for yourself on the site with the identifier of **id**, specified in the JSON body.
    The result of the request differs depending on the type of site.

    * For a **public** site, you join the site immediately as a SiteConsumer.
    * For a **moderated** site, your request is added to the site membership request list. The request waits for approval from the Site Manager.
    * You cannot request membership of a **private** site. Members are invited by the site administrator.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

     **Note:** You can create site membership requests for more than one site by
    specifying a list of sites in the JSON body like this:

    JSON
    [
      {
        \"message\": \"Please can you add me\",
        \"id\": \"test-site-1\",
        \"title\": \"Request for test site 1\",
      },
      {
        \"message\": \"Please can you add me\",
        \"id\": \"test-site-2\",
        \"title\": \"Request for test site 2\",
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
        * @param siteMembershipRequestBodyCreate Site membership request details
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteMembershipRequestEntry>
        */
    createSiteMembershipRequestForPerson(personId: string, siteMembershipRequestBodyCreate: SiteMembershipRequestBodyCreate, opts?: any): Promise<SiteMembershipRequestEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(siteMembershipRequestBodyCreate, 'siteMembershipRequestBodyCreate');

        opts = opts || {};
        let postBody = siteMembershipRequestBodyCreate;

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
            '/people/{personId}/site-membership-requests', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMembershipRequestEntry);
    }
    /**
        * Delete a site
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Deletes the site with **siteId**.

        *
        * @param siteId The identifier of a site.
        * @param opts Optional parameters
        * @param opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
        * @return Promise<{}>
        */
    deleteSite(siteId: string, opts?: any): Promise<any> {
        throwIfNotDefined(siteId, 'siteId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'siteId': siteId
        };

        let queryParams = {
            'permanent': opts['permanent']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/sites/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a site membership
        *
        * Deletes person **personId** as a member of site **siteId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param siteId The identifier of a site.
        * @param personId The identifier of a person.
        * @return Promise<{}>
        */
    deleteSiteMembership(siteId: string, personId: string): Promise<any> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(personId, 'personId');

        let postBody = null;

        let pathParams = {
            'siteId': siteId, 'personId': personId
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
            '/sites/{siteId}/members/{personId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a site membership
        *
        * Deletes person **personId** as a member of site **siteId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param siteId The identifier of a site.
        * @return Promise<{}>
        */
    deleteSiteMembershipForPerson(personId: string, siteId: string): Promise<any> {
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
            '/people/{personId}/sites/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a site membership request
        *
        * Deletes the site membership request to site **siteId** for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param siteId The identifier of a site.
        * @return Promise<{}>
        */
    deleteSiteMembershipRequestForPerson(personId: string, siteId: string): Promise<any> {
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
            '/people/{personId}/site-membership-requests/{siteId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a site
        *
        * Gets information for site **siteId**.

    You can use the **relations** parameter to include one or more related
    entities in a single response and so reduce network traffic.

    The entity types in Alfresco are organized in a tree structure.
    The **sites** entity has two children, **containers** and **members**.
    The following relations parameter returns all the container and member
    objects related to the site **siteId**:


    containers,members


        *
        * @param siteId The identifier of a site.
        * @param opts Optional parameters
        * @param opts.relations Use the relations parameter to include one or more related entities in a single response.
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
    getSite(siteId: string, opts?: any): Promise<SiteEntry> {
        throwIfNotDefined(siteId, 'siteId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'siteId': siteId
        };

        let queryParams = {
            'relations': buildCollectionParam(opts['relations'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/sites/{siteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteEntry);
    }
    /**
        * Get a site container
        *
        * Gets information on the container **containerId** in site **siteId**.
        *
        * @param siteId The identifier of a site.
        * @param containerId The unique identifier of a site container.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteContainerEntry>
        */
    getSiteContainer(siteId: string, containerId: string, opts?: any): Promise<SiteContainerEntry> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(containerId, 'containerId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'siteId': siteId, 'containerId': containerId
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
            '/sites/{siteId}/containers/{containerId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteContainerEntry);
    }
    /**
        * Get a site membership
        *
        * Gets site membership information for person **personId** on site **siteId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param siteId The identifier of a site.
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteMemberEntry>
        */
    getSiteMembership(siteId: string, personId: string, opts?: any): Promise<SiteMemberEntry> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'siteId': siteId, 'personId': personId
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
            '/sites/{siteId}/members/{personId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMemberEntry);
    }
    /**
        * Get a site membership
        *
        * Gets site membership information for person **personId** on site **siteId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param siteId The identifier of a site.
        * @return Promise<SiteRoleEntry>
        */
    getSiteMembershipForPerson(personId: string, siteId: string): Promise<SiteRoleEntry> {
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
            '/people/{personId}/sites/{siteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteRoleEntry);
    }
    /**
        * Get a site membership request
        *
        * Gets the site membership request for site **siteId** for person **personId**, if one exists.

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

        * @return Promise<SiteMembershipRequestEntry>
        */
    getSiteMembershipRequestForPerson(personId: string, siteId: string, opts?: any): Promise<SiteMembershipRequestEntry> {
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
            '/people/{personId}/site-membership-requests/{siteId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMembershipRequestEntry);
    }
    /**
        * Get site membership requests
        *
        * Get the list of site membership requests the user can action.

    You can use the **where** parameter to filter the returned site membership requests by **siteId**. For example:


    (siteId=mySite)


    The **where** parameter can also be used to filter by ***personId***. For example:


    where=(personId=person)


    This may be combined with the siteId filter, as shown below:


    where=(siteId=mySite AND personId=person))


        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteMembershipRequestWithPersonPaging>
        */
    getSiteMembershipRequests(opts?: any): Promise<SiteMembershipRequestWithPersonPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/site-membership-requests', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMembershipRequestWithPersonPaging);
    }
    /**
        * List site containers
        *
        * Gets a list of containers for the site **siteId**.
        *
        * @param siteId The identifier of a site.
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

        * @return Promise<SiteContainerPaging>
        */
    listSiteContainers(siteId: string, opts?: any): Promise<SiteContainerPaging> {
        throwIfNotDefined(siteId, 'siteId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'siteId': siteId
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
            '/sites/{siteId}/containers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteContainerPaging);
    }
    /**
        * List site membership requests
        *
        * Gets a list of the current site membership requests for person **personId**.

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

        * @return Promise<SiteMembershipRequestPaging>
        */
    listSiteMembershipRequestsForPerson(personId: string, opts?: any): Promise<SiteMembershipRequestPaging> {
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
            '/people/{personId}/site-membership-requests', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMembershipRequestPaging);
    }
    /**
        * List site memberships
        *
        * Gets a list of site memberships for site **siteId**.
        *
        * @param siteId The identifier of a site.
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

        * @return Promise<SiteMemberPaging>
        */
    listSiteMemberships(siteId: string, opts?: any): Promise<SiteMemberPaging> {
        throwIfNotDefined(siteId, 'siteId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'siteId': siteId
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
            '/sites/{siteId}/members', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMemberPaging);
    }
    /**
        * List site memberships
        *
        * Gets a list of site membership information for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

    You can use the **where** parameter to filter the returned sites by **visibility** or site **preset**.

    Example to filter by **visibility**, use any one of:


    (visibility='PRIVATE')
    (visibility='PUBLIC')
    (visibility='MODERATED')


    Example to filter by site **preset**:


    (preset='site-dashboard')


    The default sort order for the returned list is for sites to be sorted by ascending title.
    You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
    * id
    * title
    * role

        *
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.relations Use the relations parameter to include one or more related entities in a single response.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @return Promise<SiteRolePaging>
        */
    listSiteMembershipsForPerson(personId: string, opts?: any): Promise<SiteRolePaging> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'relations': buildCollectionParam(opts['relations'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv'),
            'where': opts['where']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteRolePaging);
    }
    /**
        * List sites
        *
        * Gets a list of sites in this repository.

    You can use the **where** parameter to filter the returned sites by **visibility** or site **preset**.

    Example to filter by **visibility**, use any one of:


    (visibility='PRIVATE')
    (visibility='PUBLIC')
    (visibility='MODERATED')


    Example to filter by site **preset**:


    (preset='site-dashboard')


    The default sort order for the returned list is for sites to be sorted by ascending title.
    You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
    * id
    * title
    * description

    You can use the **relations** parameter to include one or more related
    entities in a single response and so reduce network traffic.

    The entity types in Alfresco are organized in a tree structure.
    The **sites** entity has two children, **containers** and **members**.
    The following relations parameter returns all the container and member
    objects related to each site:


    containers,members


        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.relations Use the relations parameter to include one or more related entities in a single response.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @return Promise<SitePaging>
        */
    listSites(opts?: any): Promise<SitePaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': buildCollectionParam(opts['orderBy'], 'csv'),
            'relations': buildCollectionParam(opts['relations'], 'csv'),
            'fields': buildCollectionParam(opts['fields'], 'csv'),
            'where': opts['where']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SitePaging);
    }
    /**
        * Reject a site membership request
        *
        * Reject a site membership request.

        *
        * @param siteId The identifier of a site.
        * @param inviteeId The invitee user name.
        * @param opts Optional parameters
        * @param opts.siteMembershipRejectionBody Rejecting a request to join, optionally, allows the inclusion of comment.

        * @return Promise<{}>
        */
    rejectSiteMembershipRequest(siteId: string, inviteeId: string, opts?: any): Promise<any> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(inviteeId, 'inviteeId');

        opts = opts || {};
        let postBody = opts['siteMembershipRejectionBody'];

        let pathParams = {
            'siteId': siteId, 'inviteeId': inviteeId
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
            '/sites/{siteId}/site-membership-requests/{inviteeId}/reject', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update a site
        *
        * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

    Update the details for the given site **siteId**. Site Manager or otherwise a
    (site) admin can update title, description or visibility.

    Note: the id of a site cannot be updated once the site has been created.

        *
        * @param siteId The identifier of a site.
        * @param siteBodyUpdate The site information to update.
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
    updateSite(siteId: string, siteBodyUpdate: SiteBodyUpdate, opts?: any): Promise<SiteEntry> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(siteBodyUpdate, 'siteBodyUpdate');

        opts = opts || {};
        let postBody = siteBodyUpdate;

        let pathParams = {
            'siteId': siteId
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
            '/sites/{siteId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteEntry);
    }
    /**
        * Update a site membership
        *
        * Update the membership of person **personId** in site **siteId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

    You can set the **role** to one of four types:

    * SiteConsumer
    * SiteCollaborator
    * SiteContributor
    * SiteManager

        *
        * @param siteId The identifier of a site.
        * @param personId The identifier of a person.
        * @param siteMembershipBodyUpdate The persons new role
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteMemberEntry>
        */
    updateSiteMembership(siteId: string, personId: string, siteMembershipBodyUpdate: SiteMembershipBodyUpdate, opts?: any): Promise<SiteMemberEntry> {
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(siteMembershipBodyUpdate, 'siteMembershipBodyUpdate');

        opts = opts || {};
        let postBody = siteMembershipBodyUpdate;

        let pathParams = {
            'siteId': siteId, 'personId': personId
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
            '/sites/{siteId}/members/{personId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMemberEntry);
    }
    /**
        * Update a site membership request
        *
        * Updates the message for the site membership request to site **siteId** for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.

        *
        * @param personId The identifier of a person.
        * @param siteId The identifier of a site.
        * @param siteMembershipRequestBodyUpdate The new message to display
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<SiteMembershipRequestEntry>
        */
    updateSiteMembershipRequestForPerson(personId: string, siteId: string, siteMembershipRequestBodyUpdate: SiteMembershipRequestBodyUpdate, opts?: any): Promise<SiteMembershipRequestEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(siteMembershipRequestBodyUpdate, 'siteMembershipRequestBodyUpdate');

        opts = opts || {};
        let postBody = siteMembershipRequestBodyUpdate;

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
            '/people/{personId}/site-membership-requests/{siteId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, SiteMembershipRequestEntry);
    }

}
