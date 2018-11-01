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

import { AppDeploymentRepresentation } from '../model/appDeploymentRepresentation';
import { ResultListDataRepresentationAppDeploymentRepresentation } from '../model/resultListDataRepresentationAppDeploymentRepresentation';
import { BaseApi } from './base.api';

/**
* Runtimeappdeployments service.
* @module RuntimeappdeploymentsApi
*/
export class RuntimeappdeploymentsApi extends BaseApi {
    /**
    * Remove an app deployment
    * 
    * 
    * @param appDeploymentId appDeploymentId
    */
    deleteAppDeploymentUsingDELETE(appDeploymentId: number): Promise<{}> {

        let postBody = null;

        if (appDeploymentId === undefined || appDeploymentId === null) {
            throw new Error("Required param 'appDeploymentId' in deleteAppDeploymentUsingDELETE");
        }

        let pathParams = {
            'appDeploymentId': appDeploymentId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/runtime-app-deployments/{appDeploymentId}', 'DELETE',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Export the app archive for a deployment
        * 
        * 
        * @param deploymentId deploymentId
        */
    exportAppDefinitionUsingGET1(deploymentId: string): Promise<{}> {

        let postBody = null;

        if (deploymentId === undefined || deploymentId === null) {
            throw new Error("Required param 'deploymentId' in exportAppDefinitionUsingGET1");
        }

        let pathParams = {
            'deploymentId': deploymentId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/zip'];

        return this.apiClient.callApi(
            '/enterprise/export-app-deployment/{deploymentId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Query app deployments
        * 
        * 
        * @param nameLike nameLike
        * @param tenantId tenantId
        * @param latest latest
        * @param start start
        * @param sort sort
        * @param order order
        * @param size size
        */
    getAppDefinitionsUsingGET1(opts: any): Promise<ResultListDataRepresentationAppDeploymentRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'nameLike': opts['nameLike'],
            'tenantId': opts['tenantId'],
            'latest': opts['latest'],
            'start': opts['start'],
            'sort': opts['sort'],
            'order': opts['order'],
            'size': opts['size'],
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/runtime-app-deployments', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get an app deployment
        * 
        * 
        * @param appDeploymentId appDeploymentId
        */
    getAppDeploymentUsingGET(appDeploymentId: number): Promise<AppDeploymentRepresentation> {

        let postBody = null;

        if (appDeploymentId === undefined || appDeploymentId === null) {
            throw new Error("Required param 'appDeploymentId' in getAppDeploymentUsingGET");
        }

        let pathParams = {
            'appDeploymentId': appDeploymentId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/runtime-app-deployments/{appDeploymentId}', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get an app by deployment ID or DMN deployment ID
        * 
        * Either a deploymentId or a dmnDeploymentId must be provided
        * @param deploymentId deploymentId
        * @param dmnDeploymentId dmnDeploymentId
        */
    getRuntimeAppDeploymentByDeploymentUsingGET(opts: any): Promise<AppDeploymentRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'deploymentId': opts['deploymentId'],
            'dmnDeploymentId': opts['dmnDeploymentId'],
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/runtime-app-deployment', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
