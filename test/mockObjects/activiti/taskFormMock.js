'use strict';

var nock = require('nock');
var BaseMock = require('../baseMock');

class TaskFormMock extends BaseMock {

    constructor(host) {
        super(host);
    }

    get200getTaskFormVariables() {
        nock(this.host, {'encodedQueryParams': true})
            .get('/activiti-app/app/rest/task-forms/5028/variables')
            .reply(200, [{'id': 'initiator', 'type': 'string', 'value': '1001'}]);

    }
}

module.exports = TaskFormMock;
