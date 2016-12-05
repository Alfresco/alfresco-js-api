'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');
var fakeVariable1 = {
    name: 'variable1',
    value: 'Value 123',
    scope: 'global'
};
var fakeVariable2 = {
    name: 'variable2',
    value: 'Value 456',
    scope: 'local'
};
var fakeVariablesList = [
    fakeVariable1,
    fakeVariable2
];

class ProcessInstanceVariablesMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    addListProcessInstanceVariables200Response(processInstanceId) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(200, fakeVariablesList);
    }

    addListProcessInstanceVariables500Response(processInstanceId) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error'
            });
    }

    addPutProcessInstanceVariables200Response(processInstanceId) {
        nock(this.host, {'encodedQueryParams': true})
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(200, fakeVariablesList);
    }

    addPutProcessInstanceVariables500Response(processInstanceId) {
        nock(this.host, {'encodedQueryParams': true})
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error'
            });
    }

    addPostProcessInstanceVariables200Response(processInstanceId) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(200, fakeVariablesList);
    }

    addPostProcessInstanceVariables500Response(processInstanceId) {
        nock(this.host, {'encodedQueryParams': true})
            .post('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error'
            });
    }

    addGetProcessInstanceVariable200Response(processInstanceId, variableName) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(200, fakeVariable1);
    }

    addGetProcessInstanceVariable500Response(processInstanceId, variableName) {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error'
            });
    }

    addUpdateProcessInstanceVariable200Response(processInstanceId, variableName) {
        nock(this.host, {'encodedQueryParams': true})
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(200, fakeVariable1);
    }

    addUpdateProcessInstanceVariable500Response(processInstanceId, variableName) {
        nock(this.host, {'encodedQueryParams': true})
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error'
            });
    }

    addDeleteProcessInstanceVariable200Response(processInstanceId, variableName) {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(200);
    }

    addDeleteProcessInstanceVariable500Response(processInstanceId, variableName) {
        nock(this.host, {'encodedQueryParams': true})
            .delete('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error'
            });
    }

}

module.exports = ProcessInstanceVariablesMock;
