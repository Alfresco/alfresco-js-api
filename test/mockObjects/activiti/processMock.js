'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class ProcessMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/api/enterprise/process-instances/query', {
                'page': 0,
                'sort': 'created-desc',
                'state': 'all'
            })
            .reply(200, {
                'size': 2,
                'total': 2,
                'start': 0,
                'data': [{
                    'id': '39',
                    'name': 'Process Test Api - July 26th 2016',
                    'businessKey': null,
                    'processDefinitionId': 'ProcessTestApi:1:32',
                    'tenantId': 'tenant_1',
                    'started': '2016-07-26T15:31:00.414+0000',
                    'ended': null,
                    'startedBy': {
                        'id': 1,
                        'firstName': null,
                        'lastName': 'Administrator',
                        'email': 'admin@app.activiti.com'
                    },
                    'processDefinitionName': 'Process Test Api',
                    'processDefinitionDescription': null,
                    'processDefinitionKey': 'ProcessTestApi',
                    'processDefinitionCategory': 'http://www.activiti.org/processdef',
                    'processDefinitionVersion': 1,
                    'processDefinitionDeploymentId': '29',
                    'graphicalNotationDefined': true,
                    'startFormDefined': false,
                    'suspended': false,
                    'variables': []
                }, {
                    'id': '33',
                    'name': 'Process Test Api - July 26th 2016',
                    'businessKey': null,
                    'processDefinitionId': 'ProcessTestApi:1:32',
                    'tenantId': 'tenant_1',
                    'started': '2016-07-26T15:30:58.367+0000',
                    'ended': null,
                    'startedBy': {
                        'id': 1,
                        'firstName': null,
                        'lastName': 'Administrator',
                        'email': 'admin@app.activiti.com'
                    },
                    'processDefinitionName': 'Process Test Api',
                    'processDefinitionDescription': null,
                    'processDefinitionKey': 'ProcessTestApi',
                    'processDefinitionCategory': 'http://www.activiti.org/processdef',
                    'processDefinitionVersion': 1,
                    'processDefinitionDeploymentId': '29',
                    'graphicalNotationDefined': true,
                    'startFormDefined': false,
                    'suspended': false,
                    'variables': []
                }]
            });
    }

}

module.exports = ProcessMock;
