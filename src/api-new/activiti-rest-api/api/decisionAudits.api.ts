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

import { DecisionAuditRepresentation } from '../model/decisionAuditRepresentation';
import { ResultListDataRepresentationDecisionAuditRepresentation } from '../model/resultListDataRepresentationDecisionAuditRepresentation';
import { BaseApi } from './base.api';

/**
* Decisionaudits service.
* @module DecisionauditsApi
*/
export class DecisionAuditsApi extends BaseApi {
    /**
    * Get an audit trail
    *
    *
    *
    * @param auditTrailId auditTrailId
    * @return Promise<DecisionAuditRepresentation>
    */
    getAuditTrail(auditTrailId: number): Promise<DecisionAuditRepresentation> {

        let postBody = null;

        if (auditTrailId === undefined || auditTrailId === null) {
            throw new Error("Required param 'auditTrailId' in getAuditTrail");
        }

        let pathParams = {
            'auditTrailId': auditTrailId
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
            '/api/enterprise/decisions/audits/{auditTrailId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query decision table audit trails
        *
        *
        *
        * @param decisionKey decisionKey
        * @param dmnDeploymentId dmnDeploymentId
        * @return Promise<ResultListDataRepresentationDecisionAuditRepresentation>
        */
    getAuditTrails(decisionKey: string, dmnDeploymentId: number): Promise<ResultListDataRepresentationDecisionAuditRepresentation> {

        let postBody = null;

        if (decisionKey === undefined || decisionKey === null) {
            throw new Error("Required param 'decisionKey' in getAuditTrails");
        }

        if (dmnDeploymentId === undefined || dmnDeploymentId === null) {
            throw new Error("Required param 'dmnDeploymentId' in getAuditTrails");
        }

        let pathParams = {

        };

        let queryParams = {
            'decisionKey': decisionKey,
            'dmnDeploymentId': dmnDeploymentId
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/decisions/audits', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
