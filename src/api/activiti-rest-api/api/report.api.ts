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

import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';
import { ReportParametersDefinition } from './reportParametersDefinition';
import { ReportParameterValue } from './reportParameterValue';
import { ReportQuery } from './reportQuery';

export class ReportApi extends BaseApi {

    /**
     * Create the default reports
     */
    createDefaultReports(): Promise<any> {
        return this.post({
            path: '/app/rest/reporting/default-reports'
        });
    }

    getTasksByProcessDefinitionId(reportId: string, processDefinitionId: string): Promise<string[]> {
        throwIfNotDefined(reportId, 'reportId');
        throwIfNotDefined(processDefinitionId, 'processDefinitionId');

        const pathParams = {
            reportId
        };
        const queryParams = {
            processDefinitionId
        };

        return this.get({
            path: '/app/rest/reporting/report-params/{reportId}/tasks',
            pathParams,
            queryParams
        });
    }

    getReportsByParams(reportId: string, bodyParam: ReportQuery) {
        throwIfNotDefined(reportId, 'reportId');

        const pathParams = {
            reportId
        };

        return this.post({
            path: '/app/rest/reporting/report-params/{reportId}',
            pathParams,
            bodyParam,
        });
    }

    getProcessDefinitions(): Promise<ReportParameterValue[]> {
        return this.get({
            path: '/app/rest/reporting/process-definitions'
        });
    }

    getReportParams(reportId: string): Promise<ReportParametersDefinition> {
        throwIfNotDefined(reportId, 'reportId');

        const pathParams = {
            reportId
        };

        return this.get({
            path: '/app/rest/reporting/report-params/{reportId}',
            pathParams,
            returnType: ReportParametersDefinition
        });
    }

    getReportList(): Promise<ReportParametersDefinition[]> {
        return this.get({
            path: '/app/rest/reporting/reports',
        });
    }

    updateReport(reportId: string, name: string): Promise<any> {
        throwIfNotDefined(reportId, 'reportId');

        const postBody = {
            name
        };

        const pathParams = {
            reportId
        };

        return this.put({
            path: '/app/rest/reporting/reports/{reportId}',
            pathParams,
            bodyParam: postBody
        });
    }

    /**
     * Export a report
     * @param {string} reportId
     * @param bodyParam
     */
    exportToCsv(reportId: string, bodyParam: ReportQuery): Promise<any> {
        throwIfNotDefined(reportId, 'reportId');
        throwIfNotDefined(bodyParam, 'bodyParam');
        throwIfNotDefined(bodyParam.reportName, 'reportName');

        const pathParams = {
            'reportId': reportId
        };

        return this.post({
            path: '/app/rest/reporting/reports/{reportId}/export-to-csv',
            pathParams,
            bodyParam
        });
    }

    /**
     * Save a report
     * @param {string} reportId
     * @param opts
     */
    saveReport(reportId: string, opts: ReportQuery): Promise<any> {
        throwIfNotDefined(reportId, 'reportId');
        throwIfNotDefined(opts, 'opts');
        throwIfNotDefined(opts.reportName, 'reportName');

        const bodyParam = {
            reportName: opts.reportName,
            __reportName: opts.reportName
        }

        const pathParams = {
            'reportId': reportId
        };

        return this.post({
            path: '/app/rest/reporting/reports/{reportId}',
            pathParams,
            bodyParam,
        });
    }

    /**
     * Delete a report
     * @param {string} reportId
     */
    deleteReport(reportId: string): Promise<void> {
        throwIfNotDefined(reportId, 'reportId');

        const pathParams = {
            reportId
        };

        return this.delete({
            path: '/app/rest/reporting/reports/{reportId}',
            pathParams
        });
    }
}
