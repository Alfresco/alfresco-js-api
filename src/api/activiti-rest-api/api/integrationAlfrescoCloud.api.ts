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
import { ResultListDataRepresentationAlfrescoNetworkRepresenation } from '../model/resultListDataRepresentationAlfrescoNetworkRepresenation';
import { ResultListDataRepresentationAlfrescoSiteRepresenation } from '../model/resultListDataRepresentationAlfrescoSiteRepresenation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Integrationalfrescocloud service.
* @module IntegrationalfrescocloudApi
*/
export class IntegrationAlfrescoCloudApi extends BaseApi {
    /**
    * Alfresco Cloud Authorization
    *
    * Returns Alfresco OAuth HTML Page
    *
    * @param code code
    * @return Promise<{}>
    */
    confirmAuthorisation(code: string): Promise<any> {
        throwIfNotDefined(code, 'code');

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'code': code
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['text/html'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/confirm-auth-request', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List Alfresco networks
        *
        *
        *
        * @return Promise<ResultListDataRepresentationAlfrescoNetworkRepresenation>
        */
    getAllNetworks(): Promise<ResultListDataRepresentationAlfrescoNetworkRepresenation> {

        let postBody = null;

        let pathParams = {

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
            '/api/enterprise/integration/alfresco-cloud/networks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoNetworkRepresenation);
    }
    /**
        * List Alfresco sites
        *
        * Returns ALL Sites
        *
        * @param networkId networkId
        * @return Promise<ResultListDataRepresentationAlfrescoSiteRepresenation>
        */
    getAllSites(networkId: string): Promise<ResultListDataRepresentationAlfrescoSiteRepresenation> {
        throwIfNotDefined(networkId, 'networkId');

        let postBody = null;

        let pathParams = {
            'networkId': networkId
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
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoSiteRepresenation);
    }
    /**
        * List files and folders inside a specific folder identified by path
        *
        *
        *
        * @param networkId networkId
        * @param opts Optional parameters
        * @param opts.siteId siteId
        * @param opts.path path
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInFolderPath(networkId: string, opts?: any): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        throwIfNotDefined(networkId, 'networkId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'networkId': networkId
        };

        let queryParams = {
            'siteId': opts['siteId'],
            'path': opts['path']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/folderpath/{folderPath}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoContentRepresentation);
    }
    /**
        * List files and folders inside a specific folder
        *
        *
        *
        * @param networkId networkId
        * @param folderId folderId
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInFolder(networkId: string, folderId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        throwIfNotDefined(networkId, 'networkId');
        throwIfNotDefined(folderId, 'folderId');

        let postBody = null;

        let pathParams = {
            'networkId': networkId, 'folderId': folderId
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
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoContentRepresentation);
    }
    /**
        * List files and folders inside a specific site
        *
        *
        *
        * @param networkId networkId
        * @param siteId siteId
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInSite(networkId: string, siteId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        throwIfNotDefined(networkId, 'networkId');
        throwIfNotDefined(siteId, 'siteId');

        let postBody = null;

        let pathParams = {
            'networkId': networkId, 'siteId': siteId
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
            '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationAlfrescoContentRepresentation);
    }

}
