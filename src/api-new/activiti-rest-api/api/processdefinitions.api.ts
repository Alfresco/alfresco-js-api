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

import { FormDefinitionRepresentation } from '../model/formDefinitionRepresentation';
import { FormValueRepresentation } from '../model/formValueRepresentation';
import { IdentityLinkRepresentation } from '../model/identityLinkRepresentation';
import { ResultListDataRepresentationProcessDefinitionRepresentation } from '../model/resultListDataRepresentationProcessDefinitionRepresentation';
import { ResultListDataRepresentationRuntimeDecisionTableRepresentation } from '../model/resultListDataRepresentationRuntimeDecisionTableRepresentation';
import { ResultListDataRepresentationRuntimeFormRepresentation } from '../model/resultListDataRepresentationRuntimeFormRepresentation';
import { BaseApi } from './base.api';

/**
* Processdefinitions service.
* @module ProcessdefinitionsApi
*/
export class ProcessdefinitionsApi extends BaseApi {
    /**
    * Add a user or group involvement to a process definition
    * 
    * 
    * 
    * @param  processDefinitionId processDefinitionId
    * @param  identityLinkRepresentation identityLinkRepresentation
    * @return Promise<IdentityLinkRepresentation>
    */
    createIdentityLinkUsingPOST(processDefinitionId: string, identityLinkRepresentation: IdentityLinkRepresentation): Promise<IdentityLinkRepresentation> {

        let postBody = identityLinkRepresentation;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in createIdentityLinkUsingPOST");
        }

        if (identityLinkRepresentation === undefined || identityLinkRepresentation === null) {
            throw new Error("Required param 'identityLinkRepresentation' in createIdentityLinkUsingPOST");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId
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
            '/enterprise/process-definitions/{processDefinitionId}/identitylinks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Remove a user or group involvement from a process definition
        * 
        * 
        * 
        * @param  processDefinitionId Process definition ID
        * @param  family Identity type
        * @param  identityId User or group ID
        * @return Promise<{}>
        */
    deleteIdentityLinkUsingDELETE(processDefinitionId: string, family: string, identityId: string): Promise<{}> {

        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in deleteIdentityLinkUsingDELETE");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in deleteIdentityLinkUsingDELETE");
        }

        if (identityId === undefined || identityId === null) {
            throw new Error("Required param 'identityId' in deleteIdentityLinkUsingDELETE");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId, 'family': family, 'identityId': identityId
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
            '/enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a user or group involvement with a process definition
        * 
        * 
        * 
        * @param  processDefinitionId Process definition ID
        * @param  family Identity type
        * @param  identityId User or group ID
        * @return Promise<IdentityLinkRepresentation>
        */
    getIdentityLinkTypeUsingGET(processDefinitionId: string, family: string, identityId: string): Promise<IdentityLinkRepresentation> {

        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in getIdentityLinkTypeUsingGET");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in getIdentityLinkTypeUsingGET");
        }

        if (identityId === undefined || identityId === null) {
            throw new Error("Required param 'identityId' in getIdentityLinkTypeUsingGET");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId, 'family': family, 'identityId': identityId
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
            '/enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List either the users or groups involved with a process definition
        * 
        * 
        * 
        * @param  processDefinitionId processDefinitionId
        * @param  family Identity type
        * @return Promise<any>
        */
    getIdentityLinksForFamilyUsingGET(processDefinitionId: string, family: string): Promise<any> {

        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in getIdentityLinksForFamilyUsingGET");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in getIdentityLinksForFamilyUsingGET");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId, 'family': family
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
            '/enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List the users and groups involved with a process definition
        * 
        * 
        * 
        * @param  processDefinitionId processDefinitionId
        * @return Promise<any>
        */
    getIdentityLinksUsingGET(processDefinitionId: string): Promise<any> {

        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in getIdentityLinksUsingGET");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId
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
            '/enterprise/process-definitions/{processDefinitionId}/identitylinks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List the decision tables associated with a process definition
        * 
        * 
        * 
        * @param  processDefinitionId processDefinitionId
        * @return Promise<ResultListDataRepresentationRuntimeDecisionTableRepresentation>
        */
    getProcessDefinitionDecisionTablesUsingGET(processDefinitionId: string): Promise<ResultListDataRepresentationRuntimeDecisionTableRepresentation> {

        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in getProcessDefinitionDecisionTablesUsingGET");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId
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
            '/enterprise/process-definitions/{processDefinitionId}/decision-tables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List the forms associated with a process definition
        * 
        * 
        * 
        * @param  processDefinitionId processDefinitionId
        * @return Promise<ResultListDataRepresentationRuntimeFormRepresentation>
        */
    getProcessDefinitionFormsUsingGET(processDefinitionId: string): Promise<ResultListDataRepresentationRuntimeFormRepresentation> {

        let postBody = null;

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw new Error("Required param 'processDefinitionId' in getProcessDefinitionFormsUsingGET");
        }

        let pathParams = {
            'processDefinitionId': processDefinitionId
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
            '/enterprise/process-definitions/{processDefinitionId}/forms', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve the start form for a process definition
        * 
        * 
        * 
        * @return Promise<FormDefinitionRepresentation>
        */
    getProcessDefinitionStartFormUsingGET(): Promise<FormDefinitionRepresentation> {

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
            '/enterprise/process-definitions/{processDefinitionId}/start-form', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve a list of process definitions
        * 
        * Get a list of process definitions (visible within the tenant of the user)
        * 
        * @param Object opts Optional parameters
        * @param  opts.latest latest
        * @param  opts.appDefinitionId appDefinitionId
        * @param  opts.deploymentId deploymentId
        * @return Promise<ResultListDataRepresentationProcessDefinitionRepresentation>
        */
    getProcessDefinitionsUsingGET(opts: any): Promise<ResultListDataRepresentationProcessDefinitionRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'latest': opts['latest'],
            'appDefinitionId': opts['appDefinitionId'],
            'deploymentId': opts['deploymentId']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/process-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve field values (eg. the typeahead field)
        * 
        * 
        * 
        * @return Promise<any>
        */
    getRestFieldValuesUsingGET(): Promise<any> {

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
            '/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve field values (eg. the table field)
        * 
        * 
        * 
        * @return Promise<any>
        */
    getRestTableFieldValuesUsingGET(): Promise<any> {

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
            '/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
