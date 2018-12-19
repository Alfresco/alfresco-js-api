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
import { ProcessClient } from '../../../../processClient';

/**
 * @deprecated 3.0.0
 */
export class AlfrescoApiActiviti {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }


    /**
     * Function to receive the result of the confirmAuthorisation operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alfresco Cloud Authorization
     * Returns Alfresco Oauth HTML Page
     * @param {String} code code
     */
    confirmAuthorisation(code) {
        let postBody = null;

        // verify the required parameter 'code' is set
        if (code === undefined || code === null) {
            throw "Missing param 'code' in confirmAuthorisation";
        }


        let pathParams = {};
        let queryParams = {
            'code': code
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['text/html', 'application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/confirm-auth-request', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getAllNetworks operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco networks
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getAllNetworks() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/networks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getAllSites operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} networkId networkId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getAllSites(networkId) {
        let postBody = null;

        // verify the required parameter 'networkId' is set
        if (networkId === undefined || networkId === null) {
            throw "Missing param 'networkId' in getAllSites";
        }


        let pathParams = {
            'networkId': networkId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getAllSites operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} repositoryId repositoryId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getAllSitesByRepositoryId(repositoryId) {
        let postBody = null;

        // verify the required parameter 'repositoryId' is set
        if (repositoryId === undefined || repositoryId === null) {
            throw "Missing param 'repositoryId' in getAllSites";
        }


        let pathParams = {
            'repositoryId': repositoryId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco/{repositoryId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getContentInFolder operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific folder
     * @param {String} networkId networkId
     * @param {String} folderId folderId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getContentInFolder(networkId, folderId) {
        let postBody = null;

        // verify the required parameter 'networkId' is set
        if (networkId === undefined || networkId === null) {
            throw "Missing param 'networkId' in getContentInFolder";
        }

        // verify the required parameter 'folderId' is set
        if (folderId === undefined || folderId === null) {
            throw "Missing param 'folderId' in getContentInFolder";
        }


        let pathParams = {
            'networkId': networkId,
            'folderId': folderId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getContentInFolder operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific folder
     * @param {String} repositoryId repositoryId
     * @param {String} folderId folderId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getContentInFolderByRepositoryId(repositoryId, folderId) {
        let postBody = null;

        // verify the required parameter 'repositoryId' is set
        if (repositoryId === undefined || repositoryId === null) {
            throw "Missing param 'repositoryId' in getContentInFolder";
        }

        // verify the required parameter 'folderId' is set
        if (folderId === undefined || folderId === null) {
            throw "Missing param 'folderId' in getContentInFolder";
        }


        let pathParams = {
            'repositoryId': repositoryId,
            'folderId': folderId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getContentInSite operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific site
     * @param {String} networkId networkId
     * @param {String} siteId siteId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getContentInSite(networkId, siteId) {
        let postBody = null;

        // verify the required parameter 'networkId' is set
        if (networkId === undefined || networkId === null) {
            throw "Missing param 'networkId' in getContentInSite";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in getContentInSite";
        }


        let pathParams = {
            'networkId': networkId,
            'siteId': siteId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getContentInSite operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific site
     * @param {String} repositoryId repositoryId
     * @param {String} siteId siteId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getContentInSiteByRepositoryId(repositoryId, siteId) {
        let postBody = null;

        // verify the required parameter 'repositoryId' is set
        if (repositoryId === undefined || repositoryId === null) {
            throw "Missing param 'repositoryId' in getContentInSite";
        }

        // verify the required parameter 'siteId' is set
        if (siteId === undefined || siteId === null) {
            throw "Missing param 'siteId' in getContentInSite";
        }


        let pathParams = {
            'repositoryId': repositoryId,
            'siteId': siteId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getRepositories operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco repositories
     * A tenant administrator can configure one or more Alfresco repositories to use when working with content.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.tenantId tenantId
     * @param {Boolean} opts.includeAccounts includeAccounts
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getRepositories(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'tenantId': opts['tenantId'],
            'includeAccounts': opts['includeAccounts']
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/profile/accounts/alfresco', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
