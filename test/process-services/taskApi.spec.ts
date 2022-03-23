import { expect } from 'chai';
import { AlfrescoApiCompatibility as AlfrescoApi, TaskFilterRequestRepresentation, TaskRepresentation, TaskQueryRequestRepresentation, AlfrescoApiConfig } from  '../../index';
import { BpmAuthMock, TasksMock } from '../mockObjects';
describe('Activiti Task Api', () => {
    let authResponseBpmMock: BpmAuthMock;
    let tasksMock: TasksMock;
    let alfrescoJsApi: AlfrescoApi;

    const NOOP = () => {/* empty */};

    beforeEach(async () => {
        const BPM_HOST = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(BPM_HOST);
        tasksMock = new TasksMock(BPM_HOST);

        authResponseBpmMock.get200Response();

        alfrescoJsApi = new AlfrescoApi({
            hostBpm: BPM_HOST,
            provider: 'BPM'
        } as AlfrescoApiConfig);

        await alfrescoJsApi.login('admin', 'admin');
    });

    it('get Task list', async () => {
        tasksMock.get200Response();

        const requestNode = new TaskQueryRequestRepresentation();
        const data = await alfrescoJsApi.activiti.taskApi.listTasks(requestNode)

        expect(data.data[0].processDefinitionName).equal('Process Test Api');
        expect(data.data[1].processDefinitionName).equal('Process Test Api');
        expect(data.size).equal(2);
    });

    it('get Task', async () => {
        tasksMock.get200ResponseGetTask('10');

        const data = await alfrescoJsApi.activiti.taskApi.getTask('10');
        expect(data.name).equal('Upload Document');
    });

    it('bad filter Tasks', (done) => {
        tasksMock.get400TaskFilter();

        const requestNode = new TaskFilterRequestRepresentation();

        alfrescoJsApi.activiti.taskApi.filterTasks(requestNode).then(NOOP, () => {
            done();
        });
    });

    it('filter Tasks', async () => {
        tasksMock.get200TaskFilter();

        const requestNode = new TaskFilterRequestRepresentation();
        requestNode.appDefinitionId = 1;

        const data = await alfrescoJsApi.activiti.taskApi.filterTasks(requestNode)
        expect(data.size).equal(2);
        expect(data.data[0].id).equal('7506');
    });

    it('complete Task not found', (done) => {
        const taskId = '200';
        tasksMock.get404CompleteTask(taskId);

        alfrescoJsApi.activiti.taskApi.completeTask(taskId).then(NOOP, () => {
            done();
        });

    });

    it('complete Task ', async () => {
        const taskId = '5006';

        tasksMock.put200GenericResponse('/activiti-app/api/enterprise/tasks/5006/action/complete');

        await alfrescoJsApi.activiti.taskApi.completeTask(taskId);
    });

    it('Create a Task', async () => {
        const taskName = 'test-name';

        tasksMock.get200CreateTask(taskName);

        const taskRepresentation = new TaskRepresentation();
        taskRepresentation.name = taskName;

        await alfrescoJsApi.activiti.taskApi.createNewTask(taskRepresentation);
    });

    it('Get task form', async () => {
        tasksMock.get200getTaskForm();

        const taskId = '2518';
        const data = await alfrescoJsApi.activiti.taskApi.getTaskForm(taskId);

        expect(data.name).equal('Metadata');
        expect(data.fields[0].name).equal('Label');
        expect(data.fields[0].fieldType).equal('ContainerRepresentation');
    });

    it('Get getRestFieldValuesColumn ', async () => {
        tasksMock.get200getTaskForm();

        const taskId = '2518';
        const data = await alfrescoJsApi.activiti.taskApi.getTaskForm(taskId);

        expect(data.name).equal('Metadata');
        expect(data.fields[0].name).equal('Label');
        expect(data.fields[0].fieldType).equal('ContainerRepresentation');
    });

    it('get form field values that are populated through a REST backend', async () => {
        tasksMock.get200getRestFieldValuesColumn();

        const taskId = '1';
        const field = 'label';
        const column = 'user';

        await alfrescoJsApi.activiti.taskApi.getRestFieldValuesColumn(taskId, field, column);
    });

    it('get form field values that are populated through a REST backend Specific case to retrieve information on a specific column', async () => {
        tasksMock.get200getRestFieldValues();

        const taskId = '2';
        const field = 'label';

        await alfrescoJsApi.activiti.taskApi.getRestFieldValues(taskId, field);
    });
});
