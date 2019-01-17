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
import { IntegrationAlfrescoCloudApi } from '../../../../api/activiti-rest-api/api/integrationAlfrescoCloud.api';
import { ResultListDataRepresentationAlfrescoNetworkRepresenation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationAlfrescoNetworkRepresenation';
import { ResultListDataRepresentationAlfrescoSiteRepresenation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationAlfrescoSiteRepresenation';
import { IntegrationAlfrescoOnPremiseApi } from '../../../../api/activiti-rest-api/api/integrationAlfrescoOnPremise.api';
import { ResultListDataRepresentationAlfrescoContentRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationAlfrescoContentRepresentation';
import { ResultListDataRepresentationAlfrescoEndpointRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationAlfrescoEndpointRepresentation';

/**
 * @deprecated 3.0.0
 */
export class AlfrescoApiActiviti {

    private integrationAlfrescoCloudApi: IntegrationAlfrescoCloudApi;
    private IntegrationAlfrescoOnPremiseApi: IntegrationAlfrescoOnPremiseApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.integrationAlfrescoCloudApi = new IntegrationAlfrescoCloudApi(alfrescoApi);
        this.IntegrationAlfrescoOnPremiseApi = new IntegrationAlfrescoOnPremiseApi(alfrescoApi);
    }

    confirmAuthorisation(code: string): Promise<any> {
        return this.integrationAlfrescoCloudApi.confirmAuthorisation(code);
    }

    getAllNetworks(): Promise<ResultListDataRepresentationAlfrescoNetworkRepresenation> {
        return this.integrationAlfrescoCloudApi.getAllNetworks();
    }

    getAllSites(networkId: string): Promise<ResultListDataRepresentationAlfrescoSiteRepresenation> {
        return this.integrationAlfrescoCloudApi.getAllSites(networkId);
    }

    getAllSitesByRepositoryId(repositoryId: string): Promise<ResultListDataRepresentationAlfrescoSiteRepresenation> {
        return this.IntegrationAlfrescoOnPremiseApi.getAllSites(repositoryId);
    }

    getContentInFolder(networkId: string, folderId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        return this.integrationAlfrescoCloudApi.getContentInFolder(networkId, folderId);
    }

    getContentInFolderByRepositoryId(repositoryId: string, folderId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        return this.IntegrationAlfrescoOnPremiseApi.getContentInFolder(repositoryId, folderId);
    }

    getContentInSite(networkId: string, siteId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        return this.integrationAlfrescoCloudApi.getContentInSite(networkId, siteId);
    }

    getContentInSiteByRepositoryId(repositoryId: string, siteId: string): Promise<ResultListDataRepresentationAlfrescoContentRepresentation> {
        return this.IntegrationAlfrescoOnPremiseApi.getContentInSite(repositoryId, siteId);
    }

    getRepositories(opts?: any): Promise<ResultListDataRepresentationAlfrescoEndpointRepresentation> {
        return this.IntegrationAlfrescoOnPremiseApi.getRepositories(opts);
    }
}
