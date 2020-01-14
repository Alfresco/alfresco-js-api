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
import { throwIfNotDefined } from '../../../assert';

/**
 * Processdefinitions service.
 * @module ProcessdefinitionsApi
 */
export class ProcessDefinitionsApi extends BaseApi {
    /**
     * Add a user or group involvement to a process definition
     *
     *
     *
     * @param processDefinitionId processDefinitionId
     * @param identityLinkRepresentation identityLinkRepresentation
     * @return Promise<IdentityLinkRepresentation>
     */
    createIdentityLink(processDefinitionId: string, identityLinkRepresentation: IdentityLinkRepresentation): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        throwIfNotDefined(identityLinkRepresentation, 'identityLinkRepresentation');

        let postBody = identityLinkRepresentation;

        let pathParams = {
            'processDefinitionId': processDefinitionId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/identitylinks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * Remove a user or group involvement from a process definition
     *
     *
     *
     * @param processDefinitionId Process definition ID
     * @param family Identity type
     * @param identityId User or group ID
     * @return Promise<{}>
     */
    deleteIdentityLink(processDefinitionId: string, family: string, identityId: string): Promise<any> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        throwIfNotDefined(family, 'family');
        throwIfNotDefined(identityId, 'identityId');

        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId, 'family': family, 'identityId': identityId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Get a user or group involvement with a process definition
     *
     *
     *
     * @param processDefinitionId Process definition ID
     * @param family Identity type
     * @param identityId User or group ID
     * @return Promise<IdentityLinkRepresentation>
     */
    getIdentityLinkType(processDefinitionId: string, family: string, identityId: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        throwIfNotDefined(family, 'family');
        throwIfNotDefined(identityId, 'identityId');

        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId, 'family': family, 'identityId': identityId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * List either the users or groups involved with a process definition
     *
     *
     *
     * @param processDefinitionId processDefinitionId
     * @param family Identity type
     * @return Promise<IdentityLinkRepresentation>
     */
    getIdentityLinksForFamily(processDefinitionId: string, family: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        throwIfNotDefined(family, 'family');

        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId, 'family': family
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * List the users and groups involved with a process definition
     *
     *
     *
     * @param processDefinitionId processDefinitionId
     * @return Promise<IdentityLinkRepresentation>
     */
    getIdentityLinks(processDefinitionId: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/identitylinks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * List the decision tables associated with a process definition
     *
     *
     *
     * @param processDefinitionId processDefinitionId
     * @return Promise<ResultListDataRepresentationRuntimeDecisionTableRepresentation>
     */
    getProcessDefinitionDecisionTables(processDefinitionId: string): Promise<ResultListDataRepresentationRuntimeDecisionTableRepresentation> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/decision-tables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationRuntimeDecisionTableRepresentation);
    }

    /**
     * List the forms associated with a process definition
     *
     *
     *
     * @param processDefinitionId processDefinitionId
     * @return Promise<ResultListDataRepresentationRuntimeFormRepresentation>
     */
    getProcessDefinitionForms(processDefinitionId: string): Promise<ResultListDataRepresentationRuntimeFormRepresentation> {
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');
        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/forms', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationRuntimeFormRepresentation);
    }

    /**
     * Retrieve the start form for a process definition
     *
     *
     * @param processDefinitionId processDefinitionId
     * @return Promise<FormDefinitionRepresentation>
     */
    getProcessDefinitionStartForm(processDefinitionId: string): Promise<FormDefinitionRepresentation> {

        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/start-form', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormDefinitionRepresentation);
    }

    /**
     * Retrieve a list of process definitions
     *
     * Get a list of process definitions (visible within the tenant of the user)
     *
     * @param opts Optional parameters
     * @param opts.latest latest
     * @param opts.appDefinitionId appDefinitionId
     * @param opts.deploymentId deploymentId
     * @return Promise<ResultListDataRepresentationProcessDefinitionRepresentation>
     */
    getProcessDefinitions(opts?: any): Promise<ResultListDataRepresentationProcessDefinitionRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {};

        let queryParams = {
            'latest': opts['latest'],
            'appDefinitionId': opts['appDefinitionId'],
            'deploymentId': opts['deploymentId']
        };

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationProcessDefinitionRepresentation);
    }

    /**
     * Retrieve field values (eg. the typeahead field)
     *
     * @param processDefinitionId processDefinitionId
     *
     * @return Promise<FormValueRepresentation[]>
     */
    getRestFieldValues(processDefinitionId: string, field: string): Promise<FormValueRepresentation []> {

        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId,
            'field': field
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormValueRepresentation);
    }

    /**
     * Retrieve field values (eg. the table field)
     *
     * @param processDefinitionId processDefinitionId
     *
     * @return Promise<FormValueRepresentation []>
     */
    getRestTableFieldValues(processDefinitionId: string, field: string, column: string): Promise<FormValueRepresentation []> {

        let postBody = null;

        let pathParams = {
            'processDefinitionId': processDefinitionId,
            'field': field,
            'column': column
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormValueRepresentation);
    }

}
