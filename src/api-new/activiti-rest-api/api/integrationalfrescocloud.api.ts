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

/**
* Integrationalfrescocloud service.
* @module IntegrationalfrescocloudApi
*/
export class IntegrationalfrescocloudApi extends BaseApi {
    /**
    * Alfresco Cloud Authorization
    * 
    * Returns Alfresco OAuth HTML Page
    * 
    * @param  code code
    * @return Promise<{}>
    */
    confirmAuthorisationUsingGET(code: string): Promise<{}> {

        let postBody = null;

        if (code === undefined || code === null) {
            throw new Error("Required param 'code' in confirmAuthorisationUsingGET");
        }

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
            '/enterprise/integration/alfresco-cloud/confirm-auth-request', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List Alfresco networks
        * 
        * 
        * 
        * @return Promise<ResultListDataRepresentationAlfrescoNetworkRepresenation>
        */
    getAllNetworksUsingGET(): Promise<ResultListDataRepresentationAlfrescoNetworkRepresenation> {

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
            '/enterprise/integration/alfresco-cloud/networks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List Alfresco sites
        * 
        * Returns ALL Sites
        * 
        * @param  networkId networkId
        * @return Promise<ResultListDataRepresentationAlfrescoSiteRepresenation>
        */
    getAllSitesUsingGET(networkId: string): Promise<ResultListDataRepresentationAlfrescoSiteRepresenation> {

        let postBody = null;

        if (networkId === undefined || networkId === null) {
            throw new Error("Required param 'networkId' in getAllSitesUsingGET");
        }

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
            '/enterprise/integration/alfresco-cloud/networks/{networkId}/sites', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List files and folders inside a specific folder identified by path
        * 
        * 
        * 
        * @param  networkId networkId
        * @param Object opts Optional parameters
        * @param  opts.siteId siteId
        * @param  opts.path path
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInFolderPathUsingGET(networkId: string, opts: any): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (networkId === undefined || networkId === null) {
            throw new Error("Required param 'networkId' in getContentInFolderPathUsingGET");
        }

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
            '/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/folderpath/{folderPath}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List files and folders inside a specific folder
        * 
        * 
        * 
        * @param  networkId networkId
        * @param  folderId folderId
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInFolderUsingGET(networkId: string, folderId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {

        let postBody = null;

        if (networkId === undefined || networkId === null) {
            throw new Error("Required param 'networkId' in getContentInFolderUsingGET");
        }

        if (folderId === undefined || folderId === null) {
            throw new Error("Required param 'folderId' in getContentInFolderUsingGET");
        }

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
            '/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List files and folders inside a specific site
        * 
        * 
        * 
        * @param  networkId networkId
        * @param  siteId siteId
        * @return Promise<ResultListDataRepresentationAlfrescoContentRepresentation>
        */
    getContentInSiteUsingGET(networkId: string, siteId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {

        let postBody = null;

        if (networkId === undefined || networkId === null) {
            throw new Error("Required param 'networkId' in getContentInSiteUsingGET");
        }

        if (siteId === undefined || siteId === null) {
            throw new Error("Required param 'siteId' in getContentInSiteUsingGET");
        }

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
            '/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
