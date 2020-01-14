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

import { ResultListDataRepresentationAlfrescoContentRepresentation } from '../model/resultListDataRepresentationAlfrescoContentRepresentation';
import { ResultListDataRepresentationAlfrescoEndpointRepresentation } from '../model/resultListDataRepresentationAlfrescoEndpointRepresentation';
import { ResultListDataRepresentationAlfrescoSiteRepresenation } from '../model/resultListDataRepresentationAlfrescoSiteRepresenation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Integrationalfrescoonpremise service.
* @module IntegrationalfrescoonpremiseApi
*/
export class IntegrationAlfrescoOnPremiseApi extends BaseApi {
    /**
    * List Alfresco sites
    *
    * Returns ALL Sites
    *
    * @param repositoryId repositoryId
    * @return Promise<ResultListDataRepresentationAlfrescoSiteRepresenation>
    */
    getAllSites(repositoryId: string): Promise<ResultListDataRepresentationAlfrescoSiteRepresenation> {
        throwIfNotDefined(repositoryId, 'networkId');

        let postBody = null;

        let pathParams = {
            'repositoryId': repositoryId
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
            '/api/enterprise/integration/alfresco/{repositoryId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoSiteRepresenation);
    }
    /**
        * List files and folders inside a specific folder identified by folder path
        *
        *
        *
        * @param repositoryId repositoryId
        * @param siteId siteId
        * @param folderPath folderPath
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInFolderPath(repositoryId: string, siteId: string, folderPath: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        throwIfNotDefined(repositoryId, 'networkId');
        throwIfNotDefined(siteId, 'siteId');
        throwIfNotDefined(folderPath, 'folderPath');

        let postBody = null;

        let pathParams = {
            'repositoryId': repositoryId, 'siteId': siteId, 'folderPath': folderPath
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
            '/api/enterprise/rest/integration/alfresco/{repositoryId}/sites/{siteId}/folderpath/{folderPath}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoContentRepresentation);
    }
    /**
        * List files and folders inside a specific folder
        *
        *
        *
        * @param repositoryId repositoryId
        * @param folderId folderId
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInFolder(repositoryId: string, folderId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        throwIfNotDefined(repositoryId, 'networkId');
        throwIfNotDefined(folderId, 'folderId');

        let postBody = null;

        let pathParams = {
            'repositoryId': repositoryId, 'folderId': folderId
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
            '/api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoContentRepresentation);
    }
    /**
        * List files and folders inside a specific site
        *
        *
        *
        * @param repositoryId repositoryId
        * @param siteId siteId
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInSite(repositoryId: string, siteId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        throwIfNotDefined(repositoryId, 'networkId');
        throwIfNotDefined(siteId, 'siteId');

        let postBody = null;

        let pathParams = {
            'repositoryId': repositoryId, 'siteId': siteId
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
            '/api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoContentRepresentation);
    }
    /**
        * List Alfresco repositories
        *
        * A tenant administrator can configure one or more Alfresco repositories to use when working with content.
        *
        * @param opts Optional parameters
        * @param opts.tenantId tenantId
        * @param opts.includeAccounts includeAccounts (default to true)
        * @return Promise<ResultListDataRepresentationAlfrescoEndpointRepresentation>
        */
    getRepositories(opts?: any): Promise<ResultListDataRepresentationAlfrescoEndpointRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'tenantId': opts['tenantId'],
            'includeAccounts': opts['includeAccounts']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/profile/accounts/alfresco', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoEndpointRepresentation);
    }

}
