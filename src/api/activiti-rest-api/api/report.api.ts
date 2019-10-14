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

import { BaseApi } from './base.api';

export class ReportApi extends BaseApi {

    /**
     * Create the default reports
     */
    createDefaultReports() {
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/default-reports', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    getTasksByProcessDefinitionId(reportId: string, processDefinitionId: string) {
        let postBody = null;

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in getTasksByProcessDefinitionId";
        }

        if (processDefinitionId === undefined || processDefinitionId === null) {
            throw "Missing param 'processDefinitionId' in getTasksByProcessDefinitionId";
        }

        let pathParams = {
            'reportId': reportId
        };
        let queryParams = {
            'processDefinitionId': processDefinitionId
        };
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/app/rest/reporting/report-params/{reportId}/tasks', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    getReportsByParams(reportId: string, paramsQuery: Object) {
        let postBody = paramsQuery;

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in getReportsByParams";
        }

        let pathParams = {
            'reportId': reportId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/report-params/{reportId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    getProcessDefinitions() {
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/process-definitions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    getReportParams(reportId: string) {
        let postBody = null;

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in getReportParams";
        }

        let pathParams = {
            'reportId': reportId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/report-params/{reportId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    getReportList() {
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/reports', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    updateReport(reportId: string, name: string) {
        let postBody = {
            'name': name
        };

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in updateReport";
        }

        let pathParams = {
            'reportId': reportId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/reports/{reportId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to export a report
     */

    /**
     * Export a report
     * @param {string} reportId
     * @param {module:model/ReportExportQueryRepresentation} queryParams
     */
    exportToCsv(reportId: string, queryParams: { reportName?: string }) {
        let postBody = queryParams;

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in exportToCsv";
        }

        if (queryParams === undefined || queryParams === null) {
            throw "Missing param 'queryParams' in exportToCsv";
        }

        if (queryParams.reportName === undefined || queryParams.reportName === null) {
            throw "Missing param 'reportName' in exportToCsv";
        }

        let pathParams = {
            'reportId': reportId
        };
        let headerParams = {};
        let formParams = {};
        queryParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/app/rest/reporting/reports/{reportId}/export-to-csv', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to save a report
     */

    /**
     * Save a report
     * @param {string} reportId
     * @param {module:model/ReportSaveQueryRepresentation} queryParams
     */
    saveReport(reportId: string, queryParams: { reportName?: string, __reportName?: string }) {
        let postBody = queryParams;

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in saveReport";
        }

        if (queryParams === undefined || queryParams === null) {
            throw "Missing param 'queryParams' in queryParams";
        }

        if (queryParams.reportName === undefined || queryParams.reportName === null) {
            throw "Missing param 'reportName' in exportToCsv";
        }

        queryParams.__reportName = queryParams.reportName;

        let pathParams = {
            'reportId': reportId
        };
        let headerParams = {};
        let formParams = {};
        queryParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/reports/{reportId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

    /**
     * Function to delete a report
     */

    /**
     * Save a report
     * @param {string} reportId
     */
    deleteReport(reportId: string) {
        let postBody = null;

        if (reportId === undefined || reportId === null) {
            throw "Missing param 'reportId' in delete";
        }

        let pathParams = {
            'reportId': reportId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];


        return this.apiClient.callApi(
            '/app/rest/reporting/reports/{reportId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts
        );
    }

}
