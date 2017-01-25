'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

var fakeReportList = [
    {'id': 11011, 'name': 'Process definition heat map'},
    {'id': 11012, 'name': 'Process definition overview'},
    {'id': 11013, 'name': 'Process instances overview'},
    {'id': 11014, 'name': 'Task overview'},
    {'id': 11015, 'name': 'Task service level agreement'}
];

var fakeReportParams = {
    'id': 11013,
    'name': 'Process instances overview',
    'created': '2016-12-07T13:26:40.095+0000',
    'definition':
    '{\"parameters\":[{\"id\":\"processDefinitionId\",\"name\":null,\"nameKey\":\"REPORTING.DEFAULT-REPORTS.PROCESS-INSTANCES-OVERVIEW.PROCESS-DEFINITION\",\"type\":\"processDefinition\",\"value\":null,\"dependsOn\":null},' +
    '{\"id\":\"dateRange\",\"name\":null,\"nameKey\":\"REPORTING.DEFAULT-REPORTS.PROCESS-INSTANCES-OVERVIEW.DATE-RANGE\",\"type\":\"dateRange\",\"value\":null,\"dependsOn\":null},' +
    '{\"id\":\"slowProcessInstanceInteger\",\"name\":null,\"nameKey\":\"REPORTING.DEFAULT-REPORTS.PROCESS-INSTANCES-OVERVIEW.SLOW-PROC-INST-NUMBER\",\"type\":\"integer\",\"value\":10,\"dependsOn\":null},' +
    '{\"id\":\"status\",\"name\":null,\"nameKey\":\"REPORTING.PROCESS-STATUS\",\"type\":\"status\",\"value\":null,\"dependsOn\":null}' +
    ']}'
};

var fakeChartReports = {
        'elements': [{
            'id': 'id10889073739455',
            'type': 'table',
            'rows': [['__KEY_REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.GENERAL-TABLE-TOTAL-PROCESS-DEFINITIONS', '10'], ['__KEY_REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.GENERAL-TABLE-TOTAL-PROCESS-INSTANCES', '63'], ['__KEY_REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.GENERAL-TABLE-ACTIVE-PROCESS-INSTANCES', '5'], ['__KEY_REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.GENERAL-TABLE-COMPLETED-PROCESS-INSTANCES', '52']],
            'collapseable': false,
            'collapsed': false,
            'showRowIndex': false
        }, {
            'id': 'id10889073934509',
            'type': 'pieChart',
            'title': 'Total process instances overview',
            'titleKey': 'REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.PROC-INST-CHART-TITLE',
            'values': [{'key': 'Activiti', 'y': 13, 'keyAndValue': ['Activiti', '13']}, {
                'key': 'Second Process',
                'y': 5,
                'keyAndValue': ['Second Process', '5']
            }, {'key': 'Process Custom Name', 'y': 3, 'keyAndValue': ['Process Custom Name', '3']}, {
                'key': 'Simple process',
                'y': 29,
                'keyAndValue': ['Simple process', '29']
            }, {'key': 'Third Process', 'y': 7, 'keyAndValue': ['Third Process', '7']}]
        }, {
            'id': 'id10889074082883',
            'type': 'table',
            'title': 'Process definition details',
            'titleKey': 'REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.DETAIL-TABLE',
            'columnNames': ['Process definition', 'Total', 'Active', 'Completed'],
            'columnNameKeys': ['REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.DETAIL-TABLE-PROCESS', 'REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.DETAIL-TABLE-TOTAL', 'REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.DETAIL-TABLE-ACTIVE', 'REPORTING.DEFAULT-REPORTS.PROCESS-DEFINITION-OVERVIEW.DETAIL-TABLE-COMPLETED'],
            'columnsCentered': [false, false, false, false],
            'rows': [['Activiti', '13', '3', '10'], ['Process Custom Name', '3', '0', '3'], ['Second Process', '5', '1', '4'], ['Simple process', '29', '1', '28'], ['Third Process', '7', '0', '7']],
            'collapseable': false,
            'collapsed': false,
            'showRowIndex': true
        }]
    };

var fakeProcessDefinitionsNoApp = [{
    'id': 'Process_sid-0FF10DA3-E2BD-4E6A-9013-6D66FC8A4716:1:30004',
    'name': 'Fake Process Name 1',
    'description': null,
    'key': 'Process_sid-0FF10DA3-E2BD-4E6A-9013-6D66FC8A4716',
    'category': 'http://www.activiti.org/processdef',
    'version': 1,
    'deploymentId': '30001',
    'tenantId': 'tenant_1',
    'metaDataValues': [],
    'hasStartForm': false
}, {
    'id': 'SecondProcess:1:15027',
    'name': 'Fake Process Name 2',
    'description': 'fdsdf',
    'key': 'SecondProcess',
    'category': 'http://www.activiti.org/processdef',
    'version': 1,
    'deploymentId': '15024',
    'tenantId': 'tenant_1',
    'metaDataValues': [],
    'hasStartForm': false
}, {
    'id': 'Simpleprocess:15:10004',
    'name': 'Fake Process Name 3',
    'description': null,
    'key': 'Simpleprocess',
    'category': 'http://www.activiti.org/processdef',
    'version': 15,
    'deploymentId': '10001',
    'tenantId': 'tenant_1',
    'metaDataValues': [],
    'hasStartForm': false
}, {
    'id': 'fruitorderprocess:5:42530',
    'name': 'Fake Process Name 4',
    'description': null,
    'key': 'fruitorderprocess',
    'category': 'http://www.activiti.org/processdef',
    'version': 5,
    'deploymentId': '42527',
    'tenantId': 'tenant_1',
    'metaDataValues': [],
    'hasStartForm': false
}];


class ReportsMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200ResponseCreateDefaulReport() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/rest/reporting/default-reports')
            .reply(200);
    }

    get200ResponseTasksByProcessDefinitionId(reportId, processDefinitionId) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/reporting/report-params/' + reportId + '/tasks')
            .query({processDefinitionId : processDefinitionId})
            .reply(200, ['Fake Task 1', 'Fake Task 2', 'Fake Task 3']);
    }

    get200ResponseReportList() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/reporting/reports')
            .reply(200,  fakeReportList);
    }

    get200ResponseReportParams(reportId) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/reporting/report-params/' + reportId)
            .reply(200,  fakeReportParams);
    }

    get200ResponseReportsByParams(reportId, paramsQuery) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/rest/reporting/report-params/' + reportId, paramsQuery)
            .reply(200, fakeChartReports);
    }

    get200ResponseProcessDefinitions() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/reporting/process-definitions')
            .reply(200, fakeProcessDefinitionsNoApp);
    }

    get200ResponseUpdateReport(reportId) {
        nock(this.host, {'encodedQueryParams': true})
            .put('/activiti-app/app/rest/reporting/reports/' + reportId)
            .reply(200);
    }

    get200ResponseExportReport(reportId) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/rest/reporting/reports/' + reportId + '/export-to-csv')
            .reply(200, 'CSV');
    }

    get200ResponseSaveReport(reportId) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/app/rest/reporting/reports/' + reportId)
            .reply(200);
    }

    get200ResponseDeleteReport(reportId) {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/activiti-app/app/rest/reporting/reports/' + reportId)
            .reply(200);
    }

}

module.exports = ReportsMock;
