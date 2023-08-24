/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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
import { throwIfNotDefined } from '../../../assert';

/**
* RuntimeAppDeploymentsApi service.
* @module RuntimeAppDeploymentsApi
*/
export class RuntimeAppDeploymentsApi extends BaseApi {
    /**
    * Remove an app deployment
    *
    *
    *
    * @param appDeploymentId appDeploymentId
    * @return Promise<{}>
    */
    deleteAppDeployment(appDeploymentId: number): Promise<any> {
        throwIfNotDefined(appDeploymentId, 'appDeploymentId');

        const pathParams = {
            'appDeploymentId': appDeploymentId
        };

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/runtime-app-deployments/{appDeploymentId}', 'DELETE',
            pathParams, {}, {}, {}, null,
            contentTypes, accepts);
    }

    /**
    * Export the app archive for a deployment
    *
    * @param deploymentId deploymentId
    * @return Promise<{}>
    */
    exportAppDefinition(deploymentId: string): Promise<any> {
        throwIfNotDefined(deploymentId, 'deploymentId');

        const pathParams = {
            deploymentId
        };

        const accepts = ['application/zip'];

        return this.get({
            path:  '/api/enterprise/export-app-deployment/{deploymentId}',
            pathParams,
            accepts
        });
    }

    /**
    * Query app deployments
    *
    * @param opts Optional parameters
    * @param opts.nameLike nameLike
    * @param opts.tenantId tenantId
    * @param opts.latest latest
    * @param opts.start start
    * @param opts.sort sort
    * @param opts.order order
    * @param opts.size size
    * @return Promise<ResultListDataRepresentationAppDeploymentRepresentation>
    */
    getAppDefinitions(opts?: any): Promise<ResultListDataRepresentationAppDeploymentRepresentation> {
        opts = opts || {};

        const queryParams = {
            'nameLike': opts['nameLike'],
            'tenantId': opts['tenantId'],
            'latest': opts['latest'],
            'start': opts['start'],
            'sort': opts['sort'],
            'order': opts['order'],
            'size': opts['size']
        };

        return this.get({
            path: '/api/enterprise/runtime-app-deployments',
            queryParams,
            returnType: ResultListDataRepresentationAppDeploymentRepresentation
        });
    }

    /**
    * Get an app deployment
    *
    * @param appDeploymentId appDeploymentId
    * @return Promise<AppDeploymentRepresentation>
    */
    getAppDeployment(appDeploymentId: number): Promise<AppDeploymentRepresentation> {
        throwIfNotDefined(appDeploymentId, 'appDeploymentId');

        const pathParams = {
            appDeploymentId
        };

        return this.get({
            path: '/api/enterprise/runtime-app-deployments/{appDeploymentId}',
            pathParams,
            returnType: AppDeploymentRepresentation
        });
    }

    /**
    * Get an app by deployment ID or DMN deployment ID
    *
    * Either a deploymentId or a dmnDeploymentId must be provided
    *
    * @param opts Optional parameters
    * @param opts.deploymentId deploymentId
    * @param opts.dmnDeploymentId dmnDeploymentId
    * @return Promise<AppDeploymentRepresentation>
    */
    getRuntimeAppDeploymentByDeployment(opts?: any): Promise<AppDeploymentRepresentation> {
        opts = opts || {};

        const queryParams = {
            'deploymentId': opts['deploymentId'],
            'dmnDeploymentId': opts['dmnDeploymentId']
        };

        return this.get({
            path: '/api/enterprise/runtime-app-deployment',
            queryParams,
            returnType: AppDeploymentRepresentation
        });
    }

}
