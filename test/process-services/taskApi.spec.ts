import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { SaveFormRepresentation } from '../../src/api/activiti-rest-api/model/saveFormRepresentation';
import { TaskFilterRequestRepresentation } from '../../src/api/activiti-rest-api/model/taskFilterRequestRepresentation';
import { TaskRepresentation } from '../../src/api/activiti-rest-api/model/taskRepresentation';
import { CompleteFormRepresentation } from '../../src/api/activiti-rest-api/model/completeFormRepresentation';
import { TaskQueryRepresentation } from '../../src/api/activiti-rest-api/model/taskQueryRepresentation';

let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let TasksMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Tasks;

describe('Activiti Task Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.tasksMock = new TasksMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Task list', function (done) {
        this.tasksMock.get200Response();

        let requestNode = new TaskQueryRepresentation();

        this.alfrescoJsApi.activiti.taskApi.listTasks(requestNode).then((data: any) => {
            expect(data.data[0].processDefinitionName).equal('Process Test Api');
            expect(data.data[1].processDefinitionName).equal('Process Test Api');
            expect(data.size).equal(2);
            done();
        });
    });

    it('get Task', function (done) {
        this.tasksMock.get200ResponseGetTask(10);

        this.alfrescoJsApi.activiti.taskApi.getTask(10).then((data: any) => {
            expect(data.name).equal('Upload Document');
            done();
        });
    });

    it('bad filter Tasks', function (done) {
        this.tasksMock.get400TaskFilter();

        let requestNode = new TaskFilterRequestRepresentation();

        this.alfrescoJsApi.activiti.taskApi.filterTasks(requestNode).then(() => {
        },                                                                () => {
            done();
        });
    });

    it('filter Tasks', function (done) {
        this.tasksMock.get200TaskFilter();

        let requestNode = new TaskFilterRequestRepresentation();
        requestNode.appDefinitionId = 1;

        this.alfrescoJsApi.activiti.taskApi.filterTasks(requestNode).then((data: any) => {
            expect(data.size).equal(2);
            expect(data.data[0].id).equal('7506');
            done();
        },                                                                (error: any) => {
            console.log(JSON.stringify(error));
        });
    });

    it('complete Task not found', function (done) {
        let taskId = 200;
        this.tasksMock.get404CompleteTask(taskId);

        this.alfrescoJsApi.activiti.taskApi.completeTask(taskId).then(() => {
        },                                                            () => {
            done();
        });

    });

    it('complete Task ', function (done) {
        let taskId = 5006;

        this.tasksMock.put200GenericResponse('/activiti-app/api/enterprise/tasks/5006/action/complete');

        this.alfrescoJsApi.activiti.taskApi.completeTask(taskId).then(() => {
            done();
        });
    });

    it.skip('Complete a Task Form', function (done) {
        let taskId = 2518;

        this.tasksMock.rec();

        let completeTaskFormRepresentation = new CompleteFormRepresentation();
        this.alfrescoJsApi.activiti.taskApi.completeTaskForm(taskId, completeTaskFormRepresentation).then(() => {
            done();
        });
        this.tasksMock.play();
    });

    it('Create a Task', function (done) {

        let taskName = 'test-name';

        this.tasksMock.get200CreateTask(taskName);

        let taskRepresentation = new TaskRepresentation(); // TaskRepresentation | taskRepresentation

        taskRepresentation.name = taskName;

        this.alfrescoJsApi.activiti.taskApi.createNewTask(taskRepresentation).then(() => {
            done();
        });
    });

    it.skip('Save task form', function (done) {

        let taskId = 5006;

        let saveTaskFormRepresentation = new SaveFormRepresentation();

        this.alfrescoJsApi.activiti.taskApi.saveTaskForm(taskId, saveTaskFormRepresentation).then(() => {
            done();
        });
    });

    it('Get task form', function (done) {
        this.tasksMock.get200getTaskForm();

        let taskId = 2518;

        this.alfrescoJsApi.activiti.taskApi.getTaskForm(taskId).then((data: any) => {
            expect(data.name).equal('Metadata');
            expect(data.fields[0].name).equal('Label');
            expect(data.fields[0].fieldType).equal('ContainerRepresentation');
            done();
        });
    });

    it('Get getRestFieldValuesColumn ', function (done) {
        this.tasksMock.get200getTaskForm();

        let taskId = 2518;

        this.alfrescoJsApi.activiti.taskApi.getTaskForm(taskId).then((data: any) => {
            expect(data.name).equal('Metadata');
            expect(data.fields[0].name).equal('Label');
            expect(data.fields[0].fieldType).equal('ContainerRepresentation');
            done();
        });
    });

    it('get form field values that are populated through a REST backend', function (done) {
        this.tasksMock.get200getRestFieldValuesColumn();

        let taskId = '1'; // String | taskId
        let field = 'label'; // String | field
        let column = 'user'; // String | column

        this.alfrescoJsApi.activiti.taskApi.getRestFieldValuesColumn(taskId, field, column).then(() => {
            done();
        },                                                                                       (error: any) => {
            console.log(error);
        });
    });

    it('get form field values that are populated through a REST backend Specific case to retrieve information on a specific column', function (done) {
        this.tasksMock.get200getRestFieldValues();

        let taskId = '2'; // String | taskId
        let field = 'label'; // String | field

        this.alfrescoJsApi.activiti.taskApi.getRestFieldValues(taskId, field).then(() => {
            done();
        },                                                                         (error: any) => {
            console.log(error);
        });
    });
});
