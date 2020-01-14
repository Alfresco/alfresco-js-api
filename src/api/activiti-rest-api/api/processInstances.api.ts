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

import { CreateProcessInstanceRepresentation } from '../model/createProcessInstanceRepresentation';
import { FormDefinitionRepresentation } from '../model/formDefinitionRepresentation';
import { HistoricProcessInstanceQueryRepresentation } from '../model/historicProcessInstanceQueryRepresentation';
import { IdentityLinkRepresentation } from '../model/identityLinkRepresentation';
import { ProcessInstanceAuditInfoRepresentation } from '../model/processInstanceAuditInfoRepresentation';
import { ProcessInstanceFilterRequestRepresentation } from '../model/processInstanceFilterRequestRepresentation';
import { ProcessInstanceQueryRepresentation } from '../model/processInstanceQueryRepresentation';
import { ProcessInstanceRepresentation } from '../model/processInstanceRepresentation';
import { ProcessInstanceVariableRepresentation } from '../model/processInstanceVariableRepresentation';
import { ResultListDataRepresentationProcessContentRepresentation } from '../model/resultListDataRepresentationProcessContentRepresentation';
import { ResultListDataRepresentationProcessInstanceRepresentation } from '../model/resultListDataRepresentationProcessInstanceRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';
import { ResultListDataRepresentationDecisionTaskRepresentation } from '../model/resultListDataRepresentationDecisionTaskRepresentation';

/**
 * Processinstances service.
 * @module ProcessinstancesApi
 */
export class ProcessInstancesApi extends BaseApi {
    /**
     * Activate a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ProcessInstanceRepresentation>
     */
    activateProcessInstance(processInstanceId: string): Promise<ProcessInstanceRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/activate', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessInstanceRepresentation);
    }

    /**
     * Add a user or group involvement to a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @param identityLinkRepresentation identityLinkRepresentation
     * @return Promise<IdentityLinkRepresentation>
     */
    createIdentityLink(processInstanceId: string, identityLinkRepresentation: IdentityLinkRepresentation): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(identityLinkRepresentation, 'identityLinkRepresentation');

        let postBody = identityLinkRepresentation;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/identitylinks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * Remove a user or group involvement from a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @param family family
     * @param identityId identityId
     * @param type type
     * @return Promise<{}>
     */
    deleteIdentityLink(processInstanceId: string, family: string, identityId: string, type: string): Promise<any> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(family, 'family');
        throwIfNotDefined(identityId, 'identityId');
        throwIfNotDefined(type, 'type');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId, 'family': family, 'identityId': identityId, 'type': type
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Cancel or remove a process instance
     *
     * If the process instance has not yet been completed, it will be cancelled. If it has already finished or been cancelled then the process instance will be removed and will no longer appear in queries.
     *
     * @param processInstanceId processInstanceId
     * @return Promise<{}>
     */
    deleteProcessInstance(processInstanceId: string): Promise<any> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * List process instances using a filter
     *
     * The request body provided must define either a valid filterId value or filter object
     *
     * @param filterRequest filterRequest
     * @return Promise<ResultListDataRepresentationProcessInstanceRepresentation>
     */
    filterProcessInstances(filterRequest: ProcessInstanceFilterRequestRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {
        throwIfNotDefined(filterRequest, 'filterRequest');

        let postBody = filterRequest;

        let pathParams = {};

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/filter', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationProcessInstanceRepresentation);
    }

    /**
     * Get decision tasks in a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ResultListDataRepresentationDecisionTaskRepresentation>
     */
    getHistoricProcessInstanceDecisionTasks(processInstanceId: string): Promise<ResultListDataRepresentationDecisionTaskRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
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
            '/api/enterprise/process-instances/{processInstanceId}/decision-tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
     /**
     * Get historic variables for a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ProcessInstanceVariableRepresentation>
     */
    getHistoricProcessInstanceVariables(processInstanceId: string): Promise<ProcessInstanceVariableRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/historic-variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessInstanceVariableRepresentation);
    }

    /**
     * Query historic process instances
     *
     *
     *
     * @param queryRequest queryRequest
     * @return Promise<ResultListDataRepresentationProcessInstanceRepresentation>
     */
    getHistoricProcessInstances(queryRequest: HistoricProcessInstanceQueryRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {
        throwIfNotDefined(queryRequest, 'queryRequest');

        let postBody = queryRequest;

        let pathParams = {};

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/historic-process-instances/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationProcessInstanceRepresentation);
    }

    /**
     * Get a user or group involvement with a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @param family family
     * @param identityId identityId
     * @param type type
     * @return Promise<IdentityLinkRepresentation>
     */
    getIdentityLinkType(processInstanceId: string, family: string, identityId: string, type: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(family, 'family');
        throwIfNotDefined(identityId, 'identityId');
        throwIfNotDefined(type, 'type');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId, 'family': family, 'identityId': identityId, 'type': type
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * List either the users or groups involved with a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @param family family
     * @return Promise<IdentityLinkRepresentation>
     */
    getIdentityLinksForFamily(processInstanceId: string, family: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');
        throwIfNotDefined(family, 'family');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId, 'family': family
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/identitylinks/{family}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * List the users and groups involved with a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<IdentityLinkRepresentation>
     */
    getIdentityLinks(processInstanceId: string): Promise<IdentityLinkRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/identitylinks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, IdentityLinkRepresentation);
    }

    /**
     * List content attached to process instance fields
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ResultListDataRepresentationProcessContentRepresentation>
     */
    getProcessInstanceContent(processInstanceId: string): Promise<ResultListDataRepresentationProcessContentRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/field-content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationProcessContentRepresentation);
    }

    /**
     * Get the process diagram for the process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<string>
     */
    getProcessInstanceDiagram(processInstanceId: string): Promise<string> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['image/png'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/diagram', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Get a process instance start form
     *
     * The start form for a process instance can be retrieved when the process definition has a start form defined (hasStartForm = true on the process instance)
     *
     * @param processInstanceId processInstanceId
     * @return Promise<FormDefinitionRepresentation>
     */
    getProcessInstanceStartForm(processInstanceId: string): Promise<FormDefinitionRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/start-form', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, FormDefinitionRepresentation);
    }

    /**
     * Get a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ProcessInstanceRepresentation>
     */
    getProcessInstance(processInstanceId: string): Promise<ProcessInstanceRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessInstanceRepresentation);
    }

    /**
     * Query process instances
     *
     *
     *
     * @param processInstancesQuery processInstancesQuery
     * @return Promise<ResultListDataRepresentationProcessInstanceRepresentation>
     */
    getProcessInstances(processInstancesQuery: ProcessInstanceQueryRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {
        throwIfNotDefined(processInstancesQuery, 'processInstancesQuery');

        let postBody = processInstancesQuery;

        let pathParams = {};

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationProcessInstanceRepresentation);
    }

    /**
     * Get the audit log for a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ProcessInstanceAuditInfoRepresentation>
     */
    getTaskAuditLog(processInstanceId: string): Promise<ProcessInstanceAuditInfoRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/audit-log', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessInstanceAuditInfoRepresentation);
    }

    /**
     * Retrieve the process audit in the PDF format
     * @param {String} processInstanceId processId
     */
    getProcessAuditPdf(processInstanceId: string): Promise<any> {
        let postBody = null;

        // verify the required parameter 'processId' is set
        if (processInstanceId === undefined || processInstanceId === null) {
            throw "Missing param 'processId' in getProcessAuditPdf";
        }

        let pathParams = {
            'processInstanceId': processInstanceId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        let contextRoot = null;
        let responseType = null;

        return this.apiClient.callApi(
            '/app/rest/process-instances/{processInstanceId}/audit', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, null, contextRoot, responseType
        );
    }

    /**
     * Start a process instance
     *
     *
     *
     * @param startRequest startRequest
     * @return Promise<ProcessInstanceRepresentation>
     */
    startNewProcessInstance(startRequest: CreateProcessInstanceRepresentation): Promise<ProcessInstanceRepresentation> {
        throwIfNotDefined(startRequest, 'startRequest');

        let postBody = startRequest;

        let pathParams = {};

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessInstanceRepresentation);
    }

    /**
     * Suspend a process instance
     *
     *
     *
     * @param processInstanceId processInstanceId
     * @return Promise<ProcessInstanceRepresentation>
     */
    suspendProcessInstance(processInstanceId: string): Promise<ProcessInstanceRepresentation> {
        throwIfNotDefined(processInstanceId, 'processInstanceId');

        let postBody = null;

        let pathParams = {
            'processInstanceId': processInstanceId
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/process-instances/{processInstanceId}/suspend', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ProcessInstanceRepresentation);
    }

}
