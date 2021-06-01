import nock from 'nock';
import { BaseMock } from '../base.mock';

const fakeVariable1 = {
    name: 'variable1',
    value: 'Value 123',
    scope: 'global',
};

const fakeVariable2 = {
    name: 'variable2',
    value: 'Value 456',
    scope: 'local',
};

const fakeVariablesList = [fakeVariable1, fakeVariable2];

export class ProcessInstanceVariablesMock extends BaseMock {
    constructor(host?: string) {
        super(host);
    }

    addListProcessInstanceVariables200Response(processInstanceId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(200, fakeVariablesList);
    }

    addListProcessInstanceVariables500Response(processInstanceId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error',
            });
    }

    addPutProcessInstanceVariables200Response(processInstanceId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(200, fakeVariablesList);
    }

    addPutProcessInstanceVariables500Response(processInstanceId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error',
            });
    }

    addPostProcessInstanceVariables200Response(processInstanceId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(200, fakeVariablesList);
    }

    addPostProcessInstanceVariables500Response(processInstanceId: string): void {
        nock(this.host, { encodedQueryParams: true })
            .post('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables')
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error',
            });
    }

    addGetProcessInstanceVariable200Response(processInstanceId: string, variableName: string): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(200, fakeVariable1);
    }

    addGetProcessInstanceVariable500Response(processInstanceId: string, variableName: string): void {
        nock(this.host, { encodedQueryParams: true })
            .get('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error',
            });
    }

    addUpdateProcessInstanceVariable200Response(processInstanceId: string, variableName: string): void {
        nock(this.host, { encodedQueryParams: true })
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(200, fakeVariable1);
    }

    addUpdateProcessInstanceVariable500Response(processInstanceId: string, variableName: string): void {
        nock(this.host, { encodedQueryParams: true })
            .put('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error',
            });
    }

    addDeleteProcessInstanceVariable200Response(processInstanceId: string, variableName: string): void {
        nock(this.host, { encodedQueryParams: true })
            .delete('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(200);
    }

    addDeleteProcessInstanceVariable500Response(processInstanceId: string, variableName: string): void {
        nock(this.host, { encodedQueryParams: true })
            .delete('/activiti-app/api/enterprise/process-instances/' + processInstanceId + '/variables/' + variableName)
            .reply(500, {
                messageKey: 'UNKNOWN',
                message: 'Unknown error',
            });
    }
}
