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

    get200ResponseGetTask(taskId) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/tasks/' + taskId)
            .reply(200, {
                'id': '10',
                'name': 'Upload Document',
                'description': null,
                'category': null,
                'assignee': {'id': 1, 'firstName': null, 'lastName': 'Administrator', 'email': 'admin'},
                'created': '2016-08-05T17:39:36.159+0000',
                'dueDate': null,
                'endDate': null,
                'duration': null,
                'priority': 50,
                'parentTaskId': null,
                'parentTaskName': null,
                'processInstanceId': '5',
                'processInstanceName': null,
                'processDefinitionId': 'Sales:1:4',
                'processDefinitionName': 'Sales',
                'processDefinitionDescription': null,
                'processDefinitionKey': 'Sales',
                'processDefinitionCategory': 'http://www.activiti.org/processdef',
                'processDefinitionVersion': 1,
                'processDefinitionDeploymentId': '1',
                'formKey': '1',
                'processInstanceStartUserId': '1',
                'initiatorCanCompleteTask': true,
                'adhocTaskCanBeReassigned': false,
                'taskDefinitionKey': 'sid-58C42FE9-EDAC-4F7B-B36B-F13DF0A8CE70',
                'executionId': '5',
                'involvedPeople': [],
                'memberOfCandidateGroup': false,
                'memberOfCandidateUsers': false,
                'managerOfCandidateGroup': false
            });
    }

    get400TaskFilter() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/api/enterprise/tasks/filter', {})
            .reply(400, {
                'message': 'A valid filterId or filter params must be provided',
                'messageKey': 'GENERAL.ERROR.BAD-REQUEST'
            });
    }

    get200TaskFilter() {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/api/enterprise/tasks/filter', {'filter': {}, 'appDefinitionId': 1})
            .reply(200, {
                'size': 2,
                'total': 2,
                'start': 0,
                'data': [{
                    'id': '7506',
                    'name': 'Upload Document',
                    'description': null,
                    'category': null,
                    'assignee': {'id': 1, 'firstName': null, 'lastName': 'Administrator', 'email': 'admin'},
                    'created': '2016-08-12T15:37:50.963+0000',
                    'dueDate': null,
                    'endDate': null,
                    'duration': null,
                    'priority': 50,
                    'parentTaskId': null,
                    'parentTaskName': null,
                    'processInstanceId': '7501',
                    'processInstanceName': null,
                    'processDefinitionId': 'Sales:1:4',
                    'processDefinitionName': 'Sales',
                    'processDefinitionDescription': null,
                    'processDefinitionKey': 'Sales',
                    'processDefinitionCategory': 'http://www.activiti.org/processdef',
                    'processDefinitionVersion': 1,
                    'processDefinitionDeploymentId': '1',
                    'formKey': '1',
                    'processInstanceStartUserId': null,
                    'initiatorCanCompleteTask': false,
                    'adhocTaskCanBeReassigned': false,
                    'taskDefinitionKey': 'sid-58C42FE9-EDAC-4F7B-B36B-F13DF0A8CE70',
                    'executionId': '7501',
                    'memberOfCandidateGroup': false,
                    'memberOfCandidateUsers': false,
                    'managerOfCandidateGroup': false
                }, {
                    'id': '5006',
                    'name': 'Upload Document',
                    'description': null,
                    'category': null,
                    'assignee': {'id': 1, 'firstName': null, 'lastName': 'Administrator', 'email': 'admin'},
                    'created': '2016-08-10T09:39:36.837+0000',
                    'dueDate': null,
                    'endDate': null,
                    'duration': null,
                    'priority': 50,
                    'parentTaskId': null,
                    'parentTaskName': null,
                    'processInstanceId': '5001',
                    'processInstanceName': null,
                    'processDefinitionId': 'Sales:1:4',
                    'processDefinitionName': 'Sales',
                    'processDefinitionDescription': null,
                    'processDefinitionKey': 'Sales',
                    'processDefinitionCategory': 'http://www.activiti.org/processdef',
                    'processDefinitionVersion': 1,
                    'processDefinitionDeploymentId': '1',
                    'formKey': '1',
                    'processInstanceStartUserId': null,
                    'initiatorCanCompleteTask': false,
                    'adhocTaskCanBeReassigned': false,
                    'taskDefinitionKey': 'sid-58C42FE9-EDAC-4F7B-B36B-F13DF0A8CE70',
                    'executionId': '5001',
                    'memberOfCandidateGroup': false,
                    'memberOfCandidateUsers': false,
                    'managerOfCandidateGroup': false
                }]
            });
    }

    get404CompleteTask(taskid) {
        nock(this.host, {'encodedQueryParams': true})
            .put('/activiti-app/api/enterprise/tasks/' + taskid + '/action/complete')
            .reply(404, {
                'message': 'Task with id: ' + taskid + ' does not exist',
                'messageKey': 'GENERAL.ERROR.NOT-FOUND'
            });

    }
}

module.exports = TasksMock;
