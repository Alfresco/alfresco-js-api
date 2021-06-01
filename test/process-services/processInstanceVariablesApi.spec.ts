import { expect } from 'chai';
import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { BpmAuthMock, ProcessInstanceVariablesMock } from '../mockObjects';

describe('Activiti Process Instance Variables Api', () => {
    let authResponseBpmMock: BpmAuthMock;
    let variablesMock: ProcessInstanceVariablesMock;
    let alfrescoJsApi: AlfrescoApi;

    const NOOP = () => {/* empty */};

    beforeEach(async () => {
        const BPM_HOST = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(BPM_HOST);
        variablesMock = new ProcessInstanceVariablesMock(BPM_HOST);

        authResponseBpmMock.get200Response();

        alfrescoJsApi = new AlfrescoApi({
            hostBpm: BPM_HOST,
            provider: 'BPM'
        });

        await alfrescoJsApi.login('admin', 'admin');
    });

    describe('get variables', () => {

        it('should return all variables for a process instance', (done) => {
            const processInstanceId = '111';
            variablesMock.addListProcessInstanceVariables200Response(processInstanceId);

            alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariables(processInstanceId).then((data) => {
                expect(data.length).equal(2);
                done();
            });
        });

        it('should emit an error when API returns an error response', (done) => {
            const processInstanceId = '111';
            variablesMock.addListProcessInstanceVariables500Response(processInstanceId);

            alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariables(processInstanceId).then(
                NOOP,
                (error) => {
                    expect(error.status).equal(500);
                    expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                    done();
                }
            );
        });

    });

    describe('create variables', () => {

        it('should return all variables for a process instance', (done) => {
            const processInstanceId = '111';
            variablesMock.addPostProcessInstanceVariables200Response(processInstanceId);

            alfrescoJsApi.activiti.processInstanceVariablesApi.createProcessInstanceVariables(processInstanceId, []).then((data) => {
                expect(data.length).equal(2);
                done();
            });
        });

        it('should emit an error when API returns an error response', (done) => {
            const processInstanceId = '111';
            variablesMock.addPostProcessInstanceVariables500Response(processInstanceId);

            alfrescoJsApi.activiti.processInstanceVariablesApi.createProcessInstanceVariables(processInstanceId, []).then(
                NOOP,
                (error) => {
                    expect(error.status).equal(500);
                    expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                    done();
                }
            );
        });

    });

    describe('create or update variables', () => {

        it('should return all variables for a process instance', (done) => {
            const processInstanceId = '111';
            variablesMock.addPutProcessInstanceVariables200Response(processInstanceId);

            alfrescoJsApi.activiti.processInstanceVariablesApi.createOrUpdateProcessInstanceVariables(processInstanceId, []).then((data) => {
                expect(data.length).equal(2);
                done();
            });
        });

        it('should emit an error when API returns an error response', (done) => {
            const processInstanceId = '111';
            variablesMock.addPutProcessInstanceVariables500Response(processInstanceId);

            alfrescoJsApi.activiti.processInstanceVariablesApi.createOrUpdateProcessInstanceVariables(processInstanceId, []).then(
                NOOP,
                (error) => {
                    expect(error.status).equal(500);
                    expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                    done();
                }
            );
        });

    });

    describe('get variable', () => {

        it('should call API to get variable', (done) => {
            const processInstanceId = '111';
            const variableName = 'var1';
            variablesMock.addGetProcessInstanceVariable200Response(processInstanceId, variableName);

            alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariable(processInstanceId, variableName).then(
                (data) => {
                    expect(data.name).equal('variable1');
                    expect(data.value).equal('Value 123');
                    done();
                },
                () => {
                    done();
                }
            );
        });

        it('should emit an error when API returns an error response', (done) => {
            const processInstanceId = '111';
            const variableName = 'var1';
            variablesMock.addGetProcessInstanceVariable500Response(processInstanceId, variableName);

            alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariable(processInstanceId, variableName).then(
                NOOP,
                (error) => {
                    expect(error.status).equal(500);
                    expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                    done();
                }
            );
        });

    });

    describe('update variable', () => {

        it('should call API to update variable', (done) => {
            const processInstanceId = '111';
            const variableName = 'var1';
            variablesMock.addUpdateProcessInstanceVariable200Response(processInstanceId, variableName);

            alfrescoJsApi.activiti.processInstanceVariablesApi.updateProcessInstanceVariable(processInstanceId, variableName, {}).then(() => {
                done();
            });
        });

        it('should emit an error when API returns an error response', (done) => {
            const processInstanceId = '111';
            const variableName = 'var1';
            variablesMock.addUpdateProcessInstanceVariable500Response(processInstanceId, variableName);

            alfrescoJsApi.activiti.processInstanceVariablesApi.updateProcessInstanceVariable(processInstanceId, variableName, {}).then(
                NOOP,
                (error) => {
                    expect(error.status).equal(500);
                    expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                    done();
                }
            );
        });

    });

    describe('delete variable', () => {

        it('should call API to delete variables', (done) => {
            const processInstanceId = '111';
            const variableName = 'var1';
            variablesMock.addDeleteProcessInstanceVariable200Response(processInstanceId, variableName);

            alfrescoJsApi.activiti.processInstanceVariablesApi.deleteProcessInstanceVariable(processInstanceId, variableName).then(() => {
                done();
            });
        });

        it('should emit an error when API returns an error response', (done) => {
            const processInstanceId = '111';
            const variableName = 'var1';
            variablesMock.addDeleteProcessInstanceVariable500Response(processInstanceId, variableName);

            alfrescoJsApi.activiti.processInstanceVariablesApi.deleteProcessInstanceVariable(processInstanceId, variableName).then(
                NOOP,
                (error) => {
                    expect(error.status).equal(500);
                    expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                    done();
                }
            );
        });

    });

});
