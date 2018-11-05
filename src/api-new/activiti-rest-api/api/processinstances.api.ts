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
import { ResultListDataRepresentationDecisionTaskRepresentation } from '../model/resultListDataRepresentationDecisionTaskRepresentation';
import { ResultListDataRepresentationProcessContentRepresentation } from '../model/resultListDataRepresentationProcessContentRepresentation';
import { ResultListDataRepresentationProcessInstanceRepresentation } from '../model/resultListDataRepresentationProcessInstanceRepresentation';
import { BaseApi } from './base.api';

/**
* Processinstances service.
* @module ProcessinstancesApi
*/
export class ProcessinstancesApi extends BaseApi {
    /**
    * Activate a process instance
    * 
    * 
    * 
    * @param processInstanceId processInstanceId
    * @return Promise<ProcessInstanceRepresentation>
    */
    activateProcessInstanceUsingPUT(processInstanceId: string): Promise<ProcessInstanceRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in activateProcessInstanceUsingPUT");
        }

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
            '/enterprise/process-instances/{processInstanceId}/activate', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    createIdentityLinkUsingPOST1(processInstanceId: string, identityLinkRepresentation: IdentityLinkRepresentation): Promise<IdentityLinkRepresentation> {

        let postBody = identityLinkRepresentation;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in createIdentityLinkUsingPOST1");
        }

        if (identityLinkRepresentation === undefined || identityLinkRepresentation === null) {
            throw new Error("Required param 'identityLinkRepresentation' in createIdentityLinkUsingPOST1");
        }

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
            '/enterprise/process-instances/{processInstanceId}/identitylinks', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    deleteIdentityLinkUsingDELETE1(processInstanceId: string, family: string, identityId: string, type: string): Promise<{}> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in deleteIdentityLinkUsingDELETE1");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in deleteIdentityLinkUsingDELETE1");
        }

        if (identityId === undefined || identityId === null) {
            throw new Error("Required param 'identityId' in deleteIdentityLinkUsingDELETE1");
        }

        if (type === undefined || type === null) {
            throw new Error("Required param 'type' in deleteIdentityLinkUsingDELETE1");
        }

        let pathParams = {
            'processInstanceId': processInstanceId, 'family': family, 'identityId': identityId, 'type': type
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
            '/enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Cancel or remove a process instance
        * 
        * If the process instance has not yet been completed, it will be cancelled. If it has already finished or been cancelled then the process instance will be removed and will no longer appear in queries.
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<{}>
        */
    deleteProcessInstanceUsingDELETE(processInstanceId: string): Promise<{}> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in deleteProcessInstanceUsingDELETE");
        }

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
            '/enterprise/process-instances/{processInstanceId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List process instances using a filter
        * 
        * The request body provided must define either a valid filterId value or filter object
        * 
        * @param filterRequest filterRequest
        * @return Promise<ResultListDataRepresentationProcessInstanceRepresentation>
        */
    filterProcessInstancesUsingPOST(filterRequest: ProcessInstanceFilterRequestRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {

        let postBody = filterRequest;

        if (filterRequest === undefined || filterRequest === null) {
            throw new Error("Required param 'filterRequest' in filterProcessInstancesUsingPOST");
        }

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
            '/enterprise/process-instances/filter', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get decision tasks in a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<ResultListDataRepresentationDecisionTaskRepresentation>
        */
    getHistoricProcessInstanceDecisionTasksUsingGET(processInstanceId: string): Promise<ResultListDataRepresentationDecisionTaskRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getHistoricProcessInstanceDecisionTasksUsingGET");
        }

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
            '/enterprise/process-instances/{processInstanceId}/decision-tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get historic variables for a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<Array<ProcessInstanceVariableRepresentation>>
        */
    getHistoricProcessInstanceVariablesUsingGET(processInstanceId: string): Promise<Array<ProcessInstanceVariableRepresentation>> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getHistoricProcessInstanceVariablesUsingGET");
        }

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
            '/enterprise/process-instances/{processInstanceId}/historic-variables', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query historic process instances
        * 
        * 
        * 
        * @param queryRequest queryRequest
        * @return Promise<ResultListDataRepresentationProcessInstanceRepresentation>
        */
    getHistoricProcessInstancesUsingPOST(queryRequest: HistoricProcessInstanceQueryRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {

        let postBody = queryRequest;

        if (queryRequest === undefined || queryRequest === null) {
            throw new Error("Required param 'queryRequest' in getHistoricProcessInstancesUsingPOST");
        }

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
            '/enterprise/historic-process-instances/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    getIdentityLinkTypeUsingGET1(processInstanceId: string, family: string, identityId: string, type: string): Promise<IdentityLinkRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getIdentityLinkTypeUsingGET1");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in getIdentityLinkTypeUsingGET1");
        }

        if (identityId === undefined || identityId === null) {
            throw new Error("Required param 'identityId' in getIdentityLinkTypeUsingGET1");
        }

        if (type === undefined || type === null) {
            throw new Error("Required param 'type' in getIdentityLinkTypeUsingGET1");
        }

        let pathParams = {
            'processInstanceId': processInstanceId, 'family': family, 'identityId': identityId, 'type': type
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
            '/enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List either the users or groups involved with a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @param family family
        * @return Promise<Array<IdentityLinkRepresentation>>
        */
    getIdentityLinksForFamilyUsingGET1(processInstanceId: string, family: string): Promise<Array<IdentityLinkRepresentation>> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getIdentityLinksForFamilyUsingGET1");
        }

        if (family === undefined || family === null) {
            throw new Error("Required param 'family' in getIdentityLinksForFamilyUsingGET1");
        }

        let pathParams = {
            'processInstanceId': processInstanceId, 'family': family
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
            '/enterprise/process-instances/{processInstanceId}/identitylinks/{family}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List the users and groups involved with a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<Array<IdentityLinkRepresentation>>
        */
    getIdentityLinksUsingGET1(processInstanceId: string): Promise<Array<IdentityLinkRepresentation>> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getIdentityLinksUsingGET1");
        }

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
            '/enterprise/process-instances/{processInstanceId}/identitylinks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List content attached to process instance fields
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<ResultListDataRepresentationProcessContentRepresentation>
        */
    getProcessInstanceContentUsingGET(processInstanceId: string): Promise<ResultListDataRepresentationProcessContentRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceContentUsingGET");
        }

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
            '/enterprise/process-instances/{processInstanceId}/field-content', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get the process diagram for the process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<Array<string>>
        */
    getProcessInstanceDiagramUsingGET(processInstanceId: string): Promise<Array<string>> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceDiagramUsingGET");
        }

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
        let accepts = ['image/png'];

        return this.apiClient.callApi(
            '/enterprise/process-instances/{processInstanceId}/diagram', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a process instance start form
        * 
        * The start form for a process instance can be retrieved when the process definition has a start form defined (hasStartForm = true on the process instance)
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<FormDefinitionRepresentation>
        */
    getProcessInstanceStartFormUsingGET(processInstanceId: string): Promise<FormDefinitionRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceStartFormUsingGET");
        }

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
            '/enterprise/process-instances/{processInstanceId}/start-form', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<ProcessInstanceRepresentation>
        */
    getProcessInstanceUsingGET(processInstanceId: string): Promise<ProcessInstanceRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getProcessInstanceUsingGET");
        }

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
            '/enterprise/process-instances/{processInstanceId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query process instances
        * 
        * 
        * 
        * @param processInstancesQuery processInstancesQuery
        * @return Promise<ResultListDataRepresentationProcessInstanceRepresentation>
        */
    getProcessInstancesUsingPOST(processInstancesQuery: ProcessInstanceQueryRepresentation): Promise<ResultListDataRepresentationProcessInstanceRepresentation> {

        let postBody = processInstancesQuery;

        if (processInstancesQuery === undefined || processInstancesQuery === null) {
            throw new Error("Required param 'processInstancesQuery' in getProcessInstancesUsingPOST");
        }

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
            '/enterprise/process-instances/query', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get the audit log for a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<ProcessInstanceAuditInfoRepresentation>
        */
    getTaskAuditLogUsingGET(processInstanceId: string): Promise<ProcessInstanceAuditInfoRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in getTaskAuditLogUsingGET");
        }

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
            '/enterprise/process-instances/{processInstanceId}/audit-log', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Start a process instance
        * 
        * 
        * 
        * @param startRequest startRequest
        * @return Promise<ProcessInstanceRepresentation>
        */
    startNewProcessInstanceUsingPOST(startRequest: CreateProcessInstanceRepresentation): Promise<ProcessInstanceRepresentation> {

        let postBody = startRequest;

        if (startRequest === undefined || startRequest === null) {
            throw new Error("Required param 'startRequest' in startNewProcessInstanceUsingPOST");
        }

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
            '/enterprise/process-instances', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Suspend a process instance
        * 
        * 
        * 
        * @param processInstanceId processInstanceId
        * @return Promise<ProcessInstanceRepresentation>
        */
    suspendProcessInstanceUsingPUT(processInstanceId: string): Promise<ProcessInstanceRepresentation> {

        let postBody = null;

        if (processInstanceId === undefined || processInstanceId === null) {
            throw new Error("Required param 'processInstanceId' in suspendProcessInstanceUsingPUT");
        }

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
            '/enterprise/process-instances/{processInstanceId}/suspend', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
