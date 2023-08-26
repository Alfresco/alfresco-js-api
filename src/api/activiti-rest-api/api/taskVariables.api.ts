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

import { } from '../model/';
import { RestVariable } from '../model/restVariable';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* TaskVariablesApi service.
* @module TaskVariablesApi
*/
export class TaskVariablesApi extends BaseApi {
    /**
    * Create variables
    *
    * @param taskId taskId
    * @param restVariables restVariables
    * @return Promise<RestVariable>
    */
    createTaskVariable(taskId: string, restVariables: RestVariable): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(restVariables, 'restVariables');

        const pathParams = {
            taskId
        };

        return this.post({
            path: '/api/enterprise/tasks/{taskId}/variables',
            pathParams,
            bodyParam: restVariables,
            returnType: RestVariable
        });
    }

    /**
    * Create or update variables
    *
    * @param taskId taskId
    * @return Promise<{}>
    */
    deleteAllLocalTaskVariables(taskId: string): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');

        const pathParams = {
            taskId
        };

        return this.delete({
            path: '/api/enterprise/tasks/{taskId}/variables',
            pathParams
        });
    }

    /**
    * Delete a variable
    *
    * @param taskId taskId
    * @param variableName variableName
    * @param opts Optional parameters
    * @return Promise<{}>
    */
    deleteVariable(taskId: string, variableName: string, opts?: { scope?: string }): Promise<any> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(variableName, 'variableName');

        const pathParams = {
            taskId,
            variableName
        };

        return this.delete({
            path: '/api/enterprise/tasks/{taskId}/variables/{variableName}',
            pathParams,
            queryParams: opts
        });
    }
    /**
    * Get a variable
    *
    * @param taskId taskId
    * @param variableName variableName
    * @param opts Optional parameters
    * @return Promise<RestVariable>
    */
    getVariable(taskId: string, variableName: string, opts?: { scope?: string }): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(variableName, 'variableName');

        const pathParams = {
            taskId,
            variableName
        };

        return this.get({
            path: '/api/enterprise/tasks/{taskId}/variables/{variableName}',
            pathParams,
            queryParams: opts,
            returnType: RestVariable
        });
    }

    /**
    * List variables
    *
    * @param taskId taskId
    * @param opts Optional parameters
    * @return Promise<RestVariable>
    */
    getVariables(taskId: string, opts?: { scope?: string }): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');

        const pathParams = {
            taskId
        };

        return this.get({
            path: '/api/enterprise/tasks/{taskId}/variables',
            pathParams,
            queryParams: opts,
            returnType: RestVariable
        });
    }

    /**
    * Update a variable
    *
    * @param taskId taskId
    * @param variableName variableName
    * @param restVariable restVariable
    * @return Promise<RestVariable>
    */
    updateVariable(taskId: string, variableName: string, restVariable: RestVariable): Promise<RestVariable> {
        throwIfNotDefined(taskId, 'taskId');
        throwIfNotDefined(variableName, 'variableName');
        throwIfNotDefined(restVariable, 'restVariable');

        const pathParams = {
            'taskId': taskId,
            'variableName': variableName
        };

        return this.put({
            path: '/api/enterprise/tasks/{taskId}/variables/{variableName}',
            pathParams,
            bodyParam: restVariable,
            returnType: RestVariable
        });
    }
}
