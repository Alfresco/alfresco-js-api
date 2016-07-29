'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class TasksMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200Response() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/api/enterprise/tasks/query', {})
            .reply(200, {
                'size': 2,
                'total': 2,
                'start': 0,
                'data': [{
                    'id': '38',
                    'name': null,
                    'description': null,
                    'category': null,
                    'assignee': {
                        'id': 1,
                        'firstName': null,
                        'lastName': 'Administrator',
                        'email': 'admin@app.activiti.com'
                    },
                    'created': '2016-07-26T15:30:58.368+0000',
                    'dueDate': null,
                    'endDate': null,
                    'duration': null,
                    'priority': 50,
                    'parentTaskId': null,
                    'parentTaskName': null,
                    'processInstanceId': '33',
                    'processInstanceName': null,
                    'processDefinitionId': 'ProcessTestApi:1:32',
                    'processDefinitionName': 'Process Test Api',
                    'processDefinitionDescription': null,
                    'processDefinitionKey': 'ProcessTestApi',
                    'processDefinitionCategory': 'http://www.activiti.org/processdef',
                    'processDefinitionVersion': 1,
                    'processDefinitionDeploymentId': '29',
                    'formKey': null,
                    'processInstanceStartUserId': null,
                    'initiatorCanCompleteTask': false,
                    'adhocTaskCanBeReassigned': false,
                    'taskDefinitionKey': 'sid-E6C102D3-F101-47AE-8D39-B7FD17F38FE9',
                    'executionId': '33',
                    'memberOfCandidateGroup': false,
                    'memberOfCandidateUsers': false,
                    'managerOfCandidateGroup': false
                }, {
                    'id': '44',
                    'name': null,
                    'description': null,
                    'category': null,
                    'assignee': {
                        'id': 1,
                        'firstName': null,
                        'lastName': 'Administrator',
                        'email': 'admin@app.activiti.com'
                    },
                    'created': '2016-07-26T15:31:00.415+0000',
                    'dueDate': null,
                    'endDate': null,
                    'duration': null,
                    'priority': 50,
                    'parentTaskId': null,
                    'parentTaskName': null,
                    'processInstanceId': '39',
                    'processInstanceName': null,
                    'processDefinitionId': 'ProcessTestApi:1:32',
                    'processDefinitionName': 'Process Test Api',
                    'processDefinitionDescription': null,
                    'processDefinitionKey': 'ProcessTestApi',
                    'processDefinitionCategory': 'http://www.activiti.org/processdef',
                    'processDefinitionVersion': 1,
                    'processDefinitionDeploymentId': '29',
                    'formKey': null,
                    'processInstanceStartUserId': null,
                    'initiatorCanCompleteTask': false,
                    'adhocTaskCanBeReassigned': false,
                    'taskDefinitionKey': 'sid-E6C102D3-F101-47AE-8D39-B7FD17F38FE9',
                    'executionId': '39',
                    'memberOfCandidateGroup': false,
                    'memberOfCandidateUsers': false,
                    'managerOfCandidateGroup': false
                }]
            });

    }
}

module.exports = TasksMock;
