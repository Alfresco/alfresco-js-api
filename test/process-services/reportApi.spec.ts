/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ReportsMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Reports;

describe('Activiti Report Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.reportsMock = new ReportsMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('should create the default reports', function (done) {
        this.reportsMock.get200ResponseCreateDefaultReport();
        this.alfrescoJsApi.activiti.reportApi.createDefaultReports().then(function () {
            done();
        });
    });

    it('should return the tasks referring to the process id', function (done) {

        let reportId = '11015'; // String | reportId
        let processDefinitionId = 'Process_sid-0FF10DA3-E2BD-4E6A-9013-6D66FC8A4716:1:30004'; // String | processDefinitionId

        this.reportsMock.get200ResponseTasksByProcessDefinitionId(reportId, processDefinitionId);

        this.alfrescoJsApi.activiti.reportApi.getTasksByProcessDefinitionId(reportId, processDefinitionId).then((data: any) => {
            expect(data.length).equal(3);
            expect(data[0]).equal('Fake Task 1');
            expect(data[1]).equal('Fake Task 2');
            expect(data[2]).equal('Fake Task 3');
            done();
        });
    });

    it('should return the chart reports', function (done) {

        let reportId = '11015'; // String | reportId
        let paramsQuery = { status: 'All' };

        this.reportsMock.get200ResponseReportsByParams(reportId, paramsQuery);

        this.alfrescoJsApi.activiti.reportApi.getReportsByParams(reportId, paramsQuery).then((data: any) => {
            expect(data.elements.length).equal(3);
            expect(data.elements[0].type).equal('table');

            expect(data.elements[1].type).equal('pieChart');
            expect(data.elements[1].titleKey).equal('REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.PROC-INST-CHART-TITLE');

            expect(data.elements[2].type).equal('table');
            expect(data.elements[2].titleKey).equal('REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.DETAIL-TABLE');
            done();
        });
    });

    it('should return the process definitions when the appId is not provided', function (done) {

        this.reportsMock.get200ResponseProcessDefinitions();

        this.alfrescoJsApi.activiti.reportApi.getProcessDefinitions().then((res: any) => {
            expect(res.length).equal(4);
            expect(res[0].id).equal('Process_sid-0FF10DA3-E2BD-4E6A-9013-6D66FC8A4716:1:30004');
            expect(res[0].name).equal('Fake Process Name 1');

            expect(res[1].id).equal('SecondProcess:1:15027');
            expect(res[1].name).equal('Fake Process Name 2');

            expect(res[2].id).equal('Simpleprocess:15:10004');
            expect(res[2].name).equal('Fake Process Name 3');

            expect(res[3].id).equal('fruitorderprocess:5:42530');
            expect(res[3].name).equal('Fake Process Name 4');

            done();
        });
    });

    it('should return the report list', function (done) {

        this.reportsMock.get200ResponseReportList();

        this.alfrescoJsApi.activiti.reportApi.getReportList().then((res: any) => {

            expect(res.length).equal(5);

            expect(res[0].id).equal(11011);
            expect(res[0].name).equal('Process definition heat map');

            expect(res[1].id).equal(11012);
            expect(res[1].name).equal('Process definition overview');

            expect(res[2].id).equal(11013);
            expect(res[2].name).equal('Process instances overview');

            expect(res[3].id).equal(11014);
            expect(res[3].name).equal('Task overview');

            expect(res[4].id).equal(11015);
            expect(res[4].name).equal('Task service level agreement');

            done();
        });
    });

    it('should return the report parameters', function (done) {

        let reportId = '11013'; // String | reportId
        this.reportsMock.get200ResponseReportParams(reportId);

        this.alfrescoJsApi.activiti.reportApi.getReportParams(reportId).then((res: any) => {
            let paramsDefinition = JSON.parse(res.definition);

            expect(res.id).equal(11013);
            expect(res.name).equal('Process instances overview');
            expect(paramsDefinition.parameters.length).equal(4);

            expect(paramsDefinition.parameters[0].id).equal('processDefinitionId');
            expect(paramsDefinition.parameters[0].nameKey).equal('REPORTING.DEFAULT-REPORTS.PROCESS-INSTANCES-OVERVIEW.PROCESS-DEFINITION');
            expect(paramsDefinition.parameters[0].type).equal('processDefinition');

            expect(paramsDefinition.parameters[1].id).equal('dateRange');
            expect(paramsDefinition.parameters[1].nameKey).equal('REPORTING.DEFAULT-REPORTS.PROCESS-INSTANCES-OVERVIEW.DATE-RANGE');
            expect(paramsDefinition.parameters[1].type).equal('dateRange');

            expect(paramsDefinition.parameters[2].id).equal('slowProcessInstanceInteger');
            expect(paramsDefinition.parameters[2].nameKey).equal('REPORTING.DEFAULT-REPORTS.PROCESS-INSTANCES-OVERVIEW.SLOW-PROC-INST-NUMBER');
            expect(paramsDefinition.parameters[2].type).equal('integer');

            expect(paramsDefinition.parameters[3].id).equal('status');
            expect(paramsDefinition.parameters[3].nameKey).equal('REPORTING.PROCESS-STATUS');
            expect(paramsDefinition.parameters[3].type).equal('status');

            done();
        });
    });

    it('should update the report', function (done) {

        let reportId = '11015'; // String | reportId
        let name = 'New Fake Name'; // String | reportId
        this.reportsMock.get200ResponseUpdateReport(reportId);

        this.alfrescoJsApi.activiti.reportApi.updateReport(reportId, name).then(function () {
            done();
        });
    });

    it('should export the report', function (done) {

        let reportId = '11015'; // String | reportId
        let queryParams = {
            'processDefinitionId': 'TEST:99:999',
            'dateRange': {
                'startDate': '2017-01-01T00:00:00.000Z',
                'endDate': '2017-01-24T23:59:59.999Z',
                'rangeId': 'currentYear'
            },
            'slowProcessInstanceInteger': 10,
            'status': 'All',
            'reportName': 'FAKE_REPORT_NAME'
        };
        this.reportsMock.get200ResponseExportReport(reportId);

        this.alfrescoJsApi.activiti.reportApi.exportToCsv(reportId, queryParams).then(function (response: any) {
            expect(response).not.equal(null);
            expect(response).not.equal(undefined);
            done();
        });
    });

    it('should save the report', function (done) {

        let reportId = '11015'; // String | reportId
        let queryParams = {
            'processDefinitionId': 'TEST:99:999',
            'dateRange': {
                'startDate': '2017-01-01T00:00:00.000Z',
                'endDate': '2017-01-24T23:59:59.999Z',
                'rangeId': 'currentYear'
            },
            'slowProcessInstanceInteger': 10,
            'status': 'All',
            'reportName': 'FAKE_REPORT_NAME'
        };
        this.reportsMock.get200ResponseSaveReport(reportId);

        this.alfrescoJsApi.activiti.reportApi.saveReport(reportId, queryParams).then(function () {
            done();
        });
    });

    it('should delete a report', function (done) {

        let reportId = '11015'; // String | reportId
        this.reportsMock.get200ResponseDeleteReport(reportId);

        this.alfrescoJsApi.activiti.reportApi.deleteReport(reportId).then(function () {
            done();
        });
    });

});
